import React, { useEffect, useState } from 'react';
import * as Realm from 'realm-web';

const Products = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const functionName = "getAllProducts";
      const result = await app.currentUser.callFunction(functionName);
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId, index) => {
    try {
      const functionName = "AddToCart";
      const args = [productId, app.currentUser.id];
      // Set loading state for the specific product
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = { ...updatedProducts[index], addingToCart: true };
        return updatedProducts;
      });
      
      await app.currentUser.callFunction(functionName, ...args);

      // Update state after successful addToCart
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = { ...updatedProducts[index], addingToCart: false };
        return updatedProducts;
      });
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error, show an error message to the user if needed
      // You might also want to reset the loading state for the specific product in case of an error
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[index] = { ...updatedProducts[index], addingToCart: false };
        return updatedProducts;
      });
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
    <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
  
    {loading && <p className="text-center">Đợi xíu nha...</p>}
    
    {products?.length > 0 && (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product, index) => (
          <li key={product._id} className="bg-white rounded shadow p-4 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-700 mb-2">Cách in: {product.productType}</p>
            <p className="text-gray-700 mb-2">Giá: ${product.sellingPrice}</p>
            <p className="text-gray-700 mb-2">Số lượng: {product.quantity}</p>
            <button
              onClick={() => handleAddToCart(product._id, index)}
              disabled={product.addingToCart}
              className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ${product.addingToCart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
              {product.addingToCart ? 'Đang thêm vô giỏ hàng...' : 'Thêm vào giỏ hàng'}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default Products;
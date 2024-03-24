import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "@rjsf/core";
import './Myform.css'; // Import file CSS
import  validator from '@rjsf/validator-ajv8';
import * as Realm from 'realm-web';
import Modal from '../components/Modal';

const MyForm = () => {
    const app = new Realm.App({ id: process.env.REACT_APP_KEY });
    const [user,setUser]= useState([])
    const [newQuantities, setNewQuantities] = useState({});
    const [jsonSchema, setjsonSchema] = useState([]);
    const [uiSchema, setuiSchema] = useState([]);
    const [output, setOutput]= useState([])
    const [loading, setLoading] = useState(true);
    const [cart,setCart]=useState([])
    const [openForm,setOpenForm]=useState(false)
    const [input,setInput]= useState([])
    const [isOpen2, setIsOpen2] = useState(false);
    const [message2, setMessage2] = useState([]);
    const [val, setVal] = useState(null);
    const navigate = useNavigate();
     useEffect(()=>{
      refreshAccessToken()
    },[])
    const refreshAccessToken = async()=>{
      try {
        if(!app.currentUser?.accessToken) {navigate('/inan-rjsf/login');}
        await app?.currentUser?.refreshAccessToken()
        
        setUser(app?.currentUser)
      } catch (error) {
        if(!app.currentUser?.accessToken) {navigate('/inan-rjsf/login');}
      }
    }
    const fetchData = async () => {
   
        try {
           
                const functionName = "form";
                const findCart = await app?.currentUser?.callFunction(functionName);
                const cart= await app.currentUser.refreshCustomData()
                setCart(cart)
                  console.log(cart)
                setOutput(findCart[0]?.public?.output?.jsonData)
                  setInput(findCart[0]?.public?.input?.jsonData)
                setjsonSchema(findCart[0]?.public?.input?.jsonSchema);
                setuiSchema(findCart[0]?.public?.input?.uiSchema);

                setLoading(false);
            
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    useEffect( () => {
 
        fetchData()
    },[]); // Add dependencies

  const onSubmit = async ({ formData }) => {
const FunctionName = 'QueryProducts';
const args=[formData,app?.currentUser?.id]
if (formData) {
try {
 
 const result=  await app?.currentUser?.callFunction(FunctionName,...args);
fetchData()
   setIsOpen2(true)
   setMessage2(result?.message)
   setVal(0)
   setOpenForm(false)

} catch (error) {
  console.log(error)
}
}else{
  fetchData()
}
          

  };
  const handleAddProduct = async(product)=>{
    const funtionName="AddToCart"
    const args= [product,app?.currentUser?.id]
    console.log("add products",product)
    try {
      const response = await app.currentUser.callFunction(funtionName, ...args)
      setIsOpen2(true)
      setMessage2(response.message) 
      console.log(response)
      setVal(0)
      fetchData()
    } catch (error) {
      setIsOpen2(true)
      setMessage2(error.error) 
    }
  }
  const handleRemoveProduct = async(product)=>{
    const funtionName="DeleProduct"
    const args= [app?.currentUser?.id,product._id.$oid]
    console.log("add products",product)
    try {
      const response = await app.currentUser.callFunction(funtionName, ...args)
      setIsOpen2(true)
      setMessage2(response.message) 
      setVal(0)
      fetchData()
    } catch (error) {
      console.log(error.error)
    }
  }
  const handleQuantityChange = async (e, productId) => {
    const newValue = parseInt(e.target.value, 10);
  setNewQuantities({ ...newQuantities, [productId]: newValue });
   const functionName="updateCart"
   const args=[app?.currentUser?.id,productId,newValue]
 
   try {
    const response = await app?.currentUser?.callFunction(functionName,...args)
  
    if(response.message!=='Quantity updated successfully'){
      setIsOpen2(true)
      setMessage2(response.message) 
      setVal(0)
      setNewQuantities({ ...newQuantities, [productId]: 1 });
    }
   } catch (error) {
    setIsOpen2(true)
        setMessage2(error.error) 
        setVal(0)
   }
  }
  const handleBuy = async()=>{
    for (let i = 0; i < cart.cart.length; i++) {

      setNewQuantities({ ...newQuantities, [cart.cart[i]._id.$oid]: 1 });
    }
         const functionName="ToTempCart"
  
       const args=[cart, cart?.cart]
       try {
       const result= await app.currentUser.callFunction(functionName,...args)
      setIsOpen2(true)
      setMessage2(result.message) 
      setVal(0)
        fetchData()
     
       } catch (error) {
      
        setIsOpen2(true)
        setMessage2(error.error) 
        setVal(0)
       }
  }
  const closeModal = ()=>{

    setIsOpen2(false)
  }
  return (
    <>
    {loading ? (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    ) : (
      <>
        <div className="flex justify-center">
        {user && (
  <>
    {openForm ? (
     <Form
     className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
     validator={validator}
     schema={jsonSchema}
     uiSchema={uiSchema}
     onSubmit={onSubmit}
   />
    ) : (
      <button
      onClick={() => setOpenForm(true)}
      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transform transition duration-300 ease-in-out hover:scale-105"
    >
      Mở Form
    </button>
    
    
    )}
  </>
)}

        
        </div>
        {Array.isArray(output?.products) && output?.products.length > 0 ? (
  <>
  <div className="flex flex-col">
  <h2 className="text-lg font-semibold my-4">Danh sách sản phẩm</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Số lượng trong kho</th>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Giá</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {output?.products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-100 cursor-pointer">
            <td
              className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap"
              onClick={() => handleAddProduct(product)}
              onMouseEnter={(e) => e.target.classList.add("bg-gray-100")}
              onMouseLeave={(e) => e.target.classList.remove("bg-gray-100")}
            >
              {product.productName}
            </td>
            <td className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap">
              {product.quantity}
            </td>
            <td className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap">
              {product.sellingPrice}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  </>
) : (
  <div> <h2 className="text-lg font-semibold my-4">Danh sách sản phẩm</h2> <div className="px-6 py-4 whitespace-nowrap">Không có thông tin</div></div>
)}
{Array.isArray(cart.cart) && cart.cart.length > 0 ? (
  <>
   <div className="flex flex-col">
  <h2 className="text-lg font-semibold my-4">Danh sách sản phẩm trong giỏ hàng</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
          <th scope="col" className="px-2 md:px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Giá</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {cart.cart?.map((product, index) => (
          <tr key={index} className="hover:bg-gray-100 cursor-pointer">
            <td className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap" onClick={() => handleRemoveProduct(product)}>
              {product.productName}
            </td>
            <td className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap">
              <input
                type="number"
                className="border border-gray-300 rounded px-2 py-1"
                value={newQuantities[product._id.$oid] || 1}
                onChange={(e) => handleQuantityChange(e, product._id.$oid)}
              />
            </td>
            <td className="px-2 md:px-6 py-4 md:py-2 whitespace-nowrap">
              {product.sellingPrice.$numberInt} Nghìn đồng
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-end items-center">
    <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Tính tiền</button>
    <p className="py-2">Tổng tiền: {output.TotalPrice} Nghìn đồng</p>
    <button onClick={handleBuy} className="bg-green-500 text-white px-4 py-2 rounded ml-2">Đặt hàng</button>
  </div>
  </div>
</div>

  </>
) : (
  <div>
    <h2 className="text-lg font-semibold my-4">Danh sách sản phẩm trong giỏ hàng</h2>
    <div className="px-6 py-4 whitespace-nowrap">Không có thông tin</div>
  </div>
)}   
      </>
    )}
     
     <Modal isOpen={isOpen2} onClose={closeModal} message={message2} array={0} />
  </>
  
  );
      };  


export default MyForm;

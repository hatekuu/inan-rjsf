import React from 'react';
import ProductForm from './components/AddProductForm';
import * as Realm from 'realm-web';

const AddProduct = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });

  const handleSubmit = async (formData) => {
    try {
      // Handle form data submission
      const functionName = 'addProduct';
      const args = formData.formData;
      console.log(args)
      await app.currentUser.callFunction(functionName, args);

    } catch (error) {
      console.error('Error submitting product form:', error);
    }
  };

  const handleError = (error) => {
    // Handle form errors
    console.error('Product form error:', error);
  };

  return (
    <div>
      <h1>This is the product form</h1>
      <ProductForm onSubmit={handleSubmit} onError={handleError} />
    </div>
  );
};

export default AddProduct;

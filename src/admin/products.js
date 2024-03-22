import React, {  useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './components/AddProductForm';
import * as Realm from 'realm-web';

const AddProduct = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate();
useEffect(()=>{
fetchData();
},[])
const fetchData = async()=>{
    await app.currentUser.refreshAccessToken();
    if(!app?.currentUser?.accessToken){
      navigate('/inan-rjsf/login');
    }
}
  const handleSubmit = async (formData) => {
    if (isLoading) {
      return; // Avoid pressing the button multiple times while processing
    }

    setIsLoading(true);
    try {
      // Handle form data submission
      const functionName = 'addProduct';
      const args = formData?.formData;
      
       const result= await app.currentUser.callFunction(functionName,args);
    
    alert(result.message)
    } catch (error) {
      console.error('Error submitting product form:', error);
    }finally {
      setIsLoading(false);
    }
  };

  const handleError = (error) => {
    // Handle form errors
    console.error('Product form error:', error);
  };

  return (
    <div>
    
      <ProductForm onSubmit={handleSubmit} onError={handleError} isLoading={isLoading} />
    </div>
  );
};

export default AddProduct;

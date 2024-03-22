import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "@rjsf/core";
import './Myform.css'; // Import file CSS
import  validator from '@rjsf/validator-ajv8';
import * as Realm from 'realm-web';
import ArrayFieldTemplate from '../components/ArrayFieldTemplate';
import Modal from '../components/Modal';

const MyForm = () => {
 
    const app = new Realm.App({ id: process.env.REACT_APP_KEY });
    const [products, setProducts] = useState([]);
    const [leng, setLeng] = useState('');
    const [jsonSchema, setjsonSchema] = useState([]);
    const [uiSchema, setuiSchema] = useState([]);
    const [price, setPrice]= useState([])
  const [jsonSchema2 ,setjsonSchema2] = useState([]);
  const [uiSchema2, setuiSchema2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
 const [message2,setMessage2]=useState([])
const [val,setVal]=useState(null)
  const navigate = useNavigate();

  useEffect(() => {
   
    fetchData();
   
  }, [leng]);
  
  const fetchData = async () => {
    try {
      if(!app?.currentUser?.accessToken){
        navigate('/inan-rjsf/login');}
        else{
      await app?.currentUser?.refreshAccessToken();
   
       const functionName = "form";
      const findCart = await app?.currentUser?.callFunction(functionName);
      
      setLeng(findCart[0]?.public?.input?.jsonData?.products?.length)
      setProducts(findCart[0]?.public?.input?.jsonData)
  setjsonSchema(findCart[0]?.public?.input?.jsonSchema)
  setuiSchema(findCart[0]?.public?.input?.uiSchema)
 setjsonSchema2(findCart[0]?.public?.output?.jsonSchema)
 setuiSchema2(findCart[0]?.public?.output?.uiSchema)
setPrice(findCart[0]?.public?.output?.jsonData)
setLoading(false);}
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const onSubmit = async ({ formData }) => {
    const functionName = "updateCart";
    const args = [app?.currentUser?.id, formData?.products];
    try {
     const result= await app.currentUser?.callFunction(functionName, ...args);
     if(result?.message){
      setIsOpen2(true);
      setMessage2(result?.message)
      setVal(1)
     }
     fetchData();
      
    } catch (error) {
      const errorMessage = error.error;
      setIsOpen2(true);
 setMessage2(errorMessage)
 
     
    }
  };
  const onChange = async ({ formData }) => {

        
       const functionName = "updateCart";
       try {
         const args = [app?.currentUser?.id, formData?.products];
          await app?.currentUser?.callFunction(functionName, ...args);
     
       } catch (error) {
         console.log(error);
         
       }
     
  };
  

  const handleClick = async () => {
    console.log("add")
   fetchData()
  
  }
  const handleRemove = async () => {
    console.log("remove")
    fetchData()
  };
  const onSubmit2 = async () => {
    const user = await app.currentUser.refreshCustomData();
    const functionName = "ToTempCart";
    const args = [app?.currentUser?.customData, user?.cart];
    
    try {
      const result=await app?.currentUser?.callFunction(functionName, ...args);
      setIsOpen2(true);
      setMessage2(result?.message)
      setVal(0)
  
      fetchData();
    } catch (error) {
 
      alert(error.error);
      setMessage2(error.error)
      setIsOpen2(true)
    }
  };



  const closeModal = () => {
    setIsOpen2(false);
  };
  return (
    <>
    {loading ? (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    ) : (
      <>
        <div className="flex justify-center">
          <Form
            className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
            formData={products}
            validator={validator}
            schema={jsonSchema}
            uiSchema={uiSchema}
            onSubmit={onSubmit}
            onChange={onChange}
            templates={{
              ArrayFieldTemplate: (props) => (
                <ArrayFieldTemplate
                  {...props}
                  handleClick={handleClick}
                  onReorderClick={(oldIndex, newIndex) => console.log('Reordering item:', oldIndex, newIndex)}
                  handleRemove={handleRemove}
                />
              ),
            }}
          />
        
        </div>
  
        {price?.totalValue !== 0 && (
          <div className="flex justify-center mt-8">
            <Form
              className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
              validator={validator}
              schema={jsonSchema2}
              uiSchema={uiSchema2}
              formData={price}
              onSubmit={onSubmit2}
            />
          </div>
        )}
      </>
    )}
     <div>
     
     <Modal isOpen={isOpen2} onClose={closeModal} message={message2} array={val} />
      

    </div>
  </>
  
  );
      };  


export default MyForm;

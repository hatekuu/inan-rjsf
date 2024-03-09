import React, { useEffect, useState } from 'react';
import Form from "@rjsf/core";
import './Myform.css'; // Import file CSS
import  validator from '@rjsf/validator-ajv8';
import * as Realm from 'realm-web';


const MyForm = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const [products, setProducts] = useState([]);

  const [jsonSchema, setjsonSchema] = useState([]);
  const [uiSchema, setuiSchema] = useState([]);
  const [price, setPrice]= useState([])
const [jsonSchema2 ,setjsonSchema2] = useState([]);
 const [uiSchema2, setuiSchema2] = useState([]);
 const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const functionName = "form";
      const findCart = await app.currentUser.callFunction(functionName,app.currentUser.id);
      setProducts(findCart[0]?.public?.input?.jsonData)
      setjsonSchema(findCart[0]?.public?.input?.jsonSchema)
      setuiSchema(findCart[0]?.public?.input?.uiSchema)
     setjsonSchema2(findCart[0]?.public?.output?.jsonSchema)
     setuiSchema2(findCart[0]?.public?.output?.uiSchema)
    setPrice(findCart[0]?.public?.output?.jsonData)
    setLoading(false);
    

   

 
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };
  const onSubmit = async ({ formData }) => {
  
    const functionName = "updateCart";
    const args=[app.currentUser.id, formData?.products]
    try {
   await app.currentUser.callFunction(functionName, ...args);

  
      fetchData();
       // Handle form submission logic here
    } catch (error) {
      const errorMessage = error.error;
      const uppercasedErrorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    alert(uppercasedErrorMessage);
    }

  };
  const onChange =  async ({ formData }) => {
  //   console.log("Form data submitted:", formData?.products);
    const functionName = "updateCart";
    const args=[app.currentUser.id, formData?.products]
    try {
      
      
   await app.currentUser.callFunction(functionName, ...args);

   console.log(formData.products)
  } catch (error) {
    const errorMessage = error.error;
    const uppercasedErrorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
  alert(uppercasedErrorMessage);
  }
  
  };
  const onSubmit2 = async ( ) => {
    const user= await app.currentUser.refreshCustomData()

    const functionName = "ToTempCart";
    const args=[app.currentUser.customData ,user.cart]
    try {
      
   await app.currentUser.callFunction(functionName, ...args);
  
      fetchData();
       // Handle form submission logic here
    } catch (error) {
      const errorMessage = error.error;
      const uppercasedErrorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    alert(uppercasedErrorMessage);
    }

  };
  // const jsonSchema22 = {
    
 
  // "title": "Product Information",
  // "type": "object",
  // "properties": {
  //   "products": {
  //     "type": "array",
  //     "title": "Sản phẩm",
  //     "items": {
  //       "type": "object",
  //       "properties": {
  //         "productName": {
  //           "type": "string",
  //           "title": "Tên sản phẩm",
           
  //         },
  //         "productType": {
  //           "type": "string",
  //           "title": "Loại"
  //         },
  //         "quantity": {
  //           "type": "number",
  //           "title": "Số lượng",
  //           "minimum": 1,
  //           "maximum": 10,
  //         },
  //         "sellingPrice": {
  //           "type": "number",
  //           "title": "Giá"
  //         }
  //       }
  //     }
  //   },
  
    
  // }}
  
  // const uiSchema = {
  //   "ui:classNames": "my-form",
  //   products: {
  //     "ui:options": {
  //       orderable: false,
  //     },
  //     items: {
  //       "ui:classNames": "inline-field",
  //         productName: { "ui:options": {
  //          readonly:true
  //         }},
  //         productType: { "ui:options": {
  //           readonly:true
  //          }},
  //          sellingPrice: { "ui:options": {
  //           readonly:true
  //          }}
  //     },
  //   },
  //   "ui:submitButtonOptions": {
  //     props: {
  //       className: "sumit",
  //     },
  //     submitText: "Tính tiền",
     
  //   },
  // };
  
  // const jsonSchema2 = {
  //   "title": "TotalPrice",
  //   "type": "object",
  //   "properties": {
  //     "totalValue": {
  //       "type": "number",
  //       "title": "Tổng thành tiền"
  //     },
  //     "items": {
  //       "title": "Mã giảm giá",
  //       "type": "array",
  //       "items": {
  //         "type": "object",
  //         "anyOf": [
  //           {
  //             "properties": {
  //               "foo": {
  //                 "type": "string"
  //               }
  //             }
  //           },
  //           {
  //             "properties": {
  //               "bar": {
  //                 "type": "string"
  //               }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   },
  //   "anyOf": [
  //     {
  //       "title": "Không sử dụng mã giảm giá",
  //       "properties": {
        
  //       }
  //     },
  //     {
  //       "title": "Sử dụng mã giảm giá",
  //       "properties": {
  //         "discount": {
  //           "title":"Mã giảm",
  //           "enum": [0.1, 0.2],
  //           "type": "number"
  //         }
  //       },
  //       "required": ["discount"]
  //     }
  //   ]
  // };
  
  // const uiSchema2 = {
 
  //     totalValue: {
  //       "ui:classNames": "inline-field",
  //       "ui:options": {
  //         orderable: false,
  //         readonly:true
  //       },
  //     },
  //     items:{
  //       "ui:classNames": "inline-field hide",
   
  //     },
  //     "ui:submitButtonOptions": {
  //       props: {
  //         className: "sumit",
  //       },
  //       submitText: "Đặt hàng",
       
  //     },
  //   };

  return (
    <>
      {loading ? (
        <div>dong</div>
      ) : (
        <>
          <Form
            className='my-form'
            formData={products}
            validator={validator}
            schema={jsonSchema}
            uiSchema={uiSchema}
            onSubmit={onSubmit}
            onChange={onChange}
          />
       
           {price.totalValue===0 ? (
          <></>
        ) : (
          <Form
          className='my-form'
          validator={validator}
          schema={jsonSchema2}
          uiSchema={uiSchema2}
          formData={price}
          onSubmit={onSubmit2}
        />
        )}
        </>
      )}
    </>
  );
      };  

export default MyForm;

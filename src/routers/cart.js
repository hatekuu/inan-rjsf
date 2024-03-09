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
    console.log(findCart[0])
    } catch (error) {
      console.error('Error fetching products:', error);

    }
  };
  const onSubmit = async ({ formData }) => {
    console.log("Form data submitted:", formData);
    const functionName = "updateCart";
    const args=[app.currentUser.id, formData?.products]
   await app.currentUser.callFunction(functionName, ...args);
   fetchData();
    // Handle form submission logic here
  };
  const onChange =  async ({ formData }) => {
  //   console.log("Form data submitted:", formData?.products);
  //   const functionName = "updateCart";
  //   const args=[app.currentUser.id, formData?.products]
  //  await app.currentUser.callFunction(functionName, ...args);

  
  };
  // const jsonSchema = {
    
 
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
      {products?.products?.length > 0 ? (
        <div>
        <Form
          className='my-form'
          validator={validator}
          schema={jsonSchema}
          uiSchema={uiSchema}
          formData={products}
          onSubmit={onSubmit}
         onChange={onChange}
        />
       <Form
          className='my-form'
          validator={validator}
          schema={jsonSchema2}
          uiSchema={uiSchema2}
          formData={price}
       
        />
        </div>
      ) : (
        <div>Chưa có sản phẩm trong giỏ hàng</div>
      )}
    </>
  );
  
};

export default MyForm;

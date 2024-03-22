import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleId = process.env.REACT_APP_GOOGLEID;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
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
  
 

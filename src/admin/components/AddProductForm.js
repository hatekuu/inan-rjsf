// ProductForm.js
import React from 'react';
import Form from '@rjsf/core';
import AjvValidator from '@rjsf/validator-ajv8';

const ProductForm = ({ onSubmit, onError ,isLoading}) => {
  const schema = {
    type: 'object',
    title:"Form thêm sản phẩm",
    properties: {
      productName: { type: 'string', title: 'Tên sản phẩm' },
     
      productType: {
        type: 'string',
        title: 'Loại sản phẩm',
        enum: ['Phôi thẻ trắng', 'Thẻ bảo lãnh','Thẻ bệnh viện','Thẻ dán NFC','Thẻ danh thiếp'],
      },
      purchasePrice: { type: 'number', title: 'Chi phí sản xuất,giá mua(Nghìn đồng)' },
      sellingPrice: { type: 'number', title: 'Giá bán' },
      quantity: { type: 'integer', title: 'Số lượng' },
    },
    required: ['productName', 'productType', 'purchasePrice','sellingPrice', 'quantity'],
  };
  const uiSchema = {
 
    productType: {
    
      'ui:widget': 'select',
      'ui:options': {
        enumOptions: [
          { label: 'In 2D', value: 'in2d' },
          { label: 'In 3D', value: 'in3d' },
        ],
      },
    },
  
  };
  

  const formProps = {
    showErrorList: true,
    liveValidate: false,
  };

  return (
    <div className=" max-w-xl mx-auto mt-8 p-9 bg-white rounded shadow">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        {...formProps}
        onSubmit={onSubmit}
        onError={onError}
        validator={AjvValidator}
      >
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
             {isLoading ? 'Đang nhập...' : 'Nhập kho'}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;

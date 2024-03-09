// ProductForm.js
import React from 'react';
import Form from '@rjsf/core';
import AjvValidator from '@rjsf/validator-ajv8';

const ProductForm = ({ onSubmit, onError }) => {
  const schema = {
    type: 'object',
    properties: {
      productName: { type: 'string', title: 'Tên sản phẩm' },
      productType: {
        type: 'string',
        title: 'Cách in ấn',
        enum: ['In 2d', 'In 3d'],
        enumNames: ['In 2D', 'In 3D'],
      },
      purchasePrice: { type: 'number', title: 'Chi phí sản xuất' },
      sellingPrice: { type: 'number', title: 'Giá bán' },
      quantity: { type: 'integer', title: 'Số lượng' },
    },
    required: ['productName', 'productType', 'purchasePrice', 'sellingPrice', 'quantity'],
  };
  const uiSchema = {
    productName: { 'ui:classNames': 'text-gray-900' },
    productType: {
      'ui:classNames': 'text-gray-900',
      'ui:widget': 'select',
      'ui:options': {
        enumOptions: [
          { label: 'In 2D', value: 'in2d' },
          { label: 'In 3D', value: 'in3d' },
        ],
      },
    },
    purchasePrice: { 'ui:classNames': 'text-gray-900' },
    sellingPrice: { 'ui:classNames': 'text-gray-900' },
    quantity: { 'ui:classNames': 'text-gray-900' },
  };
  

  const formProps = {
    showErrorList: true,
    liveValidate: false,
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
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
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;

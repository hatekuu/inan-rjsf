// ProductForm.js
import React from 'react';
import Form from '@rjsf/core';
import AjvValidator from '@rjsf/validator-ajv8';

const ProductForm = ({ onSubmit, onError }) => {
  const schema = {
    type: 'object',
    properties: {
      productName: { type: 'string', title: 'Product Name' },
      productType: { type: 'string', title: 'Product Type' },
      dateImported: { type: 'string', format: 'date', title: 'Date Imported' },
      purchasePrice: { type: 'number', title: 'Purchase Price' },
      sellingPrice: { type: 'number', title: 'Selling Price' },
      quantity: { type: 'integer', title: 'Quantity' },
      weight: { type: 'number', title: 'Weight' },
      areaOccupied: { type: 'number', title: 'Area Occupied' },
    },
    required: ['productName', 'productType', 'dateImported', 'purchasePrice', 'sellingPrice', 'quantity', 'weight', 'areaOccupied'],
  };

  const uiSchema = {
    productName: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
      'ui:placeholder': 'Enter product name',
    },
    productType: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
      'ui:placeholder': 'Enter product type',
    },
    dateImported: {
      'ui:widget': 'date',
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
    purchasePrice: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
    sellingPrice: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
    quantity: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
    weight: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
    areaOccupied: {
      'ui:classNames': 'mb-4 p-3 border rounded w-full focus:outline-none focus:ring focus:border-blue-300 text-black',
    },
  };

  const formProps = {
    showErrorList: true,
    liveValidate: false,
  };

  const gradientColorClass = 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500';
  const textColorClass = 'text-white';

  return (
    <div className={`max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-md ${gradientColorClass} ${textColorClass}`}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        {...formProps}
        onSubmit={onSubmit}
        onError={onError}
        validator={AjvValidator}
      />
    </div>
  );
};

export default ProductForm;

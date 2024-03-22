import React from 'react';
import Form from '@rjsf/core';
import AjvValidator from '@rjsf/validator-ajv8';
import ArrayFieldTemplate from './custom';

const ProductForm = () => {
  const schema = {
    title: 'Todo',
    type: 'object',
    properties: {
      todos: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  };

  const uiSchema = {
    todos: {
      items: {
        'ui:options': {
          addable: true,
          removable: true,
        },
      },
    },
  };

  const onSubmit = ({ formData }) => {
    console.log('Form submitted with data:', formData);
  };

  const handleClick = (value) => {
    console.log('Adding new item with value:', value);
    // Your logic here
  };

  const handleRemove = (index) => {
    console.log('Removing item at index:', index);
    // Your logic here
  };

  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        validator={AjvValidator}
        templates={{
          ArrayFieldTemplate: (props) => (
            <ArrayFieldTemplate
              {...props}
              handleClick={(value) => handleClick(value)} // Pass handleClick function to ArrayFieldTemplate
              onReorderClick={(oldIndex, newIndex) => console.log('Reordering item:', oldIndex, newIndex)}
              onDropIndexClick={handleRemove}
            />
          ),
        }}
      />
    </div>
  );
};

export default ProductForm;

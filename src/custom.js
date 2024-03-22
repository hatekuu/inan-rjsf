import React from 'react';

function ArrayFieldTemplate(props) {
  const { handleClick } = props; // Destructure handleClick from props
  return (
    <div>
      {props.items.map((element, index) => (
        <div key={element.key}>
          <div>{element.children}</div>
          <button type="button" onClick={() => props.onReorderClick(index, index - 1)}>
            Move Up
          </button>
          <button type="button" onClick={() => props.onReorderClick(index, index + 1)}>
            Move Down
          </button>
          <button type="button" onClick={() => props.onDropIndexClick(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => handleClick(123)}> {/* Truyền giá trị 123 khi ấn Add */}
        Add
      </button>
    </div>
  );
}

export default ArrayFieldTemplate;

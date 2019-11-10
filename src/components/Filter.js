import React from 'react';

const Filter = ({text, applyFilter}) => {
  return (
    <button onClick={applyFilter}>
      {text}
    </button>
  );
}

export default Filter;

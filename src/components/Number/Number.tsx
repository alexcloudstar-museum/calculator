import React from 'react';

const Number: React.FC<NumberProps> = ({ onClick, number }) => {
  return (
    <span className='btn' onClick={onClick}>
      {number}
    </span>
  );
};

export default Number;

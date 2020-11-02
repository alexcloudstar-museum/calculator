import React from 'react';
import './Operation.css';

const Multiply: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='Multiply btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Multiply;

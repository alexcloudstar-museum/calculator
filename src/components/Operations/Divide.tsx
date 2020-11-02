import React from 'react';
import './Operation.css';

const Divide: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='Divide btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Divide;

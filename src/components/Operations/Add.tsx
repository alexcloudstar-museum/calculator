import React from 'react';
import './Operation.css';

const Add: React.FC<OperationsProps> = ({ sign, onClick }) => {
  return (
    <div className='Add btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Add;

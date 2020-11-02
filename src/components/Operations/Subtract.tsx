import React from 'react';
import './Operation.css';

const Abstract: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='Abstract btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Abstract;

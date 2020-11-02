import React from 'react';
import './Operation.css';

const Equal: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='Equal btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Equal;

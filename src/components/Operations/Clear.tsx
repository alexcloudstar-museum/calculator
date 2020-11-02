import React from 'react';
import './Operation.css';

const Clear: React.FC<OperationsProps> = ({ onClick }) => {
  return (
    <div className='Clear btn' onClick={onClick}>
      clear
    </div>
  );
};

export default Clear;

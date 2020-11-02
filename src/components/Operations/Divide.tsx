import React from 'react';

const Divide: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Divide;

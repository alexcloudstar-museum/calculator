import React from 'react';

const Add: React.FC<OperationsProps> = ({ sign, onClick }) => {
  return (
    <div className='btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Add;

import React from 'react';

const Abstract: React.FC<OperationsProps> = ({ onClick, sign }) => {
  return (
    <div className='btn' onClick={onClick}>
      {sign && sign}
    </div>
  );
};

export default Abstract;

import React from 'react';
import './Operation.css';

const Clear = (props: any) => {
  return (
    <div className='Clear btn' onClick={props.onClick}>
      clear
    </div>
  );
};

export default Clear;

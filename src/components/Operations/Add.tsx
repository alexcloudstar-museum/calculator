import React from 'react';
import './Operation.css';

const Add = (props: any) => {
  return (
    <div className='Add btn' onClick={props.onClick}>
      {props.sign}
    </div>
  );
};

export default Add;

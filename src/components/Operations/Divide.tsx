import React from 'react';
import './Operation.css';

const Divide = (props: any) => {
  return (
    <div className='Divide btn' onClick={props.onClick}>
      {props.sign}
    </div>
  );
};

export default Divide;

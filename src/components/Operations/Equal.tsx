import React from 'react';
import './Operation.css';

const Equal = (props: any) => {
  return (
    <div className='Equal btn' onClick={props.onClick}>
      {props.sign}
    </div>
  );
};

export default Equal;

import React from 'react';
import './Number.css';

const Number = (props: any) => {
  return (
    <span className='btn' onClick={props.onClick}>
      {props.number}
    </span>
  );
};

export default Number;

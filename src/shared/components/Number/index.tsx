import { FC } from 'react';
import NumberPropTypes from './NumberPropTypes';

const Number: FC<NumberPropTypes> = ({ onClick, number }) => (
  <span className='btn' onClick={onClick}>
    {number}
  </span>
);

export default Number;

import { MouseEventHandler } from 'react';

interface NumberPropTypes {
  number: number;
  onClick: MouseEventHandler<HTMLSpanElement>;
  onKeyPress?: any;
}

export default NumberPropTypes;

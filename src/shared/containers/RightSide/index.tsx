import { FC } from 'react';

import { divide, subtract, multiply, add, showResult } from '../../../utils';
import { operationPropType } from '../../../utils/operations/operationPropType';
import { Operations } from '../../components';

const RightSide: FC<operationPropType> = ({
  num0,
  num1,
  setMethod,
  setResult,
  result,
  method,
}) => (
  <div className='right-side text-center'>
    <Operations sign='/' onClick={() => divide(num0, num1, setMethod)} />
    <Operations sign='-' onClick={() => subtract(num0, num1, setMethod)} />
    <Operations sign='*' onClick={() => multiply(num0, num1, setMethod)} />
    <Operations sign='+' onClick={() => add(num0, num1, setMethod)} />
    <Operations
      sign='='
      onClick={() =>
        showResult({ result, num0, num1, setMethod, setResult, method })
      }
    />
  </div>
);

export default RightSide;

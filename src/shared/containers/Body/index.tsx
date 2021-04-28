import { FC } from 'react';
import { operationPropType } from '../../../utils/operations/operationPropType';
import LeftSide, { LeftSideProp } from '../LeftSide';
import RightSide from '../RightSide';

interface BodyProps extends operationPropType, LeftSideProp {}

const Body: FC<BodyProps> = ({
  num0,
  num1,
  setMethod,
  setResult,
  result,
  method,
  clear,
  children,
}) => (
  <div className='Body'>
    <LeftSide clear={clear}>{children}</LeftSide>
    <RightSide
      result={result}
      num0={num0}
      num1={num1}
      setMethod={setMethod}
      setResult={setResult}
      method={method}
    />
  </div>
);

export default Body;

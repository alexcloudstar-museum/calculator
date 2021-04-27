import { FC } from 'react';
import OperationPropType from './OperationPropType';

const Operations: FC<OperationPropType> = ({ sign, onClick, children }) => (
  <div className='btn' onClick={onClick}>
    {sign && sign}
  </div>
);

export default Operations;

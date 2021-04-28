import { MouseEventHandler } from 'react';

interface OperationPropType {
  sign?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default OperationPropType;

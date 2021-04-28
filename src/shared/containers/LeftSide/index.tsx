import { FC } from 'react';

import { ClearWrapper, Operations } from '../../components';

export interface LeftSideProp {
  clear: () => void;
}

const LeftSide: FC<LeftSideProp> = ({ children, clear }) => (
  <div className='left-side'>
    <ClearWrapper>
      <Operations sign={'clear'} onClick={clear} />
    </ClearWrapper>
    {children}
  </div>
);

export default LeftSide;

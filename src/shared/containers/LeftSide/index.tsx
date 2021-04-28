import { FC } from 'react';

import { ClearWrapper, Operations } from 'shared/components';

export interface LeftSideProps {
  clear: () => void;
}

const LeftSide: FC<LeftSideProps> = ({ children, clear }) => (
  <div className='left-side'>
    <ClearWrapper>
      <Operations sign={'clear'} onClick={clear} />
    </ClearWrapper>
    {children}
  </div>
);

export default LeftSide;

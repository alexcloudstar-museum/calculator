import React from 'react';
import styled from 'styled-components';

const ClearWrapper = styled.div`
  font-size: 30px;
  padding: 20px 0;
  color: #525252;
  text-align: center;
  border-bottom: 0;
`;

const Clear: React.FC<OperationsProps> = ({ onClick }) => {
  return (
    <ClearWrapper className='btn' onClick={onClick}>
      clear
    </ClearWrapper>
  );
};

export default Clear;

import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  color: #fff;
  padding-top: 15px;
  text-align: right;
  padding-right: 15px;
  padding-bottom: 15px;
  background-color: #433437;
`;

const Result: React.FC<ResultProps> = ({ result }) => {
  return <ResultWrapper>{result}</ResultWrapper>;
};

export default Result;

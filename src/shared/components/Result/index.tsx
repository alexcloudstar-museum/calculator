import { FC } from 'react';
import ResultPropType from './ResultPropType';

import { ResultWrapper } from './style';

const Result: FC<ResultPropType> = ({ result }) => (
  <ResultWrapper>{result}</ResultWrapper>
);

export default Result;

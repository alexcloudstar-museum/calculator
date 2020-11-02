import React from 'react';
import './Result.css';

const Result: React.FC<ResultProps> = ({ result }) => {
  return <div className='Result'>{result}</div>;
};

export default Result;

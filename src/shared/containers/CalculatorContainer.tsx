import { FC, useState } from 'react';
import { divide, subtract, multiply, add, showResult } from '../../utils';
import { Result, Operations, ClearWrapper, Number } from '../components';

const CalculatorContainer: FC = () => {
  const [result, setResult] = useState(0);
  const [numbers, ,] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [num0, setNum0] = useState(0);
  const [num1, setNum1] = useState(0);
  const [method, setMethod] = useState<string | null>(null);

  const clear = () => {
    setResult(0);
    setNum0(0);
    setNum1(0);
    setMethod(null);
  };

  const setNumbersMethod = (number: number) => {
    num0 === 0 ? setNum0(number) : setNum1(number);

    setResult(number);
  };

  const renderNumbers = () => {
    const resultsRender: any[] = [];
    for (let i = 0; i < numbers.length; i += 3) {
      resultsRender.push(
        <div key={i} className={`row ${i === 9 && 'last-num'}`}>
          {numbers.slice(i, i + 3).map(number => (
            <Number
              key={number}
              number={number}
              onClick={() => setNumbersMethod(number)}
            />
          ))}
        </div>
      );
    }

    return <>{resultsRender}</>;
  };

  return (
    <>
      <Result result={result} />
      <div className='Body'>
        <div className='left-side'>
          <ClearWrapper>
            <Operations sign={'clear'} onClick={clear} />
          </ClearWrapper>
          {renderNumbers()}
        </div>
        <div className='right-side text-center'>
          <Operations sign='/' onClick={() => divide(num0, num1, setMethod)} />
          <Operations
            sign='-'
            onClick={() => subtract(num0, num1, setMethod)}
          />
          <Operations
            sign='*'
            onClick={() => multiply(num0, num1, setMethod)}
          />
          <Operations sign='+' onClick={() => add(num0, num1, setMethod)} />
          <Operations
            sign='='
            onClick={() =>
              showResult({ result, num0, num1, setMethod, setResult, method })
            }
          />
        </div>
      </div>
    </>
  );
};

export default CalculatorContainer;

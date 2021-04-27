import { FC, useState } from 'react';
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

  const handleKeyPress = () => {};

  const divide = (num0: number, num1: number) => {
    setMethod('divide');
    return num0 / num1;
  };

  const add = (num0: number, num1: number) => {
    setMethod('add');
    return num0 + num1;
  };

  const subtract = (num0: number, num1: number) => {
    setMethod('add');
    return num0 - num1;
  };

  const multiply = (num0: number, num1: number) => {
    setMethod('multiply');
    return num0 * num1;
  };

  const showResult = () => {
    let localResult = result;

    switch (method) {
      case 'add':
        localResult = add(num0, num1);
        return setResult(localResult);
      case 'subtract':
        localResult = subtract(num0, num1);
        return setResult(localResult);
      case 'divide':
        localResult = divide(num0, num1);
        return setResult(localResult);
      case 'multiply':
        localResult = multiply(num0, num1);
        return setResult(localResult);
      default:
        return localResult;
    }
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
              onKeyPress={handleKeyPress}
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
          <Operations sign='/' onClick={() => divide(num0, num1)} />
          <Operations sign='-' onClick={() => subtract(num0, num1)} />
          <Operations sign='*' onClick={() => multiply(num0, num1)} />
          <Operations sign='+' onClick={() => add(num0, num1)} />
          <Operations sign='=' onClick={() => showResult()} />
        </div>
      </div>
    </>
  );
};

export default CalculatorContainer;

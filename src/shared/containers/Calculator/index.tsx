import { FC, useState } from 'react';
import { Body } from 'shared/containers';
import { Result, Number } from 'shared/components';

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
      <Body
        result={result}
        num0={num0}
        num1={num1}
        setMethod={setMethod}
        setResult={setResult}
        method={method}
        clear={clear}
        children={renderNumbers()}
      />
    </>
  );
};

export default CalculatorContainer;

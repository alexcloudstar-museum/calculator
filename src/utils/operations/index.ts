import { operationPropType, calculationPropType } from './operationPropType';

export const divide: calculationPropType = (num0, num1, setMethod) => {
  setMethod && setMethod('divide');
  return num0 / num1;
};

export const add: calculationPropType = (num0, num1, setMethod) => {
  setMethod && setMethod('add');
  return num0 + num1;
};

export const subtract: calculationPropType = (num0, num1, setMethod) => {
  setMethod && setMethod('add');
  return num0 - num1;
};

export const multiply: calculationPropType = (num0, num1, setMethod) => {
  setMethod && setMethod('multiply');
  return num0 * num1;
};

export const showResult = ({
  result,
  method,
  num0,
  num1,
  setResult,
}: operationPropType) => {
  let localResult = result;

  switch (method) {
    case 'add':
      localResult = add(num0, num1);
      return setResult && setResult(localResult);
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

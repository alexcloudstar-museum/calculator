import operationPropType from './operationPropType';

export const divide = ({ num0, num1, setMethod }: operationPropType) => {
  setMethod('divide');
  return num0 / num1;
};

export const add = ({ num0, num1, setMethod }: operationPropType) => {
  setMethod('add');
  return num0 + num1;
};

export const subtract = ({ num0, num1, setMethod }: operationPropType) => {
  setMethod('add');
  return num0 - num1;
};

export const multiply = ({ num0, num1, setMethod }: operationPropType) => {
  setMethod('multiply');
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

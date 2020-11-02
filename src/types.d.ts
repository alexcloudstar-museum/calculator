type AppProps = {
  result: number;
  numbers: number[];
  num0: number;
  num1: number;
  method: string;
};

type ResultProps = {
  result: number;
};

type OperationsProps = {
  sign?: string;
  onClick: () => void;
};

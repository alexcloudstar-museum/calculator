interface operationPropType {
  num0: number;
  num1: number;
  result: number;
  method: string | null;
  setResult: (value: React.SetStateAction<number>) => void;
  setMethod: (value: React.SetStateAction<string | null>) => void;
}

export default operationPropType;

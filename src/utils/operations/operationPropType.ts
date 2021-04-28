export interface operationPropType {
  num0: number;
  num1: number;
  result: number;
  method?: string | null;
  setResult: (value: React.SetStateAction<number>) => void;
  setMethod: (value: React.SetStateAction<string | null>) => void;
}

export type calculationPropType = {
  (
    num0: number,
    num1: number,
    setMethod?: (value: React.SetStateAction<string | null>) => void
  ): number;
};

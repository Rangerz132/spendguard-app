export type ExpenseType = {
  category: string;
  value: number;
  compared: {
    value: number;
    isIncreasing: boolean;
  };
};

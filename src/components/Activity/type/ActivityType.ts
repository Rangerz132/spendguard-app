export type ActivityType = {
  id: string;
  name: string | undefined;
  description?: string;
  amount: number;
  is_expense: boolean;
  category: string;
  created_at: Date;
};

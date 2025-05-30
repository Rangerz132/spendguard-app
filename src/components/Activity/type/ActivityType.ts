export type ActivityType = {
  id: string;
  name: string | undefined;
  description?: string;
  amount: number;
  is_expense: boolean;
  category: string;
  created_at: string | Date | null;
  date: string | Date | null;
  user_id: string | null;
};

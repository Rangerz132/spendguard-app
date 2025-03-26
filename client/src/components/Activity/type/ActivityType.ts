import { ActivityCategoryType } from "./ActivityCategoryType";

export type ActivityType = {
  id: string;
  name: string;
  amount: number;
  isExpense: boolean;
  category: ActivityCategoryType;
  createdAt: any;
};

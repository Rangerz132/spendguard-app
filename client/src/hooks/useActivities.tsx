import { useEffect, useState } from "react";
import APIService from "../api/APIService";
import { ActivityType } from "../components/Activity/type/ActivityType";

const useActivities = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [activityCategories, setActivityCategory] = useState<string[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await APIService.getActivities();
      setActivities(data);
      setActivityCategory([
        ...new Set(data.map((activity) => activity.category)),
      ]);
    };

    fetchActivities();
  }, []);

  const getExpensesAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      return activities
        .filter((activity) => activity.isExpense)
        .reduce((acc, activity) => acc + (Number(activity.amount) || 0), 0);
    }
  };

  const getIncomesAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      return activities
        .filter((activity) => !activity.isExpense)
        .reduce((acc, activity) => acc + (Number(activity.amount) || 0), 0);
    }
  };

  const getBalanceAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      const incomes = getIncomesAmount();
      const expenses = getExpensesAmount();
      return incomes - expenses;
    }
  };

  const getExpensesAmountByCategory = (category: string): number => {
    if (activityCategories.length === 0) {
      return 0;
    } else {
      const validActivities = activities
        .filter((activity) => activity.category === category)
        .filter((activity) => activity.isExpense);

      return validActivities.reduce(
        (acc, activity) => acc + Number(activity.amount || 0),
        0
      );
    }
  };

  const getExpensesAmountByCategories = () => {
    if (activityCategories.length === 0) {
      return new Map();
    } else {
      const expensesAmountByCategories = new Map();

      activityCategories.map((activityCategory) => {
        if (getExpensesAmountByCategory(activityCategory) > 0) {
          expensesAmountByCategories.set(
            activityCategory,
            getExpensesAmountByCategory(activityCategory)
          );
        }
      });

      return expensesAmountByCategories;
    }
  };

  return {
    getExpensesAmount,
    getIncomesAmount,
    getBalanceAmount,
    getExpensesAmountByCategory,
    getExpensesAmountByCategories,
    activityCategories,
  };
};

export default useActivities;

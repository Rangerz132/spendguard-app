import { useCallback, useEffect, useState } from "react";
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

  /** Return the total expenses amount */
  const getExpensesAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      return activities
        .filter((activity) => activity.isExpense)
        .reduce((acc, activity) => acc + (Number(activity.amount) || 0), 0);
    }
  };

  /** Return the total incomes amount */
  const getIncomesAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      return activities
        .filter((activity) => !activity.isExpense)
        .reduce((acc, activity) => acc + (Number(activity.amount) || 0), 0);
    }
  };

  /** Return the total balance amount */
  const getBalanceAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      const incomes = getIncomesAmount();
      const expenses = getExpensesAmount();
      return incomes - expenses;
    }
  };

  /** Return the expenses amount in a specific category */
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

  /** Return the expenses amount per category */
  const getExpensesAmountByCategories = useCallback((): Map<string, number> => {
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
  }, [activities]);

  /** Return the expenses amount per date */
  const getExpensesAmountByDates = useCallback((): Map<string, number> => {
    const expensesAmountByDates = new Map<string, number>();

    activities
      .filter((activity) => activity.isExpense)
      .forEach((activity) => {
        const date = activity.createdAt;
        const amount = Number(activity.amount) || 0;

        expensesAmountByDates.set(
          date,
          (expensesAmountByDates.get(date) || 0) + amount
        );
      });

    return expensesAmountByDates;
  }, [activities]);

  /** Return the incomes amount per date */
  const getIncomesAmountByDates = useCallback((): Map<string, number> => {
    const incomesAmountByDates = new Map<string, number>();

    activities
      .filter((activity) => !activity.isExpense)
      .forEach((activity) => {
        const date = activity.createdAt;
        const amount = Number(activity.amount) || 0;

        incomesAmountByDates.set(
          date,
          (incomesAmountByDates.get(date) || 0) + amount
        );
      });

    return incomesAmountByDates;
  }, [activities]);

  return {
    getExpensesAmount,
    getIncomesAmount,
    getBalanceAmount,
    getExpensesAmountByCategory,
    getExpensesAmountByCategories,
    getExpensesAmountByDates,
    getIncomesAmountByDates,
    activities,
    activityCategories,
  };
};

export default useActivities;

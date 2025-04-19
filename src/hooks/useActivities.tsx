import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useActivities = () => {
  const activities = useSelector((store: RootState) => store.activities);
  const [activityCategories, setActivityCategory] = useState<string[]>([]);

  useEffect(() => {
    const fetchActivities = () => {
      setActivityCategory([
        ...new Set(activities.map((activity) => activity.category)),
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
        .filter((activity) => activity.is_expense)
        .reduce((acc, activity) => acc + (Number(activity.amount) || 0), 0);
    }
  };

  /** Return the total incomes amount */
  const getIncomesAmount = (): number => {
    if (activities.length === 0) {
      return 0;
    } else {
      return activities
        .filter((activity) => !activity.is_expense)
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
        .filter((activity) => activity.is_expense);

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
  const getExpensesAmountByDates = useCallback((): Map<Date, number> => {
    const expensesAmountByDates = new Map<Date, number>();

    activities
      .filter((activity) => activity.is_expense)
      .forEach((activity) => {
        const date = activity.created_at;
        const amount = Number(activity.amount) || 0;

        expensesAmountByDates.set(
          date,
          (expensesAmountByDates.get(date) || 0) + amount
        );
      });

    return expensesAmountByDates;
  }, [activities]);

  /** Return the incomes amount per date */
  const getIncomesAmountByDates = useCallback((): Map<Date, number> => {
    const incomesAmountByDates = new Map<Date, number>();

    activities
      .filter((activity) => !activity.is_expense)
      .forEach((activity) => {
        const date = activity.created_at;
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

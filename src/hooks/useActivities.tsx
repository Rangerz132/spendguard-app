import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useActivityFilters from "./useActivityFilters";

const useActivities = () => {
  const activities = useSelector((store: RootState) => store.activities);
  const [activityCategories, setActivityCategory] = useState<string[]>([]);
  const { filterActivitiesWithinDateRange } = useActivityFilters(activities);

  useEffect(() => {
    if (!activities || activities.length === 0) return;

    const categories = [
      ...new Set(activities.map((activity) => activity.category)),
    ];
    setActivityCategory(categories);
  }, [activities]);

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
    const validActivities = activities
      .filter((activity) => activity.category === category)
      .filter((activity) => activity.is_expense);

    return validActivities.reduce(
      (acc, activity) => acc + Number(activity.amount || 0),
      0
    );
  };

  /** Return the expenses amount in a specific category */
  const getExpensesAmountByCategoryWithinDateRange = (
    category: string,
    from: string | Date,
    to: string | Date
  ): number => {
    const validActivities = filterActivitiesWithinDateRange(from, to)
      .filter((activity) => activity.category === category)
      .filter((activity) => activity.is_expense);

    return validActivities.reduce(
      (acc, activity) => acc + Number(activity.amount || 0),
      0
    );
  };

  /** Return the expenses amount per category */
  const getExpensesAmountByCategories = useCallback((): Map<string, number> => {
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
  }, [activities, activityCategories]);

  /** Return the expenses amount per date */
  const getExpensesAmountByDates = useCallback((): Map<string, number> => {
    const expensesAmountByDates = new Map<string, number>();

    activities
      .filter((activity) => activity.is_expense)
      .forEach((activity) => {
        const date = activity.date as string;
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
      .filter((activity) => !activity.is_expense)
      .forEach((activity) => {
        const date = activity.date as string;
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
    getExpensesAmountByCategoryWithinDateRange,
    getExpensesAmountByCategories,
    getExpensesAmountByDates,
    getIncomesAmountByDates,
    activities,
    activityCategories,
  };
};

export default useActivities;

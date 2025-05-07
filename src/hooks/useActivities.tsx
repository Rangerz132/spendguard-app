import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useActivityFilters from "./useActivityFilters";
import { ActivityType } from "../components/Activity/type/ActivityType";

const useActivities = () => {
  const activities = useSelector((state: RootState) => state.activities);
  const {
    filterActivitiesWithinDateRange,
    filterActivitiesWithinCurrentMonth,
  } = useActivityFilters(activities);

  const activityCategories = useMemo(() => {
    if (!activities || activities.length === 0) return [];
    return [...new Set(activities.map((a) => a.category))];
  }, [activities]);

  const getExpensesAmount = useCallback((): number => {
    return activities
      .filter((a) => a.is_expense)
      .reduce((acc, a) => acc + (Number(a.amount) || 0), 0);
  }, [activities]);

  const getIncomesAmount = useCallback((): number => {
    return activities
      .filter((a) => !a.is_expense)
      .reduce((acc, a) => acc + (Number(a.amount) || 0), 0);
  }, [activities]);

  const getBalanceAmount = useCallback((): number => {
    return getIncomesAmount() - getExpensesAmount();
  }, [getIncomesAmount, getExpensesAmount]);

  const getExpensesAmountByCategory = useCallback(
    (category: string, source?: ActivityType[]): number => {
      const filtered = (source || activities).filter(
        (a) => a.category === category && a.is_expense
      );
      return filtered.reduce((acc, a) => acc + Number(a.amount || 0), 0);
    },
    [activities]
  );

  const getExpensesAmountByCategoryWithinDateRange = useCallback(
    (category: string, from: string | Date, to: string | Date): number => {
      const filtered = filterActivitiesWithinDateRange(from, to).filter(
        (a) => a.category === category && a.is_expense
      );
      return filtered.reduce((acc, a) => acc + Number(a.amount || 0), 0);
    },
    [filterActivitiesWithinDateRange]
  );

  const getExpensesAmountByCategoriesWithinCurrentMonth = useCallback(() => {
    const map = new Map<string, number>();
    const currentMonthActivities = filterActivitiesWithinCurrentMonth();

    const categories = [
      ...new Set(currentMonthActivities.map((a) => a.category)),
    ];

    categories.forEach((category) => {
      const total = currentMonthActivities
        .filter((a) => a.category === category && a.is_expense)
        .reduce((acc, a) => acc + (Number(a.amount) || 0), 0);

      if (total > 0) {
        map.set(category, total);
      }
    });

    return map;
  }, [activities]);

  const getExpensesAmountByCategories = useCallback(() => {
    const byCategory = new Map<string, number>();
    activityCategories.forEach((category) => {
      const amount = getExpensesAmountByCategory(category);
      if (amount > 0) byCategory.set(category, amount);
    });
    return byCategory;
  }, [activityCategories, getExpensesAmountByCategory]);

  const getExpensesAmountByDates = useCallback(() => {
    const byDate = new Map<string, number>();
    activities
      .filter((a) => a.is_expense)
      .forEach((a) => {
        const date = a.date as string;
        const amount = Number(a.amount) || 0;
        byDate.set(date, (byDate.get(date) || 0) + amount);
      });
    return byDate;
  }, [activities]);

  const getIncomesAmountByDates = useCallback(() => {
    const byDate = new Map<string, number>();
    activities
      .filter((a) => !a.is_expense)
      .forEach((a) => {
        const date = a.date as string;
        const amount = Number(a.amount) || 0;
        byDate.set(date, (byDate.get(date) || 0) + amount);
      });
    return byDate;
  }, [activities]);

  return {
    activities,
    activityCategories,
    getExpensesAmount,
    getIncomesAmount,
    getBalanceAmount,
    getExpensesAmountByCategory,
    getExpensesAmountByCategoryWithinDateRange,
    getExpensesAmountByCategoriesWithinCurrentMonth,
    getExpensesAmountByCategories,
    getExpensesAmountByDates,
    getIncomesAmountByDates,
  };
};

export default useActivities;

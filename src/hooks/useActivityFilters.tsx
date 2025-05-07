import { ActivityType } from "../components/Activity/type/ActivityType";

const useActivityFilters = (activities: ActivityType[]) => {
  /** Filter activities by the latest */
  const filterActivitiesByOldest = () => {
    return [...activities].sort(
      (a, b) =>
        new Date(new Date(a.date as string) as Date).getTime() -
        new Date(new Date(b.date as string) as Date).getTime()
    );
  };

  /** Filter activities by the decreasing amount */
  const filterActivitiesByIncreasingAmount = () => {
    return [...activities].sort((a, b) => a.amount - b.amount);
  };

  /** Filter activities by the increasing amount */
  const filterActivitiesByDecreasingAmount = () => {
    return [...activities].sort((a, b) => b.amount - a.amount);
  };

  /** Filter activities by the oldest */
  const filterActivitiesByLatest = () => {
    return [...activities].sort(
      (a, b) =>
        new Date(new Date(b.date as string) as Date).getTime() -
        new Date(new Date(a.date as string) as Date).getTime()
    );
  };

  /** Filter activities by the oldest */
  const filterActivitiesByCategory = () => {
    return [...activities].sort((a, b) => a.category.localeCompare(b.category));
  };

  /** Filter activities by date range */
  const filterActivitiesWithinDateRange = (
    from: string | Date,
    to: string | Date
  ) => {
    const fromTime = new Date(from).getTime();
    const toTime = new Date(to).getTime();

    return [...activities].filter((activity) => {
      const activityDate = new Date(activity.date as string).getTime();
      return activityDate >= fromTime && activityDate <= toTime;
    });
  };

  /** Filter activities by current month */
  const filterActivitiesWithinCurrentMonth = () => {
    return [...activities].filter((activity) => {
      const activityDate = new Date(activity.date as string);
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      return (
        activityDate.getMonth() === currentMonth &&
        activityDate.getFullYear() === currentYear
      );
    });
  };

  return {
    filterActivitiesByLatest,
    filterActivitiesByOldest,
    filterActivitiesByCategory,
    filterActivitiesByDecreasingAmount,
    filterActivitiesByIncreasingAmount,
    filterActivitiesWithinDateRange,
    filterActivitiesWithinCurrentMonth,
  };
};

export default useActivityFilters;

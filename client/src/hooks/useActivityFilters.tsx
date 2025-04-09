import { ActivityType } from "../components/Activity/type/ActivityType";

const useActivityFilters = (activities: ActivityType[]) => {
  /** Filter activities by the latest */
  const filterActivitiesByLatest = () => {
    return activities.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  };

  /** Filter activities by the decreasing amount */
  const filterActivitiesByDecreasingAmount = () => {
    return activities.sort((a, b) => a.amount - b.amount);
  };

  /** Filter activities by the increasing amount */
  const filterActivitiesByIncreasingAmount = () => {
    return activities.sort((a, b) => b.amount - a.amount);
  };

  /** Filter activities by the oldest */
  const filterActivitiesByOldest = () => {
    return activities.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  };

  /** Filter activities by the oldest */
  const filterActivitiesByCategory = () => {
    return activities.sort((a, b) => a.category.localeCompare(b.category));
  };

  return {
    filterActivitiesByLatest,
    filterActivitiesByOldest,
    filterActivitiesByCategory,
    filterActivitiesByDecreasingAmount,
    filterActivitiesByIncreasingAmount,
  };
};

export default useActivityFilters;

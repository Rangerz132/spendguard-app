import { useEffect, useState } from "react";
import { ActivityType } from "../components/Activity/type/ActivityType";

const useActivityFilters = (activities: ActivityType[]) => {
  const [activityCategories, setActivityCategory] = useState<string[]>([]);

  useEffect(() => {
    setActivityCategory([
      ...new Set(activities.map((activity) => activity.category)),
    ]);
  }, [activities]);

  /** Filter activities by the latest */
  const filterActivitiesByLatest = () => {
    return activities.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  };

  /** Filter activities by the oldest */
  const filterActivitiesByOldest = () => {
    console.log(activities);
    return activities.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  };

  /** Filter activities by the oldest */
  const filterActivitiesByCategory = () => {
    const test = activities.filter((activity) =>
      activityCategories.includes(activity.category)
    );

    console.log(activityCategories, test);
    return test;
  };

  return {
    filterActivitiesByLatest,
    filterActivitiesByOldest,
    filterActivitiesByCategory,
  };
};

export default useActivityFilters;

import { useEffect, useState } from "react";
import ActivitySlot from "./ActivitySlot";
import { ActivityType } from "./type/ActivityType";
import useActivityFilters from "../../hooks/useActivityFilters";

const LatestActivityCard = (props: {
  activities: ActivityType[];
  setActivities?: React.Dispatch<React.SetStateAction<ActivityType[]>>;
  activitySlotVisibleAmount: number;
  addFilters?: boolean;
}) => {
  const [visibleActivities, setVisibleActivities] = useState<ActivityType[]>(
    []
  );
  const {
    filterActivitiesByOldest,
    filterActivitiesByLatest,
    filterActivitiesByCategory,
    filterActivitiesByDecreasingAmount,
    filterActivitiesByIncreasingAmount,
  } = useActivityFilters(props.activities);

  const filterMap = {
    latest: filterActivitiesByLatest,
    oldest: filterActivitiesByOldest,
    category: filterActivitiesByCategory,
    highest: filterActivitiesByDecreasingAmount,
    lowest: filterActivitiesByIncreasingAmount,
  };

  useEffect(() => {
    showVisibleActivities(props.activities);
  }, []);

  const showVisibleActivities = (activities: ActivityType[]) => {
    setVisibleActivities(
      activities.reverse().slice(0, props.activitySlotVisibleAmount)
    );
  };

  return (
    <div className="card flex flex-col space-y-3 ">
      <div className="flex flex-row justify-between items-center">
        {/** Activity title */}
        <h3 className="text-grey">Activities</h3>
        {/** Activity filter selection */}
        {props.addFilters && (
          <select
            className="text-xs"
            onChange={(event) => {
              const selectedFilter =
                filterMap[event.target.value as keyof typeof filterMap];
              if (selectedFilter) {
                showVisibleActivities(selectedFilter());
              }
            }}
          >
            <option value="latest">Filter by latest</option>
            <option value="oldest">Filter by oldest</option>
            <option value="category">Filter by category</option>
            <option value="highest">Filter by highest</option>
            <option value="lowest">Filter by lowest</option>
          </select>
        )}
      </div>
      {/** Activity list */}
      {visibleActivities.map((activity, index) => (
        <div className="flex flex-col space-y-3" key={activity.id}>
          <ActivitySlot data={activity} addDetails={true} />
          {index < visibleActivities.length - 1 && (
            <div className=" w-full h-[0.5px] bg-white/5"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LatestActivityCard;

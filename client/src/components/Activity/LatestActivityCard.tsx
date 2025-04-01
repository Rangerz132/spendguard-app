import { useEffect, useState } from "react";
import ActivitySlot from "./ActivitySlot";

import { ActivityType } from "./type/ActivityType";
import APIService from "../../api/APIService";

const LatestActivityCard = (props: { activitySlotVisibleAmount: number }) => {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [visibleActivities, setVisibleActivities] = useState<ActivityType[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await APIService.getActivities();
      setActivities(data);
      setVisibleActivities(
        data.reverse().slice(0, props.activitySlotVisibleAmount)
      );
    };

    fetchData();
  }, []);

  return (
    <div className="card flex flex-col space-y-3">
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

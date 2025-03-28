import { useEffect, useState } from "react";
import ActivitySlot from "./ActivitySlot";

import { ActivityType } from "./type/ActivityType";
import APIService from "../../api/APIService";

const ActivityCard = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await APIService.getActivities();
      console.log(data);
      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <div className="card flex flex-col space-y-3">
      {activities.map((activity) => (
        <ActivitySlot key={activity.id} data={activity} />
      ))}
    </div>
  );
};

export default ActivityCard;

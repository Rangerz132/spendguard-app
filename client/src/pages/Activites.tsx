import { useEffect, useState } from "react";
import LatestActivityCard from "../components/Activity/LatestActivityCard";
import APIService from "../api/APIService";
import { ActivityType } from "../components/Activity/type/ActivityType";
import EmptyCard from "../components/Card/EmptyCard";

const Activites = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await APIService.getActivities();
      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Title */}
          <h2 className="text-white">Latest activities</h2>
        </div>
        {/** Activities */}
        {activities.length > 0 ? (
          <LatestActivityCard
            activitySlotVisibleAmount={20}
            addFilters={true}
            activities={activities}
            setActivities={setActivities}
          />
        ) : (
          <EmptyCard />
        )}
      </section>
    </div>
  );
};

export default Activites;

import { useEffect, useState } from "react";
import LatestActivityCard from "../components/Activity/LatestActivityCard";

import { ActivityType } from "../components/Activity/type/ActivityType";
import EmptyCard from "../components/Card/EmptyCard";
import SearchBar from "../components/UI/SearchBar";
import { getActivities } from "../services/supabaseService";

const Activites = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivities();
      setActivities(data);
      setFilteredActivities(data);
    };

    fetchData();
  }, []);

  const handleSearchFilter = (value: string) => {
    const filteredItems = activities.filter((item) =>
      item.name?.toLowerCase()?.includes(value.toLowerCase())
    );

    setFilteredActivities(filteredItems);
  };

  return (
    <div className="wrapper page-wrapper">
      <section>
        {/** Title */}
        <h2 className="text-white theme-light:text-black">Latest activities</h2>
        {/** Search bar */}
        <SearchBar onChange={(e) => handleSearchFilter(e)} />
        {filteredActivities.length > 0 ? (
          <>
            {/** Activities */}
            <LatestActivityCard
              activitySlotVisibleAmount={20}
              addFilters={true}
              activities={filteredActivities}
              setActivities={setFilteredActivities}
            />
          </>
        ) : (
          <EmptyCard />
        )}
      </section>
    </div>
  );
};

export default Activites;

import { useEffect, useState } from "react";
import { ActivityType } from "../../../components/Activity/type/ActivityType";
import { getActivities } from "../../../services/supabase/activityService";
import SearchBar from "../../../components/UI/SearchBar";
import LatestActivityCard from "../../../components/Activity/LatestActivityCard";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";

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
          <EmptyCard
            title={"You don't have any activities"}
            description={"List of activities you've created will appear here."}
            button={<LinkButton path={"/addActivity"}>Add activity</LinkButton>}
          />
        )}
      </section>
    </div>
  );
};

export default Activites;

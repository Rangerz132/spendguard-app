import { useEffect, useState } from "react";
import { ActivityType } from "../../../components/Activity/type/ActivityType";
import SearchBar from "../../../components/UI/SearchBar";
import LatestActivityCard from "../../../components/Activity/LatestActivityCard";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Activities = () => {
  const activities = useSelector((root: RootState) => root.activities);
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  );
  useEffect(() => {
    setFilteredActivities(activities);
  }, [activities]);

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

export default Activities;

import { useParams } from "react-router";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import SearchBar from "../../../components/UI/SearchBar";
import LatestActivityCard from "../../../components/Activity/LatestActivityCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { ActivityType } from "../../../components/Activity/type/ActivityType";
import useActivities from "../../../hooks/useActivities";
import EmptyCard from "../../../components/Card/EmptyCard";
import LinkButton from "../../../components/UI/LinkButton";

const ActivityCategory = () => {
  const { category } = useParams();
  const activities = useSelector((root: RootState) => root.activities);
  const [categoryActivities, setCategoryActivities] = useState<ActivityType[]>(
    []
  );
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  );
  const { getActitiviesByCategory } = useActivities();

  useEffect(() => {
    const data = getActitiviesByCategory(category as string);
    setCategoryActivities(data);
    setFilteredActivities(data);
  }, [activities]);

  const handleSearchFilter = (value: string) => {
    const filteredItems = categoryActivities.filter((item) =>
      item.name?.toLowerCase()?.includes(value.toLowerCase())
    );
    setFilteredActivities(filteredItems);
  };

  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        {/** Header */}
        <div className="flex flex-row space-x-2 items-center">
          {/** Back arrow */}
          <BackArrowButton />
          {/** Title */}
          <h2 className="text-white theme-light:text-black">
            <span className="capitalize">{category}</span> activities
          </h2>
        </div>
        <SearchBar onChange={(e) => handleSearchFilter(e)} />
        {filteredActivities.length > 0 ? (
          <LatestActivityCard
            activities={filteredActivities}
            activitySlotVisibleAmount={20}
            addFilters={true}
          />
        ) : (
          <EmptyCard
            title={"You don't have any activities"}
            description={"List of activities you've created will appear here."}
            button={
              <LinkButton path={"/addActivity"} className="cta">
                Add activity
              </LinkButton>
            }
          />
        )}
      </section>
    </div>
  );
};

export default ActivityCategory;

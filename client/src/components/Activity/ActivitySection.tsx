import ActivityCard from "./ActivityCard";
import { Link } from "react-router";

const ActivitySection = (props: {
  activitySlotVisibleAmount: number;
  viewMore: boolean;
}) => {
  return (
    <section>
      <div className="flex flex-row justify-between items-center">
        {/** Title */}
        <h2 className="text-white">Latest activities</h2>
        {/** View more */}
        {props.viewMore && (
          <Link to="/activities" className="text-dark-grey underline text-xs">
            View more
          </Link>
        )}
      </div>
      <ActivityCard
        activitySlotVisibleAmount={props.activitySlotVisibleAmount}
      />
    </section>
  );
};

export default ActivitySection;

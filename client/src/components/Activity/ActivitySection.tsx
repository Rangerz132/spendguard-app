import React from "react";
import ActivityCard from "./ActivityCard";

const ActivitySection = () => {
  return (
    <section>
      <div className="flex flex-row justify-between items-center">
        {/** Title */}
        <h2 className="text-white">Latest activities</h2>
        {/** View more */}
        <p className="text-dark-grey underline text-xs">View more</p>
      </div>
      <ActivityCard />
    </section>
  );
};

export default ActivitySection;

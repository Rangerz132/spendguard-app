import ActivityCard from "../components/Activity/ActivityCard";

const Activites = () => {
  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Title */}
          <h2 className="text-white">Latest activities</h2>
        </div>
        <ActivityCard activitySlotVisibleAmount={20} />
      </section>
    </div>
  );
};

export default Activites;

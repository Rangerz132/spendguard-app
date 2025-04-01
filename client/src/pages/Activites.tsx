import LatestActivityCard from "../components/Activity/LatestActivityCard";

const Activites = () => {
  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Title */}
          <h2 className="text-white">Latest activities</h2>
        </div>
        <LatestActivityCard activitySlotVisibleAmount={20} />
      </section>
    </div>
  );
};

export default Activites;

import ActivitySection from "../components/Activity/ActivitySection";

const Activites = () => {
  return (
    <div className="wrapper page-wrapper">
      <ActivitySection activitySlotVisibleAmount={20} viewMore={false} />
    </div>
  );
};

export default Activites;

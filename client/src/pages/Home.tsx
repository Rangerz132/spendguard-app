import ActivitySection from "../components/Activity/ActivitySection";
import OverviewSection from "../components/Overview/OverviewSection";

const Home = () => {
  return (
    <div className="wrapper page-wrapper">
      <OverviewSection />
      <ActivitySection activitySlotVisibleAmount={5} viewMore={true} />
    </div>
  );
};

export default Home;

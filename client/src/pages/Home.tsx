import ActivitySection from "../components/Activity/ActivitySection";
import OverviewSection from "../components/Overview/OverviewSection";

const Home = () => {
  return (
    <div className="wrapper page-wrapper">
      <OverviewSection />
      <ActivitySection />
    </div>
  );
};

export default Home;

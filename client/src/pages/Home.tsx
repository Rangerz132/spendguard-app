import { Link } from "react-router";
import Card from "../components/Card/Card";
import LatestActivityCard from "../components/Activity/LatestActivityCard";

const Home = () => {
  return (
    <div className="wrapper page-wrapper">
      <section>
        {/** Overview title */}
        <h2 className="text-white">Overview</h2>
        {/** Balance title */}
        <Card
          className="w-full"
          data={{
            title: "Total balance",
            value: 689,
            compared: {
              value: 5,
              isIncreasing: true,
            },
          }}
        />
        <div className="flex flex-row space-x-4">
          {/** Incomes title */}
          <Card
            className="basis-1/2"
            data={{
              title: "Incomes",
              value: 1024,
              compared: {
                value: 3,
                isIncreasing: true,
              },
            }}
          />
          {/** Expenses title */}
          <Card
            className="basis-1/2"
            data={{
              title: "Expenses",
              value: 335,
              compared: {
                value: 7,
                isIncreasing: false,
              },
            }}
          />
        </div>
      </section>
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Latest activity title */}
          <h2 className="text-white">Latest activities</h2>
          {/** View more */}
          <Link to="/activities" className="text-light-grey underline text-xs">
            View more
          </Link>
        </div>
        {/** Activity card */}
        <LatestActivityCard activitySlotVisibleAmount={5} />
      </section>
    </div>
  );
};

export default Home;

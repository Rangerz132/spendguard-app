import Card from "../components/Card/Card";
import LatestActivityCard from "../components/Activity/LatestActivityCard";
import ViewMore from "../components/UI/ViewMore";
import useActivities from "../hooks/useActivities";

const Home = () => {
  const { getExpensesAmount, getIncomesAmount, getBalanceAmount } =
    useActivities();

  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between">
          {/** Overview title */}
          <h2 className="text-white">Overview</h2>
          {/** View more */}
          <ViewMore path={"/analytics"} />
        </div>
        {/** Balance title */}
        <Card
          className="w-full"
          data={{
            title: "Total balance",
            value: getBalanceAmount(),
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
              value: getIncomesAmount(),
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
              value: getExpensesAmount(),
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
          <ViewMore path={"/activities"} />
        </div>
        {/** Activity card */}
        <LatestActivityCard activitySlotVisibleAmount={5} />
      </section>
    </div>
  );
};

export default Home;

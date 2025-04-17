import Card from "../components/Card/Card";
import LatestActivityCard from "../components/Activity/LatestActivityCard";
import ViewMore from "../components/UI/ViewMore";
import useActivities from "../hooks/useActivities";
import EmptyCard from "../components/Card/EmptyCard";
import LinkButton from "../components/UI/LinkButton";

const Home = () => {
  const { getExpensesAmount, getIncomesAmount, getBalanceAmount, activities } =
    useActivities();

  const activityShownAmount = 5;

  return (
    <div className="wrapper page-wrapper">
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Overview title */}
          <h2 className="text-white theme-light:text-black">Overview</h2>
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
          <h2 className="text-white theme-light:text-black">Budget</h2>
          {/** View more */}
          <ViewMore path={"/activities"} />
        </div>
        <EmptyCard
          title={"You don't have any budget"}
          description={"Your budget statistics would appear here"}
          button={<LinkButton path={"/budget"}>Add a budget</LinkButton>}
        />
      </section>
      <section>
        <div className="flex flex-row justify-between items-center">
          {/** Latest activity title */}
          <h2 className="text-white theme-light:text-black">
            Latest activities
          </h2>
          {/** View more */}
          <ViewMore path={"/activities"} />
        </div>
        {/** Activities */}
        {activities.length > 0 ? (
          <LatestActivityCard
            activitySlotVisibleAmount={activityShownAmount}
            activities={activities}
          />
        ) : (
          <EmptyCard
            title={"You don't have any activities"}
            description={"List of activities you've created will appear here."}
            button={<LinkButton path={"/addActivity"}>Add activity</LinkButton>}
          />
        )}
      </section>
    </div>
  );
};

export default Home;

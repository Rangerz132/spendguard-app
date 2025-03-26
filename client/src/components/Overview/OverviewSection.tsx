import Card from "../Card/Card";

const OverviewSection = () => {
  return (
    <section>
      <h2 className="text-white pt-20">Overview</h2>
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
  );
};

export default OverviewSection;

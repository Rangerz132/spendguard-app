import StatIndicator from "../StatIndicator/StatIndicator";

const CardInner = (props: {
  title: string;
  value: number;
  percValue: number;
  isIncreasing: boolean;
}) => {
  return (
    <div className="card-inner ">
      {/** Title */}
      <h3 className="text-grey capitalize">{props.title}</h3>
      {/** Value */}
      <h1 className="text-white">${props.value}</h1>
      <div className="flex flex-row space-x-2 items-center">
        {/** Stat indicator */}
        <StatIndicator
          percValue={props.percValue}
          isIncreasing={props.isIncreasing}
        />
        {/** Since Last month */}
        <p className="text-grey text-xs">Last month</p>
      </div>
    </div>
  );
};

export default CardInner;

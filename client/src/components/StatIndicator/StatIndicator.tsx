import { BiUpArrowAlt } from "react-icons/bi";
const StatIndicator = (props: { percValue: number; isIncreasing: boolean }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center px-2 py-1 space-x-1 rounded-md ${
        props.isIncreasing ? "bg-lime/50" : "bg-cherry/50"
      }`}
    >
      {/** Arrow icon */}
      <BiUpArrowAlt
        className={props.isIncreasing ? "text-lime" : "text-cherry rotate-180"}
      />
      {/** Text value */}
      <p className={`${props.isIncreasing ? "text-lime" : "text-cherry"}`}>
        {props.percValue}%
      </p>
    </div>
  );
};

export default StatIndicator;

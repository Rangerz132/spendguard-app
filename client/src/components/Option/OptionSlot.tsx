import React from "react";
import { OptionType } from "./type/OptionType";

const OptionSlot = (props: {
  activityOption: OptionType;
  data: any;
  onClick: () => void;
}) => {
  const { activityOption, data } = props;

  return (
    <div
      onClick={() => {
        activityOption.action(data);
        props.onClick();
      }}
      className="flex flex-row space-x-4 items-center cursor-pointer"
    >
      {/** Icon */}
      {React.cloneElement(activityOption.icon, {
        className: "w-6 h-6 text-grey",
      })}
      {/** Title */}
      <p className="text-white text-base">{activityOption.title}</p>
    </div>
  );
};

export default OptionSlot;

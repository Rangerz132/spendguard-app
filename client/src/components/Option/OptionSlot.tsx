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
        className: "w-6 h-6 text-theme-dark-grey theme-light:text-black",
      })}
      {/** Title */}
      <p className="text-white text-base theme-light:text-theme-light-dark-grey">
        {activityOption.title}
      </p>
    </div>
  );
};

export default OptionSlot;

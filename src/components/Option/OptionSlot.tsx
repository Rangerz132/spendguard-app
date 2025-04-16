import React, { useState } from "react";
import { OptionType } from "./type/OptionType";

const OptionSlot = (props: {
  activityOption: OptionType;
  data: any;
  onClick: () => void;
}) => {
  const { activityOption, data } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
      <p
        className={` text-base transition ${
          isHover
            ? "text-indigo"
            : "text-white theme-light:text-theme-light-dark-grey"
        }`}
      >
        {activityOption.title}
      </p>
    </div>
  );
};

export default OptionSlot;

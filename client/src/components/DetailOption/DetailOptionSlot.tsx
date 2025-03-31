import React from "react";
import { ActivityOptionType } from "./type/activityOptionType";

const DetailOptionSlot = (props: {
  activityOption: ActivityOptionType;
  data: any;
}) => {
  return (
    <div
      onClick={() => props.activityOption.action(props.data)}
      className="flex flex-row space-x-4 items-center cursor-pointer"
    >
      {/** Icon */}
      {React.cloneElement(props.activityOption.icon, {
        className: "w-6 h-6 text-grey",
      })}
      {/** Title */}
      <p className="text-white text-base">{props.activityOption.title}</p>
    </div>
  );
};

export default DetailOptionSlot;

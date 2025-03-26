import React from "react";
import { ActivityType } from "./type/ActivityType";
import formatDate from "../../utils/dateUtils";

const ActivitySlot = (props: { data: ActivityType }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-2">
        {/** Icon */}
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center`}
          style={{ backgroundColor: props.data.category.color }}
        >
          {React.cloneElement(props.data.category.icon, {
            className: `w-7 h-7 text-black/80`,
          })}
        </div>
        <div className="flex flex-col">
          {/** Name */}
          <p className="text-white">{props.data.name}</p>
          {/** Date */}
          <p className="text-xs text-grey">
            {formatDate(props.data.createdAt)}
          </p>
        </div>
      </div>
      {/** Amount */}
      <p
        className={` text-sm ${
          props.data.isExpense ? "text-cherry" : "text-lime"
        }`}
      >
        ${props.data.isExpense ? "-" : ""}
        {props.data.amount}
      </p>
    </div>
  );
};

export default ActivitySlot;

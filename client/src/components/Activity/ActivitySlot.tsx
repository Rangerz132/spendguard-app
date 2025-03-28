import React from "react";
import { ActivityType } from "./type/ActivityType";
import formatDate from "../../utils/dateUtils";
import { getFullCategory } from "./type/ActivityCategoryType";

const ActivitySlot = (props: { data: ActivityType }) => {
  const category = getFullCategory(props.data.category);
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-2">
        {/** Icon */}
        <div
          className={`w-10 h-10 rounded-md flex items-center justify-center`}
          style={{ backgroundColor: category.color }}
        >
          {React.cloneElement(getFullCategory(category.name).icon, {
            className: `w-7 h-7 text-black/80`,
          })}
        </div>
        <div className="flex flex-col">
          {/** Name */}
          <p className="text-white">{props.data.name}</p>
          {/** Date */}
          <p className="text-[10px] text-grey">
            {formatDate(props.data.createdAt)}
          </p>
        </div>
      </div>
      {/** Amount */}
      <p className={`${props.data.isExpense ? "text-cherry" : "text-lime"}`}>
        ${props.data.isExpense ? "-" : ""}
        {props.data.amount}
      </p>
    </div>
  );
};

export default ActivitySlot;

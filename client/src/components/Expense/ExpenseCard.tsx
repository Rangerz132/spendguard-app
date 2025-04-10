import React, { JSX } from "react";
import { getFullCategory } from "../Activity/type/ActivityCategoryType";
import StatIndicator from "../StatIndicator/StatIndicator";

const ExpenseCard = (props: {
  className?: string;
  category: string;
  value: number;
}) => {
  const category = getFullCategory(props.category);
  return (
    <div className={`${props.className} card min-w-40 shrink-0`}>
      <div className="card-inner ">
        <div className="flex flex-row space-x-2 items-center">
          {/** Icon category*/}
          <div
            className={`w-8 h-8 rounded-md flex items-center justify-center`}
            style={{ backgroundColor: category.color }}
          >
            {React.cloneElement(category.icon as JSX.Element, {
              className: "",
            })}
          </div>
          {/** Title category*/}
          <h3 className="text-theme-dark-grey capitalize theme-light:text-theme-light-dark-grey">
            {props.category}
          </h3>
        </div>

        {/** Value */}
        <h1 className="text-white theme-light:text-black">${props.value}</h1>
        <div className="flex flex-row space-x-2 items-center">
          {/** Stat indicator */}
          <StatIndicator percValue={5} isIncreasing={true} />
          {/** Since Last month */}
          <p className="text-theme-dark-grey text-xs theme-light:text-theme-light-dark-grey">
            Last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;

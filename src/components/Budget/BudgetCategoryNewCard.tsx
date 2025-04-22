import React, { JSX, useEffect, useState } from "react";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import {
  ActivityCategoryType,
  activityCategoryTypeMap,
} from "../Activity/type/ActivityCategoryType";

const BudgetCategoryNewCard = (props: {
  budgetCategory: BudgetCategoryType;
}) => {
  const [activityCategory, setActivityCategory] =
    useState<ActivityCategoryType | null>(null);

  useEffect(() => {
    const data = activityCategoryTypeMap.get(props.budgetCategory.category);
    setActivityCategory(data);
  }, []);
  return (
    activityCategory && (
      <div className="card">
        <div className="card-inner ">
          <div className="flex flex-row space-x-2 items-center">
            {/** Icon category*/}

            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center`}
              style={{ backgroundColor: activityCategory!.color }}
            >
              {React.cloneElement(activityCategory!.icon as JSX.Element, {
                className: "",
              })}
            </div>

            {/** Title category*/}
            <h3 className="text-theme-dark-grey capitalize theme-light:text-theme-light-dark-grey">
              {props.budgetCategory.category}
            </h3>
          </div>

          {/** Max Value */}
          <div className="flex flex-row items-end space-x-1">
            <h1 className="text-white theme-light:text-black">
              ${props.budgetCategory.amount}
            </h1>
          </div>
        </div>
      </div>
    )
  );
};

export default BudgetCategoryNewCard;

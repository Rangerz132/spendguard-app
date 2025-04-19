import { JSX, useEffect, useMemo, useState } from "react";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import {
  ActivityCategoryType,
  activityCategoryTypeMap,
} from "../Activity/type/ActivityCategoryType";
import React from "react";
import Gauge from "../UI/Gauge";
import useActivities from "../../hooks/useActivities";

const BudgetCategoryCard = (props: { data: BudgetCategoryType }) => {
  const [activityCategoryType, setActivityCategoryType] =
    useState<ActivityCategoryType | null>(null);
  const [budgetAmount, setBudgetAmount] = useState<number>(0);

  const { getExpensesAmountByCategory } = useActivities();

  const expenseAmount = useMemo(() => {
    return getExpensesAmountByCategory(props.data.category);
  }, [props.data.category, getExpensesAmountByCategory]);

  useEffect(() => {
    const activityType = activityCategoryTypeMap.get(props.data.category);
    setActivityCategoryType(activityType);
    setBudgetAmount(props.data.amount);
  }, [props.data.amount, props.data.category]); // Only run when category changes

  return (
    <div className="card">
      <div className="card-inner ">
        <div className="flex flex-row space-x-2 items-center">
          {/** Icon category*/}
          {activityCategoryType && (
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center`}
              style={{ backgroundColor: activityCategoryType.color }}
            >
              {React.cloneElement(activityCategoryType.icon as JSX.Element, {
                className: "",
              })}
            </div>
          )}
          {/** Title category*/}
          <h3 className="text-theme-dark-grey capitalize theme-light:text-theme-light-dark-grey">
            {props.data.category}
          </h3>
        </div>

        {/** Max Value */}
        <div className="flex flex-row items-end space-x-1">
          <h1 className="text-white theme-light:text-black">
            ${expenseAmount}
          </h1>
          <h3 className="text-theme-dark-grey"> /{budgetAmount}</h3>
        </div>

        {/** Gauge */}
        {activityCategoryType && (
          <Gauge value={expenseAmount} maxValue={budgetAmount} />
        )}
      </div>
    </div>
  );
};

export default BudgetCategoryCard;

import { JSX, useEffect, useMemo, useState } from "react";
import { BudgetCategoryType } from "./type/BudgetCategoryType";
import {
  ActivityCategoryType,
  activityCategoryTypeMap,
} from "../Activity/type/ActivityCategoryType";
import React from "react";
import Gauge from "../UI/Gauge";
import useActivities from "../../hooks/useActivities";
import { useNavigate } from "react-router";
import { BudgetType } from "./type/BudgetType";

const BudgetCategoryCard = (props: {
  data: BudgetCategoryType;
  budget: BudgetType;
}) => {
  const navigate = useNavigate();
  const [activityCategoryType, setActivityCategoryType] =
    useState<ActivityCategoryType | null>(null);
  const [budgetAmount, setBudgetAmount] = useState<number>(0);

  const { getExpensesAmountByCategoryWithinDateRange } = useActivities();

  const expenseAmount = useMemo(() => {
    return getExpensesAmountByCategoryWithinDateRange(
      props.data.category,
      props.budget.from as string | Date,
      props.budget.to as string | Date
    );
  }, [props.data.category, getExpensesAmountByCategoryWithinDateRange]);

  useEffect(() => {
    const activityType = activityCategoryTypeMap.get(props.data.category);
    setActivityCategoryType(activityType);
    setBudgetAmount(props.data.amount);
  }, [props.data.amount, props.data.category]);

  return (
    <div
      className="card cursor-pointer"
      onClick={() =>
        navigate(
          `/activityCategory/${activityCategoryType?.name}?start=${props.budget.from}&end=${props.budget.to}`
        )
      }
    >
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
          <h3 className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
            {" "}
            /{budgetAmount}
          </h3>
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

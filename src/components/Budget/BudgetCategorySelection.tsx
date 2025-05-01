import { JSX, useEffect, useState } from "react";
import {
  ActivityCategoryType,
  categoryTypes,
} from "../Activity/type/ActivityCategoryType";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BudgetCategoryType } from "./type/BudgetCategoryType";

const BudgetCategorySelection = (props: {
  onCategorySelect: (e: unknown, category: ActivityCategoryType) => void;
  onPrevious: () => void;
  usedBudgetCategories: BudgetCategoryType[];
}) => {
  const [validBudgetCategories, setValidBudgetCategories] = useState<
    ActivityCategoryType[]
  >([]);

  useEffect(() => {
    const data = categoryTypes.filter(
      (category) =>
        !props.usedBudgetCategories.some(
          (used) => used.category === category.name
        )
    );
    setValidBudgetCategories(data);
  }, [props.usedBudgetCategories]);

  return (
    <section>
      <div className="flex flex-row space-x-2 items-center">
        {/** Back arrow */}
        <BiChevronLeft
          onClick={() => props.onPrevious()}
          className="icon text-white theme-light:text-black cursor-pointer"
        />
        {/** Title */}
        <h2 className="text-white theme-light:text-black">Select a category</h2>
      </div>

      {/** Categories */}
      {validBudgetCategories.length && (
        <div className="grid grid-cols-2 gap-3">
          {validBudgetCategories.map((category) => (
            <div
              key={category.name}
              className="card"
              onClick={(e) => {
                props.onCategorySelect(e, category);
              }}
            >
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
                <h3 className="text-theme-dark-grey capitalize theme-light:text-theme-light-dark-grey text-ellipsis line-clamp-1">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BudgetCategorySelection;

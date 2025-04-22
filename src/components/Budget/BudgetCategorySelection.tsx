import { JSX } from "react";
import BackArrowButton from "../UI/BackArrowButton";
import { categoryTypes } from "../Activity/type/ActivityCategoryType";
import React from "react";

const BudgetCategorySelection = () => {
  return (
    <section>
      <div className="flex flex-row space-x-2 items-center">
        {/** Back arrow */}
        <BackArrowButton path="/" />
        {/** Title */}
        <h2 className="text-white theme-light:text-black">Select a category</h2>
      </div>
      {/** Categories */}
      <div className="grid grid-cols-2 gap-3">
        {categoryTypes.map((category) => (
          <div key={category.name} className="card" onClick={() => {}}>
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
    </section>
  );
};

export default BudgetCategorySelection;

import { useState } from "react";
import Button from "../UI/Button";
import ToggleButton from "../UI/ToggleButton";
import { BiCheck } from "react-icons/bi";
import { ActivityType } from "../Activity/type/ActivityType";
import { categoryTypes } from "../Activity/type/ActivityCategoryType";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const ActivityCard = (props: {
  initialActivity?: ActivityType;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    activity: ActivityType
  ) => void;
}) => {
  const [activity, setActivity] = useState<ActivityType>(
    props.initialActivity || {
      id: uuidv4(),
      name: "",
      description: "",
      amount: 0,
      isExpense: true,
      category: categoryTypes[0].name,
      createdAt: new Date().toISOString().substring(0, 10),
    }
  );

  const updateActivity = (key: string, value: any) => {
    setActivity({ ...activity, [key]: value });
  };

  const handleToggle = () => {
    setActivity((prev) => ({ ...prev, isExpense: !prev.isExpense }));
  };

  return (
    <div className="card">
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => props.onSubmit(e, activity)}
      >
        {/** Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter a name..."
            defaultValue={props.initialActivity?.name || ""}
            onChange={(e) =>
              updateActivity(e.currentTarget.name, e.currentTarget.value)
            }
          ></input>
        </div>

        {/** Description */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Description</label>
          <textarea
            name="description"
            placeholder="Enter a description..."
            defaultValue={props.initialActivity?.description || ""}
            onChange={(e) =>
              updateActivity(e.currentTarget.name, e.currentTarget.value)
            }
          ></textarea>
        </div>

        {/** Category */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Category</label>
          <select
            className="text-grey"
            name="category"
            defaultValue={activity.category}
            onChange={(e) =>
              updateActivity(e.currentTarget.name, e.currentTarget.value)
            }
          >
            {categoryTypes.map((category, index) => (
              <option
                key={index}
                className="flex flex-row space-x-2 text-grey hover:bg-indigo"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row justify-between items-center">
          {/** Expense */}
          <div className="flex flex-row space-x-2  items-center w-[50%]">
            <label className="text-white">Expense</label>
            <ToggleButton
              onClick={handleToggle}
              className={
                "w-6 h-6 bg-black rounded-md flex items-center justify-center"
              }
              children={
                activity.isExpense && <BiCheck className="text-indigo" />
              }
            />
          </div>
          {/** Amount */}
          <div className="flex flex-col space-y-2  w-[50%]">
            <input
              type="number"
              name="amount"
              step="0.00"
              defaultValue={props.initialActivity?.amount || 0}
              placeholder="0"
              className="text-right"
              onChange={(e) =>
                updateActivity(e.currentTarget.name, e.currentTarget.value)
              }
            ></input>
          </div>
        </div>

        {/** Button */}
        <Button className="cta-1" type="submit">
          {props.initialActivity ? " Update activity" : "Add activity"}
        </Button>
      </form>
    </div>
  );
};

export default ActivityCard;

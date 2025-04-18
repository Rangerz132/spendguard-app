import { useState } from "react";
import Button from "../UI/Button";
import ToggleButton from "../UI/ToggleButton";
import { BiCheck } from "react-icons/bi";
import { ActivityType } from "../Activity/type/ActivityType";
import { categoryTypes } from "../Activity/type/ActivityCategoryType";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import FieldError from "../Form/FieldError";
import { ValidatorService } from "../../services/inputValidation";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import supabase from "../../config/supabaseConfig";

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
      is_expense: true,
      category: categoryTypes[0].name,
      created_at: new Date(),
      user_id: null,
    }
  );
  const [errors, setErrors] = useState({ name: "", amount: "" });
  const { session } = useAuthContext(AuthContext);

  const updateActivity = (key: string, value: any) => {
    setActivity({ ...activity, [key]: value });
  };

  const handleToggle = () => {
    setActivity((prev) => ({ ...prev, is_expense: !prev.is_expense }));
  };

  const validate = (activity: ActivityType) => {
    const newErrors = {
      name: ValidatorService.minCharacters(activity.name as string, 3),
      amount: ValidatorService.cantBeLowerOrEqualThan(
        activity.amount as number,
        0
      ),
    };

    setErrors(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;

    const updatedActivity = { ...activity, user_id: userId as string };

    if (validate(updatedActivity)) {
      console.log("Form contains errors, fix them first.");
      return;
    }

    props.onSubmit(e, updatedActivity);
  };

  return (
    <div className="card">
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/** Name */}
        <div className="flex flex-col space-y-2 relative">
          <label className="text-white theme-light:text-black">
            <span className="text-indigo">*</span> Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter a name..."
            defaultValue={props.initialActivity?.name || ""}
            onChange={(e) =>
              updateActivity(e.currentTarget.name, e.currentTarget.value)
            }
          ></input>
          <FieldError
            message={errors.name}
            className="absolute right-0 top-0 text-right"
          />
        </div>

        {/** Description */}
        <div className="flex flex-col space-y-2">
          <label className="text-white theme-light:text-black">
            Description
          </label>
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
          <label className="text-white theme-light:text-black">
            <span className="text-indigo">*</span> Category
          </label>
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
                className="flex flex-row space-x-2 text-grey hover:bg-indigo theme-light:text-theme-light-grey"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row justify-between items-center">
          {/** Expense */}
          <div className="flex flex-row space-x-2 items-center w-[50%]">
            <label className="text-white theme-light:text-black">
              <span className="text-indigo">*</span> Expense
            </label>
            <ToggleButton
              onClick={handleToggle}
              className={
                "w-6 h-6 bg-black rounded-md flex items-center justify-center theme-light:bg-white"
              }
              children={
                activity.is_expense && <BiCheck className="text-indigo" />
              }
            />
          </div>
          {/** Amount */}
          <div className="flex flex-col space-y-2  w-[50%] relative">
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
            <FieldError
              message={errors.amount}
              className="absolute right-0 -top-5 text-right"
            />
          </div>
        </div>

        {/** Button */}
        <Button className="cta" type="submit">
          {props.initialActivity ? " Update activity" : "Add activity"}
        </Button>
      </form>
    </div>
  );
};

export default ActivityCard;

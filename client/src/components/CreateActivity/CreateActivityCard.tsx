import { useState } from "react";
import Button from "../UI/Button";
import ToggleButton from "../UI/ToggleButton";
import { BiCheck } from "react-icons/bi";
import { ActivityType } from "../Activity/type/ActivityType";
import { v4 as uuidv4 } from "uuid";
import APIService from "../../api/APIService";

const CreateActivityCard = () => {
  const [isExpense, setIsExpense] = useState<boolean>(true);

  const [activity, setActivity] = useState<ActivityType>({
    id: "",
    name: "",
    description: "",
    amount: 0,
    isExpense: isExpense,
    category: "music",
    createdAt: "",
  });

  const updateActivity = (key: string, value: any) => {
    setActivity({ ...activity, [key]: value });
  };

  const handleToggle = () => {
    setIsExpense((prevState) => {
      const updatedExpense = !prevState;
      updateActivity("isExpense", updatedExpense);
      return updatedExpense;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActivity((prevState) => {
      const updatedActivity = {
        ...prevState,
        id: uuidv4(),
        createdAt: new Date(Date.now()).toISOString(),
      };

      APIService.createActivity(updatedActivity);

      return updatedActivity;
    });
  };

  return (
    <div className="card">
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/** Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter a name..."
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
            onChange={(e) =>
              updateActivity(e.currentTarget.name, e.currentTarget.value)
            }
          ></textarea>
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
              children={isExpense && <BiCheck className="text-indigo" />}
            />
          </div>
          {/** Amount */}
          <div className="flex flex-col space-y-2  w-[50%]">
            <input
              type="number"
              name="amount"
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
          Add activity
        </Button>
      </form>
    </div>
  );
};

export default CreateActivityCard;

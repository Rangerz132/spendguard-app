import { useState } from "react";
import Button from "../UI/Button";
import ToggleButton from "../UI/ToggleButton";
import { BiCheck } from "react-icons/bi";

const CreateActivityCard = () => {
  const [isExpense, setIsExpense] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpense((prevState) => !prevState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <input type="text" name="name" placeholder="Enter a name..."></input>
        </div>

        {/** Description */}
        <div className="flex flex-col space-y-2">
          <label className="text-white">Description</label>
          <textarea
            name="description"
            placeholder="Enter a description..."
          ></textarea>
        </div>

        {/** Expense */}
        <div className="flex flex-row justify-between items-center">
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
          <div className="flex flex-col space-y-2  w-[50%]">
            <input
              type="number"
              name="amount"
              placeholder="0.00"
              className="text-right"
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

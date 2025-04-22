import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetType } from "./type/BudgetType";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { ValidatorService } from "../../services/inputValidation";
import supabase from "../../config/supabaseConfig";
import FieldError from "../Form/FieldError";
import LinkButton from "../UI/LinkButton";
import Button from "../UI/Button";

const BudgetFormCard = (props: {
  initialBudget?: BudgetType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, budget: BudgetType) => void;
}) => {
  const [budget, setBudget] = useState<BudgetType>(
    props.initialBudget || {
      id: uuidv4(),
      name: "",
      description: "",
      created_at: new Date().toISOString(),
      user_id: null,
    }
  );
  const [errors, setErrors] = useState({ name: "" });
  const { session } = useAuthContext(AuthContext);

  const updateBudget = (key: string, value: any) => {
    setBudget({ ...budget, [key]: value });
  };

  const validate = (activity: BudgetType) => {
    const newErrors = {
      name: ValidatorService.minCharacters(activity.name as string, 3),
    };

    setErrors(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;

    const updatedBudget = { ...budget, user_id: userId as string };

    if (validate(updatedBudget)) {
      console.log("Form contains errors, fix them first.");
      return;
    }

    props.onSubmit(e, updatedBudget);
  };

  return (
    <div className="card">
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col space-y-2 relative">
          <label className="text-white theme-light:text-black">
            <span className="text-indigo">*</span> Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter a name..."
            defaultValue={props.initialBudget?.name || ""}
            onChange={(e) =>
              updateBudget(e.currentTarget.name, e.currentTarget.value)
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
            defaultValue={props.initialBudget?.description || ""}
            onChange={(e) =>
              updateBudget(e.currentTarget.name, e.currentTarget.value)
            }
          ></textarea>
        </div>
        {/** Categories */}
        <div className="flex flex-col space-y-2">
          <label className="text-white theme-light:text-black">
            <span className="text-indigo">*</span> Categories
          </label>
          <LinkButton path={"/"} className="cta">
            Add a new category
          </LinkButton>
        </div>
        {/** Date */}
        <div className="flex flex-col space-y-2">
          <label className="text-white theme-light:text-black">
            <span className="text-indigo">*</span> Select a date limit
          </label>
          <input
            name="description"
            type="date"
            onChange={(e) =>
              updateBudget(e.currentTarget.name, e.currentTarget.value)
            }
          ></input>
        </div>
        <Button className="cta">Add budget</Button>
      </form>
    </div>
  );
};

export default BudgetFormCard;

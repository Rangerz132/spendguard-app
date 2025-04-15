import { useDispatch } from "react-redux";
import ActivityCard from "../components/Activity/ActivityCard";
import { useNavigate } from "react-router";
import { setStatus } from "../store/status/statusSlice";

import { ActivityType } from "../components/Activity/type/ActivityType";
import { createActivity } from "../services/supabaseService";

const AddActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    activity: ActivityType
  ) => {
    e.preventDefault();
    await createActivity(activity);

    navigate("/");
    dispatch(
      setStatus({
        message: "You successfully created a new activity",
        isShowed: true,
        isValid: true,
      })
    );
  };

  return (
    <div className="wrapper page-wrapper">
      <section>
        <h2 className="text-white theme-light:text-black">
          Create a new activity
        </h2>
        <ActivityCard onSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default AddActivity;

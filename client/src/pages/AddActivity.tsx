import { useDispatch } from "react-redux";
import ActivityCard from "../components/Activity/ActivityCard";
import { useNavigate } from "react-router";
import { setStatus } from "../store/status/statusSlice";
import APIService from "../api/APIService";

import { ActivityType } from "../components/Activity/type/ActivityType";

const AddActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    activity: ActivityType
  ) => {
    e.preventDefault();
    APIService.createActivity(activity);
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
        <h2 className="text-white">Create a new activity</h2>
        <ActivityCard onSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default AddActivity;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ActivityType } from "../../../components/Activity/type/ActivityType";
import { createActivity } from "../../../services/supabase/activityService";
import { setStatus } from "../../../store/status/statusSlice";
import { addActivity } from "../../../store/activities/activitiesSlice";
import ActivityFormCard from "../../../components/Activity/ActivityFormCard";

const AddActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    activity: ActivityType
  ) => {
    e.preventDefault();

    try {
      await createActivity({
        ...activity,
        created_at: new Date(activity.created_at as string),
        date: new Date(activity.date as string),
      });
      dispatch(addActivity(activity));

      navigate("/");
      dispatch(
        setStatus({
          message: "You successfully created a new activity.",
          isShowed: true,
          isValid: true,
        })
      );
    } catch (error) {
      dispatch(
        setStatus({
          message: "An error occured while creating an activty.",
          isShowed: true,
          isValid: false,
        })
      );
      console.log(error);
    }
  };

  return (
    <div className="wrapper page-wrapper">
      <section>
        <h2 className="text-white theme-light:text-black">
          Create a new activity
        </h2>
        <ActivityFormCard onSubmit={handleSubmit} />
      </section>
    </div>
  );
};

export default AddActivity;

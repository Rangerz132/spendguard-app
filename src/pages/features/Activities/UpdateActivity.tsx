import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ActivityType } from "../../../components/Activity/type/ActivityType";
import { setStatus } from "../../../store/status/statusSlice";
import BackArrowButton from "../../../components/UI/BackArrowButton";
import { RootState } from "../../../store/store";
import { updateActivity } from "../../../services/supabase/activityService";
import { updateActivity as updateActivityRedux } from "../../../store/activities/activitiesSlice";
import ActivityFormCard from "../../../components/Activity/ActivityFormCard";

const UpdateActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activity = useSelector((state: RootState) =>
    state.activities.find((activity) => activity.id === id)
  );

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    updatedActivity: ActivityType
  ) => {
    e.preventDefault();
    try {
      await updateActivity({
        ...updatedActivity,
        created_at: new Date(updatedActivity.created_at as string),
      } as ActivityType);

      dispatch(updateActivityRedux(updatedActivity as ActivityType));
      navigate("/");
      dispatch(
        setStatus({
          message: "You successfully updated an activity.",
          isShowed: true,
          isValid: true,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        setStatus({
          message: "An error occured while updating an activity.",
          isShowed: true,
          isValid: true,
        })
      );
    }
  };

  return (
    <div className="wrapper page-wrapper py-6">
      <section>
        <div className="flex flex-row space-x-2 items-center">
          <BackArrowButton />
          <h2 className="text-white theme-light:text-black">Update activity</h2>
        </div>

        {activity && (
          <ActivityFormCard
            onSubmit={handleSubmit}
            initialActivity={activity}
          />
        )}
      </section>
    </div>
  );
};

export default UpdateActivity;

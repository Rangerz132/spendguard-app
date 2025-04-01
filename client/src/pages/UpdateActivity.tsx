import { useNavigate, useParams } from "react-router";
import ActivityCard from "../components/Activity/ActivityCard";
import { ActivityType } from "../components/Activity/type/ActivityType";
import APIService from "../api/APIService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../store/status/statusSlice";

const UpdateActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState<ActivityType | undefined>(undefined);

  useEffect(() => {
    const fetchActivity = async () => {
      if (!id) {
        return;
      }
      const activityData = await APIService.getActivityById(id);
      setActivity(activityData);
    };

    fetchActivity();
  }, [id]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    updatedActivity: ActivityType
  ) => {
    e.preventDefault();
    setActivity(() => ({ ...updatedActivity }));

    APIService.updateActivity(updatedActivity as ActivityType).then(() => {
      navigate("/");
      dispatch(
        setStatus({
          message: "You successfully updated an activity",
          isShowed: true,
          isValid: true,
        })
      );
    });
  };

  return (
    <div className="wrapper page-wrapper">
      <section>
        <h2 className="text-white">Update activity</h2>
        {activity && (
          <ActivityCard onSubmit={handleSubmit} initialActivity={activity} />
        )}
      </section>
    </div>
  );
};

export default UpdateActivity;

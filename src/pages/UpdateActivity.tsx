import { useNavigate, useParams } from "react-router";
import ActivityCard from "../components/Activity/ActivityCard";
import { ActivityType } from "../components/Activity/type/ActivityType";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../store/status/statusSlice";
import { getActivityById, updateActivity } from "../services/supabaseService";

const UpdateActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState<ActivityType | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      if (!id) {
        return;
      }
      const activityData = await getActivityById(id);
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

    updateActivity(updatedActivity as ActivityType).then(() => {
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
        <h2 className="text-white theme-light:text-black">Update activity</h2>
        {activity && (
          <ActivityCard onSubmit={handleSubmit} initialActivity={activity} />
        )}
      </section>
    </div>
  );
};

export default UpdateActivity;

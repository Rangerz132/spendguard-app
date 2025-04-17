import { ActivityType } from "../components/Activity/type/ActivityType";
import supabase from "../config/supabaseConfig";
import { useAuthContext } from "../contexts/AuthContext";

// GET
export const getActivities = async (): Promise<ActivityType[]> => {
  const { data, error } = await supabase.from("activity").select();

  if (error) {
    console.error("Error fetching activities:", error);
    return [];
  }

  return data ?? [];
};

// GET
export const getActivityById = async (
  activityId: string
): Promise<ActivityType | null> => {
  const { data, error } = await supabase
    .from("activity")
    .select()
    .eq("id", activityId)
    .single();

  if (error) {
    console.error("Error fetching activity:", error);
    return null;
  }

  return data as ActivityType;
};

// POST
export const createActivity = async (
  activity: ActivityType
): Promise<ActivityType | null> => {
  const { data, error } = await supabase
    .from("activity")
    .insert([activity])
    .select()
    .single();

  if (error) {
    console.error("Error creating activity:", error);
    return null;
  }

  return data;
};

// PUT
export const updateActivity = async (
  activity: ActivityType
): Promise<ActivityType | null> => {
  const { data, error } = await supabase
    .from("activity")
    .update(activity)
    .eq("id", activity.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating activity:", error);
    return null;
  }

  return data;
};

// DELETE
export const deleteActivity = async (activityId: string): Promise<boolean> => {
  const { error } = await supabase
    .from("activity")
    .delete()
    .eq("id", activityId);

  if (error) {
    console.error("Error deleting activity:", error);
    return false;
  }

  return true;
};

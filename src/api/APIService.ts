import axios from "axios";
import { ActivityType } from "../components/Activity/type/ActivityType";

const BASE_URL = "http://localhost:3200";

export default class APIService {
  constructor() {}

  static async getAPI() {
    return (await axios.get(BASE_URL)).data;
  }

  // GET
  static async getActivities(): Promise<ActivityType[]> {
    return (await axios.get(`${BASE_URL}/activities`)).data;
  }

  // GET
  static async getActivityById(activityId: string): Promise<ActivityType> {
    const activities = (await axios.get(`${BASE_URL}/activities`)).data;

    return activities.find(
      (activity: ActivityType) => activity.id === activityId
    ) as ActivityType;
  }

  // POST
  static async createActivity(activity: ActivityType) {
    return (await axios.post(`${BASE_URL}/activities`, activity)).data;
  }

  // PUT
  static async updateActivity(activity: ActivityType) {
    return (await axios.put(`${BASE_URL}/activities/${activity.id}`, activity))
      .data;
  }

  // DELETE
  static async deleteActivity(activityId: string) {
    return (await axios.delete(`${BASE_URL}/activities/${activityId}`)).data;
  }
}

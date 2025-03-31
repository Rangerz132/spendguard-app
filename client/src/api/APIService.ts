import axios from "axios";
import { ActivityType } from "../components/Activity/type/ActivityType";

const BASE_URL = "http://localhost:3200";

export default class APIService {
  constructor() {}

  static async getAPI() {
    return (await axios.get(BASE_URL)).data;
  }

  // GET
  static async getActivities() {
    return (await axios.get(`${BASE_URL}/activities`)).data;
  }

  // POST
  static async createActivity(activity: ActivityType) {
    return (await axios.post(`${BASE_URL}/activities`, activity)).data;
  }

  // PUT
  static async updateActivity(activityId: string) {
    return (await axios.put(`${BASE_URL}/activities/${activityId}`)).data;
  }

  // DELETE
  static async deleteActivity(activityId: string) {
    console.log("delete");
    return (await axios.delete(`${BASE_URL}/activities/${activityId}`)).data;
  }
}

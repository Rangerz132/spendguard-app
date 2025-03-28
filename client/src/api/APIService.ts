import axios from "axios";

const BASE_URL = "http://localhost:3200";

export default class APIService {
  constructor() {}

  static async getAPI() {
    return (await axios.get(BASE_URL)).data;
  }

  static async getActivities() {
    return (await axios.get(`${BASE_URL}/activities`)).data;
  }
}

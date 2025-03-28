import axios from "axios";

const BASE_URL = "localhost:3200";

export default class APIService {
  constructor() {}

  static async getAPI() {
    return (await axios.get(BASE_URL)).data;
  }
}

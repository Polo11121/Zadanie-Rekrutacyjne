import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.stackexchange.com/2.3",
});

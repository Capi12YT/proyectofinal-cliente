import axios from "axios";
export function registerService(post) {

  return axios.post("Users/Create",post);
}

import axios from "axios";
export function registerService(post) {
  return axios.post("http://localhost:8080/Users/Create",post);
}

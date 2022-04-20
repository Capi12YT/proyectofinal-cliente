import axios from "axios";

export function loginServicio(post) {
  return axios.post("http://localhost:8080/Users/Login",post)
}

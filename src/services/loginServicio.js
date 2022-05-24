import axios from "axios";

export function loginServicio(post) {
 
  return axios.post("Users/Login",post)
}

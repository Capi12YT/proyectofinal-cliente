import axios from "axios";

// usuarios ordenados de manera descendente
export function usuariosSort() {

  return axios.get("Users/Sort")
}
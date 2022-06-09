import axios from "axios";
let url = "Users/";
// usuarios ordenados de manera descendente
export function usuariosSort() {

  return axios.get(url+"Last")
}

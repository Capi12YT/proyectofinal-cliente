import axios from "axios";

export function contadoreServicio() {
  return axios.get("http://localhost:8080/Contadores/All")
}
import axios from "axios";

export function contadoreServicio() {
  return axios.get("Contadores/All")
}
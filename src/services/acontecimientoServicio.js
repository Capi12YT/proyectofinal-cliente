import axios from "axios";

export function acontecimientoAllServicio() {
  return axios.get("http://localhost:8080/Acontecimiento/All")
}
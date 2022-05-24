import axios from "axios";

export function acontecimientoAllServicio() {

  return axios.get("Acontecimiento/All")
}
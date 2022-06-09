import axios from "axios";


let url = "Acontecimiento/"
export function acontecimientoAllServicio() {

  return axios.get(url+"All")
}

export function paginationServiceAcontecimiento(page) {
  return axios.get(url+"Pagination?page="+page);
}
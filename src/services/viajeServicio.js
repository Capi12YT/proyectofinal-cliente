import axios from "axios";
let url = "Viaje/";
export function createService(post) {
  return axios.post(url+"Create",post);
}
export function allService() {
  return axios.get(url+"All");
}
export function deleteByIdService(id) {
  return axios.get(url+"Delete/"+id);
}
export function viajeByIdService(id) {
  return axios.get(url+id);
}
export function updateService(body) {
  return axios.put(url+"Update",body);
}
export function deleteService(id) {
  return axios.delete(url+"Delete/"+id);
}
export function lastService() {
  return axios.get(url+"Last");

}export function filterService(filtros) {
  return axios.post(url+"Filter",filtros);
}

export function filterAcontecimientoService(nombreAcontecimiento) {
  return axios.post(url+"Filter/Acontecimiento",nombreAcontecimiento);
}
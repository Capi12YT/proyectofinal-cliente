import axios from "axios";
let url = "Users/";
export function createService(post) {
  return axios.post(url+"Create",post);
}
export function allService() {
  return axios.get(url+"Admin");
}
export function adminByIdService(id) {
  return axios.get(url+id);
}
export function updateService(body) {
  return axios.put(url+"Update",body);
}
export function deleteService(id) {
  return axios.delete(url+"Delete/"+id);
}
export function paginationService(page) {
  return axios.get(url+"Admin/Pagination?page="+page);
}
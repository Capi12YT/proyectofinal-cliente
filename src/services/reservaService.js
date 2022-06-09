import axios from "axios";
const url = "Reserva/";
export function reservaAllServicio() {
    return axios.get(url+"All")
  }
export function reservaAllUserServicio(id) {
    return axios.get(url+"All/"+id)
  }
export function reservaDeleteServicio(id) {
    return axios.delete(url+"Delete/"+id)
  }
  export function reservaNumServicio(id) {
    return axios.get(url+"Num/"+id)
  }
  export function reservaCreateServicio(post) {
    return axios.post(url+"Create",post)
  }
export function reservaAllDeleteByUsersServicio(idUser) {
      return axios.delete(url+"All/Delete/"+idUser)
  }
export function paginationServiceReserva(page) {
    return axios.get(url+"Pagination?page="+page);
}
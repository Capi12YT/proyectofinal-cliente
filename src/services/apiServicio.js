import axios from "axios";

export function apiProvinciaServicio() {
  return axios.get("https://apiv1.geoapi.es/provincias?CCOM=01&type=JSON&key=427cc3ccd7acc193673b8459d2b0dc5ff2620a2cc09e2dbb47df82e977b0d644&sandbox=0")
}
import {apiProvinciaServicio} from "@/services/apiServicio"
import { filterService,filterAcontecimientoService } from "@/services/viajeServicio";
import { ref,reactive,toRefs } from "vue";
import { fecha } from "@/filters/fecha";
import { capitalize } from "@/filters/capitalize";
import ReservaComponent from "../ReservaComponent/ReservaComponent.vue";
export default {
  name: "SemanaSantaComponent",
  props: [],
  components: {
    ReservaComponent,
  },
  setup() {

    const filters = reactive({
      nombre: "",
      localizacion:"",
      estado: false,
      acontecimiento:"Semana Santa"
    })
    const viajeAll=ref({});
    const loading = ref(true);
    const provinciasAll = ref({});
    const viajeNot = ref(0);


    filterAcontecimientoService({acontecimiento:"Semana Santa"}).then((result) => {
      viajeAll.value = result.data;
      notViaje(viajeAll.value)
    }).finally(() => loading.value = false);

    apiProvinciaServicio().then((result) => {
      provinciasAll.value = result.data.data;
    })


    function filtrar() {
      loading.value = true;
      if (filters.nombre == "" && filters.localizacion == "" && filters.estado == false ) {
        filterAcontecimientoService({acontecimiento:"Semana Santa"}).then((result) => {
          viajeAll.value = result.data;
          notViaje(viajeAll.value)
        }).finally(() => {
          loading.value = false;
        })
      }else{
        filterService(filters).then((result) => {
          viajeAll.value = result.data;
          notViaje(viajeAll.value)
        }).finally(() => {
          loading.value = false;
        })
        
      }
    }

    function notViaje(param) {
      let objet = Object.keys(param)
      return viajeNot.value = objet.length
    }



    return {
      ...toRefs(filters),
      provinciasAll,
      filtrar,
      fecha,
      viajeAll,
      loading,
      viajeNot,
      capitalize,
      };
  },
};
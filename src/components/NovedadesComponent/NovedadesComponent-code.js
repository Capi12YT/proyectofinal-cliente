import { ref} from "vue";
import ReservaComponent from '../ReservaComponent/ReservaComponent.vue';
import { lastService } from '@/services/viajeServicio';
import { fecha } from "../../filters/fecha";
import { capitalize } from "@/filters/capitalize";

export default {
  name: "NovedadesComponent",
  props: [],
  components: {

    ReservaComponent,
  },
  setup() {

    const lastViajes = ref({});

    lastService().then((result) => {
      lastViajes.value=result.data;
      
    })

    return {
     
      lastViajes,
      fecha,
      capitalize,

    };
  },
};

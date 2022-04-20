import { reactive, toRefs,onMounted } from "vue";
import { contadoreServicio } from "@/services/contadorServicio";
import { usuariosSort } from "@/services/usuarioService";
export default {
  name: "DashboardComponent",
  props: [],
  components: {
   
  },
  setup() {
    const form = reactive({
      contadores: {},
      usuariosSort: {},
    });

    onMounted(() => {
      contadoreServicio().then((result)=>{
        form.contadores = result.data;
      })
      usuariosSort().then((result)=>{
        form.usuariosSort = result.data;
      })
    })
    return {
      ...toRefs(form),
    };
  },
};

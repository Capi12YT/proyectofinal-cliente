import ModalComponent from "../ModalComponent/ModalComponet.vue";
import ModalNewViaje from "../../view/ModalNewViaje.vue";
import { ref } from "vue";
export default {
  name: "AdminTablesComponent",
  props: [],
  components: {
   ModalComponent,
   ModalNewViaje,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    let viajeData = {};
    const addViaje = () =>{
      modalActive.value = false;
      console.log("añadir viaje ", viajeData);
    }

    const setViaje = (viajeDataTEMP) => {
      viajeData = viajeDataTEMP;
    }
    return { modalActive, toggleModal,addViaje,setViaje,viajeData };
  },
};

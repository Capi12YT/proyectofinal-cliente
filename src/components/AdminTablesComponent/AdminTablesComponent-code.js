import ModalComponent from "../ModalComponent/ModalComponet.vue";
import ModalDeleteComponent from "../ModalDeleteComponent/ModalDeleteComponet.vue";
import ModalNewViaje from "../../view/ModalNewViaje.vue";
import ModalEditViaje from "../../view/ModalEditViaje.vue";
import ModalDeleteViaje from "../../view/ModalDeleteViaje.vue"
import { createService,allService,updateService,deleteService } from "@/services/viajeServicio";
import { acontecimientoAllServicio } from "@/services/acontecimientoServicio";
import {reservaAllServicio} from "@/services/reservaService";
import { ref } from "vue";
import { fecha } from "../../filters/fecha";
import { estado } from "../../filters/estado";


export default {
  name: "AdminTablesComponent",
  props: [],
  components: {
   ModalComponent,
   ModalNewViaje,
   ModalEditViaje,
   ModalDeleteViaje,
   ModalDeleteComponent,
  },
  setup() {

    // variables
    const modalActive = ref(false);
    const modalActiveEdit = ref(false);
    const modalActiveDelete = ref(false);
    const viajeAll = ref({});
    const acontecimientoAll = ref({});
    const reservaAll = ref({});
    const id_item_selected = ref("");
    const id_item_delete = ref("");
    let viajeData = {};

    // funciones modales
    const clickAdd = () => {
      modalActive.value = !modalActive.value;
    };
    const clickDelete = (id) => {
      modalActiveDelete.value = !modalActiveDelete.value;
      id_item_delete.value=id;
    };
    const clickEdit = (item) => {
      id_item_selected.value=item.id;
      modalActiveEdit.value = !modalActiveEdit.value;
    }
    const toggleModalClose = () => {
      modalActiveEdit.value = !modalActiveEdit.value;
    }
    const setViaje = (viajeDataTEMP) => {
      viajeData = viajeDataTEMP;
    }

    // servicios que se ejecutar al iniciar el componente
    allService().then((result) => {
      viajeAll.value=result.data;
    })

    acontecimientoAllServicio().then((result) => {
      acontecimientoAll.value=result.data;
    })
    reservaAllServicio().then((result) => {
      reservaAll.value=result.data;
    })
    

    // funciones add,edit,delete con calbacks
    const addViaje = () =>{
      modalActive.value = false;
      createService(viajeData).then(result =>{
        console.log(viajeData);
        if (result.status==201) { 
            allService().then((result) => {
              viajeAll.value=result.data;
            })
            acontecimientoAllServicio().then((result) => {
              acontecimientoAll.value=result.data;
            })
            reservaAllServicio().then((result) => {
              reservaAll.value=result.data;
            })
        }
      });
    }
    const editViaje = () =>{
      modalActiveEdit.value = false;
      updateService(viajeData).then(result =>{
        if (result.status==200) { 
            allService().then((result) => {
              viajeAll.value=result.data;
            })
            acontecimientoAllServicio().then((result) => {
              acontecimientoAll.value=result.data;
            })
            reservaAllServicio().then((result) => {
              reservaAll.value=result.data;
            })
        }
      });
    }

    const deleteViaje = () =>{
      modalActiveDelete.value = !modalActiveDelete.value;
      deleteService(id_item_delete.value).then(result =>{
        if (result.status==200) { 
            allService().then((result) => {
              viajeAll.value=result.data;
            })
            acontecimientoAllServicio().then((result) => {
              acontecimientoAll.value=result.data;
            })
            reservaAllServicio().then((result) => {
              reservaAll.value=result.data;
            })
        }
      });
    }


    return { modalActive, clickAdd,addViaje,setViaje,viajeData,clickEdit,modalActiveEdit,viajeAll,estado,id_item_selected,toggleModalClose,editViaje,clickDelete,modalActiveDelete,deleteViaje,acontecimientoAll,fecha,reservaAll };
  },
};

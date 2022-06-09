import {createService,updateService,deleteService,paginationService} from "@/services/adminService"
import { ref,watch } from "vue";
import ModalComponent from "../ModalComponent/ModalComponet.vue";
import ModalNewAdmin from "../../view/ModalNewAdmin.vue"
import ModalEditAdmin from "../../view/ModalEditAdmin.vue"
import ModalDeleteViaje from "../../view/ModalDeleteViaje.vue"
import ModalDeleteComponent from "../ModalDeleteComponent/ModalDeleteComponet.vue"
export default {
  name: "UserComponent",
  props: [],
  components: {
   ModalComponent,
   ModalNewAdmin,
   ModalEditAdmin,
   ModalDeleteComponent,
   ModalDeleteViaje,
  },
  setup() {
    const adminAll = ref({});
    const modalActive = ref(false);
    const modalActiveEdit = ref(false);
    const modalActiveDelete = ref(false);
    const id_item_selected = ref("");
    const id_item_delete = ref("");
    const page = ref(1);
    const numeroTotalAdmin = ref(0);
    const numeroItemsAdmin = ref(0);
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
    let adminData = {};
    const addAdmin = () =>{
      page.value = 1;
      modalActive.value = false;
      createService(adminData).then(result =>{
        if (result.status==201) { 
          paginationService(page.value).then((result)=>{
            numeroTotalAdmin.value=result.data.numeroUsuarios
            numeroItemsAdmin.value=result.data.usuariosPaginados.length;
            adminAll.value = result.data.usuariosPaginados;
          })
        }
      });
    }
    const editAdmin = () =>{
      modalActiveEdit.value = false;
      updateService(adminData).then(result =>{
        if (result.status==200) { 
          paginationService(page.value).then((result)=>{
            adminAll.value = result.data.usuariosPaginados;
          })
        }
      });
    }

    const deleteAdmin = () =>{
      page.value = 1;
      modalActiveDelete.value = !modalActiveDelete.value;
      deleteService(id_item_delete.value).then(result =>{
        if (result.status==200) { 
          paginationService(page.value).then((result)=>{
            numeroTotalAdmin.value=result.data.numeroUsuarios
            numeroItemsAdmin.value=result.data.usuariosPaginados.length;
            adminAll.value = result.data.usuariosPaginados;
          })
        }
      });
    }
    const setAdmin = (adminDataTEMP) => {
      adminData = adminDataTEMP;
    }



    const numeroPaginas = () => {
      if (numeroItemsAdmin.value == 0) {
        return 0;
      }
      return Math.ceil(numeroTotalAdmin.value / numeroItemsAdmin.value);
    };    
    
    watch(adminAll, () => {
      numeroPaginas()
    })

    function newPage(newPage) {
      paginationService(newPage).then((result) => {
        page.value = newPage;
        adminAll.value = result.data.usuariosPaginados;

      });
    }

    paginationService(page.value).then((result)=>{
      numeroTotalAdmin.value=result.data.numeroUsuarios
      numeroItemsAdmin.value=result.data.usuariosPaginados.length;
      adminAll.value = result.data.usuariosPaginados;
    })
    return {
     adminAll,
     modalActive,
     modalActiveEdit,
     modalActiveDelete,
     id_item_selected,
     clickAdd,
     clickDelete,
     clickEdit,
     toggleModalClose,
     addAdmin,
     setAdmin,
     editAdmin,
     deleteAdmin,
     page,
     newPage,
     numeroPaginas
    };
  },
};

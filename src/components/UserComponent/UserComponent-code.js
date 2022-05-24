import {createService,updateService,deleteService,allService} from "@/services/adminService"
import { ref } from "vue";
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
      modalActive.value = false;
      createService(adminData).then(result =>{
        if (result.status==201) { 
            allService().then((result) => {
              adminAll.value=result.data;
            })
        }
      });
    }
    const editAdmin = () =>{
      modalActiveEdit.value = false;
      updateService(adminData).then(result =>{
        if (result.status==200) { 
            allService().then((result) => {
              adminAll.value=result.data;
            })
        }
      });
    }

    const deleteAdmin = () =>{
      modalActiveDelete.value = !modalActiveDelete.value;
      deleteService(id_item_delete.value).then(result =>{
        if (result.status==200) { 
            allService().then((result) => {
              adminAll.value=result.data;
            })
        }
      });
    }
    const setAdmin = (adminDataTEMP) => {
      adminData = adminDataTEMP;
    }

    allService().then((result)=>{
      adminAll.value = result.data;
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
    };
  },
};

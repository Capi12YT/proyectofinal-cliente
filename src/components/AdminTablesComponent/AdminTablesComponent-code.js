import ModalComponent from "../ModalComponent/ModalComponet.vue";
import ModalDeleteComponent from "../ModalDeleteComponent/ModalDeleteComponet.vue";
import ModalNewViaje from "../../view/ModalNewViaje.vue";
import ModalEditViaje from "../../view/ModalEditViaje.vue";
import ModalDeleteViaje from "../../view/ModalDeleteViaje.vue";

import {
  createService,
  updateService,
  deleteService,
  paginationService,
} from "@/services/viajeServicio";
import {
  paginationServiceAcontecimiento,
} from "@/services/acontecimientoServicio";
import { paginationServiceReserva } from "@/services/reservaService";
import { ref,watch} from "vue";
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
    const modalActiveHelpTablaViaje = ref(false);
    const viajeAll = ref({});
    const acontecimientoAll = ref({});
    const reservaAll = ref({});
    const id_item_selected = ref("");
    const id_item_delete = ref("");
    const page = ref(1);
    const numeroTotalViajes = ref(0);
    const numeroItemsViaje = ref(0);
    const pageAco = ref(1);
    const numeroTotalAcontecimientos = ref(0);
    const numeroItemsAcontecimiento = ref(0);
    const pageRes = ref(1);
    const numeroTotalReservas = ref(0);
    const numeroItemsReserva = ref(0);
    let viajeData = {};

    // funciones modales
    const clickAdd = () => {
      modalActive.value = !modalActive.value;
    };
    const clickDelete = (id) => {
      modalActiveDelete.value = !modalActiveDelete.value;
      id_item_delete.value = id;
    };
    const clickEdit = (item) => {
      id_item_selected.value = item.id;
      modalActiveEdit.value = !modalActiveEdit.value;
    };
    const toggleModalClose = () => {
      modalActiveEdit.value = !modalActiveEdit.value;
    };
    const setViaje = (viajeDataTEMP) => {
      viajeData = viajeDataTEMP;
    };
    const clickHelpTablaViaje = () => {
      modalActiveHelpTablaViaje.value = !modalActiveHelpTablaViaje.value;
    };
  
    const numeroPaginas = () => {
      if (numeroItemsViaje.value == 0) {
        return 0;
      }
      return Math.ceil(numeroTotalViajes.value / numeroItemsViaje.value);
    };    
    
    watch(viajeAll, () => {
      numeroPaginas()
    })


    const numeroPaginasAco = () => {
      if (numeroItemsAcontecimiento.value == 0) {
        return 0;
      }
      return Math.ceil(numeroTotalAcontecimientos.value / numeroItemsAcontecimiento.value);
    };


    const numeroPaginasRes = () => {
      if (numeroItemsReserva.value == 0) {
        return 0;
      }
      return Math.ceil(numeroTotalReservas.value / numeroItemsReserva.value);
    };


    // servicios que se ejecutar al iniciar el componente

    paginationService(page.value).then((result) => {
      numeroTotalViajes.value = result.data.numeroTotalViajes;
      numeroItemsViaje.value = result.data.viajesPaginados.length;
      viajeAll.value = result.data.viajesPaginados;
    });
    paginationServiceAcontecimiento(pageAco.value).then((result) => {
      numeroTotalAcontecimientos.value = result.data.numeroAcontecimientos;
      numeroItemsAcontecimiento.value = result.data.acontecimientosPaginados.length;
      acontecimientoAll.value = result.data.acontecimientosPaginados;
    });
    paginationServiceReserva(pageRes.value).then((result) => {
      numeroTotalReservas.value = result.data.numeroReserva;
      numeroItemsReserva.value = result.data.reservasPaginados.length;
      reservaAll.value = result.data.reservasPaginados;
    });



    function newPage(newPage) {
      if (newPage == undefined) {
        newPage =  page.value - 1
      }
      paginationService(newPage).then((result) => {
        page.value = newPage;
        viajeAll.value = result.data.viajesPaginados;
      });
    }
    function newPageAco(newPage) {
      paginationServiceAcontecimiento(newPage).then((result) => {
        pageAco.value = newPage;
        acontecimientoAll.value = result.data.acontecimientosPaginados;
      });
    }
    function newPageRes(newPage) {
      paginationServiceReserva(newPage).then((result) => {
        pageRes.value = newPage;
        reservaAll.value = result.data.reservasPaginados;
      });
    }
    // funciones add,edit,delete con calbacks
    const addViaje = () => {
      page.value = 1;
      modalActive.value = false;
      createService(viajeData).then((result) => {
        if (result.status == 201) {
          paginationService(page.value).then((result) => {
            numeroTotalViajes.value = result.data.numeroTotalViajes;
            numeroItemsViaje.value = result.data.viajesPaginados.length;
            viajeAll.value = result.data.viajesPaginados;
          });
          paginationServiceAcontecimiento(pageAco.value).then((result) => {
            numeroTotalAcontecimientos.value = result.data.numeroAcontecimientos;
            numeroItemsAcontecimiento.value = result.data.acontecimientosPaginados.length;
            acontecimientoAll.value = result.data.acontecimientosPaginados;
          });
          paginationServiceReserva(pageRes.value).then((result) => {
            numeroTotalReservas.value = result.data.numeroReserva;
            numeroItemsReserva.value = result.data.reservasPaginados.length;
            reservaAll.value = result.data.reservasPaginados;
          });
        }
      });
    };
    const editViaje = () => {
      modalActiveEdit.value = false;
      updateService(viajeData).then((result) => {
        if (result.status == 200) {
          paginationService(page.value).then((result) => {
            viajeAll.value = result.data.viajesPaginados;
          });
          paginationServiceAcontecimiento(pageAco.value).then((result) => {
            acontecimientoAll.value = result.data.acontecimientosPaginados;
          });
          paginationServiceReserva(pageRes.value).then((result) => {
            reservaAll.value = result.data.reservasPaginados;
          });
        }
      });
    };

    const deleteViaje = () => {
      page.value = 1;
      modalActiveDelete.value = !modalActiveDelete.value;
      deleteService(id_item_delete.value).then((result) => {
        if (result.status == 200) {
          paginationService(page.value).then((result) => {
            numeroTotalViajes.value = result.data.numeroTotalViajes;
            numeroItemsViaje.value = result.data.viajesPaginados.length;
            viajeAll.value = result.data.viajesPaginados;
          });
          paginationServiceAcontecimiento(pageAco.value).then((result) => {
            numeroTotalAcontecimientos.value = result.data.numeroAcontecimientos;
            numeroItemsAcontecimiento.value = result.data.acontecimientosPaginados.length;
            acontecimientoAll.value = result.data.acontecimientosPaginados;
          });
          paginationServiceReserva(pageRes.value).then((result) => {
            numeroTotalReservas.value = result.data.numeroReserva;
            numeroItemsReserva.value = result.data.reservasPaginados.length;
            reservaAll.value = result.data.reservasPaginados;
          });
        
        }
      });
    };

    return {
      modalActive,
      clickAdd,
      addViaje,
      setViaje,
      viajeData,
      clickEdit,
      modalActiveEdit,
      viajeAll,
      estado,
      id_item_selected,
      toggleModalClose,
      editViaje,
      clickDelete,
      modalActiveDelete,
      deleteViaje,
      acontecimientoAll,
      fecha,
      reservaAll,
      numeroPaginas,
      newPage,
      page,
      newPageAco,
      pageAco,
      numeroPaginasAco,
      pageRes,
      numeroPaginasRes,
      newPageRes,
      modalActiveHelpTablaViaje,
      clickHelpTablaViaje
    };
  },
};

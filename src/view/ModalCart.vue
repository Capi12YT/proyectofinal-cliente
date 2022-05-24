<template>
    <div class="w-75 m-auto py-3" v-if="activeAlert">
        <div class="alert alert-success d-flex align-items-center" role="alert">
            <i class="bi bi-patch-check"></i>
            <div>
                Reserva Eliminada...
            </div>
        </div>
    </div>
    <div class="w-75 m-auto py-3" v-if="activeAlertCompra">
        <div class="alert alert-success d-flex align-items-center" role="alert">
            <i class="bi bi-patch-check"></i>
            <div>
                <h4>COMPRA FINALIZADA!</h4>
            </div>
        </div>
    </div>
<div class="w-75 m-auto py-3">
    <h1 class="text-center">Tus Reservas</h1>
    <ul class="list-group list-group-horizontal justify-content-center mt-4 w-100 text-center   " v-for="item in reservaAll" :key="item.id">
      <li class="list-group-item w-100"><img :src="item.img" alt=""></li>
      <li class="list-group-item w-100">
          <small class="d-block fw-bold mb-2">Viaje:</small>
          <small class="d-block">{{item.nombreViaje}}</small></li>
      <li class="list-group-item w-100">
          <small class="d-block fw-bold mb-2">Cantidad:</small>
          <small class="d-block">{{item.cantidad}}</small></li>
          <li class="list-group-item w-100 d-flex justify-content-center align-items-center"><i class="bi bi-x-circle red" @click="clickDelete(item.id)"></i></li>
    </ul>
    
    <div class="m-auto text-center mt-4" v-if="loading == true">
        <div class="spinner-grow " role="status" >
        </div>
        <div>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <div class="w-75 m-auto mt-5 ">
        <button class="btn btn-dark d-block m-auto w-50" @click="clickCompra()">Finalizar Compra</button>
    </div>
</div>
</template>

<script>
import { ref } from "vue";
import { reservaAllUserServicio, reservaDeleteServicio,reservaAllDeleteByUsersServicio } from "@/services/reservaService";
import {viajesStore} from '@/store/viajesStore'
import { userTokenStore } from '@/store/tokenStore'

export default {
  name: "ModalCart",
  setup() {
      const storeViaje = viajesStore();
      const store = userTokenStore();

      const reservaAll=ref({})
      const activeAlert=ref(false)
      const activeAlertCompra=ref(false)
      const loading = ref(false);
     
      loading.value = true;
      reservaAllUserServicio(store.getTokenData.id).then((result) => {
          reservaAll.value = result.data;
      }).finally(() => {
          loading.value = false;
      })
      function clickDelete(id){
          reservaDeleteServicio(id).then((result) => {
              if (result.status == 201) {
                activeAlert.value=true;
                setTimeout(function(){ 
                 activeAlert.value=false;
                },1500);
                const myArray = result.data.split(":");
                storeViaje.setNumViaje(myArray[1]); 
                      reservaAllUserServicio(store.getTokenData.id).then((result) => {
                         reservaAll.value = result.data;
                    })
              } 
          })
      }

      function clickCompra(){
          reservaAllDeleteByUsersServicio(store.getTokenData.id).then((result) => {
              if (result.status == 201) {
                activeAlertCompra.value=true;
                setTimeout(function(){ 
                 activeAlertCompra.value=false;
                },3500);
                const myArray = result.data.split(":");
                storeViaje.setNumViaje(myArray[1]); 
                      reservaAllUserServicio(store.getTokenData.id).then((result) => {
                         reservaAll.value = result.data;
                    })
              } 
          })
      }
    return {
        reservaAll,
        clickDelete,
        activeAlert,
        storeViaje,
        clickCompra,
        activeAlertCompra,
        loading
    };
  },
};
</script>

<style scoped>
    img{
        width: 100px;
    }
    .red{
        color: red;
    }
@media screen and (max-width: 460px){
    
    img{
        width: 50px;
    }
}
</style>
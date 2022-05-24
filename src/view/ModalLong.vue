<template>
    <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header"><h4>Cerrar sesion <i class="fa fa-lock"></i></h4></div>
      <div class="modal-body"><i class="fa fa-question-circle"></i> Deseas cerrar sesion?</div>
      <div class="modal-footer"><a class="btn btn-primary btn-block" @click="longOut">Logout</a></div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { userTokenStore } from '@/store/tokenStore'

export default {
  name: "ModalLong",

  setup() {
    const router = useRouter();
    const store = userTokenStore();
    function longOut(){
      localStorage.clear()
      store.cleanToken()
      router.push({name: 'login'});
    }  
    return{
      longOut,
    }
  },
}
</script>
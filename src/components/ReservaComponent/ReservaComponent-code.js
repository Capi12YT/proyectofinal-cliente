import { reservaCreateServicio } from "@/services/reservaService";
import { reactive, toRefs} from "vue";
import { userTokenStore } from '@/store/tokenStore'
import {viajesStore} from '@/store/viajesStore'
export default {
  name: "ReservaComponent",
  props: ["idViaje"],
  components: {
   
  },
  setup(props) {
    const store = userTokenStore();
    const storeViaje = viajesStore();
    const reserva=reactive({
      idViaje:props.idViaje,
      idUsuario:store.getTokenData.id,
      cantidad:1
    })
    const clickAdd = () => {
      reservaCreateServicio(reserva).then((result)=>{
        const myArray = result.data.split(":");
        storeViaje.setNumViaje(myArray[1]);
        
      })
    }

    return {
      clickAdd,
      ...toRefs(reserva),
    };
  },
};

import { userTokenStore } from '@/store/tokenStore'
import { ref,computed} from "vue";
import ModalLongOutComponent from "../ModalLonOut/ModalLongOutComponet.vue"
import ModalLong from "../../view/ModalLong.vue"
import ModalCart from "../../view/ModalCart.vue"
import { reservaNumServicio } from '@/services/reservaService';
import { fecha } from "../../filters/fecha";
import {viajesStore} from '@/store/viajesStore'

export default {
  name: "ClientComponent",
  props: [],
  components: {
    ModalLongOutComponent,
    ModalLong,
    ModalCart,
  },
  setup() {
    const storeViaje = viajesStore();
    const store = userTokenStore();

    const nameUser = ref(store.getTokenData)
    const numViajesUser = ref(0);
    const modalActive = ref(false);
    const modalActiveCart = ref(false);
    
    const clickLongOut = () => {
      modalActive.value = !modalActive.value;
    };
    const clickCart = () => {
        modalActiveCart.value = !modalActiveCart.value;
    };

    reservaNumServicio(store.getTokenData.id).then((result) => {
      storeViaje.setNumViaje(result.data);

    })

    const disabled = computed(() => storeViaje.getNumViaje > 0)
    const numViajes = computed(() => numViajesUser.value = storeViaje.getNumViaje)




    return {
      nameUser,
      modalActive,
      modalActiveCart,
      clickCart,
      clickLongOut,
      numViajesUser,
      fecha,
      storeViaje,
      numViajes,
      disabled,
      // prueba
    };
  },
};

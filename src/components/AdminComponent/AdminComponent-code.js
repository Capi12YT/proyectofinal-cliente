import { userTokenStore } from '@/store/tokenStore'
import { ref } from "vue";
import ModalLongOutComponent from "../ModalLonOut/ModalLongOutComponet.vue"
import ModalLong from "../../view/ModalLong.vue"
export default {
  name: "AdminTablesComponent",
  props: [],
  components: {
   ModalLongOutComponent,
   ModalLong,
  },
  setup() {
    const store = userTokenStore();
    const nameUser = ref(store.getTokenData)
    const modalActive = ref(false);
    const clickLongOut = () => {
      modalActive.value = !modalActive.value;
    };
    return {
      nameUser,
      modalActive,
      clickLongOut,
    };
  },
};

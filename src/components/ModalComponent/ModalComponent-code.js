import ModalNewViaje from "../../view/ModalNewViaje.vue";
export default {
  name: "ModalComponent",
  props: ["modalActive"],
  components: {
    ModalNewViaje,
   },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    const add = () => {
      emit("add");
    }
    
    return { close,add };
  },
};

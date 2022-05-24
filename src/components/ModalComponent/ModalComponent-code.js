export default {
  name: "ModalComponent",
  props: ["modalActive"],
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

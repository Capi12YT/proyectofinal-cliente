export default {
  name: "ModalDeleteComponent",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    const Delete = () => {
      emit("delete");
    }
    return { close,Delete };
  },
};

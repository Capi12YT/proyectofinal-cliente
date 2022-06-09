export default {
  name: "ModalComponent",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    const add = () => {
      let form = document.getElementById('needs-validation')
      if (!form.checkValidity()) {
        form.classList.add('was-validated')
      }else{
        form.classList.add('was-validated')
        emit("add");
      }
    }
    return { close,add };
  },
};

<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h4 class="modal-title text-black">Añadir Admin</h4>
        </div>
        <div class="modal-body">
          <div class="form-group text-black">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="name" required />
          </div>
          <div class="form-group text-black">
            <label>Apellido</label>
            <input type="text" class="form-control" v-model="lastname" required />
          </div>
          <div class="form-group text-black">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" required />
          </div>
          <div class="form-group text-black">
            <label>Contraseña</label>
            <input type="password" class="form-control" v-model="password" required />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch} from "vue";
export default {
  name: "ModalNewAdmin",
  setup(props, { emit }) {
    const formData = reactive({
      name: "",
      lastname: "",
      email: "",
      password: "",
      rol:"admin",
    });
    watch(formData, (newValue) => {
      emit("setAdmin", newValue);
    });




    return { ...toRefs(formData),};
  },
};
</script>

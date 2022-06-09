<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="needs-validation" id="needs-validation" novalidate>
        <div class="modal-header">
          <h4 class="modal-title text-black">Añadir Admin</h4>
        </div>
        <div class="modal-body">
          <div class="form-group text-black">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="name" required />
            <div class="invalid-feedback">Campo requerido</div>
          </div>
          <div class="form-group text-black">
            <label>Apellido</label>
            <input
              type="text"
              class="form-control"
              v-model="lastname"
              required
            />
            <div class="invalid-feedback">Campo requerido</div>
          </div>
          <div class="form-group text-black">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" required />
            <div class="valid-feedback">Campo correcto</div>
            <div class="invalid-feedback">Email debe contener @</div>
          </div>
          <div class="form-group text-black">
            <label>Contraseña</label>
            <input
              type="password"
              class="form-control"
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,16}$"
              v-model="password"
              required
            />
            <div class="valid-feedback">Campo correcto</div>
            <div class="invalid-feedback">
              La Contraseña debe contener Dígitos, minúsculas y mayúsculas (1) y
              al menos 4 caracteres
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "ModalNewAdmin",
  setup(props, { emit }) {
    const formData = reactive({
      name: "",
      lastname: "",
      email: "",
      password: "",
      rol: "admin",
    });
    watch(formData, (newValue) => {
      emit("setAdmin", newValue);
    });

    return { ...toRefs(formData) };
  },
};
</script>

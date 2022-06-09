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
          </div>
          <div class="form-group text-black">
            <label>Apellido</label>
            <input
              type="text"
              class="form-control"
              v-model="lastname"
              required
            />
          </div>
          <div class="form-group text-black">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" required />
            <div class="valid-feedback">Campo correcto</div>
            <div class="invalid-feedback">Email debe contener @</div>
          </div>
          <div class="form-group text-black">
            <label>Nueva Contraseña</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,16}$"
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
import { adminByIdService } from "@/services/adminService";
export default {
  name: "ModalEditAdmin",
  props: ["id_admin"],
  setup(props, { emit }) {
    const formData = reactive({
      id: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
    });
    watch(formData, (newValue) => {
      emit("setAdmin", newValue);
    });

    adminByIdService(props.id_admin).then((result) => {
      formData.id = result.data.id;
      formData.name = result.data.name;
      formData.lastname = result.data.lastname;
      formData.email = result.data.email;
    });

    return { ...toRefs(formData) };
  },
};
</script>

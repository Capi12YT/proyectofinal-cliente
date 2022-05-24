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
                        <label>Nueva Contraseña</label>
                        <input type="password" class="form-control" v-model="password" required />
                    </div>
                </div>
            </form>
        </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch} from "vue";
import { adminByIdService } from "@/services/adminService";
export default {
  name: "ModalEditAdmin",
  props:["id_admin"],
  setup(props, { emit }) {
    const formData = reactive({
      id:"",
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
    })

    return { ...toRefs(formData),};
  },
};
</script>
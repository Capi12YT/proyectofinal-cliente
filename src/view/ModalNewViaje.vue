<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h4 class="modal-title text-black">Añadir Viaje</h4>
        </div>
        <div class="modal-body">
          <div class="form-group text-black">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="name" required />
          </div>
          <div class="form-group text-black">
            <label>Acontecimiento</label>
            <select
              class="form-select"
              name="acontecimientos"
              v-model="acontecimiento"
              required
            >
              <option
                v-for="item in acontecimientoAll"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="form-group text-black">
            <label>Localizacion</label>
            <select
              class="form-select"
              name="localizaciones"
              v-model="localizacion"
              required
            >
              <option
                v-for="item in provinciasAll"
                :key="item.id"
                :value="item.PRO"
              >
                {{item.PRO}}
              </option>
            </select>
          </div>
          <div class="form-group text-black">
            <label>Descripción</label>
            <textarea
              class="form-control"
              v-model="descripcion"
              required
            ></textarea>
          </div>
          <div class="form-group text-black">
            <label>Precio</label>
            <input
              type="number"
              class="form-control"
              v-model="precio"
              required
            />
          </div>
          <div class="form-group text-black row justify-content-end py-1">
            <label>Oferta</label>
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="oferta"
                required
              />
            </div>
          </div>
          <div class="form-group text-black">
            <label>Imagen del Viaje</label>
            <input class="form-control mt-2" type="file" id="formFile" @change="getUrl" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch, ref } from "vue";
import { acontecimientoAllServicio } from "@/services/acontecimientoServicio";
import {apiProvinciaServicio} from "@/services/apiServicio"
export default {
  name: "ModalNewViaje",
  setup(props, { emit }) {
    const formData = reactive({
      name: "",
      acontecimiento: "",
      localizacion: "",
      descripcion: "",
      precio: 0,
      oferta: false,
      url:"",
    });
    watch(formData, (newValue) => {
      emit("setViaje", newValue);
    });

  
    function getUrl(e) {
      console.log(e.target.value);
        // formData.url=e.dataTransfer.files;
    }


    const acontecimientoAll = ref({});
    acontecimientoAllServicio().then((result) => {
        acontecimientoAll.value = result.data;
    });
    const provinciasAll = ref({});
    apiProvinciaServicio().then((result) => {
      provinciasAll.value = result.data.data;
    })



    return { ...toRefs(formData), acontecimientoAll,provinciasAll,getUrl };
  },
};
</script>

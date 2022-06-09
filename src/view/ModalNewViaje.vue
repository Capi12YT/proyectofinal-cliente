<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="needs-validation" id="needs-validation" novalidate>
        <div class="modal-header">
          <h4 class="modal-title text-black">Añadir Viaje</h4>
        </div>
        <div class="modal-body">

          <div class="form-group text-black">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="name" required />
               <div class="invalid-feedback">
                 Campo requerido
               </div>
          </div>
          <div class="form-group text-black">
            <label>Acontecimiento</label>
            <select
              class="form-select"
              name="acontecimientos"
              v-model="id_acontecimiento"
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
              <div class="invalid-feedback">
                 Campo requerido
               </div>
          </div>
          <div class="form-group text-black">
            <label>Localizacion</label>
            <select
              class="form-select"
              name="localizaciones"
              v-model="location"
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
              <div class="invalid-feedback">
                 Campo requerido
               </div>
          </div>
          <div class="form-group text-black">
            <label>Descripción</label>
            <textarea
              class="form-control"
              v-model="description"
              required
            ></textarea>
              <div class="invalid-feedback">
                 Campo requerido
               </div>
          </div>
          <div class="form-group text-black">
            <label>Precio</label>
            <input
              type="number"
              class="form-control"
              v-model="price"
              min="1"
              required
            />
            <div class="invalid-feedback">
                 Campo requerido y minimo debe ser 1
            </div>
          </div>
          <div class="form-group text-black row justify-content-end py-1">
            <label>Oferta</label>
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="estado"

              />
            </div>
          </div>
          <div class="form-group text-black">
            <label>Imagen del Viaje</label>
            <input class="form-control mt-2" type="file" accept="image/webp" id="formFile" @change="getUrl" required/>
            <div class="invalid-feedback">
                 Campo requerido
            </div>
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
      id_acontecimiento: "",
      location: "",
      description: "",
      price: 0,
      estado: false,
      img:"",
    });
    watch(formData, (newValue) => {
      emit("setViaje", newValue);
    });

  
    function getUrl(e) {
      let fileReader = new FileReader();
      fileReader.addEventListener('load', function(evt){
             formData.img=evt.target.result
      });
      fileReader.readAsDataURL(e.target.files[0]);
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

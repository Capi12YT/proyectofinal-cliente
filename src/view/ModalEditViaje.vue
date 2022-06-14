<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="needs-validation" id="needs-validation" novalidate>
        <div class="modal-header">
          <h4 class="modal-title text-black">Editar Viaje</h4>
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
                :key="item.PRO"
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
              v-model="description"
              required
            ></textarea>
          </div>
          <div class="form-group text-black">
            <label>Precio</label>
            <input
              type="number"
              class="form-control"
              v-model="price"
              required
            />
          </div>
          <div class="form-group text-black row justify-content-end py-1">
            <label>Oferta</label>
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                v-model="estado"
                id="checkbox"
                
              />
            </div>
          </div>
          <div class="form-group text-black">
            <h4>Imagen del Viaje</h4>
            <div class="w-100">
              <img class="img-fluid" :src="url_imagen" alt="">
            </div>
          </div>
          <div class="form-group text-black mt-1">
            <h4>Nueva Imagen del Viaje</h4>
            <input class="form-control mt-2" type="file" accept="image/webp" id="formFile" @change="getUrl" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch,ref} from "vue";
import { acontecimientoAllServicio } from "@/services/acontecimientoServicio";
import {apiProvinciaServicio} from "@/services/apiServicio"
import { viajeByIdService,} from "@/services/viajeServicio";
export default {
  name: "ModalEditViaje",
  props:["id_viaje"],
  setup(props, { emit }) {
    const formData = reactive({
      id:props.id_viaje,
      name: "",
      id_acontecimiento: "",
      location: "",
      description: "",
      price: 0,
      estado: false,
      img:"",
    });
    const url_imagen = ref("");
    //corregir perdida de imagen 
    watch(formData, (newValue) => {
      // if (newValue.img == "") {
      //   newValue.img == url_imagen.value;
      // }
      emit("setViaje", newValue);
        // console.log(newValue);
    });

    function getUrl(e) {
      let fileReader = new FileReader();
      fileReader.addEventListener('load', function(evt){
             formData.img=evt.target.result
             url_imagen.value=evt.target.result
      });
      fileReader.readAsDataURL(e.target.files[0]);
    }


    viajeByIdService(props.id_viaje).then((result) => {
      formData.name=result.data.name
      formData.id_acontecimiento=result.data.id_acontecimiento
      formData.location=result.data.location
      formData.description=result.data.description
      formData.price=result.data.price
      formData.estado=result.data.estado
      url_imagen.value=result.data.img
    })


    const acontecimientoAll = ref({});
    acontecimientoAllServicio().then((result) => {
        acontecimientoAll.value = result.data;
    });


    const provinciasAll = ref({});
    apiProvinciaServicio().then((result) => {
      provinciasAll.value = result.data.data;
    })

    return { ...toRefs(formData),getUrl,url_imagen, acontecimientoAll,provinciasAll};
  },
};
</script>
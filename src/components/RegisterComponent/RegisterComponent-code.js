import { reactive, toRefs,ref } from "vue";
import { registerService } from "@/services/registreServicio";
export default {
  name: "RegisterComponent",
  props: [],
  components: {
   
  },
  setup() {
    const data = reactive({
      email: "",
      password: "",
      name: "",
      lastname:"",
      rol:"user",
    });
    const confirmRegister= ref("");

    function registrar(){


      let form = document.getElementById('needs-validation')
      if (!form.checkValidity()) {
        form.classList.add('was-validated')
      }else{
        form.classList.add('was-validated')


        registerService(data).then((result)=>{
          if (result.status == 200) {
            confirmRegister.value = result.data
             
          }else{
            confirmRegister.value = result.data
          }
        })
      }


    }


    return {
      ...toRefs(data),
      registrar,
      confirmRegister,
    };
  },
};

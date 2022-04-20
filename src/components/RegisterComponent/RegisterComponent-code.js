import { reactive, toRefs } from "vue";
import { registerService } from "@/services/registreServicio";
export default {
  name: "LoginComponent",
  props: [],
  components: {
   
  },
  setup() {
    const form = reactive({
      email: "",
      password: "",
      name: "",
      lastname:"",
      confirmRegister: "",
    });


    function registrar(){
      registerService(form).then((result)=>{
        console.log(result);
        if (result.status == 200) {
          form.confirmRegister = result.data
        }else{
          form.confirmRegister = result.data
        }
      })
    }
    return {
      ...toRefs(form),
      registrar
    };
  },
};

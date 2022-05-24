import { reactive, toRefs,ref } from "vue";
import { registerService } from "@/services/registreServicio";
export default {
  name: "RegisterComponent",
  props: [],
  components: {
   
  },
  setup() {
    const form = reactive({
      email: "",
      password: "",
      name: "",
      lastname:"",
      rol:"user",
    });
    const confirmRegister= ref("");

    function registrar(){
      registerService(form).then((result)=>{
        if (result.status == 200) {
          confirmRegister.value = result.data
           
        }else{
          confirmRegister.value = result.data
        }
      })
    }


    return {
      ...toRefs(form),
      registrar,
      confirmRegister,
    };
  },
};

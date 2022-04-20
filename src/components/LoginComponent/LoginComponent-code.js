import { reactive, toRefs } from "vue";
import {loginServicio} from "@/services/loginServicio"
export default {
  name: "LoginComponent",
  props: [],
  components: {
  },
  setup() {
    const form = reactive({
      email: "",
      password: "",
      confirmPassword: "",
    });

     function login(){
      loginServicio(form).then((result) => {
        if (result.status == 200) {
          form.confirmPassword = "Contraseña Correcta"
        }else{
          form.confirmPassword = "Contraseña InCorrecta"
        }
      });
    }
    return {
      ...toRefs(form),
      login
    };
  },
};

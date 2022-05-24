import { reactive, toRefs } from "vue";
import {loginServicio} from "@/services/loginServicio"
import { userTokenStore } from '@/store/tokenStore'
import { useRouter } from "vue-router";
// import { useForm, useField } from 'vee-validate';
// import * as yup from 'yup';
export default {
  name: "LoginComponent",
  props: [],
  components: {
  },
  setup() {
    const form = reactive({
      email:"",
      password:"",
      confirmPassword: "",
    });
    const router = useRouter();
    const store = userTokenStore();
    

    // login
    function login(){
      loginServicio(form).then((result) => {
        if (result.status == 200) {
          store.setToken(result.data)
          localStorage.token=result.data;
          if (store.getTokenData.rol!= 'admin') {
            router.push({name: 'client'});
          }else{
            router.push({name: 'admin'});
          }
        }else{
          form.confirmPassword = true
          setTimeout(function(){ 
            form.confirmPassword =false;
           },2500);
        }
      });
    }

    
    return {
      ...toRefs(form),
      login,
      store,

    };
  },
};

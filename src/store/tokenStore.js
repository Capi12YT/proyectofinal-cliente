import { defineStore } from 'pinia'
import jwt_decode from "jwt-decode";

export const userTokenStore = defineStore({
  id: 'userToken',
  state: () => ({

      token:null,
    
    }),
    actions: {
        setToken(token) {
            this.token=token;
        },
        cleanToken(){
            this.token=null;
        }
    },
    getters: {
        getToken: (state) => state.token,
        getTokenData:(state)=> state.token ? jwt_decode(state.token) : {},
    },
})
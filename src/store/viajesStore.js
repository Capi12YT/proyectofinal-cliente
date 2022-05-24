import { defineStore } from 'pinia'

export const viajesStore = defineStore({
  id: 'viajes',
  state: () => ({

      numViajesUser:0,
    
    }),
    actions: {
        setNumViaje(num) {
            this.numViajesUser=num;
        },
        cleanNumViaje(){
            this.numViajesUser=0;
        }
    },
    getters: {
        getNumViaje: (state) => state.numViajesUser,
    },
})
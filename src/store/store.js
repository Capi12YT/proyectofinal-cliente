import login from './modules/login'
import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
 modules: {login}
})

export default store;
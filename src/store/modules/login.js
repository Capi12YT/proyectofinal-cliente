const state = {
    token:null
}

const getters = {
    token: (state) => {
        return state.token
    }
}

const mutations = {
    setToken(state,token){
        state.token=token
    }
}

export default {state,getters,mutations}
<template >
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { userTokenStore } from '@/store/tokenStore'
export default {
  name: "App",
  components: {
  },
  beforeCreate(){
    const store = userTokenStore()
    let token = localStorage.token;
    if (token) {
      store.setToken(token);
    }
  }
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;

} 
.app {
  height: 100vh;
  display:flex;
  flex-direction:column;
  // justify-content: center;
  // align-items: center;
}
</style>

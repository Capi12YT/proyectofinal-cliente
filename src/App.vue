<template >
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
  },
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

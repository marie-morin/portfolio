<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {TheHeader, TheFooter},
};

</script>



<template>
  <main id="app" class="app">
    <div class="app__topcontent">
      <TheHeader />
      <router-view class="app__router"/>
    </div>
    <TheFooter />
  </main>
</template>



<style scoped lang="scss">
.app {
//   min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: $clear-color;
  color: $font-color;

  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &__topcontent {
    min-height: 100vh;
    min-width: 100%;
    min-height: 100%;
    margin-bottom: 15rem;
  }

  &__router {
    width: 100%;
  }
}

</style>
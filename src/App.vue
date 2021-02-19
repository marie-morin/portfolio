<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};

</script>


<template>
  <main id="app">
    <div>
      <TheHeader />
      <router-view />
    </div>
    <TheFooter />
  </main>
</template>


<style></style>
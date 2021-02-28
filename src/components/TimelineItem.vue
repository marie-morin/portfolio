<script>
export default {
  name: "TimelineItem",
  props: {
    side: {
      type: String,
      required: true,
    },
  },
};
</script>


<template>
  <li class="time">
    <div>
      <div>
        <span class="time__title">Freelance</span>
        <span class="time__time"> 2010 - 2016 </span>
      </div>

      <div class="time__description">
        Som freelance Fullstack Developer arbejder jeg med et hav af kunder,
        hjemmesider og apps. Jeg har tidligere designet og udviklet hjemmesider
        og andre løsninger for arkitekter, bilforhandlere, skoler, designere,
        fotografer og manger flere. Læs mere:
        <a href="https://tristanwhite.info" target="_blank">
          https://tristanwhite.info
        </a>
      </div>
    </div>
  </li>
</template>


<style scoped lang="scss">
</style>
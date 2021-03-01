<script>
export default {
  name: "ProjetPreview",

  props: {
    projet: {
      type: Object,
      required: true,
    },
  },
};
</script>


<template>
  <a
    :href="projet.url"
    target="_blank"
    class="projet-preview"
    :style="{
      'background-image':
        'url(' + require('../assets/' + projet.image + '') + ')',
    }"
  >
    <div>
      <p class="projet-preview__title">{{ projet.title }}</p>
      <font-awesome-icon icon="rocket" />
    </div>
  </a>
</template>


<style scoped lang="scss">
.projet-preview {
  display: block;
  justify-self: center;

  min-height: 30rem;
  width: 100%;
  max-width: 100%;
  height: auto;

  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: $shadow;
  border-radius: $generic-radius;
  text-decoration: none;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: $generic-radius;
    background-color: pink;
    opacity: 0;

    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transition: all 0.3s ease-in-out;

      > svg {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      }
    }
  }

  &__title {
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  svg {
    font-size: 3.5rem;
    color: white;

    &:hover {
      // animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: rotate(0);
    }
  }
}
</style>

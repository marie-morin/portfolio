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
  width: 25rem;
  height: 25rem;

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
    }
  }

  &__title {
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  svg {
    font-size: 3rem;
    color: white;
  }
}

.test {
  max-width: 25rem;
  max-height: 25rem;
}
</style>

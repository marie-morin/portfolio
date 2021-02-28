<script>
export default {
  name: "LangageIcon",

  props: {
    iconPrefixe: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    iconText: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      let icon = [];
      icon.push(this.iconPrefixe);
      icon.push(this.iconName);
      return icon;
    },
  },
};
</script>


<template>
  <div class="langage">
    <font-awesome-icon :icon="icon" class="langage__icon" />
    <span class="langage__text">{{ iconText }}</span>
  </div>
</template>


<style lang="scss" scoped>
.langage {
  position: relative;
  display: inline-block;

  &__icon {
    font-size: 5rem;
  }

  &__text {
    width: 12rem;
    margin-left: -6rem;
    position: absolute;
    bottom: 125%;
    left: 50%;

    border-radius: $generic-radius;
    background-color: $font-color;
    color: #fff;
    text-align: center;
    padding: 0.5rem 0;

    visibility: hidden;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -0.5rem;

      border-width: 0.5rem;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
  }

  &:hover .langage__text {
    visibility: visible;
    opacity: 1;
  }
}
</style>>
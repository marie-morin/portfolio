
<script>
export default {
  name: "BurgerMenu",

  props: {
    closeMenu: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      menuOpening: false,
    };
  },

  watch: {
    closeMenu() {
      this.menuOpening = this.closeMenu;
    },
  },

  methods: {
    openMenu() {
      this.menuOpening = !this.menuOpening;
      this.$emit("open-menu");
    },
  },
};
</script>

<template>
  <div
    class="burger-menu"
    :class="menuOpening ? 'burger-menu--cross' : 'burger-menu--stack'"
    @click="openMenu()"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped lang="scss">
.burger-menu {
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: $break-tablet + 99) {
    display: none;
  }

  &--stack {
    width: 4rem;
    position: absolute;
    right: 3rem;

    span {
      width: 100%;
      height: 0.5rem;
      display: inline-block;
      position: relative;
      background-color: $font-color;
      border-radius: $generic-radius;
      z-index: 10;
      transform: rotate(0);
      transition: all 0.3s ease-in-out;

      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }

  &--cross {
    width: 4rem;
    position: absolute;
    right: 3rem;

    span {
      width: 100%;
      height: 0.5rem;
      display: inline-block;
      position: absolute;
      background-color: $font-color;
      border-radius: $generic-radius;
      z-index: 10;

      &:first-child {
        transform: rotate(45deg);
        transition: all 0.3s ease-in-out;
      }

      &:nth-child(2) {
        transform: rotate(-45deg);
        transition: all 0.3s ease-in-out;
      }

      &:last-child {
        display: none;
      }
    }
  }
}
</style>
<script>
export default {
  name: "BaseButton",

  props: {
    tag: {
      type: String,
      default: "button",
    },
    to: {
      default: null,
    },
    type: {
      type: String,
      default: "default",
      description: "Button type (e,g primary, danger etc)"
    },
    nativeType: {
      type: String,
      default: "button",
      description: "Button native type (e.g submit,button etc)"
    },
    icon: {
      type: String,
      default: "",
      description: "Button icon"
    },
    iconOnly: {
      type: Boolean,
      default: false,
      description: "Whether button contains only an icon"
    },

    // Props définissants le style du bouton
    isGenericBtn: {
      type: Boolean,
      default: false,
    },
    isCloseBtn: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      let btnClasses = [
        { "btn--block": this.isGenericBtn },
        { "btn--generic": this.isGenericBtn },
        { "btn--down": this.isGenericBtn },
        { "btn--shadow": this.isGenericBtn },

        { "btn--close": this.isCloseBtn },

        { "btn--link": this.isLink },
      ];
      return btnClasses;
    }
  },

  methods: {
    handleClick(event) { this.$emit("click", event) }
  }
};
</script>

<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : ''"
    :to="to"
    @click="handleClick"
    class="btn"
    :class="classes"
  >
    <slot v-if="!iconOnly"/>
  </component>
</template>

<style scoped lang="scss">
.btn {
  border: none;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  &--block {
    margin: 0.5rem;
    padding: 1rem 2rem;
    color: $clear-color;
    border-radius: $small-radius;
    text-transform: uppercase;
  }

  &--generic {
    background-color: lighten($color: $secondary-color, $amount: 20);
  }

  &--bigGreen {
    background-color: $success-color;
    display: block;
  }

  &--cancel {
    background-color: lighten($color: $warning-color, $amount: 10);
  }

  &--round {
    width: 3.5rem;
    height: 3.5rem;
    @include flexbox(center, row, center);
    border-radius: $round-radius;
  }

  &--dots {
    background-color: transparent;
    color: inherit;
  }

  &--nav {
    background-color: transparent;
    color: $clear-color;
    border-radius: $round-radius;
    font-size: 2.3rem;

    &:not(:first-child) {
      margin-left: 3rem;
    }
  }

  &--option {
    @include flexbox(flex-start, row, center);
    padding: 1rem 2rem;
    background-color: transparent;
    color: $police-color;
    border-radius: $small-radius;
    text-transform: uppercase;

    svg {
      margin-right: 1rem;
    }
  }

  &--close {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 0.5rem 0 0;
    padding: 0;
    
    background-color: transparent;
    color: inherit;

    &:hover {
      color: darken($color: $police-color, $amount: 10);
    }
  }

  &--link {
    color: $success-color;
    background-color: transparent;
      
    &:hover {
      color: darken($color: $success-color, $amount: 20);
      text-decoration: underline;
    }
  }

  &--shadow {
    &:hover{
      box-shadow: $shadow;
    }
  }

  &--up {
    transition: all .2s;

    &:hover {
      transform: translateY(-0.3rem);
    }

    &:active {
      box-shadow: $shadow;
      transform: translateY(-0.1rem);
    }
  }

  &--down {
    transition: all .2s;

    &:active {
      transform: translateY(0.2rem);
    }
  }
}
</style>
<script>
export default {
  name: "TimelineItem",
  props: {
    placedRight: {
      type: Boolean,
    },
  },
};
</script>


<template>
  <li class="item" :class="placedRight ? 'item--right' : 'item--left'">
    <div class="item__content">
      <div>
        <p class="item__title">Développeur Web</p>
        <p class="item__time">Mai 2010 - Janvier 2016</p>
      </div>

      <div class="item__description">
        <p class="item__text">
          Som freelance Fullstack Developer arbejder jeg med et hav af kunder,
          hjemmesider og apps. Jeg har tidligere designet og udviklet
          hjemmesider og andre løsninger for arkitekter, bilforhandlere, skoler,
          designere, fotografer og manger flere. Læs mere:
        </p>

        <a href="https://tristanwhite.info" target="_blank" class="item__link">
          Voir le projet
        </a>
      </div>
    </div>
  </li>
</template>


<style scoped lang="scss">
.item {
  width: 50%;
  position: relative;

  &--left {
    text-align: right;

    &:before {
      right: -5px;
    }

    .item__content {
      margin-right: 2rem;
    }
  }

  &--right {
    text-align: left;
    left: 50%;

    &:before {
      left: -9px;
    }

    .item__content {
      margin-left: 2rem;
    }
  }

  &:before {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    position: absolute;
    top: 50%;

    background: #fff;
    border: 4px solid lighten($color: pink, $amount: 5);
    border-radius: 50%;
    z-index: 10;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0;
    color: darken($color: $font-color, $amount: 10);
    font-weight: 700;
  }

  &__time {
    margin-top: 0;
    margin-bottom: 0;
    color: pink;
  }

  &__text {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  &__link {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 0;
    padding: 0.5rem 1rem;

    font-family: inherit;
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;

    background-color: $primary-color;
    color: $clear-color;
    border: none;
    border-radius: $small-radius;

    cursor: pointer;
    box-shadow: none;
    transition: all 0.3s ease-in-out;

    &:active {
      transform: translateY(0.2rem);
    }

    &:hover {
      box-shadow: $shadow;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
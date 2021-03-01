<script>
import BurgerMenu from "./BurgerMenu";

export default {
  name: "TheHeader",

  components: { BurgerMenu },

  data() {
    return {
      selectedPage: null,
      headerClass: "",
      menuOpening: false,
    };
  },

  watch: {
    $route(to) {
      this.selectedPage = to.name;
    },
  },

  created() {
    this.selectedPage = this.$route.name;
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.scrollY !== 0) {
        this.headerClass = "header--scrolled";
      } else {
        this.headerClass = "";
      }
    },
  },
};
</script>


<template>
  <header class="header" :class="headerClass">
    <div class="container header__container">
      <img src="@/assets/logo.svg" alt="logo" />

      <BurgerMenu
        @open-menu="menuOpening = !menuOpening"
        :closeMenu="menuOpening"
      />

      <div class="links" :class="{ 'links--visible': menuOpening }">
        <ul class="navigation">
          <li>
            <a
              href="#top"
              @click="menuOpening = false"
              :class="{ active: selectedPage == 'Home' }"
            >
              Accueil
            </a>
          </li>

          <!-- <li>
            <a
              href="#about"
              @click="menuOpening = false"
              :class="{ active: selectedPage == 'About' }"
            >
              A Propos
            </a>
          </li> -->

          <li>
            <a
              href="#projets"
              @click="menuOpening = false"
              :class="{ active: selectedPage == 'Work' }"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="mailto:mariemorin19@gmail.com"
              @click="menuOpening = false"
            >
              Contact
            </a>
          </li>
        </ul>

        <div class="icons">
          <a
            href="https://www.linkedin.com/in/marie-morin-dev/"
            target="_blank"
            class="icon"
            @click="menuOpening = false"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://github.com/marie-morin"
            target="_blank"
            class="icon"
            @click="menuOpening = false"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  padding: 2rem 0;
  background-color: transparent;
  z-index: 100;
  transition: all 0.3s ease-in-out;

  &--scrolled {
    background-color: white;
    transition: all 0.1s ease-in-out;
  }

  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-height: 6rem;

    &.logo-rs {
      max-height: 2rem;
      margin-left: 4rem;
    }
  }

  .links {
    display: flex;
    align-items: center;

    @media screen and (max-width: $break-tablet) {
      min-width: 100vw;
      min-height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      transform: translateY(-100%);
      transition: all 0.3s ease-in-out;
    }

    &--visible {
      transform: translateY(0%);
      transition: all 0.3s ease-in-out;
    }
  }

  ul.navigation {
    display: flex;
    margin: 0;
    padding: 0;

    @media screen and (max-width: $break-tablet) {
      flex-direction: column;
      align-items: center;
    }
  }

  li {
    display: flex;
    align-items: center;

    position: relative;
    list-style: none;

    @media screen and (min-width: $break-tablet + 1) {
      &:not(:first-child) {
        --marginLeft: 8rem;
        margin-left: var(--marginLeft);

        &::before {
          content: "";
          width: 0.2rem;
          height: 60%;
          position: absolute;
          left: calc(var(--marginLeft) / 2 * -1);
          top: 50%;
          transform: translateY(-50%);

          background-color: #aaaaaa;
        }
      }
    }

    &:not(:first-child) {
      @media screen and (max-width: $break-tablet) {
        margin-top: 3rem;
      }
    }
  }

  a {
    text-decoration: none;
    font-size: 2.1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: $font-color;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: pink;
      transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: $break-tablet) {
      width: 100%;
      font-size: 3.5rem;
    }
    @media screen and (max-width: $break-small) {
      font-size: 2.8rem;
    }
  }

  .icons {
    @media screen and (max-width: $break-tablet) {
      margin-top: 4rem;
    }
  }

  .icon {
    margin-left: 4rem;
    font-size: 2.5rem;

    &:first-child {
      @media screen and (max-width: $break-tablet) {
        margin-left: 0;
      }
    }
  }
}
</style>

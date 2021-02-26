<script>
// import About from "../views/About.vue";
import BurgerMenu from "./BurgerMenu";

export default {
  name: "TheHeader",

  components: { BurgerMenu },

  data() {
    return {
      selectedPage: null,
      headerClass: "",
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
      // console.log(window.scrollY);
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
    <div class="container">
      <img src="@/assets/logo.svg" alt="logo" />

      <div>
        <BurgerMenu />
        <ul class="navigation">
          <li>
            <a href="#top" :class="{ active: selectedPage == 'Home' }">
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" :class="{ active: selectedPage == 'About' }">
              CV
            </a>
          </li>

          <li>
            <a href="#projets" :class="{ active: selectedPage == 'Work' }">
              Projets
            </a>
          </li>
          <li>
            <a href="mailto:mariemorin19@gmail.com">Contact</a>
          </li>
        </ul>

        <a
          href="https://www.linkedin.com/in/marie-morin-dev/"
          target="_blank"
          class="icon"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/marie-morin" target="_blank" class="icon">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </header>
</template>


<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  padding: 3rem 0;
  background-color: transparent;
  z-index: 100;

  transition: all 0.3s ease-in-out;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      @media screen and (max-width: $break-tablet) {
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }

  &--scrolled {
    background-color: white;
    transition: all 0.1s ease-in-out;
  }

  img {
    max-height: 6rem;

    &.logo-rs {
      max-height: 2rem;
      margin-left: 4rem;
    }
  }

  ul.navigation {
    display: flex;
    margin: 0;
    padding: 0;

    @media screen and (max-width: $break-tablet) {
      min-width: 100vw;
      min-height: 100vh;
      position: fixed;
      top: 0;
      right: 0;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      // padding: 6rem;
      background-color: white;
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

    @media screen and (max-width: $break-tablet) {
      width: 100%;
      font-size: 3.5rem;
    }
    @media screen and (max-width: $break-small) {
      font-size: 2.8rem;
    }
  }

  .icon {
    margin-left: 4rem;
    font-size: 2.5rem;
  }
}

.active {
  color: pink !important;
}
</style>

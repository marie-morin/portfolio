<script>
export default {
  name: "TheHeader",

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
      <img src="https://via.placeholder.com/30" alt="logo" />

      <div>
        <ul class="navigation">
          <li>
            <router-link to="/" :class="{ active: selectedPage == 'Home' }">
              Accueil
            </router-link>
          </li>
          <li>
            <a
              href="@/assets/cv-developpeur-web-marie-morin.pdf"
              :class="{ active: selectedPage == 'About' }"
              download
            >
              CV
            </a>
          </li>
          <li>
            <router-link to="/work" :class="{ active: selectedPage == 'Work' }">
              Projets
            </router-link>
          </li>
          <li>
            <router-link to="/"> Contact </router-link>
          </li>
        </ul>

        <img src="https://via.placeholder.com/20" alt="logo" class="logo-rs" />
        <img src="https://via.placeholder.com/20" alt="test" class="logo-rs" />
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
    max-height: 3rem;

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
      flex-direction: column;
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
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: $font-color;

    @media screen and (max-width: $break-tablet) {
      width: 100%;
      text-align: right;
    }
  }
}

.active {
  color: pink !important;
}
</style>

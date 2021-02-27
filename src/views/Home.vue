<script>
import ProjetPreview from "../components/ProjetPreview";
import Projets from "../assets/projets.json";

export default {
  name: "Home",

  components: { ProjetPreview },

  data() {
    return {
      projets: [],
    };
  },

  created() {
    this.projets = Projets;
    console.log(this.projets);
  },
};
</script>

<template>
  <div>
    <section class="hero" id="top">
      <p class="hero-hello">Hello World</p>
      <h1>let marieMorin = "Développeur web";</h1>
      <div>
        <a href="#" class="btn btn--primary">Me contacter</a>
        <a href="#" class="btn btn--primary">Télecharger mon CV</a>
      </div>
    </section>

    <section class="projets" id="projets">
      <p class="container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
        molestie elit, et lacinia ipsum quam nec dui.
      </p>
      <h2>Projets</h2>

      <div class="projets-list container">
        <ProjetPreview
          v-for="projet in projets"
          :key="projet.title"
          :projet="projet"
        />
      </div>
    </section>

    <section class="technos container">
      <h2 id="about">A Propos</h2>
      <h2>Technologies</h2>

      <h3>Front-End</h3>
      <div class="technos-list">
        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <font-awesome-icon :icon="['fab', 'sass']" />
        <font-awesome-icon :icon="['fab', 'js-square']" />
        <font-awesome-icon :icon="['fab', 'vuejs']" />
        <font-awesome-icon :icon="['fab', 'react']" />
      </div>

      <h3>Back-End</h3>
      <div class="technos-list">
        <font-awesome-icon :icon="['fab', 'node-js']" />
        <font-awesome-icon :icon="['fab', 'node']" />
        <font-awesome-icon icon="database" />
        <font-awesome-icon :icon="['fab', 'php']" />
        <font-awesome-icon :icon="['fab', 'wordpress-simple']" />
      </div>

      <h3>Outils</h3>
      <div class="technos-list">
        <font-awesome-icon :icon="['fab', 'git-alt']" />
        <font-awesome-icon :icon="['fab', 'github']" />
        <font-awesome-icon :icon="['fab', 'trello']" />
        <font-awesome-icon icon="code" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 95vh;
  padding: 0 2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80");

  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    opacity: 0.6;
  }

  > * {
    position: relative;
  }

  &-hello {
    text-transform: uppercase;
    color: $primary-color;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 0.2rem;
  }

  button {
    margin: 1.8rem;
    padding: 1rem 2rem;
    background-color: $primary-color;
    color: white;
    text-transform: uppercase;
    font-size: 1.8rem;
    border: none;
    border-radius: $generic-radius;
  }
}

.projets {
  position: relative;
  padding-top: 4rem;
  text-align: center;

  &::before {
    content: "";
    width: 100%;
    height: 85%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $primary-color;

    @media screen and (max-width: $break-tablet) {
      height: 95%;
    }
  }

  > * {
    position: relative;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;

    @media screen and (max-width: $break-tablet) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }
}

h2 {
  margin-top: 5rem;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
}

.technos {
  width: 100%;

  &-list {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
    > svg {
      font-size: 5rem;
    }
  }
}
</style>
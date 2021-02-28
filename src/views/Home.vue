<script>
import ProjetPreview from "../components/ProjetPreview";
import Projets from "../assets/projets.json";
import Timeline from "@/components/Timeline";
import Test from "@/components/Test";
import LangageIcon from "@/components/LangageIcon";

export default {
  name: "Home",

  components: { ProjetPreview, Timeline, Test, LangageIcon },

  data() {
    return {
      projets: [],
    };
  },

  created() {
    this.projets = Projets;
  },
};
</script>

<template>
  <div>
    <section class="hero" id="top">
      <p class="hero-hello">Hello World</p>
      <h1>let marieMorin = "Développeur web";</h1>
      <div>
        <a href="#" class="btn btn--primary">Télecharger mon CV</a>
        <a href="mailto:mariemorin19@gmail.com" class="btn btn--primary">
          Me contacter
        </a>
      </div>
    </section>

    <section class="projets" id="projets">
      <h2>Projets</h2>
      <div class="projets-list container">
        <ProjetPreview
          v-for="projet in projets"
          :key="projet.title"
          :projet="projet"
        />
      </div>
    </section>

    <section class="about container">
      <h2 id="about">A Propos</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita id
        sint saepe unde illum repellat animi in ducimus, voluptatibus quod harum
        at iure veniam. Autem rem quasi beatae excepturi velit. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Expedita id sint saepe unde
        illum repellat animi in ducimus, voluptatibus quod harum at iure veniam.
        Autem rem quasi beatae excepturi velit.
      </p>
      <Timeline />
      <Test />
    </section>

    <section class="technos container">
      <h2>Technologies</h2>

      <h3>Front-End</h3>

      <div class="technos-list">
        <LangageIcon
          iconPrefixe="fab"
          iconName="js-square"
          iconText="JavaScript"
        />
        <LangageIcon iconPrefixe="fab" iconName="vuejs" iconText="VueJs" />
        <LangageIcon iconPrefixe="fab" iconName="html5" iconText="HTML5" />
        <LangageIcon iconPrefixe="fab" iconName="css3-alt" iconText="CSS3" />
        <LangageIcon iconPrefixe="fab" iconName="sass" iconText="Sass" />
        <LangageIcon iconPrefixe="fab" iconName="react" iconText="ReactJs" />
      </div>

      <h3>Back-End</h3>
      <div class="technos-list">
        <LangageIcon iconPrefixe="fab" iconName="node" iconText="NodeJS" />
        <LangageIcon iconPrefixe="fas" iconName="database" iconText="MySQL" />
        <LangageIcon iconPrefixe="fab" iconName="php" iconText="PHP" />
        <LangageIcon
          iconPrefixe="fab"
          iconName="wordpress-simple"
          iconText="Wordpress"
        />
      </div>

      <h3>Outils</h3>
      <div class="technos-list">
        <LangageIcon iconPrefixe="fab" iconName="git-alt" iconText="Git" />
        <LangageIcon iconPrefixe="fab" iconName="github" iconText="Github" />
        <LangageIcon iconPrefixe="fab" iconName="trello" iconText="Trello" />
        <LangageIcon
          iconPrefixe="fas"
          iconName="terminal"
          iconText="Terminal"
        />
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
}

.projets {
  position: relative;
  padding-top: 2rem;
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

.about {
  padding-top: 3rem;
}

.technos {
  width: 100%;
  padding-top: 3rem;

  &-list {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
}
</style>
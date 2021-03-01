<script>
import ProjetPreview from "../components/ProjetPreview";
import Projets from "../assets/projets.json";
// import Timeline from "@/components/Timeline";
import LangageIcon from "@/components/LangageIcon";

export default {
  name: "Home",

  components: { ProjetPreview, LangageIcon },
  // components: { ProjetPreview, Timeline, LangageIcon },

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
        <!-- <a href="#" class="btn btn--primary">Télecharger mon CV</a> -->
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

    <!-- <section class="about container">
      <h2 id="about">A Propos</h2>
      <p>
        Je suis Marie, développeuse Web Fullstack. <br />

        Après 5 ans dans la diététique, j’ai entrepris une reconversion
        professionnelle pour me diriger vers le développement web. <br /><br />

        C'est en tentant de créer un site web pour mon activité de déitéticienne
        que j'ai découvert le développement web : l’aspect créatif m'a tout de
        suite séduite, mais également l'apprentissage quotidien qu'il nécessite
        ! <br /><br />

        En 2020, décidée à transformer ma passion en profession, je me suis
        inscrite au parcours Développeur Web proposé par OpenClassrooms. Cette
        formation m'a permis d'acquérir les compétences nécessaires afin d'être
        employable dans le domaine du développement web. <br />

        Mon diplôme de Développeur web en poche, je continue à me former et à
        pratiquer sur des projets personnels pour renforcer mes compétences et
        en développer de nouvelles. <br /><br />

        Le développement web m'apporte aujourd'hui exactement ce que je
        recherchais en entamant ma reconversion professionnelle et j’ai hâte de
        partager cela avec vous.
      </p>
      <Timeline />
    </section> -->

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

  background-image: url("../assets/hero-image.jpeg");
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
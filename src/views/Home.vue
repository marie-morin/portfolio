<script>
import ProjetPreview from "../components/ProjetPreview";
import BaseButton from "../components/BaseButton";
export default {
  name: 'Home',
  components: { ProjetPreview, BaseButton }
}
</script>

<template>
  <div>
    <section class="hero">
      <p class="hero-hello">Hello World</p>
      <h1>let marieMorin = "Développeur web";</h1>
      <div>
        <button>Me contacter</button>
        <button>Télecharger mon CV</button>
        <BaseButton
          tag="button"
          isGenericBtn
          tabindex="0"
        >
          Créer une publication
        </BaseButton>
      </div>
    </section>

    <section class="intro">
      <p class="container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
        molestie elit, et lacinia ipsum quam nec dui.
      </p>
      <h2>Mes Projets</h2>
      <div class="intro-projets container">
        <ProjetPreview />
        <ProjetPreview />
        <ProjetPreview />
      </div>
    </section>

    <section>
        <h2>Mes technologies</h2>
        <font-awesome-icon icon="database" />
        <font-awesome-icon icon="terminal" />
        <font-awesome-icon icon="code" />

        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <font-awesome-icon :icon="['fab', 'js-square']" />
        <font-awesome-icon :icon="['fab', 'vuejs']" />
        <font-awesome-icon :icon="['fab', 'github']" />
        <font-awesome-icon :icon="['fab', 'git-alt']" />
        <font-awesome-icon :icon="['fab', 'php']" />
        <font-awesome-icon :icon="['fab', 'trello']" />
        <font-awesome-icon :icon="['fab', 'node-js']" />
        <font-awesome-icon :icon="['fab', 'node']" />
        <font-awesome-icon :icon="['fab', 'sass']" />
        <font-awesome-icon :icon="['fab', 'react']" />
        <font-awesome-icon :icon="['fab', 'free-code-camp']" />
        <font-awesome-icon :icon="['fab', 'wordpress-simple']" />
      </section>
  </div>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80");

  background-color: white;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  &::before {
    content: "";
    width: 100%;
    height: 90%;
    position: absolute;
    background-color: white;
    opacity: .6;
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

.intro {
  position: relative;
  padding-top: 4rem;
  text-align: center;

  &::before {
    content: "";
    width: 100%;
    height: 65%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $primary-color;
  }

  > * {
    position: relative;
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

  &-projets {
    // padding-top: 4rem;
    display: flex;
    justify-content: space-between;

    div {
      position: relative;
    }
  }
}

h2 {
    margin-top: 5rem;
    text-transform: uppercase;
  }
</style>
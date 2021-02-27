<script>
export default { name: "TheFooter" };
</script>


<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_cta">
        <p>Vous-êtes prêts à travailler avec moi ?</p>
        <a href="#" class="btn btn--outline">Contactez-moi</a>
      </div>
      <p>Retrouvez-moi sur :</p>
      <div className="footer__socials">
        <a href="https://github.com/marie-morin" target="_blank" class="icon">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.linkedin.com/in/marie-morin-dev/"
          target="_blank"
          class="icon"
        >
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a
          href="https://www.freecodecamp.org/marie-morin"
          target="_blank"
          class="icon"
        >
          <font-awesome-icon :icon="['fab', 'free-code-camp']" />
        </a>
      </div>
      <p>
        Copyright © 2021 Tous droits réservés | Fait avec ❤️ par Marie Morin
      </p>
    </div>
  </footer>
</template>


<style scoped lang="scss">
.footer {
  padding: 2rem;
  background-color: $primary-color;
  text-align: center;

  &_cta {
    width: 70%;
    height: 8rem;
    margin: -6rem auto 2rem auto;
    padding-left: 3rem;
    padding-right: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: $generic-radius;
    background-color: $secondary-color;
    color: white;

    font-size: 2rem;
  }

  &_socials {
    display: flex;
  }

  svg {
    margin: 0 2rem;
    font-size: 3.5rem;
    color: $font-color;
  }
}
</style>
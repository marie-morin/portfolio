<script>
export default { name: "TheFooter" };
</script>


<template>
  <footer class="footer">
      <div class="container">
        <div class="footer_cta">
          Vous-êtes prêts à travailler avec moi ?
        </div>
        <font-awesome-icon :icon="['fab', 'envira']" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidun.
        </p>
        <div className="footer__socials">
          <a href="https://www.google.com/">
            <font-awesome-icon :icon="['fab', 'google']" />
          </a>
          <a href="https://www.google.com/">
            <font-awesome-icon :icon="['fab', 'apple']" />
          </a>
          <a href="https://www.google.com/">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://www.google.com/">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
          <a href="https://www.google.com/">
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
        height: 10rem;
        margin: -7rem auto 2rem auto;

        // margin-left: auto;
        // margin-right: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: $generic-radius;
        background-color: $secondary-color;
        color: white;

        font-size: 2.5rem;
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
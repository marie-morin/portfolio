<script>

export default {
  name: "TheHeader",
};
</script>


<template>

  <header class="header">
    <div class="container">
      <img src="https://via.placeholder.com/30" alt="logo" />

      <div>
        <ul class="navigation">
          <li>
            <router-link to="/home">Accueil</router-link>
          </li>
          <li>
            <router-link to="/work">Projets</router-link>
          </li>
          <li>
            <router-link to="/about">A Porpos</router-link>
          </li>
        </ul>
        
        <img
          src="https://via.placeholder.com/20"
          alt="logo"
          className="logo-rs"
        />
        <img
          src="https://via.placeholder.com/20"
          alt="test"
          className="logo-rs"
        />
      </div>
    </div>
  </header>
  
</template>


<style scoped lang="scss">
.header {
  padding: 3rem 0;
  background-color: pink;
  // background-color: white;

  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;

      @media screen and (max-width: $break-tablet) {
        flex-direction: column;
        align-items: flex-end;
      }
    }
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
</style>
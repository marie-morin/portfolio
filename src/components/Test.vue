<script>
export default {
  name: "Test",
};
</script>

<template>
  <ul class="timeline container">
    <!-- Item 1 -->
    <li>
      <div class="direction direction-right">
        <div class="flag-wrapper">
          <span class="flag">Freelance</span>
          <span class="time-wrapper">
            <span class="time"> 2010 - 2016 </span>
          </span>
        </div>

        <div class="desc">
          Som freelance Fullstack Developer arbejder jeg med et hav af kunder,
          hjemmesider og apps. Jeg har tidligere designet og udviklet
          hjemmesider og andre løsninger for arkitekter, bilforhandlere, skoler,
          designere, fotografer og manger flere. Læs mere:
          <a href="https://tristanwhite.info" target="_top">
            https://tristanwhite.info
          </a>
        </div>
      </div>
    </li>

    <!-- Item 2 -->
    <li>
      <div class="direction direction-left">
        <div class="flag-wrapper">
          <span class="flag">Rundhøjskolen</span>
          <span class="time-wrapper"
            ><span class="time">2013 - 2016</span></span
          >
        </div>
        <div class="desc">
          Som <strong>IT-vejleder</strong> på Rundhøjskolen er jeg ansvarlig for
          indkøb opsætning og vedligeholdelse af skolens IT-udstyr. Envidere
          står jeg får udvikling og vedligeholdelse af skolens hjemmeside, samt
          diverse mindre projekter, infoskærme og mere. I det daglige står jeg
          for support af skolens IT-udstyr samt support for elever så vel som
          kollegaer. Jeg underviser ugentligt et IT-valghold.
        </div>
      </div>
    </li>

    <!-- Item 3 -->
    <li>
      <div class="direction direction-right">
        <div class="flag-wrapper">
          <span class="flag">Serverhosting A/S</span>
          <span class="time-wrapper"><span class="time">2012</span></span>
        </div>
        <div class="desc">
          Hos Serverhosting prøvede jeg kræfter diverse netværksteknologier. Jeg
          konfigurerede og installerede routere, switche, servere. Jeg ydede
          support for kunder, samt stod for indkøb af ny hardware.
        </div>
      </div>
    </li>

    <!-- Item 4 -->
    <li>
      <div class="direction direction-left">
        <div class="flag-wrapper">
          <span class="flag">IT-teknolog</span>
          <span class="time-wrapper"
            ><span class="time">2010 - 2012</span></span
          >
        </div>
        <div class="desc">
          Studerede IT-tekonologi på Aarhus Erhvervsakademi
        </div>
      </div>
    </li>
  </ul>
</template>


<style scoped lang="scss">
$link-color: #58b96b;

.timeline {
  position: relative;
  width: 860px;
  margin: 0px auto;
  padding: 20px;
  list-style-type: none;

  @media screen and (max-width: 860px) {
    width: 100%;
    padding: 4em 0 1em 0;
  }

  &:before {
    content: " ";
    width: 3px;
    height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -3px;
    background: $font-color;
    z-index: 5;
  }

  li {
    padding: 1em 0;

    @media screen and (max-width: 860px) {
      padding: 2em 0;
    }

    &::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}

.direction {
  position: relative;
  width: 400px;

  @media screen and (max-width: 860px) {
    float: none;
    width: 100%;
    text-align: center;
  }

  &-left {
    float: left;
    text-align: right;

    .flag:after {
      left: 100%;
    }

    .time-wrapper {
      float: left;

      @media screen and (max-width: 860px) {
        float: none;
      }
    }
  }

  &-right {
    float: right;

    .flag {
      &:after {
        right: 100%;
      }
      &:before {
        left: -40px;
      }
    }

    .time-wrapper {
      float: right;

      @media screen and (max-width: 860px) {
        float: none;
      }
    }
  }

  .flag {
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15);

    &:before {
      position: absolute;
      top: 50%;
      right: -40px;
      content: " ";
      display: block;
      width: 12px;
      height: 12px;
      margin-top: -10px;
      background: #fff;
      border-radius: 10px;
      border: 4px solid $link-color;
      z-index: 10;

      @media screen and (max-width: 860px) {
        position: absolute;
        top: -30px;
        left: 50%;
        content: " ";
        display: block;
        margin-left: -10px;
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      height: 0;
      width: 0;
      margin-top: -8px;
      border: solid transparent;
      border-left-color: rgb(248, 248, 248);
      border-width: 8px;
      pointer-events: none;

      @media screen and (max-width: 860px) {
        content: "";
        position: absolute;
        left: 50%;
        top: -8px;
        height: 0;
        width: 0;
        margin-left: -8px;
        border: solid transparent;
        border-bottom-color: rgb(255, 255, 255);
        border-width: 8px;
        pointer-events: none;
      }
    }
  }
}

.flag-wrapper {
  position: relative;
  display: inline-block;
  text-align: center;

  @media screen and (max-width: 860px) {
    text-align: center;
  }

  .flag {
    position: relative;
    display: inline;
    background: rgb(248, 248, 248);
    padding: 6px 10px;
    border-radius: 5px;
    font-weight: 600;
    text-align: left;

    @media screen and (max-width: 860px) {
      background: rgb(255, 255, 255);
      z-index: 15;
    }
  }
}

.time-wrapper {
  display: inline;
  line-height: 1em;
  font-size: 0.66666em;
  color: $link-color;
  vertical-align: middle;

  @media screen and (max-width: 860px) {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
  }

  .time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248, 248, 248);
  }
}

.desc {
  margin: 1em 0.75em 0 0;
  font-size: 0.9em;
  font-style: italic;
  line-height: 1.5em;

  a {
    color: $link-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 860px) {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;
    background: rgb(245, 245, 245);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    z-index: 15;
  }
}
</style>
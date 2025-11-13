<template>
  <div class="hero-wrapper">
    <div class="container">
      <div class="hero">
        <div class="hero-left">
          <b-row>
            <b-col class="headline-col" cols="12">
              <h1>{{ headline }}</h1>
              <h2>{{ subheadline }}</h2>
            </b-col>
            <b-col class="cta-col" cols="12" sm="6" md="6" lg="12">
              <slot name="formactions">
                <ZipCodeForm :intermediary-modal-options="intermediaryModalOptions" :action="zipcodeAction" />
              </slot>
            </b-col>
            <b-col cols="12" sm="6" class="d-block d-lg-none">
              <NuxtImg src="/assets/auto-insurance-shield.jpg" />
            </b-col>
          </b-row>
        </div>
        <div class="hero-right">
          <NuxtImg src="/assets/auto-insurance-shield.jpg" />
        </div>
      </div>
    </div>
    <div class="skews"></div>
  </div>
</template>

<script>
  export default {
    name: "SubVerticalHero",
    props: {
      heroImage: String,
      headline: String,
      subheadline: String,
      zipcodeAction: String,
      intermediaryModalOptions: Object,
    },
    methods: {
      getImage(image) {
        return "../public/assets/" + image;
      },
    },
  };
</script>

<style scoped lang="scss">
  .hero-wrapper {
    background-color: $gray-light;
    width: 100%;
    height: 700px;
    overflow: hidden;

    @include media-breakpoint-down(lg) {
      height: 500px;
    }
    @include media-breakpoint-down(md) {
      height: 750px;
    }
    @include media-breakpoint-down(sm) {
      height: 650px;
    }

    .container {
      z-index: -1;
    }

    .hero {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 700px;

      @include media-breakpoint-down(lg) {
        height: 500px;
      }
      @include media-breakpoint-down(md) {
        height: 750px;
      }
      @include media-breakpoint-down(sm) {
        height: 650px;
      }

      .hero-left {
        width: 60%;
        display: flex;
        flex-direction: column;
        margin-top: 6em;
        text-align: left;

        @include media-breakpoint-down(lg) {
          margin-top: 4em;
        }

        @include media-breakpoint-down(md) {
          width: 100%;
          margin-bottom: 2em;
        }

        @include media-breakpoint-down(sm) {
          margin-top: 3em;
          margin-bottom: 0;
        }

        h1 {
          font-size: 4.3rem;
          font-family: "Cantata One", serif;
          letter-spacing: -0.07rem;
          line-height: 4.9rem;

          @include media-breakpoint-down(xl) {
            font-size: 3.3em;
            line-height: 1.2;
          }
          @include media-breakpoint-down(lg) {
            font-size: 2.5em;
            max-width: 450px;
          }
        }

        h2 {
          color: $gray-dark;
          font-size: 2.39rem;
          font-family: "Nunito Sans", sans-serif;
          font-weight: 400;
          margin-top: 1.3rem;
          margin-bottom: 2.3rem;
          letter-spacing: -0.019rem;
          line-height: 2.85rem;

          @include media-breakpoint-down(lg) {
            font-size: 1.6em;
            line-height: 1.3em;
          }
        }

        img.mobile-image {
          max-width: 100%;

          @include media-breakpoint-down(xs) {
            margin-top: 1em;
          }
        }
      }

      .hero-right {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

        @include media-breakpoint-down(lg) {
          padding-top: 3em;
          align-items: flex-start;
        }
        @include media-breakpoint-down(md) {
          display: none;
        }

        img {
          width: 90%;
          max-width: 475px;
          margin-left: auto;
        }
      }
    }
  }

  .skews {
    width: 115%;
    background-color: $white;
    border-radius: 150%;
    position: relative;
    height: 250px;
    top: -62px;
    left: -7%;
    z-index: 0;

    @include media-breakpoint-down(xs) {
      width: 140%;
      left: -20%;
    }
  }
</style>

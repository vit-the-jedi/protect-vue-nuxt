<template>
  <div class="brands">
    <h3 class="text-center mb-4">
      <slot></slot>
    </h3>
    <b-row>
      <b-col
        :md="!calculatedRowLength ? '' : calculatedRowLength"
        cols="6"
        class="brand"
        v-for="provider in providersConfig"
        :fluid="shouldBeFluid ? isLastItem(provider) : false"
        :key="provider.name"
        :id="`provider-${providersConfig.indexOf(provider) + 1}`"
      >
        <NuxtImg
          :src="getImage(provider.image)"
          :alt="provider.name"
          :style="{
            maxWidth: logoMaxWidth,
            maxHeight: logoMaxHeight,
            margin: '0 auto',
          }"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "InsuranceBrands",
  props: {
    providersConfig: Array,
    rowLength: {
      type: Number,
      default: 0,
    },
    logoMaxWidth: {
      type: String,
      default: "100%",
    },
    logoMaxHeight: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      calculatedRowLength: this.getRowLength(),
      /*
       * Determines if the layout should be fluid based on the number of providers.
       * If the number of providers is odd, the layout should be fluid.
       * returns a boolean value to be used in the fluid attribute of the b-col component containing each provider image.
       */
      shouldBeFluid: this.providersConfig.length % 2 !== 0,
    };
  },
  methods: {
    /*
     * Enables bundler to include image in bundled output, otherwise a direct link like "../assets/image.jpg" will
     * result in a broken link.
     *  returns a node require of the image path.
     */
    getImage(image) {
      return "../public/assets/partners/" + image;
    },
    getRowLength() {
      return this.rowLength === 0 ? undefined : Math.floor(12 / this.rowLength);
    },
    /*
     * Checks if the provided item is the last item in the providersConfig array.
     * returns a boolean value indicating if the current item is the last item.
     */
    isLastItem(item) {
      return (
        this.providersConfig.indexOf(item) === this.providersConfig.length - 1
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.brands {
  max-width: 900px;
  width: 100%;
  margin: 50px auto 150px auto;

  .row {
    justify-content: center;
  }
  .brand {
    margin-bottom: 0.5em;
  }

  @include media-breakpoint-down(sm) {
    margin: 50px auto;
    padding: 0 15px;
    .brand {
      margin-bottom: 1em;
    }
    .brand[fluid] {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  .brand {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 100%;

      @include media-breakpoint-down(md) {
        max-width: 80%;
        margin: auto;
        display: block;
      }
    }
  }
}
</style>

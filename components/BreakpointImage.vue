<template lang="html">
  <section
    id="breakpoint-image"
    :style="`background-image: url(${getImage(image)})`"
  ></section>
</template>

<script>
export default {
  props: ["image"],
  methods: {
    getImage(image) {
      return "../public/assets/" + image;
    },
  },
};
</script>

<style lang="scss" scoped>
#breakpoint-image {
  height: 400px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin-bottom: 100px;

  @include media-breakpoint-down(md) {
    height: 200px;
  }
  @include media-breakpoint-down(sm) {
    margin-bottom: 50px;
    background-attachment: unset;
  }
}
</style>

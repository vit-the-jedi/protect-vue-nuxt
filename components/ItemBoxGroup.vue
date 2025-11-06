<template>
  <div class="item_box_group">
    <b-container :class="dynamicClass">
      <b-row>
        <b-col class="type_box" v-if="firstBoxText">
          <item-box :text="firstBoxText" class="nonclick" />
        </b-col>
        <b-col class="type_box" v-for="(option, key) in items" :key="key">
          <item-box
            :text="option.text"
            :icon="option.value.icon"
            :value="option.value.value"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ItemBox from "./ItemBox.vue";

export default {
  name: "ItemBoxGroup",
  props: {
    firstBoxText: String,
    items: Array,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    dynamicClass() {
      let numberOfItems = this.items.length;
      if (this.firstBoxText.length > 1) {
        numberOfItems++;
      }
      return `item-width-${numberOfItems}`;
    },
  },
};
</script>

<style lang="scss">
.item_box_group {
  margin-top: 50px;
  margin-bottom: 50px;

  @include media-breakpoint-down(md) {
    margin-top: 25px;
    margin-bottom: 50px;
  }

  .nonclick {
    pointer-events: none;
    cursor: initial;
  }
  @include media-breakpoint-down(md) {
    .type_box {
      flex: 25%;
      min-width: 50%;
      &.col {
        flex-grow: 0;
      }
    }
  }
  @include media-breakpoint-down(xs) {
    .type_box {
      flex: 100%;
      min-width: 50%;
    }
  }
  .item-width-6 {
    @include media-breakpoint-down(xl) {
      .type_box {
        flex: 33%;
        max-width: 33%;
      }
    }
  }
}
</style>

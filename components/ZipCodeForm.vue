<template>
  <form
    class="zipcode-form"
    :action="action"
    method="GET"
    @submit.prevent
    @submit="submit"
  >
    <InputsMain
      :state="true"
      :valid="validateZip()"
      @input="set('zipcode', $event)"
      :value="zipcode"
      :config="{
        label: 'Enter your zip code',
        invalidFeedback: 'Please input a valid zipcode',
        noCheckMark: true,
        name: 'zipcode',
        icon: 'geo',
        model: zipcode,
        type: 'number',
      }"
    ></InputsMain>
    <intermediary-modal
      v-if="showIM"
      :url="intermediaryModalOptions.url"
      :delay="intermediaryModalOptions.delay"
      :text="intermediaryModalOptions.text"
      :subtext="intermediaryModalOptions.subtext"
    >
      <img
        slot="logo"
        :src="getImage(intermediaryModalOptions.logo)"
        class="img-fluid"
      />
      <img
        slot="gif"
        :src="getImage(intermediaryModalOptions.gif)"
        class="img-fluid"
      />
    </intermediary-modal>
    <ButtonsMain
      :disabled="!validateZip()"
      :config="{
        type: 'submit',
        size: 'lg',
        variant: 'primary',
        label: 'CONTINUE',
        icon: 'arrow-right-short',
      }"
    ></ButtonsMain>
  </form>
</template>

<script>
export default {
  name: "ZipCodeForm",
  props: ["action", "intermediaryModalOptions"],
  data() {
    return {
      showIM: false,
      zipcode: "",
    };
  },
  created() {},
  methods: {
    submit() {
      if (this.action.includes("http")) {
        const actionUrl = new URL(this.action);
        actionUrl.searchParams.set("zipcode", this.zipcode);

        if (typeof this.intermediaryModalOptions !== "undefined") {
          // use the new intermediary modal here
          this.intermediaryModalOptions.url = actionUrl;
          this.showIM = true;
        } else {
          window.location.href = actionUrl;
        }
      } else {
        this.$router.push({
          path: this.action,
          query: { zipcode: this.zipcode },
        });
      }
    },
    set(field, value) {
      this[field] = value;
    },
    validateZip() {
      if (this.zipcode) {
        const re = /\d{5}/;
        return re.test(this.zipcode);
      }
      return false;
    },
    getImage(image) {
      return "../public/assets/" + image;
    },
  },
};
</script>

<style lang="scss">
// Large input group styling
.input-group-lg {
  > .form-control,
  > .custom-select,
  > .input-group-prepend > .input-group-text,
  > .input-group-append > .input-group-text,
  > .input-group-prepend > .btn,
  > .input-group-append > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
}

.zipcode-form {
  display: flex;
  justify-content: space-between;
  max-width: 720px;

  @include media-breakpoint-down(md) {
    flex-wrap: wrap;
    width: 100%;
  }

  button {
    height: 80px;
    padding: 1em 1.2em;
    margin-left: 1em;

    @include media-breakpoint-down(md) {
      margin: 1em 0;
      width: 100%;
    }
  }

  label {
    @include media-breakpoint-down(md) {
      left: 80px;
    }
  }

  .inputs-wrapper {
    width: 100%;

    .input-group {
      background-color: #fff;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ced4da;

      .input-group-text {
        display: flex;
        align-items: center;
        padding: 0.375rem 0.75rem;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        text-align: center;
        white-space: nowrap;
      }
      .input-group-prepend {
        display: flex;
      }
      label {
        @include media-breakpoint-between(sm, lg) {
          font-size: 1rem;
        }
      }
      input {
        border: none;
        height: 78px;
      }
    }
  }

  .valid {
    @include media-breakpoint-down(md) {
      width: 100%;
    }
  }

  span {
    @include media-breakpoint-down(md) {
      width: 100%;
    }
  }

  .btn-primary {
    min-width: 225px;
    border-radius: 0.3rem;
    @include media-breakpoint-down(lg) {
      min-width: auto;
    }
  }
}
</style>

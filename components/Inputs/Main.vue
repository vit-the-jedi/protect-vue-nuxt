<template>
  <div
    class="inputs-wrapper"
    :class="{ error: !valid && touched, valid: valid }"
  >
    <div
      class="error-message"
      v-if="!valid && config.invalidFeedback && touched"
    >
      {{ config.invalidFeedback }}
    </div>
    <div
      class="input-group"
      v-bind:class="{ focus: false && focus && !config.noFocusStyle }"
    >
      <b-input-group size="lg">
        <template v-slot:prepend v-if="currentIconLoaded">
          <b-input-group-text>
            <component :is="currentIcon" :name="currentIcon"> </component>
          </b-input-group-text>
        </template>
        <template v-slot:append v-if="!config.noCheckMark">
          <b-input-group-text
            class="indicator"
            @click="config.appendIconClickFunction()"
          >
            <component v-if="config.appendIcon" :is="config.appendIcon" />
          </b-input-group-text>
        </template>
        <b-form-input
          @keyup.enter.native="onEnterButton()"
          @focus="focus = true"
          @blur="focus = false"
          :ref="config.name"
          :type="config.type ? config.type : 'text'"
          :name="config.name"
          :value="config.model"
          :placeholder="config.placeholderText"
          @input="
            $emit('input', $event);
            touched = true;
          "
          v-bind:class="{
            'has-leading-icon': config.icon,
            'has-check-mark': !config.noCheckMark,
            'no-check-mark': config.noCheckMark,
            valid: valid,
          }"
          :id="config.name"
        >
        </b-form-input>
        <label
          :for="config.name"
          v-bind:class="{ focus: focus || value, valid: valid }"
          >{{ config.label }}</label
        >
      </b-input-group>
    </div>
  </div>
</template>

<script>
import iconMixin from "~/mixins/iconMixin";

export default {
  name: "Inputs",
  mixins: [iconMixin],
  props: {
    config: Object,
    valid: Boolean,
    value: String,
    model: String,
  },
  data() {
    return {
      focus: false,
      touched: false,
    };
  },
  methods: {
    onEnterButton() {
      if ("appendIconClickFunction" in this.config) {
        this.config.appendIconClickFunction();
      }
      return false;
    },
    update() {
      this.$emit("input", this.$refs[this.config.name].value);
    },
  },
  computed: {
    state() {
      return this.config.state;
    },
  },
};
</script>

<style lang="scss" scoped>
.elixr-icon {
  // height: 100%;
  width: 60px;
  max-height: 45px;
}

.elixr-icon.check-mark {
  max-height: 20px;
  width: 25px;
}
.error-message {
  color: #ff4848;
  text-align: right;
  font-size: 14px;
  position: absolute;
  top: -27px;
}
.inputs-wrapper {
  position: relative;
}
.input-group {
  &.focus {
    box-shadow: 0 0 0 2px #b5c7e5;
  }
  border-radius: 5px;
  height: 80px;
  input.form-control {
    height: 80px;
    color: #9f9f9f;
    padding-top: 30px;
    font-size: 21px;
  }
  input.has-leading-icon {
    border-left: none;
    &:focus {
      box-shadow: none;
      // background: #f6faff;
      color: #9f9f9f;
    }
  }
  // border: 2px solid blue;
  // border-radius: 5px;
  .input-group-prepend {
    .input-group-text {
      background: none;
    }
    svg {
      fill: #c5c5c5;
    }
  }
  .input-group-append {
    border: none;
    .btn {
      border: none;
      background: blue;
      .button-icon {
        color: white;
      }
    }
    .btn.btn-outline-secondary {
      // border-top-right-radius: 5px;
      // border-bottom-right-radius: 5px;
    }
  }
  .indicator {
    background: #f9f9f9;
    svg {
      fill: #b5c7e5;
    }
  }
}

.valid {
  .input-group {
    border-radius: 5px;
    input.form-control {
      color: #3b54ba;
    }
    input {
      background: #fff;
    }
    &.focus {
      background: #f6faff;
      border-radius: 5px;
      box-shadow: 0 0 0 2px rgba(59, 84, 186, 0.9);
      .input-group-text {
        color: #3b54ba;
        &.indicator {
          background: #3b54ba;
          border: none;
          svg {
            fill: #fff;
          }
        }
      }
      .input-group-prepend {
        border-radius: 5px;
        svg {
          fill: #3f50e6;
        }
      }
      input.valid {
        color: #3b54ba;
      }
      input {
        background: #f6f9fe;
      }
    }
    // background: #f6faff;
    border-radius: 5px;
    // box-shadow: 0 0 0 2px rgba(59, 84, 186, 0.9);
    .input-group-text {
      color: #8e8e8e;
      &.indicator {
        svg {
          fill: #3b54ba;
        }
      }
    }
    .input-group-prepend {
      border-radius: 5px;
      svg {
        fill: #3b54ba;
      }
    }
  }
}

.error {
  .input-group {
    &.focus {
      input {
        // box-shadow: none;
        // color: #e5e5e5;
        // &:focus {
        color: #999999;
        // box-shadow: none;
        // }
      }
    }

    // &.focus {
    // border: 2px solid blue;
    // background: #f6faff;
    border-radius: 5px;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.9);
    input {
      // box-shadow: none;
      color: #e5e5e5;
      &:focus {
        color: #999999;
        box-shadow: none;
      }
    }

    .input-group-text {
      color: #e5e5e5;
      background: #f9f9f9;
      &.indicator {
        svg {
          fill: #e1e1e1;
        }
        // border: none;
      }
      // }
    }
  }
}
input {
  .has-leading-icon {
    border-left: none;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

input:focus {
  box-shadow: none !important;
}

.input-group .form-control {
  &.has-check-mark {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.no-check-mark {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
label {
  color: #9f9f9f;
  // font-size: 18px;
  font-size: 1.25rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 110px;
  top: 25px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

label {
  // top: 5px;
  // left: 110px;
  // font-size: .8rem;
  // font-size: 14px;
  // z-index: 100;

  &.focus {
    top: 8px;
    left: 110px;
    font-size: 0.8rem;
    // font-size: 14px;
    color: #9f9f9f;
    z-index: 100;
  }
  &.valid {
    top: 8px;
    left: 110px;
    font-size: 0.8rem;
    // font-size: 14px;
    color: #3b54ba;
    z-index: 100;
  }
}
</style>

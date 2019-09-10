<template lang="pug">
  ._wrap
    label.label(:for="name" :style="moveLabel") {{ placeholder }}
    input.input(
      :id="name"
      :name="name"
      v-model="field"
      :type="type"
      :required="required"
      @input="setData"
    )
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    required: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      field: ""
    };
  },
  computed: {
    moveLabel() {
      if (this.field.length > 0 || this.focused) {
        return { top: 0 };
      }
      return { top: "50%" };
    }
  },
  methods: {
    setData() {
      this.$emit("setField", {
        name: this.name,
        value: this.field
      });
    }
  }
};
</script>
<style lang="postcss" scoped>
._wrap {
  display: flex;
  position: relative;
}

.label {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
  padding: 0 5px;
  background-color: white;
  font-family: inherit;
  color: inherit;
  transition: top 0.1s linear;
  border-radius: inherit;
}

.input {
  border: none;
  line-height: 45px;
  width: 100%;
  text-align: center;
  font-family: inherit;
  color: inherit;
  outline: none;
  border-radius: inherit;
}
</style>

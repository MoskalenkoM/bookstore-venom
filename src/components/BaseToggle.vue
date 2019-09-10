<template lang="pug">
  ._wrap
    input.input(id="toggle" type="checkbox" @change="change" v-model="isChecked" hidden)
    label.toggle(for="toggle")
      span.auth {{ auth }}
      span.reg {{ reg }}
</template>

<script>
export default {
  props: {
    auth: {
      type: String,
      required: true
    },
    reg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    change() {
      this.$emit("setStateForm", {
        state: this.isChecked ? "reg" : "auth"
      });
    }
  }
};
</script>

<style lang="postcss">
._wrap {
  width: 100%;
  display: flex;
}

.toggle {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #2c3e50;
  color: white;
  overflow: hidden;
}

.reg,
.auth {
  display: block;
  height: 100%;
  width: 50%;
  padding: 10px;
  line-height: 1;
  color: #2c3e50;
}

.input:not(:checked) + .toggle > .auth {
  background-color: lightgrey;
}

.input:checked + .toggle > .reg {
  background-color: lightgrey;
}
</style>

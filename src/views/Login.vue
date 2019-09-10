<template lang="pug">
  .login
    h1.h1 {{ isStateForm | capitalize }} step
    BaseToggle(v-bind="toggle" @setStateForm="stateForm")
    form.form(@submit.prevent="regAuth(sendData)")
      BaseInput.field(v-bind="login" @setField="setData")
      BaseInput.field(v-bind="password" @setField="setData")
      BaseInput.field(
        v-if="isStateForm === toggle.reg"
        v-bind="confirmPassword"
        @setField="setData"
        :class="error_password ? 'error_password' : ''"
      )
      button.btn(type="submit") Send
</template>

<script>
/* eslint 'no-alert': 'off' */
import BaseInput from "../components/BaseInput.vue";
import BaseToggle from "../components/BaseToggle.vue";

export default {
  components: {
    BaseInput,
    BaseToggle
  },
  data() {
    return {
      sendData: {},
      error_password: false,
      login: {
        placeholder: "Login",
        name: "email",
        type: "email"
      },
      password: {
        placeholder: "Password",
        name: "password",
        type: "password"
      },
      confirmPassword: {
        placeholder: "Confirm password",
        name: "confirm_password",
        type: "password"
      },
      toggle: {
        auth: "auth",
        reg: "reg"
      },
      isStateForm: "auth"
    };
  },
  methods: {
    setData(data) {
      this.sendData[data.name] = data.value;
    },
    regAuth(data) {
      // send data
      if (this.isStateForm === this.toggle.reg) {
        if (this.sendData.password !== this.sendData.confirm_password) {
          console.log("пароли не совпадают");
          this.error_password = true;
        } else {
          this.error_password = false;
          console.log(data);
          alert("регистрируемся");
        }
      } else {
        this.error_password = false;
        console.log(data);
        alert("авторизуемся");
      }
    },
    stateForm(data) {
      this.isStateForm = data.state;
    }
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  watch: {
    isStateForm() {
      delete this.sendData.confirm_password;
    }
  }
};
</script>

<style lang="postcss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  color: #2c3e50;
  font-family: var(--roboto);
}

.field {
  margin-top: 25px;
  border: 1px solid grey;
  border-radius: 10px;
}

.btn {
  background-color: #2c3e50;
  color: white;
  font-family: var(--roboto);
  border: none;
  margin-top: 30px;
  line-height: 40px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: default;
  }
}

.error_password {
  border-color: red;
  color: red;
}
</style>

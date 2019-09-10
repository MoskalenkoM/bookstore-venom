<template lang="pug">
  .app
    .nav(v-if="isAuthenticated")
      router-link(to="/") Home
      router-link(to="/about") About
      //- router-link(to="/login") Login
    .view
      router-view
</template>

<script>
import { mapState, mapMutations } from "vuex";
import "./assets/css/main.css";

export default {
  computed: {
    ...mapState("CheckProfile", {
      isAuthenticated: "isAuthenticated"
    }),
    ...mapMutations("CheckProfile", {
      setAuthenticated: "setAuthenticated"
    })
  }
};
</script>

<style lang="postcss" scoped>
.app {
  font-family: var(--roboto);
  text-align: center;
  color: #2c3e50;
  margin: 50px auto;
}
</style>

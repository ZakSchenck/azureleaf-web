<template>
  <div>
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";

export default {
  name: "App",
  components: {
    PageHeader,
  },
};
</script>

<style>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
  padding: 0;
  background-color: lightgray;
}

* {
  box-sizing: border-box;
}
</style>

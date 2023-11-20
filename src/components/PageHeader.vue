<template>
  <header class="page-header__nav-bar">
    <router-link to="/">
      <div class="page-header__container">
        <img src="../assets/logo.png" alt="azure leaf logo" />
        <h2>zureleaf</h2>
      </div>
    </router-link>
    <div class="page-header__btn-container">
      <NavButton href="https://github.com/zakschenck/azureleaf-js" />
      <NavButton
        :buttonText="'Donate'"
        :href="'#'"
        :buttonBgColor="'lightgray'"
      />
    </div>
  </header>
</template>

<script>
import NavButton from "/src/components/NavButton.vue";
export default {
  name: "PageHeader",
  components: {
    NavButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 80px;
  width: 100%;
  padding-left: 18%;
  padding-right: 18%;
  box-shadow: 2px 4px 20px rgb(119, 119, 119);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: white;
}

.page-header__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-header__btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

h2 {
  position: relative;
}

a {
  color: black;
}

h2::after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgb(91, 218, 59);
  width: 100%;
  content: "";
}
</style>

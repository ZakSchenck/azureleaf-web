<template>
  <header class="page-header__nav-bar">
    <router-link to="/">
      <div v-if="!initialShowLogo" class="page-header__container">
        <img src="../assets/logo.png" alt="azure leaf logo" />
        <h2>zureleaf</h2>
      </div>
    </router-link>
    <div v-if="initialShowBtns" class="page-header__btn-container">
      <NavButton href="https://github.com/zakschenck/azureleaf-js" />
      <NavButton :buttonText="'Donate'" :href="'#'" :buttonBgColor="'lightgray'" />
    </div>
    <div v-else class="page-header__hamburger-container" @click="handleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <button @click="handleMenu" v-if="initialShowLogo" id="x-button">X</button>
  </header>
</template>

<script>
import NavButton from "/src/components/NavButton.vue";
export default {
  name: "PageHeader",
  data() {
    return {
      screenWidth: window.innerWidth,
      menuData: false,
    }
  },
  components: {
    NavButton,
  },

  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  unmounted() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },

  computed: {
    initialShowLogo() {
      if (this.screenWidth < 821) return this.screenWidth > 820 || this.menuData;
      return false;
    },

    initialShowBtns() {
      if (this.screenWidth < 821) return this.screenWidth > 820 || this.menuData;
      return true;
    }

  },

  methods: {
    handleMenu() {
      this.menuData = !this.menuData
    },

    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 80px;
  width: 100%;
  padding-left: 13%;
  padding-right: 13%;
  box-shadow: 2px 4px 20px rgb(119, 119, 119);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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

#x-button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 33px;
  font-weight: bold;
}

.page-header__hamburger-container {
  width: 36px;
  height: 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar {
  width: 100%;
  height: 5px;
  background-color: black;
}

@media all and(max-width: 820px) {
  header {
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>

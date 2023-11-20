<template>
  <div class="nav-button__container">
    <a v-if="!isRouterLink" :href="buttonLink" :target="(buttonText === 'Github'|| buttonText === 'View on NPM') ? '_blank' : '_self'">
      <button
        class="nav-button__button"
        :style="{ backgroundColor: buttonBgColor }"
        :disabled="buttonText === 'Donate'"
      >
        {{ buttonText }}
      </button>
    </a>
    <router-link to="/documentation" v-else>
        <button
        class="nav-button__button"
        :style="{ backgroundColor: buttonBgColor }"
      >
        {{ buttonText }}
      </button>
    </router-link>
  </div>
</template>
  
  <script>
export default {
  name: "PageHeader",
  props: {
    buttonText: {
      type: String,
      default: "Github",
    },
    buttonLink: {
      type: String,
      default: "https://github.com/zakschenck/azureleaf-js",
    },
    buttonBgColor: {
      type: String,
      default: "#2d57e0",
    },
  },
  computed: {
    isRouterLink() {
        return this.buttonText === 'Documentation'
    }
  }
};
</script>
  
  <style scoped lang="scss">
button {
  color: white;
  font-size: 14px;
  padding: 12px 40px;
  border-radius: 4px;
  border: none;
  outline: none;
  position: relative;
}

a button:hover:not(:disabled) {
  cursor: pointer;
  background-color: black;
}
</style>
  
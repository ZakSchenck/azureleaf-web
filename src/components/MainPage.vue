<template>
  <div class="main-page__container">
    <img src="../assets/logo.png" alt="azure leaf logo"/>
    <h2>A compact, lightweight, utility Javascript data manipulation library.</h2>
    <div class="main-page__btn-container">
        <NavButton :buttonText="'Documentation'" :buttonLink="'#'" />
        <NavButton :buttonText="'View on NPM'" :buttonLink="'https://www.npmjs.com/package/azureleaf'" />
    </div>
  </div>
</template>
    
<script>
import NavButton from "./NavButton.vue"

export default {
  name: "MainPage",
  components: {
    NavButton
  }
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-page__container {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/websitebg.jpeg');
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-page__container img {
    width: 250px;
    height: 250px;
    margin-top: 180px;
    border-radius: 50%;
    border: 1px solid rgb(212, 212, 212);
    padding: 12px;
    position: relative;
}

.main-page__btn-container {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 28px;
    align-items: center;
    justify-content: center;
}

h2 {
    color: white;
    max-width: 460px;
    text-align: center;
    margin: 16px;
}
</style>
    
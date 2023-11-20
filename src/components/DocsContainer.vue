<template>
    <section>
        <DocsInstallation />
    </section>
</template>

<script>
import DocsInstallation from './DocsInstallation.vue'

export default {
    name: 'DocsContainer',
    components: {
        DocsInstallation
    }
}
</script>

<style scoped>
    section {
        height: 100vh;
        width: 70%;
        background-color: white;
        margin: 120px auto;
    }
</style>
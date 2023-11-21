<template>
    <section>
        <DocsDirectory />
        <div class="docs-container">
            <DocsInstallation />
            <h1>Azureleaf Code</h1>
            <hr />
            <DocsCode />
        </div>
    </section>
</template>

<script>
import DocsInstallation from './DocsInstallation.vue';
import DocsDirectory from './DocsDirectory.vue';
import DocsCode from './DocsCode.vue';

export default {
    name: 'DocsContainer',
    components: {
        DocsInstallation,
        DocsDirectory,
        DocsCode
    }
}
</script>

<style scoped>
section {
    width: 70%;
    background-color: white;
    margin: 120px auto 0 auto;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.docs-container {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    width: 80%;
}

@media all and (max-width: 960px) {
    section {
        width: 95%;
    }
}

@media all and (max-width: 870px) {
    section {
        display: flex;
        flex-direction: column;
    }

    .docs-container {
        width: 100%;
    }
}
</style>
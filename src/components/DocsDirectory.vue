<template>
    <article>
        <h2>>></h2>
        <hr />
        <DocsDirectoryCard />
    </article>
</template>

<script>
import DocsDirectoryCard from './DocsDirectoryCard.vue';

export default {
    name: "DocsDirectory",
    components: { DocsDirectoryCard }
}
</script>

<style scoped>
    article {
        height: 100vh;
        width: 20%;
        position: sticky;
        top: 90px;
        background-color: rgb(243, 243, 243);
        padding: 0 8px 8px 8px;
        margin-right: 12px;
    }

    @media all and (max-width: 870px) {
        article {
            height: 40px;
            width: 100%;
            top: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            overflow-y: hidden;
            overflow-x: scroll;
            background-color: black;
            color: white;
        }

        h2 {
            margin-left: 28px;
            margin-top: 30px;
        }
    }
</style>
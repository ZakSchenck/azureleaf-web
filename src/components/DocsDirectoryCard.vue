<template>
    <div class="docs-directory-card__card">
        <div v-for="(value, key) in dirData" :key="key">
            <div class="docs-directory-card__section-container" @click="toggleDir(key)">
                <h4>{{ key.charAt(0).toUpperCase() + key.slice(1) }}<span style="margin-left: 8px"
                        :class="{ 'expanded': currentDir[key] }">&#8650;</span>&nbsp;&nbsp;&nbsp;</h4>
                <div class="docs-directory-card__link" v-if="!currentDir[key]">
                    <div class="docs-directory-card__link-container" v-for="item in value" :key="item">
                        <a @click="scrollToDoc(item.name)" :href="'#' + item.name">{{ item.name }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dirData } from "../data/directory";
import { reactive } from 'vue';

export default {
    name: 'DocsDirectory',
    data() {
        return {
            dirData,
            currentDir: reactive({})
        }
    },

    /**
     * Toggles each category in the directory
     * @param {Object} key
     */
    methods: {
        toggleDir(key) {
            this.currentDir[key] = !this.currentDir[key];
            console.log(this.currentDir)
        },

        scrollToDoc(item) {
            const headerOffset = -120
            const targetElement = this.$refs[item];
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                    offset: { top: headerOffset }
                });

            }
        }
    }
}
</script>

<style scoped>
.docs-directory-card__card {
    height: 90%;
    width: 100%;
    position: sticky;
    top: 80px;
    background-color: rgb(243, 243, 243);
    padding: 0 8px 8px 8px;
}

h4:hover {
    cursor: pointer;
}

.expanded {
    transform: rotate(-90deg);
    transform-origin: center;
    display: inline-block;
}

.docs-directory-card__link-container {
    background-color: rgb(226, 226, 226);
    padding: 4px;
    margin-bottom: 4px;
    transition: .7s;
}

.docs-directory-card__link-container:hover {
    background-color: rgb(0, 0, 0);

    transition: .7s;
}

.docs-directory-card__link-container a {
    display: block;
    color: black;
    text-decoration: none;
}

.docs-directory-card__link-container a:hover {
    color: white;
}

h4 {
    width: max-content;;
}

@media all and (max-width: 870px) {
    .docs-directory-card__card {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: auto;
        margin-top: 19px;
        background-color: black;
        color: white;
    }

    .docs-directory-card__link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
    }

    .docs-directory-card__section-container {
        display: flex;
        flex-direction: row;
        margin: 0;
    }
}
</style>
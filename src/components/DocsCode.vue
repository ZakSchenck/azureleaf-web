<template>
    <div class="docs-code__container">
        <div v-for="(value, key) in dirData" :key="key">
            <h2>{{ key }}</h2>
            <div style="margin-bottom: 42px;" v-for="item in value" :key="item">
                <h4 :id="item.name">{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
                <pre style="overflow-x: auto; max-width: 100%; background-color: #e6e6e6;"><code language="javascript">{{ item.code }}</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
import { dirData } from "../data/directory";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github.css";
import javascript from "highlight.js/lib/languages/javascript";
export default {
    name: 'DocsCode',
    data() {
        return {
            dirData
        }
    },
    mounted() {
    hljs.registerLanguage("javascript", javascript);
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      const blocks = this.$el.querySelectorAll("pre code");
      blocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    },
  },
}
</script>

<style scoped>
</style>
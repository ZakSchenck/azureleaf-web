<template>
  <div class="docs-installation__container">
    <h2 id="docs-installation__project-installation">Project Installation</h2>
    <hr />
    <p>First, install it in your project directory</p>
    <pre><code class="language-bash">{{ installCommand }}</code></pre>
    <p>Next, make sure to import it in the files you are using</p>
    <pre><code class="language-javascript">{{ importCode }}</code></pre>
    <p>You can now freely use the <code>$azl</code> class:</p>
    <pre><code class="language-javascript">{{ generalCodeExample }}</code></pre>
  </div>
</template>
  
  <script>
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github.css";
import javascript from "highlight.js/lib/languages/javascript";
import bash from 'highlight.js/lib/languages/bash';
export default {
  name: "DocsInstallation",
  data() {
    return {
      installCommand: "$ npm install azureleaf\n\n$ yarn add azureleaf",
      importCode: "const { $azl } = require('azureleaf');",
      generalCodeExample: "$azl.shuffle([1, 2, 3, 4, 5])\n\n$azl.camelCase('Hello, world')\n\n$azl.objEquality({name: 'Joe': company: 'google'}, {name: 'Joe': company: 'google'})"
    };
  },
  mounted() {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("bash", bash);
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
};
</script>
  
  <style scoped>
.docs-installation__container {
  padding: 3%;
  width: 100%;
}

.docs-installation__container pre code {
  background-color: #d5d5d5 ; /* Adjust to the color you prefer */
}
</style>
  
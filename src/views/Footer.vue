<template>
  <footer class="ui inverted vertical footer segment">
    <div class="ui center aligned container">
      <div class="ui stackable inverted divided grid">
        <div class="seven wide column centered" id="footer-header">
          <h4 class="ui inverted header"></h4>
          <p>Copyright © {{year}} PC Games - Repack.  All rights reserved.</p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <div class="ui horizontal inverted small divided link list">
        <router-link class="item" to="#">GitHub</router-link>
        <router-link class="item" to="#">v{{version}}</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "@vue/composition-api";

export default {
  name: "Footer",
  setup() {
    const doc = reactive({
      author: require("../../package.json").author,
      version: require("../../package.json").version,
      year: new Date().getFullYear()
    });

    return {
      ...doc
    };
  }
};
</script>
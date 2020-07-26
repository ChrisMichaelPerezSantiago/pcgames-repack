<template>
  <div>
    <sui-container v-if="doc.isLoading" text-align="center" class="_container">
      <sui-dimmer active inverted>
        <sui-loader>Loading</sui-loader>
      </sui-dimmer>
      <br/><br/><br/>
    </sui-container>

    <sui-container v-else text-align="center" class="_container">
      <h2 is="sui-header" style="text-align: left;">Repack Games</h2>
      <sui-grid :columns="3" class="grid">
        <sui-grid-column v-for="(data, index) in doc.data.slice(1)" :key="index">
          <Games :game="data" />
        </sui-grid-column>
        <pagination :records="163" @paginate="pageChanged"></pagination>
      </sui-grid>
    </sui-container>
  </div>
</template>

<script>
import { reactive, onMounted } from "@vue/composition-api";
import { useStore, useState } from "@u3u/vue-hooks";
import Games from "../components/Games";

export default {
  name: "Home",
  components: {
    Games
  },
  setup() {
    const store = useStore();
    const state = reactive({
      ...useState(["doc"])
    });

    const pageChanged = page => {
      store.value.dispatch("GET_DATA", page);
    };

    onMounted(() => {
      store.value.dispatch("GET_DATA", 1);
    });

    return {
      ...state,
      pageChanged
    };
  }
};
</script>
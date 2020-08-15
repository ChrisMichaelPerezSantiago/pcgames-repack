<template>
  <div>
    <!--<sui-container v-if="doc.isLoading" text-align="center" class="_container">
      <sui-dimmer active inverted>
        <sui-loader>Loading</sui-loader>
      </sui-dimmer>
      <br/><br/><br/>
    </sui-container> -->

    <sui-container text-align="" class="_container">
      <h2 is="sui-header" style="text-align: left;">Repack Games</h2>
      <sui-grid :columns="4" class="grid">
        <sui-grid-column v-for="(data, index) in doc.data" :key="index">
          <Games :game="data" />
        </sui-grid-column>
        <!--<pagination :records="163" @paginate="pageChanged"></pagination>-->
      </sui-grid>
    </sui-container>
    
    <!-- DOM element used as trigger -->
    <div ref="intersectionTrigger" style="text-align: center;">
      Loading ...
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch} from "@vue/composition-api";
import { useStore, useState } from "@u3u/vue-hooks";
import { makeUseInfiniteScroll } from 'vue-use-infinite-scroll'
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

    const useInfiniteScroll = makeUseInfiniteScroll({});
    const intersectionTrigger = ref(null);
    const pageRef = useInfiniteScroll(intersectionTrigger);

    watch(
      pageRef,
      (page) => {
        console.log(page);
        store.value.dispatch("GET_DATA", page);
      },
        { 
          immediate: true 
        }
    );

    return {
      ...state,
      intersectionTrigger
    };
  }
};
</script>
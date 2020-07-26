<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './views/Footer.vue';
  import Header from './views/Header.vue'

  export default {
    components:{
      Header,
      Footer,
    }
  };
</script>

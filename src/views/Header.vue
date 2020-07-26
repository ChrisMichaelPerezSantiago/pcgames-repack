<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <router-link :to="{name: 'Home'}" class="header item">
        PC Games - Repack
      </router-link>
      <router-link :to="{name: 'Home'}" class="item">Home</router-link>
      <router-link :to="{name: 'About'}" class="item">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {
   
  }
};
</script>
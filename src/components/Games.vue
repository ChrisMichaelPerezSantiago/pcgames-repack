<template>
  <sui-card class="fluid">
    <sui-image :src="data.poster">
      <a is="sui-label" color="black" icon="game" slot="label" ribbon>PC</a>
    </sui-image>
    <sui-card-content>
      <sui-card-header>{{data.title}}</sui-card-header>
      <sui-card-meta>{{data.date}}</sui-card-meta>
      <sui-card-description>
        {{data.genres}} <br/>
        {{data.companies}} <br/>
        {{data.languages}} <br/>
        {{data.original_size}} <br/>
        {{data.repack_size}}
      </sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <a :href="data.torrent" download>
        <sui-button animated="vertical">
          <sui-button-content hidden>torrent</sui-button-content>
          <sui-button-content visible>
            <sui-icon name="download" />
          </sui-button-content>
        </sui-button>
      </a>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: "Games",
  props: {
    game: Object
  },
  setup(props) {
    const data = props.game;

    return {
      data
    };
  }
};
</script>
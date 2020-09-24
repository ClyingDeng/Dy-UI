<template>
  <div id="app">
    <dy-button type="info">默认按钮</dy-button>
    <dy-button>默认按钮</dy-button>
    <dy-button type="success">默认按钮</dy-button>
    <dy-button type="primary">默认按钮</dy-button>
    <dy-button type="warning">默认按钮</dy-button>
    <dy-icon icon="play"></dy-icon>
    <!-- 带icon的按钮 -->
    <dy-button type="warning" icon="play">默认按钮</dy-button>
    <dy-button type="warning" icon="play" icon-position="right"
      >后面图标按钮</dy-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

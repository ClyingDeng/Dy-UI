<!--
 * @author: Clying
-->
<template>
  <div id="app">
    <dy-button type="info">默认按钮</dy-button>
    <dy-button type="success">默认按钮</dy-button>
    <dy-button type="primary">默认按钮</dy-button>
    <dy-button type="warning">默认按钮</dy-button>
    <dy-icon></dy-icon>
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

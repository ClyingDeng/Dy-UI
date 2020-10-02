<template>
  <div id="app">
    <dy-button type="info">默认按钮</dy-button>
    <dy-button>默认按钮</dy-button>
    <dy-button type="success">默认按钮</dy-button>
    <dy-button type="primary">默认按钮</dy-button>
    <dy-button type="warning">默认按钮</dy-button>
    <dy-icon icon="dy-icon-play"></dy-icon>
    <!-- 带icon的按钮 -->
    <dy-button type="warning" icon="dy-icon-play">默认按钮</dy-button>
    <dy-button type="warning" icon="dy-icon-play" icon-position="right"
      >后面图标按钮</dy-button
    >
    <!-- 加载中 -->
     <dy-button type="danger" disabled>禁用</dy-button>
     <!-- 朴素 -->
      <dy-button type="primary" plain>朴素按钮</dy-button>
      <!-- 按钮组 -->
      <dy-button-group>
        <dy-button type="primary" icon="dy-icon-arrow-left" icon-position="left">上一页</dy-button>
        <dy-button type="primary" icon="dy-icon-arrow-right" icon-position="right">下一页</dy-button>
      </dy-button-group>

      <dy-row>
        <dy-col :span="24"><div class="grid-content bg-purple-dark"></div></dy-col>
      </dy-row>
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
    .bg-purple-dark {
    background: #99a9bf;
  }
}
</style>

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
      <dy-row>
        <dy-col :span="12"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="12"><div class="grid-content bg-purple-light"></div></dy-col>
      </dy-row>
      <dy-row>
        <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="8"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
      </dy-row>
      <dy-row>
        <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
      </dy-row>
      <dy-row>
        <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="4"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="4"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="4"><div class="grid-content bg-purple-light"></div></dy-col>
      </dy-row>
      <dy-row justify="center">
        <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
      </dy-row>
      <dy-row gutter="20">
        <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :span="6"><div class="grid-content bg-purple-light"></div></dy-col>
      </dy-row>
      <dy-row :gutter="10">
        <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">hh</div></dy-col>
        <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></dy-col>
        <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></dy-col>
        <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></dy-col>
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
    .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
}
</style>

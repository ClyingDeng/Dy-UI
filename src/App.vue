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
      <dy-button type="primary" icon="dy-icon-arrow-left" icon-position="left"
        >上一页</dy-button
      >
      <dy-button type="primary" icon="dy-icon-arrow-right" icon-position="right"
        >下一页</dy-button
      >
    </dy-button-group>

    <dy-row>
      <dy-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></dy-col>
    </dy-row>
    <dy-row>
      <dy-col :span="12"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
    </dy-row>
    <dy-row>
      <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="8"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
    </dy-row>
    <dy-row>
      <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="4"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
    </dy-row>
    <dy-row justify="center">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6" :offset="2"
        ><div class="grid-content bg-purple"></div
      ></dy-col>
      <dy-col :span="6"
        ><div class="gri -content bg-purple-light"></div
      ></dy-col>
    </dy-row>
    <dy-row gutter="20">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
    </dy-row>
    <dy-row class="row-bg" justify="start">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row class="row-bg" justify="center">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row class="row-bg" justify="end">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row class="row-bg" justify="space-between">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>
    <dy-row class="row-bg" justify="space-around">
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
      <dy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :span="6"><div class="grid-content bg-purple"></div></dy-col>
    </dy-row>

    <dy-row :gutter="10">
      <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple-light">hh</div></dy-col
      >
      <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple"></div
      ></dy-col>
      <dy-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></dy-col>
      <dy-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple"></div
      ></dy-col>
    </dy-row>

    <dy-container>
      <dy-header>header</dy-header>
      <dy-main>mian</dy-main>
      <dy-footer>footer</dy-footer>
    </dy-container>
    <dy-container>
      <dy-header>header</dy-header>
      <dy-container>
        <dy-aside width="600px">aside</dy-aside>
        <dy-main>mian</dy-main>
      </dy-container>
      <dy-footer>footer</dy-footer>
    </dy-container>

    <!-- <dy-input
      type="text"
      v-model="value"
      placeholder="请输入内容"
      name="username"
    ></dy-input>
    <dy-input
      type="password"
      v-model="value"
      placeholder="请输入内容"
      name="username"
    ></dy-input>
    <dy-input
      v-model="value"
      type="text"
      placeholder="请输入内容"
      name="username"
      :clearable="true"
    ></dy-input>
    <dy-input v-model="value" disabled placeholder="请输入内容" name="username"></dy-input> -->
    <dy-input
      type="password"
      v-model="value"
      showPassword="true"
      placeholder="请输入内容"
      name="username"
    ></dy-input>
    <dy-input
      placeholder="请选择日期"
      prefix-icon="dy-icon-order"
      v-model="value"
    ></dy-input>
    <dy-input
      v-model="value"
    >
    <i slot="suffix" class="dy-icon dy-icon-order"></i>
    </dy-input>
    <dy-input
      v-model="value"
    >
    <i slot="prefix" class="dy-icon dy-icon-order"></i>
    </dy-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private value: string = '';
}
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
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}

.dy-header,
.dy-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dy-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dy-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.dy-container {
  line-height: 260px;
}
</style>

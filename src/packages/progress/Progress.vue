<template>
  <div
    class="dy-progress"
    :class="['el-progress--line', status? 'is-' + status: '']"
  >
    <div class="dy-progress-bar">
      <div
        class="dy-progress-bar_outer"
        :style="{ height: strokeWidth + 'px' }"
      >
        <div class="dy-progress-bar_inner" :style="barStyle"></div>
      </div>
    </div>
    <div class="dy-progress_text">
      <template v-if="!status">{{content}}</template>
      <dy-icon v-else :icon="iconClass"></dy-icon>
    </div>
  </div>
</template>
<script src="./Progress.ts" scoped></script>
<style lang="scss" scoped src="./Progress.scss"></style>

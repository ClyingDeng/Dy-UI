<template>
  <div class="dy-popover">
    <div class="dy-popover-content" ref="content" v-if="visible" :style="{width: width + 'px'}" :class="`content-${placement}`" @click.stop>
      <h3 v-if="title">{{ title }}</h3>
      <slot>{{ content }}</slot>
      <div class="arrow"></div>
    </div>
    <slot name="reference"></slot>
  </div>
</template>
<style lang="scss" scoped src="./Popover.scss"></style>
<script lang="ts" scoped src="./Popover.ts"></script>

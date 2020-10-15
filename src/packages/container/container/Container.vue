<template>
  <section class="dy-container" :class="{ 'isVertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script lang="ts" src="./Container.ts"></script>
<style lang="scss" scoped src="./Container.scss"></style>

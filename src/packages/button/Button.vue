<template>
  <button class="dy-btn" :class="btnClass">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" src="./Button.ts"></script>
<style lang="scss" src="./Button.scss"></style>

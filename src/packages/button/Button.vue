<template>
  <button class="dy-btn" :class="btnClass" :disabled="disabled" :plain="plain" @click="onClickBtn">
    <dy-icon v-if="icon" :icon="icon" class="icon"></dy-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" src="./Button.ts" scoped></script>
<style lang="scss" src="./Button.scss" scoped></style>

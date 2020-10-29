<template>
  <div class="dy-upload">
    <div class="dy-upload-btn" @click="handleClick">
      <slot></slot>
    </div>
    <input class="input" type="file" :accept="accept" :multiple="multiple" @change="handleChange" :name="name" ref="input" />
    <div>
      <slot name="tip"></slot>
    </div>
    {{files}}
  </div>
</template>
<script lang="ts" src="./Upload.ts" scoped></script>
<style lang="scss" src="./Upload.scss" scoped></style>

<template>
  <div class="dy-date-picker">
    <dy-input suffix-icon="dy-icon-rili"></dy-input>
    <div class="dy-date-content">
      <div class="dy-date-picker-header">
        <dy-icon icon="dy-icon-doubleleft"></dy-icon>
        <dy-icon icon="dy-icon-arrow-left"></dy-icon>
        <span>xxxx年 xx月 xx日</span>
        <dy-icon icon="dy-icon-arrow-right"></dy-icon>
        <dy-icon icon="dy-icon-doubleright"></dy-icon>
      </div>
      <div class="dy-date-picker-content">
        <template>dates</template>
        <template>years</template>
        <template>months</template>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./DatePicker.scss"></style>
<script lang="ts" scoped src="./DatePicker.ts"></script>

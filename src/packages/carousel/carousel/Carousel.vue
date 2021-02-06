<template>
  <div
    class="dy-carousel"
    :style="{ height }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div class="viewport">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="item in len"
        :key="item"
        :class="{ active: item - 1 === currentSelected }"
        @click="select(item - 1)"
      >
        {{ item - 1 }}
      </span>
    </div>
    <div class="arrow-box">
      <dy-button
        icon="dy-icon-arrow-left"
        @click="select(currentSelected - 1, true)"
      ></dy-button>
      <dy-button
        icon="dy-icon-arrow-right"
        @click="select(currentSelected + 1, true)"
      ></dy-button>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./Carousel.scss"></style>
<script lang="ts" scoped src="./Carousel.ts"></script>

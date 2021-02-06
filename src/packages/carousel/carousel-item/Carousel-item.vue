<template>
  <!-- 
  v-enter-active  进入
  v-leave-active 离开激活
  v-enter 进入之前
  v-leave-to 移动到哪去
 -->
  <transition>
    <div class="dy-carousel-item" v-if="isShow" :class="{ reverse }">
      <slot></slot>
    </div>
  </transition>
</template>
<style lang="scss" scoped src="./Carousel-item.scss"></style>
<script lang="ts" scoped src="./Carousel-item.ts"></script>

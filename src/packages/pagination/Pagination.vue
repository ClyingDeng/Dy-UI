<template>
  <div class="dy-pagination" :class="{ 'is-background': background }">
    <dy-button
      type="text"
      icon="dy-icon-arrow-left"
      :disabled="currentPage === 1 || disabled"
      @click="select(currentPage - 1)"
    >
    </dy-button>
    <ul>
      <!-- <li v-for="item in currentPage">111</li> -->
      <li :class="{ active: currentPage === 1, disabled }" @click="select(1)">
        1
      </li>
      <li v-if="showPrevMore" :class="{ disabled }"><span>...</span></li>
      <li
        v-for="num in pagers"
        :class="{ active: currentPage === num, disabled }"
        @click="select(num)"
      >
        <span>{{ num }}</span>
      </li>
      <li v-if="showNextMore" :class="{ disabled }"><span>...</span></li>
      <li
        :class="{ active: currentPage === total, disabled }"
        @click="select(total)"
      >
        <span>{{ total }}</span>
      </li>
    </ul>
    <dy-button
      type="text"
      icon="dy-icon-arrow-right"
      :disabled="currentPage === total || disabled"
      @click="select(currentPage + 1)"
    >
    </dy-button>
  </div>
</template>
<style lang="scss" scoped src="./Pagination.scss"></style>
<script lang="ts" scoped src="./Pagination.ts"></script>

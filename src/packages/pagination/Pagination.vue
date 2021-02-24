<template>
  <div class="dy-pagination">
    <dy-button type="text" disabled icon="dy-icon-arrow-left"> </dy-button>
    <ul>
      <!-- <li v-for="item in currentPage">111</li> -->
      <li>1</li>
      <li v-if="showPreMore"><span>...</span></li>
      <li v-for="num in pagers">{{num}}</li>
      <li v-if="showNextMore"><span>...</span></li>
      <li>
        <span>{{ total }}</span>
      </li>
    </ul>
    <dy-button type="text" icon="dy-icon-arrow-right"> </dy-button>
  </div>
</template>
<style lang="scss" scoped src="./Pagination.scss"></style>
<script lang="ts" scoped src="./Pagination.ts"></script>

<template>
  <div class="dy-date-picker" v-clickOutSide="handleBlur">
    <dy-input
      suffix-icon="dy-icon-rili"
      @focus="handleFocus"
      :value="formateDate"
    ></dy-input>
    <div class="dy-date-content" v-if="isVisible">
      <div class="dy-date-picker-header">
        <dy-icon icon="dy-icon-doubleleft"></dy-icon>
        <dy-icon icon="dy-icon-arrow-left"></dy-icon>
        <span>{{ tempTime.year }}年 {{ tempTime.month + 1 }}月</span>
        <dy-icon icon="dy-icon-arrow-right"></dy-icon>
        <dy-icon icon="dy-icon-doubleright"></dy-icon>
      </div>
      <div class="dy-date-picker-content">
        <template v-if="mode === 'dates'">
          <div>
            <span class="cell" v-for="week in weeks" :key="week">{{week}}</span>
          </div>
        </template>
        <template v-if="mode === 'years'">years</template>
        <template v-if="mode === 'months'">months</template>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./DatePicker.scss"></style>
<script lang="ts" scoped src="./DatePicker.ts"></script>

<template>
  <div class="dy-date-picker" v-clickOutSide="handleBlur">
    <dy-input
      suffix-icon="dy-icon-rili"
      @focus="handleFocus"
      :value="formateDate"
    ></dy-input>
    <div class="dy-date-content" v-if="isVisible">
      <div class="dy-date-picker-header">
        <dy-icon icon="dy-icon-doubleleft" @click="changeYear(-1)"></dy-icon>
        <dy-icon icon="dy-icon-arrow-left" @click="changeMonth(-1)"></dy-icon>
        <span>{{ tempTime.year }}年 {{ tempTime.month + 1 }}月</span>
        <dy-icon icon="dy-icon-arrow-right" @click="changeMonth(1)"></dy-icon>
        <dy-icon icon="dy-icon-doubleright" @click="changeYear(1)"></dy-icon>
      </div>
      <div class="dy-date-picker-content">
        <template v-if="mode === 'dates'">
          <div>
            <span class="cell" v-for="week in weeks" :key="week">{{week}}</span>
          </div>
          <div v-for="i in 6" :key="`row_${i}`">
            <span class="cell cell-dates" v-for="j in 7" :key="`col_${j}`"
            @click="selectDate(getCurrentDate(i, j))"
            :class="{
              isNotCurrentMonth: !isCurrentMonth(getCurrentDate(i, j)),
              isToday: isToday(getCurrentDate(i, j)),
              isSelect: isSelect(getCurrentDate(i, j))
            }">
              <!--   -->
              {{getCurrentDate(i, j).getDate()}}
            </span>
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

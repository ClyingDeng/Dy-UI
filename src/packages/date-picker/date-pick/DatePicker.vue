<template>
  <div class="dy-date-picker" v-clickOutSide="handleBlur">
    <dy-input
      suffix-icon="dy-icon-rili"
      @focus="handleFocus"
      :value="formateDate"
      @change="handleChange"
    ></dy-input>
    <div class="dy-date-content" v-if="isVisible">
      <div class="dy-date-picker-content">
        <template v-if="mode === 'dates'">
           <div class="dy-date-picker-header">
             <dy-icon icon="dy-icon-doubleleft" @click="changeYear(-1)"></dy-icon>
             <dy-icon icon="dy-icon-arrow-left" @click="changeMonth(-1)"></dy-icon>
             <span> <b @click="mode = 'years'">{{ tempTime.year }}</b> 年 <b @click="mode = 'months'">{{ tempTime.month + 1 }}</b> 月</span>
             <dy-icon icon="dy-icon-arrow-right" @click="changeMonth(1)"></dy-icon>
             <dy-icon icon="dy-icon-doubleright" @click="changeYear(1)"></dy-icon>
           </div>
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
              {{getCurrentDate(i, j).getDate()}}
            </span>
          </div>
        </template>
        <template v-if="mode === 'years'">
           <div class="dy-date-picker-header">
            <dy-icon icon="dy-icon-doubleleft" @click="changeYear(-10)"></dy-icon>
            <span> <b>{{ startYear }}</b> 年 - <b>{{ startYear + 9 }}</b> 年</span>
            <dy-icon icon="dy-icon-doubleright" @click="changeYear(10)"></dy-icon>
          </div>
            <span class="cell cell-year"  v-for="y in 10" :key="y"
            :class="{
              isYear: isYear( startYear + y - 1),
            }"
             @click="yearToMonth(startYear + y - 1)"
            >
              {{ startYear + y - 1 }}
            </span>
        </template>
        <template v-if="mode === 'months'">
          <div class="dy-date-picker-header">
            <dy-icon icon="dy-icon-doubleleft" @click="changeYear(-10)"></dy-icon>
            <span> <b @click="mode = 'years'">{{this.tempTime.year}}</b> 年</span>
            <dy-icon icon="dy-icon-doubleright" @click="changeYear(10)"></dy-icon>
          </div>
          <span class="cell cell-year"  v-for="m in 12" :key="m"
             @click="monthToDate(m -1)"
            >
              {{ m }} 月
            </span>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./DatePicker.scss"></style>
<script lang="ts" scoped src="./DatePicker.ts"></script>

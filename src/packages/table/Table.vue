<template>
  <div class="dy-table" ref="wrapper">
    <div class="table-wrapper" :style="{ height }" ref="tableWrapper">
      <table ref="table">
        <thead>
          <tr>
            <th
              v-for="(column, index) in cloneColumns"
              :key="index"
              :style="{ width: column.width + 'px' }"
            >
              <div v-if="column.type === 'selection'">
                <input
                  type="checkbox"
                  :checked="checkAllStatus"
                  ref="checkAll"
                  @change="selectAll"
                />
              </div>
              <div v-else class="dy-table-cell">
                <span>{{ column.title }}</span>
                <span v-if="column.sortable" class="sortable">
                  <dy-icon
                    icon="dy-icon-up"
                    :class="{ active: isAsc(column) }"
                    @click="sort(column, isAsc(column) ? 'normal' : 'asc')"
                  ></dy-icon>
                  <dy-icon
                    icon="dy-icon-down"
                    :class="{ active: isDesc(column) }"
                    @click="sort(column, isDesc(column) ? 'normal' : 'desc')"
                  ></dy-icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in cloneData">
            <td v-for="column in cloneColumns">
              <div v-if="column.type === 'selection'">
                <input
                  type="checkbox"
                  @change="selectOne($event, row)"
                  :checked="isChecked(row)"
                />
              </div>
              <div v-else>
                <template v-if="column.slot">
                  <slot :name="column.slot" :row="row" :col="column"></slot>
                </template>
                <template v-else>{{ row[column.key] }}</template>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./Table.scss"></style>
<script scoped src="./Table.ts"></script>

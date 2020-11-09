<template>
  <div class="dy-upload">
    <div class="dy-upload-btn" @click="handleClick">
      <slot></slot>
    </div>
    <input
      class="input"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
      :name="name"
      ref="input"
    />
    <div class="dy-upload__tip">
      <slot name="tip"></slot>
    </div>
    <ul>
      <li
        v-for="file in files"
        :key="file.uid"
        :class="[
          'dy-upload-list__item',
          'is-' + file.status,
          focusing ? 'focusing' : ''
        ]"
        @focus="focusing === true"
      >
        <div class="list-item">
          <a class="dy-upload-list__item-name">
            <dy-icon icon="dy-icon-image"></dy-icon>
            {{ file.name }} {{ file.status }}</a
          >
          <div class="dy-upload-list__item-status-label">
            <i class="dy-icon dy-icon-close" @click="handleRemove(file)"></i>
            <i class="dy-icon dy-icon-check"></i>
          </div>
          <dy-progress
            v-if="file.status === 'uploading'"
            :percentage="file.percentage"
          ></dy-progress>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./Upload.ts" scoped></script>
<style lang="scss" src="./Upload.scss" scoped></style>

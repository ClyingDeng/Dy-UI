<template>
  <div class="dy-upload">
    <div class="dy-upload-btn" @click="handleClick">
      <slot></slot>
    </div>
    <input class="input" type="file" :accept="accept" :multiple="multiple" @change="handleChange" :name="name" ref="input" />
    <div>
      <slot name="tip"></slot>
    </div>
    <ul>
      <li v-for="file in files" :key="file.uid">
        <div class="list-item">
          <dy-icon icon="dy-icon-image"></dy-icon>
           <img :src="file.url" alt="">{{file.name}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./Upload.ts" scoped></script>
<style lang="scss" src="./Upload.scss" scoped></style>

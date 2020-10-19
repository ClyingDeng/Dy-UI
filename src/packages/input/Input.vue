<template>
  <div class="dy-input" :class="inputClass">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
    <dy-icon
    icon="dy-icon-close"
    v-if="clearable && value"
    @click="$emit('input', '')"
    >

    </dy-icon>
  </div>
</template>
<script lang="ts" src="./Input.ts"></script>
<style lang="scss" src="./Input.scss" scoped></style>

<template>
  <div class="dy-input" :class="inputClass">
    <dy-icon :icon="prefixIcon" v-if="prefixIcon"></dy-icon>
    <dy-icon :icon="suffixIcon" v-if="suffixIcon"></dy-icon>
    <input
      ref="input"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :showPassword="showPassword"
      @input="$emit('input', $event.target.value)"
    />
    <dy-icon
      icon="dy-icon-close"
      v-if="clearable && value"
      @click.native="$emit('input', '')"
      @mousedown.native.prevent
    >
    </dy-icon>
    <dy-icon
      :icon="showIcon"
      v-if="showPassword && value"
      @click.native="changeStatus"
    >
    </dy-icon>

    <span class="dy-input__suffix"v-if="$slots.suffix" >
        <slot name="suffix"></slot>
    </span>
    <span class="dy-input__prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
    </span>

  </div>
</template>
<script lang="ts" src="./Input.ts"></script>
<style lang="scss" src="./Input.scss" scoped></style>

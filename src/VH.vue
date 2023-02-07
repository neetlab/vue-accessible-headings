<script setup lang="ts">
import { computed, inject } from "vue";
import { INJECTION_KEYS } from "./constants";

const level = inject<number>(INJECTION_KEYS.HEADING_LEVEL, 1);
const tagName = computed(() => `h${level}`);
</script>

<template>
  <component :is="tagName">
    <slot />
  </component>
</template>

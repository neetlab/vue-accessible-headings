<script setup lang="ts">
import { inject, provide } from "vue";
import { INJECTION_KEYS } from "./constants";

const level = inject<number>(INJECTION_KEYS.HEADING_LEVEL, 1);
const nextLevel = Math.min(level + 1, 6);

provide<number>(INJECTION_KEYS.HEADING_LEVEL, nextLevel);
</script>

<template>
  <slot />
</template>

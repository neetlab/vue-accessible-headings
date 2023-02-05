<script setup lang="ts">
import Provider from "./Provider.vue";
</script>

<template>
  <Provider>
    <slot name="header" />
    <slot />
  </Provider>
</template>

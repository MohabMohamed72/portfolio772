<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
<template>
  <button class="btn-secondary">
    {{ props.label }}
  </button>
</template>
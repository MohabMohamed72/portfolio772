<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
<template>
    <button class="btn-primary">
        {{ label }}
    </button>
</template>
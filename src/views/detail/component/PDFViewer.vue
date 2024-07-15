<template>
    <PdfApp :src="src" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import  PdfApp  from 'vue3-pdf-app';
  
  const props = defineProps<{
    src: string;
  }>();
  
  const src = ref(props.src);
  </script>
  
  <style scoped>
  pdf-app {
    width: 100%;
    height: 100%;
  }
  </style>
  
<template>
    {{ $route.query.id }}
    {{ $route.query.name }}
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(() => route.params.id, (newId, oldId) => {
  // 对路由变化做出响应...
  
})
</script>
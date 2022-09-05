<script setup lang="ts">
  import {ref} from 'vue'
  const val = ref('')
</script>

<template>
  <main>
    <el-input v-model="val"></el-input>
    <el-button type="success">Success</el-button>
  </main>
</template>

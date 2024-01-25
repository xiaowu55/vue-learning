<template>
    <button @click="toggle">click</button>
    <Transition name="fade">
        <h1 v-if="showTitle">你好 Vue 3</h1>
    </Transition>
    <Count></Count>
</template>
  
<script setup>
import { ref } from 'vue'
import Count from '../components/Count.vue'
let showTitle = ref(true)
function toggle() {
    showTitle.value = !showTitle.value
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s linear;
    ;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
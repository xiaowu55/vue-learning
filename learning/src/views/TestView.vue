<script setup lang="ts">
import { onMounted, ref } from 'vue';

const count = ref(0)
const ok = ref(true)

function increment() {
    count.value++
    ok.value = !ok.value
}

onMounted(() => {
    console.log(`The initial count is ${count.value}`)
})
</script>




<template >
    <div>
        <button @click="increment">Count is :{{ count }}</button>
    </div>

    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
</template>
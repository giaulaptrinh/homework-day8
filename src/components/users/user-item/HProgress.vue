<script setup>
defineProps({
    value: { type: Number, default: 0 }
})
</script>

<template>
    <div>
        <div class="flex justify-between mb-1 text-sm text-gray-600">
            <span>Progress</span>
            <span>{{ value }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-blue-600 h-2 rounded-full" :style="{ width: value + '%' }"></div>
        </div>
    </div>
</template>

<template>
    <div class="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
        <div class="flex text-xs text-slate-500">
            <div class="mr-auto">{{ label }}</div>
            <div>{{ percentage }}%</div>
        </div>
        <div class="w-full bg-slate-200 rounded dark:bg-black/20 h-1 mt-2">
            <div class="h-full rounded text-xs text-white flex justify-center items-center bg-primary"
                :class="widthClass" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    percentage: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100
    },
    label: {
        type: String,
        default: 'Progress'
    }
})

const widthClass = computed(() => {
    if (props.percentage <= 25) return 'w-1/4'
    if (props.percentage <= 50) return 'w-1/2'
    if (props.percentage <= 75) return 'w-3/4'
    return 'w-full'
})
</script>
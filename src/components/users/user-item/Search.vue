<template>
    <div class="relative w-56 text-slate-500">
        <input v-model="modelValue" @input="$emit('update:modelValue', modelValue)" class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent 
             [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed 
             [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent 
             transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md 
             placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 
             focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent 
             dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 
             w-56 pr-10 !box" type="text" placeholder="Search..." />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
        </svg>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// nhận v-model từ parent
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue'])

// tạo biến cục bộ để binding input
const modelValue = ref(props.modelValue)

// đồng bộ khi props thay đổi
watch(() => props.modelValue, (val) => {
    modelValue.value = val
})
</script>

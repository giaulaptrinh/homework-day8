<template>
    <div :class="[
        'image-fit',
        sizeClasses,
        containerClass
    ]">
        <img :alt="alt" :src="src" :class="[
            'rounded-full',
            imageClass
        ]" />
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Avatar'
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => ['small', 'default', 'large'].includes(value)
    },
    containerClass: {
        type: String,
        default: ''
    },
    imageClass: {
        type: String,
        default: ''
    }
})

const sizeClasses = computed(() => {
    const sizes = {
        small: 'w-8 h-8',
        default: 'w-24 h-24 lg:w-12 lg:h-12 lg:mr-1',
        large: 'w-32 h-32'
    }
    return sizes[props.size]
})
</script>
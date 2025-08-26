<template>
    <component :is="tag" :href="href" :type="type" :disabled="disabled" :class="buttonClasses" @click="handleClick">
        <span v-if="icon && iconPosition === 'left'" :class="iconClasses">
            <component :is="icon" />
        </span>

        <slot />

        <span v-if="icon && iconPosition === 'right'" :class="iconClasses">
            <component :is="icon" />
        </span>
    </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'social'].includes(value)
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => ['small', 'default', 'large'].includes(value)
    },
    href: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    icon: {
        type: [String, Object],
        default: null
    },
    iconPosition: {
        type: String,
        default: 'left',
        validator: (value) => ['left', 'right'].includes(value)
    }
})

const emit = defineEmits(['click'])

const tag = computed(() => props.href ? 'a' : 'button')

const baseClasses = 'transition duration-200 border shadow-sm inline-flex items-center justify-center rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed'

const variantClasses = computed(() => {
    const variants = {
        primary: 'bg-primary border-primary text-white dark:border-primary',
        secondary: 'border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10',
        outline: 'border-slate-200 text-slate-600 dark:border-darkmode-400 dark:text-slate-300',
        ghost: 'border-transparent text-slate-600 dark:text-slate-300',
        social: 'border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in'
    }
    return variants[props.variant]
})

const sizeClasses = computed(() => {
    if (props.circle) {
        return 'w-8 h-8 ml-2'
    }

    const sizes = {
        small: 'px-2 py-1 text-sm',
        default: 'px-2 py-1',
        large: 'px-4 py-2'
    }
    return sizes[props.size]
})

const iconClasses = computed(() => {
    if (props.circle) {
        return 'flex items-center justify-center w-3 h-3 fill-current'
    }
    return 'w-4 h-4'
})

const buttonClasses = computed(() => {
    return [
        baseClasses,
        variantClasses.value,
        sizeClasses.value,
        props.circle ? 'rounded-full' : '',
        props.variant === 'primary' ? 'mr-2' : ''
    ].filter(Boolean).join(' ')
})

const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>
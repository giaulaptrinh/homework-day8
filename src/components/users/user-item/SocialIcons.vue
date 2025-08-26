<template>
    <div class="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
        <a v-for="social in socials" :key="social.name" :href="social.url"
            class="relative group cursor-pointer flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in">
            <!-- Tooltip -->
            <span
                class="absolute -top-8 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {{ social.name.charAt(0).toUpperCase() + social.name.slice(1) }}
            </span>

            <!-- Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`lucide lucide-${social.icon}-icon stroke-1.5 w-3 h-3 fill-current`">
                <template v-if="social.icon === 'facebook'">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </template>
                <template v-else-if="social.icon === 'twitter'">
                    <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </template>
                <template v-else-if="social.icon === 'linkedin'">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </template>
            </svg>
        </a>
    </div>
</template>
<script setup>
defineProps({
    socials: {
        type: Array,
        default: () => [
            { name: 'facebook', icon: 'facebook', url: '#' },
            { name: 'twitter', icon: 'twitter', url: '#' },
            { name: 'linkedin', icon: 'linkedin', url: '#' }
        ]
    }
})
</script>
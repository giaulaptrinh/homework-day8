<template>
    <header class="relative z-[51] flex h-[67px] items-center border-b border-slate-200">
        <!-- Breadcrumb -->
        <nav class="flex hidden mr-auto -intro-x sm:flex" aria-label="breadcrumb">
            <ol class="flex items-center text-primary dark:text-slate-300">
                <li>
                    <RouterLink to="/">Application</RouterLink>
                </li>
                <li class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px]
                 before:bg-chevron-black before:transform before:rotate-[-90deg] 
                 before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto 
                 before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                    <RouterLink to="/">Dashboard</RouterLink>
                </li>
            </ol>
        </nav>

        <!-- Search -->
        <div class="relative mr-3 intro-x sm:mr-6">
            <div class="relative hidden sm:block">
                <input v-model="search" type="text" placeholder="Search..." class="disabled:bg-slate-100 disabled:cursor-not-allowed 
                 dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent 
                 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed 
                 [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent 
                 text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary 
                 focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent 
                 dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 
                 border-transparent w-56 shadow-none rounded-full bg-slate-300/50 pr-8 
                 transition-[width] duration-300 ease-in-out focus:border-transparent 
                 focus:w-72 dark:bg-darkmode-400/70" />
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
                    width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </div>
            <!-- Mobile Search -->
            <RouterLink class="relative text-slate-600 sm:hidden" to="/">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-search-icon stroke-1.5 w-5 h-5 dark:text-slate-500" width="24" height="24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </RouterLink>
        </div>

        <!-- Notifications -->
        <div class="relative mr-auto intro-x sm:mr-6">
            <button class="cursor-pointer relative text-slate-600 outline-none block 
                    before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full 
                    before:absolute before:top-[-2px] before:right-0 before:bg-danger">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="lucide lucide-bell-icon stroke-1.5 w-5 h-5 dark:text-slate-500" width="24" height="24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
            </button>
        </div>

        <!-- Avatar -->
        <div class="relative">
            <div class="cursor-pointer block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
                <img alt="User Avatar" src="https://midone-vue.vercel.app/assets/profile-8-AyJHXIQy.jpg" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const search = ref('')
</script>

<template>
    <div class="min-h-screen bg-slate-100 dark:bg-darkmode-900 p-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="mt-10 text-lg font-medium intro-y">Users Layout</h2>
            <!-- Header Section -->
            <div class="grid grid-cols-12 gap-6 mt-5">
                <div class="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
                    <HButton variant="primary" class="mr-2 shadow-md">
                        Add New User
                    </HButton>

                    <div class="relative">
                        <HButton variant="outline" class="px-2 !box">
                            <span class="flex items-center justify-center w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-plus-icon stroke-1.5 w-4 h-4">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                            </span>
                        </HButton>
                    </div>

                    <div class="hidden mx-auto md:block text-slate-500">
                        Showing 1 to 10 of 150 entries
                    </div>

                    <!-- <div class="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
                        <div class="relative w-56 text-slate-500">
                            <input v-model="searchQuery"
                                class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box"
                                type="text" placeholder="Search..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-search-icon stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </div>
                    </div> -->
                    <Search v-model="searchQuery" />
                </div>

                <!-- User Cards -->
                <HCard v-for="user in filteredUsers" :key="user.id">
                    <template #header>
                        <HAvatar :src="user.avatar" :alt="user.name" size="default" />
                        <div class="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
                            <a href="#" class="font-medium">{{ user.name }}</a>
                            <div class="text-slate-500 text-xs mt-0.5">{{ user.role }}</div>
                        </div>
                        <SocialIcons :socials="user.socials" />
                    </template>

                    <template #body>
                        <ProgressBar :percentage="user.progress" />
                        <HButton variant="primary">Message</HButton>
                        <HButton variant="secondary">Profile</HButton>
                    </template>
                </HCard>

                <!-- Pagination -->
                <div class="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
                    <nav class="w-full sm:w-auto sm:mr-auto">
                        <ul class="flex w-full mr-0 sm:w-auto sm:mr-auto">
                            <li class="flex-1 sm:flex-initial">
                                <a
                                    class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chevrons-left-icon stroke-1.5 w-4 h-4">
                                        <path d="m11 17-5-5 5-5"></path>
                                        <path d="m18 17-5-5 5-5"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="flex-1 sm:flex-initial">
                                <a
                                    class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">1</a>
                            </li>
                            <li class="flex-1 sm:flex-initial">
                                <a
                                    class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box font-medium dark:bg-darkmode-400">2</a>
                            </li>
                            <li class="flex-1 sm:flex-initial">
                                <a
                                    class="transition duration-200 border py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">3</a>
                            </li>
                        </ul>
                    </nav>
                    <select
                        class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 w-20 mt-3 !box sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HCard from './user-item/HCard.vue'
import HButton from './user-item/HButton.vue'
import HAvatar from './user-item/HAvatar.vue'
import ProgressBar from './user-item/ProgressBar.vue'
import SocialIcons from './user-item/SocialIcons.vue'
import Search from './user-item/Search.vue'
const searchQuery = ref('')

const users = ref([
    {
        id: 1,
        name: 'Sylvester Stallone',
        role: 'Software Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-13-De9Tu6qz.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    },
    {
        id: 2,
        name: 'Bruce Willis',
        role: 'Software Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-9-CxE8y3dY.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    },
    {
        id: 3,
        name: 'Tom Cruise',
        role: 'Frontend Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-4-Dj5tECTo.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    },
    {
        id: 4,
        name: 'Will Smith',
        role: 'Backend Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-12-BcWdyPTT.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    },
    {
        id: 5,
        name: 'Keanu Reeves',
        role: 'DevOps Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-8-AyJHXIQy.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    },
    {
        id: 6,
        name: 'Hugh Jackman',
        role: 'Software Engineer',
        avatar: 'https://midone-vue.vercel.app/assets/profile-11-BNomuplL.jpg',
        progress: 20,
        socials: [
            { name: 'facebook', icon: 'facebook', url: 'https://facebook.com/tom' },
            { name: 'twitter', icon: 'twitter', url: 'https://twitter.com/tom' },
            { name: 'linkedin', icon: 'linkedin', url: 'https://linkedin.com/in/tom' }
        ]

    }
])

const filteredUsers = computed(() => {
    if (!searchQuery.value) return users.value
    return users.value.filter(user =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})
</script>
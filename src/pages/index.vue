<template>
    <div class="min-h-screen bg-slate-100 dark:bg-darkmode-900 p-6">
        <div class="max-w-7xl mx-auto">
            <h2 class="mt-10 text-lg font-medium intro-y">Users Layout</h2>
            <UserItem />
        </div>
    </div>
</template>

<script setup>
import UserItem from '@/components/users/user-item.vue'
</script>
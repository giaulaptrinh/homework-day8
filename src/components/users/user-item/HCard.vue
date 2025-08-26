<template>
    <div class="col-span-12 intro-y md:col-span-6">
        <div class="box">
            <!-- Header Slot -->
            <div
                class="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                <slot name="header" />
            </div>

            <!-- Body Slot -->
            <div class="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap">
                <slot name="body" />
            </div>

            <!-- Footer Slot -->
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup>
// No props needed - this is a pure container component with slots
</script>
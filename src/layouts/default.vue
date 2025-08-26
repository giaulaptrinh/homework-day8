<!-- <script setup lang="ts">
import Sidebar from '@/components/layouts/sidebar.vue';
import Header from '../components/layouts/header.vue';



</script>

<template>
    <div>
        <Header />
        <Sidebar />
        <RouterView />
        Footer
    </div>
</template> -->
<script setup lang="ts">
import Sidebar from '@/components/layouts/sidebar.vue';
import Header from '@/components/layouts/header.vue';
</script>

<template>
    <div class="app-layout">
        <Sidebar />
        <div class="main-content">
            <Header />
            <div class="content-wrapper">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-layout {
    display: flex;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    border-radius: 30px 0 0 0;
    background: #f1f5f9;
    min-height: 100vh;
}

@media (min-width: 1280px) {
    .main-content {
        margin-left: 230px;
    }
}

.content-wrapper {
    flex: 1;
    padding: 1.5rem;
}
</style>

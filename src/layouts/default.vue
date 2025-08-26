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
import UserItem from '@/components/users/user-item.vue';
</script>

<template>
    <div class="app-layout">
        <Sidebar />
        <div class="main-content">
            <Header />
            <div class="content-wrapper">
                <UserItem />
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-layout {
    display: flex;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
}

@media (min-width: 1280px) {
    .main-content {
        margin-left: 230px;
    }
}

.content-wrapper {
    flex: 1;
    padding: 2rem;
    background-color: #f1f5f9;
}
</style>

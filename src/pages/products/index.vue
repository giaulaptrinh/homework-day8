<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()

function fetchData() {
    return window.fetch(`http://localhost:3000/posts`).then(res => res.json())
    // Fetch data using the id
}
const data = ref(null)
onBeforeMount(async () => {
    data.value = await fetchData()
})
</script>

<template>
    <div>Product list</div>
    <ul>
        <li v-for="item in data" :key="item.id">
            Title : {{ item.title }}
            View : {{ item.views }}
            <!-- See details : <RouterLink :to="`/products/${item.id}`">{{ item.title }}</RouterLink> -->
            See details : <RouterLink :to="{ name: '/products/[id]', params: { id: item.id } }">here</RouterLink>
        </li>
    </ul>
</template>
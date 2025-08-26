<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()

function fetchData() {
    const id = route.params.id
    return window.fetch(`http://localhost:3000/posts/${id}`).then(res => res.json())
    // Fetch data using the id
}
const data = ref(null)
onBeforeMount(async () => {
    data.value = await fetchData()
})
</script>

<template>
    <div>
        ID : {{ data?.id }}
        Title :{{ data?.title }}
        View : {{ data?.views }}
    </div>
    Detail {{ route.params.id }}
</template>
<script setup lang="ts">
const items = ref<Array<any>>([]) // 서버에서 받은 전체 데이터 배열
const router = useRouter()

onMounted(async () => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get('/data')
        // 서버가 반환하는 데이터 배열 그대로 저장
        items.value = response.data
    } catch (error) {
        console.error('데이터 불러오기 오류:', error)
    }
})

// 클릭한 버튼의 id값을 이용하여 /view/:id 로 라우트
const goToView = (id: string) => {
    router.push(`/view/${id}`)
}
</script>

<template>
    <Container>
        <h1>ID 목록</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <button @click="goToView(item.id)">{{ item.id }}</button>
            </li>
        </ul>
    </Container>
</template>

<style lang="scss" scoped></style>

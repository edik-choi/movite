<script setup lang="ts">
const router = useRouter()
const user = ref<any>(null)

const loginWithNaver = async () => {
    try {
        const response = await fetch('http://localhost:5001/auth/naver') // 백엔드 요청
        const data = await response.json()
        window.location.href = data.url // 네이버 로그인 페이지로 이동
    } catch (error) {
        console.error('네이버 로그인 오류:', error)
    }
}

onMounted(() => {
    const storedUser = localStorage.getItem('naverUser')
    if (storedUser) {
        user.value = JSON.parse(storedUser)
    }
})
</script>

<template>
    <div>
        <Container>
            <h1>Login</h1>
            <div v-if="user">
                <p>안녕하세요, {{ user.name }}님!</p>
                <img :src="user.profile_image" alt="프로필 이미지" />
            </div>
            <button v-else @click="loginWithNaver">네이버 로그인</button>
        </Container>
    </div>
</template>

<style lang="scss" scoped></style>

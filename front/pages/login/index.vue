<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user, loadUser, logout } = useAuth()

onMounted(() => {
    loadUser()
})

const loginWithNaver = async () => {
    try {
        const response = await fetch('http://localhost:5001/auth/naver') // 백엔드 요청
        const data = await response.json()
        window.location.href = data.url // 네이버 로그인 페이지로 이동
    } catch (error) {
        console.error('네이버 로그인 오류:', error)
    }
}
</script>

<template>
    <div>
        <Container>
            <div v-if="user">
                <p>이미 로그인된 상태입니다. {{ user.name }}님 👋</p>
                <button @click="logout">로그아웃</button>
            </div>

            <div v-else>
                <button @click="loginWithNaver">네이버 로그인</button>
            </div>
        </Container>
    </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

definePageMeta({
    layout: false,
})

const router = useRouter()
const adminId = ref('')
const adminPassword = ref('')
const errorMessage = ref('')

const isAdminLoggedIn = ref(false)

onMounted(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
        isAdminLoggedIn.value = true
    }
})

const login = async () => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.post('/admin/login', {
            id: adminId.value,
            password: adminPassword.value,
        })

        // ✅ 로그인 성공 시 토큰 저장
        localStorage.setItem('adminToken', response.data.token)
        router.push('/admin') // 관리자 페이지로 이동
    } catch (error) {
        console.error('관리자 로그인 실패:', error)
        errorMessage.value = '아이디 또는 비밀번호가 잘못되었습니다.'
    }
}
</script>

<template>
    <Header isAdmin />
    <Container>
        <div v-if="!isAdminLoggedIn" class="login-container">
            <input v-model="adminId" placeholder="아이디 입력" />
            <input
                v-model="adminPassword"
                type="password"
                placeholder="비밀번호 입력"
            />
            <button @click="login">로그인</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        <div v-else>관리자 모드입니다</div>
    </Container>
</template>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.error {
    color: red;
}
</style>

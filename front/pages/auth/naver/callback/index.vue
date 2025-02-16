<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const userData = ref<any>(null)

const handleNaverCallback = () => {
    let user = route.query.user

    if (Array.isArray(user)) {
        user = user[0] // 첫 번째 요소 사용
    }

    if (!user || typeof user !== 'string') {
        console.error('네이버 로그인 실패: 사용자 정보 없음')
        router.push('/login')
        return
    }

    try {
        // ✅ 사용자 정보 저장 (localStorage)
        localStorage.setItem('naverUser', user)
        userData.value = JSON.parse(user)

        console.log('✅ 네이버 로그인 성공:', userData.value)

        // ✅ 로그인 후 홈으로 이동
        setTimeout(() => {
            router.push('/')
        }, 1000)
    } catch (error) {
        console.error('네이버 로그인 처리 중 오류:', error)
        router.push('/login')
    }
}

onMounted(() => {
    handleNaverCallback()
})
</script>

<template>
    <div>네이버 로그인 처리 중...</div>
</template>

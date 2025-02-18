<script setup lang="ts">
const router = useRouter()

const isStoredUserExist = ref(false)

onMounted(async () => {
    try {
        const storedUser = localStorage.getItem('naverUser')
        if (!storedUser) {
            alert('로그인이 필요합니다.')
            router.push('/login')
            return
        } else {
            isStoredUserExist.value = true
        }
    } catch (error) {
        console.error('로그인 체크 오류:', error)
    }
})
</script>

<template>
    <Container v-if="isStoredUserExist">
        <MyPageInvitationList />
    </Container>
</template>

<style lang="scss" scoped></style>

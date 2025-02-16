<script lang="ts" setup>
import { useAuth } from '@/composables/useAuth'

const { user, loadUser, logout } = useAuth()

const isStoredUserExist = ref(false)

onMounted(() => {
    loadUser()
})

onMounted(async () => {
    try {
        const storedUser = localStorage.getItem('naverUser')
        if (storedUser) {
            isStoredUserExist.value = true
        } else {
            isStoredUserExist.value = false
        }
    } catch (error) {
        console.error('로그인 체크 오류:', error)
    }
})
</script>
<template>
    <div class="header">
        <button>Home</button>
        <p v-if="isStoredUserExist">{{ user.name }}님 환영합니다</p>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    z-index: 100;
}
</style>

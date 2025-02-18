<script lang="ts" setup>
interface Props {
    isAdmin?: boolean
    userName?: string
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'logOut'): void
}>()

const router = useRouter()

const isAdminLoggedIn = ref(false)

onMounted(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
        isAdminLoggedIn.value = true
    }
})

const adminLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/')
}

const navigateToLogin = () => {
    router.push('/login')
}

const handleLogOut = () => {
    emits('logOut')
}
</script>

<template>
    <div class="header" :class="{ admin: isAdmin }">
        <button>Home</button>
        <div v-if="isAdmin && isAdminLoggedIn" class="header_right_wrap">
            <p>관리자 모드</p>
            <button @click="adminLogout">로그아웃</button>
        </div>
        <div v-if="!isAdmin" class="header_right_wrap">
            <p v-if="userName">{{ userName }}님 환영합니다</p>
            <button v-if="!userName" @click="navigateToLogin">로그인</button>
            <button v-else @click="handleLogOut">로그아웃</button>
        </div>
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
    .header_right_wrap {
        display: flex;
        gap: 10px;
    }
    &.admin {
        background: #000;
        color: #fff;
        button {
            color: #fff;
        }
    }
}
</style>

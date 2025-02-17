<script lang="ts" setup>
interface Props {
    userName?: string
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'logOut'): void
}>()

const router = useRouter()

const navigateToLogin = () => {
    router.push('/login')
}

const handleLogOut = () => {
    emits('logOut')
}
</script>

<template>
    <div class="header">
        <button>Home</button>
        <div class="header_right_wrap">
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
}
</style>

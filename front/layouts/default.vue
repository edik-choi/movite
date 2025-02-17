<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user, loadUser, logout } = useAuth()
const userName = ref('')

onMounted(() => {
    loadUser()
    if (user.value) {
        userName.value = user.value.name
    }
})

const handleLogOut = () => {
    logout()
}
</script>
<template>
    <div>
        <Header :userName="userName" @logOut="handleLogOut" />
        <slot />
    </div>
</template>

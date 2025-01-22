<script lang="ts" setup>
interface Props {
    imageUrls: string[]
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits(['deleteImage'])
const isLoading = ref(false)
const { $axios } = useNuxtApp()

const handleDeleteImage = async (index: number) => {
    if (isLoading.value) return
    
    isLoading.value = true
    try {
        const filename = props.imageUrls[index].split('/').pop()
        const response = await $axios.delete(`/upload/${filename}`)
        
        if (response.data.status === 'success') {
            emit('deleteImage', index)
        } else {
            throw new Error(response.data.message)
        }
    } catch (error: any) {
        console.error('이미지 삭제 중 오류 발생:', error)
        alert(error.response?.data?.message || '이미지 삭제에 실패했습니다.')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="galerie_wrap">
        <div v-for="(url, index) in imageUrls" :key="index" class="image-container">
            <img :src="url" alt="업로드된 이미지" />
            <button class="delete-btn" @click="handleDeleteImage(index)">
                ✕
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.galerie_wrap {
    display: flex;
    gap: 20px;
    width: 100%;
}

.image-container {
    position: relative;
    width: 100px;
    
    img {
        width: 100%;
        border-radius: 10px;
    }

    .delete-btn {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgba(255, 0, 0, 0.8);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        
        &:hover {
            background-color: rgba(255, 0, 0, 1);
        }
    }
}
</style>

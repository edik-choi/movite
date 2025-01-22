<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateImageUrls', value: string[]): void
}>()

const imageUrls = ref<string[]>([])
const config = useRuntimeConfig()
const baseURL = config.public.apiBase

const props = defineProps<{
    replaceMode?: boolean
}>()

const changeFile = async (event: Event) => {
    const { $axios } = useNuxtApp()
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        const file = target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        try {
            const response = await $axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const newImageUrl = `${baseURL}${response.data.imageUrl}`
            
            if (props.replaceMode) {
                imageUrls.value = [newImageUrl]
            } else {
                imageUrls.value.push(newImageUrl)
            }
            
            emits('updateImageUrls', imageUrls.value)
        } catch (error) {
            console.error('이미지 업로드 중 오류 발생:', error)
        }
    }
}
</script>

<template>
    <div class="file_uploader_wrap">
        <input type="file" @change="changeFile" accept="image/*" />
    </div>
</template>

<style lang="scss" scoped></style>

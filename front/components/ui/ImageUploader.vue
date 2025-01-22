<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateImageUrls', value: string[]): void
}>()

const imageUrls = ref<string[]>([])
const config = useRuntimeConfig()
const baseURL = config.public.apiBase

const props = defineProps<{
    id: string
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
            
            if (props.replaceMode && imageUrls.value.length > 0) {
                const oldImagePath = imageUrls.value[0].split('/').pop()
                
                try {
                    await $axios.delete(`/upload/${oldImagePath}`)
                } catch (error) {
                    console.error('기존 이미지 삭제 중 오류 발생:', error)
                }
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
        <input :id="id" type="file" @change="changeFile" accept="image/*" />
        <label :for="id">사진 등록</label>
    </div>
</template>

<style lang="scss" scoped>
.file_uploader_wrap {
    input {
        display: none;
    }
    label {
        height: 40px;
        padding: 10px 16px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 8px;
        color: #000;
        box-sizing: border-box;
        cursor: pointer;
    }
}
</style>

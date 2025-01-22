<script lang="ts" setup>
const imageUrls = ref<string[]>([]) 
const updateImageUrls = (_value: string[]) => {
    imageUrls.value = _value
}

const deleteImage = (index: number) => {
    imageUrls.value.splice(index, 1)
}
</script>

<template>
    <InputForm title="갤러리">
        <InputFormItem>
            <ImageUploader id="galerieImageUploader" @updateImageUrls="updateImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="imageUrls.length > 0">
            <ImageGalerie :imageUrls="imageUrls" @deleteImage="deleteImage" />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped>
</style>

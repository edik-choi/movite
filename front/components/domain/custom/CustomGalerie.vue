<script lang="ts" setup>
const imageUrls = ref<string[]>([]) 
const updateImageUrls = (_value: string[]) => {
    imageUrls.value = _value
}
</script>

<template>
    <InputForm title="갤러리">
        <InputFormItem>
            <ImageUploader @updateImageUrls="updateImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="imageUrls.length > 0">
            <ImageGalerie :imageUrls="imageUrls" />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped>
</style>

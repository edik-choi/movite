<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateGalerieImageUrls', value: string[]): void
}>()

const galerieImageUrls = ref<string[]>([]) 
const updateGalerieImageUrls = (_value: string[]) => {
    galerieImageUrls.value = _value
    emits('updateGalerieImageUrls', galerieImageUrls.value)
}

const deleteGalerieImage = (index: number) => {
    galerieImageUrls.value.splice(index, 1)
}
</script>

<template>
    <InputForm title="갤러리">
        <InputFormItem>
            <ImageUploader id="galerieImageUploader" @updateImageUrls="updateGalerieImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="galerieImageUrls.length > 0">
            <ImageGalerie :imageUrls="galerieImageUrls" @deleteImage="deleteGalerieImage" />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped>
</style>

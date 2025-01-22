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
            <div class="galerie_wrap">
                <img v-for="(url, index) in imageUrls" :key="index" :src="url" alt="업로드된 이미지" />
            </div>
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped>
.galerie_wrap {
    display: flex;
    gap: 20px;
    width: 100%;
    img {
        width: 100px;
        border-radius: 10px;
    }
}
</style>

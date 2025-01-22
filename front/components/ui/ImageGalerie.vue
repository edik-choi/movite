<script lang="ts" setup>
interface Props {
    imageUrls: string[]
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="galerie_wrap">
        <img v-for="(url, index) in imageUrls" :key="index" :src="url" alt="업로드된 이미지" />
    </div>
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

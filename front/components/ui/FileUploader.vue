<script lang="ts" setup>
const imageUrl = ref<string | null>(null)

const changeFile = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        const file = target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            imageUrl.value = reader.result as string
        }

        reader.readAsDataURL(file)
    }
}
</script>

<template>
    <div class="file_uploader_wrap">
        <input type="file" @change="changeFile" accept="image/*" />
        <div v-if="imageUrl">
            <img :src="imageUrl" alt="Preview" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

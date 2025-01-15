<script lang="ts" setup>
interface Props {
    uploadUrl: string
}

const props = withDefaults(defineProps<Props>(), {})

const selectedFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
        selectedFile.value = input.files[0]
        const reader = new FileReader()

        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string | null
        }

        reader.readAsDataURL(selectedFile.value)
    }
}

const submitFile = async () => {
    if (!selectedFile.value) {
        alert('Please select a file first!')
        return
    }

    const formData = new FormData()
    formData.append('file', selectedFile.value)

    try {
        const response = await fetch(props.uploadUrl, {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
        console.log('Upload successful:', data)
    } catch (error) {
        console.error('Error uploading file:', error)
    }
}
</script>

<template>
    <div class="file_uploader_wrap">
        <input type="file" @change="handleFileUpload" />
        <button @click="submitFile">Upload</button>

        <div v-if="imagePreview">
            <h3>Preview:</h3>
            <img :src="imagePreview" alt="Image Preview" width="200" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

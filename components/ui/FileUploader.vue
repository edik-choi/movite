<script lang="ts" setup>
import axios from 'axios'

const file = ref<File | null>(null)

function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement
    file.value = target.files?.[0] || null
}

async function uploadFile() {
    if (!file.value) {
        alert('Please select a file.')
        return
    }

    const formData = new FormData()
    formData.append('file', file.value)

    try {
        const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log('File uploaded successfully:', response.data)
    } catch (error) {
        console.error('Error uploading file:', error)
    }
}
</script>

<template>
    <div class="file_uploader_wrap">
        <input type="file" @change="onFileChange" />
        <button @click="uploadFile">Upload</button>
    </div>
</template>

<style lang="scss" scoped></style>

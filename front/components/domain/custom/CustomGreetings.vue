<script lang="ts" setup>
interface Props {
    greetingsTitle: string
    greetingsContent: string
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'updateGreetingsTitle', value: string): void
    (e: 'updateGreetingsText', value: string): void
    (e: 'updateGreetingsImageUrls', value: string[]): void
}>()

const greetingsTitle = ref('')
const greetingsTitlePlaceholder = ref('제목을 입력해 주세요')
const updateGreetingsTitle = (_value: string) => {
    greetingsTitle.value = _value
    emits('updateGreetingsTitle', greetingsTitle.value)
}

const greetingsContent = ref('')
const greetingsContentplaceholder = ref('내용을 입력해 주세요')
const updateGreetingsText = (_value: string) => {
    greetingsContent.value = _value
    emits('updateGreetingsText', greetingsContent.value)
}

const imageUrls = ref<string[]>([]) 
const updateImageUrls = (_value: string[]) => {
    imageUrls.value = _value
    emits('updateGreetingsImageUrls', imageUrls.value)
}

const deleteImage = (index: number) => {
    imageUrls.value.splice(index, 1)
    emits('updateGreetingsImageUrls', imageUrls.value)
}
</script>

<template>
    <InputForm title="제목">
        <InputFormItem>
            <Text
                full
                :initValue="greetingsTitle"
                :placeholder="greetingsTitlePlaceholder"
                @input="updateGreetingsTitle"
            />
        </InputFormItem>
    </InputForm>
    <InputForm required title="내용">
        <InputFormItem>
            <TextArea
                :initValue="greetingsContent"
                :placeholder="greetingsContentplaceholder"
                @input="updateGreetingsText"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="사진">
        <InputFormItem>
            <ImageUploader id="greetingsImageUploader" replaceMode @updateImageUrls="updateImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="imageUrls.length > 0">
            <ImageGalerie :imageUrls="imageUrls" @deleteImage="deleteImage" />  
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

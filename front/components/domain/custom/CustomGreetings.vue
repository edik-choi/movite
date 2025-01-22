<script lang="ts" setup>
interface Props {
    greetingsTitle: string
    greetingsContent: string
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'updateGreetingsTitle', value: string): void
    (e: 'updateGreetingsText', value: string): void
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
            <ImageUploader replaceMode @updateImageUrls="updateImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="imageUrls.length > 0">
            <ImageGalerie :imageUrls="imageUrls" />  
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

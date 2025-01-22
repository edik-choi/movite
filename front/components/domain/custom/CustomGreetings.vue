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

const greetingsImageUrls = ref<string[]>([]) 
const updateGreetingsImageUrls = (_value: string[]) => {
    greetingsImageUrls.value = _value
    emits('updateGreetingsImageUrls', greetingsImageUrls.value)
}

const deleteGreetingsImage = (index: number) => {
    greetingsImageUrls.value.splice(index, 1)
    emits('updateGreetingsImageUrls', greetingsImageUrls.value)
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
            <ImageUploader id="greetingsImageUploader" replaceMode @updateImageUrls="updateGreetingsImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="greetingsImageUrls.length > 0">
            <ImageGalerie :imageUrls="greetingsImageUrls" @deleteImage="deleteGreetingsImage" />  
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

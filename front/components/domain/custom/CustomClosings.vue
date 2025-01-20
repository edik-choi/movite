<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateClosingsContent', value: string): void
}>()

const closingsContent = ref('')
const closingsContentPlaceholder = '내용을 입력해 주세요'
const updateClosingsContent = (_value: string) => {
    closingsContent.value = _value
    emits('updateClosingsContent', closingsContent.value)
}
</script>

<template>
    <InputForm title="내용">
        <InputFormItem>
            <TextArea
                :initValue="closingsContent"
                :placeholder="closingsContentPlaceholder"
                @input="updateClosingsContent"
            />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

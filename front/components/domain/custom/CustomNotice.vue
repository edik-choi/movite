<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateNoticeTitle', value: string): void
    (e: 'updateNoticeContent', value: string): void
}>()

const noticeTitle = ref('')
const noticeTitlePlaceholder = '제목을 입력해 주세요'
const updateNoticeTitle = (_value: string) => {
    noticeTitle.value = _value
    emits('updateNoticeTitle', noticeTitle.value)
}

const noticeContent = ref('')
const noticeContentPlaceholder = '내용을 입력해 주세요'
const updateNoticeContent = (_value: string) => {
    noticeContent.value = _value
    emits('updateNoticeContent', noticeContent.value)
}
</script>

<template>
    <InputForm title="내용">
        <InputFormItem>
            <Text full :initValue="noticeTitle" :placeholder="noticeTitlePlaceholder" @input="updateNoticeTitle" />
        </InputFormItem>
        <InputFormItem>
            <TextArea :initValue="noticeContent" :placeholder="noticeContentPlaceholder" @input="updateNoticeContent" />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

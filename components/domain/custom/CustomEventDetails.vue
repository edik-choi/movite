<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'selectedDate', date: Date): void
    (e: 'selectedAddress', value: string): void
    (e: 'detailedAddress', value: string): void
}>()

const selectedDate = ref(new Date())

const handleSelectedDate = (date: Date) => {
    selectedDate.value = date
    emits('selectedDate', selectedDate.value)
}

const selectedAddress = ref('')
const handleSelectedAddress = (_value: string) => {
    selectedAddress.value = _value
    emits('selectedAddress', selectedAddress.value)
}

const detailedAddress = ref('')
const handleUpdateDetailedAddress = (_value: string) => {
    detailedAddress.value = _value
    emits('detailedAddress', detailedAddress.value)
}
</script>

<template>
    <InputForm required title="날짜 및 시간">
        <InputFormItem>
            <DatePicker @selectedDate="handleSelectedDate" />
        </InputFormItem>
    </InputForm>
    <InputForm required title="장소">
        <InputFormItem>
            <Address @selectedAddress="handleSelectedAddress" @detailedAddress="handleUpdateDetailedAddress" />
        </InputFormItem>
    </InputForm>
    <InputForm title="지도 표기"></InputForm>
    <InputForm title="네비게이션 공유 표기"></InputForm>
</template>

<style lang="scss" scoped></style>

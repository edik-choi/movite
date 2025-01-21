<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emits = defineEmits<{
    (e: 'selectDate', date: Date): void
}>()

const getDate = () => {
    const now = new Date()
    const minutes = now.getMinutes()
    const adjustedMinutes = minutes < 30 ? 0 : 30

    now.setMinutes(adjustedMinutes)
    now.setSeconds(0)
    now.setMilliseconds(0)

    return now
}

const date = ref(getDate())

const selectDate = (_date: Date) => {
    date.value = _date
    emits('selectDate', date.value)
}

const disablePastDates = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
}

const timePickerOptions = {
    start: '00:00',
    end: '23:30',
    step: 30,
    format: 'HH:mm',
}

const format = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes === 0 ? '' : minutes + '분'}`
}

onMounted(() => {
    emits('selectDate', date.value)
})
</script>

<template>
    <VueDatePicker
        v-model="date"
        locale="ko"
        cancelText="취소"
        selectText="확인"
        :format="format"
        :timePickerInline="true"
        :timePickerOptions="timePickerOptions"
        :minutesIncrement="30"
        :enableTimePicker="true"
        :disabledDates="disablePastDates"
        :clearable="false"
        @update:modelValue="selectDate"
    />
</template>

<style lang="scss" scoped></style>

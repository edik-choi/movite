<script lang="ts" setup>
import { VueDaumPostcode } from 'vue-daum-postcode'
import type { VueDaumPostcodeCompleteResult } from 'vue-daum-postcode'

const emits = defineEmits<{
    (e: 'selectedAddress', value: string): void
    (e: 'detailedAddress', value: string): void
}>()

const loadingText = ref('로딩 중 입니다')

const selectedAddress = ref('')
const selectedAddressPlaceholder = ref('이 곳을 클릭해 주세요')

const detailedAddress = ref('')
const detailedAddressPlaceholder = ref('상세 주소를 입력해 주세요')

const isAddressModalOpen = ref(false)
const handleShow = () => {
    isAddressModalOpen.value = true
}
const handleClose = () => {
    isAddressModalOpen.value = false
}

const onComplete = (newResult: VueDaumPostcodeCompleteResult) => {
    selectedAddress.value = newResult.address
    emits('selectedAddress', selectedAddress.value)
    isAddressModalOpen.value = false
}

const updateDetailedAddress = (_value: string) => {
    detailedAddress.value = _value
    emits('detailedAddress', _value)
}
</script>

<template>
    <button @click="handleShow">
        <Text readOnly clickable :initValue="selectedAddress" :placeholder="selectedAddressPlaceholder" />
    </button>
    <Text :initValue="detailedAddress" :placeholder="detailedAddressPlaceholder" @input="updateDetailedAddress" />
    <Modal v-if="isAddressModalOpen" @close="handleClose">
        <VueDaumPostcode @complete="onComplete">
            <template #loading>{{ loadingText }}</template>
        </VueDaumPostcode>
    </Modal>
</template>

<style lang="scss" scoped>
button {
    cursor: pointer;
}
</style>

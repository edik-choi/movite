<script lang="ts" setup>
import { VueDaumPostcode } from 'vue-daum-postcode'
import type { VueDaumPostcodeCompleteResult } from 'vue-daum-postcode'

const emits = defineEmits<{
    (e: 'selectAddress', value: string): void
    (e: 'updateDetailAddress', value: string): void
}>()

const loadingText = ref('로딩 중 입니다')

const address = ref('')
const addressPlaceholder = ref('이 곳을 클릭해 주세요')

const detailAddress = ref('')
const detailAddressPlaceholder = ref('상세 주소를 입력해 주세요')

const isAddressModalOpen = ref(false)
const showModal = () => {
    isAddressModalOpen.value = true
}
const closeModal = () => {
    isAddressModalOpen.value = false
}

const onComplete = (newResult: VueDaumPostcodeCompleteResult) => {
    address.value = newResult.address
    emits('selectAddress', address.value)
    isAddressModalOpen.value = false
}

const updateDetailAddress = (_value: string) => {
    detailAddress.value = _value
    emits('updateDetailAddress', _value)
}
</script>

<template>
    <button @click="showModal">
        <Text readOnly clickable :initValue="address" :placeholder="addressPlaceholder" />
    </button>
    <Text :initValue="detailAddress" :placeholder="detailAddressPlaceholder" @input="updateDetailAddress" />
    <Modal v-if="isAddressModalOpen" @close="closeModal">
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

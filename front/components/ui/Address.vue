<script lang="ts" setup>
import { VueDaumPostcode } from 'vue-daum-postcode'
import type { VueDaumPostcodeCompleteResult } from 'vue-daum-postcode'

const emits = defineEmits<{
    (e: 'selectAddress', value: string): void
    (e: 'updateDetailAddress', value: string): void
    (e: 'updateGeocode', geocodeX: number, geocodeY: number): void
}>()

const loadingText = ref('로딩 중 입니다')

const address = ref('')
const addressPlaceholder = ref('이 곳을 클릭해 주세요')

const detailAddress = ref('')
const detailAddressPlaceholder = ref('상세 주소를 입력해 주세요')

const isAddressModalVisible = ref(false)
const openAddressModal = () => {
    isAddressModalVisible.value = true
}
const closeAddressModal = () => {
    isAddressModalVisible.value = false
}

const onComplete = (newResult: VueDaumPostcodeCompleteResult) => {
    address.value = newResult.address
    emits('selectAddress', address.value)
    updateGeocode(address.value)
    isAddressModalVisible.value = false
}

const updateDetailAddress = (_value: string) => {
    detailAddress.value = _value
    emits('updateDetailAddress', _value)
}

const geocodeX = ref(37.5666805)
const geocodeY = ref(126.9784147)

const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    return new Promise((resolve, reject) => {
        const geocoder = window.naver.maps.Service
        geocoder.geocode(
            { query: address },
            (status: naver.maps.Service.Status, response: naver.maps.Service.GeocodeResponse) => {
                if (status === naver.maps.Service.Status.OK && response.v2.addresses.length > 0) {
                    const result = response.v2.addresses[0]
                    resolve({ lat: parseFloat(result.y), lng: parseFloat(result.x) })
                } else {
                    reject(`Geocoding failed with status: ${status}`)
                }
            }
        )
    })
}

const updateGeocode = async (address: string) => {
    try {
        const position = await geocodeAddress(address)
        if (position) {
            geocodeX.value = position.lat
            geocodeY.value = position.lng
            emits('updateGeocode', geocodeX.value, geocodeY.value)
        }
    } catch (error) {
        console.error('지도 좌표 업데이트 중 오류 발생:', error)
    }
}
</script>

<template>
    <button @click="openAddressModal">
        <Text readOnly clickable :initValue="address" :placeholder="addressPlaceholder" />
    </button>
    <Text :initValue="detailAddress" :placeholder="detailAddressPlaceholder" @input="updateDetailAddress" />
    <Modal v-if="isAddressModalVisible" @close="closeAddressModal">
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

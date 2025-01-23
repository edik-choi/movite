<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'selectDate', date: Date): void
    (e: 'selectAddress', value: string): void
    (e: 'updateDetailAddress', value: string): void
    (e: 'updateDetailDirections', value: string): void
    (e: 'updateDirectionsImageUrls', value: string[]): void
    (e: 'updateMapVisibility', value: boolean): void
    (e: 'updateGeocode', geocodeX: number, geocodeY: number): void
}>()

const date = ref(new Date())

const selectDate = (_date: Date) => {
    date.value = _date
    emits('selectDate', date.value)
}

const address = ref('')
const selectAddress = (_value: string) => {
    address.value = _value
    emits('selectAddress', address.value)
}

const detailAddress = ref('')
const updateDetailAddress = (_value: string) => {
    detailAddress.value = _value
    emits('updateDetailAddress', detailAddress.value)
}

const detailDirections = ref('')
const detailDirectionsPlaceholder = ref('오시는 길을 입력해 주세요')
const updateDetailDirections = (_value: string) => {
    detailDirections.value = _value
    emits('updateDetailDirections', detailDirections.value)
}

const directionsImageUrls = ref<string[]>([])
const updateDirectionsImageUrls = (_value: string[]) => {
    directionsImageUrls.value = _value
    emits('updateDirectionsImageUrls', directionsImageUrls.value)
}

const deleteDirectionsImage = (index: number) => {
    directionsImageUrls.value.splice(index, 1)
}

const isMapVisible = ref(false)
const updateMapVisibility = (_value: boolean) => {
    isMapVisible.value = _value
    emits('updateMapVisibility', isMapVisible.value)
}

const geocodeX = ref(37.5666805)
const geocodeY = ref(126.9784147)
const updateGeocode = (_geocodeX: number, _geocodeY: number) => {
    geocodeX.value = _geocodeX
    geocodeY.value = _geocodeY
    emits('updateGeocode', geocodeX.value, geocodeY.value)
}
</script>

<template>
    <InputForm required title="날짜 및 시간">
        <InputFormItem>
            <DatePicker @selectDate="selectDate" />
        </InputFormItem>
    </InputForm>
    <InputForm required title="장소">
        <InputFormItem>
            <Address
                @selectAddress="selectAddress"
                @updateDetailAddress="updateDetailAddress"
                @updateGeocode="updateGeocode"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="오시는 길">
        <InputFormItem>
            <TextArea
                :initValue="detailDirections"
                :placeholder="detailDirectionsPlaceholder"
                @input="updateDetailDirections"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="약도">
        <InputFormItem>
            <ImageUploader replaceMode id="directionsImageUploader" @updateImageUrls="updateDirectionsImageUrls" />
        </InputFormItem>
        <InputFormItem v-if="directionsImageUrls.length > 0">
            <ImageGalerie :imageUrls="directionsImageUrls" @deleteImage="deleteDirectionsImage" />
        </InputFormItem>
    </InputForm>
    <InputForm title="지도 표기">
        <InputFormItem>
            <CheckBox id="MAP_VISIBILITY" label="지도 표기" @input="updateMapVisibility" />
        </InputFormItem>
    </InputForm>
    <InputForm title="네비게이션 공유 표기"></InputForm>
</template>

<style lang="scss" scoped></style>

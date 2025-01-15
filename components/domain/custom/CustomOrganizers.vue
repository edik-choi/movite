<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateMaleName', value: string): void
    (e: 'updateMaleRelation', value: string): void
    (e: 'selectMaleFatherLate', value: boolean): void
    (e: 'updateMaleFatherName', value: string): void
    (e: 'selectMaleMotherLate', value: boolean): void
    (e: 'updateMaleMotherName', value: string): void
    (e: 'updateFemaleName', value: string): void
    (e: 'updateFemaleRelation', value: string): void
    (e: 'selectFemaleFatherLate', value: boolean): void
    (e: 'updateFemaleFatherName', value: string): void
    (e: 'selectFemaleMotherLate', value: boolean): void
    (e: 'updateFemaleMotherName', value: string): void
    (e: 'selectShowFemaleFirst', value: boolean): void
    (e: 'selectShowLateAsFlower', value: boolean): void
}>()

const maleName = ref('')
const maleNamePlaceholder = '이름(신랑)'
const updateMaleName = (_value: string) => {
    maleName.value = _value
    emits('updateMaleName', maleName.value)
}

const maleRelation = ref('아들')
const maleRelationPlaceholder = '관계적 호칭'
const updateMaleRelation = (_value: string) => {
    maleRelation.value = _value
    emits('updateMaleRelation', maleRelation.value)
}

const isMaleFatherLate = ref(false)
const selectMaleFatherLate = (_value: boolean) => {
    isMaleFatherLate.value = _value
    emits('selectMaleFatherLate', isMaleFatherLate.value)
}

const maleFatherName = ref('')
const maleFatherNamePlaceholder = '성함(아버지)'
const updateMaleFatherName = (_value: string) => {
    maleFatherName.value = _value
    emits('updateMaleFatherName', maleFatherName.value)
}

const isMaleMotherLate = ref(false)
const selectMaleMotherLate = (_value: boolean) => {
    isMaleMotherLate.value = _value
    emits('selectMaleMotherLate', isMaleMotherLate.value)
}

const maleMotherName = ref('')
const maleMotherNamePlaceholder = '성함(어머니)'
const updateMaleMotherName = (_value: string) => {
    maleMotherName.value = _value
    emits('updateMaleMotherName', maleMotherName.value)
}

const femaleName = ref('')
const femaleNamePlaceholder = '이름(신부)'
const updateFemaleName = (_value: string) => {
    femaleName.value = _value
    emits('updateFemaleName', femaleName.value)
}

const femaleRelation = ref('딸')
const femaleRelationPlaceholder = '관계적 호칭'
const updateFemaleRelation = (_value: string) => {
    femaleRelation.value = _value
    emits('updateFemaleRelation', femaleRelation.value)
}

const isFemaleFatherLate = ref(false)
const selectFemaleFatherLate = (_value: boolean) => {
    isFemaleFatherLate.value = _value
    emits('selectFemaleFatherLate', isFemaleFatherLate.value)
}

const femaleFatherName = ref('')
const femaleFatherNamePlaceholder = '성함(아버지)'
const updateFemaleFatherName = (_value: string) => {
    femaleFatherName.value = _value
    emits('updateFemaleFatherName', femaleFatherName.value)
}

const isFemaleMotherLate = ref(false)
const selectFemaleMotherLate = (_value: boolean) => {
    isFemaleMotherLate.value = _value
    emits('selectFemaleMotherLate', isFemaleMotherLate.value)
}

const femaleMotherName = ref('')
const femaleMotherNamePlaceholder = '성함(어머니)'
const updateFemaleMotherName = (_value: string) => {
    femaleMotherName.value = _value
    emits('updateFemaleMotherName', femaleMotherName.value)
}

const isShowFemaleFirst = ref(false)
const selectShowFemaleFirst = (_value: boolean) => {
    isShowFemaleFirst.value = _value
    emits('selectShowFemaleFirst', isShowFemaleFirst.value)
}

const isShowLateAsFlower = ref(false)
const selectShowLateAsFlower = (_value: boolean) => {
    isShowLateAsFlower.value = _value
    emits('selectShowLateAsFlower', isShowLateAsFlower.value)
}
</script>

<template>
    <InputForm required title="신랑측">
        <InputFormItem>
            <Text :initValue="maleName" :placeholder="maleNamePlaceholder" @input="updateMaleName" />
            <Text :initValue="maleRelation" :placeholder="maleRelationPlaceholder" @input="updateMaleRelation" />
        </InputFormItem>
        <InputFormItem>
            <Text :initValue="maleFatherName" :placeholder="maleFatherNamePlaceholder" @input="updateMaleFatherName" />
            <CheckBox id="LATE_MALE_FATHER" label="故人" @input="selectMaleFatherLate" />
        </InputFormItem>
        <InputFormItem>
            <Text :initValue="maleMotherName" :placeholder="maleMotherNamePlaceholder" @input="updateMaleMotherName" />
            <CheckBox id="LATE_MALE_MOTHER" label="故人" @input="selectMaleMotherLate" />
        </InputFormItem>
    </InputForm>
    <InputForm required devided title="신부측">
        <InputFormItem>
            <Text :initValue="femaleName" :placeholder="femaleNamePlaceholder" @input="updateFemaleName" />
            <Text :initValue="femaleRelation" :placeholder="femaleRelationPlaceholder" @input="updateFemaleRelation" />
        </InputFormItem>
        <InputFormItem>
            <Text
                :initValue="femaleFatherName"
                :placeholder="femaleFatherNamePlaceholder"
                @input="updateFemaleFatherName"
            />
            <CheckBox id="LATE_FEMALE_FATHER" name="LATE" label="故人" @input="selectFemaleFatherLate" />
        </InputFormItem>
        <InputFormItem>
            <Text
                :initValue="femaleMotherName"
                :placeholder="femaleMotherNamePlaceholder"
                @input="updateFemaleMotherName"
            />
            <CheckBox id="LATE_FEMALE_MOTHER" name="LATE" label="故人" @input="selectFemaleMotherLate" />
        </InputFormItem>
    </InputForm>
    <InputForm devided title="표기 순서">
        <InputFormItem>
            <CheckBox id="FEMALE_FIRST" label="신부 먼저 표기" @input="selectShowFemaleFirst" />
        </InputFormItem>
    </InputForm>
    <InputForm title="故人 표기">
        <InputFormItem>
            <CheckBox id="LATE_AS_FLOWER" label="故人 대신 꽃으로 표기" @input="selectShowLateAsFlower" />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateMaleContactName1', value: string): void
    (e: 'updateMaleContactPhoneNumber1', value: string): void
    (e: 'updateMaleContactName2', value: string): void
    (e: 'updateMaleContactPhoneNumber2', value: string): void
    (e: 'updateMaleContactName3', value: string): void
    (e: 'updateMaleContactPhoneNumber3', value: string): void
    (e: 'updateFemaleContactName1', value: string): void
    (e: 'updateFemaleContactPhoneNumber1', value: string): void
    (e: 'updateFemaleContactName2', value: string): void
    (e: 'updateFemaleContactPhoneNumber2', value: string): void
    (e: 'updateFemaleContactName3', value: string): void
    (e: 'updateFemaleContactPhoneNumber3', value: string): void
}>()

const maleContactName1 = ref('')
const maleContactName1Placeholder = ref('성함 혹은 호칭')
const updateMaleContactName1 = (_value: string) => {
    maleContactName1.value = _value
    emits('updateMaleContactName1', maleContactName1.value)
}
const maleContactPhoneNumber1 = ref('')
const maleContactPhoneNumber1Placeholder = ref('휴대폰 번호')
const updateMaleContactPhoneNumber1 = (_value: string) => {
    maleContactPhoneNumber1.value = _value
    emits('updateMaleContactPhoneNumber1', maleContactPhoneNumber1.value)
}
const maleContactName2 = ref('')
const maleContactName2Placeholder = ref('성함 혹은 호칭')
const updateMaleContactName2 = (_value: string) => {
    maleContactName2.value = _value
    emits('updateMaleContactName2', maleContactName2.value)
}
const maleContactPhoneNumber2 = ref('')
const maleContactPhoneNumber2Placeholder = ref('휴대폰 번호')
const updateMaleContactPhoneNumber2 = (_value: string) => {
    maleContactPhoneNumber2.value = _value
    emits('updateMaleContactPhoneNumber2', maleContactPhoneNumber2.value)
}
const maleContactName3 = ref('')
const maleContactName3Placeholder = ref('성함 혹은 호칭')
const updateMaleContactName3 = (_value: string) => {
    maleContactName3.value = _value
    emits('updateMaleContactName3', maleContactName3.value)
}
const maleContactPhoneNumber3 = ref('')
const maleContactPhoneNumber3Placeholder = ref('휴대폰 번호')
const updateMaleContactPhoneNumber3 = (_value: string) => {
    maleContactPhoneNumber3.value = _value
    emits('updateMaleContactPhoneNumber3', maleContactPhoneNumber3.value)
}

const femaleContactName1 = ref('')
const femaleContactName1Placeholder = ref('성함 혹은 호칭')
const updateFemaleContactName1 = (_value: string) => {
    femaleContactName1.value = _value
    emits('updateFemaleContactName1', femaleContactName1.value)
}
const femaleContactPhoneNumber1 = ref('')
const femaleContactPhoneNumber1Placeholder = ref('휴대폰 번호')
const updateFemaleContactPhoneNumber1 = (_value: string) => {
    femaleContactPhoneNumber1.value = _value
    emits('updateFemaleContactPhoneNumber1', femaleContactPhoneNumber1.value)
}
const femaleContactName2 = ref('')
const femaleContactName2Placeholder = ref('성함 혹은 호칭')
const updateFemaleContactName2 = (_value: string) => {
    femaleContactName2.value = _value
    emits('updateFemaleContactName2', femaleContactName2.value)
}
const femaleContactPhoneNumber2 = ref('')
const femaleContactPhoneNumber2Placeholder = ref('휴대폰 번호')
const updateFemaleContactPhoneNumber2 = (_value: string) => {
    femaleContactPhoneNumber2.value = _value
    emits('updateFemaleContactPhoneNumber2', femaleContactPhoneNumber2.value)
}
const femaleContactName3 = ref('')
const femaleContactName3Placeholder = ref('성함 혹은 호칭')
const updateFemaleContactName3 = (_value: string) => {
    femaleContactName3.value = _value
    emits('updateFemaleContactName3', femaleContactName3.value)
}
const femaleContactPhoneNumber3 = ref('')
const femaleContactPhoneNumber3Placeholder = ref('휴대폰 번호')
const updateFemaleContactPhoneNumber3 = (_value: string) => {
    femaleContactPhoneNumber3.value = _value
    emits('updateFemaleContactPhoneNumber3', femaleContactPhoneNumber3.value)
}
</script>

<template>
    <InputForm title="신랑측1">
        <InputFormItem>
            <Text
                short
                :initValue="maleContactName1"
                :placeholder="maleContactName1Placeholder"
                @input="updateMaleContactName1"
            />
            <Text
                short
                :initValue="maleContactPhoneNumber1"
                :placeholder="maleContactPhoneNumber1Placeholder"
                @input="updateMaleContactPhoneNumber1"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신랑측2">
        <InputFormItem>
            <Text
                short
                :initValue="maleContactName2"
                :placeholder="maleContactName2Placeholder"
                @input="updateMaleContactName2"
            />
            <Text
                short
                :initValue="maleContactPhoneNumber2"
                :placeholder="maleContactPhoneNumber2Placeholder"
                @input="updateMaleContactPhoneNumber2"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신랑측3">
        <InputFormItem>
            <Text
                short
                :initValue="maleContactName3"
                :placeholder="maleContactName3Placeholder"
                @input="updateMaleContactName3"
            />
            <Text
                short
                :initValue="maleContactPhoneNumber3"
                :placeholder="maleContactPhoneNumber3Placeholder"
                @input="updateMaleContactPhoneNumber3"
            />
        </InputFormItem>
    </InputForm>
    <InputForm devided title="신부측1">
        <InputFormItem>
            <Text
                short
                :initValue="femaleContactName1"
                :placeholder="femaleContactName1Placeholder"
                @input="updateFemaleContactName1"
            />
            <Text
                short
                :initValue="femaleContactPhoneNumber1"
                :placeholder="femaleContactPhoneNumber1Placeholder"
                @input="updateFemaleContactPhoneNumber1"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신부측2">
        <InputFormItem>
            <Text
                short
                :initValue="femaleContactName2"
                :placeholder="femaleContactName2Placeholder"
                @input="updateFemaleContactName2"
            />
            <Text
                short
                :initValue="femaleContactPhoneNumber2"
                :placeholder="femaleContactPhoneNumber2Placeholder"
                @input="updateFemaleContactPhoneNumber2"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신부측3">
        <InputFormItem>
            <Text
                short
                :initValue="femaleContactName3"
                :placeholder="femaleContactName3Placeholder"
                @input="updateFemaleContactName3"
            />
            <Text
                short
                :initValue="femaleContactPhoneNumber3"
                :placeholder="femaleContactPhoneNumber3Placeholder"
                @input="updateFemaleContactPhoneNumber3"
            />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

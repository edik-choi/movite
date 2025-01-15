<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'updateBankDetailsTitle', value: string): void
    (e: 'updateMaleBankName1', value: string): void
    (e: 'updateMaleBankNumber1', value: string): void
    (e: 'updateMaleBankDepositor1', value: string): void
    (e: 'updateMaleBankName2', value: string): void
    (e: 'updateMaleBankNumber2', value: string): void
    (e: 'updateMaleBankDepositor2', value: string): void
    (e: 'updateMaleBankName3', value: string): void
    (e: 'updateMaleBankNumber3', value: string): void
    (e: 'updateMaleBankDepositor3', value: string): void
    (e: 'updateFemaleBankName1', value: string): void
    (e: 'updateFemaleBankNumber1', value: string): void
    (e: 'updateFemaleBankDepositor1', value: string): void
    (e: 'updateFemaleBankName2', value: string): void
    (e: 'updateFemaleBankNumber2', value: string): void
    (e: 'updateFemaleBankDepositor2', value: string): void
    (e: 'updateFemaleBankName3', value: string): void
    (e: 'updateFemaleBankNumber3', value: string): void
    (e: 'updateFemaleBankDepositor3', value: string): void
}>()

const bankDetailsTitle = ref('')
const bankDetailsTitlePlaceholder = '제목을 입력해 주세요'
const updateBankDetailsTitle = (_value: string) => {
    bankDetailsTitle.value = _value
    emits('updateBankDetailsTitle', bankDetailsTitle.value)
}

const bankDetailsContent = ref('')
const bankDetailsContentPlaceholder = '내용을 입력해 주세요'
const updateBankDetailsContent = (_value: string) => {
    bankDetailsContent.value = _value
    emits('updateBankDetailsTitle', bankDetailsContent.value)
}

const maleBankName1 = ref('')
const maleBankName1Placeholder = ref('은행명')
const updateMaleBankName1 = (_value: string) => {
    maleBankName1.value = _value
    emits('updateMaleBankName1', maleBankName1.value)
}
const maleBankNumber1 = ref('')
const maleBankNumber1Placeholder = ref('계좌번호')
const updateMaleBankNumber1 = (_value: string) => {
    maleBankNumber1.value = _value
    emits('updateMaleBankNumber1', maleBankNumber1.value)
}
const maleBankDepositor1 = ref('')
const maleBankDepositor1Placeholder = ref('예금주')
const updateMaleBankDepositor1 = (_value: string) => {
    maleBankDepositor1.value = _value
    emits('updateMaleBankDepositor1', maleBankDepositor1.value)
}

const maleBankName2 = ref('')
const maleBankName2Placeholder = ref('은행명')
const updateMaleBankName2 = (_value: string) => {
    maleBankName2.value = _value
    emits('updateMaleBankName1', maleBankName2.value)
}
const maleBankNumber2 = ref('')
const maleBankNumber2Placeholder = ref('계좌번호')
const updateMaleBankNumber2 = (_value: string) => {
    maleBankNumber2.value = _value
    emits('updateMaleBankNumber1', maleBankNumber2.value)
}
const maleBankDepositor2 = ref('')
const maleBankDepositor2Placeholder = ref('예금주')
const updateMaleBankDepositor2 = (_value: string) => {
    maleBankDepositor2.value = _value
    emits('updateMaleBankDepositor1', maleBankDepositor2.value)
}

const maleBankName3 = ref('')
const maleBankName3Placeholder = ref('은행명')
const updateMaleBankName3 = (_value: string) => {
    maleBankName3.value = _value
    emits('updateMaleBankName3', maleBankName3.value)
}
const maleBankNumber3 = ref('')
const maleBankNumber3Placeholder = ref('계좌번호')
const updateMaleBankNumber3 = (_value: string) => {
    maleBankNumber3.value = _value
    emits('updateMaleBankNumber3', maleBankNumber3.value)
}
const maleBankDepositor3 = ref('')
const maleBankDepositor3Placeholder = ref('예금주')
const updateMaleBankDepositor3 = (_value: string) => {
    maleBankDepositor3.value = _value
    emits('updateMaleBankDepositor3', maleBankDepositor3.value)
}

const femaleBankName1 = ref('')
const femaleBankName1Placeholder = ref('은행명')
const updateFemaleBankName1 = (_value: string) => {
    femaleBankName1.value = _value
    emits('updateFemaleBankName1', femaleBankName1.value)
}
const femaleBankNumber1 = ref('')
const femaleBankNumber1Placeholder = ref('계좌번호')
const updateFemaleBankNumber1 = (_value: string) => {
    femaleBankNumber1.value = _value
    emits('updateFemaleBankNumber1', femaleBankNumber1.value)
}
const femaleBankDepositor1 = ref('')
const femaleBankDepositor1Placeholder = ref('예금주')
const updateFemaleBankDepositor1 = (_value: string) => {
    femaleBankDepositor1.value = _value
    emits('updateFemaleBankDepositor1', femaleBankDepositor1.value)
}

const femaleBankName2 = ref('')
const femaleBankName2Placeholder = ref('은행명')
const updateFemaleBankName2 = (_value: string) => {
    femaleBankName2.value = _value
    emits('updateFemaleBankName1', femaleBankName2.value)
}
const femaleBankNumber2 = ref('')
const femaleBankNumber2Placeholder = ref('계좌번호')
const updateFemaleBankNumber2 = (_value: string) => {
    femaleBankNumber2.value = _value
    emits('updateFemaleBankNumber1', femaleBankNumber2.value)
}
const femaleBankDepositor2 = ref('')
const femaleBankDepositor2Placeholder = ref('예금주')
const updateFemaleBankDepositor2 = (_value: string) => {
    femaleBankDepositor2.value = _value
    emits('updateFemaleBankDepositor1', femaleBankDepositor2.value)
}

const femaleBankName3 = ref('')
const femaleBankName3Placeholder = ref('은행명')
const updateFemaleBankName3 = (_value: string) => {
    femaleBankName3.value = _value
    emits('updateFemaleBankName3', femaleBankName3.value)
}
const femaleBankNumber3 = ref('')
const femaleBankNumber3Placeholder = ref('계좌번호')
const updateFemaleBankNumber3 = (_value: string) => {
    femaleBankNumber3.value = _value
    emits('updateFemaleBankNumber3', femaleBankNumber3.value)
}
const femaleBankDepositor3 = ref('')
const femaleBankDepositor3Placeholder = ref('예금주')
const updateFemaleBankDepositor3 = (_value: string) => {
    femaleBankDepositor3.value = _value
    emits('updateFemaleBankDepositor3', femaleBankDepositor3.value)
}
</script>

<template>
    <InputForm title="제목">
        <InputFormItem>
            <Text
                full
                :initValue="bankDetailsTitle"
                :placeholder="bankDetailsTitlePlaceholder"
                @input="updateBankDetailsTitle"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="내용">
        <InputFormItem>
            <TextArea
                :initValue="bankDetailsContent"
                :placeholder="bankDetailsContentPlaceholder"
                @input="updateBankDetailsContent"
            />
        </InputFormItem>
    </InputForm>
    <InputForm devided title="신랑측1">
        <InputFormItem>
            <Text
                short
                :initValue="maleBankName1"
                :placeholder="maleBankName1Placeholder"
                @input="updateMaleBankName1"
            />
            <Text
                short
                :initValue="maleBankNumber1"
                :placeholder="maleBankNumber1Placeholder"
                @input="updateMaleBankNumber1"
            />
            <Text
                short
                :initValue="maleBankDepositor1"
                :placeholder="maleBankDepositor1Placeholder"
                @input="updateMaleBankDepositor1"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신랑측2">
        <InputFormItem>
            <Text
                short
                :initValue="maleBankName2"
                :placeholder="maleBankName2Placeholder"
                @input="updateMaleBankName2"
            />
            <Text
                short
                :initValue="maleBankNumber2"
                :placeholder="maleBankNumber2Placeholder"
                @input="updateMaleBankNumber2"
            />
            <Text
                short
                :initValue="maleBankDepositor2"
                :placeholder="maleBankDepositor2Placeholder"
                @input="updateMaleBankDepositor2"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신랑측3">
        <InputFormItem>
            <Text
                short
                :initValue="maleBankName3"
                :placeholder="maleBankName3Placeholder"
                @input="updateMaleBankName3"
            />
            <Text
                short
                :initValue="maleBankNumber3"
                :placeholder="maleBankNumber3Placeholder"
                @input="updateMaleBankNumber3"
            />
            <Text
                short
                :initValue="maleBankDepositor3"
                :placeholder="maleBankDepositor3Placeholder"
                @input="updateMaleBankDepositor3"
            />
        </InputFormItem>
    </InputForm>
    <InputForm devided title="신부측1">
        <InputFormItem>
            <Text
                short
                :initValue="femaleBankName1"
                :placeholder="femaleBankName1Placeholder"
                @input="updateFemaleBankName1"
            />
            <Text
                short
                :initValue="femaleBankNumber1"
                :placeholder="femaleBankNumber1Placeholder"
                @input="updateFemaleBankNumber1"
            />
            <Text
                short
                :initValue="femaleBankDepositor1"
                :placeholder="femaleBankDepositor1Placeholder"
                @input="updateFemaleBankDepositor1"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신부측2">
        <InputFormItem>
            <Text
                short
                :initValue="femaleBankName2"
                :placeholder="femaleBankName2Placeholder"
                @input="updateFemaleBankName2"
            />
            <Text
                short
                :initValue="femaleBankNumber2"
                :placeholder="femaleBankNumber2Placeholder"
                @input="updateFemaleBankNumber2"
            />
            <Text
                short
                :initValue="femaleBankDepositor2"
                :placeholder="femaleBankDepositor2Placeholder"
                @input="updateFemaleBankDepositor2"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="신부측3">
        <InputFormItem>
            <Text
                short
                :initValue="femaleBankName3"
                :placeholder="femaleBankName3Placeholder"
                @input="updateFemaleBankName3"
            />
            <Text
                short
                :initValue="femaleBankNumber3"
                :placeholder="femaleBankNumber3Placeholder"
                @input="updateFemaleBankNumber3"
            />
            <Text
                short
                :initValue="femaleBankDepositor3"
                :placeholder="femaleBankDepositor3Placeholder"
                @input="updateFemaleBankDepositor3"
            />
        </InputFormItem>
    </InputForm>
</template>

<style lang="scss" scoped></style>

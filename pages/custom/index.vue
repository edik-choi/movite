<script lang="ts" setup>
import { nameSample, greetingsSample } from '@/data/domain/custom'

const selectedFontIndex = ref(0)
const handleSelectedFontIndex = (index: number) => {
    selectedFontIndex.value = index
}

const selectedThemeColorIndex = ref(0)
const handleSelectedThemeColorIndex = (index: number) => {
    selectedThemeColorIndex.value = index
}

const maleName = ref(nameSample.male)
const handleUpdateMaleName = (_value: string) => {
    maleName.value = _value
}
const maleRelation = ref('차남')
const handleUpdateMaleRelation = (_value: string) => {
    maleRelation.value = _value
}
const isMaleFatherLate = ref(false)
const handleSelectMaleFatherLate = (_value: boolean) => {
    isMaleFatherLate.value = _value
}
const maleFatherName = ref(nameSample.maleFather)
const handleUpdateMaleFatherName = (_value: string) => {
    maleFatherName.value = _value
}
const isMaleMotherLate = ref(false)
const handleSelectMaleMotherLate = (_value: boolean) => {
    isMaleMotherLate.value = _value
}
const maleMotherName = ref(nameSample.maleMother)
const handleUpdateMaleMotherName = (_value: string) => {
    maleMotherName.value = _value
}

const femaleName = ref(nameSample.female)
const handleUpdateFemaleName = (_value: string) => {
    femaleName.value = _value
}
const femaleRelation = ref('장녀')
const handleUpdateFemaleRelation = (_value: string) => {
    femaleRelation.value = _value
}
const isFemaleFatherLate = ref(false)
const handleSelectFemaleFatherLate = (_value: boolean) => {
    isFemaleFatherLate.value = _value
}
const femaleFatherName = ref(nameSample.femaleFather)
const handleUpdateFemaleFatherName = (_value: string) => {
    femaleFatherName.value = _value
}
const isFemaleMotherLate = ref(false)
const handleSelectFemaleMotherLate = (_value: boolean) => {
    isFemaleMotherLate.value = _value
}
const femaleMotherName = ref(nameSample.femaleMother)
const handleUpdateFemaleMotherName = (_value: string) => {
    femaleMotherName.value = _value
}

const isShowFemaleFirst = ref(false)
const handleSelectShowFemaleFirst = (_value: boolean) => {
    isShowFemaleFirst.value = _value
}

const isShowLateAsFlower = ref(false)
const handleSelectShowLateAsFlower = (_value: boolean) => {
    isShowLateAsFlower.value = _value
}

const greetingsTitle = ref(greetingsSample.title)
const handleUpdateGreetingsTitle = (_value: string) => {
    greetingsTitle.value = _value
}

const greetingsContent = ref(greetingsSample.content)
const handleUpdateGreetingsText = (_value: string) => {
    greetingsContent.value = _value
}

const selectedDate = ref(new Date())
const handleSelectedDate = (date: Date) => {
    selectedDate.value = date
}

const selectedAddress = ref('')
const handleSelectedAddress = (_value: string) => {
    selectedAddress.value = _value
}

const detailedAddress = ref('')
const handleUpdateDetailedAddress = (_value: string) => {
    detailedAddress.value = _value
}

const noticeTitle = ref('')
const updateNoticeTitle = (_value: string) => {
    noticeTitle.value = _value
}
const noticeContent = ref('')
const updateNoticeContent = (_value: string) => {
    noticeContent.value = _value
}

const closingsContent = ref('')
const updateClosingsContent = (_value: string) => {
    closingsContent.value = _value
}

const maleContactName1 = ref('')
const updateMaleContactName1 = (_value: string) => {
    maleContactName1.value = _value
}
const maleContactPhoneNumber1 = ref('')
const updateMaleContactPhoneNumber1 = (_value: string) => {
    maleContactPhoneNumber1.value = _value
}
const maleContactName2 = ref('')
const updateMaleContactName2 = (_value: string) => {
    maleContactName2.value = _value
}
const maleContactPhoneNumber2 = ref('')
const updateMaleContactPhoneNumber2 = (_value: string) => {
    maleContactPhoneNumber2.value = _value
}
const maleContactName3 = ref('')
const updateMaleContactName3 = (_value: string) => {
    maleContactName3.value = _value
}
const maleContactPhoneNumber3 = ref('')
const updateMaleContactPhoneNumber3 = (_value: string) => {
    maleContactPhoneNumber3.value = _value
}

const femaleContactName1 = ref('')
const updateFemaleContactName1 = (_value: string) => {
    femaleContactName1.value = _value
}
const femaleContactPhoneNumber1 = ref('')
const updateFemaleContactPhoneNumber1 = (_value: string) => {
    femaleContactPhoneNumber1.value = _value
}
const femaleContactName2 = ref('')
const updateFemaleContactName2 = (_value: string) => {
    femaleContactName2.value = _value
}
const femaleContactPhoneNumber2 = ref('')
const updateFemaleContactPhoneNumber2 = (_value: string) => {
    femaleContactPhoneNumber2.value = _value
}
const femaleContactName3 = ref('')
const updateFemaleContactName3 = (_value: string) => {
    femaleContactName3.value = _value
}
const femaleContactPhoneNumber3 = ref('')
const updateFemaleContactPhoneNumber3 = (_value: string) => {
    femaleContactPhoneNumber3.value = _value
}
</script>

<template>
    <div>
        <Container>
            <template #side>
                <CustomPreview
                    :selectedFontIndex="selectedFontIndex"
                    :selectedThemeColorIndex="selectedThemeColorIndex"
                    :maleName="maleName"
                    :maleRelation="maleRelation"
                    :maleFatherName="maleFatherName"
                    :isMaleFatherLate="isMaleFatherLate"
                    :maleMotherName="maleMotherName"
                    :isMaleMotherLate="isMaleMotherLate"
                    :femaleName="femaleName"
                    :femaleRelation="femaleRelation"
                    :femaleFatherName="femaleFatherName"
                    :isFemaleFatherLate="isFemaleFatherLate"
                    :femaleMotherName="femaleMotherName"
                    :isFemaleMotherLate="isFemaleMotherLate"
                    :isShowFemaleFirst="isShowFemaleFirst"
                    :isShowLateAsFlower="isShowLateAsFlower"
                    :greetingsTitle="greetingsTitle"
                    :greetingsContent="greetingsContent"
                    :selectedDate="selectedDate"
                    :selectedAddress="selectedAddress"
                    :detailedAddress="detailedAddress"
                    :noticeTitle="noticeTitle"
                    :noticeContent="noticeContent"
                    :closingsContent="closingsContent"
                    :maleContactName1="maleContactName1"
                    :maleContactPhoneNumber1="maleContactPhoneNumber1"
                    :maleContactName2="maleContactName2"
                    :maleContactPhoneNumber2="maleContactPhoneNumber2"
                    :maleContactName3="maleContactName3"
                    :maleContactPhoneNumber3="femaleContactPhoneNumber3"
                    :femaleContactName1="femaleContactName1"
                    :femaleContactPhoneNumber1="femaleContactPhoneNumber1"
                    :femaleContactName2="femaleContactName2"
                    :femaleContactPhoneNumber2="femaleContactPhoneNumber2"
                    :femaleContactName3="femaleContactName3"
                    :femaleContactPhoneNumber3="femaleContactPhoneNumber3"
                />
            </template>
            <template #contents>
                <Accordion expanded title="디자인">
                    <CustomDesign
                        @selectFontIndex="handleSelectedFontIndex"
                        @selectThemeColorIndex="handleSelectedThemeColorIndex"
                    />
                </Accordion>
                <Accordion expanded title="성함">
                    <CustomOrganizers
                        @updateMaleName="handleUpdateMaleName"
                        @updateMaleRelation="handleUpdateMaleRelation"
                        @selectMaleFatherLate="handleSelectMaleFatherLate"
                        @updateMaleFatherName="handleUpdateMaleFatherName"
                        @selectMaleMotherLate="handleSelectMaleMotherLate"
                        @updateMaleMotherName="handleUpdateMaleMotherName"
                        @updateFemaleName="handleUpdateFemaleName"
                        @updateFemaleRelation="handleUpdateFemaleRelation"
                        @selectFemaleFatherLate="handleSelectFemaleFatherLate"
                        @updateFemaleFatherName="handleUpdateFemaleFatherName"
                        @selectFemaleMotherLate="handleSelectFemaleMotherLate"
                        @updateFemaleMotherName="handleUpdateFemaleMotherName"
                        @selectShowFemaleFirst="handleSelectShowFemaleFirst"
                        @selectShowLateAsFlower="handleSelectShowLateAsFlower"
                    />
                </Accordion>
                <Accordion expanded title="메인"></Accordion>
                <Accordion expanded title="인사말">
                    <CustomGreetings
                        :greetingsTitle="greetingsTitle"
                        :greetingsContent="greetingsContent"
                        @updateGreetingsTitle="handleUpdateGreetingsTitle"
                        @updateGreetingsText="handleUpdateGreetingsText"
                    />
                </Accordion>
                <Accordion expanded title="일정 및 장소">
                    <CustomEventDetails
                        @selectedDate="handleSelectedDate"
                        @selectedAddress="handleSelectedAddress"
                        @detailedAddress="handleUpdateDetailedAddress"
                    />
                </Accordion>
                <Accordion expanded title="교통수단"></Accordion>
                <Accordion expanded title="갤러리">
                    <FileUploader />
                </Accordion>
                <Accordion expanded title="공지사항">
                    <CustomNotice @updateNoticeTitle="updateNoticeTitle" @updateNoticeContent="updateNoticeContent" />
                </Accordion>
                <Accordion expanded title="맺음말">
                    <CustomClosings @updateClosingsContent="updateClosingsContent" />
                </Accordion>
                <Accordion expanded title="연락처">
                    <CustomContact
                        @updateMaleContactName1="updateMaleContactName1"
                        @updateMaleContactPhoneNumber1="updateMaleContactPhoneNumber1"
                        @updateMaleContactName2="updateMaleContactName2"
                        @updateMaleContactPhoneNumber2="updateMaleContactPhoneNumber2"
                        @updateMaleContactName3="updateMaleContactName3"
                        @updateMaleContactPhoneNumber3="updateMaleContactPhoneNumber3"
                        @updateFemaleContactName1="updateFemaleContactName1"
                        @updateFemaleContactPhoneNumber1="updateFemaleContactPhoneNumber1"
                        @updateFemaleContactName2="updateFemaleContactName2"
                        @updateFemaleContactPhoneNumber2="updateFemaleContactPhoneNumber2"
                        @updateFemaleContactName3="updateFemaleContactName3"
                        @updateFemaleContactPhoneNumber3="updateFemaleContactPhoneNumber3"
                    />
                </Accordion>
                <Accordion expanded title="계좌번호">
                    <CustomBankDetails />
                </Accordion>
                <Accordion expanded title="방명록"></Accordion>
                <Accordion expanded title="공유링크">
                    <InputForm title="카카오톡"></InputForm>
                    <InputForm title="URL"></InputForm>
                </Accordion>
            </template>
        </Container>
    </div>
</template>

<style lang="scss" scoped></style>

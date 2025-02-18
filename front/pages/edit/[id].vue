<script lang="ts" setup>
import { nameSample, greetingsSample } from '@/data/domain/custom'

const id = ref('')
const editId = ref('')
const userId = ref('')

const fontIndex = ref(0)
const selectFontIndex = (index: number) => {
    fontIndex.value = index
}

const themeColorIndex = ref(0)
const selectThemeColorIndex = (index: number) => {
    themeColorIndex.value = index
}

const maleName = ref(nameSample.male)
const updateMaleName = (_value: string) => {
    maleName.value = _value
}
const maleRelation = ref('차남')
const updateMaleRelation = (_value: string) => {
    maleRelation.value = _value
}
const isMaleFatherDeceased = ref(false)
const selectMaleFatherDeceased = (_value: boolean) => {
    isMaleFatherDeceased.value = _value
}
const maleFatherName = ref(nameSample.maleFather)
const updateMaleFatherName = (_value: string) => {
    maleFatherName.value = _value
}
const isMaleMotherDeceased = ref(false)
const selectMaleMotherDeceased = (_value: boolean) => {
    isMaleMotherDeceased.value = _value
}
const maleMotherName = ref(nameSample.maleMother)
const updateMaleMotherName = (_value: string) => {
    maleMotherName.value = _value
}

const femaleName = ref(nameSample.female)
const updateFemaleName = (_value: string) => {
    femaleName.value = _value
}
const femaleRelation = ref('장녀')
const updateFemaleRelation = (_value: string) => {
    femaleRelation.value = _value
}
const isFemaleFatherDeceased = ref(false)
const selectFemaleFatherDeceased = (_value: boolean) => {
    isFemaleFatherDeceased.value = _value
}
const femaleFatherName = ref(nameSample.femaleFather)
const updateFemaleFatherName = (_value: string) => {
    femaleFatherName.value = _value
}
const isFemaleMotherDeceased = ref(false)
const selectFemaleMotherDeceased = (_value: boolean) => {
    isFemaleMotherDeceased.value = _value
}
const femaleMotherName = ref(nameSample.femaleMother)
const updateFemaleMotherName = (_value: string) => {
    femaleMotherName.value = _value
}

const isShowFemaleFirst = ref(false)
const selectShowFemaleFirst = (_value: boolean) => {
    isShowFemaleFirst.value = _value
}

const isShowDeceasedAsFlower = ref(false)
const selectShowDeceasedAsFlower = (_value: boolean) => {
    isShowDeceasedAsFlower.value = _value
}

const greetingsTitle = ref(greetingsSample.title)
const updateGreetingsTitle = (_value: string) => {
    greetingsTitle.value = _value
}

const greetingsContent = ref(greetingsSample.content)
const updateGreetingsText = (_value: string) => {
    greetingsContent.value = _value
}

const greetingsImageUrls = ref<string[]>([])
const updateGreetingsImageUrls = (_value: string[]) => {
    greetingsImageUrls.value = _value
}

const date = ref(new Date())
const selectDate = (_date: Date) => {
    date.value = _date
}

const address = ref('')
const selectedAddress = (_value: string) => {
    address.value = _value
}

const detailAddress = ref('')
const updateDetailAddress = (_value: string) => {
    detailAddress.value = _value
}

const detailDirections = ref('')
const updateDetailDirections = (_value: string) => {
    detailDirections.value = _value
}

const directionsImageUrls = ref<string[]>([])
const updateDirectionsImageUrls = (_value: string[]) => {
    directionsImageUrls.value = _value
}

const isMapVisible = ref(true)
const updateMapVisibility = (_value: boolean) => {
    isMapVisible.value = _value
}

const isNaviVisible = ref(true)
const updateNaviVisibility = (_value: boolean) => {
    isNaviVisible.value = _value
}

const geocodeX = ref(37.5666805)
const geocodeY = ref(126.9784147)
const updateGeocode = (_geocodeX: number, _geocodeY: number) => {
    geocodeX.value = _geocodeX
    geocodeY.value = _geocodeY
}

const galerieImageUrls = ref<string[]>([])
const updateGalerieImageUrls = (_value: string[]) => {
    galerieImageUrls.value = _value
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

const route = useRoute()
const router = useRouter()

const isStoredUserExist = ref(false)

const loadCustomData = async () => {
    try {
        const { $axios } = useNuxtApp()
        const editIdParam = route.params.id as string // 🔹 URL의 editId 값

        // ✅ `editId`를 사용하여 데이터 요청
        const response = await $axios.get(`/edit/data/${editIdParam}`)
        const savedData = response.data

        if (!savedData) {
            alert('데이터를 찾을 수 없습니다.')
            return
        }

        id.value = savedData[0].id
        editId.value = savedData[0].editId
        userId.value = savedData[0].userId
        fontIndex.value = savedData[0].fontIndex
        themeColorIndex.value = savedData[0].themeColorIndex
        maleName.value = savedData[0].maleName
        maleRelation.value = savedData[0].maleRelation
        maleFatherName.value = savedData[0].maleFatherName
        isMaleFatherDeceased.value = savedData[0].isMaleFatherDeceased
        maleMotherName.value = savedData[0].maleMotherName
        isMaleMotherDeceased.value = savedData[0].isMaleMotherDeceased
        femaleName.value = savedData[0].femaleName
        femaleRelation.value = savedData[0].femaleRelation
        femaleFatherName.value = savedData[0].femaleFatherName
        isFemaleFatherDeceased.value = savedData[0].isFemaleFatherDeceased
        femaleMotherName.value = savedData[0].femaleMotherName
        isFemaleMotherDeceased.value = savedData[0].isFemaleMotherDeceased
        isShowFemaleFirst.value = savedData[0].isShowFemaleFirst
        isShowDeceasedAsFlower.value = savedData[0].isShowDeceasedAsFlower
        greetingsTitle.value = savedData[0].greetingsTitle
        greetingsContent.value = savedData[0].greetingsContent
        greetingsImageUrls.value = savedData[0].greetingsImageUrls
        date.value = savedData[0].date
        address.value = savedData[0].address
        detailAddress.value = savedData[0].detailAddress
        detailDirections.value = savedData[0].detailDirections
        directionsImageUrls.value = savedData[0].directionsImageUrls
        isMapVisible.value = savedData[0].isMapVisible
        isNaviVisible.value = savedData[0].isNaviVisible
        geocodeX.value = savedData[0].geocodeX
        geocodeY.value = savedData[0].geocodeY
        noticeTitle.value = savedData[0].noticeTitle
        noticeContent.value = savedData[0].noticeContent
        closingsContent.value = savedData[0].closingsContent
        maleContactName1.value = savedData[0].maleContactName1
        maleContactPhoneNumber1.value = savedData[0].maleContactPhoneNumber1
        maleContactName2.value = savedData[0].maleContactName2
        maleContactPhoneNumber2.value = savedData[0].maleContactPhoneNumber2
        maleContactName3.value = savedData[0].maleContactName3
        maleContactPhoneNumber3.value = savedData[0].maleContactPhoneNumber3
        femaleContactName1.value = savedData[0].femaleContactName1
        femaleContactPhoneNumber1.value = savedData[0].femaleContactPhoneNumber1
        femaleContactName2.value = savedData[0].femaleContactName2
        femaleContactPhoneNumber2.value = savedData[0].femaleContactPhoneNumber2
        femaleContactName3.value = savedData[0].femaleContactName3
        femaleContactPhoneNumber3.value = savedData[0].femaleContactPhoneNumber3
    } catch (error) {
        console.error('데이터 불리오기 중 오류가 발생했습니다:', error)
    }
}

onMounted(async () => {
    try {
        const storedUser = localStorage.getItem('naverUser')
        if (!storedUser) {
            alert('로그인이 필요합니다.')
            router.push('/login')
            return
        } else {
            isStoredUserExist.value = true
            loadCustomData()
        }
    } catch (error) {
        console.error('로그인 체크 오류:', error)
    }
})

const save = async () => {
    try {
        const { $axios } = useNuxtApp()
        const storedUser = localStorage.getItem('naverUser')
        if (!storedUser) {
            alert('로그인이 필요합니다.')
            return
        }

        const user = JSON.parse(storedUser)
        const userId = user.id

        const dataToSave = {
            id: id.value,
            editId: editId.value,
            userId: userId.value,
            isFinalized: false,
            fontIndex: fontIndex.value,
            themeColorIndex: themeColorIndex.value,
            maleName: maleName.value,
            maleRelation: maleRelation.value,
            maleFatherName: maleFatherName.value,
            isMaleFatherDeceased: isMaleFatherDeceased.value,
            maleMotherName: maleMotherName.value,
            isMaleMotherDeceased: isMaleMotherDeceased.value,
            femaleName: femaleName.value,
            femaleRelation: femaleRelation.value,
            femaleFatherName: femaleFatherName.value,
            isFemaleFatherDeceased: isFemaleFatherDeceased.value,
            femaleMotherName: femaleMotherName.value,
            isFemaleMotherDeceased: isFemaleMotherDeceased.value,
            isShowFemaleFirst: isShowFemaleFirst.value,
            isShowDeceasedAsFlower: isShowDeceasedAsFlower.value,
            greetingsTitle: greetingsTitle.value,
            greetingsContent: greetingsContent.value,
            greetingsImageUrls: greetingsImageUrls.value,
            date: date.value,
            address: address.value,
            detailAddress: detailAddress.value,
            detailDirections: detailDirections.value,
            directionsImageUrls: directionsImageUrls.value,
            isMapVisible: isMapVisible.value,
            isNaviVisible: isNaviVisible.value,
            geocodeX: geocodeX.value,
            geocodeY: geocodeY.value,
            noticeTitle: noticeTitle.value,
            noticeContent: noticeContent.value,
            closingsContent: closingsContent.value,
            maleContactName1: maleContactName1.value,
            maleContactPhoneNumber1: maleContactPhoneNumber1.value,
            maleContactName2: maleContactName2.value,
            maleContactPhoneNumber2: maleContactPhoneNumber2.value,
            maleContactName3: maleContactName3.value,
            maleContactPhoneNumber3: maleContactPhoneNumber3.value,
            femaleContactName1: femaleContactName1.value,
            femaleContactPhoneNumber1: femaleContactPhoneNumber1.value,
            femaleContactName2: femaleContactName2.value,
            femaleContactPhoneNumber2: femaleContactPhoneNumber2.value,
            femaleContactName3: femaleContactName3.value,
            femaleContactPhoneNumber3: femaleContactPhoneNumber3.value,
        }

        await $axios.post('/save', { userId, data: dataToSave })
        alert('저장되었습니다!')
    } catch (error) {
        console.error('저장 중 오류가 발생했습니다:', error)
        alert('저장에 실패했습니다.')
    }
}
</script>

<template>
    <Container v-if="isStoredUserExist">
        <template #side>
            <button @click="save">save</button>
            <CustomPreview
                :fontIndex="fontIndex"
                :themeColorIndex="themeColorIndex"
                :maleName="maleName"
                :maleRelation="maleRelation"
                :maleFatherName="maleFatherName"
                :isMaleFatherDeceased="isMaleFatherDeceased"
                :maleMotherName="maleMotherName"
                :isMaleMotherDeceased="isMaleMotherDeceased"
                :femaleName="femaleName"
                :femaleRelation="femaleRelation"
                :femaleFatherName="femaleFatherName"
                :isFemaleFatherDeceased="isFemaleFatherDeceased"
                :femaleMotherName="femaleMotherName"
                :isFemaleMotherDeceased="isFemaleMotherDeceased"
                :isShowFemaleFirst="isShowFemaleFirst"
                :isShowDeceasedAsFlower="isShowDeceasedAsFlower"
                :greetingsTitle="greetingsTitle"
                :greetingsContent="greetingsContent"
                :greetingsImageUrls="greetingsImageUrls"
                :date="date"
                :address="address"
                :detailAddress="detailAddress"
                :detailDirections="detailDirections"
                :directionsImageUrls="directionsImageUrls"
                :isMapVisible="isMapVisible"
                :isNaviVisible="isNaviVisible"
                :geocodeX="geocodeX"
                :geocodeY="geocodeY"
                :noticeTitle="noticeTitle"
                :noticeContent="noticeContent"
                :closingsContent="closingsContent"
                :maleContactName1="maleContactName1"
                :maleContactPhoneNumber1="maleContactPhoneNumber1"
                :maleContactName2="maleContactName2"
                :maleContactPhoneNumber2="maleContactPhoneNumber2"
                :maleContactName3="maleContactName3"
                :maleContactPhoneNumber3="maleContactPhoneNumber3"
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
                    @selectFontIndex="selectFontIndex"
                    @selectThemeColorIndex="selectThemeColorIndex"
                />
            </Accordion>
            <Accordion expanded title="성함">
                <CustomOrganizers
                    @updateMaleName="updateMaleName"
                    @updateMaleRelation="updateMaleRelation"
                    @selectMaleFatherDeceased="selectMaleFatherDeceased"
                    @updateMaleFatherName="updateMaleFatherName"
                    @selectMaleMotherDeceased="selectMaleMotherDeceased"
                    @updateMaleMotherName="updateMaleMotherName"
                    @updateFemaleName="updateFemaleName"
                    @updateFemaleRelation="updateFemaleRelation"
                    @selectFemaleFatherDeceased="selectFemaleFatherDeceased"
                    @updateFemaleFatherName="updateFemaleFatherName"
                    @selectFemaleMotherDeceased="selectFemaleMotherDeceased"
                    @updateFemaleMotherName="updateFemaleMotherName"
                    @selectShowFemaleFirst="selectShowFemaleFirst"
                    @selectShowDeceasedAsFlower="selectShowDeceasedAsFlower"
                />
            </Accordion>
            <Accordion expanded title="메인"></Accordion>
            <Accordion expanded title="인사말">
                <CustomGreetings
                    :greetingsTitle="greetingsTitle"
                    :greetingsContent="greetingsContent"
                    @updateGreetingsTitle="updateGreetingsTitle"
                    @updateGreetingsText="updateGreetingsText"
                    @updateGreetingsImageUrls="updateGreetingsImageUrls"
                />
            </Accordion>
            <Accordion expanded title="일정 및 장소">
                <CustomEventDetails
                    @selectDate="selectDate"
                    @selectAddress="selectedAddress"
                    @UpdateDetailAddress="updateDetailAddress"
                    @UpdateDetailDirections="updateDetailDirections"
                    @updateDirectionsImageUrls="updateDirectionsImageUrls"
                    @updateMapVisibility="updateMapVisibility"
                    @updateNaviVisibility="updateNaviVisibility"
                    @updateGeocode="updateGeocode"
                />
            </Accordion>
            <Accordion expanded title="갤러리">
                <CustomGalerie
                    @updateGalerieImageUrls="updateGalerieImageUrls"
                />
            </Accordion>
            <Accordion expanded title="공지사항">
                <CustomNotice
                    @updateNoticeTitle="updateNoticeTitle"
                    @updateNoticeContent="updateNoticeContent"
                />
            </Accordion>
            <Accordion expanded title="맺음말">
                <CustomClosings
                    @updateClosingsContent="updateClosingsContent"
                />
            </Accordion>
            <Accordion expanded title="연락처">
                <CustomContact
                    @updateMaleContactName1="updateMaleContactName1"
                    @updateMaleContactPhoneNumber1="
                        updateMaleContactPhoneNumber1
                    "
                    @updateMaleContactName2="updateMaleContactName2"
                    @updateMaleContactPhoneNumber2="
                        updateMaleContactPhoneNumber2
                    "
                    @updateMaleContactName3="updateMaleContactName3"
                    @updateMaleContactPhoneNumber3="
                        updateMaleContactPhoneNumber3
                    "
                    @updateFemaleContactName1="updateFemaleContactName1"
                    @updateFemaleContactPhoneNumber1="
                        updateFemaleContactPhoneNumber1
                    "
                    @updateFemaleContactName2="updateFemaleContactName2"
                    @updateFemaleContactPhoneNumber2="
                        updateFemaleContactPhoneNumber2
                    "
                    @updateFemaleContactName3="updateFemaleContactName3"
                    @updateFemaleContactPhoneNumber3="
                        updateFemaleContactPhoneNumber3
                    "
                />
            </Accordion>
            <Accordion expanded title="계좌번호">
                <CustomBankDetails />
            </Accordion>
            <Accordion expanded title="공유링크">
                <InputForm title="카카오톡"></InputForm>
                <InputForm title="URL"></InputForm>
            </Accordion>
        </template>
    </Container>
</template>

<style lang="scss" scoped></style>

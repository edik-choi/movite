<script setup lang="ts">
definePageMeta({
    layout: false,
})

const seoTitle = ref('신랑 · 신부의 청첩장')

useSeoMeta({
    title: seoTitle,
    description: '청첩장',
    ogTitle: '청첩장',
    ogDescription: '청첩장',
    ogImage: '',
})

const route = useRoute()
const data = ref<any>(null)

onMounted(async () => {
    try {
        const id = route.params.id as string
        const { $axios } = useNuxtApp()
        const storedUser = localStorage.getItem('naverUser')

        if (!storedUser) {
            console.warn('로그인이 필요합니다.')
            return
        }

        const user = JSON.parse(storedUser)
        const userId = user.id

        // 🔹 특정 유저의 데이터만 가져오기
        const response = await $axios.get(`/data/${userId}`)
        data.value = response.data.find(
            (item: { id: string }) => item.id === id
        )

        if (data.value) {
            seoTitle.value = `${data.value.maleName} · ${data.value.femaleName}의 청첩장`
        } else {
            console.error(`ID ${id}에 해당하는 데이터를 찾을 수 없습니다.`)
        }
    } catch (error) {
        console.error('데이터 상세보기 로드 오류:', error)
    }
})
</script>

<template>
    <ViewInvitation
        v-if="data"
        :fontIndex="data.fontIndex"
        :themeColorIndex="data.themeColorIndex"
        :maleName="data.maleName"
        :maleRelation="data.maleRelation"
        :maleFatherName="data.maleFatherName"
        :isMaleFatherDeceased="data.isMaleFatherDeceased"
        :maleMotherName="data.maleMotherName"
        :isMaleMotherDeceased="data.isMaleMotherDeceased"
        :femaleName="data.femaleName"
        :femaleRelation="data.femaleRelation"
        :femaleFatherName="data.femaleFatherName"
        :isFemaleFatherDeceased="data.isFemaleFatherDeceased"
        :femaleMotherName="data.femaleMotherName"
        :isFemaleMotherDeceased="data.isFemaleMotherDeceased"
        :isShowFemaleFirst="data.isShowFemaleFirst"
        :isShowDeceasedAsFlower="data.isShowDeceasedAsFlower"
        :greetingsTitle="data.greetingsTitle"
        :greetingsContent="data.greetingsContent"
        :greetingsImageUrls="data.greetingsImageUrls"
        :date="data.date"
        :address="data.address"
        :detailAddress="data.detailAddress"
        :detailDirections="data.detailDirections"
        :directionsImageUrls="data.directionsImageUrls"
        :isMapVisible="data.isMapVisible"
        :isNaviVisible="data.isNaviVisible"
        :geocodeX="data.geocodeX"
        :geocodeY="data.geocodeY"
        :noticeTitle="data.noticeTitle"
        :noticeContent="data.noticeContent"
        :closingsContent="data.closingsContent"
        :maleContactName1="data.maleContactName1"
        :maleContactPhoneNumber1="data.maleContactPhoneNumber1"
        :maleContactName2="data.maleContactName2"
        :maleContactPhoneNumber2="data.maleContactPhoneNumber2"
        :maleContactName3="data.maleContactName3"
        :maleContactPhoneNumber3="data.maleContactPhoneNumber3"
        :femaleContactName1="data.femaleContactName1"
        :femaleContactPhoneNumber1="data.femaleContactPhoneNumber1"
        :femaleContactName2="data.femaleContactName2"
        :femaleContactPhoneNumber2="data.femaleContactPhoneNumber2"
        :femaleContactName3="data.femaleContactName3"
        :femaleContactPhoneNumber3="data.femaleContactPhoneNumber3"
    />
    <div v-else>Loading...</div>
</template>

<style lang="ts" scoped></style>

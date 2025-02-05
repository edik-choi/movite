<script setup lang="ts">
const items = ref<Array<any>>([])
const router = useRouter()
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { InvitationTableHeader } from '~/data/domain/admin'

onMounted(async () => {
    try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get('/data')

        items.value = response.data
    } catch (error) {
        console.error('데이터 불러오기 오류:', error)
    }
})
const invitationEmptyMessage = '신청된 청첩장이 없습니다.'

const formattedDate = (item: string) => {
    return dayjs(new Date(item)).locale('ko').format('YYYY년 M월 D일')
}

const goToView = (id: string) => {
    const url = `/view/${id}`
    window.open(url, '_blank')
}
</script>

<template>
    <Container>
        <TableContainer title="청첩장 목록">
            <Table :tableHeader="InvitationTableHeader">
                <TableItem v-for="(item, index) in items" :key="index">
                    <li>
                        {{ formattedDate(item.date) }}
                    </li>
                    <li>{{ `${item.maleName} · ${item.femaleName}` }}</li>
                    <li>{{ item.id }}</li>
                    <li><button @click="goToView(item.id)">VIEW</button></li>
                </TableItem>
                <TableItem
                    v-if="!items.length"
                    isEmpty
                    :emptyMessage="invitationEmptyMessage"
                />
            </Table>
        </TableContainer>
    </Container>
</template>

<style lang="scss" scoped></style>

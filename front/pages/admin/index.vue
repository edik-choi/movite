<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { InvitationTableHeader } from '~/data/domain/admin'

const items = ref<Array<any>>([])

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

const deleteInvitation = async (id: string) => {
    try {
        const { $axios } = useNuxtApp()
        await $axios.delete(`/data/${id}`)
        items.value = items.value.filter((item) => item.id !== id)
    } catch (error) {
        console.error('삭제 오류:', error)
    }
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
                    <li>
                        <button @click="deleteInvitation(item.id)">삭제</button>
                    </li>
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

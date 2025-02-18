<script lang="ts" setup>
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { InvitationTableHeader } from '~/data/domain/admin'

const router = useRouter()

const items = ref<Array<any>>([])

onMounted(async () => {
    try {
        const { $axios } = useNuxtApp()
        const token = localStorage.getItem('adminToken')

        if (!token) {
            alert('관리자 로그인이 필요합니다.')
            router.push('/admin/login')
            return
        }

        const response = await $axios.get('/admin/data', {
            headers: { Authorization: `Bearer ${token}` },
        })

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

const selectedId = ref('')
const selectedMaleName = ref('')
const selectedFemaleName = ref('')

const isDeleteInvitationModalVisible = ref(false)
const deleteInvitation = (id: string, maleName: string, femaleName: string) => {
    selectedId.value = id
    selectedMaleName.value = maleName
    selectedFemaleName.value = femaleName
    isDeleteInvitationModalVisible.value = true
}

const confirmDelete = async () => {
    isDeleteInvitationModalVisible.value = false

    try {
        const { $axios } = useNuxtApp()
        const adminToken = localStorage.getItem('adminToken')

        // 🔹 관리자 로그인 여부 확인
        if (adminToken) {
            console.log('관리자로 데이터 삭제 요청')
            await $axios.delete(`/admin/data/${selectedId.value}`, {
                headers: { Authorization: `Bearer ${adminToken}` },
            })
            items.value = items.value.filter(
                (item) => item.id !== selectedId.value
            )
            return
        }

        // 🔹 일반 사용자 로그인 여부 확인
        const storedUser = localStorage.getItem('naverUser')
        if (!storedUser) {
            alert('로그인이 필요합니다.')
            return
        }

        const user = JSON.parse(storedUser)
        const userId = user.id

        // 🔹 일반 사용자 데이터 삭제 요청
        console.log(`사용자 ${userId} 데이터 삭제 요청`)
        await $axios.delete(`/data/${userId}/${selectedId.value}`)
        items.value = items.value.filter((item) => item.id !== selectedId.value)
    } catch (error) {
        console.error('삭제 오류:', error)
    }
}

const cancelDelete = () => {
    isDeleteInvitationModalVisible.value = false
}
</script>

<template>
    <TableContainer title="청첩장 목록">
        <Table :tableHeader="InvitationTableHeader">
            <TableItem v-for="(item, index) in items" :key="index">
                <li>
                    {{ formattedDate(item.date) }}
                </li>
                <li>{{ `${item.maleName} · ${item.femaleName}` }}</li>
                <li>{{ item.id }}</li>
                <li>{{ item.isFinalized ? '확정 완료' : '작업 중' }}</li>
                <li>
                    <Button name="청첩장 열기" @click="goToView(item.id)" />
                </li>
                <li>
                    <Button
                        lineType
                        name="삭제"
                        @click="
                            deleteInvitation(
                                item.id,
                                item.maleName,
                                item.femaleName
                            )
                        "
                    />
                </li>
            </TableItem>
            <TableItem
                v-if="!items.length"
                isEmpty
                :emptyMessage="invitationEmptyMessage"
            />
        </Table>
    </TableContainer>

    <Modal v-if="isDeleteInvitationModalVisible">
        <div>
            {{ `${selectedMaleName} · ${selectedFemaleName}, ${selectedId}` }}
        </div>
        해당 청첩장을 삭제하시겠습니까?
        <div style="display: flex; gap: 10px">
            <Button lineType name="취소" @click="cancelDelete" />
            <Button name="삭제" @click="confirmDelete" />
        </div>
    </Modal>
</template>

<style lang="scss" scoped></style>

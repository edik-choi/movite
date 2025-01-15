<script lang="ts" setup>
import type { DropDown } from '@/model/ui/DropDown'

interface Props {
    initValue?: string
    selectList: DropDown[]
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'selectedItem', id: number, label: string): void
}>()

const isListShow = ref(false)
const handleShowList = () => {
    isListShow.value = !isListShow.value
}

const selectedId = ref()
const selectedLabel = ref()
const handleSelect = (id: number, label: string) => {
    selectedId.value = id
    selectedLabel.value = label
    handleShowList()
}
</script>

<template>
    <div class="dropdown_wrap">
        <input
            type="text"
            :value="`${selectedLabel ? selectedLabel : '선택'}`"
            @click="handleShowList"
            readonly
        />
        <div v-show="isListShow" class="dropdown_list_wrap">
            <button
                v-for="item in selectList"
                :key="item.id"
                :class="{ selected: item.label === selectedLabel }"
                @click="handleSelect(item.id, item.label)"
            >
                {{ item.label }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown_wrap {
    position: relative;
    input {
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        cursor: pointer;
    }
    .dropdown_list_wrap {
        display: flex;
        position: absolute;
        flex-flow: column;
        top: calc(100% + 4px);
        width: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        button {
            height: 30px;
            padding: 0 10px;
            text-align: left;
            transition: 0.2s;
            & + button {
                margin-top: 2px;
            }
            &.selected {
                font-weight: 600;
            }
            &:hover {
                background: #fafafa;
            }
        }
    }
}
</style>

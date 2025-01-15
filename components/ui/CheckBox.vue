<script lang="ts" setup>
interface Props {
    id: string
    name?: string
    label?: string
    checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'input', value: boolean): void
}>()

const updateValue = (event: Event) => {
    const input = event.target as HTMLInputElement
    emits('input', input.checked)
}
</script>

<template>
    <div class="checkbox_wrap">
        <input type="checkbox" :id="id" :name="name" :checked="checked" @input="updateValue" />
        <label :for="id">
            <span v-if="label">{{ label }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.checkbox_wrap {
    display: flex;
    align-items: center;
    height: 16px;
    input {
        display: none;
        &:checked {
            & + label {
                &::after {
                    content: '';
                    position: absolute;
                    left: 4px;
                    width: 8px;
                    height: 8px;
                    background: #999;
                    border-radius: 8px;
                    transition: 0.3s;
                }
            }
        }
        & + label {
            display: flex;
            position: relative;
            align-items: center;
            height: 16px;
            padding-left: 20px;
            cursor: pointer;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                width: 16px;
                height: 16px;
                border: 1px solid #ccc;
                border-radius: 16px;
            }
            &::after {
                content: '';
                background: transparent;
            }
        }
    }
}
</style>

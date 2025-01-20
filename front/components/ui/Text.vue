<script lang="ts" setup>
interface Props {
    initValue: string
    placeholder?: string
    full?: boolean
    short?: boolean
    readOnly?: boolean
    disabled?: boolean
    clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'input', value: string): void
}>()

const updateValue = (event: Event) => {
    const input = event.target as HTMLInputElement
    emits('input', input.value)
}
</script>

<template>
    <div class="text_wrap" :class="{ full: full, short: short }">
        <input
            type="text"
            :value="initValue"
            :class="{ clickable: clickable }"
            :placeholder="placeholder"
            :readOnly="readOnly"
            :disabled="disabled"
            @input="updateValue"
        />
    </div>
</template>

<style lang="scss" scoped>
.text_wrap {
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    &.full {
        width: 100%;
    }
    &.short {
        width: 200px;
    }
    input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        &.clickable {
            cursor: pointer;
        }
    }
}
</style>

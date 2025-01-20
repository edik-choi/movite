<script lang="ts" setup>
interface Props {
    initValue?: string
    placeholder?: string
    disabled?: boolean
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
    <div class="text_area_wrap">
        <textarea :value="initValue" :placeholder="placeholder" @input="updateValue" />
    </div>
</template>

<style lang="scss" scoped>
.text_area_wrap {
    width: 100%;
    textarea {
        width: 100%;
        height: 80px;
        padding: 10px 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        resize: none;
    }
}
</style>

<script lang="ts" setup>
interface Props {
    name: string
    lineType?: boolean
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emits = defineEmits<{
    (e: 'click'): void
}>()

const handleClick = () => {
    emits('click')
}
</script>

<template>
    <div class="button_wrap">
        <button
            :class="{ line: lineType }"
            :disabled="disabled"
            @click="handleClick"
        >
            {{ name }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button_wrap {
    button {
        height: 40px;
        padding: 10px 16px;
        background: #000;
        border: 1px solid #000;
        border-radius: 8px;
        color: #fff;
        box-sizing: border-box;
        &.line {
            color: #000;
            background: #fff;
            border: 1px solid #000;
        }
    }
    & + .button_wrap {
        margin-left: 10px;
    }
}
</style>

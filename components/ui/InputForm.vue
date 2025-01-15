<script lang="ts" setup>
interface Props {
    title: string
    required?: boolean
    devided?: boolean
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="input_form_wrap" :class="{ devided: devided }">
        <p class="input_form_title" :class="{ required: required }">{{ title }}</p>
        <div class="input_form_contents_wrap">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.input_form_wrap {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 0;
    &.devided {
        border-top: 1px solid #eee;
    }
    .input_form_title {
        display: flex;
        align-items: center;
        flex: none;
        width: 160px;
        height: 40px;
        &.required {
            &::after {
                content: '(필수)';
                margin-left: 4px;
                font-size: 14px;
                color: #999;
            }
        }
    }
    .input_form_contents_wrap {
        flex: 1;
    }
}
</style>

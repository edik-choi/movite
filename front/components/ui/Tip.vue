<script lang="ts" setup>
interface Props {
    text: string
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="tip_wrap">
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.tip_wrap {
    margin-top: 10px;
    p {
        display: flex;
        position: relative;
        align-items: center;
        padding-left: 18px;
        color: #ccc;
        &::before {
            content: '!';
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            top: -1px;
            left: 0;
            width: 14px;
            height: 14px;
            border: 1px solid #ccc;
            border-radius: 14px;
            font-size: 10px;
            font-weight: 700;
            line-height: 1;
        }
    }
}
</style>

<script lang="ts" setup>
interface Props {
    title: string
    expanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const isContentsShow = ref(props.expanded ? true : false)
const openContents = () => {
    isContentsShow.value = !isContentsShow.value
}
</script>

<template>
    <div class="accordion_wrap">
        <button class="accordion_button" @click="openContents" :class="{ expanded: isContentsShow }">
            {{ title }}
        </button>
        <div v-show="isContentsShow" class="accordion_contents_wrap">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion_wrap {
    width: 100%;
    border-bottom: 1px solid #ccc;
    .accordion_button {
        display: flex;
        position: relative;
        align-items: center;
        width: 100%;
        height: 48px;
        padding: 0 20px;
        font-weight: 600;
        text-align: left;
        &::after {
            content: '';
            position: absolute;
            right: 20px;
            width: 24px;
            height: 24px;
            background: url(/assets/images/arrow.svg) no-repeat center 100%;
            transform: rotate(90deg);
            transition: 0.2s;
        }
        &.expanded {
            &::after {
                transform: rotate(-90deg);
            }
        }
    }
    .accordion_contents_wrap {
        width: 100%;
        padding: 20px 20px;
        border-top: 1px solid #eee;
    }
}
</style>

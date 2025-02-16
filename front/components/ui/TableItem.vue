<script lang="ts" setup>
interface Props {
    isEmpty?: boolean
    emptyMessage?: string
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <ul class="table_item_wrap">
        <slot />
        <li v-if="isEmpty" class="empty">{{ emptyMessage }}</li>
    </ul>
</template>

<style lang="scss">
.table_item_wrap {
    display: flex;
    list-style: none;
    li {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 10px;
        border-bottom: 1px solid #eee;
        & + li {
            border-left: 1px solid #eee;
        }
        &.empty {
            justify-content: center;
            padding: 100px 0;
            color: #999;
            text-align: center;
        }
    }
}
</style>

<script lang="ts" setup>
interface Props {
    title?: string
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="table_container_wrap">
        <p class="title">{{ title }}</p>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.table_container_wrap {
    width: 100%;
    margin-top: 30px;
    .title {
        font-size: 20px;
        font-weight: 600;
    }
}
</style>

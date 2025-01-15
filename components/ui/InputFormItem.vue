<script lang="ts" setup></script>

<template>
    <div class="input_form_item_wrap">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.input_form_item_wrap {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-height: 40px;
    & + .input_form_item_wrap {
        margin-top: 20px;
    }
}
</style>

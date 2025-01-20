<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'close'): void
}>()

const handleClose = () => {
    emits('close')
}
</script>

<template>
    <div class="modal_wrap">
        <button class="modal_dimm" @click="handleClose">
            <div class="modal_contents_wrap">
                <slot />
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.modal_wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    .modal_dimm {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        cursor: default;
        .modal_contents_wrap {
            width: 600px;
            height: fit-content;
            max-height: 400px;
            background: #fff;
            border-radius: 8px;
            overflow-y: scroll;
        }
    }
}
</style>

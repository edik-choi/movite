<script lang="ts" setup></script>

<template>
    <div class="container">
        <slot />
        <div v-if="$slots.side && $slots.contents" class="flex_wrap">
            <div class="container_side_wrap">
                <slot name="side" />
            </div>
            <div class="container_contents_wrap">
                <slot name="contents" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 60px 20px;
    .flex_wrap {
        display: flex;
        .container_side_wrap {
            position: fixed;
        }
        .container_contents_wrap {
            flex: 1;
            margin-left: 400px;
        }
    }
}
</style>

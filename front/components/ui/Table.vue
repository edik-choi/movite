<script lang="ts" setup>
import type { TableHeader } from '~/model/ui/Table'

interface Props {
    tableHeader: TableHeader[]
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
    <div class="table_wrap">
        <ul class="table_header_wrap">
            <li v-for="(header, index) in tableHeader" :key="index">
                {{ header.content }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.table_wrap {
    width: 100%;
    margin-top: 20px;
    .table_header_wrap {
        display: flex;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        list-style: none;
        li {
            width: 100%;
            padding: 10px 10px;
            font-weight: 600;
            & + li {
                border-left: 1px solid #eee;
            }
        }
    }
    .table_body_wrap {
        display: flex;
        list-style: none;
        li {
            width: 100%;
            padding: 10px 10px;
            border-bottom: 1px solid #eee;
            & + li {
                border-left: 1px solid #eee;
            }
        }
    }
}
</style>

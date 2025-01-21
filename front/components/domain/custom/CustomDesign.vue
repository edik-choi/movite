<script lang="ts" setup>
import { fontList } from '@/data/domain/custom'
import { themeColorList } from '@/data/domain/custom'

const emits = defineEmits<{
    (e: 'selectFontIndex', index: number): void
    (e: 'selectThemeColorIndex', index: number): void
}>()

const fontIndex = ref(0)
const selectFontIndex = (index: number) => {
    fontIndex.value = index
    emits('selectFontIndex', fontIndex.value)
}

const themeColorIndex = ref(0)
const selectThemeColorIndex = (index: number) => {
    themeColorIndex.value = index
    emits('selectThemeColorIndex', themeColorIndex.value)
}
</script>

<template>
    <InputForm title="폰트">
        <InputFormItem>
            <Radio
                v-for="(font, index) in fontList"
                :key="index"
                :id="font.id"
                :class="font.id"
                :name="font.name"
                :label="font.label"
                :checked="fontIndex === index"
                @input="selectFontIndex(index)"
            />
        </InputFormItem>
    </InputForm>
    <InputForm title="테마 컬러">
        <InputFormItem>
            <Radio
                v-for="(color, index) in themeColorList"
                :key="index"
                :id="color.id"
                :class="color.id"
                :name="color.name"
                :checked="themeColorIndex === index"
                @input="selectThemeColorIndex(index)"
            >
                <span class="label_theme_color" :style="{ background: color.background }" />
            </Radio>
        </InputFormItem>
    </InputForm>
    <InputForm title="테마 패턴"></InputForm>
</template>

<style lang="scss" scoped>
.label_theme_color {
    width: 30px;
    height: 30px;
    border-radius: 8px;
}
</style>

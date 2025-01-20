<script lang="ts" setup>
import { fontList } from '@/data/domain/custom'
import { themeColorList } from '@/data/domain/custom'

const emits = defineEmits<{
    (e: 'selectFontIndex', index: number): void
    (e: 'selectThemeColorIndex', index: number): void
}>()

const selectedFontIndex = ref(0)
const handleSelectedFontIndex = (index: number) => {
    selectedFontIndex.value = index
    emits('selectFontIndex', selectedFontIndex.value)
}

const selectedThemeColorIndex = ref(0)
const handleSelectedThemeColorIndex = (index: number) => {
    selectedThemeColorIndex.value = index
    emits('selectThemeColorIndex', selectedThemeColorIndex.value)
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
                :checked="selectedFontIndex === index"
                @input="handleSelectedFontIndex(index)"
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
                :checked="selectedThemeColorIndex === index"
                @input="handleSelectedThemeColorIndex(index)"
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

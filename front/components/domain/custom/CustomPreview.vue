<script lang="ts" setup>
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { fontList, themeColorList } from '@/data/domain/custom'

interface Props {
    fontIndex: number
    themeColorIndex: number
    maleName: string
    maleRelation: string
    maleFatherName: string
    isMaleFatherDeceased: boolean
    maleMotherName: string
    isMaleMotherDeceased: boolean
    femaleName: string
    femaleRelation: string
    femaleFatherName: string
    isFemaleFatherDeceased: boolean
    femaleMotherName: string
    isFemaleMotherDeceased: boolean
    isShowFemaleFirst: boolean
    isShowDeceasedAsFlower: boolean
    greetingsTitle: string
    greetingsContent: string
    greetingsImageUrls: string[]
    date: Date
    address: string
    detailAddress: string
    detailDirections: string
    directionsImageUrls: string[]
    isMapVisible: boolean
    noticeTitle: string
    noticeContent: string
    closingsContent: string
    maleContactName1: string
    maleContactPhoneNumber1: string
    maleContactName2: string
    maleContactPhoneNumber2: string
    maleContactName3: string
    maleContactPhoneNumber3: string
    femaleContactName1: string
    femaleContactPhoneNumber1: string
    femaleContactName2: string
    femaleContactPhoneNumber2: string
    femaleContactName3: string
    femaleContactPhoneNumber3: string
}

const props = withDefaults(defineProps<Props>(), {})

dayjs.locale('ko')

const formattedSeletedDate = (date: Date) => {
    const minutes = date.getMinutes()
    if (minutes === 0) {
        return dayjs(date).locale('ko').format('YYYY년 M월 D일 A h시')
    } else {
        return dayjs(date).locale('ko').format('YYYY년 M월 D일 A h시 m분')
    }
}
</script>

<template>
    <div
        class="custom_preview_wrap"
        :class="fontList[fontIndex].id"
        :style="{ background: themeColorList[themeColorIndex].background }"
    >
        <div class="preview_contents_wrap">
            <div class="greetings_wrap">
                <img
                    class="greetings_image"
                    v-if="greetingsImageUrls.length > 0"
                    :src="greetingsImageUrls[0]"
                    alt="인사말 이미지"
                />
                <p class="greetings_title">{{ greetingsTitle }}</p>
                <p class="greetings_text" v-html="greetingsContent"></p>
            </div>
            <div class="organizers_wrap" :class="{ reverse: isShowFemaleFirst }">
                <p>
                    <span v-if="maleFatherName && isMaleFatherDeceased">{{
                        isShowDeceasedAsFlower ? '꽃' : '故人'
                    }}</span>
                    <span>{{ maleFatherName }}</span>
                    <span v-if="maleFatherName && maleMotherName">·</span>
                    <span v-if="maleMotherName && isMaleMotherDeceased">{{
                        isShowDeceasedAsFlower ? '꽃' : '故人'
                    }}</span>
                    <span>{{ maleMotherName }}</span>
                    <span v-if="(maleFatherName && maleRelation) || (maleMotherName && maleRelation)">의</span>
                    <span v-if="maleName && maleRelation" class="relation">{{ maleRelation }}</span>
                    <span v-if="maleName">{{ maleName }}</span>
                </p>
                <p>
                    <span v-if="femaleFatherName && isFemaleFatherDeceased">{{
                        isShowDeceasedAsFlower ? '꽃' : '故人'
                    }}</span>
                    <span>{{ femaleFatherName }}</span>
                    <span v-if="femaleFatherName && femaleMotherName">·</span>
                    <span v-if="femaleMotherName && isFemaleMotherDeceased">{{
                        isShowDeceasedAsFlower ? '꽃' : '故人'
                    }}</span>
                    <span>{{ femaleMotherName }}</span>
                    <span v-if="(femaleFatherName && femaleRelation) || (femaleMotherName && femaleRelation)">의</span>
                    <span v-if="femaleName && femaleRelation" class="relation">{{ femaleRelation }}</span>
                    <span v-if="femaleName">{{ femaleName }}</span>
                </p>
            </div>
            <div class="event_details_wrap">
                <p>
                    {{ formattedSeletedDate(date) }}
                </p>
                <p v-if="address" class="details_address_text">{{ address }}</p>
                <p v-if="address" class="details_address_text">{{ detailAddress }}</p>
                <div v-if="detailDirections" class="details_directions_wrap">
                    <p class="directions_title">오시는 길</p>
                    <p>{{ detailDirections }}</p>
                </div>
                <div v-if="directionsImageUrls.length > 0" class="directions_image_wrap">
                    <img :src="directionsImageUrls[0]" alt="오시는 길 이미지" />
                </div>
                <div v-if="isMapVisible" class="map_wrap">
                    <Map :address="address" />
                </div>
            </div>
        </div>
        <div v-if="noticeTitle" class="preview_contents_wrap">
            <div class="notice_wrap">
                <p class="notice_title_text">{{ noticeTitle }}</p>
                <p class="notice_content_text">{{ noticeContent }}</p>
            </div>
        </div>
        <div v-if="closingsContent" class="preview_contents_wrap">
            <div class="closings_wrap">
                <p class="closings_content_text">{{ closingsContent }}</p>
            </div>
        </div>
        <div v-if="maleContactName1" class="preview_contents_wrap">
            <div class="contact_wrap">
                <p class="contact_title_text">신랑측 연락처</p>
                <div class="contact_content_wrap" v-if="maleContactName1">
                    <p>{{ maleContactName1 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
                <div class="contact_content_wrap" v-if="maleContactName2">
                    <p>{{ maleContactName2 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
                <div class="contact_content_wrap" v-if="maleContactName3">
                    <p>{{ maleContactName3 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="femaleContactName1" class="preview_contents_wrap">
            <div class="contact_wrap">
                <p class="contact_title_text">신부측 연락처</p>
                <div class="contact_content_wrap" v-if="femaleContactName1">
                    <p>{{ femaleContactName1 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
                <div class="contact_content_wrap" v-if="femaleContactName2">
                    <p>{{ femaleContactName2 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
                <div class="contact_content_wrap" v-if="femaleContactName3">
                    <p>{{ femaleContactName3 }}</p>
                    <div class="content_buttons_wrap">
                        <button>통화</button>
                        <button>복사</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.custom_preview_wrap {
    width: 380px;
    height: 600px;
    padding: 20px 20px;
    margin-right: 30px;
    border: 1px solid #eee;
    border-radius: 8px;
    transition: 0.3s;
    overflow-y: scroll;
    .preview_contents_wrap {
        padding: 50px 20px;
        background: #fff;
        border-radius: 8px;
        & + .preview_contents_wrap {
            margin-top: 50px;
        }
        p,
        span {
            text-align: center;
            color: #666;
        }
        .greetings_wrap {
            .greetings_image {
                width: 100%;
                border-radius: 8px;
            }
            .greetings_title {
                margin-top: 40px;
                font-weight: 600;
            }
            .greetings_text {
                margin-top: 40px;
                line-height: 1.6;
                white-space: pre-line;
            }
        }
        .organizers_wrap {
            display: flex;
            flex-flow: column;
            gap: 10px;
            margin-top: 40px;
            &.reverse {
                flex-flow: column-reverse;
            }
            p {
                text-align: center;
                span {
                    display: inline-block;
                    &.relation {
                        min-width: 50px;
                    }
                    & + span {
                        margin-left: 4px;
                    }
                }
            }
        }
        .event_details_wrap {
            display: flex;
            flex-flow: column;
            gap: 10px;
            margin-top: 40px;
            .directions_image_wrap {
                margin-top: 40px;
                img {
                    width: 100%;
                    border-radius: 8px;
                }
            }
            .map_wrap {
                margin-top: 40px;
            }
        }
        .notice_wrap {
            .notice_title_text {
                font-weight: 600;
            }
            .notice_content_text {
                margin-top: 20px;
                line-height: 1.6;
                white-space: pre-line;
            }
        }
        .contact_wrap {
            .contact_title_text {
                font-weight: 600;
            }
            .contact_content_wrap {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                .content_buttons_wrap {
                    display: flex;
                }
            }
        }
    }
}
</style>

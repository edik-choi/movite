import { _ as __nuxt_component_0 } from "./Container-BWCA1HNG.js";
import { defineComponent, mergeProps, unref, useSSRContext, ref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, isRef, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import dayjs from "dayjs";
import "dayjs/locale/ko.js";
import { _ as _export_sfc } from "../server.mjs";
import VueDatePicker from "@vuepic/vue-datepicker";
import { VueDaumPostcode } from "vue-daum-postcode";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const fontList = [
  {
    id: "FONT_001",
    name: "FONT",
    label: "폰트Type1"
  },
  {
    id: "FONT_002",
    name: "FONT",
    label: "폰트Type2"
  },
  {
    id: "FONT_003",
    name: "FONT",
    label: "폰트Type3"
  },
  {
    id: "FONT_004",
    name: "FONT",
    label: "폰트Type4"
  },
  {
    id: "FONT_005",
    name: "FONT",
    label: "폰트Type5"
  }
];
const themeColorList = [
  {
    id: "THEME_COLOR_001",
    name: "THEME_COLOR",
    primary: "rgba(237, 231, 217 , 1)",
    background: "rgba(237, 231, 217 , 0.3)"
  },
  {
    id: "THEME_COLOR_002",
    name: "THEME_COLOR",
    primary: "rgba(231, 210, 204, 1)",
    background: "rgba(231, 210, 204, 0.3)"
  },
  {
    id: "THEME_COLOR_003",
    name: "THEME_COLOR",
    primary: "rgba(164, 150, 148, 1)",
    background: "rgba(164, 150, 148, 0.3)"
  },
  {
    id: "THEME_COLOR_004",
    name: "THEME_COLOR",
    primary: "rgba(115, 107, 96, 1)",
    background: "rgba(115, 107, 96, 0.3)"
  },
  {
    id: "THEME_COLOR_005",
    name: "THEME_COLOR",
    primary: "rgba(134, 139, 142, 1)",
    background: "rgba(134, 139, 142, 0.3)"
  }
];
const nameSample = {
  male: "민수",
  maleFather: "(예시) 김용훈",
  maleMother: "임윤정",
  female: "지윤",
  femaleFather: "(예시) 한동현",
  femaleMother: "최은희"
};
const greetingsSample = {
  title: "저희 결혼합니다",
  content: "두 사람의 인연이 사랑으로 피어나<br/>결혼이라는 결실을 맺게 되었습니다.<br /><br/>소중한 분들을 모시고<br />그 기쁨을 나누고자 하오니<br/>부디 참석하셔서<br />자리를 빛내 주시기 바랍니다."
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CustomPreview",
  __ssrInlineRender: true,
  props: {
    selectedFontIndex: {},
    selectedThemeColorIndex: {},
    maleName: {},
    maleRelation: {},
    maleFatherName: {},
    isMaleFatherLate: { type: Boolean },
    maleMotherName: {},
    isMaleMotherLate: { type: Boolean },
    femaleName: {},
    femaleRelation: {},
    femaleFatherName: {},
    isFemaleFatherLate: { type: Boolean },
    femaleMotherName: {},
    isFemaleMotherLate: { type: Boolean },
    isShowFemaleFirst: { type: Boolean },
    isShowLateAsFlower: { type: Boolean },
    greetingsTitle: {},
    greetingsContent: {},
    selectedDate: {},
    selectedAddress: {},
    detailedAddress: {},
    noticeTitle: {},
    noticeContent: {},
    closingsContent: {},
    maleContactName1: {},
    maleContactPhoneNumber1: {},
    maleContactName2: {},
    maleContactPhoneNumber2: {},
    maleContactName3: {},
    maleContactPhoneNumber3: {},
    femaleContactName1: {},
    femaleContactPhoneNumber1: {},
    femaleContactName2: {},
    femaleContactPhoneNumber2: {},
    femaleContactName3: {},
    femaleContactPhoneNumber3: {}
  },
  setup(__props) {
    dayjs.locale("ko");
    const formattedSeletedDate = (date) => {
      const minutes = date.getMinutes();
      if (minutes === 0) {
        return dayjs(date).locale("ko").format("YYYY년 M월 D일 A h시");
      } else {
        return dayjs(date).locale("ko").format("YYYY년 M월 D일 A h시 m분");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["custom_preview_wrap", unref(fontList)[_ctx.selectedFontIndex].id],
        style: { background: unref(themeColorList)[_ctx.selectedThemeColorIndex].background }
      }, _attrs))} data-v-7a5c669b><div class="preview_contents_wrap" data-v-7a5c669b><div class="greetings_wrap" data-v-7a5c669b><p class="greetings_title" data-v-7a5c669b>${ssrInterpolate(_ctx.greetingsTitle)}</p><p class="greetings_text" data-v-7a5c669b>${_ctx.greetingsContent ?? ""}</p></div><div class="${ssrRenderClass([{ reverse: _ctx.isShowFemaleFirst }, "organizers_wrap"])}" data-v-7a5c669b><p data-v-7a5c669b>`);
      if (_ctx.maleFatherName && _ctx.isMaleFatherLate) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.isShowLateAsFlower ? "꽃" : "故人")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.maleFatherName)}</span>`);
      if (_ctx.maleFatherName && _ctx.maleMotherName) {
        _push(`<span data-v-7a5c669b>·</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.maleMotherName && _ctx.isMaleMotherLate) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.isShowLateAsFlower ? "꽃" : "故人")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.maleMotherName)}</span>`);
      if (_ctx.maleFatherName && _ctx.maleRelation || _ctx.maleMotherName && _ctx.maleRelation) {
        _push(`<span data-v-7a5c669b>의</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.maleName && _ctx.maleRelation) {
        _push(`<span class="relation" data-v-7a5c669b>${ssrInterpolate(_ctx.maleRelation)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.maleName) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.maleName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><p data-v-7a5c669b>`);
      if (_ctx.femaleFatherName && _ctx.isFemaleFatherLate) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.isShowLateAsFlower ? "꽃" : "故人")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.femaleFatherName)}</span>`);
      if (_ctx.femaleFatherName && _ctx.femaleMotherName) {
        _push(`<span data-v-7a5c669b>·</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.femaleMotherName && _ctx.isFemaleMotherLate) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.isShowLateAsFlower ? "꽃" : "故人")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.femaleMotherName)}</span>`);
      if (_ctx.femaleFatherName && _ctx.femaleRelation || _ctx.femaleMotherName && _ctx.femaleRelation) {
        _push(`<span data-v-7a5c669b>의</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.femaleName && _ctx.femaleRelation) {
        _push(`<span class="relation" data-v-7a5c669b>${ssrInterpolate(_ctx.femaleRelation)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.femaleName) {
        _push(`<span data-v-7a5c669b>${ssrInterpolate(_ctx.femaleName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="event_details_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(formattedSeletedDate(_ctx.selectedDate))}</p>`);
      if (_ctx.selectedAddress) {
        _push(`<p class="details_address_text" data-v-7a5c669b>${ssrInterpolate(_ctx.selectedAddress)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.selectedAddress) {
        _push(`<p class="details_address_text" data-v-7a5c669b>${ssrInterpolate(_ctx.detailedAddress)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.noticeTitle) {
        _push(`<div class="preview_contents_wrap" data-v-7a5c669b><div class="notice_wrap" data-v-7a5c669b><p class="notice_title_text" data-v-7a5c669b>${ssrInterpolate(_ctx.noticeTitle)}</p><p class="notice_content_text" data-v-7a5c669b>${ssrInterpolate(_ctx.noticeContent)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.closingsContent) {
        _push(`<div class="preview_contents_wrap" data-v-7a5c669b><div class="closings_wrap" data-v-7a5c669b><p class="closings_content_text" data-v-7a5c669b>${ssrInterpolate(_ctx.closingsContent)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.maleContactName1) {
        _push(`<div class="preview_contents_wrap" data-v-7a5c669b><div class="contact_wrap" data-v-7a5c669b><p class="contact_title_text" data-v-7a5c669b>신랑측 연락처</p>`);
        if (_ctx.maleContactName1) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.maleContactName1)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.maleContactName2) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.maleContactName2)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.maleContactName3) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.maleContactName3)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.femaleContactName1) {
        _push(`<div class="preview_contents_wrap" data-v-7a5c669b><div class="contact_wrap" data-v-7a5c669b><p class="contact_title_text" data-v-7a5c669b>신부측 연락처</p>`);
        if (_ctx.femaleContactName1) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.femaleContactName1)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.femaleContactName2) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.femaleContactName2)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.femaleContactName3) {
          _push(`<div class="contact_content_wrap" data-v-7a5c669b><p data-v-7a5c669b>${ssrInterpolate(_ctx.femaleContactName3)}</p><div class="content_buttons_wrap" data-v-7a5c669b><button data-v-7a5c669b>통화</button><button data-v-7a5c669b>복사</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomPreview.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7a5c669b"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    title: {},
    expanded: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isContentsShow = ref(props.expanded ? true : false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion_wrap" }, _attrs))} data-v-21ab403b><button class="${ssrRenderClass([{ expanded: unref(isContentsShow) }, "accordion_button"])}" data-v-21ab403b>${ssrInterpolate(_ctx.title)}</button><div style="${ssrRenderStyle(unref(isContentsShow) ? null : { display: "none" })}" class="accordion_contents_wrap" data-v-21ab403b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Accordion.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-21ab403b"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "InputForm",
  __ssrInlineRender: true,
  props: {
    title: {},
    required: { type: Boolean },
    devided: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["input_form_wrap", { devided: _ctx.devided }]
      }, _attrs))} data-v-bc05d044><p class="${ssrRenderClass([{ required: _ctx.required }, "input_form_title"])}" data-v-bc05d044>${ssrInterpolate(_ctx.title)}</p><div class="input_form_contents_wrap" data-v-bc05d044>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputForm.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-bc05d044"]]);
const _sfc_main$g = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input_form_item_wrap" }, _attrs))} data-v-ee39a821>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputFormItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee39a821"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    label: {},
    checked: { type: Boolean }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "radio_wrap" }, _attrs))} data-v-cfc0a345><input type="radio"${ssrRenderAttr("id", _ctx.id)}${ssrIncludeBooleanAttr(_ctx.checked) ? " checked" : ""}${ssrRenderAttr("name", _ctx.name)} data-v-cfc0a345><label${ssrRenderAttr("for", _ctx.id)} data-v-cfc0a345>`);
      if (_ctx.label) {
        _push(`<span data-v-cfc0a345>${ssrInterpolate(_ctx.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Radio.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-cfc0a345"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CustomDesign",
  __ssrInlineRender: true,
  emits: ["selectFontIndex", "selectThemeColorIndex"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const selectedFontIndex = ref(0);
    const handleSelectedFontIndex = (index) => {
      selectedFontIndex.value = index;
      emits("selectFontIndex", selectedFontIndex.value);
    };
    const selectedThemeColorIndex = ref(0);
    const handleSelectedThemeColorIndex = (index) => {
      selectedThemeColorIndex.value = index;
      emits("selectThemeColorIndex", selectedThemeColorIndex.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Radio = __nuxt_component_2$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, { title: "폰트" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(fontList), (font, index) => {
                    _push3(ssrRenderComponent(_component_Radio, {
                      key: index,
                      id: font.id,
                      class: font.id,
                      name: font.name,
                      label: font.label,
                      checked: unref(selectedFontIndex) === index,
                      onInput: ($event) => handleSelectedFontIndex(index)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fontList), (font, index) => {
                      return openBlock(), createBlock(_component_Radio, {
                        key: index,
                        id: font.id,
                        class: font.id,
                        name: font.name,
                        label: font.label,
                        checked: unref(selectedFontIndex) === index,
                        onInput: ($event) => handleSelectedFontIndex(index)
                      }, null, 8, ["id", "class", "name", "label", "checked", "onInput"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(fontList), (font, index) => {
                    return openBlock(), createBlock(_component_Radio, {
                      key: index,
                      id: font.id,
                      class: font.id,
                      name: font.name,
                      label: font.label,
                      checked: unref(selectedFontIndex) === index,
                      onInput: ($event) => handleSelectedFontIndex(index)
                    }, null, 8, ["id", "class", "name", "label", "checked", "onInput"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "테마 컬러" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(themeColorList), (color, index) => {
                    _push3(ssrRenderComponent(_component_Radio, {
                      key: index,
                      id: color.id,
                      class: color.id,
                      name: color.name,
                      checked: unref(selectedThemeColorIndex) === index,
                      onInput: ($event) => handleSelectedThemeColorIndex(index)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="label_theme_color" style="${ssrRenderStyle({ background: color.background })}" data-v-87148b5b${_scopeId3}></span>`);
                        } else {
                          return [
                            createVNode("span", {
                              class: "label_theme_color",
                              style: { background: color.background }
                            }, null, 4)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColorList), (color, index) => {
                      return openBlock(), createBlock(_component_Radio, {
                        key: index,
                        id: color.id,
                        class: color.id,
                        name: color.name,
                        checked: unref(selectedThemeColorIndex) === index,
                        onInput: ($event) => handleSelectedThemeColorIndex(index)
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "label_theme_color",
                            style: { background: color.background }
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1032, ["id", "class", "name", "checked", "onInput"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColorList), (color, index) => {
                    return openBlock(), createBlock(_component_Radio, {
                      key: index,
                      id: color.id,
                      class: color.id,
                      name: color.name,
                      checked: unref(selectedThemeColorIndex) === index,
                      onInput: ($event) => handleSelectedThemeColorIndex(index)
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "label_theme_color",
                          style: { background: color.background }
                        }, null, 4)
                      ]),
                      _: 2
                    }, 1032, ["id", "class", "name", "checked", "onInput"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "테마 패턴" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomDesign.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-87148b5b"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    initValue: {},
    placeholder: {},
    full: { type: Boolean },
    short: { type: Boolean },
    readOnly: { type: Boolean },
    disabled: { type: Boolean },
    clickable: { type: Boolean }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["text_wrap", { full: _ctx.full, short: _ctx.short }]
      }, _attrs))} data-v-c9b534d5><input type="text"${ssrRenderAttr("value", _ctx.initValue)} class="${ssrRenderClass({ clickable: _ctx.clickable })}"${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrIncludeBooleanAttr(_ctx.readOnly) ? " readonly" : ""}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} data-v-c9b534d5></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Text.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-c9b534d5"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CheckBox",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    label: {},
    checked: { type: Boolean }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox_wrap" }, _attrs))} data-v-b53938ef><input type="checkbox"${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("name", _ctx.name)}${ssrIncludeBooleanAttr(_ctx.checked) ? " checked" : ""} data-v-b53938ef><label${ssrRenderAttr("for", _ctx.id)} data-v-b53938ef>`);
      if (_ctx.label) {
        _push(`<span data-v-b53938ef>${ssrInterpolate(_ctx.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/CheckBox.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-b53938ef"]]);
const maleNamePlaceholder = "이름(신랑)";
const maleRelationPlaceholder = "관계적 호칭";
const maleFatherNamePlaceholder = "성함(아버지)";
const maleMotherNamePlaceholder = "성함(어머니)";
const femaleNamePlaceholder = "이름(신부)";
const femaleRelationPlaceholder = "관계적 호칭";
const femaleFatherNamePlaceholder = "성함(아버지)";
const femaleMotherNamePlaceholder = "성함(어머니)";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CustomOrganizers",
  __ssrInlineRender: true,
  emits: ["updateMaleName", "updateMaleRelation", "selectMaleFatherLate", "updateMaleFatherName", "selectMaleMotherLate", "updateMaleMotherName", "updateFemaleName", "updateFemaleRelation", "selectFemaleFatherLate", "updateFemaleFatherName", "selectFemaleMotherLate", "updateFemaleMotherName", "selectShowFemaleFirst", "selectShowLateAsFlower"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const maleName = ref("");
    const updateMaleName = (_value) => {
      maleName.value = _value;
      emits("updateMaleName", maleName.value);
    };
    const maleRelation = ref("아들");
    const updateMaleRelation = (_value) => {
      maleRelation.value = _value;
      emits("updateMaleRelation", maleRelation.value);
    };
    const isMaleFatherLate = ref(false);
    const selectMaleFatherLate = (_value) => {
      isMaleFatherLate.value = _value;
      emits("selectMaleFatherLate", isMaleFatherLate.value);
    };
    const maleFatherName = ref("");
    const updateMaleFatherName = (_value) => {
      maleFatherName.value = _value;
      emits("updateMaleFatherName", maleFatherName.value);
    };
    const isMaleMotherLate = ref(false);
    const selectMaleMotherLate = (_value) => {
      isMaleMotherLate.value = _value;
      emits("selectMaleMotherLate", isMaleMotherLate.value);
    };
    const maleMotherName = ref("");
    const updateMaleMotherName = (_value) => {
      maleMotherName.value = _value;
      emits("updateMaleMotherName", maleMotherName.value);
    };
    const femaleName = ref("");
    const updateFemaleName = (_value) => {
      femaleName.value = _value;
      emits("updateFemaleName", femaleName.value);
    };
    const femaleRelation = ref("딸");
    const updateFemaleRelation = (_value) => {
      femaleRelation.value = _value;
      emits("updateFemaleRelation", femaleRelation.value);
    };
    const isFemaleFatherLate = ref(false);
    const selectFemaleFatherLate = (_value) => {
      isFemaleFatherLate.value = _value;
      emits("selectFemaleFatherLate", isFemaleFatherLate.value);
    };
    const femaleFatherName = ref("");
    const updateFemaleFatherName = (_value) => {
      femaleFatherName.value = _value;
      emits("updateFemaleFatherName", femaleFatherName.value);
    };
    const isFemaleMotherLate = ref(false);
    const selectFemaleMotherLate = (_value) => {
      isFemaleMotherLate.value = _value;
      emits("selectFemaleMotherLate", isFemaleMotherLate.value);
    };
    const femaleMotherName = ref("");
    const updateFemaleMotherName = (_value) => {
      femaleMotherName.value = _value;
      emits("updateFemaleMotherName", femaleMotherName.value);
    };
    const isShowFemaleFirst = ref(false);
    const selectShowFemaleFirst = (_value) => {
      isShowFemaleFirst.value = _value;
      emits("selectShowFemaleFirst", isShowFemaleFirst.value);
    };
    const isShowLateAsFlower = ref(false);
    const selectShowLateAsFlower = (_value) => {
      isShowLateAsFlower.value = _value;
      emits("selectShowLateAsFlower", isShowLateAsFlower.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Text = __nuxt_component_2;
      const _component_CheckBox = __nuxt_component_3$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, {
        required: "",
        title: "신랑측"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(maleName),
                    placeholder: maleNamePlaceholder,
                    onInput: updateMaleName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(maleRelation),
                    placeholder: maleRelationPlaceholder,
                    onInput: updateMaleRelation
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(maleName),
                      placeholder: maleNamePlaceholder,
                      onInput: updateMaleName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_Text, {
                      initValue: unref(maleRelation),
                      placeholder: maleRelationPlaceholder,
                      onInput: updateMaleRelation
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(maleFatherName),
                    placeholder: maleFatherNamePlaceholder,
                    onInput: updateMaleFatherName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "LATE_MALE_FATHER",
                    label: "故人",
                    onInput: selectMaleFatherLate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(maleFatherName),
                      placeholder: maleFatherNamePlaceholder,
                      onInput: updateMaleFatherName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_CheckBox, {
                      id: "LATE_MALE_FATHER",
                      label: "故人",
                      onInput: selectMaleFatherLate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(maleMotherName),
                    placeholder: maleMotherNamePlaceholder,
                    onInput: updateMaleMotherName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "LATE_MALE_MOTHER",
                    label: "故人",
                    onInput: selectMaleMotherLate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(maleMotherName),
                      placeholder: maleMotherNamePlaceholder,
                      onInput: updateMaleMotherName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_CheckBox, {
                      id: "LATE_MALE_MOTHER",
                      label: "故人",
                      onInput: selectMaleMotherLate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(maleName),
                    placeholder: maleNamePlaceholder,
                    onInput: updateMaleName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_Text, {
                    initValue: unref(maleRelation),
                    placeholder: maleRelationPlaceholder,
                    onInput: updateMaleRelation
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              }),
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(maleFatherName),
                    placeholder: maleFatherNamePlaceholder,
                    onInput: updateMaleFatherName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_CheckBox, {
                    id: "LATE_MALE_FATHER",
                    label: "故人",
                    onInput: selectMaleFatherLate
                  })
                ]),
                _: 1
              }),
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(maleMotherName),
                    placeholder: maleMotherNamePlaceholder,
                    onInput: updateMaleMotherName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_CheckBox, {
                    id: "LATE_MALE_MOTHER",
                    label: "故人",
                    onInput: selectMaleMotherLate
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        required: "",
        devided: "",
        title: "신부측"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(femaleName),
                    placeholder: femaleNamePlaceholder,
                    onInput: updateFemaleName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(femaleRelation),
                    placeholder: femaleRelationPlaceholder,
                    onInput: updateFemaleRelation
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(femaleName),
                      placeholder: femaleNamePlaceholder,
                      onInput: updateFemaleName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_Text, {
                      initValue: unref(femaleRelation),
                      placeholder: femaleRelationPlaceholder,
                      onInput: updateFemaleRelation
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(femaleFatherName),
                    placeholder: femaleFatherNamePlaceholder,
                    onInput: updateFemaleFatherName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "LATE_FEMALE_FATHER",
                    name: "LATE",
                    label: "故人",
                    onInput: selectFemaleFatherLate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(femaleFatherName),
                      placeholder: femaleFatherNamePlaceholder,
                      onInput: updateFemaleFatherName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_CheckBox, {
                      id: "LATE_FEMALE_FATHER",
                      name: "LATE",
                      label: "故人",
                      onInput: selectFemaleFatherLate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    initValue: unref(femaleMotherName),
                    placeholder: femaleMotherNamePlaceholder,
                    onInput: updateFemaleMotherName
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "LATE_FEMALE_MOTHER",
                    name: "LATE",
                    label: "故人",
                    onInput: selectFemaleMotherLate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      initValue: unref(femaleMotherName),
                      placeholder: femaleMotherNamePlaceholder,
                      onInput: updateFemaleMotherName
                    }, null, 8, ["initValue"]),
                    createVNode(_component_CheckBox, {
                      id: "LATE_FEMALE_MOTHER",
                      name: "LATE",
                      label: "故人",
                      onInput: selectFemaleMotherLate
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(femaleName),
                    placeholder: femaleNamePlaceholder,
                    onInput: updateFemaleName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_Text, {
                    initValue: unref(femaleRelation),
                    placeholder: femaleRelationPlaceholder,
                    onInput: updateFemaleRelation
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              }),
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(femaleFatherName),
                    placeholder: femaleFatherNamePlaceholder,
                    onInput: updateFemaleFatherName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_CheckBox, {
                    id: "LATE_FEMALE_FATHER",
                    name: "LATE",
                    label: "故人",
                    onInput: selectFemaleFatherLate
                  })
                ]),
                _: 1
              }),
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    initValue: unref(femaleMotherName),
                    placeholder: femaleMotherNamePlaceholder,
                    onInput: updateFemaleMotherName
                  }, null, 8, ["initValue"]),
                  createVNode(_component_CheckBox, {
                    id: "LATE_FEMALE_MOTHER",
                    name: "LATE",
                    label: "故人",
                    onInput: selectFemaleMotherLate
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        devided: "",
        title: "표기 순서"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "FEMALE_FIRST",
                    label: "신부 먼저 표기",
                    onInput: selectShowFemaleFirst
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CheckBox, {
                      id: "FEMALE_FIRST",
                      label: "신부 먼저 표기",
                      onInput: selectShowFemaleFirst
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_CheckBox, {
                    id: "FEMALE_FIRST",
                    label: "신부 먼저 표기",
                    onInput: selectShowFemaleFirst
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "故人 표기" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CheckBox, {
                    id: "LATE_AS_FLOWER",
                    label: "故人 대신 꽃으로 표기",
                    onInput: selectShowLateAsFlower
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CheckBox, {
                      id: "LATE_AS_FLOWER",
                      label: "故人 대신 꽃으로 표기",
                      onInput: selectShowLateAsFlower
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_CheckBox, {
                    id: "LATE_AS_FLOWER",
                    label: "故人 대신 꽃으로 표기",
                    onInput: selectShowLateAsFlower
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomOrganizers.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TextArea",
  __ssrInlineRender: true,
  props: {
    initValue: {},
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text_area_wrap" }, _attrs))} data-v-6c22abe2><textarea${ssrRenderAttr("placeholder", _ctx.placeholder)} data-v-6c22abe2>${ssrInterpolate(_ctx.initValue)}</textarea></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TextArea.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-6c22abe2"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CustomGreetings",
  __ssrInlineRender: true,
  props: {
    greetingsTitle: {},
    greetingsContent: {}
  },
  emits: ["updateGreetingsTitle", "updateGreetingsText"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const greetingsTitle = ref("");
    const greetingsTitlePlaceholder = ref("제목을 입력해 주세요");
    const updateGreetingsTitle = (_value) => {
      greetingsTitle.value = _value;
      emits("updateGreetingsTitle", greetingsTitle.value);
    };
    const greetingsContent = ref("");
    const greetingsContentplaceholder = ref("내용을 입력해 주세요");
    const updateGreetingsText = (_value) => {
      greetingsContent.value = _value;
      emits("updateGreetingsText", greetingsContent.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Text = __nuxt_component_2;
      const _component_TextArea = __nuxt_component_3$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, { title: "제목" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    full: "",
                    initValue: unref(greetingsTitle),
                    placeholder: unref(greetingsTitlePlaceholder),
                    onInput: updateGreetingsTitle
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      full: "",
                      initValue: unref(greetingsTitle),
                      placeholder: unref(greetingsTitlePlaceholder),
                      onInput: updateGreetingsTitle
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    full: "",
                    initValue: unref(greetingsTitle),
                    placeholder: unref(greetingsTitlePlaceholder),
                    onInput: updateGreetingsTitle
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        required: "",
        title: "내용"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextArea, {
                    initValue: unref(greetingsContent),
                    placeholder: unref(greetingsContentplaceholder),
                    onInput: updateGreetingsText
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextArea, {
                      initValue: unref(greetingsContent),
                      placeholder: unref(greetingsContentplaceholder),
                      onInput: updateGreetingsText
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_TextArea, {
                    initValue: unref(greetingsContent),
                    placeholder: unref(greetingsContentplaceholder),
                    onInput: updateGreetingsText
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "사진" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomGreetings.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DatePicker",
  __ssrInlineRender: true,
  emits: ["selectedDate"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const date = () => {
      const now = /* @__PURE__ */ new Date();
      const minutes = now.getMinutes();
      const adjustedMinutes = minutes < 30 ? 0 : 30;
      now.setMinutes(adjustedMinutes);
      now.setSeconds(0);
      now.setMilliseconds(0);
      return now;
    };
    const selectedDate = ref(date());
    const handleSelectedDate = (date2) => {
      selectedDate.value = date2;
      emits("selectedDate", selectedDate.value);
    };
    const disablePastDates = (date2) => {
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      return date2 < today;
    };
    const timePickerOptions = {
      start: "00:00",
      end: "23:30",
      step: 30,
      format: "HH:mm"
    };
    const format = (date2) => {
      const day = date2.getDate();
      const month = date2.getMonth() + 1;
      const year = date2.getFullYear();
      const hours = date2.getHours();
      const minutes = date2.getMinutes();
      return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes === 0 ? "" : minutes + "분"}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VueDatePicker), mergeProps({
        modelValue: unref(selectedDate),
        "onUpdate:modelValue": [($event) => isRef(selectedDate) ? selectedDate.value = $event : null, handleSelectedDate],
        locale: "ko",
        cancelText: "취소",
        selectText: "확인",
        format,
        timePickerInline: true,
        timePickerOptions,
        minutesIncrement: 30,
        enableTimePicker: true,
        disabledDates: disablePastDates,
        clearable: false
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/DatePicker.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal_wrap" }, _attrs))} data-v-4626f7c5><button class="modal_dimm" data-v-4626f7c5><div class="modal_contents_wrap" data-v-4626f7c5>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Modal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4626f7c5"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Address",
  __ssrInlineRender: true,
  emits: ["selectedAddress", "detailedAddress"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const loadingText = ref("로딩 중 입니다");
    const selectedAddress = ref("");
    const selectedAddressPlaceholder = ref("이 곳을 클릭해 주세요");
    const detailedAddress = ref("");
    const detailedAddressPlaceholder = ref("상세 주소를 입력해 주세요");
    const isAddressModalOpen = ref(false);
    const handleClose = () => {
      isAddressModalOpen.value = false;
    };
    const onComplete = (newResult) => {
      selectedAddress.value = newResult.address;
      emits("selectedAddress", selectedAddress.value);
      isAddressModalOpen.value = false;
    };
    const updateDetailedAddress = (_value) => {
      detailedAddress.value = _value;
      emits("detailedAddress", _value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_2;
      const _component_Modal = __nuxt_component_1;
      _push(`<!--[--><button data-v-d352046b>`);
      _push(ssrRenderComponent(_component_Text, {
        readOnly: "",
        clickable: "",
        initValue: unref(selectedAddress),
        placeholder: unref(selectedAddressPlaceholder)
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_Text, {
        initValue: unref(detailedAddress),
        placeholder: unref(detailedAddressPlaceholder),
        onInput: updateDetailedAddress
      }, null, _parent));
      if (unref(isAddressModalOpen)) {
        _push(ssrRenderComponent(_component_Modal, { onClose: handleClose }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(VueDaumPostcode), { onComplete }, {
                loading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(loadingText))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(loadingText)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(VueDaumPostcode), { onComplete }, {
                  loading: withCtx(() => [
                    createTextVNode(toDisplayString(unref(loadingText)), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Address.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d352046b"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CustomEventDetails",
  __ssrInlineRender: true,
  emits: ["selectedDate", "selectedAddress", "detailedAddress"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const handleSelectedDate = (date) => {
      selectedDate.value = date;
      emits("selectedDate", selectedDate.value);
    };
    const selectedAddress = ref("");
    const handleSelectedAddress = (_value) => {
      selectedAddress.value = _value;
      emits("selectedAddress", selectedAddress.value);
    };
    const detailedAddress = ref("");
    const handleUpdateDetailedAddress = (_value) => {
      detailedAddress.value = _value;
      emits("detailedAddress", detailedAddress.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_DatePicker = _sfc_main$8;
      const _component_Address = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, {
        required: "",
        title: "날짜 및 시간"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DatePicker, { onSelectedDate: handleSelectedDate }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DatePicker, { onSelectedDate: handleSelectedDate })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_DatePicker, { onSelectedDate: handleSelectedDate })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        required: "",
        title: "장소"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Address, {
                    onSelectedAddress: handleSelectedAddress,
                    onDetailedAddress: handleUpdateDetailedAddress
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Address, {
                      onSelectedAddress: handleSelectedAddress,
                      onDetailedAddress: handleUpdateDetailedAddress
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Address, {
                    onSelectedAddress: handleSelectedAddress,
                    onDetailedAddress: handleUpdateDetailedAddress
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "지도 표기" }, null, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "네비게이션 공유 표기" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomEventDetails.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const noticeTitlePlaceholder = "제목을 입력해 주세요";
const noticeContentPlaceholder = "내용을 입력해 주세요";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CustomNotice",
  __ssrInlineRender: true,
  emits: ["updateNoticeTitle", "updateNoticeContent"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const noticeTitle = ref("");
    const updateNoticeTitle = (_value) => {
      noticeTitle.value = _value;
      emits("updateNoticeTitle", noticeTitle.value);
    };
    const noticeContent = ref("");
    const updateNoticeContent = (_value) => {
      noticeContent.value = _value;
      emits("updateNoticeContent", noticeContent.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Text = __nuxt_component_2;
      const _component_TextArea = __nuxt_component_3$1;
      _push(ssrRenderComponent(_component_InputForm, mergeProps({ title: "내용" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    full: "",
                    initValue: unref(noticeTitle),
                    placeholder: noticeTitlePlaceholder,
                    onInput: updateNoticeTitle
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      full: "",
                      initValue: unref(noticeTitle),
                      placeholder: noticeTitlePlaceholder,
                      onInput: updateNoticeTitle
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextArea, {
                    initValue: unref(noticeContent),
                    placeholder: noticeContentPlaceholder,
                    onInput: updateNoticeContent
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextArea, {
                      initValue: unref(noticeContent),
                      placeholder: noticeContentPlaceholder,
                      onInput: updateNoticeContent
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    full: "",
                    initValue: unref(noticeTitle),
                    placeholder: noticeTitlePlaceholder,
                    onInput: updateNoticeTitle
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              }),
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_TextArea, {
                    initValue: unref(noticeContent),
                    placeholder: noticeContentPlaceholder,
                    onInput: updateNoticeContent
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomNotice.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const closingsContentPlaceholder = "내용을 입력해 주세요";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CustomClosings",
  __ssrInlineRender: true,
  emits: ["updateClosingsContent"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const closingsContent = ref("");
    const updateClosingsContent = (_value) => {
      closingsContent.value = _value;
      emits("updateClosingsContent", closingsContent.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_TextArea = __nuxt_component_3$1;
      _push(ssrRenderComponent(_component_InputForm, mergeProps({ title: "내용" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextArea, {
                    initValue: unref(closingsContent),
                    placeholder: closingsContentPlaceholder,
                    onInput: updateClosingsContent
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextArea, {
                      initValue: unref(closingsContent),
                      placeholder: closingsContentPlaceholder,
                      onInput: updateClosingsContent
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_TextArea, {
                    initValue: unref(closingsContent),
                    placeholder: closingsContentPlaceholder,
                    onInput: updateClosingsContent
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomClosings.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomContact",
  __ssrInlineRender: true,
  emits: ["updateMaleContactName1", "updateMaleContactPhoneNumber1", "updateMaleContactName2", "updateMaleContactPhoneNumber2", "updateMaleContactName3", "updateMaleContactPhoneNumber3", "updateFemaleContactName1", "updateFemaleContactPhoneNumber1", "updateFemaleContactName2", "updateFemaleContactPhoneNumber2", "updateFemaleContactName3", "updateFemaleContactPhoneNumber3"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const maleContactName1 = ref("");
    const maleContactName1Placeholder = ref("성함 혹은 호칭");
    const updateMaleContactName1 = (_value) => {
      maleContactName1.value = _value;
      emits("updateMaleContactName1", maleContactName1.value);
    };
    const maleContactPhoneNumber1 = ref("");
    const maleContactPhoneNumber1Placeholder = ref("휴대폰 번호");
    const updateMaleContactPhoneNumber1 = (_value) => {
      maleContactPhoneNumber1.value = _value;
      emits("updateMaleContactPhoneNumber1", maleContactPhoneNumber1.value);
    };
    const maleContactName2 = ref("");
    const maleContactName2Placeholder = ref("성함 혹은 호칭");
    const updateMaleContactName2 = (_value) => {
      maleContactName2.value = _value;
      emits("updateMaleContactName2", maleContactName2.value);
    };
    const maleContactPhoneNumber2 = ref("");
    const maleContactPhoneNumber2Placeholder = ref("휴대폰 번호");
    const updateMaleContactPhoneNumber2 = (_value) => {
      maleContactPhoneNumber2.value = _value;
      emits("updateMaleContactPhoneNumber2", maleContactPhoneNumber2.value);
    };
    const maleContactName3 = ref("");
    const maleContactName3Placeholder = ref("성함 혹은 호칭");
    const updateMaleContactName3 = (_value) => {
      maleContactName3.value = _value;
      emits("updateMaleContactName3", maleContactName3.value);
    };
    const maleContactPhoneNumber3 = ref("");
    const maleContactPhoneNumber3Placeholder = ref("휴대폰 번호");
    const updateMaleContactPhoneNumber3 = (_value) => {
      maleContactPhoneNumber3.value = _value;
      emits("updateMaleContactPhoneNumber3", maleContactPhoneNumber3.value);
    };
    const femaleContactName1 = ref("");
    const femaleContactName1Placeholder = ref("성함 혹은 호칭");
    const updateFemaleContactName1 = (_value) => {
      femaleContactName1.value = _value;
      emits("updateFemaleContactName1", femaleContactName1.value);
    };
    const femaleContactPhoneNumber1 = ref("");
    const femaleContactPhoneNumber1Placeholder = ref("휴대폰 번호");
    const updateFemaleContactPhoneNumber1 = (_value) => {
      femaleContactPhoneNumber1.value = _value;
      emits("updateFemaleContactPhoneNumber1", femaleContactPhoneNumber1.value);
    };
    const femaleContactName2 = ref("");
    const femaleContactName2Placeholder = ref("성함 혹은 호칭");
    const updateFemaleContactName2 = (_value) => {
      femaleContactName2.value = _value;
      emits("updateFemaleContactName2", femaleContactName2.value);
    };
    const femaleContactPhoneNumber2 = ref("");
    const femaleContactPhoneNumber2Placeholder = ref("휴대폰 번호");
    const updateFemaleContactPhoneNumber2 = (_value) => {
      femaleContactPhoneNumber2.value = _value;
      emits("updateFemaleContactPhoneNumber2", femaleContactPhoneNumber2.value);
    };
    const femaleContactName3 = ref("");
    const femaleContactName3Placeholder = ref("성함 혹은 호칭");
    const updateFemaleContactName3 = (_value) => {
      femaleContactName3.value = _value;
      emits("updateFemaleContactName3", femaleContactName3.value);
    };
    const femaleContactPhoneNumber3 = ref("");
    const femaleContactPhoneNumber3Placeholder = ref("휴대폰 번호");
    const updateFemaleContactPhoneNumber3 = (_value) => {
      femaleContactPhoneNumber3.value = _value;
      emits("updateFemaleContactPhoneNumber3", femaleContactPhoneNumber3.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Text = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, { title: "신랑측1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName1),
                    placeholder: unref(maleContactName1Placeholder),
                    onInput: updateMaleContactName1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber1),
                    placeholder: unref(maleContactPhoneNumber1Placeholder),
                    onInput: updateMaleContactPhoneNumber1
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactName1),
                      placeholder: unref(maleContactName1Placeholder),
                      onInput: updateMaleContactName1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactPhoneNumber1),
                      placeholder: unref(maleContactPhoneNumber1Placeholder),
                      onInput: updateMaleContactPhoneNumber1
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName1),
                    placeholder: unref(maleContactName1Placeholder),
                    onInput: updateMaleContactName1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber1),
                    placeholder: unref(maleContactPhoneNumber1Placeholder),
                    onInput: updateMaleContactPhoneNumber1
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신랑측2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName2),
                    placeholder: unref(maleContactName2Placeholder),
                    onInput: updateMaleContactName2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber2),
                    placeholder: unref(maleContactPhoneNumber2Placeholder),
                    onInput: updateMaleContactPhoneNumber2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactName2),
                      placeholder: unref(maleContactName2Placeholder),
                      onInput: updateMaleContactName2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactPhoneNumber2),
                      placeholder: unref(maleContactPhoneNumber2Placeholder),
                      onInput: updateMaleContactPhoneNumber2
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName2),
                    placeholder: unref(maleContactName2Placeholder),
                    onInput: updateMaleContactName2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber2),
                    placeholder: unref(maleContactPhoneNumber2Placeholder),
                    onInput: updateMaleContactPhoneNumber2
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신랑측3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName3),
                    placeholder: unref(maleContactName3Placeholder),
                    onInput: updateMaleContactName3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber3),
                    placeholder: unref(maleContactPhoneNumber3Placeholder),
                    onInput: updateMaleContactPhoneNumber3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactName3),
                      placeholder: unref(maleContactName3Placeholder),
                      onInput: updateMaleContactName3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleContactPhoneNumber3),
                      placeholder: unref(maleContactPhoneNumber3Placeholder),
                      onInput: updateMaleContactPhoneNumber3
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactName3),
                    placeholder: unref(maleContactName3Placeholder),
                    onInput: updateMaleContactName3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleContactPhoneNumber3),
                    placeholder: unref(maleContactPhoneNumber3Placeholder),
                    onInput: updateMaleContactPhoneNumber3
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        devided: "",
        title: "신부측1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName1),
                    placeholder: unref(femaleContactName1Placeholder),
                    onInput: updateFemaleContactName1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber1),
                    placeholder: unref(femaleContactPhoneNumber1Placeholder),
                    onInput: updateFemaleContactPhoneNumber1
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactName1),
                      placeholder: unref(femaleContactName1Placeholder),
                      onInput: updateFemaleContactName1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactPhoneNumber1),
                      placeholder: unref(femaleContactPhoneNumber1Placeholder),
                      onInput: updateFemaleContactPhoneNumber1
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName1),
                    placeholder: unref(femaleContactName1Placeholder),
                    onInput: updateFemaleContactName1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber1),
                    placeholder: unref(femaleContactPhoneNumber1Placeholder),
                    onInput: updateFemaleContactPhoneNumber1
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신부측2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName2),
                    placeholder: unref(femaleContactName2Placeholder),
                    onInput: updateFemaleContactName2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber2),
                    placeholder: unref(femaleContactPhoneNumber2Placeholder),
                    onInput: updateFemaleContactPhoneNumber2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactName2),
                      placeholder: unref(femaleContactName2Placeholder),
                      onInput: updateFemaleContactName2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactPhoneNumber2),
                      placeholder: unref(femaleContactPhoneNumber2Placeholder),
                      onInput: updateFemaleContactPhoneNumber2
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName2),
                    placeholder: unref(femaleContactName2Placeholder),
                    onInput: updateFemaleContactName2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber2),
                    placeholder: unref(femaleContactPhoneNumber2Placeholder),
                    onInput: updateFemaleContactPhoneNumber2
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신부측3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName3),
                    placeholder: unref(femaleContactName3Placeholder),
                    onInput: updateFemaleContactName3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber3),
                    placeholder: unref(femaleContactPhoneNumber3Placeholder),
                    onInput: updateFemaleContactPhoneNumber3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactName3),
                      placeholder: unref(femaleContactName3Placeholder),
                      onInput: updateFemaleContactName3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleContactPhoneNumber3),
                      placeholder: unref(femaleContactPhoneNumber3Placeholder),
                      onInput: updateFemaleContactPhoneNumber3
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactName3),
                    placeholder: unref(femaleContactName3Placeholder),
                    onInput: updateFemaleContactName3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleContactPhoneNumber3),
                    placeholder: unref(femaleContactPhoneNumber3Placeholder),
                    onInput: updateFemaleContactPhoneNumber3
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomContact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const bankDetailsTitlePlaceholder = "제목을 입력해 주세요";
const bankDetailsContentPlaceholder = "내용을 입력해 주세요";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomBankDetails",
  __ssrInlineRender: true,
  emits: ["updateBankDetailsTitle", "updateMaleBankName1", "updateMaleBankNumber1", "updateMaleBankDepositor1", "updateMaleBankName2", "updateMaleBankNumber2", "updateMaleBankDepositor2", "updateMaleBankName3", "updateMaleBankNumber3", "updateMaleBankDepositor3", "updateFemaleBankName1", "updateFemaleBankNumber1", "updateFemaleBankDepositor1", "updateFemaleBankName2", "updateFemaleBankNumber2", "updateFemaleBankDepositor2", "updateFemaleBankName3", "updateFemaleBankNumber3", "updateFemaleBankDepositor3"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const bankDetailsTitle = ref("");
    const updateBankDetailsTitle = (_value) => {
      bankDetailsTitle.value = _value;
      emits("updateBankDetailsTitle", bankDetailsTitle.value);
    };
    const bankDetailsContent = ref("");
    const updateBankDetailsContent = (_value) => {
      bankDetailsContent.value = _value;
      emits("updateBankDetailsTitle", bankDetailsContent.value);
    };
    const maleBankName1 = ref("");
    const maleBankName1Placeholder = ref("은행명");
    const updateMaleBankName1 = (_value) => {
      maleBankName1.value = _value;
      emits("updateMaleBankName1", maleBankName1.value);
    };
    const maleBankNumber1 = ref("");
    const maleBankNumber1Placeholder = ref("계좌번호");
    const updateMaleBankNumber1 = (_value) => {
      maleBankNumber1.value = _value;
      emits("updateMaleBankNumber1", maleBankNumber1.value);
    };
    const maleBankDepositor1 = ref("");
    const maleBankDepositor1Placeholder = ref("예금주");
    const updateMaleBankDepositor1 = (_value) => {
      maleBankDepositor1.value = _value;
      emits("updateMaleBankDepositor1", maleBankDepositor1.value);
    };
    const maleBankName2 = ref("");
    const maleBankName2Placeholder = ref("은행명");
    const updateMaleBankName2 = (_value) => {
      maleBankName2.value = _value;
      emits("updateMaleBankName1", maleBankName2.value);
    };
    const maleBankNumber2 = ref("");
    const maleBankNumber2Placeholder = ref("계좌번호");
    const updateMaleBankNumber2 = (_value) => {
      maleBankNumber2.value = _value;
      emits("updateMaleBankNumber1", maleBankNumber2.value);
    };
    const maleBankDepositor2 = ref("");
    const maleBankDepositor2Placeholder = ref("예금주");
    const updateMaleBankDepositor2 = (_value) => {
      maleBankDepositor2.value = _value;
      emits("updateMaleBankDepositor1", maleBankDepositor2.value);
    };
    const maleBankName3 = ref("");
    const maleBankName3Placeholder = ref("은행명");
    const updateMaleBankName3 = (_value) => {
      maleBankName3.value = _value;
      emits("updateMaleBankName3", maleBankName3.value);
    };
    const maleBankNumber3 = ref("");
    const maleBankNumber3Placeholder = ref("계좌번호");
    const updateMaleBankNumber3 = (_value) => {
      maleBankNumber3.value = _value;
      emits("updateMaleBankNumber3", maleBankNumber3.value);
    };
    const maleBankDepositor3 = ref("");
    const maleBankDepositor3Placeholder = ref("예금주");
    const updateMaleBankDepositor3 = (_value) => {
      maleBankDepositor3.value = _value;
      emits("updateMaleBankDepositor3", maleBankDepositor3.value);
    };
    const femaleBankName1 = ref("");
    const femaleBankName1Placeholder = ref("은행명");
    const updateFemaleBankName1 = (_value) => {
      femaleBankName1.value = _value;
      emits("updateFemaleBankName1", femaleBankName1.value);
    };
    const femaleBankNumber1 = ref("");
    const femaleBankNumber1Placeholder = ref("계좌번호");
    const updateFemaleBankNumber1 = (_value) => {
      femaleBankNumber1.value = _value;
      emits("updateFemaleBankNumber1", femaleBankNumber1.value);
    };
    const femaleBankDepositor1 = ref("");
    const femaleBankDepositor1Placeholder = ref("예금주");
    const updateFemaleBankDepositor1 = (_value) => {
      femaleBankDepositor1.value = _value;
      emits("updateFemaleBankDepositor1", femaleBankDepositor1.value);
    };
    const femaleBankName2 = ref("");
    const femaleBankName2Placeholder = ref("은행명");
    const updateFemaleBankName2 = (_value) => {
      femaleBankName2.value = _value;
      emits("updateFemaleBankName1", femaleBankName2.value);
    };
    const femaleBankNumber2 = ref("");
    const femaleBankNumber2Placeholder = ref("계좌번호");
    const updateFemaleBankNumber2 = (_value) => {
      femaleBankNumber2.value = _value;
      emits("updateFemaleBankNumber1", femaleBankNumber2.value);
    };
    const femaleBankDepositor2 = ref("");
    const femaleBankDepositor2Placeholder = ref("예금주");
    const updateFemaleBankDepositor2 = (_value) => {
      femaleBankDepositor2.value = _value;
      emits("updateFemaleBankDepositor1", femaleBankDepositor2.value);
    };
    const femaleBankName3 = ref("");
    const femaleBankName3Placeholder = ref("은행명");
    const updateFemaleBankName3 = (_value) => {
      femaleBankName3.value = _value;
      emits("updateFemaleBankName3", femaleBankName3.value);
    };
    const femaleBankNumber3 = ref("");
    const femaleBankNumber3Placeholder = ref("계좌번호");
    const updateFemaleBankNumber3 = (_value) => {
      femaleBankNumber3.value = _value;
      emits("updateFemaleBankNumber3", femaleBankNumber3.value);
    };
    const femaleBankDepositor3 = ref("");
    const femaleBankDepositor3Placeholder = ref("예금주");
    const updateFemaleBankDepositor3 = (_value) => {
      femaleBankDepositor3.value = _value;
      emits("updateFemaleBankDepositor3", femaleBankDepositor3.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputForm = __nuxt_component_11;
      const _component_InputFormItem = __nuxt_component_1$1;
      const _component_Text = __nuxt_component_2;
      const _component_TextArea = __nuxt_component_3$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_InputForm, { title: "제목" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    full: "",
                    initValue: unref(bankDetailsTitle),
                    placeholder: bankDetailsTitlePlaceholder,
                    onInput: updateBankDetailsTitle
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      full: "",
                      initValue: unref(bankDetailsTitle),
                      placeholder: bankDetailsTitlePlaceholder,
                      onInput: updateBankDetailsTitle
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    full: "",
                    initValue: unref(bankDetailsTitle),
                    placeholder: bankDetailsTitlePlaceholder,
                    onInput: updateBankDetailsTitle
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "내용" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TextArea, {
                    initValue: unref(bankDetailsContent),
                    placeholder: bankDetailsContentPlaceholder,
                    onInput: updateBankDetailsContent
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TextArea, {
                      initValue: unref(bankDetailsContent),
                      placeholder: bankDetailsContentPlaceholder,
                      onInput: updateBankDetailsContent
                    }, null, 8, ["initValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_TextArea, {
                    initValue: unref(bankDetailsContent),
                    placeholder: bankDetailsContentPlaceholder,
                    onInput: updateBankDetailsContent
                  }, null, 8, ["initValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        devided: "",
        title: "신랑측1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName1),
                    placeholder: unref(maleBankName1Placeholder),
                    onInput: updateMaleBankName1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber1),
                    placeholder: unref(maleBankNumber1Placeholder),
                    onInput: updateMaleBankNumber1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor1),
                    placeholder: unref(maleBankDepositor1Placeholder),
                    onInput: updateMaleBankDepositor1
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankName1),
                      placeholder: unref(maleBankName1Placeholder),
                      onInput: updateMaleBankName1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankNumber1),
                      placeholder: unref(maleBankNumber1Placeholder),
                      onInput: updateMaleBankNumber1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankDepositor1),
                      placeholder: unref(maleBankDepositor1Placeholder),
                      onInput: updateMaleBankDepositor1
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName1),
                    placeholder: unref(maleBankName1Placeholder),
                    onInput: updateMaleBankName1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber1),
                    placeholder: unref(maleBankNumber1Placeholder),
                    onInput: updateMaleBankNumber1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor1),
                    placeholder: unref(maleBankDepositor1Placeholder),
                    onInput: updateMaleBankDepositor1
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신랑측2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName2),
                    placeholder: unref(maleBankName2Placeholder),
                    onInput: updateMaleBankName2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber2),
                    placeholder: unref(maleBankNumber2Placeholder),
                    onInput: updateMaleBankNumber2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor2),
                    placeholder: unref(maleBankDepositor2Placeholder),
                    onInput: updateMaleBankDepositor2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankName2),
                      placeholder: unref(maleBankName2Placeholder),
                      onInput: updateMaleBankName2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankNumber2),
                      placeholder: unref(maleBankNumber2Placeholder),
                      onInput: updateMaleBankNumber2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankDepositor2),
                      placeholder: unref(maleBankDepositor2Placeholder),
                      onInput: updateMaleBankDepositor2
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName2),
                    placeholder: unref(maleBankName2Placeholder),
                    onInput: updateMaleBankName2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber2),
                    placeholder: unref(maleBankNumber2Placeholder),
                    onInput: updateMaleBankNumber2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor2),
                    placeholder: unref(maleBankDepositor2Placeholder),
                    onInput: updateMaleBankDepositor2
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신랑측3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName3),
                    placeholder: unref(maleBankName3Placeholder),
                    onInput: updateMaleBankName3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber3),
                    placeholder: unref(maleBankNumber3Placeholder),
                    onInput: updateMaleBankNumber3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor3),
                    placeholder: unref(maleBankDepositor3Placeholder),
                    onInput: updateMaleBankDepositor3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankName3),
                      placeholder: unref(maleBankName3Placeholder),
                      onInput: updateMaleBankName3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankNumber3),
                      placeholder: unref(maleBankNumber3Placeholder),
                      onInput: updateMaleBankNumber3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(maleBankDepositor3),
                      placeholder: unref(maleBankDepositor3Placeholder),
                      onInput: updateMaleBankDepositor3
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankName3),
                    placeholder: unref(maleBankName3Placeholder),
                    onInput: updateMaleBankName3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankNumber3),
                    placeholder: unref(maleBankNumber3Placeholder),
                    onInput: updateMaleBankNumber3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(maleBankDepositor3),
                    placeholder: unref(maleBankDepositor3Placeholder),
                    onInput: updateMaleBankDepositor3
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, {
        devided: "",
        title: "신부측1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName1),
                    placeholder: unref(femaleBankName1Placeholder),
                    onInput: updateFemaleBankName1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber1),
                    placeholder: unref(femaleBankNumber1Placeholder),
                    onInput: updateFemaleBankNumber1
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor1),
                    placeholder: unref(femaleBankDepositor1Placeholder),
                    onInput: updateFemaleBankDepositor1
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankName1),
                      placeholder: unref(femaleBankName1Placeholder),
                      onInput: updateFemaleBankName1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankNumber1),
                      placeholder: unref(femaleBankNumber1Placeholder),
                      onInput: updateFemaleBankNumber1
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankDepositor1),
                      placeholder: unref(femaleBankDepositor1Placeholder),
                      onInput: updateFemaleBankDepositor1
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName1),
                    placeholder: unref(femaleBankName1Placeholder),
                    onInput: updateFemaleBankName1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber1),
                    placeholder: unref(femaleBankNumber1Placeholder),
                    onInput: updateFemaleBankNumber1
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor1),
                    placeholder: unref(femaleBankDepositor1Placeholder),
                    onInput: updateFemaleBankDepositor1
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신부측2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName2),
                    placeholder: unref(femaleBankName2Placeholder),
                    onInput: updateFemaleBankName2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber2),
                    placeholder: unref(femaleBankNumber2Placeholder),
                    onInput: updateFemaleBankNumber2
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor2),
                    placeholder: unref(femaleBankDepositor2Placeholder),
                    onInput: updateFemaleBankDepositor2
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankName2),
                      placeholder: unref(femaleBankName2Placeholder),
                      onInput: updateFemaleBankName2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankNumber2),
                      placeholder: unref(femaleBankNumber2Placeholder),
                      onInput: updateFemaleBankNumber2
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankDepositor2),
                      placeholder: unref(femaleBankDepositor2Placeholder),
                      onInput: updateFemaleBankDepositor2
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName2),
                    placeholder: unref(femaleBankName2Placeholder),
                    onInput: updateFemaleBankName2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber2),
                    placeholder: unref(femaleBankNumber2Placeholder),
                    onInput: updateFemaleBankNumber2
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor2),
                    placeholder: unref(femaleBankDepositor2Placeholder),
                    onInput: updateFemaleBankDepositor2
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputForm, { title: "신부측3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputFormItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName3),
                    placeholder: unref(femaleBankName3Placeholder),
                    onInput: updateFemaleBankName3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber3),
                    placeholder: unref(femaleBankNumber3Placeholder),
                    onInput: updateFemaleBankNumber3
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor3),
                    placeholder: unref(femaleBankDepositor3Placeholder),
                    onInput: updateFemaleBankDepositor3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankName3),
                      placeholder: unref(femaleBankName3Placeholder),
                      onInput: updateFemaleBankName3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankNumber3),
                      placeholder: unref(femaleBankNumber3Placeholder),
                      onInput: updateFemaleBankNumber3
                    }, null, 8, ["initValue", "placeholder"]),
                    createVNode(_component_Text, {
                      short: "",
                      initValue: unref(femaleBankDepositor3),
                      placeholder: unref(femaleBankDepositor3Placeholder),
                      onInput: updateFemaleBankDepositor3
                    }, null, 8, ["initValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputFormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankName3),
                    placeholder: unref(femaleBankName3Placeholder),
                    onInput: updateFemaleBankName3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankNumber3),
                    placeholder: unref(femaleBankNumber3Placeholder),
                    onInput: updateFemaleBankNumber3
                  }, null, 8, ["initValue", "placeholder"]),
                  createVNode(_component_Text, {
                    short: "",
                    initValue: unref(femaleBankDepositor3),
                    placeholder: unref(femaleBankDepositor3Placeholder),
                    onInput: updateFemaleBankDepositor3
                  }, null, 8, ["initValue", "placeholder"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/domain/custom/CustomBankDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedFontIndex = ref(0);
    const handleSelectedFontIndex = (index) => {
      selectedFontIndex.value = index;
    };
    const selectedThemeColorIndex = ref(0);
    const handleSelectedThemeColorIndex = (index) => {
      selectedThemeColorIndex.value = index;
    };
    const maleName = ref(nameSample.male);
    const handleUpdateMaleName = (_value) => {
      maleName.value = _value;
    };
    const maleRelation = ref("차남");
    const handleUpdateMaleRelation = (_value) => {
      maleRelation.value = _value;
    };
    const isMaleFatherLate = ref(false);
    const handleSelectMaleFatherLate = (_value) => {
      isMaleFatherLate.value = _value;
    };
    const maleFatherName = ref(nameSample.maleFather);
    const handleUpdateMaleFatherName = (_value) => {
      maleFatherName.value = _value;
    };
    const isMaleMotherLate = ref(false);
    const handleSelectMaleMotherLate = (_value) => {
      isMaleMotherLate.value = _value;
    };
    const maleMotherName = ref(nameSample.maleMother);
    const handleUpdateMaleMotherName = (_value) => {
      maleMotherName.value = _value;
    };
    const femaleName = ref(nameSample.female);
    const handleUpdateFemaleName = (_value) => {
      femaleName.value = _value;
    };
    const femaleRelation = ref("장녀");
    const handleUpdateFemaleRelation = (_value) => {
      femaleRelation.value = _value;
    };
    const isFemaleFatherLate = ref(false);
    const handleSelectFemaleFatherLate = (_value) => {
      isFemaleFatherLate.value = _value;
    };
    const femaleFatherName = ref(nameSample.femaleFather);
    const handleUpdateFemaleFatherName = (_value) => {
      femaleFatherName.value = _value;
    };
    const isFemaleMotherLate = ref(false);
    const handleSelectFemaleMotherLate = (_value) => {
      isFemaleMotherLate.value = _value;
    };
    const femaleMotherName = ref(nameSample.femaleMother);
    const handleUpdateFemaleMotherName = (_value) => {
      femaleMotherName.value = _value;
    };
    const isShowFemaleFirst = ref(false);
    const handleSelectShowFemaleFirst = (_value) => {
      isShowFemaleFirst.value = _value;
    };
    const isShowLateAsFlower = ref(false);
    const handleSelectShowLateAsFlower = (_value) => {
      isShowLateAsFlower.value = _value;
    };
    const greetingsTitle = ref(greetingsSample.title);
    const handleUpdateGreetingsTitle = (_value) => {
      greetingsTitle.value = _value;
    };
    const greetingsContent = ref(greetingsSample.content);
    const handleUpdateGreetingsText = (_value) => {
      greetingsContent.value = _value;
    };
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const handleSelectedDate = (date) => {
      selectedDate.value = date;
    };
    const selectedAddress = ref("");
    const handleSelectedAddress = (_value) => {
      selectedAddress.value = _value;
    };
    const detailedAddress = ref("");
    const handleUpdateDetailedAddress = (_value) => {
      detailedAddress.value = _value;
    };
    const noticeTitle = ref("");
    const updateNoticeTitle = (_value) => {
      noticeTitle.value = _value;
    };
    const noticeContent = ref("");
    const updateNoticeContent = (_value) => {
      noticeContent.value = _value;
    };
    const closingsContent = ref("");
    const updateClosingsContent = (_value) => {
      closingsContent.value = _value;
    };
    const maleContactName1 = ref("");
    const updateMaleContactName1 = (_value) => {
      maleContactName1.value = _value;
    };
    const maleContactPhoneNumber1 = ref("");
    const updateMaleContactPhoneNumber1 = (_value) => {
      maleContactPhoneNumber1.value = _value;
    };
    const maleContactName2 = ref("");
    const updateMaleContactName2 = (_value) => {
      maleContactName2.value = _value;
    };
    const maleContactPhoneNumber2 = ref("");
    const updateMaleContactPhoneNumber2 = (_value) => {
      maleContactPhoneNumber2.value = _value;
    };
    const maleContactName3 = ref("");
    const updateMaleContactName3 = (_value) => {
      maleContactName3.value = _value;
    };
    const maleContactPhoneNumber3 = ref("");
    const updateMaleContactPhoneNumber3 = (_value) => {
      maleContactPhoneNumber3.value = _value;
    };
    const femaleContactName1 = ref("");
    const updateFemaleContactName1 = (_value) => {
      femaleContactName1.value = _value;
    };
    const femaleContactPhoneNumber1 = ref("");
    const updateFemaleContactPhoneNumber1 = (_value) => {
      femaleContactPhoneNumber1.value = _value;
    };
    const femaleContactName2 = ref("");
    const updateFemaleContactName2 = (_value) => {
      femaleContactName2.value = _value;
    };
    const femaleContactPhoneNumber2 = ref("");
    const updateFemaleContactPhoneNumber2 = (_value) => {
      femaleContactPhoneNumber2.value = _value;
    };
    const femaleContactName3 = ref("");
    const updateFemaleContactName3 = (_value) => {
      femaleContactName3.value = _value;
    };
    const femaleContactPhoneNumber3 = ref("");
    const updateFemaleContactPhoneNumber3 = (_value) => {
      femaleContactPhoneNumber3.value = _value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = __nuxt_component_0;
      const _component_CustomPreview = __nuxt_component_1$2;
      const _component_Accordion = __nuxt_component_2$2;
      const _component_CustomDesign = __nuxt_component_3$3;
      const _component_CustomOrganizers = _sfc_main$b;
      const _component_CustomGreetings = _sfc_main$9;
      const _component_CustomEventDetails = _sfc_main$5;
      const _component_CustomNotice = _sfc_main$4;
      const _component_CustomClosings = _sfc_main$3;
      const _component_CustomContact = _sfc_main$2;
      const _component_CustomBankDetails = _sfc_main$1;
      const _component_InputForm = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Container, null, {
        side: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CustomPreview, {
              selectedFontIndex: unref(selectedFontIndex),
              selectedThemeColorIndex: unref(selectedThemeColorIndex),
              maleName: unref(maleName),
              maleRelation: unref(maleRelation),
              maleFatherName: unref(maleFatherName),
              isMaleFatherLate: unref(isMaleFatherLate),
              maleMotherName: unref(maleMotherName),
              isMaleMotherLate: unref(isMaleMotherLate),
              femaleName: unref(femaleName),
              femaleRelation: unref(femaleRelation),
              femaleFatherName: unref(femaleFatherName),
              isFemaleFatherLate: unref(isFemaleFatherLate),
              femaleMotherName: unref(femaleMotherName),
              isFemaleMotherLate: unref(isFemaleMotherLate),
              isShowFemaleFirst: unref(isShowFemaleFirst),
              isShowLateAsFlower: unref(isShowLateAsFlower),
              greetingsTitle: unref(greetingsTitle),
              greetingsContent: unref(greetingsContent),
              selectedDate: unref(selectedDate),
              selectedAddress: unref(selectedAddress),
              detailedAddress: unref(detailedAddress),
              noticeTitle: unref(noticeTitle),
              noticeContent: unref(noticeContent),
              closingsContent: unref(closingsContent),
              maleContactName1: unref(maleContactName1),
              maleContactPhoneNumber1: unref(maleContactPhoneNumber1),
              maleContactName2: unref(maleContactName2),
              maleContactPhoneNumber2: unref(maleContactPhoneNumber2),
              maleContactName3: unref(maleContactName3),
              maleContactPhoneNumber3: unref(femaleContactPhoneNumber3),
              femaleContactName1: unref(femaleContactName1),
              femaleContactPhoneNumber1: unref(femaleContactPhoneNumber1),
              femaleContactName2: unref(femaleContactName2),
              femaleContactPhoneNumber2: unref(femaleContactPhoneNumber2),
              femaleContactName3: unref(femaleContactName3),
              femaleContactPhoneNumber3: unref(femaleContactPhoneNumber3)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CustomPreview, {
                selectedFontIndex: unref(selectedFontIndex),
                selectedThemeColorIndex: unref(selectedThemeColorIndex),
                maleName: unref(maleName),
                maleRelation: unref(maleRelation),
                maleFatherName: unref(maleFatherName),
                isMaleFatherLate: unref(isMaleFatherLate),
                maleMotherName: unref(maleMotherName),
                isMaleMotherLate: unref(isMaleMotherLate),
                femaleName: unref(femaleName),
                femaleRelation: unref(femaleRelation),
                femaleFatherName: unref(femaleFatherName),
                isFemaleFatherLate: unref(isFemaleFatherLate),
                femaleMotherName: unref(femaleMotherName),
                isFemaleMotherLate: unref(isFemaleMotherLate),
                isShowFemaleFirst: unref(isShowFemaleFirst),
                isShowLateAsFlower: unref(isShowLateAsFlower),
                greetingsTitle: unref(greetingsTitle),
                greetingsContent: unref(greetingsContent),
                selectedDate: unref(selectedDate),
                selectedAddress: unref(selectedAddress),
                detailedAddress: unref(detailedAddress),
                noticeTitle: unref(noticeTitle),
                noticeContent: unref(noticeContent),
                closingsContent: unref(closingsContent),
                maleContactName1: unref(maleContactName1),
                maleContactPhoneNumber1: unref(maleContactPhoneNumber1),
                maleContactName2: unref(maleContactName2),
                maleContactPhoneNumber2: unref(maleContactPhoneNumber2),
                maleContactName3: unref(maleContactName3),
                maleContactPhoneNumber3: unref(femaleContactPhoneNumber3),
                femaleContactName1: unref(femaleContactName1),
                femaleContactPhoneNumber1: unref(femaleContactPhoneNumber1),
                femaleContactName2: unref(femaleContactName2),
                femaleContactPhoneNumber2: unref(femaleContactPhoneNumber2),
                femaleContactName3: unref(femaleContactName3),
                femaleContactPhoneNumber3: unref(femaleContactPhoneNumber3)
              }, null, 8, ["selectedFontIndex", "selectedThemeColorIndex", "maleName", "maleRelation", "maleFatherName", "isMaleFatherLate", "maleMotherName", "isMaleMotherLate", "femaleName", "femaleRelation", "femaleFatherName", "isFemaleFatherLate", "femaleMotherName", "isFemaleMotherLate", "isShowFemaleFirst", "isShowLateAsFlower", "greetingsTitle", "greetingsContent", "selectedDate", "selectedAddress", "detailedAddress", "noticeTitle", "noticeContent", "closingsContent", "maleContactName1", "maleContactPhoneNumber1", "maleContactName2", "maleContactPhoneNumber2", "maleContactName3", "maleContactPhoneNumber3", "femaleContactName1", "femaleContactPhoneNumber1", "femaleContactName2", "femaleContactPhoneNumber2", "femaleContactName3", "femaleContactPhoneNumber3"])
            ];
          }
        }),
        contents: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "디자인"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomDesign, {
                    onSelectFontIndex: handleSelectedFontIndex,
                    onSelectThemeColorIndex: handleSelectedThemeColorIndex
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomDesign, {
                      onSelectFontIndex: handleSelectedFontIndex,
                      onSelectThemeColorIndex: handleSelectedThemeColorIndex
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "성함"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomOrganizers, {
                    onUpdateMaleName: handleUpdateMaleName,
                    onUpdateMaleRelation: handleUpdateMaleRelation,
                    onSelectMaleFatherLate: handleSelectMaleFatherLate,
                    onUpdateMaleFatherName: handleUpdateMaleFatherName,
                    onSelectMaleMotherLate: handleSelectMaleMotherLate,
                    onUpdateMaleMotherName: handleUpdateMaleMotherName,
                    onUpdateFemaleName: handleUpdateFemaleName,
                    onUpdateFemaleRelation: handleUpdateFemaleRelation,
                    onSelectFemaleFatherLate: handleSelectFemaleFatherLate,
                    onUpdateFemaleFatherName: handleUpdateFemaleFatherName,
                    onSelectFemaleMotherLate: handleSelectFemaleMotherLate,
                    onUpdateFemaleMotherName: handleUpdateFemaleMotherName,
                    onSelectShowFemaleFirst: handleSelectShowFemaleFirst,
                    onSelectShowLateAsFlower: handleSelectShowLateAsFlower
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomOrganizers, {
                      onUpdateMaleName: handleUpdateMaleName,
                      onUpdateMaleRelation: handleUpdateMaleRelation,
                      onSelectMaleFatherLate: handleSelectMaleFatherLate,
                      onUpdateMaleFatherName: handleUpdateMaleFatherName,
                      onSelectMaleMotherLate: handleSelectMaleMotherLate,
                      onUpdateMaleMotherName: handleUpdateMaleMotherName,
                      onUpdateFemaleName: handleUpdateFemaleName,
                      onUpdateFemaleRelation: handleUpdateFemaleRelation,
                      onSelectFemaleFatherLate: handleSelectFemaleFatherLate,
                      onUpdateFemaleFatherName: handleUpdateFemaleFatherName,
                      onSelectFemaleMotherLate: handleSelectFemaleMotherLate,
                      onUpdateFemaleMotherName: handleUpdateFemaleMotherName,
                      onSelectShowFemaleFirst: handleSelectShowFemaleFirst,
                      onSelectShowLateAsFlower: handleSelectShowLateAsFlower
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "메인"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "인사말"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomGreetings, {
                    greetingsTitle: unref(greetingsTitle),
                    greetingsContent: unref(greetingsContent),
                    onUpdateGreetingsTitle: handleUpdateGreetingsTitle,
                    onUpdateGreetingsText: handleUpdateGreetingsText
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomGreetings, {
                      greetingsTitle: unref(greetingsTitle),
                      greetingsContent: unref(greetingsContent),
                      onUpdateGreetingsTitle: handleUpdateGreetingsTitle,
                      onUpdateGreetingsText: handleUpdateGreetingsText
                    }, null, 8, ["greetingsTitle", "greetingsContent"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "일정 및 장소"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomEventDetails, {
                    onSelectedDate: handleSelectedDate,
                    onSelectedAddress: handleSelectedAddress,
                    onDetailedAddress: handleUpdateDetailedAddress
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomEventDetails, {
                      onSelectedDate: handleSelectedDate,
                      onSelectedAddress: handleSelectedAddress,
                      onDetailedAddress: handleUpdateDetailedAddress
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "교통수단"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "갤러리"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "공지사항"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomNotice, {
                    onUpdateNoticeTitle: updateNoticeTitle,
                    onUpdateNoticeContent: updateNoticeContent
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomNotice, {
                      onUpdateNoticeTitle: updateNoticeTitle,
                      onUpdateNoticeContent: updateNoticeContent
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "맺음말"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomClosings, { onUpdateClosingsContent: updateClosingsContent }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomClosings, { onUpdateClosingsContent: updateClosingsContent })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "연락처"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomContact, {
                    onUpdateMaleContactName1: updateMaleContactName1,
                    onUpdateMaleContactPhoneNumber1: updateMaleContactPhoneNumber1,
                    onUpdateMaleContactName2: updateMaleContactName2,
                    onUpdateMaleContactPhoneNumber2: updateMaleContactPhoneNumber2,
                    onUpdateMaleContactName3: updateMaleContactName3,
                    onUpdateMaleContactPhoneNumber3: updateMaleContactPhoneNumber3,
                    onUpdateFemaleContactName1: updateFemaleContactName1,
                    onUpdateFemaleContactPhoneNumber1: updateFemaleContactPhoneNumber1,
                    onUpdateFemaleContactName2: updateFemaleContactName2,
                    onUpdateFemaleContactPhoneNumber2: updateFemaleContactPhoneNumber2,
                    onUpdateFemaleContactName3: updateFemaleContactName3,
                    onUpdateFemaleContactPhoneNumber3: updateFemaleContactPhoneNumber3
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomContact, {
                      onUpdateMaleContactName1: updateMaleContactName1,
                      onUpdateMaleContactPhoneNumber1: updateMaleContactPhoneNumber1,
                      onUpdateMaleContactName2: updateMaleContactName2,
                      onUpdateMaleContactPhoneNumber2: updateMaleContactPhoneNumber2,
                      onUpdateMaleContactName3: updateMaleContactName3,
                      onUpdateMaleContactPhoneNumber3: updateMaleContactPhoneNumber3,
                      onUpdateFemaleContactName1: updateFemaleContactName1,
                      onUpdateFemaleContactPhoneNumber1: updateFemaleContactPhoneNumber1,
                      onUpdateFemaleContactName2: updateFemaleContactName2,
                      onUpdateFemaleContactPhoneNumber2: updateFemaleContactPhoneNumber2,
                      onUpdateFemaleContactName3: updateFemaleContactName3,
                      onUpdateFemaleContactPhoneNumber3: updateFemaleContactPhoneNumber3
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "계좌번호"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CustomBankDetails, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CustomBankDetails)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "방명록"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Accordion, {
              expanded: "",
              title: "공유링크"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputForm, { title: "카카오톡" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputForm, { title: "URL" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputForm, { title: "카카오톡" }),
                    createVNode(_component_InputForm, { title: "URL" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Accordion, {
                expanded: "",
                title: "디자인"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomDesign, {
                    onSelectFontIndex: handleSelectedFontIndex,
                    onSelectThemeColorIndex: handleSelectedThemeColorIndex
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "성함"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomOrganizers, {
                    onUpdateMaleName: handleUpdateMaleName,
                    onUpdateMaleRelation: handleUpdateMaleRelation,
                    onSelectMaleFatherLate: handleSelectMaleFatherLate,
                    onUpdateMaleFatherName: handleUpdateMaleFatherName,
                    onSelectMaleMotherLate: handleSelectMaleMotherLate,
                    onUpdateMaleMotherName: handleUpdateMaleMotherName,
                    onUpdateFemaleName: handleUpdateFemaleName,
                    onUpdateFemaleRelation: handleUpdateFemaleRelation,
                    onSelectFemaleFatherLate: handleSelectFemaleFatherLate,
                    onUpdateFemaleFatherName: handleUpdateFemaleFatherName,
                    onSelectFemaleMotherLate: handleSelectFemaleMotherLate,
                    onUpdateFemaleMotherName: handleUpdateFemaleMotherName,
                    onSelectShowFemaleFirst: handleSelectShowFemaleFirst,
                    onSelectShowLateAsFlower: handleSelectShowLateAsFlower
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "메인"
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "인사말"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomGreetings, {
                    greetingsTitle: unref(greetingsTitle),
                    greetingsContent: unref(greetingsContent),
                    onUpdateGreetingsTitle: handleUpdateGreetingsTitle,
                    onUpdateGreetingsText: handleUpdateGreetingsText
                  }, null, 8, ["greetingsTitle", "greetingsContent"])
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "일정 및 장소"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomEventDetails, {
                    onSelectedDate: handleSelectedDate,
                    onSelectedAddress: handleSelectedAddress,
                    onDetailedAddress: handleUpdateDetailedAddress
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "교통수단"
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "갤러리"
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "공지사항"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomNotice, {
                    onUpdateNoticeTitle: updateNoticeTitle,
                    onUpdateNoticeContent: updateNoticeContent
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "맺음말"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomClosings, { onUpdateClosingsContent: updateClosingsContent })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "연락처"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomContact, {
                    onUpdateMaleContactName1: updateMaleContactName1,
                    onUpdateMaleContactPhoneNumber1: updateMaleContactPhoneNumber1,
                    onUpdateMaleContactName2: updateMaleContactName2,
                    onUpdateMaleContactPhoneNumber2: updateMaleContactPhoneNumber2,
                    onUpdateMaleContactName3: updateMaleContactName3,
                    onUpdateMaleContactPhoneNumber3: updateMaleContactPhoneNumber3,
                    onUpdateFemaleContactName1: updateFemaleContactName1,
                    onUpdateFemaleContactPhoneNumber1: updateFemaleContactPhoneNumber1,
                    onUpdateFemaleContactName2: updateFemaleContactName2,
                    onUpdateFemaleContactPhoneNumber2: updateFemaleContactPhoneNumber2,
                    onUpdateFemaleContactName3: updateFemaleContactName3,
                    onUpdateFemaleContactPhoneNumber3: updateFemaleContactPhoneNumber3
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "계좌번호"
              }, {
                default: withCtx(() => [
                  createVNode(_component_CustomBankDetails)
                ]),
                _: 1
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "방명록"
              }),
              createVNode(_component_Accordion, {
                expanded: "",
                title: "공유링크"
              }, {
                default: withCtx(() => [
                  createVNode(_component_InputForm, { title: "카카오톡" }),
                  createVNode(_component_InputForm, { title: "URL" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/custom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C5DrYyqE.js.map

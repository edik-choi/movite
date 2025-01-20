import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-86b09f3e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.$slots.side && _ctx.$slots.contents) {
    _push(`<div class="flex_wrap" data-v-86b09f3e><div class="container_side_wrap" data-v-86b09f3e>`);
    ssrRenderSlot(_ctx.$slots, "side", {}, null, _push, _parent);
    _push(`</div><div class="container_contents_wrap" data-v-86b09f3e>`);
    ssrRenderSlot(_ctx.$slots, "contents", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-86b09f3e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Container-BWCA1HNG.mjs.map

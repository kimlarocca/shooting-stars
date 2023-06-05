import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, resolveComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _imports_0 = "" + publicAssetsURL("images/blank.png");
const _sfc_main$1 = {
  __name: "VStar",
  __ssrInlineRender: true,
  props: {
    index: {
      type: Number,
      default: null
    },
    item: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const visible = ref(false);
    const sizes = Array.from(
      { length: 150 },
      () => Math.floor(Math.random() * (320 - 175) + 175)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Divider = resolveComponent("Divider");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.item.c[__props.item.c.length - 1].v) {
        _push(`<div style="${ssrRenderStyle({ width: `${unref(sizes)[__props.index]}px` })}" class="${ssrRenderClass([{ "mt-4": __props.index === 0, "mt-6": __props.index === 2, "mt-3": __props.index === 4 }, "star clickable"])}"><img${ssrRenderAttr("src", __props.item.c[__props.item.c.length - 1].v)}${ssrRenderAttr("alt", `${__props.item.c[1].v} ${__props.item.c[2].v}`)}></div>`);
      } else {
        _push(`<div style="${ssrRenderStyle({ height: "300px", width: "300px" })}" class="star clickable"><div class="blank"><p>${ssrInterpolate(__props.item.c[1].v)}</p><img${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", `${__props.item.c[1].v} ${__props.item.c[2].v}`)}></div></div>`);
      }
      if (unref(visible)) {
        _push(`<div class="details"><i class="pi pi-times clickable"></i><div class="details-content w800"><h2>2023</h2>`);
        if (__props.item.c[__props.item.c.length - 1].v) {
          _push(`<img${ssrRenderAttr("src", __props.item.c[__props.item.c.length - 1].v)}${ssrRenderAttr("alt", `${__props.item.c[1].v} ${__props.item.c[2].v}`)}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<i class="pi pi-star-fill top"></i><i class="pi pi-star-fill bottom"></i></div><div class="custom-shape-divider-bottom-1682882926"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg></div><div class="details-bio"><div class="w800 m-auto"><h3 class="mb-5">${ssrInterpolate(__props.item.c[1].v)} ${ssrInterpolate(__props.item.c[2].v)}</h3>`);
        if ((_a = __props.item.c[3]) == null ? void 0 : _a.v) {
          _push(`<p>Nickname: ${ssrInterpolate(__props.item.c[3].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = __props.item.c[4]) == null ? void 0 : _b.v) {
          _push(`<p>Favorite Animal: ${ssrInterpolate(__props.item.c[4].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = __props.item.c[5]) == null ? void 0 : _c.v) {
          _push(`<p>Favorite Color: ${ssrInterpolate(__props.item.c[5].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = __props.item.c[6]) == null ? void 0 : _d.v) {
          _push(`<p>Favorite Subject: ${ssrInterpolate(__props.item.c[6].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_e = __props.item.c[7]) == null ? void 0 : _e.v) {
          _push(`<p>Favorite Hobby: ${ssrInterpolate(__props.item.c[7].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_f = __props.item.c[8]) == null ? void 0 : _f.v) {
          _push(`<p> What I to be when I grow up: ${ssrInterpolate(__props.item.c[8].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_g = __props.item.c[9]) == null ? void 0 : _g.v) {
          _push(`<p> What I&#39;m most excited about for middle school: ${ssrInterpolate(__props.item.c[9].v)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_h = __props.item.c[10]) == null ? void 0 : _h.v) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_Divider, { class: "my-5" }, null, _parent));
          _push(`<p>${ssrInterpolate(__props.item.c[10].v)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VStar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sheetData = ref(null);
    const sheetId = "1Q7uLWJv9Sdb6d5kyFjWTT9Z9reXf8RESU-pTR7f1tvQ";
    const sheetNumber = "0";
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&tq&gid=${sheetNumber}`;
    fetch(sheetUrl).then((response) => response.text()).then((data) => {
      let json_string = data.substring(47).slice(0, -2);
      let formattedData = JSON.parse(json_string);
      sheetData.value = formattedData.table.rows;
      sheetData.value.sort(() => Math.random() - 0.5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MasonryWall = resolveComponent("MasonryWall");
      const _component_v_star = __nuxt_component_0;
      if (unref(sheetData)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "home grid" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_MasonryWall, {
          items: unref(sheetData),
          "column-width": 320,
          "ssr-columns": 1,
          gap: 0,
          class: "w-full m-auto"
        }, {
          default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_star, {
                item,
                index
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_star, {
                  item,
                  index
                }, null, 8, ["item", "index"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-39473519.mjs.map

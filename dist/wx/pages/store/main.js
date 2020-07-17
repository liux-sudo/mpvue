require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(29);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60cc8878_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(34);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60cc8878_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/store/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60cc8878", Component.options)
  } else {
    hotAPI.reload("data-v-60cc8878", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//

// Use Vuex


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    count: function count() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.count;
    }
  },
  methods: {
    increment: function increment() {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('increment');
    },
    decrement: function decrement() {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('decrement');
    }
  }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__state_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__actions_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mutations_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__getters_js__);
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__state_js___default.a,
  getters: __WEBPACK_IMPORTED_MODULE_5__getters_js___default.a,
  mutations: __WEBPACK_IMPORTED_MODULE_4__mutations_js___default.a,
  actions: __WEBPACK_IMPORTED_MODULE_3__actions_js___default.a
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('p', [_vm._v("Vuex counter：" + _vm._s(_vm.count))]), _vm._v(" "), _c('p', [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60cc8878", esExports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {



/***/ }),

/***/ 44:
/***/ (function(module, exports) {



/***/ }),

/***/ 45:
/***/ (function(module, exports) {



/***/ }),

/***/ 47:
/***/ (function(module, exports) {



/***/ })

},[28]);
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail__ = __webpack_require__(43);



var detail = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__detail__["a" /* default */]);
detail.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_92bc3422_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_92bc3422_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92bc3422", Component.options)
  } else {
    hotAPI.reload("data-v-92bc3422", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);

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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      detailsList: {},
      isSc: false, // 是否收藏
      isMusic: false // 是否播放
    };
  },
  beforeMount: function beforeMount() {
    var index = this.$mp.query.index;
    var oldStorage = wx.getStorageSync('isSc');
    if (!oldStorage) {
      wx.setStorage({
        key: 'isSc',
        data: {}
      });
    } else {
      this.isSc = oldStorage[index] ? true : false;
    }
  },
  mounted: function mounted() {
    this.detailsList = this.listTem.list_data[this.$mp.query.index];
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['listTem'])),
  methods: {
    sc: function sc() {
      this.isSc = !this.isSc;
      var title = this.isSc ? '收藏成功' : '取消收藏';
      wx.showToast({
        title: title,
        icon: 'success',
        duration: 2000
      });

      var oldStorage = wx.getStorageSync('isSc');
      oldStorage[this.$mp.query.index] = this.isSc;
      wx.setStorage({
        key: 'isSc',
        data: oldStorage
      });
    },
    isMusicPlay: function isMusicPlay() {
      this.isMusic = !this.isMusic;
      var _detailsList$music = this.detailsList.music,
          dataUrl = _detailsList$music.dataUrl,
          title = _detailsList$music.title;

      if (this.isMusic) {
        console.log('进入', dataUrl);
        wx.playBackgroundAudio({
          dataUrl: dataUrl,
          title: title
        });
      } else {
        wx.pauseBackgroundAudio();
      }
    },
    share: function share() {
      wx.showActionSheet({
        itemList: ['分享到朋友圈', '分享给好友', '转发']
      });
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail_img"
  }, [_c('img', {
    staticClass: "detail_img_bg",
    attrs: {
      "src": _vm.detailsList.detail_img,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "music",
    attrs: {
      "src": _vm.isMusic ? '/static/images/music-start.png' : '/static/images/music-stop.png',
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.isMusicPlay
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "detail_from"
  }, [_c('img', {
    attrs: {
      "src": _vm.detailsList.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailsList.date))])]), _vm._v(" "), _c('p', {
    staticClass: "detail_title"
  }, [_vm._v(_vm._s(_vm.detailsList.title))]), _vm._v(" "), _c('div', {
    staticClass: "detail_content"
  }, [_c('div', {
    staticClass: "detail_content-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.isSc ? '/static/images/collection.png' : '/static/images/collection-anti.png',
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.sc
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/share.png",
      "alt": "",
      "eventid": '2'
    },
    on: {
      "click": _vm.share
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("转发此文章")]), _vm._v(" "), _c('p', {
    staticClass: "detail_footer_content"
  }, [_vm._v(_vm._s(_vm.detailsList.detail_content))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92bc3422", esExports)
  }
}

/***/ })

},[42]);
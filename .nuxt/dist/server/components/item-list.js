exports.ids = [1];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/itemList.vue?vue&type=template&id=69138f24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:{visited:_vm.isVisited}},[_c('NuxtLink',{attrs:{"to":_vm.item.date}},[_c('h2',{staticClass:"item-title"},[_c('span',[_vm._v(_vm._s(_vm.item.title))])]),_vm._v(" "),_c('div',{staticClass:"item-content"},[_c('div',{staticClass:"item-copyright"},[_vm._v(_vm._s(_vm.item.copyright))]),_vm._v(" "),_c('div',{staticClass:"item-date"},[_vm._v(_vm._s(_vm.item.date))])]),_vm._v(" "),_c('div',{staticClass:"item-img"},[(_vm.item.url.includes('image'))?_c('img',{attrs:{"src":_vm.item.url}}):(_vm.item.url.includes('youtube'))?_c('iframe',{attrs:{"type":"text/html","width":"640","height":"360","src":_vm.item.url,"frameborder":"0"}}):_vm._e()])]),_vm._ssrNode(" "),(_vm.isVisited)?_vm._ssrNode("<span class=\"ico-visited\">","</span>",[_c('font-awesome-icon',{attrs:{"icon":['fas', 'check']}})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/itemList.vue?vue&type=template&id=69138f24&

// EXTERNAL MODULE: ./plugins/para.js
var para = __webpack_require__(12);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/itemList.vue?vue&type=script&lang=js&
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


/* harmony default export */ var itemListvue_type_script_lang_js_ = ({
  name: "itemList",
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isVisited: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['getParallaxComponant'])
  },
  watch: {
    getParallaxComponant(val) {
      if (val.enabled) {
        this.lanchPara();
      }
    }

  },
  methods: {
    lanchPara() {
      let move = new para["b" /* ParallaxMove */]('.item', {
        translateX: [-50, 50],
        rotationZ: [3, -3]
      }, [0, 1]);
      move.load();
    }

  },

  mounted() {
    if (this.getParallaxComponant.enabled) {
      this.lanchPara();
    }

    if (localStorage.visited) {
      this.isVisited = JSON.parse(localStorage.visited).includes(this.item.date);
    }
  }

});
// CONCATENATED MODULE: ./components/itemList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_itemListvue_type_script_lang_js_ = (itemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/itemList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_itemListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2214e64a"
  
)

/* harmony default export */ var itemList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=item-list.js.map
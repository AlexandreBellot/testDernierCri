exports.ids = [2];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/itemSingle.vue?vue&type=template&id=359928e0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item-wrapper"},[_c('NuxtLink',{staticClass:"back-home btn-primary",attrs:{"to":"/"}},[_c('font-awesome-icon',{attrs:{"icon":['fas', 'arrow-circle-left']}}),_vm._v(" Back home")],1),_vm._ssrNode("<br> <h2 class=\"item-title\">"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</h2> <div class=\"item-img\"><div class=\"item-content\"><div class=\"item-copyright\">"+_vm._ssrEscape(_vm._s(_vm.item.copyright))+"</div> <div class=\"item-date\">"+_vm._ssrEscape(_vm._s(_vm.item.date))+"</div></div> "+((_vm.item.url.includes('image'))?("<img"+(_vm._ssrAttr("src",_vm.item.url))+">"):(_vm.item.url.includes('youtube'))?("<iframe type=\"text/html\" width=\"640\" height=\"360\""+(_vm._ssrAttr("src",_vm.item.url))+" frameborder=\"0\"></iframe>"):"<!---->")+"</div> <div class=\"item-desc\"><h3>Info :</h3>"+_vm._ssrEscape(_vm._s(_vm.item.explanation))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/itemSingle.vue?vue&type=template&id=359928e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/itemSingle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var itemSinglevue_type_script_lang_js_ = ({
  name: "itemSingle",
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

  mounted() {
    if (localStorage.visited) {
      this.isVisited = JSON.parse(localStorage.visited).includes(this.item.date);
    }
  }

});
// CONCATENATED MODULE: ./components/itemSingle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_itemSinglevue_type_script_lang_js_ = (itemSinglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/itemSingle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_itemSinglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "501c9ff4"
  
)

/* harmony default export */ var itemSingle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=item-single.js.map
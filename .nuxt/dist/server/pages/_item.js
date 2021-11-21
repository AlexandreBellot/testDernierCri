exports.ids = [3];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_item.vue?vue&type=template&id=414e55ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item)?_c('section',{staticClass:"single-picture"},[_c('itemSingle',{attrs:{"item":_vm.item}})],1):_c('section',{staticClass:"loading"},[_vm._ssrNode("\n  Loading ...\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_item.vue?vue&type=template&id=414e55ce&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _itemvue_type_script_lang_js_ = ({
  name: "singleItem",

  data() {
    return {
      picture: null,
      item: null
    };
  },

  async fetch() {
    console.log(this.getData.filter(pic => pic.date === this.$router.currentRoute.params.item));

    if (this.getData.length && this.getData.filter(pic => pic.date === this.$router.currentRoute.params.item)) {
      const data = this.getData.filter(pic => pic.date === this.$router.currentRoute.params.item);
      this.item = data[0];
    } else {
      const data = await this.$http.$get(this.getUrl(this.$router.currentRoute.params.item));
      this.item = data[0];
    }
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['getUrl', 'getData'])
  },

  mounted() {
    this.$store.commit('setPageItem', true);

    if (localStorage.visited) {
      const local = JSON.parse(localStorage.visited);
      localStorage.visited = JSON.stringify([...local, this.$router.currentRoute.params.item]);
    } else {
      localStorage.visited = JSON.stringify([this.$router.currentRoute.params.item]);
    }
  }

});
// CONCATENATED MODULE: ./pages/_item.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_itemvue_type_script_lang_js_ = (_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/_item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15777887"
  
)

/* harmony default export */ var _item = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_item.js.map
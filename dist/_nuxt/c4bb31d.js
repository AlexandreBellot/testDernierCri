(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{305:function(t,e,r){"use strict";r.r(e);r(40),r(39),r(47),r(16),r(55),r(30),r(56);var n=r(22),c=r(7),o=(r(57),r(71));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"Home",data:function(){return{data:[],pictures:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.getData.length),!t.getData.length){e.next=5;break}t.pictures=t.getData,e.next=9;break;case 5:return e.next=7,t.$http.$get(t.getUrl(null));case 7:t.pictures=e.sent,t.$store.commit("setData",t.pictures);case 9:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["getUrl","getData"])),mounted:function(){this.$store.commit("setPageItem",!1)}},O=f,m=r(73),component=Object(m.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pictures?r("section",{staticClass:"list-picture"},t._l(t.pictures,(function(t){return r("itemList",{key:t.title,staticClass:"item",attrs:{item:t}})})),1):r("section",{staticClass:"loading"},[t._v("\n   Loading ...\n ")])}),[],!1,null,null,null);e.default=component.exports}}]);
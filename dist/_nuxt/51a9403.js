(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{306:function(t,e,r){"use strict";r.r(e);r(40),r(39),r(55),r(30),r(56);var n=r(151),o=r(22),c=r(7),l=(r(57),r(47),r(16),r(99),r(71));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"singleItem",data:function(){return{picture:null,item:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.getData.filter((function(e){return e.date===t.$router.currentRoute.params.item}))),!t.getData.length||!t.getData.filter((function(e){return e.date===t.$router.currentRoute.params.item}))){e.next=6;break}data=t.getData.filter((function(e){return e.date===t.$router.currentRoute.params.item})),t.item=data[0],e.next=10;break;case 6:return e.next=8,t.$http.$get(t.getUrl(t.$router.currentRoute.params.item));case 8:r=e.sent,t.item=r[0];case 10:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["getUrl","getData"])),mounted:function(){if(this.$store.commit("setPageItem",!0),localStorage.visited){var t=JSON.parse(localStorage.visited);localStorage.visited=JSON.stringify([].concat(Object(n.a)(t),[this.$router.currentRoute.params.item]))}else localStorage.visited=JSON.stringify([this.$router.currentRoute.params.item])}},O=m,d=r(73),component=Object(d.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("section",{staticClass:"single-picture"},[r("itemSingle",{attrs:{item:t.item}})],1):r("section",{staticClass:"loading"},[t._v("\n  Loading ...\n")])}),[],!1,null,null,null);e.default=component.exports}}]);
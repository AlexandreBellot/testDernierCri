(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{307:function(t,e,r){"use strict";r.r(e);r(40),r(39),r(47),r(16),r(55),r(30),r(56);var n=r(22),c=(r(58),r(72),r(150)),o=r(71);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"itemList",props:{item:{type:Object,required:!0}},data:function(){return{isVisited:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["getParallaxComponant"])),watch:{getParallaxComponant:function(t){t.enabled&&this.lanchPara()}},methods:{lanchPara:function(){new c.b(".item",{translateX:[-50,50],rotationZ:[3,-3]},[0,1]).load()}},mounted:function(){this.getParallaxComponant.enabled&&this.lanchPara(),localStorage.visited&&(this.isVisited=JSON.parse(localStorage.visited).includes(this.item.date))}},d=m,f=r(73),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{class:{visited:t.isVisited}},[r("NuxtLink",{attrs:{to:t.item.date}},[r("h2",{staticClass:"item-title"},[r("span",[t._v(t._s(t.item.title))])]),t._v(" "),r("div",{staticClass:"item-content"},[r("div",{staticClass:"item-copyright"},[t._v(t._s(t.item.copyright))]),t._v(" "),r("div",{staticClass:"item-date"},[t._v(t._s(t.item.date))])]),t._v(" "),r("div",{staticClass:"item-img"},[t.item.url.includes("image")?r("img",{attrs:{src:t.item.url}}):t.item.url.includes("youtube")?r("iframe",{attrs:{type:"text/html",width:"640",height:"360",src:t.item.url,frameborder:"0"}}):t._e()])]),t._v(" "),t.isVisited?r("span",{staticClass:"ico-visited"},[r("font-awesome-icon",{attrs:{icon:["fas","check"]}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,s={pin:0,unpin:0,tolerance:5};class o{constructor(t,e={}){if(this.opts={},this.header="string"==typeof t?document.querySelector(t):t,!t)return;const n=Object.keys(o.options);for(let t=0;t<n.length;t++)this.opts[n[t]]=e[n[t]]||o.options[n[t]];this.initScroll()}initScroll(){if(!1===this.opts.unpin)return;this.header.classList.add("mh-sticky");var t=2*this.header.offsetHeight;this.opts.unpin=Math.max(t,this.opts.unpin||0),this.opts.pin=Math.max(t,this.opts.pin||0),this.state=null;var e=0;const n=(t={})=>{var n=document.documentElement.scrollTop||document.body.scrollTop,i=e-n,s=i<0?"down":"up";i=Math.abs(i),e=n,this.state==o.UNPINNED?"up"==s&&(n<this.opts.pin||i>this.opts.tolerance)&&this.pin():this.state==o.PINNED?"down"==s&&n>this.opts.unpin&&i>this.opts.tolerance&&this.unpin():this.pin()};window.addEventListener("scroll",n,{passive:!0}),n()}pin(){this.header.classList.add("mh-pinned"),this.header.classList.remove("mh-unpinned"),this.state=o.PINNED}unpin(){this.header.classList.remove("mh-pinned"),this.header.classList.add("mh-unpinned"),this.state=o.UNPINNED}}o.version="2.1.0",o.options=s,o.PINNED="pinned",o.UNPINNED="unpinned",
/*!
 * mhead.js
 * mmenu.frebsite.nl/mhead
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
window&&(window.Mhead=o,(i=window.jQuery||window.Zepto||null)&&(i.fn.mhead=function(t){return this.each((e,n)=>{new o(n,t)})}))}]);
//# sourceMappingURL=mhead.js.map

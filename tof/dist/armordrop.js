!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e){$(document).ready(function(){$("#dropdown li ul").hide(),$("#dropdown li").hover(function(){$(this).find("ul").slideDown("fast"),$(this).find("a:first").addClass("act")},function(){$(this).find("#submenu").fadeOut("fast"),$(this).find("a").removeClass("act")})})},function(t,e){var n=["./tof/sass/armor/1.png","./tof/sass/armor/2.png","./tof/sass/armor/3.png","./tof/sass/armor/4.png","./tof/sass/armor/5.png","./tof/sass/armor/6.png"];window.onload=function(){for(var t="",e=0;e<6;e++)t+=`<img src="${n[e]}" width="700px" height="400px" >`;document.getElementById("textcontainer").innerHTML='<h2 style="font-size:50px"><b>Armor盔甲(金框為節慶限定)</b></h2>'+t+' <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://tol.fandom.com/wiki/</div>'}}]);
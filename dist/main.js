(()=>{"use strict";var e={28:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]),i.push([e.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  height: 100%;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 20px;\r\n  background: linear-gradient(to right, #383838, #868686);\r\n  color: #fff;\r\n}\r\n\r\n.content {\r\n  background-color: grey;\r\n  height: 100%;\r\n  display: grid;\r\n}\r\n\r\n.counter {\r\n  font-size: 7rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-shadow: 3px 3px black;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.one {\r\n  background: linear-gradient(#ff0000, #ff4848);\r\n}\r\n\r\n.increase, .decrease {\r\n  position: absolute;\r\n  justify-content: center;\r\n  display: flex;\r\n  height: 100%;\r\n  width: 50%;\r\n  background-color: rgba(59, 59, 59, 0.1);\r\n  opacity: 0;\r\n  align-items: center;\r\n  user-select: none;\r\n}\r\n\r\n.increase:hover, .decrease:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.increase {\r\n  justify-content: end;\r\n  padding-right: 30px;\r\n  right: 0;\r\n}\r\n\r\n.decrease {\r\n  justify-content: start;\r\n  padding-left: 30px;\r\n  left: 0;\r\n}\r\n\r\n.settings {\r\n  cursor: pointer;\r\n  user-select: none;\r\n  background-color: rgb(68, 68, 68);\r\n  padding: 7px 15px;\r\n  border-radius: 5px;\r\n  border: 1px solid rgb(209, 209, 209);\r\n}\r\n\r\n.settings:hover {\r\n  background-color: rgb(58, 58, 58);\r\n}\r\n\r\n.settings-menu {\r\n  position: absolute;\r\n  background-color: rgb(255, 255, 255);\r\n  color: black;\r\n  top: 60px;\r\n  right: 20px;\r\n  z-index: 1;\r\n  padding: 10px;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var g=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),d=0;d<a.length;d++){var l=r(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),d=r(216),l=r.n(d),u=r(589),p=r.n(u),f=r(28),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".content"),v=document.querySelector(".settings"),m=document.querySelector(".settings-menu"),y=document.querySelector("#inc"),b=document.querySelector("#reset");let x=1;v.addEventListener("click",(()=>{m.classList.toggle("hidden")})),document.addEventListener("click",(e=>{e.target===v||e.target===m||m.contains(e.target)||m.classList.add("hidden")})),y.addEventListener("change",(e=>{x=Number(e.target.value)})),b.addEventListener("click",(()=>{document.querySelectorAll(".counter").forEach((e=>{e.querySelector(".counter-value").textContent=0}))})),function(){const e=document.createElement("div");e.classList.add("counter"),e.classList.add("one");const n=document.createElement("span");n.classList.add("counter-value"),n.textContent=0,e.appendChild(n);const r=document.createElement("div");r.classList.add("decrease"),r.textContent="−",e.appendChild(r);const t=document.createElement("div");t.classList.add("increase"),t.textContent="+",e.appendChild(t),h.appendChild(e),r.addEventListener("click",(()=>{const e=Number(n.textContent);n.textContent=e-x})),t.addEventListener("click",(()=>{const e=Number(n.textContent);n.textContent=e+x}))}()})()})();
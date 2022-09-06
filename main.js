(()=>{"use strict";var e={28:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(81),o=n.n(t),a=n(645),s=n.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]),s.push([e.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\r\n  touch-action: manipulation;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-flow: column;\r\n  height: 100%;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 20px;\r\n  background: linear-gradient(to right, #383838, #868686);\r\n  color: #fff;\r\n}\r\n\r\n.content {\r\n  background-color: grey;\r\n  height: 100%;\r\n  display: grid;\r\n}\r\n\r\n.counter {\r\n  font-size: 7rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-shadow: 3px 3px black;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.one {\r\n  background-color: #ff0000;\r\n}\r\n\r\n.two {\r\n  background-color: #0008FF;\r\n}\r\n\r\n.three {\r\n  background-color: #FAFF00;\r\n}\r\n\r\n.four {\r\n  background-color: #00FF00;\r\n}\r\n\r\n.five {\r\n  background-color: #7B00FF;\r\n}\r\n\r\n.six {\r\n  background-color: #FF7B00;\r\n}\r\n\r\n.increase, .decrease {\r\n  position: absolute;\r\n  justify-content: center;\r\n  display: flex;\r\n  height: 100%;\r\n  width: 50%;\r\n  background-color: rgba(59, 59, 59, 0.1);\r\n  opacity: 0;\r\n  align-items: center;\r\n  user-select: none;\r\n}\r\n\r\n.increase:hover, .decrease:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.increase {\r\n  justify-content: end;\r\n  padding-right: 30px;\r\n  right: 0;\r\n}\r\n\r\n.decrease {\r\n  justify-content: start;\r\n  padding-left: 30px;\r\n  left: 0;\r\n}\r\n\r\n.settings {\r\n  cursor: pointer;\r\n  user-select: none;\r\n  background-color: rgb(68, 68, 68);\r\n  padding: 7px 15px;\r\n  border-radius: 5px;\r\n  border: 1px solid rgb(209, 209, 209);\r\n}\r\n\r\n.settings:hover {\r\n  background-color: rgb(58, 58, 58);\r\n}\r\n\r\n.settings-menu {\r\n  position: absolute;\r\n  background-color: rgb(255, 255, 255);\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  color: black;\r\n  top: 60px;\r\n  right: 20px;\r\n  z-index: 1;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.num-counters {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#inc {\r\n  margin-left: 25px;\r\n  width: 45px;\r\n}\r\n\r\n#remove, #add {\r\n  width: 20px;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}',""]);const i=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=t.base?c[0]+t.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=i,r.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);r[i].references--}for(var c=t(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),s=n.n(a),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(28),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".content"),y=document.querySelector(".settings"),v=document.querySelector(".settings-menu"),h=document.querySelector("#inc"),b=document.querySelector("#reset"),x=document.querySelector("#add"),k=document.querySelector("#remove");let C=1,w=0;function S(){w+=1;const e=document.createElement("div");switch(e.classList.add("counter"),w){case 1:e.classList.add("one"),k.disabled=!0;break;case 2:e.classList.add("two"),g.style.gridTemplateColumns="1fr 1fr",k.disabled=!1;break;case 3:e.classList.add("three"),g.style.gridTemplateColumns="1fr 1fr 1fr";break;case 4:e.classList.add("four"),g.style.gridTemplateColumns="1fr 1fr",g.style.gridTemplateRows="1fr 1fr";break;case 5:e.classList.add("five"),g.style.gridTemplateColumns="1fr 1fr 1fr",g.style.gridTemplateRows="1fr 1fr",e.style.gridRow="1 / 3",e.style.gridColumn="3 / 4";break;case 6:e.classList.add("six"),g.style.gridTemplateColumns="1fr 1fr 1fr",g.style.gridTemplateRows="1fr 1fr",document.querySelector(".five").style.gridRow="",document.querySelector(".five").style.gridColumn="",x.disabled=!0;break;default:e.classList.add("one")}const r=document.createElement("span");r.classList.add("counter-value"),r.textContent=0,e.appendChild(r);const n=document.createElement("div");n.classList.add("decrease"),n.textContent="−",e.appendChild(n);const t=document.createElement("div");t.classList.add("increase"),t.textContent="+",e.appendChild(t),g.appendChild(e),n.addEventListener("click",(()=>{const e=Number(r.textContent);r.textContent=e-C})),t.addEventListener("click",(()=>{const e=Number(r.textContent);r.textContent=e+C}))}y.addEventListener("click",(()=>{v.classList.toggle("hidden")})),document.addEventListener("click",(e=>{e.target===y||e.target===v||v.contains(e.target)||v.classList.add("hidden")})),h.addEventListener("change",(e=>{C=Number(e.target.value)})),b.addEventListener("click",(()=>{document.querySelectorAll(".counter").forEach((e=>{e.querySelector(".counter-value").textContent=0}))})),S(),k.addEventListener("click",(()=>{!function(){switch(w){case 2:g.style.gridTemplateColumns="1fr",document.querySelector(".two").remove(),k.disabled=!0;break;case 3:g.style.gridTemplateColumns="1fr 1fr",document.querySelector(".three").remove();break;case 4:g.style.gridTemplateColumns="1fr 1fr 1fr",g.style.gridTemplateRows="1fr",document.querySelector(".four").remove();break;case 5:g.style.gridTemplateColumns="1fr 1fr",g.style.gridTemplateRows="1fr 1fr",document.querySelector(".five").remove();break;case 6:g.style.gridTemplateColumns="1fr 1fr 1fr",g.style.gridTemplateRows="1fr 1fr",document.querySelector(".six").remove(),document.querySelector(".five").style.gridRow="1 / 3",document.querySelector(".five").style.gridColumn="3 / 4",x.disabled=!1;break;default:g.style.gridTemplateColumns="1fr",document.querySelector(".two").remove()}w-=1}()})),x.addEventListener("click",(()=>{S()}))})()})();
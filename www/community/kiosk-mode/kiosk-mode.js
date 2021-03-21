"use strict";function e(e,t){return o(e)||r(e,t)||c(e,t)||n()}function n(){throw new TypeError(
"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function r(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(
a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}
return n}}function o(e){if(Array.isArray(e))return e}function t(e){return s(e)||a(e)||c(e)||i()}function i(){throw new TypeError(
"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e){
if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return d(e)}function k(e,t){var n
;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(
){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError(
"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,
a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{
i||null==n.return||n.return()}finally{if(a)throw o}}}}function c(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e
).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e
):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,
r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=document.querySelector("home-assistant"),l=b.shadowRoot.querySelector("home-assistant-main"
).shadowRoot,u=l.querySelector("partial-panel-resolver"),w=l.querySelector("app-drawer-layout"),_=b.hass.user,g=0;function h(){var e=l.querySelector(
"ha-panel-lovelace");!x("disable_km")&&e&&f(e)}function f(t){g++;try{var e=t.lovelace.config.kiosk_mode||{};m(t,e)}catch(e){g<40&&setTimeout(function(
){return f(t)},50)}}function S(e){return Array.isArray(e)?e:[e]}function x(e){return S(e).some(function(e){return window.location.search.includes(e)})
}function A(e,t){S(e).forEach(function(e){return window.localStorage.setItem(e,t)})}function I(e){return"true"==window.localStorage.getItem(e)}
function y(e){return e.querySelector("#kiosk_mode_".concat(e.localName))}function j(e,t){var n;y(t)||((n=document.createElement("style")
).setAttribute("id","kiosk_mode_".concat(t.localName)),n.innerHTML=e,t.appendChild(n))}function E(e){S(e).forEach(function(e){y(e)&&e.querySelector(
"#kiosk_mode_".concat(e.localName)).remove()})}function m(e,t){g=0;var n=e.shadowRoot.querySelector("hui-root").shadowRoot,r=n.querySelector(
"app-toolbar"),o=b.hass.states,i=t.admin_settings,a=t.non_admin_settings,s=t.entity_settings,c=t.user_settings,d=!1,l=I("kmHeader")||x(["kiosk",
"hide_header"]),e=(u=I("kmSidebar")||x(["kiosk","hide_sidebar"]))||l,l=e?l:t.kiosk||t.hide_header,u=e?u:t.kiosk||t.hide_sidebar;if(i&&_.is_admin&&(
l=i.kiosk||i.hide_header,u=i.kiosk||i.hide_sidebar,d=i.ignore_entity_settings),a&&!_.is_admin&&(l=a.kiosk||a.hide_header,u=a.kiosk||a.hide_sidebar,
d=a.ignore_entity_settings),c){var h=k(S(c));try{for(h.s();!(f=h.n()).done;){var f=f.value;S(f.users).some(function(e){return e.toLowerCase(
)==_.name.toLowerCase()})&&(l=f.kiosk||f.hide_header,u=f.kiosk||f.hide_sidebar,d=f.ignore_entity_settings)}}catch(e){h.e(e)}finally{h.f()}}if(s&&!d){
var y=k(s);try{for(y.s();!(v=y.n()).done;){var m=v.value,p=Object.keys(m.entity)[0],v=m.entity[p];window.kiosk_entities.includes(p
)||window.kiosk_entities.push(p),o[p].state==v&&("hide_header"in m&&(l=m.hide_header),"hide_sidebar"in m&&(u=m.hide_sidebar),"kiosk"in m&&(l=u=m.kiosk
))}}catch(e){y.e(e)}finally{y.f()}}l?(j("#view{min-height:100vh !important;--header-height:0;}app-header{display:none;}",n),x("cache")&&A("kmHeader",
"true")):E(n),u?(j(":host{--app-drawer-width:0 !important;}#drawer{display:none;}",w),j("ha-menu-button{display:none !important;}",r),x("cache")&&A(
"kmSidebar","true")):E([r,w]),window.dispatchEvent(new Event("resize"))}function p(){window.hassConnection.then(function(e){var t=e.conn
;t.connected&&(t.socket.onclose=function(){window.kiosk_interval=setInterval(function(){t.connected&&clearInterval(window.kiosk_interval),p()},5e3)},
t.socket.onmessage=function(t){var e;t.data&&window.kiosk_entities.some(function(e){return t.data.includes(e)&&t.data.includes("state_changed")})&&((
e=JSON.parse(t.data).event).data.new_state.state!=e.data.old_state.state&&h())})})}function v(e){M(e,"ha-panel-lovelace",O)}function O(e){M(e,
"hui-root",q)}function q(e){M(e,"ha-app-layout",null)}function M(e,t,n){var r,o=k(e);try{for(o.s();!(r=o.n()).done;){var i=k(r.value.addedNodes);try{
for(i.s();!(a=i.n()).done;){var a=a.value;if(a.localName==t)return void(n?new MutationObserver(n).observe(a.shadowRoot,{childList:!0}):h())}}catch(e){
i.e(e)}finally{i.f()}}}catch(e){o.e(e)}finally{o.f()}}window.kiosk_entities=[],x("clear_km_cache")&&A(["kmHeader","kmSidebar"],"false"),h(),p(),
new MutationObserver(v).observe(u,{childList:!0});for(var N={header:"%c≡ kiosk-mode".padEnd(27),ver:"%cversion 1.6.1 "},C="%c\n",L=Math.max.apply(Math
,t(Object.values(N).map(function(e){return e.length}))),R=0,T=Object.entries(N);R<T.length;R++){var H=e(T[R],1),z=H[0];N[z].length<=L&&(
N[z]=N[z].padEnd(L)),"header"==z&&(N[z]="".concat(N[z].slice(0,-1),"⋮ "))}
var J="display:inline-block;border-width:1px 1px 0 1px;border-style:solid;border-color:#424242;color:white;background:#03a9f4;font-size:12px;padding:4px 4.5px 5px 6px;"
,U="border-width:0px 1px 1px 1px;padding:7px;background:white;color:#424242;line-height:0.7;";console.info(N.header+C+N.ver,J,"","".concat(J," "
).concat(U));
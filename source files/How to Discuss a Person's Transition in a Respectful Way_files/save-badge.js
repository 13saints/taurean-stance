(window.webpackJsonp=window.webpackJsonp||[]).push([["save-badge"],{"0qde":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("mXGw")),o=c(r("UutA")),a=c(r("iPmK")),i=c(r("5Zck")),l=c(r("YXjR"));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=o.default.div.withConfig({componentId:"sc-1mn1yww-0"})(["font-size:10px;font-weight:400;line-height:1.3;letter-spacing:0.2px;text-transform:uppercase;text-align:center;margin-top:6px;",""],function(e){return e.isBigger&&"\n\t\tfont-size: 16px;\n\t\tline-height: 24px;\n\t\ttext-transform: inherit;\n\t\tmargin-top: 0;\n\t"}),d=o.default.div.withConfig({componentId:"sc-1mn1yww-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;color:",";&:hover{color:",";}"],function(e){return e.withoutThemeColor?e.theme.color.gray:e.isSaved?e.theme.color.primary:e.theme.color.gray},function(e){return e.withoutThemeColor?e.theme.color.gray:e.theme.color.primary});var s=function(e){var t=e||{},r=t.saveCount,o=void 0===r?0:r,c=t.iconOnly,s=void 0!==c&&c,p=t.isSaved,v=void 0!==p&&p,g=t.label,m=void 0===g?"Save":g,y=t.onClick,h=t.isBigger,w=void 0!==h&&h,O=y&&y.bind(this,!v);return n.createElement(d,u({},e,{onClick:O}),v?n.createElement(i.default,null):n.createElement(a.default,null),!s&&n.createElement(f,{isBigger:w},o>0?(0,l.default)(o):m))};t.default=s,e.exports=t.default},"5Zck":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("mXGw")),a=(n=r("Bgts"))&&n.__esModule?n:{default:n};var i=function(e){return o.createElement("svg",e,o.createElement("path",{fillRule:"evenodd",d:"M9 11.24l-5.13 5.6A.5.5 0 0 1 3 16.5v-15c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v15a.5.5 0 0 1-.87.33L9 11.24z"}))};i.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18","aria-label":"BookmarkFilled icon",viewBox:"0 0 18 18"};var l=function(e){return o.createElement(a.default,e,o.createElement(i,null))};t.default=l,e.exports=t.default},xm6z:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulSaveBadge=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("mXGw")),o=i(r("JqHh")),a=i(r("0qde"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.data,r=e.children;return n.createElement("div",{className:(0,o.default)("js_save-badge",t.className),"data-state":JSON.stringify(t),"data-post-id":t.postId,"data-post-permalink":t.postPermalink},r)};t.StatefulSaveBadge=function(e){return n.createElement(c,l({data:e},e),n.createElement(a.default,e))};var u=a.default;t.default=u}}]);
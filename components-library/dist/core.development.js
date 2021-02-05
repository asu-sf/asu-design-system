!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("AsuWebcore",[],t):"object"==typeof exports?exports.AsuWebcore=t():e.AsuWebcore=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){e.exports=n(3)()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e,r){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return Oe})),n.d(t,"b",(function(){return ke}));var l=function(){},f={},u={},d={mark:l,measure:l};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(u=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(d=performance)}catch(e){}var p=(f.navigator||{}).userAgent,h=void 0===p?"":p,m=f,g=u,b=d,v=(m.document,!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement),y=(~h.indexOf("MSIE")||h.indexOf("Trident/"),function(){try{}catch(e){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),_=y.concat([11,12,13,14,15,16,17,18,19,20]),w={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",w.GROUP,w.SWAP_OPACITY,w.PRIMARY,w.SECONDARY].concat(y.map((function(e){return"".concat(e,"x")}))).concat(_.map((function(e){return"w-".concat(e)}))),m.FontAwesomeConfig||{});if(g&&"function"==typeof g.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=c(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=g.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(x[r]=i)}))}var k=s({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},x);k.autoReplaceSvg||(k.observeMutations=!1);var O=s({},k);m.FontAwesomeConfig=O;var A=m||{};A.___FONT_AWESOME___||(A.___FONT_AWESOME___={}),A.___FONT_AWESOME___.styles||(A.___FONT_AWESOME___.styles={}),A.___FONT_AWESOME___.hooks||(A.___FONT_AWESOME___.hooks={}),A.___FONT_AWESOME___.shims||(A.___FONT_AWESOME___.shims=[]);var C=A.___FONT_AWESOME___,z=[];v&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",(function e(){g.removeEventListener("DOMContentLoaded",e),1,z.map((function(e){return e()}))})));var S,T=function(){},j=void 0!==e&&void 0!==e.process&&"function"==typeof e.process.emit,P=void 0===r?setTimeout:r,$=[];function E(){for(var e=0;e<$.length;e++)$[e][0]($[e][1]);$=[],S=!1}function M(e,t){$.push([e,t]),S||(S=!0,P(E,0))}function L(e){var t=e.owner,n=t._state,r=t._data,i=e[n],o=e.then;if("function"==typeof i){n="fulfilled";try{r=i(r)}catch(e){R(o,e)}}N(o,r)||("fulfilled"===n&&I(o,r),"rejected"===n&&R(o,r))}function N(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===i(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){n||(n=!0,t===r?F(e,r):I(e,r))}),(function(t){n||(n=!0,R(e,t))})),!0}}catch(t){return n||R(e,t),!0}return!1}function I(e,t){e!==t&&N(e,t)||F(e,t)}function F(e,t){"pending"===e._state&&(e._state="settled",e._data=t,M(U,e))}function R(e,t){"pending"===e._state&&(e._state="settled",e._data=t,M(D,e))}function H(e){e._then=e._then.forEach(L)}function U(e){e._state="fulfilled",H(e)}function D(t){t._state="rejected",H(t),!t._handled&&j&&e.process.emit("unhandledRejection",t._data,t)}function W(t){e.process.emit("rejectionHandled",t)}function V(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof V==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){R(t,e)}try{e((function(e){I(t,e)}),n)}catch(e){n(e)}}(e,this)}V.prototype={constructor:V,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(T),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&j&&M(W,this)),"fulfilled"===this._state||"rejected"===this._state?M(L,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},V.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new V((function(t,n){var r=[],i=0;function o(e){return i++,function(n){r[e]=n,--i||t(r)}}for(var a,s=0;s<e.length;s++)(a=e[s])&&"function"==typeof a.then?a.then(o(s),n):r[s]=a;i||t(r)}))},V.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new V((function(t,n){for(var r,i=0;i<e.length;i++)(r=e[i])&&"function"==typeof r.then?r.then(t,n):t(r)}))},V.resolve=function(e){return e&&"object"===i(e)&&e.constructor===V?e:new V((function(t){t(e)}))},V.reject=function(e){return new V((function(t,n){n(e)}))};var q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Y(e){if(e&&v){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=g.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return g.head.insertBefore(t,r),e}}function B(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function X(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n],";")}),"")}function K(e){return e.size!==q.size||e.x!==q.x||e.y!==q.y||e.rotate!==q.rotate||e.flipX||e.flipY}function Z(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(o," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var J={x:0,y:0,width:"100%",height:"100%"};function Q(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ee(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,c=e.symbol,l=e.title,f=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,h=void 0!==p&&p,m=r.found?r:n,g=m.width,b=m.height,v="fa-w-".concat(Math.ceil(g/b*16)),y=[O.replacementClass,o?"".concat(O.familyPrefix,"-").concat(o):"",v].filter((function(e){return-1===d.classes.indexOf(e)})).concat(d.classes).join(" "),_={children:[],attributes:s({},d.attributes,{"data-prefix":i,"data-icon":o,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)})};h&&(_.attributes["data-fa-i2svg"]=""),l&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||B())},children:[l]});var w=s({},_,{prefix:i,iconName:o,main:n,mask:r,maskId:f,transform:a,symbol:c,styles:d.styles}),x=r.found&&n.found?function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.mask,a=e.maskId,c=e.transform,l=i.width,f=i.icon,u=o.width,d=o.icon,p=Z({transform:c,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:s({},J,{fill:"white"})},m=f.children?{children:f.children.map(Q)}:{},g={tag:"g",attributes:s({},p.inner),children:[Q(s({tag:f.tag,attributes:s({},f.attributes,p.path)},m))]},b={tag:"g",attributes:s({},p.outer),children:[g]},v="mask-".concat(a||B()),y="clip-".concat(a||B()),_={tag:"mask",attributes:s({},J,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=d,"g"===t.tag?t.children:[t])},_]};return n.push(w,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},J)}),{children:n,attributes:r}}(w):function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,o=G(e.styles);if(o.length>0&&(n.style=o),K(i)){var a=Z({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:s({},a.outer),children:[{tag:"g",attributes:s({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:s({},r.icon.attributes,a.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}(w),k=x.children,A=x.attributes;return w.children=k,w.attributes=A,c?function(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s({},i,{id:!0===o?"".concat(t,"-").concat(O.familyPrefix,"-").concat(n):o}),children:r}]}]}(w):function(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(K(a)&&n.found&&!r.found){var c={x:n.width/n.height/2,y:.5};i.style=G(s({},o,{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(w)}var te=function(){},ne=(O.measurePerformance&&b&&b.mark&&b.measure,function(e,t,n,r){var i,o,a,s=Object.keys(e),c=s.length,l=void 0!==r?function(e,t){return function(n,r,i,o){return e.call(t,n,r,i,o)}}(t,r):t;for(void 0===n?(i=1,a=e[s[0]]):(i=0,a=n);i<c;i++)a=l(a,e[o=s[i]],o,e);return a});function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof C.hooks.addPack||i?C.styles[e]=s({},C.styles[e]||{},o):C.hooks.addPack(e,o),"fas"===e&&re("fa",t)}var ie=C.styles,oe=C.shims,ae=function(){var e=function(e){return ne(ie,(function(t,n,r){return t[r]=ne(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in ie;ne(oe,(function(e,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||t||(i="fas"),e[r]={prefix:i,iconName:o},e}),{})};ae();C.styles;function se(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function ce(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,o=void 0===i?[]:i;return"string"==typeof e?X(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(X(e[n]),'" ')}),"").trim()}(r),">").concat(o.map(ce).join(""),"</").concat(t,">")}var le=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),t):t};function fe(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}fe.prototype=Object.create(Error.prototype),fe.prototype.constructor=fe;var ue={fill:"currentColor"},de={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},pe={tag:"path",attributes:s({},ue,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},he=s({},de,{attributeName:"opacity"});s({},ue,{cx:"256",cy:"364",r:"28"}),s({},de,{attributeName:"r",values:"28;14;28;28;14;28;"}),s({},he,{values:"1;0;1;1;0;1;"}),s({},ue,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),s({},he,{values:"1;0;0;0;0;1;"}),s({},ue,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),s({},he,{values:"0;0;1;1;0;0;"}),C.styles;function me(e){var t=e[0],n=e[1],r=c(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(O.familyPrefix,"-").concat(w.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(w.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat(w.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}C.styles;function ge(){var e="svg-inline--fa",t=O.familyPrefix,n=O.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||n!==e){var i=new RegExp("\\.".concat("fa","\\-"),"g"),o=new RegExp("\\--".concat("fa","\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(a,".".concat(n))}return r}function be(){O.autoAddCss&&!xe&&(Y(ge()),xe=!0)}function ve(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return ce(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(v){var t=g.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ye(e){var t=e.prefix,n=void 0===t?"fa":t,r=e.iconName;if(r)return se(we.definitions,n,r)||se(C.styles,n,r)}var _e,we=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n,r;return t=e,(n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){e.definitions[t]=s({},e.definitions[t]||{},i[t]),re(t,i[t]),ae()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,o=r.iconName,a=r.icon;e[i]||(e[i]={}),e[i][o]=a})),e}}])&&o(t.prototype,n),r&&o(t,r),e}()),xe=!1,ke={transform:function(e){return le(e)}},Oe=(_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?q:n,i=t.symbol,o=void 0!==i&&i,a=t.mask,c=void 0===a?null:a,l=t.maskId,f=void 0===l?null:l,u=t.title,d=void 0===u?null:u,p=t.titleId,h=void 0===p?null:p,m=t.classes,g=void 0===m?[]:m,b=t.attributes,v=void 0===b?{}:b,y=t.styles,_=void 0===y?{}:y;if(e){var w=e.prefix,x=e.iconName,k=e.icon;return ve(s({type:"icon"},e),(function(){return be(),O.autoA11y&&(d?v["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(h||B()):(v["aria-hidden"]="true",v.focusable="false")),ee({icons:{main:me(k),mask:c?me(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:x,transform:s({},q,r),symbol:o,title:d,maskId:f,titleId:h,extra:{attributes:v,styles:_,classes:g}})}))}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:ye(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:ye(r||{})),_e(n,s({},t,{mask:r}))})}).call(this,n(1),n(5).setImmediate)},function(e,t,n){"use strict";var r=n(4);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,a,s,c=1,l={},f=!1,u=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){o.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(i=u.documentElement,r=function(e){var t=u.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[c]=i,r(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function h(e){if(f)setTimeout(h,0,e);else{var t=l[e];if(t){f=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(7))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],f=!1,u=-1;function d(){f&&c&&(f=!1,c.length?l=c.concat(l):u=-1,l.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"Button",(function(){return st})),n.d(t,"FoldableCard",(function(){return en})),n.d(t,"Header",(function(){return mr})),n.d(t,"Heading",(function(){return Dn})),n.d(t,"Icon",(function(){return Xt})),n.d(t,"Nav",(function(){return Kn})),n.d(t,"Panel",(function(){return br})),n.d(t,"Login",(function(){return ar})),n.d(t,"Title",(function(){return dr})),n.d(t,"Navbar",(function(){return cr})),n.d(t,"Search",(function(){return ir})),n.d(t,"UniversalSearch",(function(){return or})),n.d(t,"Logo",(function(){return fr})),n.d(t,"HydratePreact",(function(){return N})),n.d(t,"RenderPreact",(function(){return I})),n.d(t,"initHeader",(function(){return F}));var r,i,o,a,s,c={},l=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n){var r,i,o,a=arguments,s={};for(o in t)"key"==o?r=t[o]:"ref"==o?i=t[o]:s[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(a[o]);if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===s[o]&&(s[o]=e.defaultProps[o]);return h(e,s,r,i,null)}function h(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(a.__v=a),null!=r.vnode&&r.vnode(a),a}function m(e){return e.children}function g(e,t){this.props=e,this.context=t}function b(e,t){if(null==t)return e.__?b(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?b(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function y(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!_.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||o)(_)}function _(){for(var e;_.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,i,o,a,s;e.__d&&(a=(o=(t=e).__v).__e,(s=t.__P)&&(n=[],(r=u({},o)).__v=r,i=S(s,o,r,t.__n,void 0!==s.ownerSVGElement,null,n,null==a?b(o):a),T(n,o),i!=a&&v(o)))}))}function w(e,t,n,r,i,o,a,s,f,u){var p,g,v,y,_,w,x,O=r&&r.__k||l,A=O.length;for(f==c&&(f=null!=a?a[0]:A?b(r,0):null),n.__k=[],p=0;p<t.length;p++)if(null!=(y=n.__k[p]=null==(y=t[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?h(null,y,null,null,y):Array.isArray(y)?h(m,{children:y},null,null,null):null!=y.__e||null!=y.__c?h(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=O[p])||v&&y.key==v.key&&y.type===v.type)O[p]=void 0;else for(g=0;g<A;g++){if((v=O[g])&&y.key==v.key&&y.type===v.type){O[g]=void 0;break}v=null}_=S(e,y,v=v||c,i,o,a,s,f,u),(g=y.ref)&&v.ref!=g&&(x||(x=[]),v.ref&&x.push(v.ref,null,y),x.push(g,y.__c||_,y)),null!=_?(null==w&&(w=_),f=k(e,y,v,O,a,_,f),u||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=b(v))}if(n.__e=w,null!=a&&"function"!=typeof n.type)for(p=a.length;p--;)null!=a[p]&&d(a[p]);for(p=A;p--;)null!=O[p]&&$(O[p],O[p]);if(x)for(p=0;p<x.length;p++)P(x[p],x[++p],x[++p])}function x(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){x(e,t)})):t.push(e)),t}function k(e,t,n,r,i,o,a){var s,c,l;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(i==n||o!=a||null==o.parentNode)e:if(null==a||a.parentNode!==e)e.appendChild(o),s=null;else{for(c=a,l=0;(c=c.nextSibling)&&l<r.length;l+=2)if(c==o)break e;e.insertBefore(o,a),s=a}return void 0!==s?s:o.nextSibling}function O(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||f.test(t)?n:n+"px"}function A(e,t,n,r,i){var o,a;if(i&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style=n;else{if("string"==typeof r&&(e.style=r=""),r)for(t in r)n&&t in n||O(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||O(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(a=t.toLowerCase())in e&&(t=a),t=t.slice(2),e.l||(e.l={}),e.l[t]=n,n?r||e.addEventListener(t,C,o):e.removeEventListener(t,C,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](r.event?r.event(e):e)}function z(e,t,n){var r,i;for(r=0;r<e.__k.length;r++)(i=e.__k[r])&&(i.__=e,i.__e&&("function"==typeof i.type&&i.__k.length>1&&z(i,t,n),t=k(n,i,i,e.__k,null,i.__e,t),"function"==typeof e.type&&(e.__d=t)))}function S(e,t,n,i,o,a,s,c,l){var f,d,p,h,b,v,y,_,x,k,O,A=t.type;if(void 0!==t.constructor)return null;(f=r.__b)&&f(t);try{e:if("function"==typeof A){if(_=t.props,x=(f=A.contextType)&&i[f.__c],k=f?x?x.props.value:f.__:i,n.__c?y=(d=t.__c=n.__c).__=d.__E:("prototype"in A&&A.prototype.render?t.__c=d=new A(_,k):(t.__c=d=new g(_,k),d.constructor=A,d.render=E),x&&x.sub(d),d.props=_,d.state||(d.state={}),d.context=k,d.__n=i,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=u({},d.__s)),u(d.__s,A.getDerivedStateFromProps(_,d.__s))),h=d.props,b=d.state,p)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&_!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,k)||t.__v===n.__v){d.props=_,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&s.push(d),z(t,c,e);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,b,v)}))}d.context=k,d.props=_,d.state=d.__s,(f=r.__r)&&f(t),d.__d=!1,d.__v=t,d.__P=e,f=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(i=u(u({},i),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,b)),O=null!=f&&f.type==m&&null==f.key?f.props.children:f,w(e,Array.isArray(O)?O:[O],t,n,i,o,a,s,c,l),d.base=t.__e,d.__h.length&&s.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=j(n.__e,t,n,i,o,a,s,l);(f=r.diffed)&&f(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function T(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function j(e,t,n,r,i,o,a,s){var f,u,d,p,h,m=n.props,g=t.props;if(i="svg"===t.type||i,null!=o)for(f=0;f<o.length;f++)if(null!=(u=o[f])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,o[f]=null;break}if(null==e){if(null===t.type)return document.createTextNode(g);e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,g.is&&{is:g.is}),o=null,s=!1}if(null===t.type)m!==g&&e.data!==g&&(e.data=g);else{if(null!=o&&(o=l.slice.call(e.childNodes)),d=(m=n.props||c).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!s){if(null!=o)for(m={},h=0;h<e.attributes.length;h++)m[e.attributes[h].name]=e.attributes[h].value;(p||d)&&(p&&d&&p.__html==d.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,i){var o;for(o in n)"children"===o||"key"===o||o in t||A(e,o,null,n[o],r);for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||A(e,o,t[o],n[o],r)})(e,g,m,i,s),p?t.__k=[]:(f=t.props.children,w(e,Array.isArray(f)?f:[f],t,n,r,"foreignObject"!==t.type&&i,o,a,c,s)),s||("value"in g&&void 0!==(f=g.value)&&f!==e.value&&A(e,"value",f,m.value,!1),"checked"in g&&void 0!==(f=g.checked)&&f!==e.checked&&A(e,"checked",f,m.checked,!1))}return e}function P(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function $(e,t,n){var i,o,a;if(r.unmount&&r.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||P(i,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){r.__e(e,t)}i.base=i.__P=null}if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&$(i[a],t,n);null!=o&&d(o)}function E(e,t,n){return this.constructor(e,n)}function M(e,t,n){var i,o,a;r.__&&r.__(e,t),o=(i=n===s)?null:n&&n.__k||t.__k,e=p(m,null,[e]),a=[],S(t,(i?t:n||t).__k=e,o||c,c,void 0!==t.ownerSVGElement,n&&!i?[n]:o?null:t.childNodes.length?l.slice.call(t.childNodes):null,a,n||c,i),T(a,e)}function L(e,t){M(e,t,s)}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return y(n.__E=n)}catch(t){e=t}throw e}},g.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},g.prototype.render=m,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,s=c;const N=(e,t,n)=>L(p(e,t),n),I=(e,t,n)=>M(p(e,t),n),F=(e,t=!1,n="headerContainer")=>{const{loggedIn:r,userName:i,loginLink:o,...a}=e,s=o||(e=>{let t;const n=window.location.toString();return t=decodeURI(e),t=t.replace("/login","/login?callapp="+n),t})(ar.defaultProps.loginLink),c={...r&&i?{loggedIn:r,userName:i}:(()=>{let e={userName:"",loggedIn:!1};const t=document.cookie.split(";");for(let n=0;n<t.length;n++)if(t[n].indexOf("SSONAME")>0){if(""==t[n].substring(9))break;e.userName=t[n].substring(9),e.loggedIn=!0;break}return e})(),...a,loginLink:s};t?N(mr,c,document.getElementById(n)):I(mr,c,document.getElementById(n))};var R,H,U,D=0,W=[],V=r.__r,q=r.diffed,Y=r.__c,B=r.unmount;function X(e,t){r.__h&&r.__h(H,e,D||t),D=0;var n=H.__H||(H.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function G(e){return D=1,K(oe,e)}function K(e,t,n){var r=X(R++,2);return r.t=e,r.__c||(r.__c=H,r.__=[n?n(t):oe(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}]),r.__}function Z(e,t){var n=X(R++,3);!r.__s&&ie(n.__H,t)&&(n.__=e,n.__H=t,H.__H.__h.push(n))}function J(e){return D=5,Q((function(){return{current:e}}),[])}function Q(e,t){var n=X(R++,7);return ie(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function ee(){W.some((function(e){if(e.__P)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(re),e.__H.__h=[]}catch(t){return e.__H.__h=[],r.__e(t,e.__v),!0}})),W=[]}r.__r=function(e){V&&V(e),R=0;var t=(H=e.__c).__H;t&&(t.__h.forEach(ne),t.__h.forEach(re),t.__h=[])},r.diffed=function(e){q&&q(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==W.push(t)&&U===r.requestAnimationFrame||((U=r.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),te&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);te&&(t=requestAnimationFrame(n))})(ee))},r.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ne),e.__h=e.__h.filter((function(e){return!e.__||re(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],r.__e(n,e.__v)}})),Y&&Y(e,t)},r.unmount=function(e){B&&B(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ne)}catch(e){r.__e(e,t.__v)}};var te="function"==typeof requestAnimationFrame;function ne(e){"function"==typeof e.u&&e.u()}function re(e){e.u=e.__()}function ie(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function oe(e,t){return"function"==typeof t?t(e):t}function ae(e,t){for(var n in t)e[n]=t[n];return e}function se(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function ce(e){this.props=e}(ce.prototype=new g).isPureReactComponent=!0,ce.prototype.shouldComponentUpdate=function(e,t){return se(this.props,e)||se(this.state,t)};var le=r.__b;r.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),le&&le(e)};var fe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ue(e){function t(t,n){var r=ae({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=fe,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var de=r.__e;function pe(e){return e&&((e=ae({},e)).__c=null,e.__k=e.__k&&e.__k.map(pe)),e}function he(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(he)),e}function me(){this.__u=0,this.t=null,this.__b=null}function ge(e){var t=e.__.__c;return t&&t.o&&t.o(e)}function be(){this.u=null,this.i=null}r.__e=function(e,t,n){if(e.then)for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t.__c);de(e,t,n)},(me.prototype=new g).__c=function(e,t){var n=this;null==n.t&&(n.t=[]),n.t.push(t);var r=ge(n.__v),i=!1,o=function(){i||(i=!0,t.componentWillUnmount=t.__c,r?r(a):a())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var a=function(){var e;if(!--n.__u)for(n.__v.__k[0]=he(n.state.o),n.setState({o:n.__b=null});e=n.t.pop();)e.forceUpdate()};n.__u++||n.setState({o:n.__b=n.__v.__k[0]}),e.then(o,o)},me.prototype.componentWillUnmount=function(){this.t=[]},me.prototype.render=function(e,t){return this.__b&&(this.__v.__k&&(this.__v.__k[0]=pe(this.__b)),this.__b=null),[p(m,null,t.o?null:e.children),t.o&&e.fallback]};var ve=function(e,t,n){if(++n[1]===n[0]&&e.i.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.i.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(be.prototype=new g).o=function(e){var t=this,n=ge(t.__v),r=t.i.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),ve(t,e,r)):i()};n?n(o):o()}},be.prototype.render=function(e){this.u=null,this.i=new Map;var t=x(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.i.set(t[n],this.u=[1,0,this.u]);return e.children},be.prototype.componentDidUpdate=be.prototype.componentDidMount=function(){var e=this;this.i.forEach((function(t,n){ve(e,n,t)}))};var ye=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;g.prototype.isReactComponent={};var _e="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;var we=r.event;function xe(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}r.event=function(e){we&&(e=we(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var i=e.preventDefault;return e.preventDefault=function(){i.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var ke={configurable:!0,get:function(){return this.class}},Oe=r.vnode;r.vnode=function(e){e.$$typeof=_e;var t=e.type,n=e.props;if(t){var r;if(n.class!=n.className&&(ke.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",ke)),"function"!=typeof t)for(r in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),n.defaultValue=void 0),"select"===t&&n.multiple&&Array.isArray(n.value)&&(x(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),n.value=void 0),!0===n.download&&(n.download=""),n){var i=ye.test(r);i&&(e.props[r.replace(/[A-Z0-9]/,"-$&").toLowerCase()]=n[r]),(i||null===n[r])&&(n[r]=void 0)}else t.prototype&&!t.prototype.p&&(t.prototype.p=!0,xe(t.prototype,"componentWillMount"),xe(t.prototype,"componentWillReceiveProps"),xe(t.prototype,"componentWillUpdate"));!function(t){var n=e.type,r=e.props;if(r&&"string"==typeof n){var i={};for(var o in r)/^on(Ani|Tra|Tou)/.test(o)&&(r[o.toLowerCase()]=r[o],delete r[o]),i[o.toLowerCase()]=o;if(i.ondoubleclick&&(r.ondblclick=r[i.ondoubleclick],delete r[i.ondoubleclick]),i.onbeforeinput&&(r.onbeforeinput=r[i.onbeforeinput],delete r[i.onbeforeinput]),i.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=i.oninput||"oninput";r[a]||(r[a]=r[i.onchange],delete r[i.onchange])}}}()}Oe&&Oe(e)};var Ae=r.__r;r.__r=function(e){Ae&&Ae(e),e.__c};var Ce=p;var ze=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{var o=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,o?0:i.cssRules.length)}catch(e){0}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var Se=function(e){function t(e,t,r){var i=t.trim().split(h);t=i;var o=i.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<o;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<o;++s)for(var l=0;l<a;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function r(e,t,n,o){var a=e+";",s=2*t+3*n+4*o;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===T||2===T&&i(c,1)?"-webkit-"+c+c:c}if(0===T||2===T&&!i(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(A,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return d.test(a)?a.replace(u,":-webkit-")+a.replace(u,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(y,"tb");break;case 232:c=a.replace(y,"tb-rl");break;case 220:c=a.replace(y,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(x,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(x,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),t,n,o).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===n+o&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),E(2!==t?r:r.replace(k,"$1"),n,t)}function o(e,t){var n=r(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(w," or ($1)").substring(4):"("+t+")"}function a(e,t,n,r,i,o,a,s,l,f){for(var u,d=0,p=t;d<$;++d)switch(u=P[d].call(c,e,p,n,r,i,o,a,s,l,f)){case void 0:case!1:case!0:case null:break;default:p=u}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(E=null,e?"function"!=typeof e?T=1:(T=2,E=e):T=0),s}function c(e,n){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<$){var c=a(-1,n,s,s,z,C,0,0,0,0);void 0!==c&&"string"==typeof c&&(n=c)}var u=function e(n,s,c,u,d){for(var p,h,m,y,w,x=0,k=0,O=0,A=0,P=0,E=0,L=m=p=0,N=0,I=0,F=0,R=0,H=c.length,U=H-1,D="",W="",V="",q="";N<H;){if(h=c.charCodeAt(N),N===U&&0!==k+A+O+x&&(0!==k&&(h=47===k?10:47),A=O=x=0,H++,U++),0===k+A+O+x){if(N===U&&(0<I&&(D=D.replace(f,"")),0<D.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:D+=c.charAt(N)}h=59}switch(h){case 123:for(p=(D=D.trim()).charCodeAt(0),m=1,R=++N;N<H;){switch(h=c.charCodeAt(N)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(N+1)){case 42:case 47:e:{for(L=N+1;L<U;++L)switch(c.charCodeAt(L)){case 47:if(42===h&&42===c.charCodeAt(L-1)&&N+2!==L){N=L+1;break e}break;case 10:if(47===h){N=L+1;break e}}N=L}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<U&&c.charCodeAt(N)!==h;);}if(0===m)break;N++}switch(m=c.substring(R,N),0===p&&(p=(D=D.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<I&&(D=D.replace(f,"")),h=D.charCodeAt(1)){case 100:case 109:case 115:case 45:I=s;break;default:I=j}if(R=(m=e(s,I,m,h,d+1)).length,0<$&&(w=a(3,m,I=t(j,D,F),s,z,C,R,h,d,u),D=I.join(""),void 0!==w&&0===(R=(m=w.trim()).length)&&(h=0,m="")),0<R)switch(h){case 115:D=D.replace(_,o);case 100:case 109:case 45:m=D+"{"+m+"}";break;case 107:m=(D=D.replace(g,"$1 $2"))+"{"+m+"}",m=1===T||2===T&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=D+m,112===u&&(W+=m,m="")}else m="";break;default:m=e(s,t(s,D,F),m,u,d+1)}V+=m,m=F=I=L=p=0,D="",h=c.charCodeAt(++N);break;case 125:case 59:if(1<(R=(D=(0<I?D.replace(f,""):D).trim()).length))switch(0===L&&(p=D.charCodeAt(0),45===p||96<p&&123>p)&&(R=(D=D.replace(" ",":")).length),0<$&&void 0!==(w=a(1,D,s,n,z,C,W.length,u,d,u))&&0===(R=(D=w.trim()).length)&&(D="\0\0"),p=D.charCodeAt(0),h=D.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){q+=D+c.charAt(N);break}default:58!==D.charCodeAt(R-1)&&(W+=r(D,p,h,D.charCodeAt(2)))}F=I=L=p=0,D="",h=c.charCodeAt(++N)}}switch(h){case 13:case 10:47===k?k=0:0===1+p&&107!==u&&0<D.length&&(I=1,D+="\0"),0<$*M&&a(0,D,s,n,z,C,W.length,u,d,u),C=1,z++;break;case 59:case 125:if(0===k+A+O+x){C++;break}default:switch(C++,y=c.charAt(N),h){case 9:case 32:if(0===A+x+k)switch(P){case 44:case 58:case 9:case 32:y="";break;default:32!==h&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===A+k+x&&(I=F=1,y="\f"+y);break;case 108:if(0===A+k+x+S&&0<L)switch(N-L){case 2:112===P&&58===c.charCodeAt(N-3)&&(S=P);case 8:111===E&&(S=E)}break;case 58:0===A+k+x&&(L=N);break;case 44:0===k+O+A+x&&(I=1,y+="\r");break;case 34:case 39:0===k&&(A=A===h?0:0===A?h:A);break;case 91:0===A+k+O&&x++;break;case 93:0===A+k+O&&x--;break;case 41:0===A+k+x&&O--;break;case 40:if(0===A+k+x){if(0===p)switch(2*P+3*E){case 533:break;default:p=1}O++}break;case 64:0===k+O+A+x+L+m&&(m=1);break;case 42:case 47:if(!(0<A+x+O))switch(k){case 0:switch(2*h+3*c.charCodeAt(N+1)){case 235:k=47;break;case 220:R=N,k=42}break;case 42:47===h&&42===P&&R+2!==N&&(33===c.charCodeAt(R+2)&&(W+=c.substring(R,N+1)),y="",k=0)}}0===k&&(D+=y)}E=P,P=h,N++}if(0<(R=W.length)){if(I=s,0<$&&(void 0!==(w=a(2,W,I,n,z,C,R,u,d,u))&&0===(W=w).length))return q+W+V;if(W=I.join(",")+"{"+W+"}",0!=T*S){switch(2!==T||i(W,2)||(S=0),S){case 111:W=W.replace(v,":-moz-$1")+W;break;case 112:W=W.replace(b,"::-webkit-input-$1")+W.replace(b,"::-moz-$1")+W.replace(b,":-ms-input-$1")+W}S=0}}return q+W+V}(j,s,n,0,0);return 0<$&&(void 0!==(c=a(-2,u,s,s,z,C,u.length,0,0,0))&&(u=c)),"",S=0,C=z=1,u}var l=/^\0+/g,f=/[\0\r\f]/g,u=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,x=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,C=1,z=1,S=0,T=1,j=[],P=[],$=0,E=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:$=P.length=0;break;default:if("function"==typeof t)P[$++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};function Te(e){e&&je.current.insert(e+"}")}var je={current:null},Pe=function(e,t,n,r,i,o,a,s,c,l){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return je.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===s)return t+"/*|*/";break;case 3:switch(s){case 102:case 112:return je.current.insert(n[0]+t),"";default:return t+(0===l?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(Te)}},$e=function(e){void 0===e&&(e={});var t,n=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var r=new Se(t);var i,o={};i=e.container||document.head;var a,s=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(s,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){o[e]=!0})),e.parentNode!==i&&i.appendChild(e)})),r.use(e.stylisPlugins)(Pe),a=function(e,t,n,i){var o=t.name;je.current=n,r(e,t.styles),i&&(c.inserted[o]=!0)};var c={key:n,sheet:new ze({key:n,container:i,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:o,registered:{},insert:a};return c};var Ee=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},Me={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Le=/[A-Z]|^ms/g,Ne=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ie=function(e){return 45===e.charCodeAt(1)},Fe=function(e){return null!=e&&"boolean"!=typeof e},Re=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return Ie(e)?e:e.replace(Le,"-$&").toLowerCase()})),He=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ne,(function(e,t,n){return De={name:t,styles:n,next:De},t}))}return 1===Me[e]||Ie(e)||"number"!=typeof t||0===t?t:t+"px"};function Ue(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return De={name:n.name,styles:n.styles,next:De},n.name;if(void 0!==n.styles){var i=n.next;if(void 0!==i)for(;void 0!==i;)De={name:i.name,styles:i.styles,next:De},i=i.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ue(e,t,n[i],!1);else for(var o in n){var a=n[o];if("object"!=typeof a)null!=t&&void 0!==t[a]?r+=o+"{"+t[a]+"}":Fe(a)&&(r+=Re(o)+":"+He(o,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=Ue(e,t,a,!1);switch(o){case"animation":case"animationName":r+=Re(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var c=0;c<a.length;c++)Fe(a[c])&&(r+=Re(o)+":"+He(o,a[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=De,a=n(e);return De=o,Ue(e,t,a,r)}break;case"string":}if(null==t)return n;var s=t[n];return void 0===s||r?n:s}var De,We=/label:\s*([^\s;\n{]+)\s*;/g;var Ve=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";De=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,i+=Ue(n,t,o,!1)):i+=o[0];for(var a=1;a<e.length;a++)i+=Ue(n,t,e[a],46===i.charCodeAt(i.length-1)),r&&(i+=o[a]);We.lastIndex=0;for(var s,c="";null!==(s=We.exec(i));)c+="-"+s[1];return{name:Ee(i)+c,styles:i,next:De}};function qe(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var Ye=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var i=t;do{e.insert("."+r,i,e.sheet,!0);i=i.next}while(void 0!==i)}};function Be(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function Xe(e,t,n){var r=[],i=qe(e,r,n);return r.length<2?n:i+t(r)}var Ge=function e(t){for(var n="",r=0;r<t.length;r++){var i=t[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var a in o="",i)i[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=i}o&&(n&&(n+=" "),n+=o)}}return n},Ke=function(e){var t=$e(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=Ve(n,t.registered,void 0);return Ye(t,i,!1),t.key+"-"+i.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return Xe(t.registered,n,Ge(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=Ve(n,t.registered);Be(t,i)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=Ve(n,t.registered),o="animation-"+i.name;return Be(t,{name:i.name,styles:"@keyframes "+o+"{"+i.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:qe.bind(null,t.registered),merge:Xe.bind(null,t.registered,n)}}(),Ze=(Ke.flush,Ke.hydrate,Ke.cx),Je=(Ke.merge,Ke.getRegisteredStyles,Ke.injectGlobal,Ke.keyframes,Ke.css),Qe=(Ke.sheet,Ke.cache,n(0)),et=n.n(Qe);const tt=Je`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`,nt=Je`
  :not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const it=ue(({disabled:e,small:t,medium:n,large:r,gold:i,maroon:o,dark:a,type:s,...c},l)=>{const f="link"==s?"a":"button",u=c.light?c.light:()=>!(i||a||o);return p(f,rt({},c,{class:Ze(Je`
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            color: #191919;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 1rem 2rem;
            font-size: 1rem;
            line-height: 1rem;
            border-radius: 400rem;
            transition: 0.03s ease-in-out;

            :not(:disabled):not(.disabled) {
              cursor: pointer;
            }

            :hover {
              transform: ${"scale(1.1)"};
            }

            :active {
              transform: ${"scale(1)"};
            }

            ${e&&Je`
              opacity: ${"50%"};
            `}

            ${t&&Je`
              font-size: ${"0.75rem"};
              height: ${"1.375rem"};
              min-width: ${"4rem"};
              padding: ${"0.25rem"}
                ${".75rem"};
            `}

        ${n&&Je`
              font-size: 0.875rem;
              padding: 0.5rem 1rem;
            `}

        ${r&&Je`
              font-size: ${"2rem"};
              height: ${"3rem"};
              min-width: ${"8rem"};
            `}

        ${i&&Je`
              color: ${"#191919"};
              background-color: ${"#ffc627"};

              :hover {
                color: ${"#191919"};
              }
            `}

        ${o&&Je`
              color: #ffffff;
              background-color: #8c1d40;
              border-color: #8c1d40;

              :visited:not(.btn) {
                color: #ffffff;
              }
            `}

        ${a&&Je`
              color: ${"#fafafa"};
              background-color: ${"#191919"};

              :visited:not(.btn) {
                color: ${"#fafafa"};
              }
            `}

        ${u&&Je`
              color: ${"#191919"};
              background-color: ${"#bfbfbf"};
            `}
          `,c.class),ref:l}),c.children)});it.propTypes={type:et.a.string,href:et.a.string,dark:et.a.bool,light:et.a.bool,gold:et.a.bool,maroon:et.a.bool,disabled:et.a.bool,small:et.a.bool,medium:et.a.bool,large:et.a.bool,onFocus:et.a.func},it.defaultProps={disabled:!1};const ot=Je`
  .btn {
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    color: #191919;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 1rem 2rem;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 400rem;
    transition: 0.03s ease-in-out;

    :not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    :hover {
      transform: ${"scale(1.1)"};
    }

    :active {
      transform: ${"scale(1)"};
    }

    &.btn-disabled {
      opacity: ${"50%"};
    }

    &.btn-small {
      font-size: ${"0.75rem"};
      height: ${"1.375rem"};
      min-width: ${"4rem"};
      padding: ${"0.25rem"} ${".75rem"};
    }

    &.btn-medium {
      font-size: ${"0.875rem"};
      height: ${"2rem"};
      min-width: ${"5rem"};
      padding: ${"0.5rem"} ${"1rem"};
    }

    &.btn-large {
      font-size: ${"2rem"};
      height: ${"3rem"};
      min-width: ${"8rem"};
    }

    &.btn-gold {
      color: ${"#191919"};
      background-color: ${"#ffc627"};
    }

    &.btn-maroon {
      color: ${"#fafafa"};
      background-color: ${"#8c1d40"};
    }

    &.btn-dark {
      color: ${"#fafafa"};
      background-color: ${"#191919"};
    }

    &.btn-light {
      color: ${"#191919"};
      background-color: ${"#bfbfbf"};
    }
  }
`;function at(){return(at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const st=ue(({href:e,children:t,...n},r)=>p(it,at({type:e?"link":"button",ref:r},e?{href:e}:{},n),t));st.propTypes={type:et.a.string,href:et.a.string,gold:et.a.bool,maroon:et.a.bool,disabled:et.a.bool,small:et.a.bool,medium:et.a.bool,large:et.a.bool,itemRef:et.a.oneOfType([et.a.func,et.a.shape({current:et.a.instanceOf(et.a.element)})]),onFocus:et.a.func},st.defaultProps={disabled:!1};var ct=n(2);function lt(e){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(n),!0).forEach((function(t){ft(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pt(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ht(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function mt(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function gt(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=mt(t.slice(0,r)),o=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[i]=o,e}),{})}var bt=!1;try{bt=!0}catch(e){}function vt(e){return null===e?null:"object"===lt(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function yt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ft({},e,t):{}}function _t(e){var t=e.forwardedRef,n=pt(e,["forwardedRef"]),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,c=vt(r),l=yt("classes",[].concat(ht(function(e){var t,n=e.spin,r=e.pulse,i=e.fixedWidth,o=e.inverse,a=e.border,s=e.listItem,c=e.flip,l=e.size,f=e.rotation,u=e.pull,d=(ft(t={"fa-spin":n,"fa-pulse":r,"fa-fw":i,"fa-inverse":o,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),ft(t,"fa-rotate-".concat(f),null!=f&&0!==f),ft(t,"fa-pull-".concat(u),null!=u),ft(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),ht(a.split(" ")))),f=yt("transform","string"==typeof n.transform?ct.b.transform(n.transform):n.transform),u=yt("mask",vt(i)),d=Object(ct.a)(c,dt({},l,{},f,{},u,{symbol:o,title:s}));if(!d)return function(){var e;!bt&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var p=d.abstract,h={ref:t};return Object.keys(n).forEach((function(e){_t.defaultProps.hasOwnProperty(e)||(h[e]=n[e])})),wt(p[0],h)}_t.displayName="FontAwesomeIcon",_t.propTypes={border:et.a.bool,className:et.a.string,mask:et.a.oneOfType([et.a.object,et.a.array,et.a.string]),fixedWidth:et.a.bool,inverse:et.a.bool,flip:et.a.oneOf(["horizontal","vertical","both"]),icon:et.a.oneOfType([et.a.object,et.a.array,et.a.string]),listItem:et.a.bool,pull:et.a.oneOf(["right","left"]),pulse:et.a.bool,rotation:et.a.oneOf([0,90,180,270]),size:et.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:et.a.bool,symbol:et.a.oneOfType([et.a.bool,et.a.string]),title:et.a.string,transform:et.a.oneOfType([et.a.string,et.a.object]),swapOpacity:et.a.bool},_t.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var wt=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=gt(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[mt(t)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,c=pt(r,["style"]);return o.attrs.style=dt({},o.attrs.style,{},s),t.apply(void 0,[n.tag,dt({},o.attrs,{},c)].concat(ht(i)))}.bind(null,Ce),xt={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},kt={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},Ot={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]},At={prefix:"fas",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"]},Ct={prefix:"fas",iconName:"clipboard",icon:[384,512,[],"f328","M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"]},zt={prefix:"fas",iconName:"desktop",icon:[576,512,[],"f108","M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"]},St={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]},Tt={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},jt={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},Pt={prefix:"fas",iconName:"map-pin",icon:[288,512,[],"f276","M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"]},$t={prefix:"fas",iconName:"mobile",icon:[320,512,[],"f10b","M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"]},Et={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},Mt={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Nt=e=>p(_t,Lt({icon:xt},e)),It=e=>p(_t,Lt({icon:Et},e)),Ft=e=>p(_t,Lt({icon:Ot},e)),Rt=e=>p(_t,Lt({icon:$t},e)),Ht=e=>p(_t,Lt({icon:zt},e)),Ut=e=>p(_t,Lt({icon:Ct},e)),Dt=e=>p(_t,Lt({icon:Pt},e)),Wt=e=>p(_t,Lt({icon:St},e)),Vt=e=>p(_t,Lt({icon:kt},e)),qt=e=>p(_t,Lt({icon:jt},e)),Yt=e=>p("span",{class:Ze("fa-layers fa-fw",e.class)},p(_t,{icon:At,size:"2x"}),p(_t,{icon:Mt,size:"1x"})),Bt=e=>p(_t,Lt({icon:Tt},e)),Xt=({type:e,...t})=>{switch(e){case"mobile":return p(Rt,null);case"chevron-down":return p(Ft,t);case"search":return p(It,t);case"desktop":return p(Ht,t);case"clipboard":return p(Ut,t);case"map-pin":return p(Dt,t);case"exclamation-triangle":return p(Wt,t);case"bell":return p(Vt,t);case"info-circle":return p(qt,t);case"circle-close":return p(Yt,t);case"bars":return p(Nt,t);case"home":return p(Bt,t);default:return""}};function Gt(){return(Gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Xt.propTypes={type:et.a.string.isRequired},Xt.defaultProps={};const Kt=({show:e,id:t,...n})=>p("div",Gt({},t?{id:t}:{},{class:Ze(Je`
          padding: 0 32px 24px 32px;
          flex-grow: 100;
          flex: 1 1 auto;
          min-height: 1px;
          padding: 1.25rem;
          ${!e&&Je`
            display: none;
          `}
        `,n.class),dangerouslySetInnerHTML:{__html:n.children}})),Zt=e=>p("div",{class:Ze(Je`
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #ffffff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0;
          border-color: #d0d0d0;
          border-left: 0.5rem solid #ffc627;
          height: auto;
        `,e.class)},e.children),Jt=({show:e,id:t,...n})=>p(Kt,Gt({},t?{id:t}:{},{show:e,class:Ze(Je`
          ${e&&Je`
            border-top: 1px solid #d0d0d0;
          `}
        `,n.class)}),n.children),Qt=({show:e,id:t,...n})=>p("button",Gt({"aria-expanded":e},t?{"aria-controls":t}:{},{role:"button",class:Je`
        padding: 32px 32px 16px 32px;
        flex-grow: 1;
        padding-bottom: 0;
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(255, 255, 255, 0.03);
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        cursor: pointer;
        border: 0;

        h4 {
          display: flex;
          flex-direction: row;
          align-items: baseline;

          a {
            padding: 0.5rem 1.5rem;
            color: #191919;
            text-decoration: none;
            display: flex;
            flex-direction: row
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
          }
        }

        .fa-chevron-down {
          transition-duration: 0.4s;
          font-size: 1.25rem;
        }

        ${e?Je`
                .fa-chevron-down {
                  transform: rotate(-180deg);
                }
              `:""}

      `},n),n.children,p(Xt,{type:"chevron-down"})),en=({head:e,children:t,id:n,...r})=>{const[i,o]=G(!1);return p(Zt,{class:r.class},p(Qt,{show:i,id:n,onClick:e=>{o(e=>!e)}},e),p(Jt,{show:i,id:n},t))};function tn(){return(tn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}en.propTypes={head:et.a.node,children:et.a.node,class:et.a.string,id:et.a.string},en.defaultProps={};const nn=e=>{return Je`
  .navlist {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: flex-end;

    a {
      text-decoration: none;
    }

    > li {
      position: relative;
      padding: 0;
      border: 0;
      margin-right: 0.5rem;

      &.active,
      &.dropdown-open, :hover {
        > a:after {
          width: 100%;
        }
      }

      > a {
        :after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-color: #ffc627;
          position: relative;
          bottom: 0;
          width: 0;
          margin-left: 0;
          top: .5rem;
        }
      }

      @media (min-width: ${e}) {
        position: static;

        &.dropdown-open,
        &.active {
          > a:after {
            width: calc(100% + 24px);
            margin-left: 0;
          }
        }

        > a {

          line-height: 1rem;


          box-sizing: content-box;
          :hover {
            :after {
              width: calc(100% + 24px);
              margin-left: 0;
            }
          }

          :after {
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            content: '';
            display: block;
            height: .5rem;
            background-color: #ffc627;
            position: relative;
            top: .5rem;
            bottom: 0;
            width: 0;
            left: -.75rem;
            margin-left: 0;
          }
        }
      }

      @media (max-width: ${e}) {

        > a:after {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
          content: "";
          display: block;
          height: 0.5rem;
          background-color: #ffc627;
        }
      }

      > a {
        display: block;
        padding: 0.5rem 0.75rem;
        color: #191919;

        svg.fa-chevron-down {
          transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

          &.open {
            transform: rotate(180deg);
          }
        }
      }
    }

    .mobile-only {
      ${tt}
    }

    @media (min-width: ${e}) {
      svg.fa-chevron-down {
        float: none;
        display: inline-block;
        font-size: 0.75rem;
        margin-left: 0.5rem;
      }
    }

    @media (max-width: ${e}) {
      flex-direction: column;
      align-items: stretch;
      padding: 0;

      > li {
        margin-right: 0;

        > a {
          padding: 1rem 1rem .5rem 1rem;
          justify-content: space-between;
          display: block;
          border-bottom: 1px solid #cccccc;
          align-items: center;

          > svg {
            float: right;
            font-size: 1.25rem;
          }
        }

        :first-of-type {
          border-top: 1px solid #cccccc;
        }

        :last-of-type {
          border-bottom: none;
        }
      }

      .mobile-only {
        ${Je`
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    border: none;
    clip: auto;
    position: ${t||"relative"};
  `}
      }
    }
  }
`;var t},rn=ue(({children:e,...t},n)=>p("ul",tn({ref:n,"aria-label":"ASU"},t,{class:Ze(t.class,"navlist")}),e)),on=e=>p("form",{class:"navbar-site-buttons"},e.children),an=e=>p("div",{class:Ze("dropdown",e.open?"open":"",e.class)},p("div",null,e.children),e.buttons?p("div",null,e.buttons):""),sn=e=>p("ul",{class:Ze("menu-column",e.open?"open":"")},e.children),cn=e=>Je`
  ul {
    list-style: none;
    a {
      text-decoration: none;
    }
  }

  .mobile-only {
    ${tt}
  }

  @media (min-width: ${e}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    svg.fa-chevron-down {
      float: none;
      display: inline-block;
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${e}) {
    border: none;
    display: none;
    flex-direction: column;
    width: 100%;

    &.open-nav,
    &:target {
      overflow-y: scroll;
      display: flex;
    }
  }

  ${(e=>Je`
  /** DdMenu CSS **/
  div.dropdown {
    position: absolute;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-top: none;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    flex-wrap: nowrap;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    overflow: hidden;
    margin: -1px 0 0 0;
    flex-direction: column;

    > div {
      width: 100%;
    }

    &.mega {
      width: 100%;
      left: 0;
      border-right: none;
      border-left: none;

      > div {
        max-width: ${"1224px"};
      }
    }

    &.open {
      visibility: visible;
      opacity: 1;
    }

    h3 {
      font-size: 1.5rem;
      letter-spacing: -0.035em;
      font-weight: 700;
      text-align: left;
      opacity: 1;
      margin: 1rem 0;
      line-height: calc(100% + 0.12em);
    }

    @media (max-width: ${e}) {
      padding-left: 3rem;
      flex-direction: column;
      max-height: 0;
      border: none;

      &.open {
        position: relative;
        display: flex;
        max-height: 10000px;
      }
    }

    @media (min-width: ${e}) {
      position: fixed;

      &:not(.mega) .menu-column {
        min-width: 16rem;
      }

      > div {
        padding: 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: center;
      }

      &.open {
        border-bottom: 1px solid #d0d0d0;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
`)(e)}
  ${(e=>Je`
  /** Dropdown Menu Column CSS **/
  ul.menu-column {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #d0d0d0;
    padding: 0 2rem;
    position: relative;

    :last-child {
      border-right: none;
    }

    @media (min-width: ${e}) {
      width: 16rem;
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;
      max-width: 282px;

      :last-of-type {
        margin-right: 0;
        padding-right: 0;
        border-right: 0;
      }
    }

    @media (max-width: ${e}) {
      border-right: none;
      width: 100%;
      padding: 0;
      > li {
        :last-of-type {
          border: none;
        }
      }
    }

    @media (min-width: ${e}) {
      padding: 0 1.5rem 0 0;
      border-right: 1px solid #bfbfbf;
      margin-right: 1.5rem;

      flex: 1;
      max-width: 282px;

      > li {
        padding: 0;
        margin: 0;
      }
    }
  }
`)(e)}
  ${(e=>Je`
  form.navbar-site-buttons {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;

    a + a {
      margin-left: 1rem;
    }

    @media (max-width: ${e}) {
      padding: 1rem 2rem;
    }
  }
`)(e)}
  ${nn(e)}
`,ln=e=>Je`
  nav.header-nav {
    ${cn(e)}
  }
`,fn=({open:e,maxMobileHeight:t,injectStyles:n,breakpoint:r,handleKeyDown:i,children:o,...a})=>{const s="Xl"===r?"1260px":"992px";return p("nav",tn({id:"asu-header-nav",class:Ze("header-nav",e?"open-nav":"",Je`
          @media (max-width: ${s}) {
            &.open-nav,
            &:target {
              flex-direction: column;
              width: 100%;

              max-height: ${-1==t?"75vh":t+"px"};
              display: flex;
            }
          }
        `,n?cn(s):"")},a),o)};function un(){return(un=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const dn=e=>Je`
  .asu-search-form {
    > form {
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      label {
        position: relative;
        margin-left: -95px;
        font-weight: 400;
        transition: all 0.5s;
        color: #747474;
        display: none;
      }

      > input {
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>') no-repeat 10px 50%;
        background-size: 12px;

      }
    }

    > a {
      display: inline-block;
      font-size: 0.75rem;
      color: #484848;
    }

    @media (max-width: ${e}) {
      width: 100%;
      display: flex;
      order: -1;

      > form {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem 2rem;

        > input {
          padding: 0.5rem 2rem;
          display: flex;
          width: 100%;
          border: 0;
          background-color: #FFFFFF;
        }

        > button {
          font-size: 1rem;
          opacity: 0.75;
        }
      }

      > a {
        display: none;
      }

      button {
        width: 2.5rem;
        height: 2.5rem;
      }


    }

    button {
      font-size: 0.75rem;
      border: none;
      background: transparent;
      cursor: pointer;
      margin-right: -30px;
      z-index: 20;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
    }

    @media (min-width: ${e}) {
      > form {
        justify-content: flex-end;
      }

      input {
        background-size: 16px;
        width: 32px;
        cursor: pointer;
        font-size: 0.75rem;
        line-height: 0.75rem;
        border: 0;
        border-radius: 0;
        padding: 0.25rem;
        transition: all 0.5s;
      }

      .show-search-input {
        > input {
          display: inline-flex;
          width: 200px;
          color: #747474;
          background-color: #fff;
          cursor: auto;
          margin: 0.5rem 0;
          padding-left: 32px;
          visibility: visible;
          height: calc(1.5em + 0.75rem + 2px);

          :valid + label {
            display: none;
          }
        }

        label {
          display: block;
          margin-bottom: 0;
          font-size: inherit;
        }
      }
    }
  }
`,pn=e=>p("div",un({class:Ze("asu-search-form",e.class)},e),e.children),hn=e=>Je`
  .login-status {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;


    > a, span {
      padding: 0;
      margin: 0;
      color: #484848;
      text-decoration: none;
    }
    .name {
      font-weight: 700;
    }

    .signout:before {
      content: "(";
      margin-left: 4px;
    }

    .signout:after {
      content: ") ";
    }


    @media (min-width: ${e}) {
      margin-left: .5rem;
    }
  }
`,mn=e=>p("div",{class:Ze(e.class,"login-status")},e.children);function gn(){return(gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const bn=e=>Je`
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    .horiz {
      display: none;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    }

    .vert {
      @media (min-width: 992px) {
        display: block;
        height: 72px;
        width: auto;
        margin: 1.5rem 1rem 1.5rem 0;
      }
    }

    img {
      height: 80px;
    }

    @media (max-width: ${e}) {
      img {
        float: none;
        height: 32px;
      }

      .vert {
        display: none;
      }
      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
  }

  &.scrolled .primary-nav .navbar-brand d img {
    height: 64px;
  }

  @media (max-width: ${e}) {
    &.scrolled .primary-nav .navbar-brand d img {
      height: 28px;
    }

    &.scrolled .navbar-brand .horiz {
      margin-bottom: 0.5rem;
    }
  }
`,vn=ue(({brandLink:e,src:t,mobileSrc:n,alt:r,...i},o)=>p("a",gn({href:e,class:"navbar-brand",ref:o},i),p("img",{class:"vert",src:t,alt:r}),p("img",{class:"horiz",src:n,alt:r}))),yn=e=>Je`
  .title {
    line-height: 1;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 2rem 1.5rem 2rem;
    letter-spacing: -1px;
    background-image: linear-gradient(to right,transparent 51%,#FFC626 51%,95%,transparent);
    background-position: 0 0;
    background-size: 200%;
    display: inline-block;
    /*padding-right: 4px;*/
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    transition-duration: 1s;

    &.active {
      background-position: -200%;
    }

    > .unit-name {
      display: none;
    }

    .unit-name,
    .subunit-name,
    &.subunit-name {
      color: #191919;
    }

    @media (min-width: ${e}) {
      line-height: 1;
      font-weight: 700;
      padding: 0;
      margin: 1rem 0 0.5rem 0;

      > .unit-name {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: block;
      }

      &.subunit-name {
        font-size: 2rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 700;
      }

      .subunit-name {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }

  &.scrolled .title {
    padding-bottom: 1rem;
  }

  @media (min-width: ${e}) {
    &.scrolled .title.subunit-name {
      font-size: 1.5rem;
    }

    &.scrolled .title {
      padding-bottom: 0;
    }
  }
`,_n=ue(({children:e,parentOrg:t,baseUrl:n,parentOrgUrl:r,...i},o)=>t?p("div",{class:Ze("title",i.class),ref:o},p("a",{class:"unit-name",href:r},t),p("a",{class:"subunit-name",href:n},e)):p("a",{class:Ze("title","subunit-name",i.class),href:n,ref:o},e));function wn(){return(wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const xn=e=>Je`
  .navlink,
  .navicon {
    padding: 0.5rem 0;

    > a {
      padding: 8px;
      position: relative;
      color: #191919;

      &.nav-item {
        display: block;
      }
    }

    @media (max-width: ${e}) {
      border-bottom: 1px solid #cccccc;

      .icon-nav-item {
        ${tt}
      }
    }
  }

  .navlink {
    @media (min-width: ${e}) {
      > a {
        padding: 0.5rem 0;
        white-space: normal;

        :visited {
          color: #191919;
        }

        :hover {
          color: #8c1d40;
          text-decoration: underline;
        }
      }
    }
  }

  .navbutton {
    margin-top: 1rem;

    @media (min-width: ${e}) {
      position: absolute;
      bottom: 0;
      margin: 0;
    }
  }
`,kn=ue(({onFocus:e,text:t,...n},r)=>p("li",{class:"navlink"},p("a",wn({},n,{class:Ze("nav-item",n.class)},e?{onFocus:e}:"",{ref:r}),t))),On=ue(({children:e,onFocus:t,type:n,...r},i)=>p("li",{class:"navicon"},p("a",wn({},r,{class:r.class?r.class:""},t?{onFocus:t}:"",{ref:i}),p(Xt,{type:n,className:"icon-nav-item"}),p("span",{class:"mobile-only"},e)))),An=ue(({children:e,...t},n)=>p("li",{class:Ze("navbutton",t.class)},p(st,wn({},t,{ref:n,medium:!0,dark:!0}),e)));function Cn(){return(Cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const zn=e=>Je`
  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border-radius: 400rem;
    outline: 0;
    color: #191919;
    border: 0;
    margin-right: 2rem;
    cursor: pointer;
    align-self: flex-start;

    @media (min-width: ${e}) {
      display: none;
    }
  }
`,Sn=({mobileOpen:e,...t})=>p("button",Cn({},t,{class:Ze(Je`
          .fa-circle {
            color: #e8e8e8;
            font-size: 1rem;
            margin-left: -12px;
            height: 2em;
            width: 2.5em;
          }

          svg.svg-inline--fa.fa-times {
            height: 1em;
            width: 1.25em;
            margin-left: 7px;
          }
        `,"navbar-toggler")}),p(Xt,e?{type:"circle-close"}:{type:"bars",href:"#asu-header-nav"})),Tn=e=>Je`
  .navbar-component {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: ${"1224px"};

    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      position: relative;
      align-items: flex-end;
    }

    @media (max-width: ${e}) {
      order: -1;
      display: flex;
      top: 0;
      width: 100%;
      height: auto;
      background-color: #ffffff;
      padding: 0;
      z-index: 1600;
      padding: ${"24px"} 0 0 0;

      > div {
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`,jn=({children:e,...t})=>p("div",{class:"navbar-component"},p("div",null,e)),Pn=e=>Je`
  .navbar-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${e}) {
      width: 100%;
    }
  }
`,$n=e=>p("div",{class:Ze("navbar-container",e.class)},e.children);function En(){return(En=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Mn=({children:e,breakpoint:t,...n})=>p(m,null,p("div",{id:"asu-report-accessiblity"},p("a",{href:"https://www.asu.edu/accessibility/",class:Je`
            ${nt}
          `},"Report an accessibility problem")),p("header",En({},n,{class:Ze(n.class,Je`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }

            :focus {
              outline: 0;
              box-shadow: 0 0 8px #00baff !important;
            }

            a {
              cursor: pointer;
              text-decoration: none;
            }

            padding: 0;
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            z-index: 999;
            background: #ffffff;
            border-bottom: 1px solid #d0d0d0;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            top: 0;
            left: 0;

            div,
            h1 {
              font-family: Arial, sans-serif;
            }

            &.scrolled {
              transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            }

            @media (max-width: ${t}) {
              &.scrolled .primary-nav .header-title h1 {
                font-size: 1rem;
              }
            }
          `,Tn(t),ln(t),ot,Pn(t),bn(t),Ln(t),dn(t),yn(t),hn(t),zn(t),xn(t))}),e)),Ln=e=>Je`
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${"1224px"};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      > div {
        > a {
          display: inline-flex;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          color: #484848;
          margin: 0;
        }
      }
    }

    @media (max-width: ${e}) {
      display: none;
      padding: 0;
      transition: none;
      height: auto;

      &.mobile-open {
        z-index: 998;
        width 100%;
        display: flex;
        justify-content: center;
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        > a, div {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          display:block;

          :nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }
        }
      }

    }
  }

  @media (min-width: ${e}) {
    &.scrolled .universal-nav {
      height: 0;
      overflow: hidden;
    }

    .universal-nav {
      &.search-open {
        height: 48px;
      }

      .nav-grid {
        display: flex;
      }
    }
  }
`,Nn=ue((e,t)=>p("div",{class:Ze("universal-nav",e.open?"mobile-open":"",e.searchOpen?"search-open":""),ref:t},p("div",null,e.children))),In=({children:e,...t})=>p("div",{class:Ze("nav-grid",t.class)},e);function Fn(){return(Fn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Rn=Je`
  font-weight: 700;
  text-align: left;
  opacity: 1;
  margin: 1rem 0;
  line-height: calc(100% + 0.12em);
`,Hn=({children:e,...t})=>p("h4",Fn({},t,{class:Ze(Je`
          ${Rn}
          font-size: 1.25rem;
          letter-spacing: -0.025em;
        `,t.class)}),e),Un=({children:e,...t})=>p("h3",Fn({},t,{class:Ze(Je`
          ${Rn}
          font-size: 1.5rem;
          letter-spacing: -0.035em;
        `,t.class)}),e),Dn=({type:e,...t})=>{switch(e){case"h4":return p(Hn,{class:t.class},t.children);case"h3":return p(Un,{class:t.class},t.children);default:return""}};function Wn(){return(Wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Dn.propTypes={type:et.a.string.isRequired},Dn.defaultProps={};const Vn=ue(({onFocus:e,type:t,children:n,href:r,...i},o)=>{switch(t){case"button":return p(An,Wn({},i,{ref:o,href:r},e?{onFocus:e}:"",{medium:!0,dark:!0}),n);case"icon":return p(On,Wn({},i,{href:r},e?{onFocus:e}:"",{ref:o,type:i.class}),n);case"heading":return p(Dn,{type:"h3"},n);default:return p(kn,Wn({href:r},e?{onFocus:e}:"",{ref:o},i),n)}});Vn.propTypes={location:et.a.array,onFocus:et.a.func,type:et.a.string,href:et.a.string,children:et.a.string.isRequired,icon:et.a.string},Vn.defaultProps={};var qn=Vn;function Yn(){return(Yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Bn=ue(({text:e,setFocus:t,pIndex:n,isOpen:r,setOpen:i,children:o,mega:a,buttons:s,href:c,...l},f)=>{const u=e=>{i(r?-1:e)};return p("li",{class:r?"dropdown-open":""},p("a",Yn({},l,{role:"button","aria-expanded":r,onMouseDown:e=>{e.preventDefault(),u(n)},onKeyDown:e=>{const t=e.keyCode;32!=t&&13!=t||u(n)},onFocus:e=>{t([n,-1,-1])},tabIndex:"0",ref:f}),e," ",p(Ft,{sr:e,className:r?"open":""})),p(an,Yn({open:r},{class:a?"mega":""},s?{buttons:s.map((e,t)=>p(st,{href:e.href,color:e.color},e.text))}:{}),o))});Bn.propTypes={setFocus:et.a.func.isRequired,pIndex:et.a.number.isRequired,isOpen:et.a.bool,setOpen:et.a.func.isRequired,buttons:et.a.arrayOf(et.a.object),mega:et.a.bool,text:et.a.string},Bn.defaultProps={isOpen:!1};var Xn=Bn;function Gn(){return(Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Kn=({navTree:e,width:t,height:n,mobileOpen:r,maxMobileHeight:i,buttons:o,injectStyles:a,breakpoint:s,...c})=>{const[l,f]=G([-1,-1,-1]),[u,d]=G(-1),h=e=>{f(e)},m=parseInt("Xl"===s?"1260px":"992px",10),g=Q(()=>e.map(e=>{const t={current:null};let n=[],{items:r,...i}=e;if(r&&r[0].length>0)for(let e=0;e<r.length;e++)for(let t=0;t<r[e].length;t++)if(n[e]||(n[e]=[]),n[e][t]=Object.assign({},r[e][t]),"heading"!=r[e][t].type){const r={current:null};n[e][t].ref=r}return{ref:t,item:i,menus:n}}),[e]);Z(()=>{const e=Zn(l,g);if(e.hasFocus){const[t,n,r]=l;e.isTop?(g[t].ref&&g[t].ref.current!==document.activeElement&&g[t].ref.current.focus(),u!==t&&d(-1)):g[t].menus[n][r].ref&&g[t].menus[n][r].ref.current!==document.activeElement&&g[t].menus[n][r].ref.current.focus()}else-1!==u&&d(-1)},[l,g]);const b=J(null);Z(()=>{const e=e=>{b.current&&!b.current.contains(e.target)&&d(-1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[b]);return p(fn,{open:r,maxMobileHeight:i,injectStyles:a,breakpoint:s},p(rn,Gn({},t>m?{onfocusout:e=>{e.currentTarget.contains(e.relatedTarget)||h([-1,-1,-1])}}:{},{onKeyDown:e=>{const t=Zn(l,g);if(t.hasFocus)switch(e.keyCode){case 37:e.preventDefault(),h(Jn(l,t,g));break;case 39:e.preventDefault(),h(Qn(l,t,g));break;case 38:e.preventDefault(),h(er(l,t,g));break;case 40:if(t.isTop&&t.hasSubs&&u!=l[0])return void d(l[0]);e.preventDefault(),h(tr(l,t,g));break;case 9:if(e.shiftKey){if(t.isFirst)return!1;e.preventDefault(),h(Jn(l,t,g))}else{if(t.isLast)return!1;e.preventDefault(),h(Qn(l,t,g))}}},ref:b}),g.map((e,t)=>{const n=e.item,r=e.menus;return r&&r.length>0&&r[0].length>0?p(Xn,Gn({},n,{pIndex:t,setFocus:h,ref:e.ref,isOpen:u==t,setOpen:d,mega:r.length>2}),r.map((e,n)=>p(sn,null,e.map((e,i)=>p(qn,{onFocus:()=>{f([t,n,i]),d(t)},ref:r[n][i].ref,type:e.hasOwnProperty("type")?e.type:void 0,color:e.hasOwnProperty("color")?e.color:void 0,class:e.hasOwnProperty("class")?e.class:void 0,href:e.hasOwnProperty("href")?e.href:void 0,tabIndex:"-1"},e.text))))):p(qn,{onFocus:()=>{h([t,-1,-1])},ref:e.ref,type:n.hasOwnProperty("type")?n.type:void 0,color:n.hasOwnProperty("color")?n.color:void 0,class:n.hasOwnProperty("class")?n.class:"",href:n.hasOwnProperty("href")?n.href:void 0},n.text)})),o.length>0&&p(on,null,o.map((e,t)=>{let n=e.color?e.color:"maroon";return p(st,Gn({href:e.href},{[n]:!0},{medium:!0}),e.text)})))};Kn.propTypes={navTree:et.a.arrayOf(et.a.object),buttons:et.a.arrayOf(et.a.object),mobileOpen:et.a.bool,width:et.a.number,height:et.a.number,maxMobileHeight:et.a.number,injectStyles:et.a.bool,breakpoint:et.a.oneOf(["Lg","Xl"])},Kn.defaultProps={navTree:[],mobileOpen:!1,width:1920,height:1080,maxMobileHeight:-1,buttons:[],injectStyles:!1};const Zn=(e,t)=>{const[n,r,i]=e;let o=!1,a=!1,s=!1,c=!1,l=!1;return-1==n&&-1==r&&-1==i?{hasFocus:o}:(o=!0,t[n].menus.length>0&&(s=!0),a=-1===r||-1===i,a&&n===t.length-1&&(c=!0),a&&0===n&&(l=!0),{hasFocus:o,isTop:a,hasSubs:s,isLast:c,isFirst:l})},Jn=(e,t,n)=>{const[r,i,o]=e;let a=e;return t.isTop?(a=void 0!==n[r-1]?[r-1,-1,-1]:[0,-1,-1],!1===nr(a,n)?Jn(a,Zn(a,n),n):a):void 0!==n[r].menus[i-1]?n[r].menus[i-1][0].ref?[r,i-1,0]:[r,i-1,1]:[r,-1,-1]},Qn=(e,t,n)=>{const[r,i,o]=e;let a=e;return t.isTop?(a=void 0!==n[r+1]?[r+1,-1,-1]:[n.length-1,-1,-1],!1===nr(a,n)?Qn(a,Zn(a,n),n):a):void 0!==n[r].menus[i+1]?n[r].menus[i+1][0].ref?[r,i+1,0]:[r,i+1,1]:[r,-1,-1]},er=(e,t,n)=>{const[r,i,o]=e;let a=[],s=e;return t.hasSubs&&(a=n[r].menus),s=t.isTop?Jn(e,t,n):void 0!==a[i][o-1]?[r,i,o-1]:[r,-1,-1],!1===nr(s,n)?er(s,Zn(s,n),n):s},tr=(e,t,n)=>{const[r,i,o]=e;let a=[],s=e;return t.hasSubs&&(a=n[r].menus),s=t.isTop&&t.hasSubs?[r,0,0]:t.isTop?Qn(e,t,n):void 0!==a[i][o+1]?[r,i,o+1]:Qn(e,t,n),!1===nr(s,n)?tr(s,Zn(s,n),n):s},nr=(e,t)=>{const n=Zn(e,t);if(!n.hasFocus)return!1;if(n.isTop){if(t[e[0]].ref)return!0}else if(t[e[0]].menus[e[1]][e[2]].ref)return!0;return!1};function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ir=({type:e,open:t,inputRef:n,mobile:r,...i})=>{switch(e){case"d7":return p("div",null,"Drupal 7");default:return p("form",{action:"https://search.asu.edu/search",method:"get",role:"search",class:t?"show-search-input":""},p("input",rr({name:"q",type:"search"},n?{ref:n}:{},{"aria-labelledby":"asu-search-label"},r?{placeHolder:"Search ASU"}:{},{required:!0})),p("label",{class:"univeral-search",id:"asu-search-label"},"Search ASU"))}};ir.propTypes={type:et.a.string,open:et.a.bool,inputRef:et.a.oneOfType([et.a.func,et.a.shape({current:et.a.instanceOf(et.a.element)})]),mobile:et.a.bool},ir.defaultProps={};const or=({type:e,open:t,setOpen:n,mobile:r})=>{const i=J(null);return p(pn,{onfocusin:()=>n(!0),onfocusout:e=>{i.current.value||e.currentTarget.contains(e.relatedTarget)||n(!1)},onClick:e=>{n(!0),i.current.focus()}},p(ir,{open:t,type:e,inputRef:i,mobile:r}))};or.propTypes={type:et.a.string,open:et.a.bool,setOpen:et.a.func,mobile:et.a.bool},or.defaultProps={open:!1};const ar=({loggedIn:e,loginLink:t,logoutLink:n,userName:r,...i})=>p(mn,{class:i.class},e?p(m,null,r?p("span",{class:"name"},r):"",p("a",{class:"signout",href:n},"Sign Out")):p("a",{href:t},"Sign in"));function sr(){return(sr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}ar.propTypes={class:et.a.string,loggedIn:et.a.bool.isRequired,loginLink:et.a.string,logoutLink:et.a.string,userName:et.a.string},ar.defaultProps={logoutLink:"https://webapp4.asu.edu/myasu/Signout",loginLink:"https://weblogin.asu.edu/cgi-bin/login",loggedIn:!1};const cr=({children:e,mobileOpen:t,logo:n,...r})=>p(jn,{mobileOpen:t},n,p(Sn,sr({},r,{mobileOpen:t})),p($n,null,e));function lr(){return(lr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}cr.propTypes={mobileOpen:et.a.bool,logo:et.a.node,children:et.a.node},cr.defaultProps={mobileOpen:!1};const fr=ue((e,t)=>p(vn,lr({ref:t},e)));function ur(){return(ur=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}fr.propTypes={alt:et.a.string,src:et.a.string,mobileSrc:et.a.string,brandLink:et.a.string},fr.defaultProps={alt:"Arizona State University",src:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo-vertical.png",mobileSrc:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo.png",brandLink:"https://asu.edu"};const dr=ue(({children:e,baseUrl:t,animate:n,...r},i)=>{const[o,a]=G(!1);return Z(()=>{if(!0!==n&&!1!==n){if(!1!==n){let e="/"==t?window.location.hostname:t;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),(e=>{const t=e||window.location.hostname,n=document.cookie.split("; ").find(e=>e.startsWith("title_loaded"));return!document.referrer.includes(t)&&!n&&(document.cookie="title_loaded=true;max-age=600",!0)})(e)&&a(!0)}}else a(n)},[o,n]),p(_n,ur({ref:i},r,{class:o?"active":""}),e)});function pr(){const e="undefined"!=typeof window,{innerWidth:t,innerHeight:n}=e?window:{innerWidth:1920,innerHeight:1080};return{width:t,height:n}}function hr(){return(hr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}dr.propTypes={baseUrl:et.a.string,parentOrg:et.a.string,parentOrgUrl:et.a.string,animate:et.a.bool},dr.defaultProps={baseUrl:"/",parentOrgUrl:"/"};const mr=({navTree:e,title:t,baseUrl:n,parentOrg:r,parentOrgUrl:i,logo:o,loggedIn:a,userName:s,loginLink:c,logoutLink:l,buttons:f,breakpoint:u,animateTitle:d,...h})=>{const[g,b]=G(!1),[v,y]=G(!1),[_,w]=G(-1),x="Xl"===u?"1260px":"992px",k=parseInt(x,10),{height:O,width:A}=function(){const[e,t]=G(pr());return Z(()=>{function e(){t(pr())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}(),[C,z]=G(0),S=()=>{const e=window.pageYOffset;z(e)},T=parseInt("24px",10),j=J(null),P=J(null),$=J(null);Z(()=>(window.addEventListener("scroll",S,{passive:!0}),()=>{window.removeEventListener("scroll",S)}),[]),Z(()=>{A<k&&g&&window.setTimeout(()=>{const e=j.current.clientHeight,t=P.current.clientHeight,n=$.current.clientHeight;w(O-e-(t+n+T))},500)},[O,A,g]);const E=!0===d;return p(Mn,{breakpoint:x,class:C>0||g&&A<k?"scrolled":""},p(Nn,hr({open:g,ref:j},{searchOpen:v}),p(In,null,p("a",{href:"https://www.asu.edu/"},"ASU home"),p("a",{href:"https://my.asu.edu/"},"My ASU"),p("a",{href:"https://www.asu.edu/colleges/"},"Colleges and schools"),p(ar,{loggedIn:a,loginLink:c,logoutLink:l,userName:s})),p(or,{open:v,setOpen:y,mobile:A<k})),p(cr,{onClick:e=>{e.preventDefault(),b(e=>!e)},mobileOpen:g,logo:p(fr,hr({},o,{ref:P}))},h.dangerouslyGenerateStub?p("div",{id:"asu-generated-stub"}):p(m,null,p(dr,hr({parentOrg:r,parentOrgUrl:i,baseUrl:n,animate:E},{ref:$}),t),p(Kn,{navTree:e,mobileOpen:g,height:O,width:A,buttons:f,maxMobileHeight:_,breakpoint:u}))))};mr.propTypes={navTree:et.a.arrayOf(et.a.object),logo:et.a.shape(fr.propTypes),title:dr.propTypes.title,parentOrg:dr.propTypes.parentOrg,parentOrgUrl:dr.propTypes.parentOrgUrl,baseUrl:dr.propTypes.baseUrl,loggedIn:ar.propTypes.loggedIn,userName:ar.propTypes.userName,loginLink:ar.propTypes.loginLink,logoutLink:ar.propTypes.logoutLink,buttons:et.a.arrayOf(et.a.object),breakpoint:et.a.oneOf(["Lg","Xl"]),animateTitle:et.a.bool},mr.defaultProps={navTree:[],dangerouslyGenerateStub:!1,title:"",buttons:[],breakpoint:"Lg"};const gr=e=>p("div",{class:Ze(e.class,Je`
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.3rem;
          border: 1px solid #dee2e6;
        `)},e.children),br=e=>p(gr,{class:e.class},e.children);br.propTypes={class:et.a.string},br.defaultProps={}}])}));
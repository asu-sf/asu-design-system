/*! For license information please see components-library.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("preact"),require("emotion"),require("prop-types")):"function"==typeof define&&define.amd?define("componentsLibrary",["preact","emotion","propTypes"],n):"object"==typeof exports?exports.componentsLibrary=n(require("preact"),require("emotion"),require("prop-types")):e.componentsLibrary=n(e.preact,e.emotion,e.propTypes)}(self,(function(e,n,t){return(()=>{"use strict";var r={920:(e,n,t)=>{t.r(n),t.d(n,{Button:()=>Ee,FoldableCard:()=>Gt,Header:()=>ri,Heading:()=>Tr,HydratePreact:()=>Gr,Icon:()=>qt,Login:()=>Yr,Logo:()=>Xr,Nav:()=>Ir,Navbar:()=>Br,Panel:()=>oi,RenderPreact:()=>Kr,Search:()=>qr,Title:()=>ni,UniversalSearch:()=>Vr,alterLoginUrl:()=>Jr,checkFirstLoad:()=>Qr,checkSSOCookie:()=>Zr,initHeader:()=>ei});var r=t(555);function i(e,n,t,i,o){var a={};for(var s in n)"ref"!=s&&(a[s]=n[s]);var c,l,f={type:e,props:a,key:t,ref:n&&n.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++r.options.__v,__source:i,__self:o};if("function"==typeof e&&(c=e.defaultProps))for(l in c)void 0===a[l]&&(a[l]=c[l]);return r.options.vnode&&r.options.vnode(f),f}var o,a,s,c=0,l=[],f=r.options.__b,d=r.options.__r,u=r.options.diffed,p=r.options.__c,m=r.options.unmount;function h(e,n){r.options.__h&&r.options.__h(a,e,c||n),c=0;var t=a.__H||(a.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function g(e){return c=1,b(C,e)}function b(e,n,t){var r=h(o++,2);return r.t=e,r.__c||(r.__=[t?t(n):C(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=a),r.__}function y(e,n){var t=h(o++,3);!r.options.__s&&$(t.__H,n)&&(t.__=e,t.__H=n,a.__H.__h.push(t))}function v(e,n){var t=h(o++,4);!r.options.__s&&$(t.__H,n)&&(t.__=e,t.__H=n,a.__h.push(t))}function _(e){return c=5,w((function(){return{current:e}}),[])}function w(e,n){var t=h(o++,7);return $(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function x(e,n){return c=8,w((function(){return e}),n)}function k(){l.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(z),e.__H.__h.forEach(S),e.__H.__h=[]}catch(n){e.__H.__h=[],r.options.__e(n,e.__v)}})),l=[]}r.options.__b=function(e){a=null,f&&f(e)},r.options.__r=function(e){d&&d(e),o=0;var n=(a=e.__c).__H;n&&(n.__h.forEach(z),n.__h.forEach(S),n.__h=[])},r.options.diffed=function(e){u&&u(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==l.push(n)&&s===r.options.requestAnimationFrame||((s=r.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),O&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);O&&(n=requestAnimationFrame(t))})(k)),a=void 0},r.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(z),e.__h=e.__h.filter((function(e){return!e.__||S(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],r.options.__e(t,e.__v)}})),p&&p(e,n)},r.options.unmount=function(e){m&&m(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(z)}catch(e){r.options.__e(e,n.__v)}};var O="function"==typeof requestAnimationFrame;function z(e){var n=a;"function"==typeof e.__c&&e.__c(),a=n}function S(e){var n=a;e.__c=e.__(),a=n}function $(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function C(e,n){return"function"==typeof n?n(e):n}function P(e,n){for(var t in n)e[t]=n[t];return e}function T(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}function E(e){this.props=e}(E.prototype=new r.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(e,n){return T(this.props,e)||T(this.state,n)};var M=r.options.__b;r.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),M&&M(e)};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function L(e){function n(n,t){var r=P({},n);return delete r.ref,e(r,(t=n.ref||t)&&("object"!=typeof t||"current"in t)?t:null)}return n.$$typeof=j,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var N=function(e,n){return null==e?null:(0,r.toChildArray)((0,r.toChildArray)(e).map(n))},A={map:N,forEach:N,count:function(e){return e?(0,r.toChildArray)(e).length:0},only:function(e){var n=(0,r.toChildArray)(e);if(1!==n.length)throw"Children.only";return n[0]},toArray:r.toChildArray},I=r.options.__e;function F(){this.__u=0,this.t=null,this.__b=null}function H(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function R(){this.u=null,this.o=null}r.options.__e=function(e,n,t){if(e.then)for(var r,i=n;i=i.__;)if((r=i.__c)&&r.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),r.__c(e,n);I(e,n,t)},(F.prototype=new r.Component).__c=function(e,n){var t=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var i=H(r.__v),o=!1,a=function(){o||(o=!0,t.componentWillUnmount=t.__c,i?i(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var s=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(n,t,r){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map((function(n){return e(n,t,r)})),n.__c&&n.__c.__P===t&&(n.__e&&r.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=r)),n}(e,e.__c.__P,e.__c.__O)}var n;for(r.setState({__e:r.__b=null});n=r.t.pop();)n.forceUpdate()}},c=!0===n.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(a,a)},F.prototype.componentWillUnmount=function(){this.t=[]},F.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function e(n,t,r){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),n.__c.__H=null),null!=(n=P({},n)).__c&&(n.__c.__P===r&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map((function(n){return e(n,t,r)}))),n}(this.__b,t,i.__O=i.__P)}this.__b=null}var o=n.__e&&(0,r.createElement)(r.Fragment,null,e.fallback);return o&&(o.__h=null),[(0,r.createElement)(r.Fragment,null,n.__e?null:e.children),o]};var U=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function D(e){return this.getChildContext=function(){return e.context},e.children}function W(e){var n=this,t=e.i;n.componentWillUnmount=function(){(0,r.render)(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(e){this.childNodes.push(e),n.i.appendChild(e)},insertBefore:function(e,t){this.childNodes.push(e),n.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),n.i.removeChild(e)}}),(0,r.render)((0,r.createElement)(D,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}(R.prototype=new r.Component).__e=function(e){var n=this,t=H(n.__v),r=n.o.get(e);return r[0]++,function(i){var o=function(){n.props.revealOrder?(r.push(i),U(n,e,r)):i()};t?t(o):o()}},R.prototype.render=function(e){this.u=null,this.o=new Map;var n=(0,r.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},R.prototype.componentDidUpdate=R.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){U(e,t,n)}))};var q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Y=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};r.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(r.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var B=r.options.event;function X(){}function G(){return this.cancelBubble}function K(){return this.defaultPrevented}r.options.event=function(e){return B&&(e=B(e)),e.persist=X,e.isPropagationStopped=G,e.isDefaultPrevented=K,e.nativeEvent=e};var Z,J={configurable:!0,get:function(){return this.class}},Q=r.options.vnode;r.options.vnode=function(e){var n=e.type,t=e.props,i=t;if("string"==typeof n){for(var o in i={},t){var a=t[o];"value"===o&&"defaultValue"in t&&null==a||("defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===a?a="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+n)&&!Y(t.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():V.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===a&&(a=void 0),i[o]=a)}"select"==n&&i.multiple&&Array.isArray(i.value)&&(i.value=(0,r.toChildArray)(t.children).forEach((function(e){e.props.selected=-1!=i.value.indexOf(e.props.value)}))),"select"==n&&null!=i.defaultValue&&(i.value=(0,r.toChildArray)(t.children).forEach((function(e){e.props.selected=i.multiple?-1!=i.defaultValue.indexOf(e.props.value):i.defaultValue==e.props.value}))),e.props=i}n&&t.class!=t.className&&(J.enumerable="className"in t,null!=t.className&&(i.class=t.className),Object.defineProperty(i,"className",J)),e.$$typeof=q,Q&&Q(e)};var ee=r.options.__r;r.options.__r=function(e){ee&&ee(e),Z=e.__c};var ne={ReactCurrentDispatcher:{current:{readContext:function(e){return Z.__n[e.__c].props.value}}}};"object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance);function te(e){return!!e&&e.$$typeof===q}r.Fragment;const re={useState:g,useReducer:b,useEffect:y,useLayoutEffect:v,useRef:_,useImperativeHandle:function(e,n,t){c=6,v((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))},useMemo:w,useCallback:x,useContext:function(e){var n=a.context[e.__c],t=h(o++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(a)),n.props.value):e.__},useDebugValue:function(e,n){r.options.useDebugValue&&r.options.useDebugValue(n?n(e):e)},version:"16.8.0",Children:A,render:function(e,n,t){return null==n.__k&&(n.textContent=""),(0,r.render)(e,n),"function"==typeof t&&t(),e?e.__c:null},hydrate:function(e,n,t){return(0,r.hydrate)(e,n),"function"==typeof t&&t(),e?e.__c:null},unmountComponentAtNode:function(e){return!!e.__k&&((0,r.render)(null,e),!0)},createPortal:function(e,n){return(0,r.createElement)(W,{__v:e,i:n})},createElement:r.createElement,createContext:r.createContext,createFactory:function(e){return r.createElement.bind(null,e)},cloneElement:function(e){return te(e)?r.cloneElement.apply(null,arguments):e},createRef:r.createRef,Fragment:r.Fragment,isValidElement:te,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:r.Component,PureComponent:E,memo:function(e,n){function t(e){var t=this.props.ref,r=t==e.ref;return!r&&t&&(t.call?t(null):t.current=null),n?!n(this.props,e)||!r:T(this.props,e)}function i(n){return this.shouldComponentUpdate=t,(0,r.createElement)(e,n)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i},forwardRef:L,unstable_batchedUpdates:function(e,n){return e(n)},StrictMode:r.Fragment,Suspense:F,SuspenseList:R,lazy:function(e){var n,t,i;function o(o){if(n||(n=e()).then((function(e){t=e.default||e}),(function(e){i=e})),i)throw i;if(!t)throw n;return(0,r.createElement)(t,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ne};var ie=t(572),oe=t(24),ae=t.n(oe);const se="992px",ce="1260px",le="scale(1.1)",fe="scale(1)",de=".75rem",ue="0.25rem",pe="0.75rem",me="1.375rem",he="4rem",ge="2rem",be="3rem",ye="8rem",ve="#ffc627",_e="#191919",we="#191919",xe="#fafafa",ke="#bfbfbf",Oe="#191919",ze=ie.css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`,Se=ie.css`
  :not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,$e="1224px",Ce="24px",Pe=L((({disabled:e,small:n,medium:t,large:r,gold:o,maroon:a,dark:s,type:c,...l},f)=>{const d="link"==c?"a":"button";let u=!!l.light&&l.light;return void 0===o&&void 0===s&&void 0===a&&(u=!0),i(d,{...l,class:(0,ie.cx)(ie.css`
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
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
              transform: ${le};
            }

            :active {
              transform: ${fe};
            }

            ${e&&ie.css`
              opacity: ${"50%"};
            `}

            ${n&&ie.css`
              font-size: ${pe};
              height: ${me};
              min-width: ${he};
              padding: ${ue}
                ${de};
            `}

        ${t&&ie.css`
              font-size: 0.875rem;
              padding: 0.5rem 1rem;
            `}

        ${r&&ie.css`
              font-size: ${ge};
              height: ${be};
              min-width: ${ye};
            `}

        ${o&&ie.css`
              color: ${_e};
              background-color: ${ve};

              :hover {
                color: ${_e};
              }
            `}

        ${a&&ie.css`
              color: #ffffff;
              background-color: #8c1d40;
              border-color: #8c1d40;

              :visited:not(.btn) {
                color: #ffffff;
              }
            `}

        ${s&&ie.css`
              color: ${xe};
              background-color: ${we};

              :visited:not(.btn) {
                color: ${xe};
              }
            `}

        ${u&&ie.css`
              color: ${Oe};
              background-color: ${ke};
            `}
          `,l.class),ref:f,children:l.children})}));Pe.propTypes={type:ae().string,href:ae().string,dark:ae().bool,light:ae().bool,gold:ae().bool,maroon:ae().bool,disabled:ae().bool,small:ae().bool,medium:ae().bool,large:ae().bool,onFocus:ae().func},Pe.defaultProps={disabled:!1};const Te=ie.css`
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
      transform: ${le};
    }

    :active {
      transform: ${fe};
    }

    &.btn-disabled {
      opacity: ${"50%"};
    }

    &.btn-small {
      font-size: ${pe};
      height: ${me};
      min-width: ${he};
      padding: ${ue} ${de};
    }

    &.btn-medium {
      font-size: ${"0.875rem"};
      height: ${"2rem"};
      min-width: ${"5rem"};
      padding: ${"0.5rem"} ${"1rem"};
    }

    &.btn-large {
      font-size: ${ge};
      height: ${be};
      min-width: ${ye};
    }

    &.btn-gold {
      color: ${_e};
      background-color: ${ve};
    }

    &.btn-maroon {
      color: ${"#fafafa"};
      background-color: ${"#8c1d40"};
    }

    &.btn-dark {
      color: ${xe};
      background-color: ${we};
    }

    &.btn-light {
      color: ${Oe};
      background-color: ${ke};
    }
  }
`,Ee=L((({href:e,children:n,...t},r)=>i(Pe,{type:e?"link":"button",ref:r,...e?{href:e}:{},...t,children:n})));function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Le(e,n,t[n])}))}return e}function Ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Ee.propTypes={type:ae().string,href:ae().string,gold:ae().bool,maroon:ae().bool,disabled:ae().bool,small:ae().bool,medium:ae().bool,large:ae().bool,itemRef:ae().oneOfType([ae().func,ae().shape({current:ae().instanceOf(ae().element)})]),onFocus:ae().func},Ee.defaultProps={disabled:!1};var Ie=function(){},Fe={},He={},Re={mark:Ie,measure:Ie};try{"undefined"!=typeof window&&(Fe=window),"undefined"!=typeof document&&(He=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(Re=performance)}catch(u){}var Ue=(Fe.navigator||{}).userAgent,De=void 0===Ue?"":Ue,We=Fe,qe=He,Ve=Re,Ye=(We.document,!!qe.documentElement&&!!qe.head&&"function"==typeof qe.addEventListener&&"function"==typeof qe.createElement),Be=(~De.indexOf("MSIE")||De.indexOf("Trident/"),"svg-inline--fa"),Xe="data-fa-i2svg",Ge=(function(){try{}catch(e){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),Ke=Ge.concat([11,12,13,14,15,16,17,18,19,20]),Ze={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Je=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",Ze.GROUP,Ze.SWAP_OPACITY,Ze.PRIMARY,Ze.SECONDARY].concat(Ge.map((function(e){return"".concat(e,"x")}))).concat(Ke.map((function(e){return"w-".concat(e)}))),We.FontAwesomeConfig||{});if(qe&&"function"==typeof qe.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var n=Ae(e,2),t=n[0],r=n[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var n=qe.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}(t));null!=i&&(Je[r]=i)}))}var Qe=Ne({},{familyPrefix:"fa",replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Je);Qe.autoReplaceSvg||(Qe.observeMutations=!1);var en=Ne({},Qe);We.FontAwesomeConfig=en;var nn=We||{};nn.___FONT_AWESOME___||(nn.___FONT_AWESOME___={}),nn.___FONT_AWESOME___.styles||(nn.___FONT_AWESOME___.styles={}),nn.___FONT_AWESOME___.hooks||(nn.___FONT_AWESOME___.hooks={}),nn.___FONT_AWESOME___.shims||(nn.___FONT_AWESOME___.shims=[]);var tn=nn.___FONT_AWESOME___,rn=[];Ye&&((qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(qe.readyState)||qe.addEventListener("DOMContentLoaded",(function e(){qe.removeEventListener("DOMContentLoaded",e),1,rn.map((function(e){return e()}))})));var on,an="pending",sn="settled",cn="fulfilled",ln="rejected",fn=function(){},dn=void 0!==t.g&&void 0!==t.g.process&&"function"==typeof t.g.process.emit,un="undefined"==typeof setImmediate?setTimeout:setImmediate,pn=[];function mn(){for(var e=0;e<pn.length;e++)pn[e][0](pn[e][1]);pn=[],on=!1}function hn(e,n){pn.push([e,n]),on||(on=!0,un(mn,0))}function gn(e){var n=e.owner,t=n._state,r=n._data,i=e[t],o=e.then;if("function"==typeof i){t=cn;try{r=i(r)}catch(e){_n(o,e)}}bn(o,r)||(t===cn&&yn(o,r),t===ln&&_n(o,r))}function bn(e,n){var t;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===Me(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(r){t||(t=!0,n===r?vn(e,r):yn(e,r))}),(function(n){t||(t=!0,_n(e,n))})),!0}}catch(n){return t||_n(e,n),!0}return!1}function yn(e,n){e!==n&&bn(e,n)||vn(e,n)}function vn(e,n){e._state===an&&(e._state=sn,e._data=n,hn(xn,e))}function _n(e,n){e._state===an&&(e._state=sn,e._data=n,hn(kn,e))}function wn(e){e._then=e._then.forEach(gn)}function xn(e){e._state=cn,wn(e)}function kn(e){e._state=ln,wn(e),!e._handled&&dn&&t.g.process.emit("unhandledRejection",e._data,e)}function On(e){t.g.process.emit("rejectionHandled",e)}function zn(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof zn==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,n){function t(e){_n(n,e)}try{e((function(e){yn(n,e)}),t)}catch(e){t(e)}}(e,this)}zn.prototype={constructor:zn,_state:an,_then:null,_data:void 0,_handled:!1,then:function(e,n){var t={owner:this,then:new this.constructor(fn),fulfilled:e,rejected:n};return!n&&!e||this._handled||(this._handled=!0,this._state===ln&&dn&&hn(On,this)),this._state===cn||this._state===ln?hn(gn,t):this._then.push(t),t.then},catch:function(e){return this.then(null,e)}},zn.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new zn((function(n,t){var r=[],i=0;function o(e){return i++,function(t){r[e]=t,--i||n(r)}}for(var a,s=0;s<e.length;s++)(a=e[s])&&"function"==typeof a.then?a.then(o(s),t):r[s]=a;i||n(r)}))},zn.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new zn((function(n,t){for(var r,i=0;i<e.length;i++)(r=e[i])&&"function"==typeof r.then?r.then(n,t):n(r)}))},zn.resolve=function(e){return e&&"object"===Me(e)&&e.constructor===zn?e:new zn((function(n){n(e)}))},zn.reject=function(e){return new zn((function(n,t){t(e)}))};var Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $n(e){if(e&&Ye){var n=qe.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=qe.head.childNodes,r=null,i=t.length-1;i>-1;i--){var o=t[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return qe.head.insertBefore(n,r),e}}function Cn(){for(var e=12,n="";e-- >0;)n+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return n}function Pn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tn(e){return Object.keys(e||{}).reduce((function(n,t){return n+"".concat(t,": ").concat(e[t],";")}),"")}function En(e){return e.size!==Sn.size||e.x!==Sn.x||e.y!==Sn.y||e.rotate!==Sn.rotate||e.flipX||e.flipY}function Mn(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),a="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(o," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var jn={x:0,y:0,width:"100%",height:"100%"};function Ln(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Nn(e){var n=e.icons,t=n.main,r=n.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,c=e.title,l=e.maskId,f=e.titleId,d=e.extra,u=e.watchable,p=void 0!==u&&u,m=r.found?r:t,h=m.width,g=m.height,b="fak"===i,y=b?"":"fa-w-".concat(Math.ceil(h/g*16)),v=[en.replacementClass,o?"".concat(en.familyPrefix,"-").concat(o):"",y].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),_={children:[],attributes:Ne({},d.attributes,{"data-prefix":i,"data-icon":o,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)})},w=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};p&&(_.attributes[Xe]=""),c&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||Cn())},children:[c]});var x=Ne({},_,{prefix:i,iconName:o,main:t,mask:r,maskId:l,transform:a,symbol:s,styles:Ne({},w,d.styles)}),k=r.found&&t.found?function(e){var n,t=e.children,r=e.attributes,i=e.main,o=e.mask,a=e.maskId,s=e.transform,c=i.width,l=i.icon,f=o.width,d=o.icon,u=Mn({transform:s,containerWidth:f,iconWidth:c}),p={tag:"rect",attributes:Ne({},jn,{fill:"white"})},m=l.children?{children:l.children.map(Ln)}:{},h={tag:"g",attributes:Ne({},u.inner),children:[Ln(Ne({tag:l.tag,attributes:Ne({},l.attributes,u.path)},m))]},g={tag:"g",attributes:Ne({},u.outer),children:[h]},b="mask-".concat(a||Cn()),y="clip-".concat(a||Cn()),v={tag:"mask",attributes:Ne({},jn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(n=d,"g"===n.tag?n.children:[n])},v]};return t.push(_,{tag:"rect",attributes:Ne({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},jn)}),{children:t,attributes:r}}(x):function(e){var n=e.children,t=e.attributes,r=e.main,i=e.transform,o=Tn(e.styles);if(o.length>0&&(t.style=o),En(i)){var a=Mn({transform:i,containerWidth:r.width,iconWidth:r.width});n.push({tag:"g",attributes:Ne({},a.outer),children:[{tag:"g",attributes:Ne({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Ne({},r.icon.attributes,a.path)}]}]})}else n.push(r.icon);return{children:n,attributes:t}}(x),O=k.children,z=k.attributes;return x.children=O,x.attributes=z,s?function(e){var n=e.prefix,t=e.iconName,r=e.children,i=e.attributes,o=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ne({},i,{id:!0===o?"".concat(n,"-").concat(en.familyPrefix,"-").concat(t):o}),children:r}]}]}(x):function(e){var n=e.children,t=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(En(a)&&t.found&&!r.found){var s={x:t.width/t.height/2,y:.5};i.style=Tn(Ne({},o,{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:n}]}(x)}var An=function(){},In=(en.measurePerformance&&Ve&&Ve.mark&&Ve.measure,function(e,n,t,r){var i,o,a,s=Object.keys(e),c=s.length,l=void 0!==r?function(e,n){return function(t,r,i,o){return e.call(n,t,r,i,o)}}(n,r):n;for(void 0===t?(i=1,a=e[s[0]]):(i=0,a=t);i<c;i++)a=l(a,e[o=s[i]],o,e);return a});function Fn(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.skipHooks,i=void 0!==r&&r,o=Object.keys(n).reduce((function(e,t){var r=n[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e}),{});"function"!=typeof tn.hooks.addPack||i?tn.styles[e]=Ne({},tn.styles[e]||{},o):tn.hooks.addPack(e,o),"fas"===e&&Fn("fa",n)}var Hn=tn.styles,Rn=tn.shims,Un=function(){var e=function(e){return In(Hn,(function(n,t,r){return n[r]=In(t,e,{}),n}),{})};e((function(e,n,t){return n[3]&&(e[n[3]]=t),e})),e((function(e,n,t){var r=n[2];return e[t]=t,r.forEach((function(n){e[n]=t})),e}));var n="far"in Hn;In(Rn,(function(e,t){var r=t[0],i=t[1],o=t[2];return"far"!==i||n||(i="fas"),e[r]={prefix:i,iconName:o},e}),{})};Un();tn.styles;function Dn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}function Wn(e){var n=e.tag,t=e.attributes,r=void 0===t?{}:t,i=e.children,o=void 0===i?[]:i;return"string"==typeof e?Pn(e):"<".concat(n," ").concat(function(e){return Object.keys(e||{}).reduce((function(n,t){return n+"".concat(t,'="').concat(Pn(e[t]),'" ')}),"").trim()}(r),">").concat(o.map(Wn).join(""),"</").concat(n,">")}var qn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,n){var t=n.toLowerCase().split("-"),r=t[0],i=t.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),n):n};function Vn(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}Vn.prototype=Object.create(Error.prototype),Vn.prototype.constructor=Vn;var Yn={fill:"currentColor"},Bn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Xn={tag:"path",attributes:Ne({},Yn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},Gn=Ne({},Bn,{attributeName:"opacity"});Ne({},Yn,{cx:"256",cy:"364",r:"28"}),Ne({},Bn,{attributeName:"r",values:"28;14;28;28;14;28;"}),Ne({},Gn,{values:"1;0;1;1;0;1;"}),Ne({},Yn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Ne({},Gn,{values:"1;0;0;0;0;1;"}),Ne({},Yn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Ne({},Gn,{values:"0;0;1;1;0;0;"}),tn.styles;function Kn(e){var n=e[0],t=e[1],r=Ae(e.slice(4),1)[0];return{found:!0,width:n,height:t,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(en.familyPrefix,"-").concat(Ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(en.familyPrefix,"-").concat(Ze.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(en.familyPrefix,"-").concat(Ze.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}tn.styles;function Zn(){var e="fa",n=Be,t=en.familyPrefix,r=en.replacementClass,i='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(t!==e||r!==n){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");i=i.replace(o,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(s,".".concat(r))}return i}function Jn(){en.autoAddCss&&!rt&&($n(Zn()),rt=!0)}function Qn(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Wn(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var n=qe.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function et(e){var n=e.prefix,t=void 0===n?"fa":n,r=e.iconName;if(r)return Dn(tt.definitions,t,r)||Dn(tn.styles,t,r)}var nt,tt=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var n,t,r;return n=e,(t=[{key:"add",value:function(){for(var e=this,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=t.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(n){e.definitions[n]=Ne({},e.definitions[n]||{},i[n]),Fn(n,i[n]),Un()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var t=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(t).map((function(n){var r=t[n],i=r.prefix,o=r.iconName,a=r.icon;e[i]||(e[i]={}),e[i][o]=a})),e}}])&&je(n.prototype,t),r&&je(n,r),e}()),rt=!1,it={transform:function(e){return qn(e)}},ot=(nt=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.transform,r=void 0===t?Sn:t,i=n.symbol,o=void 0!==i&&i,a=n.mask,s=void 0===a?null:a,c=n.maskId,l=void 0===c?null:c,f=n.title,d=void 0===f?null:f,u=n.titleId,p=void 0===u?null:u,m=n.classes,h=void 0===m?[]:m,g=n.attributes,b=void 0===g?{}:g,y=n.styles,v=void 0===y?{}:y;if(e){var _=e.prefix,w=e.iconName,x=e.icon;return Qn(Ne({type:"icon"},e),(function(){return Jn(),en.autoA11y&&(d?b["aria-labelledby"]="".concat(en.replacementClass,"-title-").concat(p||Cn()):(b["aria-hidden"]="true",b.focusable="false")),Nn({icons:{main:Kn(x),mask:s?Kn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:w,transform:Ne({},Sn,r),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:b,styles:v,classes:h}})}))}},function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(e||{}).icon?e:et(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:et(r||{})),nt(t,Ne({},n,{mask:r}))});function at(e){return(at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function st(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ct(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function lt(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ct(Object(t),!0).forEach((function(n){st(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ct(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ft(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function dt(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ut(e){return n=e,(n-=0)==n?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,n){return n?n.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var n}function pt(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,n){var t,r=n.indexOf(":"),i=ut(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[(t=i,t.charAt(0).toUpperCase()+t.slice(1))]=o:e[i]=o,e}),{})}var mt=!1;try{mt=!0}catch(u){}function ht(e){return it.icon?it.icon(e):null===e?null:"object"===at(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function gt(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?st({},e,n):{}}function bt(e){var n=e.forwardedRef,t=ft(e,["forwardedRef"]),r=t.icon,i=t.mask,o=t.symbol,a=t.className,s=t.title,c=t.titleId,l=ht(r),f=gt("classes",[].concat(dt(function(e){var n,t=e.spin,r=e.pulse,i=e.fixedWidth,o=e.inverse,a=e.border,s=e.listItem,c=e.flip,l=e.size,f=e.rotation,d=e.pull,u=(st(n={"fa-spin":t,"fa-pulse":r,"fa-fw":i,"fa-inverse":o,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),st(n,"fa-rotate-".concat(f),null!=f&&0!==f),st(n,"fa-pull-".concat(d),null!=d),st(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(u).map((function(e){return u[e]?e:null})).filter((function(e){return e}))}(t)),dt(a.split(" ")))),d=gt("transform","string"==typeof t.transform?it.transform(t.transform):t.transform),u=gt("mask",ht(i)),p=ot(l,lt({},f,{},d,{},u,{symbol:o,title:s,titleId:c}));if(!p)return function(){var e;!mt&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var m=p.abstract,h={ref:n};return Object.keys(t).forEach((function(e){bt.defaultProps.hasOwnProperty(e)||(h[e]=t[e])})),yt(m[0],h)}bt.displayName="FontAwesomeIcon",bt.propTypes={border:ae().bool,className:ae().string,mask:ae().oneOfType([ae().object,ae().array,ae().string]),fixedWidth:ae().bool,inverse:ae().bool,flip:ae().oneOf(["horizontal","vertical","both"]),icon:ae().oneOfType([ae().object,ae().array,ae().string]),listItem:ae().bool,pull:ae().oneOf(["right","left"]),pulse:ae().bool,rotation:ae().oneOf([0,90,180,270]),size:ae().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ae().bool,symbol:ae().oneOfType([ae().bool,ae().string]),title:ae().string,transform:ae().oneOfType([ae().string,ae().object]),swapOpacity:ae().bool},bt.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var yt=function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof t)return t;var i=(t.children||[]).map((function(t){return e(n,t)})),o=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e.attrs.className=r,delete t.attributes.class;break;case"style":e.attrs.style=pt(r);break;default:0===n.indexOf("aria-")||0===n.indexOf("data-")?e.attrs[n.toLowerCase()]=r:e.attrs[ut(n)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,c=ft(r,["style"]);return o.attrs.style=lt({},o.attrs.style,{},s),n.apply(void 0,[t.tag,lt({},o.attrs,{},c)].concat(dt(i)))}.bind(null,re.createElement),vt={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},_t={prefix:"fas",iconName:"bell",icon:[448,512,[],"f0f3","M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"]},wt={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]},xt={prefix:"fas",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"]},kt={prefix:"fas",iconName:"clipboard",icon:[384,512,[],"f328","M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"]},Ot={prefix:"fas",iconName:"desktop",icon:[576,512,[],"f108","M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"]},zt={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]},St={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},$t={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},Ct={prefix:"fas",iconName:"map-pin",icon:[288,512,[],"f276","M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"]},Pt={prefix:"fas",iconName:"mobile",icon:[320,512,[],"f10b","M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"]},Tt={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},Et={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};const Mt=e=>i(bt,{icon:vt,...e}),jt=e=>i(bt,{icon:Tt,...e}),Lt=e=>i(bt,{icon:wt,...e}),Nt=e=>i(bt,{icon:Pt,...e}),At=e=>i(bt,{icon:Ot,...e}),It=e=>i(bt,{icon:kt,...e}),Ft=e=>i(bt,{icon:Ct,...e}),Ht=e=>i(bt,{icon:zt,...e}),Rt=e=>i(bt,{icon:_t,...e}),Ut=e=>i(bt,{icon:$t,...e}),Dt=e=>i("span",{class:(0,ie.cx)("fa-layers fa-fw",e.class),children:[i(bt,{icon:xt,size:"2x"}),i(bt,{icon:Et,size:"1x"})]}),Wt=e=>i(bt,{icon:St,...e}),qt=({type:e,...n})=>{switch(e){case"mobile":return i(Nt,{});case"chevron-down":return i(Lt,{...n});case"search":return i(jt,{...n});case"desktop":return i(At,{...n});case"clipboard":return i(It,{...n});case"map-pin":return i(Ft,{...n});case"exclamation-triangle":return i(Ht,{...n});case"bell":return i(Rt,{...n});case"info-circle":return i(Ut,{...n});case"circle-close":return i(Dt,{...n});case"bars":return i(Mt,{...n});case"home":return i(Wt,{...n});default:return""}};qt.propTypes={type:ae().string.isRequired},qt.defaultProps={};const Vt=({show:e,id:n,...t})=>i("div",{...n?{id:n}:{},class:(0,ie.cx)(ie.css`
          padding: 0 32px 24px 32px;
          flex-grow: 100;
          flex: 1 1 auto;
          min-height: 1px;
          padding: 1.25rem;
          ${!e&&ie.css`
            display: none;
          `}
        `,t.class),dangerouslySetInnerHTML:{__html:t.children}}),Yt=e=>i("div",{class:(0,ie.cx)(ie.css`
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
        `,e.class),children:e.children}),Bt=({show:e,id:n,...t})=>i(Vt,{...n?{id:n}:{},show:e,class:(0,ie.cx)(ie.css`
          ${e&&ie.css`
            border-top: 1px solid #d0d0d0;
          `}
        `,t.class),children:t.children}),Xt=({show:e,id:n,...t})=>i("button",{"aria-expanded":e,...n?{"aria-controls":n}:{},role:"button",class:ie.css`
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

        ${e?ie.css`
                .fa-chevron-down {
                  transform: rotate(-180deg);
                }
              `:""}

      `,...t,children:[t.children,i(qt,{type:"chevron-down"})]}),Gt=({head:e,children:n,id:t,...r})=>{const[o,a]=g(!1);return i(Yt,{class:r.class,children:[i(Xt,{show:o,id:t,onClick:()=>{a((e=>!e))},children:e}),i(Bt,{show:o,id:t,children:n})]})};Gt.propTypes={head:ae().node,children:ae().node,class:ae().string,id:ae().string},Gt.defaultProps={};const Kt=e=>ie.css`
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
      &.dropdown-open,
      :hover {
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
          background-image: linear-gradient(
            to right,
            transparent 0.5%,
            #ffc627 0.5%
          );
          position: relative;
          bottom: 0;
          width: 0;
          margin-left: 0;
          top: 0.5rem;
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
            content: "";
            display: block;
            height: 0.5rem;
            position: relative;
            top: 0.5rem;
            bottom: 0;
            width: 0;
            left: -0.75rem;
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
      ${ze}
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
          padding: 1rem 1rem 0.5rem 1rem;
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
        ${(e=>{const n=e||"relative";return ie.css`
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    border: none;
    clip: auto;
    position: ${n};
  `})()}
      }
    }
  }
`,Zt=L((({children:e,...n},t)=>i("ul",{ref:t,"aria-label":"ASU",...n,class:(0,ie.cx)(n.class,"navlist"),children:e}))),Jt=e=>i("form",{class:"navbar-site-buttons",children:e.children}),Qt=e=>i("div",{class:(0,ie.cx)("dropdown",e.open?"open":"",e.class),children:[i("div",{children:e.children}),e.buttons?i("div",{class:"button-row",children:i("div",{children:e.buttons})}):""]}),er=e=>i("div",{class:(0,ie.cx)("drop-controls"),children:e.children}),nr=e=>i("ul",{class:(0,ie.cx)("menu-column",e.open?"open":""),children:e.children}),tr=e=>ie.css`
  ul {
    list-style: none;
    a {
      text-decoration: none;
    }
  }

  .mobile-only {
    ${ze}
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

  ${(e=>ie.css`
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

      div:not(.button-row) {
        max-width: ${$e};
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

    .button-row {
      border-top: 1px solid #cccccc;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 2rem;
        display: flex;
        margin: 0 auto;
        justify-content: flex-start;
        margin: 0 auto;

        a + a {
          margin-left: 1rem;
        }
      }
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

      > div:not(.button-row) {
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
  ${(e=>ie.css`
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
    }
  }
`)(e)}
  ${(e=>ie.css`
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

    @media (max-width: ${"576px"}) {
      flex-direction: column;
      align-items: flex-start;

      a + a {
        margin-top: 1rem;
        margin-left: 0;
      }
    }
  }
`)(e)}
  ${Kt(e)}
  ${(e=>ie.css`
  /** Dropcontrols CSS **/
  div.drop-controls {
    display: block;
    align-items: center;
    padding: 0.5rem 0.75rem;
    color: #191919;

    :after {
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      content: "";
      display: block;
      height: 0.5rem;
      background-image: linear-gradient(
        to right,
        transparent 0.5%,
        #ffc627 0.5%
      );
      position: relative;
      bottom: 0;
      width: 0;
      margin-left: 0;
      top: 0.5rem;
    }

    > a {
      color: #191919;
    }

    > svg {
      transition: 0.5s cubic-bezier(0.19,1,0.19,1);

      &.open {
        transform: rotate(180deg);
      }
    }

    @media (min-width: ${e}) {
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
        content: "";
        display: block;
        height: 0.5rem;
        position: relative;
        top: 0.5rem;
        bottom: 0;
        width: 0;
        left: -0.75rem;
        margin-left: 0;
      }
    }

    @media (max-width: ${e}) {
      display: flex;
      color: black;
      padding: 1rem 1rem 0.5rem 1rem;
      border-bottom: 1px solid #cccccc;
      align-items: center;
      > a {
        flex-grow: 1;
      }

      > svg {
        cursor: pointer;
        font-size: 1.25rem;
        min-width: 3rem;
      }

    }
  }
`)(e)}
`,rr=e=>ie.css`
  nav.header-nav {
    ${tr(e)}
  }
`,ir=({open:e,maxMobileHeight:n,injectStyles:t,breakpoint:r,handleKeyDown:o,children:a,...s})=>{const c=-1==n?"75vh":`${n}px`,l="Xl"===r?ce:se;return i("nav",{id:"asu-header-nav",class:(0,ie.cx)("header-nav",e?"open-nav":"",ie.css`
          @media (max-width: ${l}) {
            &.open-nav,
            &:target {
              flex-direction: column;
              width: 100%;

              max-height: ${c};
              display: flex;
            }
          }
        `,t?tr(l):""),...s,children:a})},or=e=>ie.css`
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

      > button {
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>') no-repeat 5px 50%;
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
        background: transparent;
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
`,ar=e=>i("div",{class:(0,ie.cx)("asu-search-form",e.class),...e,children:e.children}),sr=e=>ie.css`
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
`,cr=e=>i("div",{class:(0,ie.cx)(e.class,"login-status"),children:e.children}),lr=e=>ie.css`
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
`,fr=L((({brandLink:e,src:n,mobileSrc:t,alt:r,...o},a)=>i("a",{href:e,class:"navbar-brand",ref:a,...o,children:[i("img",{class:"vert",src:n,alt:r}),i("img",{class:"horiz",src:t,alt:r})]}))),dr=e=>ie.css`
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

        :hover {
          text-decoration: underline;
        }
      }

      &.subunit-name {
        font-size: 2rem;
        margin: 1.5rem 0 1rem 0;
        font-weight: 700;

        :hover {
          text-decoration: underline;
        }
      }

      .subunit-name {
        font-size: 1.5rem;
        margin-bottom: 0;

        :hover {
          text-decoration: underline;
        }
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
`,ur=L((({children:e,parentOrg:n,baseUrl:t,parentOrgUrl:r,...o},a)=>n?i("div",{class:(0,ie.cx)("title",o.class),ref:a,children:[i("a",{class:"unit-name",href:r,children:n}),i("a",{class:"subunit-name",href:t,children:e})]}):i("a",{class:(0,ie.cx)("title","subunit-name",o.class),href:t,ref:a,children:e}))),pr=e=>ie.css`
  .navlink,
  .navicon,
  .navbutton {
    padding: 0;
    margin: 0;

    > a {
      padding: .5rem;
      position: relative;

      &.nav-item {
        display: block;
      }
    }

    @media (max-width: ${e}) {
      border-bottom: 1px solid #cccccc;

      .icon-nav-item {
        ${ze}
      }
    }
  }

  .navlink {

    > a {
      color: #191919;
    }


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
    margin-top: auto;

    @media (min-width: ${e}) {
      order: 1;
    }

    @media (max-width: ${e}) {
      margin-top: .5rem;
    }
  }
`,mr=L((({onFocus:e,children:n,...t},r)=>i("li",{class:"navlink",children:i("a",{...t,class:(0,ie.cx)("nav-item",t.class),...e?{onFocus:e}:"",ref:r,children:n})}))),hr=L((({children:e,onFocus:n,type:t,alt:r,...o},a)=>i("li",{class:"navicon",children:i("a",{...o,class:o.class?o.class:"",...n?{onFocus:n}:"",ref:a,children:[i(qt,{type:t,className:"icon-nav-item",alt:r}),i("span",{class:"mobile-only",children:e})]})}))),gr=L((({children:e,...n},t)=>i("li",{class:(0,ie.cx)("navbutton",n.class),children:i(Ee,{...n,ref:t,medium:!0,dark:!0,children:e})}))),br=e=>ie.css`
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
`,yr=({mobileOpen:e,...n})=>i("button",{...n,class:(0,ie.cx)(ie.css`
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
        `,"navbar-toggler"),children:i(qt,e?{type:"circle-close"}:{type:"bars",href:"#asu-header-nav"})}),vr=e=>ie.css`
  .navbar-component {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: ${$e};

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
      padding: ${Ce} 0 0 0;

      > div {
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`,_r=({children:e,...n})=>i("div",{class:(0,ie.cx)("navbar-component",n.class),children:i("div",{children:e})}),wr=e=>ie.css`
  .navbar-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${e}) {
      width: 100%;
    }
  }
`,xr=e=>i("div",{class:(0,ie.cx)("navbar-container",e.class),children:e.children}),kr=({children:e,breakpoint:n,...t})=>i(r.Fragment,{children:[i("div",{id:"asu-report-accessiblity",children:i("a",{href:"https://www.asu.edu/accessibility/",class:ie.css`
            ${Se}
          `,children:"Report an accessibility problem"})}),i("header",{...t,class:(0,ie.cx)(t.class,ie.css`
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

            @media (max-width: ${n}) {
              &.scrolled .primary-nav .header-title h1 {
                font-size: 1rem;
              }
            }
          `,vr(n),rr(n),Te,wr(n),lr(n),Or(n),or(n),dr(n),sr(n),br(n),pr(n)),children:e})]}),Or=e=>ie.css`
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${$e};
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
`,zr=L(((e,n)=>i("div",{class:(0,ie.cx)("universal-nav",e.open?"mobile-open":"",e.searchOpen?"search-open":""),ref:n,children:i("div",{children:e.children})}))),Sr=({children:e,...n})=>i("div",{class:(0,ie.cx)("nav-grid",n.class),children:e}),$r=ie.css`
  font-weight: 700;
  text-align: left;
  opacity: 1;
  margin: 1rem 0;
  line-height: calc(100% + 0.12em);
`,Cr=({children:e,...n})=>i("h4",{...n,class:(0,ie.cx)(ie.css`
          ${$r}
          font-size: 1.25rem;
          letter-spacing: -0.025em;
        `,n.class),children:e}),Pr=({children:e,...n})=>i("h3",{...n,class:(0,ie.cx)(ie.css`
          ${$r}
          font-size: 1.5rem;
          letter-spacing: -0.035em;
        `,n.class),children:e}),Tr=({type:e,...n})=>{switch(e){case"h4":return i(Cr,{class:n.class,children:n.children});case"h3":return i(Pr,{class:n.class,children:n.children});default:return""}};Tr.propTypes={type:ae().string.isRequired,children:ae().string},Tr.defaultProps={};const Er=L((({onFocus:e,type:n,children:t,href:r,...o},a)=>{switch(n){case"button":return i(gr,{...o,ref:a,href:r,...e?{onFocus:e}:"",medium:!0,dark:!0,children:t});case"icon":return i(hr,{...o,href:r,...e?{onFocus:e}:"",ref:a,type:o.class,alt:`${t} icon`,children:t});case"heading":return i(Tr,{type:"h3",children:t});default:return i(mr,{href:r,...e?{onFocus:e}:"",ref:a,...o,children:t})}}));Er.propTypes={location:ae().array,onFocus:ae().func,type:ae().string,href:ae().string,children:ae().string.isRequired,icon:ae().string},Er.defaultProps={};const Mr=Er,jr=L((({text:e,setFocus:n,pIndex:t,isOpen:r,setOpen:o,children:a,mega:s,buttons:c,href:l,mobile:f,...d},u)=>{const p=e=>{o(r?-1:e)};return i("li",{class:r?"dropdown-open":"",children:[i("a",{...d,role:"button","aria-expanded":r,onMouseDown:e=>{e.preventDefault(),p(t)},onKeyDown:e=>{const n=e.keyCode;32!=n&&13!=n||p(t)},onFocus:e=>{n([t,-1,-1])},tabIndex:"0",ref:u,children:[e," ",i(Lt,{sr:e,className:r?"open":""})]}),i(Qt,{open:r,class:s?"mega":"",...c?{buttons:c.map(((e,n)=>i(Ee,{href:e.href,...e.color?{[e.color]:!0}:{},medium:!0,children:e.text})))}:{},children:a})]})}));jr.propTypes={setFocus:ae().func.isRequired,pIndex:ae().number.isRequired,isOpen:ae().bool,setOpen:ae().func.isRequired,buttons:ae().arrayOf(ae().object),mega:ae().bool,text:ae().string,mobile:ae().bool},jr.defaultProps={isOpen:!1};const Lr=jr,Nr=L((({text:e,setFocus:n,pIndex:t,isOpen:r,setOpen:o,children:a,mega:s,buttons:c,mobile:l,...f},d)=>{const u=e=>{o(r?-1:e)};return i("li",{class:r?"dropdown-open":"",...l?{}:{onMouseEnter:e=>{o(t)},onMouseLeave:e=>{o(-1)}},children:[i(er,{children:[i("a",{...f,role:"button","aria-expanded":r,onFocus:e=>{n([t,-1,-1])},tabIndex:"0",ref:d,children:[e," "]}),i(Lt,{sr:e,className:r?"open":"",onMouseDown:e=>{e.preventDefault(),u(t)},onKeyDown:e=>{const n=e.keyCode;32!=n&&13!=n||u(t)}})]}),i(Qt,{open:r,class:s?"mega":"",...c?{buttons:c.map(((e,n)=>i(Ee,{href:e.href,...e.color?{[e.color]:!0}:{},medium:!0,children:e.text})))}:{},children:a})]})}));Nr.propTypes={setFocus:ae().func.isRequired,pIndex:ae().number.isRequired,isOpen:ae().bool,setOpen:ae().func.isRequired,buttons:ae().arrayOf(ae().object),mega:ae().bool,text:ae().string,mobile:ae().bool},Nr.defaultProps={isOpen:!1};const Ar=Nr,Ir=({navTree:e,width:n,mobileOpen:t,maxMobileHeight:o,buttons:a,injectStyles:s,breakpoint:c,expandOnHover:l})=>{const[f,d]=g([-1,-1,-1]),[u,p]=g(-1),m=e=>{d(e)},h=parseInt("Xl"===c?ce:se,10),b=w((()=>Array.isArray(e)&&0!=e.length?e.map((e=>{const n=(0,r.createRef)();let t=[],{items:i,...o}=e;if(i&&i[0].length>0)for(let e=0;e<i.length;e++)for(let n=0;n<i[e].length;n++)if(t[e]||(t[e]=[]),t[e][n]=Object.assign({},i[e][n]),"heading"!=i[e][n].type){const i=(0,r.createRef)();t[e][n].ref=i}return{ref:n,item:o,menus:t}})):[]),[e]);y((()=>{const e=Fr(f,b);if(e.hasFocus){const[n,t,r]=f;e.isTop?(b[n].ref&&b[n].ref.current!==document.activeElement&&b[n].ref.current.focus(),u!==n&&p(-1)):b[n].menus[t][r].ref&&b[n].menus[t][r].ref.current!==document.activeElement&&b[n].menus[t][r].ref.current.focus()}else-1!==u&&p(-1)}),[f,b]);const v=_(null);y((()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&p(-1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[v]);const x=l?Ar:Lr,k=n<=h;return i(ir,{open:t,maxMobileHeight:o,injectStyles:s,breakpoint:c,children:[i(Zt,{...k?{}:{onfocusout:e=>{e.currentTarget.contains(e.relatedTarget)||m([-1,-1,-1])}},onKeyDown:e=>{const n=Fr(f,b);if(n.hasFocus)switch(e.keyCode){case 37:e.preventDefault(),m(Hr(f,n,b));break;case 39:e.preventDefault(),m(Rr(f,n,b));break;case 38:e.preventDefault(),m(Ur(f,n,b));break;case 40:if(n.isTop&&n.hasSubs&&u!=f[0])return void p(f[0]);e.preventDefault(),m(Dr(f,n,b));break;case 27:n.isTop||m([f[0],-1,-1])}},ref:v,children:b.map(((e,n)=>{const t=e.item,r=e.menus;return r&&r.length>0&&r[0].length>0?i(x,{...t,pIndex:n,setFocus:m,ref:e.ref,isOpen:u==n,setOpen:p,mega:r.length>2,mobile:k,children:r.map(((e,t)=>i(nr,{children:e.map(((e,o)=>i(Mr,{onFocus:()=>{d([n,t,o]),p(n)},ref:r[t][o].ref,type:e.hasOwnProperty("type")?e.type:void 0,color:e.hasOwnProperty("color")?e.color:void 0,class:e.hasOwnProperty("class")?e.class:void 0,href:e.hasOwnProperty("href")?e.href:void 0,children:e.text})))})))}):i(Mr,{onFocus:()=>{m([n,-1,-1])},ref:e.ref,type:t.hasOwnProperty("type")?t.type:void 0,color:t.hasOwnProperty("color")?t.color:void 0,class:t.hasOwnProperty("class")?t.class:"",href:t.hasOwnProperty("href")?t.href:void 0,children:t.text})}))}),a.length>0&&i(Jt,{children:a.map((e=>{let n=e.color?e.color:"maroon";return i(Ee,{href:e.href,[n]:!0,medium:!0,children:e.text})}))})]})};Ir.propTypes={navTree:ae().arrayOf(ae().object),buttons:ae().arrayOf(ae().object),expandOnHover:ae().bool,mobileOpen:ae().bool,width:ae().number,height:ae().number,maxMobileHeight:ae().number,injectStyles:ae().bool,breakpoint:ae().oneOf(["Lg","Xl"])},Ir.defaultProps={navTree:[],mobileOpen:!1,expandOnHover:!1,width:1920,height:1080,maxMobileHeight:-1,buttons:[],injectStyles:!1};const Fr=(e,n)=>{const[t,r,i]=e;let o=!1,a=!1,s=!1,c=!1,l=!1;return-1==t&&-1==r&&-1==i?{hasFocus:o}:(o=!0,n[t].menus.length>0&&(s=!0),a=-1===r||-1===i,a&&t===n.length-1&&(c=!0),a&&0===t&&(l=!0),{hasFocus:o,isTop:a,hasSubs:s,isLast:c,isFirst:l})},Hr=(e,n,t)=>{const[r,i,o]=e;let a=e;return n.isTop?(a=void 0!==t[r-1]?[r-1,-1,-1]:[0,-1,-1],!1===Wr(a,t)?Hr(a,Fr(a,t),t):a):void 0!==t[r].menus[i-1]?t[r].menus[i-1][0].ref?[r,i-1,0]:[r,i-1,1]:[r,-1,-1]},Rr=(e,n,t)=>{const[r,i,o]=e;let a=e;return n.isTop?(a=void 0!==t[r+1]?[r+1,-1,-1]:[t.length-1,-1,-1],!1===Wr(a,t)?Rr(a,Fr(a,t),t):a):void 0!==t[r].menus[i+1]?t[r].menus[i+1][0].ref?[r,i+1,0]:[r,i+1,1]:[r,-1,-1]},Ur=(e,n,t)=>{const[r,i,o]=e;let a=[],s=e;return n.hasSubs&&(a=t[r].menus),s=n.isTop?Hr(e,n,t):void 0!==a[i][o-1]?[r,i,o-1]:[r,-1,-1],!1===Wr(s,t)?Ur(s,Fr(s,t),t):s},Dr=(e,n,t)=>{const[r,i,o]=e;let a=[],s=e;return n.hasSubs&&(a=t[r].menus),s=n.isTop&&n.hasSubs?[r,0,0]:n.isTop?Rr(e,n,t):void 0!==a[i][o+1]?[r,i,o+1]:Rr(e,n,t),!1===Wr(s,t)?Dr(s,Fr(s,t),t):s},Wr=(e,n)=>{const t=Fr(e,n);if(!t.hasFocus)return!1;if(t.isTop){if(n[e[0]].ref)return!0}else if(n[e[0]].menus[e[1]][e[2]].ref)return!0;return!1},qr=({type:e,open:n,inputRef:t,mobile:r,...o})=>{switch(e){case"d7":return i("div",{children:"Drupal 7"});default:return i("form",{action:"https://search.asu.edu/search",method:"get",role:"search",class:n?"show-search-input":"",...o,children:[i("button",{type:"submit","aria-label":"Submit ASU Search"}),i("input",{name:"q",type:"search",...t?{ref:t}:{},"aria-labelledby":"asu-search-label",...r?{placeHolder:"Search ASU"}:{},required:!0}),i("label",{class:"univeral-search",id:"asu-search-label",onmousedown:()=>event.preventDefault(),children:"Search ASU"})]})}};qr.propTypes={type:ae().string,open:ae().bool,inputRef:ae().oneOfType([ae().func,ae().shape({current:ae().instanceOf(ae().element)})]),mobile:ae().bool},qr.defaultProps={};const Vr=({type:e,open:n,setOpen:t,mobile:r})=>{const o=_(null);y((()=>{o.current.value&&t(!0)}),[]);const a=x((e=>{o.current.value||e.currentTarget.contains(e.relatedTarget)||t(!1)}),[n]),s=x((e=>{t(!0),o.current.focus()}),[n]),c=x((()=>{t(!0)}),[n]);return i(ar,{onfocusin:c,onfocusout:a,onClick:s,children:i(qr,{open:n,type:e,inputRef:o,mobile:r})})};Vr.propTypes={type:ae().string,open:ae().bool,setOpen:ae().func,mobile:ae().bool},Vr.defaultProps={open:!1};const Yr=({loggedIn:e,loginLink:n,logoutLink:t,userName:o,...a})=>i(cr,{class:a.class,children:e?i(r.Fragment,{children:[o?i("span",{class:"name",children:o}):"",i("a",{class:"signout",href:t,children:"Sign Out"})]}):i("a",{href:n,children:"Sign in"})});Yr.propTypes={class:ae().string,loggedIn:ae().bool.isRequired,loginLink:ae().string,logoutLink:ae().string,userName:ae().string},Yr.defaultProps={logoutLink:"https://webapp4.asu.edu/myasu/Signout",loginLink:"https://weblogin.asu.edu/cgi-bin/login",loggedIn:!1};const Br=({children:e,mobileOpen:n,logo:t,...r})=>i(_r,{mobileOpen:n,children:[t,i(yr,{...r,mobileOpen:n}),i(xr,{children:e})]});Br.propTypes={mobileOpen:ae().bool,logo:ae().node,children:ae().node},Br.defaultProps={mobileOpen:!1};const Xr=L(((e,n)=>i(fr,{ref:n,...e})));Xr.propTypes={alt:ae().string,src:ae().string,mobileSrc:ae().string,brandLink:ae().string},Xr.defaultProps={alt:"Arizona State University",src:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo-vertical.png",mobileSrc:"https://www.asu.edu/asuthemes/5.0/assets/arizona-state-university-logo.png",brandLink:"https://asu.edu"};const Gr=(e,n,t)=>(0,r.hydrate)((0,r.h)(e,n),t),Kr=(e,n,t)=>(0,r.render)((0,r.h)(e,n),t),Zr=()=>{let e={userName:"",loggedIn:!1};const n=document.cookie.split(";");for(let t=0;t<n.length;t++)if(n[t].indexOf("SSONAME")>0){if(""==n[t].substring(9))break;e.userName=n[t].substring(9),e.loggedIn=!0;break}return e},Jr=e=>{let n;const t=window.location.toString();return n=decodeURI(e),n=n.replace("/login",`/login?callapp=${t}`),n},Qr=e=>{const n=e||window.location.hostname,t=document.cookie.split("; ").find((e=>e.startsWith("title_loaded")));return!document.referrer.includes(n)&&!t&&(document.cookie="title_loaded=true;max-age=600",!0)},ei=(e,n="headerContainer",t=!1)=>{const{loggedIn:r,userName:i,loginLink:o,...a}=e,s=o||Jr(Yr.defaultProps.loginLink);let c;c="boolean"==typeof r&&!1===r?{loggedIn:!1,userName:""}:r&&i?{loggedIn:r,userName:i}:Zr();const l={...c,...a,loginLink:s};t?Gr(ri,l,document.getElementById(n)):Kr(ri,l,document.getElementById(n))},ni=L((({children:e,baseUrl:n,animate:t,...r},o)=>{const[a,s]=g(!1);return y((()=>{if(!0!==t&&!1!==t){if(!1!==t){let e="/"==n?window.location.hostname:n;e.includes(window.location.hostname)||0!==e.indexOf("/")||(e=window.location.hostname+e),Qr(e)&&s(!0)}}else s(t)}),[a,t,n]),i(ur,{ref:o,...r,class:a?"active":"",baseUrl:n,children:e})}));function ti(){const e="undefined"!=typeof window,{innerWidth:n,innerHeight:t}=e?window:{innerWidth:1920,innerHeight:1080};return{width:n,height:t}}ni.propTypes={baseUrl:ae().string,parentOrg:ae().string,parentOrgUrl:ae().string,animate:ae().bool},ni.defaultProps={baseUrl:"/",parentOrgUrl:"/"};const ri=({navTree:e,title:n,baseUrl:t,parentOrg:o,parentOrgUrl:a,logo:s,loggedIn:c,userName:l,loginLink:f,logoutLink:d,buttons:u,breakpoint:p,animateTitle:m,expandOnHover:h,...b})=>{const[v,w]=g(!1),[x,k]=g(!1),[O,z]=g(-1),S="Xl"===p?ce:se,$=parseInt(S,10),{height:C,width:P}=function(){const[e,n]=g(ti());return y((()=>{function e(){n(ti())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}(),[T,E]=g(0),M=()=>{const e=window.pageYOffset;E(e)};y((()=>(window.addEventListener("scroll",M,{passive:!0}),()=>{window.removeEventListener("scroll",M)})),[]);const j=_(null),L=_(null),N=_(null);return y((()=>{if(P<$&&v){const e=j.current.clientHeight,n=L.current.clientHeight,t=N.current.clientHeight,r=parseInt(Ce,10);z(C-e-(n+t+2*r))}}),[C,P,v,$]),i(kr,{breakpoint:S,class:T>0||v&&P<$?"scrolled":"",children:[i(zr,{open:v,ref:j,searchOpen:x,children:[i(Sr,{children:[i("a",{href:"https://www.asu.edu/",children:"ASU home"}),i("a",{href:"https://my.asu.edu/",children:"My ASU"}),i("a",{href:"https://www.asu.edu/colleges/",children:"Colleges and schools"}),i(Yr,{loggedIn:c,loginLink:f,logoutLink:d,userName:l})]}),i(Vr,{open:x,setOpen:k,mobile:P<$})]}),i(Br,{onClick:e=>{e.preventDefault(),w((e=>!e))},mobileOpen:v,logo:i(Xr,{...s,ref:L}),children:b.dangerouslyGenerateStub?i("div",{id:"asu-generated-stub"}):i(r.Fragment,{children:[i(ni,{parentOrg:o,parentOrgUrl:a,baseUrl:t,animate:m,ref:N,children:n}),i(Ir,{navTree:e,mobileOpen:v,height:C,width:P,buttons:u,maxMobileHeight:O,breakpoint:p,expandOnHover:h})]})})]})};ri.propTypes={navTree:ae().arrayOf(ae().object),logo:ae().shape(Xr.propTypes),title:ni.propTypes.title,parentOrg:ni.propTypes.parentOrg,parentOrgUrl:ni.propTypes.parentOrgUrl,baseUrl:ni.propTypes.baseUrl,loggedIn:Yr.propTypes.loggedIn,userName:Yr.propTypes.userName,loginLink:Yr.propTypes.loginLink,logoutLink:Yr.propTypes.logoutLink,buttons:ae().arrayOf(ae().object),breakpoint:ae().oneOf(["Lg","Xl"]),animateTitle:ae().bool,expandOnHover:ae().bool},ri.defaultProps={navTree:[],dangerouslyGenerateStub:!1,title:"",buttons:[],breakpoint:"Lg",expandOnHover:!1};const ii=e=>i("div",{class:(0,ie.cx)(e.class,ie.css`
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.3rem;
          border: 1px solid #dee2e6;
        `),children:e.children}),oi=e=>i(ii,{class:e.class,children:e.children});oi.propTypes={class:ae().string},oi.defaultProps={}},572:e=>{e.exports=n},555:n=>{n.exports=e},24:e=>{e.exports=t}},i={};function o(e){if(i[e])return i[e].exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}return o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(920)})()}));
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),k=Symbol.for(`react.memo_cache_sentinel`),A=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=A&&e[A]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function N(e,t){se++,oe[se]=e.current,e.current=t}var ue=ce(null),de=ce(null),fe=ce(null),pe=ce(null);function me(e,t){switch(N(fe,t),N(de,e),N(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(ue),N(ue,e)}function he(){le(ue),le(de),le(fe)}function ge(e){e.memoizedState!==null&&N(pe,e);var t=ue.current,n=Hd(t,e.type);t!==n&&(N(de,e),N(ue,n))}function _e(e){de.current===e&&(le(ue),le(de)),pe.current===e&&(le(pe),Qf._currentValue=ae)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,P=t.unstable_scheduleCallback,F=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,Oe=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,I=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function Ke(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ke(n))):i=Ke(o):i=Ke(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ke(n))):i=Ke(o)):i=Ke(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ye(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Ze(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=M.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ot(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var st=Math.random().toString(36).slice(2),L=`__reactFiber$`+st,ct=`__reactProps$`+st,lt=`__reactContainer$`+st,ut=`__reactEvents$`+st,dt=`__reactListeners$`+st,ft=`__reactHandles$`+st,pt=`__reactResources$`+st,mt=`__reactMarker$`+st;function ht(e){delete e[L],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[L];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[L]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[L])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[L]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return Te.call(Dt,e)?!0:Te.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Mt(n)):Ht(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ie(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=h({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=h({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(h({},On,{dataTransfer:0})),jn=bn(h({},Cn,{relatedTarget:0})),Mn=bn(h({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(h({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(h({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(h({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(h({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(h({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(h({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function or(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var sr=null,cr=null;function lr(e){yd(e,0)}function ur(e){if(It(vt(e)))return e}function dr(e,t){if(e===`change`)return t}var fr=!1;if(un){var pr;if(un){var mr=`oninput`in document;if(!mr){var hr=document.createElement(`div`);hr.setAttribute(`oninput`,`return;`),mr=typeof hr.oninput==`function`}pr=mr}else pr=!1;fr=pr&&(!document.documentMode||9<document.documentMode)}function gr(){sr&&(sr.detachEvent(`onpropertychange`,_r),cr=sr=null)}function _r(e){if(e.propertyName===`value`&&ur(cr)){var t=[];or(t,cr,e,nn(e)),cn(lr,t)}}function vr(e,t,n){e===`focusin`?(gr(),sr=t,cr=n,sr.attachEvent(`onpropertychange`,_r)):e===`focusout`&&gr()}function yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ur(cr)}function br(e,t){if(e===`click`)return ur(t)}function xr(e,t){if(e===`input`||e===`change`)return ur(t)}function Sr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Cr=typeof Object.is==`function`?Object.is:Sr;function wr(e,t){if(Cr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Cr(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=un&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Lt(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Ed(Mr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};un&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),Ct(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=li(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return mi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=li(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=li(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=li(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function mi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function hi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function gi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function _i(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vi=new WeakMap;function yi(e,t){if(typeof e==`object`&&e){var n=vi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},vi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var bi=[],xi=0,Si=null,Ci=0,wi=[],Ti=0,Ei=null,Di=1,Oi=``;function ki(e,t){bi[xi++]=Ci,bi[xi++]=Si,Si=e,Ci=t}function Ai(e,t,n){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Ei=e;var r=Di;e=Oi;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Di=1<<32-ze(t)+i|n<<i|r,Oi=a+e}else Di=1<<a|n<<i|r,Oi=e}function ji(e){e.return!==null&&(ki(e,1),Ai(e,1,0))}function Mi(e){for(;e===Si;)Si=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null;for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Oi=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null}function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Oi,wi[Ti++]=Ei,Di=t.id,Oi=t.overflow,Ei=e}var Pi=null,R=null,z=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[L]=e,t[ct]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Pi=e.return;Pi;)switch(Pi.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Pi=Pi.return}}function Vi(e){if(e!==Pi)return!1;if(!z)return Bi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&R&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));R=uf(e)}else t===27?(t=R,Zd(e.type)?(e=lf,lf=null,R=e):R=t):R=Pi?cf(e.stateNode.nextSibling):null;return!0}function Hi(){R=Pi=null,z=!1}function Ui(){var e=Fi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=ce(null),Ki=null,qi=null;function Ji(e,t,n){N(Gi,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=Gi.current,le(Gi)}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Zi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Xi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Cr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Zi(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!Cr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ta(e){return ra(Ki,e)}function na(e,t){return Ki===null&&ea(e),ra(e,t)}function ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,oa=t.unstable_NormalPriority,sa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new ia,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&aa(oa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=dd(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=j.S;j.S=function(e,t){eu=Oe(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=ce(null);function ya(){var e=va.current;return e===null?K.pooledCache:e}function ba(e,t){t===null?N(va,va.current):N(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:sa._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=pi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=pi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=_i(t,e.mode,n),t.return=e,t;case O:return t=Oa(t),f(e,t,n)}if(ie(t)||te(t))return t=mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===C)return f(e,na(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Oa(n),p(e,t,n,r)}if(ie(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===C)return p(e,t,na(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Oa(r),m(e,t,n,r,i)}if(ie(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===C)return m(e,t,n,na(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&ki(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=mi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=pi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=_i(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Oa(o),b(e,r,o,c)}if(ie(o))return h(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===C)return b(e,r,na(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ba=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=ce(null),$a=ce(0);function eo(e,t){e=Wl,N($a,e),N(Qa,t),Wl=e|t.baseLanes}function to(){N($a,Wl),N(Qa,Qa.current)}function no(){Wl=$a.current,le(Qa),le($a)}var ro=ce(null),io=null;function ao(e){var t=e.alternate;N(uo,uo.current&1),N(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){N(uo,uo.current),N(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(N(uo,uo.current),N(ro,e),io===null&&(io=e)):co(e)}function co(){N(uo,uo.current),N(ro,ro.current)}function lo(e){le(ro),io===e&&(io=null),le(uo)}var uo=ce(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Cr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){j.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&$i(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Da(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ta(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((po&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Cr(o,e.memoizedState)&&(ic=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Cr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Cr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cr(e,n)}catch{return!0}}function Go(e){var t=ii(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(z){var n=K.formState;if(n!==null){a:{var r=B;if(z){if(R){b:{for(var i=R,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){R=cf(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Sa?wa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Cr(n,t)?n:Qa.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Cr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,Fs(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ga(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ae,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ta(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(hu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ri(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Cr(s,o))return ni(e,t,i,0),K===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var zs={readContext:ta,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:ta,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ta,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(z){var n=Oi,r=Di;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(hu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Zr(e)}function Ys(e){console.error(e)}function Xs(e){Zr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ua(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Qi(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(z)return t=ro.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=yi(r,n),a=$s(e.stateNode,r,a),Ka(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=yi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ea(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&s&&ji(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&Qi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ra(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||Qi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,R=cf(s.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=fc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ea(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&r&&ji(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ea(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(z&&r&&ji(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ea(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?ta(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ba||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ba||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Hi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:xa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(uo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(z){if(a?ao(t):co(t),(e=R)?(e=rf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ei===null?null:{id:Di,overflow:Oi},retryLane:536870912,hydrationErrors:null},n=gi(e),n.return=t,t.child=n,Pi=t,R=null)):e=null,e===null)throw Ri(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=mi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=mi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Qi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,R=cf(c.nextSibling),Pi=t,z=!0,Fi=null,Ii=!1,e!==null&&Ni(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=mi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=xa():(l=sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ra(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,N(uo,o),ac(e,t,r,n),r=z?Ci:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&$i(e)))}function Mc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Ji(t,sa,e.memoizedState.cache),Hi();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(uo,uo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Ji(t,sa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,z&&t.flags&1048576&&Ai(t,Ci,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,sa,r),r!==o.cache&&Zi(t,[sa],n,!0),Ja(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=yi(Error(i(424)),t),Wi(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(R=cf(e.firstChild),Pi=t,z=!0,Fi=null,Ii=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[L]=t,r[ct]=e,Pd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&z&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),Pi=t,Ii=!0,a=R,Zd(t.type)?(lf=a,R=cf(r.firstChild)):R=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=R)&&(r=tf(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Pi=t,R=cf(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=R)&&(n=nf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Pi=t,R=null,e=!0)),e||Ri(t)),null;case 13:return Cc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=ta(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ea(t),r=ta(sa),e===null?(a=ya(),a===null&&(a=K,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Ji(t,sa,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,sa,r),r!==a.cache&&Zi(t,[sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,sa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ka=Ta,Ca}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ka=Ta,Ca}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Xe(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yi(sa),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=ue.current,Vi(t)?zi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=ue.current,Vi(t))zi(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[L]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Pi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[L]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ri(t,!0)}else e=Bd(e).createTextNode(r),e[L]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[L]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[L]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Yi(t.type),U(t),null;case 19:if(le(uo),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fi(n,e),n=n.sibling;return N(uo,uo.current&1|2),z&&ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Oe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return U(t),null}else 2*Oe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Oe(),e.sibling=null,n=uo.current,N(uo,a?n&1|2:n&1),z&&ki(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(sa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Mi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(sa),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(uo),null;case 4:return he(),null;case 10:return Yi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&le(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(sa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Mi(t),t.tag){case 3:Yi(sa),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:le(uo);break;case 10:Yi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&le(va);break;case 24:Yi(sa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[L]=e,t[ct]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[mt]||o[L]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[L]=e,bt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[L]=e,bt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Oe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ta(sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ta(sa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:j.T===null?at():dd()}function mu(){if(Jl===0){if(!(J&536870912)||z){var e=We;We<<=1,!(We&3932160)&&(We=262144),Jl=e}else Jl=536870912}return e=ro.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),Qe(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Je(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Oe(),10<a)){if(yu(r,t,Jl,!Vl),qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},Ml(t,a,d);var m=(a&62914560)===a?$l-Oe():(a&4194048)===a?eu-Oe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Cr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,qi=Ki=null,ko(e),Ma=null,Na=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=di(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Je(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ti(),n}function Cu(e,t){B=null,j.H=zs,t===Sa||t===wa?(t=Aa(),Y=3):t===Ca?(t=Aa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,yi(t,e.current)))}function wu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Tu(){var e=j.H;return j.H=zs,e===null?zs:e}function Eu(){var e=j.A;return j.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,G=r,j.H=i,j.A=a,q===null&&(K=null,J=0,ti()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Oe()+500,Su(e,t)):Hl=Je(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ea(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return qi=Ki=null,j.H=r,j.A=a,G=n,q===null?(K=null,J=0,ti(),X):0}function ju(){for(;q!==null&&!Ee();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=fi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){qi=Ki=null,ko(t),Ma=null,Na=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,yi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,yi(n,e.current)),q=null;return}t.flags&32768?(z||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,$e(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(je,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,M.p=a,j.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,M.p=r,j.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,M.p=r,j.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,De();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),it(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=it(su),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{M.p=a,j.T=r,Vu(e,t)}}function Wu(e,t,n){t=yi(n,t),t=$s(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(Qe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=yi(n,e),n=ec(2),r=Wa(t,n,2),r!==null&&(tc(n,r,t,e),Qe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Oe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Xe()),e=ii(e,t),e!==null&&(Qe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return P(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Je(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Oe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ye(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&F(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Je(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&F(r),it(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=cd.bind(null,e),n=P(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&F(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Oe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?P(I,ad):od()})}function dd(){if(nd===0){var e=fa;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var gd=Yr[hd];Xr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Vr:case Hr:case Ur:l=Mn;break;case qr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?gt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:vt(l),h=u==null?c:vt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=dr;else if(ar(c)){if(fr)v=xr;else{v=yr;var y=vr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=dr):v=br;if(v&&=v(e,r)){or(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?vt(r):window,e){case`focusin`:(ar(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=M.d;M.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=yt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),bt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,bt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[L]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function tp(e){return e?(e=si,e):si}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(hu(n,e,t),Ga(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=rt(t);var n=ii(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,up(e,t,n,r)}finally{M.p=a,j.T=i}}function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,up(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ke(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Oe()+500,id(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case I:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[lt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y={lessons:[{id:`html-structure`,title:`1. โครงสร้างหลัก HTML5 (DOCTYPE & Head Metadata)`,category:`1. HTML Core`,description:'เริ่มต้นเขียนเว็บด้วยการตั้งโครงสร้างไฟล์ HTML5 ที่สมบูรณ์และถูกต้องตามมาตรฐานอุตสาหกรรมสากล\n      \nโครงสร้างและข้อมูลอักขระเมทาแท็ก (Head Metadata) ที่จำเป็น:\n- `<!DOCTYPE html>` : ประกาศประเภทเอกสารบรรทัดแรกสุด\n- `<html lang="th">` : แท็กหลักครอบเนื้อหาทั้งหมด (ระบุแอตทริบิวต์ภาษาไทย `lang="th"`)\n- `<head>` : ส่วนเก็บข้อมูลเบื้องหลังเพื่อระบุหัวข้อและการเข้ารหัสภาษา\n- `<meta charset="UTF-8">` : คีย์สำคัญระบุการแปลงอักขระ รองรับภาษาไทยและอักษรทั่วโลก\n- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` : คำสั่งช่วยให้การแสดงผลยืดหยุ่นรองรับทุกอุปกรณ์ (Responsive Viewport)\n- `<title>WebDev Academy</title>` : ระบุข้อความหัวเรื่องบนแถบเบราว์เซอร์\n- `<body>` : ส่วนพื้นที่หลักสำหรับเขียนโค้ดและข้อมูลแสดงผลหน้าเว็บ\n\n**เป้าหมาย:**\nประกอบโครงร่างหลักของหน้าเว็บให้ถูกต้องครบถ้วนตามรายการแท็กมาตรฐานด้านบน',starterHtml:`<!-- พิมพ์โครงสร้างหน้าเว็บมาตรฐาน HTML5 ของคุณที่นี่ -->`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebDev Academy</title>
</head>
<body>
  <h1>ยินดีต้อนรับเข้าเรียน</h1>
</body>
</html>`,targetCss:`body { font-family: sans-serif; padding: 20px; }`,starterCss:`body { font-family: sans-serif; padding: 20px; }`,validation:e=>{let t=e.querySelector(`title`),n=e.querySelector(`meta[charset]`),r=e.querySelector(`meta[name="viewport"]`),i=e.querySelector(`body`);return!t||!t.textContent.includes(`WebDev Academy`)?`กรุณาสร้างแท็ก <title> และพิมพ์ข้อความ 'WebDev Academy' ด้านในแท็ก <head>`:!n||n.getAttribute(`charset`).toUpperCase()!==`UTF-8`?`กรุณาใส่แท็กระบุภาษาอักขระ <meta charset="UTF-8"> ไว้ในส่วน <head>`:!r||!r.getAttribute(`content`)||!r.getAttribute(`content`).includes(`width=device-width`)?`กรุณาใส่แท็ก <meta name="viewport" content="width=device-width, initial-scale=1.0"> ใน <head> เพื่อทำระบบ Responsive`:i?!0:`กรุณาสร้างแท็ก <body> เพื่อแบ่งโครงสร้างหน้าจอแสดงผลหลัก`},hints:[`พิมพ์: <!DOCTYPE html> ตามด้วย <html lang='th'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>WebDev Academy</title></head><body><h1>ยินดีต้อนรับเข้าเรียน</h1></body></html>`]},{id:`html-headings`,title:`2. การจัดหัวข้อและเว้นบรรทัด (Headings & Breaks)`,category:`1. HTML Core`,description:'เรียนรู้การเรียงลำดับหัวข้อและความสำคัญของเนื้อหา\n- `<h1>` : หัวข้อใหญ่สุดของหน้า\n- `<h2>` : หัวข้อย่อยรองลงมา\n- `<br>` : สั่งขึ้นบรรทัดใหม่\n- `<hr>` : สั่งขีดเส้นคั่นแนวขวาง\n\n**เป้าหมาย:**\n1. สร้างหัวข้อใหญ่สุด `<h1>` เขียนว่า "ยินดีต้อนรับสู่ห้องเรียน"\n2. สร้างหัวข้อย่อย `<h2>` เขียนว่า "บทเรียน HTML ขั้นต้น"\n3. พิมพ์แท็กย่อหน้า `<p>` และสั่งขึ้นบรรทัดใหม่ตรงกลางย่อหน้าด้วย `<br>` ตามด้วยเส้นคั่น `<hr>` ด้านล่าง',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เริ่มเขียนหัวข้อและเนื้อหาที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>ยินดีต้อนรับสู่ห้องเรียน</h1>
<h2>บทเรียน HTML ขั้นต้น</h2>
<p>เริ่มเรียนรู้โครงสร้าง<br>และจัดแบ่งเนื้อหาหน้าเพจ</p>
<hr>
</body>
</html>`,targetCss:`body { font-family: sans-serif; padding: 20px; }`,starterCss:`body { font-family: sans-serif; padding: 20px; }`,validation:e=>{let t=e.querySelector(`h1`),n=e.querySelector(`h2`),r=e.querySelector(`p`),i=e.querySelector(`p br`),a=e.querySelector(`hr`);return!t||!t.textContent.includes(`ยินดีต้อนรับสู่ห้องเรียน`)?`ขาดแท็ก <h1> พร้อมข้อความ 'ยินดีต้อนรับสู่ห้องเรียน'`:!n||!n.textContent.includes(`บทเรียน HTML ขั้นต้น`)?`ขาดแท็ก <h2> พร้อมข้อความ 'บทเรียน HTML ขั้นต้น'`:!r||!i?`กรุณาใส่แท็ก <p> และใส่ <br> ด้านในย่อหน้าเพื่อขึ้นบรรทัดใหม่`:a?!0:`อย่าลืมขีดเส้นคั่นใต้บทความด้วยแท็ก <hr>`},hints:[`ใช้ <h1>, <h2>, <p> อ้างอิง และขีดเส้นใต้ด้วย <hr> ด้านล่างสุด`]},{id:`html-text-format`,title:`3. การตกแต่งและเน้นคำ (Text Formatting)`,category:`1. HTML Core`,description:'การจัดรูปแบบข้อความเน้นคำสำคัญเพื่อผลต่อสายตาและบอทกูเกิล:\n- `<strong>` : ทำข้อความตัวหนาหนึบเพื่อระบุความสำคัญ\n- `<em>` : ทำข้อความตัวเอียงเพื่อระบุสเตทเปรียบเทียบ\n- `<mark>` : ไฮไลท์แถบสีข้อความ (เหมือนขีดปากกาเคมี)\n\n**เป้าหมาย:**\nเขียนข้อความย่อหน้า `<p>` ที่มีคำที่ถูกเน้นความหนาด้วย `<strong>` ที่คำว่า "สำคัญที่สุด" และเน้นตัวเอียงด้วย `<em>` ที่คำว่า "ความเพียร" พร้อมทำสีไฮไลท์ด้วย `<mark>` ที่คำว่า "เรียนฟรีที่นี่"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ฝึกเขียนเน้นข้อความของคุณที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p>สิ่งที่เป็น <strong>สำคัญที่สุด</strong> ในการเรียนพัฒนาเว็บคือ <em>ความเพียร</em> และสามารถเริ่มต้น <mark>เรียนฟรีที่นี่</mark> ได้ทันที</p>
</body>
</html>`,targetCss:`body { font-family: sans-serif; padding: 20px; }`,starterCss:`body { font-family: sans-serif; padding: 20px; }`,validation:e=>{let t=e.querySelector(`strong`),n=e.querySelector(`em`),r=e.querySelector(`mark`);return!t||!t.textContent.includes(`สำคัญที่สุด`)?`กรุณาใช้ <strong> ครอบคำว่า 'สำคัญที่สุด'`:!n||!n.textContent.includes(`ความเพียร`)?`กรุณาใช้ <em> ครอบคำว่า 'ความเพียร'`:!r||!r.textContent.includes(`เรียนฟรีที่นี่`)?`กรุณาใช้ <mark> ครอบคำว่า 'เรียนฟรีที่นี่'`:!0},hints:[`ประกอบแท็ก <strong>สำคัญที่สุด</strong>, <em>ความเพียร</em>, และ <mark>เรียนฟรีที่นี่</mark> ในแท็ก <p>`]},{id:`html-lists`,title:`4. รายการลำดับหัวข้อ (HTML Lists)`,category:`1. HTML Core`,description:'การนำเสนอเป็นข้อๆ ทำได้สองแบบ:\n- **Unordered List** (`<ul>`) : รายการสัญลักษณ์จุดวงกลม\n- **Ordered List** (`<ol>`) : รายการแบบเรียงลำดับเลข 1, 2, 3...\n- ทั้งคู่ต้องใส่ไอเทมด้วยแท็ก `<li>` เสมอ\n\n**เป้าหมาย:**\n1. สร้างรายการไม่มีลำดับ `<ul>` บรรจุผลไม้ 2 อย่าง: "แอปเปิ้ล", "กล้วย"\n2. สร้างรายการมีลำดับเลข `<ol>` บรรจุขั้นตอน 2 ลำดับ: "เตรียมโค้ด", "เขียนโปรแกรม"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างรายการลิสต์ของคุณด้านล่างนี้ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <ul>
  <li>แอปเปิ้ล</li>
  <li>กล้วย</li>
</ul>
<ol>
  <li>เตรียมโค้ด</li>
  <li>เขียนโปรแกรม</li>
</ol>
</body>
</html>`,targetCss:`body { font-family: sans-serif; padding: 20px; }`,starterCss:`body { font-family: sans-serif; padding: 20px; }`,validation:e=>{let t=e.querySelectorAll(`ul li`),n=e.querySelectorAll(`ol li`);return t.length<2?`กรุณาสร้างรายการผลไม้ใน <ul> คลาสลิสต์อย่างน้อย 2 รายการ`:n.length<2?`กรุณาสร้างลำดับขั้นตอนใน <ol> คลาสลิสต์อย่างน้อย 2 ลำดับ`:!0},hints:[`พิมพ์ <ul> พร้อม <li> 2 รายการ และต่อด้วย <ol> พร้อม <li> 2 รายการ`]},{id:`html-tables-basic`,title:`5. ตารางข้อมูลพื้นฐาน (HTML Tables)`,category:`1. HTML Core`,description:`จัดระเบียบข้อมูลสถิติหรือรายชื่อเป็นแถวและคอลัมน์:
- \`<table>\` : แท็กเริ่มระบบตาราง
- \`<tr>\` (Table Row) : แถวแนวนอน
- \`<td>\` (Table Data) : ช่องเซลล์เก็บข้อมูล

**เป้าหมาย:**
สร้างตารางขนาด **2 แถว x 2 คอลัมน์** โดยแถวแรกมีข้อความ "ส้ม", "฿30" และแถวสองมีข้อความ "องุ่น", "฿80"`,starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างตารางพื้นฐานที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <table>
  <tr>
    <td>ส้ม</td>
    <td>฿30</td>
  </tr>
  <tr>
    <td>องุ่น</td>
    <td>฿80</td>
  </tr>
</table>
</body>
</html>`,targetCss:`table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,starterCss:`table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,validation:e=>{let t=e.querySelector(`table`),n=e.querySelectorAll(`table tr`),r=e.querySelectorAll(`table tr td`);return t?n.length<2?`ตารางต้องมีอย่างน้อย 2 แถว (<tr>)`:r.length<4?`ต้องมีเซลล์ข้อมูล (<td>) ทั้งหมดอย่างน้อย 4 ช่อง`:!0:`ขาดแท็ก <table>`},hints:[`ใช้โครงสร้าง <table> ตามด้วย <tr> 2 ชุด แต่ละชุดมี <td> สองช่องข้างใน`]},{id:`html-tables-span`,title:`6. ตารางรวมช่องตาราง (Advanced Table Spanning)`,category:`1. HTML Core`,description:'การรวมช่องตารางในแนวขวางหรือแนวดิ่ง:\n- `colspan="ตัวเลข"` : สั่งให้เซลล์ขยายรวมคอลัมน์แนวขวาง\n- `rowspan="ตัวเลข"` : สั่งให้เซลล์ขยายรวมแถวแนวดิ่ง\n\n**เป้าหมาย:**\nสร้างตาราง 2 แถว โดยแถวแรกมี 1 ช่องเซลล์พิเศษที่ขยายความกว้างทับ 2 ช่อง (`colspan="2"`) เขียนข้อความ "ข้อมูลรวมยอด" และแถวสองมี 2 ช่องปกติเขียนข้อความ "สินค้า A", "฿500"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ตารางเชื่อมช่องข้อมูลที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <table>
  <tr>
    <td colspan="2" style="text-align: center; font-weight: bold;">ข้อมูลรวมยอด</td>
  </tr>
  <tr>
    <td>สินค้า A</td>
    <td>฿500</td>
  </tr>
</table>
</body>
</html>`,targetCss:`table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,starterCss:`table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,validation:e=>e.querySelector(`td[colspan="2"]`)?!0:`ไม่พบแท็ก <td> ที่มีการใช้คุณสมบัติ colspan='2'`,hints:[`กำหนด <td colspan='2'> ในเซลล์แรกของแถวแรกเพื่อยืดขวางตาราง`]},{id:`html-links`,title:`7. ลิงก์เชื่อมโยงและแท็บใหม่ (Anchor Links & Target)`,category:`1. HTML Core`,description:'การเชื่อมโยงหน้าเว็บเพจไปยังปลายทางอื่นๆ:\n- แท็ก `<a>` (Anchor)\n- แอตทริบิวต์ `href` : ระบุ URL ปลายทาง\n- `target="_blank"` : สั่งให้เปิดลิงก์ในแท็บเบราว์เซอร์ใหม่\n\n**เป้าหมาย:**\nสร้างลิงก์ <a> เชื่อมโยงไปยังเว็บไซต์ `https://google.com` โดยกำหนดให้เปิดหน้าต่างแท็บใหม่ (`target="_blank"`) และมีข้อความเขียนบนลิงก์ว่า "ค้นหาข้อมูลเพิ่มเติม"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างลิงก์เชื่อมโยงที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <a href="https://google.com" target="_blank">ค้นหาข้อมูลเพิ่มเติม</a>
</body>
</html>`,targetCss:`a { font-family: sans-serif; color: #2563eb; text-decoration: none; font-weight: bold; }`,starterCss:`a { font-family: sans-serif; color: #2563eb; text-decoration: none; font-weight: bold; }`,validation:e=>{let t=e.querySelector(`a`);return!t||!t.getAttribute(`href`)||!t.getAttribute(`href`).includes(`google.com`)?`กรุณาสร้างแท็ก <a> ลิงก์ไปยัง https://google.com`:t.getAttribute(`target`)===`_blank`||`กรุณาใส่แอตทริบิวต์ target='_blank' เพื่อสั่งให้เปิดลิงก์ในแท็บใหม่`},hints:[`เขียนโครงสร้าง <a href='https://google.com' target='_blank'>ค้นหาข้อมูลเพิ่มเติม</a>`]},{id:`html-images`,title:`8. รูปภาพและคำอธิบายทางเลือก (Images & Alt)`,category:`1. HTML Core`,description:'การดึงรูปภาพภายนอกมาเรนเดอร์ในหน้าเว็บ:\n- แท็ก `<img>` (เป็นแท็กเดี่ยว ไม่มีแท็กปิด)\n- แอตทริบิวต์ `src` : ระบุที่อยู่รูปภาพ\n- แอตทริบิวต์ `alt` : เขียนข้อความบรรยายรูปภาพเพื่อช่วยระบบ SEO และการเข้าถึงของคนตาบอด\n\n**เป้าหมาย:**\nดึงภาพจากลิงก์ `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120` และระบุแอตทริบิวต์ `alt="red shoes"`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- แทรกรูปภาพสินค้าที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120" alt="red shoes">
</body>
</html>`,targetCss:`img { border-radius: 8px; }`,starterCss:`img { border-radius: 8px; }`,validation:e=>{let t=e.querySelector(`img`);return t?!t.getAttribute(`src`)||!t.getAttribute(`src`).includes(`photo`)?`กรุณาใส่ src ลิงก์รูปภาพให้ถูกต้อง`:t.getAttribute(`alt`)===`red shoes`||`ต้องใส่แอตทริบิวต์ alt='red shoes' สำหรับอธิบายรูปภาพสินค้า`:`กรุณาสร้างแท็ก <img> เพื่อดึงรูปภาพมาแสดง`},hints:["พิมพ์ `<img src='https://...' alt='red shoes'>` ห้ามใส่แท็กปิด </img>"]},{id:`html-multimedia`,title:`9. การฝังไฟล์สื่อมัลติมีเดีย (Video & Audio Elements)`,category:`1. HTML Core`,description:"การใส่เสียงและวิดีโอในหน้าเว็บโดยตรง:\n- แท็ก `<video>` : ควบคุมไฟล์ภาพเคลื่อนไหว\n- แอตทริบิวต์ `controls` : แสดงปุ่มเล่น หยุด และปรับเสียงบนหน้าเว็บ\n\n**เป้าหมาย:**\nสร้างบล็อกเล่นวิดีโอโดยใช้แท็ก `<video>` ระบุคุณสมบัติ `controls` ให้ผู้ใช้กดเล่นได้ และกำหนดไฟล์วิดีโอไปที่ลิงก์ `https://www.w3schools.com/html/mov_bbb.mp4`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ฝังบล็อกเล่นวิดีโอที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" width="240"></video>
</body>
</html>`,targetCss:`body { font-family: sans-serif; }`,starterCss:`body { font-family: sans-serif; }`,validation:e=>{let t=e.querySelector(`video`);return t?t.hasAttribute(`controls`)?!t.getAttribute(`src`)||!t.getAttribute(`src`).includes(`.mp4`)?`ระบุ src ลิงก์ไฟล์วิดีโอ .mp4 ให้ถูกต้อง`:!0:`กรุณาใส่แอตทริบิวต์ controls เพื่อเปิดแผงเล่นควบคุม`:`กรุณาสร้างแท็ก <video>`},hints:["พิมพ์: `<video controls src='https://www.w3schools.com/html/mov_bbb.mp4' width='240'></video>`"]},{id:`html-inputs`,title:`10. ช่องรับข้อมูลเบื้องต้น (Basic Form Inputs)`,category:`1. HTML Core`,description:'แบบฟอร์ม (`<form>`) อาศัยอินพุตในการรับข้อมูลเข้าพิมพ์:\n- `<input type="text">` : รับข้อความสั้นทั่วไป\n- `<input type="password">` : ซ่อนข้อมูลพิมพ์เป็นจุดกลมดำ\n- ใส่ `placeholder` แสดงคำไกด์ข้อมูลในกล่องอินพุต\n\n**เป้าหมาย:**\n1. สร้างครอบฟอร์มด้วยแท็ก `<form>`\n2. สร้างช่อง Username ด้วย `<input type="text" placeholder="พิมพ์ชื่อผู้ใช้งาน">`\n3. สร้างช่อง Password ด้วย `<input type="password" placeholder="พิมพ์รหัสผ่าน">`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างฟอร์มนำเข้าข้อมูลพื้นฐานที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
  <input type="text" placeholder="พิมพ์ชื่อผู้ใช้งาน">
  <input type="password" placeholder="พิมพ์รหัสผ่าน">
</form>
</body>
</html>`,targetCss:`input { display: block; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 180px; }`,starterCss:`input { display: block; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 180px; }`,validation:e=>{let t=e.querySelector(`form`),n=e.querySelector(`input[type="text"]`),r=e.querySelector(`input[type="password"]`);return t?!n||!n.placeholder?`กรุณาสร้าง input ประเภท text พร้อมระบุ placeholder`:!r||!r.placeholder?`กรุณาสร้าง input ประเภท password พร้อมระบุ placeholder`:!0:`กรุณาสร้างครอบฟอร์มด้วยแท็ก <form>`},hints:[`ครอบด้วย <form> และใส่อินพุตสองประเภท <input type='text'> และ <input type='password'>`]},{id:`html-radios`,title:`11. ปุ่มวิทยุและกล่องเลือกตัวเลือก (Radios & Checkboxes)`,category:`1. HTML Core`,description:'- `<input type="radio">` : ปุ่มเลือกตัวเลือกที่มีสิทธิเลือกได้แค่ข้อเดียวจากกลุ่ม (ใช้ `name` กลุ่มเดียวกัน)\n- `<input type="checkbox">` : กล่องติ๊กถูก เลือกตัวเลือกได้หลายอย่างอิสระ\n\n**เป้าหมาย:**\n1. สร้างกลุ่ม Radio เลือกเพศ มี 2 ปุ่มโดยกำหนด `name="gender"` เขียนข้อความ "ชาย" และ "หญิง" กำกับหลังช่องแต่ละปุ่ม\n2. สร้าง Checkbox สำหรับกติกาสัญญา มี 1 กล่องระบุคำว่า "ยอมรับข้อตกลง"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างกลุ่มเลือกข้อมูลที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <label><input type="radio" name="gender"> ชาย</label>
<label><input type="radio" name="gender"> หญิง</label>
<br>
<label><input type="checkbox"> ยอมรับข้อตกลง</label>
</body>
</html>`,targetCss:`body { font-family: sans-serif; padding: 20px; line-height: 1.6; }`,starterCss:`body { font-family: sans-serif; padding: 20px; line-height: 1.6; }`,validation:e=>{let t=e.querySelectorAll(`input[type="radio"]`),n=e.querySelector(`input[type="checkbox"]`);return t.length<2?`สร้างอินพุตวิทยุ (radio) อย่างน้อย 2 ตัวเลือก`:t[0].name!==`gender`||t[1].name!==`gender`?`ปุ่มวิทยุทั้งคู่ต้องผูกกลุ่มเดียวกันโดยตั้ง name='gender'`:n?!0:`สร้างกล่องติ๊กถูกกติกาสัญญา (checkbox)`},hints:["ใช้ `<input type='radio' name='gender'>` และ `<input type='checkbox'>` ในการออกแบบสเตท"]},{id:`html-selects`,title:`12. เมนูเลือกและช่องพิมพ์คำบรรยาย (Dropdown Select & Textarea)`,category:`1. HTML Core`,description:'การรับข้อมูลตัวเลือกขนาดใหญ่หรือย่อหน้ายาวๆ:\n- `<select>` และ `<option>` : สร้างรายการ Dropdown เลือกเมนูช้อยส์\n- `<textarea>` : ช่องพิมพ์ขนาดใหญ่เพื่อพิมพ์ข้อมูลข้อความยาวหลายบรรทัด\n\n**เป้าหมาย:**\n1. สร้างเมนูเลือกจังหวัด `<select>` มีตัวเลือก `<option>` สองข้อ: "กรุงเทพฯ" และ "เชียงใหม่"\n2. สร้างช่องพิมพ์คำบรรยายเพิ่มเติมประวัติ `<textarea placeholder="ประวัติย่อ..."></textarea>`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างตัวเลือกและช่องพิมพ์คำบรรยายด้านล่างนี้ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <select>
  <option>กรุงเทพฯ</option>
  <option>เชียงใหม่</option>
</select>
<br><br>
<textarea placeholder="ประวัติย่อ..."></textarea>
</body>
</html>`,targetCss:`select, textarea { padding: 8px; border-radius: 4px; font-family: sans-serif; display: block; margin-bottom: 10px; width: 200px; }`,starterCss:`select, textarea { padding: 8px; border-radius: 4px; font-family: sans-serif; display: block; margin-bottom: 10px; width: 200px; }`,validation:e=>{let t=e.querySelector(`select`),n=e.querySelectorAll(`select option`),r=e.querySelector(`textarea`);return!t||n.length<2?`กรุณาสร้างรายการตัวเลือก <select> และมีอย่างน้อย 2 ตัวเลือกย่อย <option>`:r?!0:`กรุณาสร้างช่องพิมพ์ข้อความบรรยายขนาดใหญ่ด้วยแท็ก <textarea>`},hints:[`พิมพ์เมนูกลุ่มตัวเลือก <select> คู่กับ <option> และสร้างบล็อกป้อนข้อมูลอิสระ <textarea>`]},{id:`html-inputs-advanced`,title:`14. กล่องรับข้อมูลเฉพาะทาง HTML5 (Advanced Input Types)`,category:`1. HTML Core`,description:'เรียนรู้การใช้งานช่องรับข้อมูลประเภทเฉพาะทางใน HTML5 โดยระบุที่แอตทริบิวต์ `type` เพื่อเปลี่ยนพฤติกรรมอินเตอร์เฟสของเบราว์เซอร์ให้สอดคล้องกับข้อมูล:\n1. **ช่องกรอกตัวเลข (`type="number"`)** : คีย์เฉพาะตัวเลข มีลูกศรปรับค่าขึ้น-ลง สามารถควบคุมขอบเขตด้วย `min`, `max`\n2. **ช่องเลือกวันที่ (`type="date"`)** : แสดงปฏิทินให้คลิกเลือกวัน-เดือน-ปี\n3. **ช่องระดับสเกลแถบเลื่อน (`type="range"`)** : แถบเลื่อนปรับค่า สามารถตั้งค่า `min`, `max`, และค่าเริ่มต้น `value`\n4. **ช่องเลือกพาเลทสี (`type="color"`)** : กล่องคลิกเปิดแถบจานสีเลือกสี\n\n**เป้าหมาย:**\nสร้างฟอร์มส่งข้อมูลที่มีช่องรับข้อมูลดังนี้ภายในแท็ก `<body>`:\n1. ช่องระบุอายุเป็น **ตัวเลข** (`type="number"`) โดยระบุค่าต่ำสุดเป็น `1` และสูงสุดเป็น `100` (`min="1" max="100"`)\n2. ช่องระบุวันเกิดเป็น **วันที่** (`type="date"`)\n3. ช่องระดับความพึงพอใจเป็น **แถบเลื่อน** (`type="range"`) กำหนดจาก `1` ถึง `5` และมีค่าเริ่มต้นเป็น `3` (`min="1" max="5" value="3"`)\n4. ช่องเลือกธีมสีส่วนตัวเป็น **จานเลือกสี** (`type="color"`)',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
    <!-- เริ่มพิมพ์ช่องรับข้อมูลเฉพาะทางที่นี่ -->
    
  </form>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
    <label>อายุ: <input type="number" min="1" max="100" required></label>
    <br><br>
    <label>วันเกิด: <input type="date" required></label>
    <br><br>
    <label>ความพึงพอใจ: <input type="range" min="1" max="5" value="3"></label>
    <br><br>
    <label>ธีมสี: <input type="color"></label>
  </form>
</body>
</html>`,starterCss:`form { font-family: sans-serif; padding: 20px; }`,targetCss:`form { font-family: sans-serif; padding: 20px; }`,validation:e=>{let t=e.querySelector(`input[type="number"]`),n=e.querySelector(`input[type="date"]`),r=e.querySelector(`input[type="range"]`),i=e.querySelector(`input[type="color"]`);return t?t.getAttribute(`min`)!==`1`||t.getAttribute(`max`)!==`100`?`กรุณากำหนดแอตทริบิวต์ min='1' และ max='100' ให้ช่องตัวเลข`:n?r?r.getAttribute(`min`)!==`1`||r.getAttribute(`max`)!==`5`||r.getAttribute(`value`)!==`3`?`กรุณากำหนด min='1' max='5' และ value='3' ให้ช่องแถบเลื่อน`:i?!0:`กรุณาสร้างกล่องเลือกสี input[type='color']`:`กรุณาสร้างแถบเลื่อนระดับ input[type='range']`:`กรุณาสร้างช่องเลือกวันที่ input[type='date']`:`กรุณาสร้างช่องระบุตัวเลข input[type='number']`},hints:[`เขียนอินพุตระบุประเภทดังนี้: <input type='number' min='1' max='100'>`,`<input type='date'>`,`<input type='range' min='1' max='5' value='3'>`,`<input type='color'>`]},{id:`html-div-span`,title:`14. การแบ่งหมวดด้วยกล่องสี่เหลี่ยม (Block Div vs Inline Span)`,category:`2. Semantic HTML`,description:'กล่องจัดวางอิลิเมนต์มีพื้นฐานที่พฤติกรรมแนวนอนต่างกัน:\n- `<div>` (Block) : คุมพื้นที่แถวกว้างเต็มจอ และบังคับตัดขึ้นบรรทัดใหม่\n- `<span>` (Inline) : คุมเนื้อหาเจาะจงเฉพาะตัวอักษร ไม่บังคับขึ้นแถวใหม่\n\n**เป้าหมาย:**\nสร้างกล่องแม่ `<div>` คลาส `.wrap` และใส่ตัวอักษรเจาะจงเน้นภายในโดยใช้แท็ก `<span>` คลาส `.highlight` เขียนคำว่า "ยอดเยี่ยม"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- จัดกลุ่มข้อความด้วย div และ span ที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="wrap">
  คุณทำผลงานได้ <span class="highlight">ยอดเยี่ยม</span> มากวันนี้!
</div>
</body>
</html>`,targetCss:`.wrap { padding: 20px; background: #f8fafc; border-radius: 8px; font-family: sans-serif; }
.highlight { color: #e11d48; font-weight: bold; }`,starterCss:`.wrap { padding: 20px; background: #f8fafc; border-radius: 8px; font-family: sans-serif; }
.highlight { color: #e11d48; font-weight: bold; }`,validation:e=>{let t=e.querySelector(`.wrap`),n=e.querySelector(`.highlight`);return t?!n||!n.textContent.includes(`ยอดเยี่ยม`)?`ไม่พบแท็กคำเจาะจง <span> ที่มีคลาส .highlight`:!0:`ไม่พบกล่องแม่ที่มีคลาส .wrap`},hints:["ครอบความกว้างด้วย `<div class='wrap'>...<span class='highlight'>ยอดเยี่ยม</span>...</div>`"]},{id:`html-layout-semantics`,title:`15. โครงสร้างความหมายหลัก (Semantic Layout Structure)`,category:`2. Semantic HTML`,description:"การกำหนดเลย์เอาต์หน้าต่างหลักเชิงความหมายระดับมหาวิทยาลัย:\n- `<header>` : แถบส่วนหัว\n- `<nav>` : แถบลิงก์เมนูนำทาง\n- `<main>` : เนื้อหาหลักแกนกลางของเอกสาร\n- `<footer>` : แถบระบุลิขสิทธิ์และประวัติสั้นๆ ด้านล่างสุด\n\n**เป้าหมาย:**\nเขียนจัดแบ่งหมวดหน้าเว็บเพจเปล่าเชิงความหมาย โดยสร้างแท็ก `<header>`, `<nav>`, `<main>` และ `<footer>` เรียงจากบนลงล่างให้ครบถ้วน",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เริ่มเขียนแท็กเชิงโครงสร้างนำทางเชิงความหมายที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <header>หัวข้อและโลโก้หลัก</header>
<nav>เมนูลิงก์เว็บเพจ</nav>
<main>เนื้อหาข้อมูลสถิติประมวลผลหลัก</main>
<footer>ลิขสิทธิ์ข้อมูลระบบ © 2026</footer>
</body>
</html>`,targetCss:`header, nav, main, footer { padding: 12px; margin-bottom: 6px; font-family: sans-serif; border-radius: 4px; }
header { background: #cbd5e1; }
nav { background: #cbd5e1; }
main { background: #cbd5e1; min-height: 60px; }
footer { background: #cbd5e1; font-size: 12px; }`,starterCss:`header, nav, main, footer { padding: 12px; margin-bottom: 6px; font-family: sans-serif; border-radius: 4px; }
header { background: #cbd5e1; }
nav { background: #cbd5e1; }
main { background: #cbd5e1; min-height: 60px; }
footer { background: #cbd5e1; font-size: 12px; }`,validation:e=>e.querySelector(`header`)?e.querySelector(`nav`)?e.querySelector(`main`)?e.querySelector(`footer`)?!0:`กรุณาใส่แท็ก <footer>`:`กรุณาใส่แท็ก <main>`:`กรุณาใส่แท็ก <nav>`:`กรุณาใส่แท็ก <header>`,hints:["พิมพ์จัดส่วนประกอบหลัก `<header></header>`, `<nav></nav>`, `<main></main>`, และ `<footer></footer>`"]},{id:`html-content-semantics`,title:`16. การจัดเนื้อหาบทความย่อย (Section, Article & Aside)`,category:`2. Semantic HTML`,description:'การจำแนกเนื้อหาย่อยภายในพื้นที่หน้าจอหลัก:\n- `<section>` : จัดสัดส่วนกลุ่มหัวข้อใหญ่\n- `<article>` : กลุ่มบล็อกเนื้อหาที่เป็นบทความข่าวสารหรือบล็อกโพสต์ที่เป็นเอกเทศ\n- `<aside>` : ข้อมูลส่วนเกินขอบหน้าจอที่เป็นพวกเมนู คีย์ข้อมูล หรือโฆษณาแนะนำข้างๆ\n\n**เป้าหมาย:**\n1. สร้างกลุ่มหลัก `<section>`\n2. ภายในส่วนนี้สร้างบล็อกโพสต์บทความข่าวสาร `<article>` เขียนรายละเอียดว่า "บทความเรียน CSS"\n3. สร้างแท็บข้อแนะนำขอบข้าง `<aside>` เขียนรายละเอียดว่า "ลิงก์สนับสนุนย่อย"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สไตล์จัดเนื้อหากลุ่มย่อย Semantic ที่นี่ -->
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <section>
  <article>บทความเรียน CSS</article>
  <aside>ลิงก์สนับสนุนย่อย</aside>
</section>
</body>
</html>`,targetCss:`body { font-family: sans-serif; }
section { border: 1px solid #ccc; padding: 15px; }
article { background: #f8fafc; padding: 10px; margin-bottom: 5px; }
aside { color: #64748b; font-size: 13px; }`,starterCss:`body { font-family: sans-serif; }
section { border: 1px solid #ccc; padding: 15px; }
article { background: #f8fafc; padding: 10px; margin-bottom: 5px; }
aside { color: #64748b; font-size: 13px; }`,validation:e=>e.querySelector(`section`)?e.querySelector(`article`)?e.querySelector(`aside`)?!0:`ขาดแท็กคอลัมน์ข้างย่อย <aside>`:`ขาดแท็กระบุบทความ <article>`:`ขาดแท็กจัดสัดส่วนใหญ่ <section>`,hints:[`ครอบด้วย <section> ข้างในมี <article> และ <aside>`]},{id:`html-details-summary`,title:`19. กล่องคำถามพับยืดหดไร้ JS (Interactive Details & Summary)`,category:`2. Semantic HTML`,description:'เรียนรู้การสร้างโครงสร้างแบบพับเปิด-ปิดเนื้อหาได้ด้วยตัวเอง (Accordion) โดยใช้เพียงแท็กมาตรฐาน HTML5 แท้ ๆ ไม่ต้องพึ่งพาโค้ด JavaScript:\n1. **แท็กแม่ครอบสปริง (`<details>`)** : ทำหน้าที่เป็นกล่องสไลด์พับ ซึ่งหากมีแอตทริบิวต์ `open` จะเปิดเผยเนื้อหาด้านในโดยเริ่มต้น\n2. **แท็กหัวเรื่องปุ่มคลิก (`<summary>`)** : ทำหน้าที่เป็นข้อความหัวเรื่องหลักที่แสดงให้เห็นตลอดเวลา และเมื่อคลิกจะสลับสภาวะเปิด-ปิด\n3. **เนื้อหาเสริมภายใน** : บรรจุแท็ก `<p>`, `<img>` หรืออะไรก็ได้ ซึ่งจะถูกซ่อนไว้เบื้องหลังหัวข้อ และโผล่แสดงเมื่อกดสลับเปิด\n\n**เป้าหมาย:**\nสร้างกล่องคำถามพบบ่อย (FAQ Accordion) ภายใน `<body>` ดังนี้:\n1. สร้างแท็ก `<details>` ครอบเนื้อหาคำถาม-คำตอบ\n2. ด้านในแท็กรายละเอียด ให้ใส่หัวเรื่องหลักด้วยแท็ก `<summary>` เขียนข้อความว่า "คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?"\n3. ใส่เนื้อหาอธิบายคำตอบในบรรทัดถัดไปโดยใช้แท็ก `<p>` เขียนคำตอบว่า "คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ"',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- พิมพ์แท็ก details และ summary ที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <details>
    <summary>คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?</summary>
    <p>คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ</p>
  </details>
</body>
</html>`,starterCss:`details { font-family: sans-serif; padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; width: 320px; }
summary { font-weight: bold; cursor: pointer; padding: 5px; outline: none; }
p { margin: 10px 0 0 0; padding: 5px; color: #475569; font-size: 14px; line-height: 1.5; }`,targetCss:`details { font-family: sans-serif; padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; width: 320px; }
summary { font-weight: bold; cursor: pointer; padding: 5px; outline: none; }
p { margin: 10px 0 0 0; padding: 5px; color: #475569; font-size: 14px; line-height: 1.5; }`,validation:e=>{let t=e.querySelector(`details`),n=e.querySelector(`summary`),r=e.querySelector(`details p`);return t?n?n.textContent.includes(`จำกัดเวลาเรียนไหม`)?r?r.textContent.includes(`เข้าเรียนได้ตลอดชีพ`)?!0:`กรุณาพิมพ์ข้อความคำตอบ in <p> ให้ตรงสเปก`:`กรุณาใส่แท็กคำตอบ <p> ไว้ใต้หัวเรื่องภายในแท็ก <details>`:`กรุณาพิมพ์ข้อความคำถามใน <summary> ให้ตรงสเปก`:`กรุณาสร้างหัวเรื่องข้อความด้วยแท็ก <summary> ด้านในแท็ก <details>`:`กรุณาสร้างกล่องหลักด้วยแท็ก <details>`},hints:[`พิมพ์: <details><summary>คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?</summary><p>คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ</p></details>`]},{id:`css-selectors`,title:`18. ตัวเลือกเป้าหมายสไตล์ (CSS Selectors Syntax)`,category:`3. CSS Basics`,description:"การเชื่อมโยงแต่งสไตล์ในจุดต่างๆ:\n- Tag Name Selector : `h1`\n- Class Selector : `.คลาส`\n- ID Selector : `#ไอดี`\n\n**เป้าหมาย:**\n1. ตกแต่งหัวข้อ `<h1>` ทั้งหมดให้กลายเป็นสีเขียวสว่าง `#10b981`\n2. ตกแต่งคลาส `.error` ให้มีอักษรหนา (`font-weight: bold;`)\n3. ตกแต่งไอดีเดี่ยว `#footer-copyright` ให้เป็นสีเทาอ่อน `#94a3b8`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>หัวข้อเป้าหมาย</h1>
<p class="error">ผิดพลาดกรอกข้อมูล</p>
<p id="footer-copyright">สงวนลิขสิทธิ์</p>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>หัวข้อเป้าหมาย</h1>
<p class="error">ผิดพลาดกรอกข้อมูล</p>
<p id="footer-copyright">สงวนลิขสิทธิ์</p>
</body>
</html>`,targetCss:`h1 { color: #10b981; }
.error { font-weight: bold; }
#footer-copyright { color: #94a3b8; }`,starterCss:`/* 1. แต่ง Tag Selector h1 ให้เป็นสีเขียว */


/* 2. แต่ง Class Selector .error ให้หนา */


/* 3. แต่ง ID Selector #footer-copyright ให้เป็นสีเทา */
`,validation:(e,t)=>{let n=e.querySelector(`h1`),r=e.querySelector(`.error`),i=e.querySelector(`#footer-copyright`);if(!n||!r||!i)return`โครงสร้าง HTML ไม่สมบูรณ์`;let a=e.defaultView.getComputedStyle(n),o=e.defaultView.getComputedStyle(r),s=e.defaultView.getComputedStyle(i);return a.color===`rgb(16, 185, 129)`?o.fontWeight!==`bold`&&o.fontWeight!==`700`?`สไตล์ .error ต้องกำหนด font-weight: bold;`:s.color===`rgb(148, 163, 184)`||`สไตล์ไอดี #footer-copyright ต้องเป็นสีเทา #94a3b8`:`สไตล์ h1 ต้องเปลี่ยนเป็นสีเขียวสว่าง #10b981`},hints:[`พิมพ์ h1 { color: #10b981; }`,`พิมพ์ .error { font-weight: bold; }`,`พิมพ์ #footer-copyright { color: #94a3b8; }`]},{id:`css-colors`,title:`19. การเล่นสีและเงาตัวอักษร (Colors, BG & Shadow Styling)`,category:`3. CSS Basics`,description:"การตกแต่งสีสันและเงาเพื่อเพิ่มความทันสมัยพรีเมียม:\n- `color` : สีตัวอักษร\n- `background-color` : สีพื้นหลัง\n- `text-shadow` : การใส่เงาตัวอักษรฟอนต์ เช่น `2px 2px 4px rgba(0,0,0,0.1)`\n\n**เป้าหมาย:**\nตกแต่งกล่องคลาส `.banner` ดังนี้:\n1. กำหนดสไตล์สีตัวหนังสือเป็นสีขาว (`#ffffff`)\n2. ใส่สีพื้นหลังเป็นน้ำเงินคราม (`#3b82f6`)\n3. ใส่เงาตัวอักษร `text-shadow: 2px 2px 4px rgba(0,0,0,0.3);` เพื่อยกระดับความหรูหรา",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner">สถาบัน WebDev Academy</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner">สถาบัน WebDev Academy</div>
</body>
</html>`,targetCss:`.banner {
  padding: 30px;
  font-family: sans-serif;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  background-color: #3b82f6;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}`,starterCss:`.banner {
  padding: 30px;
  font-family: sans-serif;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  /* 1. สีตัวหนังสือขาว */
  
  /* 2. สีพื้นหลังน้ำเงิน #3b82f6 */
  
  /* 3. เงาตัวอักษร text-shadow */
  
}`,validation:e=>{let t=e.querySelector(`.banner`);if(!t)return`ไม่พบคลาส .banner`;let n=e.defaultView.getComputedStyle(t);return n.color===`rgb(255, 255, 255)`?n.backgroundColor===`rgb(59, 130, 246)`?!n.textShadow||n.textShadow===`none`?`กรุณาใส่ค่าเงาฟอนต์ text-shadow ตามเป้าหมาย`:!0:`กรุณากำหนด background-color เป็น #3b82f6`:`กรุณากำหนดสีตัวหนังสือใน .banner ให้เป็นสีขาว #ffffff`},hints:["พิมพ์ `color: #ffffff;`, `background-color: #3b82f6;`, และ `text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`"]},{id:`css-fonts`,title:`20. รูปแบบตัวอักษรเชิงลึก (Font Styles & Line Spacing)`,category:`3. CSS Basics`,description:"ตกแต่งความสวยงามของข้อความบทความระดับวิชาการ:\n- `font-size` : ขนาดความกว้างยาวของตัวอักษร\n- `line-height` : ระยะห่างระหว่างบรรทัด (แนะนำค่า `1.6` หรือ `1.8` เพื่อให้อ่านง่าย สบายตา)\n- `letter-spacing` : ระยะห่างระหว่างตัวอักษรแต่ละตัว เช่น `1px` หรือ `2px`\n\n**เป้าหมาย:**\nตกแต่งกล่องคลาส `.content-text` ดังนี้:\n1. กำหนดขนาดฟอนต์เป็น `18px`\n2. กำหนดระยะบรรทัด `line-height` เป็น `1.8`\n3. กำหนดความห่างตัวอักษร `letter-spacing` เป็น `1px`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p class="content-text">CSS3 มีความสามารถสูงในการจัดรูปแบบตัวหนังสือให้มีความสวยงาม อ่านง่าย และเหมาะสำหรับหน้าจอขนาดต่างๆ ทั่วไป</p>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p class="content-text">CSS3 มีความสามารถสูงในการจัดรูปแบบตัวหนังสือให้มีความสวยงาม อ่านง่าย และเหมาะสำหรับหน้าจอขนาดต่างๆ ทั่วไป</p>
</body>
</html>`,targetCss:`.content-text {
  font-family: sans-serif;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 1px;
}`,starterCss:`.content-text {
  font-family: sans-serif;
  /* 1. ขนาดตัวอักษร */
  
  /* 2. ระยะห่างระหว่างบรรทัด */
  
  /* 3. ระยะห่างช่องว่างตัวหนังสือ */
  
}`,validation:e=>{let t=e.querySelector(`.content-text`);if(!t)return`ไม่พบคลาส .content-text`;let n=e.defaultView.getComputedStyle(t);return n.fontSize===`18px`?n.lineHeight!==`1.8`&&n.lineHeight!==`32.4px`?`กำหนดค่า line-height เป็น 1.8 เพื่อความสบายตา`:n.letterSpacing===`1px`||`กำหนดค่า letter-spacing เป็น 1px`:`ขนาดฟอนต์ของเนื้อหาต้องเท่ากับ 18px`},hints:["ระบุสไตล์: `font-size: 18px; line-height: 1.8; letter-spacing: 1px;`"]},{id:`css-box-padding`,title:`21. กล่องและระยะห่างในกล่อง (Box Model - Width & Padding)`,category:`3. CSS Basics`,description:"การตั้งความกว้างและการเว้นระยะห่างด้านในเพื่อไม่ให้กล่องดูอึดอัดเกินไป:\n- `width` : ขนาดความกว้าง\n- `padding` : ระยะเว้นช่องไฟภายในกรอบขอบกล่อง\n- `box-sizing: border-box;` : สั่งให้กล่องควบคุมรวมความกว้างไม่ให้ล้นออกนอกตัวเลขพิกเซล\n\n**เป้าหมาย:**\nตกแต่งกล่องคลาส `.box` ดังนี้:\n1. ตั้งความกว้างเป็น `260px`\n2. เว้นระยะห่างภายในตัวหนังสือกับเส้นขอบทุกด้าน (`padding`) เป็น `25px`\n3. ล็อกโครงสร้างกล่องไม่ให้บวมออกด้วย `box-sizing: border-box;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box">กล่องสี่เหลี่ยมจัดสเกล</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box">กล่องสี่เหลี่ยมจัดสเกล</div>
</body>
</html>`,targetCss:`.box {
  width: 260px;
  padding: 25px;
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  box-sizing: border-box;
  font-family: sans-serif;
}`,starterCss:`.box {
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  font-family: sans-serif;
  /* 1. ตั้งความกว้าง 260px */
  
  /* 2. ตั้งค่าระยะห่างภายใน 25px */
  
  /* 3. ล็อกโครงสร้างกล่องกลมกลืน */
  
}`,validation:e=>{let t=e.querySelector(`.box`);if(!t)return`ไม่พบคลาส .box`;let n=e.defaultView.getComputedStyle(t),r=parseFloat(n.width),i=parseFloat(n.paddingTop||n.padding);return isNaN(r)||Math.round(r)!==260?`กำหนดความกว้างเป็น 260px`:isNaN(i)||Math.round(i)!==25?`กำหนด padding รอบด้านเป็น 25px`:n.boxSizing===`border-box`||`กำหนดกล่องเป็น box-sizing: border-box;`},hints:["พิมพ์ `width: 260px;`, `padding: 25px;`, และ `box-sizing: border-box;`"]},{id:`css-box-margin`,title:`22. กล่องและระยะห่างนอกกล่อง (Box Model - Margin & Border)`,category:`3. CSS Basics`,description:"การจัดขอบมนและการเว้นช่องไฟเพื่อเว้นระยะห่างจากกล่องตัวตนอื่นๆ รอบข้าง:\n- `margin` : ระยะขยายช่องไฟรอบกล่องด้านนอก เพื่อไม่ให้กล่องชนกัน\n- `border` : สีกรอบเส้นและรูปแบบ (`border: 2px solid #3b82f6;`)\n- `border-radius` : ควบคุมความมนของมุมกล่องให้สวยมน\n\n**เป้าหมาย:**\nตกแต่งกล่องคลาส `.element` ดังนี้:\n1. ใส่ขอบมนโค้ง (`border-radius`) เป็น `16px`\n2. ลากกรอบเป็นเส้นขอบหนา `3px` ชนิดทึบสีน้ำเงินเข้ม (`#1e3a8a`)\n3. เว้นช่องว่างนอกกล่องด้านล่าง (`margin-bottom`) เป็น `30px`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="element">การ์ดของขวัญพิเศษ</div>
<div style="background-color: #eee; height: 10px; width: 100px;"></div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="element">การ์ดของขวัญพิเศษ</div>
<div style="background-color: #eee; height: 10px; width: 100px;"></div>
</body>
</html>`,targetCss:`.element {
  padding: 15px;
  background-color: #eff6ff;
  font-family: sans-serif;
  border-radius: 16px;
  border: 3px solid #1e3a8a;
  margin-bottom: 30px;
}`,starterCss:`.element {
  padding: 15px;
  background-color: #eff6ff;
  font-family: sans-serif;
  /* 1. สไตล์ขอบมน */
  
  /* 2. สไตล์สีกรอบและขนาดขอบ */
  
  /* 3. ระยะเว้นขอบนอกด้านล่าง margin-bottom */
  
}`,validation:e=>{let t=e.querySelector(`.element`);if(!t)return`ไม่พบคลาส .element`;let n=e.defaultView.getComputedStyle(t);if(n.borderRadius!==`16px`)return`กรุณาใส่ขอบโค้งมน border-radius: 16px;`;let r=parseFloat(n.borderTopWidth||n.borderWidth);return isNaN(r)||Math.round(r)!==3||!n.borderColor.includes(`138`)&&!n.borderColor.includes(`30`)?`กรุณาใส่ขอบหนา 3px และใช้สีน้ำเงินเข้ม #1e3a8a`:n.marginBottom===`30px`||`กรุณากำหนดระยะห่างภายนอกด้านล่าง margin-bottom: 30px;`},hints:["พิมพ์ `border-radius: 16px;`, `border: 3px solid #1e3a8a;`, และ `margin-bottom: 30px;`"]},{id:`css-display-property`,title:`30. รูปแบบการแสดงผลอิลิเมนต์ (CSS Display Property)`,category:`3. CSS Basics`,description:"การกำหนดพฤติกรรมการแสดงผลและการจองพื้นที่ของกล่องอิลิเมนต์ด้วยคุณสมบัติ `display`:\n- `display: block;` : กล่องจะกินพื้นที่เต็มความกว้างแนวนอน และบังคับตัวถัดไปขึ้นบรรทัดใหม่เสมอ (เช่น `<div>`, `<p>`, `<h1>`)\n- `display: inline;` : กล่องจะไหลต่อเนื่องตามตัวหนังสือ ไม่ขึ้นบรรทัดใหม่ และไม่สามารถระบุความกว้าง (`width`) หรือความสูง (`height`) ได้ (เช่น `<span>`, `<a>`, `<strong>`)\n- `display: inline-block;` : ไหลแนวนอนตามข้อความเหมือน inline แต่สามารถระบุขนาดความกว้าง ความสูง และระยะขอบได้อย่างสมบูรณ์ (เช่น `<button>`, `<img>`)\n- `display: none;` : สั่งซ่อนองค์ประกอบอย่างสมบูรณ์และนำออกจากเลย์เอาต์ (ไม่กินพื้นที่หน้าจอเลย)\n\n**เป้าหมาย:**\n1. กำหนดให้กล่อง `.box-block` แสดงผลเป็น `block`\n2. กำหนดให้กล่อง `.box-inline-block` แสดงผลเป็น `inline-block` และปรับขนาดความกว้างเป็น `120px`\n3. กำหนดให้กล่อง `.box-none` ซ่อนตัวล่องหนไปจากหน้าจอด้วย `none`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box-block">1. กล่องแบบ Block (กินเต็มแถว)</div>
  <div class="box-inline-block">2. กล่องย่อย A</div>
  <div class="box-inline-block">2. กล่องย่อย B</div>
  <div class="box-none">3. กล่องนี้ควรจะล่องหนไป</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box-block">1. กล่องแบบ Block (กินเต็มแถว)</div>
  <div class="box-inline-block">2. กล่องย่อย A</div>
  <div class="box-inline-block">2. กล่องย่อย B</div>
  <div class="box-none">3. กล่องนี้ควรจะล่องหนไป</div>
</body>
</html>`,targetCss:`.box-block {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  display: block;
}
.box-inline-block {
  background-color: #10b981;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  display: inline-block;
  width: 120px;
  text-align: center;
}
.box-none {
  background-color: #ef4444;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  display: none;
}`,starterCss:`.box-block {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  /* 1. กำหนดรูปแบบการแสดงผลเป็น block */
  
}
.box-inline-block {
  background-color: #10b981;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  text-align: center;
  /* 2. กำหนดรูปแบบการแสดงผลเป็น inline-block และความกว้าง 120px */
  
}
.box-none {
  background-color: #ef4444;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  /* 3. กำหนดรูปแบบการแสดงผลเป็น none เพื่อสั่งซ่อน */
  
}`,validation:e=>{let t=e.querySelector(`.box-block`),n=e.querySelectorAll(`.box-inline-block`),r=e.querySelector(`.box-none`);if(!t||n.length<2||!r)return`กรุณาห้ามลบแท็กใน HTML ดั้งเดิม`;let i=e.defaultView.getComputedStyle(t),a=e.defaultView.getComputedStyle(n[0]),o=e.defaultView.getComputedStyle(n[1]),s=e.defaultView.getComputedStyle(r);return i.display===`block`?a.display!==`inline-block`||o.display!==`inline-block`?`กรุณากำหนดให้ .box-inline-block มี display: inline-block;`:a.width!==`120px`||o.width!==`120px`?`กรุณากำหนดความกว้าง width: 120px; ให้กับคลาส .box-inline-block`:s.display===`none`||`กรุณากำหนดให้ .box-none มี display: none; เพื่อซ่อนกล่อง`:`กรุณากำหนดให้ .box-block มี display: block;`},hints:["คลาส `.box-block` ใช้ `display: block;`","คลาส `.box-inline-block` ใช้ `display: inline-block; width: 120px;`","คลาส `.box-none` ใช้ `display: none;`"]},{id:`css-border-radius-advanced`,title:`31. ความโค้งมนและมุมย่อย (Advanced Border Radius)`,category:`3. CSS Basics`,description:"เจาะลึกการระบุความโค้งมนของขอบมุมกล่องในรูปแบบละเอียดต่างๆ:\n1. **กำหนดแยกมุมแต่ละด้าน** :\n   - `border-top-left-radius` : มุมบนซ้าย\n   - `border-top-right-radius` : มุมบนขวา\n   - `border-bottom-right-radius` : มุมล่างขวา\n   - `border-bottom-left-radius` : มุมล่างซ้าย\n2. **เขียนย่อรวม 4 ค่าในคำสั่งเดียว** (วนตามเข็มนาฬิกา: บนซ้าย -> บนขวา -> ล่างขวา -> ล่างซ้าย) :\n   - เช่น `border-radius: 10px 20px 30px 40px;`\n   - หรือหากคุมแบบคู่: `border-radius: 20px 20px 0 0;` (จะทำให้ขอบบนมนส่วนขอบล่างตัดตรงเป็นเหลี่ยม เหมาะสำหรับทำรูปภาพหัวการ์ด)\n3. **การทำวงกลมสมบูรณ์** : ใช้หน่วยเปอร์เซ็นต์ `border-radius: 50%;` ร่วมกับกล่องที่ความกว้างและความสูงเท่ากัน\n\n**เป้าหมาย:**\n1. กำหนดขอบมนให้กับการ์ด `.custom-card` โดยใช้คุณสมบัติย่อเพื่อให้มุมด้านบนซ้ายและบนขวาโค้งมน `24px` ส่วนมุมล่างทั้งสองด้านเป็น `0px` (`border-radius: 24px 24px 0 0;`)\n2. ตกแต่งภาพโปรไฟล์ `.circle-avatar` ให้เป็นวงกลมสมบูรณ์ด้วย `border-radius: 50%;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="custom-card">
    <div class="avatar-container">
      <div class="circle-avatar"></div>
    </div>
    <div style="padding: 15px; font-family: sans-serif;">
      <h3>การ์ดข้อมูลผู้ใช้</h3>
      <p>มุมด้านบนการ์ดจะโค้งมนสวยงาม ส่วนมุมด้านล่างจะเหลี่ยมตรง</p>
    </div>
  </div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="custom-card">
    <div class="avatar-container">
      <div class="circle-avatar"></div>
    </div>
    <div style="padding: 15px; font-family: sans-serif;">
      <h3>การ์ดข้อมูลผู้ใช้</h3>
      <p>มุมด้านบนการ์ดจะโค้งมนสวยงาม ส่วนมุมด้านล่างจะเหลี่ยมตรง</p>
    </div>
  </div>
</body>
</html>`,targetCss:`.custom-card {
  width: 250px;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  font-family: sans-serif;
  border-radius: 24px 24px 0 0;
}
.avatar-container {
  background-color: #3b82f6;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
}
.circle-avatar {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
}`,starterCss:`.custom-card {
  width: 250px;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  font-family: sans-serif;
  /* 1. กำหนดขอบมนเฉพาะด้านบน 24px (บนซ้าย บนขวา) ด้านล่างเป็น 0 */
  
}
.avatar-container {
  background-color: #3b82f6;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
}
.circle-avatar {
  width: 80px;
  height: 80px;
  background-color: white;
  /* 2. กำหนดขอบมน 50% เพื่อทำรูปวงกลม */
  
}`,validation:e=>{let t=e.querySelector(`.custom-card`),n=e.querySelector(`.circle-avatar`);if(!t||!n)return`กรุณาห้ามลบแท็กใน HTML ดั้งเดิม`;let r=e.defaultView.getComputedStyle(t);if(e.defaultView.getComputedStyle(n).borderRadius!==`50%`)return`กรุณากำหนดให้ .circle-avatar มี border-radius: 50%;`;let i=r.borderTopLeftRadius,a=r.borderTopRightRadius,o=r.borderBottomRightRadius,s=r.borderBottomLeftRadius;return i!==`24px`||a!==`24px`||o!==`0px`&&o!==`0`||s!==`0px`&&s!==`0`?`กรุณาระบุ border-radius ของการ์ดให้มุมบนซ้ายและบนขวาโค้ง 24px และมุมล่างทั้งสองเป็น 0 (เช่น border-radius: 24px 24px 0 0;)`:!0},hints:["สำหรับการ์ดใช้ `border-radius: 24px 24px 0 0;` (หรือเขียนแยกคุณสมบัติ)","สำหรับภาพโปรไฟล์กลมใช้ `border-radius: 50%;`"]},{id:`css-box-shorthands`,title:`32. การย่อเขียนระยะห่างหลายทิศทาง (Margins & Paddings Shorthands)`,category:`3. CSS Basics`,description:"เรียนรู้การย่อโค้ดสำหรับการกำหนดระยะห่าง (Margin และ Padding) รอบด้านของกล่องในรูปแบบย่อที่ใช้บ่อย:\n1. **แบบระบุค่าเดียว** : `padding: 15px;` (มีผลเท่ากันทั้ง 4 ทิศ บน-ขวา-ล่าง-ซ้าย)\n2. **แบบระบุ 2 ค่า** : `padding: 10px 20px;` (ค่าแรกคุม บน-ล่าง, ค่าที่สองคุม ซ้าย-ขวา)\n3. **แบบระบุ 3 ค่า** : `padding: 10px 20px 30px;` (บน=10px, ซ้าย/ขวา=20px, ล่าง=30px)\n4. **แบบระบุ 4 ค่า** : `padding: 10px 20px 30px 40px;` (เรียงตามเข็มนาฬิกา บน -> ขวา -> ล่าง -> ซ้าย)\n5. **เขียนเจาะจงรายด้าน (Longhand)** : เช่น `margin-bottom: 24px;` หรือ `padding-left: 8px;`\n\n**เป้าหมาย:**\nตกแต่งกล่องคอนเทนเนอร์ `.banner-card` และปุ่ม `.btn` ดังนี้:\n1. กำหนดระยะขอบภายใน `.banner-card` โดยใช้รูปแบบย่อแบบ 2 ค่า เพื่อให้บน-ล่างมีระยะห่าง `30px` และซ้าย-ขวามีระยะห่าง `40px`\n2. กำหนดระยะขอบนอกด้านล่างให้ `.banner-card` เท่ากับ `25px` โดยใช้คำสั่งเจาะจงทิศทาง\n3. กำหนดระยะห่างภายในให้ปุ่ม `.btn` โดยใช้รูปแบบย่อแบบ 2 ค่า เพื่อให้บน-ล่างมีระยะห่าง `8px` และซ้าย-ขวามีระยะห่าง `16px`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner-card">
    <h3>ยินดีต้อนรับสู่สถาบัน</h3>
    <p>เริ่มต้นเรียนรู้การย่อโค้ด CSS เพื่อจัดสเปกหน้าจออย่างมืออาชีพ</p>
    <button class="btn">เริ่มต้นเรียนรู้</button>
  </div>
  <div style="background-color: #f1f5f9; height: 50px; text-align: center; line-height: 50px; font-family: sans-serif;">บล็อกอ้างอิงด้านล่าง</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner-card">
    <h3>ยินดีต้อนรับสู่สถาบัน</h3>
    <p>เริ่มต้นเรียนรู้การย่อโค้ด CSS เพื่อจัดสเปกหน้าจออย่างมืออาชีพ</p>
    <button class="btn">เริ่มต้นเรียนรู้</button>
  </div>
  <div style="background-color: #f1f5f9; height: 50px; text-align: center; line-height: 50px; font-family: sans-serif;">บล็อกอ้างอิงด้านล่าง</div>
</body>
</html>`,targetCss:`.banner-card {
  background-color: white;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  font-family: sans-serif;
  padding: 30px 40px;
  margin-bottom: 25px;
}
.btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 16px;
}`,starterCss:`.banner-card {
  background-color: white;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  font-family: sans-serif;
  /* 1. กำหนด padding บน-ล่าง 30px และ ซ้าย-ขวา 40px ด้วยรูปแบบย่อ */
  
  /* 2. กำหนด margin ด้านล่าง 25px ด้วยคำสั่งเจาะจง */
  
}
.btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  /* 3. กำหนด padding บน-ล่าง 8px และ ซ้าย-ขวา 16px ด้วยรูปแบบย่อ */
  
}`,validation:e=>{let t=e.querySelector(`.banner-card`),n=e.querySelector(`.btn`);if(!t||!n)return`กรุณาห้ามลบแท็กใน HTML ดั้งเดิม`;let r=e.defaultView.getComputedStyle(t),i=e.defaultView.getComputedStyle(n);return r.paddingTop!==`30px`||r.paddingBottom!==`30px`||r.paddingLeft!==`40px`||r.paddingRight!==`40px`?`กรุณากำหนด padding ให้กับ .banner-card ให้ถูกต้อง (บน-ล่าง 30px, ซ้าย-ขวา 40px)`:r.marginBottom===`25px`?i.paddingTop!==`8px`||i.paddingBottom!==`8px`||i.paddingLeft!==`16px`||i.paddingRight!==`16px`?`กรุณากำหนด padding ให้กับ .btn ให้ถูกต้อง (บน-ล่าง 8px, ซ้าย-ขวา 16px)`:!0:`กรุณากำหนด margin-bottom ให้กับ .banner-card เป็น 25px`},hints:["คลาส `.banner-card` ใช้ `padding: 30px 40px;` และ `margin-bottom: 25px;`","คลาส `.btn` ใช้ `padding: 8px 16px;`"]},{id:`css-borders-detailed`,title:`33. เส้นขอบเฉพาะด้านและสไตล์ขอบ (Borders on Specific Sides)`,category:`3. CSS Basics`,description:"เรียนรู้การกำหนดเส้นขอบเจาะจงเฉพาะทิศทางและรูปแบบสไตล์ที่หลากหลาย:\n1. **กำหนดแยกทิศทาง** : \n   - `border-top` : ขอบบน\n   - `border-bottom` : ขอบล่าง\n   - `border-left` : ขอบซ้าย\n   - `border-right` : ขอบขวา\n2. **คุณสมบัติย่อยของขอบ** : `border: [ความหนา] [รูปแบบ] [สี];`\n   - รูปแบบเส้นขอบ (`border-style`): `solid` (เส้นทึบ), `dashed` (เส้นประ), `dotted` (เส้นจุดไข่ปลา), `double` (เส้นคู่), `none` (ไม่มีเส้นขอบ)\n3. **การใช้งานยอดนิยม** : การทำขอบเน้นด้านข้างสำหรับกล่องแจ้งเตือน (Alert Box) หรือทำเส้นแบ่งใต้หัวข้อ (Underline Divider)\n\n**เป้าหมาย:**\nตกแต่งกล่องแจ้งเตือนภัย `.alert-box` ดังนี้:\n1. ล้างขอบดีฟอลต์ทั้งหมดออก และตั้งค่าเส้นขอบเฉพาะ **ด้านซ้าย** (`border-left`) ให้หนา `6px` ชนิดเส้นทึบ (`solid`) ใช้สีแดง (`#ef4444`)\n2. ตั้งเส้นขอบเฉพาะ **ด้านล่าง** (`border-bottom`) ให้หนา `1px` ชนิดเส้นจุดไข่ปลา (`dotted`) ใช้สีเทาอ่อน (`#cbd5e1`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="alert-box">
    <strong>คำเตือน:</strong> ข้อมูลการแก้ไขนี้จะถูกเก็บบันทึกในฐานข้อมูลทันที กรุณาตรวจสอบความถูกต้องก่อนกดบันทึก
  </div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="alert-box">
    <strong>คำเตือน:</strong> ข้อมูลการแก้ไขนี้จะถูกเก็บบันทึกในฐานข้อมูลทันที กรุณาตรวจสอบความถูกต้องก่อนกดบันทึก
  </div>
</body>
</html>`,targetCss:`.alert-box {
  padding: 15px;
  background-color: #fef2f2;
  color: #991b1b;
  font-family: sans-serif;
  border-radius: 4px;
  border: none;
  border-left: 6px solid #ef4444;
  border-bottom: 1px dotted #cbd5e1;
}`,starterCss:`.alert-box {
  padding: 15px;
  background-color: #fef2f2;
  color: #991b1b;
  font-family: sans-serif;
  border-radius: 4px;
  /* เริ่มต้นล้างขอบออก่อน */
  border: none;
  
  /* 1. กำหนดขอบด้านซ้ายให้หนา 6px ชนิดทึบ (solid) สีแดง #ef4444 */
  
  /* 2. กำหนดขอบด้านล่างให้หนา 1px ชนิดจุดไข่ปลา (dotted) สีเทา #cbd5e1 */
  
}`,validation:e=>{let t=e.querySelector(`.alert-box`);if(!t)return`ไม่พบคลาส .alert-box`;let n=e.defaultView.getComputedStyle(t),r=parseFloat(n.borderLeftWidth);if(isNaN(r)||Math.round(r)!==6||n.borderLeftStyle!==`solid`)return`กรุณากำหนดขอบด้านซ้ายให้หนา 6px ชนิด solid`;if(!n.borderLeftColor.includes(`239`)&&!n.borderLeftColor.includes(`68`))return`กรุณาใช้สีแดง #ef4444 สำหรับขอบด้านซ้าย`;let i=parseFloat(n.borderBottomWidth);return isNaN(i)||Math.round(i)!==1||n.borderBottomStyle!==`dotted`?`กรุณากำหนดขอบด้านล่างให้หนา 1px ชนิด dotted (จุดไข่ปลา)`:!n.borderBottomColor.includes(`203`)&&!n.borderBottomColor.includes(`226`)?`กรุณาใช้สีเทา #cbd5e1 สำหรับขอบด้านล่าง`:parseFloat(n.borderTopWidth)>0||parseFloat(n.borderRightWidth)>0?`กรุณาล้างขอบด้านบนและด้านขวาออก (ให้คงเหลือเฉพาะด้านซ้ายและด้านล่าง)`:!0},hints:["พิมพ์ `border-left: 6px solid #ef4444;` และ `border-bottom: 1px dotted #cbd5e1;`"]},{id:`css-backgrounds-advanced`,title:`34. ภาพพื้นหลังและการไล่โทนสี (Background Images & Gradients)`,category:`3. CSS Basics`,description:"เรียนรู้การตั้งค่าพื้นหลังด้วยรูปภาพและการปรับขนาดจัดวาง รวมถึงการสร้างสีพื้นหลังแบบไล่เฉดโทนสี (Gradients):\n1. **รูปภาพพื้นหลัง (`background-image`)** : ระบุผ่านฟังก์ชัน `url('พิกัดที่อยู่รูป')`\n2. **การปรับขนาดรูป (`background-size`)** :\n   - `cover` : ยืดรูปภาพให้เต็มพื้นที่กล่องพอดี (สัดส่วนรูปเดิม แต่อาจมีขอบบางส่วนถูกครอปตัดออก)\n   - `contain` : ย่อสเกลรูปให้เห็นรูปครบถ้วนที่สุดในกล่อง (อาจมีที่ว่างสีขาวเหลือข้างๆ)\n3. **การวางตำแหน่งรูป (`background-position`)** : ระบุเช่น `center`, `top`, `bottom`, `left`, `right`\n4. **การควบคุมการทำซ้ำ (`background-repeat`)** : ตั้งเป็น `no-repeat` เพื่อป้องกันไม่ให้รูปที่เล็กกว่ากล่องถูกนำมาต่อจิ๊กซอว์ซ้ำๆ\n5. **การไล่ระดับสีพื้นหลัง (Linear Gradients)** : เช่น `background: linear-gradient(135deg, #3b82f6, #8b5cf6);`\n\n**เป้าหมาย:**\nตกแต่งกล่องโปรไฟล์ฮีโร่ `.hero-banner` ดังนี้:\n1. ระบุภาพพื้นหลังโดยใช้ภาพจากลิงก์: `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600`\n2. สั่งให้ภาพขยายเต็มพื้นที่พอดีกล่อง (`cover`) โดยจุดศูนย์กลางของภาพอยู่กึ่งกลางกล่อง (`center`) และไม่มีการทำซ้ำภาพ (`no-repeat`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>เทคโนโลยีสำหรับอนาคต</h1>
      <p>เรียนรู้วิธีการเขียนโค้ดและพัฒนาแอปพลิเคชันด้วยเครื่องมือระดับสากล</p>
    </div>
  </div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>เทคโนโลยีสำหรับอนาคต</h1>
      <p>เรียนรู้วิธีการเขียนโค้ดและพัฒนาแอปพลิเคชันด้วยเครื่องมือระดับสากล</p>
    </div>
  </div>
</body>
</html>`,targetCss:`.hero-banner {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-content {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 15px;
  border-radius: 6px;
  max-width: 320px;
}
.hero-content h1 {
  margin: 0 0 5px 0;
  font-size: 18px;
  color: #1e293b;
}
.hero-content p {
  margin: 0;
  font-size: 13px;
  color: #475569;
  line-height: 1.4;
}`,starterCss:`.hero-banner {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  
  /* 1. ใส่ภาพพื้นหลังด้วย URL: https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600 */
  
  /* 2. ตั้งค่าปรับสัดส่วนรูปภาพไม่ให้ซ้ำ จัดกึ่งกลาง และกว้างครอบคลุมกล่อง (cover) */
  
}
.hero-content {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 15px;
  border-radius: 6px;
  max-width: 320px;
}
.hero-content h1 {
  margin: 0 0 5px 0;
  font-size: 18px;
  color: #1e293b;
}
.hero-content p {
  margin: 0;
  font-size: 13px;
  color: #475569;
  line-height: 1.4;
}`,validation:e=>{let t=e.querySelector(`.hero-banner`);if(!t)return`ไม่พบคลาส .hero-banner`;let n=e.defaultView.getComputedStyle(t);return!n.backgroundImage||n.backgroundImage===`none`?`กรุณาใส่ภาพพื้นหลัง background-image`:n.backgroundImage.includes(`1579546929518-9e396f3cc809`)?n.backgroundSize===`cover`?n.backgroundPosition.trim()!==`center`&&!n.backgroundPosition.includes(`50%`)?`กรุณากำหนด background-position: center;`:n.backgroundRepeat===`no-repeat`||`กรุณากำหนด background-repeat: no-repeat;`:`กรุณากำหนด background-size: cover;`:`กรุณาใช้ URL ภาพที่กำหนดให้ถูกต้อง`},hints:[`พิมพ์: background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600');`,`พิมพ์: background-size: cover; background-position: center; background-repeat: no-repeat;`]},{id:`css-layout-absolute`,title:`28. การจัดตำแหน่งซ้อนทับภาพ (Absolute Positioning)`,category:`4. CSS Layouts`,description:"การจัดตำแหน่งแบบซ้อนทับช่วยวางเลเยอร์ของกล่องลูกลอยอยู่เหนือพื้นที่กล่องแม่:\n- กล่องแม่ต้องประกาศ `position: relative;`\n- กล่องลูกที่จะลอยระบุ `position: absolute;` และบังคับพิกัดด้วย `top`, `left`, `right`, `bottom`\n\n**เป้าหมาย:**\nวางป้ายราคา (`.price-badge`) ทับรูปภาพให้อยู่ที่ **มุมซ้ายล่าง** ของการ์ด (`.card-wrapper`):\n1. คลาสแม่ `.card-wrapper` ต้องตั้งค่า `position: relative;`\n2. คลาสลูก `.price-badge` ต้องตั้งค่า `position: absolute;` และระบุพิกัดเกาะขอบล่างขอบซ้าย (`bottom: 10px; left: 10px;`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-wrapper">
  <div class="price-badge">฿120</div>
  <div style="background-color: #ddd; width: 100%; height: 120px; border-radius: 6px;"></div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-wrapper">
  <div class="price-badge">฿120</div>
  <div style="background-color: #ddd; width: 100%; height: 120px; border-radius: 6px;"></div>
</div>
</body>
</html>`,targetCss:`.card-wrapper {
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  position: relative;
}
.price-badge {
  background-color: #2563eb;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-family: sans-serif;
  position: absolute;
  bottom: 10px;
  left: 10px;
}`,starterCss:`.card-wrapper {
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  /* 1. สไตล์คีย์พิกเซลคุมแม่ */
  
}
.price-badge {
  background-color: #2563eb;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-family: sans-serif;
  /* 2. สไตล์พิกเซลลูกลอยขอบล่างซ้าย */
  
}`,validation:e=>{let t=e.querySelector(`.card-wrapper`),n=e.querySelector(`.price-badge`);if(!t||!n)return`โครงสร้างตัวอย่างไม่สมบูรณ์`;let r=e.defaultView.getComputedStyle(t),i=e.defaultView.getComputedStyle(n);return r.position===`relative`?i.position===`absolute`?i.bottom!==`10px`||i.left!==`10px`?`ตั้งพิกัด bottom: 10px; left: 10px; เพื่อระบุขอบล่างซ้าย`:!0:`กรุณาใส่ position: absolute; ให้ .price-badge`:`กรุณาใส่ position: relative; ให้ .card-wrapper`},hints:["คุมแม่: `position: relative;`","คุมลูกลอย: `position: absolute; bottom: 10px; left: 10px;`"]},{id:`css-layout-sticky`,title:`29. แถบเกาะติดขอบหน้าจอ (Fixed & Sticky Elements)`,category:`4. CSS Layouts`,description:"การจัดองค์ประกอบแถวเมนูให้ค้างอยู่ที่หน้าจอเวลาเลื่อนสกอลบาร์ลง:\n- `position: sticky;` : ลอยเกาะขอบเมื่อถูกเลื่อนถึง และเคลื่อนตัวกลับเมื่อสกอลกลับ (ต้องระบุ `top: 0;` เสมอ)\n- `position: fixed;` : เกาะอยู่กับจุดพิกัดหน้าจอบนขอบถาวรไม่เปลี่ยนรูป\n\n**เป้าหมาย:**\nจัดให้แถบหัวเมนูนำทาง `.sticky-bar` ค้างติดขอบบนสุดของกล่องแม่เวลาเลื่อนหน้าเพจ:\n1. ตั้งค่า `position: sticky;` ให้กับคลาส `.sticky-bar`\n2. กำหนดพิกัดเกาะขอบบนสุด `top: 0;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div style="height: 300px; overflow-y: auto; border: 1px solid #ccc;">
  <div class="sticky-bar">เมนูนำทางติดหนึบ (Sticky Header)</div>
  <div style="padding: 20px; font-family: sans-serif;">
    <p>บทความย่อยที่ 1 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 2 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 3 ...</p>
  </div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div style="height: 300px; overflow-y: auto; border: 1px solid #ccc;">
  <div class="sticky-bar">เมนูนำทางติดหนึบ (Sticky Header)</div>
  <div style="padding: 20px; font-family: sans-serif;">
    <p>บทความย่อยที่ 1 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 2 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 3 ...</p>
  </div>
</div>
</body>
</html>`,targetCss:`.sticky-bar {
  background-color: #0f172a;
  color: white;
  padding: 15px;
  font-family: sans-serif;
  font-weight: bold;
  position: sticky;
  top: 0;
}`,starterCss:`.sticky-bar {
  background-color: #0f172a;
  color: white;
  padding: 15px;
  font-family: sans-serif;
  font-weight: bold;
  /* 1. ตั้งค่าพิกัดให้ติดหน้าจอค้างที่นี่ */
  
}`,validation:e=>{let t=e.querySelector(`.sticky-bar`);if(!t)return`ไม่พบแถบ .sticky-bar`;let n=e.defaultView.getComputedStyle(t);return n.position===`sticky`?n.top===`0px`||`อย่าลืมกำหนดจุดค้างบนสุดเป็น top: 0;`:`กรุณากำหนดตำแหน่งให้เป็น position: sticky;`},hints:["พิมพ์: `position: sticky; top: 0;`"]},{id:`css-flex-direction`,title:`30. ทิศทางการเรียงกล่อง (Flex Direction & Wrapping)`,category:`4. CSS Layouts`,description:"การจัดการเรียงกล่องลูกของระบบ Flexbox:\n- `flex-direction: row;` : จัดเรียงตามแนวนอน (เริ่มต้น)\n- `flex-direction: column;` : จัดเรียงตามแนวตั้งจากบนลงล่าง\n- `flex-wrap: wrap;` : สั่งให้กล่องลูกขึ้นแถวใหม่เมื่อพื้นที่ไม่เพียงพอ ป้องกันการล้นกล่องแม่\n\n**เป้าหมาย:**\nจัดเลย์เอาต์การ์ดสินค้า `.items-group` ดังนี้:\n1. จัดกลุ่มให้เรียงเป็นแนวตั้ง (`flex-direction: column;`)\n2. เปิดใช้งานระบบสลับแถว (`flex-wrap: wrap;`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="items-group">
  <div class="box">กล่อง A</div>
  <div class="box">กล่อง B</div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="items-group">
  <div class="box">กล่อง A</div>
  <div class="box">กล่อง B</div>
</div>
</body>
</html>`,targetCss:`.items-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
}
.box {
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
  border: 1px solid #cbd5e1;
}`,starterCss:`.items-group {
  display: flex;
  gap: 10px;
  /* 1. จัดเรียงในทิศทางแนวตั้ง */
  
  /* 2. สั่งให้เว้นสลับขึ้นแถวใหม่ */
  
}
.box {
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
  border: 1px solid #cbd5e1;
}`,validation:e=>{let t=e.querySelector(`.items-group`);if(!t)return`ไม่พบคลาส .items-group`;let n=e.defaultView.getComputedStyle(t);return n.flexDirection===`column`?n.flexWrap===`wrap`||`กรุณากำหนด flex-wrap: wrap;`:`กรุณาจัดทิศทางเรียงเป็นแนวตั้ง flex-direction: column;`},hints:["พิมพ์: `flex-direction: column; flex-wrap: wrap;` ในคลาส .items-group"]},{id:`css-flex-align`,title:`31. การจัดกึ่งกลางและระยะจัด Flexbox (Flex Align & Justify)`,category:`4. CSS Layouts`,description:"การคุมระยะจัดแนวกล่องลูกภายในระบบ Flex:\n- `justify-content` : คุมขอบระยะแนวนอน เช่น `center` (ตรงกลาง), `space-between` (แยกซ้ายขวาสุด)\n- `align-items` : คุมขอบระยะแนวตั้ง เช่น `center` (ตรงกลาง)\n\n**เป้าหมาย:**\nจัดให้ไอคอนและข้อความข้างในการ์ด `.card-header` อยู่ตรงกลางหน้าจอแนวนอนและตรงกลางแนวตั้ง:\n1. จัดกึ่งกลางทางราบ: `justify-content: center;`\n2. จัดกึ่งกลางแนวดิ่ง: `align-items: center;`\n3. เว้นระยะห่างระหว่าไอเทม: `gap: 12px;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-header">
  <div style="background-color: #2563eb; width: 24px; height: 24px; border-radius: 50%;"></div>
  <span style="font-family: sans-serif; font-weight: bold;">ผู้เข้าเรียนหลัก</span>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-header">
  <div style="background-color: #2563eb; width: 24px; height: 24px; border-radius: 50%;"></div>
  <span style="font-family: sans-serif; font-weight: bold;">ผู้เข้าเรียนหลัก</span>
</div>
</body>
</html>`,targetCss:`.card-header {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}`,starterCss:`.card-header {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  /* 1. จัดกึ่งกลางแนวนอน */
  
  /* 2. จัดกึ่งกลางแนวตั้ง */
  
  /* 3. จัดระยะห่าง */
  
}`,validation:e=>{let t=e.querySelector(`.card-header`);if(!t)return`ไม่พบคลาส .card-header`;let n=e.defaultView.getComputedStyle(t);return n.justifyContent===`center`?n.alignItems===`center`?parseFloat(n.gap)<10?`กรุณาระบุ gap: 12px;`:!0:`กรุณากำหนด align-items: center;`:`กรุณากำหนด justify-content: center;`},hints:["ระบุสไตล์: `justify-content: center; align-items: center; gap: 12px;`"]},{id:`css-grid-columns`,title:`32. โครงสร้างแถวตารางพื้นฐาน (CSS Grid Columns & Gap)`,category:`4. CSS Layouts`,description:"การจัดวางตารางการ์ดข้อมูลแบบ 2 มิติ:\n- `display: grid;` : เปิดระบบกริด\n- `grid-template-columns: repeat(2, 1fr);` : แบ่งเป็น 2 คอลัมน์กว้างเท่ากันในแถวเดียว\n\n**เป้าหมาย:**\nจัดคลาส `.grid-box` ให้แบ่งกล่องเป็น **2 คอลัมน์** ขนาดกว้างเท่ากันและเว้นช่องไฟห่าง **15px**:\n1. ใช้ `display: grid;`\n2. กำหนด 2 คอลัมน์ด้วย `grid-template-columns: repeat(2, 1fr);`\n3. ตั้งช่องไฟ `gap: 15px;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="grid-box">
  <div class="card">ข้อมูล A</div>
  <div class="card">ข้อมูล B</div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="grid-box">
  <div class="card">ข้อมูล A</div>
  <div class="card">ข้อมูล B</div>
</div>
</body>
</html>`,targetCss:`.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.card {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}`,starterCss:`.grid-box {
  /* 1. สไตล์จัดคลาสกริดที่นี่ */
  
}
.card {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}`,validation:e=>{let t=e.querySelector(`.grid-box`);if(!t)return`ไม่พบคลาส .grid-box`;let n=e.defaultView.getComputedStyle(t);return n.display===`grid`?n.gridTemplateColumns.split(` `).length===2?parseFloat(n.gap)<10?`อย่าลืมกำหนด gap: 15px;`:!0:`กรุณาแบ่งออกเป็น 2 คอลัมน์`:`กรุณาใส่สไตล์ display: grid;`},hints:["พิมพ์: `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;`"]},{id:`css-grid-areas`,title:`33. พื้นที่จัดโครงร่างกล่อง (Advanced CSS Grid Areas)`,category:`4. CSS Layouts`,description:'การกำหนดเลย์เอาต์ตามพื้นที่วาดแบบแผนผัง (Layout Grid Area Planning):\n- `grid-template-areas: "side main";`\n- การ์ดลูกระบุตำแหน่งตนเองผ่าน `grid-area: side;`\n\n**เป้าหมาย:**\nจัดตำแหน่ง `.dashboard` ให้แบ่งเป็นพื้นที่ซ้ายขวา:\n1. คลาสแม่ `.dashboard` ระบุโครงสร้าง `grid-template-areas: "sidebar main";`\n2. คลาสลูก `.side` มัดตนเองกับพื้นที่ด้านซ้าย `grid-area: sidebar;`\n3. คลาสลูก `.body` มัดตนเองกับพื้นที่ด้านขวา `grid-area: main;`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <div class="side">เมนูซ้าย</div>
  <div class="body">เนื้อหาขวา</div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <div class="side">เมนูซ้าย</div>
  <div class="body">เนื้อหาขวา</div>
</div>
</body>
</html>`,targetCss:`.dashboard {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas: "sidebar main";
  gap: 10px;
  font-family: sans-serif;
}
.side {
  grid-area: sidebar;
  background-color: #1e293b;
  color: white;
  padding: 20px;
  text-align: center;
}
.body {
  grid-area: main;
  background-color: #f1f5f9;
  padding: 20px;
}`,starterCss:`.dashboard {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
  font-family: sans-serif;
  /* 1. กำหนดสไตล์วาดแผนผังที่นี่ */
  
}
.side {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  text-align: center;
  /* 2. ผูกพื้นที่ sidebar */
  
}
.body {
  background-color: #f1f5f9;
  padding: 20px;
  /* 3. ผูกพื้นที่ main */
  
}`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return n.includes(`grid-template-areas`)?!n.includes(`grid-area:sidebar`)&&!n.includes(`grid-area:"sidebar"`)?`กรุณาผูกคลาส .side เข้ากับ sidebar`:!n.includes(`grid-area:main`)&&!n.includes(`grid-area:"main"`)?`กรุณาผูกคลาส .body เข้ากับ main`:!0:`ขาดคุณสมบัติ grid-template-areas ใน .dashboard`},hints:["แม่: `grid-template-areas: 'sidebar main';`","ลูกซ้าย: `grid-area: sidebar;`","ลูกขวา: `grid-area: main;`"]},{id:`css-variables-scoping`,title:`34. ตัวแปรเก็บสีส่วนกลาง (CSS Variables Scoping)`,category:`5. Responsive & Advanced`,description:"การประกาศตัวแปรส่วนกลางของหน้าเพจเพื่อแก้ไขได้ง่ายในจุดเดียว:\n- มักประกาศไว้ในระดับขอบเขตสูงสุด `:root { --primary-color: #3b82f6; }`\n- ดึงมาใช้งานด้วยฟังก์ชัน `var(--primary-color)`\n\n**เป้าหมาย:**\n1. ในบล็อก `:root` ประกาศตัวแปร `--brand-color: #ec4899;` (สีชมพู)\n2. ในคลาส `.badge` ให้ดึงตัวแปรมาตกแต่งสีพื้นหลัง (`background-color: var(--brand-color);`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <span class="badge">ป้ายลดราคา</span>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <span class="badge">ป้ายลดราคา</span>
</body>
</html>`,targetCss:`:root {
  --brand-color: #ec4899;
}
.badge {
  padding: 6px 12px;
  color: white;
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: bold;
  background-color: var(--brand-color);
}`,starterCss:`:root {
  /* 1. ประกาศตัวแปรสียี่ห้อ --brand-color */
  
}
.badge {
  padding: 6px 12px;
  color: white;
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: bold;
  /* 2. ดึงตัวแปรมาใช้ใส่สีพื้นหลัง */
  
}`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return!n.includes(`--brand-color:#ec4899`)&&!n.includes(`--brand-color:rgb(236,72,153)`)?`กรุณาประกาศตัวแปร --brand-color ให้ถูกต้อง`:n.includes(`var(--brand-color)`)?!0:`อย่าลืมดึงตัวแปรมาใช้ด้วยการพิมพ์ var(--brand-color)`},hints:[`:root { --brand-color: #ec4899; }`,`.badge { background-color: var(--brand-color); }`]},{id:`css-pseudo-classes`,title:`35. สถานะตอบสนองปุ่มเมาส์ (Pseudo-classes hover & active)`,category:`5. Responsive & Advanced`,description:"การดีไซน์การปฏิสัมพันธ์เมื่อผู้ใช้สั่งกดหรือชี้เมาส์:\n- `:hover` : เมื่อชี้เมาส์\n- `:active` : เมื่อกดเมาส์ค้างไว้\n\n**เป้าหมาย:**\nตกแต่งปุ่ม `.btn` ดังนี้:\n1. ชี้เมาส์ (`.btn:hover`) ให้เปลี่ยนสีพื้นหลังเป็นแดงเข้ม `#be123c`\n2. สเตทกดคลิกค้าง (`.btn:active`) ให้ย่อขนาดปุ่มลงโดยระบุ `transform: scale(0.95);` เพื่อสร้างแรงกดดันความสมจริง",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">กดปุ่ม</button>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">กดปุ่ม</button>
</body>
</html>`,targetCss:`.btn {
  background-color: #f43f5e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
.btn:hover {
  background-color: #be123c;
}
.btn:active {
  transform: scale(0.95);
}`,starterCss:`.btn {
  background-color: #f43f5e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

/* 1. สไตล์เมื่อ hover */


/* 2. สไตล์เมื่อ active */
`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return!n.includes(`.btn:hover`)&&!n.includes(`button:hover`)?`กรุณาเพิ่ม CSS Rule สำหรับ .btn:hover`:!n.includes(`.btn:active`)&&!n.includes(`button:active`)?`กรุณาเพิ่ม CSS Rule สำหรับ .btn:active`:n.includes(`scale(0.95)`)?!0:`อย่าลืมระบุ transform: scale(0.95); ตอนกดคลิกปุ่ม`},hints:[`.btn:hover { background-color: #be123c; }`,`.btn:active { transform: scale(0.95); }`]},{id:`css-pseudo-elements`,title:`36. กล่องโครงสร้างตัวตนเสมือน (Pseudo-elements ::after)`,category:`5. Responsive & Advanced`,description:'การวาดภาพหรือเส้นเสมือนออกมาด้วย CSS โดยไม่แตะต้องเอกสาร HTML:\n- แท็ก `::after` หรือ `::before`\n- ต้องกำหนดคุณสมบัติ `content: "";` ไว้ด้วยเสมอไม่เช่นนั้นจะไม่เรนเดอร์\n\n**เป้าหมาย:**\nสร้างสติกเกอร์รูปวงกลมสีเขียว (`.status::after`) ต่อท้ายข้อความเพื่อแสดงสเตตัสออนไลน์:\n1. ตั้งค่าสไตล์ `.status::after` ให้กำหนด `content: "";`\n2. ระบุความกว้างความสูง `width: 8px; height: 8px; background-color: #22c55e;` และความโค้งมน `border-radius: 50%;`\n3. ลอยวัตถุด้วย `display: inline-block; margin-left: 8px;`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="status">สถานะเซิร์ฟเวอร์</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="status">สถานะเซิร์ฟเวอร์</div>
</body>
</html>`,targetCss:`.status { font-family: sans-serif; font-weight: bold; }
.status::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  margin-left: 8px;
}`,starterCss:`.status { font-family: sans-serif; font-weight: bold; }

/* 1. ตกแต่งกล่องเสมือนต่อท้าย status ด้วย ::after */
.status::after {
  
}`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return!n.includes(`::after`)&&!n.includes(`:after`)?`กรุณาใช้งาน pseudo-element ::after`:n.includes(`content:`)?n.includes(`border-radius:50%`)?!0:`อย่าลืมคุมขอบกลม border-radius: 50% ให้กล่องปุ่มเขียว`:`อย่าลืมระบุคุณสมบัติ content: ''; (หรือ content: "";) ให้เสร็จสิ้น`},hints:[`.status::after { content: ''; display: inline-block; width: 8px; height: 8px; background-color: #22c55e; border-radius: 50%; margin-left: 8px; }`]},{id:`css-media-queries`,title:`37. ปรับขนาดสไตล์ตามหน้าต่างอุปกรณ์ (Media Queries)`,category:`5. Responsive & Advanced`,description:"การเขียนกติกาคัดกรองขอบกว้างหน้าจอ:\n- `@media (max-width: 768px)` ครอบคำสั่งสำหรับอุปกรณ์หน้าจอแคบ (เช่น ไอแพดหรือมือถือ)\n\n**เป้าหมาย:**\nจัดให้ `.content-box` สลับสไตล์เปลี่ยนพื้นหลังเป็นสีเหลืองอ่อน `#fef9c3` เฉพาะเมื่อเปิดจอบราวเซอร์ที่มีความกว้าง **ไม่เกิน 768px**:\n1. เขียนบล็อกมีเดียคิวรี `@media (max-width: 768px) { ... }`\n2. ด้านในระบุคลาส `.content-box` และใส่สีพื้นหลังเป็น `background-color: #fef9c3;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="content-box">ข้อมูลปรับตามความเหมาะสมของอุปกรณ์</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="content-box">ข้อมูลปรับตามความเหมาะสมของอุปกรณ์</div>
</body>
</html>`,targetCss:`.content-box {
  padding: 20px;
  background-color: #e0f2fe;
  font-family: sans-serif;
  border-radius: 6px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .content-box {
    background-color: #fef9c3;
  }
}`,starterCss:`.content-box {
  padding: 20px;
  background-color: #e0f2fe;
  font-family: sans-serif;
  border-radius: 6px;
  font-weight: bold;
}

/* 1. พิมพ์กฎ @media ตรวจหา max-width 768px ด้านล่างนี้ */
`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return n.includes(`@media(max-width:768px)`)?!n.includes(`background-color:#fef9c3`)&&!n.includes(`background-color:rgb(254,249,195)`)?`กรุณากำหนดพื้นหลังเหลืองอ่อน #fef9c3 ภายใต้ขอบเงื่อนไขหน้าจอแคบ`:!0:`กรุณาใช้ @media (max-width: 768px) ในไฟล์ CSS`},hints:["ลากกติกาล่างสุด: `@media (max-width: 768px) { .content-box { background-color: #fef9c3; } }`"]},{id:`css-auto-grid`,title:`38. จัดตารางยืดหดยกกำลังไม่ต้องพึ่งคิวรี (Auto Grid minmax)`,category:`5. Responsive & Advanced`,description:"การผสานสูตรขั้นเทพคุมระยะช่องตารางให้เลื่อนไหลแบบ Responsive อัตโนมัติ:\n- `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));`\n\n**เป้าหมาย:**\nจัดคลาส `.auto-grid` ให้มีระบบคำนวณแบ่งช่องคอลัมน์กว้างอย่างน้อยที่สุด `140px` และหดขยายกว้างเท่ากันยืดหยุ่น:\n1. เปิดการทำงาน `display: grid;`\n2. สั่งแบ่งช่องคอลัมน์อัตโนมัติ: `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="auto-grid">
  <div class="cell">ช่อง 1</div>
  <div class="cell">ช่อง 2</div>
  <div class="cell">ช่อง 3</div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="auto-grid">
  <div class="cell">ช่อง 1</div>
  <div class="cell">ช่อง 2</div>
  <div class="cell">ช่อง 3</div>
</div>
</body>
</html>`,targetCss:`.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}
.cell {
  background-color: #10b981;
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 6px;
}`,starterCss:`.auto-grid {
  /* 1. จัดระบบกริดขยายตัวอัตโนมัติที่นี่ */
  
}
.cell {
  background-color: #10b981;
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 6px;
}`,validation:e=>{let t=e.querySelector(`.auto-grid`);if(!t)return`ไม่พบคลาส .auto-grid`;let n=e.defaultView.getComputedStyle(t);return n.display===`grid`?!n.gridTemplateColumns.includes(`px`)&&!n.gridTemplateColumns.includes(`fr`)?`กรุณาพิมพ์สูตร repeat(auto-fit, minmax(140px, 1fr)) ใน CSS`:!0:`กรุณาใส่สไตล์ display: grid;`},hints:["พิมพ์: `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));` ในคลาส .auto-grid"]},{id:`css-transitions-timing`,title:`39. ระยะเวลาการเปลี่ยนผ่าน (Transition Timing)`,category:`6. Transitions & Animations`,description:"การหน่วงสปีดเอฟเฟกต์การแสดงสไตล์เพื่อลบล้างความหยาบกระด้าง:\n- `transition-duration` : ระบุระยะเวลา เช่น `0.3s` (300 มิลลิวินาที)\n- `transition-property` : เลือกสไตล์ที่จะคุมหน่วงเวลา\n- รูปแบบย่อสากล: `transition: all 0.3s ease-in-out;`\n\n**เป้าหมาย:**\nตกแต่งปุ่ม `.btn` ให้หน่วงการเคลื่อนไหวเปลี่ยนผ่านสไตล์ความกว้างและสีอย่างลื่นไหล:\n1. ระบุ `transition: all 0.3s ease-in-out;`\n2. เปลี่ยนแปลงความกว้างของปุ่มเมื่อเมาส์ชี้ (`.btn:hover`) ไปที่ความกว้าง `180px`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">ยืดความกว้างปุ่ม</button>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">ยืดความกว้างปุ่ม</button>
</body>
</html>`,targetCss:`.btn {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 140px;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  width: 180px;
  background-color: #6d28d9;
}`,starterCss:`.btn {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 140px;
  /* 1. ใส่สไตล์หน่วงทรานซิชันลื่นไหล */
  
}
.btn:hover {
  /* 2. เปลี่ยนความกว้างยืดออก */
  
}`,validation:(e,t)=>{let n=e.querySelector(`.btn`);return n?e.defaultView.getComputedStyle(n).transitionDuration===`0s`?`กรุณาระบุระยะทรานซิชัน transition: all 0.3s ease-in-out;`:t.replace(/\s+/g,``).includes(`width:180px`)?!0:`อย่าลืมยืดกว้าง width: 180px; ตอนชี้เมาส์บอร์ด`:`ไม่พบปุ่ม .btn`},hints:[`.btn { transition: all 0.3s ease-in-out; }`,`.btn:hover { width: 180px; background-color: #6d28d9; }`]},{id:`css-keyframes-infinite`,title:`40. อนิเมชันเคลื่อนไหวต่อเนื่อง (Keyframes Animation)`,category:`6. Transitions & Animations`,description:"การทำแอนิเมชันเคลื่อนขยับหรือเต้นตามสัดส่วนคีย์เฟรมอย่างสมบูรณ์:\n- `@keyframes ชื่องาน { 0% { ... } 100% { ... } }`\n- ผูกใช้งาน: `animation: ชื่องาน 1.5s infinite;` (`infinite` สั่งให้เต้นวนซ้ำไม่หยุด)\n\n**เป้าหมาย:**\nสร้างลูกเล่นการ์ดหัวใจเต้นขยับยืดหด (`pulse`):\n1. สร้างแอนิเมชันชื่องาน `pulse` โดยกำหนดจุด `0%` มี `transform: scale(1);` และ `50%` มี `transform: scale(1.1);` และกลับสู่ `100%` มี `transform: scale(1);`\n2. ผูกในคลาส `.pulse-box` ให้ขยับระยะเวลา `1.5s` แบบลูปต่อเนื่องไม่สิ้นสุด (`infinite`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pulse-box">❤️ หัวใจเต้น</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pulse-box">❤️ หัวใจเต้น</div>
</body>
</html>`,targetCss:`.pulse-box {
  display: inline-block;
  padding: 15px 25px;
  background: white;
  border: 1px solid #ffccd5;
  color: #e11d48;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 20px;
  animation: pulse 1.5s infinite ease-in-out;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`,starterCss:`.pulse-box {
  display: inline-block;
  padding: 15px 25px;
  background: white;
  border: 1px solid #ffccd5;
  color: #e11d48;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 20px;
  /* 2. ผูกแอนิเมชันชื่องาน pulse เต้นต่อเนื่อง */
  
}

/* 1. เขียนคีย์เฟรมแอนิเมชันชื่องาน pulse */
`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return!n.includes(`@keyframespulse`)&&!n.includes(`keyframespulse`)?`ขาดโครงสร้างหลักสิทธิ์ @keyframes pulse`:n.includes(`scale(1.1)`)?!n.includes(`pulse`)||!n.includes(`infinite`)?`ระบุเชื่อมสไตล์แอนิเมชันและตั้งลูปวนลูปไร้ขอบเขต (infinite)`:!0:`อย่าลืมยืดสัดส่วน scale(1.1) ในคีย์เฟรม 50%`},hints:[`@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }`,`.pulse-box { animation: pulse 1.5s infinite ease-in-out; }`]},{id:`css-validation-states`,title:`41. สีเตือนเมื่อป้อนข้อมูลผิด (Form Validation States)`,category:`6. Transitions & Animations`,description:"การตรวจสอบความถูกต้องของข้อมูล (Email format) สดๆ โดยแจ้งสีขอบกล่องอินพุตเป็นสีแดงเพื่อเตือนสายตา:\n- `input:invalid` : สเตทเมื่อคีย์ข้อมูลในอินพุตไม่ผ่านความถูกต้อง (เช่น พิมพ์เมลไม่มี @)\n- `input:focus` : สเตทกรอบเวลากดเลือกพิมพ์\n\n**เป้าหมาย:**\nตกแต่งให้ช่องป้อนอินพุต `.field` ขยับสีเตือนผู้ใช้:\n1. สเตทพิมพ์ผิดพลาด (`.field:invalid`) ให้ระบุสีเส้นขอบเป็นสีส้มแดง `#f97316`\n2. สเตทโฟกัสพิมพ์สปอร์ตไลท์ (`.field:focus`) ให้ระบุเส้นขอบเป็นสีฟ้านีออน `#06b6d4`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form style="max-width: 280px;">
  <input type="email" required placeholder="name@email.com" class="field">
</form>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form style="max-width: 280px;">
  <input type="email" required placeholder="name@email.com" class="field">
</form>
</body>
</html>`,targetCss:`.field {
  width: 100%;
  padding: 10px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}
.field:invalid {
  border-color: #f97316;
}
.field:focus {
  border-color: #06b6d4;
}`,starterCss:`.field {
  width: 100%;
  padding: 10px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}

/* 1. สไตล์ขอบเมื่อพิมพ์ผิดฟอร์แมต */


/* 2. สไตล์ขอบเมื่อเลือกพิมพ์ */
`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);return n.includes(`:invalid`)?n.includes(`:focus`)?!0:`กรุณาระบุ CSS rule สำหรับสถานะ :focus`:`กรุณาระบุ CSS rule สำหรับสถานะ :invalid`},hints:[`.field:invalid { border-color: #f97316; }`,`.field:focus { border-color: #06b6d4; }`]},{id:`css-specificity`,title:`42. น้ำหนักความสำคัญของตัวเลือก (CSS Specificity)`,category:`3. CSS Basics`,description:`เรียนรู้กฎเหล็กเรื่องลำดับการประมวลผลและการเอาชนะของสไตล์ (Specificity) เมื่อองค์ประกอบมีหลายตัวเลือกสั่งการทับซ้อนกัน

กฎค่าน้ำหนักความสำคัญสากล (เรียงจากสูงไปต่ำ):
1. **ID Selector** (เช่น \`#main-title\`) : ค่าน้ำหนัก 100 คะแนน (ชนะเสมอในการจับคู่ทั่วไป)
2. **Class Selector** (เช่น \`.highlight\`) : ค่าน้ำหนัก 10 คะแนน
3. **Tag Selector** (เช่น \`h1\`) : ค่าน้ำหนัก 1 คะแนน

**เป้าหมาย:**
จงเขียน CSS 3 ชุดเพื่อระบายสีข้อความหัวข้อ \`<h1>\` ดังนี้:
1. ใช้ **Tag Selector** ระบายสีข้อความเป็น **สีเขียว (#10b981)**
2. ใช้ **Class Selector** ระบายสีข้อความเป็น **สีน้ำเงิน (#3b82f6)**
3. ใช้ **ID Selector** ระบายสีข้อความเป็น **สีส้ม (#f97316)**
*(สังเกตผลลัพธ์พรีวิวว่า สีส้มจาก ID จะชนะตัวเลือกคลาสและแท็กเสมอแม้จะเขียนไว้บรรทัดแรกสุด)*`,starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1 id="main-title" class="highlight">สวัสดีชาวโลก</h1>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1 id="main-title" class="highlight">สวัสดีชาวโลก</h1>
</body>
</html>`,targetCss:`h1 { color: #10b981; }
.highlight { color: #3b82f6; }
#main-title { color: #f97316; }`,starterCss:`/* 1. เขียนระบายสีเขียว (#10b981) ด้วย Tag Selector (h1) */


/* 2. เขียนระบายสีน้ำเงิน (#3b82f6) ด้วย Class Selector (.highlight) */


/* 3. เขียนระบายสีส้ม (#f97316) ด้วย ID Selector (#main-title) */`,validation:(e,t)=>{let n=e.querySelector(`h1`);if(!n)return`ห้ามลบแท็ก <h1>`;let r=t.replace(/\s+/g,``);if(!r.includes(`h1{color:#10b981`)&&!r.includes(`h1{color:rgb(16,185,129)`))return`กรุณาใส่ Tag Selector h1 และกำหนดสีเป็น #10b981`;if(!r.includes(`.highlight{color:#3b82f6`)&&!r.includes(`.highlight{color:rgb(59,130,246)`))return`กรุณาใส่ Class Selector .highlight และกำหนดสีเป็น #3b82f6`;if(!r.includes(`#main-title{color:#f97316`)&&!r.includes(`#main-title{color:rgb(249,115,22)`))return`กรุณาใส่ ID Selector #main-title และกำหนดสีเป็น #f97316`;let i=e.defaultView.getComputedStyle(n).color;return i!==`rgb(249, 115, 22)`&&i!==`#f97316`?`ค่าน้ำหนักสีส้มจาก ID ยังทำงานไม่ถูกต้อง`:!0},hints:[`เขียน h1 { color: #10b981; } ต่อด้วย .highlight { color: #3b82f6; } และ #main-title { color: #f97316; }`]},{id:`css-flex-grow`,title:`43. การขยายและยืดกล่องยืดหยุ่น (Flex Grow & Fill)`,category:`4. CSS Layouts`,description:"เรียนรู้การทำให้กล่องย่อยลูกยืดหยุ่นขยายพื้นที่เพื่อเติมช่องว่างที่เหลืออยู่ในแถว Flexbox container ด้วยคำสั่ง `flex-grow`\n\nคุณสมบัติสำคัญ:\n- `flex-grow: 1;` (หรือคำสั่งย่อ `flex: 1;`) : ระบุให้องค์ประกอบขยายตัวยึดครองพื้นที่ว่างในแนวนอนที่เหลือทั้งหมด\n- มักนิยมใช้ทำช่องค้นหาข้อมูล (Search Bar) หรือเนื้อหาตรงกลางที่ต้องการให้ยืดขยายตามขนาดหน้าต่าง โดยที่ปุ่มด้านซ้ายและขวามีขนาดคงที่เท่าเดิม\n\n**เป้าหมาย:**\nทำให้ช่องแสดงข้อความค้นหาข้อมูลที่มีคลาส `.search-bar` ขยายกว้างเต็มพื้นที่ของแถบนำทางที่เหลืออยู่",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="navbar">
  <div class="logo">LOGO</div>
  <div class="search-bar">พิมพ์ค้นหาที่นี่...</div>
  <button class="login-btn">เข้าสู่ระบบ</button>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="navbar">
  <div class="logo">LOGO</div>
  <div class="search-bar">พิมพ์ค้นหาที่นี่...</div>
  <button class="login-btn">เข้าสู่ระบบ</button>
</div>
</body>
</html>`,targetCss:`.navbar {
  display: flex;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
}
.logo {
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
}
.search-bar {
  background-color: white;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: #64748b;
  flex-grow: 1;
}
.login-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}`,starterCss:`.navbar {
  display: flex;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
}
.logo {
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
}
.search-bar {
  background-color: white;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: #64748b;
  /* 1. ใส่ CSS เพื่อขยายขนาดช่องค้นหานี้ให้เติมพื้นที่ว่างทั้งหมด */
  
}
.login-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}`,validation:(e,t)=>{if(!e.querySelector(`.search-bar`))return`ไม่พบช่องค้นหาคลาส .search-bar`;let n=t.replace(/\s+/g,``);return!n.includes(`flex-grow:1`)&&!n.includes(`flex:1`)?`กรุณาระบุ flex-grow: 1; หรือ flex: 1; ให้กับคลาส .search-bar`:!0},hints:[`ระบุ flex-grow: 1; หรือ flex: 1; ไว้ในบล็อกสไตล์ .search-bar เพื่อขยายสเปก Layout แนวนอน`]},{id:`css-universal-reset`,title:`44. ตัวเลือกครอบจักรวาลและการล้างระยะขอบ (Universal Selector & Global Reset)`,category:`3. CSS Basics`,description:"เรียนรู้การล้างค่าดีฟอลต์ (Style Reset) ที่เบราว์เซอร์ติดตัวมาด้วย และบังคับให้การนับพื้นที่กล่องทั้งระบบเป็นแบบบอร์ดเดอร์บล็อกโดยใช้ตัวเลือกครอบจักรวาล `*`\n\nคุณสมบัติสำคัญ:\n- ตัวเลือกครอบจักรวาล `*` (Universal Selector) : แทนทุกแท็กอักขระในหน้าเอกสาร\n- นักพัฒนาเว็บมืออาชีพจะทำสิ่งนี้เป็นบรรทัดแรกของโปรเจกต์ เพื่อกำจัดระยะห่างส่วนเกินและจัดระเบียบสัดส่วน\n\n**เป้าหมาย:**\nจงเขียนตัวเลือกครอบจักรวาล `*` เพื่อสั่งการตั้งค่าดังนี้:\n1. รีเซ็ตระยะห่างขอบภายนอก `margin: 0;`\n2. รีเซ็ตระยะห่างขอบภายใน `padding: 0;`\n3. ตั้งระบบกล่องเป็น `box-sizing: border-box;` ทั้งระบบ",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
  <h2>กล่องทดสอบสากล</h2>
  <p>ระยะห่างดีฟอลต์ภายนอกและภายในต้องกลายเป็นศูนย์ทั้งหมด</p>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
  <h2>กล่องทดสอบสากล</h2>
  <p>ระยะห่างดีฟอลต์ภายนอกและภายในต้องกลายเป็นศูนย์ทั้งหมด</p>
</div>
</body>
</html>`,targetCss:`* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f1f5f9;
}
.card {
  background: white;
  border: 5px solid #3b82f6;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}`,starterCss:`/* 1. ประกาศ Universal Selector (*) และเขียนเคลียร์ค่า margin, padding และ box-sizing ให้ครบ */


body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f1f5f9;
}
.card {
  background: white;
  border: 5px solid #3b82f6;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}`,validation:(e,t)=>{let n=t.replace(/\s+/g,``);if(!n.includes(`*{`)&&!n.includes(`*,*::before,*::after{`))return`กรุณาเริ่มต้นด้วยการประกาศตัวเลือกครอบจักรวาล *`;if(!n.includes(`margin:0`)&&!n.includes(`margin:0px`))return`กรุณาล้างระยะห่างภายนอกด้วย margin: 0;`;if(!n.includes(`padding:0`)&&!n.includes(`padding:0px`))return`กรุณาล้างระยะห่างภายในด้วย padding: 0;`;if(!n.includes(`box-sizing:border-box`))return`กรุณากำหนดการจัดระบบพิกเซลกล่องด้วย box-sizing: border-box;`;let r=e.querySelector(`h2`);if(r){let t=e.defaultView.getComputedStyle(r);if(t.marginTop!==`0px`||t.paddingTop!==`0px`)return`ระยะห่างเริ่มต้นรอบหัวข้อ h2 ยังไม่ได้ถูกล้างค่าให้เหลือศูนย์`}return!0},hints:[`พิมพ์: * { box-sizing: border-box; margin: 0; padding: 0; } ที่บรรทัดแรกสุดของแท็บ CSS`]},{id:`css-layout-float`,title:`45. การไหลของข้อความล้อมรอบรูปภาพ (CSS Float & Text Wrap)`,category:`4. CSS Layouts`,description:"เรียนรู้การใช้งานคุณสมบัติ `float` ซึ่งเป็นคำสั่งดั้งเดิมที่มีความสำคัญมากในการทำให้อักษรหรือข้อความต่าง ๆ ไหลโอบล้อมรอบรูปภาพ (Text Wrapping) เหมือนกับการจัดหน้าคอลัมน์ในนิตยสารหรือข่าวสารต่าง ๆ\n\nคุณสมบัติและพารามิเตอร์สำคัญ:\n- `float: left;` : สั่งให้กล่องหรือรูปภาพลอยไปเกาะติดขอบซ้าย และให้ข้อความย่อหน้าที่ตามมาไหลอ้อมรอบทางด้านขวาและด้านล่าง\n- `float: right;` : สั่งให้กล่องหรือรูปภาพลอยไปเกาะติดขอบขวา และให้ข้อความย่อหน้าที่ตามมาไหลอ้อมรอบทางด้านซ้ายและด้านล่าง\n- `margin-left` / `margin-bottom` / `margin-right` : ใช้ร่วมกับ float เพื่อเว้นระยะช่องไฟที่เหมาะสม ไม่ให้ตัวหนังสือไหลมาชนติดขอบรูปภาพจนอ่านยาก\n\n**เป้าหมาย:**\nทำให้ภาพประกอบคลาส `.avatar-float` ลอยตัวไปติดขอบทางขวาของการ์ด และมีระยะช่องไฟที่เหมาะสม:\n1. กำหนดคุณสมบัติให้ภาพลอยชิดขวา (`float: right;`)\n2. กำหนดระยะห่างรอบภาพเพื่อเว้นขอบตัวหนังสือ (`margin-left: 15px;` และ `margin-bottom: 10px;`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-box">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" class="avatar-float" alt="Tutor Photo">
  <p>ยินดีต้อนรับสู่หลักสูตรพัฒนาเว็บดีไซน์ ในบทเรียนย่อยนี้เราจะได้ลองจัดสเปกหน้าบทความที่แทรกรูปภาพ โดยการเปิดใช้งานคุณสมบัติ float เพื่อให้ข้อความตัวหนังสือไหลโอบล้อมรูปภาพอย่างเหมาะสม สวยงาม และดูมีระดับเป็นธรรมชาติ</p>
  <p>หากไม่มีการสั่งค่า float รูปภาพจะจองพื้นที่เป็นแถวใหม่หรือเรียงซ้อนแบบผิดปกติ แต่เมื่อสั่ง float แล้ว บราว์เซอร์จะดันตัวหนังสือให้ไหลเข้ามาแชร์พื้นที่ว่างรอบๆ รูปภาพอย่างสวยงาม</p>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-box">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" class="avatar-float" alt="Tutor Photo">
  <p>ยินดีต้อนรับสู่หลักสูตรพัฒนาเว็บดีไซน์ ในบทเรียนย่อยนี้เราจะได้ลองจัดสเปกหน้าบทความที่แทรกรูปภาพ โดยการเปิดใช้งานคุณสมบัติ float เพื่อให้ข้อความตัวหนังสือไหลโอบล้อมรูปภาพอย่างเหมาะสม สวยงาม และดูมีระดับเป็นธรรมชาติ</p>
  <p>หากไม่มีการสั่งค่า float รูปภาพจะจองพื้นที่เป็นแถวใหม่หรือเรียงซ้อนแบบผิดปกติ แต่เมื่อสั่ง float แล้ว บราว์เซอร์จะดันตัวหนังสือให้ไหลเข้ามาแชร์พื้นที่ว่างรอบๆ รูปภาพอย่างสวยงาม</p>
</div>
</body>
</html>`,targetCss:`body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}
.article-box {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  line-height: 1.6;
  color: #334155;
}
.avatar-float {
  float: right;
  margin-left: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 2px solid #3b82f6;
}`,starterCss:`body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}
.article-box {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  line-height: 1.6;
  color: #334155;
}
.avatar-float {
  border-radius: 8px;
  border: 2px solid #3b82f6;
  /* 1. กำหนดให้รูปภาพลอยชิดขวา */
  
  /* 2. กำหนดระยะห่าง margin ด้านซ้าย 15px และด้านล่าง 10px */
  
}`,validation:(e,t)=>{let n=e.querySelector(`.avatar-float`);if(!n)return`ไม่พบรูปภาพคลาส .avatar-float`;let r=e.defaultView.getComputedStyle(n);if(r.float!==`right`)return`กรุณากำหนดให้รูปภาพลอยชิดขวาด้วย float: right;`;let i=parseFloat(r.marginLeft),a=parseFloat(r.marginBottom);return isNaN(i)||i<14||isNaN(a)||a<9?`อย่าลืมเว้นช่องไฟรอบภาพด้วย margin-left: 15px; และ margin-bottom: 10px;`:!0},hints:["เขียนสไตล์: `float: right; margin-left: 15px; margin-bottom: 10px;` ในคลาส .avatar-float"]},{id:`css-text-overflow`,title:`46. การจัดข้อความล้นกล่องและจุดไข่ปลา (CSS Text Overflow & Ellipsis)`,category:`3. CSS Basics`,description:"เมื่อมีข้อความที่ยาวเกินขนาดความกว้างของกล่องคอนเทนเนอร์ (เช่น หัวข้อข่าวสาร, ชื่อสินค้า หรือชื่อผู้ใช้) ข้อความนั้นจะล้นขอบออกมานอกกล่องจนทำให้โครงสร้างหน้าเว็บเสียหาย วิธีแก้ปัญหายอดนิยมคือการตัดคำและแสดงจุดไข่ปลา (`...`) ที่ท้ายบรรทัด\n\nคุณสมบัติ CSS 3 ประการที่จำเป็นต้องทำงานร่วมกัน (ขาดอย่างใดอย่างหนึ่งไม่ได้):\n- `white-space: nowrap;` : บังคับให้ข้อความทั้งหมดอยู่ในบรรทัดเดียว ไม่ขึ้นบรรทัดใหม่\n- `overflow: hidden;` : ซ่อนข้อความส่วนที่ยื่นล้นออกนอกกล่อง\n- `text-overflow: ellipsis;` : ใส่จุดไข่ปลา (`...`) แทนข้อความส่วนที่ถูกซ่อน\n\n**เป้าหมาย:**\nทำให้ข้อความในส่วนหัวเรื่องคลาส `.title-truncate` ถูกตัดขอบและแสดงจุดไข่ปลาเมื่อข้อความล้นกล่องการ์ดที่มีความกว้าง 280px\n1. กำหนด `white-space: nowrap;`\n2. กำหนด `overflow: hidden;`\n3. กำหนด `text-overflow: ellipsis;`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <h3 class="title-truncate">เรียนรู้วิธีการเขียนเว็บสไตล์โปรเพสชันนอลและเทคนิคการเขียน CSS ให้มีประสิทธิภาพสูงสุดสำหรับนักพัฒนาปี 2026</h3>
      <p class="desc">บทเรียนการทำ Text Overflow ตัดคำแสดงจุดไข่ปลา</p>
    </div>
  </div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <h3 class="title-truncate">เรียนรู้วิธีการเขียนเว็บสไตล์โปรเพสชันนอลและเทคนิคการเขียน CSS ให้มีประสิทธิภาพสูงสุดสำหรับนักพัฒนาปี 2026</h3>
      <p class="desc">บทเรียนการทำ Text Overflow ตัดคำแสดงจุดไข่ปลา</p>
    </div>
  </div>
</body>
</html>`,targetCss:`body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
  display: flex;
  justify-content: center;
}
.card {
  background: white;
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
}
.card-image {
  height: 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
.card-content {
  padding: 16px;
}
.title-truncate {
  font-size: 16px;
  color: #1e293b;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}`,starterCss:`body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
  display: flex;
  justify-content: center;
}
.card {
  background: white;
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
}
.card-image {
  height: 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
.card-content {
  padding: 16px;
}
.title-truncate {
  font-size: 16px;
  color: #1e293b;
  margin: 0 0 8px 0;
  
  /* 1. สั่งห้ามข้อความขึ้นบรรทัดใหม่ */
  
  /* 2. ซ่อนข้อความส่วนที่ล้นออกไป */
  
  /* 3. แสดงจุดไข่ปลา (...) ท้ายข้อความ */
  
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}`,validation:(e,t)=>{let n=e.querySelector(`.title-truncate`);if(!n)return`ไม่พบหัวเรื่องคลาส .title-truncate`;let r=e.defaultView.getComputedStyle(n);return r.whiteSpace===`nowrap`?r.overflow===`hidden`?r.textOverflow===`ellipsis`||`กรุณากำหนดคุณสมบัติ text-overflow เป็น ellipsis เพื่อเพิ่มจุดไข่ปลา (...) ปิดท้าย`:`กรุณากำหนดคุณสมบัติ overflow เป็น hidden เพื่อซ่อนคำที่ล้นกล่อง`:`กรุณากำหนดคุณสมบัติ white-space เป็น nowrap เพื่อบังคับให้อักษรเรียงบรรทัดเดียว`},hints:["เขียนสไตล์: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` ในคลาส .title-truncate"]}],challenges:[{id:`challenge-profile-card`,title:`ภารกิจที่ 1: Profile Card (การ์ดประวัติส่วนตัว)`,difficulty:`Beginner`,points:100,description:"**จงสร้างการ์ดโปรไฟล์ให้เหมือนตัวอย่าง โดยไม่ดูโค้ด**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- คลาสหลัก `.profile-card` มีความกว้าง `320px`, พื้นหลังขาว, ขอบมน `16px`, และเงาด้านหลังที่นุ่มนวล\n- ใช้แท็กรูปภาพ `<img>` คลาส `avatar` โดยดึงรูปภาพจากลิงก์เฉพาะนี้:\n  **`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop`** (ต้องระบุขอบโค้งมนเป็นวงกลมสมบูรณ์)\n- มีหัวข้อ `<h2>` เขียนชื่อ: `ศิรินทร์ แก้วมณี`\n- มีแท็กย่อหน้า `<p>` คลาส `role` เขียนบทบาท: `UI/UX Designer`\n- มีแท็กย่อหน้า `<p>` คลาส `bio` เขียนคำบรรยาย: `ผู้รักการออกแบบและพัฒนาส่วนติดต่อผู้ใช้งานที่เรียบง่ายและเป็นธรรมชาติ`\n- มีกลุ่มปุ่มคลาส `actions` ประกอบด้วยแท็ก `<button>` คลาส `btn-primary` (ข้อความ: `ติดตาม`) และคลาส `btn-secondary` (ข้อความ: `ข้อความ`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบหน้าต่างการ์ดโปรไฟล์ของคุณที่นี่ -->
<div class="profile-card">
  <!-- ใส่รูป avatar, ชื่อ, บทบาท, bio, และปุ่มกดให้ครบถ้วน -->
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="profile-card">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" alt="User Profile" class="avatar">
  <h2>ศิรินทร์ แก้วมณี</h2>
  <p class="role">UI/UX Designer</p>
  <p class="bio">ผู้รักการออกแบบและพัฒนาส่วนติดต่อผู้ใช้งานที่เรียบง่ายและเป็นธรรมชาติ</p>
  <div class="actions">
    <button class="btn-primary">ติดตาม</button>
    <button class="btn-secondary">ข้อความ</button>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.profile-card {
  background: white;
  width: 320px;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  box-sizing: border-box;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #f1f5f9;
  object-fit: cover;
  margin-bottom: 15px;
}

h2 {
  margin: 10px 0 5px 0;
  font-size: 22px;
  color: #1e293b;
}

.role {
  color: #2563eb;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 15px;
}

.bio {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 0 10px;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  flex: 1;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #e2e8f0;
  color: #475569;
}

.btn-secondary:hover {
  background-color: #cbd5e1;
}`,starterCss:`/* เขียนสไตล์ตกแต่งที่นี่เพื่อให้ตรงกับตัวอย่างต้นแบบ */
body {
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.profile-card {
  
}`,validation:e=>{let t=e.querySelector(`.profile-card`),n=e.querySelector(`.avatar, img`),r=e.querySelectorAll(`button`);if(!t)return`ขาด Container หลักที่มีคลาส .profile-card`;if(!n)return`กรุณาใส่รูปโปรไฟล์ (แท็ก <img>)`;let i=e.defaultView.getComputedStyle(t),a=e.defaultView.getComputedStyle(n);return parseFloat(i.borderRadius)<10?`การ์ด .profile-card ต้องมีความโค้งมนสวยงาม (border-radius)`:a.borderRadius!==`50%`&&!a.borderRadius.includes(`50px`)?`รูปภาพโปรไฟล์จะต้องมีขอบโค้งมนเป็นวงกลมสมบูรณ์ (border-radius: 50%)`:r.length<2?`กรุณาสร้างปุ่มอย่างน้อย 2 ปุ่ม (ปุ่มติดตาม และปุ่มข้อความ)`:!0}},{id:`challenge-chat-ui`,title:`ภารกิจที่ 2: Chat UI Window (หน้าจอห้องแชท)`,difficulty:`Intermediate`,points:150,description:'**จงสร้างหน้าต่างแชท (Chat Window) สไตล์โมเดิร์นตามตัวอย่าง**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- ส่วนหัว `chat-header` แสดงชื่อผู้ติดต่อ: `คุณครูสมศรี` และสถานะ `กำลังพิมพ์...` โดยมีจุดสถานะ `status-dot` สีเขียวออนไลน์\n- ข้อความแชทมี 3 ข้อความ คลาส `message` เรียงลำดับดังนี้:\n  1. ข้อความรับเข้า (`incoming`): `สวัสดีค่ะ มีข้อสงสัยเรื่อง CSS ตรงไหนถามครูได้เลยนะ`\n  2. ข้อความส่งออก (`outgoing`): `ขอบคุณครับครู ผมยังงงเรื่องการจัดตำแหน่งด้วย Flexbox อยู่ครับ`\n  3. ข้อความรับเข้า (`incoming`): `ไม่ยากเลย ลองเรียนบทเรียนที่ 5 ของเราหรือยังคะ?`\n- ส่วนพิมพ์ส่งด้านล่างคลาส `chat-footer` มีช่อง `<input type="text">` ป้ายตัวนำทาง `placeholder="พิมพ์ข้อความที่นี่..."` และปุ่ม `<button>` ข้อความ `ส่ง`\n- จัดการให้ข้อความรับและส่งแยกชิดซ้ายและขวาแยกจากกันให้ถูกต้อง',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="chat-container">
  <!-- 1. ส่วนหัว (Header) -->
  
  
  <!-- 2. ประวัติข้อความ (Messages Area) -->
  
  
  <!-- 3. ส่วนพิมพ์ส่ง (Footer) -->
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="chat-container">
  <div class="chat-header">
    <div class="user-info">
      <span class="status-dot"></span>
      <div>
        <h3>คุณครูสมศรี</h3>
        <p>กำลังพิมพ์...</p>
      </div>
    </div>
  </div>
  <div class="chat-messages">
    <div class="message incoming">สวัสดีค่ะ มีข้อสงสัยเรื่อง CSS ตรงไหนถามครูได้เลยนะ</div>
    <div class="message outgoing">ขอบคุณครับครู ผมยังงงเรื่องการจัดตำแหน่งด้วย Flexbox อยู่ครับ</div>
    <div class="message incoming">ไม่ยากเลย ลองเรียนบทเรียนที่ 5 ของเราหรือยังคะ?</div>
  </div>
  <div class="chat-footer">
    <input type="text" placeholder="พิมพ์ข้อความที่นี่...">
    <button>ส่ง</button>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.chat-container {
  width: 360px;
  height: 480px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background-color: #0f172a;
  color: white;
  padding: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background-color: #22c55e;
  border-radius: 50%;
}

.chat-header h3 {
  margin: 0;
  font-size: 16px;
}

.chat-header p {
  margin: 2px 0 0 0;
  font-size: 12px;
  color: #94a3b8;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
}

.incoming {
  background-color: #e2e8f0;
  color: #1e293b;
  align-self: flex-start;
  border-top-left-radius: 2px;
}

.outgoing {
  background-color: #2563eb;
  color: white;
  align-self: flex-end;
  border-top-right-radius: 2px;
}

.chat-footer {
  padding: 12px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 8px;
}

.chat-footer input {
  flex: 1;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  font-size: 14px;
}

.chat-footer button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #1d4ed8;
}`,starterCss:`body {
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.chat-container {
  /* สร้างกล่องแชทแนวตั้ง */
  
}`,validation:e=>{let t=e.querySelector(`.chat-container`),n=e.querySelectorAll(`.message`),r=e.querySelector(`input`),i=e.querySelector(`button`);if(!t)return`ไม่พบคลาส .chat-container สำหรับตัวคุมห้องแชทหลัก`;if(n.length<3)return`กรุณาสร้างประวัติข้อความ (.message) อย่างน้อย 3 รายการ`;if(!r||!i)return`กรุณาใส่ช่องกรอกข้อความ <input> และปุ่มส่ง <button> ในส่วน Footer`;let a=e.defaultView.getComputedStyle(t);if(a.display!==`flex`||a.flexDirection!==`column`)return`แนะนำให้ตั้งค่า .chat-container ให้มี display: flex; และ flex-direction: column;`;let o=!1,s=!1;return n.forEach(e=>{e.classList.contains(`incoming`)&&(o=!0),e.classList.contains(`outgoing`)&&(s=!0)}),!o||!s?`กรุณาใส่คลาสให้ชัดเจน เช่น .incoming สำหรับแชทเข้า และ .outgoing สำหรับแชทออก`:!0}},{id:`challenge-glassmorphism`,title:`ภารกิจที่ 3: Glassmorphic Login Form (ฟอร์มล็อกอินกระจกฝ้า)`,difficulty:`Hard`,points:200,description:'**สร้างฟอร์ม Login โปร่งแสงแนว Glassmorphism ลอยอยู่บนพื้นหลัง Gradient หลากสี**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- ฉากหลังหน้าจอมีสีไล่ระดับ `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`\n- กล่องฟอร์มหลักคลาส `login-box` มีคุณสมบัติโปร่งแสงและเบลอพื้นหลังด้วย `backdrop-filter: blur(12px);`\n- มีหัวข้อ `<h2>` เขียนว่า `เข้าสู่ระบบ`\n- มีแบบฟอร์มคลาส `input-group` สองชุด:\n  1. ช่องกรอกอีเมล: ป้ายชื่อ `<label>` เขียนว่า `อีเมล` ช่องป้อนข้อความ `<input type="email">` มีตัวนำทาง `placeholder="example@email.com"`\n  2. ช่องกรอกรหัสผ่าน: ป้ายชื่อ `<label>` เขียนว่า `รหัสผ่าน` ช่องป้อนข้อความ `<input type="password">` มีตัวนำทาง `placeholder="••••••••"`\n- ปุ่มกดคลาส `btn-login` เขียนว่า `เข้าสู่ระบบ`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="login-box">
  <!-- หัวข้อ, ฟอร์มล็อกอิน, และช่องกรอกข้อมูลแบบกระจกฝ้า -->
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="login-box">
  <h2>เข้าสู่ระบบ</h2>
  <form>
    <div class="input-group">
      <label>อีเมล</label>
      <input type="email" placeholder="example@email.com" required>
    </div>
    <div class="input-group">
      <label>รหัสผ่าน</label>
      <input type="password" placeholder="••••••••" required>
    </div>
    <button type="submit" class="btn-login">เข้าสู่ระบบ</button>
  </form>
</div>
</body>
</html>`,targetCss:`body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.login-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  width: 350px;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  color: white;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 600;
  letter-spacing: 1px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.input-group input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px;
  color: white;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-group input:focus {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.15);
}

.btn-login {
  background: white;
  color: #764ba2;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}`,starterCss:`body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.login-box {
  /* 1. ใส่สีพื้นหลังโปร่งแสง */
  
  /* 2. เบลอฉากหลังด้วย backdrop-filter */
  
  /* 3. ขอบกระจกโปร่งใส */
  
}`,validation:e=>{let t=e.querySelector(`.login-box`);if(!t)return`ไม่พบกล่องล็อกอิน .login-box`;let n=e.defaultView.getComputedStyle(t),r=n.backgroundColor,i=n.backdropFilter||n.webkitBackdropFilter;if(!r.includes(`rgba`)&&r!==`transparent`){let e=r.match(/rgba\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);if(e&&parseFloat(e[1])>=.95)return`พื้นหลัง .login-box ต้องมีความโปร่งใสบางส่วน (ใช้ rgba(255, 255, 255, 0.1) เป็นต้น)`}return!i||i===`none`?`กรุณาใส่สไตล์เบลอฉากหลัง backdrop-filter: blur(...) เพื่อสร้างลักษณะกระจกฝ้า`:!0}},{id:`challenge-pricing-table`,title:`ภารกิจที่ 4: Pricing Cards (ตารางราคาตอบสนอง)`,difficulty:`Hard`,points:200,description:"**จงสร้างตารางการ์ดราคา (Pricing Cards) 2 ใบที่ตอบสนองเมื่อผู้ใช้ชี้เมาส์**\n\nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- กล่องคุมหลัก `pricing-container` บรรจุการ์ดราคา `price-card` สองใบเรียงกันในแนวนอน:\n  1. การ์ดใบแรก (ทั่วไป):\n     - หัวข้อ `<h3>` เขียนว่า `เริ่มต้น`\n     - แถบแสดงราคา คลาส `price` เขียนว่า `฿0` และมีสแปน `<span>/เดือน</span>`\n     - รายการฟีเจอร์ คลาส `features` (ใช้แท็ก `<ul>` และ `<li>`): `เข้าเรียนเนื้อหาพื้นฐาน`, `แชทห้องสาธารณะ`, `จำกัด 3 โจทย์ความท้าทาย`\n     - ปุ่มยืนยัน คลาส `btn` ข้อความ: `เรียนฟรีเลย`\n  2. การ์ดใบที่สอง (ยอดนิยม) คลาสพิเศษ `price-card popular`:\n     - มีป้ายกำกับลอยด้านบน คลาส `badge` เขียนว่า `ยอดนิยม`\n     - หัวข้อ `<h3>` เขียนว่า `โปรแกรด`\n     - แถบแสดงราคา คลาส `price` เขียนว่า `฿299` และมีสแปน `<span>/เดือน</span>`\n     - รายการฟีเจอร์: `เข้าถึงบทเรียนทั้งหมด 100%`, `สิทธิส่งงานให้ผู้เชี่ยวชาญตรวจ`, `เข้าถึงทุกโจทย์ไม่จำกัด`\n     - ปุ่มคลาส `btn btn-popular` ข้อความ: `สมัครสมาชิกระดับโปร`\n- ใส่ Hover Effect ให้การ์ดยกตัวขึ้น `transform: translateY(-8px);` เมื่อชี้เมาส์",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pricing-container">
  <!-- ตารางการ์ดราคา 2 ใบ (มีใบหนึ่งมีคลาส .popular) -->
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pricing-container">
  <div class="price-card">
    <h3>เริ่มต้น</h3>
    <div class="price">฿0<span>/เดือน</span></div>
    <ul class="features">
      <li>เข้าเรียนเนื้อหาพื้นฐาน</li>
      <li>แชทห้องสาธารณะ</li>
      <li>จำกัด 3 โจทย์ความท้าทาย</li>
    </ul>
    <button class="btn">เรียนฟรีเลย</button>
  </div>
  <div class="price-card popular">
    <div class="badge">ยอดนิยม</div>
    <h3>โปรแกรด</h3>
    <div class="price">฿299<span>/เดือน</span></div>
    <ul class="features">
      <li>เข้าถึงบทเรียนทั้งหมด 100%</li>
      <li>สิทธิส่งงานให้ผู้เชี่ยวชาญตรวจ</li>
      <li>เข้าถึงทุกโจทย์ไม่จำกัด</li>
    </ul>
    <button class="btn btn-popular">สมัครสมาชิกระดับโปร</button>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

.pricing-container {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  box-sizing: border-box;
}

.price-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 35px 25px;
  flex: 1;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.price-card.popular {
  border: 2px solid #2563eb;
}

.popular .badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #2563eb;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
}

.price-card h3 {
  margin: 0 0 15px 0;
  color: #475569;
  font-size: 18px;
}

.price {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
}

.price span {
  font-size: 14px;
  color: #64748b;
  font-weight: normal;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex: 1;
}

.features li {
  padding: 10px 0;
  color: #475569;
  font-size: 14px;
  border-bottom: 1px solid #f1f5f9;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: transparent;
  color: #475569;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #f1f5f9;
}

.btn-popular {
  background-color: #2563eb;
  color: white;
  border: none;
}

.btn-popular:hover {
  background-color: #1d4ed8;
}

@media (max-width: 600px) {
  .pricing-container {
    flex-direction: column;
  }
}`,starterCss:`body {
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.pricing-container {
  /* วางเลย์เอาต์การ์ดเรียงแนวนอน */
  
}

.price-card {
  /* สไตล์การ์ดทั่วไป มี Transition */
  
}

.price-card:hover {
  /* ยกตัวกล่องและเพิ่มเงาเวลา Hover */
  
}

.price-card.popular {
  /* เส้นขอบสีน้ำเงินพิเศษ */
  
}`,validation:(e,t)=>{let n=e.querySelectorAll(`.price-card`),r=e.querySelector(`.price-card.popular`);if(n.length<2)return`กรุณาสร้างการ์ดราคา (.price-card) อย่างน้อย 2 ใบ`;if(!r)return`ต้องมีการ์ดใบหนึ่งระบุคลาสยอดนิยมด้วยคลาส .price-card.popular`;let i=t.replace(/\s+/g,``);return!i.includes(`translateY(-`)&&!i.includes(`translate3d(`)?`อย่าลืมเพิ่มเอฟเฟกต์ยกตัวกล่องการ์ดขึ้น เช่น transform: translateY(-8px); ในช่วง hover`:!0}},{id:`challenge-dashboard`,title:`ภารกิจที่ 5: Responsive Dashboard (แดชบอร์ดจัดการระบบ)`,difficulty:`Hard`,points:250,description:"**ภารกิจจัดเลย์เอาต์ระบบแดชบอร์ดสองมิติด้วย CSS Grid Areas และคุม Responsive**\n      \nโจทย์กำหนดให้สร้างโครงสร้างแดชบอร์ดประกอบด้วย:\n1. คลาสแม่ `.dashboard` จัด Layout หลักโดยใช้ `grid-template-areas` แผงหน้าจอ\n- Desktop layout มี 2 คอลัมน์ แถวบนหัวข้อ แถวล่างพื้นที่ทำงาน:\n  - คอลัมน์ซ้ายสุดเป็นเมนูขอบข้าง (`sidebar`)\n  - คอลัมน์ขวาเป็นแถวหัวข้อ (`header`) และแถบพื้นที่ทำงานหลัก (`main`)\n2. มีสื่อสารตอบสนอง `@media (max-width: 768px)` เพื่อปรับเปลี่ยนเลย์เอาต์ให้ยืดแบบคอลัมน์เดี่ยวแนวดิ่ง (จัดให้ `header`, `sidebar`, `main` แสดงเรียงกันบนลงล่าง)\n\n*(หมายเหตุ: โค้ดเฉลยถูกซ่อนไว้ ให้ใช้แท็บ Compare เลื่อนเปรียบเทียบผลงานพิกเซลต่อพิกเซลเพื่อทำตามแบบ)*",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <aside class="side-panel">เมนูข้าง (Sidebar)</aside>
  <header class="top-nav">หัวข้อแดชบอร์ด (Header)</header>
  <main class="content-area">
    <div class="grid-cards">
      <div class="stat-card">ผู้เข้าชม: 12,450</div>
      <div class="stat-card">รายได้สะสม: ฿45,000</div>
      <div class="stat-card">ยอดการสั่งซื้อ: 320 รายการ</div>
    </div>
  </main>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <aside class="side-panel">เมนูข้าง (Sidebar)</aside>
  <header class="top-nav">หัวข้อแดชบอร์ด (Header)</header>
  <main class="content-area">
    <div class="grid-cards">
      <div class="stat-card">ผู้เข้าชม: 12,450</div>
      <div class="stat-card">รายได้สะสม: ฿45,000</div>
      <div class="stat-card">ยอดการสั่งซื้อ: 320 รายการ</div>
    </div>
  </main>
</div>
</body>
</html>`,targetCss:`body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f1f5f9;
}
.dashboard {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 
    "sidebar header"
    "sidebar main";
  height: 100vh;
}
@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto auto;
    grid-template-areas: 
      "header"
      "sidebar"
      "main";
    height: auto;
  }
}
.side-panel {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  grid-area: sidebar;
}
.top-nav {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  grid-area: header;
  font-weight: bold;
}
.content-area {
  padding: 20px;
  grid-area: main;
}
.grid-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  font-size: 18px;
  font-weight: bold;
}`,starterCss:`body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f1f5f9;
}

.dashboard {
  /* 1. จัดเลย์เอาต์ Grid Areas สำหรับ Desktop */
  
}

@media (max-width: 768px) {
  .dashboard {
    /* 2. จัดเลย์เอาต์ใหม่สำหรับหน้าจอมือถือ */
    
  }
}

.side-panel {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  grid-area: sidebar;
}
.top-nav {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  grid-area: header;
  font-weight: bold;
}
.content-area {
  padding: 20px;
  grid-area: main;
}
.grid-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  font-size: 18px;
  font-weight: bold;
}`,validation:(e,t)=>{if(!e.querySelector(`.dashboard`))return`ไม่พบกล่องหลัก .dashboard`;let n=t.replace(/\s+/g,``);return n.includes(`grid-template-areas`)?n.includes(`@media`)?!0:`กรุณาระบุ CSS Media Query (@media) สำหรับรองรับจอมือถือตามโจทย์`:`กรุณาใช้ระบบ grid-template-areas ในการจัดเลย์เอาต์`}},{id:`challenge-music-player`,title:`ภารกิจที่ 6: Premium Music Player (เครื่องเล่นเพลง Synthwave)`,difficulty:`Hard`,points:300,description:"**ภารกิจสร้างเครื่องเล่นเพลงธีมมืดสุดหรูหราพร้อมอนิเมชันอัลบั้มหมุนต่อเนื่อง**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- การ์ดเครื่องเล่นเพลง คลาส `player-card` มีฉากหลังไล่เฉดสีมืดและเงาสีนีออน\n- รูปหน้าปกอัลบั้ม คลาส `album-art` วงกลมหมุนได้รอบตัว ต้องใช้ลิงก์เฉพาะนี้:\n  **`https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop`** (กำหนดหมุนตลอดไปด้วยแอนิเมชัน spinAlbum 12s linear infinite)\n- รายละเอียดเพลง คลาส `song-info` มีชื่อเพลง `Cyberpunk Night` ในหัวข้อ `<h3>` และศิลปิน `Neon Synthwave` ในแท็ก `<p>`\n- แถบความคืบหน้าการเล่น คลาส `progress-bar-container` มีแถบขยายตัวด้านในคลาส `progress-line` แสดงสัดส่วนแถบความยาว `65%`\n- แถบควบคุม คลาส `controls` ประกอบด้วยปุ่มเล่นย้อนกลับ `◀◀`, ปุ่มหลักเล่นคลาส `play` เขียนว่า `▶` และปุ่มเล่นข้าม `▶▶`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="player-card">
  <div class="album-art-container">
    <img src="https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop" class="album-art">
  </div>
  <div class="song-info">
    <h3>Cyberpunk Night</h3>
    <p>Neon Synthwave</p>
  </div>
  <div class="progress-bar-container">
    <div class="progress-line"></div>
  </div>
  <div class="controls">
    <button class="btn-ctrl">◀◀</button>
    <button class="btn-ctrl play">▶</button>
    <button class="btn-ctrl">▶▶</button>
  </div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="player-card">
  <div class="album-art-container">
    <img src="https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop" class="album-art">
  </div>
  <div class="song-info">
    <h3>Cyberpunk Night</h3>
    <p>Neon Synthwave</p>
  </div>
  <div class="progress-bar-container">
    <div class="progress-line"></div>
  </div>
  <div class="controls">
    <button class="btn-ctrl">◀◀</button>
    <button class="btn-ctrl play">▶</button>
    <button class="btn-ctrl">▶▶</button>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #0b0f19;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}
.player-card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 20px;
  width: 280px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.15);
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.05);
}
.album-art-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.album-art {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #334155;
  object-fit: cover;
  animation: spinAlbum 12s linear infinite;
}
@keyframes spinAlbum {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.song-info {
  text-align: center;
  color: white;
  margin: 15px 0;
}
.song-info h3 { margin: 0; font-size: 18px; }
.song-info p { margin: 5px 0 0 0; color: #3b82f6; font-size: 13px; font-weight: bold; }
.progress-bar-container {
  height: 4px;
  background-color: #334155;
  border-radius: 2px;
  margin-bottom: 20px;
  position: relative;
}
.progress-line {
  width: 65%;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 2px;
  box-shadow: 0 0 8px #3b82f6;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn-ctrl {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}
.btn-ctrl:hover { color: white; }
.btn-ctrl.play {
  background-color: #3b82f6;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transition: all 0.2s;
}
.btn-ctrl.play:hover {
  transform: scale(1.1);
  background-color: #60a5fa;
}
`,starterCss:`body {
  background-color: #0b0f19;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.player-card {
  /* 1. สไตล์การ์ดธีมมืดและเงาสีน้ำเงิน */
  
}

.album-art {
  /* 2. สไตล์ขอบกลมและแอนิเมชันหมุนวนหมุนตลอดเวลา */
  
}

/* เขียน @keyframes สำหรับการหมุน */

.song-info {
  text-align: center;
  color: white;
  margin: 15px 0;
}
.song-info h3 { margin: 0; font-size: 18px; }
.song-info p { margin: 5px 0 0 0; color: #3b82f6; font-size: 13px; font-weight: bold; }

.progress-bar-container {
  height: 4px;
  background-color: #334155;
  border-radius: 2px;
  margin-bottom: 20px;
  position: relative;
}
.progress-line {
  width: 65%;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 2px;
  box-shadow: 0 0 8px #3b82f6;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn-ctrl {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}
.btn-ctrl:hover { color: white; }
.btn-ctrl.play {
  background-color: #3b82f6;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transition: all 0.2s;
}
.btn-ctrl.play:hover {
  transform: scale(1.1);
  background-color: #60a5fa;
}`,validation:(e,t)=>{let n=e.querySelector(`.album-art`);if(!n)return`ไม่พบรูปภาพปก .album-art`;let r=e.defaultView.getComputedStyle(n);if(r.borderRadius!==`50%`&&!r.borderRadius.includes(`50px`))return`รูปอัลบั้มต้องกลมสนิท (border-radius: 50%)`;let i=t.replace(/\s+/g,``);return!i.includes(`infinite`)||!i.includes(`spin`)?`อย่าลืมระบุคุณสมบัติแอนิเมชันสำหรับหมุนอัลบั้มต่อเนื่อง`:!0}},{id:`challenge-accordion`,title:`ภารกิจที่ 7: CSS-only FAQs Accordion (ระบบสไลด์ยืดหดไร้ JS)`,difficulty:`Hard`,points:350,description:'**ภารกิจออกแบบเมนูยืดหดอัจฉริยะโดยใช้คุณสมบัติสเตทและ Sibling Selector ใน CSS เท่านั้น**\n      \nข้อกำหนด FAQs Accordion:\n1. ซ่อนเช็คบ็อกซ์ `input[type="checkbox"]` ของระบบเริ่มต้น\n2. ลิงก์หัวข้อ `label` ให้เข้ากับอินพุต เมื่อผู้ใช้กดคลิก หัวข้อจะทำการ Toggle สถานะเช็คอินพุต\n3. ตั้งค่าความสูงกล่องเนื้อหา `.content-box` เริ่มต้นเป็น 0 และซ่อนเนื้อหา (`max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;`)\n4. เมื่อเช็คบ็อกซ์ถูกติ๊กเลือก (`:checked`) ให้ตั้งความสูงสยายกางแสดงกล่องยืดเนื้อหา (`max-height: 120px;`) โดยการอ้างอิงผ่าน sibling selector (`input:checked ~ .content-box`)',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="accordion">
  <div class="item">
    <input type="checkbox" id="faq-1" class="accordion-toggle">
    <label for="faq-1" class="accordion-header">CSS คืออะไร?</label>
    <div class="content-box">
      <p>CSS ย่อมาจาก Cascading Style Sheets เป็นภาษาที่ใช้สำหรับการกำหนดรูปแบบสไตล์และดีไซน์หน้าตาของหน้าเว็บเพจ</p>
    </div>
  </div>
  <div class="item">
    <input type="checkbox" id="faq-2" class="accordion-toggle">
    <label for="faq-2" class="accordion-header">Flexbox ต่างจาก Grid อย่างไร?</label>
    <div class="content-box">
      <p>Flexbox ออกแบบมาสำหรับการจัดเลย์เอาต์หน้าจอในมิติเดียว (แนวนอนหรือแนวตั้ง) ในขณะที่ Grid ออกแบบมาสำหรับสองมิติพร้อมกัน (คอลัมน์และแถว)</p>
    </div>
  </div>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="accordion">
  <div class="item">
    <input type="checkbox" id="faq-1" class="accordion-toggle">
    <label for="faq-1" class="accordion-header">CSS คืออะไร?</label>
    <div class="content-box">
      <p>CSS ย่อมาจาก Cascading Style Sheets เป็นภาษาที่ใช้สำหรับการกำหนดรูปแบบสไตล์และดีไซน์หน้าตาของหน้าเว็บเพจ</p>
    </div>
  </div>
  <div class="item">
    <input type="checkbox" id="faq-2" class="accordion-toggle">
    <label for="faq-2" class="accordion-header">Flexbox ต่างจาก Grid อย่างไร?</label>
    <div class="content-box">
      <p>Flexbox ออกแบบมาสำหรับการจัดเลย์เอาต์หน้าจอในมิติเดียว (แนวนอนหรือแนวตั้ง) ในขณะที่ Grid ออกแบบมาสำหรับสองมิติพร้อมกัน (คอลัมน์และแถว)</p>
    </div>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #f8fafc;
  font-family: sans-serif;
  padding: 40px 20px;
}
.accordion {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}
.item {
  border-bottom: 1px solid #e2e8f0;
}
.accordion-toggle {
  display: none;
}
.accordion-header {
  display: block;
  padding: 20px;
  font-weight: bold;
  color: #1e293b;
  cursor: pointer;
  background-color: white;
  transition: background 0.2s;
}
.accordion-header:hover { background-color: #f8fafc; }
.content-box {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.content-box p { margin: 0; padding: 20px; color: #475569; line-height: 1.5; font-size: 14px; }
.accordion-toggle:checked ~ .content-box {
  max-height: 120px;
}
`,starterCss:`body {
  background-color: #f8fafc;
  font-family: sans-serif;
  padding: 40px 20px;
}

.accordion {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}

.item {
  border-bottom: 1px solid #e2e8f0;
}

.accordion-toggle {
  /* 1. ซ่อนเช็คบ็อกซ์ไม่ให้มองเห็น */
  
}

.accordion-header {
  display: block;
  padding: 20px;
  font-weight: bold;
  color: #1e293b;
  cursor: pointer;
  background-color: white;
  transition: background 0.2s;
}
.accordion-header:hover { background-color: #f8fafc; }

.content-box {
  /* 2. ตั้งค่าความสูงกล่องเนื้อหาเป็น 0 และปิดการแสดงผลไว้พร้อมใส่ Transition */
  
}
.content-box p { margin: 0; padding: 20px; color: #475569; line-height: 1.5; font-size: 14px; }

/* 3. เขียน Selector เชื่อมโยงเพื่อให้กล่องเนื้อหาโผล่ออกมาเมื่อเช็คบ็อกซ์ถูกคลิกเลือก (:checked) */
`,validation:(e,t)=>{let n=e.querySelectorAll(`.accordion-toggle`);if(n.length===0)return`ไม่พบเช็คบ็อกซ์สำหรับสลับการยืดหด`;if(e.defaultView.getComputedStyle(n[0]).display!==`none`)return`อย่าลืมซ่อนกล่องเช็คบ็อกซ์ดั้งเดิมด้วย display: none;`;let r=t.replace(/\s+/g,``);return!r.includes(`:checked~.content-box`)&&!r.includes(`:checked+.content-box`)?`กรุณาใช้ selector input:checked ~ .content-box เพื่อสั่งกางข้อมูลออกเมือปุ่มถูกกดเลือก`:!0}},{id:`challenge-html-portfolio`,title:`ภารกิจที่ 8: HTML Portfolio Schema (โครงสร้างหน้าเว็บผลงานส่วนตัว)`,difficulty:`Beginner`,points:100,description:'**ภารกิจเขียนโครงสร้างเนื้อหาประวัติตนเองโดยใช้ HTML Core (ห้ามเน้นตกแต่ง CSS)**\n      \nโจทย์ระบุให้จัดองค์ประกอบดังนี้:\n1. ส่วนหัวใช้ `<header>` มีชื่อตนเองเป็น `<h1>` และแถบนำทาง `<nav>` ที่มีลิงก์ 3 เส้นไปหน้าส่วนล่าง\n2. ส่วนเนื้อหาใช้ `<main>` มีหัวข้อประวัติการทำงานเป็น `<h2>` และรายการทักษะที่ใช้อื่นๆ เป็น `<ul>` มีข้อความอย่างน้อย 3 ทักษะ\n3. ส่วนข้อมูลตารางใช้ `<table>` มีหัวตาราง (`<th>`) แสดงตารางโปรเจ็กต์ที่เคยทำอย่างน้อย 2 แถว\n4. ส่วนแบบฟอร์มติดต่อกลับใช้ `<form>` มีช่องพิมพ์ `input[type="email"]` และมีปุ่มยืนยัน `<button type="submit">` ส่งคำขอ',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เขียนเฉพาะโครงสร้าง HTML ของคุณให้สมบูรณ์ โดยไม่ต้องเน้นเขียน CSS -->

</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <header>
  <h1>สมชาย เก่งกล้า</h1>
  <nav>
    <a href="#about">เกี่ยวกับ</a>
    <a href="#skills">ทักษะ</a>
    <a href="#contact">ติดต่อ</a>
  </nav>
</header>
<main id="about">
  <h2>ประวัติการทำงาน</h2>
  <p>นักพัฒนาซอฟต์แวร์ผู้หลงใหลการสร้างสรรค์นวัตกรรมดิจิทัลระดับสากล</p>
  <div id="skills">
    <h3>ทักษะหลัก</h3>
    <ul>
      <li>HTML5 & Semantic Web</li>
      <li>CSS3 Layout Mechanics</li>
      <li>JavaScript ES6</li>
    </ul>
  </div>
  <table>
    <thead>
      <tr>
        <th>ชื่อโครงการ</th>
        <th>บทบาท</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Web Academy Portal</td>
        <td>Frontend Lead</td>
      </tr>
      <tr>
        <td>Mobile Banking App</td>
        <td>UI Specialist</td>
      </tr>
    </tbody>
  </table>
  <form id="contact">
    <h3>ติดต่อส่งข้อความ</h3>
    <input type="email" placeholder="email@example.com" required>
    <button type="submit">ส่งข้อมูล</button>
  </form>
</main>
</body>
</html>`,targetCss:`body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155; }
header { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
nav { display: flex; gap: 10px; }
nav a { text-decoration: none; color: #2563eb; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
form { background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
input { display: block; width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }`,starterCss:`body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155; }
header { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
nav { display: flex; gap: 10px; }
nav a { text-decoration: none; color: #2563eb; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
form { background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
input { display: block; width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }`,validation:e=>{let t=e.querySelector(`header`),n=e.querySelector(`nav`),r=e.querySelector(`main`),i=e.querySelectorAll(`ul li`),a=e.querySelector(`table`),o=e.querySelector(`form`),s=e.querySelector(`input[type="email"]`);return!t||!n?`กรุณาใส่โครงสร้าง <header> และแท็ก <nav> นำทางของหน้าผลงาน`:r?i.length<3?`กรุณาสร้างรายการทักษะย่อยโดยใช้ <li> อย่างน้อย 3 ทักษะ`:a?!o||!s?`กรุณาสร้างแบบฟอร์มติดต่อกลับ <form> พร้อมระบุ input สำหรับป้อน email`:!0:`กรุณาแสดงรายการโครงการเป็นตารางโดยใช้ <table>`:`กรุณาระบุขอบเขตหลักโดยใช้แท็ก <main>`}},{id:`challenge-responsive-article`,title:`ภารกิจที่ 9: Responsive Article Layout (บทความวิชาการจัดสองคอลัมน์)`,difficulty:`Intermediate`,points:150,description:"**ภารกิจจัดการแบ่งเนื้อหาความรู้ออกเป็นสัดส่วนเชิงวิชาการด้วยโครงสร้าง Semantic และยืดหดตามจอภาพด้วย CSS Grid**\n      \nข้อกำหนดการจัดเลย์เอาต์:\n1. ใช้โครงสร้างหลักอย่างมีระเบียบ: แท็ก `<article>` เก็บเนื้อหาข่าวแกนหลัก, แท็ก `<aside>` เก็บลิงก์เพิ่มเติมด้านข้าง\n2. กล่องคุมหลักมีคลาส `.article-grid` จัดเลย์เอาต์ Desktop เป็น Grid 2 คอลัมน์ (`grid-template-columns: 2fr 1fr;`) พร้อมมีช่องว่างห่าง `30px`\n3. เมื่อความกว้างบราวเซอร์แคบกว่า `768px` ให้ยุบตัวสลับเป็นคอลัมน์แถวเดี่ยวแนวตั้งเต็มพื้นที่ (`grid-template-columns: 1fr;`)",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-grid">
  <article class="main-post">
    <h2>วิวัฒนาการของโครงข่ายเว็บ</h2>
    <p>เทคโนโลยีทางด้านสถาปัตยกรรมเว็บเพจและส่วนแสดงผลได้รับการยกระดับอย่างมหาศาลจากเดิมที่เป็นเพียงหน้าแสดงข้อมูลดิบสู่หน้าที่มีความสามารถเสมือนแอพพลิเคชันดั้งเดิม...</p>
  </article>
  <aside class="sidebar-info">
    <h3>บทความแนะนำ</h3>
    <p>แนวทางการสไตลิ่งแบบยั่งยืน</p>
    <p>ความเร็วเพจกับคะแนนกูเกิล</p>
  </aside>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-grid">
  <article class="main-post">
    <h2>วิวัฒนาการของโครงข่ายเว็บ</h2>
    <p>เทคโนโลยีทางด้านสถาปัตยกรรมเว็บเพจและส่วนแสดงผลได้รับการยกระดับอย่างมหาศาลจากเดิมที่เป็นเพียงหน้าแสดงข้อมูลดิบสู่หน้าที่มีความสามารถเสมือนแอพพลิเคชันดั้งเดิม...</p>
  </article>
  <aside class="sidebar-info">
    <h3>บทความแนะนำ</h3>
    <p>แนวทางการสไตลิ่งแบบยั่งยืน</p>
    <p>ความเร็วเพจกับคะแนนกูเกิล</p>
  </aside>
</div>
</body>
</html>`,targetCss:`body { font-family: sans-serif; margin: 0; padding: 20px; background-color: #fafafa; }
.article-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}
@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
.main-post { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.sidebar-info { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }`,starterCss:`body { font-family: sans-serif; margin: 0; padding: 20px; background-color: #fafafa; }
.article-grid {
  /* 1. จัดตำแหน่ง Desktop Grid ที่นี่ */
  
}
@media (max-width: 768px) {
  .article-grid {
    /* 2. เปลี่ยนเลย์เอาต์ในจอมือถือที่นี่ */
    
  }
}
.main-post { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.sidebar-info { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }`,validation:(e,t)=>{let n=e.querySelector(`.article-grid`),r=e.querySelector(`article`),i=e.querySelector(`aside`);return!n||!r||!i?`กรุณาจัดสัดส่วนและใช้แท็ก <article> และ <aside> เชิงโครงสร้าง`:e.defaultView.getComputedStyle(n).display===`grid`?t.replace(/\s+/g,``).includes(`@media`)?!0:`กรุณากำหนด media query (@media) ในการจัด Responsive จอมือถือ`:`กรุณาจัดวางด้วยสไตล์ display: grid;`}},{id:`challenge-floating-form`,title:`ภารกิจที่ 10: Interactive Floating Form (แบบฟอร์มการกรอกข้อมูลระดับพรีเมียม)`,difficulty:`Hard`,points:250,description:"**ภารกิจรวบรวมเทคนิค CSS ทั้งหมดเพื่อสร้างหน้าฟอร์มที่ตอบสนองเมื่อผู้ใช้กดเลือกกล่องและตรวจสอบคำตอบสด**\n      \nข้อกำหนดของดีไซน์:\n1. ออกแบบฟอร์ม `.premium-form` ให้มีขนาดความกว้างสูงสุด `380px` คุมขอบมน และเงาสีเข้ม\n2. ตัวป้อนพิมพ์ `input` ต้องมีกรอบเดิมเป็นสีเทาบาง และเมื่อมีปฏิสัมพันธ์ชี้พิมพ์ (`:focus`) ให้กรอบเปลี่ยนเป็นสีน้ำเงินสว่าง (`#2563eb`) และแผ่ออร่าเรืองแสงสีฟ้าอ่อนออกรอบกล่อง (`box-shadow: 0 0 8px rgba(37, 99, 235, 0.25);`) ด้วยเอฟเฟกต์การยืดทรานซิชันนุ่มนวล\n3. อินพุตมีคุณสมบัติ `required` และถ้าผู้ใช้กรอกข้อความผิดฟอร์แมต (`:invalid`) ให้เส้นขอบกลายเป็นสีแดงเตือน (`#ef4444`) อัตโนมัติ",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="form-wrapper">
  <form class="premium-form">
    <h2>ลงทะเบียนร่วมงาน</h2>
    <div class="input-box">
      <input type="text" required placeholder="ชื่อเต็มของคุณ">
    </div>
    <div class="input-box">
      <input type="email" required placeholder="name@domain.com">
    </div>
    <button type="submit">ยืนยันลงทะเบียน</button>
  </form>
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="form-wrapper">
  <form class="premium-form">
    <h2>ลงทะเบียนร่วมงาน</h2>
    <div class="input-box">
      <input type="text" required placeholder="ชื่อเต็มของคุณ">
    </div>
    <div class="input-box">
      <input type="email" required placeholder="name@domain.com">
    </div>
    <button type="submit">ยืนยันลงทะเบียน</button>
  </form>
</div>
</body>
</html>`,targetCss:`body { background-color: #f1f5f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
.premium-form {
  background: white;
  width: 320px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.input-box { margin-bottom: 20px; }
.premium-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
}
.premium-form input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.25);
}
.premium-form input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}
.premium-form button {
  width: 100%;
  padding: 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.premium-form button:hover {
  background-color: #1d4ed8;
}`,starterCss:`body { background-color: #f1f5f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
.premium-form {
  background: white;
  width: 320px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.input-box { margin-bottom: 20px; }
.premium-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  /* 1. ใส่เอฟเฟกต์การเปลี่ยนผ่าน (Transition) */
  
}
/* 2. สไตล์เมื่อ focus หรือ invalid */`,validation:(e,t)=>{if(e.querySelectorAll(`input`).length<2)return`กรุณาสร้างอินพุตอย่างน้อย 2 ช่อง`;let n=t.replace(/\s+/g,``);return n.includes(`:focus`)?n.includes(`box-shadow:`)?!0:`อย่าลืมระบุ box-shadow เพื่อสร้างเอฟเฟกต์เรืองแสงยามกดเลือก`:`กรุณาใส่ CSS สำหรับสถานะ :focus ให้กับอินพุต`}},{id:`challenge-facebook-post`,title:`ภารกิจที่ 11: Facebook Feed Post (การ์ดโพสต์เฟซบุ๊ก)`,difficulty:`Intermediate`,points:180,description:"**จงสร้างการ์ดโพสต์เฟซบุ๊ก (Facebook Feed Post Card) สไตล์โมเดิร์นตามตัวอย่าง**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- การ์ดหลักคลาสหลัก `.fb-post` มีความกว้าง `500px`, พื้นหลังขาว, ขอบโค้งมน `8px`, และเงาบางๆ\n- ส่วนหัวโพสต์ `.post-header` จัด Flexbox ประกอบด้วย:\n  - รูปโปรไฟล์กลมคลาส `.profile-img` ใช้รูปภาพปลายทางเฉพาะนี้:\n    **`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop`**\n  - รายละเอียดชื่อผู้ใช้: `วิภาดา รักษ์ดี` (ตัวหนา) และเวลาโพสต์ `2 ชั่วโมงที่แล้ว`\n- ส่วนข้อความเนื้อหาโพสต์ คลาส `.post-content` เขียนว่า:\n  `วันนี้ได้มาเปิดหูเปิดตากับการเรียนเขียนเว็บ HTML5 และ CSS3 สนุกมากจริงๆ แนะนำให้ทุกคนลองเล่นดูครับ! 💻🚀`\n- ส่วนรูปภาพประกอบโพสต์ คลาส `.post-media` คลุมขอบสี่เหลี่ยมใช้รูปธรรมชาติเฉพาะนี้:\n  **`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop`**\n- ส่วนแสดงสถิติกดไลก์ คลาส `.post-stats` มีปุ่มแสดงความรู้สึก `👍 ❤️ 128` และจำนวนความคิดเห็น `45 ความคิดเห็น • 12 แชร์` ชิดขวา\n- แถบปุ่มคลาส `.post-actions` มีปุ่มคลาส `.action-btn` 3 ปุ่ม: `ถูกใจ​, `แสดงความคิดเห็น​, และ `แชร์`\n  - เมื่อชี้เมาส์ที่ปุ่มถูกใจ (Like) ให้เปลี่ยนตัวหนังสือเป็นสีน้ำเงินเฟซบุ๊ก `#1877f2` ยาม Hover",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบโครงสร้างหน้าโพสต์เฟซบุ๊กด้านล่างนี้ -->
<div class="fb-post">
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="fb-post">
  <div class="post-header">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop" class="profile-img" alt="Profile">
    <div class="user-meta">
      <span class="user-name">วิภาดา รักษ์ดี</span>
      <span class="post-time">2 ชั่วโมงที่แล้ว • 🌐</span>
    </div>
  </div>
  <div class="post-content">
    วันนี้ได้มาเปิดหูเปิดตากับการเรียนเขียนเว็บ HTML5 และ CSS3 สนุกมากจริงๆ แนะนำให้ทุกคนลองเล่นดูครับ! 💻🚀
  </div>
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop" class="post-media" alt="Post Image">
  <div class="post-stats">
    <span class="reactions">👍 ❤️ 128</span>
    <span class="comments-count">45 ความคิดเห็น • 12 แชร์</span>
  </div>
  <div class="post-actions">
    <button class="action-btn btn-like">👍 ถูกใจ</button>
    <button class="action-btn">💬 แสดงความคิดเห็น</button>
    <button class="action-btn">📤 แชร์</button>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.fb-post {
  background-color: white;
  width: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  padding: 12px;
  box-sizing: border-box;
}
.post-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.user-meta {
  display: flex;
  flex-direction: column;
}
.user-name {
  font-weight: bold;
  font-size: 14px;
  color: #050505;
}
.post-time {
  font-size: 12px;
  color: #65676b;
}
.post-content {
  font-size: 14px;
  color: #050505;
  line-height: 1.5;
  margin-bottom: 12px;
}
.post-media {
  width: calc(100% + 24px);
  margin-left: -12px;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}
.post-stats {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ced0d4;
  margin-bottom: 4px;
}
.reactions {
  font-size: 13px;
  color: #65676b;
}
.comments-count {
  font-size: 13px;
  color: #65676b;
}
.post-actions {
  display: flex;
  justify-content: space-between;
}
.action-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #65676b;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.action-btn:hover {
  background-color: #f2f2f2;
}
.btn-like:hover {
  color: #1877f2;
}`,starterCss:`body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.fb-post {
  /* ออกแบบการ์ดโพสต์เฟซบุ๊กที่นี่ */
  
}`,validation:(e,t)=>{let n=e.querySelector(`.fb-post`),r=e.querySelector(`.profile-img`),i=e.querySelector(`.post-media`);if(!n)return`ไม่พบ Container หลักคลาส .fb-post`;if(!r||!r.src.includes(`photo`))return`กรุณาใส่รูปภาพโปรไฟล์ในคลาส .profile-img ให้ถูกต้อง`;if(!i||!i.src.includes(`photo`))return`กรุณาใส่รูปภาพประกอบโพสต์ในคลาส .post-media ให้ถูกต้อง`;let a=t.replace(/\s+/g,``);return!a.includes(`color:#1877f2`)&&!a.includes(`color:rgb(24,119,242)`)?`อย่าลืมเปลี่ยนสีตัวหนังสือเมื่อปุ่มถูกใจโดนชี้เมาส์ (Hover) เป็นสีน้ำเงินเฟซบุ๊ก #1877f2`:!0}},{id:`challenge-instagram-post`,title:`ภารกิจที่ 12: Instagram Photo Detail (การ์ดโพสต์ไอจี)`,difficulty:`Intermediate`,points:180,description:"**จงสร้างการ์ดโพสต์อินสตาแกรม (Instagram Feed Card) ทรงสี่เหลี่ยมจัตุรัสตามตัวอย่าง**\n      \nข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:\n- การ์ดหลักคลาส `.ig-card` กว้าง `400px` พื้นหลังขาว และมีกรอบเส้นขอบบางสีเทาอ่อน\n- ส่วนหัวคลาส `.ig-header` จัดเรียงแนวนอน ประกอบด้วย:\n  - รูปโปรไฟล์กลมขนาดเล็ก คลาส `.ig-avatar` ใช้รูปภาพเฉพาะนี้:\n    **`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop`**\n  - ชื่อผู้ใช้ `wiphada_designer` (ตัวหนา)\n- ส่วนรูปภาพหลักคลาส `.ig-media` เป็นรูปภาพสี่เหลี่ยมจัตุรัสกว้างเต็มความกว้างการ์ด ใช้รูปภาพเฉพาะนี้:\n  **`https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop`**\n- ส่วนไอคอนปฏิกิริยาคลาส `.ig-actions` จัดเรียงซ้ายขวา:\n  - กลุ่มไอคอนชิดซ้าย: `❤️`, `💬`, `📤`\n  - ไอคอนบันทึกชิดขวาสุด: `🔖`\n- ส่วนคำอธิบายภาพคลาส `.ig-caption`:\n  - บรรทัดแสดงยอดไลก์: `ถูกใจ 1,420 คน` (ตัวหนา)\n  - คำบรรยายใต้ภาพ: ชื่อผู้ใช้ `wiphada_designer` (ตัวหนา) ตามด้วยข้อความ `เรียนรู้ศาสตร์สีสันและโครงสร้างหน้าเว็บสุดโมเดิร์น ✨🎨 #frontend #webdev`",starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบหน้าโพสต์ไอจีด้านล่างนี้ -->
<div class="ig-card">
  
</div>
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="ig-card">
  <div class="ig-header">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" class="ig-avatar" alt="Avatar">
    <span class="ig-username">wiphada_designer</span>
  </div>
  <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop" class="ig-media" alt="Post">
  <div class="ig-actions">
    <div class="left-icons">
      <span class="action-icon">❤️</span>
      <span class="action-icon">💬</span>
      <span class="action-icon">📤</span>
    </div>
    <span class="action-icon bookmark">🔖</span>
  </div>
  <div class="ig-caption">
    <p class="likes-count">ถูกใจ 1,420 คน</p>
    <p class="caption-text">
      <span class="caption-user">wiphada_designer</span>
      เรียนรู้ศาสตร์สีสันและโครงสร้างหน้าเว็บสุดโมเดิร์น ✨🎨 #frontend #webdev
    </p>
  </div>
</div>
</body>
</html>`,targetCss:`body {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 20px;
}
.ig-card {
  background-color: white;
  width: 400px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
}
.ig-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
}
.ig-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.ig-username {
  font-weight: 600;
  font-size: 14px;
  color: #262626;
}
.ig-media {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}
.ig-actions {
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
}
.left-icons {
  display: flex;
  gap: 16px;
}
.action-icon {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease;
}
.action-icon:hover {
  transform: scale(1.1);
}
.ig-caption {
  padding: 0 14px 14px 14px;
}
.likes-count {
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #262626;
}
.caption-text {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #262626;
}
.caption-user {
  font-weight: 600;
  margin-right: 8px;
}
`,starterCss:`body {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.ig-card {
  /* ออกแบบการ์ดอินสตาแกรมที่นี่ */
  
}`,validation:e=>{let t=e.querySelector(`.ig-card`),n=e.querySelector(`.ig-avatar`),r=e.querySelector(`.ig-media`);if(!t)return`ไม่พบ Container หลักคลาส .ig-card`;if(!n||!n.src.includes(`photo`))return`กรุณาใส่รูปอวาตาร์ส่วนหัวในคลาส .ig-avatar`;if(!r||!r.src.includes(`photo`))return`กรุณาใส่รูปโพสต์หลักในคลาส .ig-media`;let i=e.defaultView.getComputedStyle(r),a=parseFloat(i.height);return isNaN(a)||Math.round(a)!==400&&i.height!==`100%`?`กรุณาตั้งความสูงของรูปโพสต์หลักให้เป็นสี่เหลี่ยมจัตุรัสสูง 400px`:!0}},{id:`challenge-midterm-exam`,title:`ภารกิจที่ 13: Mid-term Exam (ข้อสอบจำลองกลางภาค: ระบบลงทะเบียนเรียน)`,difficulty:`Intermediate`,points:200,description:'**ข้อสอบจำลองกลางภาค (Mid-term Mock Exam): ระบบลงทะเบียนเรียน**\n\nยินดีต้อนรับเข้าสู่ข้อสอบจำลองกลางภาค! โจทย์นี้จะจำลองสภาพการออกสอบจริงที่ผสมผสานทั้งความรู้ทางโครงสร้างภาษา HTML และการควบคุมรูปลักษณ์ภายนอกด้วย CSS เพื่อสร้างแบบฟอร์มลงทะเบียนเรียนของนักศึกษาที่สมบูรณ์และสวยงาม\n\n**ข้อกำหนดทางด้าน HTML:**\n1. สร้างกลุ่มหัวข้อหลักด้วยแท็ก `<main>`\n2. ภายใน `<main>` ให้สร้างฟอร์ม `<form class="exam-form">`\n3. ภายในฟอร์ม ต้องประกอบด้วยแท็ก/คลาสและโครงสร้างข้อมูลดังต่อไปนี้:\n   - แท็กหัวข้อ `<h2>` เขียนข้อความว่า `ลงทะเบียนสอบกลางภาค`\n   - ช่องกรอก **ชื่อ-นามสกุล** โดยใช้ `<input type="text" class="input-name" placeholder="ชื่อ-นามสกุลของคุณ" required>`\n   - ช่องรับ **อีเมล** โดยใช้ `<input type="email" class="input-email" placeholder="อีเมลสถาบัน" required>`\n   - เมนูตัวเลือก **วิชาสอบ** โดยใช้แท็ก `<select class="select-subject" required>` ซึ่งมี 3 ตัวเลือกย่อยด้านใน:\n     - ตัวเลือกแรก (ดีฟอลต์): `<option value="">-- เลือกวิชาสอบ --</option>`\n     - ตัวเลือกเว็บเบสิก: `<option value="web-basic">HTML5 & CSS3 Basics</option>`\n     - ตัวเลือกดีไซน์: `<option value="ui-design">UI/UX Design Concept</option>`\n   - ช่องระบุ **วันลงทะเบียน** โดยใช้ `<input type="date" class="input-date" required>`\n   - ช่องระบุ **จำนวนวิชาที่เคยเรียน (ตัวเลข)** โดยใช้ `<input type="number" class="input-count" min="1" max="5" value="1" required>` (จำกัดระหว่าง 1 ถึง 5)\n   - แถบปรับ **ระดับความพร้อม** โดยใช้ `<input type="range" class="input-level" min="1" max="5" value="3">` (ระดับ 1 ถึง 5 ค่าเริ่มต้น 3)\n   - ปุ่มส่งข้อมูลลงทะเบียน โดยใช้ `<button type="submit" class="btn-submit">ยืนยันการสมัครสอบ</button>`\n\n**ข้อกำหนดทางด้าน CSS:**\n1. จัดกึ่งกลางหน้าจอและการตกแต่งฟอร์ม `.exam-form`:\n   - ตั้งความกว้างเป็น `360px` และจัดให้อยู่กึ่งกลางแนวนอนด้วย `margin: 30px auto;`\n   - ใส่แพดดิ้งย่อแบบ 2 ค่า: บน-ล่าง `25px`, ซ้าย-ขวา `30px`\n   - ใส่สีพื้นหลังเป็นขาวอมเทาอ่อน `#f8fafc` และขอบสีเทาเข้ม `#cbd5e1` ขนาด `2px` ชนิด `solid`\n   - ทำมุมโค้งมนแบบไล่ทิศทาง (Border Radius Shorthand): มุมบนซ้ายและบนขวาโค้งมน `20px` ส่วนมุมล่างซ้ายและล่างขวาเป็นตัดตรง `0px` (นั่นคือ `20px 20px 0 0`)\n   - มีเงาลอยตัวนุ่มนวล: `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);`\n2. จัดการแสดงผลช่องกรอกข้อมูลและปุ่ม (ยึดหลักสัดส่วนสวยงาม):\n   - ช่องกรอกข้อมูลทุกตัว (`.input-name`, `.input-email`, `.select-subject`, `.input-date`, `.input-count`, `.input-level`) ต้องแสดงผลแบบบล็อก (`display: block;`), ความกว้างเต็มกรอบแม่ (`width: 100%;`), และระยะขอบภายนอกด้านล่างสำหรับเว้นช่องไฟ (`margin-bottom: 15px;`) พร้อมใส่แพดดิ้งภายในช่องกรอกขนาด (`10px`)\n   - ปุ่มยืนยันลงทะเบียน `.btn-submit`: แสดงผลแบบบล็อก (`display: block;`), ความกว้างเต็มกรอบแม่ (`width: 100%;`), ระยะขอบภายในแพดดิ้ง บน-ล่าง `12px` ซ้าย-ขวา `20px`, ขอบเป็นเหลี่ยมมนขนาด `6px`, ล้างเส้นขอบดีฟอลต์ออก (`border: none;`), สีตัวอักษรขาว, สีพื้นหลังเป็นสีน้ำเงินเข้มสถาบัน `#1e3a8a`\n   - สไตล์ปุ่มเมื่อเมาส์ชี้ทับ (`.btn-submit:hover`): เปลี่ยนสีพื้นหลังเป็นน้ำเงินสว่างขึ้น `#2563eb` และมีทรานซิชันเปลี่ยนผ่านนุ่มนวลเวลา 0.2 วินาที',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ข้อสอบจำลอง</title>
</head>
<body>
  <!-- เริ่มสร้างแบบฟอร์มสมัครสอบที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ข้อสอบจำลอง</title>
</head>
<body>
  <main>
    <form class="exam-form">
      <h2>ลงทะเบียนสอบกลางภาค</h2>
      
      <input type="text" class="input-name" placeholder="ชื่อ-นามสกุลของคุณ" required>
      <input type="email" class="input-email" placeholder="อีเมลสถาบัน" required>
      
      <select class="select-subject" required>
        <option value="">-- เลือกวิชาสอบ --</option>
        <option value="web-basic">HTML5 & CSS3 Basics</option>
        <option value="ui-design">UI/UX Design Concept</option>
      </select>
      
      <input type="date" class="input-date" required>
      <input type="number" class="input-count" min="1" max="5" value="1" required>
      <input type="range" class="input-level" min="1" max="5" value="3">
      
      <button type="submit" class="btn-submit">ยืนยันการสมัครสอบ</button>
    </form>
  </main>
</body>
</html>`,starterCss:`body {
  background-color: #cbd5e1;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.exam-form {
  /* 1. จัดแต่งกล่องฟอร์มตามข้อกำหนด (ขนาด, กึ่งกลาง, สีพื้นหลัง, ขอบเฉพาะมุม, เงา) */
  
}

.input-name, .input-email, .select-subject, .input-date, .input-count, .input-level {
  /* 2. จัดระเบียบช่องป้อนข้อมูลเป็น block, เต็มความกว้างแม่, และระยะห่าง */
  
}

.btn-submit {
  /* 3. ตกแต่งปุ่มยืนยันให้หนาสวยงาม พร้อมสีน้ำเงินเข้มและตัวหนังสือขาว */
  
}

.btn-submit:hover {
  /* 4. เพิ่มเอฟเฟกต์สีสว่างขึ้นเวลาเมาส์ชี้ทับ */
  
}`,targetCss:`body {
  background-color: #cbd5e1;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.exam-form {
  width: 360px;
  margin: 30px auto;
  padding: 25px 30px;
  background-color: #f8fafc;
  border: 2px solid #cbd5e1;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  box-sizing: border-box;
}

.exam-form h2 {
  margin: 0 0 20px 0;
  font-size: 20px;
  text-align: center;
  color: #1e3a8a;
}

.input-name, .input-email, .select-subject, .input-date, .input-count, .input-level {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  background-color: #1e3a8a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-submit:hover {
  background-color: #2563eb;
}`,validation:(e,t)=>{let n=e.querySelector(`.exam-form`),r=e.querySelector(`.input-name`),i=e.querySelector(`.input-email`),a=e.querySelector(`.select-subject`),o=e.querySelector(`.input-date`),s=e.querySelector(`.input-count`),c=e.querySelector(`.input-level`),l=e.querySelector(`.btn-submit`);if(!n)return`ไม่พบฟอร์มสมัครสอบคลาส .exam-form`;if(!r||!i||!a||!o||!s||!c||!l)return`กรุณาใส่ช่องกรอกข้อมูลและปุ่มทั้งหมดให้ครบตามกำหนด`;let u=e.defaultView.getComputedStyle(n),d=e.defaultView.getComputedStyle(l),f=parseFloat(u.width);if(isNaN(f)||Math.round(f)!==360)return`กรุณากำหนดความกว้างของฟอร์มเป็น 360px`;let p=parseFloat(u.borderTopLeftRadius),m=parseFloat(u.borderTopRightRadius);if(isNaN(p)||Math.round(p)!==20||isNaN(m)||Math.round(m)!==20||parseFloat(u.borderBottomLeftRadius)>0)return`กรุณากำหนดขอบโค้งมนแบบย่อ border-radius: 20px 20px 0 0;`;if(!u.boxShadow||u.boxShadow===`none`)return`กรุณาใส่เงาขอบให้นุ่มนวลด้วย box-shadow`;if(d.backgroundColor!==`rgb(30, 58, 138)`&&!d.backgroundColor.includes(`#1e3a8a`))return`กรุณาเลือกใช้สีน้ำเงินเข้ม #1e3a8a เป็นพื้นหลังปุ่มส่งข้อมูล`;let h=t.replace(/\s+/g,``);return!h.includes(`.btn-submit:hover{background-color:#2563eb`)&&!h.includes(`.btn-submit:hover{background-color:rgb(37,99,235)`)?`กรุณากำหนดสไตล์เมาส์ชี้ทับ .btn-submit:hover ให้เปลี่ยนเป็นสีน้ำเงินสว่าง #2563eb`:!0}},{id:`challenge-e-commerce-store`,title:`ภารกิจที่ 14: E-commerce Product Store (หน้าจอรายการสินค้าและตะกร้า)`,difficulty:`Hard`,points:250,description:'**ภารกิจประยุกต์ใช้งานจริง: E-commerce Product Store (หน้าจอรายการสินค้าและตะกร้าช็อปปิ้ง)**\n\nภารกิจนี้ท้าทายให้คุณสร้างเว็บอินเตอร์เฟสร้านค้าออนไลน์ที่สมบูรณ์ ประกอบด้วยตารางกริดแสดงรายการสินค้า และสรุปยอดตะกร้าสินค้าในคอลัมน์ด้านข้าง โดยเน้นการจัดวางเลย์เอาต์ระบบ Flexbox และ Grid รวมถึงการกำหนดรูปลักษณ์ที่ดูหรูหราแบบพรีเมียม\n\n**ข้อกำหนดทางด้าน HTML:**\n1. สร้างโครงสร้างหน้าจอหลักด้วยแท็ก `<div class="store-container">`\n2. ด้านในประกอบด้วย 2 ส่วนย่อย:\n   - ส่วนแสดงกริดสินค้า `<main class="product-grid">`\n   - ส่วนตะกร้าสรุปยอด `<aside class="cart-summary">`\n3. ภายใน `.product-grid` ให้ใส่รายการสินค้าเป็นคลาส `.product-card` อย่างน้อย 2 ตัว แต่ละตัวมี:\n   - แท็กภาพ `<img class="product-image">` ดึงภาพจากลิงก์:\n     **`https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300`** (สินค้าตัวที่ 1) หรือ **`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300`** (สินค้าตัวที่ 2)\n   - ป้ายข้อมูลสินค้าคลาส `.product-info`:\n     - หัวเรื่องย่อย `<h3>` แสดงชื่อสินค้า (เช่น "นาฬิกาสมาร์ทวอทช์" หรือ "รองเท้าผ้าใบสปอร์ต")\n     - แท็กราคา `<span class="product-price">` แสดงราคา (เช่น "฿2,900" หรือ "฿1,800")\n   - ปุ่มกดคลาส `.btn-add-cart` เขียนว่า "เพิ่มลงตะกร้า"\n4. ภายใน `.cart-summary` ประกอบด้วย:\n   - หัวข้อ `<h2>` เขียนข้อความ "ตะกร้าสินค้าของคุณ"\n   - รายชื่อสินค้าที่เลือก คลาส `.cart-item` แสดงชื่อสินค้าและราคา\n   - ส่วนสรุปยอดเงินทั้งหมดคลาส `.cart-total` แสดงข้อความ "ยอดรวมทั้งหมด: ฿4,700" (ใช้แท็ก `<strong>`)\n   - ปุ่มสั่งซื้อคลาส `.btn-checkout` เขียนว่า "สั่งซื้อสินค้า"\n\n**ข้อกำหนดทางด้าน CSS:**\n1. ระบบเลย์เอาต์หน้าจอหลักของร้านค้า `.store-container`:\n   - จัดวาง Layout ด้วยระบบ Grid โดยแบ่งออกเป็น 2 คอลัมน์ (สินค้ากว้าง `1fr` และตะกร้าสินค้ากว้าง `300px` มีระยะห่าง `gap: 20px;`)\n2. การ์ดสินค้าแต่ละใบ `.product-card`:\n   - พื้นหลังขาว, ขอบมนโค้งมนแบบ shorthand `12px`, มีขอบสีเทาอ่อนบางๆ\n   - รูปภาพ `.product-image` ต้องถูกล็อกสเกลสูง `180px`, ความกว้างเต็มกรอบ `100%` และใช้ `object-fit: cover;` เพื่อรักษาอัตราส่วนดั้งเดิม\n3. ส่วนสรุปยอดตะกร้า `.cart-summary`:\n   - ตั้งค่าให้มีความยืดหยุ่นเกาะขอบยามเลื่อน โดยใช้ตำแหน่ง `position: sticky; top: 20px;`\n   - พื้นหลังสีเทาอ่อนหรูหรา `#f8fafc`, ขอบมน `8px`, และแพดดิ้งรอบด้าน `20px`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ร้านค้าออนไลน์</title>
</head>
<body>
  <!-- สร้างโครงสร้างร้านค้า store-container ด้านล่างนี้ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ร้านค้าออนไลน์</title>
</head>
<body>
  <div class="store-container">
    <main class="product-grid">
      <div class="product-card">
        <img class="product-image" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" alt="Smart Watch">
        <div class="product-info">
          <h3>นาฬิกาสมาร์ทวอทช์</h3>
          <span class="product-price">฿2,900</span>
        </div>
        <button class="btn-add-cart">เพิ่มลงตะกร้า</button>
      </div>
      
      <div class="product-card">
        <img class="product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" alt="Sneaker">
        <div class="product-info">
          <h3>รองเท้าผ้าใบสปอร์ต</h3>
          <span class="product-price">฿1,800</span>
        </div>
        <button class="btn-add-cart">เพิ่มลงตะกร้า</button>
      </div>
    </main>
    
    <aside class="cart-summary">
      <h2>ตะกร้าสินค้าของคุณ</h2>
      <div class="cart-item">
        <span>นาฬิกาสมาร์ทวอทช์</span>
        <span>฿2,900</span>
      </div>
      <div class="cart-item">
        <span>รองเท้าผ้าใบสปอร์ต</span>
        <span>฿1,800</span>
      </div>
      <hr>
      <div class="cart-total">
        <span>ยอดรวมทั้งหมด:</span>
        <strong>฿4,700</strong>
      </div>
      <button class="btn-checkout">สั่งซื้อสินค้า</button>
    </aside>
  </div>
</body>
</html>`,starterCss:`body {
  background-color: #f1f5f9;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.store-container {
  /* 1. จัดเลย์เอาต์ระบบกริด 2 คอลัมน์ สินค้า 1fr และ ตะกร้า 300px ห่างกัน gap 20px */
  
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  /* 2. ออกแบบมุมโค้งมนการ์ดสินค้า 12px พื้นหลังขาว มีขอบเทาอ่อน */
  
}

.product-image {
  /* 3. ล็อกภาพความสูง 180px ปรับการครอปแบบปกป้องสัดส่วน cover */
  
}

.cart-summary {
  /* 4. กำหนดเป็นแถบแม่เหล็กเกาะติด position: sticky บาร์ด้านบนห่าง 20px */
  
}`,targetCss:`body {
  background-color: #f1f5f9;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.store-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  background-color: white;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.product-info {
  padding: 12px;
  flex-grow: 1;
}

.product-info h3 {
  margin: 0 0 6px 0;
  font-size: 16px;
  color: #1e293b;
}

.product-price {
  font-weight: bold;
  color: #2563eb;
  font-size: 15px;
}

.btn-add-cart {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #f1f5f9;
  color: #1e293b;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-add-cart:hover {
  background-color: #cbd5e1;
}

.cart-summary {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px;
  position: sticky;
  top: 20px;
  height: fit-content;
  box-sizing: border-box;
}

.cart-summary h2 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #1e293b;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #475569;
  margin-bottom: 8px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.btn-checkout {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #10b981;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-checkout:hover {
  background-color: #059669;
}

@media (max-width: 768px) {
  .store-container {
    grid-template-columns: 1fr;
  }
}`,validation:e=>{let t=e.querySelector(`.store-container`),n=e.querySelector(`.product-grid`),r=e.querySelectorAll(`.product-card`),i=e.querySelector(`.cart-summary`);if(!t)return`ไม่พบ Container หลักของร้านค้าคลาส .store-container`;if(!n||r.length<2)return`กรุณาใส่รายการสินค้าอย่างน้อย 2 การ์ดในคลาส .product-grid`;if(!i)return`ไม่พบกล่องสรุปตะกร้าสินค้าคลาส .cart-summary`;let a=e.defaultView.getComputedStyle(t),o=e.defaultView.getComputedStyle(i),s=e.defaultView.getComputedStyle(r[0]);if(!a.display.includes(`grid`)&&!a.display.includes(`flex`))return`กรุณาจัดเลย์เอาต์หลัก .store-container ด้วยระบบ Grid หรือ Flexbox`;if(o.position!==`sticky`)return`กรุณากำหนดให้ .cart-summary มีสไตล์ตำแหน่งแบบเหนียวแน่น position: sticky;`;let c=parseFloat(s.borderRadius);return isNaN(c)||Math.round(c)!==12?`กรุณากำหนดความโค้งมนของการ์ดสินค้า .product-card เป็น 12px`:!0}},{id:`challenge-corporate-page`,title:`ภารกิจที่ 16: Corporate Landing Page (หน้าแรกของเว็บบริษัทโฮมเพจ)`,difficulty:`Intermediate`,points:220,description:'**ภารกิจจัดทำโครงร่างหน้าเว็บ: Corporate Landing Page (หน้าแรกของเว็บบริษัท)**\n\nในการสร้างเว็บบริษัทหรือองค์กร โครงสร้างและเนื้อหาต้องมีความเป็นสัดส่วน ชัดเจน และอ่านง่าย เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลบริการของบริษัทได้รวดเร็วที่สุด\n\n**ข้อกำหนดทางด้าน HTML:**\n1. ส่วนหัวของเว็บไซต์ใช้แท็ก `<header class="company-header">` ประกอบด้วย:\n   - หัวเรื่องหลัก `<h1>` เขียนชื่อบริษัท `TechVanguard Solutions`\n   - แถบนำทาง `<nav class="company-nav">` ที่มีลิงก์ 3 ลิงก์: "หน้าแรก", "บริการของเรา", "ติดต่อเรา"\n2. ส่วนเนื้อหาหลักใช้แท็ก `<main class="company-main">` ที่ครอบคลุม 2 ส่วนย่อย:\n   - ส่วนแนะนำบริษัท `<section class="hero-section">`:\n     - หัวเรื่องย่อย `<h2>` เขียนข้อความ `นวัตกรรมเพื่อขับเคลื่อนธุรกิจของคุณ`\n     - ย่อหน้าคำอธิบาย `<p>` เขียนข้อความ `เราคือผู้นำในการพัฒนาเทคโนโลยีระดับองค์กร...`\n     - รูปภาพประกอบ `<img class="hero-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="สำนักงานบริษัท">`\n   - ส่วนบริการย่อย `<section class="services-grid">`:\n     - บริการย่อย 2 คลาสย่อย `.service-card` แต่ละใบมี:\n       - หัวเรื่องย่อย `<h3>` แสดงชื่อบริการ (เช่น "Cloud Solutions" หรือ "AI Analytics")\n       - ย่อหน้าอธิบายคุณประโยชน์สั้นๆ\n3. ส่วนท้ายเพจใช้แท็ก `<footer class="company-footer">` บรรจุข้อความลิขสิทธิ์ `© 2026 TechVanguard Solutions. สงวนลิขสิทธิ์.`\n\n**ข้อกำหนดทางด้าน CSS:**\n1. การตกแต่งส่วนหัว `.company-header`:\n   - ใช้ระบบ **Flexbox** ในการจัดพื้นที่ให้ออกห่างกันในสองฝั่งแบบแนวนอน (`justify-content: space-between; align-items: center;`)\n   - มีเส้นแบ่งด้านล่างบางๆ สีเทาอ่อน `1px solid #e2e8f0` และแพดดิ้ง `15px 30px`\n2. การตกแต่งส่วนพื้นที่แนะนำและรูปภาพ `.hero-section`:\n   - พื้นหลังสีเทาอ่อนหรูหรา `#f8fafc` มีระยะห่างแพดดิ้งย่อ 2 ค่า: บน-ล่าง `40px` และซ้าย-ขวา `20px` จัดวางเนื้อหาอยู่กึ่งกลางหน้าจอ (`text-align: center;`)\n   - รูปภาพฮีโร่ `.hero-image`: ล็อกขนาดความกว้างสูงสุด `100%`, ความกว้างปกติ `500px`, ความสูง `250px`, มุมโค้งมน `8px`, และรักษาอัตราส่วนรูปภาพไม่ให้บิดเบี้ยวด้วย `object-fit: cover;`\n3. ระบบการจัดเรียงบริการแบบเคียงข้างกัน `.services-grid`:\n   - จัดรูปเลย์เอาต์ย่อยโดยใช้ **Flexbox หรือ Grid** แสดงการ์ดบริการแบบเคียงข้างกันในแนวนอน และมีระยะห่างช่องไฟ (`gap: 20px;`)\n   - การ์ดบริการแต่ละใบ `.service-card`: พื้นหลังขาว, ขอบรอบตัวสีเทาอ่อนบางๆ, แพดดิ้ง `20px`, มุมโค้งมนสี่มุมเท่ากัน `6px`\n4. ส่วนท้ายของเพจ `.company-footer`:\n   - พื้นหลังสีน้ำเงินเข้มขรึม `#0f172a`, ข้อความสีเทาอ่อน `#94a3b8`, จัดกึ่งกลางจอ และแพดดิ้ง `15px`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechVanguard Solutions - หน้าแรก</title>
</head>
<body>
  <!-- เริ่มสร้างหน้าแรกเว็บบริษัทที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechVanguard Solutions - หน้าแรก</title>
</head>
<body>
  <header class="company-header">
    <h1>TechVanguard Solutions</h1>
    <nav class="company-nav">
      <a href="#">หน้าแรก</a>
      <a href="#">บริการของเรา</a>
      <a href="#">ติดต่อเรา</a>
    </nav>
  </header>
  
  <main class="company-main">
    <section class="hero-section">
      <h2>นวัตกรรมเพื่อขับเคลื่อนธุรกิจของคุณ</h2>
      <p>เราคือผู้นำในการพัฒนาเทคโนโลยีระดับองค์กร...</p>
      <img class="hero-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="สำนักงานบริษัท">
    </section>
    
    <section class="services-grid">
      <div class="service-card">
        <h3>Cloud Solutions</h3>
        <p>บริการจัดเก็บและดูแลระบบฐานข้อมูลบนคลาวด์มาตรฐานสากลเพื่อความปลอดภัยสูงสุด</p>
      </div>
      <div class="service-card">
        <h3>AI Analytics</h3>
        <p>วิเคราะห์ประมวลผลข้อมูลทางธุรกิจและพฤติกรรมผู้บริโภคด้วยขุมพลังปัญญาประดิษฐ์</p>
      </div>
    </section>
  </main>
  
  <footer class="company-footer">
    © 2026 TechVanguard Solutions. สงวนลิขสิทธิ์.
  </footer>
</body>
</html>`,starterCss:`body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #334155;
}

.company-header {
  /* 1. จัดพื้นที่หัวเว็บให้แยกฝั่งซ้ายขวาด้วย Flexbox และระยะห่าง */
  
}

.hero-section {
  /* 2. จัดพื้นที่แบนเนอร์กึ่งกลาง พื้นหลังเทาอ่อน และระยะห่าง */
  
}

.hero-image {
  /* 3. ปรับขนาดรูปฮีโร่ คุมสัดส่วน cover และโค้งมน */
  
}

.services-grid {
  /* 4. แสดงการ์ดบริการขนานกันในแนวนอนและเว้นช่องไฟ */
  
}

.service-card {
  /* 5. ตกแต่งการ์ดบริการขอบเทาอ่อน แพดดิ้ง และโค้งมน */
  
}

.company-footer {
  /* 6. ส่วนท้ายสีเข้มขรึมและจัดข้อความกึ่งกลาง */
  
}`,targetCss:`body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #334155;
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid #e2e8f0;
}

.company-header h1 {
  margin: 0;
  font-size: 20px;
  color: #0f172a;
}

.company-nav a {
  text-decoration: none;
  color: #64748b;
  margin-left: 20px;
  font-weight: 500;
  transition: color 0.2s;
}

.company-nav a:hover {
  color: #0f172a;
}

.company-main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  background-color: #f8fafc;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 30px;
}

.hero-section h2 {
  font-size: 28px;
  color: #0f172a;
  margin: 0 0 10px 0;
}

.hero-section p {
  font-size: 16px;
  color: #475569;
  max-width: 600px;
  margin: 0 auto 20px auto;
  line-height: 1.6;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

.services-grid {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.service-card {
  flex: 1;
  background-color: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 6px;
}

.service-card h3 {
  margin: 0 0 10px 0;
  color: #0f172a;
  font-size: 18px;
}

.service-card p {
  margin: 0;
  font-size: 14px;
  color: #475569;
  line-height: 1.5;
}

.company-footer {
  background-color: #0f172a;
  color: #94a3b8;
  text-align: center;
  padding: 15px;
  font-size: 14px;
}`,validation:e=>{let t=e.querySelector(`.company-header`),n=e.querySelector(`.company-main`),r=e.querySelector(`.company-footer`),i=e.querySelector(`.hero-image`),a=e.querySelectorAll(`.service-card`);if(!t)return`ไม่พบแท็กคลาส .company-header`;if(!n)return`ไม่พบแท็กคลาส .company-main`;if(!r)return`ไม่พบแท็กคลาส .company-footer`;if(!i)return`ไม่พบรูปภาพฮีโร่คลาส .hero-image`;if(a.length<2)return`กรุณาสร้างการ์ดบริการคลาส .service-card อย่างน้อย 2 ใบ`;let o=e.defaultView.getComputedStyle(t),s=e.defaultView.getComputedStyle(i),c=e.defaultView.getComputedStyle(r);return o.display===`flex`?s.objectFit===`cover`?c.textAlign===`center`||`กรุณากำหนดข้อความฟุตเตอร์ให้อยู่กึ่งกลาง`:`กรุณากำหนดการจัดเรียงรูปภาพด้วย object-fit: cover;`:`กรุณาจัดเลย์เอาต์ส่วนหัวด้วย Flexbox`}},{id:`challenge-streaming-dashboard`,title:`ภารกิจที่ 16: Premium Streaming Dashboard (แดชบอร์ดจัดการระบบไลฟ์และสื่อ)`,difficulty:`Hard`,points:300,description:'**ภารกิจระดับโหดหิน: Premium Streaming Dashboard (แดชบอร์ดสตรีมมิ่งรวมส่วนประกอบหนาแน่น)**\n\nภารกิจนี้ต้องการให้คุณออกแบบหน้าจอการควบคุมระบบความบันเทิง (Streaming Portal Dashboard) ที่รวมแทบทุกกลไกของ HTML และ CSS ในหน้าเดียว ประกอบไปด้วยโครงสร้างและเลย์เอาต์ซับซ้อน ครบถ้วนทั้งส่วนหัว, แถบนำทาง, เนื้อหาหลัก และส่วนท้ายสุด (Footer):\n\n**ข้อกำหนดทางด้าน HTML:**\n1. กล่องนอกสุดหลัก: `<div class="dashboard-wrapper">`\n2. **ส่วนแถบด้านข้างนำทาง (Navigation Sidebar - คลาส `.side-nav`):**\n   - หัวข้อ `<h2>` เขียนว่า `PORTAL`\n   - รายการนำทาง `<ul>` มี 3 `<li>`: "หน้าหลัก", "ไลฟ์สตรีม", "การตั้งค่า"\n3. **ส่วนหัวด้านบน (Header - คลาส `.top-bar`):**\n   - ข้อความต้อนรับ `<span>สวัสดี, สตรีมเมอร์</span>`\n   - กล่องรับค่าค้นหาประเภท `<input type="search" class="search-box" placeholder="ค้นหาคลิป...">`\n   - กล่องเลือกสีประเภท `<input type="color" class="theme-picker" value="#3b82f6">`\n4. **ส่วนพื้นที่หลักและเนื้อหา (Main Content - คลาส `.portal-main`):**\n   - บล็อกแสดงสถานะไลฟ์ (Live Status Card - คลาส `.status-card`):\n     - มีป้ายไฟจุดกะพริบ คลาส `.live-dot`\n     - ข้อความสถานะ `<span>LIVE STREAMING</span>`\n     - ช่องตัวเลขผู้ชม: `<input type="number" class="viewer-input" min="0" value="1500" required>`\n   - แถบพับ FAQ เกี่ยวกับการตั้งค่า โดยใช้แท็ก `<details>` ด้านในมี `<summary>`เขียนว่า `ดูค่าความคมชัดของไลฟ์` และข้อความย่อหน้า `<p>`เขียนว่า `ความละเอียดสตรีม 1080p Bitrate 6000kbps`\n5. **ส่วนแถบเครื่องมือควบคุมการเล่น (Control Widget - คลาส `.media-widget`):**\n   - มีหัวข้อ `<h3>`เขียนว่า `พรีวิวสตรีมสด`\n   - ฝังวิดีโอจำลองด้วย `<video class="video-preview" src="assets/preview.mp4" controls></video>`\n   - แถบปรับระดับเสียงประเภทระดับแถบเลื่อน: `<input type="range" class="volume-slider" min="0" max="100" value="70">`\n6. **ส่วนท้ายของเพจ (Footer - คลาส `.portal-footer`):**\n   - มีข้อความย่อยบอกสถานะ `<span>ระบบทำงานปกติ | Latency: 12ms</span>`\n   - มีข้อความลิขสิทธิ์ `<span>© 2026 Portal Stream. สงวนลิขสิทธิ์</span>`\n\n**ข้อกำหนดทางด้าน CSS:**\n1. เลย์เอาต์และตารางตำแหน่ง `.dashboard-wrapper`:\n   - ใช้ระบบ **CSS Grid** ในการจัดกลุ่มพื้นที่: แบ่งแถบซ้ายเป็น Sidebar กว้าง `220px` และด้านขวา Content กว้าง `1fr` ห่างกัน `gap: 20px;`\n2. ขอบโค้งมนแบบไล่คู่และการเฉดสีการ์ด:\n   - การ์ดสถานะ `.status-card` และแท็บเครื่องมือควบคุม `.media-widget` ต้องมีขอบมนเฉพาะมุมบนซ้ายและบนขวา `16px` ส่วนมุมล่างเป็น `0px` (`border-radius: 16px 16px 0 0;`)\n   - ใช้สีกระจกใสสะท้อนเงามิติ (Glassmorphism): พื้นหลังขาวโปร่งแสง `rgba(255, 255, 255, 0.7)` และใช้ `backdrop-filter: blur(8px);` ร่วมกับเงา `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);`\n3. เอฟเฟกต์และอนิเมชันคีย์เฟรม `.live-dot`:\n   - จุดไฟกะพริบ `.live-dot` ต้องมีขนาดกว้างสูง `10px`, ความโค้งมนเป็นวงกลมสมบูรณ์ (`border-radius: 50%;`), สีแดง `#ef4444`, และมีอนิเมชันชื่อ `pulse` ความเร็ว `1s` แบบวนซ้ำไม่มีที่สิ้นสุด (`animation: pulse 1s infinite;`)\n   - กำหนดเรื่องราวแอนิเมชัน `@keyframes pulse` เพื่อปรับการขยายขนาดจาก `scale(0.95)` เป็น `scale(1.2)` และปรับความโปร่งใสจาก `opacity: 1` เป็น `opacity: 0.4` เมื่อวนซ้ำ\n4. ส่วนท้ายสุด `.portal-footer`:\n   - ใช้ระบบจัดตำแหน่งแบบ **Flexbox** คุมให้เนื้อหาแยกไปสองฝั่ง (`justify-content: space-between;` และจัดให้อยู่กึ่งกลางแนวตั้ง `align-items: center;`) พร้อมแพดดิ้ง `15px` และสีตัวอักษรสีเทาอ่อน `#94a3b8`\n5. แถบตอบสนองจอโทรศัพท์:\n   - ตั้งค่า Media Query (เมื่อจอแคบกว่า `768px`) ให้ปิดการแสดงผลของ Sidebar (`display: none;`) และปรับให้คอลัมน์ขวาขยายกว้างเต็มหน้าจอ',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Streaming Dashboard Portal</title>
</head>
<body>
  <!-- ออกแบบแดชบอร์ดระดับโปรที่มีหัว เมนู เนื้อหา และท้ายสุดของคุณที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Streaming Dashboard Portal</title>
</head>
<body>
  <div class="dashboard-wrapper">
    <aside class="side-nav">
      <h2>PORTAL</h2>
      <ul>
        <li>หน้าหลัก</li>
        <li>ไลฟ์สตรีม</li>
        <li>การตั้งค่า</li>
      </ul>
    </aside>
    
    <div class="main-container">
      <header class="top-bar">
        <span>สวัสดี, สตรีมเมอร์</span>
        <input type="search" class="search-box" placeholder="ค้นหาคลิป...">
        <input type="color" class="theme-picker" value="#3b82f6">
      </header>
      
      <main class="portal-main">
        <div class="status-card">
          <div class="live-status">
            <div class="live-dot"></div>
            <span>LIVE STREAMING</span>
          </div>
          <input type="number" class="viewer-input" min="0" value="1500" required>
        </div>
        
        <details>
          <summary>ดูค่าความคมชัดของไลฟ์</summary>
          <p>ความละเอียดสตรีม 1080p Bitrate 6000kbps</p>
        </details>
      </main>
      
      <section class="media-widget">
        <h3>พรีวิวสตรีมสด</h3>
        <video class="video-preview" src="assets/preview.mp4" controls></video>
        <input type="range" class="volume-slider" min="0" max="100" value="70">
      </section>
      
      <footer class="portal-footer">
        <span>ระบบทำงานปกติ | Latency: 12ms</span>
        <span>© 2026 Portal Stream. สงวนลิขสิทธิ์</span>
      </footer>
    </div>
  </div>
</body>
</html>`,starterCss:`body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.dashboard-wrapper {
  /* 1. จัดตำแหน่งกริด 2 คอลัมน์ Sidebar กว้าง 220px และ Content กว้าง 1fr พร้อมช่องไฟ */
  
}

.status-card, .media-widget {
  /* 2. สไตล์ขอบมนเฉพาะด้านบน 16px และสูตรสะท้อนกระจกแก้ว Glassmorphism */
  
}

.live-dot {
  /* 3. สไตล์วงกลมสีแดงกว้างสูง 10px และผูกกับแอนิเมชันกะพริบ pulse */
  
}

/* 4. เรื่องราวคีย์เฟรมสำหรับแอนิเมชันกะพริบ @keyframes pulse หมุนปรับความโปร่งแสงและขนาด */


.portal-footer {
  /* 5. จัดระเบียบข้อความฟุตเตอร์แยกไปสองฝั่งด้วย Flexbox และตกแต่งสี */
  
}

@media (max-width: 768px) {
  /* 6. จอมือถือ: ให้ซ่อนแถบด้านข้าง side-nav */
  
}`,targetCss:`body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.dashboard-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.side-nav {
  background-color: #1e293b;
  padding: 20px;
  border-radius: 12px;
  height: fit-content;
}

.side-nav h2 {
  margin: 0 0 20px 0;
  color: #3b82f6;
  font-size: 20px;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-nav li {
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 5px;
  transition: background 0.2s;
}

.side-nav li:hover {
  background-color: #334155;
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-bar {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.search-box {
  background-color: #334155;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  outline: none;
}

.theme-picker {
  border: none;
  background: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
}

.portal-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.status-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.live-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.live-dot {
  width: 10px;
  height: 10px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.95);
    opacity: 1;
  }
}

.viewer-input {
  background-color: #334155;
  border: 1px solid #475569;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  width: 90px;
}

details {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 8px;
}

summary {
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

details p {
  margin: 10px 0 0 0;
  color: #94a3b8;
  font-size: 14px;
}

.media-widget {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.media-widget h3 {
  margin: 0 0 15px 0;
}

.video-preview {
  width: 100%;
  border-radius: 8px;
  background-color: black;
  margin-bottom: 15px;
}

.volume-slider {
  width: 100%;
  cursor: pointer;
}

.portal-footer {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #94a3b8;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    grid-template-columns: 1fr;
  }
  .side-nav {
    display: none;
  }
}`,validation:(e,t)=>{let n=e.querySelector(`.dashboard-wrapper`),r=e.querySelector(`.side-nav`),i=e.querySelector(`.status-card`),a=e.querySelector(`.live-dot`),o=e.querySelector(`details`),s=e.querySelector(`.media-widget`),c=e.querySelector(`.video-preview`),l=e.querySelector(`.portal-footer`);if(!n)return`ไม่พบ Container ครอบแดชบอร์ดหลักคลาส .dashboard-wrapper`;if(!r||!i||!a||!o||!s||!c||!l)return`กรุณาประกอบส่วนโครงร่าง HTML ทุกชิ้นส่วนตามข้อกำหนดข้อสอบให้ครบถ้วน (หัว, แถบนำทาง, เนื้อหาหลัก, ฟุตเตอร์)`;let u=e.defaultView.getComputedStyle(n),d=e.defaultView.getComputedStyle(a),f=e.defaultView.getComputedStyle(i),p=e.defaultView.getComputedStyle(l);if(!u.display.includes(`grid`))return`กรุณาจัดวางเลย์เอาต์หลักด้วยระบบ Grid`;if(d.borderRadius!==`50%`)return`กรุณากำหนดความโค้งมนของป้ายกะพริบ .live-dot เป็นวงกลม 50%`;let m=parseFloat(f.borderTopLeftRadius),h=parseFloat(f.borderTopRightRadius);if(isNaN(m)||Math.round(m)!==16||isNaN(h)||Math.round(h)!==16||parseFloat(f.borderBottomLeftRadius)>0)return`กรุณากำหนดมุมขอบมนของการ์ดสถานะ .status-card เป็น border-radius: 16px 16px 0 0;`;if(p.display!==`flex`)return`กรุณาจัดวางเลย์เอาต์ฟุตเตอร์ด้วย Flexbox`;let g=t.replace(/\\s+/g,``);return g.includes(`@keyframespulse`)?g.includes(`@media`)?!0:`อย่าลืมกำหนดแถบตอบสนองหน้าต่างบราว์เซอร์ด้วย @media (max-width: 768px)`:`กรุณาระบุรายละเอียดเรื่องราวแอนิเมชัน @keyframes pulse ให้ป้ายไฟสถานะสด`}},{id:`midterm-challenge-1`,title:`ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 1 (Bento Grid & Glassmorphism)`,difficulty:`Hard`,points:200,description:"### 🌿 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 1: ข้อมูลร้านและแกลเลอรีเรือนกระจก\n      \nจงเขียน CSS เพื่อวางโครงสร้างและสไตล์ของหน้าข้อมูลร้าน **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:\n\n1. **สไตล์นำทางกระจกฝ้า (.navbar)**:\n   - ตรึงเมนูไว้ด้านบนสุดเสมอเมื่อเลื่อนดูเนื้อหาลงมา (`position: sticky; top: 0;`)\n   - ตั้งค่าสไตล์โปร่งแสงและเบลอ (`backdrop-filter: blur(10px); background-color: rgba(250, 248, 245, 0.85);`)\n   - จัดวางโลโก้อยู่ซ้าย ลิงก์เมนูอยู่ขวาด้วย Flexbox ใน `.nav-container`\n2. **แบนเนอร์ Hero (.hero)**:\n   - จัดเนื้อหาให้อยู่ตรงกลางแบนเนอร์เป๊ะทั้งแนวตั้งและแนวนอน\n   - ตั้งสไตล์ `.hero-overlay` เคลือบสีดำโปร่งแสง (`rgba(15, 27, 20, 0.55)`) คลุมพื้นที่ให้ตัวหนังสือสีขาวอ่านง่าย\n3. **แกลเลอรี Bento (.gallery-grid)**:\n   - จัดวางแกลเลอรีเป็น Grid 3 คอลัมน์ (`grid-template-columns: repeat(3, 1fr);`)\n   - กำหนดการกินพื้นที่อย่างไม่สมมาตร (Grid Spanning) ให้สวยงาม:\n     - `.item-1`: กว้าง 2 คอลัมน์ และ สูง 2 แถว (`grid-column: span 2; grid-row: span 2;`)\n     - `.item-2`: สูง 2 แถว (`grid-row: span 2;`)\n     - `.item-5`: กว้าง 2 คอลัมน์ (`grid-column: span 2;`)\n   - ท้าทาย: เมื่อ Hover ที่การ์ดให้รูปภาพด้านในขยายขอบเขตเล็กน้อย (`transform: scale(1.08);`) โดยมี Transition นุ่มนวล\n4. **การรองรับมือถือ (@media (max-width: 768px))**:\n   - ยุบแกลเลอรีให้แสดงเป็น 1 คอลัมน์แนวตั้งทั้งหมด และเคลียร์สปันให้ภาพกว้างเต็มปกติ",starterHtml:`<!-- โครงสร้าง HTML หน้าข้อมูลร้าน (Midterm Shop Part 1) -->
<header class="navbar">
  <div class="nav-container">
    <div class="logo">🌿 Flora & Fauna</div>
    <nav class="nav-links">
      <a href="#" class="nav-item active">ข้อมูลร้าน</a>
      <a href="#" class="nav-item">เมนู & บริการ</a>
      <a href="#" class="nav-item">จองโต๊ะสัมมนา</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="badge">Glasshouse Cafe</span>
    <h1>สัมผัสรสชาติธรรมชาติใจกลางเมือง</h1>
    <p>คาเฟ่เรือนกระจกที่รวมเครื่องดื่มและพื้นที่ทำงานท่ามกลางสวนป่าสีเขียว</p>
    <a href="#" class="btn btn-primary">จองโต๊ะเลย</a>
  </div>
</section>

<main class="container">
  <section class="gallery-section">
    <h2>คลังภาพบรรยากาศร้าน (Glasshouse Gallery)</h2>
    <div class="gallery-grid">
      <div class="gallery-item item-1">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" alt="Glasshouse Area"></div>
        <div class="gallery-caption">Main Glasshouse Area</div>
      </div>
      <div class="gallery-item item-2">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600" alt="Slow Bar"></div>
        <div class="gallery-caption">Slow Bar & Specialty Coffee</div>
      </div>
      <div class="gallery-item item-3">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" alt="Botanical"></div>
        <div class="gallery-caption">Botanical Garden</div>
      </div>
      <div class="gallery-item item-4">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" alt="Bakery"></div>
        <div class="gallery-caption">Bakery Studio</div>
      </div>
      <div class="gallery-item item-5">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="Co-working"></div>
        <div class="gallery-caption">Private Co-working Room</div>
      </div>
    </div>
  </section>
</main>`,starterCss:`/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --accent-light: #f5efe6;
  --bg-light: #faf8f5;
  --text-dark: #1b2520;
  --text-muted: #6c7870;
  --white: #ffffff;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

body {
  font-family: sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  height: 500px;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--white);
  max-width: 850px;
  padding: 40px 24px 0 24px; /* ป้องกันการทับซ้อน */
  margin: 0 auto; /* จัดให้อยู่กึ่งกลางแนวนอน */
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,targetHtml:``,targetCss:``,validation:(e,t)=>{let n=e.querySelector(`.navbar`),r=e.querySelector(`.nav-container`),i=e.querySelector(`.hero`),a=e.querySelector(`.hero-overlay`),o=e.querySelector(`.gallery-grid`),s=e.querySelector(`.item-1`);if(e.querySelector(`.item-2`),e.querySelector(`.item-5`),!n||!r||!i||!o||!s)return`กรุณาอย่าเปลี่ยนชื่อคลาส HTML หลักที่โจทย์กำหนดมา`;let c=e.defaultView.getComputedStyle(n),l=e.defaultView.getComputedStyle(r),u=e.defaultView.getComputedStyle(i),d=e.defaultView.getComputedStyle(a),f=e.defaultView.getComputedStyle(o);if(c.position!==`sticky`)return`กรุณากำหนดสไตล์แถบนำทางให้เป็น Sticky (position: sticky; top: 0;)`;if(l.display!==`flex`)return`กรุณาจัดวางเลย์เอาต์ของส่วนนำทางข้างใน .nav-container ด้วย Flexbox`;if(u.display!==`flex`)return`กรุณาจัดวางข้อความกึ่งกลางของ Hero Banner ด้วยระบบ Flexbox`;if(d.position!==`absolute`)return`กรุณากำหนดสไตล์ .hero-overlay ให้มี position: absolute เพื่อเคลือบพื้นหลังแบนเนอร์`;if(!f.display.includes(`grid`))return`กรุณาจัดวางแกลเลอรีรูปภาพ .gallery-grid ด้วยระบบ CSS Grid`;let p=t.replace(/\s+/g,``);return!p.includes(`grid-column`)&&!p.includes(`grid-row`)?`กรุณาระบุ grid-column หรือ grid-row สปันให้กับ .item-1, .item-2 และ .item-5 เพื่อทำ Bento Grid`:p.includes(`@media`)?!0:`อย่าลืมกำหนดการรองรับขนาดหน้าจอมือถือและการคืนค่าสปัน Grid Gallery บนมือถือด้วย @media (max-width: 768px)`},hints:[`ใช้ position: sticky; top: 0; backdrop-filter: blur(10px); สำหรับแถบนำทาง`,`จัด Hero กลางจอโดยใช้ display: flex; justify-content: center; align-items: center; flex-direction: column;`,`บีบ Bento Grid สปันด้วย grid-column: span 2; ในคลาส .item-1 และ .item-5`]},{id:`midterm-challenge-2`,title:`ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 2 (Menu Catalog & Card Flexbox)`,difficulty:`Hard`,points:200,description:"### 🍰 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 2: เมนูและการจัด Flexbox ให้เท่ากัน\n      \nจงเขียน CSS เพื่อจัดวางเลย์เอาต์การ์ดเมนูอาหารและเครื่องดื่ม **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:\n\n1. **เลย์เอาต์ Grid หมวดหมู่เมนู (.menu-grid)**:\n   - หน้าจอปกติแสดงผลเป็น 4 คอลัมน์ความกว้างเท่ากัน (`grid-template-columns: repeat(4, 1fr);`)\n   - มีระยะห่างที่สวยงาม (`gap: 30px;`)\n2. **การ์ดเมนูแบบดึงล่างสุดเสมอกัน (.menu-card)**:\n   - ตั้งค่าตัวการ์ดและเนื้อหาภายใน (`.card-content`) เป็นระบบ Flexbox แนวตั้ง (`display: flex; flex-direction: column;`)\n   - **โจทย์หลัก**: ดันกล่องราคาและปุ่มสั่งซื้อ (`.card-footer`) ให้ตกลงไปชิดขอบการ์ดข้างล่างสุดเสมอกันทุกใบเป๊ะ โดยห้ามกำหนดความสูงคงที่ให้กับตัวเนื้อหา (คำใบ้: กำหนดให้คำบรรยาย `.card-desc` ใส่ค่า `flex-grow: 1;` เพื่อยืดขยายดันปุ่มลงล่างสุด)\n3. **ป้ายโปรโมชันที่มุมการ์ด (.card-badge)**:\n   - จัดวางตำแหน่งของป้ายสถานะสินค้าให้อยู่มุมขวาบนของภาพการ์ด (`position: absolute; top: 20px; right: 20px;`)\n4. **เอฟเฟกต์แอนิเมชันลื่นไหล (Hover Transition)**:\n   - เมื่อผู้ใช้นำเมาส์ไปชี้ที่การ์ด (`.menu-card:hover`) ให้การ์ดยกตัวลอยขึ้นเบาๆ (`transform: translateY(-10px);`) และเงาการ์ดฟุ้งชัดขึ้น (`box-shadow`)",starterHtml:`<!-- โครงสร้างรายการเมนู (Midterm Menu Part 2) -->
<main class="container">
  <div class="menu-grid">
    
    <!-- เมนูที่ 1 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400" alt="Matcha">
        <span class="card-badge bestseller">Best Seller</span>
      </div>
      <div class="card-content">
        <h3>Matcha Latte</h3>
        <p class="card-desc">มัทฉะเข้มข้นนำเข้าจากเมืองอุจิ ประเทศญี่ปุ่น ปลูกใต้ร่มเงาอย่างดี คัดสรรเฉพาะสามใบแรกเพื่อรสชาติลึกซึ้งกลมกล่อมตามสไตล์สโลว์บาร์</p>
        <div class="card-footer">
          <span class="price">฿145</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

    <!-- เมนูที่ 2 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400" alt="Cold Brew">
      </div>
      <div class="card-content">
        <h3>Rose Cold Brew</h3>
        <p class="card-desc">กาแฟอาราบิก้าสกัดเย็นบ่มนาน 18 ชั่วโมง ผสานกลิ่นกุหลาบสดชื่นเบาๆ</p>
        <div class="card-footer">
          <span class="price">฿160</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

    <!-- เมนูที่ 3 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1562376502-6f769499c886?w=400" alt="Waffle">
      </div>
      <div class="card-content">
        <h3>Honey Waffle</h3>
        <p class="card-desc">วาฟเฟิลสไตล์เบลเยียมอบร้อนเนื้อในเหนียวนุ่ม ขอบนอกบางกรอบหอมกรุ่นเนยสดแท้ ราดด้วยน้ำผึ้งเกสรดอกลำไยแท้ส่งตรงจากสวน</p>
        <div class="card-footer">
          <span class="price">฿185</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

  </div>
</main>`,starterCss:`/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --white: #ffffff;
  --bestseller-color: #9e2a2b;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

body {
  font-family: sans-serif;
  background-color: #faf8f5;
  margin: 0;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.card-img-container {
  height: 200px;
  position: relative;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent-color);
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,targetHtml:``,targetCss:``,validation:(e,t)=>{let n=e.querySelector(`.menu-grid`),r=e.querySelector(`.menu-card`),i=e.querySelector(`.card-badge`),a=e.querySelector(`.card-content`),o=e.querySelector(`.card-desc`);if(!n||!r||!a||!o)return`กรุณาตรวจสอบโครงสร้างการ์ดและคลาสของเนื้อหาเมนูตามแบบฝึกหัด`;let s=e.defaultView.getComputedStyle(n),c=e.defaultView.getComputedStyle(r),l=e.defaultView.getComputedStyle(a),u=e.defaultView.getComputedStyle(o);if(!s.display.includes(`grid`))return`กรุณากำหนดตัวครอบเมนู .menu-grid ให้แสดงผลแบบ Grid`;if(c.display!==`flex`||l.display!==`flex`)return`การทำปุ่มสั่งซื้อให้ชิดล่างเท่ากันได้ ต้องกำหนด .menu-card และ .card-content ให้เป็น display: flex;`;if(l.flexDirection!==`column`)return`กรุณากำหนดทิศทางของคอนเทนต์ด้านใน .card-content ให้เรียงในแนวตั้ง (flex-direction: column;)`;if(parseFloat(u.flexGrow)<=0)return`กรุณากำหนดให้ .card-desc สามารถยืดตัวได้ (flex-grow: 1;) เพื่อผลักดันปุ่มสั่งซื้อให้ลงขอบล่างเสมอกัน`;if(i&&e.defaultView.getComputedStyle(i).position!==`absolute`)return`กรุณากำหนดสไตล์ให้ป้ายบอกโปรโมชัน .card-badge ให้เป็นแบบลอยทับรูปภาพ (position: absolute;)`;let d=t.replace(/\s+/g,``);return!d.includes(`:hover`)||!d.includes(`translateY`)?`อย่าลืมระบุเอฟเฟกต์ยกตัวลอยของการ์ดเมื่อผู้ใช้ชี้เมาส์ในสเตท .menu-card:hover`:!0},hints:[`ใช้ display: flex; flex-direction: column; บนคลาส .menu-card และ .card-content`,`ใส่ค่า flex-grow: 1; ให้กับย่อหน้าบรรยายสินค้า .card-desc เพื่อขยายพื้นที่บีบขอบปุ่ม`,`จัดสไตล์ป้ายลอยโดยกำหนด .card-img-container ให้มี position: relative; และให้ .card-badge มี position: absolute; top: X; right: Y;`]},{id:`midterm-challenge-3`,title:`ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 3 (Visual Radio Cards & Switch Toggle)`,difficulty:`Hard`,points:250,description:`### 📅 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 3: ฟอร์มแบบจดจำสถานะผ่าน CSS
      
จงเขียน CSS เพื่อจัดระบบและสไตล์ของแบบฟอร์มการจอง **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:

1. **สปลิทเลย์เอาต์ 2 ฝั่ง (.split-layout)**:
   - ฝั่งซ้ายเป็นข้อมูลห้อง แผนผังโซนที่นั่ง และฝั่งขวาเป็นแบบฟอร์ม จัดวางแยกกันคนละคอลัมน์กว้าง 35% และ 65% ตามลำดับ
2. **จัดตำแหน่งช่องป้อนข้อมูลด้วย Grid (.form-grid)**:
   - จัดช่องอินพุตกลุ่ม ชื่อ-นามสกุล และ อีเมล-เบอร์โทร ให้แบ่งกันครึ่งละ 50% ตกแต่งให้อยู่แถวเดียวกัน
3. **ระบบปุ่มเลือกแพ็กเกจพื้นที่แบบ Custom Radio Cards (ความท้าทายสูง)**:
   - **กติกา**: ซ่อนปุ่มกลมวิทยุแท้และดั้งเดิมของเบราว์เซอร์ออกไป
   - จัดสไตล์ป้ายฉลาก \`.custom-radio-card\` ให้แสดงเป็นกรอบสี่เหลี่ยมคล้ายบัตรตัวเลือกสวยงาม
   - เมื่อผู้ใช้เลือกแพ็กเกจ (\`input[type="radio"]:checked\`) ให้การ์ดที่อยู่ตามหลังที่เป็นฉลาก (\`+ .custom-radio-card\`) เปลี่ยนกรอบเป็นสีป่าไม้เข้มและพื้นสีกระดาษทองจางๆ เคลื่อนไหวยกลอยขึ้นเบาๆ
4. **ปุ่มสวิตช์ปิดเปิดยอมรับข่าวสาร (Custom Toggle Switch)**:
   - ออกแบบเช็คบ็อกซ์รับข่าวสารให้ออกมาในรูปสไลเดอร์เปิด-ปิด
   - เมื่อผู้ใช้ติ๊กเลือก (\`:checked\`) ให้รางสวิตช์เปลี่ยนเป็นสีเขียวป่าไม้ และขยับเลื่อนลูกแก้วด้านในเลื่อนไปทางขวาด้วยคำสั่ง \`transform: translateX()\``,starterHtml:`<!-- โครงสร้างหน้าจองโต๊ะและแพ็กเกจ (Midterm Booking Part 3) -->
<main class="container">
  <div class="split-layout">
    
    <!-- ส่วนข้อมูลด้านซ้าย -->
    <aside class="info-sidebar">
      <div class="info-card">
        <h3>ระเบียบการสำรองที่นั่ง</h3>
        <p>กรุณาจองล่วงหน้าอย่างน้อย 24 ชั่วโมงและเข้าใช้บริการตรงเวลา</p>
      </div>
    </aside>

    <!-- ส่วนของฟอร์มจองด้านขวา -->
    <section class="form-container">
      <h2>แบบฟอร์มขอเข้าใช้บริการ</h2>
      <form class="booking-form">
        
        <!-- ฟิลด์ชื่อ-นามสกุล -->
        <div class="form-grid">
          <div class="form-group">
            <label for="firstname">ชื่อจริง</label>
            <input type="text" id="firstname" required>
          </div>
          <div class="form-group">
            <label for="lastname">นามสกุล</label>
            <input type="text" id="lastname" required>
          </div>
        </div>

        <!-- Custom Radio Cards เลือกแพ็กเกจ -->
        <div class="form-group">
          <label>เลือกแพ็กเกจบริการ</label>
          <div class="radio-cards-grid">
            
            <div class="radio-card-wrapper">
              <input type="radio" id="pkg-a" name="pkg" checked required>
              <label for="pkg-a" class="custom-radio-card">
                <div class="radio-title">Hot Desk Pass</div>
                <div class="radio-price">฿250 / วัน</div>
              </label>
            </div>

            <div class="radio-card-wrapper">
              <input type="radio" id="pkg-b" name="pkg">
              <label for="pkg-b" class="custom-radio-card">
                <div class="radio-title">Meeting Room</div>
                <div class="radio-price">฿600 / 2 ชม.</div>
              </label>
            </div>

          </div>
        </div>

        <!-- Custom Toggle Switch ยอมรับอีเมลข่าวสาร -->
        <div class="toggle-group">
          <label class="switch-container">
            <input type="checkbox" id="subscribe">
            <span class="switch-slider"></span>
          </label>
          <span class="toggle-label">รับข่าวสารเวิร์กชอปจากเรา</span>
        </div>

        <button type="submit" class="btn btn-primary">ยืนยันข้อมูลจอง</button>
      </form>
    </section>

  </div>
</main>`,starterCss:`/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --accent-light: #f5efe6;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --white: #ffffff;
}

body {
  font-family: sans-serif;
  background-color: #faf8f5;
  margin: 0;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.info-card, .form-container {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,targetHtml:``,targetCss:``,validation:(e,t)=>{let n=e.querySelector(`.split-layout`),r=e.querySelector(`.form-grid`),i=e.querySelector(`.radio-cards-grid`),a=e.querySelector(`.switch-slider`);if(!n||!r||!i||!a)return`กรุณาจัดวางโครงร่างและใช้ชื่อคลาสตามแบบฝึกหัดอย่างถูกต้อง`;let o=e.defaultView.getComputedStyle(n),s=e.defaultView.getComputedStyle(r);if(o.display!==`grid`&&o.display!==`flex`)return`กรุณาจัดวางเลย์เอาต์หน้าแบ่งฝั่ง .split-layout ด้วย Flexbox หรือ Grid`;if(s.display!==`grid`&&s.display!==`flex`)return`กรุณาจัดวางช่องกรอก ชื่อจริง-นามสกุล .form-grid ให้อยู่ระดับแนวนอนเดียวกันด้วย Flexbox หรือ Grid`;let c=t.replace(/\s+/g,``);return c.includes(`checked+`)?!c.includes(`translateX`)&&!c.includes(`transform:translate`)?`กรุณาส่งแอนิเมชันลูกแก้วในสวิตช์เปิดปิดสไลด์ด้วยคำสั่ง transform: translateX(ระยะทาง)`:!0:`ต้องใช้คุณสมบัติสเตทเลือกของการ์ดวิทยุและสวิตช์ด้วย Selector ดักจับประเภท :checked + .custom-radio-card และ :checked + .switch-slider`},hints:[`จัด Grid 2 คอลัมน์ให้หน้าแบ่งฝั่งด้วย grid-template-columns: 35% 65%;`,`จัดสปันกรอบตัวเลือกด้วย input[type='radio']:checked + .custom-radio-card { border-color: var(--primary-color); background-color: var(--accent-light); }`,`เลื่อนตุ่มสวิตช์โดยสไตล์สไลเดอร์ตอนเช็ค: input[type='checkbox']:checked + .switch-slider::before { transform: translateX(27px); }`]},{id:`challenge-sales-table`,title:`ภารกิจที่ 17: Premium Sales Report (ตารางสรุปยอดขายระดับโปร)`,difficulty:`Intermediate`,points:150,description:'### 📊 ภารกิจสร้างตารางสรุปยอดขายสินค้า\n\nจงสร้างตารางแสดงยอดขายที่มีดีไซน์สวยงาม อ่านง่าย และเป็นระเบียบตามเงื่อนไขต่อไปนี้:\n\n**1. โครงสร้าง HTML:**\n- สร้างแท็ก `<table>` และกำหนดคลาสเป็น `.sales-table`\n- ส่วนหัวตาราง `<thead>` มี 1 แถว (`<tr>`) ประกอบด้วยเซลล์หัวข้อ (`<th>`) 4 ช่องตามลำดับ: **"สินค้า"**, **"หมวดหมู่"**, **"จำนวนที่ขายได้"**, และ **"ยอดขายรวม"**\n- ส่วนเนื้อหาตาราง `<tbody>` มีแถวข้อมูล 3 แถวดังนี้:\n  1. กาแฟดริป | เครื่องดื่ม | 120 แก้ว | ฿9,600\n  2. เค้กช็อกโกแลต | เบเกอรี่ | 45 ชิ้น | ฿5,400\n  3. ครัวซองต์เนยสด | เบเกอรี่ | 80 ชิ้น | ฿7,200\n- ส่วนท้ายตาราง `<tfoot>` มีแถวสรุปยอดรวม 1 แถว โดยเซลล์แรกมีข้อความว่า **"รวมทั้งหมด"** และรวมเซลล์เข้าด้วยกัน 3 คอลัมน์ (ใช้แอตทริบิวต์ `colspan="3"`) และเซลล์ที่สองมีข้อความว่า **"฿22,200"**\n\n**2. การตกแต่ง CSS:**\n- กำหนดให้ตารางมีความกว้างเต็มความกว้างของหน้าจอ (`width: 100%`) และใช้ขอบตารางแบบยุบรวมกัน (`border-collapse: collapse;`)\n- ส่วนเซลล์หัวตาราง (`thead th`) ต้องมีพื้นหลังสีเข้ม `#1e293b`, ข้อความสีขาว `#ffffff`, และชิดซ้าย (`text-align: left;`)\n- ทุกเซลล์ (`th` และ `td`) ต้องมีช่องไฟภายใน (`padding: 12px 16px`)\n- แถวข้อมูลใน `tbody` ทุกแถวต้องมีเส้นขอบด้านล่างสีเทาอ่อน (`border-bottom: 1px solid #e2e8f0`)\n- ทำสลับสีแถวตาราง (Zebra Striping) โดยแถวที่เป็นลำดับคู่ใน `tbody` (`tbody tr:nth-child(even)`) มีพื้นหลังสี `#f8fafc`\n- เพิ่มเอฟเฟกต์โฮเวอร์บนแถว (`tbody tr:hover`) ให้เปลี่ยนสีพื้นหลังเป็น `#f1f5f9`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ตารางสรุปยอดขาย</title>
</head>
<body>
  <!-- 1. สร้างตารางคลาส sales-table พร้อม thead, tbody, tfoot และข้อมูลตามที่กำหนดที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ตารางสรุปยอดขาย</title>
</head>
<body>
  <table class="sales-table">
    <thead>
      <tr>
        <th>สินค้า</th>
        <th>หมวดหมู่</th>
        <th>จำนวนที่ขายได้</th>
        <th>ยอดขายรวม</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>กาแฟดริป</td>
        <td>เครื่องดื่ม</td>
        <td>120 แก้ว</td>
        <td>฿9,600</td>
      </tr>
      <tr>
        <td>เค้กช็อกโกแลต</td>
        <td>เบเกอรี่</td>
        <td>45 ชิ้น</td>
        <td>฿5,400</td>
      </tr>
      <tr>
        <td>ครัวซองต์เนยสด</td>
        <td>เบเกอรี่</td>
        <td>80 ชิ้น</td>
        <td>฿7,200</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">รวมทั้งหมด</td>
        <td>฿22,200</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,starterCss:`body {
  font-family: sans-serif;
  background-color: #fafafa;
  padding: 40px;
}

.sales-table {
  /* เริ่มต้นตกแต่งตารางของคุณที่นี่ */
  
}`,targetCss:`body {
  font-family: sans-serif;
  background-color: #fafafa;
  padding: 40px;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.sales-table th {
  background-color: #1e293b;
  color: #ffffff;
  text-align: left;
}

.sales-table th, .sales-table td {
  padding: 12px 16px;
}

.sales-table tbody tr {
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.2s;
}

.sales-table tbody tr:nth-child(even) {
  background-color: #f8fafc;
}

.sales-table tbody tr:hover {
  background-color: #f1f5f9;
}

.sales-table tfoot {
  font-weight: bold;
  background-color: #f8fafc;
  border-top: 2px solid #e2e8f0;
}`,validation:(e,t)=>{let n=e.querySelector(`table.sales-table`);if(!n)return`ไม่พบแท็ก table คลาส .sales-table`;let r=n.querySelector(`thead`),i=n.querySelector(`tbody`),a=n.querySelector(`tfoot`);if(!r||!i||!a)return`กรุณาจัดโครงสร้างตารางให้มีครบทั้ง thead, tbody, และ tfoot`;if(i.querySelectorAll(`tr`).length<3)return`ข้อมูลใน tbody ต้องมีอย่างน้อย 3 แถวตามที่โจทย์ระบุ`;let o=a.querySelectorAll(`td`);if(!Array.from(o).some(e=>e.getAttribute(`colspan`)===`3`))return`อย่าลืมรวมเซลล์ใน tfoot ให้มีขนาด 3 คอลัมน์ด้วย colspan="3"`;let s=e.defaultView.getComputedStyle(n),c=r.querySelector(`th`),l=i.querySelector(`td`);if(!c||!l)return`กรุณาเขียนแถวและเซลล์ข้อมูลตารางให้เรียบร้อย`;let u=e.defaultView.getComputedStyle(c),d=e.defaultView.getComputedStyle(l);if(s.borderCollapse!==`collapse`)return`กรุณากำหนด border-collapse: collapse; ให้กับคลาส .sales-table`;if(s.width.indexOf(`%`)===-1&&parseFloat(s.width)<300)return`กรุณากำหนดให้ตารางมีความกว้างกว้างเต็มพื้นที่ด้วย width: 100%`;let f=u.backgroundColor.replace(/\s+/g,``);if(f!==`rgb(30,41,59)`&&f!==`#1e293b`)return`กรุณากำหนดสีพื้นหลังหัวตาราง th เป็นสี #1e293b`;let p=parseFloat(u.paddingTop),m=parseFloat(d.paddingTop);if(p<10||m<10)return`กรุณากำหนดช่องไฟภายในเซลล์ด้วย padding: 12px 16px;`;let h=t.replace(/\s+/g,``);return!h.includes(`:nth-child(even)`)||!h.includes(`:hover`)?`อย่าลืมเขียน CSS สลับสีแถวด้วย :nth-child(even) และเอฟเฟกต์โฮเวอร์เมาส์ด้วย :hover`:!0},hints:[`ใน HTML ใช้ <td colspan='3'>รวมทั้งหมด</td> เพื่อรวมช่องเซลล์`,`ใน CSS ใช้ .sales-table { width: 100%; border-collapse: collapse; }`,`สำหรับ Zebra-striping ใช้ .sales-table tbody tr:nth-child(even) { background-color: #f8fafc; }`]},{id:`challenge-modern-form`,title:`ภารกิจที่ 18: Modern Newsletter & Survey Form (แบบฟอร์มสมัครข่าวสารและประเมินผล)`,difficulty:`Intermediate`,points:150,description:'### 📝 ภารกิจออกแบบและจัดแต่งแบบฟอร์มการรับข้อมูล\n\nจงสร้างแบบฟอร์มที่มีความทันสมัย สะอาดตา และมีการจัดหน้าอย่างถูกต้องตามเงื่อนไขต่อไปนี้:\n\n**1. โครงสร้าง HTML:**\n- สร้างแท็ก `<form>` และกำหนดคลาสเป็น `.modern-form`\n- ภายในฟอร์มมีหัวข้อ `<h2>` เขียนว่า **"ร่วมเป็นสมาชิกและแสดงความคิดเห็น"**\n- ช่องรับข้อมูลประกอบด้วยช่องเหล่านี้:\n  - **ชื่อผู้ใช้งาน:** ใช้แท็ก `<input type="text" placeholder="ระบุชื่อของคุณ" required>`\n  - **อีเมล:** ใช้แท็ก `<input type="email" placeholder="example@domain.com" required>`\n  - **สนใจเรียนภาษาใดเป็นพิเศษ:** ใช้แท็ก `<select>` ที่มีตัวเลือกด้านในสองตัวเลือกคือ "HTML & CSS" และ "JavaScript"\n  - **ข้อคิดเห็นเพิ่มเติม:** ใช้แท็ก `<textarea placeholder="พิมพ์ข้อเสนอแนะที่นี่..." required></textarea>`\n  - **ยอมรับเงื่อนไข:** ใช้แท็ก `<input type="checkbox" id="agree" required>` พร้อมแท็ก `<label for="agree">` เขียนว่า **"ฉันยอมรับเงื่อนไขการให้บริการ"**\n  - **ปุ่มยืนยันสมัคร:** ใช้แท็ก `<button type="submit" class="submit-btn">` มีข้อความด้านในเขียนว่า **"ส่งข้อมูลสมัคร"**\n\n**2. การตกแต่ง CSS:**\n- กล่องฟอร์ม `.modern-form`: กำหนดความกว้างสูงสุด `max-width: 450px;` จัดกึ่งกลางหน้าจอ (`margin: 0 auto;`), ใส่สีพื้นหลังขาว, ขอบมนมน `12px`, มีช่องไฟด้านใน `24px` และมีเงาด้านหลังบางเบา (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)`)\n- ปรับสไตล์ช่องกรอกข้อมูล (`input[type="text"], input[type="email"], select, textarea`) ให้มีขนาดความกว้างเต็มกล่อง (`width: 100%`), ใส่ขอบมน `6px`, กรอบขอบสีเทาอ่อน `#cbd5e1`, และแพดดิ้ง `10px`\n- ใส่ลูกเล่นความน่าสนใจเมื่อผู้ใช้กดเลือกโฟกัสช่องกรอกข้อมูล (`:focus`) โดยกำหนดให้สีกรอบเปลี่ยนเป็นสีน้ำเงิน `#3b82f6` และแสดงวงแหวนเงาสีน้ำเงินจาง ๆ รอบกล่อง (`box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);`) พร้อมใส่ Transition สั้น ๆ เพื่อให้ลื่นไหล\n- ปุ่มกดส่งใบสมัคร `.submit-btn`: สีพื้นหลังเป็นสีน้ำเงิน `#2563eb`, อักษรขาว, ไม่มีเส้นกรอบ, ขอบมน `6px`, แพดดิ้งพอเหมาะ และเมื่อชี้เมาส์ (`:hover`) สีจะเปลี่ยนเป็นเข้มขึ้นเป็น `#1d4ed8`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สมัครสมาชิกและแสดงความคิดเห็น</title>
</head>
<body>
  <!-- 1. ออกแบบฟอร์มคลาส modern-form พร้อมหัวข้อ h2 และช่องรับข้อมูลต่างๆ ที่นี่ -->
  
</body>
</html>`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สมัครสมาชิกและแสดงความคิดเห็น</title>
</head>
<body>
  <form class="modern-form">
    <h2>ร่วมเป็นสมาชิกและแสดงความคิดเห็น</h2>
    
    <div class="form-group">
      <label>ชื่อผู้ใช้งาน</label>
      <input type="text" placeholder="ระบุชื่อของคุณ" required>
    </div>
    
    <div class="form-group">
      <label>อีเมล</label>
      <input type="email" placeholder="example@domain.com" required>
    </div>
    
    <div class="form-group">
      <label>สนใจเรียนภาษาใดเป็นพิเศษ</label>
      <select required>
        <option value="html-css">HTML & CSS</option>
        <option value="javascript">JavaScript</option>
      </select>
    </div>
    
    <div class="form-group">
      <label>ข้อคิดเห็นเพิ่มเติม</label>
      <textarea placeholder="พิมพ์ข้อเสนอแนะที่นี่..." required></textarea>
    </div>
    
    <div class="checkbox-group">
      <input type="checkbox" id="agree" required>
      <label for="agree">ฉันยอมรับเงื่อนไขการให้บริการ</label>
    </div>
    
    <button type="submit" class="submit-btn">ส่งข้อมูลสมัคร</button>
  </form>
</body>
</html>`,starterCss:`body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
}

.modern-form {
  /* ตกแต่งกล่องฟอร์มหลักที่นี่ */
  
}

.modern-form input[type="text"],
.modern-form input[type="email"],
.modern-form select,
.modern-form textarea {
  /* ตกแต่งความสวยงามของช่องป้อนข้อมูลที่นี่ */
  
}

.submit-btn {
  /* จัดแต่งสไตล์ปุ่มยืนยันส่งข้อมูลที่นี่ */
  
}`,targetCss:`body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
}

.modern-form {
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.modern-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #0f172a;
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #475569;
}

.modern-form input[type="text"],
.modern-form input[type="email"],
.modern-form select,
.modern-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.modern-form input[type="text"]:focus,
.modern-form input[type="email"]:focus,
.modern-form select:focus,
.modern-form textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.checkbox-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group label {
  font-size: 14px;
  color: #475569;
}

.submit-btn {
  width: 100%;
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #1d4ed8;
}`,validation:(e,t)=>{let n=e.querySelector(`form.modern-form`);if(!n)return`ไม่พบฟอร์มคลาส .modern-form`;let r=n.querySelector(`h2`);if(!r||!r.textContent.includes(`ร่วมเป็นสมาชิกและแสดงความคิดเห็น`))return`กรุณาใส่หัวข้อ <h2> ร่วมเป็นสมาชิกและแสดงความคิดเห็น ภายในฟอร์ม`;let i=n.querySelector(`input[type="text"]`),a=n.querySelector(`input[type="email"]`),o=n.querySelector(`select`),s=n.querySelector(`textarea`),c=n.querySelector(`input[type="checkbox"]`),l=n.querySelector(`.submit-btn`);if(!i||!a||!o||!s||!c||!l)return`กรุณาตรวจสอบว่ามีกล่อง ชื่อ (text), อีเมล (email), ภาษา (select), ความคิดเห็น (textarea), ยอมรับเงื่อนไข (checkbox) และปุ่มกด (.submit-btn) ครบถ้วน`;let u=e.defaultView.getComputedStyle(n),d=e.defaultView.getComputedStyle(i),f=e.defaultView.getComputedStyle(l);if(parseFloat(u.maxWidth)!==450)return`กรุณากำหนดความกว้างสูงสุดของฟอร์มเป็น max-width: 450px;`;if(u.backgroundColor.replace(/\s+/g,``)!==`rgb(255,255,255)`&&u.backgroundColor!==`white`)return`กรุณากำหนดพื้นหลังของฟอร์มเป็นสีขาว`;if(d.width.indexOf(`%`)===-1&&parseFloat(d.width)<300)return`กรุณากำหนดความกว้างของช่องป้อนข้อมูลเป็น width: 100% เพื่อให้กว้างเต็มหน้าต่างการใช้งาน`;let p=t.replace(/\s+/g,``);return!p.includes(`:focus`)||!p.includes(`box-shadow`)?`อย่าลืมกำหนดการเปลี่ยนสีขอบและเงาเมื่อช่องป้อนข้อมูลถูกโฟกัสด้วย pseudo-class :focus`:f.backgroundColor.replace(/\s+/g,``)!==`rgb(37,99,235)`&&f.backgroundColor!==`#2563eb`?`กรุณากำหนดสีพื้นหลังปุ่มส่งข้อมูลเป็นสี #2563eb`:!0},hints:[`ใน HTML ครอบช่องป้อนข้อมูลด้วยกล่อง div เพื่อจัดระยะห่างเป็นระเบียบ`,`ใน CSS กำหนด .modern-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }`,`สำหรับปุ่ม โฮเวอร์ปุ่มโดยใช้ .submit-btn:hover { background-color: #1d4ed8; }`]}]},b={lessons:[{id:`js-intro-display`,title:`1. การแทรกสคริปต์และคำสั่งแสดงผล (Display & Insertion)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 8-15)`,description:'เริ่มต้นเรียนรู้การทำงานของภาษา JavaScript บนหน้าเว็บ!\n      \n**รูปแบบการแทรก JavaScript เข้าสู่ HTML:**\n1. **Inline:** เขียนในแอตทริบิวต์ เช่น `<button onclick="alert(\'สวัสดี!\')">คลิก</button>`\n2. **Internal:** เขียนภายในแท็ก `<script> ... <\/script>`\n3. **External:** ดึงไฟล์สคริปต์ภายนอก เช่น `<script src="script.js"><\/script>`\n\n**คำสั่งแสดงผลข้อมูลยอดนิยม:**\n- `document.getElementById(id).innerHTML = "ข้อความ"` : เขียนหรือแทนที่เนื้อหาใน HTML element\n- `console.log(data)` : พิมพ์ข้อมูลออกทาง Developer Console เพื่อทดสอบหรือดีบั๊ก\n- `window.alert(message)` : แสดงกล่องข้อความแจ้งเตือน (Pop-up)\n\n**เป้าหมายการฝึกฝน:**\n1. ในไฟล์ `script.js` ให้ค้นหา element ที่มี id เป็น `"output"`\n2. กำหนดให้ `innerHTML` ของ element นั้นแสดงข้อความว่า **"Hello JavaScript!"**\n3. ใช้คำสั่ง `console.log("Welcome to JS Academy")` เพื่อส่งข้อความออกไปยังคอนโซล',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>JS Introduction</title>
</head>
<body>
  <h1 id="output">รอข้อความจาก JavaScript...</h1>
</body>
</html>`,starterCss:`body {
  font-family: 'Sarabun', sans-serif;
  padding: 30px;
  background: #f1f5f9;
}
#output {
  color: #2563eb;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,starterJs:`// เขียนโค้ด JavaScript ของคุณที่นี่
`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>JS Introduction</title>
</head>
<body>
  <h1 id="output">Hello JavaScript!</h1>
</body>
</html>`,targetCss:`body { font-family: 'Sarabun', sans-serif; padding: 30px; background: #f1f5f9; } #output { color: #2563eb; padding: 16px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }`,targetJs:`document.getElementById("output").innerHTML = "Hello JavaScript!";
console.log("Welcome to JS Academy");`,validation:(e,t,n)=>{let r=e.getElementById(`output`);return r?r.textContent.includes(`Hello JavaScript!`)?n.includes(`console.log`)?!0:`อย่าลืมเรียกใช้คำสั่ง console.log เพื่อพิมพ์ข้อความออกทางคอนโซลด้วยนะครับ`:`ข้อความใน #output ต้องเป็น 'Hello JavaScript!' (ใช้ document.getElementById('output').innerHTML = 'Hello JavaScript!')`:`ไม่พบ Element ที่มี id='output' ในเอกสาร HTML`},hints:[`ใช้: document.getElementById('output').innerHTML = 'Hello JavaScript!';`,`ตามด้วย: console.log('Welcome to JS Academy');`]},{id:`js-variables`,title:`2. ตัวแปรและการประกาศ (var, let, const)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 19-27)`,description:'การประกาศตัวแปรในภาษา JavaScript ยุคปัจจุบันมี 3 คีย์เวิร์ดหลัก:\n      \n1. `var` : วิธีดั้งเดิม (ES5) มีขอบเขตแบบ Function scope หรือ Global และมีพฤติกรรม Hoisting\n2. `let` : แนะนำสำหรับตัวแปรที่ **ต้องเปลี่ยนค่าได้** มีขอบเขตแบบ Block scope `{ ... }` และไม่อนุญาตให้ประกาศชื่อซ้ำในบล็อกเดียวกัน\n3. `const` : สำหรับค่าคงที่ที่ไม่ต้องการให้ Reassign (กำหนดค่าใหม่) อีกเด็ดขาด\n\n**กฎการตั้งชื่อตัวแปร (Naming Convention):**\n- ขึ้นต้นด้วยตัวอักษร, `_` หรือ `$` (ห้ามขึ้นต้นด้วยตัวเลข)\n- เป็น Case-sensitive เช่น `myVar` ต่างจาก `myvar`\n- นิยมใช้รูปแบบ camelCase เช่น `studentScore`\n\n**เป้าหมายการฝึกฝน:**\n1. ประกาศตัวแปรคงที่ `const courseName = "JavaScript Fundamental";`\n2. ประกาศตัวแปร `let score = 85;`\n3. แสดงผลค่าทั้งสองลงใน element id `"info"` ด้วย Template Literal (`` `คอร์ส: ${courseName} | คะแนน: ${score}` ``)\n4. พิมพ์ค่า `score` ออกทาง `console.log`',starterHtml:`<div class="card">
  <h2>ข้อมูลการเรียนรู้</h2>
  <p id="info">รอการแสดงผลตัวแปร...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
#info { font-size: 18px; font-weight: bold; color: #0284c7; }`,starterJs:`// ประกาศตัวแปร const และ let ตามโจทย์
`,targetHtml:`<div class="card">
  <h2>ข้อมูลการเรียนรู้</h2>
  <p id="info">คอร์ส: JavaScript Fundamental | คะแนน: 85</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; background: #f8fafc; } .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } #info { font-size: 18px; font-weight: bold; color: #0284c7; }`,targetJs:'const courseName = "JavaScript Fundamental";\nlet score = 85;\ndocument.getElementById("info").innerHTML = `คอร์ส: ${courseName} | คะแนน: ${score}`;\nconsole.log("คะแนน:", score);',validation:(e,t,n)=>{if(!n.includes(`const `)||!n.includes(`courseName`))return`กรุณาประกาศตัวแปร const courseName ตามคำสั่ง`;if(!n.includes(`let `)||!n.includes(`score`))return`กรุณาประกาศตัวแปร let score ตามคำสั่ง`;let r=e.getElementById(`info`);return!r||!r.textContent.includes(`JavaScript Fundamental`)||!r.textContent.includes(`85`)?`กรุณานำค่า courseName และ score ไปใส่ใน #info ให้ถูกต้อง`:!0},hints:[`const courseName = 'JavaScript Fundamental';`,`let score = 85;`,"document.getElementById('info').innerHTML = `คอร์ส: ${courseName} | คะแนน: ${score}`;"]},{id:`js-operators`,title:`3. ตัวดำเนินการและการคำนวณ (Operators & Ternary)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 28-41)`,description:'JavaScript มีตัวดำเนินการหลากหลายประเภทที่จำเป็นต้องใช้ในการพัฒนา:\n      \n- **Arithmetic:** `+`, `-`, `*`, `/`, `%` (หารเอาเศษ), `**` (ยกกำลัง), `++`, `--`\n- **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`\n- **Strict Equality:** `===` และ `!==` (เช็คทั้งค่าและชนิดข้อมูล แนะนำให้ใช้เสมอ แทน `==`)\n- **Logical:** `&&` (AND), `||` (OR), `!` (NOT)\n- **Ternary Operator:** ตัวดำเนินการย่อเงื่อนไข `condition ? trueValue : falseValue`\n\n**เป้าหมายการฝึกฝน:**\n1. กำหนดตัวแปร `let price = 500;` และ `let discount = 50;`\n2. คำนวณราคาสุทธิ `let total = price - discount;`\n3. ใช้ Ternary Operator ตรวจสอบสถานะการจัดส่ง: ถ้า `total >= 400` ให้ได้ `"ส่งฟรี (Free Shipping)"` ถ้าไม่ถึงให้แสดงว่า `"มีค่าส่ง 50 บาท"`\n4. แสดงราคาสุทธิและสถานะจัดส่งใน element id `"summary"`',starterHtml:`<div class="box">
  <h3>สรุปคำสั่งซื้อ</h3>
  <div id="summary">กำลังคำนวณ...</div>
</div>`,starterCss:`body { font-family: sans-serif; padding: 25px; }
.box { border: 2px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 350px; }
#summary { margin-top: 10px; font-size: 16px; color: #334155; }`,starterJs:`let price = 500;
let discount = 50;
let total = price - discount;

// ใช้ Ternary Operator กำหนด shippingStatus
let shippingStatus = total >= 400 ? "ส่งฟรี (Free Shipping)" : "มีค่าส่ง 50 บาท";

// แสดงผลใน #summary
`,targetHtml:`<div class="box">
  <h3>สรุปคำสั่งซื้อ</h3>
  <div id="summary">ยอดรวม: 450 บาท (ส่งฟรี (Free Shipping))</div>
</div>`,targetCss:`body { font-family: sans-serif; padding: 25px; } .box { border: 2px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 350px; } #summary { margin-top: 10px; font-size: 16px; color: #334155; }`,targetJs:`let price = 500;
let discount = 50;
let total = price - discount;
let shippingStatus = total >= 400 ? "ส่งฟรี (Free Shipping)" : "มีค่าส่ง 50 บาท";
document.getElementById("summary").innerHTML = \`ยอดรวม: \${total} บาท (\${shippingStatus})\`;`,validation:(e,t,n)=>{let r=e.getElementById(`summary`);return r?!r.textContent.includes(`450`)||!r.textContent.includes(`ส่งฟรี`)?`ผลลัพธ์ใน #summary ต้องมียอด 450 และสถานะ 'ส่งฟรี (Free Shipping)'`:n.includes(`?`)?!0:`กรุณาใช้ Ternary Operator (?) ในการตัดสินเงื่อนไขค่าจัดส่ง`:`ไม่พบ element #summary`},hints:["document.getElementById('summary').innerHTML = `ยอดรวม: ${total} บาท (${shippingStatus})`;"]},{id:`js-objects`,title:`4. ออบเจกต์และการเข้าถึงข้อมูล (Objects & Methods)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 50-61)`,description:'Object ใน JavaScript เก็บข้อมูลในรูปแบบของคู่ **Key : Value**\n      \n```javascript\nconst student = {\n  name: "Somchai",\n  age: 20,\n  skills: ["HTML", "CSS", "JS"],\n  getGrade: function(score) {\n    return score >= 80 ? "A" : "B";\n  }\n};\n```\n\n**การเข้าถึง Property:**\n- Dot notation: `student.name`\n- Bracket notation: `student["age"]`\n\n**คำสั่งจัดการ Object ที่สำคัญ:**\n- `Object.keys(obj)` : ดึงรายการ key ทั้งหมดออกมาเป็น Array\n- `Object.values(obj)` : ดึงรายการ value ทั้งหมดออกมาเป็น Array\n- `JSON.stringify(obj)` : แปลง Object ให้อยู่ในรูป JSON string\n\n**เป้าหมายการฝึกฝน:**\n1. สร้าง Object ชื่อ `car` มี properties:\n   - `brand`: "Toyota"\n   - `model`: "Yaris Cross"\n   - `year`: 2024\n2. เพิ่ม Method ใน Object ชื่อ `getInfo()` คืนค่าเป็น string: `"Toyota Yaris Cross ปี 2024"` โดยใช้คีย์เวิร์ด `this`\n3. เรียก `car.getInfo()` แล้วนำไปแสดงใน element id `"car-display"`',starterHtml:`<div class="card">
  <h2>ข้อมูลรถยนต์</h2>
  <div id="car-display">กำลังโหลดข้อมูล...</div>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.card { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; }
#car-display { font-size: 18px; color: #166534; font-weight: 600; margin-top: 10px; }`,starterJs:`const car = {
  brand: "Toyota",
  model: "Yaris Cross",
  year: 2024,
  // เพิ่มเมธอด getInfo ที่นี่
};

// นำผลลัพธ์จาก car.getInfo() ใส่ใน #car-display
`,targetHtml:`<div class="card">
  <h2>ข้อมูลรถยนต์</h2>
  <div id="car-display">Toyota Yaris Cross ปี 2024</div>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .card { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; } #car-display { font-size: 18px; color: #166534; font-weight: 600; margin-top: 10px; }`,targetJs:`const car = {
  brand: "Toyota",
  model: "Yaris Cross",
  year: 2024,
  getInfo: function() {
    return \`\${this.brand} \${this.model} ปี \${this.year}\`;
  }
};
document.getElementById("car-display").innerHTML = car.getInfo();`,validation:(e,t,n)=>{let r=e.getElementById(`car-display`);return!r||!r.textContent.includes(`Toyota Yaris Cross`)||!r.textContent.includes(`2024`)?`ข้อความใน #car-display ต้องแสดงข้อมูล 'Toyota Yaris Cross ปี 2024' ให้ครบถ้วน`:n.includes(`getInfo`)?!0:`ต้องมีเมธอด getInfo ภายใน object car`},hints:["getInfo: function() { return `${this.brand} ${this.model} ปี ${this.year}`; }",`document.getElementById('car-display').innerHTML = car.getInfo();`]},{id:`js-object-constructors`,title:`5. คอนสตรัคเตอร์ออบเจกต์ (Object Constructors & new)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 57)`,description:'เมื่อต้องการสร้าง Object หลายชิ้นที่มีโครงสร้าง (Properties & Methods) เหมือนกัน เช่น ข้อมูลพนักงาน หรือนักศึกษา สไลด์แนะนำให้ใช้ **Object Constructor Function**:\n\n```javascript\nfunction Person(first, last, age, eye) {\n  this.firstName = first;\n  this.lastName = last;\n  this.age = age;\n  this.eyeColor = eye;\n  this.getFullName = function() {\n    return this.firstName + " " + this.lastName;\n  };\n}\n\n// สร้าง Instance ด้วยคีย์เวิร์ด new\nconst father = new Person("John", "Doe", 50, "blue");\n```\n\n**หัวใจสำคัญ:**\n1. นิยมตั้งชื่อฟังก์ชันด้วยตัวพิมพ์ใหญ่ขึ้นต้น (PascalCase) เช่น `Student`, `Person`\n2. คีย์เวิร์ด `this` ภายใน Constructor ชี้ไปยัง Object ตัวใหม่ที่ถูกสร้างขึ้น\n3. คีย์เวิร์ด `new` ทำหน้าที่สร้าง Object เปล่าแล้วผูก `this` ให้กับคอนสตรัคเตอร์\n\n**เป้าหมายการฝึกฝน:**\n1. ประกาศ Constructor Function ชื่อ `Student(name, score)`\n2. กำหนดคุณสมบัติ `this.name = name;` และ `this.score = score;`\n3. เพิ่มเมธอด `this.getGrade = function() { return this.score >= 50 ? "Pass" : "Fail"; };`\n4. สร้าง Instance ใหม่ชื่อ `s1` ด้วยคำสั่ง:\n   `const s1 = new Student("สมชาย", 85);`\n5. นำข้อมูลมาแสดงผลใน `#student-card`:\n   `document.getElementById("student-card").innerHTML = `${s1.name} - คะแนน ${s1.score} (${s1.getGrade()})`;`',starterHtml:`<div class="card">
  <h3>บัตรรายงานผลคะแนนนักศึกษา</h3>
  <p id="student-card">รอดำเนินการสร้างข้อมูล...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 25px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 400px; border-left: 5px solid #3b82f6; }
#student-card { font-size: 18px; font-weight: bold; color: #1e40af; margin-top: 10px; }`,starterJs:`// 1. ประกาศ Constructor Function: Student(name, score)
// 2. กำหนด this.name, this.score และ this.getGrade()
// 3. สร้าง instance s1 ด้วย new Student("สมชาย", 85)
// 4. แสดงผลใน #student-card
`,targetHtml:`<div class="card">
  <h3>บัตรรายงานผลคะแนนนักศึกษา</h3>
  <p id="student-card">สมชาย - คะแนน 85 (Pass)</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 25px; background: #f8fafc; } .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 400px; border-left: 5px solid #3b82f6; } #student-card { font-size: 18px; font-weight: bold; color: #1e40af; margin-top: 10px; }`,targetJs:`function Student(name, score) {
  this.name = name;
  this.score = score;
  this.getGrade = function() {
    return this.score >= 50 ? "Pass" : "Fail";
  };
}

const s1 = new Student("สมชาย", 85);
document.getElementById("student-card").innerHTML = \`\${s1.name} - คะแนน \${s1.score} (\${s1.getGrade()})\`;`,validation:(e,t,n)=>{let r=e.getElementById(`student-card`);return!r||!r.textContent.includes(`สมชาย`)||!r.textContent.includes(`85`)||!r.textContent.includes(`Pass`)?`ข้อความใน #student-card ต้องแสดง 'สมชาย - คะแนน 85 (Pass)'`:!n.includes(`function Student`)&&!n.includes(`Student = function`)?`ต้องประกาศ Constructor Function ชื่อ Student(name, score)`:!n.includes(`this.name`)||!n.includes(`this.score`)?`ภายใน Constructor Function ต้องผูกค่าด้วย this.name และ this.score`:n.includes(`new Student`)?!0:`ต้องสร้าง Instance ด้วยคีย์เวิร์ด new Student(...)`},hints:[`function Student(name, score) { this.name = name; this.score = score; this.getGrade = function() { return this.score >= 50 ? 'Pass' : 'Fail'; }; }`,`const s1 = new Student('สมชาย', 85);`,"document.getElementById('student-card').innerHTML = `${s1.name} - คะแนน ${s1.score} (${s1.getGrade()})`;"]},{id:`js-arrays`,title:`6. อาร์เรย์และเมธอดจัดการข้อมูล (Arrays & Methods)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 62-67)`,description:'Array ใช้เก็บรายการข้อมูลแบบลำดับ (Index เริ่มจาก 0)\n      \n```javascript\nconst fruits = ["Apple", "Banana", "Orange"];\n```\n\n**เมธอดที่ใช้บ่อย:**\n- `push(item)` : เพิ่มสมาชิกต่อท้าย\n- `pop()` : นำสมาชิกตัวสุดท้ายออก\n- `unshift(item)` : เพิ่มสมาชิกที่ตำแหน่งแรกสุด\n- `shift()` : นำสมาชิกตัวแรกสุดออก\n- `join(separator)` : รวมสมาชิกเป็น String คั่นด้วยเครื่องหมายที่ต้องการ\n- `length` : คุณสมบัติระบุจำนวนสมาชิกทั้งหมด\n\n**เป้าหมายการฝึกฝน:**\n1. กำหนด `const tech = ["HTML", "CSS"];`\n2. ใช้คำสั่ง `.push("JavaScript")` เพื่อเพิ่ม "JavaScript" ต่อท้าย\n3. ใช้คำสั่ง `.join(" ➔ ")` เพื่อรวมคำเป็นข้อความเดียว\n4. นำผลลัพธ์ไปใส่ใน element id `"tech-stack"`',starterHtml:`<div class="badge-container">
  <h3>ทักษะการเขียนเว็บของฉัน:</h3>
  <div id="tech-stack">รอดำเนินการ...</div>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.badge-container { background: #fdf4ff; border: 1px solid #f0abfc; padding: 20px; border-radius: 8px; }
#tech-stack { font-size: 20px; color: #86198f; font-weight: bold; margin-top: 10px; }`,starterJs:`const tech = ["HTML", "CSS"];

// 1. push "JavaScript"
// 2. join ด้วย " ➔ "
// 3. แสดงผลใน #tech-stack
`,targetHtml:`<div class="badge-container">
  <h3>ทักษะการเขียนเว็บของฉัน:</h3>
  <div id="tech-stack">HTML ➔ CSS ➔ JavaScript</div>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .badge-container { background: #fdf4ff; border: 1px solid #f0abfc; padding: 20px; border-radius: 8px; } #tech-stack { font-size: 20px; color: #86198f; font-weight: bold; margin-top: 10px; }`,targetJs:`const tech = ["HTML", "CSS"];
tech.push("JavaScript");
document.getElementById("tech-stack").innerHTML = tech.join(" ➔ ");`,validation:(e,t,n)=>{let r=e.getElementById(`tech-stack`);return!r||!r.textContent.includes(`HTML`)||!r.textContent.includes(`JavaScript`)?`เนื้อหาใน #tech-stack ต้องมี HTML, CSS และ JavaScript`:n.includes(`.push`)?!0:`กรุณาใช้เมธอด .push() ในการเพิ่มข้อมูล`},hints:[`tech.push('JavaScript');`,`document.getElementById('tech-stack').innerHTML = tech.join(' ➔ ');`]},{id:`js-control-loops`,title:`7. การควบคุมทิศทางและลูปวนซ้ำ (Control Flow & Loops)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 68-77)`,description:'การทำซ้ำ (Loops) ใน JavaScript มีหลายรูปแบบ:\n      \n- `for (let i = 0; i < n; i++)` : วนซ้ำตามจำนวนรอบที่ระบุ\n- `while (condition)` : วนซ้ำตราบใดที่เงื่อนไขยังเป็นจริง\n- `for...of` : วนลูปหยิบสมาชิกใน Array หรือ Iterable\n- `for...in` : วนลูปดูชื่อ property (keys) ใน Object\n\n**เป้าหมายการฝึกฝน:**\n1. กำหนดอาร์เรย์ `const scores = [80, 45, 90, 60, 30];`\n2. วนลูปนับจำนวนคนที่ **ผ่านเกณฑ์** (คะแนน >= 50)\n3. สร้างข้อความสรุป: `"ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน"`\n4. แสดงใน element id `"result"`',starterHtml:`<div class="panel">
  <h3>สรุปผลการสอบ</h3>
  <p id="result">กำลังตรวจนับ...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.panel { background: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 8px; }
#result { font-size: 18px; color: #92400e; font-weight: 600; }`,starterJs:`const scores = [80, 45, 90, 60, 30];
let passCount = 0;

// วนลูป scores เพื่อเพิ่ม passCount เมื่อ score >= 50

// แสดงผลใน #result
`,targetHtml:`<div class="panel">
  <h3>สรุปผลการสอบ</h3>
  <p id="result">ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .panel { background: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 8px; } #result { font-size: 18px; color: #92400e; font-weight: 600; }`,targetJs:`const scores = [80, 45, 90, 60, 30];
let passCount = 0;
for (const score of scores) {
  if (score >= 50) {
    passCount++;
  }
}
document.getElementById("result").innerHTML = \`ผ่านเกณฑ์ทั้งหมด \${passCount} คน จากทั้งหมด \${scores.length} คน\`;`,validation:(e,t,n)=>{let r=e.getElementById(`result`);return!r||!r.textContent.includes(`3`)||!r.textContent.includes(`5`)?`ข้อความใน #result ต้องแสดง 'ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน'`:!n.includes(`for`)&&!n.includes(`while`)&&!n.includes(`forEach`)?`กรุณาใช้ loop (เช่น for...of หรือ for) ในการคำนวณ`:!0},hints:[`for (let s of scores) { if (s >= 50) passCount++; }`,"document.getElementById('result').innerHTML = `ผ่านเกณฑ์ทั้งหมด ${passCount} คน จากทั้งหมด ${scores.length} คน`;"]},{id:`js-functions-arrow`,title:`8. ฟังก์ชันและ Arrow Functions (Functions & Scope)`,category:`1. พื้นฐาน JavaScript`,slideRef:`ch4 JavaScript.pdf (หน้า 78-81)`,description:'ฟังก์ชันคือบล็อกคำสั่งที่เขียนไว้เพื่อให้เรียกใช้ซ้ำได้\n      \n**1. Function Declaration (แบบดั้งเดิม):**\n```javascript\nfunction calculateArea(width, height) {\n  return width * height;\n}\n```\n\n**2. Arrow Function (ES6 มาตรฐานปัจจุบัน):**\n```javascript\nconst calculateArea = (width, height) => width * height;\n```\n- ไวยากรณ์สั้น กระชับ\n- ถ้ามีคำสั่ง return เพียงบรรทัดเดียว ไม่ต้องใส่วงเล็บปีกกาและคำว่า `return`\n\n**เป้าหมายการฝึกฝน:**\n1. เขียน Arrow Function ชื่อ `toCelsius` ที่รับพารามิเตอร์ `fahrenheit` และคำนวณสูตร `(fahrenheit - 32) * (5 / 9)`\n2. เรียกใช้ `toCelsius(104)` (ผลลัพธ์จะได้ 40)\n3. นำผลลัพธ์ไปใส่ใน element id `"temp-result"`',starterHtml:`<div class="card">
  <h3>แปลงอุณหภูมิ: 104°F</h3>
  <p id="temp-result">กำลังแปลงค่า...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.card { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #bfdbfe; }
#temp-result { font-size: 20px; font-weight: bold; color: #1d4ed8; }`,starterJs:`// สร้าง Arrow Function ชื่อ toCelsius
const toCelsius = (fahrenheit) => {
  // เขียนสูตรที่นี่
};

// เรียกใช้กับ 104 แล้วแสดงผลใน #temp-result
`,targetHtml:`<div class="card">
  <h3>แปลงอุณหภูมิ: 104°F</h3>
  <p id="temp-result">เท่ากับ 40 °C</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .card { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #bfdbfe; } #temp-result { font-size: 20px; font-weight: bold; color: #1d4ed8; }`,targetJs:'const toCelsius = (f) => (f - 32) * (5 / 9);\ndocument.getElementById("temp-result").innerHTML = `เท่ากับ ${toCelsius(104)} °C`;',validation:(e,t,n)=>{let r=e.getElementById(`temp-result`);return!r||!r.textContent.includes(`40`)?`ผลลัพธ์ใน #temp-result ต้องแสดงค่า 40 °C`:n.includes(`=>`)?!0:`กรุณาเขียนฟังก์ชันด้วยไวยากรณ์ Arrow Function (=>)`},hints:[`const toCelsius = (f) => (f - 32) * 5 / 9;`,"document.getElementById('temp-result').innerHTML = `เท่ากับ ${toCelsius(104)} °C`;"]},{id:`js-dom-selectors`,title:`9. การเข้าถึง HTML Elements (DOM Selectors)`,category:`2. การจัดการ DOM & ฟอร์ม`,slideRef:`ch4 JavaScript_2.pdf (หน้า 1-8)`,description:'DOM (Document Object Model) คือโครงสร้างต้นไม้ออบเจกต์ที่เบราว์เซอร์สร้างขึ้นเมื่อโหลดหน้าเว็บ\n      \n**เมธอดในการเลือก Element ยอดนิยม:**\n1. `document.getElementById("id")` : ค้นหาด้วย ID (ได้ element เดียว)\n2. `document.getElementsByClassName("className")` : ค้นหาด้วย Class (ได้ HTMLCollection)\n3. `document.querySelector("selector")` : ค้นหา element แรกที่ตรงกับ CSS Selector\n4. `document.querySelectorAll("selector")` : ค้นหา element ทั้งหมดที่ตรงกับ CSS Selector (ได้ NodeList)\n\n**เป้าหมายการฝึกฝน:**\n1. ใช้ `document.querySelector(".target")` เลือก element ที่มีคลาส `.target`\n2. เปลี่ยนสีข้อความ `style.color = "crimson"`\n3. เปลี่ยนขนาดตัวอักษร `style.fontSize = "24px"`\n4. เปลี่ยนข้อความด้านในเป็น `"ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!"`',starterHtml:`<div class="container">
  <p class="normal">ข้อความธรรมดา</p>
  <p class="target">รอการปรับแต่งสไตล์...</p>
  <p class="normal">ข้อความธรรมดาอีกข้อความ</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.normal { color: #64748b; }
.target { font-weight: bold; }`,starterJs:`// ใช้ document.querySelector เลือก .target แล้วเปลี่ยนสี ขนาดตัวอักษร และข้อความ
`,targetHtml:`<div class="container">
  <p class="normal">ข้อความธรรมดา</p>
  <p class="target" style="color: crimson; font-size: 24px;">ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!</p>
  <p class="normal">ข้อความธรรมดาอีกข้อความ</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .normal { color: #64748b; } .target { font-weight: bold; }`,targetJs:`const el = document.querySelector(".target");
el.style.color = "crimson";
el.style.fontSize = "24px";
el.innerHTML = "ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!";`,validation:(e,t,n)=>{let r=e.querySelector(`.target`);return!r||!r.textContent.includes(`ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!`)?`ข้อความใน .target ต้องเปลี่ยนเป็น 'ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!'`:n.includes(`querySelector`)?!0:`กรุณาใช้คำสั่ง document.querySelector ตามโจทย์`},hints:[`const el = document.querySelector('.target');`,`el.style.color = 'crimson';`,`el.style.fontSize = '24px';`,`el.innerHTML = 'ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!';`]},{id:`js-event-listeners`,title:`10. การดักจับเหตุการณ์ (addEventListener & Events)`,category:`2. การจัดการ DOM & ฟอร์ม`,slideRef:`ch4 JavaScript_2.pdf (หน้า 12-17)`,description:'การผูก Event ในเว็บยุคปัจจุบัน แนะนำให้ใช้ `addEventListener` เสมอ เพราะรองรับการผูกหลายฟังก์ชันและลบออกได้ง่าย (`removeEventListener`)\n      \n```javascript\nelement.addEventListener("click", function(event) {\n  console.log("ถูกคลิก!", event.target);\n});\n```\n\n**เหตุการณ์ยอดนิยม:**\n- Mouse: `click`, `dblclick`, `mouseenter`, `mouseleave`\n- Keyboard: `keydown`, `keyup`\n- Form: `submit`, `change`, `input`\n\n**เป้าหมายการฝึกฝน (โจทย์จากสไลด์ 1 หน้า 86):**\n1. เลือกปุ่ม `#action-btn`\n2. ผูกอีเวนต์ `click` ด้วย `addEventListener`\n3. เมื่อผู้ใช้คลิกปุ่ม ให้:\n   - เปลี่ยนสีพื้นหลังของปุ่ม `btn.style.backgroundColor = "#10b981"` (สีเขียว)\n   - เปลี่ยนสีข้อความปุ่ม `btn.style.color = "#ffffff"`\n   - เปลี่ยนข้อความบนปุ่มเป็น `"คลิกสำเร็จแล้ว!"`',starterHtml:`<div class="center-box">
  <button id="action-btn">คลิกเพื่อเปลี่ยนสีและข้อความ</button>
</div>`,starterCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; }
#action-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  background: white;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
}`,starterJs:`const btn = document.getElementById("action-btn");

// ใช้ addEventListener ดักจับการคลิก
btn.addEventListener("click", () => {
  // เขียนคำสั่งเปลี่ยนสีพื้นหลัง สีตัวอักษร และข้อความ
});
`,targetHtml:`<div class="center-box">
  <button id="action-btn" style="background-color: rgb(16, 185, 129); color: rgb(255, 255, 255);">คลิกสำเร็จแล้ว!</button>
</div>`,targetCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; } #action-btn { padding: 12px 24px; font-size: 16px; font-weight: bold; border: 2px solid #cbd5e1; border-radius: 8px; background: white; color: #334155; cursor: pointer; transition: all 0.2s ease; }`,targetJs:`const btn = document.getElementById("action-btn");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "#10b981";
  btn.style.color = "#ffffff";
  btn.innerHTML = "คลิกสำเร็จแล้ว!";
});
// Trigger simulate
btn.click();`,validation:(e,t,n)=>{let r=e.getElementById(`action-btn`);return r?!n.includes(`addEventListener`)||!n.includes(`click`)?`กรุณาใช้ addEventListener('click', ...) ในการดักจับเหตุการณ์`:(r.click(),r.textContent.includes(`คลิกสำเร็จแล้ว!`)?!0:`เมื่อคลิกปุ่มแล้ว ข้อความบนปุ่มต้องเปลี่ยนเป็น 'คลิกสำเร็จแล้ว!'`):`ไม่พบปุ่ม #action-btn`},hints:[`btn.addEventListener('click', () => {`,`  btn.style.backgroundColor = '#10b981';`,`  btn.style.color = '#ffffff';`,`  btn.innerHTML = 'คลิกสำเร็จแล้ว!';`,`});`]},{id:`js-form-validation`,title:`11. การตรวจสอบข้อมูลในฟอร์ม (Form Validation)`,category:`2. การจัดการ DOM & ฟอร์ม`,slideRef:`ch4 JavaScript_2.pdf (หน้า 18-23)`,description:'การ Validate ข้อมูลฟอร์มด้วย JavaScript ช่วยป้องกันข้อมูลที่ไม่สมบูรณ์ก่อนส่งไป Server\n      \n```javascript\nfunction validateForm(event) {\n  event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บ Refresh\n  const input = document.getElementById("username");\n  if (input.value.trim() === "") {\n    alert("กรุณากรอกชื่อผู้ใช้!");\n    return false;\n  }\n}\n```\n\n**เป้าหมายการฝึกฝน:**\n1. ดักจับอีเวนต์ `submit` ของฟอร์ม `#reg-form`\n2. ใช้ `e.preventDefault()` ป้องกันการโหลดหน้าใหม่\n3. ตรวจสอบค่าในช่องรหัสผ่าน `#password-input`:\n   - ถ้าความยาวน้อยกว่า 6 ตัวอักษร ให้แสดงข้อความเตือนใน `#error-msg` ว่า `"รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร"` พร้อมเปลี่ยนสีเป็นสีแดง\n   - ถ้าถูกต้อง ให้แสดงข้อความใน `#error-msg` ว่า `"ข้อมูลถูกต้องพร้อมส่ง!"` พร้อมเปลี่ยนสีเป็นสีเขียว',starterHtml:`<form id="reg-form" class="card">
  <h3>สมัครสมาชิก</h3>
  <div class="field">
    <label for="password-input">รหัสผ่าน (ขั้นต่ำ 6 ตัวอักษร):</label>
    <input type="password" id="password-input" placeholder="กรอกรหัสผ่าน">
  </div>
  <p id="error-msg"></p>
  <button type="submit">ส่งข้อมูล</button>
</form>`,starterCss:`body { font-family: sans-serif; padding: 30px; background: #f1f5f9; }
.card { background: white; padding: 24px; border-radius: 8px; max-width: 360px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.field { margin-bottom: 12px; }
input { width: 100%; padding: 8px 12px; margin-top: 6px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
#error-msg { font-size: 14px; font-weight: 500; min-height: 20px; }
button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }`,starterJs:`const form = document.getElementById("reg-form");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ตรวจสอบความยาวรหัสผ่านที่นี่
});
`,targetHtml:`<form id="reg-form" class="card">
  <h3>สมัครสมาชิก</h3>
  <div class="field">
    <label for="password-input">รหัสผ่าน (ขั้นต่ำ 6 ตัวอักษร):</label>
    <input type="password" id="password-input" placeholder="กรอกรหัสผ่าน">
  </div>
  <p id="error-msg" style="color: green;">ข้อมูลถูกต้องพร้อมส่ง!</p>
  <button type="submit">ส่งข้อมูล</button>
</form>`,targetCss:`body { font-family: sans-serif; padding: 30px; background: #f1f5f9; } .card { background: white; padding: 24px; border-radius: 8px; max-width: 360px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .field { margin-bottom: 12px; } input { width: 100%; padding: 8px 12px; margin-top: 6px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; } #error-msg { font-size: 14px; font-weight: 500; min-height: 20px; } button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }`,targetJs:`const form = document.getElementById("reg-form");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.length < 6) {
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร";
  } else {
    errorMsg.style.color = "green";
    errorMsg.innerHTML = "ข้อมูลถูกต้องพร้อมส่ง!";
  }
});`,validation:(e,t,n)=>{let r=e.getElementById(`reg-form`),i=e.getElementById(`password-input`),a=e.getElementById(`error-msg`);if(!r||!i||!a)return`โครงสร้างฟอร์มไม่ครบถ้วน`;if(!n.includes(`preventDefault`))return`อย่าลืมใส่ e.preventDefault() เพื่อป้องกันหน้ารีเฟรช`;let o=e.defaultView?.Event||Event;return i.value=`123`,r.dispatchEvent(new o(`submit`,{cancelable:!0})),a.textContent.includes(`อย่างน้อย 6 ตัวอักษร`)?(i.value=`1234567`,r.dispatchEvent(new o(`submit`,{cancelable:!0})),a.textContent.includes(`ข้อมูลถูกต้องพร้อมส่ง!`)?!0:`ถ้ารหัสผ่านถูกต้อง ต้องแสดงข้อความว่า 'ข้อมูลถูกต้องพร้อมส่ง!'`):`ถ้ารหัสผ่านสั้นกว่า 6 ตัว ต้องแสดงข้อความเตือนว่า 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร'`},hints:[`if (passwordInput.value.length < 6) {`,`  errorMsg.style.color = 'red';`,`  errorMsg.innerHTML = 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร';`,`} else {`,`  errorMsg.style.color = 'green';`,`  errorMsg.innerHTML = 'ข้อมูลถูกต้องพร้อมส่ง!';`,`}`]},{id:`js-dom-crud-elements`,title:`12. การสร้างและลบ Element ใน DOM (createElement & appendChild)`,category:`2. การจัดการ DOM & ฟอร์ม`,slideRef:`ch4 JavaScript_2.pdf (หน้า 30-35)`,description:`การสร้าง Element ขึ้นมาใหม่ด้วย JavaScript และนำไปแทรกในหน้าเว็บ:
      
\`\`\`javascript
// 1. สร้างแท็กใหม่
const newItem = document.createElement("li");

// 2. ใส่ข้อความหรือลูกเล่น
newItem.innerHTML = "หัวข้อใหม่";
newItem.className = "list-item";

// 3. นำไปต่อท้ายพ่อแม่ (Parent)
document.getElementById("my-list").appendChild(newItem);

// 4. การลบโหนด
newItem.remove(); // ลบตัวเอง
\`\`\`

**เป้าหมายการฝึกฝน:**
1. ดักจับการคลิกปุ่ม \`#add-btn\`
2. อ่านค่าข้อความจากช่อง \`#item-input\`
3. ถ้าไม่เป็นค่าว่าง ให้สร้างแท็ก \`<li>\` ใหม่ กำหนดข้อความตามที่พิมพ์
4. ใช้ \`.appendChild()\` นำแท็ก \`<li>\` ไปใส่ใน \`#item-list\`
5. เคลียร์ค่าในช่อง \`#item-input\` ให้เป็นค่าว่าง`,starterHtml:`<div class="todo-box">
  <h3>รายการสิ่งที่ต้องทำ</h3>
  <div class="input-row">
    <input type="text" id="item-input" placeholder="พิมพ์รายการใหม่...">
    <button id="add-btn">เพิ่มรายการ</button>
  </div>
  <ul id="item-list"></ul>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.todo-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 400px; }
.input-row { display: flex; gap: 8px; margin-bottom: 16px; }
input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; }
button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 8px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 4px; margin-bottom: 4px; }`,starterJs:`const addBtn = document.getElementById("add-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  // สร้าง <li> และใช้ appendChild
});
`,targetHtml:`<div class="todo-box">
  <h3>รายการสิ่งที่ต้องทำ</h3>
  <div class="input-row">
    <input type="text" id="item-input" placeholder="พิมพ์รายการใหม่...">
    <button id="add-btn">เพิ่มรายการ</button>
  </div>
  <ul id="item-list">
    <li>เรียนรู้ JavaScript</li>
  </ul>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .todo-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 400px; } .input-row { display: flex; gap: 8px; margin-bottom: 16px; } input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; } button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; } ul { list-style: none; padding: 0; margin: 0; } li { padding: 8px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 4px; margin-bottom: 4px; }`,targetJs:`const addBtn = document.getElementById("add-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  const val = itemInput.value.trim();
  if (val !== "") {
    const li = document.createElement("li");
    li.textContent = val;
    itemList.appendChild(li);
    itemInput.value = "";
  }
});`,validation:(e,t,n)=>{let r=e.getElementById(`add-btn`),i=e.getElementById(`item-input`),a=e.getElementById(`item-list`);return!r||!i||!a?`องค์ประกอบในหน้าไม่ครบถ้วน`:!n.includes(`createElement`)||!n.includes(`appendChild`)?`ต้องใช้ document.createElement('li') และ appendChild ในการเพิ่มองค์ประกอบ`:(i.value=`เรียนรู้ JavaScript`,r.click(),a.children.length===0||!a.textContent.includes(`เรียนรู้ JavaScript`)?`เมื่อพิมพ์ข้อความแล้วกดปุ่ม ต้องมี <li> เพิ่มเข้ามาใน #item-list`:!0)},hints:[`const li = document.createElement('li');`,`li.textContent = itemInput.value;`,`itemList.appendChild(li);`,`itemInput.value = '';`]},{id:`js-dom-tree-advanced`,title:`13. โครงสร้าง DOM Tree ขั้นสูง (insertBefore & replaceChild)`,category:`2. การจัดการ DOM & ฟอร์ม`,slideRef:`ch4 JavaScript_2.pdf (หน้า 24-29, 34-35)`,description:'นอกจากการใช้ `appendChild()` เพื่อต่อท้าย Element แล้ว เอกสาร DOM ในภาษา JavaScript ยังมีเมธอดทรงพลังในการแทรกและแทนที่โหนดตามตำแหน่งที่ต้องการ:\n\n```javascript\n// 1. parentNode.insertBefore(newNode, referenceNode)\n// แทรก newNode ไว้ข้างหน้า referenceNode\nlist.insertBefore(newItem, list.firstChild);\n\n// 2. parentNode.replaceChild(newChild, oldChild)\n// นำ newChild มาแทนที่ oldChild ตัวเดิม\nlist.replaceChild(newBadge, oldBadge);\n```\n\n**คุณสมบัติการท่องต้นไม้ DOM (DOM Navigation):**\n- `parentNode` : โหนดแม่\n- `children` / `childNodes` : รายการโหนดลูก\n- `firstElementChild` / `lastElementChild` : ลูกคนแรก / ลูกคนสุดท้าย\n\n**เป้าหมายการฝึกฝน:**\nในระบบคิวงานบริการ:\n1. สร้าง `<li>` ใหม่สำหรับงานด่วน VIP:\n   - กำหนดข้อความ: `"🔥 งานด่วน VIP: กู้ระบบ Server"`\n   - กำหนดคลาส: `"urgent-item"`\n   - แทรกไว้เป็น **รายการแรกสุดของคิว** ก่อนหน้าลูกคนแรก โดยใช้คำสั่ง:\n     `list.insertBefore(urgentLi, list.firstElementChild);`\n2. สร้าง `<li>` ใหม่สำหรับงานที่อนุมัติแล้ว:\n   - กำหนดข้อความ: `"✅ ตรวจสอบสัญญาเรียบร้อย (Approved)"`\n   - กำหนดคลาส: `"approved-item"`\n   - แทนที่รายการรอตรวจ (`#pending-item`) ด้วยคำสั่ง:\n     `list.replaceChild(approvedLi, document.getElementById("pending-item"));`',starterHtml:`<div class="queue-card">
  <h3>คิวการดำเนินงาน (Task Queue)</h3>
  <ul id="task-list">
    <li id="pending-item" class="pending-item">⏳ รอการตรวจสอบสัญญา</li>
    <li class="regular-item">📄 จัดทำรายงานประจำเดือน</li>
  </ul>
</div>`,starterCss:`body { font-family: sans-serif; padding: 25px; background: #f1f5f9; }
.queue-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 450px; }
ul { list-style: none; padding: 0; margin: 15px 0 0; display: flex; flex-direction: column; gap: 8px; }
li { padding: 12px; border-radius: 8px; font-weight: 500; font-size: 15px; }
.urgent-item { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
.pending-item { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
.regular-item { background: #e2e8f0; color: #334155; }
.approved-item { background: #dcfce7; color: #166534; border: 1px solid #86efac; }`,starterJs:`const list = document.getElementById("task-list");

// 1. สร้าง <li> งานด่วน VIP แล้วแทรกไว้บนสุดด้วย list.insertBefore(urgentLi, list.firstElementChild)
// 2. สร้าง <li> งานอนุมัติแล้ว และแทนที่ #pending-item ด้วย list.replaceChild(approvedLi, oldItem)
`,targetHtml:`<div class="queue-card">
  <h3>คิวการดำเนินงาน (Task Queue)</h3>
  <ul id="task-list">
    <li class="urgent-item">🔥 งานด่วน VIP: กู้ระบบ Server</li>
    <li class="approved-item">✅ ตรวจสอบสัญญาเรียบร้อย (Approved)</li>
    <li class="regular-item">📄 จัดทำรายงานประจำเดือน</li>
  </ul>
</div>`,targetCss:`body { font-family: sans-serif; padding: 25px; background: #f1f5f9; } .queue-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 450px; } ul { list-style: none; padding: 0; margin: 15px 0 0; display: flex; flex-direction: column; gap: 8px; } li { padding: 12px; border-radius: 8px; font-weight: 500; font-size: 15px; } .urgent-item { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; } .pending-item { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; } .regular-item { background: #e2e8f0; color: #334155; } .approved-item { background: #dcfce7; color: #166534; border: 1px solid #86efac; }`,targetJs:`const list = document.getElementById("task-list");

// 1. insertBefore
const urgentLi = document.createElement("li");
urgentLi.className = "urgent-item";
urgentLi.textContent = "🔥 งานด่วน VIP: กู้ระบบ Server";
list.insertBefore(urgentLi, list.firstElementChild);

// 2. replaceChild
const pendingItem = document.getElementById("pending-item");
if (pendingItem) {
  const approvedLi = document.createElement("li");
  approvedLi.className = "approved-item";
  approvedLi.textContent = "✅ ตรวจสอบสัญญาเรียบร้อย (Approved)";
  list.replaceChild(approvedLi, pendingItem);
}`,validation:(e,t,n)=>{let r=e.getElementById(`task-list`);return r?!r.firstElementChild||!r.firstElementChild.textContent.includes(`งานด่วน VIP`)?`รายการแรกสุดของ #task-list ต้องเป็นงานด่วน VIP (ใช้ list.insertBefore(urgentLi, list.firstElementChild))`:e.getElementById(`pending-item`)?`ต้องแทนที่ #pending-item ด้วยโหนดที่อนุมัติแล้ว โดยใช้ list.replaceChild(...)`:!r.textContent.includes(`อนุมัติเรียบร้อย`)&&!r.textContent.includes(`Approved`)?`ต้องมีรายการงานที่อนุมัติแล้ว (Approved) แทนที่รายการเดิม`:n.includes(`insertBefore`)?n.includes(`replaceChild`)?!0:`กรุณาใช้คำสั่ง replaceChild ในการแทนที่โหนดตามโจทย์`:`กรุณาใช้คำสั่ง insertBefore ในการแทรกโหนดตามโจทย์`:`ไม่พบ #task-list ในโครงสร้างเอกสาร`},hints:[`list.insertBefore(urgentLi, list.firstElementChild);`,`const pendingItem = document.getElementById('pending-item');`,`list.replaceChild(approvedLi, pendingItem);`]},{id:`js-this-binding`,title:`14. คีย์เวิร์ด this และการผูกค่า (this & Explicit Binding)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,slideRef:`ch4 JavaScript_3.pptx.pdf (หน้า 1-6)`,description:'คีย์เวิร์ด `this` มีค่าขึ้นอยู่กับ **วิธีการที่ฟังก์ชันถูกเรียกใช้ (How it is invoked)**:\n      \n1. **ใน Object Method:** `this` จะอ้างถึง Object ที่เป็นเจ้าของ Method นั้น\n2. **ใน Event Listener:** `this` จะอ้างถึง Element ที่ได้รับเหตุการณ์นั้น\n3. **Explicit Binding:** การกำหนดค่า `this` แบบเจาะจง:\n   - `call(thisArg, arg1, arg2)` : เรียกใช้ฟังก์ชันทันทีด้วยค่า `this` ที่กำหนด\n   - `apply(thisArg, [args])` : ส่ง arguments เป็น Array\n   - `bind(thisArg)` : สร้างฟังก์ชันใหม่ที่มีค่า `this` ถูกตรึงไว้ถาวร\n\n**เป้าหมายการฝึกฝน:**\n1. มี Object ชื่อ `person1 = { firstName: "Somchai", lastName: "Jaidee" }`\n2. มีฟังก์ชัน `function getFullName() { return this.firstName + " " + this.lastName; }`\n3. ใช้ `getFullName.call(person1)` เพื่อเรียกใช้ฟังก์ชันโดยผูกกับ `person1`\n4. นำผลลัพธ์ไปใส่ใน element id `"name-output"`',starterHtml:`<div class="card">
  <h3>ผลลัพธ์การเรียกใช้ฟังก์ชันด้วย .call()</h3>
  <p id="name-output">รอผลลัพธ์...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 25px; }
.card { background: #faf5ff; border: 1px solid #e9d5ff; padding: 20px; border-radius: 8px; }
#name-output { font-size: 20px; font-weight: bold; color: #7e22ce; }`,starterJs:`const person1 = {
  firstName: "Somchai",
  lastName: "Jaidee"
};

function getFullName() {
  return this.firstName + " " + this.lastName;
}

// ใช้ getFullName.call(person1) และแสดงใน #name-output
`,targetHtml:`<div class="card">
  <h3>ผลลัพธ์การเรียกใช้ฟังก์ชันด้วย .call()</h3>
  <p id="name-output">Somchai Jaidee</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 25px; } .card { background: #faf5ff; border: 1px solid #e9d5ff; padding: 20px; border-radius: 8px; } #name-output { font-size: 20px; font-weight: bold; color: #7e22ce; }`,targetJs:`const person1 = { firstName: "Somchai", lastName: "Jaidee" };
function getFullName() { return this.firstName + " " + this.lastName; }
document.getElementById("name-output").innerHTML = getFullName.call(person1);`,validation:(e,t,n)=>{let r=e.getElementById(`name-output`);return!r||!r.textContent.includes(`Somchai Jaidee`)?`ข้อความใน #name-output ต้องเป็น 'Somchai Jaidee'`:n.includes(`.call`)?!0:`ต้องใช้เมธอด .call() เพื่อส่ง person1 เป็นค่า this`},hints:[`const result = getFullName.call(person1);`,`document.getElementById('name-output').innerHTML = result;`]},{id:`js-timers-interval`,title:`15. การจับเวลาและการทำงานแบบอะซิงโครนัส (setTimeout & setInterval)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,slideRef:`ch4 JavaScript_3.pptx.pdf (หน้า 7-14)`,description:'JavaScript มีคำสั่งตั้งเวลา (Timers) 2 ตัวหลัก:\n      \n1. `setTimeout(func, delayMs)` : รันฟังก์ชัน **เพียง 1 ครั้ง** หลังเวลาผ่านไปตามที่กำหนด\n   - ยกเลิกด้วย: `clearTimeout(timeoutId)`\n2. `setInterval(func, intervalMs)` : รันฟังก์ชัน **วนซ้ำทุกๆ ช่วงเวลา**\n   - ยกเลิกด้วย: `clearInterval(intervalId)`\n\n**เป้าหมายการฝึกฝน:**\n1. เขียนระบบนับเลขถอยหลัง (Countdown) จาก 5 ลงมาถึง 0\n2. เริ่มต้นค่าใน `#timer-display` เป็น `5`\n3. ใช้ `setInterval` รันทุกๆ 1000ms (1 วินาที) ลดค่าลงทีละ 1\n4. เมื่อตัวเลขนับถึง 0 ให้ใช้ `clearInterval` หยุดการนับ แล้วเปลี่ยนข้อความใน `#timer-display` เป็น `"หมดเวลา! (Time\'s Up)"`',starterHtml:`<div class="timer-box">
  <h2>นาฬิกานับถอยหลัง</h2>
  <div id="timer-display">5</div>
</div>`,starterCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #0f172a; color: white; }
.timer-box { text-align: center; }
#timer-display { font-size: 64px; font-weight: 800; color: #38bdf8; margin-top: 20px; }`,starterJs:`let timeLeft = 5;
const display = document.getElementById("timer-display");

// สร้าง setInterval เพื่อลดค่า timeLeft และ clearInterval เมื่อถึง 0
`,targetHtml:`<div class="timer-box">
  <h2>นาฬิกานับถอยหลัง</h2>
  <div id="timer-display">หมดเวลา! (Time's Up)</div>
</div>`,targetCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #0f172a; color: white; } .timer-box { text-align: center; } #timer-display { font-size: 64px; font-weight: 800; color: #38bdf8; margin-top: 20px; }`,targetJs:`let timeLeft = 5;
const display = document.getElementById("timer-display");
const timer = setInterval(() => {
  timeLeft--;
  if (timeLeft > 0) {
    display.innerHTML = timeLeft;
  } else {
    display.innerHTML = "หมดเวลา! (Time's Up)";
    clearInterval(timer);
  }
}, 1000);`,validation:(e,t,n)=>!n.includes(`setInterval`)||!n.includes(`clearInterval`)?`ต้องใช้ setInterval ในการนับถอยหลัง และ clearInterval เมื่อเวลาหมด`:!0,hints:[`const timer = setInterval(() => { timeLeft--; if (timeLeft <= 0) { display.innerHTML = "หมดเวลา! (Time's Up)"; clearInterval(timer); } else { display.innerHTML = timeLeft; } }, 1000);`]},{id:`js-drag-and-drop-api`,title:`16. การลากและวางข้อมูล (HTML5 Drag and Drop API)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,slideRef:`ch4 JavaScript_3.pptx.pdf (หน้า 18-19)`,description:'HTML5 มี Drag and Drop API ในตัว ทำให้สามารถลาก Element ใดก็ได้ไปวางในเป้าหมายที่กำหนด:\n\n**ขั้นตอนการทำงานตามสไลด์:**\n1. **ทำให้ Element สามารถลากได้:**\n   กำหนดแอตทริบิวต์ `draggable="true"`\n2. **ดักจับจังหวะเริ่มลาก (`dragstart`):**\n   ใช้ `ev.dataTransfer.setData("text/plain", ev.target.id)` เพื่อฝาก id หรือข้อมูลของ Element ไว้\n3. **อนุญาตให้วางบน Drop Zone (`dragover`):**\n   โดยปกติเบราว์เซอร์จะไม่อนุญาตให้วาง ต้องดักจับ `dragover` แล้วเรียก `ev.preventDefault()` เพื่อเปิดรับ\n4. **จังหวะที่ปล่อยวาง (`drop`):**\n   เรียก `ev.preventDefault()` และดึงข้อมูลด้วย `const data = ev.dataTransfer.getData("text/plain")` จากนั้นนำ Element ย้ายเข้าไปด้วย `ev.target.appendChild(document.getElementById(data))`\n\n**เป้าหมายการฝึกฝน:**\n1. ให้กล่อง `#drag-item` ดักจับอีเวนต์ `dragstart` และส่ง id ของตนเองด้วย `e.dataTransfer.setData("text/plain", e.target.id)`\n2. ให้โซนวาง `#drop-zone` ดักจับอีเวนต์ `dragover` และเรียก `e.preventDefault()`\n3. ให้โซนวาง `#drop-zone` ดักจับอีเวนต์ `drop`:\n   - เรียก `e.preventDefault()`\n   - อ่าน id ด้วย `const itemId = e.dataTransfer.getData("text/plain");`\n   - ย้าย Element ไปวางด้วย `dropZone.appendChild(document.getElementById(itemId));`\n   - เปลี่ยนข้อความใน `#status-msg` เป็น **"สถานะ: วางวัตถุสำเร็จ!"**',starterHtml:`<div class="dnd-container">
  <h3>HTML5 Drag & Drop Playground</h3>
  <div class="zones">
    <div id="source-zone" class="zone">
      <div id="drag-item" draggable="true" class="box">📦 กล่องพัสดุ A</div>
    </div>
    <div id="drop-zone" class="zone drop-target">
      <p class="placeholder-text">ลากกล่องพัสดุมาวางที่นี่</p>
    </div>
  </div>
  <p id="status-msg">สถานะ: รอดำเนินการ</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 25px; background: #f8fafc; }
.dnd-container { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.06); max-width: 500px; }
.zones { display: flex; gap: 16px; margin: 20px 0; }
.zone { flex: 1; min-height: 120px; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; }
.drop-target { border-color: #3b82f6; background: #eff6ff; }
.box { background: #3b82f6; color: white; padding: 12px 18px; border-radius: 8px; font-weight: bold; cursor: grab; user-select: none; }
.placeholder-text { color: #64748b; font-size: 13px; margin: 0; pointer-events: none; }
#status-msg { font-weight: bold; color: #334155; }`,starterJs:`const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");
const statusMsg = document.getElementById("status-msg");

// 1. ดักจับ dragstart บน dragItem และ setData("text/plain", ...)
// 2. ดักจับ dragover บน dropZone และ preventDefault()
// 3. ดักจับ drop บน dropZone: ย้าย element และเปลี่ยน statusMsg เป็น "สถานะ: วางวัตถุสำเร็จ!"
`,targetHtml:`<div class="dnd-container">
  <h3>HTML5 Drag & Drop Playground</h3>
  <div class="zones">
    <div id="source-zone" class="zone"></div>
    <div id="drop-zone" class="zone drop-target">
      <p class="placeholder-text">ลากกล่องพัสดุมาวางที่นี่</p>
      <div id="drag-item" draggable="true" class="box">📦 กล่องพัสดุ A</div>
    </div>
  </div>
  <p id="status-msg">สถานะ: วางวัตถุสำเร็จ!</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 25px; background: #f8fafc; } .dnd-container { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.06); max-width: 500px; } .zones { display: flex; gap: 16px; margin: 20px 0; } .zone { flex: 1; min-height: 120px; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; } .drop-target { border-color: #3b82f6; background: #eff6ff; } .box { background: #3b82f6; color: white; padding: 12px 18px; border-radius: 8px; font-weight: bold; cursor: grab; user-select: none; } .placeholder-text { color: #64748b; font-size: 13px; margin: 0; pointer-events: none; } #status-msg { font-weight: bold; color: #334155; }`,targetJs:`const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");
const statusMsg = document.getElementById("status-msg");

dragItem.addEventListener("dragstart", (e) => {
  if (e.dataTransfer) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer ? e.dataTransfer.getData("text/plain") : "drag-item";
  const item = document.getElementById(id);
  if (item) {
    dropZone.appendChild(item);
  }
  statusMsg.textContent = "สถานะ: วางวัตถุสำเร็จ!";
});`,validation:(e,t,n)=>{let r=e.getElementById(`drag-item`),i=e.getElementById(`drop-zone`),a=e.getElementById(`status-msg`);return!r||!i||!a?`ไม่พบคอมโพเนนต์ HTML ที่จำเป็น`:n.includes(`dragstart`)?n.includes(`dragover`)?n.includes(`drop`)?!n.includes(`setData`)||!n.includes(`getData`)?`ต้องใช้ dataTransfer.setData ใน dragstart และ dataTransfer.getData ใน drop`:!0:`ต้องมีการดักจับอีเวนต์ 'drop' บน dropZone`:`ต้องมีการดักจับอีเวนต์ 'dragover' บน dropZone และเรียก preventDefault()`:`ต้องมีการดักจับอีเวนต์ 'dragstart' บน element ที่ลาก`},hints:[`dragItem.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', e.target.id); });`,`dropZone.addEventListener('dragover', (e) => { e.preventDefault(); });`,`dropZone.addEventListener('drop', (e) => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); dropZone.appendChild(document.getElementById(id)); statusMsg.textContent = 'สถานะ: วางวัตถุสำเร็จ!'; });`]},{id:`js-web-storage`,title:`17. บันทึกข้อมูลฝั่งไคลเอนต์ (Web Storage: localStorage)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,slideRef:`ch4 JavaScript_3.pptx.pdf (หน้า 20-24)`,description:'Web Storage API ช่วยให้เว็บสามารถจัดเก็บข้อมูลไว้บนเบราว์เซอร์ของผู้ใช้ได้:\n      \n- `localStorage` : ข้อมูลถูกบันทึกอย่างถาวร ไม่หายแม้ปิดแท็บหรือปิดเบราว์เซอร์\n- `sessionStorage` : ข้อมูลจะหายไปทันทีเมื่อปิดแท็บหรือหน้าต่างเบราว์เซอร์\n\n**คำสั่งสำคัญของ localStorage:**\n- `localStorage.setItem("key", "value")` : บันทึกข้อมูล (ค่าต้องเป็น string เสมอ)\n- `localStorage.getItem("key")` : ดึงข้อมูล\n- `localStorage.removeItem("key")` : ลบข้อมูลเฉพาะคีย์\n- `localStorage.clear()` : ล้างข้อมูลทั้งหมด\n- หากต้องการเก็บ Object ต้องแปลงด้วย `JSON.stringify(obj)` และแปลงกลับด้วย `JSON.parse(str)`\n\n**เป้าหมายการฝึกฝน:**\n1. สร้าง Object ข้อมูลนักศึกษา `const user = { name: "Somchai", role: "Student" };`\n2. แปลงเป็น JSON string แล้วบันทึกลงใน `localStorage` โดยใช้คีย์ `"savedUser"`\n3. ดึงค่านั้นกลับมา แปลงกลับเป็น Object ด้วย `JSON.parse`\n4. แสดงชื่อ `user.name` ใน element id `"user-display"`',starterHtml:`<div class="storage-card">
  <h3>ข้อมูลจาก LocalStorage</h3>
  <p id="user-display">กำลังดึงข้อมูล...</p>
</div>`,starterCss:`body { font-family: sans-serif; padding: 20px; }
.storage-card { background: #fefce8; border: 1px solid #fef08a; padding: 20px; border-radius: 8px; }
#user-display { font-size: 20px; font-weight: bold; color: #854d0e; }`,starterJs:`const user = { name: "Somchai", role: "Student" };

// 1. เก็บ user ลงใน localStorage คีย์ "savedUser" ด้วย JSON.stringify
// 2. ดึงค่ากลับมาด้วย JSON.parse
// 3. แสดงชื่อใน #user-display
`,targetHtml:`<div class="storage-card">
  <h3>ข้อมูลจาก LocalStorage</h3>
  <p id="user-display">ผู้ใช้งาน: Somchai</p>
</div>`,targetCss:`body { font-family: sans-serif; padding: 20px; } .storage-card { background: #fefce8; border: 1px solid #fef08a; padding: 20px; border-radius: 8px; } #user-display { font-size: 20px; font-weight: bold; color: #854d0e; }`,targetJs:`const user = { name: "Somchai", role: "Student" };
localStorage.setItem("savedUser", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("savedUser"));
document.getElementById("user-display").innerHTML = \`ผู้ใช้งาน: \${retrieved.name}\`;`,validation:(e,t,n)=>{let r=e.getElementById(`user-display`);return!r||!r.textContent.includes(`Somchai`)?`ข้อความใน #user-display ต้องแสดงชื่อ 'Somchai'`:!n.includes(`localStorage.setItem`)||!n.includes(`localStorage.getItem`)?`ต้องใช้ localStorage.setItem และ localStorage.getItem ตามโจทย์`:!n.includes(`JSON.stringify`)||!n.includes(`JSON.parse`)?`ต้องใช้ JSON.stringify ในการจัดเก็บ และ JSON.parse ในการแปลงข้อมูลกลับ`:!0},hints:[`localStorage.setItem('savedUser', JSON.stringify(user));`,`const retrieved = JSON.parse(localStorage.getItem('savedUser'));`,"document.getElementById('user-display').innerHTML = `ผู้ใช้งาน: ${retrieved.name}`;"]},{id:`js-syntactic-sugar`,title:`18. ไวยากรณ์ทางลัดสมัยใหม่ (Modern Syntactic Sugar: ES6+)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,slideRef:`ES6+ Modern JavaScript Standards (ไวยากรณ์ทางลัดที่ใช้จริงในการพัฒนา)`,description:'ไวยากรณ์ทางลัด (Syntactic Sugar) ใน JavaScript มาตรฐาน ES6+ ช่วยให้เขียนโค้ดได้กระชับ อ่านง่าย ปลอดภัย และลดความผิดพลาดในการเข้าถึงข้อมูล:\n\n**1. Destructuring Assignment (การแยกส่วนค่า):**\n- Object: `const { username, score = 0 } = rawData;` (ดึงค่า property ออกมาเป็นตัวแปร พร้อมใส่ default value ได้)\n- Array: `const [first, second] = colors;`\n\n**2. Spread Operator (`...`):**\n- โคลนและผสาน Object หรือ Array โดยไม่กระทบกับข้อมูลต้นฉบับ:\n`const updated = { ...rawProfile, isVIP: true };`\n\n**3. Optional Chaining (`?.`):**\n- เข้าถึงคุณสมบัติซ้อนลึกอย่างปลอดภัย หากค่าข้างหน้าเป็น `null` หรือ `undefined` จะได้ผลลัพธ์เป็น `undefined` ทันที โดยไม่เกิด TypeError หยุดการทำงานของโปรแกรม:\n`const badgeTitle = userProfile.badge?.title;`\n\n**4. Nullish Coalescing (`??`):**\n- กำหนดค่าเริ่มต้นสำรองเฉพาะเมื่อตัวแปรเป็น `null` หรือ `undefined` เท่านั้น (ไม่เหมือน `||` ที่เผลอตัดค่า `0` หรือ `false` ทิ้ง):\n`const displayBadge = userProfile.badge?.title ?? "Standard";`\n\n---\n**เป้าหมายการฝึกฝน:**\nกำหนด Object `rawUserData` มาให้ใน starter code:\n1. ใช้ **Object Destructuring** ดึงค่า `username` และ `score` จาก `rawUserData`\n2. ใช้ **Spread Operator (`...`)** โคลน `rawUserData` พร้อมเพิ่ม property `status: "Active"` เก็บไว้ในตัวแปร `userProfile`\n3. ใช้ **Optional Chaining (`?.`)** ร่วมกับ **Nullish Coalescing (`??`)** ดึงค่า `userProfile.details?.badge ?? "General"` เก็บไว้ในตัวแปร `badge`\n4. ใช้ **Nullish Coalescing (`??`)** ดึงค่า `userProfile.avatar ?? "default-avatar.png"` เก็บไว้ในตัวแปร `avatar`\n5. กำหนดเนื้อหาใน element `#profile-card` ให้แสดง:\n   - `<div class="info-row"><strong>ชื่อผู้ใช้:</strong> ${username}</div>`\n   - `<div class="info-row"><strong>สถานะ:</strong> ${userProfile.status}</div>`\n   - `<div class="info-row"><strong>คะแนน:</strong> ${score}</div>`\n   - `<div class="badge">${badge}</div>`\n   - `<div class="info-row"><small>รูปโปรไฟล์: ${avatar}</small></div>`',starterHtml:`<div class="profile-card" id="profile-container">
  <h3>บัตรข้อมูลสมาชิก (Modern ES6+)</h3>
  <div id="profile-card">รอการประมวลผลข้อมูล...</div>
</div>`,starterCss:`body { font-family: 'Sarabun', sans-serif; padding: 20px; background: #f8fafc; }
.profile-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 360px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08); }
.profile-card h3 { margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.info-row { margin: 8px 0; color: #334155; font-size: 15px; }
.badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; background: #dbeafe; color: #1d4ed8; margin: 6px 0; }`,starterJs:`const rawUserData = {
  username: "alex99",
  score: 0,
  details: {
    badge: "Gold Member"
  }
};

// 1. Destructuring: ดึง username และ score จาก rawUserData
// 2. Spread: สร้าง userProfile จาก rawUserData พร้อม status: "Active"
// 3. Optional Chaining & Nullish Coalescing: ดึง badge และ avatar
// 4. แสดงผลข้อมูลลงใน #profile-card
`,targetHtml:`<div class="profile-card" id="profile-container">
  <h3>บัตรข้อมูลสมาชิก (Modern ES6+)</h3>
  <div id="profile-card">
    <div class="info-row"><strong>ชื่อผู้ใช้:</strong> alex99</div>
    <div class="info-row"><strong>สถานะ:</strong> Active</div>
    <div class="info-row"><strong>คะแนน:</strong> 0</div>
    <div class="badge">Gold Member</div>
    <div class="info-row"><small>รูปโปรไฟล์: default-avatar.png</small></div>
  </div>
</div>`,targetCss:`body { font-family: 'Sarabun', sans-serif; padding: 20px; background: #f8fafc; }
.profile-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 360px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08); }
.profile-card h3 { margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.info-row { margin: 8px 0; color: #334155; font-size: 15px; }
.badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; background: #dbeafe; color: #1d4ed8; margin: 6px 0; }`,targetJs:`const rawUserData = {
  username: "alex99",
  score: 0,
  details: {
    badge: "Gold Member"
  }
};

const { username, score } = rawUserData;
const userProfile = { ...rawUserData, status: "Active" };
const badge = userProfile.details?.badge ?? "General";
const avatar = userProfile.avatar ?? "default-avatar.png";

const card = document.getElementById("profile-card");
card.innerHTML = \`
  <div class="info-row"><strong>ชื่อผู้ใช้:</strong> \${username}</div>
  <div class="info-row"><strong>สถานะ:</strong> \${userProfile.status}</div>
  <div class="info-row"><strong>คะแนน:</strong> \${score}</div>
  <div class="badge">\${badge}</div>
  <div class="info-row"><small>รูปโปรไฟล์: \${avatar}</small></div>
\`;`,validation:(e,t,n)=>{let r=e.getElementById(`profile-card`);if(!r)return`ไม่พบ element #profile-card`;let i=r.textContent;return i.includes(`alex99`)?i.includes(`Active`)?i.includes(`Gold Member`)?i.includes(`default-avatar.png`)?n.includes(`...`)?!n.includes(`?.`)&&!n.includes(`??`)?`ต้องใช้ไวยากรณ์ Optional Chaining (?.) หรือ Nullish Coalescing (??)`:!n.includes(`{`)||!n.includes(`}`)?`ต้องใช้ Object Destructuring { ... } ในการดึงค่าตัวแปร`:!0:`ต้องใช้ Spread Operator (...) ในการสร้าง userProfile`:`ข้อความใน #profile-card ต้องแสดงรูปเริ่มต้น 'default-avatar.png' ด้วย Nullish Coalescing (??)`:`ข้อความใน #profile-card ต้องแสดงเหรียญรางวัล 'Gold Member' ด้วย Optional Chaining (?.)`:`ข้อความใน #profile-card ต้องแสดงสถานะ 'Active' จากการ Spread`:`ข้อความใน #profile-card ต้องแสดงชื่อผู้ใช้ 'alex99'`},hints:[`const { username, score } = rawUserData;`,`const userProfile = { ...rawUserData, status: 'Active' };`,`const badge = userProfile.details?.badge ?? 'General';`,`const avatar = userProfile.avatar ?? 'default-avatar.png';`,'card.innerHTML = `<div class="info-row"><strong>ชื่อผู้ใช้:</strong> ${username}</div>...`;']}],projects:[{id:`project-bmi-calculator`,title:`โปรเจกต์ 1: Body Mass Index (BMI) Calculator`,category:`ภารกิจโปรเจกต์ (Slide 2: P37)`,difficulty:`Medium`,points:100,description:"สร้างโปรแกรมคำนวณดัชนีมวลกาย (BMI Calculator) ตามโจทย์ในสไลด์ `ch4 JavaScript_2.pdf` หน้า 37\n      \n**สูตรการคำนวณ:**\n`BMI = น้ำหนัก (kg) / (ส่วนสูง (m) * ส่วนสูง (m))`\n\n**เกณฑ์การวินิจฉัย (Condition):**\n- BMI < 18.5 : `ผอมเกินไป (Underweight)` (สีฟ้า)\n- 18.5 <= BMI < 23 : `น้ำหนักปกติ สมส่วน (Normal)` (สีเขียว)\n- 23 <= BMI < 25 : `น้ำหนักเกิน ท้วม (Overweight)` (สีเหลือง)\n- BMI >= 25 : `อ้วน (Obese)` (สีแดง)\n\n**เป้าหมาย:**\n1. กดปุ่ม `#btn-compute` เพื่อดึงค่าน้ำหนัก (`#weight`) และส่วนสูง (`#height` ในหน่วย cm)\n2. แปลงส่วนสูงเป็นเมตร (`height / 100`) แล้วคำนวณ BMI ปัดทศนิยม 2 ตำแหน่งด้วย `.toFixed(2)`\n3. แสดงผลค่า BMI และเกณฑ์สภาพร่างกายใน `#bmi-result`",starterHtml:`<div class="calculator-card">
  <h2>โปรแกรมคำนวณค่า BMI</h2>
  <div class="input-group">
    <label>น้ำหนัก (กก.):</label>
    <input type="number" id="weight" placeholder="เช่น 65">
  </div>
  <div class="input-group">
    <label>ส่วนสูง (ซม.):</label>
    <input type="number" id="height" placeholder="เช่น 170">
  </div>
  <button id="btn-compute">คำนวณค่า BMI</button>
  <div id="bmi-result" class="result-box">กรอกข้อมูลแล้วกดคำนวณ</div>
</div>`,starterCss:`body { font-family: sans-serif; padding: 30px; background: #f8fafc; }
.calculator-card { background: white; max-width: 380px; margin: 0 auto; padding: 24px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
.input-group { margin-bottom: 16px; }
label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; }
input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; }
.result-box { margin-top: 20px; padding: 16px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; background: #f1f5f9; color: #475569; }`,starterJs:`// เขียนโค้ดคำนวณค่า BMI และการแสดงผลลัพธ์ตามเกณฑ์ด้วยตนเองทั้งหมด
`,targetHtml:`<div class="calculator-card">
  <h2>โปรแกรมคำนวณค่า BMI</h2>
  <div class="input-group">
    <label>น้ำหนัก (กก.):</label>
    <input type="number" id="weight" value="65">
  </div>
  <div class="input-group">
    <label>ส่วนสูง (ซม.):</label>
    <input type="number" id="height" value="170">
  </div>
  <button id="btn-compute">คำนวณค่า BMI</button>
  <div id="bmi-result" class="result-box" style="background-color: rgb(220, 252, 231); color: rgb(22, 101, 52);">BMI: 22.49 (น้ำหนักปกติ สมส่วน)</div>
</div>`,targetCss:`body { font-family: sans-serif; padding: 30px; background: #f8fafc; } .calculator-card { background: white; max-width: 380px; margin: 0 auto; padding: 24px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); } .input-group { margin-bottom: 16px; } label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; } input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; } button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; } .result-box { margin-top: 20px; padding: 16px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; background: #f1f5f9; color: #475569; }`,targetJs:`const computeBtn = document.getElementById("btn-compute");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBox = document.getElementById("bmi-result");

computeBtn.addEventListener("click", () => {
  const w = parseFloat(weightInput.value);
  const h = parseFloat(heightInput.value) / 100;
  if (!w || !h) return;
  const bmi = (w / (h * h)).toFixed(2);
  let condition = "";
  if (bmi < 18.5) condition = "ผอมเกินไป";
  else if (bmi < 23) condition = "น้ำหนักปกติ สมส่วน";
  else if (bmi < 25) condition = "น้ำหนักเกิน ท้วม";
  else condition = "อ้วน";
  
  resultBox.innerHTML = \`BMI: \${bmi} (\${condition})\`;
  resultBox.style.backgroundColor = bmi < 23 && bmi >= 18.5 ? "#dcfce7" : "#fee2e2";
  resultBox.style.color = bmi < 23 && bmi >= 18.5 ? "#166534" : "#991b1b";
});`,validation:e=>{let t=e.getElementById(`btn-compute`),n=e.getElementById(`weight`),r=e.getElementById(`height`),i=e.getElementById(`bmi-result`);return!t||!n||!r||!i?`ไม่พบคอมโพเนนต์ที่จำเป็น`:(n.value=`70`,r.value=`175`,t.click(),!i.textContent.includes(`22.86`)&&!i.textContent.includes(`22.9`)?`การคำนวณ BMI สำหรับน้ำหนัก 70 ส่วนสูง 175 ซม. จะต้องได้ค่าประมาณ 22.86`:!0)},hints:[`const bmi = (weight / ((height/100) * (height/100))).toFixed(2);`,"resultBox.innerHTML = `BMI: ${bmi} (${condition})`;"]},{id:`project-color-counter`,title:`โปรเจกต์ 2: Dynamic Color Counter`,category:`ภารกิจโปรเจกต์ (Slide 2: P38)`,difficulty:`Easy`,points:80,description:`สร้างตัวนับตัวเลข (Counter) พร้อมฟังก์ชันเปลี่ยนสีตามค่าที่ได้ ตามโจทย์ในสไลด์ \`ch4 JavaScript_2.pdf\` หน้า 38
      
**ข้อกำหนดการทำงาน:**
1. ปุ่ม **Increase (+)** : เพิ่มตัวเลขทีละ 1
2. ปุ่ม **Decrease (-)** : ลดตัวเลขทีละ 1
3. ปุ่ม **Reset** : รีเซ็ตตัวเลขกลับเป็น 0
4. **The color of number change by the counter value:**
   - ถ้าค่ามากกว่า 0 (\`> 0\`) ➔ ตัวเลขแสดง **สีเขียว (#10b981)**
   - ถ้าน้อยกว่า 0 (\`< 0\`) ➔ ตัวเลขแสดง **สีแดง (#ef4444)**
   - ถ้าเท่ากับ 0 (\`=== 0\`) ➔ ตัวเลขแสดง **สีเทาเข้ม (#334155)**`,starterHtml:`<div class="counter-container">
  <h2>Dynamic Counter</h2>
  <div id="counter-value">0</div>
  <div class="button-group">
    <button id="btn-decrease">Decrease (-)</button>
    <button id="btn-reset">Reset</button>
    <button id="btn-increase">Increase (+)</button>
  </div>
</div>`,starterCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; }
.counter-container { text-align: center; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
#counter-value { font-size: 72px; font-weight: 800; color: #334155; margin: 20px 0; transition: color 0.2s; }
.button-group { display: flex; gap: 12px; }
button { padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor: pointer; }
#btn-decrease:hover { background: #fee2e2; border-color: #ef4444; color: #ef4444; }
#btn-increase:hover { background: #dcfce7; border-color: #10b981; color: #10b981; }
#btn-reset:hover { background: #f1f5f9; }`,starterJs:`// เขียนระบบนับตัวเลข และเงื่อนไขเปลี่ยนสีเมื่อเป็นค่าบวก/ลบ/ศูนย์ด้วยตนเองทั้งหมด
`,targetHtml:`<div class="counter-container">
  <h2>Dynamic Counter</h2>
  <div id="counter-value" style="color: rgb(16, 185, 129);">1</div>
  <div class="button-group">
    <button id="btn-decrease">Decrease (-)</button>
    <button id="btn-reset">Reset</button>
    <button id="btn-increase">Increase (+)</button>
  </div>
</div>`,targetCss:`body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; } .counter-container { text-align: center; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); } #counter-value { font-size: 72px; font-weight: 800; color: #334155; margin: 20px 0; transition: color 0.2s; } .button-group { display: flex; gap: 12px; } button { padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor: pointer; }`,targetJs:`let count = 0;
const valueEl = document.getElementById("counter-value");
const btnInc = document.getElementById("btn-increase");
const btnDec = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
  valueEl.textContent = count;
  if (count > 0) valueEl.style.color = "#10b981";
  else if (count < 0) valueEl.style.color = "#ef4444";
  else valueEl.style.color = "#334155";
}

btnInc.addEventListener("click", () => { count++; updateDisplay(); });
btnDec.addEventListener("click", () => { count--; updateDisplay(); });
btnReset.addEventListener("click", () => { count = 0; updateDisplay(); });`,validation:e=>{let t=e.getElementById(`counter-value`),n=e.getElementById(`btn-increase`),r=e.getElementById(`btn-decrease`),i=e.getElementById(`btn-reset`);return!t||!n||!r||!i?`ไม่พบปุ่มควบคุม Counter`:(n.click(),n.click(),t.textContent===`2`?(r.click(),r.click(),r.click(),t.textContent===`-1`?(i.click(),t.textContent===`0`||`กด Reset ตัวเลขต้องกลับมาเป็น 0`):`กด Decrease จนติดลบ ตัวเลขต้องเป็น -1`):`กด Increase 2 ครั้ง ตัวเลขต้องเป็น 2`)},hints:[`if (count > 0) valueEl.style.color = '#10b981';`,`else if (count < 0) valueEl.style.color = '#ef4444';`,`else valueEl.style.color = '#334155';`]},{id:`project-todo-list`,title:`โปรเจกต์ 3: Full Todo List (Add, Check, Delete)`,category:`ภารกิจโปรเจกต์ (Slide 2: P40)`,difficulty:`Medium`,points:120,description:`สร้างระบบจัดการรายการงานที่ต้องทำ (Todo list) ครบวงจร ตามโจทย์ในสไลด์ \`ch4 JavaScript_2.pdf\` หน้า 40
      
**ฟังก์ชันการทำงาน:**
1. **Add task:** พิมพ์ในกล่องข้อความแล้วกดปุ่ม "เพิ่ม" เพื่องานใหม่ลงใน List
2. **Check task:** คลิกที่ตัวข้อความเพื่อขีดฆ่า (Strike-through) ทำเครื่องหมายว่าเสร็จแล้ว
3. **Delete task:** มีปุ่มกากบาท \`✕\` ท้ายแต่ละรายการ เมื่อคลิกแล้วจะลบรายการนั้นออกจาก DOM ทันที`,starterHtml:`<div class="todo-app">
  <h2>My Task Manager</h2>
  <div class="add-bar">
    <input type="text" id="task-input" placeholder="สิ่งที่ต้องทำ...">
    <button id="add-task-btn">เพิ่มงาน</button>
  </div>
  <ul id="task-list"></ul>
</div>`,starterCss:`body { font-family: sans-serif; padding: 30px; background: #f8fafc; }
.todo-app { max-width: 400px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.add-bar { display: flex; gap: 8px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; }
button { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
ul { list-style: none; padding: 0; margin: 0; }
li { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 8px; cursor: pointer; }
li.completed { text-decoration: line-through; opacity: 0.6; background: #e2e8f0; }
.del-btn { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }`,starterJs:`// เขียนระบบจัดการ Todo List (เพิ่มงานใหม่, ขีดฆ่าเมื่อเสร็จ, ลบงาน) ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="todo-app">
  <h2>My Task Manager</h2>
  <div class="add-bar">
    <input type="text" id="task-input" placeholder="สิ่งที่ต้องทำ...">
    <button id="add-task-btn">เพิ่มงาน</button>
  </div>
  <ul id="task-list">
    <li><span>ทบทวนสไลด์ JS</span><button class="del-btn">✕</button></li>
  </ul>
</div>`,targetCss:`body { font-family: sans-serif; padding: 30px; background: #f8fafc; } .todo-app { max-width: 400px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .add-bar { display: flex; gap: 8px; margin-bottom: 20px; } input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; } button { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; } ul { list-style: none; padding: 0; margin: 0; } li { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 8px; cursor: pointer; } li.completed { text-decoration: line-through; opacity: 0.6; background: #e2e8f0; } .del-btn { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }`,targetJs:`const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => li.classList.toggle("completed"));
  
  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.className = "del-btn";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);`,validation:e=>{let t=e.getElementById(`task-input`),n=e.getElementById(`add-task-btn`),r=e.getElementById(`task-list`);return!t||!n||!r?`ไม่พบคอมโพเนนต์ Todo App`:(t.value=`ทำการบ้าน JS`,n.click(),r.children.length!==0||`กดยืนยันแล้วต้องมีรายการงานเพิ่มขึ้นใน #task-list`)},hints:[`const li = document.createElement('li');`,`li.addEventListener('click', () => li.classList.toggle('completed'));`,`delBtn.addEventListener('click', () => li.remove());`]},{id:`project-vote-storage`,title:`โปรเจกต์ 4: Vote the Favorite with LocalStorage`,category:`ภารกิจโปรเจกต์ (Slide 3: P26)`,difficulty:`Hard`,points:150,description:'สร้างระบบลงคะแนนโหวตสิ่งที่ชื่นชอบ พร้อมบันทึกคะแนนลง `localStorage` ตามโจทย์ในสไลด์ `ch4 JavaScript_3.pptx.pdf` หน้า 26\n      \n**ข้อกำหนดการทำงาน:**\n1. แสดงการ์ดตัวเลือก 3 รายการ (Option A, Option B, Option C) พร้อมแสดงคะแนนปัจจุบัน\n2. เมื่อคลิกที่การ์ด ให้บวกคะแนนเพิ่มทีละ 1 และบันทึกค่าลงใน `localStorage` ทันที\n3. เมื่อรีเฟรชหน้าเว็บ คะแนนโหวตต้องไม่หายไป โดยอ่านค่าจาก `localStorage` มาแสดง\n4. มีปุ่ม **"Clear Vote to 0 0 0"** สำหรับล้างคะแนนทั้งหมดกลับเป็น 0',starterHtml:`<div class="vote-arena">
  <h2>Vote Your Favorite Language</h2>
  <div class="vote-cards">
    <div class="card" id="card-js">
      <span class="icon">💛</span>
      <h3>JavaScript</h3>
      <div class="score" id="score-js">0</div>
      <button class="vote-btn" data-lang="js">โหวต JS</button>
    </div>
    <div class="card" id="card-py">
      <span class="icon">🐍</span>
      <h3>Python</h3>
      <div class="score" id="score-py">0</div>
      <button class="vote-btn" data-lang="py">โหวต Python</button>
    </div>
    <div class="card" id="card-go">
      <span class="icon">💙</span>
      <h3>Go</h3>
      <div class="score" id="score-go">0</div>
      <button class="vote-btn" data-lang="go">โหวต Go</button>
    </div>
  </div>
  <button id="btn-clear-votes">Clear Vote to 0 0 0</button>
</div>`,starterCss:`body { font-family: sans-serif; padding: 30px; background: #0f172a; color: white; text-align: center; }
.vote-arena { max-width: 600px; margin: 0 auto; }
.vote-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 30px 0; }
.card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
.icon { font-size: 40px; display: block; margin-bottom: 8px; }
.score { font-size: 32px; font-weight: 800; color: #38bdf8; margin: 12px 0; }
.vote-btn { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; }
#btn-clear-votes { background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; }`,starterJs:`// เขียนระบบโหวตภาษาโปรแกรมมิ่งและการบันทึกคะแนนลงใน localStorage ด้วยตนเอง
`,targetHtml:`<div class="vote-arena">
  <h2>Vote Your Favorite Language</h2>
  <div class="vote-cards">
    <div class="card" id="card-js"><span class="icon">💛</span><h3>JavaScript</h3><div class="score" id="score-js">1</div><button class="vote-btn" data-lang="js">โหวต JS</button></div>
    <div class="card" id="card-py"><span class="icon">🐍</span><h3>Python</h3><div class="score" id="score-py">0</div><button class="vote-btn" data-lang="py">โหวต Python</button></div>
    <div class="card" id="card-go"><span class="icon">💙</span><h3>Go</h3><div class="score" id="score-go">0</div><button class="vote-btn" data-lang="go">โหวต Go</button></div>
  </div>
  <button id="btn-clear-votes">Clear Vote to 0 0 0</button>
</div>`,targetCss:`body { font-family: sans-serif; padding: 30px; background: #0f172a; color: white; text-align: center; } .vote-arena { max-width: 600px; margin: 0 auto; } .vote-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 30px 0; } .card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; } .icon { font-size: 40px; display: block; margin-bottom: 8px; } .score { font-size: 32px; font-weight: 800; color: #38bdf8; margin: 12px 0; } .vote-btn { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; } #btn-clear-votes { background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; }`,targetJs:`let votes = JSON.parse(localStorage.getItem("app_votes")) || { js: 0, py: 0, go: 0 };
function renderVotes() {
  document.getElementById("score-js").textContent = votes.js;
  document.getElementById("score-py").textContent = votes.py;
  document.getElementById("score-go").textContent = votes.go;
}
renderVotes();

document.querySelectorAll(".vote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    votes[lang]++;
    localStorage.setItem("app_votes", JSON.stringify(votes));
    renderVotes();
  });
});

document.getElementById("btn-clear-votes").addEventListener("click", () => {
  votes = { js: 0, py: 0, go: 0 };
  localStorage.setItem("app_votes", JSON.stringify(votes));
  renderVotes();
});`,validation:e=>{let t=e.querySelector(`.vote-btn[data-lang="js"]`),n=e.getElementById(`btn-clear-votes`),r=e.getElementById(`score-js`);return!t||!n||!r?`ไม่พบปุ่มโหวตหรือตัวนับคะแนน`:(t.click(),r.textContent===`0`?`เมื่อกดโหวตแล้ว คะแนนของ JS ต้องเพิ่มขึ้น`:(n.click(),r.textContent===`0`||`เมื่อกด Clear Vote คะแนนต้องกลับมาเป็น 0`))},hints:[`votes[lang]++;`,`localStorage.setItem('app_votes', JSON.stringify(votes));`,`renderVotes();`]}],appliedExams:[{id:`exam-ecommerce-cart`,title:`ข้อสอบปฏิบัติการที่ 1: ตะกร้าสินค้า E-Commerce & โค้ดส่วนลด`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ยินดีต้อนรับสู่ข้อสอบปฏิบัติการเชิงประยุกต์ชุดที่ 1! ในข้อสอบนี้ คุณต้องผสานการเขียน **HTML, CSS, และ JavaScript** เข้าด้วยกัน เพื่อสร้างโมดูลตะกร้าสินค้าออนไลน์สำหรับร้านค้าจริง\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - โครงสร้างสินค้าในตะกร้าอย่างน้อย 2 รายการ แต่ละรายการเป็นคลาส `.cart-item` ที่ระบุ `data-price` (เช่น 350 และ 120)\n   - แต่ละรายการต้องมีปุ่มลดจำนวน `.btn-qty-minus`, สแปนแสดงจำนวน `.item-qty` (เริ่มต้นคือ 1), และปุ่มเพิ่มจำนวน `.btn-qty-plus`\n   - มีช่องกรอกคูปอง `<input id="coupon-input" placeholder="...">` และปุ่ม `<button id="btn-apply-coupon">ใช้โค้ด</button>`\n   - ส่วนสรุปราคาต้องมี `<span id="subtotal">0</span>`, `<span id="discount">0</span>`, และ `<span id="grand-total">0</span>`\n2. **CSS:**\n   - จัดเลย์เอาต์การ์ดตะกร้าสินค้าให้สวยงาม กึ่งกลางหน้าจอ พร้อมขอบมนและเงา Card Shadow\n   - จัดแถวรายการสินค้าแบบ Flexbox ให้ชื่อสินค้า ปุ่มจำนวน (+/-) และราคาอยู่เป็นระเบียบ\n3. **JavaScript:**\n   - เมื่อกด `.btn-qty-plus` ให้เพิ่มจำนวนชิ้นของสินค้านั้นทีละ 1\n   - เมื่อกด `.btn-qty-minus` ให้ลดจำนวนชิ้น (แต่ต้องไม่น้อยกว่า 1)\n   - ฟังก์ชันคำนวณราคายอดรวม (Subtotal) = ผลรวมของ (จำนวนชิ้น × ราคาสินค้าแต่ละชิ้น)\n   - เมื่อกดปุ่ม `#btn-apply-coupon`: หากกรอกโค้ด `"SAVE50"` ให้หักส่วนลด 50 บาท (Discount = 50) และอัปเดต `#discount`\n   - ยอดรวมสุทธิ Grand Total = Subtotal - Discount (ไม่ต่ำกว่า 0) และอัปเดต `#grand-total`',difficulty:`Intermediate`,points:200,xp:200,starterHtml:`<!-- 🛒 เขียนโครงสร้าง HTML สำหรับตะกร้าสินค้าตามข้อกำหนดในโจทย์ -->
`,starterCss:`/* ==========================================
   🎨 Color Presets & Palette (พรีเซ็ตสีสำหรับใช้งาน)
   ========================================== */
:root {
  --bg-page: #f1f5f9;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #0284c7;
  --primary-hover: #0369a1;
  --success: #059669;
  --border: #e2e8f0;
}

/* เขียนสไตล์ CSS ตะกร้าสินค้าของคุณต่อจากนี้ */
`,starterJs:`// เขียนโค้ดระบบตะกร้าสินค้าและการคำนวณราคาทั้งหมดด้วยตนเองตามข้อกำหนดในโจทย์
`,targetHtml:`<div class="cart-container">
  <h2>🛒 ตะกร้าสินค้าของฉัน</h2>
  <div class="cart-list">
    <div class="cart-item" data-price="350">
      <div class="item-info">
        <h4>หูฟังไร้สาย Wireless Pro</h4>
        <span class="unit-price">฿350 / ชิ้น</span>
      </div>
      <div class="qty-control">
        <button class="btn-qty-minus">-</button>
        <span class="item-qty">1</span>
        <button class="btn-qty-plus">+</button>
      </div>
      <span class="item-subtotal">฿350</span>
    </div>
    <div class="cart-item" data-price="120">
      <div class="item-info">
        <h4>สายชาร์จ Fast Charge Type-C</h4>
        <span class="unit-price">฿120 / ชิ้น</span>
      </div>
      <div class="qty-control">
        <button class="btn-qty-minus">-</button>
        <span class="item-qty">1</span>
        <button class="btn-qty-plus">+</button>
      </div>
      <span class="item-subtotal">฿120</span>
    </div>
  </div>
  <div class="coupon-section">
    <input type="text" id="coupon-input" placeholder="ใส่โค้ด SAVE50 รับส่วนลด">
    <button id="btn-apply-coupon">ใช้โค้ด</button>
  </div>
  <div class="cart-summary">
    <div class="summary-row">
      <span>ยอดรวมสินค้า:</span>
      <span>฿<span id="subtotal">470</span></span>
    </div>
    <div class="summary-row text-emerald">
      <span>ส่วนลด:</span>
      <span>-฿<span id="discount">0</span></span>
    </div>
    <div class="summary-row total-row">
      <span>ยอดชำระสุทธิ:</span>
      <span>฿<span id="grand-total">470</span></span>
    </div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #f1f5f9; padding: 24px; } .cart-container { max-width: 480px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08); } .cart-item { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #e2e8f0; } .qty-control { display: flex; align-items: center; gap: 8px; } .qty-control button { width: 28px; height: 28px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer; font-weight: bold; } .coupon-section { display: flex; gap: 8px; margin: 18px 0; } .coupon-section input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; } .coupon-section button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; } .cart-summary { background: #f8fafc; padding: 16px; border-radius: 12px; } .summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; } .total-row { font-size: 1.15rem; font-weight: bold; border-top: 1px solid #cbd5e1; padding-top: 10px; } .text-emerald { color: #059669; }`,targetJs:`let discountAmount = 0;

function updateTotals() {
  let subtotal = 0;
  const items = document.querySelectorAll(".cart-item");
  
  items.forEach(item => {
    const price = parseFloat(item.getAttribute("data-price")) || 0;
    const qtySpan = item.querySelector(".item-qty");
    const subSpan = item.querySelector(".item-subtotal");
    const qty = parseInt(qtySpan.textContent) || 1;
    const itemTotal = price * qty;
    subtotal += itemTotal;
    if (subSpan) subSpan.textContent = "฿" + itemTotal;
  });

  const grandTotal = Math.max(0, subtotal - discountAmount);

  const subtotalEl = document.getElementById("subtotal");
  const discountEl = document.getElementById("discount");
  const grandTotalEl = document.getElementById("grand-total");

  if (subtotalEl) subtotalEl.textContent = subtotal;
  if (discountEl) discountEl.textContent = discountAmount;
  if (grandTotalEl) grandTotalEl.textContent = grandTotal;
}

document.querySelectorAll(".cart-item").forEach(item => {
  const plusBtn = item.querySelector(".btn-qty-plus");
  const minusBtn = item.querySelector(".btn-qty-minus");
  const qtySpan = item.querySelector(".item-qty");

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      let q = parseInt(qtySpan.textContent) || 1;
      qtySpan.textContent = q + 1;
      updateTotals();
    });
  }

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      let q = parseInt(qtySpan.textContent) || 1;
      if (q > 1) {
        qtySpan.textContent = q - 1;
        updateTotals();
      }
    });
  }
});

const applyBtn = document.getElementById("btn-apply-coupon");
const couponInput = document.getElementById("coupon-input");

if (applyBtn && couponInput) {
  applyBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === "SAVE50") {
      discountAmount = 50;
    } else {
      discountAmount = 0;
    }
    updateTotals();
  });
}

updateTotals();`,validation:e=>{let t=e.querySelectorAll(`.cart-item`);if(t.length<2)return`ต้องมีรายการสินค้าอย่างน้อย 2 รายการ (.cart-item)`;let n=t[0].querySelector(`.btn-qty-plus`),r=t[0].querySelector(`.btn-qty-minus`),i=t[0].querySelector(`.item-qty`),a=e.getElementById(`subtotal`),o=e.getElementById(`discount`),s=e.getElementById(`grand-total`),c=e.getElementById(`coupon-input`),l=e.getElementById(`btn-apply-coupon`);if(!n||!r||!i)return`ต้องมีปุ่ม .btn-qty-plus, .btn-qty-minus และสแปน .item-qty`;if(!a||!o||!s)return`ต้องมีไอดี #subtotal, #discount และ #grand-total ในส่วนสรุปยอด`;if(!c||!l)return`ต้องมีช่อง #coupon-input และปุ่ม #btn-apply-coupon`;let u=parseFloat(a.textContent)||0,d=parseInt(i.textContent)||1;n.click();let f=parseInt(i.textContent)||1,p=parseFloat(a.textContent)||0;if(f!==d+1)return`เมื่อคลิก .btn-qty-plus จำนวนชิ้นต้องเพิ่มขึ้น 1`;if(p<=u)return`เมื่อเพิ่มจำนวนชิ้น ยอดรวม subtotal ต้องเพิ่มขึ้นตามราคา`;c.value=`SAVE50`,l.click();let m=parseFloat(o.textContent)||0,h=parseFloat(s.textContent)||0;return m===50?h===parseFloat(a.textContent)-50||`ยอดสุทธิ #grand-total ต้องเท่ากับ #subtotal ลบส่วนลด #discount`:`เมื่อกรอกคูปอง SAVE50 และกดใช้โค้ด #discount ต้องแสดง 50`},hints:[`วนลูปคำนวณราคาสินค้าแต่ละชิ้นจากราคาและจำนวน แล้วนำมารวมกันเป็นยอดรวมย่อย (Subtotal)`,`เมื่อมีการกดปุ่มบวกหรือลบ ให้เปลี่ยนค่าตัวเลขจำนวนสินค้าและเรียกฟังก์ชันคำนวณราคาใหม่`,`เมื่อกดใช้โค้ดส่วนลด ให้ตรวจสอบข้อความที่ผู้ใช้กรอก หากตรงตามเงื่อนไขให้หักลบออกจากยอดรวมสุทธิ`]},{id:`exam-live-badge-generator`,title:`ข้อสอบปฏิบัติการที่ 2: ระบบสร้างบัตรสัมมนา Live Conference Pass`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ในข้อสอบชุดนี้ คุณจะได้สร้างระบบฟอร์มออกบัตรผู้เข้าร่วมงานสัมมนาเทคโนโลยี (Tech Summit Badge) ที่แสดงผลแบบ Live Preview 2 ทางทันทีเมื่อผู้ใช้พิมพ์ข้อมูล พร้อมระบบเปลี่ยนธีมสีการ์ดผ่าน `<select>`\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - ฝั่งฟอร์ม:\n     - ช่องพิมพ์ชื่อ `<input id="input-name" placeholder="...">`\n     - ช่องพิมพ์ตำแหน่ง `<input id="input-role" placeholder="...">`\n     - ตัวเลือกธีมสี `<select id="select-theme">`: มี options `theme-blue`, `theme-emerald`, `theme-purple`\n     - ปุ่มรีเซ็ต `<button id="btn-reset-pass" type="button">รีเซ็ตข้อมูล</button>`\n   - ฝั่งบัตรพรีวิว:\n     - การ์ดบัตร `<div id="pass-card" class="theme-blue">`\n     - ชื่อผู้ถือบัตร `<h3 id="preview-name">YOUR NAME</h3>`\n     - ตำแหน่งงาน `<p id="preview-role">DEVELOPER</p>`\n2. **CSS:**\n   - ออกแบบการ์ดบัตรสัมมนา Pass Card ให้โมเดิร์น\n   - กำหนดคลาสธีมสี 3 รูปแบบ: `.theme-blue`, `.theme-emerald`, `.theme-purple`\n3. **JavaScript:**\n   - ดักจับ Event `input` จาก `#input-name`: อัปเดต `#preview-name` แบบเรียลไทม์ (ถ้าว่างแสดง "YOUR NAME")\n   - ดักจับ Event `input` จาก `#input-role`: อัปเดต `#preview-role` แบบเรียลไทม์ (ถ้าว่างแสดง "DEVELOPER")\n   - ดักจับ Event `change` จาก `#select-theme`: อัปเดต class ของ `#pass-card` ตามธีมที่เลือก\n   - เมื่อคลิก `#btn-reset-pass`: ล้างฟอร์มและคืนค่าเริ่มต้นของบัตร',difficulty:`Intermediate`,points:200,xp:200,starterHtml:`<!-- 🎫 สร้างโครงสร้าง HTML สำหรับฟอร์มและบัตรพรีวิว Tech Summit Pass ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets & Gradients (พรีเซ็ตสีและธีมบัตร)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border: #334155;
  --btn-reset: #475569;
}

/* พรีเซ็ต Gradient สำหรับคลาสธีมของบัตรตามโจทย์กำหนด */
.theme-blue {
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  border: 1px solid #60a5fa;
}
.theme-emerald {
  background: linear-gradient(135deg, #065f46, #10b981);
  border: 1px solid #34d399;
}
.theme-purple {
  background: linear-gradient(135deg, #581c87, #a855f7);
  border: 1px solid #c084fc;
}

/* เขียนสไตล์ CSS จัดเลย์เอาต์ฟอร์มและการ์ดของคุณต่อจากนี้ */
`,starterJs:`// เขียนโค้ดระบบสร้างบัตรสัมมนาและการอัปเดตแบบเรียลไทม์ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="badge-app">
  <div class="form-pane">
    <h2>🎫 สร้างบัตร Tech Summit Pass</h2>
    <form id="pass-form">
      <div class="form-group">
        <label>ชื่อ-นามสกุล:</label>
        <input type="text" id="input-name" placeholder="เช่น Somchai Tech">
      </div>
      <div class="form-group">
        <label>ตำแหน่ง / บทบาท:</label>
        <input type="text" id="input-role" placeholder="เช่น Full-Stack Developer">
      </div>
      <div class="form-group">
        <label>ธีมสีของบัตร:</label>
        <select id="select-theme">
          <option value="theme-blue">Blue Ocean</option>
          <option value="theme-emerald">Emerald Forest</option>
          <option value="theme-purple">Cyber Purple</option>
        </select>
      </div>
      <button type="button" id="btn-reset-pass">รีเซ็ตข้อมูล</button>
    </form>
  </div>
  <div class="preview-pane">
    <div id="pass-card" class="theme-blue">
      <div class="badge-header">
        <span>TECH SUMMIT 2026</span>
        <span class="badge-vip">VIP ACCESS</span>
      </div>
      <div class="badge-body">
        <div class="avatar-box">👤</div>
        <h3 id="preview-name">YOUR NAME</h3>
        <p id="preview-role">DEVELOPER</p>
      </div>
      <div class="badge-footer">
        <span id="preview-code">#DEV-2026</span>
        <span class="barcode">||||||||||||||||</span>
      </div>
    </div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; } .badge-app { max-width: 760px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; background: #1e293b; padding: 28px; border-radius: 16px; } .form-group { margin-bottom: 14px; } label { display: block; font-size: 13px; margin-bottom: 6px; color: #94a3b8; } input, select { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: white; box-sizing: border-box; } #btn-reset-pass { width: 100%; padding: 10px; margin-top: 10px; background: #475569; color: white; border: none; border-radius: 8px; cursor: pointer; } #pass-card { padding: 24px; border-radius: 16px; color: white; min-height: 240px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.4); } .theme-blue { background: linear-gradient(135deg, #1e40af, #3b82f6); border: 1px solid #60a5fa; } .theme-emerald { background: linear-gradient(135deg, #065f46, #10b981); border: 1px solid #34d399; } .theme-purple { background: linear-gradient(135deg, #581c87, #a855f7); border: 1px solid #c084fc; } .avatar-box { font-size: 40px; margin: 10px 0; } .badge-header, .badge-footer { display: flex; justify-content: space-between; font-size: 11px; opacity: 0.8; }`,targetJs:`const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const selectTheme = document.getElementById("select-theme");
const btnReset = document.getElementById("btn-reset-pass");

const previewName = document.getElementById("preview-name");
const previewRole = document.getElementById("preview-role");
const passCard = document.getElementById("pass-card");

if (inputName && previewName) {
  inputName.addEventListener("input", () => {
    previewName.textContent = inputName.value.trim() || "YOUR NAME";
  });
}

if (inputRole && previewRole) {
  inputRole.addEventListener("input", () => {
    previewRole.textContent = inputRole.value.trim() || "DEVELOPER";
  });
}

if (selectTheme && passCard) {
  selectTheme.addEventListener("change", () => {
    passCard.className = selectTheme.value;
  });
}

if (btnReset) {
  btnReset.addEventListener("click", () => {
    if (inputName) inputName.value = "";
    if (inputRole) inputRole.value = "";
    if (selectTheme) selectTheme.value = "theme-blue";
    if (previewName) previewName.textContent = "YOUR NAME";
    if (previewRole) previewRole.textContent = "DEVELOPER";
    if (passCard) passCard.className = "theme-blue";
  });
}`,validation:e=>{let t=e.getElementById(`input-name`),n=e.getElementById(`input-role`),r=e.getElementById(`select-theme`),i=e.getElementById(`preview-name`),a=e.getElementById(`preview-role`),o=e.getElementById(`pass-card`),s=e.getElementById(`btn-reset-pass`);if(!t||!n||!r||!i||!a||!o||!s)return`ไม่พบ element ฟอร์มหรือบัตรพรีวิวที่กำหนด`;let c=e.defaultView?.Event||Event;return t.value=`Jane Doe`,t.dispatchEvent(new c(`input`,{bubbles:!0})),i.textContent.trim()===`Jane Doe`?(r.value=`theme-emerald`,r.dispatchEvent(new c(`change`,{bubbles:!0})),o.classList.contains(`theme-emerald`)?(s.click(),i.textContent.trim()===`YOUR NAME`||`เมื่อกดปุ่มรีเซ็ต #btn-reset-pass ข้อความบัตรต้องกลับเป็นค่าเริ่มต้น 'YOUR NAME'`):`เมื่อเปลี่ยน #select-theme เป็น 'theme-emerald' ตัวการ์ด #pass-card ต้องมีคลาสธีมนั้น`):`เมื่อพิมพ์ชื่อใน #input-name ข้อความบน #preview-name ต้องเปลี่ยนตามแบบเรียลไทม์`},hints:[`ดักจับ event 'input' บนช่องกรอกข้อความ เพื่อนำค่าไปอัปเดตบนบัตรตัวอย่างแบบเรียลไทม์`,`ดักจับ event 'change' บนตัวเลือกธีม แล้วนำค่าที่เลือกไปกำหนดเป็น class ให้กับกล่องบัตร`,`เมื่อกดปุ่มรีเซ็ต ให้คืนค่าข้อความบนบัตรและตัวเลือกทั้งหมดกลับเป็นค่าเริ่มต้น`]},{id:`exam-memory-card-game`,title:`ข้อสอบปฏิบัติการที่ 3: มินิเกมจับคู่ไพ่ Memory Match (สไลด์ 3 หน้า 28)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ข้อสอบชุดนี้สร้างขึ้นเพื่อฝึกทักษะการสร้างเกมจับคู่ไพ่ **Memory Match Game (กระดาน 4x4 รวม 16 ใบ / 8 คู่)** โดยผู้สอบต้องพัฒนาเกมจับคู่ไพ่ที่มีการพลิกไพ่ด้วย CSS Flip และควบคุมตรรกะการจับคู่ด้วย JavaScript\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - ส่วนสถิติ:\n     - ตัวนับรอบที่เปิด `<strong id="moves-count">0</strong>`\n     - ตัวนับคู่ที่จับถูก `<strong id="matched-count">0</strong>`\n     - ปุ่มเริ่มเกมใหม่ `<button id="btn-restart-game">เริ่มเกมใหม่</button>`\n   - กระดานไพ่: กล่อง `.card-grid` บรรจุไพ่ 16 ใบ (4x4) แต่ละใบมี class `.memory-card` และมี attribute `data-card` สำหรับระบุประเภท 8 คู่ (เช่น `rocket`, `bolt`, `planet`, `robot`, `gem`, `alien`, `fire`, `star`)\n   - ด้านในไพ่แต่ละใบมี `<span class="front-emoji">` (แสดงรูปอิโมจิ) และ `<span class="back-mark">?</span>`\n2. **CSS:**\n   - จัดวางตารางไพ่แบบ 4x4 (`grid-template-columns: repeat(4, 1fr)`)\n   - ปกติซ่อน `.front-emoji` และแสดง `.back-mark`\n   - เมื่อมีคลาส `.flipped` ให้แสดงหน้าไพ่ (อิโมจิ)\n   - เมื่อมีคลาส `.matched` ให้แสดงสถานะจับคู่สำเร็จ (เช่น กรอบสีเขียว)\n3. **JavaScript:**\n   - สุ่มสลับตำแหน่งไพ่ (Shuffle cards) ทั้งตอนเริ่มต้นและเมื่อกดเริ่มเกมใหม่ โดยสุ่มจัดลำดับ (เช่น สุ่มกำหนดค่า `style.order` ให้การ์ดแต่ละใบ `card.style.order = Math.floor(Math.random() * 16)` หรือสลับลำดับใน DOM)\n   - เมื่อคลิก `.memory-card` ให้เพิ่มคลาส `.flipped`\n   - เมื่อเปิดครบ 2 ใบใน 1 รอบ:\n     - เพิ่มตัวนับ `#moves-count` ขึ้น 1\n     - ตรวจสอบว่า `data-card` ตรงกันหรือไม่:\n       - ถ้าตรงกัน: ใส่คลาส `.matched` ให้ทั้งสองใบ และเพิ่ม `#matched-count` ขึ้น 1\n       - ถ้าไม่ตรงกัน: ใช้ `setTimeout` หน่วงเวลาสักครู่ (เช่น 600ms) แล้วเอาคลาส `.flipped` ออกจากทั้งสองใบ\n   - เมื่อกดปุ่ม `#btn-restart-game`: รีเซ็ตคะแนนและสถิติเป็น 0, ลบคลาส `.flipped`, `.matched` ออกจากทุกใบ และสุ่มสลับตำแหน่งไพ่ใหม่ (shuffle)',difficulty:`Advanced`,points:250,xp:250,starterHtml:`<!-- 🧠 เขียนโครงสร้าง HTML สำหรับแผงสถิติ (#moves-count, #matched-count, #btn-restart-game) และกระดานไพ่ 4x4 รวม 16 ใบ (.memory-card) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets & Card Palette (พรีเซ็ตสีสำหรับการ์ด)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --card-back: #334155;
  --card-flipped: #1e40af;
  --card-matched: #065f46;
  --border-flipped: #60a5fa;
  --border-matched: #34d399;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --btn-restart: #3b82f6;
}

/* เขียนสไตล์ CSS จัดวาง Grid และสถานะไพ่ (.flipped, .matched) ของคุณต่อจากนี้ */
`,starterJs:`// เขียนตรรกะเกมจับคู่ไพ่ การสุ่มสลับตำแหน่งไพ่ (shuffle) การตรวจคู่ และการนับสถิติทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="game-wrapper">
  <h2>🧠 Memory Card Matcher (4x4)</h2>
  <div class="game-stats">
    <div>ครั้งที่เปิด: <strong id="moves-count">0</strong></div>
    <div>คู่ที่ตรงกัน: <strong id="matched-count">0</strong> / 8</div>
    <button id="btn-restart-game">เริ่มเกมใหม่</button>
  </div>
  <div class="card-grid">
    <div class="memory-card" data-card="rocket"><span class="front-emoji">🚀</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="bolt"><span class="front-emoji">⚡</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="planet"><span class="front-emoji">🪐</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="robot"><span class="front-emoji">🤖</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="gem"><span class="front-emoji">💎</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="rocket"><span class="front-emoji">🚀</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="alien"><span class="front-emoji">👾</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="fire"><span class="front-emoji">🔥</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="star"><span class="front-emoji">🌟</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="bolt"><span class="front-emoji">⚡</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="gem"><span class="front-emoji">💎</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="robot"><span class="front-emoji">🤖</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="planet"><span class="front-emoji">🪐</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="alien"><span class="front-emoji">👾</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="star"><span class="front-emoji">🌟</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="fire"><span class="front-emoji">🔥</span><span class="back-mark">?</span></div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; display: flex; justify-content: center; } .game-wrapper { background: #1e293b; padding: 24px; border-radius: 16px; width: 440px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.4); } .game-stats { display: flex; justify-content: space-between; align-items: center; margin: 14px 0 18px 0; font-size: 14px; } #btn-restart-game { padding: 6px 14px; background: #3b82f6; border: none; color: white; border-radius: 6px; cursor: pointer; font-weight: bold; } #btn-restart-game:hover { background: #2563eb; } .card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; } .memory-card { height: 75px; background: #334155; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; cursor: pointer; border: 2px solid transparent; user-select: none; transition: transform 0.2s, background 0.2s; } .memory-card:hover { transform: scale(1.03); background: #475569; } .memory-card .front-emoji { display: none; } .memory-card.flipped { background: #1e40af; border-color: #60a5fa; } .memory-card.flipped .front-emoji { display: inline; } .memory-card.flipped .back-mark { display: none; } .memory-card.matched { background: #065f46; border-color: #34d399; cursor: default; }`,targetJs:`let flippedCards = [];
let lockBoard = false;
let moves = 0;
let matches = 0;

const movesEl = document.getElementById("moves-count");
const matchesEl = document.getElementById("matched-count");
const cards = document.querySelectorAll(".memory-card");
const restartBtn = document.getElementById("btn-restart-game");

function shuffle() {
  cards.forEach(card => {
    const randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    if (movesEl) movesEl.textContent = moves;
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  const isMatch = c1.getAttribute("data-card") === c2.getAttribute("data-card");

  if (isMatch) {
    c1.classList.add("matched");
    c2.classList.add("matched");
    matches++;
    if (matchesEl) matchesEl.textContent = matches;
    flippedCards = [];
  } else {
    lockBoard = true;
    setTimeout(() => {
      c1.classList.remove("flipped");
      c2.classList.remove("flipped");
      flippedCards = [];
      lockBoard = false;
    }, 600);
  }
}

function restart() {
  flippedCards = [];
  lockBoard = false;
  moves = 0;
  matches = 0;
  if (movesEl) movesEl.textContent = "0";
  if (matchesEl) matchesEl.textContent = "0";
  cards.forEach(card => {
    card.classList.remove("flipped", "matched");
  });
  shuffle();
}

shuffle();
cards.forEach(c => c.addEventListener("click", flipCard));
if (restartBtn) restartBtn.addEventListener("click", restart);`,validation:(e,t=``,n=``)=>{let r=e.querySelectorAll(`.memory-card`),i=e.getElementById(`moves-count`),a=e.getElementById(`matched-count`),o=e.getElementById(`btn-restart-game`);if(r.length<16)return`ต้องมีไพ่อย่างน้อย 16 ใบ (กระดาน 4x4) ที่มีคลาส .memory-card`;if(!i||!a||!o)return`ต้องมี #moves-count, #matched-count และ #btn-restart-game`;let s=Array.from(r).some(e=>e.style.order!==``),c=typeof n==`string`&&n.includes(`Math.random`);return!s&&!c&&n!==``?`ต้องมีฟังก์ชันสุ่มสลับตำแหน่งไพ่ (Shuffle) เช่น การสุ่มกำหนด style.order ให้กับไพ่แต่ละใบ`:(r[0].click(),r[0].classList.contains(`flipped`)?(o.click(),!r[0].classList.contains(`flipped`)||`เมื่อกดปุ่มเริ่มใหม่ #btn-restart-game ไพ่ทุกใบต้องถูกปิดคลาส .flipped`):`เมื่อคลิกที่ไพ่ ไพ่ใบนั้นต้องได้รับคลาส .flipped`)},hints:[`สุ่มสลับตำแหน่งไพ่ (Shuffle) โดยวนลูปการ์ดแต่ละใบแล้วสุ่มลำดับ CSS เช่น card.style.order = Math.floor(Math.random() * 16) เมื่อเริ่มเกมและเมื่อกดปุ่มเริ่มใหม่`,`จำสถานะไพ่ที่เปิดในรอบปัจจุบันเพื่อนำมาเปรียบเทียบว่ามีค่า data หรือสัญลักษณ์ตรงกันหรือไม่`,`หากไพ่ทั้งสองใบตรงกัน ให้กำหนดสถานะจับคู่สำเร็จ (.matched) แต่หากไม่ตรงกัน ให้ใช้ setTimeout พลิกไพ่กลับ`,`เมื่อกดปุ่มเริ่มใหม่ ให้รีเซ็ตสถิติ ปิดหน้าไพ่ทุกใบ และเรียกฟังก์ชันสุ่มสลับตำแหน่งไพ่ใหม่`]},{id:`exam-finance-tracker`,title:`ข้อสอบปฏิบัติการที่ 4: บัญชีรายรับ-รายจ่าย & กรองหมวดหมู่ (FinTech Tracker)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ข้อสอบชุดนี้เป็นการประยุกต์ใช้ **HTML form controls + Dynamic CSS Status Classes + JavaScript Array Methods & DOM Rendering** เพื่อสร้างระบบบันทึกการเงินรายรับ-รายจ่ายส่วนบุคคล พร้อมปุ่มตัวกรอง (Filter) แบบไร้รอยต่อ\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - ฟอร์มบันทึกรายการ:\n     - ช่องชื่อรายการ `<input id="tx-title" placeholder="...">`\n     - ช่องจำนวนเงิน `<input id="tx-amount" type="number" placeholder="...">`\n     - ตัวเลือกประเภท `<select id="tx-type">`: `<option value="income">รายรับ (+)</option>`, `<option value="expense">รายจ่าย (-)</option>`\n     - ปุ่มบันทึก `<button id="btn-add-tx">บันทึกรายการ</button>`\n   - แผงสรุปยอดเงิน:\n     - เงินคงเหลือสุทธิ `<span id="balance-total">0</span>`\n     - รายรับรวม `<span id="total-income">0</span>`\n     - รายจ่ายรวม `<span id="total-expense">0</span>`\n   - แถบปุ่มกรอง (Filter):\n     - ปุ่ม `<button class="filter-btn active" data-filter="all">ทั้งหมด</button>`\n     - ปุ่ม `<button class="filter-btn" data-filter="income">รายรับ</button>`\n     - ปุ่ม `<button class="filter-btn" data-filter="expense">รายจ่าย</button>`\n   - รายการประวัติ `<ul id="tx-list"></ul>`\n2. **CSS:**\n   - สไตล์การ์ดสรุปยอดเงิน (Balance Card) เด่นชัด\n   - แถบสถานะสีเขียวสำหรับรายรับ (`.income`) และแถบสถานะสีแดงสำหรับรายจ่าย (`.expense`)\n3. **JavaScript:**\n   - บันทึกรายการลงใน Array เมื่อคลิก `#btn-add-tx`\n   - คำนวณยอด Income รวม, Expense รวม, และ Balance = Income - Expense แล้วอัปเดตหน้าเว็บ\n   - เมื่อกดปุ่มลบรายการ `.btn-del-tx`: ลบรายการนั้นและคำนวณยอดเงินใหม่ทันที\n   - เมื่อคลิกปุ่มกรอง `.filter-btn`: กรองรายการใน `#tx-list` ให้แสดงตาม filter `all`, `income`, หรือ `expense`',difficulty:`Advanced`,points:250,xp:250,starterHtml:`<!-- 💰 เขียนโครงสร้าง HTML สำหรับ Dashboard รายรับ-รายจ่าย, ฟอร์มบันทึก และประวัติรายการ (#balance-total, #total-income, #total-expense, #tx-list) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับระบบการเงิน)
   ========================================== */
:root {
  --bg-page: #f8fafc;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --income: #10b981;
  --expense: #ef4444;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --border: #cbd5e1;
}

/* สีขอบสถานะรายการสำหรับคลาส .income และ .expense */
.tx-item.income { border-left-color: var(--income); }
.tx-item.expense { border-left-color: var(--expense); }

/* เขียนสไตล์ CSS จัดเลย์เอาต์การ์ดและฟอร์มของคุณต่อจากนี้ */
`,starterJs:`// เขียนระบบบันทึกรายรับ-รายจ่าย คำนวณยอดคงเหลือ และการกรองหมวดหมู่ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="tracker-app">
  <h2>💰 เครื่องมือบันทึกรายรับ-รายจ่าย</h2>
  <div class="balance-card">
    <div class="sub-label">ยอดเงินคงเหลือสุทธิ</div>
    <div class="main-balance">฿<span id="balance-total">0</span></div>
    <div class="summary-split">
      <div class="income-box">
        <span>รายรับ (+)</span>
        <strong>฿<span id="total-income">0</span></strong>
      </div>
      <div class="expense-box">
        <span>รายจ่าย (-)</span>
        <strong>฿<span id="total-expense">0</span></strong>
      </div>
    </div>
  </div>
  <div class="form-card">
    <h3>เพิ่มรายการใหม่</h3>
    <div class="form-row">
      <input type="text" id="tx-title" placeholder="ชื่อรายการ เช่น เงินเดือน, ค่าอาหาร">
      <input type="number" id="tx-amount" placeholder="จำนวนเงิน">
    </div>
    <div class="form-row">
      <select id="tx-type">
        <option value="income">รายรับ (+)</option>
        <option value="expense">รายจ่าย (-)</option>
      </select>
      <button id="btn-add-tx">บันทึกรายการ</button>
    </div>
  </div>
  <div class="history-card">
    <div class="history-header">
      <h3>ประวัติรายการ</h3>
      <div class="filter-group">
        <button class="filter-btn active" data-filter="all">ทั้งหมด</button>
        <button class="filter-btn" data-filter="income">รายรับ</button>
        <button class="filter-btn" data-filter="expense">รายจ่าย</button>
      </div>
    </div>
    <ul id="tx-list"></ul>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #f8fafc; padding: 24px; } .tracker-app { max-width: 480px; margin: 0 auto; } .balance-card { background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 24px; border-radius: 16px; text-align: center; margin-bottom: 20px; } .main-balance { font-size: 2rem; font-weight: bold; margin: 8px 0 16px 0; } .summary-split { display: flex; justify-content: space-around; border-top: 1px solid #334155; padding-top: 14px; } .income-box strong { color: #34d399; } .expense-box strong { color: #f87171; } .form-card, .history-card { background: white; padding: 20px; border-radius: 14px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 16px; } .form-row { display: flex; gap: 10px; margin-bottom: 10px; } input, select { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; } #btn-add-tx { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .history-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; } .filter-btn { padding: 4px 10px; border: 1px solid #cbd5e1; background: transparent; border-radius: 6px; cursor: pointer; font-size: 12px; } .filter-btn.active { background: #2563eb; color: white; border-color: #2563eb; } #tx-list { list-style: none; padding: 0; margin: 0; } .tx-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-radius: 8px; background: #f1f5f9; margin-bottom: 8px; border-left: 4px solid #94a3b8; } .tx-item.income { border-left-color: #10b981; } .tx-item.expense { border-left-color: #ef4444; } .btn-del-tx { background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: bold; padding: 4px 8px; }`,targetJs:`let transactions = [];
let currentFilter = "all";

const titleInput = document.getElementById("tx-title");
const amountInput = document.getElementById("tx-amount");
const typeSelect = document.getElementById("tx-type");
const addBtn = document.getElementById("btn-add-tx");
const listEl = document.getElementById("tx-list");

const balanceEl = document.getElementById("balance-total");
const incomeEl = document.getElementById("total-income");
const expenseEl = document.getElementById("total-expense");

function updateCalculations() {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  if (incomeEl) incomeEl.textContent = totalIncome;
  if (expenseEl) expenseEl.textContent = totalExpense;
  if (balanceEl) balanceEl.textContent = balance;
}

function renderList() {
  if (!listEl) return;
  listEl.innerHTML = "";

  const filtered = transactions.filter(t => {
    if (currentFilter === "all") return true;
    return t.type === currentFilter;
  });

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.className = "tx-item " + t.type;
    const sign = t.type === "income" ? "+" : "-";
    li.innerHTML = "<span>" + t.title + "</span><div><strong>" + sign + "฿" + t.amount + "</strong><button class='btn-del-tx' data-id='" + t.id + "'>✕</button></div>";

    const delBtn = li.querySelector(".btn-del-tx");
    delBtn.addEventListener("click", () => {
      transactions = transactions.filter(item => item.id !== t.id);
      updateCalculations();
      renderList();
    });

    listEl.appendChild(li);
  });
}

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!title || isNaN(amount) || amount <= 0) return;

    transactions.push({
      id: Date.now(),
      title: title,
      amount: amount,
      type: typeSelect.value
    });

    titleInput.value = "";
    amountInput.value = "";

    updateCalculations();
    renderList();
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    renderList();
  });
});

updateCalculations();
renderList();`,validation:e=>{let t=e.getElementById(`tx-title`),n=e.getElementById(`tx-amount`),r=e.getElementById(`tx-type`),i=e.getElementById(`btn-add-tx`),a=e.getElementById(`balance-total`),o=e.getElementById(`total-income`),s=e.getElementById(`total-expense`),c=e.getElementById(`tx-list`);if(!t||!n||!r||!i||!a||!o||!s||!c)return`ไม่พบ element ที่จำเป็นของระบบบันทึกรายรับ-รายจ่าย`;let l=parseFloat(o.textContent)||0,u=parseFloat(s.textContent)||0,d=parseFloat(a.textContent)||0;t.value=`เงินเดือน`,n.value=`30000`,r.value=`income`,i.click();let f=parseFloat(o.textContent)||0,p=parseFloat(a.textContent)||0;if(f!==l+3e4||p!==d+3e4)return`เมื่อเพิ่มรายรับ 30000 ยอด #total-income และ #balance-total ต้องเพิ่มขึ้น 30000`;t.value=`ค่าเช่าห้อง`,n.value=`8000`,r.value=`expense`,i.click();let m=parseFloat(s.textContent)||0,h=parseFloat(a.textContent)||0;return m!==u+8e3||h!==p-8e3?`เมื่อเพิ่มรายจ่าย 8000 ยอด #total-expense ต้องเพิ่ม 8000 และ #balance-total ต้องลดลง 8000`:!0},hints:[`จัดเก็บรายการธุรกรรมใน Array เพื่อให้สามารถคำนวณและกรองข้อมูลได้ง่าย`,`คำนวณยอดคงเหลือจาก ผลรวมรายรับ ทั้งหมด ลบด้วย ผลรวมรายจ่าย ทั้งหมด`,`เมื่อผู้ใช้คลิกปุ่มตัวกรอง ให้อัปเดตสถานะตัวกรองปัจจุบันแล้วเรนเดอร์เฉพาะรายการที่ตรงเงื่อนไข`]},{id:`exam-weather-api`,title:`ข้อสอบปฏิบัติการที่ 5: พยากรณ์อากาศ & ดัชนี AQI (Fetch API & Async)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ในข้อสอบชุดนี้ คุณจะได้ใช้ **Fetch API & Async/Await** เพื่อพัฒนาแอปพลิเคชันพยากรณ์อากาศและคุณภาพอากาศ (Air Quality Index) ที่รองรับการค้นหาตามชื่อเมือง มีสถานะ Loading Spinner ระหว่างดึงข้อมูล จัดการข้อผิดพลาด (Error Handling) และบันทึกประวัติการค้นหาล่าสุดลงใน LocalStorage\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - แถบค้นหา: ช่องพิมพ์ชื่อเมือง `<input id="city-input" placeholder="...">` และปุ่มค้นหา `<button id="btn-search-weather">ค้นหา</button>`\n   - แถบชิปประวัติการค้นหาล่าสุด `<div id="recent-cities"></div>`\n   - ตัวหมุนแสดงสถานะโหลด `<div id="loading-spinner"></div>` และกล่องข้อผิดพลาด `<div id="weather-error"></div>`\n   - การ์ดแสดงผลสภาพอากาศ `<div id="weather-card">`:\n     - ชื่อเมือง `<h3 id="city-name">-</h3>`\n     - อุณหภูมิ `<span id="temp-val">0</span>°C`\n     - สภาพอากาศ `<div id="weather-desc">-</div>`\n     - ความชื้น `<strong id="humidity-val">0</strong>%`\n     - ความเร็วลม `<strong id="wind-val">0</strong> km/h`\n     - ป้ายระดับ AQI `<span id="aqi-badge">AQI -</span>`\n2. **CSS:**\n   - ดีไซน์การ์ดสภาพอากาศสไตล์ Glassmorphism\n   - ป้าย AQI มีสีตามระดับ เช่น `.aqi-good`, `.aqi-moderate`\n3. **JavaScript:**\n   - ฟังก์ชัน `fetchWeatherData(city)` แบบ `async/await`\n   - แสดง `#loading-spinner` ขณะกำลังดึงข้อมูล และซ่อนเมื่อดึงเสร็จ\n   - หากค้นพบเมือง: อัปเดตข้อมูลบน `#city-name`, `#temp-val`, `#weather-desc`, `#humidity-val`, `#wind-val`, `#aqi-badge` และแสดง `#weather-card`\n   - หากค้นหาไม่พบ: แสดงข้อความแจ้งเตือนใน `#weather-error`\n   - บันทึกชื่อเมืองที่ค้นหาลงใน LocalStorage และแสดงเป็นชิปกดคลิกค้นหาซ้ำได้ทันที',difficulty:`Advanced`,points:250,xp:250,starterHtml:`<!-- ⛅ เขียนโครงสร้าง HTML สำหรับช่องค้นหา (#city-input), ปุ่ม (#btn-search-weather), สถานะ Loading/Error และการ์ดสภาพอากาศ (#weather-card) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับสภาพอากาศ)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --card-bg: #1e293b;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --primary-btn: #0284c7;
  --spinner: #38bdf8;
  --aqi-good: #10b981;
  --aqi-mod: #f59e0b;
  --error-bg: rgba(239, 68, 68, 0.2);
  --error-border: #ef4444;
  --weather-grad: linear-gradient(135deg, #0284c7, #1e40af);
}

/* คลาสพรีเซ็ตสีสำหรับป้าย AQI */
.aqi-good { background: var(--aqi-good); color: white; }
.aqi-moderate { background: var(--aqi-mod); color: white; }

/* เขียนสไตล์ CSS สำหรับเลย์เอาต์การ์ดและผลลัพธ์สภาพอากาศต่อจากนี้ */
`,starterJs:`// เขียนโค้ดระบบค้นหาสภาพอากาศ การเชื่อมต่อ Fetch API และการจัดการสถานะทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="weather-app">
  <h2>🌦️ Live Weather & AQI Hub</h2>
  <div class="search-bar">
    <input type="text" id="city-input" placeholder="พิมพ์ชื่อเมือง เช่น Bangkok, Tokyo, London...">
    <button id="btn-search-weather">ค้นหา</button>
  </div>
  <div id="recent-cities" class="chips-container"></div>
  <div id="loading-spinner" class="spinner" style="display: none;">กำลังดึงข้อมูลสภาพอากาศ...</div>
  <div id="weather-error" class="error-box" style="display: none;"></div>

  <div id="weather-card" class="weather-card" style="display: none;">
    <div class="card-head">
      <h3 id="city-name">-</h3>
      <span id="aqi-badge" class="badge">AQI -</span>
    </div>
    <div class="temp-display">
      <span id="temp-val">0</span>°C
    </div>
    <div id="weather-desc" class="condition-desc">-</div>
    <div class="metrics-grid">
      <div class="metric-item">
        <span>ความชื้น:</span>
        <strong id="humidity-val">0</strong>%
      </div>
      <div class="metric-item">
        <span>ความเร็วลม:</span>
        <strong id="wind-val">0</strong> km/h
      </div>
    </div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; } .weather-app { max-width: 440px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); } .search-bar { display: flex; gap: 8px; margin-bottom: 12px; } input { flex: 1; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: white; } button { padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .chips-container { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; } .city-chip { background: #334155; padding: 4px 10px; border-radius: 12px; font-size: 12px; cursor: pointer; } .spinner { color: #38bdf8; text-align: center; padding: 16px; font-size: 14px; } .error-box { background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; } .weather-card { background: linear-gradient(135deg, #0284c7, #1e40af); padding: 20px; border-radius: 14px; margin-top: 10px; } .card-head { display: flex; justify-content: space-between; align-items: center; } .badge { padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: bold; } .aqi-good { background: #10b981; color: white; } .aqi-moderate { background: #f59e0b; color: white; } .temp-display { font-size: 2.8rem; font-weight: bold; margin: 10px 0 4px 0; } .condition-desc { font-size: 15px; opacity: 0.9; margin-bottom: 16px; } .metrics-grid { display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px; font-size: 13px; }`,targetJs:`const mockWeatherDb = {
  bangkok: { name: "Bangkok, TH", temp: 33, desc: "☀️ ท้องฟ้าแจ่มใส แดดจัด", humidity: 62, wind: 12, aqi: 42, aqiStatus: "Good" },
  tokyo: { name: "Tokyo, JP", temp: 19, desc: "⛅ มีเมฆบางส่วน", humidity: 50, wind: 15, aqi: 25, aqiStatus: "Good" },
  london: { name: "London, UK", temp: 14, desc: "🌧️ ฝนตกโปรยปราย", humidity: 85, wind: 22, aqi: 30, aqiStatus: "Good" },
  chiangmai: { name: "Chiang Mai, TH", temp: 28, desc: "🌫️ หมอกควันจางๆ", humidity: 55, wind: 8, aqi: 85, aqiStatus: "Moderate" }
};

let recentCities = JSON.parse(localStorage.getItem("recent_weather_cities") || '["Bangkok", "Tokyo"]');

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("btn-search-weather");
const recentContainer = document.getElementById("recent-cities");
const spinner = document.getElementById("loading-spinner");
const errorBox = document.getElementById("weather-error");
const weatherCard = document.getElementById("weather-card");

const cityNameEl = document.getElementById("city-name");
const tempValEl = document.getElementById("temp-val");
const weatherDescEl = document.getElementById("weather-desc");
const humidityValEl = document.getElementById("humidity-val");
const windValEl = document.getElementById("wind-val");
const aqiBadgeEl = document.getElementById("aqi-badge");

function renderRecentChips() {
  if (!recentContainer) return;
  recentContainer.innerHTML = "";
  recentCities.forEach(city => {
    const chip = document.createElement("span");
    chip.className = "city-chip";
    chip.textContent = "📍 " + city;
    chip.addEventListener("click", () => {
      cityInput.value = city;
      handleSearch();
    });
    recentContainer.appendChild(chip);
  });
}

async function fetchWeatherData(city) {
  await new Promise(r => setTimeout(r, 40));
  const key = city.trim().toLowerCase().replace(/\\s+/g, "");
  if (mockWeatherDb[key]) {
    return mockWeatherDb[key];
  }
  if (city.trim().length > 0) {
    return {
      name: city.trim(),
      temp: 27,
      desc: "🌤️ อากาศปลอดโปร่ง",
      humidity: 58,
      wind: 10,
      aqi: 38,
      aqiStatus: "Good"
    };
  }
  throw new Error("ไม่พบข้อมูลสภาพอากาศของเมืองนี้");
}

async function handleSearch() {
  const query = cityInput.value.trim();
  if (!query) return;

  if (errorBox) errorBox.style.display = "none";
  if (weatherCard) weatherCard.style.display = "none";
  if (spinner) spinner.style.display = "block";

  try {
    const data = await fetchWeatherData(query);
    if (spinner) spinner.style.display = "none";
    if (weatherCard) weatherCard.style.display = "block";

    if (cityNameEl) cityNameEl.textContent = data.name;
    if (tempValEl) tempValEl.textContent = data.temp;
    if (weatherDescEl) weatherDescEl.textContent = data.desc;
    if (humidityValEl) humidityValEl.textContent = data.humidity;
    if (windValEl) windValEl.textContent = data.wind;

    if (aqiBadgeEl) {
      aqiBadgeEl.textContent = "AQI " + data.aqi + " (" + data.aqiStatus + ")";
      aqiBadgeEl.className = "badge " + (data.aqi > 50 ? "aqi-moderate" : "aqi-good");
    }

    if (!recentCities.includes(query)) {
      recentCities = [query, ...recentCities.slice(0, 4)];
      localStorage.setItem("recent_weather_cities", JSON.stringify(recentCities));
      renderRecentChips();
    }
  } catch (err) {
    if (spinner) spinner.style.display = "none";
    if (errorBox) {
      errorBox.textContent = err.message;
      errorBox.style.display = "block";
    }
  }
}

if (searchBtn) searchBtn.addEventListener("click", handleSearch);
if (cityInput) {
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
}

renderRecentChips();
cityInput.value = "Bangkok";
handleSearch();`,validation:async e=>{let t=e.getElementById(`city-input`),n=e.getElementById(`btn-search-weather`),r=e.getElementById(`weather-card`),i=e.getElementById(`city-name`),a=e.getElementById(`temp-val`);return!t||!n||!r||!i||!a?`ต้องมี element #city-input, #btn-search-weather, #weather-card, #city-name, และ #temp-val`:(t.value=`Tokyo`,n.click(),await new Promise(e=>setTimeout(e,120)),r.style.display===`none`?`เมื่อค้นหาเมืองสำเร็จ กล่อง #weather-card ต้องแสดงผล (display != none)`:i.textContent.includes(`Tokyo`)?!0:`เมื่อค้นหา Tokyo ข้อความใน #city-name ต้องแสดงชื่อเมืองที่ค้นพบ`)},hints:[`ใช้ async/await ในการเรียกข้อมูลจาก API`,`ก่อนเริ่มค้นหา ให้แสดง #loading-spinner และซ่อนเมื่อข้อมูลมาถึง`,`อัปเดตข้อมูลบน #temp-val และ #city-name ให้ตรงกับที่ได้รับ`]},{id:`exam-movie-api`,title:`ข้อสอบปฏิบัติการที่ 6: คลังภาพยนตร์ Movie Explorer (REST API & Debounce)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'ข้อสอบชุดนี้เป็นการพัฒนาแอปพลิเคชันค้นหาภาพยนตร์และซีรีส์ที่มีการใช้เทคนิค **Search Debounce (หน่วงเวลาพิมพ์ 300ms)** เพื่อป้องกันการเรียก API ถี่เกินไป พร้อมแสดงผลแบบ Responsive Card Grid และหน้าต่าง Modal เจาะลึกรายละเอียดภาพยนตร์\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - ช่องค้นหา: `<input id="movie-search" placeholder="...">`\n   - ตัวกรองหมวดหมู่: `<select id="genre-filter">` มี `all`, `action`, `sci-fi`, `drama`\n   - ตารางแสดงภาพยนตร์: `<div id="movie-grid" class="movie-grid"></div>`\n   - หน้าต่าง Modal: `<div id="movie-modal">` พร้อมปุ่มปิด `<button id="btn-close-modal">✕</button>` และ `<div id="modal-content"></div>`\n2. **CSS:**\n   - การ์ดภาพยนตร์ `.movie-card` พร้อมเอฟเฟกต์ยกตัวเมื่อ Hover\n   - หน้าต่าง Modal สไตล์ Backdrop Blur สวยงาม\n3. **JavaScript:**\n   - ใช้เทคนิค **Debounce** กับ event `input` บน `#movie-search`\n   - Render การ์ดภาพยนตร์ลงใน `#movie-grid`\n   - เมื่อคลิกการ์ด ให้เปิด Modal แสดงรายละเอียดเรื่องย่อและนักแสดง\n   - ปุ่ม `#btn-close-modal` ปิดหน้าต่าง Modal',difficulty:`Advanced`,points:250,xp:250,starterHtml:`<!-- 🎬 เขียนโครงสร้าง HTML สำหรับช่องค้นหา (#movie-search), ตัวกรองหมวดหมู่ (#genre-filter), ตารางการ์ด (#movie-grid) และหน้าต่าง Modal (#movie-modal, #btn-close-modal, #modal-content) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Movie Explorer)
   ========================================== */
:root {
  --bg-page: #0b0f19;
  --card-bg: #1e293b;
  --border: #334155;
  --accent: #6366f1;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --modal-overlay: rgba(0, 0, 0, 0.75);
}

/* เขียนสไตล์ CSS จัดวาง Grid และ Modal Backdrop ของคุณต่อจากนี้ */
`,starterJs:`// เขียนโค้ดระบบค้นหาภาพยนตร์ เทคนิค Debounce และการจัดการ Modal ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="movie-app">
  <div class="app-header">
    <h2>🎬 Movie Explorer DB</h2>
    <div class="filter-bar">
      <input type="text" id="movie-search" placeholder="ค้นหาชื่อหนัง เช่น Inception, Parasite...">
      <select id="genre-filter">
        <option value="all">ทุกหมวดหมู่ (All Genres)</option>
        <option value="sci-fi">ไซไฟ (Sci-Fi)</option>
        <option value="action">แอ็กชัน (Action)</option>
        <option value="drama">ดราม่า (Drama)</option>
      </select>
    </div>
  </div>
  <div id="movie-grid" class="movie-grid"></div>
  <div id="movie-modal" class="modal-overlay" style="display: none;">
    <div class="modal-box">
      <button id="btn-close-modal" class="close-btn">✕</button>
      <div id="modal-content"></div>
    </div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0b0f19; color: #f1f5f9; padding: 24px; } .movie-app { max-width: 680px; margin: 0 auto; } .app-header { margin-bottom: 20px; } .filter-bar { display: flex; gap: 10px; margin-top: 10px; } input, select { padding: 10px 14px; border-radius: 8px; border: 1px solid #1e293b; background: #1e293b; color: white; } input { flex: 1; } .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; } .movie-card { background: #1e293b; border-radius: 12px; padding: 16px; cursor: pointer; transition: transform 0.2s; border: 1px solid #334155; } .movie-card:hover { transform: translateY(-4px); border-color: #6366f1; } .poster-icon { font-size: 40px; text-align: center; margin-bottom: 10px; } .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 999; } .modal-box { background: #1e293b; padding: 24px; border-radius: 16px; max-width: 440px; position: relative; border: 1px solid #475569; } .close-btn { position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: white; font-size: 18px; cursor: pointer; }`,targetJs:`const movies = [
  { id: 1, title: "Inception", year: 2010, rating: "8.8", genre: "sci-fi", poster: "🌀", desc: "การโจรกรรมข้อมูลผ่านการแทรกซึมเข้าสู่ความฝันซ้อนความฝันของเป้าหมาย", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
  { id: 2, title: "Interstellar", year: 2014, rating: "8.7", genre: "sci-fi", poster: "🚀", desc: "การเดินทางข้ามมิติรูหนอนอวกาศเพื่อค้นหาดาวดวงใหม่สำหรับมนุษยชาติ", cast: "Matthew McConaughey, Anne Hathaway" },
  { id: 3, title: "The Dark Knight", year: 2008, rating: "9.0", genre: "action", poster: "🦇", desc: "การต่อสู้ปกป้องเมืองก็อตแธมระหว่างแบทแมนกับโจ๊กเกอร์ผู้ไร้กฎเกณฑ์", cast: "Christian Bale, Heath Ledger" },
  { id: 4, title: "Parasite", year: 2019, rating: "8.5", genre: "drama", poster: "🏠", desc: "เรื่องราวตลกร้ายเสียดสีความเหลื่อมล้ำของสองครอบครัวที่มีชีวิตต่างกันสุดขั้ว", cast: "Song Kang-ho, Choi Woo-shik" },
  { id: 5, title: "Avengers: Endgame", year: 2019, rating: "8.4", genre: "action", poster: "🛡️", desc: "มหาศึกกอบกู้จักรวาลครั้งสุดท้ายของเหล่าอเวนเจอร์สเพื่อนำทุกคนกลับมา", cast: "Robert Downey Jr., Chris Evans" }
];

let debounceTimer = null;
const searchInput = document.getElementById("movie-search");
const genreFilter = document.getElementById("genre-filter");
const gridEl = document.getElementById("movie-grid");
const modalEl = document.getElementById("movie-modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("btn-close-modal");

function renderMovies(list) {
  if (!gridEl) return;
  gridEl.innerHTML = "";

  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = "<div class='poster-icon'>" + m.poster + "</div><div class='card-meta'><h4>" + m.title + "</h4><div class='meta-row'><span>⭐ " + m.rating + "</span><span> (" + m.year + ")</span></div></div>";
    card.addEventListener("click", () => openModal(m));
    gridEl.appendChild(card);
  });
}

function openModal(movie) {
  if (!modalEl || !modalContent) return;
  modalContent.innerHTML = "<h2>" + movie.poster + " " + movie.title + " (" + movie.year + ")</h2><div style='color:#f59e0b; margin:6px 0;'>⭐ " + movie.rating + " / 10 | หมวด: " + movie.genre.toUpperCase() + "</div><p style='color:#cbd5e1; margin:12px 0;'>" + movie.desc + "</p><div style='font-size:13px; color:#94a3b8;'><strong>นักแสดง:</strong> " + movie.cast + "</div>";
  modalEl.style.display = "flex";
}

function closeModal() {
  if (modalEl) modalEl.style.display = "none";
}

function filterAndSearch() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const genre = genreFilter ? genreFilter.value : "all";

  const results = movies.filter(m => {
    const matchQuery = m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query);
    const matchGenre = genre === "all" || m.genre === genre;
    return matchQuery && matchGenre;
  });

  renderMovies(results);
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterAndSearch, 200);
  });
}

if (genreFilter) genreFilter.addEventListener("change", filterAndSearch);
if (closeBtn) closeBtn.addEventListener("click", closeModal);

renderMovies(movies);`,validation:e=>{let t=e.getElementById(`movie-search`),n=e.getElementById(`movie-grid`),r=e.getElementById(`movie-modal`),i=e.getElementById(`btn-close-modal`);if(!t||!n||!r||!i)return`ไม่พบ element #movie-search, #movie-grid, #movie-modal หรือ #btn-close-modal`;let a=n.querySelectorAll(`.movie-card`);return a.length===0?`ต้องมีรายการภาพยนตร์ .movie-card แสดงใน #movie-grid`:(a[0].click(),r.style.display===`none`?`เมื่อคลิกที่การ์ดภาพยนตร์ หน้าต่าง #movie-modal ต้องแสดงผล`:(i.click(),r.style.display===`none`||`เมื่อคลิกปุ่ม #btn-close-modal หน้าต่าง Modal ต้องถูกปิด`))},hints:[`ใช้ clearTimeout(debounceTimer) ก่อนตั้ง setTimeout เพื่อทำ debounce`,`สร้างการ์ดด้วย document.createElement('div') และใส่ class 'movie-card'`,`ผูก click บนการ์ดเพื่ออัปเดต #modal-content และแสดง #movie-modal`]},{id:`exam-canvas-game`,title:`ข้อสอบปฏิบัติการที่ 7: เกมยานอวกาศหลบอุกกาบาต Cyber Dodger (Canvas 2D Game Loop)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:`สร้างเกมอาร์เคด 2 มิติเต็มรูปแบบด้วย **HTML5 Canvas 2D API** และ **Game Loop (requestAnimationFrame)** ควบคุมยานอวกาศหลบหลีกอุกกาบาตที่ตกลงมาด้วยความเร็วที่เพิ่มขึ้นเรื่อยๆ พร้อมระบบคำนวณการชน (Collision Detection) และบันทึกคะแนนสูงสุด (High Score)

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - พื้นที่กระดานเกม: \`<canvas id="game-canvas" width="360" height="340"></canvas>\`
   - แถบคะแนน: \`<strong id="game-score">0</strong>\`
   - จำนวนหัวใจชีวิต: \`<span id="player-lives">❤️❤️❤️</span>\`
   - ปุ่มควบคุม: \`<button id="btn-start-game">เริ่มเกม</button>\`, \`<button id="btn-left">◀ ซ้าย</button>\`, \`<button id="btn-right">ขวา ▶</button>\`
2. **CSS:**
   - จัดวาง Canvas และปุ่มควบคุมให้กึ่งกลางหน้าจอสวยงาม
3. **JavaScript:**
   - ใช้ \`canvas.getContext("2d")\` สำหรับวาดกราฟิก
   - วัตถุผู้เล่น (Player): เคลื่อนที่ตามปุ่มควบคุม
   - วัตถุอุกกาบาต (Asteroids): สุ่มตำแหน่งเกิดและตกลงมา
   - ตรวจสอบการชน (Collision Detection): ลดพลังชีวิตเมื่อชน
   - บันทึกคะแนนและจบเกมเมื่อพลังชีวิตหมด`,difficulty:`Advanced`,points:300,xp:300,starterHtml:`<!-- 🚀 เขียนโครงสร้าง HTML สำหรับแผงคะแนน HUD, กระดาน Canvas (#game-canvas) และปุ่มควบคุม (#btn-start-game, #btn-left, #btn-right) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Cyber Dodger)
   ========================================== */
:root {
  --bg-page: #030712;
  --game-box-bg: #111827;
  --canvas-bg: #0f172a;
  --border-hud: #1f2937;
  --player-color: #38bdf8;
  --asteroid-color: #f43f5e;
  --btn-ctrl: #2563eb;
  --btn-start: #059669;
  --text-main: #ffffff;
}

/* เขียนสไตล์ CSS จัดตำแหน่ง Canvas และปุ่มควบคุมของคุณต่อจากนี้ */
`,starterJs:`// เขียนโค้ดระบบเกม Canvas 2D การควบคุม และ Game Loop ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="game-box">
  <div class="hud">
    <div>แต้ม: <strong id="game-score">0</strong></div>
    <div>ชีวิต: <span id="player-lives">❤️❤️❤️</span></div>
    <div>สูงสุด: <strong id="high-score">0</strong></div>
  </div>
  <canvas id="game-canvas" width="360" height="340"></canvas>
  <div class="controls-bar">
    <button id="btn-left">◀ ซ้าย</button>
    <button id="btn-start-game">เริ่มเกม</button>
    <button id="btn-right">ขวา ▶</button>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #030712; color: white; padding: 20px; display: flex; justify-content: center; } .game-box { background: #111827; padding: 20px; border-radius: 16px; width: 360px; text-align: center; border: 1px solid #1f2937; box-shadow: 0 10px 25px rgba(0,0,0,0.5); } .hud { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; } canvas { background: #0f172a; border-radius: 8px; border: 1px solid #38bdf8; display: block; margin: 0 auto 14px auto; } .controls-bar { display: flex; justify-content: space-between; gap: 8px; } button { padding: 10px 14px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; flex: 1; } #btn-start-game { background: #059669; }`,targetJs:`const canvas = document.getElementById("game-canvas");
const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
const scoreEl = document.getElementById("game-score");
const livesEl = document.getElementById("player-lives");
const highScoreEl = document.getElementById("high-score");
const startBtn = document.getElementById("btn-start-game");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let score = 0;
let lives = 3;
let highScore = parseInt(localStorage.getItem("dodger_highscore") || "0");
let isRunning = false;
let animId = null;

let player = { x: 160, y: 300, width: 36, height: 24, speed: 6 };
let asteroids = [];

if (highScoreEl) highScoreEl.textContent = highScore;

function resetGame() {
  score = 0;
  lives = 3;
  player.x = 160;
  asteroids = [];
  isRunning = true;
  if (scoreEl) scoreEl.textContent = "0";
  if (livesEl) livesEl.textContent = "❤️❤️❤️";
  if (startBtn) startBtn.textContent = "เล่นใหม่";
}

function spawnAsteroid() {
  if (Math.random() < 0.05 && canvas) {
    asteroids.push({
      x: Math.random() * (canvas.width - 24),
      y: -20,
      size: 16 + Math.random() * 12,
      speed: 2.5 + Math.random() * 2
    });
  }
}

function updateGame() {
  if (!isRunning || !ctx || !canvas) return;

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Player
  ctx.fillStyle = "#38bdf8";
  ctx.beginPath();
  ctx.moveTo(player.x + player.width / 2, player.y);
  ctx.lineTo(player.x, player.y + player.height);
  ctx.lineTo(player.x + player.width, player.y + player.height);
  ctx.closePath();
  ctx.fill();

  // Update & Draw Asteroids
  spawnAsteroid();
  for (let i = asteroids.length - 1; i >= 0; i--) {
    let a = asteroids[i];
    a.y += a.speed;

    ctx.fillStyle = "#f43f5e";
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Collision Check
    const distX = Math.abs(a.x - (player.x + player.width / 2));
    const distY = Math.abs(a.y - (player.y + player.height / 2));
    if (distX < (player.width / 2 + a.size / 2) && distY < (player.height / 2 + a.size / 2)) {
      asteroids.splice(i, 1);
      lives--;
      if (livesEl) livesEl.textContent = "❤️".repeat(Math.max(0, lives));
      if (lives <= 0) {
        gameOver();
        return;
      }
      continue;
    }

    // Out of screen
    if (a.y > canvas.height + 20) {
      asteroids.splice(i, 1);
      score += 10;
      if (scoreEl) scoreEl.textContent = score;
    }
  }

  if (typeof requestAnimationFrame !== "undefined") {
    animId = requestAnimationFrame(updateGame);
  }
}

function gameOver() {
  isRunning = false;
  if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(animId);
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("dodger_highscore", highScore);
    if (highScoreEl) highScoreEl.textContent = highScore;
  }
  if (ctx && canvas) {
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f43f5e";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
  }
}

if (startBtn) {
  startBtn.addEventListener("click", () => {
    resetGame();
    if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(animId);
    updateGame();
  });
}

function moveLeft() {
  player.x = Math.max(0, player.x - 20);
}
function moveRight() {
  player.x = Math.min(canvas ? canvas.width - player.width : 300, player.x + 20);
}

if (btnLeft) btnLeft.addEventListener("click", moveLeft);
if (btnRight) btnRight.addEventListener("click", moveRight);`,validation:e=>{let t=e.getElementById(`game-canvas`),n=e.getElementById(`game-score`),r=e.getElementById(`player-lives`),i=e.getElementById(`btn-start-game`);if(!t||!n||!r||!i)return`ต้องมี element #game-canvas, #game-score, #player-lives และ #btn-start-game`;if(t.width<300||t.height<300)return`ขนาดกระดาน Canvas ต้องมีความกว้างและความสูงอย่างน้อย 300px`;try{i.click()}catch{}return!0},hints:[`ใช้ canvas.getContext('2d') เพื่อเข้าถึงคำสั่งวาดภาพ`,`สร้างฟังก์ชัน updateGame และเรียก requestAnimationFrame(updateGame)`,`ตรวจสอบระยะห่างระหว่างจุดศูนย์กลางยานกับอุกกาบาตเพื่อตรวจจับการชน`]},{id:`exam-whack-mole-game`,title:`ข้อสอบปฏิบัติการที่ 8: เกมตีตุ่นประลองความไว Whack-A-Mole (Timers & Web Audio)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'พัฒนาเกมตีตัวตุ่น (Whack-A-Mole) 9 ช่อง (3x3 Grid) ที่ฝึกใช้ **DOM Manipulation, Interval Timers, Event Listeners** และ **Web Audio API** สร้างเสียงเอฟเฟกต์สังเคราะห์โดยไม่ต้องพึ่งพาไฟล์เสียงภายนอก พร้อมระบบคอมโบ (Combo Streak) และเวลานับถอยหลัง 30 วินาที\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - คะแนน `<strong id="mole-score">0</strong>`\n   - เวลานับถอยหลัง `<strong id="time-left">30</strong> วิ`\n   - ปุ่มเริ่มเกม `<button id="btn-start-mole">เริ่มเล่น</button>`\n   - กระดานหลุมตุ่น 9 ช่อง: `<div class="mole-grid">` ภายในมี 9 ช่อง `<div class="hole"><div class="mole">🐹</div></div>`\n2. **CSS:**\n   - จัดวางตาราง 3x3 ด้วย CSS Grid\n   - กำหนดสไตล์เมื่อตุ่นโผล่ `.hole.up .mole`\n3. **JavaScript:**\n   - สุ่มให้ตุ่นโผล่ขึ้นมาในแต่ละหลุม\n   - เมื่อคลิกตีที่ `.mole`: ให้เพิ่มคะแนนใน `#mole-score` และหดตุ่นกลับลงหลุม\n   - จับเวลาถอยหลัง และหยุดเกมเมื่อหมดเวลา',difficulty:`Advanced`,points:300,xp:300,starterHtml:`<!-- 🐹 เขียนโครงสร้าง HTML สำหรับแผงคะแนน (#mole-score, #time-left, #combo-streak, #btn-start-mole) และกระดานหลุมตุ่น 9 ช่อง (.mole-grid > .hole > .mole) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Whack-A-Mole)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --hole-bg: #334155;
  --hole-shadow: #1e293b;
  --btn-start: #10b981;
  --text-main: #ffffff;
  --accent-score: #fbbf24;
}

/* เขียนสไตล์ CSS สำหรับตาราง Grid 3x3 และอนิเมชันตุ่นโผล่ (.hole.up .mole) ของคุณต่อจากนี้ */
`,starterJs:`// เขียนตรรกะเกมตีตัวตุ่น การสุ่มหลุม และระบบนับคะแนนทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="mole-app">
  <h2>🔨 Whack-A-Mole Reflex Challenge</h2>
  <div class="game-meta">
    <div>คะแนน: <strong id="mole-score">0</strong></div>
    <div>เวลา: <strong id="time-left">30</strong> วิ</div>
    <div>คอมโบ: <span id="combo-streak">0</span>x</div>
    <button id="btn-start-mole">เริ่มเล่น</button>
  </div>
  <div class="mole-grid">
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
  </div>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; text-align: center; } .mole-app { max-width: 440px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 16px; } .game-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; font-size: 14px; } #btn-start-mole { padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .mole-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; } .hole { height: 90px; background: #334155; border-radius: 12px; overflow: hidden; position: relative; border-bottom: 6px solid #1e293b; } .mole { font-size: 40px; position: absolute; width: 100%; height: 100%; top: 100%; transition: top 0.2s ease-in-out; display: flex; align-items: center; justify-content: center; cursor: pointer; user-select: none; } .hole.up .mole { top: 0; }`,targetJs:`const holes = document.querySelectorAll(".hole");
const scoreEl = document.getElementById("mole-score");
const timeEl = document.getElementById("time-left");
const comboEl = document.getElementById("combo-streak");
const startBtn = document.getElementById("btn-start-mole");

let lastHole = null;
let timeUp = false;
let score = 0;
let combo = 0;
let countdown = 30;
let timerId = null;
let moleTimerId = null;

function playHitSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 520 + combo * 40;
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

function randomHole() {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole();
  lastHole = hole;
  return hole;
}

function peep() {
  if (timeUp) return;
  const time = Math.round(Math.random() * 400) + 600;
  const hole = randomHole();
  hole.classList.add("up");
  moleTimerId = setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function bonk() {
  if (!this.parentElement.classList.contains("up")) return;
  score += 10 + combo * 2;
  combo++;
  if (scoreEl) scoreEl.textContent = score;
  if (comboEl) comboEl.textContent = combo;
  playHitSound();
  this.parentElement.classList.remove("up");
}

function startGame() {
  score = 0;
  combo = 0;
  countdown = 30;
  timeUp = false;
  if (scoreEl) scoreEl.textContent = "0";
  if (comboEl) comboEl.textContent = "0";
  if (timeEl) timeEl.textContent = "30";
  clearInterval(timerId);
  clearTimeout(moleTimerId);

  holes.forEach(h => h.classList.remove("up"));
  peep();

  timerId = setInterval(() => {
    countdown--;
    if (timeEl) timeEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timerId);
      timeUp = true;
      holes.forEach(h => h.classList.remove("up"));
    }
  }, 1000);
}

document.querySelectorAll(".mole").forEach(mole => {
  mole.addEventListener("click", bonk);
});

if (startBtn) startBtn.addEventListener("click", startGame);`,validation:e=>{let t=e.querySelectorAll(`.hole`),n=e.getElementById(`mole-score`),r=e.getElementById(`time-left`),i=e.getElementById(`btn-start-mole`);return t.length===9?!n||!r||!i?`ต้องมี element #mole-score, #time-left และ #btn-start-mole`:(i.click(),t[0].classList.add(`up`),t[0].querySelector(`.mole`).click(),parseInt(n.textContent)<=0?`เมื่อคลิกตีที่ตุ่น .mole คะแนนใน #mole-score ต้องเพิ่มขึ้น`:!0):`กระดานเกมต้องมีหลุมตุ่น (.hole) ทั้งหมด 9 ช่อง`},hints:[`ใช้ Math.floor(Math.random() * holes.length) เพื่อสุ่มหลุม`,`เมื่อคลิก .mole ให้เพิ่ม class 'up' หลุดออก และบวกคะแนน`,`ใช้ setInterval นับเวลาถอยหลัง และหยุดเมื่อครบ 30 วินาที`]},{id:`exam-wordle-game`,title:`ข้อสอบปฏิบัติการที่ 9: เกมทายคำศัพท์ Wordle Master (Keyboard & State)`,category:`ข้อสอบปฏิบัติการเชิงประยุกต์`,description:'สร้างเกมทายคำศัพท์ 5 ตัวอักษรยอดนิยมระดับโลก (Wordle Master) ด้วย **JavaScript 2D Matrix State, Keyboard Event Listeners (keydown), และ Dynamic Class Flipping** มี 6 แถว (โอกาสทาย 6 ครั้ง) พร้อมแป้นพิมพ์เสมือนจริงบนหน้าจอ\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - กระดานตารางทายคำ: `<div id="wordle-board">` ประกอบด้วย 6 แถว แถวละ 5 ช่อง (`.letter-tile`) รวม 30 ช่อง\n   - แป้นพิมพ์เสมือนจริงบนหน้าจอพร้อมปุ่มตัวอักษร, `ENTER`, และ `DEL`\n   - ปุ่มเริ่มเกมใหม่ `<button id="btn-restart-wordle">เริ่มรอบใหม่</button>`\n2. **CSS:**\n   - สถานะสีมาตรฐาน: `.correct` (สีเขียว), `.present` (สีเหลือง), `.absent` (สีเทา)\n3. **JavaScript:**\n   - ดักจับ Event `keydown` พิมพ์ตัวอักษร A-Z และคลิกปุ่มบนหน้าจอ\n   - เมื่อกด `ENTER`: ตรวจสอบความถูกต้องของตัวอักษรทั้ง 5 ตำแหน่งและใส่คลาสสี\n   - ปุ่ม `#btn-restart-wordle` รีเซ็ตกระดานเริ่มรอบใหม่',difficulty:`Advanced`,points:300,xp:300,starterHtml:`<!-- 🟩 เขียนโครงสร้าง HTML สำหรับข้อความแจ้งเตือน (#wordle-msg), กระดาน (#wordle-board), คีย์บอร์ด (#kb-row-1, #kb-row-2, #kb-row-3) และปุ่มเริ่มใหม่ (#btn-restart-wordle) ตามข้อกำหนด -->
`,starterCss:`/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีมาตรฐานสำหรับ Wordle)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --tile-border: #334155;
  --tile-filled: #64748b;
  --correct: #10b981;  /* สีเขียว: ตัวอักษรและตำแหน่งถูกต้อง */
  --present: #eab308;  /* สีเหลือง: มีตัวอักษรนี้แต่อยู่ผิดตำแหน่ง */
  --absent: #475569;   /* สีเทา: ไม่มีตัวอักษรนี้ในคำ */
  --key-bg: #334155;
  --key-wide: #475569;
  --btn-restart: #0284c7;
  --text-main: #ffffff;
}

/* คลาสพรีเซ็ตสีสำหรับช่องตัวอักษร */
.letter-tile.correct { background: var(--correct); border-color: var(--correct); }
.letter-tile.present { background: var(--present); border-color: var(--present); }
.letter-tile.absent { background: var(--absent); border-color: var(--absent); }

/* เขียนสไตล์ CSS สำหรับกระดานตาราง 6x5 และแป้นพิมพ์เสมือนจริงของคุณต่อจากนี้ */
`,starterJs:`// เขียนตรรกะเกมทายคำศัพท์ Wordle และการประมวลผลแป้นพิมพ์ทั้งหมดด้วยตนเอง
`,targetHtml:`<div class="wordle-app">
  <h2>🟩 Wordle Master (5 ตัวอักษร)</h2>
  <div id="wordle-msg" class="msg-banner"></div>
  <div id="wordle-board" class="board"></div>
  <div class="keyboard">
    <div class="kb-row" id="kb-row-1"></div>
    <div class="kb-row" id="kb-row-2"></div>
    <div class="kb-row" id="kb-row-3"></div>
  </div>
  <button id="btn-restart-wordle" class="restart-btn">เริ่มรอบใหม่</button>
</div>`,targetCss:`body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 20px; text-align: center; } .wordle-app { max-width: 440px; margin: 0 auto; } .msg-banner { height: 24px; font-weight: bold; color: #38bdf8; margin-bottom: 8px; font-size: 14px; } .board { display: grid; grid-template-rows: repeat(6, 1fr); gap: 6px; margin-bottom: 20px; } .row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; } .letter-tile { height: 50px; border: 2px solid #334155; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; text-transform: uppercase; background: #1e293b; } .letter-tile.filled { border-color: #64748b; } .letter-tile.correct { background: #10b981; border-color: #10b981; } .letter-tile.present { background: #eab308; border-color: #eab308; } .letter-tile.absent { background: #475569; border-color: #475569; } .keyboard { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; } .kb-row { display: flex; justify-content: center; gap: 4px; } .key-btn { padding: 12px 10px; background: #334155; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px; } .key-btn.wide { padding: 12px 14px; background: #475569; } .restart-btn { padding: 8px 18px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }`,targetJs:`const WORD_LIST = ["REACT", "LEARN", "LOGIC", "STYLE", "CLONE", "BUILD", "CLEAN"];
let targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

const board = document.getElementById("wordle-board");
const msgEl = document.getElementById("wordle-msg");
const restartBtn = document.getElementById("btn-restart-wordle");

function initBoard() {
  if (!board) return;
  board.innerHTML = "";
  for (let r = 0; r < 6; r++) {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-row", r);
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.className = "letter-tile";
      tile.setAttribute("data-col", c);
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

function initKeyboard() {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = ["ENTER", ..."ZXCVBNM".split(""), "DEL"];

  const buildRow = (letters, rowId) => {
    const el = document.getElementById(rowId);
    if (!el) return;
    el.innerHTML = "";
    letters.forEach(k => {
      const btn = document.createElement("button");
      btn.className = "key-btn" + (k.length > 1 ? " wide" : "");
      btn.textContent = k;
      btn.setAttribute("data-key", k);
      btn.addEventListener("click", () => handleInput(k));
      el.appendChild(btn);
    });
  };

  buildRow(row1, "kb-row-1");
  buildRow(row2, "kb-row-2");
  buildRow(row3, "kb-row-3");
}

function handleInput(key) {
  if (isGameOver) return;

  if (key === "ENTER") {
    submitGuess();
  } else if (key === "DEL" || key === "BACKSPACE") {
    deleteLetter();
  } else if (/^[A-Z]$/.test(key)) {
    addLetter(key);
  }
}

function addLetter(letter) {
  if (currentTile >= 5) return;
  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  if (!rowEl) return;
  const tile = rowEl.children[currentTile];
  tile.textContent = letter;
  tile.classList.add("filled");
  currentTile++;
}

function deleteLetter() {
  if (currentTile <= 0) return;
  currentTile--;
  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  if (!rowEl) return;
  const tile = rowEl.children[currentTile];
  tile.textContent = "";
  tile.classList.remove("filled");
}

function submitGuess() {
  if (currentTile < 5) {
    if (msgEl) msgEl.textContent = "คำต้องมี 5 ตัวอักษร";
    return;
  }

  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  let guess = "";
  for (let i = 0; i < 5; i++) {
    guess += rowEl.children[i].textContent;
  }

  const targetArr = targetWord.split("");
  const guessArr = guess.split("");

  for (let i = 0; i < 5; i++) {
    const tile = rowEl.children[i];
    const letter = guessArr[i];
    if (letter === targetArr[i]) {
      tile.classList.add("correct");
    } else if (targetArr.includes(letter)) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }
  }

  if (guess === targetWord) {
    isGameOver = true;
    if (msgEl) msgEl.textContent = "🎉 ถูกต้องแล้ว! ยอดเยี่ยมมาก!";
    return;
  }

  currentRow++;
  currentTile = 0;

  if (currentRow >= 6) {
    isGameOver = true;
    if (msgEl) msgEl.textContent = "เฉลยคำตอบคือ: " + targetWord;
  }
}

function restartGame() {
  targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  currentRow = 0;
  currentTile = 0;
  isGameOver = false;
  if (msgEl) msgEl.textContent = "";
  initBoard();
}

window.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (key === "ENTER" || key === "BACKSPACE" || /^[A-Z]$/.test(key)) {
    handleInput(key);
  }
});

if (restartBtn) restartBtn.addEventListener("click", restartGame);

initBoard();
initKeyboard();`,validation:e=>{let t=e.getElementById(`wordle-board`),n=e.getElementById(`btn-restart-wordle`);if(!t||!n)return`ต้องมี element #wordle-board และ #btn-restart-wordle`;let r=t.querySelectorAll(`.letter-tile`);if(r.length!==30)return`กระดาน Wordle ต้องมีช่องตัวอักษร (.letter-tile) ครบ 30 ช่อง (6 แถว × 5 ช่อง)`;let i=e.querySelector(`.key-btn[data-key='A']`);return i&&i.click(),r[0].textContent===`A`?(n.click(),t.querySelectorAll(`.letter-tile`)[0].textContent===``||`เมื่อกดปุ่มเริ่มรอบใหม่ ช่องตัวอักษรต้องถูกเคลียร์ว่าง`):`เมื่อกดพิมพ์ตัวอักษร ช่องแรกของแถวต้องแสดงตัวอักษรนั้น`},hints:[`สร้าง 6 แถว แถวละ 5 ช่อง ด้วยลูปซ้อน 2 ชั้น`,`เปรียบเทียบทีละตัวอักษร: ตัวตรงตำแหน่งใส่ 'correct', มีตัวในคำใส่ 'present', ไม่มีใส่ 'absent'`,`ดักจับ event 'keydown' เพื่อรองรับการพิมพ์จากคีย์บอร์ดจริง`]},{id:`exam-drag-drop-board`,title:`ข้อสอบปฏิบัติการที่ 10: กระดานเคลื่อนย้ายงาน HTML5 Drag & Drop Kanban (สไลด์ 3 หน้า 18-19)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,difficulty:`ยาก (Advanced Exam)`,xp:260,description:'ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบความรู้และทักษะการใช้งาน **HTML5 Drag and Drop API** ตามที่สอนในสไลด์ชุดที่ 3 หน้า 18–19 โดยตรง!\n\nผู้สอบต้องพัฒนาระบบกระดานจัดหมวดหมู่งาน (Kanban Board) 2 คอลัมน์ ได้แก่:\n1. **#col-todo** (คอลัมน์ "งานที่ต้องทำ") บรรจุการ์ดงานเบื้องต้นอย่างน้อย 2 ใบ\n2. **#col-done** (คอลัมน์ "งานที่เสร็จแล้ว")\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - การ์ดงานแต่ละใบต้องมีคลาส `.kanban-card` พร้อมแอตทริบิวต์ `draggable="true"` และระบุ id ประจำตัว (เช่น `id="card-1"`, `id="card-2"`)\n   - คอลัมน์ทั้งสองมีคลาส `.kanban-col` และมี id เป็น `col-todo` และ `col-done`\n   - ป้ายระบุจำนวนงาน: `<span id="count-todo">2</span>` และ `<span id="count-done">0</span>`\n2. **JavaScript Drag & Drop Events:**\n   - **`dragstart` บนการ์ด:** ส่ง id ของการ์ดเข้าไปใน dataTransfer ผ่านคำสั่ง `ev.dataTransfer.setData("text/plain", ev.target.id);` และใส่คลาส `dragging` ให้กับการ์ด\n   - **`dragend` บนการ์ด:** ลบคลาส `dragging` ออกจากการ์ด\n   - **`dragover` บนคอลัมน์:** เรียก `ev.preventDefault();` เสมอเพื่ออนุญาตให้วาง (Drop) ได้ และเพิ่มคลาส `drag-over` ให้กับคอลัมน์\n   - **`dragleave` บนคอลัมน์:** ลบคลาส `drag-over` ออกจากคอลัมน์\n   - **`drop` บนคอลัมน์:**\n     - เรียก `ev.preventDefault();`\n     - ดึง id ของการ์ดที่ถูกลากออกมาด้วยคำสั่ง `const cardId = ev.dataTransfer.getData("text/plain");`\n     - ค้นหา element ของการ์ดด้วย `document.getElementById(cardId)`\n     - ย้ายการ์ดเข้าไปต่อท้ายในคอลัมน์นั้นด้วย `col.appendChild(card);`\n     - ลบคลาส `drag-over`\n     - อัปเดตตัวเลขจำนวนงานบน `#count-todo` และ `#count-done` ให้ตรงกับจำนวนการ์ดจริง',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Kanban Drag and Drop</title>
</head>
<body>
  <div class="kanban-wrapper">
    <h2>📋 กระดานติดตามงาน (HTML5 Drag & Drop)</h2>
    <div class="board-container">
      <div class="kanban-col" id="col-todo">
        <div class="col-header">
          <h3>📌 งานที่ต้องทำ (<span id="count-todo">2</span>)</h3>
        </div>
        <div class="kanban-card" id="card-1" draggable="true">
          <h4>ออกแบบโครงสร้างฐานข้อมูล</h4>
          <span class="badge high">สำคัญมาก</span>
        </div>
        <div class="kanban-card" id="card-2" draggable="true">
          <h4>จัดทำสไลด์นำเสนอโปรเจกต์</h4>
          <span class="badge normal">ปกติ</span>
        </div>
      </div>

      <div class="kanban-col" id="col-done">
        <div class="col-header">
          <h3>✅ งานที่เสร็จแล้ว (<span id="count-done">0</span>)</h3>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,starterCss:`body {
  font-family: 'Sarabun', sans-serif;
  background: #f8fafc;
  padding: 24px;
}
.kanban-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
.board-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
}
.kanban-col {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 16px;
  min-height: 320px;
  border: 2px dashed #cbd5e1;
  transition: all 0.2s ease;
}
.kanban-col.drag-over {
  background: #e0f2fe;
  border-color: #0284c7;
}
.col-header {
  font-size: 15px;
  margin-bottom: 12px;
  color: #1e293b;
}
.kanban-card {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  cursor: grab;
  transition: opacity 0.2s ease;
}
.kanban-card:active {
  cursor: grabbing;
}
.kanban-card.dragging {
  opacity: 0.4;
}
.badge {
  display: inline-block;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 6px;
}
.badge.high { background: #fee2e2; color: #dc2626; }
.badge.normal { background: #e0f2fe; color: #0284c7; }`,starterJs:`// เขียนโค้ดระบบ HTML5 Drag and Drop จัดการ Kanban Board ของคุณที่นี่
`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Kanban Drag and Drop</title>
</head>
<body>
  <div class="kanban-wrapper">
    <h2>📋 กระดานติดตามงาน (HTML5 Drag & Drop)</h2>
    <div class="board-container">
      <div class="kanban-col" id="col-todo">
        <div class="col-header">
          <h3>📌 งานที่ต้องทำ (<span id="count-todo">2</span>)</h3>
        </div>
        <div class="kanban-card" id="card-1" draggable="true">
          <h4>ออกแบบโครงสร้างฐานข้อมูล</h4>
          <span class="badge high">สำคัญมาก</span>
        </div>
        <div class="kanban-card" id="card-2" draggable="true">
          <h4>จัดทำสไลด์นำเสนอโปรเจกต์</h4>
          <span class="badge normal">ปกติ</span>
        </div>
      </div>

      <div class="kanban-col" id="col-done">
        <div class="col-header">
          <h3>✅ งานที่เสร็จแล้ว (<span id="count-done">0</span>)</h3>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,targetCss:`body { font-family: 'Sarabun', sans-serif; background: #f8fafc; padding: 24px; } .kanban-wrapper { max-width: 800px; margin: 0 auto; } .board-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; } .kanban-col { background: #f1f5f9; border-radius: 12px; padding: 16px; min-height: 320px; border: 2px dashed #cbd5e1; transition: all 0.2s ease; } .kanban-col.drag-over { background: #e0f2fe; border-color: #0284c7; } .col-header { font-size: 15px; margin-bottom: 12px; color: #1e293b; } .kanban-card { background: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.06); cursor: grab; transition: opacity 0.2s ease; } .kanban-card:active { cursor: grabbing; } .kanban-card.dragging { opacity: 0.4; } .badge { display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: 999px; margin-top: 6px; } .badge.high { background: #fee2e2; color: #dc2626; } .badge.normal { background: #e0f2fe; color: #0284c7; }`,targetJs:`function updateKanbanCounts() {
  const colTodo = document.getElementById("col-todo");
  const colDone = document.getElementById("col-done");
  const todoCards = colTodo.querySelectorAll(".kanban-card");
  const doneCards = colDone.querySelectorAll(".kanban-card");
  document.getElementById("count-todo").textContent = todoCards.length;
  document.getElementById("count-done").textContent = doneCards.length;
}

const cards = document.querySelectorAll(".kanban-card");
const columns = document.querySelectorAll(".kanban-col");

cards.forEach(card => {
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

columns.forEach(col => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault();
    col.classList.add("drag-over");
  });

  col.addEventListener("dragleave", () => {
    col.classList.remove("drag-over");
  });

  col.addEventListener("drop", (e) => {
    e.preventDefault();
    col.classList.remove("drag-over");
    const cardId = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(cardId);
    if (card) {
      col.appendChild(card);
      updateKanbanCounts();
    }
  });
});

updateKanbanCounts();`,validation:(e,t,n)=>{let r=e.getElementById(`col-todo`),i=e.getElementById(`col-done`),a=e.getElementById(`count-todo`),o=e.getElementById(`count-done`);if(!r||!i)return`ต้องมี element คอลัมน์ #col-todo และ #col-done`;if(!a||!o)return`ต้องมีป้ายระบุจำนวนงาน #count-todo และ #count-done`;let s=e.querySelectorAll(`.kanban-card`);if(s.length<2)return`ต้องมีการ์ด .kanban-card อย่างน้อย 2 ใบ`;for(let e of s)if(e.getAttribute(`draggable`)!==`true`)return`การ์ดแต่ละใบต้องมีแอตทริบิวต์ draggable='true'`;if(typeof n==`string`){if(!n.includes(`dataTransfer`)||!n.includes(`setData`)||!n.includes(`getData`))return`ต้องใช้ DataTransfer API (setData และ getData) ตามสไลด์ ch4 JavaScript_3 หน้า 18-19`;if(!n.includes(`preventDefault`))return`ในอีเวนต์ dragover และ drop ต้องเรียก preventDefault() เพื่ออนุญาตให้วางได้`}return!0},hints:[`ระบุ draggable='true' ให้กับการ์ดเพื่อเปิดใช้งาน HTML5 Drag & Drop`,`ใน dragstart ใช้ ev.dataTransfer.setData('text/plain', ev.target.id)`,`ใน dragover บนคอลัมน์ ต้องเรียก ev.preventDefault() เสมอเพื่อให้สามารถวาง (drop) ได้`,`ใน drop ใช้ ev.dataTransfer.getData('text/plain') และ col.appendChild(cardElement) เพื่อย้ายการ์ด`]},{id:`exam-this-constructor-payroll`,title:`ข้อสอบปฏิบัติการที่ 11: ระบบคำนวณเงินเดือน & สวัสดิการพนักงาน (Object Constructor & this Binding)`,category:`3. เทคนิคขั้นสูงและ Web APIs`,difficulty:`ยาก (Advanced Exam)`,xp:270,description:'ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบ **Object Constructor Function (สไลด์ 1 หน้า 57)** และ **Explicit this Binding ด้วย .call(), .apply(), และ .bind() (สไลด์ 3 หน้า 1-6)**\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **Object Constructor Function:**\n   - ประกาศ Constructor Function ชื่อ `Employee(id, name, baseSalary, department)`\n   - กำหนดค่า `this.id = id;`, `this.name = name;`, `this.baseSalary = baseSalary;`, `this.department = department;`\n   - สร้างพนักงานอย่างน้อย 2 คนด้วยคีย์เวิร์ด `new`:\n     - `emp1 = new Employee(1, "วิชัย สายโค้ด", 35000, "Engineering");`\n     - `emp2 = new Employee(2, "กัญญา การตลาด", 42000, "Marketing");`\n2. **ฟังก์ชันคำนวณค่าตอบแทนพิเศษ (Standalone Function ที่ใช้ `this`):**\n   - สร้างฟังก์ชันภายนอก `calculateNetComp(bonusRate, taxRate)`\n   - ฟังก์ชันนี้ต้องเข้าถึงฐานเงินเดือนผ่าน `this.baseSalary`\n   - สูตรคำนวณ: `const bonus = this.baseSalary * bonusRate;`\n   - หักภาษี: `const tax = (this.baseSalary + bonus) * (taxRate / 100);`\n   - คืนค่าสุทธิ: `return Math.round(this.baseSalary + bonus - tax);`\n3. **Explicit Binding Execution:**\n   - **ใช้ `.call()`:** คำนวณเงินเดือนสุทธิของ `emp1` โดยส่ง Arguments ทีละตัว: `calculateNetComp.call(emp1, 1.5, 5)`\n   - **ใช้ `.apply()`:** คำนวณเงินเดือนสุทธิของ `emp2` โดยส่ง Arguments เป็น Array: `calculateNetComp.apply(emp2, [2.0, 7])`\n   - **ใช้ `.bind()`:** สร้างฟังก์ชันผูกค่า `calcEmp1 = calculateNetComp.bind(emp1);`\n4. **DOM Display:**\n   - แสดงการ์ดพนักงานทั้ง 2 คนลงใน `#payroll-list`\n   - มีปุ่ม `<button id="btn-calc-payroll">คำนวณเงินเดือนสุทธิ</button>` เมื่อกดจะแสดงผลลัพธ์สุทธิของการ์ดแต่ละใบ และอัปเดตยอดรวมงบประมาณบน `<strong id="total-payroll-budget">0</strong>`',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Payroll & this Binding</title>
</head>
<body>
  <div class="payroll-container">
    <h2>🏢 ระบบบัญชีเงินเดือนและสวัสดิการ (Object Constructor & this Binding)</h2>
    <div class="action-bar">
      <button id="btn-calc-payroll">💰 คำนวณเงินเดือนสุทธิและสวัสดิการ</button>
      <div class="budget-stat">งบประมาณรวม: <strong id="total-payroll-budget">0</strong> บาท</div>
    </div>
    <div id="payroll-list" class="cards-grid">
      <!-- การ์ดพนักงานจะแสดงที่นี่ -->
    </div>
  </div>
</body>
</html>`,starterCss:`body {
  font-family: 'Sarabun', sans-serif;
  background: #f8fafc;
  padding: 24px;
}
.payroll-container {
  max-width: 780px;
  margin: 0 auto;
}
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
#btn-calc-payroll {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
}
#btn-calc-payroll:hover {
  background: #1d4ed8;
}
.budget-stat {
  font-size: 16px;
  color: #334155;
}
#total-payroll-budget {
  color: #059669;
  font-size: 20px;
}
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.emp-card {
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  border-left: 5px solid #2563eb;
}
.emp-card h3 { margin: 0 0 8px 0; color: #1e293b; }
.emp-card p { margin: 4px 0; color: #64748b; font-size: 14px; }
.net-pay {
  margin-top: 12px;
  padding: 8px;
  background: #ecfdf5;
  border-radius: 6px;
  color: #047857;
  font-weight: bold;
}`,starterJs:`// เขียนโค้ด Object Constructor Function และ Explicit this Binding ของคุณที่นี่
`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Payroll & this Binding</title>
</head>
<body>
  <div class="payroll-container">
    <h2>🏢 ระบบบัญชีเงินเดือนและสวัสดิการ (Object Constructor & this Binding)</h2>
    <div class="action-bar">
      <button id="btn-calc-payroll">💰 คำนวณเงินเดือนสุทธิและสวัสดิการ</button>
      <div class="budget-stat">งบประมาณรวม: <strong id="total-payroll-budget">0</strong> บาท</div>
    </div>
    <div id="payroll-list" class="cards-grid">
      <!-- การ์ดพนักงานจะแสดงที่นี่ -->
    </div>
  </div>
</body>
</html>`,targetCss:`body { font-family: 'Sarabun', sans-serif; background: #f8fafc; padding: 24px; } .payroll-container { max-width: 780px; margin: 0 auto; } .action-bar { display: flex; justify-content: space-between; align-items: center; background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px; } #btn-calc-payroll { background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 15px; cursor: pointer; font-weight: bold; } #btn-calc-payroll:hover { background: #1d4ed8; } .budget-stat { font-size: 16px; color: #334155; } #total-payroll-budget { color: #059669; font-size: 20px; } .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; } .emp-card { background: white; border-radius: 12px; padding: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.06); border-left: 5px solid #2563eb; } .emp-card h3 { margin: 0 0 8px 0; color: #1e293b; } .emp-card p { margin: 4px 0; color: #64748b; font-size: 14px; } .net-pay { margin-top: 12px; padding: 8px; background: #ecfdf5; border-radius: 6px; color: #047857; font-weight: bold; }`,targetJs:`function Employee(id, name, baseSalary, department) {
  this.id = id;
  this.name = name;
  this.baseSalary = baseSalary;
  this.department = department;
}

function calculateNetComp(bonusRate, taxRate) {
  const bonus = this.baseSalary * bonusRate;
  const tax = (this.baseSalary + bonus) * (taxRate / 100);
  return Math.round(this.baseSalary + bonus - tax);
}

const emp1 = new Employee(1, "วิชัย สายโค้ด", 35000, "Engineering");
const emp2 = new Employee(2, "กัญญา การตลาด", 42000, "Marketing");
const employees = [emp1, emp2];

function renderEmployees() {
  const list = document.getElementById("payroll-list");
  list.innerHTML = "";
  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "emp-card";
    card.id = \`emp-\${emp.id}\`;
    card.innerHTML = \`
      <h3>\${emp.name}</h3>
      <p>แผนก: \${emp.department}</p>
      <p>ฐานเงินเดือน: \${emp.baseSalary.toLocaleString()} บาท</p>
      <div class="net-pay" id="net-pay-\${emp.id}">รอการคำนวณ...</div>
    \`;
    list.appendChild(card);
  });
}

document.getElementById("btn-calc-payroll").addEventListener("click", () => {
  // คำนวณ emp1 ด้วย .call()
  const net1 = calculateNetComp.call(emp1, 1.5, 5);
  // คำนวณ emp2 ด้วย .apply()
  const net2 = calculateNetComp.apply(emp2, [2.0, 7]);
  // ผูกค่าด้วย .bind()
  const boundEmp1 = calculateNetComp.bind(emp1);

  document.getElementById("net-pay-1").textContent = \`ยอดสุทธิรวมโบนัส: \${net1.toLocaleString()} บาท\`;
  document.getElementById("net-pay-2").textContent = \`ยอดสุทธิรวมโบนัส: \${net2.toLocaleString()} บาท\`;

  const total = net1 + net2;
  document.getElementById("total-payroll-budget").textContent = total.toLocaleString();
});

renderEmployees();`,validation:(e,t,n)=>{let r=e.getElementById(`payroll-list`),i=e.getElementById(`btn-calc-payroll`),a=e.getElementById(`total-payroll-budget`);if(!r||!i||!a)return`ต้องมี element #payroll-list, #btn-calc-payroll และ #total-payroll-budget`;if(typeof n==`string`){if(!n.includes(`function Employee`)||!n.includes(`this.baseSalary`))return`ต้องประกาศ Object Constructor Function Employee และกำหนดค่า properties ผ่าน this ตามสไลด์ 1 หน้า 57`;if(!n.includes(`.call(`)||!n.includes(`.apply(`))return`ต้องมีการเรียกใช้ .call() และ .apply() ในการทำ Explicit Binding ตามสไลด์ 3 หน้า 5-6`}if(i.click(),r.querySelectorAll(`.emp-card`).length<2)return`ต้องเรนเดอร์การ์ดพนักงาน (.emp-card) อย่างน้อย 2 คน`;let o=e.getElementById(`net-pay-1`),s=e.getElementById(`net-pay-2`);return!o||!s||o.textContent.includes(`รอการคำนวณ`)?`เมื่อคลิกปุ่ม #btn-calc-payroll ต้องคำนวณยอดเงินสุทธิของพนักงานทุกคน`:!0},hints:[`สร้าง constructor: function Employee(id, name, baseSalary, department) { this.name = ... }`,`ฟังก์ชันคำนวณดึงค่าผ่าน this.baseSalary`,`ใช้ .call(emp1, 1.5, 5) สำหรับการส่ง arguments แยกตัว`,`ใช้ .apply(emp2, [2.0, 7]) สำหรับการส่ง arguments รวมเป็น Array`]},{id:`exam-dom-node-queue`,title:`ข้อสอบปฏิบัติการที่ 12: ระบบจัดการคิวด่วนพิเศษ DOM Node Tree (insertBefore & replaceChild)`,category:`2. การจัดการ DOM & ฟอร์ม`,difficulty:`ยาก (Advanced Exam)`,xp:280,description:'ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบทักษะการจัดการ **DOM Node Tree (สไลด์เล่ม 2 หน้า 24–35)** โดยเฉพาะการใช้เมธอด:\n- `parentElement.insertBefore(newChild, referenceNode)` (หน้า 35)\n- `parentElement.replaceChild(newChild, oldChild)` (หน้า 34)\n- `parentElement.removeChild(childNode)` หรือ `childNode.remove()` (หน้า 33)\n- `parentElement.appendChild(newChild)` (หน้า 31)\n\n**ข้อกำหนดทางเทคนิค (Specifications):**\n1. **HTML:**\n   - รายการคิว: `<ul id="queue-list">` มีคิวเริ่มต้น 3 รายการ (`<li class="queue-item">...</li>`)\n   - ช่องกรอกชื่อ: `<input id="input-patient" placeholder="พิมพ์ชื่อผู้รับบริการ...">`\n   - ปุ่มปฏิบัติการ:\n     - `<button id="btn-add-normal">ต่อท้ายคิวปกติ (appendChild)</button>`\n     - `<button id="btn-insert-vip">แทรกคิวด่วน VIP หน้าสุด (insertBefore)</button>`\n     - `<button id="btn-replace-emergency">สลับแทนที่คิวแรกด้วยเคสฉุกเฉิน (replaceChild)</button>`\n     - `<button id="btn-call-next">เรียกคิวถัดไป (removeChild)</button>`\n   - ป้ายสถานะ: ผู้รับบริการปัจจุบัน `<span id="serving-now">ยังไม่มีผู้รับบริการ</span>` และจำนวนคิวรอ `<strong id="queue-count">3</strong>`\n2. **JavaScript DOM Node Tree Operations:**\n   - **เมื่อกด #btn-add-normal:**\n     - ตรวจสอบช่องกรอก ถ้ามีข้อความให้สร้าง `li` ใหม่ด้วย `document.createElement("li")` ใส่ class `queue-item`\n     - นำไปต่อท้ายด้วยคำสั่ง `queueList.appendChild(newLi);`\n   - **เมื่อกด #btn-insert-vip:**\n     - ตรวจสอบช่องกรอก ถ้ามีข้อความให้สร้าง `li` ใหม่ ใส่ class `queue-item vip`\n     - แทรกไว้หน้าสุดด้วยคำสั่ง `queueList.insertBefore(newLi, queueList.firstElementChild);` (หากคิวว่างให้ใช้ appendChild)\n   - **เมื่อกด #btn-replace-emergency:**\n     - ตรวจสอบช่องกรอก ถ้ามีข้อความและมีคิวรออยู่อย่างน้อย 1 รายการ ให้สร้าง `li` ใหม่ ใส่ class `queue-item emergency`\n     - ทำการแทนที่คิวแรกทันทีด้วยคำสั่ง `queueList.replaceChild(newLi, queueList.firstElementChild);`\n   - **เมื่อกด #btn-call-next:**\n     - หากมีคิวอยู่ในรายการ ให้นำชื่อของคิวแรกไปแสดงบน `#serving-now`\n     - นำคิวแรกออกจาก DOM ด้วยคำสั่ง `queueList.removeChild(queueList.firstElementChild);`\n   - ทุกครั้งที่มีการเปลี่ยนแปลงคิว ให้อัปเดตตัวเลขบน `#queue-count` ให้เท่ากับ `queueList.children.length` เสมอ และล้างค่าในช่องพิมพ์ให้ว่าง',starterHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Hospital Priority Queue</title>
</head>
<body>
  <div class="queue-app">
    <h2>🏥 ระบบจัดการคิวผู้ป่วย DOM Node Hierarchy</h2>
    <div class="status-panel">
      <div>กำลังตรวจ: <span id="serving-now">ยังไม่มีผู้รับบริการ</span></div>
      <div>รอในคิว: <strong id="queue-count">3</strong> ท่าน</div>
    </div>

    <div class="input-group">
      <input type="text" id="input-patient" placeholder="พิมพ์ชื่อผู้ป่วย...">
    </div>

    <div class="buttons-grid">
      <button id="btn-add-normal" class="btn normal">➕ ต่อท้ายคิวปกติ (appendChild)</button>
      <button id="btn-insert-vip" class="btn vip">⭐ แทรกคิว VIP หน้าสุด (insertBefore)</button>
      <button id="btn-replace-emergency" class="btn emergency">🚨 แทนที่ด้วยเคสฉุกเฉิน (replaceChild)</button>
      <button id="btn-call-next" class="btn next">🔔 เรียกคิวถัดไป (removeChild)</button>
    </div>

    <ul id="queue-list" class="queue-list">
      <li class="queue-item">นายสมชาย รักสงบ</li>
      <li class="queue-item">นางสาวมณี สดใส</li>
      <li class="queue-item">นายบุญมี มีสุข</li>
    </ul>
  </div>
</body>
</html>`,starterCss:`body {
  font-family: 'Sarabun', sans-serif;
  background: #f1f5f9;
  padding: 24px;
}
.queue-app {
  max-width: 650px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.status-panel {
  display: flex;
  justify-content: space-between;
  background: #e2e8f0;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: bold;
}
#serving-now { color: #0284c7; }
#queue-count { color: #dc2626; font-size: 18px; }
.input-group input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;
  margin-bottom: 14px;
}
.buttons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}
.btn {
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
}
.btn.normal { background: #3b82f6; color: white; }
.btn.vip { background: #f59e0b; color: white; }
.btn.emergency { background: #ef4444; color: white; }
.btn.next { background: #10b981; color: white; }
.queue-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.queue-item {
  padding: 12px 16px;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 15px;
}
.queue-item.vip {
  border-left-color: #f59e0b;
  background: #fffbeb;
  font-weight: bold;
}
.queue-item.emergency {
  border-left-color: #ef4444;
  background: #fef2f2;
  color: #b91c1c;
  font-weight: bold;
}`,starterJs:`// เขียนโค้ดระบบจัดการ DOM Node Tree คิวผู้ป่วยของคุณที่นี่
`,targetHtml:`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Hospital Priority Queue</title>
</head>
<body>
  <div class="queue-app">
    <h2>🏥 ระบบจัดการคิวผู้ป่วย DOM Node Hierarchy</h2>
    <div class="status-panel">
      <div>กำลังตรวจ: <span id="serving-now">ยังไม่มีผู้รับบริการ</span></div>
      <div>รอในคิว: <strong id="queue-count">3</strong> ท่าน</div>
    </div>

    <div class="input-group">
      <input type="text" id="input-patient" placeholder="พิมพ์ชื่อผู้ป่วย...">
    </div>

    <div class="buttons-grid">
      <button id="btn-add-normal" class="btn normal">➕ ต่อท้ายคิวปกติ (appendChild)</button>
      <button id="btn-insert-vip" class="btn vip">⭐ แทรกคิว VIP หน้าสุด (insertBefore)</button>
      <button id="btn-replace-emergency" class="btn emergency">🚨 แทนที่ด้วยเคสฉุกเฉิน (replaceChild)</button>
      <button id="btn-call-next" class="btn next">🔔 เรียกคิวถัดไป (removeChild)</button>
    </div>

    <ul id="queue-list" class="queue-list">
      <li class="queue-item">นายสมชาย รักสงบ</li>
      <li class="queue-item">นางสาวมณี สดใส</li>
      <li class="queue-item">นายบุญมี มีสุข</li>
    </ul>
  </div>
</body>
</html>`,targetCss:`body { font-family: 'Sarabun', sans-serif; background: #f1f5f9; padding: 24px; } .queue-app { max-width: 650px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .status-panel { display: flex; justify-content: space-between; background: #e2e8f0; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 15px; font-weight: bold; } #serving-now { color: #0284c7; } #queue-count { color: #dc2626; font-size: 18px; } .input-group input { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 15px; box-sizing: border-box; margin-bottom: 14px; } .buttons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; } .btn { padding: 10px; border: none; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: bold; } .btn.normal { background: #3b82f6; color: white; } .btn.vip { background: #f59e0b; color: white; } .btn.emergency { background: #ef4444; color: white; } .btn.next { background: #10b981; color: white; } .queue-list { list-style: none; padding: 0; margin: 0; } .queue-item { padding: 12px 16px; background: #f8fafc; border-left: 4px solid #3b82f6; margin-bottom: 8px; border-radius: 4px; font-size: 15px; } .queue-item.vip { border-left-color: #f59e0b; background: #fffbeb; font-weight: bold; } .queue-item.emergency { border-left-color: #ef4444; background: #fef2f2; color: #b91c1c; font-weight: bold; }`,targetJs:`const queueList = document.getElementById("queue-list");
const inputPatient = document.getElementById("input-patient");
const countEl = document.getElementById("queue-count");
const servingEl = document.getElementById("serving-now");

function updateQueueCount() {
  countEl.textContent = queueList.children.length;
}

document.getElementById("btn-add-normal").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  const li = document.createElement("li");
  li.className = "queue-item";
  li.textContent = name;
  queueList.appendChild(li);
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-insert-vip").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  const li = document.createElement("li");
  li.className = "queue-item vip";
  li.textContent = \`⭐ [VIP] \${name}\`;
  if (queueList.firstElementChild) {
    queueList.insertBefore(li, queueList.firstElementChild);
  } else {
    queueList.appendChild(li);
  }
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-replace-emergency").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  if (!queueList.firstElementChild) return;
  const li = document.createElement("li");
  li.className = "queue-item emergency";
  li.textContent = \`🚨 [ฉุกเฉิน] \${name}\`;
  queueList.replaceChild(li, queueList.firstElementChild);
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-call-next").addEventListener("click", () => {
  const first = queueList.firstElementChild;
  if (first) {
    servingEl.textContent = first.textContent;
    queueList.removeChild(first);
    updateQueueCount();
  }
});

updateQueueCount();`,validation:(e,t,n)=>{let r=e.getElementById(`queue-list`),i=e.getElementById(`input-patient`),a=e.getElementById(`btn-add-normal`),o=e.getElementById(`btn-insert-vip`),s=e.getElementById(`btn-replace-emergency`),c=e.getElementById(`btn-call-next`),l=e.getElementById(`queue-count`),u=e.getElementById(`serving-now`);if(!r||!i||!a||!o||!s||!c||!l||!u)return`ต้องมีครบทุกองค์ประกอบ: #queue-list, #input-patient, ปุ่มทั้ง 4, #queue-count และ #serving-now`;if(typeof n==`string`){if(!n.includes(`insertBefore`))return`ต้องใช้เมธอด insertBefore() สำหรับแทรกคิวด่วน VIP ตามสไลด์ 2 หน้า 35`;if(!n.includes(`replaceChild`))return`ต้องใช้เมธอด replaceChild() สำหรับสลับแทนที่คิวฉุกเฉินตามสไลด์ 2 หน้า 34`;if(!n.includes(`removeChild`))return`ต้องใช้เมธอด removeChild() สำหรับนำคิวที่เรียกแล้วออกจาก DOM Tree ตามสไลด์ 2 หน้า 33`}return i.value=`คุณหญิงสุดสวย`,o.click(),!r.firstElementChild||!r.firstElementChild.textContent.includes(`คุณหญิงสุดสวย`)?`เมื่อกด #btn-insert-vip โหนดใหม่ต้องถูกแทรกไว้ที่ตำแหน่งแรกสุดด้วย insertBefore()`:(i.value=`คนไข้หัวใจวิกฤต`,s.click(),!r.firstElementChild||!r.firstElementChild.textContent.includes(`คนไข้หัวใจวิกฤต`)?`เมื่อกด #btn-replace-emergency โหนดแรกต้องถูกแทนที่ด้วย replaceChild()`:(c.click(),u.textContent.includes(`คนไข้หัวใจวิกฤต`)?!0:`เมื่อกด #btn-call-next ต้องนำชื่อผู้ป่วยแรกไปแสดงบน #serving-now และลบออกจากรายการด้วย removeChild()`))},hints:[`ใช้ queueList.appendChild(newLi) เพื่อต่อท้ายคิวปกติ`,`ใช้ queueList.insertBefore(newLi, queueList.firstElementChild) เพื่อแทรกไว้หน้าสุด`,`ใช้ queueList.replaceChild(emergencyLi, queueList.firstElementChild) เพื่อแทนที่คิวแรก`,`ใช้ queueList.removeChild(queueList.firstElementChild) เพื่อนำโหนดแรกออก`]}],quizBank:[{id:`q1`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ข้อใดอธิบายความแตกต่างระหว่าง 'let' และ 'var' ในการประกาศตัวแปรได้ถูกต้องที่สุด?`,codeSnippet:`function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a);
  console.log(b);
}`,options:[`a แสดง 10, b เกิด ReferenceError เพราะ let มีขอบเขตแบบ Block-scoped`,`ทั้ง a และ b แสดงค่า 10 และ 20 ได้ตามปกติ เพราะอยู่ในฟังก์ชันเดียวกัน`,`ทั้งคู่เกิด ReferenceError เพราะประกาศอยู่ภายในบล็อก if`,`b แสดง 20 แต่ a เกิดข้อผิดพลาดเพราะ var ไม่สามารถใช้งานใน if ได้`],correctIndex:0,explanation:`ถูกต้องครับ! 'var' มีขอบเขตแบบ Function scope ทำให้ทะลุบล็อก if ออกมาภายนอกได้ ในขณะที่ 'let' และ 'const' มีขอบเขตแบบ Block scope { ... } ทำให้ตัวแปร b ถูกจำกัดอยู่เฉพาะภายในปีกกา if เท่านั้น หากเรียกนอกบล็อกจะเกิด ReferenceError ทันที`},{id:`q2`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ผลลัพธ์ของการเปรียบเทียบต่อไปนี้คือข้อใดตามลำดับ?`,codeSnippet:`console.log(5 == "5");
console.log(5 === "5");
console.log(typeof NaN);`,options:[`true, false, 'number'`,`false, false, 'undefined'`,`true, true, 'NaN'`,`true, false, 'string'`],correctIndex:0,explanation:`5 == '5' เป็นการเปรียบเทียบแบบ Loose Equality โดยจะเกิด Type Coercion แปลงประเภทข้อมูลให้อัตโนมัติจึงได้ true, ส่วน 5 === '5' เป็น Strict Equality ที่ตรวจทั้งค่าและ Data Type (Number vs String) จึงได้ false, และ typeof NaN ใน JavaScript มีค่าเป็น 'number'`},{id:`q3`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`คำสั่งใดต่อไปนี้ใช้แปลง JavaScript Object ให้กลายเป็นสตริงในรูปแบบ JSON?`,options:[`JSON.stringify(myObject)`,`JSON.parse(myObject)`,`myObject.toStringJSON()`,`Object.toJSON(myObject)`],correctIndex:0,explanation:`JSON.stringify() ใช้สำหรับ Serialize ออบเจกต์หรืออาร์เรย์ให้กลายเป็นข้อความ JSON string ในขณะที่ JSON.parse() ใช้สำหรับแปลง JSON string กลับมาเป็น JavaScript Object`},{id:`q4`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ข้อใดคือผลลัพธ์ของโค้ดอาร์เรย์ต่อไปนี้?`,codeSnippet:`const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
fruits.shift();
console.log(fruits.join(", "));`,options:[`Orange, Apple, Mango`,`Banana, Orange, Apple, Mango`,`Banana, Orange, Apple`,`Mango, Orange, Apple`],correctIndex:0,explanation:`fruits.push('Mango') จะเพิ่ม 'Mango' เข้าไปที่ท้ายอาร์เรย์ กลายเป็น ['Banana', 'Orange', 'Apple', 'Mango'] จากนั้น .shift() จะนำสมาชิกตัวแรกสุด ('Banana') ออก ทำให้เหลือ ['Orange', 'Apple', 'Mango'] เมื่อนำมา .join(', ') จึงได้ 'Orange, Apple, Mango'`},{id:`q5`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ความแตกต่างระหว่างลูป 'for...in' และ 'for...of' ใน JavaScript คือข้อใด?`,options:[`for...in ใช้วนลูปผ่านคีย์/Properties (Keys) ส่วน for...of ใช้วนลูปผ่านค่าสมาชิก (Values)`,`for...in ใช้กับ Array เท่านั้น ส่วน for...of ใช้กับ Object เท่านั้น`,`for...in วนลูปตามเงื่อนไขตัวเลข ส่วน for...of เป็นการวนลูปแบบไม่สิ้นสุด`,`ทั้งสองคำสั่งทำงานเหมือนกันทุกประการเป็นเพียงไวยากรณ์คนละแบบ`],correctIndex:0,explanation:`for...in ถูกออกแบบมาสำหรับ Enumerating properties หรือดึงชื่อคีย์ (Keys/Indices) ของออบเจกต์ ในขณะที่ for...of ใช้สำหรับดึงค่าของสมาชิก (Iterate values) ของ Iterable objects เช่น Array, String หรือ Set`},{id:`q6`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ผลลัพธ์ของ Ternary Operator ในโค้ดนี้คืออะไร?`,codeSnippet:`const score = 75;
const result = score >= 80 ? "เกียรตินิยม" : score >= 50 ? "ผ่าน" : "ไม่ผ่าน";
console.log(result);`,options:[`ผ่าน`,`เกียรตินิยม`,`ไม่ผ่าน`,`undefined`],correctIndex:0,explanation:`score มีค่า 75 เมื่อเช็คเงื่อนไขแรก score >= 80 จะเป็น false จึงตกมาทำส่วนหลัง คือ score >= 50 ซึ่งเป็นจริง (75 >= 50) จึงได้ผลลัพธ์เป็น 'ผ่าน'`},{id:`q7`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`คำสั่งใดใช้หาจำนวนสมาชิกทั้งหมดใน Array ชื่อ 'students'?`,options:[`students.length`,`students.count()`,`students.size`,`sizeof(students)`],correctIndex:0,explanation:`ใน JavaScript อาร์เรย์มี Property ชื่อ .length ที่ใช้ส่งกลับจำนวนสมาชิกทั้งหมด (ไม่ใช่เมธอด จึงไม่มีวงเล็บเปิดปิด)`},{id:`q8`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`เมธอดใดในการเลือก Element ที่คืนค่าเป็น NodeList ของทุกๆ Element ที่ตรงกับ CSS Selector?`,options:[`document.querySelectorAll()`,`document.querySelector()`,`document.getElementById()`,`document.getElementsByTagName()`],correctIndex:0,explanation:`document.querySelectorAll('selector') จะคืนค่าเป็น NodeList ของทุก Element ที่ตรงกับตัวเลือก CSS Selector ในขณะที่ querySelector() จะเลือกเฉพาะ Element แรกเพียงตัวเดียว`},{id:`q9`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`หากต้องการเปลี่ยนสีข้อความของปุ่ม id='myBtn' ให้เป็นสีแดงด้วย JavaScript ต้องเขียนอย่างไร?`,options:[`document.getElementById('myBtn').style.color = 'red';`,`document.getElementById('myBtn').style.fontColor = 'red';`,`document.getElementById('myBtn').css('color', 'red');`,`document.getElementById('myBtn').color = 'red';`],correctIndex:0,explanation:`การเปลี่ยนสไตล์ของ HTML Element ผ่าน JavaScript ทำได้โดยเข้าถึง Property .style ตามด้วยชื่อของคุณสมบัติ CSS เช่น .style.color = 'red' หรือ .style.backgroundColor = 'blue'`},{id:`q10`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`ในการตรวจฟอร์ม (Form Validation) คำสั่งใดใช้สำหรับหยุดการส่งฟอร์มและป้องกันไม่ให้เบราว์เซอร์รีเฟรชหน้าเว็บ?`,codeSnippet:`form.addEventListener('submit', function(event) {
  // บรรทัดนี้ควรใส่อะไร?
});`,options:[`event.preventDefault();`,`event.stopPropagation();`,`window.stop();`,`form.cancelSubmit();`],correctIndex:0,explanation:`event.preventDefault() ใช้สำหรับป้องกันพฤติกรรมเริ่มต้น (Default action) ของอีเวนต์นั้นๆ ซึ่งสำหรับฟอร์มคือการส่งข้อมูลและ Refresh หน้าเว็บ ทำให้เราสามารถตรวจสอบข้อมูลด้วย JavaScript ก่อนส่งได้`},{id:`q11`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`ลำดับคำสั่งใดที่ถูกต้องในการสร้างแท็ก <p> ใหม่ และนำไปต่อท้ายภายใน <div> ที่มี id='box'?`,options:[`const p = document.createElement('p'); document.getElementById('box').appendChild(p);`,`const p = document.newElement('p'); document.getElementById('box').insert(p);`,`document.getElementById('box').createChild('p');`,`const p = document.appendElement('p'); document.getElementById('box').add(p);`],correctIndex:0,explanation:`การเพิ่มโหนดใน DOM ต้องสร้าง element ก่อนด้วย document.createElement('tagName') จากนั้นจึงใช้ parentElement.appendChild(newNode) เพื่อนำไปต่อท้าย`},{id:`q12`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`ความแตกต่างระหว่าง innerHTML และ textContent คือข้อใด?`,options:[`innerHTML จะแปลงข้อความเป็นแท็ก HTML ได้ ส่วน textContent จะมองทุกอย่างเป็นข้อความธรรมดา (ปลอดภัยจาก XSS)`,`textContent ใช้ได้กับ <input> เท่านั้น ส่วน innerHTML ใช้กับ <div>`,`innerHTML อ่านได้เฉพาะสไตล์ CSS ส่วน textContent อ่านตัวหนังสือ`,`ทั้งสองคำสั่งทำงานเหมือนกันทุกประการ ไม่มีข้อแตกต่าง`],correctIndex:0,explanation:`innerHTML จะทำการ Parse ข้อความให้กลายเป็นโครงสร้างแท็ก HTML ในขณะที่ textContent (หรือ innerText) จะแทรกข้อความแบบ Raw Text เสมอ จึงช่วยป้องกันช่องโหว่ด้านความปลอดภัย Cross-Site Scripting (XSS) ได้ดีกว่า`},{id:`q13`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ใน Regular Function ของ Object Method คีย์เวิร์ด 'this' จะชี้ไปที่อะไร?`,codeSnippet:`const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
person.greet();`,options:[`ชี้ไปที่ออบเจกต์ 'person' (เจ้าของเมธอดนั้น)`,`ชี้ไปที่ global object (window)`,`ชี้ไปที่ฟังก์ชัน greet เสมอ`,`มีค่าเป็น undefined`],correctIndex:0,explanation:`เมื่อฟังก์ชันถูกเรียกใช้ในฐานะ Method ของออบเจกต์ (person.greet()) คีย์เวิร์ด 'this' ภายในฟังก์ชันนั้นจะอ้างอิงถึงออบเจกต์ที่เป็นเจ้าของ คือ 'person' ทำให้ this.name ได้ค่า 'John'`},{id:`q14`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ข้อใดอธิบายความแตกต่างระหว่าง .call() และ .bind() ในการทำ Explicit Binding ได้ถูกต้อง?`,options:[`.call() จะรันฟังก์ชันทันที ส่วน .bind() จะคืนค่าเป็นฟังก์ชันใหม่ที่ถูกตรึงค่า this ไว้สำหรับเรียกใช้ภายหลัง`,`.bind() จะรันฟังก์ชันทันที ส่วน .call() ไม่สามารถรับ arguments ได้`,`ทั้งคู่เหมือนกันทุกประการ`,`.call() ใช้ได้กับ Arrow Function เท่านั้น`],correctIndex:0,explanation:`.call(thisArg, ...args) จะทำการเรียกประมวลผลฟังก์ชันนั้นทันทีโดยเปลี่ยนค่า this ตามที่ระบุ ส่วน .bind(thisArg) จะสร้างฟังก์ชันใหม่ขึ้นมา (Copy) โดยผูกค่า this ไว้อย่างถาวรเพื่อรอการเรียกใช้ในอนาคต`},{id:`q15`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`หากต้องการสั่งให้ฟังก์ชัน showAlert ทำงานซ้ำทุกๆ 3 วินาที จะต้องใช้คำสั่งใด?`,options:[`setInterval(showAlert, 3000);`,`setTimeout(showAlert, 3000);`,`setTimer(showAlert, 3);`,`wait(3000).repeat(showAlert);`],correctIndex:0,explanation:`setInterval(callback, milliseconds) เป็นคำสั่งสำหรับสั่งให้ฟังก์ชันทำงานวนซ้ำอย่างต่อเนื่องตามคาบเวลาที่ระบุ (หน่วยเป็นมิลลิวินาที 1 วินาที = 1000ms ดังนั้น 3 วินาที = 3000ms) ในขณะที่ setTimeout จะทำงานเพียงครั้งเดียว`},{id:`q16`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ความแตกต่างสำคัญระหว่าง 'localStorage' และ 'sessionStorage' คือข้อใด?`,options:[`localStorage ข้อมูลจะคงอยู่ตลอดไปจนกว่าจะถูกลบ ส่วน sessionStorage ข้อมูลจะหายไปทันทีเมื่อปิดแท็บเบราว์เซอร์`,`localStorage เก็บได้เฉพาะตัวเลข ส่วน sessionStorage เก็บสตริงได้`,`sessionStorage เก็บข้อมูลบน Server ส่วน localStorage เก็บข้อมูลบน Browser`,`localStorage ปลอดภัยกว่า sessionStorage เพราะเข้ารหัสอัตโนมัติ`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript_3 หน้า 20-24 ทั้งคู่เก็บข้อมูลฝั่ง Client (เบราว์เซอร์) แต่ localStorage มีอายุยาวนานไม่มีวันหมดอายุจนกว่าผู้ใช้จะล้างแคชหรือเขียนโค้ดลบ ส่วน sessionStorage จะมีอายุอยู่เฉพาะใน Session ของแท็บนั้นๆ เมื่อปิดแท็บข้อมูลจะถูกทำลายทันที`},{id:`q17`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ในการทำ HTML5 Drag & Drop ข้อใดคือแอตทริบิวต์ที่ต้องใส่ให้กับองค์ประกอบ HTML เพื่อให้ผู้ใช้สามารถลากได้?`,codeSnippet:`<div id="dragItem" ???>ลากฉันสิ</div>`,options:[`draggable="true"`,`drag="enabled"`,`allow-drag="yes"`,`droppable="false"`],correctIndex:0,explanation:`ใน HTML5 การกำหนดให้ Element ใดๆ สามารถลากได้ จะต้องระบุแอตทริบิวต์ draggable="true" (ตามสไลด์ ch4 JavaScript_3 หน้า 18)`},{id:`q18`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`หากต้องการหยุดการทำงานของตัวนับเวลาที่สร้างจาก setInterval(myFunc, 1000) จะต้องใช้คำสั่งใด?`,codeSnippet:`const timerId = setInterval(myFunc, 1000);`,options:[`clearInterval(timerId);`,`clearTimeout(timerId);`,`timerId.stop();`,`stopInterval(timerId);`],correctIndex:0,explanation:`เมื่อสร้าง setInterval ตัวฟังก์ชันจะคืนค่า timer ID ออกมา ซึ่งเราสามารถนำ ID นี้ไปยกเลิกการทำงานได้ด้วยคำสั่ง clearInterval(timerId)`},{id:`q19`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ข้อใดคือการเขียน Arrow Function ที่รับตัวเลข x แล้วคืนค่า x ยกกำลัง 2 ที่ถูกต้องและสั้นที่สุด?`,options:[`const square = x => x ** 2;`,`const square = (x) { return x ** 2; };`,`const square = function(x) => x ** 2;`,`const square => x = x ** 2;`],correctIndex:0,explanation:`หาก Arrow Function มีพารามิเตอร์เพียงตัวเดียวสามารถละเว้นวงเล็บรอบพารามิเตอร์ได้ และหากมีคำสั่งคืนค่าเพียงอย่างเดียวสามารถละเว้นปีกกาและคำว่า return ได้ (Implicit return) จึงเขียนได้เป็น: const square = x => x ** 2;`},{id:`q20`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`หากต้องการเพิ่มคลาส CSS ชื่อ 'highlight' ให้กับ element id='card' โดยไม่ลบคลาสเดิมออก ต้องเขียนอย่างไร?`,options:[`document.getElementById('card').classList.add('highlight');`,`document.getElementById('card').className = 'highlight';`,`document.getElementById('card').addClass('highlight');`,`document.getElementById('card').style.class = 'highlight';`],correctIndex:0,explanation:`การใช้ .classList.add('className') จะเป็นการเพิ่มคลาสใหม่ต่อท้ายคลาสเดิมโดยไม่ไปทับหรือลบคลาสที่มีอยู่แล้ว ในขณะที่ .className = 'highlight' จะเป็นการเขียนทับคลาสเดิมทั้งหมด`},{id:`q33`,category:`Part 1: พื้นฐาน JavaScript`,chapter:1,question:`ตามสไลด์ ch4 JavaScript หน้า 57 หากต้องการสร้างพิมพ์เขียวสำหรับออบเจกต์ประเภทเดียวกันหลายๆ ชิ้น (Object Type Blueprint) ต้องใช้สิ่งใด?`,codeSnippet:`function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const father = new Person("John", "Doe", 50);`,options:[`Object Constructor Function โดยเรียกใช้คู่กับคีย์เวิร์ด new`,`Object Literal แบบธรรมดา`,`Array.prototype.push()`,`JSON.stringify()`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript หน้า 57 การสร้างโครงสร้างต้นแบบ (Object Type) เพื่อสร้าง Object ซ้ำๆ ได้อย่างสะดวก จะใช้ 'Object Constructor Function' นิยมตั้งชื่อขึ้นต้นด้วยตัวพิมพ์ใหญ่ และสร้าง Instance ใหม่ด้วยคีย์เวิร์ด 'new'`},{id:`q34`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`ตามสไลด์ ch4 JavaScript_2 หน้า 34-35 เมธอดใดของโหนดแม่ที่ใช้สำหรับ 'แทนที่โหนดลูกเดิมด้วยโหนดใหม่'?`,codeSnippet:`const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const newPara = document.createElement("p");
newPara.textContent = "เนื้อหาใหม่";
// คำสั่งแทนที่ child ด้วย newPara คือข้อใด?`,options:[`parent.replaceChild(newPara, child);`,`parent.insertBefore(newPara, child);`,`parent.appendChild(newPara, child);`,`child.replaceWith(parent);`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript_2 หน้า 34 เมธอด parentElement.replaceChild(newChild, oldChild) ใช้สำหรับสลับแทนที่โหนดลูกเดิมด้วยโหนดลูกใหม่ ส่วน insertBefore() ใช้แทรกโหนดใหม่ไว้ข้างหน้าโหนดที่มีอยู่เดิม`},{id:`q35`,category:`Part 2: การจัดการ DOM & ฟอร์ม`,chapter:2,question:`ตามสไลด์ ch4 JavaScript_2 หน้า 8 และหน้า 23 การเข้าถึงค่าของช่องกรอกชื่อ 'fname' ในฟอร์มชื่อ 'myForm' ผ่าน DOM Collection ทำได้ตามข้อใด?`,codeSnippet:`<form name="myForm" action="/submit" onsubmit="return validateForm()">
  <input type="text" name="fname">
</form>`,options:[`document.forms["myForm"]["fname"].value`,`document.getForm("myForm").getValue("fname")`,`document.elements["myForm"].fname`,`document.forms.getInput("fname").text`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript_2 หน้า 8 และ 23 เราสามารถเข้าถึง Elements ในฟอร์มผ่าน Collection document.forms โดยระบุชื่อ form name และ field name เช่น document.forms["myForm"]["fname"].value`},{id:`q36`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ตามสไลด์ ch4 JavaScript_3 หน้า 17 คำสั่งใดใน Geolocation API ใช้สำหรับขอพิกัดละติจูดและลองจิจูดปัจจุบันของผู้ใช้?`,codeSnippet:`if (navigator.geolocation) {
  // เรียกคำสั่งดึงพิกัดตำแหน่งปัจจุบัน
}`,options:[`navigator.geolocation.getCurrentPosition(showPosition);`,`navigator.geolocation.watchGPS(showPosition);`,`window.getLocation.getCoordinates();`,`document.geolocation.fetchPosition();`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript_3 หน้า 17 การขอตำแหน่งพิกัดทางภูมิศาสตร์ของเบราว์เซอร์ ใช้เมธอด navigator.geolocation.getCurrentPosition(successCallback, errorCallback)`},{id:`q37`,category:`Part 3: เทคนิคขั้นสูงและ Web APIs`,chapter:3,question:`ตามสไลด์ ch4 JavaScript_3 หน้า 5-6 ข้อใดอธิบายความแตกต่างระหว่าง .call() และ .apply() ได้ถูกต้องที่สุด?`,codeSnippet:`const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
};
const person1 = { firstName: "John", lastName: "Doe" };`,options:[`.call() รับ Arguments แยกเป็นตัวๆ ด้วยเครื่องหมายจุลภาค ส่วน .apply() รับ Arguments ทั้งหมดรวมกันเป็น Array`,`.apply() รับ Arguments แยกเป็นตัวๆ ส่วน .call() บังคับส่งเป็น Array`,`.apply() ทำงานแบบอะซิงโครนัส ส่วน .call() ทำงานแบบซิงโครนัส`,`ทั้งคู่รับ Arguments เป็น Array เหมือนกันทุกประการ`],correctIndex:0,explanation:`ตามสไลด์ ch4 JavaScript_3 หน้า 5-6 เมธอด .call() และ .apply() รันฟังก์ชันทันทีเหมือนกัน แต่จุดต่างคือ .call() จะส่ง argument ทีละตัว เช่น .call(person1, 'Oslo', 'Norway') ในขณะที่ .apply() จะส่ง arguments รวมกันเป็น Array เช่น .apply(person1, ['Oslo', 'Norway'])`},{id:`q21`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ข้อใดอธิบายประโยชน์สำคัญที่สุดของ 'async/await' ใน ES2017 เมื่อเทียบกับ Promise .then() แบบดั้งเดิม?`,codeSnippet:`async function loadData() {
  try {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("เกิดข้อผิดพลาด:", err);
  }
}`,options:[`ช่วยให้เขียนโค้ดอะซิงโครนัสให้อ่านง่ายเหมือนลำดับบรรทัดซิงโครนัส และดักจับ Error ด้วย try...catch ได้อย่างสะดวก`,`ทำให้ฟังก์ชันทำงานเร็วขึ้นเป็น 2 เท่าเพราะแปลงโค้ดเป็น Multithreading อัตโนมัติ`,`ยกเลิกการทำงานของ Promise ทิ้งไปโดยไม่จำเป็นต้องใช้ Promise อีกต่อไป`,`ทำงานได้เฉพาะบน Node.js แต่ไม่สามารถทำงานบนเว็บเบราว์เซอร์ได้`],correctIndex:0,explanation:`async/await เป็น Syntactic Sugar ที่ครอบการทำงานของ Promise เพื่อให้นักพัฒนาสามารถเขียนโค้ด Asynchronous ให้อ่านง่าย เป็นระเบียบเหมือนโค้ด Synchronous ทั่วไป และสามารถใช้ try...catch ในการดักจับข้อผิดพลาดได้โดยตรง ช่วยลดปัญหา Callback Hell`},{id:`q22`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของคำสั่ง Destructuring Assignment พร้อม Default Value ต่อไปนี้คือข้อใด?`,codeSnippet:`const user = { id: 101, username: "dev_pro", role: "admin" };
const { username, role, level = "beginner" } = user;
console.log(username, role, level);`,options:[`dev_pro admin beginner`,`dev_pro admin undefined`,`undefined undefined beginner`,`เกิดข้อผิดพลาด ReferenceError`],correctIndex:0,explanation:`Destructuring ช่วยดึงค่า property ออกมาจาก Object ได้อย่างรวดเร็ว และเราสามารถระบุ Default Value (level = 'beginner') ไว้ได้ หากใน Object ต้นทางไม่มีค่านั้น (undefined) ตัวแปรจะได้ค่าเริ่มต้นทันที`},{id:`q23`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`การใช้ Spread Syntax (...) ในการคัดลอก Array ในโค้ดนี้ส่งผลลัพธ์อย่างไร?`,codeSnippet:`const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original.length, copy.length);`,options:[`3 4 เพราะ Spread Operator [...] สร้าง Array ใหม่แยกออกจาก Array เดิม (Shallow Copy)`,`4 4 เพราะ copy ชี้ไปยังตำแหน่งหน่วยความจำเดียวกับ original`,`3 3 เพราะไม่สามารถ push สมาชิกใหม่เข้าไปใน copy ได้`,`เกิดข้อผิดพลาด SyntaxError จากเครื่องหมาย ...`],correctIndex:0,explanation:`การใช้ Spread Operator [...original] จะเป็นการสร้าง Array ก้อนใหม่แยกต่างหาก (Shallow Copy) ดังนั้นการแก้ไข copy.push(4) จึงไม่กระทบต่อ original ที่ยังคงมีความยาว 3 ตัวเท่าเดิม ต่างจากการเขียน copy = original ที่เป็นเพียงการส่ง Reference เดียวกัน`},{id:`q24`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของการรัน Array Higher-Order Methods (.filter() และ .map()) ด้านล่างคือข้อใด?`,codeSnippet:`const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10);
console.log(result);`,options:[`[20, 40]`,`[10, 30, 50]`,`[2, 4]`,`[10, 20, 30, 40, 50]`],correctIndex:0,explanation:`.filter(n => n % 2 === 0) จะคัดกรองเอาเฉพาะเลขคู่ ได้ผลลัพธ์เป็น [2, 4] จากนั้นนำมา .map(n => n * 10) เพื่อนำสมาชิกแต่ละตัวไปคูณ 10 จึงได้ผลลัพธ์สุดท้ายเป็น [20, 40]`},{id:`q25`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของ Optional Chaining (?.) และ Nullish Coalescing (??) ในโค้ดนี้คือข้อใด?`,codeSnippet:`const student = { name: "Ananda", contact: null };
const phone = student.contact?.phone ?? "ไม่มีเบอร์โทรศัพท์";
console.log(phone);`,options:[`'ไม่มีเบอร์โทรศัพท์' โดย ?. ช่วยป้องกัน TypeError เมื่อ contact เป็น null และ ?? กำหนดค่าสำรอง`,`เกิด TypeError: Cannot read property 'phone' of null`,`undefined`,`null`],correctIndex:0,explanation:`Optional Chaining (?.) ช่วยให้เข้าถึง property ซ้อนกันได้อย่างปลอดภัย หากค่าด้านหน้าเป็น null หรือ undefined จะคืนค่า undefined โดยไม่พ่น Error และ Nullish Coalescing (??) จะนำค่าด้านขวามาใช้เฉพาะเมื่อด้านซ้ายเป็น null หรือ undefined เท่านั้น`},{id:`q26`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของการเรียกฟังก์ชัน counter1() ทั้งสองครั้งคืออะไร และเกิดจากคุณสมบัติใดใน JavaScript?`,codeSnippet:`function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());`,options:[`1 และ 2 เกิดจากคุณสมบัติ Closures ที่ฟังก์ชันภายในจดจำตัวแปร count ใน Lexical Scope ไว้ได้`,`1 และ 1 เพราะตัวแปร count ถูกรีเซ็ตกลับเป็น 0 ทุกครั้งที่เรียก`,`undefined และ undefined เพราะฟังก์ชันลูกเข้าถึงตัวแปรภายในไม่ได้`,`เกิด ReferenceError เพราะ createCounter ทำงานเสร็จสิ้นไปแล้ว`],correctIndex:0,explanation:`Closure คือคุณสมบัติที่ฟังก์ชันภายในยังคงสามารถเข้าถึงและจดจำตัวแปรในขอบเขตของฟังก์ชันภายนอกได้ แม้ฟังก์ชันภายนอกจะทำงานเสร็จสิ้นไปแล้วก็ตาม ทำให้ตัวแปร count ยังคงถูกเก็บไว้ในหน่วยความจำและนับค่าเพิ่มได้ต่อเนื่องเป็น 1 และ 2`},{id:`q27`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ตามหลักการของ Event Loop ใน JavaScript ลำดับการแสดงผลตัวเลขออกทางคอนโซลคือข้อใด?`,codeSnippet:`console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,options:[`1, 4, 3, 2`,`1, 2, 3, 4`,`1, 3, 4, 2`,`1, 4, 2, 3`],correctIndex:0,explanation:`Event Loop จะรัน Synchronous Code ใน Call Stack ให้เสร็จก่อนเสมอ ('1' และ '4') จากนั้นจะดึง Microtasks (Promise.then) มาทำงานต่อ ได้ '3' และสุดท้ายจึงดึง Macrotasks / Timers (setTimeout แม้จะ 0ms) มาประมวลผล ได้ '2' ลำดับจึงเป็น 1, 4, 3, 2`},{id:`q28`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`เทคนิคการผูก Event Listener ไว้ที่โหนดแม่ (Parent) เพื่อดักจับเหตุการณ์ของโหนดลูก (Children) เรียกว่าอะไร?`,codeSnippet:`document.getElementById("todo-list").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    console.log("คลิกที่รายการ:", e.target.textContent);
  }
});`,options:[`Event Delegation โดยอาศัยหลักการ Event Bubbling ที่เหตุการณ์จะลอยขึ้นสู่โหนดแม่`,`Event Capturing โดยดักจับเหตุการณ์จากชั้นบนสุดลงล่างสุด`,`Virtual DOM Routing`,`Dynamic Event Injector`],correctIndex:0,explanation:`Event Delegation คือเทคนิคที่ผูก Event Listener ไว้ที่ Element แม่เพียงตัวเดียว เพื่อดักจับเหตุการณ์ที่เกิดขึ้นกับลูกๆ ทุกตัวผ่าน Event Bubbling ช่วยประหยัดหน่วยความจำ และรองรับโหนดลูกที่ถูกสร้างเพิ่มเข้ามาในอนาคตได้ทันที`},{id:`q29`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ข้อใดคือการ Import โมดูลจากไฟล์ ES6 Module ด้านล่างที่ถูกต้อง?`,codeSnippet:`// ไฟล์ mathUtils.js
export const PI = 3.14;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }`,options:[`import multiply, { PI, add } from './mathUtils.js';`,`import { multiply, PI, add } from './mathUtils.js';`,`import default multiply, { PI, add } from './mathUtils.js';`,`const { multiply, PI, add } = import('./mathUtils.js');`],correctIndex:0,explanation:`ในระบบ ES Module ตัวที่เป็น Default Export สามารถ import โดยตั้งชื่อตรงๆ นอกวงเล็บปีกกาได้ทันที (import multiply) ส่วน Named Exports จะต้องใส่ในเครื่องหมายปีกกา { PI, add }`},{id:`q30`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ใน JavaScript มาตรฐานยุคใหม่ คำสั่งใดใช้ทำ Deep Copy ออบเจกต์ทุกระดับชั้นอย่างสมบูรณ์แบบโดยไม่ต้องพึ่ง JSON.parse()?`,codeSnippet:`const original = { name: "User", details: { age: 25 } };
const copy = structuredClone(original);
copy.details.age = 30;
console.log(original.details.age);`,options:[`25 เพราะ structuredClone() เป็นฟังก์ชันมาตรฐานสำหรับทำ Deep Copy อย่างแท้จริง`,`30 เพราะ structuredClone() เป็นเพียง Shallow Copy`,`undefined`,`เกิดข้อผิดพลาด ReferenceError`],correctIndex:0,explanation:`structuredClone() เป็น Web API มาตรฐานใหม่ที่มีในเบราว์เซอร์และ Node.js ยุคใหม่ สำหรับสร้าง Deep Clone ของออบเจกต์ทุกระดับชั้น การแก้ไข copy.details จึงไม่ส่งผลต่อ original.details เลย`},{id:`q31`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของคำสั่งกำจัดค่าซ้ำใน Array ด้วย Set ในโค้ดนี้คืออะไร?`,codeSnippet:`const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)];
console.log(unique);`,options:[`[1, 2, 3, 4, 5] เพราะ Set จะเก็บเฉพาะค่าที่ไม่ซ้ำกันเท่านั้น`,`[1, 2, 2, 3, 4, 4, 5] เพราะ Set ไม่สามารถตัดค่าซ้ำได้`,`5 เพราะ Set ส่งกลับขนาดจำนวนสมาชิก`,`เกิด TypeError เพราะ Set ไม่สามารถใช้ Spread ได้`],correctIndex:0,explanation:`Set เป็นโครงสร้างข้อมูลที่บังคับให้สมาชิกทุกตัวมีค่าไม่ซ้ำกัน (Unique Values) การเขียน [...new Set(duplicates)] จึงเป็นวิธีที่สั้นและมีประสิทธิภาพสูงสุดในการลบค่าซ้ำออกจาก Array`},{id:`q32`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของการคำนวณยอดรวมในตะกร้าสินค้าด้วย Array.prototype.reduce() คือตัวเลขใด?`,codeSnippet:`const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 750 }
];
const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total);`,options:[`1000`,`950`,`200`,`NaN`],correctIndex:0,explanation:`เมธอด .reduce(callback, initialValue) จะวนลูปสะสมค่า โดยเริ่มจาก 0 และนำราคาของแต่ละชิ้นมาบวกสะสม: 0 + 200 + 50 + 750 = 1000`},{id:`q33`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ข้อใดอธิบายความแตกต่างระหว่าง Nullish Coalescing (??) กับ Logical OR (||) ได้ถูกต้องที่สุด?`,codeSnippet:`const count = 0;
const a = count || 10;
const b = count ?? 10;
console.log(a, b);`,options:[`a = 10 และ b = 0 เพราะ ?? ตรวจสอบเฉพาะ null หรือ undefined ส่วน || ตรวจสอบทุกค่า Falsy`,`a = 0 และ b = 10 เพราะ ?? ทำงานเหมือน || ทุกประการ`,`a = 0 และ b = 0 เพราะเลข 0 มีค่าเท่ากันทั้งคู่`,`เกิด SyntaxError เพราะ ?? ไม่สามารถใช้ร่วมกับตัวแปรตัวเลขได้`],correctIndex:0,explanation:`?? (Nullish Coalescing) จะให้ค่าเริ่มต้นเฉพาะเมื่อฝั่งซ้ายเป็น null หรือ undefined เท่านั้น ในขณะที่ || มองว่าเลข 0, boolean false, หรือสตริงว่างเป็น Falsy จึงทำให้ count || 10 ได้ค่า 10 แต่ count ?? 10 ยังคงได้เลข 0 ตามเดิม`},{id:`q34`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของการทำ Object Destructuring พร้อมระบุ Default Value ในโค้ดนี้คืออะไร?`,codeSnippet:`const user = { name: "Somchai", age: null };
const { name, age = 18, role = "Guest" } = user;
console.log(name, age, role);`,options:[`Somchai null Guest เพราะ Default Value จะทำงานเมื่อค่าเป็น undefined เท่านั้น (null จะไม่ถูกแทนที่)`,`Somchai 18 Guest เพราะทั้ง null และ undefined จะถูกแทนที่ด้วย Default Value`,`Somchai 18 undefined เพราะไม่ได้ระบุค่า role ไว้ใน Object`,`เกิด ReferenceError เพราะหาค่า role ไม่พบบนตัวแปร`],correctIndex:0,explanation:`ใน Destructuring Assignment ค่า Default Value จะถูกนำมาใช้ต่อเมื่อค่านั้นเป็น undefined (หรือไม่ได้กำหนด key ไว้) เท่านั้น แต่ในที่นี้ user.age มีค่าเป็น null ชัดเจน จึงไม่ถูกแทนที่ด้วย 18 ส่วน role ไม่มีอยู่ใน user จึงได้รับค่าเริ่มต้น 'Guest'`},{id:`q35`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ประโยชน์สำคัญที่สุดของการใช้งาน Optional Chaining (?.) คือข้อใด?`,codeSnippet:`const order = { id: 101, customer: null };
const zip = order.customer?.address?.zipcode;
console.log(zip);`,options:[`ป้องกัน TypeError: Cannot read properties of null/undefined โดยจะคืนค่า undefined ทันทีหากคุณสมบัติใดชั้นหนึ่งเป็น null หรือ undefined`,`บังคับให้โปรแกรมเกิด Exception และหยุดการทำงานทันทีเพื่อความปลอดภัย`,`แปลงค่า null และ undefined ให้กลายเป็น Object เปล่าเสมอ`,`เพิ่มความเร็วในการประมวลผลให้เร็วกว่าการใช้จุด (.) ปกติ 10 เท่า`],correctIndex:0,explanation:`Optional Chaining (?.) ช่วยป้องกันข้อผิดพลาดรุนแรงระดับ TypeError หากมีค่าข้างหน้าเป็น null หรือ undefined จะเกิดการ Short-circuit และคืนค่า undefined กลับมาอย่างปลอดภัยโดยหน้าเว็บไม่พัง`},{id:`q36`,category:`นอกเนื้อหาสไลด์: Modern JS`,chapter:4,question:`ผลลัพธ์ของการใช้ Spread Operator (...) รวมและทับค่าใน Object ต่อไปนี้คืออะไร?`,codeSnippet:`const base = { theme: "light", fontSize: 14 };
const custom = { fontSize: 18, showAvatar: true };
const finalConfig = { ...base, ...custom, theme: "dark" };
console.log(finalConfig);`,options:[`{ theme: 'dark', fontSize: 18, showAvatar: true } เพราะคุณสมบัติที่ระบุทีหลังจะ Override ทับค่าเดิม`,`{ theme: 'light', fontSize: 14, showAvatar: true } เพราะค่าเดิมจาก base จะถูกคงไว้เสมอ`,`เกิดข้อผิดพลาด SyntaxError เพราะห้ามระบุ property ซ้ำซ้อนกันใน Object`,`{ theme: ['light', 'dark'], fontSize: [14, 18], showAvatar: true }`],correctIndex:0,explanation:`การ Spread Object จากซ้ายไปขวา หากมีคีย์ซ้ำกัน ค่าที่ระบุทีหลังจะเขียนทับ (Override) ค่าเดิมเสมอ ในที่นี้ fontSize 14 ถูกแทนที่ด้วย 18 และ theme 'light' ถูกแทนที่ด้วย 'dark'`}]},x=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),S=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),C=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),w=e=>{let t=C(e);return t.charAt(0).toUpperCase()+t.slice(1)},T={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},E=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},D=(0,_.createContext)({}),O=()=>(0,_.useContext)(D),ee=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=O()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...T,width:t??l??T.width,height:t??l??T.height,stroke:e??f,strokeWidth:m,className:x(`lucide`,p,i),...!a&&!E(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),k=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(ee,{ref:i,iconNode:t,className:x(`lucide-${S(w(e))}`,`lucide-${e}`,n),...r}));return n.displayName=w(e),n},A=k(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),te=k(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),ne=k(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),re=k(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ie=k(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),j=k(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),M=k(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),ae=k(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),oe=k(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),se=k(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ce=k(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),le=k(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),N=k(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),ue=k(`columns-2`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M12 3v18`,key:`108xh3`}]]),de=k(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),fe=k(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),pe=k(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),me=k(`file-code`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]),he=k(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),ge=k(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),_e=k(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),ve=k(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ye=k(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),be=k(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),xe=k(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Se=k(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ce=k(`sliders-vertical`,[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]]),we=k(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Te=k(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),P=k(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),F=k(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Ee=k(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),De=k(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),Oe=k(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ke=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=o(((e,t)=>{t.exports=ke()}))();function Ae({lessons:e=[],challenges:t=[],appliedExams:n=[],activeId:r,setActiveId:i,progress:a={},isOpen:o,course:s=`js`,activeMode:c=`learn`,setActiveMode:l=()=>{},onOpenCheatSheet:u=()=>{}}){let[d,f]=(0,_.useState)(`all`),p=e=>{let t=e.id;return t.includes(`weather`)||t.includes(`movie`)?`api`:t.includes(`memory`)||t.includes(`canvas`)||t.includes(`mole`)||t.includes(`wordle`)?`games`:`apps`},m={};return e.forEach(e=>{m[e.category]||(m[e.category]=[]),m[e.category].push(e)}),(0,I.jsxs)(`aside`,{className:`app-sidebar ${o?``:`collapsed`}`,children:[s===`js`&&(0,I.jsxs)(`div`,{className:`sidebar-special-box`,children:[(0,I.jsxs)(`button`,{onClick:()=>l(`quiz`),className:`sidebar-mode-card ${c===`quiz`?`active`:``}`,children:[(0,I.jsx)(`div`,{className:`card-icon-wrap`,style:{background:`#fef3c7`,color:`#d97706`},children:(0,I.jsx)(oe,{size:20})}),(0,I.jsxs)(`div`,{className:`card-text-wrap`,children:[(0,I.jsx)(`span`,{className:`card-title-bold`,children:`🎯 ห้องฝึกควิซ (Quiz Arena)`}),(0,I.jsx)(`span`,{className:`card-subtitle-sm`,children:`ทดสอบความรู้ 20 ข้อ พร้อมเฉลย`})]})]}),(0,I.jsxs)(`button`,{onClick:u,className:`sidebar-mode-card`,style:{marginTop:`8px`},children:[(0,I.jsx)(`div`,{className:`card-icon-wrap`,style:{background:`#e0e7ff`,color:`#4338ca`},children:(0,I.jsx)(te,{size:18})}),(0,I.jsxs)(`div`,{className:`card-text-wrap`,children:[(0,I.jsx)(`span`,{className:`card-title-bold`,children:`📖 สรุปไวยากรณ์ (Cheat Sheet)`}),(0,I.jsx)(`span`,{className:`card-subtitle-sm`,children:`ทริค & สูตรลัด JavaScript`})]})]})]}),Object.keys(m).map(e=>(0,I.jsxs)(`div`,{className:`sidebar-section`,children:[(0,I.jsx)(`h3`,{className:`sidebar-title`,children:(0,I.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(N,{size:13,className:`text-yellow-500`}),e]})}),m[e].map(e=>{let t=a[e.id],n=r===e.id&&c===`learn`;return(0,I.jsx)(`button`,{onClick:()=>{i(e.id),l(`learn`)},className:`sidebar-item ${n?`active`:``}`,children:(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:t?(0,I.jsx)(ae,{size:16,className:`status-check`}):(0,I.jsx)(ce,{size:16,className:`text-slate-400`})}),(0,I.jsx)(`span`,{children:e.title.replace(/^\d+\.\s*/,``)})]})},e.id)})]},e)),t.length>0&&(0,I.jsxs)(`div`,{className:`sidebar-section`,children:[(0,I.jsx)(`h3`,{className:`sidebar-title`,children:(0,I.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(we,{size:12,className:`text-yellow-500`}),` ภารกิจโปรเจกต์ (Slide Challenges)`]})}),t.map(e=>{let t=a[e.id],n=r===e.id&&c===`learn`;return(0,I.jsxs)(`button`,{onClick:()=>{i(e.id),l(`learn`)},className:`sidebar-item ${n?`active`:``}`,style:{paddingRight:`6px`},children:[(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:t?(0,I.jsx)(Te,{size:16,className:`status-star`}):(0,I.jsx)(A,{size:16,className:`text-slate-400`})}),(0,I.jsx)(`span`,{style:{fontWeight:`500`},children:e.title.replace(/^(ภารกิจที่|โปรเจกต์)\s*\d+:\s*/,``)})]}),e.difficulty&&(0,I.jsx)(`span`,{className:`difficulty-badge ${e.difficulty.toLowerCase()}`,children:e.difficulty})]},e.id)})]}),s===`js`&&n&&n.length>0&&(0,I.jsxs)(`div`,{className:`sidebar-section`,children:[(0,I.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`8px`},children:(0,I.jsx)(`h3`,{className:`sidebar-title`,style:{margin:0},children:(0,I.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`,color:`#f59e0b`},children:[(0,I.jsx)(A,{size:14,className:`text-amber-500`}),`🏆 ข้อสอบปฏิบัติการ (`,n.length,`)`]})})}),(0,I.jsx)(`div`,{style:{display:`flex`,gap:`3px`,marginBottom:`8px`,padding:`2px`,background:`var(--bg-secondary, rgba(0,0,0,0.05))`,borderRadius:`6px`},children:[{id:`all`,label:`ทั้งหมด`},{id:`apps`,label:`💼 Apps`},{id:`api`,label:`🌐 APIs`},{id:`games`,label:`🎮 Games`}].map(e=>(0,I.jsx)(`button`,{onClick:()=>f(e.id),style:{flex:1,border:`none`,background:d===e.id?`var(--card-bg, #ffffff)`:`transparent`,color:d===e.id?`#b45309`:`var(--text-muted, #64748b)`,fontWeight:d===e.id?`700`:`500`,fontSize:`0.7rem`,padding:`4px 2px`,borderRadius:`4px`,cursor:`pointer`,boxShadow:d===e.id?`0 1px 2px rgba(0,0,0,0.1)`:`none`,transition:`all 0.15s ease`},children:e.label},e.id))}),n.filter(e=>d===`all`||p(e)===d).map(e=>{let t=a[e.id],n=r===e.id&&c===`learn`,o=p(e),s=o===`api`?{label:`API`,bg:`#e0f2fe`,color:`#0369a1`}:o===`games`?{label:`Game`,bg:`#f3e8ff`,color:`#7e22ce`}:{label:`App`,bg:`#fef3c7`,color:`#b45309`};return(0,I.jsxs)(`button`,{onClick:()=>{i(e.id),l(`learn`)},className:`sidebar-item ${n?`active`:``}`,style:{paddingRight:`6px`},children:[(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:t?(0,I.jsx)(ae,{size:16,className:`status-check`}):(0,I.jsx)(Te,{size:16,style:{color:`#f59e0b`}})}),(0,I.jsxs)(`span`,{style:{fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,I.jsx)(`span`,{style:{fontSize:`0.62rem`,padding:`1px 4px`,borderRadius:`3px`,background:s.bg,color:s.color,fontWeight:`bold`,letterSpacing:`0.3px`,flexShrink:0},children:s.label}),e.title.replace(/^ข้อสอบปฏิบัติการที่\s*\d+:\s*/,``)]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`4px`,alignItems:`center`},children:[e.xp&&(0,I.jsxs)(`span`,{style:{fontSize:`0.68rem`,padding:`1px 5px`,borderRadius:`4px`,background:`#fef3c7`,color:`#b45309`,fontWeight:`bold`},children:[`+`,e.xp,` XP`]}),e.difficulty&&(0,I.jsx)(`span`,{className:`difficulty-badge ${e.difficulty.toLowerCase()}`,children:e.difficulty})]})]},e.id)})]}),s===`css`&&(0,I.jsxs)(`div`,{className:`sidebar-section`,children:[(0,I.jsx)(`h3`,{className:`sidebar-title`,children:(0,I.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:`📝 จำลองสอบกลางภาค (Midterm)`})}),(0,I.jsxs)(`a`,{href:`/layout-exercises/midterm-shop-solution.html`,target:`_blank`,rel:`noopener noreferrer`,className:`sidebar-item`,style:{textDecoration:`none`},children:[(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:`🌿`}),(0,I.jsx)(`span`,{children:`หน้าที่ 1: ข้อมูลร้าน (เว็บตัวอย่างจริง)`})]}),(0,I.jsx)(`span`,{style:{fontSize:`0.68rem`,padding:`1px 5px`,borderRadius:`4px`,background:`#dcfce7`,color:`#15803d`,fontWeight:`bold`},children:`Live`})]}),(0,I.jsxs)(`a`,{href:`/layout-exercises/midterm-menu-solution.html`,target:`_blank`,rel:`noopener noreferrer`,className:`sidebar-item`,style:{textDecoration:`none`},children:[(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:`🍰`}),(0,I.jsx)(`span`,{children:`หน้าที่ 2: เมนู & บริการ (เว็บตัวอย่างจริง)`})]}),(0,I.jsx)(`span`,{style:{fontSize:`0.68rem`,padding:`1px 5px`,borderRadius:`4px`,background:`#dcfce7`,color:`#15803d`,fontWeight:`bold`},children:`Live`})]}),(0,I.jsxs)(`a`,{href:`/layout-exercises/midterm-booking-solution.html`,target:`_blank`,rel:`noopener noreferrer`,className:`sidebar-item`,style:{textDecoration:`none`},children:[(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:`📅`}),(0,I.jsx)(`span`,{children:`หน้าที่ 3: ฟอร์มจองโต๊ะ (เว็บตัวอย่างจริง)`})]}),(0,I.jsx)(`span`,{style:{fontSize:`0.68rem`,padding:`1px 5px`,borderRadius:`4px`,background:`#dcfce7`,color:`#15803d`,fontWeight:`bold`},children:`Live`})]}),(0,I.jsx)(`a`,{href:`/layout-exercises/midterm-instructions.html`,target:`_blank`,rel:`noopener noreferrer`,className:`sidebar-item`,style:{textDecoration:`none`},children:(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:`📋`}),(0,I.jsx)(`span`,{style:{color:`var(--warning-color)`},children:`เกณฑ์และกติกาข้อสอบ`})]})}),(0,I.jsx)(`a`,{href:`/layout-exercises/midterm-shop.html`,target:`_blank`,rel:`noopener noreferrer`,className:`sidebar-item`,style:{textDecoration:`none`,opacity:.75},children:(0,I.jsxs)(`div`,{className:`item-left`,children:[(0,I.jsx)(`span`,{className:`status-badge`,children:`✍️`}),(0,I.jsx)(`span`,{children:`โหมดทดลองเขียนเอง (Blank Starter)`})]})})]})]})}function je({theme:e,toggleTheme:t}){return(0,I.jsx)(`button`,{onClick:t,className:`icon-btn`,title:e===`light`?`สลับเป็นธีมมืด (Dark Mode)`:`สลับเป็นธีมสว่าง (Light Mode)`,"aria-label":`Toggle theme`,children:e===`light`?(0,I.jsx)(ye,{size:18,className:`text-slate-700`}):(0,I.jsx)(P,{size:18,className:`text-yellow-400`})})}function Me({activeItem:e,onVerify:t,validationError:n,isSuccess:r,isChallenge:i,onViewDemo:a}){let[o,s]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{s(!1)},[e.id]),(0,I.jsxs)(`div`,{className:`instruction-panel`,children:[(0,I.jsxs)(`div`,{className:`instruction-header`,children:[(0,I.jsx)(`h2`,{children:e.title}),i&&(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,I.jsx)(De,{size:16,className:`text-yellow-500`}),(0,I.jsxs)(`span`,{style:{fontSize:`13px`,fontWeight:`700`,color:`var(--text-secondary)`},children:[`+`,e.points||e.xp||100,` คะแนน`]})]})]}),(0,I.jsxs)(`div`,{className:`instruction-content`,children:[(e=>{let t=e.split(`
`),n=[],r=!1,i=[],a=e=>{if(i.length>0){let t=i[0].isNumbered?`ol`:`ul`;n.push((0,I.jsx)(t,{style:{paddingLeft:`20px`,marginBottom:`16px`,listStylePosition:`outside`},children:i.map((e,t)=>(0,I.jsx)(`li`,{style:{marginBottom:`6px`},dangerouslySetInnerHTML:{__html:e.text}},t))},`list-${e}`)),i=[],r=!1}};return t.forEach((e,t)=>{let o=e.trim();if(!o){a(t);return}if(o.startsWith(`- `)||o.startsWith(`* `)&&!o.startsWith(`** `)){r=!0;let e=o.replace(/^[-*]\s*/,``);i.push({text:Pe(e),isNumbered:!1});return}if(/^\d+\.\s+/.test(o)){r=!0;let e=o.replace(/^\d+\.\s*/,``);i.push({text:Pe(e),isNumbered:!0});return}if(r&&a(t),o.startsWith(`**`)&&o.endsWith(`**`)){let e=o.slice(2,-2);n.push((0,I.jsx)(`h4`,{style:{margin:`16px 0 8px 0`,color:`var(--text-primary)`,fontWeight:`700`,fontSize:`14.5px`},children:e},t));return}n.push((0,I.jsx)(`p`,{style:{marginBottom:`12px`},dangerouslySetInnerHTML:{__html:Pe(e)}},t))}),a(`final`),n})(e.description),(0,I.jsxs)(`div`,{className:`validation-box`,children:[(0,I.jsx)(`div`,{className:`validation-title`,children:`ตรวจสอบความถูกต้อง`}),r?(0,I.jsxs)(`div`,{className:`validation-item success`,children:[(0,I.jsx)(ae,{size:16,style:{flexShrink:0}}),(0,I.jsx)(`span`,{children:`ยอดเยี่ยมมาก! โค้ดของคุณถูกต้องตรงตามข้อกำหนดเรียบร้อยแล้ว`})]}):n?(0,I.jsxs)(`div`,{className:`validation-item`,style:{color:`var(--danger-color)`},children:[(0,I.jsx)(se,{size:16,style:{flexShrink:0}}),(0,I.jsx)(`span`,{children:n})]}):(0,I.jsxs)(`div`,{className:`validation-item pending`,children:[(0,I.jsx)(ae,{size:16,style:{flexShrink:0}}),(0,I.jsx)(`span`,{children:`เขียนโค้ดและคลิกปุ่ม "ตรวจคำตอบ" ด้านล่างเพื่อส่งผลงาน`})]}),(0,I.jsxs)(`div`,{className:`validation-actions-group`,children:[(0,I.jsxs)(`button`,{onClick:t,className:`verify-btn primary-action`,children:[(0,I.jsx)(be,{size:14,fill:`white`}),(0,I.jsx)(`span`,{children:`ตรวจคำตอบ`})]}),a&&e.targetHtml&&(0,I.jsxs)(`button`,{onClick:a,className:`verify-btn demo-action`,title:`สลับไปยังแท็บตัวอย่างจริงในหน้าต่างพรีวิวด้านขวา เพื่อทดลองเล่นและดูการทำงานจริงของระบบ (ไม่ลงโค้ดเฉลยใน Editor)`,children:[(0,I.jsx)(pe,{size:14}),(0,I.jsx)(`span`,{children:`ดูตัวอย่างการทำงานจริง`})]})]})]}),e.hints&&e.hints.length>0&&(0,I.jsxs)(`div`,{className:`hint-toggle-bar`,children:[(0,I.jsxs)(`button`,{onClick:()=>s(!o),className:`hint-trigger`,children:[(0,I.jsx)(_e,{size:16,className:`text-yellow-500`}),(0,I.jsx)(`span`,{children:o?`ซ่อนแนวคิดคำแนะนำ`:i?`แสดงแนวคิดคำแนะนำ (ไม่มีโค้ดเฉลย)`:`แสดงคำแนะนำ`}),o?(0,I.jsx)(M,{size:14}):(0,I.jsx)(re,{size:14})]}),o&&(0,I.jsx)(`ul`,{className:`hints-list`,children:e.hints.map((e,t)=>(0,I.jsx)(`li`,{dangerouslySetInnerHTML:{__html:Pe(e)}},t))})]})]})]})}function Ne(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function Pe(e){return Ne(e).replace(/`([^`]+)`/g,`<code>$1</code>`).replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/\*([^*]+)\*/g,`<em>$1</em>`)}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e){if(Array.isArray(e))return e}function Le(e,t,n){return(t=Ke(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Re(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ze(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Be(Object(n),!0).forEach(function(t){Le(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function He(e,t){if(e==null)return{};var n,r,i=Ue(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ue(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function We(e,t){return Ie(e)||Re(e,t)||qe(e,t)||ze()}function Ge(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ke(e){var t=Ge(e,`string`);return typeof t==`symbol`?t:t+``}function qe(e,t){if(e){if(typeof e==`string`)return Fe(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fe(e,t):void 0}}function Je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ye(Object(n),!0).forEach(function(t){Je(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ze(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}function Qe(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function $e(e){return{}.toString.call(e).includes(`Object`)}function et(e){return!Object.keys(e).length}function tt(e){return typeof e==`function`}function nt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function rt(e,t){return $e(t)||L(`changeType`),Object.keys(t).some(function(t){return!nt(e,t)})&&L(`changeField`),t}function it(e){tt(e)||L(`selectorType`)}function at(e){tt(e)||$e(e)||L(`handlerType`),$e(e)&&Object.values(e).some(function(e){return!tt(e)})&&L(`handlersType`)}function ot(e){e||L(`initialIsRequired`),$e(e)||L(`initialType`),et(e)&&L(`initialContent`)}function st(e,t){throw Error(e[t]||e.default)}var L=Qe(st)({initialIsRequired:`initial state is required`,initialType:`initial state should be an object`,initialContent:`initial state shouldn't be an empty object`,handlerType:`handler should be an object or a function`,handlersType:`all handlers should be a functions`,selectorType:`selector should be a function`,changeType:`provided value of changes should be an object`,changeField:`it seams you want to change a field in the state which is not specified in the "initial" state`,default:"an unknown error accured in `state-local` package"}),ct={changes:rt,selector:it,handler:at,initial:ot};function lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ct.initial(e),ct.handler(t);var n={current:e},r=Qe(ft)(n,t),i=Qe(dt)(n),a=Qe(ct.changes)(e),o=Qe(ut)(n);function s(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(e){return e};return ct.selector(e),e(n.current)}function c(e){Ze(r,i,a,o)(e)}return[s,c]}function ut(e,t){return tt(t)?t(e.current):t}function dt(e,t){return e.current=Xe(Xe({},e.current),t),t}function ft(e,t,n){return tt(t)?t(e.current):Object.keys(n).forEach(function(n){return t[n]?.call(t,e.current[n])}),n}var pt={create:lt},mt={paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs`}};function ht(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function gt(e){return{}.toString.call(e).includes(`Object`)}function _t(e){return e||xt(`configIsRequired`),gt(e)||xt(`configType`),e.urls?(vt(),{paths:{vs:e.urls.monacoBase}}):e}function vt(){console.warn(bt.deprecation)}function yt(e,t){throw Error(e[t]||e.default)}var bt={configIsRequired:`the configuration object is required`,configType:`the configuration object should be an object`,default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},xt=ht(yt)(bt),St={config:_t},Ct=function(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}};function wt(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],wt(e[n],t[n]))}),Ve(Ve({},e),t)}var Tt={type:`cancelation`,msg:`operation is manually canceled`};function Et(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(Tt):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var Dt=[`monaco`],Ot=We(pt.create({config:mt,isInitialized:!1,resolve:null,reject:null,monaco:null}),2),kt=Ot[0],At=Ot[1];function jt(e){var t=St.config(e),n=t.monaco,r=He(t,Dt);At(function(e){return{config:wt(e.config,r),monaco:n}})}function Mt(){var e=kt(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(At({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Et(zt);if(window.monaco&&window.monaco.editor)return Lt(window.monaco),e.resolve(window.monaco),Et(zt);Ct(Nt,Ft)(It)}return Et(zt)}function Nt(e){return document.body.appendChild(e)}function Pt(e){var t=document.createElement(`script`);return e&&(t.src=e),t}function Ft(e){var t=kt(function(e){return{config:e.config,reject:e.reject}}),n=Pt(`${t.config.paths.vs}/loader.js`);return n.onload=function(){return e()},n.onerror=t.reject,n}function It(){var e=kt(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t([`vs/editor/editor.main`],function(t){var n=t.m||t;Lt(n),e.resolve(n)},function(t){e.reject(t)})}function Lt(e){kt().monaco||At({monaco:e})}function Rt(){return kt(function(e){return e.monaco})}var zt=new Promise(function(e,t){return At({resolve:e,reject:t})}),Bt={config:jt,init:Mt,__getMonacoInstance:Rt},Vt={wrapper:{display:`flex`,position:`relative`,textAlign:`initial`},fullWidth:{width:`100%`},hide:{display:`none`}},Ht={container:{display:`flex`,height:`100%`,width:`100%`,justifyContent:`center`,alignItems:`center`}};function Ut({children:e}){return _.createElement(`div`,{style:Ht.container},e)}var Wt=Ut;function Gt({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:a,wrapperProps:o}){return _.createElement(`section`,{style:{...Vt.wrapper,width:e,height:t},...o},!n&&_.createElement(Wt,null,r),_.createElement(`div`,{ref:i,style:{...Vt.fullWidth,...!n&&Vt.hide},className:a}))}var Kt=(0,_.memo)(Gt);function qt(e){(0,_.useEffect)(e,[])}var Jt=qt;function Yt(e,t,n=!0){let r=(0,_.useRef)(!0);(0,_.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)}var Xt=Yt;function Zt(){}function Qt(e,t,n,r){return $t(e,r)||en(e,t,n,r)}function $t(e,t){return e.editor.getModel(tn(e,t))}function en(e,t,n,r){return e.editor.createModel(t,n,r?tn(e,r):void 0)}function tn(e,t){return e.Uri.parse(t)}function nn({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:l=`light`,loading:u=`Loading...`,options:d={},height:f=`100%`,width:p=`100%`,className:m,wrapperProps:h={},beforeMount:g=Zt,onMount:v=Zt}){let[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!0),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=(0,_.useRef)(v),D=(0,_.useRef)(g),O=(0,_.useRef)(!1);Jt(()=>{let e=Bt.init();return e.then(e=>(w.current=e)&&S(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>C.current?A():e.cancel()}),Xt(()=>{if(C.current&&w.current){let t=C.current.getOriginalEditor(),i=Qt(w.current,e||``,r||n||`text`,a||``);i!==t.getModel()&&t.setModel(i)}},[a],y),Xt(()=>{if(C.current&&w.current){let e=C.current.getModifiedEditor(),r=Qt(w.current,t||``,i||n||`text`,o||``);r!==e.getModel()&&e.setModel(r)}},[o],y),Xt(()=>{let e=C.current.getModifiedEditor();e.getOption(w.current.editor.EditorOption.readOnly)?e.setValue(t||``):t!==e.getValue()&&(e.executeEdits(``,[{range:e.getModel().getFullModelRange(),text:t||``,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],y),Xt(()=>{C.current?.getModel()?.original.setValue(e||``)},[e],y),Xt(()=>{let{original:e,modified:t}=C.current.getModel();w.current.editor.setModelLanguage(e,r||n||`text`),w.current.editor.setModelLanguage(t,i||n||`text`)},[n,r,i],y),Xt(()=>{w.current?.editor.setTheme(l)},[l],y),Xt(()=>{C.current?.updateOptions(d)},[d],y);let ee=(0,_.useCallback)(()=>{if(!w.current)return;D.current(w.current);let s=Qt(w.current,e||``,r||n||`text`,a||``),c=Qt(w.current,t||``,i||n||`text`,o||``);C.current?.setModel({original:s,modified:c})},[n,t,i,e,r,a,o]),k=(0,_.useCallback)(()=>{!O.current&&T.current&&(C.current=w.current.editor.createDiffEditor(T.current,{automaticLayout:!0,...d}),ee(),w.current?.editor.setTheme(l),b(!0),O.current=!0)},[d,l,ee]);(0,_.useEffect)(()=>{y&&E.current(C.current,w.current)},[y]),(0,_.useEffect)(()=>{!x&&!y&&k()},[x,y,k]);function A(){let e=C.current?.getModel();s||e?.original?.dispose(),c||e?.modified?.dispose(),C.current?.dispose()}return _.createElement(Kt,{width:p,height:f,isEditorReady:y,loading:u,_ref:T,className:m,wrapperProps:h})}(0,_.memo)(nn);function rn(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current}var an=rn,on=new Map;function sn({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:a,theme:o=`light`,line:s,loading:c=`Loading...`,options:l={},overrideServices:u={},saveViewState:d=!0,keepCurrentModel:f=!1,width:p=`100%`,height:m=`100%`,className:h,wrapperProps:g={},beforeMount:v=Zt,onMount:y=Zt,onChange:b,onValidate:x=Zt}){let[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!0),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=(0,_.useRef)(null),ee=(0,_.useRef)(y),k=(0,_.useRef)(v),A=(0,_.useRef)(),te=(0,_.useRef)(r),ne=an(a),re=(0,_.useRef)(!1),ie=(0,_.useRef)(!1);Jt(()=>{let e=Bt.init();return e.then(e=>(E.current=e)&&T(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>D.current?M():e.cancel()}),Xt(()=>{let o=Qt(E.current,e||r||``,t||i||``,a||n||``);o!==D.current?.getModel()&&(d&&on.set(ne,D.current?.saveViewState()),D.current?.setModel(o),d&&D.current?.restoreViewState(on.get(a)))},[a],S),Xt(()=>{D.current?.updateOptions(l)},[l],S),Xt(()=>{!D.current||r===void 0||(D.current.getOption(E.current.editor.EditorOption.readOnly)?D.current.setValue(r):r!==D.current.getValue()&&(ie.current=!0,D.current.executeEdits(``,[{range:D.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),D.current.pushUndoStop(),ie.current=!1))},[r],S),Xt(()=>{let e=D.current?.getModel();e&&i&&E.current?.editor.setModelLanguage(e,i)},[i],S),Xt(()=>{s!==void 0&&D.current?.revealLine(s)},[s],S),Xt(()=>{E.current?.editor.setTheme(o)},[o],S);let j=(0,_.useCallback)(()=>{if(!(!O.current||!E.current)&&!re.current){k.current(E.current);let c=a||n,f=Qt(E.current,r||e||``,t||i||``,c||``);D.current=E.current?.editor.create(O.current,{model:f,automaticLayout:!0,...l},u),d&&D.current.restoreViewState(on.get(c)),E.current.editor.setTheme(o),s!==void 0&&D.current.revealLine(s),C(!0),re.current=!0}},[e,t,n,r,i,a,l,u,d,o,s]);(0,_.useEffect)(()=>{S&&ee.current(D.current,E.current)},[S]),(0,_.useEffect)(()=>{!w&&!S&&j()},[w,S,j]),te.current=r,(0,_.useEffect)(()=>{S&&b&&(A.current?.dispose(),A.current=D.current?.onDidChangeModelContent(e=>{ie.current||b(D.current.getValue(),e)}))},[S,b]),(0,_.useEffect)(()=>{if(S){let e=E.current.editor.onDidChangeMarkers(e=>{let t=D.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=E.current.editor.getModelMarkers({resource:t});x?.(e)}});return()=>{e?.dispose()}}return()=>{}},[S,x]);function M(){A.current?.dispose(),f?d&&on.set(a,D.current.saveViewState()):D.current.getModel()?.dispose(),D.current.dispose()}return _.createElement(Kt,{width:p,height:m,isEditorReady:S,loading:c,_ref:O,className:h,wrapperProps:g})}var cn=(0,_.memo)(sn);function ln({html:e,setHtml:t,css:n,setCss:r,js:i=``,setJs:a=()=>{},activeTab:o,setActiveTab:s,theme:c,activeItem:l,fontSize:u,setFontSize:d}){let f=(0,_.useRef)(null);function p(e,t){f.current=e}let m=c===`dark`?`vs-dark`:`light`;return(0,I.jsxs)(`div`,{className:`editor-panel`,children:[(0,I.jsxs)(`div`,{className:`editor-tabs-container`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`},children:[(0,I.jsxs)(`button`,{onClick:()=>s(`html`),className:`editor-tab ${o===`html`?`active`:``}`,children:[(0,I.jsx)(me,{size:14,className:`text-orange-500`}),(0,I.jsx)(`span`,{children:`index.html`})]}),(0,I.jsxs)(`button`,{onClick:()=>s(`css`),className:`editor-tab ${o===`css`?`active`:``}`,children:[(0,I.jsx)(me,{size:14,className:`text-blue-500`}),(0,I.jsx)(`span`,{children:`style.css`})]}),(0,I.jsxs)(`button`,{onClick:()=>s(`js`),className:`editor-tab ${o===`js`?`active`:``}`,style:o===`js`?{borderBottomColor:`#eab308`}:{},children:[(0,I.jsx)(me,{size:14,style:{color:`#eab308`}}),(0,I.jsx)(`span`,{children:`script.js`})]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,paddingRight:`10px`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,border:`1px solid var(--border-color)`,borderRadius:`6px`,overflow:`hidden`,height:`24px`,marginRight:`4px`},children:[(0,I.jsx)(`button`,{onClick:()=>d(Math.max(12,u-1)),style:{background:`var(--bg-primary)`,border:`none`,color:`var(--text-secondary)`,width:`24px`,height:`100%`,cursor:`pointer`,fontSize:`11px`,fontWeight:`bold`},title:`ลดขนาดตัวอักษร`,children:`A-`}),(0,I.jsxs)(`div`,{style:{padding:`0 6px`,fontSize:`10px`,fontWeight:`600`,color:`var(--text-muted)`,borderLeft:`1px solid var(--border-color)`,borderRight:`1px solid var(--border-color)`,background:`var(--bg-secondary)`,height:`100%`,display:`flex`,alignItems:`center`},children:[u,`px`]}),(0,I.jsx)(`button`,{onClick:()=>d(Math.min(24,u+1)),style:{background:`var(--bg-primary)`,border:`none`,color:`var(--text-secondary)`,width:`24px`,height:`100%`,cursor:`pointer`,fontSize:`11px`,fontWeight:`bold`},title:`เพิ่มขนาดตัวอักษร`,children:`A+`})]}),o===`html`&&(0,I.jsxs)(`button`,{onClick:()=>{l&&l.starterHtml&&t(l.starterHtml)},className:`editor-action-btn html-btn`,title:`ใส่โครงร่าง HTML เริ่มต้นสำหรับบทนี้`,children:[(0,I.jsx)(we,{size:11}),(0,I.jsx)(`span`,{children:`กู้คืน HTML เริ่มต้น`})]}),o===`css`&&(0,I.jsxs)(`button`,{onClick:()=>{l&&l.starterCss&&r(l.starterCss)},className:`editor-action-btn css-btn`,title:`ใส่โค้ด CSS เริ่มต้นสำหรับบทนี้`,children:[(0,I.jsx)(we,{size:11}),(0,I.jsx)(`span`,{children:`กู้คืน CSS เริ่มต้น`})]}),o===`js`&&(0,I.jsxs)(`button`,{onClick:()=>{l&&l.starterJs!==void 0&&a(l.starterJs)},className:`editor-action-btn`,style:{background:`rgba(234, 179, 8, 0.1)`,color:`#ca8a04`,borderColor:`rgba(234, 179, 8, 0.3)`},title:`ใส่โค้ด JavaScript เริ่มต้นสำหรับบทนี้`,children:[(0,I.jsx)(we,{size:11}),(0,I.jsx)(`span`,{children:`กู้คืน JS เริ่มต้น`})]})]})]}),(0,I.jsxs)(`div`,{className:`editor-container-inner`,children:[o===`html`&&(0,I.jsx)(cn,{height:`100%`,language:`html`,value:e,onChange:e=>t(e||``),theme:m,onMount:p,loading:(0,I.jsxs)(`div`,{className:`editor-loading`,children:[(0,I.jsx)(`div`,{className:`spinner`}),(0,I.jsx)(`span`,{children:`กำลังโหลด HTML Editor...`})]}),options:{fontSize:u,minimap:{enabled:!1},wordWrap:`on`,lineNumbersMinChars:3,automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2}}),o===`css`&&(0,I.jsx)(cn,{height:`100%`,language:`css`,value:n,onChange:e=>r(e||``),theme:m,onMount:p,loading:(0,I.jsxs)(`div`,{className:`editor-loading`,children:[(0,I.jsx)(`div`,{className:`spinner`}),(0,I.jsx)(`span`,{children:`กำลังโหลด CSS Editor...`})]}),options:{fontSize:u,minimap:{enabled:!1},wordWrap:`on`,lineNumbersMinChars:3,automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2}}),o===`js`&&(0,I.jsx)(cn,{height:`100%`,language:`javascript`,value:i,onChange:e=>a(e||``),theme:m,onMount:p,loading:(0,I.jsxs)(`div`,{className:`editor-loading`,children:[(0,I.jsx)(`div`,{className:`spinner`}),(0,I.jsx)(`span`,{children:`กำลังโหลด JavaScript Editor...`})]}),options:{fontSize:u,minimap:{enabled:!1},wordWrap:`on`,lineNumbersMinChars:3,automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2}})]})]})}function un({html:e=``,css:t=``,js:n=``,targetHtml:r=``,targetCss:i=``,targetJs:a=``,showCompare:o=!1,activePreviewTab:s,setActivePreviewTab:c}){let[l,u]=(0,_.useState)(`live`),d=s===void 0?l:s,f=c||u,[p,m]=(0,_.useState)(50),h=(0,_.useRef)(null),[g,v]=(0,_.useState)(400),[y,b]=(0,_.useState)([]);(0,_.useEffect)(()=>{let e=e=>{if(e.data&&e.data.type===`CONSOLE_LOG`){let t={id:Date.now()+Math.random(),level:e.data.level||`log`,text:e.data.data,time:new Date().toLocaleTimeString()};b(e=>[...e.slice(-99),t])}};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},[]);let x=()=>{b([])};(0,_.useEffect)(()=>{if(d!==`compare`||!h.current)return;let e=new ResizeObserver(e=>{for(let t of e)v(t.contentRect.width)});return e.observe(h.current),()=>e.disconnect()},[d]),(0,_.useEffect)(()=>{!o&&d===`compare`&&f(`live`)},[o]);let S=(e,t,n=``)=>{let r=`
      <script>
        (function() {
          const _log = console.log;
          const _warn = console.warn;
          const _error = console.error;
          const _info = console.info;

          function sendToParent(type, args) {
            try {
              const messages = Array.from(args).map(function(arg) {
                if (arg === null) return "null";
                if (arg === undefined) return "undefined";
                if (typeof arg === "object") {
                  try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
                }
                return String(arg);
              });
              window.parent.postMessage({ type: 'CONSOLE_LOG', level: type, data: messages.join(' ') }, '*');
            } catch (e) {}
          }

          console.log = function() { _log.apply(console, arguments); sendToParent('log', arguments); };
          console.warn = function() { _warn.apply(console, arguments); sendToParent('warn', arguments); };
          console.error = function() { _error.apply(console, arguments); sendToParent('error', arguments); };
          console.info = function() { _info.apply(console, arguments); sendToParent('info', arguments); };

          window.addEventListener('error', function(e) {
            sendToParent('error', [e.message + ' (บรรทัด ' + e.lineno + ')']);
          });
        })();
      <\/script>
    `,i=`
      <script>
        try {
          ${n}
        } catch(err) {
          console.error(err.name + ": " + err.message);
        }
      <\/script>
    `;if(e.includes(`<!DOCTYPE html>`)||e.includes(`<html`)){let n=`
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', 'Sarabun', sans-serif;
            box-sizing: border-box;
          }
          ${t}
        </style>
        ${r}
      `,a=e;return a=a.includes(`</head>`)?a.replace(`</head>`,`${n}</head>`):n+a,a.includes(`</body>`)?a=a.replace(`</body>`,`${i}</body>`):a+=i,a}return`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', 'Sarabun', sans-serif;
              box-sizing: border-box;
            }
            ${t}
          </style>
          ${r}
        </head>
        <body>
          ${e}
          ${i}
        </body>
      </html>
    `},C=S(e,t,n),w=S(r||``,i||``,a||``);return(0,I.jsxs)(`div`,{className:`preview-panel`,children:[(0,I.jsxs)(`div`,{className:`preview-tabs-container`,children:[(0,I.jsxs)(`div`,{className:`tabs-group`,children:[(0,I.jsxs)(`button`,{onClick:()=>f(`live`),className:`preview-tab ${d===`live`?`active`:``}`,children:[(0,I.jsx)(pe,{size:14}),(0,I.jsx)(`span`,{children:`ผลลัพธ์ของฉัน (Live Preview)`})]}),(0,I.jsxs)(`button`,{onClick:()=>f(`console`),className:`preview-tab ${d===`console`?`active`:``}`,children:[(0,I.jsx)(F,{size:14}),(0,I.jsx)(`span`,{children:`คอนโซล (Console)`}),y.length>0&&(0,I.jsx)(`span`,{className:`log-count-badge`,children:y.length})]}),o&&(0,I.jsxs)(`button`,{onClick:()=>f(`target`),className:`preview-tab ${d===`target`?`active`:``}`,children:[(0,I.jsx)(we,{size:14,className:`text-yellow-500`}),(0,I.jsx)(`span`,{children:`ตัวอย่างการทำงานจริง (Demo)`})]}),o&&(0,I.jsxs)(`button`,{onClick:()=>f(`compare`),className:`preview-tab ${d===`compare`?`active`:``}`,children:[(0,I.jsx)(ue,{size:14}),(0,I.jsx)(`span`,{children:`เปรียบเทียบผลลัพธ์ (Compare Match)`})]})]}),d===`compare`&&(0,I.jsxs)(`div`,{className:`slider-control-bar`,children:[(0,I.jsx)(Ce,{size:12}),(0,I.jsxs)(`span`,{children:[`ปรับสไลเดอร์: `,p,`%`]}),(0,I.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:p,onChange:e=>m(Number(e.target.value)),className:`range-slider`})]}),d===`console`&&(0,I.jsxs)(`button`,{onClick:x,className:`clear-console-btn`,title:`ล้างข้อความในคอนโซล`,children:[(0,I.jsx)(Ee,{size:12}),(0,I.jsx)(`span`,{children:`ล้างคอนโซล`})]})]}),(0,I.jsxs)(`div`,{className:`preview-body`,children:[(0,I.jsx)(`iframe`,{title:`Live Preview`,srcDoc:C,className:`preview-iframe`,style:{display:d===`live`?`block`:`none`},sandbox:`allow-scripts allow-same-origin allow-modals allow-forms`}),d===`console`&&(0,I.jsx)(`div`,{className:`console-panel-inner`,children:y.length===0?(0,I.jsxs)(`div`,{className:`console-empty`,children:[(0,I.jsx)(F,{size:32,style:{opacity:.3,marginBottom:`8px`}}),(0,I.jsx)(`p`,{children:`ยังไม่มีข้อความส่งออกทาง Console`}),(0,I.jsxs)(`span`,{style:{fontSize:`12px`,opacity:.6},children:[`ลองใช้คำสั่ง `,(0,I.jsx)(`code`,{children:`console.log(...)`}),` ในไฟล์ script.js แล้วดูผลลัพธ์ที่นี่`]})]}):(0,I.jsx)(`div`,{className:`console-logs-list`,children:y.map(e=>(0,I.jsxs)(`div`,{className:`console-log-row ${e.level}`,children:[(0,I.jsxs)(`span`,{className:`log-time`,children:[`[`,e.time,`]`]}),(0,I.jsx)(`span`,{className:`log-level-badge ${e.level}`,children:e.level.toUpperCase()}),(0,I.jsx)(`pre`,{className:`log-text`,children:e.text})]},e.id))})}),d===`target`&&(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:[(0,I.jsxs)(`div`,{style:{padding:`6px 12px`,background:`rgba(2, 132, 199, 0.1)`,borderBottom:`1px solid rgba(2, 132, 199, 0.2)`,color:`var(--text-secondary, #0284c7)`,fontSize:`11.5px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`},children:[(0,I.jsxs)(`span`,{children:[`🎮 `,(0,I.jsx)(`strong`,{children:`โหมดทดลองตัวอย่างจริง:`}),` คุณสามารถคลิกทดสอบและดูผลลัพธ์ของระบบได้ที่นี่ (ไม่มีการเฉลยซอร์สโค้ดใน Editor)`]}),(0,I.jsx)(`button`,{onClick:()=>f(`live`),style:{background:`#0284c7`,color:`white`,border:`none`,borderRadius:`4px`,padding:`3px 9px`,fontSize:`11px`,fontWeight:`600`,cursor:`pointer`},children:`กลับไปโค้ดของฉัน`})]}),(0,I.jsx)(`iframe`,{title:`Target Preview Demo`,srcDoc:w,className:`preview-iframe`,style:{flex:1,border:`none`},sandbox:`allow-scripts allow-same-origin allow-modals allow-forms`})]}),d===`compare`&&(0,I.jsxs)(`div`,{ref:h,className:`visual-match-wrapper`,children:[(0,I.jsxs)(`div`,{className:`target-frame-wrapper`,children:[(0,I.jsx)(`iframe`,{title:`Target Preview`,srcDoc:w,className:`preview-iframe`,sandbox:`allow-scripts allow-same-origin allow-modals allow-forms`}),(0,I.jsx)(`div`,{className:`preview-watermark target`,children:`เฉลยต้นแบบ (Target)`})]}),(0,I.jsxs)(`div`,{className:`live-frame-wrapper`,style:{width:`${p}%`},children:[(0,I.jsx)(`div`,{style:{width:`${g}px`,height:`100%`},children:(0,I.jsx)(`iframe`,{title:`Live Preview Overlap`,srcDoc:C,className:`preview-iframe`,sandbox:`allow-scripts allow-same-origin allow-modals allow-forms`})}),(0,I.jsx)(`div`,{className:`preview-watermark live`,children:`โค้ดของคุณ (Your UI)`})]}),(0,I.jsx)(`div`,{className:`slider-separator-handle`,style:{left:`${p}%`},children:(0,I.jsx)(`div`,{className:`slider-handle-button`,children:`<>`})}),(0,I.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:p,onChange:e=>m(Number(e.target.value)),className:`diff-input-overlay`})]})]})]})}var dn={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(ne(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ee(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function k(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=ee(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var A;function te(){return A||=k(null,{useWorker:!0,resize:!0}),A}function ne(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function re(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function ie(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=k,n.exports.shapeFromPath=re,n.exports.shapeFromText=ie})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),dn,!1);var fn=dn.exports;dn.exports.create;function pn({quizBank:e,onBackToLessons:t}){let[n,r]=(0,_.useState)(`all`),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let t=e;n===`part1`?t=e.filter(e=>e.chapter===1):n===`part2`?t=e.filter(e=>e.chapter===2):n===`part3`?t=e.filter(e=>e.chapter===3):n===`part4`&&(t=e.filter(e=>e.chapter===4)),s(t),l(0),d({}),p(!1),h(!1)},[n,e]);let g=o[c]||o[0],v=o.length;Object.keys(u).length;let y=e=>{i&&m||!i&&u[g.id]!==void 0||(d(t=>({...t,[g.id]:e})),i||(p(!0),e===g.correctIndex&&fn({particleCount:50,spread:60,origin:{y:.8},colors:[`#10b981`,`#34d399`,`#6ee7b7`]})))},b=()=>{c<v-1&&(l(e=>e+1),p(u[o[c+1]?.id]!==void 0))},x=()=>{c>0&&(l(e=>e-1),p(u[o[c-1]?.id]!==void 0))},S=()=>{h(!0);let e=0;o.forEach(t=>{u[t.id]===t.correctIndex&&e++}),Math.round(e/v*100)>=70&&fn({particleCount:150,spread:100,origin:{y:.6}})},C=()=>{d({}),l(0),p(!1),h(!1)},w=0;o.forEach(e=>{u[e.id]===e.correctIndex&&w++});let T=v>0?Math.round(w/v*100):0,E=e.filter(e=>e.chapter===1).length,D=e.filter(e=>e.chapter===2).length,O=e.filter(e=>e.chapter===3).length,ee=e.filter(e=>e.chapter===4).length;return(0,I.jsxs)(`div`,{className:`quiz-arena-layout`,children:[(0,I.jsxs)(`div`,{className:`quiz-control-bar`,children:[(0,I.jsxs)(`div`,{className:`quiz-bar-left`,children:[(0,I.jsxs)(`button`,{onClick:t,className:`quiz-btn-nav`,title:`กลับไปหน้าบทเรียน`,children:[(0,I.jsx)(te,{size:16}),(0,I.jsx)(`span`,{children:`กลับสู่บทเรียน`})]}),(0,I.jsxs)(`div`,{className:`category-select-group`,children:[(0,I.jsx)(he,{size:14,className:`text-slate-400`}),(0,I.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),className:`quiz-category-select`,children:[(0,I.jsxs)(`option`,{value:`all`,children:[`🌟 รวมทุกบทเรียน (`,e.length,` ข้อ)`]}),(0,I.jsxs)(`option`,{value:`part1`,children:[`📘 บทที่ 1: พื้นฐานภาษา JS (`,E,` ข้อ)`]}),(0,I.jsxs)(`option`,{value:`part2`,children:[`📗 บทที่ 2: DOM & Form Validation (`,D,` ข้อ)`]}),(0,I.jsxs)(`option`,{value:`part3`,children:[`📙 บทที่ 3: Advanced & Web APIs (`,O,` ข้อ)`]}),(0,I.jsxs)(`option`,{value:`part4`,children:[`🔥 พิเศษ: นอกเนื้อหาสไลด์ (`,ee,` ข้อ)`]})]})]})]}),(0,I.jsxs)(`div`,{className:`quiz-bar-right`,children:[(0,I.jsxs)(`div`,{className:`mode-toggle-pill`,children:[(0,I.jsx)(`button`,{className:`mode-btn ${i?``:`active`}`,onClick:()=>{a(!1),h(!1)},children:`🎯 โหมดฝึกฝน (ตรวจทันที)`}),(0,I.jsx)(`button`,{className:`mode-btn ${i?`active`:``}`,onClick:()=>{a(!0),h(!1)},children:`📝 โหมดจำลองสอบ (Exam)`})]}),(0,I.jsx)(`button`,{onClick:C,className:`quiz-icon-btn`,title:`ทำแบบทดสอบใหม่`,children:(0,I.jsx)(xe,{size:16})})]})]}),(0,I.jsx)(`div`,{className:`quiz-workspace`,children:m?(0,I.jsx)(`div`,{className:`exam-result-summary`,children:(0,I.jsxs)(`div`,{className:`summary-hero-card`,children:[(0,I.jsx)(`div`,{className:`hero-icon-ring`,children:(0,I.jsx)(A,{size:48,className:`text-yellow-500`})}),(0,I.jsx)(`h2`,{children:`สรุปผลคะแนนจำลองการสอบ`}),(0,I.jsxs)(`div`,{className:`score-big-number`,children:[w,` `,(0,I.jsx)(`span`,{className:`score-divider`,children:`/`}),` `,v]}),(0,I.jsx)(`div`,{className:`score-badge-status`,children:T>=80?`🎉 ยอดเยี่ยมมาก! ระดับเซียน JavaScript`:T>=60?`👍 ผ่านเกณฑ์มาตรฐาน มีความเข้าใจดี`:`📖 แนะนำให้กลับไปทบทวนเนื้อหาสไลด์เพิ่มเติม`}),(0,I.jsx)(`div`,{className:`score-meter-wrapper`,children:(0,I.jsx)(`div`,{className:`score-meter-fill`,style:{width:`${T}%`}})}),(0,I.jsxs)(`p`,{className:`score-percent-label`,children:[`ความถูกต้อง: `,T,`%`]}),(0,I.jsxs)(`div`,{className:`summary-actions`,children:[(0,I.jsxs)(`button`,{onClick:C,className:`summary-btn primary`,children:[(0,I.jsx)(xe,{size:16}),(0,I.jsx)(`span`,{children:`ทำข้อสอบใหม่อีกครั้ง`})]}),(0,I.jsxs)(`button`,{onClick:()=>h(!1),className:`summary-btn secondary`,children:[(0,I.jsx)(ae,{size:16}),(0,I.jsx)(`span`,{children:`ดูรายละเอียดเฉลยข้อสอบ`})]})]})]})}):(0,I.jsxs)(`div`,{className:`question-flow-container`,children:[(0,I.jsxs)(`div`,{className:`question-header-card`,children:[(0,I.jsxs)(`div`,{className:`header-meta`,children:[(0,I.jsxs)(`span`,{className:`q-badge-number`,children:[`คำถามที่ `,c+1,` จาก `,v]}),(0,I.jsx)(`span`,{className:`q-category-tag`,children:g?.category})]}),(0,I.jsx)(`div`,{className:`header-progress-track`,children:(0,I.jsx)(`div`,{className:`header-progress-bar`,style:{width:`${(c+1)/v*100}%`}})})]}),g&&(0,I.jsxs)(`div`,{className:`question-main-card`,children:[(0,I.jsx)(`h3`,{className:`question-title-text`,children:g.question}),g.codeSnippet&&(0,I.jsx)(`div`,{className:`question-code-box`,children:(0,I.jsx)(`pre`,{children:(0,I.jsx)(`code`,{children:g.codeSnippet})})}),(0,I.jsx)(`div`,{className:`quiz-options-list`,children:g.options.map((e,t)=>{let n=u[g.id]===t,r=t===g.correctIndex,a=u[g.id]!==void 0,o=`quiz-option-card`;return a&&!i?r?o+=` is-correct`:n&&(o+=` is-wrong`):n&&(o+=` is-selected`),(0,I.jsxs)(`button`,{onClick:()=>y(t),className:o,disabled:a&&!i,children:[(0,I.jsx)(`span`,{className:`option-letter`,children:String.fromCharCode(65+t)}),(0,I.jsx)(`span`,{className:`option-text`,children:e}),a&&!i&&r&&(0,I.jsx)(ae,{size:18,className:`option-feedback-icon correct`}),a&&!i&&n&&!r&&(0,I.jsx)(se,{size:18,className:`option-feedback-icon wrong`})]},t)})}),!i&&f&&(0,I.jsxs)(`div`,{className:`explanation-card ${u[g.id]===g.correctIndex?`success`:`warning`}`,children:[(0,I.jsxs)(`div`,{className:`explanation-title`,children:[(0,I.jsx)(we,{size:16}),(0,I.jsx)(`span`,{children:u[g.id]===g.correctIndex?`ถูกต้อง! ยอดเยี่ยมมาก`:`ยังไม่ถูกต้อง (คำตอบที่ถูกต้องคือข้อ ${String.fromCharCode(65+g.correctIndex)})`})]}),(0,I.jsx)(`p`,{className:`explanation-text`,children:g.explanation})]}),(0,I.jsxs)(`div`,{className:`quiz-nav-footer`,children:[(0,I.jsxs)(`button`,{onClick:x,disabled:c===0,className:`quiz-nav-btn`,children:[(0,I.jsx)(ie,{size:16}),(0,I.jsx)(`span`,{children:`ข้อก่อนหน้า`})]}),(0,I.jsx)(`div`,{className:`question-dots-nav`,children:o.map((e,t)=>{let n=u[e.id]!==void 0;return(0,I.jsx)(`button`,{onClick:()=>{l(t),p(u[e.id]!==void 0)},className:`dot-btn ${t===c?`active`:``} ${n?`answered`:``}`,title:`ข้อที่ ${t+1}`,children:t+1},e.id)})}),c<v-1?(0,I.jsxs)(`button`,{onClick:b,className:`quiz-nav-btn primary`,children:[(0,I.jsx)(`span`,{children:`ข้อถัดไป`}),(0,I.jsx)(j,{size:16})]}):i?(0,I.jsxs)(`button`,{onClick:S,className:`quiz-nav-btn submit`,children:[(0,I.jsx)(ne,{size:16}),(0,I.jsx)(`span`,{children:`ส่งคำตอบตรวจข้อสอบ`})]}):(0,I.jsxs)(`button`,{onClick:C,className:`quiz-nav-btn primary`,children:[(0,I.jsx)(xe,{size:16}),(0,I.jsx)(`span`,{children:`ทำใหม่อีกครั้ง`})]})]})]})]})})]})}function mn({isOpen:e,onClose:t}){let[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(`html`),[o,s]=(0,_.useState)(null);if(!e)return null;let c=e=>{navigator.clipboard.writeText(e),s(e),setTimeout(()=>s(null),2e3)},l={html:[{tag:`<!DOCTYPE html>`,desc:`การประกาศประเภทเอกสารบรรทัดแรกสุดของไฟล์ เพื่อแจ้งเบราว์เซอร์ให้ประมวลผลตามมาตรฐาน HTML5 สากล (บังคับระบุตัวพิมพ์ใหญ่-เล็กตามสไตล์)`,snippet:`<!DOCTYPE html>`},{tag:`<html lang="th">`,desc:`แท็กเริ่มต้นหลักครอบเนื้อหาหน้าเว็บทั้งหมด โดยระบุ lang="th" เพื่อบอก Search Engines (เช่น Google) ว่าหน้าเว็บนี้เป็นภาษาไทยหลัก`,snippet:`<html lang="th">
  <head>...</head>
  <body>...</body>
</html>`,possibleValues:[`lang="th" (ไทย)`,`lang="en" (อังกฤษ)`,`lang="ja" (ญี่ปุ่น)`]},{tag:`<head>`,desc:`ส่วนหัวสำหรับรวบรวมข้อมูลเบื้องหลังเอกสาร (Metadata) ซึ่งจะไม่แสดงผลบนเนื้อหาเว็บโดยตรง แต่คุมระบบภาษา ฟอนต์ ไฟล์สไตล์ และชื่อหัวเรื่อง`,snippet:`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ชื่อแท็บเบราว์เซอร์</title>
  <link rel="stylesheet" href="style.css">
</head>`},{tag:`<meta charset="UTF-8">`,desc:`ระบุการเข้ารหัสภาษา (Character Encoding) เป็น UTF-8 เพื่อบังคับแสดงผลอักษรไทย สัญลักษณ์พิเศษ และอีโมจิให้คมชัดถูกต้อง ไม่กลายเป็นอักษรต่างดาว`,snippet:`<meta charset="UTF-8">`},{tag:`<meta name="viewport" content="...">`,desc:`แท็กคุมสัดส่วนสเกลหน้าจอ (Responsive Viewport) บังคับให้บราวเซอร์มือถือปรับขนาดเว็บอิงตามขนาดหน้าจวจริงของมือถือเครื่องนั้นๆ`,snippet:`<meta name="viewport" content="width=device-width, initial-scale=1.0">`},{tag:`<title>`,desc:`กำหนดข้อความที่จะแสดงอยู่บนแถบแท็บของเบราว์เซอร์เมื่อผู้ใช้งานเปิดเข้าชมหน้าเว็บนี้ (สำคัญต่อการค้นหาและ SEO)`,snippet:`<title>สถาบันสอนเขียนเว็บ | WebDev Academy</title>`},{tag:`<body>`,desc:`แท็กหลักสำหรับบรรจุข้อมูลทุกชิ้นที่จะไปแสดงโชว์จริงบนหน้าเว็บเพจ (หัวข้อ ย่อหน้า รูปภาพ ฟอร์ม ตาราง ลิงก์ ปุ่ม)`,snippet:`<body>
  <h1>สวัสดีชาวโลก</h1>
  <p>ยินดีต้อนรับเข้าสู่บทเรียน...</p>
</body>`},{tag:`<h1> ถึง <h6> (Headings)`,desc:`แท็กจัดกลุ่มหัวข้อข้อความตามความสำคัญ เรียงจาก h1 (ใหญ่สุด/สำคัญสุด เช่น ชื่อหน้าเว็บ) ไปจนถึง h6 (ย่อยสุด/เล็กสุด)`,snippet:`<h1>หัวข้อหลักที่ 1 (แนะนำมีเพจละ 1 ตัว)</h1>
<h2>หัวข้อย่อยระดับที่ 2</h2>
<h3>หัวข้อย่อยระดับที่ 3</h3>`,possibleValues:[`<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`]},{tag:`<p> & <br> & <hr>`,desc:`แท็กจัดการย่อหน้าและบรรทัด: <p> (ย่อหน้าแบบเว้นช่องว่างหัวท้าย), <br> (สั่งขยับขึ้นบรรทัดใหม่ทันที), และ <hr> (ขีดเส้นแบ่งส่วนแนวนอน)`,snippet:`<p>เนื้อหาในบล็อกย่อหน้าแรก<br>สั่งขึ้นบรรทัดใหม่ตรงนี้</p>
<hr>
<p>เนื้อหาย่อหน้าถัดไปหลังเส้นคั่น</p>`,possibleValues:[`<p> (Paragraph)`,`<br> (Line Break)`,`<hr> (Horizontal Rule)`]},{tag:`<strong> & <em> & <mark>`,desc:`แท็กเน้นคำสำคัญเฉพาะจุด: strong (เน้นหนาเตือนสายตา), em (เน้นเอียงเสียงอ่าน), และ mark (ระบายแถบไฮไลต์พื้นหลังเหลือง)`,snippet:`ระบบปฏิบัติการนี้ <strong>ห้ามปิดเครื่อง</strong> และกรุณา <em>ตรวจสอบสัญญาณ</em> ตรงที่ <mark>ขึ้นไฟสีแดง</mark>`,possibleValues:[`<strong> (ตัวหนา)`,`<em> (ตัวเอียง)`,`<mark> (ไฮไลต์เหลือง)`]},{tag:`<ul> & <ol> & <li> (Lists)`,desc:`สร้างรายการข้อมูล: <ul> (รายการสัญลักษณ์จุดหัวข้อกลม), <ol> (รายการเรียงลำดับตัวเลข 1, 2, 3...) โดยใช้แท็กย่อย <li> คลุมตัวข้อมูล`,snippet:`<!-- รายการจุดกลม -->
<ul>
  <li>ผลไม้แอปเปิ้ล</li>
  <li>ผลไม้ส้ม</li>
</ul>

<!-- รายการเรียงตัวเลข -->
<ol>
  <li>เปิดเตาอบ</li>
  <li>ใส่ขนมปังเข้าเครื่อง</li>
</ol>`,possibleValues:[`<ul> (Unordered List)`,`<ol> (Ordered List)`,`<li> (List Item)`]},{tag:`<a> (Anchor Links)`,desc:`สร้างลิงก์ปลายทาง ระบุพิกัดใน href และใช้ target="_blank" เพื่อสั่งให้เปิดลิงก์ในแท็บใหม่ของบราวเซอร์`,snippet:`<!-- เปิดในหน้าเดิม -->
<a href="https://example.com">เข้าสู่เว็บไซต์หลัก</a>

<!-- เปิดในแท็บใหม่พร้อมความปลอดภัย -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">ค้นหาบน Google</a>`,possibleValues:[`href="URL" (ลิงก์ปลายทาง)`,`target="_blank" (เปิดแท็บใหม่)`,`target="_self" (เปิดหน้าเดิม)`]},{tag:`<img> (Image Embed)`,desc:`แทรกไฟล์รูปภาพลงในหน้าเว็บ โดย src คือที่อยู่รูปภาพ และ alt คือคำอธิบายสั้นๆ ทดแทนกรณีรูปโหลดไม่ขึ้นหรือสำหรับเครื่องอ่านคนพิการ`,snippet:`<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop"
     alt="รูปภาพใบหน้าผู้สอนวิชาวิทยาการคอมพิวเตอร์"
     width="80"
     height="80">`,possibleValues:[`src="path/to/image.jpg"`,`alt="คำอธิบายรูป"`,`width="[px|%]"`,`height="[px|%]"`]},{tag:`<video> & <audio>`,desc:`ฝังวิดีโอหรือเสียงลงในหน้าเพจ โดยใส่ controls เพื่อแสดงแผงเล่น หยุด เลื่อนตำแหน่งวิดีโอ และเร่งลดเสียง`,snippet:`<video src="assets/preview.mp4" controls width="400" poster="thumbnail.jpg">
  เบราว์เซอร์ของคุณไม่รองรับไฟล์วิดีโอนี้
</video>`,possibleValues:[`controls (แสดงแผงควบคุม)`,`autoplay (เล่นอัตโนมัติ)`,`loop (เล่นวนซ้ำ)`,`muted (ปิดเสียงดีฟอลต์)`]},{tag:`<table> & <tr> & <th> & <td>`,desc:`แท็กสร้างตารางข้อมูล: table (กรอบตารางหลัก), tr (แถวตาราง), th (หัวคอลัมน์หนากึ่งกลาง), และ td (เซลล์ข้อมูลช่องปกติ)`,snippet:`<table border="1">
  <tr>
    <th>รายการสินค้า</th>
    <th>ราคา</th>
  </tr>
  <tr>
    <td>กาแฟเย็น</td>
    <td>฿45</td>
  </tr>
</table>`,possibleValues:[`<table> (ตาราง)`,`<tr> (แถวตาราง)`,`<th> (หัวตารางตัวหนา)`,`<td> (ช่องข้อมูลตาราง)`]},{tag:`colspan & rowspan (Table Span)`,desc:`แอตทริบิวต์ระบุบน th/td เพื่อขยายขนาดช่อง: colspan (ควบรวมช่องแนวขวางขวา), rowspan (ควบรวมช่องแนวดิ่งลงล่าง)`,snippet:`<table>
  <tr>
    <!-- รวมหัวข้อเป็น 2 ช่องแนวนอน -->
    <th colspan="2">หัวข้อตารางแนวยาว</th>
  </tr>
  <tr>
    <!-- รวมเซลล์นี้ลงล่าง 2 แถวแนวตั้ง -->
    <td rowspan="2">ข้อมูลแนวตั้ง 2 แถว</td>
    <td>ข้อมูลคอลัมน์ขวา แถว 1</td>
  </tr>
  <tr>
    <td>ข้อมูลคอลัมน์ขวา แถว 2</td>
  </tr>
</table>`,possibleValues:[`colspan="2" (ควบรวม 2 คอลัมน์)`,`rowspan="2" (ควบรวม 2 แถวดิ่ง)`]},{tag:`<form> & <input>`,desc:`ระบบฟอร์มคุมช่องส่งข้อมูล: type="text" (ข้อความสั้น), type="password" (ซ่อนตาปิดรหัส), และ type="email" (เช็คสัญญลักษณ์ @ อัตโนมัติ)`,snippet:`<form action="/submit-data" method="POST">
  <label for="usr">ชื่อผู้ใช้:</label>
  <input type="text" id="usr" placeholder="กรอกชื่อผู้ใช้" required>
  
  <label for="pwd">รหัสผ่าน:</label>
  <input type="password" id="pwd" required>
  
  <button type="submit">ส่งข้อมูล</button>
</form>`,possibleValues:[`type="text" (กล่องพิมพ์สั้น)`,`type="password" (กล่องรหัสผ่าน)`,`type="email" (กล่องอีเมล)`,`required (ต้องกรอก)`]},{tag:`radio & checkbox (Form Controls)`,desc:`ตัวเลือกการเลือก: type="radio" (เลือกได้อย่างเดียวในกลุ่ม โดยผูกกลุ่มด้วยแอตทริบิวต์ name เดียวกัน) และ type="checkbox" (ติ๊กถูกหลายตัวเลือกอิสระ)`,snippet:`<!-- กลุ่มปุ่มวิทยุเลือกเพศ (เลือกได้ค่าเดียว) -->
<label><input type="radio" name="gender" value="m"> ชาย</label>
<label><input type="radio" name="gender" value="f"> หญิง</label>

<!-- กล่องเลือกรับข่าวสาร (เลือกได้หลายตัว) -->
<label><input type="checkbox" name="hobbies" value="reading" checked> การอ่าน</label>
<label><input type="checkbox" name="hobbies" value="coding"> เขียนโค้ด</label>`,possibleValues:[`type="radio" (เลือกได้อย่างเดียว)`,`type="checkbox" (เลือกได้หลายตัว)`,`checked (เลือกเริ่มต้น)`]},{tag:`<select> & <option> & <textarea>`,desc:`แท็กDropdownเลือกตัวเลือก: select/option (เมนูคีย์เลือกดรอปดาวน์) และ textarea (กล่องสี่เหลี่ยมพิมพ์บรรยายขยายสเกลความกว้างแถวได้)`,snippet:`<!-- Dropdown เมนู -->
<select name="cars">
  <option value="toyota">Toyota</option>
  <option value="honda" selected>Honda</option>
</select>

<!-- ช่องพิมพ์แบบขึ้นบรรทัดยาว -->
<textarea name="message" rows="4" cols="40" placeholder="ระบุที่อยู่จัดส่ง..."></textarea>`,possibleValues:[`<select> (กรอบดรอปดาวน์)`,`<option selected> (ตัวเลือกดีฟอลต์)`,`<textarea rows="4"> (ช่องพิมพ์ยาว)`]},{tag:`Semantic Structural Tags`,desc:`กลุ่มแท็กระบุขอบเขตแบ่งหน้าจอเพื่อให้ Search Engines และบอทคัดแยกสัดส่วนหน้าเพจได้มาตรฐาน (สำคัญต่อความโปร่งใสและระบบ SEO)`,snippet:`<header>โลโก้และแถบนำทางหลัก</header>
<nav>
  <a href="#home">หน้าหลัก</a>
</nav>
<main>
  <section>
    <h2>กลุ่มเรื่องที่ 1</h2>
    <article>บทความที่ 1</article>
  </section>
  <aside>คอลัมน์โฆษณาหรือข้อมูลข้างเคียง</aside>
</main>
<footer>ส่วนล่างสุดแจ้งลิขสิทธิ์</footer>`,possibleValues:[`<header> (ส่วนหัว)`,`<nav> (เมนู)`,`<main> (เนื้อหาหลัก)`,`<section> (ส่วนย่อย)`,`<article> (บทความ)`,`<aside> (แถบข้าง)`,`<footer> (ส่วนท้าย)`]},{tag:`HTML5 Advanced Input Types`,desc:`ประเภทกล่องรับข้อมูลเฉพาะทางแบบยกระดับผ่านแอตทริบิวต์ type เพื่อเรียกใช้วิดเจ็ตปฏิทิน จานเลือกสี แถบเลื่อน หรือระบบป้อนตัวเลขของระบบปฏิบัติการ`,snippet:`<!-- 1. ช่องระบุตัวเลขพร้อมกำหนดค่าขั้นต่ำ/สูงสุด -->
<input type="number" min="1" max="100" value="25">

<!-- 2. กล่องคลิกปฏิทินเลือกวัน-เดือน-ปี -->
<input type="date">

<!-- 3. แถบเลื่อนระบุระดับ (Slider) -->
<input type="range" min="1" max="5" value="3">

<!-- 4. จานเลือกเฉดสี (Color picker) -->
<input type="color">`,possibleValues:[`type="number"`,`type="date"`,`type="range"`,`type="color"`,`type="time"`,`type="file"`]},{tag:`<details> & <summary>`,desc:`แท็กสร้างกล่องคำถาม FAQ / Accordion ที่สามารถยืดหดเปิดเปิดเผยรายละเอียดข้อมูลได้โดยอาศัยเพียงแท็กมาตรฐาน HTML ไร้สคริปต์ JavaScript`,snippet:`<details>
  <summary>หัวเรื่องคำถามคำถามที่แสดงตลอดเวลา (คลิกเพื่อขยาย)</summary>
  <p>เนื้อหารายละเอียดคำตอบที่จะซ่อนอยู่และแสดงผลเฉพาะตอนขยายปุ่ม</p>
</details>`,possibleValues:[`<details> (กรอบคำถามยืดหด)`,`<summary> (หัวข้อเรื่องหลัก)`,`<details open> (เปิดค้างไว้แต่แรก)`]}],css:[{tag:`Universal Reset (*)`,desc:`การล้างคุณสมบัติระยะห่างและบ็อกซ์โมเดลสากล (Global Reset) ป้องกันเบราว์เซอร์ดึงค่าดีฟอลต์ต่างกันจนสัดส่วนเพจเพี้ยนเบี้ยวเหลื่อม`,snippet:`* {
  margin: 0;              /* ล้างช่องว่างขอบนอกเป็นศูนย์ */
  padding: 0;             /* ล้างช่องว่างขอบในเป็นศูนย์ */
  box-sizing: border-box; /* บังคับความกว้างกล่องนับรวมกรอบและแพดดิ้ง */
}`,possibleValues:[`margin: 0`,`padding: 0`,`box-sizing: border-box`]},{tag:`CSS Selectors Syntax`,desc:`ไวยากรณ์หลักในการเชื่อมโยง CSS เข้ากับองค์ประกอบ HTML: Selector แบบแท็กเดี่ยว, คลาสมีจุดนำหน้า, และไอดีขึ้นต้นด้วยชาร์ป`,snippet:`/* 1. Tag Selector: มีผลกับแท็กนั้นๆ ทุกจุดในหน้าเว็บ */
h1 { color: #2563eb; }

/* 2. Class Selector: มีผลกับทุกจุดที่ผูกคลาสนี้ไว้ (ใช้ซ้ำได้บ่อย) */
.btn-primary { padding: 10px 20px; }

/* 3. ID Selector: มีผลเฉพาะจุดเดียวที่มีไอดีตรงกันเท่านั้น (ห้ามใช้ชื่อไอดีซ้ำ) */
#navbar-main { background-color: #0f172a; }`,possibleValues:[`h1, p, div (Tag)`,`.class-name (Class)`,`#id-name (ID)`,`.card p (สไตล์ลูกในแม่)`,`.btn:hover (สเตทโฮเวอร์)`]},{tag:`CSS Specificity Weights (ค่าน้ำหนัก)`,desc:`กฎคะแนนลำดับความสำคัญสากลที่เบราว์เซอร์ใช้ตัดสินว่าเมื่อมี CSS เขียนสั่งงานทับซ้อนกัน ใครจะชนะและแสดงผลจริง`,snippet:`/* 
   ค่าน้ำหนักตัวคัดสรร (ลำดับความแรงจากสูงลงต่ำ):
   1. !important      = ชนะทุกทาง (ใช้ครอบเฉพาะจุดเลี่ยงบ่อย)
   2. Inline Styles   = 1000 คะแนน (เช่นเขียนใน HTML style="color:red;")
   3. ID Selectors    = 100 คะแนน (เช่น #title-page)
   4. Class/Attribute = 10 คะแนน (เช่น .highlight, [type="text"])
   5. Tag Selectors   = 1 คะแนน (เช่น h1, p, div)
*/

#main-title { color: #f97316; } /* 100 คะแนน (ชนะสีน้ำเงินและเขียวเสมอ) */
.highlight  { color: #3b82f6; } /* 10 คะแนน */
h1          { color: #10b981; } /* 1 คะแนน */`},{tag:`CSS Variables (:root)`,desc:`การตั้งกล่องเก็บตัวแปรสไตล์กลาง (CSS Variables) ไว้ที่จุดเริ่มต้น :root เพื่อเรียกใช้งานสีแบรนด์ส่วนกลางได้อย่างรวดเร็วและเป็นระบบ`,snippet:`:root {
  --primary-brand: #3b82f6;   /* รหัสสีหลักน้ำเงิน */
  --danger-alert: #ef4444;    /* รหัสสีแดงเตือน */
  --border-radius-base: 8px;  /* โค้งมนเริ่มต้น */
}

.card {
  border-radius: var(--border-radius-base);
  border: 1px solid var(--primary-brand);
}
.btn-alert {
  background-color: var(--danger-alert);
}`},{tag:`Colors & Gradients`,desc:`ระบุโทนสีระบบ Hex Code (#...), RGB, RGBA (ใส่ตัวควบคุมความโปร่งแสง A: 0.0 - 1.0) และการไล่โทนสีฉากหลังสไตล์พรีเมียม`,snippet:`.premium-box {
  color: #1e293b;                              /* สีตัวหนังสือ Hex Code */
  border-color: rgba(59, 130, 246, 0.2);       /* สีขอบน้ำเงินใส 20% */
  
  /* การไล่สีฉากหลัง: linear-gradient([มุมองศา], [สีที่ 1], [สีที่ 2]) */
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}`,possibleValues:[`Hex Code (#3b82f6)`,`rgb(59, 130, 246)`,`rgba(59, 130, 246, 0.5)`,`linear-gradient(45deg, red, blue)`,`transparent (สีโปร่งใส)`]},{tag:`Typography Formats (ตัวอักษร)`,desc:`การคุมรูปแบบตัวหนังสือ: font-size (ขนาด), font-weight (ความหนา 100-900), line-height (ช่องว่างบรรทัด), และ letter-spacing (ช่องไฟอักษร)`,snippet:`.article-body {
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;
  font-weight: 400;       /* ความหนาตัวหนังสือปกติ (700 = ตัวหนา) */
  line-height: 1.6;       /* ระยะห่างแถว (แนะนำ 1.5 - 1.7 เพื่อถนอมสายตา) */
  letter-spacing: 0.5px;  /* ช่องว่างระหว่างอักษรขยายความโปร่งสลวย */
  text-align: justify;    /* จัดขอบหน้าหลังตรงเรียบเท่ากัน */
}`,possibleValues:[`font-size: 14px|1rem|1.2em`,`font-weight: 300|400|700|bold`,`line-height: 1.5|1.8`,`letter-spacing: 0.5px|1px`]},{tag:`Box Model - Padding & Width (Shorthands)`,desc:`การจัดการขนาดกล่องระยะห่างภายใน: การระบุแบบเดี่ยว (4 ทิศเท่ากัน), แบบ 2 ค่า (บน-ล่าง ซ้าย-ขวา), แบบ 3 ค่า (บน ซ้าย/ขวา ล่าง) และ 4 ค่า (บน ขวา ล่าง ซ้าย วนตามเข็มนาฬิกา)`,snippet:`.box-padding {
  width: 100%;
  max-width: 400px;
  
  /* padding shorthand: */
  padding: 10px;             /* 10px ทุกทิศทาง */
  padding: 10px 20px;        /* บนล่าง 10px, ซ้ายขวา 20px */
  padding: 10px 15px 20px;   /* บน 10px, ซ้ายขวา 15px, ล่าง 20px */
  padding: 10px 15px 20px 25px; /* บน 10px, ขวา 15px, ล่าง 20px, ซ้าย 25px (ตามเข็ม) */
  
  box-sizing: border-box;    /* ล็อกสัดส่วนกล่องรวมพิกเซลขอบและแพดดิ้ง */
}`,possibleValues:[`padding: [1 ค่า] (ทุกด้าน)`,`padding: [2 ค่า] (บนล่าง ซ้ายขวา)`,`padding: [4 ค่า] (บน ขวา ล่าง ซ้าย)`,`box-sizing: border-box`]},{tag:`Box Model - Margin & Border (Sides & Shorthands)`,desc:`ระยะห่างภายนอกกล่อง (Margin) และการจัดการขอบด้านเจาะจงรายด้าน (Longhand) เช่น ขอบล่างหรือขอบซ้าย พร้อมระบุขนาด รูปแบบ และสี`,snippet:`.card-border {
  /* margin shorthand & longhand: */
  margin: 20px auto;         /* บนล่าง 20px, ซ้ายขวาปูตรงกึ่งกลางหน้าจอ */
  margin-bottom: 25px;       /* เจาะจงเว้นช่องไฟด้านล่าง 25px */
  
  /* border shorthand & specific sides: */
  border-left: 6px solid #ef4444; /* เส้นกรอบเฉพาะด้านซ้ายหนา 6px ชนิดเส้นทึบสีแดง */
  border-bottom: 1px dotted #cbd5e1; /* เส้นจุดประใต้กล่องบางสีเทา */
  
  /* ชนิดเส้นขอบอื่นๆ: solid (เส้นตรง), dashed (เส้นประ), dotted (ไข่ปลา), none (ไม่มีขอบ) */
}`,possibleValues:[`margin: 20px auto (จัดกลาง)`,`border-left: 5px solid red`,`border-style: solid|dashed|dotted|none`,`margin-top: 10px`]},{tag:`Box Shadows (เงาสามมิติ)`,desc:`ตกแต่งใส่ความมีระดับด้วยเงาขอบใต้กล่องดูลอยนูนขึ้นมาตามระดับพารามิเตอร์ที่ใส่ระบุ`,snippet:`.elevated-box {
  /* 
     โครงสร้างค่า: box-shadow: [เยื้องขวา X] [เยื้องล่าง Y] [ความฟุ้งเบลอ] [ขนาดความหนาเงา] [รหัสสีเงา];
     - ใส่ค่าเยื้องติดลบเพื่อเยื้องซ้ายหรือเยื้องขึ้นบน
     - แนะนำใช้สีแนว RGBA เพื่อสร้างเงาใสดูเนียนธรรมชาติ
  */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 8px 10px -6px rgba(0, 0, 0, 0.05);
}`,possibleValues:[`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`,`box-shadow: inset 0 2px 4px rgba(0,0,0,0.06) (เงาใน)`]},{tag:`Display Properties (block, inline, inline-block, none)`,desc:`กำหนดพฤติกรรมการแสดงลักษณะและจองพื้นที่กล่องของอิลิเมนต์บนเลย์เอาต์หน้าต่างเบราว์เซอร์`,snippet:`/* block: เริ่มบรรทัดใหม่ และยืดกว้างเต็มจอ */
.block-box { display: block; }

/* inline: ไหลตามเนื้อหาข้อความ ไม่ขึ้นบรรทัดใหม่ และกำหนดความกว้างสูงไม่ได้ */
.inline-span { display: inline; }

/* inline-block: ไหลตามข้อความได้ แต่สามารถคุมสัดส่วนกว้าง สูง แพดดิ้ง และมาร์จิ้นได้ */
.tag-label {
  display: inline-block;
  width: 120px;
  padding: 5px 10px;
  text-align: center;
}

/* none: สั่งซ่อนองค์ประกอบออกจากหน้าจออย่างสิ้นเชิง (ไม่กินเนื้อที่และไม่จองพื้นที่สเกล) */
.hidden-block { display: none; }`,possibleValues:[`display: block`,`display: inline`,`display: inline-block`,`display: none`,`display: flex`,`display: grid`]},{tag:`Border Radius Details (ความโค้งมนและทิศทาง)`,desc:`กำหนดความโค้งมนของขอบมุมกล่องในรูปแบบย่อที่ระบุคู่ค่า หรือการทำรูปวงกลมสมบูรณ์`,snippet:`/* 1. โค้งมนเท่ากันสี่มุม */
.rounded-all { border-radius: 12px; }

/* 2. โค้งมนเฉพาะขอบบน (บนซ้าย บนขวา) ส่วนล่างเป็นเหลี่ยมตัดตรง (ล่างขวา ล่างซ้าย) */
.rounded-top { border-radius: 20px 20px 0 0; }

/* 3. เขียนเจาะจงมุมแยกตัว */
.custom-corner {
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

/* 4. ทำเป็นรูปทรงวงกลมสมบูรณ์ (เมื่อกล่องมีความกว้างและสูงเท่ากันพอดี) */
.circle-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}`,possibleValues:[`border-radius: 8px`,`border-radius: 50% (วงกลม)`,`border-radius: 12px 12px 0 0`,`border-top-left-radius: 16px`]},{tag:`Background & Gradients (ภาพพื้นหลังและการเฉดสี)`,desc:`การตกแต่งพื้นหลังกล่องด้วยรูปภาพ ล็อกสเกลจัดวางตำแหน่งป้องกันการซ้ำภาพ หรือการเฉดระดับสีเฉดสวยงามสะดุดตา`,snippet:`/* 1. ใส่รูปพื้นหลังและครอบคลุมไม่ซ้ำ */
.bg-hero {
  background-image: url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600");
  background-size: cover;          /* ยืดภาพครอบคลุมกล่องพอดี สัดส่วนไม่เพี้ยน */
  background-position: center;     /* ตรึงภาพอยู่ศูนย์กลางกล่อง */
  background-repeat: no-repeat;    /* ล้างการต่อรูปซ้ำจิ๊กซอว์ */
}

/* 2. การไล่ระดับสีพื้นหลัง (Linear Gradient) */
.bg-gradient-premium {
  /* linear-gradient([ทิศทาง/มุมองศา], [สีที่ 1], [สีที่ 2]) */
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}`,possibleValues:[`background-size: cover|contain`,`background-repeat: no-repeat|repeat`,`background-position: center|top|bottom`,`background: linear-gradient(...)`]},{tag:`Visibility vs Display None`,desc:`ความแตกต่างของคำสั่งสั่งซ่อน: display:none (สั่งลบทิ้งไปจากเลย์เอาต์ ปล่อยพื้นที่ว่าง), visibility:hidden (สั่งล่องหน แต่พื้นที่กล่องเท่าเดิม)`,snippet:`/* ลบชิ้นงานนี้ออกจากหน้าจอและโครงสร้างชั่วคราว */
.hidden-completely { display: none; }

/* ล่องหนแต่ยังคงเหลือพื้นที่เปล่าสีขาวไว้ห้ามองค์ประกอบอื่นดึงเสียที่ */
.hidden-but-keeps-space { visibility: hidden; }`,possibleValues:[`display: none (ลบชิ้นงานออก)`,`visibility: hidden (ล่องหนชั่วคราว)`]},{tag:`Text Alignment (จัดขอบข้อความ)`,desc:`กำหนดการจัดวางตำแหน่งตัวหนังสือในแนวนอนภายในกรอบเนื้อหา`,snippet:`.aligned-text {
  /* 
     ค่าพารามิเตอร์จัดตำแหน่ง:
     - left   : จัดชิดซ้ายเริ่มต้น (ดีฟอลต์สำหรับภาษาซ้ายไปขวา)
     - right  : จัดชิดขวาสุด
     - center : จัดข้อความอยู่กึ่งกลางแนวนอนพอดี
     - justify: จัดดึงระยะหน้าหลังขยายเว้นช่องไฟเพื่อปูให้ขอบข้างเรียบตรงสวยงาม
  */
  text-align: center;
}`,possibleValues:[`text-align: left`,`text-align: right`,`text-align: center`,`text-align: justify`]},{tag:`Text Decoration (เส้นตกแต่งคำ)`,desc:`กำหนดการขีดเส้นตกแต่งให้กับตัวหนังสือ เช่น ขีดเส้นใต้คำ, ขีดกลางลบคำ หรือล้างเส้นใต้ของแท็กลิงก์ <a> ดีฟอลต์ออก`,snippet:`.styled-line {
  /*
     ค่าขีดเส้นคุมสไตล์:
     - none         : ล้างเส้นตกแต่งออกทั้งหมด (นิยมใช้เคลียร์ขีดเส้นใต้แท็กลิงก์ <a>)
     - underline    : ขีดเส้นใต้ตัวอักษร
     - overline     : ขีดเส้นเหนือบ่าตัวอักษรด้านบน
     - line-through : ขีดเส้นคาดทับกลางอักษร (นิยมทำป้าย SALE ลดราคา)
  */
  text-decoration: none;
}`,possibleValues:[`text-decoration: none`,`text-decoration: underline`,`text-decoration: line-through`,`text-decoration: overline`]},{tag:`Text Transform (ปรับตัวพิมพ์อักษร)`,desc:`ควบคุมการแปลงขนาดพิมพ์เล็ก-พิมพ์ใหญ่ของตัวอักษรภาษาอังกฤษโดยอัตโนมัติผ่าน CSS`,snippet:`.english-case {
  /*
     ค่าควบคุมสเตตัสการพิมพ์:
     - none       : ขนาดอักษรเดิมตามที่พิมพ์ลง HTML
     - uppercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์ใหญ่ทั้งหมด (เช่น hello -> HELLO)
     - lowercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์เล็กทั้งหมด
     - capitalize : แปลงเฉพาะตัวอักษรแรกสุดของคำให้เป็นตัวพิมพ์ใหญ่ (เช่น hello -> Hello)
  */
  text-transform: uppercase;
}`,possibleValues:[`text-transform: none`,`text-transform: uppercase`,`text-transform: lowercase`,`text-transform: capitalize`]},{tag:`List Styles Bullet (จุดรายการลิสต์)`,desc:`กำหนดการจัดสไตล์ของจุดรายการหน้ารายการลิสต์ <ul> และ <ol> หรือล้างออกเพื่อทำแถบเมนูนำทาง`,snippet:`.custom-list {
  /* 
     ค่าสัญลักษณ์หัวข้อ:
     - none     : ล้างจุดกลมหรือตัวเลขออกทั้งหมด (นิยมทำแถบเมนูนำทางหรือการ์ด)
     - disc     : จุดวงกลมทึบดีฟอลต์
     - circle   : วงกลมกลวงโปร่งใน
     - square   : จุดกล่องสี่เหลี่ยมจัตุรัสทึบ
     - decimal  : ตัวเลขเรียงลำดับ 1, 2, 3...
  */
  list-style-type: none;
}`,possibleValues:[`list-style-type: none`,`list-style-type: disc`,`list-style-type: circle`,`list-style-type: square`,`list-style-type: decimal`]},{tag:`Table Border Collapse (ยุบเส้นขอบตาราง)`,desc:`รวมเส้นกรอบเซลล์ตารางของ td และ th ให้ยุบควบแน่นเหลือเพียงเส้นเดี่ยว เพื่อป้องกันเส้นกรอบตารางซ้อนทับหนาเป็นสองเท่า`,snippet:`table {
  /*
     ค่าคุมขอบตาราง:
     - collapse : สั่งยุบขอบที่สัมผัสกันมารวมร่างเป็นเส้นขอบเดี่ยวดูเพรียวสวยงาม (แนะนำใช้เสมอ)
     - separate : แยกขอบออกจากกันแบบอิสระดีฟอลต์ (ทำให้เกิดขอบซ้อนหนา)
  */
  border-collapse: collapse;
}`,possibleValues:[`border-collapse: collapse`,`border-collapse: separate`]}],layouts:[{tag:`CSS Float (ข้อความล้อมรอบภาพ)`,desc:`จัดรูปภาพหรือกล่องให้ลอยชิดขอบซ้ายหรือขวา เพื่อให้ตัวหนังสือย่อหน้ารอบข้างไหลโอบล้อมตามความเหมาะสมดั้งเดิม (เช่น จัดคอลัมน์บทความข่าว)`,snippet:`.avatar-float {
  float: right;               /* left (ลอยซ้าย) | right (ลอยขวา) | none (ไม่ลอย) */
  margin-left: 15px;          /* ช่องไฟไม่ให้ตัวหนังสือชิดติดรูปเกินไป */
  margin-bottom: 10px;
}`,possibleValues:[`float: left`,`float: right`,`float: none`]},{tag:`Absolute & Relative Position`,desc:`การจัดตำแหน่งซ้อนทับกัน: กำหนด position: relative คลุมที่ตัวแม่ และระบุ position: absolute ที่ตัวลูก เพื่อบังคับพิกัดการลอยทับ`,snippet:`/* 1. กล่องแม่ (ใช้เป็นฐานระบุพิกัดอิงตัว) */
.parent-card {
  position: relative;
}

/* 2. กล่องลูก (วางลอยทับตำแหน่งเจาะจง) */
.child-badge {
  position: absolute;
  top: 12px;                  /* ยึดห่างขอบบนแม่ 12px */
  right: 12px;                /* ยึดห่างขอบขวาแม่ 12px */
  /* ค่าปรับแต่งทิศทาง: top | bottom | left | right */
}`,possibleValues:[`position: relative (กล่องแม่/ฐาน)`,`position: absolute (กล่องลูกลอย)`,`top | bottom | left | right`]},{tag:`Fixed & Sticky Position`,desc:`การจัดเลื่อนตามจอ: position: fixed (ตรึงตำแหน่งไว้กับ viewport หน้าต่างเดิมตลอดเวลา), position: sticky (เลื่อนตามเพจแต่ล็อกเกาะติดขอบทิศทางยามชนขอบ)`,snippet:`/* เมนูบาร์เกาะติดขอบจอด้านบนตลอดเวลาเมื่อเลื่อนหน้าจอลงล่าง */
.navbar-sticky {
  position: sticky;
  top: 0;                     /* ติดหนึบขอบบนสุด */
  z-index: 999;               /* ยกความลอยตัวระดับสูงป้องกันการโดนบล็อกทับ */
}`,possibleValues:[`position: sticky (เกาะติดขอบเมื่อสกอล)`,`position: fixed (ตรึงหน้าจอตายตัว)`,`top: 0`,`bottom: 0`]},{tag:`Flexbox Containers ( display: flex )`,desc:`เปิดใช้งานแถวยืดหยุ่นจัดเรียงใน 1 มิติ (แนวราบหรือแนวดิ่ง) ควบคุมการแบ่งทิศทางและสั่งหักขึ้นบรรทัดใหม่เมื่อชนขอบจอ`,snippet:`.flex-parent {
  display: flex;
  flex-direction: row;        /* row (เรียงแนวนอนดีฟอลต์) | column (เรียงแนวดิ่ง) */
  flex-wrap: wrap;            /* wrap (ตัดขึ้นบรรทัดใหม่เมื่อสุดจอ) | nowrap (เบียดบีบ) */
  gap: 16px;                  /* ช่องไฟระยะห่างระหว่างกล่องลูก */
}`,possibleValues:[`display: flex`,`flex-direction: row|column|row-reverse`,`flex-wrap: wrap|nowrap`,`gap: 10px|1rem`]},{tag:`Flex Justify & Align`,desc:`จัดระเบียบและตำแหน่งของกล่องลูกภายในแถว Flexbox ทั้งในแนวแกนหลัก (แนวนอน) และแนวแกนรอง (แนวตั้ง)`,snippet:`.flex-parent {
  display: flex;
  
  /* justify-content: จัดช่องไฟในแนวแกนหลัก (แกนนอน)
     - flex-start    : กองรวมฝั่งซ้ายเริ่มต้น
     - flex-end      : กองรวมฝั่งขวาสุด
     - center        : รวมตรงกลางแถว
     - space-between : ชิดขอบซ้ายขวาสุด แบ่งพื้นที่ว่างตรงกลางเท่ากัน
     - space-around  : ปรับช่องไฟรอบข้างเท่ากัน (ขอบนอกซ้ายขวาจะแคบกว่าครึ่งหนึ่ง)
     - space-evenly  : แบ่งเว้นช่องไฟทุกส่วนรวมถึงขอบซ้ายขวาอย่างเท่าเทียมเป๊ะ
  */
  justify-content: space-between;
  
  /* align-items: จัดตำแหน่งลูกในแนวแกนรอง (แนวตั้งแนวดิ่ง)
     - stretch       : ยืดตัวยาวสุดเต็มแถวดิ่ง (ดีฟอลต์)
     - center        : จัดให้ตรงกลางแนวดิ่ง
     - flex-start    : แขวนไว้ขอบบนสุด
     - flex-end      : ห้อยไว้ขอบล่างสุด
  */
  align-items: center;
}`,possibleValues:[`justify-content: center|space-between|space-around|space-evenly`,`align-items: center|stretch|flex-start|flex-end`]},{tag:`Flex Grow & Shrink & Basis`,desc:`คุณสมบัติคุมขนาดเฉพาะส่วนบนแท็กกล่องลูกย่อยเพื่อยืดหดขยายขนาดให้เข้าสเปก Layout แถว`,snippet:`/* กล่องลูกหลักที่ต้องการให้ขยายยืดครองพื้นที่ว่างแนวนอนที่เหลือทั้งหมด */
.search-input-grow {
  flex-grow: 1;               /* ขยายเติมพื้นที่ว่าง (0 = ขนาดเดิม) */
}

/* กล่องลูกรองที่ไม่ต้องการให้เบราว์เซอร์บีบหดสเกลขนาดกว้างเมื่อจอแคบ */
.logo-fixed {
  flex-shrink: 0;             /* ล็อกความกว้างห้ามบีบหดเล็กลง */
  flex-basis: 120px;          /* กำหนดขนาดฐานเริ่มต้น */
}`,possibleValues:[`flex-grow: 1 (ยืดขยายเต็มที่ว่าง)`,`flex-shrink: 0 (ห้ามบีบหดกว้าง)`,`flex-basis: auto|100px`]},{tag:`CSS Grid Template Columns`,desc:`ออกแบบแบ่งห้องแถว Layout ตารางรูปแบบ 2 มิติอย่างสะดวกรวดเร็วโดยกำหนดจำนวนช่องคอลัมน์แนวนอนและขนาดเว้นห่าง`,snippet:`.grid-parent {
  display: grid;
  /* repeat(จำนวนช่อง, ขนาดกว้าง) | fr คือเศษส่วนแชร์พื้นที่อย่างเท่าเทียม */
  grid-template-columns: repeat(3, 1fr);  /* แบ่ง 3 คอลัมน์กว้างเท่ากันเท่าตัว */
  gap: 16px 20px;                         /* [ห่างแนวตั้ง] [ห่างแนวนอน] */
}`,possibleValues:[`grid-template-columns: repeat(3, 1fr)`,`grid-template-columns: 200px 1fr 200px`,`gap: 15px`]},{tag:`CSS Grid Areas Layout`,desc:`ขึ้นโครงสร้างหน้าแดชบอร์ดซับซ้อนตามชื่อตัวแปรที่วาดพิมพ์เขียวเอาไว้ (มัดคลาสลูกด้วยคำสั่ง grid-area)`,snippet:`/* 1. วาดโครงร่างแบ่งพื้นที่กล่องแม่ */
.dashboard-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
}

/* 2. ระบุบอกตำแหน่งกล่องลูกตามพื้นที่ที่วาดไว้ */
.nav-header { grid-area: header; }
.nav-sidebar { grid-area: sidebar; }
.panel-main { grid-area: content; }`,possibleValues:[`grid-template-areas: "a a" "b c"`,`grid-area: [area-name]`]},{tag:`Responsive Media Queries`,desc:`คำสั่งคุมสัญญลักษณ์ CSS เปลี่ยนสไตล์สี ความกว้าง เลย์เอาต์ ให้เหมาะสมตามประเภทขนาดความกว้างหน้าจอบราวเซอร์ในขณะนั้น`,snippet:`/* สไตล์ดีฟอลต์ (เช่น แสดงผลบนคอมพิวเตอร์หน้าจอกว้าง) */
.layout-wrapper { display: flex; }
.sidebar { width: 250px; }

/* สไตล์เมื่อเปิดดูบนโทรศัพท์มือถือหรือหน้าจอแคบกว่า 768px */
@media (max-width: 768px) {
  .layout-wrapper {
    flex-direction: column;   /* ปรับต่อแนวดิ่งแทนแนวนอน */
  }
  .sidebar {
    width: 100%;              /* ยืดกว้างเต็มจอ */
    display: none;            /* หรือลบซ่อนแถบข้างทิ้งเพื่อความเรียบร้อย */
  }
}`,possibleValues:[`@media (max-width: 768px) (มือถือ)`,`@media (max-width: 1024px) (แท็บเล็ต)`,`@media (min-width: 1200px) (จอใหญ่)`]},{tag:`CSS Grid Auto Responsive Layout`,desc:`จัดเรียงช่องกริดแบบยืดหด ปรับจำนวนคอลัมน์อัตโนมัติยามย่อขยายหน้าจอ โดยไม่ต้องเขียน Media Queries บังคับ`,snippet:`.gallery-responsive {
  display: grid;
  /* repeat(auto-fit, minmax(ความกว้างต่ำสุด, ความกว้างสูงสุด)) 
     - auto-fit: สั่งจัดจำแนกจำนวนคอลัมน์แชร์อัตโนมัติตามพื้นที่บราวเซอร์
     - minmax(200px, 1fr): บังคับการ์ดห้ามแคบกว่า 200px หากเหลือที่ให้ยืดเต็มที่
  */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}`,possibleValues:[`repeat(auto-fit, minmax(200px, 1fr))`,`repeat(auto-fill, minmax(150px, 1fr))`]}],tips:[{tag:`CSS Transitions (สลับนุ่มนวล)`,desc:`ตั้งค่าวาดแอนิเมชันให้เวลาเปลี่ยนสี ขยับ ปรับสไตล์ของกล่องดำเนินไปอย่างเรียบลื่นสโลว์โมชัน ปราศจากการกระตุกตา`,snippet:`.interactive-card {
  /* transition: [ชื่อสไตล์ที่จับ] [ระยะเวลาเล่น] [เส้นโค้งความเร็ว] [เวลาหน่วงเริ่มต้น]; */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* ค่าอัตราความเร็วเริ่มต้น (Timing Function):
     - linear      : วิ่งเร็วเสมอกันต้นจนจบ
     - ease        : เริ่มช้า -> เร็วกลาง -> ช้าช่วงท้าย (เนียนเป็นธรรมชาติสุด)
     - ease-in-out : เร่งกลางช้าหัวท้าย
  */
}`,possibleValues:[`transition: all 0.3s ease`,`transition: transform 0.2s, opacity 0.2s`,`transition-delay: 0.1s`]},{tag:`Keyframes Loop Animations (เคลื่อนไหวต่อเนื่อง)`,desc:`สร้างเนื้อเรื่องอนิเมชันให้ระบบขยับ ย่อขยาย สไลด์ เรืองแสง หมุนติ้ว ดำเนินการแบบวนลูปไม่จำกัด (infinite)`,snippet:`/* 1. วาดเรื่องราวการเปลี่ยนรูปทรงเป็นองศา */
@keyframes spin-loader {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 2. มัดเข้ากับองค์ประกอบและระบุสั่งเล่น */
.loading-spinner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #cbd5e1;
  border-top-color: #3b82f6;
  
  /* สั่งการขยับหมุนสปินอย่างสม่ำเสมอ ความเร็ว 1 วินาที วนซ้ำไม่มีสิ้นสุด */
  animation: spin-loader 1s linear infinite;
}`,possibleValues:[`animation: [keyframe-name] 2s ease infinite`,`animation-direction: alternate`,`animation-fill-mode: forwards`]},{tag:`Hover & Active Pseudo-classes`,desc:`สร้างความรู้สึกมีตัวตนเมื่อเมาส์สัมผัสปุ่ม: :hover (เมื่อเมาส์ไปจ่อทับ) และ :active (ปุ่มกดบุ๋มเมื่อนิ้วคลิกซ้ายสัมผัสค้าง)`,snippet:`.premium-btn {
  background-color: #3b82f6;
  color: white;
  transition: transform 0.2s, background-color 0.2s;
}

/* เมื่อผู้เรียนเอาเมาส์มาวางทับ */
.premium-btn:hover {
  background-color: #2563eb;  /* เปลี่ยนเป็นน้ำเงินเข้มขึ้น */
  transform: translateY(-2px); /* ลอยตัวขึ้นบนขยับ 2px */
}

/* เมื่อคลิกเมาส์ค้างยามสัมผัสจริง */
.premium-btn:active {
  transform: scale(0.95);      /* ย่อขนาดเล็กลงเหลือ 95% สร้างปุ่มยุบสมจริง */
}`,possibleValues:[`:hover (เมาส์ชี้จ่อ)`,`:active (คลิกเมาส์ค้าง)`,`:focus (ได้รับการโฟกัส)`,`:disabled (ถูกปิดใช้งาน)`]},{tag:`Focus Within state (ไฮไลต์ฟอร์ม)`,desc:`สเตทตรวจจับเมื่อมีอิลิเมนต์ย่อยภายในกล่องแม่ได้รับการโฟกัสหรือคลิกพิมพ์ (มักใช้ทำเอฟเฟกต์ไฟเรืองแสงส่องกรอบฟอร์มทั้งหมด)`,snippet:`/* เมื่อผู้ใช้คลิกพิมพ์ช่องอินพุตด้านใน ให้กล่องแม่เปลี่ยนสีขอบขึ้นเงาตาม */
.input-card-group:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}`,possibleValues:[`:focus-within (ตรวจคลาสลูกด้านในถูกโฟกัส)`]},{tag:`Pseudo-elements (::before & ::after)`,desc:`สร้างองค์ประกอบจำลองเพื่อวาดรูปทรงเสริมโดยไม่ต้องปะแท็กขยะใน HTML (จำเป็นต้องมีคำสั่ง content: "" ระบุคุณลักษณะเสมอ)`,snippet:`/* ทำปุ่มออนไลน์สีเขียวลอยนำหน้าคำว่า Online */
.status-badge::before {
  content: "";                 /* บังคับต้องประกาศสัญญลักษณ์ห้ามขาด */
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;   /* เม็ดสีเขียว */
  margin-right: 6px;
}`,possibleValues:[`::before (จำลองไว้ข้างหน้า)`,`::after (จำลองไว้ข้างหลัง)`,`content: "ข้อความ/รูป"`]},{tag:`Image Aspect-Ratio Cover`,desc:`คำสั่งแก้ปัญหารูปเบี้ยว ยืด โย้: บังคับการครอปตัดพิกเซลให้พอดีกรอบรูปภาพโดยรักษาอัตราส่วนดั้งเดิม (Aspect Ratio) สไตล์พรีเมียม`,snippet:`.post-media-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;           /* ครอปตัดภาพส่วนเกินออกและตรึงพิกเซลไม่ให้เบี้ยว */
  object-position: center;     /* ขยับจัดพิกัดดึงศูนย์กลางภาพโชว์ */
}`,possibleValues:[`object-fit: cover`,`object-fit: contain`,`object-fit: fill`,`object-position: center|top|bottom`]},{tag:`Glassmorphism Formula (สูตรกระจกฝ้า)`,desc:`สูตรสำเร็จทำดีไซน์การ์ดและเลย์เอาต์กระจกใสพรีเมียมสะท้อนขอบแก้วที่ใช้ใน UI สมัยใหม่ คล้ายกระจกสลัวเบลอฉากหลัง`,snippet:`.glass-card-premium {
  background: rgba(255, 255, 255, 0.08); /* พื้นหลังสีขาวโปร่งแสงจัดใส */
  backdrop-filter: blur(12px);          /* สั่งเบลอข้อมูลฉากหลังการ์ดสะท้อน */
  -webkit-backdrop-filter: blur(12px);
  
  border: 1px solid rgba(255, 255, 255, 0.15); /* ขอบบางสะท้อนประกายขอบแก้ว */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);  /* เงาเบาบางคุมมิติ */
}`,possibleValues:[`backdrop-filter: blur(8px)`,`background: rgba(0,0,0,0.4) (กระจกดำ)`,`-webkit-backdrop-filter: blur(...)`]},{tag:`CSS Transforms 2D / 3D`,desc:`คำสั่งปรับแต่งรูปร่างการแสดงผล: หมุน (rotate), ปรับอัตราส่วนย่อขยายขนาด (scale), และเลื่อนพิกัดตำแหน่งแกนราบดิ่ง (translate)`,snippet:`.floating-icon {
  /* transform: translate([แกน X], [แกน Y]) rotate([มุมองศา]) scale([สเกลซูม]); */
  transform: translate(-50%, -50%) rotate(45deg) scale(1.15);
}`,possibleValues:[`translate(x, y)`,`scale(1.2)`,`rotate(45deg)`,`skewX(10deg)`]}]},u=l[i].filter(e=>e.tag.toLowerCase().includes(n.toLowerCase())||e.desc.toLowerCase().includes(n.toLowerCase())||e.snippet.toLowerCase().includes(n.toLowerCase()));return(0,I.jsx)(`div`,{className:`cheat-sheet-overlay`,children:(0,I.jsxs)(`div`,{className:`cheat-sheet-card`,children:[(0,I.jsxs)(`div`,{className:`cheat-sheet-header`,children:[(0,I.jsxs)(`div`,{className:`header-title-area`,children:[(0,I.jsx)(`div`,{className:`title-icon`,children:(0,I.jsx)(me,{size:20})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{children:`คัมภีร์พัฒนาเว็บฉบับเจาะลึก (WebDev Comprehensive Handbook)`}),(0,I.jsx)(`p`,{children:`สารบัญรวมโครงร่างคีย์เวิร์ด HTML สไตล์ CSS บล็อก Layout และคำอธิบายพารามิเตอร์เชิงลึก`})]})]}),(0,I.jsx)(`button`,{className:`close-btn`,onClick:t,children:(0,I.jsx)(Oe,{size:20})})]}),(0,I.jsxs)(`div`,{className:`cheat-sheet-filters`,children:[(0,I.jsxs)(`div`,{className:`search-box-wrapper`,children:[(0,I.jsx)(Se,{size:16,className:`search-icon`}),(0,I.jsx)(`input`,{type:`text`,placeholder:`พิมพ์ตรวจหาคีย์เวิร์ดพารามิเตอร์ (เช่น: flex, float, meta, specificity, margin, border-radius)...`,value:n,onChange:e=>r(e.target.value),className:`search-input`}),n&&(0,I.jsx)(`button`,{onClick:()=>r(``),className:`clear-search`,children:(0,I.jsx)(Oe,{size:14})})]}),(0,I.jsxs)(`div`,{className:`cheat-sheet-tabs`,children:[(0,I.jsxs)(`button`,{onClick:()=>a(`html`),className:`filter-tab ${i===`html`?`active`:``}`,children:[`HTML Elements (`,l.html.length,`)`]}),(0,I.jsxs)(`button`,{onClick:()=>a(`css`),className:`filter-tab ${i===`css`?`active`:``}`,children:[`CSS Basics (`,l.css.length,`)`]}),(0,I.jsxs)(`button`,{onClick:()=>a(`layouts`),className:`filter-tab ${i===`layouts`?`active`:``}`,children:[`Layouts Flex & Grid (`,l.layouts.length,`)`]}),(0,I.jsxs)(`button`,{onClick:()=>a(`tips`),className:`filter-tab ${i===`tips`?`active`:``}`,children:[`Transforms & Effects (`,l.tips.length,`)`]})]})]}),(0,I.jsx)(`div`,{className:`cheat-sheet-body`,children:u.length===0?(0,I.jsx)(`div`,{className:`no-results`,children:(0,I.jsxs)(`p`,{children:[`ไม่พบผลลัพธ์ข้อมูลคู่มือที่ตรงกับการค้นหา: "`,n,`"`]})}):(0,I.jsx)(`div`,{className:`guide-grid`,children:u.map((e,t)=>(0,I.jsxs)(`div`,{className:`guide-card`,children:[(0,I.jsxs)(`div`,{className:`guide-card-header`,children:[(0,I.jsx)(`h4`,{children:e.tag}),(0,I.jsx)(`button`,{onClick:()=>c(e.snippet),className:`copy-snippet-btn`,title:`คัดลอกคำสั่งโค้ดนี้`,children:o===e.snippet?(0,I.jsxs)(`span`,{style:{color:`#10b981`,fontSize:`11px`,display:`flex`,alignItems:`center`,gap:`2px`,fontWeight:`bold`},children:[(0,I.jsx)(ne,{size:12}),` คัดลอกสำเร็จ`]}):(0,I.jsxs)(`span`,{style:{fontSize:`11px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,I.jsx)(de,{size:12}),` คัดลอกโค้ด`]})})]}),(0,I.jsx)(`p`,{className:`guide-desc`,children:e.desc}),(0,I.jsx)(`pre`,{className:`guide-snippet`,children:(0,I.jsx)(`code`,{children:e.snippet})}),e.possibleValues&&e.possibleValues.length>0&&(0,I.jsxs)(`div`,{className:`possible-values-hover`,children:[(0,I.jsx)(`div`,{className:`possible-values-title`,children:`ค่าที่เป็นไปได้ / ไวยากรณ์เพิ่มเติม:`}),(0,I.jsx)(`div`,{className:`possible-values-list`,children:e.possibleValues.map((e,t)=>(0,I.jsx)(`span`,{className:`possible-value-badge`,children:e},t))})]})]},t))})}),(0,I.jsx)(`div`,{className:`cheat-sheet-footer`,children:(0,I.jsx)(`span`,{children:`💡 เคล็ดลับการเรียนรู้: อ่านคู่มือในคอมเมนต์โค้ดสีเขียวเพื่อเรียนรู้นิยามความหมายของพารามิเตอร์แต่ละตำแหน่ง และคลิก "คัดลอกโค้ด" เพื่อนำไปลองรันในโปรแกรมจำลองได้ทันที!`})})]})})}var hn=[{category:`1. ตัวแปร & Scope (Variables & Scope)`,items:[{title:`var vs let vs const`,code:`// const: ค่าคงที่ ห้ามกำหนดค่าใหม่ (Reassign ไม่ได้)
const PI = 3.14159;

// let: ตัวแปรเปลี่ยนค่าได้ มีขอบเขตแบบ Block Scope { ... }
let count = 0;
count = count + 1;

// var: ขอบเขต Function Scope / มี Hoisting (ไม่แนะนำในโค้ดใหม่)
var name = "John";`,note:`ควรเริ่มต้นด้วยการใช้ const เสมอ หากต้องเปลี่ยนค่าในภายหลังให้ใช้ let หลีกเลี่ยงการใช้ var เพื่อป้องกันปัญหา Hoisting`},{title:`Template Literals (การต่อข้อความ)`,code:'const name = "Somchai";\nconst score = 95;\n// ใช้สัญลักษณ์ ` (Backtick) และ ${}\nconst message = `ยินดีด้วยคุณ ${name} สอบได้ ${score} คะแนน`;\nconst multiline = `บรรทัดที่ 1\nบรรทัดที่ 2\nบรรทัดที่ 3`;',note:"ช่วยให้ต่อข้อความกับตัวแปรได้ง่าย รองรับการขึ้นบรรทัดใหม่ และใส่ Expression คำนวณใน ${} ได้ทันที"},{title:`Data Types & typeof (การตรวจสอบชนิดข้อมูล)`,code:`typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (ข้อควรระวังใน JS!)
typeof [1, 2, 3]    // "object" (ใช้ Array.isArray() ตรวจ)
typeof { a: 1 }     // "object"
typeof function(){} // "function"`,note:`ตรวจ Array ให้ใช้ Array.isArray(arr) แทน typeof เพราะ typeof array จะคืนค่าเป็น 'object'`}]},{category:`2. ตัวดำเนินการ & ตรรกะ (Operators & Logic)`,items:[{title:`Strict Equality (=== vs ==)`,code:`5 == "5"   // true  (แปลงชนิดข้อมูลให้อัตโนมัติ - Loose)
5 === "5"  // false (ตรวจทั้งค่าและชนิดข้อมูล - Strict แนะนำให้ใช้เสมอ)
null == undefined  // true
null === undefined // false
0 == false         // true
0 === false        // false`,note:`ควรใช้ === และ !== เสมอเพื่อป้องกันข้อผิดพลาดที่ไม่คาดคิดจาก Type Coercion`},{title:`Ternary Operator (ย่อ if-else)`,code:`const age = 20;
// syntax: condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? "ผู้ใหญ่" : "เด็ก";

// ใช้งานซ้อนกัน (Chaining)
const score = 85;
const grade = score >= 80 ? "A" : score >= 70 ? "B" : "C";`,note:`เหมาะกับการกำหนดค่าตัวแปรหรือส่ง Prop ตามเงื่อนไขในบรรทัดเดียวได้อย่างกระชับ`},{title:`Logical Assignment (&&=, ||=, ??=)`,code:`let x = true;
x &&= 10; // ถ้า x เป็น truthy จะกำหนด x = 10

let y = "";
y ||= "ค่าดีฟอลต์"; // ถ้า y เป็น falsy ("", 0, false, null) จะกำหนดค่า

let z = null;
z ??= "ค่าเริ่มต้น"; // กำหนดค่าเฉพาะเมื่อเป็น null หรือ undefined`,note:`ช่วยย่อการตรวจสอบค่าว่างหรือค่าเริ่มต้นตามสไลด์ ch4 JavaScript หน้า 33-34`},{title:`Nullish Coalescing (??) vs OR (||)`,code:`const count = 0;
// || มอง 0, "", false เป็น Falsy ทั้งหมด
const res1 = count || 10; // ได้ 10 (อาจผิดพลาดถ้าเราต้องการเลข 0 จริงๆ)

// ?? มองเฉพาะ null และ undefined เท่านั้นที่เป็น Nullish
const res2 = count ?? 10; // ได้ 0 (ถูกต้อง!)`,note:`ใช้ ?? เมื่อค่าตัวเลข 0, ข้อความว่าง "", หรือ boolean false เป็นค่าที่ยอมรับได้และไม่ใช่กรณีว่าง`}]},{category:`3. อาร์เรย์ & ออบเจกต์ (Arrays & Objects)`,items:[{title:`Array Methods พื้นฐาน`,code:`const fruits = ["Apple", "Banana"];

fruits.push("Orange");  // เพิ่มท้าย -> ["Apple", "Banana", "Orange"]
fruits.pop();           // ลบท้าย   -> ["Apple", "Banana"]
fruits.unshift("Mango");// เพิ่มหัว  -> ["Mango", "Apple", "Banana"]
fruits.shift();         // ลบหัว    -> ["Apple", "Banana"]

const sliced = fruits.slice(0, 1); // ตัดช่วง ไม่แก้ตัวเดิม
fruits.splice(1, 1, "Cherry");     // ลบ/แทนที่ แก้ตัวแปรเดิม`,note:`slice() คืนค่าอาร์เรย์ใหม่โดยไม่แก้ไขของเดิม ส่วน splice() แก้ไขอาร์เรย์เดิมโดยตรง (Mutate)`},{title:`Array Iteration (map, filter, reduce, forEach)`,code:`const numbers = [1, 2, 3, 4, 5];

// map: แปลงทุกตัว คืน Array ใหม่ขนาดเท่าเดิม
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: กรองเฉพาะตัวที่ผ่านเงื่อนไข
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: รวมค่าเป็นผลลัพธ์เดียว
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// find: ค้นหาตัวแรกที่ตรงเงื่อนไข
const found = numbers.find(n => n > 3); // 4`,note:`map, filter, reduce เป็นหัวใจสำคัญของการเขียน Functional JavaScript และนิยมใช้อย่างมากใน React`},{title:`Object & JSON (การแปลงข้อมูล)`,code:`const student = {
  name: "Somchai",
  age: 20,
  skills: ["HTML", "JS"]
};

// เข้าถึงข้อมูล
console.log(student.name);        // "Somchai" (Dot notation)
console.log(student["age"]);      // 20 (Bracket notation)

// แปลง Object <-> JSON String
const jsonString = JSON.stringify(student);
const parsedObj  = JSON.parse(jsonString);`,note:`JSON.stringify ใช้เตรียมข้อมูลก่อนบันทึกลง localStorage หรือส่ง API ส่วน JSON.parse แปลงสตริงกลับเป็น Object`},{title:`Object Keys, Values & Entries`,code:`const user = { name: "Somchai", role: "Admin", score: 95 };

Object.keys(user);   // ["name", "role", "score"]
Object.values(user); // ["Somchai", "Admin", 95]
Object.entries(user);// [["name", "Somchai"], ["role", "Admin"], ["score", 95]]

// วนลูป Object ด้วย Object.entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}`,note:`ใช้ Object.entries() ร่วมกับ Array Destructuring เพื่อวนลูปอ่านทั้งคีย์และค่าของ Object ได้อย่างสะดวก`}]},{category:`4. ฟังก์ชัน & Scope (Functions & Scope)`,items:[{title:`Function Declaration vs Arrow Function`,code:`// 1. Function Declaration (มี Hoisting เรียกก่อนประกาศได้)
function add(a, b) {
  return a + b;
}

// 2. Arrow Function (กระชับ, ไม่มี this เป็นของตนเอง)
const multiply = (a, b) => a * b;

// 3. Arrow Function บรรทัดเดียว คืนค่า Object ต้องครอบ ()
const makeUser = (name) => ({ name, active: true });`,note:`Arrow Function นิยมใช้เขียนเป็น Callback หรือเมธอดใน map/filter เพราะสั้นกระชับและไม่ผูก this ใหม่`},{title:`Default Parameters & Rest Parameters`,code:`// Default Parameters: กำหนดค่าเริ่มต้นเมื่อไม่มีการส่ง argument
function greet(name = "ผู้ใช้งาน", greeting = "สวัสดี") {
  return \`\${greeting}, คุณ\${name}\`;
}

// Rest Parameters: รับพารามิเตอร์ไม่จำกัดจำนวนเป็น Array
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10`,note:`Rest Parameter (...args) ต้องอยู่ตำแหน่งสุดท้ายเสมอในลำดับพารามิเตอร์ของฟังก์ชัน`},{title:`Callback Functions & Higher-Order Functions`,code:`// Callback Function คือฟังก์ชันที่ส่งเป็น argument ให้ฟังก์ชันอื่น
function processData(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

processData(["A", "B", "C"], (val) => {
  console.log("กำลังประมวลผล:", val);
});`,note:`addEventListener และ Array methods ทุกตัว ล้วนทำงานโดยใช้ Callback Function เป็นพื้นฐาน`}]},{category:`5. DOM Manipulation & Events`,items:[{title:`การค้นหา HTML Elements (DOM Selectors)`,code:`// 1. ค้นหาด้วย ID (รวดเร็ว คืนค่า Element เดียว)
const title = document.getElementById("title");

// 2. ค้นหาด้วย CSS Selector (คืนค่า Element แรกที่ตรง)
const card = document.querySelector(".card-item");

// 3. ค้นหาทั้งหมดที่ตรง Selector (คืนค่า NodeList)
const allButtons = document.querySelectorAll("button.btn");
allButtons.forEach(btn => btn.classList.add("ready"));`,note:`querySelector และ querySelectorAll รองรับไวยากรณ์ CSS Selector ทุกรูปแบบ ทำให้ยืดหยุ่นสูงมาก`},{title:`การเปลี่ยนเนื้อหาและสไตล์ (Content & Classes)`,code:`const el = document.getElementById("demo");

// จัดการข้อความ/HTML
el.textContent = "ข้อความธรรมดา (ปลอดภัยจาก XSS)";
el.innerHTML = "<strong>ข้อความเน้นหนา</strong>";

// จัดการ CSS Styles (camelCase)
el.style.color = "blue";
el.style.backgroundColor = "#f1f5f9";
el.style.display = "flex";

// จัดการ Class (แนะนำมากกว่าการเขียน style ตรงๆ)
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open"); // สลับเปิด-ปิด
el.classList.contains("active"); // true / false`,note:`ใช้ textContent แทน innerHTML เสมอเมื่อแสดงข้อมูลจากผู้ใช้เพื่อป้องกันช่องโหว่ด้านความปลอดภัย XSS`},{title:`Event Listener & Form Validation`,code:`const btn = document.getElementById("myBtn");
btn.addEventListener("click", (event) => {
  console.log("ปุ่มถูกคลิก!", event.target);
});

// ดักจับฟอร์มไม่ให้รีเฟรชหน้าเว็บ
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // สำคัญมาก! ป้องกัน Browser Refresh
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("กรุณากรอกชื่อผู้ใช้!");
  }
});`,note:`e.preventDefault() จำเป็นอย่างยิ่งในการทำ Form Validation ใน JavaScript สมัยใหม่`},{title:`การสร้างและลบโหนด (Element CRUD)`,code:`// สร้าง Element ใหม่
const li = document.createElement("li");
li.textContent = "รายการใหม่";
li.className = "item";

// เพิ่มเข้าสู่ DOM Tree
const list = document.getElementById("my-list");
list.appendChild(li); // ต่อท้าย
list.prepend(li);     // แทรกหัวแถว

// ลบ Element
li.remove();`,note:`document.createElement ร่วมกับ appendChild คือหัวใจของการสร้าง Dynamic UI เช่น Todo List หรือ Shopping Cart`},{title:`DOM Tree Traversal (การเข้าถึงโหนดข้างเคียง)`,code:`const btn = document.querySelector(".delete-btn");

const parentCard = btn.parentElement;        // โหนดแม่
const closestBox = btn.closest(".card-box"); // ค้นหาบรรพบุรุษที่ตรง selector
const nextSibling = btn.nextElementSibling;  // โหนดพี่น้องถัดไป
const firstChild  = parentCard.firstElementChild; // โหนดย่อยตัวแรก`,note:`element.closest(selector) มีประโยชน์มากใน Event Delegation เพื่อหาการ์ดแม่ที่ครอบปุ่มคลิกอยู่`}]},{category:`6. คีย์เวิร์ด this และการผูกค่า (this & Binding)`,items:[{title:`คีย์เวิร์ด this ในบริบทต่างๆ`,code:`// 1. ใน Object Method: this ชี้ไปยังตัว Object ที่เรียก
const person = {
  name: "Somchai",
  greet() {
    return \`สวัสดี \${this.name}\`;
  }
};
person.greet(); // "สวัสดี Somchai"

// 2. ใน Arrow Function: ไม่มี this เป็นของตนเอง (จำค่าจากสโคปภายนอก)
const badUser = {
  name: "Alex",
  greet: () => this.name // ไม่แนะนำ! this จะชี้ window/undefined
};`,note:`ห้ามใช้ Arrow Function สำหรับ Object Method ที่ต้องอ้างอิง this ของตัวออบเจกต์นั้นๆ`},{title:`Explicit Binding: call, apply, bind`,code:`function introduce(title, country) {
  return \`\${title} \${this.name} มาจาก \${country}\`;
}
const user = { name: "Somchai" };

// .call(): ส่งอาร์กิวเมนต์แบบแยกตัวคอมมา รันทันที
introduce.call(user, "คุณ", "ไทย");

// .apply(): ส่งอาร์กิวเมนต์เป็น Array รันทันที
introduce.apply(user, ["นาย", "ไทย"]);

// .bind(): คืนเป็นฟังก์ชันใหม่พร้อมใช้งานภายหลัง
const boundFn = introduce.bind(user, "อ.");
boundFn("ไทย");`,note:`bind() มักใช้เมื่อต้องการส่งฟังก์ชันเป็น Callback ให้ event listener โดยที่ยังคงค่า this ที่ต้องการไว้`}]},{category:`7. Web Storage & Timers`,items:[{title:`Web Storage API (localStorage & sessionStorage)`,code:`// บันทึกข้อมูล (รับเฉพาะ string)
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("profile", JSON.stringify({ theme: "dark", score: 100 }));

// อ่านข้อมูล
const username = localStorage.getItem("username");
const profile = JSON.parse(localStorage.getItem("profile"));

// ลบข้อมูล
localStorage.removeItem("username");
localStorage.clear(); // ลบทั้งหมดในโดเมนนี้`,note:`localStorage ข้อมูลคงอยู่ถาวรแม้ปิดบราวเซอร์ ส่วน sessionStorage ข้อมูลจะหายไปเมื่อปิดแท็บ`},{title:`Timers: setTimeout & setInterval`,code:`// 1. setTimeout: หน่วงเวลา 2 วินาทีแล้วทำงานครั้งเดียว
const timeoutId = setTimeout(() => {
  console.log("ครบ 2 วินาที!");
}, 2000);
clearTimeout(timeoutId); // สั่งยกเลิกก่อนเวลา

// 2. setInterval: ทำงานซ้ำทุก 1 วินาที
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("วินาทีที่:", count);
  if (count >= 5) clearInterval(intervalId); // หยุดเมื่อครบ 5
}, 1000);`,note:`เมื่อใช้งาน Timer อย่าลืมเก็บ ID ไว้เรียก clearTimeout / clearInterval เสมอ เพื่อป้องกัน Memory Leak`},{title:`HTML5 Drag and Drop API`,code:`// ใน HTML กำหนด: <div draggable="true" id="item1">ลากฉัน</div>
const item = document.getElementById("item1");
const dropZone = document.getElementById("dropzone");

item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // บังคับใส่เพื่อให้ยอมรับการ Drop ได้!
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  dropZone.appendChild(document.getElementById(id));
});`,note:`สำคัญมาก: ต้องมี e.preventDefault() ใน event dragover เสมอ มิฉะนั้น event drop จะไม่ทำงาน`}]},{category:`8. ไวยากรณ์ทางลัดสมัยใหม่ & Async (ES6+ & Async)`,items:[{title:`Destructuring Assignment (การกระจายค่า)`,code:`// 1. Object Destructuring
const student = { name: "Somchai", major: "CS", gpa: 3.75 };
const { name, gpa, country = "Thailand" } = student;
console.log(name, gpa, country); // "Somchai", 3.75, "Thailand"

// 2. Array Destructuring
const rgb = [255, 128, 0];
const [r, g, b] = rgb;

// 3. Swap ค่าตัวแปรโดยไม่ต้องมี temp
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1`,note:`ช่วยให้เขียนโค้ดกระชับขึ้นและอ่านง่าย ไม่ต้องเขียน user.name, user.gpa ซ้ำซ้อน`},{title:`Spread & Rest Operators (...)`,code:`// 1. Spread ใน Object (โคลนและแก้ไข/เพิ่มค่า)
const base = { theme: "dark", lang: "th" };
const updated = { ...base, lang: "en", autoSave: true };

// 2. Spread ใน Array (รวมชุดข้อมูล)
const frontend = ["HTML", "CSS", "JS"];
const fullstack = [...frontend, "Node.js", "MongoDB"];

// 3. รวม Object หลายตัว
const merged = { ...objA, ...objB };`,note:`Spread (...) ช่วยโคลน Array หรือ Object แบบ Shallow Copy ได้อย่างรวดเร็วและปลอดภัยจาก Mutation`},{title:`Optional Chaining (?.) & Property Shorthand`,code:`const profile = {
  user: { name: "Suda" }
  // contact ยังไม่มี
};

// ?. เข้าถึงคุณสมบัติซ้อนลึกอย่างปลอดภัย (ไม่เกิด TypeError Uncaught)
const email = profile.contact?.email; // ได้ undefined อย่างปลอดภัย

// Property & Method Shorthand
const title = "JS Handbook";
const price = 450;
const book = {
  title, // เท่ากับ title: title
  price,
  getInfo() { return \`\${this.title} ฿\${this.price}\`; }
};`,note:`?. มีประโยชน์มากเมื่ออ่านข้อมูลจาก API ที่บางฟิลด์อาจเป็น null หรือไม่มีอยู่จริง`},{title:`Async / Await & Fetch API (การทำงานแบบ Asynchronous)`,code:`// ฟังก์ชันแบบ Async รองรับการ await งานที่ใช้เวลา
async function fetchUserProfile(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`เกิดข้อผิดพลาด HTTP: \${response.status}\`);
    }
    const data = await response.json();
    console.log("ข้อมูลที่ได้:", data);
    return data;
  } catch (error) {
    console.error("เชื่อมต่อล้มเหลว:", error.message);
  }
}`,note:`ใช้ async/await ร่วมกับ try...catch เพื่อจัดการข้อผิดพลาดและทำให้โค้ดแบบ Asynchronous อ่านง่ายเหมือนโค้ดปกติ`}]}];function gn({isOpen:e,onClose:t}){let[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(`all`),[o,s]=(0,_.useState)(null);(0,_.useEffect)(()=>{let n=e=>{e.key===`Escape`&&t()};return e&&window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]);let c=[`const/let`,`Ternary`,`Array.map`,`JSON`,`addEventListener`,`preventDefault`,`this`,`localStorage`,`setTimeout`,`Destructuring`,`async/await`],l=(e,t)=>{navigator.clipboard.writeText(e),s(t),setTimeout(()=>s(null),1800)},u=(0,_.useMemo)(()=>{let e=n.trim().toLowerCase();return hn.map((t,n)=>{if(i!==`all`&&i!==n)return null;let r=t.items.filter(n=>!e||n.title.toLowerCase().includes(e)||n.code.toLowerCase().includes(e)||n.note.toLowerCase().includes(e)||t.category.toLowerCase().includes(e));return r.length===0?null:{...t,catIdx:n,items:r}}).filter(Boolean)},[n,i]),d=(0,_.useMemo)(()=>u.reduce((e,t)=>e+t.items.length,0),[u]),f=(0,_.useMemo)(()=>hn.reduce((e,t)=>e+t.items.length,0),[]);return e?(0,I.jsx)(`div`,{className:`js-cheat-overlay cheatsheet-overlay`,onClick:t,role:`dialog`,"aria-modal":`true`,children:(0,I.jsxs)(`div`,{className:`js-cheat-card cheatsheet-modal`,onClick:e=>e.stopPropagation(),children:[(0,I.jsxs)(`div`,{className:`js-cheat-header cheatsheet-header`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-title-group`,children:[(0,I.jsx)(`div`,{className:`js-cheat-badge`,children:(0,I.jsx)(`span`,{className:`js-badge-text`,children:`JS`})}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,flexWrap:`wrap`},children:[(0,I.jsx)(`h2`,{className:`js-cheat-title`,children:`คู่มือสรุปไวยากรณ์ JavaScript`}),(0,I.jsx)(`span`,{className:`js-cheat-tag-es6`,children:`ES6+ & WebDev Handbook`})]}),(0,I.jsx)(`p`,{className:`js-cheat-subtitle`,children:`รวบรวมคำสั่งสำคัญ ไวยากรณ์ลัด โค้ดตัวอย่าง และคำอธิบายเชิงลึกสำหรับประกอบการเรียนรู้`})]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,I.jsx)(`span`,{className:`js-cheat-esc-hint`,title:`กดแป้น Esc เพื่อปิด`,children:(0,I.jsx)(`kbd`,{children:`Esc`})}),(0,I.jsx)(`button`,{onClick:t,className:`js-cheat-close-btn icon-btn`,title:`ปิดหน้าต่าง (Esc)`,children:(0,I.jsx)(Oe,{size:20})})]})]}),(0,I.jsxs)(`div`,{className:`js-cheat-toolbar cheatsheet-search-bar`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-search-wrapper`,children:[(0,I.jsx)(Se,{size:18,className:`js-cheat-search-icon`}),(0,I.jsx)(`input`,{type:`text`,placeholder:`ค้นหาคำสั่ง เช่น localStorage, map, addEventListener, this, destructuring, arrow...`,value:n,onChange:e=>r(e.target.value),className:`js-cheat-search-input`,autoFocus:!0}),n&&(0,I.jsx)(`button`,{onClick:()=>r(``),className:`js-cheat-clear-btn`,title:`ล้างคำค้นหา`,children:(0,I.jsx)(Oe,{size:15})}),(0,I.jsx)(`div`,{className:`js-cheat-search-count`,children:n?`พบ ${d} คำสั่ง`:`ทั้งหมด ${f} คำสั่ง`})]}),(0,I.jsxs)(`div`,{className:`js-cheat-quick-tags`,children:[(0,I.jsx)(`span`,{className:`js-cheat-quick-label`,children:`คีย์เวิร์ดด่วน:`}),c.map(e=>(0,I.jsx)(`button`,{className:`js-cheat-quick-tag-btn ${n===e?`active`:``}`,onClick:()=>{r(e===n?``:e),a(`all`)},children:e},e))]}),(0,I.jsxs)(`div`,{className:`js-cheat-tabs`,children:[(0,I.jsxs)(`button`,{onClick:()=>a(`all`),className:`js-cheat-tab ${i===`all`?`active`:``}`,children:[(0,I.jsx)(`span`,{children:`📌 ทั้งหมด`}),(0,I.jsx)(`span`,{className:`js-cheat-tab-count`,children:f})]}),hn.map((e,t)=>(0,I.jsxs)(`button`,{onClick:()=>a(t),className:`js-cheat-tab ${i===t?`active`:``}`,children:[(0,I.jsx)(`span`,{children:e.category}),(0,I.jsx)(`span`,{className:`js-cheat-tab-count`,children:e.items.length})]},t))]})]}),(0,I.jsxs)(`div`,{className:`js-cheat-body cheatsheet-body`,children:[u.map(e=>(0,I.jsxs)(`div`,{className:`js-cheat-category-block cheatsheet-category-section`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-category-header`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-category-header-title`,children:[(0,I.jsx)(F,{size:17,className:`text-yellow-500`}),(0,I.jsx)(`h3`,{className:`category-title`,children:e.category})]}),(0,I.jsxs)(`span`,{className:`js-cheat-category-badge`,children:[e.items.length,` คำสั่ง`]})]}),(0,I.jsx)(`div`,{className:`js-cheat-grid cheatsheet-grid`,children:e.items.map((t,n)=>{let r=`${e.catIdx}-${n}`,i=o===r;return(0,I.jsxs)(`div`,{className:`js-cheat-item-card cheatsheet-card`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-item-header card-header`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-item-title-wrapper`,children:[(0,I.jsx)(`span`,{className:`js-cheat-item-dot`}),(0,I.jsx)(`h4`,{className:`js-cheat-item-title card-title`,children:t.title})]}),(0,I.jsx)(`button`,{onClick:()=>l(t.code,r),className:`js-cheat-copy-btn copy-btn ${i?`copied`:``}`,title:`คัดลอกโค้ดนี้`,children:i?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ne,{size:14,className:`text-green-500`}),(0,I.jsx)(`span`,{children:`คัดลอกแล้ว!`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(de,{size:14}),(0,I.jsx)(`span`,{children:`คัดลอก`})]})})]}),(0,I.jsxs)(`div`,{className:`js-cheat-code-container`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-code-bar`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-window-dots`,children:[(0,I.jsx)(`span`,{className:`dot red`}),(0,I.jsx)(`span`,{className:`dot yellow`}),(0,I.jsx)(`span`,{className:`dot green`})]}),(0,I.jsx)(`span`,{className:`js-cheat-lang-badge`,children:`javascript`})]}),(0,I.jsx)(`pre`,{className:`js-cheat-code-pre code-block`,children:(0,I.jsx)(`code`,{children:t.code})})]}),(0,I.jsxs)(`div`,{className:`js-cheat-note-box`,children:[(0,I.jsx)(`div`,{className:`js-cheat-note-icon`,children:(0,I.jsx)(_e,{size:15})}),(0,I.jsx)(`p`,{className:`js-cheat-note-text note-text`,children:t.note})]})]},n)})})]},e.catIdx)),u.length===0&&(0,I.jsxs)(`div`,{className:`js-cheat-empty empty-search`,children:[(0,I.jsx)(`div`,{className:`js-cheat-empty-icon`,children:(0,I.jsx)(Se,{size:36})}),(0,I.jsx)(`h4`,{className:`js-cheat-empty-title`,children:`ไม่พบคำสั่งที่ตรงกับการค้นหา`}),(0,I.jsxs)(`p`,{className:`js-cheat-empty-desc`,children:[`ไม่พบคำสั่งหรือคีย์เวิร์ดที่ตรงกับ `,(0,I.jsxs)(`strong`,{children:[`"`,n,`"`]})]}),(0,I.jsx)(`div`,{className:`js-cheat-empty-actions`,children:(0,I.jsx)(`button`,{onClick:()=>{r(``),a(`all`)},className:`js-cheat-reset-btn`,children:`ล้างตัวกรองและแสดงทั้งหมด`})})]})]}),(0,I.jsxs)(`div`,{className:`js-cheat-footer`,children:[(0,I.jsxs)(`div`,{className:`js-cheat-footer-tip`,children:[(0,I.jsx)(we,{size:15,className:`text-yellow-500`}),(0,I.jsxs)(`span`,{children:[`💡 `,(0,I.jsx)(`strong`,{children:`เคล็ดลับ:`}),` คลิกปุ่ม `,(0,I.jsx)(`em`,{children:`"คัดลอก"`}),` เพื่อนำโค้ดไปทดลองรันใน Editor หรือกด `,(0,I.jsx)(`strong`,{children:`Esc`}),` เพื่อปิดหน้าต่าง`]})]}),(0,I.jsxs)(`div`,{className:`js-cheat-footer-stat`,children:[`ครอบคลุม `,f,` ไวยากรณ์ใน `,hn.length,` หมวดหมู่`]})]})]})}):null}function _n(){let[e,t]=(0,_.useState)(()=>localStorage.getItem(`webdev-theme`)||`dark`),[n,r]=(0,_.useState)(()=>localStorage.getItem(`webdev-course`)||`js`),[i,a]=(0,_.useState)(`learn`),[o,s]=(0,_.useState)(()=>n===`js`?`js-intro-display`:`html-structure`),[c,l]=(0,_.useState)(()=>n===`js`?`js`:`html`),[u,d]=(0,_.useState)(`live`),[f,p]=(0,_.useState)(()=>{let e=n===`js`?`webdev-code-cache-js`:`webdev-code-cache`,t=localStorage.getItem(e);return t?JSON.parse(t):{}}),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[x,S]=(0,_.useState)(``),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[ee,k]=(0,_.useState)(()=>{let e=n===`js`?`webdev-progress-js`:`webdev-progress`,t=localStorage.getItem(e);return t?JSON.parse(t):{}}),[A,ne]=(0,_.useState)(()=>typeof window<`u`?window.innerWidth>=1024:!0),[re,ie]=(0,_.useState)(`instruction`),[j,M]=(0,_.useState)(()=>typeof window<`u`&&window.innerWidth<1024);(0,_.useEffect)(()=>{let e=()=>{let e=window.innerWidth<1024;M(e),e&&ne(!1)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let[ae,se]=(0,_.useState)(50),[ce,ue]=(0,_.useState)(40),[de,me]=(0,_.useState)(!1),[he,_e]=(0,_.useState)(!1),[ye,Se]=(0,_.useState)(14),[Ce,Te]=(0,_.useState)(!1),P=n===`js`?{lessons:b.lessons,challenges:b.projects,appliedExams:b.appliedExams||[]}:{...y,appliedExams:[]},F=P.lessons.find(e=>e.id===o)||P.challenges.find(e=>e.id===o)||P.appliedExams&&P.appliedExams.find(e=>e.id===o)||P.lessons[0],De=P.challenges.some(e=>e.id===o),Oe=P.appliedExams?.some(e=>e.id===o),ke=e=>{if(e===n)return;r(e),localStorage.setItem(`webdev-course`,e);let t=e===`js`?`webdev-code-cache-js`:`webdev-code-cache`,i=localStorage.getItem(t);p(i?JSON.parse(i):{});let o=e===`js`?`webdev-progress-js`:`webdev-progress`,c=localStorage.getItem(o);k(c?JSON.parse(c):{}),s(e===`js`?`js-intro-display`:`html-structure`),l(e===`js`?`js`:`html`),a(`learn`)};(0,_.useEffect)(()=>{let t=window.document.documentElement;e===`dark`?t.classList.add(`dark`):t.classList.remove(`dark`),localStorage.setItem(`webdev-theme`,e)},[e]),(0,_.useEffect)(()=>{f[o]?(h(f[o].html||``),v(f[o].css||``),S(f[o].js||``)):(h(F.starterHtml||``),v(F.starterCss||``),S(F.starterJs||``)),w(null),E(!1),O(!1),d(`live`),F&&F.id&&F.id.startsWith(`exam-`)?l(`html`):n===`js`?l(`js`):F&&F.category&&F.category.includes(`HTML`)?l(`html`):l(`css`)},[o,n]),(0,_.useEffect)(()=>{if(!m&&!g&&!x)return;let e={...f,[o]:{html:m,css:g,js:x}};p(e);let t=n===`js`?`webdev-code-cache-js`:`webdev-code-cache`;localStorage.setItem(t,JSON.stringify(e))},[m,g,x]);let Ne=e=>{me(!0),e.preventDefault()},Pe=e=>{_e(!0),e.preventDefault()};(0,_.useEffect)(()=>{if(!de)return;let e=e=>{let t=document.querySelector(`.app-workspace`);if(!t)return;let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*100;se(Math.max(20,Math.min(80,r)))},t=()=>me(!1);return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t)}},[de]),(0,_.useEffect)(()=>{if(!he)return;let e=e=>{let t=document.querySelector(`.left-work-panel`);if(!t)return;let n=t.getBoundingClientRect(),r=(e.clientY-n.top)/n.height*100;ue(Math.max(15,Math.min(85,r)))},t=()=>_e(!1);return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t)}},[he]);let Fe=()=>{t(e===`light`?`dark`:`light`)},Ie=()=>{if(window.confirm(`คุณต้องการล้างความคืบหน้าการเรียนและรีเซ็ตโค้ดของคอร์ส ${n===`js`?`JavaScript`:`HTML/CSS`} ทั้งหมดใช่หรือไม่?`)){let e=n===`js`?`webdev-code-cache-js`:`webdev-code-cache`,t=n===`js`?`webdev-progress-js`:`webdev-progress`;localStorage.removeItem(e),localStorage.removeItem(t),p({}),k({});let r=P.lessons.find(e=>e.id===o)||P.challenges.find(e=>e.id===o)||P.appliedExams&&P.appliedExams.find(e=>e.id===o);r&&(h(r.starterHtml||``),v(r.starterCss||``),S(r.starterJs||``)),w(null),E(!1),alert(`รีเซ็ตข้อมูลคอร์สเรียบร้อยแล้ว!`)}},Le=()=>{if(window.confirm(`คุณต้องการรีเซ็ตโค้ดของบทเรียนนี้กลับไปเป็นค่าเริ่มต้นใช่หรือไม่?`)){h(F.starterHtml||``),v(F.starterCss||``),S(F.starterJs||``),w(null),E(!1);let e={...f};delete e[o],p(e);let t=n===`js`?`webdev-code-cache-js`:`webdev-code-cache`;localStorage.setItem(t,JSON.stringify(e))}},Re=()=>{let e=new Blob([m],{type:`text/html;charset=utf-8;`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`index.html`,document.body.appendChild(n),n.click(),document.body.removeChild(n);let r=new Blob([g],{type:`text/css;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);if(a.href=i,a.download=`style.css`,document.body.appendChild(a),a.click(),document.body.removeChild(a),x){let e=new Blob([x],{type:`text/javascript;charset=utf-8;`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`script.js`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}},ze=async()=>{if(!F||typeof F.validation!=`function`)return;let e=document.querySelector(`iframe[title="Live Preview"]`)||document.querySelector(`iframe[title="Live Preview Overlap"]`),t=null,r=null;if(e)try{t=e.contentDocument||e.contentWindow?.document}catch{t=null}if(!t||!t.body)try{r=document.createElement(`iframe`),r.style.cssText=`position:absolute;width:0;height:0;border:0;visibility:hidden;pointer-events:none;`,r.sandbox=`allow-scripts allow-same-origin`,document.body.appendChild(r);let e=r.contentDocument||r.contentWindow.document;e.open(),e.write(`<!DOCTYPE html><html><head><style>${g}</style></head><body>${m}<script>${x}<\/script></body></html>`),e.close(),t=e}catch(e){console.warn(`Fallback iframe error, attempting DOMParser:`,e);try{t=new DOMParser().parseFromString(`<!DOCTYPE html><html><head><style>${g}</style></head><body>${m}</body></html>`,`text/html`)}catch{}}if(!t){if(r)try{document.body.removeChild(r)}catch{}w(`เกิดข้อผิดพลาดในการโหลดระบบแสดงผล กรุณาลองใหม่อีกครั้ง`);return}try{let e=await F.validation(t,g,x);if(e===!0){w(null),E(!0);let e={...ee,[o]:!0};k(e);let t=n===`js`?`webdev-progress-js`:`webdev-progress`;localStorage.setItem(t,JSON.stringify(e)),fn({particleCount:150,spread:80,origin:{y:.6},colors:[`#eab308`,`#3b82f6`,`#10b981`,`#f43f5e`]}),setTimeout(()=>{O(!0)},600)}else w(e),E(!1)}catch(e){console.error(e),w(`ตรวจพบข้อผิดพลาดในโค้ดของคุณ: `+e.message),E(!1)}finally{if(r)try{document.body.removeChild(r)}catch{}}},Be=()=>{let e=[...P.lessons,...P.challenges,...P.appliedExams||[]],t=e.findIndex(e=>e.id===o);if(t!==-1&&t<e.length-1){let n=e[t+1];s(n.id)}O(!1)},Ve=()=>{d(`target`),j&&ie(`preview`)},He=P.lessons.length+P.challenges.length+(P.appliedExams?P.appliedExams.length:0),Ue=Object.keys(ee).length,We=He>0?Math.round(Ue/He*100):0;return(0,I.jsxs)(`div`,{className:`app-container ${de?`is-dragging-h`:``} ${he?`is-dragging-v`:``}`,children:[(0,I.jsxs)(`header`,{className:`app-header`,children:[(0,I.jsxs)(`div`,{className:`logo-container`,children:[(0,I.jsx)(`button`,{onClick:()=>ne(!A),className:`icon-btn`,style:{marginRight:`6px`},title:A?`ซ่อนเมนูข้าง`:`แสดงเมนูข้าง`,"aria-label":`Toggle Sidebar`,children:(0,I.jsx)(ve,{size:18})}),(0,I.jsx)(`div`,{className:`logo-badge-icon`,style:{background:n===`js`?`#fef08a`:`#dbeafe`,color:n===`js`?`#ca8a04`:`#2563eb`},children:n===`js`?(0,I.jsx)(le,{size:20}):(0,I.jsx)(te,{size:20})}),(0,I.jsxs)(`div`,{className:`logo-text-group`,children:[(0,I.jsx)(`h1`,{className:`logo-text`,children:n===`js`?`JavaScript Academy`:`WebDev Academy`}),(0,I.jsx)(`span`,{className:`logo-subtitle`,children:n===`js`?`เรียนรู้ & ฝึกควิซ JS Interactive`:`HTML & CSS Interactive Learning`})]})]}),(0,I.jsxs)(`div`,{className:`header-center`,children:[(0,I.jsxs)(`div`,{className:`course-switcher-pill`,children:[(0,I.jsxs)(`button`,{onClick:()=>ke(`js`),className:`course-btn ${n===`js`?`active js`:``}`,children:[(0,I.jsx)(`span`,{children:`🚀 JavaScript`}),(0,I.jsx)(`span`,{className:`course-badge`,children:`ใหม่`})]}),(0,I.jsx)(`button`,{onClick:()=>ke(`css`),className:`course-btn ${n===`css`?`active css`:``}`,children:(0,I.jsx)(`span`,{children:`🎨 HTML & CSS`})})]}),n===`js`&&(0,I.jsxs)(`div`,{className:`mode-switcher-pill`,children:[(0,I.jsxs)(`button`,{onClick:()=>a(`learn`),className:`mode-tab-btn ${i===`learn`?`active`:``}`,children:[(0,I.jsx)(ge,{size:14}),(0,I.jsx)(`span`,{children:`บทเรียน & แล็บ`})]}),(0,I.jsxs)(`button`,{onClick:()=>a(`quiz`),className:`mode-tab-btn ${i===`quiz`?`active`:``}`,children:[(0,I.jsx)(oe,{size:14}),(0,I.jsx)(`span`,{children:`ห้องฝึกควิซ`}),(0,I.jsx)(`span`,{className:`quiz-badge-pill`,children:b.quizBank.length})]})]})]}),(0,I.jsxs)(`div`,{className:`header-right`,children:[i===`learn`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`header-progress-compact`,title:`ผ่านแล้ว ${Ue} จาก ${He} (${We}%)`,children:[(0,I.jsxs)(`span`,{className:`progress-compact-text`,children:[Ue,`/`,He]}),(0,I.jsx)(`div`,{className:`progress-compact-track`,children:(0,I.jsx)(`div`,{className:`progress-compact-fill`,style:{width:`${We}%`}})}),(0,I.jsxs)(`span`,{className:`progress-compact-percent`,children:[We,`%`]})]}),(0,I.jsx)(`button`,{onClick:Ie,className:`icon-btn btn-header-trash`,style:{borderColor:`var(--danger-color)`,color:`var(--danger-color)`},title:`ล้างประวัติการเรียนและโค้ดของคอร์สนี้ทั้งหมด`,children:(0,I.jsx)(Ee,{size:16})}),(0,I.jsx)(`button`,{onClick:Le,className:`icon-btn btn-header-reset`,title:`รีเซ็ตโค้ดของบทเรียนปัจจุบัน`,children:(0,I.jsx)(xe,{size:16})}),(0,I.jsx)(`button`,{onClick:Re,className:`icon-btn btn-header-download`,style:{borderColor:`var(--accent-color)`,color:`var(--accent-color)`},title:`ดาวน์โหลดไฟล์งาน (HTML, CSS, JS)`,children:(0,I.jsx)(fe,{size:16})})]}),(0,I.jsx)(`button`,{onClick:()=>Te(!0),className:`icon-btn`,style:{borderColor:`#eab308`,color:`#ca8a04`},title:n===`js`?`เปิดคู่มือสรุปไวยากรณ์ JavaScript (Cheat Sheet)`:`เปิดคู่มือสรุป HTML & CSS`,children:(0,I.jsx)(te,{size:16})}),(0,I.jsx)(je,{theme:e,toggleTheme:Fe})]})]}),(0,I.jsxs)(`div`,{className:`app-body`,children:[(0,I.jsx)(Ae,{lessons:P.lessons,challenges:P.challenges,appliedExams:P.appliedExams,activeId:o,setActiveId:e=>{s(e),j&&ne(!1)},progress:ee,isOpen:A,course:n,activeMode:i,setActiveMode:a,onOpenCheatSheet:()=>Te(!0)}),j&&A&&(0,I.jsx)(`div`,{className:`sidebar-backdrop`,onClick:()=>ne(!1),"aria-label":`ปิดเมนูข้าง`}),i===`quiz`&&n===`js`?(0,I.jsx)(`main`,{className:`quiz-main-full`,children:(0,I.jsx)(pn,{quizBank:b.quizBank,onBackToLessons:()=>a(`learn`)})}):j?(0,I.jsxs)(`main`,{className:`app-workspace mobile-workspace`,children:[(0,I.jsxs)(`div`,{className:`mobile-view-tabs`,children:[(0,I.jsxs)(`button`,{className:`mobile-view-tab ${re===`instruction`?`active`:``}`,onClick:()=>ie(`instruction`),children:[(0,I.jsx)(te,{size:15}),(0,I.jsx)(`span`,{children:`คำอธิบาย`}),C&&(0,I.jsx)(`span`,{className:`mobile-tab-dot error`}),T&&(0,I.jsx)(`span`,{className:`mobile-tab-dot success`})]}),(0,I.jsxs)(`button`,{className:`mobile-view-tab ${re===`editor`?`active`:``}`,onClick:()=>ie(`editor`),children:[(0,I.jsx)(N,{size:15}),(0,I.jsxs)(`span`,{children:[`โค้ด (`,c,`)`]})]}),(0,I.jsxs)(`button`,{className:`mobile-view-tab ${re===`preview`?`active`:``}`,onClick:()=>ie(`preview`),children:[(0,I.jsx)(pe,{size:15}),(0,I.jsx)(`span`,{children:`ผลลัพธ์`}),u===`target`&&(0,I.jsx)(`span`,{className:`mobile-demo-pill`,children:`Demo`})]})]}),(0,I.jsxs)(`div`,{className:`mobile-content-container`,children:[(0,I.jsx)(`div`,{className:`mobile-pane-full`,style:{display:re===`instruction`?`flex`:`none`},children:(0,I.jsx)(Me,{activeItem:F,onVerify:ze,validationError:C,isSuccess:T,isChallenge:De||Oe,onViewDemo:Ve})}),(0,I.jsxs)(`div`,{className:`mobile-pane-full mobile-editor-wrapper`,style:{display:re===`editor`?`flex`:`none`},children:[(0,I.jsx)(ln,{html:m,setHtml:h,css:g,setCss:v,js:x,setJs:S,activeTab:c,setActiveTab:l,theme:e,activeItem:F,fontSize:ye,setFontSize:Se}),(0,I.jsxs)(`div`,{className:`mobile-editor-actions-bar`,children:[(0,I.jsxs)(`button`,{onClick:ze,className:`mobile-action-btn primary`,children:[(0,I.jsx)(be,{size:14,fill:`white`}),(0,I.jsx)(`span`,{children:`ตรวจคำตอบ`})]}),(0,I.jsxs)(`button`,{onClick:()=>ie(`preview`),className:`mobile-action-btn secondary`,children:[(0,I.jsx)(pe,{size:14}),(0,I.jsx)(`span`,{children:`ดูผลลัพธ์`})]})]})]}),(0,I.jsx)(`div`,{className:`mobile-pane-full`,style:{display:re===`preview`?`flex`:`none`},children:(0,I.jsx)(un,{html:m,css:g,js:x,targetHtml:F.targetHtml,targetCss:F.targetCss,targetJs:F.targetJs,showCompare:!!F.targetHtml,activePreviewTab:u,setActivePreviewTab:d})})]})]}):(0,I.jsxs)(`main`,{className:`app-workspace desktop-workspace`,style:{gridTemplateColumns:`${ae}% 6px 1fr`},children:[(0,I.jsxs)(`div`,{className:`left-work-panel`,style:{gridTemplateRows:`${ce}% 6px 1fr`},children:[(0,I.jsx)(Me,{activeItem:F,onVerify:ze,validationError:C,isSuccess:T,isChallenge:De||Oe,onViewDemo:Ve}),(0,I.jsx)(`div`,{className:`resizer-vertical ${he?`active`:``}`,onMouseDown:Pe}),(0,I.jsx)(ln,{html:m,setHtml:h,css:g,setCss:v,js:x,setJs:S,activeTab:c,setActiveTab:l,theme:e,activeItem:F,fontSize:ye,setFontSize:Se})]}),(0,I.jsx)(`div`,{className:`resizer-horizontal ${de?`active`:``}`,onMouseDown:Ne}),(0,I.jsx)(un,{html:m,css:g,js:x,targetHtml:F.targetHtml,targetCss:F.targetCss,targetJs:F.targetJs,showCompare:!!F.targetHtml,activePreviewTab:u,setActivePreviewTab:d})]})]}),D&&(0,I.jsx)(`div`,{className:`success-overlay`,children:(0,I.jsxs)(`div`,{className:`success-card`,children:[(0,I.jsx)(`div`,{className:`success-icon-wrapper`,children:(0,I.jsx)(we,{size:36})}),(0,I.jsx)(`h3`,{children:De?`ผ่านภารกิจสำเร็จ!`:`เรียนรู้สำเร็จ!`}),(0,I.jsx)(`p`,{children:De?`ยอดเยี่ยมมาก! คุณสามารถสร้างโปรเจกต์ ${F.title} ได้อย่างสมบูรณ์แบบ ได้รับการสะสมแต้มเรียบร้อย!`:`คุณผ่านแบบฝึกหัดในหัวข้อนี้แล้ว พร้อมที่จะเรียนรู้เนื้อหาขั้นต่อไปหรือยัง?`}),De&&F.points&&(0,I.jsxs)(`div`,{className:`victory-scorecard`,children:[(0,I.jsxs)(`div`,{className:`scorecard-stat`,children:[(0,I.jsx)(`span`,{className:`stat-lbl`,children:`ความยาก`}),(0,I.jsx)(`span`,{className:`difficulty-badge ${F.difficulty.toLowerCase()}`,children:F.difficulty})]}),(0,I.jsxs)(`div`,{className:`scorecard-stat`,children:[(0,I.jsx)(`span`,{className:`stat-lbl`,children:`คะแนนภารกิจ`}),(0,I.jsxs)(`span`,{className:`stat-val font-bold`,style:{color:`var(--warning-color)`},children:[`+`,F.points,` XP`]})]})]}),(0,I.jsxs)(`div`,{className:`success-actions`,children:[(0,I.jsx)(`button`,{onClick:()=>O(!1),className:`success-btn secondary`,children:`ทบทวนโค้ด`}),Ue<He&&(0,I.jsx)(`button`,{onClick:Be,className:`success-btn primary`,children:`ทำหัวข้อถัดไป`})]})]})}),n===`js`?(0,I.jsx)(gn,{isOpen:Ce,onClose:()=>Te(!1)}):(0,I.jsx)(mn,{isOpen:Ce,onClose:()=>Te(!1)})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(_.StrictMode,{children:(0,I.jsx)(_n,{})}));
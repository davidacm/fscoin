(function(e){function n(n){for(var r,a,c=n[0],s=n[1],u=n[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/fscoin/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("div",{staticClass:"navbar-brand"},[e._m(0),t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-vertical is-12 is-parent"},[e.deferredPrompt?t("div",{staticClass:"tile is-child box"},[t("button",{staticClass:"button is-fullwidth",on:{click:e.install}},[e._v(" Instalar app ")])]):e._e(),t("div",{staticClass:"tile is-child box"},[t("button",{staticClass:"button is-fullwidth is-success",on:{click:function(n){return e.coinEvent()}}},[e._v("Coin")])])])])])])},i=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"navbar-item"},[r("img",{attrs:{src:t("cf05")}})])}],a=(t("eb46"),t("e9c4"),t("d3b7"),t("5cc6"),t("907a"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("84c3"),t("fb2c"),t("d81d"),{audioContext:void 0,osc:void 0,waitToBreak:0,isRunning:!1});function c(){a.audioContext||(a.audioContext=new AudioContext)}function s(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:440,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(c(),a.audioContext){a.osc&&a.osc.stop(a.audioContext.currentTime),a.osc=null===(e=a.audioContext)||void 0===e?void 0:e.createOscillator();var o=[a.osc,a.audioContext],i=o[0],s=o[1],u=s.createGain();i.connect(u),i.frequency.value=n,i.type="sine",u.connect(s.destination),u.gain.value=r,i.start(s.currentTime),a.isRunning=!0,i.stop(s.currentTime+.001*t),i.onended=function(){return a.isRunning=!1}}}var u=30;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:440,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;a.waitToBreak<0&&(a.waitToBreak=0),a.isRunning?(a.waitToBreak+=u,setTimeout((function(){s(e,n,t),a.waitToBreak-=u}),a.waitToBreak)):s(e,n,t)}var f={8:Uint8Array,16:Uint16Array,32:Uint32Array};function d(e,n,t){if(e>n){var r=[n,e];e=r[0],n=r[1]}var o=n-e+1,i=Math.ceil(Math.log(o)/Math.LN2),a=-1;for(var c in f)if(parseInt(c)-i>=0){a=parseInt(c);break}if(!(a in f))throw Error("Unable to get the correct bytes for the required random range");var s=new f[a](t);window.crypto.getRandomValues(s);var u=Math.pow(2,a)-1;return s.map((function(n){return o/u*n+e}))}function p(e,n){return d(e,n,1)[0]}function v(){for(var e=p(1,1023),n={0:0,1:0},t=0;t<=e;++t)n[p(1,1e3)%2]+=1;return n[1]>n[0]?1:0}function b(){function e(){var e=v(),n=1==e?1500:500;l(n,50)}for(var n=0;n<3;++n)setTimeout(e,1e3*n+p(1,1023))}var g={name:"App",data:function(){return{deferredPrompt:null}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e.deferredPrompt=n})),window.addEventListener("appinstalled",(function(){e.deferredPrompt=null}))},methods:{coinEvent:function(){b()}}},h=g,w=(t("034f"),t("2877")),m=Object(w["a"])(h,o,i,!1,null,null,null),y=m.exports,C=t("9483");Object(C["a"])("".concat("/fscoin/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.e503bb65.png"}});
//# sourceMappingURL=app.1ff188ab.js.map
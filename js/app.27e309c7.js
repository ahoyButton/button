(function(e){function n(n){for(var t,r,u=n[0],o=n[1],i=n[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);d&&d(n);while(f.length)f.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],t=!0,r=1;r<a.length;r++){var u=a[r];0!==c[u]&&(t=!1)}t&&(s.splice(n--,1),e=o(o.s=a[0]))}return e}var t={},r={app:0},c={app:0},s=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2e445cfc":"04724606","chunk-3154390a":"4d369bfa","chunk-3578f130":"9ffae114","chunk-56108850":"5075ca14","chunk-7a1b22e8":"c12cd69c","chunk-7da4b804":"4b1542ef"}[e]+".js"}function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var n=[],a={"chunk-2e445cfc":1,"chunk-3154390a":1,"chunk-3578f130":1,"chunk-56108850":1,"chunk-7a1b22e8":1,"chunk-7da4b804":1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-2e445cfc":"68b9b6ee","chunk-3154390a":"5b4c26e7","chunk-3578f130":"f82c5216","chunk-56108850":"f0137bca","chunk-7a1b22e8":"67dfa825","chunk-7da4b804":"e991290a"}[e]+".css",c=o.p+t,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===t||l===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===t||l===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=t,delete r[e],d.parentNode.removeChild(d),a(s)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var t=c[e];if(0!==t)if(t)n.push(t[2]);else{var s=new Promise((function(n,a){t=c[e]=[n,a]}));n.push(t[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(e);var f=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(d);var a=c[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",f.name="ChunkLoadError",f.type=t,f.request=r,a[1](f)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(a,t,function(n){return e[n]}.bind(null,t));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},4678:function(e,n,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var n=c(e);return a(n)}function c(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=c,e.exports=r,r.id="4678"},"49f8":function(e,n,a){var t={"./en.json":"edd4","./ja_JP.json":"c5d2","./zh_CN.json":"752b"};function r(e){var n=c(e);return a(n)}function c(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=c,e.exports=r,r.id="49f8"},"500f":function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"b",(function(){return r}));var t="FETCH_LIVE_INFO",r="FETCH_UPCOMING"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"switch-page","enter-active-class":"animate__animated animate__zoomIn"}},[a("keep-alive",[a("router-view")],1)],1)],1)},c=[],s={name:"app",created:function(){this.$i18n.locale=this.getUserLang()},methods:{getUserLang:function(){var e=navigator.language.toLowerCase().substr(0,2);switch(e){case"zh":return"zh_CN";case"ja":return"ja_JP";default:return"en"}}}},u=s,o=(a("5c0b"),a("2877")),i=Object(o["a"])(u,r,c,!1,null,null,null),l=i.exports,f=(a("cbb5"),a("450d"),a("8bbc")),d=a.n(f),h=(a("e960"),a("b35b")),b=a.n(h),p=(a("b5c2"),a("20cf")),m=a.n(p),j=(a("7a0f"),a("0f6c")),g=a.n(j),_=(a("06f1"),a("6ac9")),v=a.n(_),y=(a("aaa5"),a("a578")),k=a.n(y),N=(a("fd71"),a("a447")),C=a.n(N),z=(a("960d"),a("defb")),O=a.n(z),P=(a("bd49"),a("18ff")),w=a.n(P),J=(a("cb70"),a("b370")),I=a.n(J),L=(a("e3ea"),a("7bc3")),E=a.n(L),T=(a("a7cc"),a("df33")),A=a.n(T),S=(a("f4f9"),a("c2cc")),M=a.n(S),x=(a("b8e0"),a("a4c4")),U=a.n(x),R=(a("ae26"),a("845f")),D=a.n(R),G=(a("1951"),a("eedf")),H=a.n(G),F=(a("e2f3"),a("06f9")),V=a.n(F);a("0fae");t["default"].use(V.a),t["default"].use(H.a),t["default"].use(D.a),t["default"].use(U.a),t["default"].use(M.a),t["default"].use(A.a),t["default"].use(E.a),t["default"].use(I.a),t["default"].use(w.a),t["default"].use(O.a),t["default"].use(C.a),t["default"].use(k.a),t["default"].use(v.a),t["default"].use(g.a),t["default"].use(m.a),t["default"].use(b.a),t["default"].use(d.a);var Y=a("f676");a("3a06");t["default"].use(Y["a"]);var B=a("479e"),q=a.n(B),K=(a("8970"),a("a95d")),$=a.n(K),W=(a("4baa"),a("2644")),Q=a.n(W),Z=(a("4f65"),a("a027")),X=a.n(Z),ee=(a("3cdf"),a("3ea7")),ne=a.n(ee),ae=(a("de6f"),a("671e")),te=a.n(ae),re=(a("0383"),a("3fc7")),ce=a.n(re),se=(a("0afe"),a("b558")),ue=a.n(se),oe=(a("8365"),a("f8a2")),ie=a.n(oe),le=(a("3166"),a("7396")),fe=a.n(le),de=(a("20d4"),a("59ec")),he=a.n(de),be=(a("acd0"),a("fde9")),pe=a.n(be),me=(a("e149"),a("5ab7")),je=a.n(me),ge=(a("21f1"),a("068f")),_e=a.n(ge),ve=(a("66b4"),a("e82c")),ye=a.n(ve),ke=(a("c5ce"),a("c854")),Ne=a.n(ke);a("2435"),a("8ce9");q.a.install(t["default"]),$.a.install(t["default"]),Q.a.install(t["default"]),X.a.install(t["default"]),ne.a.install(t["default"]),te.a.install(t["default"]),ce.a.install(t["default"]),ue.a.install(t["default"]),ie.a.install(t["default"]),fe.a.install(t["default"]),he.a.install(t["default"]),pe.a.install(t["default"]),je.a.install(t["default"]),_e.a.install(t["default"]),ye.a.install(t["default"]),Ne.a.install(t["default"]);a("be35");var Ce=a("2f62"),ze=(a("c740"),a("a434"),a("3835")),Oe=a("5bbd"),Pe=Oe,we=Pe.findIndex((function(e){return e.egg})),Je={};if(-1!==we){var Ie=Pe.splice(we,1),Le=Object(ze["a"])(Ie,1);Je=Le[0]}var Ee,Te,Ae=function(){return{playList:[],showPlayListDialog:!1,volume:100,liveInfo:{},upcoming:[],btnGroups:Pe,egg:Je}},Se=Ae,Me=a("ade3"),xe=a("5530"),Ue=a("9fb0"),Re=(Ee={},Object(Me["a"])(Ee,Ue["a"],(function(e,n){e.playList.push(n)})),Object(Me["a"])(Ee,Ue["h"],(function(e,n){e.playList.splice(n,1)})),Object(Me["a"])(Ee,Ue["i"],(function(e,n){var a=e.playList.findIndex((function(e){return e.path===n}));e.playList.splice(a,1)})),Object(Me["a"])(Ee,Ue["d"],(function(e){e.playList=[]})),Object(Me["a"])(Ee,Ue["g"],(function(e){e.showPlayListDialog=!0})),Object(Me["a"])(Ee,Ue["e"],(function(e){e.showPlayListDialog=!1})),Object(Me["a"])(Ee,Ue["f"],(function(e,n){e.volume=n})),Object(Me["a"])(Ee,Ue["c"],(function(e,n){e.liveInfo=Object(xe["a"])({},n)})),Object(Me["a"])(Ee,Ue["b"],(function(e,n){e.upcoming.push(n)})),Ee),De=Re,Ge=(a("7db0"),a("b64b"),a("ac1f"),a("841c"),a("9911"),a("b85c")),He=(a("96cf"),a("1da1")),Fe=a("500f"),Ve=a("bc3a"),Ye=a.n(Ve),Be=a("c9d9"),qe=a("c1df"),Ke=a.n(qe),$e="Y-M-D LTS",We="bb",Qe="ytb";function Ze(e,n,a){if(n){if(a===Qe)e.ytb={},e=e.ytb,e.link="https://youtube.com/watch?v=".concat(n.yt_video_key);else{if(a!==We)return;e.bb={},e=e.bb,e.link="https://live.bilibili.com/".concat(n.bb_video_id)}e.title=n.title,e.start=Ke()(n.live_start).format($e),e.schedule=Ke()(n.live_schedule).format($e)}}var Xe={data:null,cached_time:null};function en(){return nn.apply(this,arguments)}function nn(){return nn=Object(He["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(null===Xe.cached_time||Ke()().unix()-Xe.cached_time.unix()>600)){e.next=8;break}return e.next=3,Ye.a.get("https://api.holotools.app/v1/live");case 3:if(n=e.sent,200===n.status){e.next=6;break}throw new Error("cannot get live info");case 6:Xe.cached_time=Ke()(),Xe.data=n.data;case 8:case"end":return e.stop()}}),e)}))),nn.apply(this,arguments)}var an=(Te={},Object(Me["a"])(Te,Fe["a"],(function(e){return Object(He["a"])(regeneratorRuntime.mark((function n(){var a,t,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.state,t=e.commit,0===Object.keys(a.liveInfo).length){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,en();case 5:r=Xe.data.live,c={},Ze(c,r.find((function(e){return e.channel.yt_channel_id===Be["g"]})),Qe),Ze(c,r.find((function(e){return e.channel.bb_space_id===Be["f"]})),We),t(Ue["c"],c);case 10:case"end":return n.stop()}}),n)})))()})),Object(Me["a"])(Te,Fe["b"],(function(e){return Object(He["a"])(regeneratorRuntime.mark((function n(){var a,t,r,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.state,t=e.commit,0===a.upcoming.length){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,en();case 5:r=Object(Ge["a"])(Xe.data.upcoming);try{for(r.s();!(c=r.n()).done;)s=c.value,s.channel.yt_channel_id===Be["g"]&&-1===s.title.search(/freechat/i)&&t(Ue["b"],{title:s.title,schedule:Ke()(s.live_schedule).format("Y-M-D LTS"),link:"https://youtube.com/watch?v=".concat(s.yt_video_key)})}catch(u){r.e(u)}finally{r.f()}case 7:case"end":return n.stop()}}),n)})))()})),Te),tn=an;t["default"].use(Ce["a"]);var rn=new Ce["a"].Store({state:Se,mutations:De,actions:tn}),cn=(a("4160"),a("d3b7"),a("466d"),a("159b"),a("ddb0"),a("a925"));function sn(){var e=a("49f8"),n={};return e.keys().forEach((function(a){var t=a.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){var r=t[1];n[r]=e(a)}})),n}t["default"].use(cn["a"]);var un=new cn["a"]({locale:"zh_CN",fallbackLocale:"en",messages:sn()}),on=a("8c4f");t["default"].use(on["a"]);var ln=[{path:"/",name:"Index",component:function(){return a.e("chunk-3578f130").then(a.bind(null,"d504"))},meta:{keepAlive:!0}},{path:"/pc",name:"pc",component:function(){return a.e("chunk-2e445cfc").then(a.bind(null,"f91b"))}},{path:"/mobile",name:"mobile",component:function(){return a.e("chunk-56108850").then(a.bind(null,"0897"))},children:[{path:"main",component:function(){return a.e("chunk-7da4b804").then(a.bind(null,"a613"))},mate:{keepAlive:!0}},{path:"playlist",component:function(){return a.e("chunk-7a1b22e8").then(a.bind(null,"1fdf"))},mate:{keepAlive:!0}},{path:"aboutUs",component:function(){return a.e("chunk-3154390a").then(a.bind(null,"0eaf"))}}]}],fn=new on["a"]({routes:ln}),dn=fn;a("77ed");t["default"].config.productionTip=!1,new t["default"]({store:rn,i18n:un,router:dn,render:function(e){return e(l)}}).$mount("#app")},"5bbd":function(e){e.exports=JSON.parse('[{"group_name":{"lang":{"zh_CN":"笑声","en":"Laughing","ja_JP":"笑い声"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"咕hihihihihi","en":"gu-hihihi","ja_JP":"ぐふふふ"}},"path":"笑声/咕hihihihihi.mp3"},{"name":{"lang":{"zh_CN":"rua-hihihi","en":"rua-hihihi","ja_JP":"rua-hihihi"}},"path":"笑声/rua-hihihi.mp3"},{"name":{"lang":{"zh_CN":"奸笑 嘲讽","en":"wicked laugh + taunting","ja_JP":"陰険に笑う、煽る"}},"path":"笑声/奸笑 嘲讽.mp3"}]},{"group_name":{"lang":{"zh_CN":"名台词","en":"Classic Lines","ja_JP":"名セリフ"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"宝宝很生气-摔手柄-喘气","en":"Got mad + smash table + heavy breathing","ja_JP":"怒った、台パン、喘ぐ"}},"path":"台词/宝宝很生气-摔手柄-喘气.mp3"},{"name":{"lang":{"zh_CN":"胜利-尖叫-拍手","en":"Victory + screaming + hand clap","ja_JP":"ヴィクトリー、絶叫、拍手"}},"path":"台词/胜利-尖叫-拍手.mp3"},{"name":{"lang":{"zh_CN":"这么久远的问题船长不懂","en":"Senchou can\'t understand questions that ancient","ja_JP":"こんな昔のこと船長分かんないですぅ"}},"path":"台词/这么久远的问题船长不懂.mp3"},{"name":{"lang":{"zh_CN":"玛琳琳（的朋友）要坏掉了","en":"Marinin (\'s friends) going to break","ja_JP":"マリリン（の友達）が壊れちゃったよ"}},"path":"台词/玛琳琳（的朋友）要坏掉了.mp3"},{"name":{"lang":{"zh_CN":"倒车请注意","en":"Backing up!","ja_JP":"バックします！"}},"path":"台词/倒车请注意.mp3"},{"name":{"lang":{"zh_CN":"唔啊好过分","en":"Uwee, thats cruel","ja_JP":"うぇんー、ひどいよ"}},"path":"台词/唔啊好过分.mp3"},{"name":{"lang":{"zh_CN":"etc卡","en":"ETC Card","ja_JP":"etcカードが挿入されました"}},"path":"台词/etc卡.mp3"},{"name":{"lang":{"zh_CN":"欧拉欧拉欧拉欧拉","en":"ORAORAORAORAORA","ja_JP":"オラオラオラオラオラオラオラオラッ"}},"path":"台词/欧拉欧拉欧拉欧拉.mp3"},{"name":{"lang":{"zh_CN":"再见（布加拉提并感）","en":"Arrivederci","ja_JP":"アリーヴェデルチ"}},"path":"台词/arrivederci.mp3"}]},{"group_name":{"lang":{"zh_CN":"哈欠","en":"Yawn","ja_JP":"欠伸"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"哈欠1","en":"yawn2","ja_JP":"欠伸1"}},"path":"哈欠/哈欠1.mp3"},{"name":{"lang":{"zh_CN":"哈欠2","en":"yawn2","ja_JP":"欠伸2"}},"path":"哈欠/哈欠2.mp3"},{"name":{"lang":{"zh_CN":"困了 晚安","en":"Im sleepy, good night guys","ja_JP":"眠くなった、おやすみ"}},"path":"哈欠/困了 晚安.mp3"}]},{"group_name":{"lang":{"zh_CN":"拟声","en":"Onomatopoeia","ja_JP":"擬声語"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"bayaya","en":"bayaya","ja_JP":"bayaya"}},"path":"拟声/bayaya.mp3"},{"name":{"lang":{"zh_CN":"do gann","en":"do gann","ja_JP":"dogann"}},"path":"拟声/do gann.mp3"},{"name":{"lang":{"zh_CN":"dua","en":"dua","ja_JP":"dua"}},"path":"拟声/dua.mp3"},{"name":{"lang":{"zh_CN":"电话铃","en":"phone call","ja_JP":"お電話かけちゃうお〜"}},"path":"拟声/电话铃.mp3"},{"name":{"lang":{"zh_CN":"ahoy","en":"ahoy","ja_JP":"ahoy"}},"path":"拟声/ahoy.mp3"},{"name":{"lang":{"zh_CN":"喵~","en":"nya~","ja_JP":"にゃ~"}},"path":"拟声/喵~.mp3"},{"name":{"lang":{"zh_CN":"嗷呜","en":"Hauuu","ja_JP":"はうううー"}},"path":"拟声/嗷呜.mp3"},{"name":{"lang":{"zh_CN":"嗷啊呀呀呀呀呀呀呀","en":"Ayayayayayayaya","ja_JP":"アヤヤヤヤヤヤヤ"}},"path":"拟声/啊呀呀呀呀呀呀呀.mp3"},{"name":{"lang":{"zh_CN":"肚子叫","en":"My stomach is growling","ja_JP":"お腹が鳴った"}},"path":"拟声/肚子叫.mp3","isNew":true}]},{"group_name":{"lang":{"zh_CN":"母国语","en":"Mother Tongue","ja_JP":"母国語"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"母国语1","en":"mother tongue1","ja_JP":"母国語1"}},"path":"母国语/母国语1.mp3"},{"name":{"lang":{"zh_CN":"得得得得得得得得得得得得得得得得得","en":"dududududududu","ja_JP":"dududududududu"}},"path":"母国语/得得得得得得得得得得得得得得得得得.mp3"}]},{"group_name":{"lang":{"zh_CN":"通用","en":"General","ja_JP":"通用"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"我知道了（委屈巴巴）","en":"understood.. (weep)","ja_JP":"分かった（悔しそう）"}},"path":"通用/我知道了（委屈巴巴）.mp3"},{"name":{"lang":{"zh_CN":"f○ck","en":"F○CK","ja_JP":"f○ck"}},"path":"通用/f○ck.mp3"},{"name":{"lang":{"zh_CN":"笨蛋","en":"baka","ja_JP":"バカ"}},"path":"通用/笨蛋.mp3"},{"name":{"lang":{"zh_CN":"欧拉","en":"ORA","ja_JP":"オラッ"}},"path":"通用/欧拉.mp3"}]},{"group_name":{"lang":{"zh_CN":"倒计时","en":"Countdown","ja_JP":"カウントダウン"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"倒计时（元气）","en":"Countdown (pumped)","ja_JP":"カウントダウン（元気）"}},"path":"倒计时/倒计时（元气）.mp3"},{"name":{"lang":{"zh_CN":"倒计时（安眠）","en":"Countdown (Goodnight)","ja_JP":"カウントダウン（おやすみ）"}},"path":"倒计时/倒计时（安眠）.mp3"}]},{"group_name":{"lang":{"zh_CN":"最后祝你身体健康","en":"DANGER!!!","ja_JP":"気をつけて、そしてお大事に"}},"egg":true,"buttons":[{"name":{"lang":{"zh_CN":"啊啊别硬塞","en":"Don\'t force it in ahh～","ja_JP":"ういうい押し込めああん～"}},"path":"最后祝你身体健康/ういうい押し込めああん～.mp3"},{"name":{"lang":{"zh_CN":"要上了（）","en":"AH COMING... SOON!","ja_JP":"あっあっイクっちょっ"}},"path":"最后祝你身体健康/あっあっイクっちょっ.mp3"},{"name":{"lang":{"zh_CN":"啊啊啊沁音前辈的脸，欧柏","en":"AHAHAHA korone\'s face and breast","ja_JP":"あっあっあっああんころね先輩の顔うあぁぁんお〇ぱい"}},"path":"最后祝你身体健康/あっあっあっああんころね先輩の顔うあぁぁんお〇ぱい.mp3"}]}]')},"5c0b":function(e,n,a){"use strict";var t=a("9c0c"),r=a.n(t);r.a},"752b":function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"帮助我们改进网页"},"buttons":{"mainTitle":"船长按钮","playListMode":"播放列表模式"},"footer":{"authors":"作者：","contributors":"特别鸣谢：","license":"本站为爱好者学习交流创作，与Hololive官方无关，切勿用于任何商业目的","followUs":"关注我们："},"playList":{"currentList":"当前列表","play":"播放","pause":"暂停","stop":"停止","clear":"清空列表","dialogTitle":"播放列表","currentTotal":"当前有%d个音频","currentPlayingInfo":"正在播放第%d个","loopMode":"循环播放","delete":"删除"},"aboutUs":{"title":"关于我们"},"liveInfo":{"title":"直播信息","nonContent":"当前无直播和直播预定","streaming":"直播：","nonStreaming":"当前没有直播","schedule":"预定："}}')},"9c0c":function(e,n,a){},"9fb0":function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"h",(function(){return r})),a.d(n,"i",(function(){return c})),a.d(n,"d",(function(){return s})),a.d(n,"g",(function(){return u})),a.d(n,"e",(function(){return o})),a.d(n,"f",(function(){return i})),a.d(n,"c",(function(){return l})),a.d(n,"b",(function(){return f}));var t="ADD_ORDER",r="REMOVE_ORDER",c="REMOVE_ORDER_BY_PATH",s="CLEAN_ALL_ITEMS",u="OPEN_PLAY_LIST_DIALOG",o="CLOSE_PLAY_LIST_DIALOG",i="MODIFY_VOLUME",l="CHANGE_LIVE_INFO",f="ADD_UPCOMING"},be35:function(e,n,a){},c5d2:function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"あなたのお手伝いいただきたい！"},"buttons":{"mainTitle":"マリンボタン","playListMode":"再生リストモード"},"footer":{"authors":"作者：","contributors":"ご協力頂いた方々：","license":"本サイトは個人的な興味に基づいて立てられており、ホロライブプロダクション公式との関係はありません","followUs":"私たちをフォローする："},"playList":{"currentList":"カレントプレイリスト","play":"プレイ","pause":"一時停止","stop":"ストップ","clear":"リストをクリア","dialogTitle":"再生リスト","currentTotal":"今%dのボイスがあります","currentPlayingInfo":"%d番目のボイス再生中です","loopMode":"連続再生","delete":"削除"},"aboutUs":{"title":"私たちにおいて"},"liveInfo":{"title":"配信一覧","nonContent":"配信中又は配信予定はありません","streaming":"配信中：","nonStreaming":"配信中の内容はありません","schedule":"待機中："}}')},c9d9:function(e,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"e",(function(){return r})),a.d(n,"d",(function(){return c})),a.d(n,"g",(function(){return s})),a.d(n,"f",(function(){return u})),a.d(n,"h",(function(){return o})),a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return l})),a.d(n,"i",(function(){return v}));var t="/voices/",r="/images/sound-Mute.png",c="/images/sound-filling.png",s="UCCzUftO8KOVkV4wQG1vkUvg",u=454955503,o=[{title:"中文",value:"zh_CN"},{title:"English",value:"en"},{title:"日本語",value:"ja_JP"}],i=["apocelipes"],l=["宝钟玛琳保护协会"],f="/#/mobile/main",d="/images/home.png",h="/images/home-active.png",b="/#/mobile/playlist",p="/images/playlist.png",m="/images/playlist-active.png",j="/#/mobile/aboutUs",g="/images/about-us.png",_="/images/about-us-active.png",v={zh_CN:[{tabTitle:"主页",curr:!0,href:f,icon:d,activeIcon:h},{tabTitle:"播放列表",curr:!1,href:b,icon:p,activeIcon:m},{tabTitle:"关于我们",curr:!1,href:j,icon:g,activeIcon:_}],ja_JP:[{tabTitle:"ホーム",curr:!0,href:f,icon:d,activeIcon:h},{tabTitle:"再生リスト",curr:!1,href:b,icon:p,activeIcon:m},{tabTitle:"私たちにおいて",curr:!1,href:j,icon:g,activeIcon:_}],en:[{tabTitle:"Home",curr:!0,href:f,icon:d,activeIcon:h},{tabTitle:"Playlist",curr:!1,href:b,icon:p,activeIcon:m},{tabTitle:"About Us",curr:!1,href:j,icon:g,activeIcon:_}]}},edd4:function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"HELP IMPROVE THIS WEBSITE"},"buttons":{"mainTitle":"marine\'s buttons","playListMode":"Playlist Mode"},"footer":{"authors":"authors:","contributors":"thanks to:","license":"This site has nothing to do with Hololive, do not use it for any commercial purpose!","followUs":"follow us:"},"playList":{"currentList":"current list","play":"play","pause":"pause","stop":"stop","clear":"clear list","dialogTitle":"Playlist","currentTotal":"%d ITEM(S)","currentPlayingInfo":"NOW PLAYING %d","loopMode":"loop mode","delete":"delete"},"aboutUs":{"title":"About Us"},"liveInfo":{"title":"LIVE STREAMING INFO","nonContent":"NO STREAMING OR SCHEDULES","streaming":"STREAMING：","nonStreaming":"NO STREAMING","schedule":"SCHEDULE："}}')}});
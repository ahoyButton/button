(function(e){function a(a){for(var t,r,i=a[0],l=a[1],s=a[2],h=0,c=[];h<i.length;h++)r=i[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);p&&p(a);while(c.length)c.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,a=0;a<u.length;a++){for(var n=u[a],t=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(t=!1)}t&&(u.splice(a--,1),e=l(l.s=n[0]))}return e}var t={},r={app:0},o={app:0},u=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0c1283f0":"f8f43748","chunk-1d0519f9":"a29c09ba","chunk-38814366":"4cb673fa","chunk-589568fc":"a4a4a6af","chunk-62827b5a":"481d56af","chunk-7d3a5a6a":"20af9760"}[e]+".js"}function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0c1283f0":1,"chunk-1d0519f9":1,"chunk-38814366":1,"chunk-589568fc":1,"chunk-62827b5a":1,"chunk-7d3a5a6a":1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var t="css/"+({}[e]||e)+"."+{"chunk-0c1283f0":"0af6463a","chunk-1d0519f9":"88a4a17a","chunk-38814366":"732b9f35","chunk-589568fc":"05da1e56","chunk-62827b5a":"d66fa09e","chunk-7d3a5a6a":"cc93c86f"}[e]+".css",o=l.p+t,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],h=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(h===t||h===o))return a()}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){s=c[i],h=s.getAttribute("data-href");if(h===t||h===o)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var t=a&&a.target&&a.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete r[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var t=o[e];if(0!==t)if(t)a.push(t[2]);else{var u=new Promise((function(a,n){t=o[e]=[a,n]}));a.push(t[2]=u);var s,h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=i(e);var c=new Error;s=function(a){h.onerror=h.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,n[1](c)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:h})}),12e4);h.onerror=h.onload=s,document.head.appendChild(h)}return Promise.all(a)},l.m=e,l.c=t,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)l.d(n,t,function(a){return e[a]}.bind(null,t));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var p=h;u.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"49f8":function(e,a,n){var t={"./en.json":"edd4","./ja_JP.json":"c5d2","./zh_CN.json":"752b"};function r(e){var a=o(e);return n(a)}function o(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id="49f8"},"500f":function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"b",(function(){return r}));const t="FETCH_LIVE_INFO",r="FETCH_UPCOMING"},"56d7":function(e,a,n){"use strict";n.r(a);var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"switch-page","enter-active-class":"animate__animated animate__zoomIn"}},[n("keep-alive",[n("router-view")],1)],1)],1)},o=[],u={name:"app",created(){this.$i18n.locale=this.getUserLang()},methods:{getUserLang(){const e=navigator.language.toLowerCase().substr(0,2);switch(e){case"zh":return"zh_CN";case"ja":return"ja_JP";default:return"en"}}}},i=u,l=(n("5c0b"),n("2877")),s=Object(l["a"])(i,r,o,!1,null,null,null),h=s.exports,c=(n("0c67"),n("450d"),n("299c")),p=n.n(c),d=(n("cbb5"),n("8bbc")),m=n.n(d),f=(n("e960"),n("b35b")),g=n.n(f),_=(n("b5c2"),n("20cf")),N=n.n(_),b=(n("7a0f"),n("0f6c")),C=n.n(b),y=(n("06f1"),n("6ac9")),P=n.n(y),w=(n("fd71"),n("a447")),j=n.n(w),v=(n("aaa5"),n("a578")),J=n.n(v),z=(n("960d"),n("defb")),A=n.n(z),O=(n("bd49"),n("18ff")),E=n.n(O),k=(n("cb70"),n("b370")),L=n.n(k),I=(n("e3ea"),n("7bc3")),T=n.n(I),S=(n("a7cc"),n("df33")),H=n.n(S),M=(n("f4f9"),n("c2cc")),x=n.n(M),D=(n("b8e0"),n("a4c4")),R=n.n(D),U=(n("ae26"),n("845f")),V=n.n(U),G=(n("1951"),n("eedf")),B=n.n(G),Y=(n("e2f3"),n("06f9")),F=n.n(Y),Q=(n("915d"),n("e04d")),W=n.n(Q);n("0fae");t["default"].use(W.a),t["default"].use(F.a),t["default"].use(B.a),t["default"].use(V.a),t["default"].use(R.a),t["default"].use(x.a),t["default"].use(H.a),t["default"].use(T.a),t["default"].use(L.a),t["default"].use(E.a),t["default"].use(A.a),t["default"].use(J.a),t["default"].use(j.a),t["default"].use(P.a),t["default"].use(C.a),t["default"].use(N.a),t["default"].use(g.a),t["default"].use(m.a),t["default"].use(p.a);var q=n("f676");n("3a06");t["default"].use(q["a"]);var $=n("479e"),K=n.n($),X=(n("8970"),n("a95d")),Z=n.n(X),ee=(n("4baa"),n("2644")),ae=n.n(ee),ne=(n("4f65"),n("a027")),te=n.n(ne),re=(n("3cdf"),n("3ea7")),oe=n.n(re),ue=(n("de6f"),n("671e")),ie=n.n(ue),le=(n("0383"),n("3fc7")),se=n.n(le),he=(n("0afe"),n("b558")),ce=n.n(he),pe=(n("8365"),n("f8a2")),de=n.n(pe),me=(n("3166"),n("7396")),fe=n.n(me),ge=(n("20d4"),n("59ec")),_e=n.n(ge),Ne=(n("acd0"),n("fde9")),be=n.n(Ne),Ce=(n("e149"),n("5ab7")),ye=n.n(Ce),Pe=(n("21f1"),n("068f")),we=n.n(Pe),je=(n("66b4"),n("e82c")),ve=n.n(je),Je=(n("c5ce"),n("c854")),ze=n.n(Je),Ae=(n("2435"),n("a7f5")),Oe=n.n(Ae);n("aa99"),n("8ce9");K.a.install(t["default"]),Z.a.install(t["default"]),ae.a.install(t["default"]),te.a.install(t["default"]),oe.a.install(t["default"]),ie.a.install(t["default"]),se.a.install(t["default"]),ce.a.install(t["default"]),de.a.install(t["default"]),fe.a.install(t["default"]),_e.a.install(t["default"]),be.a.install(t["default"]),ye.a.install(t["default"]),we.a.install(t["default"]),ve.a.install(t["default"]),ze.a.install(t["default"]),Oe.a.install(t["default"]);var Ee=n("5a0c"),ke=n.n(Ee),Le=n("23ad"),Ie=n.n(Le),Te=n("4208"),Se=n.n(Te);n("a471"),n("5999");ke.a.extend(Ie.a),ke.a.extend(Se.a);n("be35");var He=n("2f62"),Me=n("5bbd");let xe=Me;const De=xe.findIndex(e=>e.egg);let Re={};-1!==De&&([Re]=xe.splice(De,1));const Ue=()=>({playList:[],showPlayListDialog:!1,volume:100,liveInfo:{},upcoming:[],btnGroups:xe,egg:Re});var Ve=Ue,Ge=n("9fb0");const Be={[Ge["a"]](e,a){e.playList.push(a)},[Ge["i"]](e,a){e.playList.splice(a,1)},[Ge["j"]](e,a){const n=e.playList.findIndex(e=>e.path===a);e.playList.splice(n,1)},[Ge["d"]](e){e.playList=[]},[Ge["h"]](e){e.showPlayListDialog=!0},[Ge["f"]](e){e.showPlayListDialog=!1},[Ge["g"]](e,a){e.volume=a},[Ge["c"]](e,a){e.liveInfo={...a}},[Ge["b"]](e,a){e.upcoming.push(a)},[Ge["e"]](e){e.upcoming=[]}};var Ye=Be,Fe=n("500f"),Qe=n("bc3a"),We=n.n(Qe);const qe="marine";let $e={data:{inStreaming:null,schedule:null},cachedTime:null};async function Ke(e){const{data:{streams:a},status:n}=await We.a.get("https://holoapi.poi.cat/api/v4/youtube_streams",{params:{ids:e,status:"live,ended",startAt:ke()(ke()().format("YYYY-MM-DD")).unix(),endAt:ke()().unix()}});if(200!==n)throw new Error("cannot get streaming info");let t={title:"",start:"",link:"",averageViewerCount:NaN,maxViewerCount:NaN};const r=a.findIndex(e=>void 0===e.endTime);return-1!==r&&(t.title=a[r].title,t.start=ke()(a[r].startTime),t.link="https://youtube.com/watch?v="+a[r].streamId,t.averageViewerCount=a[r].averageViewerCount,t.maxViewerCount=a[r].maxViewerCount),t}async function Xe(e){const{data:{streams:a},status:n}=await We.a.get("https://holoapi.poi.cat/api/v4/youtube_streams",{params:{ids:e,status:"scheduled",orderBy:"schedule_time:asc"}});if(200!==n)throw new Error("cannot get schedule info");return a}function Ze(){return!(null!==$e.cachedTime&&ke()().diff($e.cachedTime)<=6e5)}async function ea(e){if(!Ze())return;const a=await Ke(e),n=await Xe(e);$e.cachedTime=ke()(),$e.data.inStreaming=a,$e.data.schedule=n}var aa={async[Fe["a"]]({state:e,commit:a}){if(0!==Object.keys(e.liveInfo).length&&!Ze())return;await ea(qe);const n=$e.data.inStreaming;a(Ge["c"],n)},async[Fe["b"]]({state:e,commit:a}){if(0===e.upcoming.length||Ze()){await ea(qe),a(Ge["e"]);for(let e of $e.data.schedule)-1===e.title.search(/free *?chat|chat(ting)? *?room|チャット広場/i)&&a(Ge["b"],{title:e.title,schedule:ke()(e.scheduleTime),link:"https://youtube.com/watch?v="+e.streamId})}}};t["default"].use(He["a"]);var na=new He["a"].Store({state:Ve,mutations:Ye,actions:aa}),ta=n("a925");function ra(){const e=n("49f8"),a={};return e.keys().forEach(n=>{const t=n.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){const r=t[1];a[r]=e(n)}}),a}t["default"].use(ta["a"]);var oa=new ta["a"]({locale:"zh_CN",fallbackLocale:"en",messages:ra()}),ua=n("8c4f");t["default"].use(ua["a"]);const ia=[{path:"/",name:"Index",component:()=>n.e("chunk-589568fc").then(n.bind(null,"d504")),meta:{keepAlive:!0}},{path:"/pc",name:"pc",component:()=>n.e("chunk-7d3a5a6a").then(n.bind(null,"f91b"))},{path:"/mobile",name:"mobile",component:()=>n.e("chunk-0c1283f0").then(n.bind(null,"0897")),children:[{path:"main",component:()=>n.e("chunk-62827b5a").then(n.bind(null,"a613")),mate:{keepAlive:!0}},{path:"playlist",component:()=>n.e("chunk-1d0519f9").then(n.bind(null,"1fdf")),mate:{keepAlive:!0}},{path:"aboutUs",component:()=>n.e("chunk-38814366").then(n.bind(null,"0eaf"))}]}],la=new ua["a"]({routes:ia});var sa=la;n("77ed");t["default"].config.productionTip=!1,new t["default"]({store:na,i18n:oa,router:sa,render:e=>e(h)}).$mount("#app")},"5bbd":function(e){e.exports=JSON.parse('[{"group_name":{"lang":{"zh_CN":"笑声","en":"Laughing","ja_JP":"笑い声"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"咕hihihihihi","en":"gu-hihihi","ja_JP":"ぐふふふ"}},"path":"笑声/咕hihihihihi.mp3"},{"name":{"lang":{"zh_CN":"rua-hihihi","en":"rua-hihihi","ja_JP":"rua-hihihi"}},"path":"笑声/rua-hihihi.mp3"},{"name":{"lang":{"zh_CN":"奸笑 嘲讽","en":"wicked laugh + taunting","ja_JP":"陰険に笑う、煽る"}},"path":"笑声/奸笑 嘲讽.mp3"}]},{"group_name":{"lang":{"zh_CN":"名台词","en":"Classic Lines","ja_JP":"名セリフ"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"宝宝很生气-摔手柄-喘气","en":"Got mad + smash table + heavy breathing","ja_JP":"怒った、台パン、喘ぐ"}},"path":"台词/宝宝很生气-摔手柄-喘气.mp3"},{"name":{"lang":{"zh_CN":"胜利-尖叫-拍手","en":"Victory + screaming + hand clap","ja_JP":"ヴィクトリー、絶叫、拍手"}},"path":"台词/胜利-尖叫-拍手.mp3"},{"name":{"lang":{"zh_CN":"这么久远的问题船长不懂","en":"Senchou can\'t understand questions that ancient","ja_JP":"こんな昔のこと船長分かんないですぅ"}},"path":"台词/这么久远的问题船长不懂.mp3"},{"name":{"lang":{"zh_CN":"玛琳琳（的朋友）要坏掉了","en":"Marinin (\'s friends) going to break","ja_JP":"マリリン（の友達）が壊れちゃったよ"}},"path":"台词/玛琳琳（的朋友）要坏掉了.mp3"},{"name":{"lang":{"zh_CN":"倒车请注意","en":"Backing up!","ja_JP":"バックします！"}},"path":"台词/倒车请注意.mp3"},{"name":{"lang":{"zh_CN":"唔啊好过分","en":"Uwee, that\'s cruel","ja_JP":"うぇんー、ひどいよ"}},"path":"台词/唔啊好过分.mp3","isNew":true},{"name":{"lang":{"zh_CN":"etc卡","en":"ETC Card","ja_JP":"etcカードが挿入されました"}},"path":"台词/etc卡.mp3"},{"name":{"lang":{"zh_CN":"欧拉欧拉欧拉欧拉","en":"ORAORAORAORAORA","ja_JP":"オラオラオラオラオラオラオラオラッ"}},"path":"台词/欧拉欧拉欧拉欧拉.mp3"},{"name":{"lang":{"zh_CN":"再见（布加拉提并感）","en":"Arrivederci","ja_JP":"アリーヴェデルチ"}},"path":"台词/arrivederci.mp3"},{"name":{"lang":{"zh_CN":"涩涩的女医生","en":"eroi female doctor","ja_JP":"エッチな女医師"}},"path":"台词/涩涩的女医生.mp3","isNew":true},{"name":{"lang":{"zh_CN":"QB","en":"QB","ja_JP":"QB"}},"path":"台词/QB.mp3","isNew":true},{"name":{"lang":{"zh_CN":"画风突变","en":"suddenly changed","ja_JP":"一変した"}},"path":"台词/画风突变.mp3","isNew":true},{"name":{"lang":{"zh_CN":"美里-service service","en":"misato-service service","ja_JP":"ミサト-サービスサービス"}},"path":"台词/美里-service service.mp3","isNew":true},{"name":{"lang":{"zh_CN":"高速通过美里小姐","en":"Misato passing by at high speed","ja_JP":"高速で通り過ぎるミサトさん"}},"path":"台词/高速で通り過ぎるミサトさん.mp3","isNew":true},{"name":{"lang":{"zh_CN":"用生命值硬接","en":"received in life","ja_JP":"ライフで受ける"}},"path":"台词/用生命值硬接.mp3","isNew":true},{"name":{"lang":{"zh_CN":"Duel stand-by!","en":"Duel stand-by!","ja_JP":"Duel stand-by!"}},"path":"台词/Duel stand-by!.mp3","isNew":true},{"name":{"lang":{"zh_CN":"召唤蓝眼白龙","en":"Summon the Blue-Eyes Dragon","ja_JP":"ブルーアイズドラゴンを召喚"}},"path":"台词/召唤蓝眼白龙.mp3","isNew":true},{"name":{"lang":{"zh_CN":"住手放开我！","en":"Let me go!","ja_JP":"はなせ！"}},"path":"台词/住手放开我！.mp3","isNew":true},{"name":{"lang":{"zh_CN":"抽卡 我的回合","en":"My turn! Draw!","ja_JP":"俺のターン!ドロー！"}},"path":"台词/抽卡 我的回合.mp3","isNew":true},{"name":{"lang":{"zh_CN":"真是丢人！","en":"Pathetic!","ja_JP":"情けないぜ！"}},"path":"台词/真是丢人！.mp3","isNew":true},{"name":{"lang":{"zh_CN":"让给我！","en":"Give me!","ja_JP":"よこせ！"}},"path":"台词/让给我！.mp3","isNew":true}]},{"group_name":{"lang":{"zh_CN":"哈欠","en":"Yawn","ja_JP":"欠伸"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"哈欠1","en":"yawn2","ja_JP":"欠伸1"}},"path":"哈欠/哈欠1.mp3"},{"name":{"lang":{"zh_CN":"哈欠2","en":"yawn2","ja_JP":"欠伸2"}},"path":"哈欠/哈欠2.mp3"},{"name":{"lang":{"zh_CN":"困了 晚安","en":"Im sleepy, good night guys","ja_JP":"眠くなった、おやすみ"}},"path":"哈欠/困了 晚安.mp3"},{"name":{"lang":{"zh_CN":"啊","en":"ahh","ja_JP":"あああ"}},"path":"哈欠/啊.mp3","isNew":true}]},{"group_name":{"lang":{"zh_CN":"拟声","en":"Onomatopoeia","ja_JP":"擬声語"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"bayaya","en":"bayaya","ja_JP":"bayaya"}},"path":"拟声/bayaya.mp3"},{"name":{"lang":{"zh_CN":"do gann","en":"do gann","ja_JP":"dogann"}},"path":"拟声/do gann.mp3"},{"name":{"lang":{"zh_CN":"dua","en":"dua","ja_JP":"dua"}},"path":"拟声/dua.mp3"},{"name":{"lang":{"zh_CN":"电话铃","en":"phone call","ja_JP":"お電話かけちゃうお〜"}},"path":"拟声/电话铃.mp3"},{"name":{"lang":{"zh_CN":"ahoy","en":"ahoy","ja_JP":"ahoy"}},"path":"拟声/ahoy.mp3"},{"name":{"lang":{"zh_CN":"喵~","en":"nya~","ja_JP":"にゃ~"}},"path":"拟声/喵~.mp3"},{"name":{"lang":{"zh_CN":"嗷呜","en":"Hauuu","ja_JP":"はうううー"}},"path":"拟声/嗷呜.mp3"},{"name":{"lang":{"zh_CN":"嗷啊呀呀呀呀呀呀呀","en":"Ayayayayayayaya","ja_JP":"アヤヤヤヤヤヤヤ"}},"path":"拟声/啊呀呀呀呀呀呀呀.mp3"},{"name":{"lang":{"zh_CN":"肚子叫","en":"My stomach is growling","ja_JP":"お腹が鳴った"}},"path":"拟声/肚子叫.mp3","isNew":true},{"name":{"lang":{"zh_CN":"阿巴阿巴阿巴巴巴","en":"ABA ABA ABABABA","ja_JP":"アバアバアババ"}},"path":"拟声/阿巴阿巴阿巴巴巴.mp3","isNew":true},{"name":{"lang":{"zh_CN":"aaaaaaaaaa（耳膜注意）","en":"aaaaaaaaaaaaaaaaaaaaa","ja_JP":"aaaaaaaaaaaaaaaaaaaaa"}},"path":"拟声/aaaaaaaaaaaaaaaaaaaaa.mp3","isNew":true},{"name":{"lang":{"zh_CN":"世 界 美 声 宝 钟 玛 琳","en":"HAHAHAHAHAHAHAHAHA","ja_JP":"爽やかな笑い声（笑）"}},"path":"拟声/世 界 美 声 宝 钟 玛 琳.mp3","isNew":true},{"name":{"lang":{"zh_CN":"豪爽的笑","en":"HAHAHAHAHAHAHAHAHA2","ja_JP":"爽やかな笑い声（笑）その２"}},"path":"拟声/豪爽的笑.mp3","isNew":true},{"name":{"lang":{"zh_CN":"不出货的悲鸣","en":"gacha failed","ja_JP":"ガチャ失敗"}},"path":"拟声/不出货的悲鸣.mp3","isNew":true},{"name":{"lang":{"zh_CN":"东方地灵殿ex 怪叫","en":"Touhou Chireiden EX Let\'s go!","ja_JP":"東方地霊殿ex 行きましょう↑"}},"path":"拟声/东方地灵殿ex 怪叫.mp3","isNew":true},{"name":{"lang":{"zh_CN":"机器人","en":"robot","ja_JP":"ロボット"}},"path":"拟声/机器人.mp3","isNew":true},{"name":{"lang":{"zh_CN":"巴大蝴","en":"Butterfree","ja_JP":"バタフリー"}},"path":"拟声/巴大蝴.mp3","isNew":true},{"name":{"lang":{"zh_CN":"皮炎皮炎","en":"pien pien","ja_JP":"ぴえんぴえんぴえん"}},"path":"拟声/皮炎皮炎.mp3","isNew":true},{"name":{"lang":{"zh_CN":"美少女的悲鸣","en":"screaming","ja_JP":"美少女の悲鳴"}},"path":"拟声/美少女的悲鸣.mp3","isNew":true}]},{"group_name":{"lang":{"zh_CN":"母国语","en":"Mother Tongue","ja_JP":"母国語"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"母国语1","en":"mother tongue1","ja_JP":"母国語1"}},"path":"母国语/母国语1.mp3"},{"name":{"lang":{"zh_CN":"得得得得得得得得得得得得得得得得得","en":"dududududududu","ja_JP":"dududududududu"}},"path":"母国语/得得得得得得得得得得得得得得得得得.mp3"}]},{"group_name":{"lang":{"zh_CN":"通用","en":"General","ja_JP":"通用"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"我知道了（委屈巴巴）","en":"understood.. (weep)","ja_JP":"分かった（悔しそう）"}},"path":"通用/我知道了（委屈巴巴）.mp3"},{"name":{"lang":{"zh_CN":"f○ck","en":"F○CK","ja_JP":"f○ck"}},"path":"通用/f○ck.mp3"},{"name":{"lang":{"zh_CN":"笨蛋 瞧我的 嘿","en":"baka, u were deceived!","ja_JP":"バカめ、まんまと騙された"}},"path":"通用/笨蛋_瞧我的_嘿.mp3","isNew":true},{"name":{"lang":{"zh_CN":"笨蛋","en":"baka","ja_JP":"バカ"}},"path":"通用/笨蛋.mp3"},{"name":{"lang":{"zh_CN":"欧拉","en":"ORA","ja_JP":"オラッ"}},"path":"通用/欧拉.mp3"},{"name":{"lang":{"zh_CN":"早上好","en":"good morning","ja_JP":"おはよう〜"}},"path":"通用/good morning.mp3","isNew":true},{"name":{"lang":{"zh_CN":"不要生气哦","en":"don\'t be angry","ja_JP":"怒らないで"}},"path":"通用/不要生气哦.mp3","isNew":true},{"name":{"lang":{"zh_CN":"鲨了你哦","en":"u will be killed","ja_JP":"殺すぞ〜"}},"path":"通用/鲨了你哦.mp3","isNew":true},{"name":{"lang":{"zh_CN":"bye bye","en":"bye bye","ja_JP":"bye bye"}},"path":"通用/byebye.mp3","isNew":true}]},{"group_name":{"lang":{"zh_CN":"倒计时","en":"Countdown","ja_JP":"カウントダウン"}},"egg":false,"buttons":[{"name":{"lang":{"zh_CN":"倒计时（元气）","en":"Countdown (pumped)","ja_JP":"カウントダウン（元気）"}},"path":"倒计时/倒计时（元气）.mp3"},{"name":{"lang":{"zh_CN":"倒计时（安眠）","en":"Countdown (Goodnight)","ja_JP":"カウントダウン（おやすみ）"}},"path":"倒计时/倒计时（安眠）.mp3"}]},{"group_name":{"lang":{"zh_CN":"最后祝你身体健康","en":"DANGER!!!","ja_JP":"気をつけて、そしてお大事に"}},"egg":true,"buttons":[{"name":{"lang":{"zh_CN":"啊啊别硬塞","en":"Don\'t force it in ahh～","ja_JP":"ういうい押し込めああん～"}},"path":"最后祝你身体健康/ういうい押し込めああん～.mp3"},{"name":{"lang":{"zh_CN":"要上了（）","en":"AH COMING... SOON!","ja_JP":"あっあっイクっちょっ"}},"path":"最后祝你身体健康/あっあっイクっちょっ.mp3"},{"name":{"lang":{"zh_CN":"啊啊啊沁音前辈的脸，欧柏","en":"AHAHAHA korone\'s face and breast","ja_JP":"あっあっあっああんころね先輩の顔うあぁぁんお〇ぱい"}},"path":"最后祝你身体健康/あっあっあっああんころね先輩の顔うあぁぁんお〇ぱい.mp3"},{"name":{"lang":{"zh_CN":"船长求饶","en":"DON\'T SHOT!","ja_JP":"出しちゃっだめ"}},"path":"最后祝你身体健康/船长求饶.mp3","isNew":true}]}]')},"5c0b":function(e,a,n){"use strict";n("9c0c")},"752b":function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"帮助我们改进网页"},"buttons":{"mainTitle":"船长按钮","playListMode":"播放列表模式"},"footer":{"authors":"作者：","contributors":"特别鸣谢：","license":"本站为爱好者学习交流创作，与Hololive官方无关，切勿用于任何商业目的","followUs":"关注我们："},"playList":{"currentList":"当前列表","play":"播放","pause":"暂停","stop":"停止","clear":"清空列表","dialogTitle":"播放列表","currentTotal":"当前有%d个音频","currentPlayingInfo":"正在播放第%d个","loopMode":"循环播放","delete":"删除","error":"发生错误"},"aboutUs":{"title":"关于我们"},"liveInfo":{"title":"直播信息","nonContent":"当前无直播和直播预定","streaming":"直播：","nonStreaming":"当前没有直播","schedule":"预定：","averageViewerCount":"平均同接","maxViewerCount":"最高同接"}}')},"9c0c":function(e,a,n){},"9fb0":function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"i",(function(){return r})),n.d(a,"j",(function(){return o})),n.d(a,"d",(function(){return u})),n.d(a,"h",(function(){return i})),n.d(a,"f",(function(){return l})),n.d(a,"g",(function(){return s})),n.d(a,"c",(function(){return h})),n.d(a,"b",(function(){return c})),n.d(a,"e",(function(){return p}));const t="ADD_ORDER",r="REMOVE_ORDER",o="REMOVE_ORDER_BY_PATH",u="CLEAN_ALL_ITEMS",i="OPEN_PLAY_LIST_DIALOG",l="CLOSE_PLAY_LIST_DIALOG",s="MODIFY_VOLUME",h="CHANGE_LIVE_INFO",c="ADD_UPCOMING",p="CLEAR_UPCOMING"},be35:function(e,a,n){},c5d2:function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"あなたのお手伝いいただきたい！"},"buttons":{"mainTitle":"マリンボタン","playListMode":"再生リストモード"},"footer":{"authors":"作成者：","contributors":"ご協力頂いた方々：","license":"本サイトは個人的な興味に基づいて立てられており、ホロライブプロダクション公式との関係はありません","followUs":"私たちをフォローする："},"playList":{"currentList":"カレントプレイリスト","play":"プレイ","pause":"一時停止","stop":"ストップ","clear":"リストを空にする","dialogTitle":"再生リスト","currentTotal":"今%dのボイスがあります","currentPlayingInfo":"%d番目のボイス再生中です","loopMode":"連続再生","delete":"削除","error":"エラーが発生しました"},"aboutUs":{"title":"私たちにおいて"},"liveInfo":{"title":"配信一覧","nonContent":"配信中又は配信予定はありません","streaming":"配信中：","nonStreaming":"配信中のコンテンツはありません","schedule":"待機中：","averageViewerCount":"平均同接","maxViewerCount":"最大同接"}}')},edd4:function(e){e.exports=JSON.parse('{"header":{"helpUsImprove":"HELP IMPROVE THIS WEBSITE"},"buttons":{"mainTitle":"marine\'s buttons","playListMode":"Playlist Mode"},"footer":{"authors":"authors:","contributors":"thanks to:","license":"This site has nothing to do with Hololive, do not use it for any commercial purpose!","followUs":"follow us:"},"playList":{"currentList":"current list","play":"play","pause":"pause","stop":"stop","clear":"clear list","dialogTitle":"Playlist","currentTotal":"%d ITEM(S)","currentPlayingInfo":"NOW PLAYING %d","loopMode":"loop mode","delete":"delete","error":"error occurred"},"aboutUs":{"title":"About Us"},"liveInfo":{"title":"LIVE STREAMING INFO","nonContent":"NO STREAMING OR SCHEDULES","streaming":"STREAMING：","nonStreaming":"NO STREAMING","schedule":"SCHEDULE：","averageViewerCount":"AVERAGE VIEWER COUNT","maxViewerCount":"MAX VIEWER COUNT"}}')}});
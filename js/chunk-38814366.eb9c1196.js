(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38814366"],{"0eaf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"box-sizing":"border-box",width:"100%",height:"100%"}},[i("div",{staticClass:"about-us-content"},[i("div",{staticClass:"about-us-title"},[t._v(t._s(t.$t("aboutUs.title")))]),i("div",[t._v(t._s(t.$t("footer.authors")))]),i("div",[t._v(t._s(t.authorMessage))]),i("div",[t._v(t._s(t.$t("footer.contributors")))]),i("div",[t._v(t._s(t.contributorMessage))]),i("div",{staticStyle:{"margin-top":"1em"}},[t._v(t._s(t.$t("footer.license")))])])])},r=[],o=i("1d92"),c={name:"AboutUs",mixins:[o["a"]]},s=c,a=(i("6cbb"),i("2877")),u=Object(a["a"])(s,n,r,!1,null,"f71bedde",null);e["default"]=u.exports},"1d92":function(t,e,i){"use strict";var n=i("fa7d"),r=i("c9d9");e["a"]={data(){return{authors:r["b"],contributors:r["c"]}},computed:{authorMessage(){return Object(n["c"])(this.authors)},contributorMessage(){return Object(n["c"])(this.contributors)}}}},"6bf6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confetti=l;var n=["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"];function r(t,e,i,n,r){return Array.from({length:e}).map((function(e,o){var c=document.createElement("div"),s=i[o%i.length];return c.style["background-color"]=s,c.style.width=n,c.style.height=r,c.style.position="absolute",c.style.willChange="transform, opacity",c.style.visibility="hidden",t.appendChild(c),c}))}function o(t,e,i,n){var r=t*(Math.PI/180),o=e*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*n(),wobbleSpeed:.1+.1*n(),velocity:.5*i+n()*i,angle2D:-r+(.5*o-n()*o),angle3D:-Math.PI/4+n()*(Math.PI/2),tiltAngle:n()*Math.PI,tiltAngleSpeed:.1+.3*n()}}function c(t,e,i,n){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=t.physics.wobbleSpeed,n?t.physics.velocity*=n:t.physics.velocity-=t.physics.velocity*i,t.physics.y+=3,t.physics.tiltAngle+=t.physics.tiltAngleSpeed;var r=t.physics,o=r.x,c=r.y,s=r.z,a=r.tiltAngle,u=r.wobble,l=o+10*Math.cos(u),d=c+10*Math.sin(u),f="translate3d("+l+"px, "+d+"px, "+s+"px) rotate3d(1, 1, 1, "+a+"rad)";t.element.style.visibility="visible",t.element.style.transform=f,t.element.style.opacity=1-e}function s(t,e,i,n,r,o){var s=void 0;return new Promise((function(a){function u(l){s||(s=l);var d=l-s,f=s===l?0:(l-s)/r;e.slice(0,Math.ceil(d/o)).forEach((function(t){c(t,f,i,n)})),l-s<r?requestAnimationFrame(u):(e.forEach((function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})),a())}requestAnimationFrame(u)}))}var a={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:n,duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function u(t){return!t.stagger&&t.delay&&(t.stagger=t.delay),t}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Object.assign({},a,u(e)),n=i.elementCount,c=i.colors,l=i.width,d=i.height,f=i.perspective,h=i.angle,p=i.spread,b=i.startVelocity,v=i.decay,g=i.dragFriction,y=i.duration,m=i.stagger,M=i.random;t.style.perspective=f;var _=r(t,n,c,l,d),w=_.map((function(t){return{element:t,physics:o(h,p,b,M)}}));return s(t,w,g,v,y,m)}},"6cbb":function(t,e,i){"use strict";i("bfed")},bfed:function(t,e,i){},c9d9:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"e",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"f",(function(){return c})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"g",(function(){return y}));const n="/voices/",r="/images/sound-Mute.png",o="/images/sound-filling.png",c=[{title:"中文",value:"zh_CN"},{title:"English",value:"en"},{title:"日本語",value:"ja_JP"}],s=["apocelipes"],a=["宝钟玛琳保护协会"],u="/#/mobile/main",l="/images/home.png",d="/images/home-active.png",f="/#/mobile/playlist",h="/images/playlist.png",p="/images/playlist-active.png",b="/#/mobile/aboutUs",v="/images/about-us.png",g="/images/about-us-active.png",y={zh_CN:[{tabTitle:"主页",curr:!0,href:u,icon:l,activeIcon:d},{tabTitle:"播放列表",curr:!1,href:f,icon:h,activeIcon:p},{tabTitle:"关于我们",curr:!1,href:b,icon:v,activeIcon:g}],ja_JP:[{tabTitle:"ホーム",curr:!0,href:u,icon:l,activeIcon:d},{tabTitle:"再生リスト",curr:!1,href:f,icon:h,activeIcon:p},{tabTitle:"私たちにおいて",curr:!1,href:b,icon:v,activeIcon:g}],en:[{tabTitle:"Home",curr:!0,href:u,icon:l,activeIcon:d},{tabTitle:"Playlist",curr:!1,href:f,icon:h,activeIcon:p},{tabTitle:"About Us",curr:!1,href:b,icon:v,activeIcon:g}]}},fa7d:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return s})),i.d(e,"b",(function(){return a}));var n=i("6bf6");function r(t,e){if(void 0===e||void 0===t)return t;const i=e+t;return i.slice(1)}function o(t,e="、"){return 1===t.length?t[0]:t.join(e)}function c(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|micromessenger|MQQBrowser/i.test(navigator.userAgent)}function s(t,e){return Math.floor(Math.random()*(e-t+1))+t}function a(t,e=60){Object(n["confetti"])(t,{elementCount:e})}}}]);
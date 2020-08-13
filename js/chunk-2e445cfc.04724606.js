(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e445cfc"],{"1d92":function(t,e,n){"use strict";var i=n("fa7d"),s=n("c9d9");e["a"]={data:function(){return{authors:s["b"],contributors:s["c"]}},computed:{authorMessage:function(){return Object(i["b"])(this.authors)},contributorMessage:function(){return Object(i["b"])(this.contributors)}}}},"1fb7":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}n.d(e,"a",(function(){return r}));var a=n("fa7d"),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i(this,t),this.audio=new Audio,this.audio.preload="auto",this.audioPrefix=e,this.addEndHandle(s),this.volume=n}return o(t,[{key:"play",value:function(t){this.audio.src=Object(a["a"])(t,this.audioPrefix),this.audio.play()}},{key:"continuePlay",value:function(){""!==this.audio.currentSrc&&this.audio.play()}},{key:"pause",value:function(){this.audio.pause()}},{key:"stop",value:function(){this.pause(),this.audio.currentTime=0,this.audio.src=""}},{key:"addEndHandle",value:function(t){void 0!==t&&null!==t&&"function"===typeof t&&this.audio.addEventListener("ended",t,!1)}},{key:"volume",set:function(t){t<0||t>100||(this.audio.volume=t/100)}}]),t}()},"36fa":function(t,e,n){},"408a":function(t,e,n){"use strict";var i=n("9fb0");e["a"]={data:function(){return{currentIndex:0,isPlaying:!1,isPaused:!1,isLoop:!1}},methods:{startPlay:function(){this.isPaused?this.handlePause():(this.currentIndex=0,this.handleOrder())},handleOrder:function(){if(this.currentIndex>=this.listItems.length){if(!this.isLoop)return void(this.isPlaying=!1);this.currentIndex=0}this.audio.volume=this.volume,this.isPlaying=!0,this.audio.play(this.listItems[this.currentIndex].path),this.currentIndex++},handlePause:function(){if(this.isPaused)return this.audio.continuePlay(),this.isPaused=!1,void(this.isPlaying=!0);(this.isPlaying||this.isPaused)&&(this.audio.pause(),this.isPaused=!0,this.isPlaying=!1)},handleStop:function(){this.currentIndex=0,this.audio.stop(),this.isPlaying=!1,this.isPaused=!1},handleClean:function(){this.handleStop(),this.$store.commit(i["d"])},handleClose:function(){this.$store.commit(i["e"])}},computed:{listItems:function(){return this.$store.state.playList}}}},"4eb4":function(t,e,n){},"5c94":function(t,e,n){"use strict";var i=n("5e67"),s=n.n(i);s.a},"5e67":function(t,e,n){},7977:function(t,e,n){"use strict";var i=n("36fa"),s=n.n(i);s.a},"7bb2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-panel"},[n("details",{attrs:{open:t.hasLiveInfo||t.hasUpcoming}},[n("summary",{staticClass:"info-title",style:{fontSize:t.titleSize}},[t._v(" "+t._s(t.$t("liveInfo.title"))+" ")]),t.hasLiveInfo||t.hasUpcoming?n("div",{staticClass:"info-content"},[n("ul",[t._v(" "+t._s(t.$t("liveInfo.streaming"))+" "),t.hasLiveInfo?n("li",[n("section",[n("ul",[n("li",[n("el-icon",{staticClass:"iconfont el-icon-abstreaming live-icon"}),t._v(" : "+t._s(t.liveInfo.ytb.start)+" ")],1),n("li",[n("el-icon",{staticClass:"iconfont el-icon-abyoutube1 title-icon"}),t._v(" : "),n("el-link",{staticClass:"stream-link",attrs:{href:t.liveInfo.ytb.link,type:"danger"}},[t._v(" "+t._s(t.liveInfo.ytb.title)+" ")])],1),void 0!==t.liveInfo.bb?n("li",[n("el-icon",{staticClass:"iconfont el-icon-abbilibili-fill bilibili-icon"}),t._v(" : "),n("el-link",{staticClass:"stream-link",attrs:{href:t.liveInfo.bb.link,type:"primary"}},[t._v(" "+t._s(t.liveInfo.bb.title)+" ")])],1):t._e()])])]):n("li",[n("span",{staticStyle:{color:"gray"}},[t._v(" "+t._s(t.$t("liveInfo.nonStreaming"))+" ")])])]),t.hasUpcoming?n("ul",[t._v(" "+t._s(t.$t("liveInfo.schedule"))+" "),t._l(t.upcoming,(function(e,i){return n("li",{key:i},[n("details",{attrs:{open:""}},[n("summary",{staticClass:"schedule-summary"},[t._v(t._s(e.title))]),n("section",[n("ul",{staticStyle:{"margin-top":"10px"}},[n("li",[n("el-icon",{staticClass:"iconfont el-icon-abalarm time-icon"}),t._v(" : "),n("span",[t._v(" "+t._s(e.schedule)+" ")])],1),n("li",[n("el-icon",{staticClass:"iconfont el-icon-abyoutube1 title-icon"}),t._v(" : "),n("el-link",{staticClass:"stream-link",attrs:{href:e.link,type:"danger"}},[t._v(" "+t._s(e.title)+" ")])],1)])])])])}))],2):t._e()]):n("div",[n("div",{staticClass:"non-content"},[t._v(" "+t._s(t.$t("liveInfo.nonContent"))+" ")])])])])},s=[],o=(n("b64b"),n("5530")),a=n("500f"),r=n("2f62"),l={name:"LiveInfo",created:function(){this.$store.dispatch(a["a"]),this.$store.dispatch(a["b"])},props:{titleSize:{required:!0,type:String}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["liveInfo","upcoming"])),{},{hasLiveInfo:function(){return 0!==Object.keys(this.liveInfo).length},hasUpcoming:function(){return 0!==this.upcoming.length}})},c=l,u=(n("7ffe"),n("2877")),d=Object(u["a"])(c,i,s,!1,null,"6bb0961e",null);e["a"]=d.exports},"7ffe":function(t,e,n){"use strict";var i=n("fba6"),s=n.n(i);s.a},8930:function(t,e,n){},"9fda":function(t,e,n){"use strict";var i=n("8930"),s=n.n(i);s.a},a15b:function(t,e,n){"use strict";var i=n("23e7"),s=n("44ad"),o=n("fc6a"),a=n("a640"),r=[].join,l=s!=Object,c=a("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},a856:function(t,e,n){"use strict";e["a"]={computed:{lang:function(){return this.$i18n.locale}}}},acb8:function(t,e,n){},c16c:function(t,e,n){"use strict";var i=n("9fb0");e["a"]={computed:{volume:{get:function(){return this.$store.state.volume},set:function(t){this.$store.commit(i["f"],t)}}}}},ca03:function(t,e,n){"use strict";var i=n("acb8"),s=n.n(i);s.a},d760:function(t,e,n){"use strict";var i=n("4eb4"),s=n.n(i);s.a},e19f:function(t,e,n){var i;!function(){"use strict";var s={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function o(t){return r(c(t),arguments)}function a(t,e){return o.apply(null,[t].concat(e||[]))}function r(t,e){var n,i,a,r,l,c,u,d,p,f=1,h=t.length,b="";for(i=0;i<h;i++)if("string"===typeof t[i])b+=t[i];else if("object"===typeof t[i]){if(r=t[i],r.keys)for(n=e[f],a=0;a<r.keys.length;a++){if(void 0==n)throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"',r.keys[a],r.keys[a-1]));n=n[r.keys[a]]}else n=r.param_no?e[r.param_no]:e[f++];if(s.not_type.test(r.type)&&s.not_primitive.test(r.type)&&n instanceof Function&&(n=n()),s.numeric_arg.test(r.type)&&"number"!==typeof n&&isNaN(n))throw new TypeError(o("[sprintf] expecting number but found %T",n));switch(s.number.test(r.type)&&(d=n>=0),r.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,r.width?parseInt(r.width):0);break;case"e":n=r.precision?parseFloat(n).toExponential(r.precision):parseFloat(n).toExponential();break;case"f":n=r.precision?parseFloat(n).toFixed(r.precision):parseFloat(n);break;case"g":n=r.precision?String(Number(n.toPrecision(r.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=r.precision?n.substring(0,r.precision):n;break;case"t":n=String(!!n),n=r.precision?n.substring(0,r.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=r.precision?n.substring(0,r.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=r.precision?n.substring(0,r.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase();break}s.json.test(r.type)?b+=n:(!s.number.test(r.type)||d&&!r.sign?p="":(p=d?"+":"-",n=n.toString().replace(s.sign,"")),c=r.pad_char?"0"===r.pad_char?"0":r.pad_char.charAt(1):" ",u=r.width-(p+n).length,l=r.width&&u>0?c.repeat(u):"",b+=r.align?p+n+l:"0"===c?p+l+n:l+p+n)}return b}var l=Object.create(null);function c(t){if(l[t])return l[t];var e,n=t,i=[],o=0;while(n){if(null!==(e=s.text.exec(n)))i.push(e[0]);else if(null!==(e=s.modulo.exec(n)))i.push("%");else{if(null===(e=s.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(e[2]){o|=1;var a=[],r=e[2],c=[];if(null===(c=s.key.exec(r)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(c[1]);while(""!==(r=r.substring(c[0].length)))if(null!==(c=s.key_access.exec(r)))a.push(c[1]);else{if(null===(c=s.index_access.exec(r)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(c[1])}e[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");i.push({placeholder:e[0],param_no:e[1],keys:e[2],sign:e[3],pad_char:e[4],align:e[5],width:e[6],precision:e[7],type:e[8]})}n=n.substring(e[0].length)}return l[t]=i}e["sprintf"]=o,e["vsprintf"]=a,"undefined"!==typeof window&&(window["sprintf"]=o,window["vsprintf"]=a,i=function(){return{sprintf:o,vsprintf:a}}.call(e,n,e,t),void 0===i||(t.exports=i))}()},f91b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pc"}},[n("HeaderBar"),n("buttons-panel"),n("FooterBar"),n("transition",{attrs:{name:"backtop-anime","enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutLeft"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.goTop,expression:"goTop"}],staticClass:"back-top",attrs:{plain:"",circle:"",type:"primary",icon:"el-icon-top"},on:{click:t.toTop}})],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn-panel-title",class:{"rainbow-text":t.rainbowText},on:{click:t.easterEgg}},[t._v(" "+t._s(t.$t("buttons.mainTitle"))+" ")]),n("el-row",{staticStyle:{margin:"20px 0"},attrs:{type:"flex",justify:"center"}},[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:3}},[n("el-switch",{attrs:{"active-color":"#c16275","active-text":t.$t("buttons.playListMode")},model:{value:t.isOrdered,callback:function(e){t.isOrdered=e},expression:"isOrdered"}})],1)],1),n("LiveInfo",{staticClass:"live-info-panel",attrs:{"title-size":"32px"}}),t._l(t.btnGroups,(function(e,i){return n("el-card",{key:i,staticClass:"group"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-badge",{attrs:{hidden:!e.isNew,value:"NEW"}},[n("span",{staticClass:"bth-group-title"},[t._v(t._s(e.group_name.lang[t.lang]))])])],1),n("el-row",{staticClass:"btn-row",attrs:{gutter:15}},t._l(e.buttons,(function(e,i){return n("el-badge",{key:i,attrs:{hidden:!e.isNew,value:"NEW"}},[n("el-button",{staticClass:"sound-btn",attrs:{type:"danger",round:""},on:{click:function(n){return t.play(e)}}},[t._v(" "+t._s(e.name.lang[t.lang])+" ")])],1)})),1)],1)})),t.showEgg?n("el-card",{staticClass:"group"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"bth-group-title shield"},[t._v(t._s(t.egg.group_name.lang[t.lang]))])]),n("el-row",{staticClass:"btn-row",attrs:{gutter:15}},t._l(t.egg.buttons,(function(e,i){return n("el-button",{key:i,staticClass:"sound-btn egg-btn",on:{click:function(n){return t.play(e)}}},[n("span",{staticClass:"shield"},[t._v(t._s(e.name.lang[t.lang]))])])})),1)],1):t._e(),n("el-popover",{attrs:{placement:"bottom-start"}},[n("el-button",{staticClass:"sound-control",attrs:{slot:"reference",type:"danger",circle:"",icon:t.soundControlIcon},slot:"reference"}),n("div",{staticClass:"popover-container"},[n("el-button",{staticClass:"iconfont sound-icon",class:t.soundIconClass,attrs:{circle:""},on:{click:t.soundSwitch}}),n("el-slider",{staticClass:"sound-slider",model:{value:t.volume,callback:function(e){t.volume=t._n(e)},expression:"volume"}})],1)],1),n("transition",{attrs:{name:"el-zoom-in-center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOrdered,expression:"isOrdered"}],staticClass:"play-list-btn"},[n("el-badge",{attrs:{value:t.playListLength,hidden:0===t.playListLength,max:99}},[n("el-button",{attrs:{type:"primary",circle:"",icon:"iconfont el-icon-abcategory"},on:{click:t.showPlayList}})],1)],1)]),n("play-list")],2)},a=[],r=(n("a15b"),n("5530")),l=n("2f62"),c=n("1fb7"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.show,center:"","before-close":t.handleClose,"show-close":!1}},[n("div",{staticClass:"play-list-title",attrs:{slot:"title"},slot:"title"},[n("span",[t._v(" "+t._s(t.titleInfo)+" ")]),n("el-button",{staticClass:"close-btn",attrs:{circle:""},on:{click:t.handleClose}},[n("i",{staticClass:"el-icon-close"})])],1),n("div",[n("el-row",[n("span",{staticClass:"current-list-title"},[t._v(" "+t._s(t.$t("playList.currentList"))+": ")])]),n("el-row",{staticClass:"play-list"},t._l(t.listItems,(function(e,i){return n("el-tag",{key:i,staticClass:"play-list-item",attrs:{color:"#c16275",closable:"",effect:"dark"},on:{close:function(e){return t.removeItem(i)}}},[t._v(" "+t._s(e.name.lang[t.lang])+" ")])})),1),n("el-row",[n("el-switch",{staticStyle:{"margin-bottom":"10px"},attrs:{"active-color":"#c16275","active-text":t.$t("playList.loopMode")},model:{value:t.isLoop,callback:function(e){t.isLoop=e},expression:"isLoop"}})],1),n("el-row",[n("el-button-group",[n("el-button",{attrs:{type:"primary",icon:"el-icon-video-play"},on:{click:t.startPlay}},[t._v(" "+t._s(t.$t("playList.play"))+" ")]),n("el-button",{attrs:{type:"warning",icon:"el-icon-video-pause"},on:{click:t.handlePause}},[t._v(" "+t._s(t.$t("playList.pause"))+" ")]),n("el-button",{attrs:{type:"info",icon:"el-icon-switch-button"},on:{click:t.handleStop}},[t._v(" "+t._s(t.$t("playList.stop"))+" ")]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.handleClean}},[t._v(" "+t._s(t.$t("playList.clear"))+" ")])],1)],1)],1)])},d=[],p=n("9fb0"),f=n("e19f"),h=n("c9d9"),b=n("408a"),v=n("a856"),g=n("c16c"),m={name:"PlayList",mixins:[b["a"],v["a"],g["a"]],data:function(){return{audio:new c["a"](h["a"],this.volume,this.handleOrder)}},methods:{removeItem:function(t){t<this.currentIndex&&(this.currentIndex-=1),this.$store.commit(p["h"],t)}},computed:{titleInfo:function(){var t=this.$t("playList.dialogTitle"),e=this.$t("playList.currentTotal"),n=Object(f["sprintf"])(e,this.listItems.length);if(this.isPlaying){var i=this.$t("playList.currentPlayingInfo"),s=Object(f["sprintf"])(i,0===this.currentIndex?1:this.currentIndex);return Object(f["sprintf"])("%s（%s - %s）",t,n,s)}return Object(f["sprintf"])("%s（%s）",t,n)},show:function(){return this.$store.state.showPlayListDialog}}},y=m,_=(n("5c94"),n("2877")),w=Object(_["a"])(y,u,d,!1,null,"c7f1ad6e",null),k=w.exports,x=n("7bb2"),C=n("fa7d"),I={name:"Buttons",mixins:[v["a"],g["a"]],components:{PlayList:k,LiveInfo:x["a"]},data:function(){return{isOrdered:!1,showEgg:!1,clickCount:0,eggTrigger:Object(C["d"])(3,6),rainbowText:!1}},methods:{easterEgg:function(){if(this.showEgg)return this.rainbowText=!1,this.showEgg=!1,void(this.clickCount=0);++this.clickCount===this.eggTrigger&&(this.rainbowText=!0,this.showEgg=!0)},play:function(t){this.isOrdered&&this.$store.commit(p["a"],t);var e=new c["a"](h["a"],this.volume);e.play(t.path)},soundSwitch:function(){0!==this.volume?this.volume=0:this.volume=100},showPlayList:function(){this.$store.commit(p["g"])}},computed:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["btnGroups","egg"])),{},{soundIconClass:function(){return{"el-icon-absound-filling":this.volume,"el-icon-absound-Mute":!this.volume}},soundControlIcon:function(){return["iconfont",this.volume?"el-icon-absound-filling":"el-icon-absound-Mute"].join(" ")},playListLength:function(){return this.$store.state.playList.length}})},L=I,$=(n("9fda"),Object(_["a"])(L,o,a,!1,null,"0516f2ec",null)),O=$.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"footer",attrs:{shadow:"never"}},[n("div",{staticClass:"footer-container"},[n("span",[t._v(t._s(t.$t("footer.authors"))+t._s(t.authorMessage))]),n("br"),n("span",[t._v(t._s(t.$t("footer.contributors"))+t._s(t.contributorMessage))]),n("br"),n("span",[t._v(t._s(t.$t("footer.license")))]),n("br"),n("el-row",{staticStyle:{margin:"10px 0"}},[n("el-col",{attrs:{span:10}},[n("span",[t._v(t._s(t.$t("footer.followUs")))]),n("el-link",{attrs:{icon:"iconfont el-icon-abgithub",href:"https://github.com/ahoyButton/ahoy_button/"}}),n("gh-btns-fork",{attrs:{slug:"ahoyButton/ahoy_button","show-count":""}}),n("gh-btns-star",{attrs:{slug:"ahoyButton/ahoy_button","show-count":""}}),n("gh-btns-follow",{attrs:{user:"ahoyButton","show-count":""}})],1)],1)],1)])},S=[],P=n("1d92"),E={name:"Footer",mixins:[P["a"]]},T=E,B=(n("d760"),Object(_["a"])(T,j,S,!1,null,"55abc72a",null)),M=B.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"nav-bar",attrs:{"body-style":"{height:100%}"}},[n("el-row",{staticStyle:{"{display":"flex","align-items":"center"},attrs:{gutter:5}},[n("el-col",{staticClass:"title",attrs:{span:1}},[t._v(" "+t._s(t.$t("buttons.mainTitle"))+" ")]),n("el-col",{staticClass:"divider",attrs:{span:1}},[n("el-divider",{attrs:{direction:"vertical"}})],1),n("el-col",{attrs:{span:11}},[n("el-button-group",[n("el-button",{staticClass:"btn ytb-btn",attrs:{round:"",type:"danger",icon:"iconfont el-icon-abyoutube"},on:{click:function(e){return t.see("https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg?sub_confirmation=1")}}},[t._v(" Marine Ch. 宝鐘マリン ")]),n("el-button",{staticClass:"btn twt-btn",attrs:{round:"",type:"primary",icon:"iconfont el-icon-absocialtwitteroutline"},on:{click:function(e){return t.see("https://twitter.com/houshoumarine")}}},[t._v(" @houshoumarine ")])],1)],1),n("el-col",{attrs:{span:11}},[n("el-dropdown",{staticClass:"lang-selector",on:{command:t.changeLang}},[n("el-button",{staticClass:"btn lang-btn",attrs:{circle:"",icon:"iconfont el-icon-abdiqiu"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.languages,(function(e){return n("el-dropdown-item",{key:e.title,attrs:{command:e.value}},[t._v(" "+t._s(e.title)+" ")])})),1)],1),n("el-button",{staticClass:"help-us-btn",attrs:{icon:"iconfont el-icon-abgithub"},on:{click:function(e){return t.see("https://github.com/ahoyButton/ahoy_button")}}},[t._v(" "+t._s(t.$t("header.helpUsImprove"))+" ")])],1)],1)],1)},z=[],N={name:"Header",data:function(){return{languages:h["h"]}},methods:{see:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank";window.open(t,e)},changeLang:function(t){this.$i18n.locale=t}}},U=N,A=(n("7977"),Object(_["a"])(U,F,z,!1,null,"294c4081",null)),H=A.exports,q={name:"pc-app",components:{ButtonsPanel:O,HeaderBar:H,FooterBar:M},data:function(){return{goTop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{getScrollLength:function(){return document.documentElement.scrollTop||document.body.scrollTop},handleScroll:function(){var t=this.getScrollLength();this.goTop=t>30},toTop:function(){var t=this,e=function e(){var n=t.getScrollLength();0!==n&&(document.body.scrollTop=document.documentElement.scrollTop=n-50,window.requestAnimationFrame(e))};window.requestAnimationFrame(e)}}},G=q,J=(n("ca03"),Object(_["a"])(G,i,s,!1,null,null,null));e["default"]=J.exports},fa7d:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a}));n("a15b"),n("fb6a");function i(t,e){if(void 0===e||void 0===t)return t;var n=e+t;return n.slice(1)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"、";return 1===t.length?t[0]:t.join(e)}function o(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|micromessenger|MQQBrowser/i.test(navigator.userAgent)}function a(t,e){return Math.floor(Math.random()*(e-t+1))+t}},fba6:function(t,e,n){}}]);
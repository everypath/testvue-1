webpackJsonp([1],{"5lN6":function(e,t,n){e.exports=n.p+"static/img/fuda-logo-blue.43a516a.png"},"9Qnk":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{background:"#0984BD"},attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("qZQC")},null,null).exports,i=n("/ocq"),l=n("LqYc"),s=n.n(l),c=n("bUlO"),d=n.n(c),u={name:"HelloWorld",components:{QRCode:s.a},data:function(){return{msg:"Welcome to Your Vue.js App",timer:"",currentTime:new Date,downloadButton:!1,configs:{value:"helloworld!",imagepath:"passqrcode/passqrcode/static/123455.png",filter:"color"},full_name:"",org_name:"",large_word:"",full_name_show:!1,org_name_show:!1,large_word_show:!1}},created:function(){var e=this;e.timer=setInterval(function(){var t=(new Date).getFullYear(),n=e.appendZero((new Date).getMonth()+1),r=e.appendZero((new Date).getDate()),o=e.appendZero((new Date).getHours()),a=e.appendZero((new Date).getMinutes()),i=e.appendZero((new Date).getSeconds());e.currentTime=t+"/"+n+"/"+r+" "+o+":"+a+":"+i,e.currentdate=n+"月"+r+"日",e.currenthour=o+":"+a,e.currentsec=i},1e3)},methods:{getRandomRagne:function(e,t){return Math.random()*(e-t)+t+""},randomString:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,r="",o=0;o<e;o++)r+=t.charAt(Math.floor(Math.random()*n));return r},appendZero:function(e){return e<10?"0"+e:e},qrcode:function(){var e=this.getRandomRagne(9e4,4e4);new s.a("qrcode",{width:232,height:232,text:e})},barcode:function(){var e=this.randomString(9);new d.a("#barcode",e,{format:"CODE39",lineColor:"#000",width:3,displayValue:!1})},inputBoxHideShow:function(){this.full_name_show=!this.full_name_show,this.org_name_show=!this.org_name_show,this.large_word_show=!this.large_word_show}},mounted:function(){this.qrcode(),this.barcode()},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{"text-align":"left"}},[r("span",{staticStyle:{position:"relative",display:"inline-block",left:"25%",width:"60%"}},[r("p",{staticStyle:{color:"white","font-size":"150%"}},[e._v("姓名："+e._s(e.full_name))]),e._v(" "),r("p",{staticStyle:{color:"white","font-size":"150%"}},[e._v("部门："+e._s(e.org_name))])]),e._v(" "),r("img",{staticStyle:{width:"9%",height:"9%",padding:"0px",position:"float",top:"5%"},attrs:{src:n("5lN6")}})]),e._v(" "),r("div",{staticClass:"qrcanvas"},[r("br"),e._v(" "),r("img",{staticStyle:{width:"95%"},attrs:{id:"barcode"}}),e._v(" "),r("br"),e._v(" "),r("h3",{staticStyle:{color:"green"}},[e._v(e._s(e.currentdate))]),e._v(" "),r("h3",{staticStyle:{color:"green","font-size":"300%"}},[e._v(e._s(e.currentsec))]),e._v(" "),r("h3",{staticStyle:{color:"green"}},[e._v(e._s(e.currenthour))]),r("br"),e._v(" "),r("div",{ref:"qrcode",staticStyle:{display:"inline-block",margin:"0 10px","text-align":"center"},attrs:{id:"qrcode"}}),e._v(" "),r("p",{staticStyle:{"text-align":"center",color:"white"}},[e._v(e._s(e.currentTime))]),e._v(" "),r("marquee",[r("span",{staticStyle:{"font-weight":"bolder","font-size":"40px",color:"green"}},[e._v(e._s(e.large_word))])]),e._v(" "),r("p",{staticStyle:{position:"relative",width:"95%",color:"green","text-align":"left",left:"5%","font-size":"100%"}},[e._v("未见异常，允许通行，请主动出示，配合检测，并做好自我防护，出行前请确认。")]),e._v(" "),e._m(0)],1),e._v(" "),r("br"),e._v(" "),r("div",{staticStyle:{position:"relative",left:"37%",border:"1px solid #FFF","border-radius":"5px",width:"15%",color:"white","font-size":"150%"},on:{click:function(t){return e.inputBoxHideShow()}}},[e._v("每日健康填报")]),e._v(" "),r("br"),e._v(" "),e.full_name_show?r("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{placeholder:"姓名"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}}):e._e(),e._v(" "),e.org_name_show?r("input",{directives:[{name:"model",rawName:"v-model",value:e.org_name,expression:"org_name"}],attrs:{placeholder:"部门"},domProps:{value:e.org_name},on:{input:function(t){t.target.composing||(e.org_name=t.target.value)}}}):e._e(),e._v(" "),e.large_word_show?r("input",{directives:[{name:"model",rawName:"v-model",value:e.large_word,expression:"large_word"}],attrs:{placeholder:"滚动字幕"},domProps:{value:e.large_word},on:{input:function(t){t.target.composing||(e.large_word=t.target.value)}}}):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"relative",left:"-25%"}},[t("img",{staticStyle:{width:"5%",height:"5%",padding:"0px"},attrs:{src:n("ZMDM")}}),this._v(" "),t("p",{staticStyle:{display:"inline-block","text-align":"left"}},[this._v("一卡通"),t("br"),this._v("适用于所有场景")])])}]};var g=n("VU/8")(u,p,!1,function(e){n("9Qnk")},"data-v-716d98e0",null).exports;r.a.use(i.a);var _=new i.a({routes:[{path:"/",name:"HelloWorld",component:g}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:_,components:{App:a},template:"<App/>"})},ZMDM:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADCElEQVRoQ+2bTWgTQRTH/283tjUixbYKfpZ6seBHbZriwUtvIgVrPetBUC8qFHpSCCwJKHoS9KSCBz1bLVTRuwepbmzwUC+KtSpiGw+l0pTNPtnASqNJm93ZZHc72+u8j/m9N29nMn1DWOXvyJS2q2iqQwAPMuMQEXWAuXk1nYaPERWYeY4IOYAmVKX49HWPNlttHlRpoFfXdsRI1Zj5LIBYwyHEHBpE9MDgopZNaN/+NfUfcFLPnADzIxA2i/n1WZuxAKLTbxKp8ZUzKQPue5e5DJNvEaD4PF1P3DNgQqGRt4dTt22Df4GtzDJ4bL3A2oAWNIGG7UyXgK2aVVmZDv0yrrYuGAtFMrutmi4B92czd5n5vCfrKKBGiOjeZG/qApW2nqLyKYRfY6ehNVTV7KJkNnMRzHecaodSnugSJbPpZ2AcDyWA00kTnlOfnp4lYKdT3TDKM/DVWtJLgTsu1iuaRAVK6mmul/0g2o2Ag5gVL+cUZdjLaAbRlnCGrbPpyfYETnUksLdlK5oU738+L5sGPi79xOM5HU/mdYh8ZYWALdhM5zCOtR1oWDJf5N8j9XnMNbQQ8HB7Alf3DDYM1nZ0bWYCY/O6K79CwA/3nUN3fLsrxyJK07+/48yH+65MCAG/6rlSl5pdi8Sq6aNT19cSqzguBDzZm3Ll1Aul/mzGlZkI2EnYdje3ORH3VPZLIe/KnlCGXXn0WSkC9jkBdXcvlOEtsU11n2A1B7+MRVe+hYCjbclVzN0pRftwjXGLlnSNgSqJRTXsJFqCsqGtYWZGemYcP5YXKoagbUMcWucQYqSWjYcWeLFYwEDu5qr5ntg/gm1N5Q0JEXCNJeL7V7pgGhjI3YDBZsUpKyC8PDiK1thG/5e0VzceM0vzyFc5KrbG4uhq6SiD9e3GQ7o7LeluLaW7l7YKS6r/PNS4EwRKTGhbChRJjZOJgGsMVGjF5GtqkbBtSbLGNOlaD6VrLrU+t1K1D1vA0jWIW9BSPQGwTxFSPfKwoaV6xmNDS/VQa+UheT0+xfsD4EXEIq8HfcMAAAAASUVORK5CYII="},qZQC:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2a69088003b80462e329.js.map
webpackJsonp([1],{"1Is0":function(t,e){t.exports=function(t){document.title=t;var e=navigator.userAgent.toLowerCase();if(/iphone|ipad|ipod/.test(e)){var i=document.createElement("iframe");i.style.display="none";i.addEventListener("load",function t(){setTimeout(function(){i.removeEventListener("load",t),document.body.removeChild(i)},0)}),document.body.appendChild(i)}}},"8Yng":function(t,e){},"FW/b":function(t,e){},"IVF+":function(t,e){},Kc0D:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVMM"),s=i("4YfN"),a=i.n(s),o=i("a3Yh"),r=i.n(o),u=i("9rMa");n.a.use(u.a);var l=r()({},"SET_PAGE_TRANSITION",function(t,e){(0,t.commit)("SET_PAGE_TRANSITION",e)}),c=r()({},"GET_PAGE_TRANSITION",function(t){return t.transitionName}),d=r()({},"SET_PAGE_TRANSITION",function(t,e){t.transitionName=e}),h=new u.a.Store({state:{transitionName:"slide-left"},actions:l,getters:c,mutations:d}),m=(resourceConfig.api,resourceConfig.bdcApi,i("uc2b")),p=(m.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[m.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var v=i("vSla")(p,f,!1,function(t){i("jEWS")},null,null).exports,g=(Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:v},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-confirm"},[i("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?i("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?i("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var i=t.msg,n=e.target,s=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.msg=i.concat([null])):a>-1&&(t.msg=i.slice(0,a).concat(i.slice(a+1)))}else t.msg=s}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?i("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var x=i("vSla")(g,w,!1,function(t){i("iku6")},null,null).exports,_=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var S=i("vSla")(_,y,!1,function(t){i("IVF+")},null,null).exports,b=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:v},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var k=i("vSla")(b,C,!1,function(t){i("FW/b")},null,null).exports,T=i("Jp5S"),I=i("9f8V");n.a.directive("transfer-dom",T.a),n.a.use(I.a);a()({},Object(u.b)({transitionName:"GET_PAGE_TRANSITION"}));n.a.directive("transfer-dom",T.a),n.a.use(I.a);var B={name:"App",data:function(){return{loadText:"加载中.."}},components:{Confirm:x,Loading:S,Alert:k,XDialog:v},computed:a()({},Object(u.b)({transitionName:"GET_PAGE_TRANSITION"})),mounted:function(){},methods:{}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("router-view")],1)],1)},staticRenderFns:[]};var E=i("vSla")(B,N,!1,function(t){i("ar2a"),i("Kc0D")},null,null).exports,A=i("zO6J"),$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home tans"},[e("div",{staticClass:"imgBox"},[e("img",{attrs:{src:i("v3F0"),alt:""}}),this._v(" "),e("span",{on:{click:this.open}},[this._v("立即开启")])])])},staticRenderFns:[]};var V=i("vSla")({name:"home",data:function(){return{}},methods:{open:function(){this.$router.push("/bird")}}},$,!1,function(t){i("8Yng")},"data-v-32bf65b8",null).exports,O=i("AA3o"),F=i.n(O),P=i("xSur"),M=i.n(P),R=function(){function t(e,i,n){F()(this,t);var s=this;i.addEventListener("click",function(t){t.layerX,t.layerY;s.fly()}),this.img=e,this.x=200,this.y=100,this.index=0,this.speed=0,this.a=5e-4,this.waitTime=0,this.ctx=n}return M()(t,[{key:"update",value:function(t){this.waitTime=this.waitTime+t,this.waitTime>100&&(this.index=(this.index+1)%3,this.waitTime=this.waitTime-100),this.speed=this.speed+this.a*t,this.y=this.y+this.speed*t}},{key:"draw",value:function(){this.ctx.save(),this.ctx.translate(this.x,this.y);var t=(this.speed>.3?.3:this.speed)/.3*45;this.ctx.rotate(t/180*Math.PI),this.ctx.drawImage(this.img,52*this.index,0,52,45,-26,-22.5,52,45),this.ctx.restore()}},{key:"fly",value:function(){this.speed=-.3}}]),t}(),j=document.documentElement.clientWidth,Y=function(){function t(e,i,n){F()(this,t),this.img=e,this.x=i,this.speed=-.03,this.ctx=n}return M()(t,[{key:"update",value:function(t){this.x<-j&&(this.x=this.x+2*j),this.x=this.x+t*this.speed}},{key:"draw",value:function(){this.ctx.drawImage(this.img,this.x,0)}}]),t}(),G=(document.documentElement.clientWidth,document.documentElement.clientHeight,function(){function t(e,i,n,s){F()(this,t),this.img1=e,this.img2=i,this.pipe1Y=150*Math.random()+50,this.x=n,this.speed=-.1,this.ctx=s}return M()(t,[{key:"update",value:function(t){this.x<-52&&(this.x=this.x+1e3,this.pipe1Y=150*Math.random()+50),this.x=this.x+this.speed*t}},{key:"draw",value:function(){this.ctx.drawImage(this.img2,this.x,this.pipe1Y-420),this.ctx.drawImage(this.img1,this.x,this.pipe1Y+150),this.ctx.rect(this.x,this.pipe1Y-420,52,420),this.ctx.rect(this.x,this.pipe1Y+150,52,420)}}]),t}()),X=(document.documentElement.clientWidth,document.documentElement.clientHeight,function(){function t(e,i,n){F()(this,t),this.img=e,this.x=i,this.speed=-.1,this.ctx=n}return M()(t,[{key:"update",value:function(t){this.x<-336&&(this.x=1344+this.x),this.x=this.x+t*this.speed}},{key:"draw",value:function(){this.ctx.drawImage(this.img,this.x,488)}}]),t}()),D=function(){function t(){F()(this,t)}return M()(t,null,[{key:"load",value:function(t,e){var i=!1,n=new R(e[0],cvs,t),s=new Y(e[4],0,t),a=new Y(e[4],800,t),o=new G(e[2],e[3],800,t),r=new G(e[2],e[3],1e3,t),u=new G(e[2],e[3],1200,t),l=new G(e[2],e[3],1400,t),c=new G(e[2],e[3],1600,t),d=new X(e[1],0,t),h=new X(e[1],336,t),m=new X(e[1],672,t),p=new X(e[1],1008,t),f=Date.now();!function e(){var v=Date.now(),g=v-f;f=v,t.clearRect(0,0,800,600),s.update(g),a.update(g),o.update(g),r.update(g),u.update(g),l.update(g),c.update(g),d.update(g),h.update(g),m.update(g),p.update(g),n.update(g),(n.y<0||n.y>488)&&(i=!0),t.isPointInPath(n.x,n.y)&&(i=!0),t.beginPath(),s.draw(),a.draw(),o.draw(),r.draw(),u.draw(),l.draw(),c.draw(),d.draw(),h.draw(),m.draw(),p.draw(),n.draw(),i||requestAnimationFrame(e)}()}}]),t}(),W={name:"home",data:function(){return{}},mounted:function(){var t=document.getElementById("cvs").getContext("2d"),e=["birds.png","land.png","pipe1.png","pipe2.png","sky.png"],i=[],n=0;function s(){(++n>e.length||n==e.length)&&D.load(t,i)}e.forEach(function(t){var e=new Image;e.addEventListener("load",s),e.src="./static/images/"+t,i.push(e)})}},H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bird",attrs:{id:"bird"}},[e("canvas",{staticStyle:{border:"1px solid black"},attrs:{id:"cvs",width:"800",height:"600"}})])}]};var L=i("vSla")(W,H,!1,function(t){i("t7Xo")},"data-v-89b21f08",null).exports;n.a.use(A.a);var Z=new A.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:V},{path:"/bird",name:"bird",component:L}]}),q=i("1Is0"),z=i.n(q);n.a.config.productionTip=!1,n.a.prototype.$toast=function(t){t.text=t.text||"信息有误!",t.position=t.position||"middle",t.time=t.time||1e3,t.type=t.type||"text",t.width=t.width||"1.5rem",this.$vux.toast.show(t)},Z.afterEach(function(t){var e=void 0;switch(t.name){case"name":default:e="首页"}z()(e)}),new n.a({el:"#app",router:Z,store:h,components:{App:E},template:"<App/>"})},ar2a:function(t,e){},f4gh:function(t,e,i){"use strict";var n=i("YKQd"),s=(n.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var o=i("vSla")(s,a,!1,function(t){i("o3D7")},null,null);e.a=o.exports},iku6:function(t,e){},jEWS:function(t,e){},o3D7:function(t,e){},t7Xo:function(t,e){},v3F0:function(t,e,i){t.exports=i.p+"static/img/timg.5a74bf4.jpg"}},["NHnr"]);
//# sourceMappingURL=app.9d97b69a9d0e8af649e5.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-610cd714"],{"1dde":function(t,e,n){var i=n("d039"),a=n("b622"),r=n("2d00"),o=a("species");t.exports=function(t){return r>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2cee":function(t,e,n){},"49d7":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a=Object(i["z"])("data-v-175f3a49");Object(i["o"])("data-v-175f3a49");var r={id:"editorMain"},o={class:"splitSlot"},c={id:"editorHeader",class:"subHeader"},s=Object(i["e"])(" Timeline Editor "),l=Object(i["f"])("span",{class:"material-icons"},"playlist_play",-1),u=Object(i["e"])(" JSON Data "),p=Object(i["f"])("span",{class:"material-icons"},"code",-1),f={class:"splitSlot"},d=Object(i["f"])("div",{id:"previewHeader",class:"subHeader"},[Object(i["f"])("div",{style:{display:"inline-block"}},[Object(i["e"])(" Animation "),Object(i["f"])("span",{class:"material-icons"},"movie")])],-1),b={key:0,id:"errorMsg"};Object(i["m"])();var m=a((function(t,e){var n=Object(i["s"])("router-link"),m=Object(i["s"])("router-view"),h=Object(i["s"])("PreviewArea"),g=Object(i["s"])("split-panel");return Object(i["l"])(),Object(i["c"])("div",r,[Object(i["f"])(g,{layout:"horizontal",init:65,min:20,max:80,id:"mainSplit"},{1:a((function(){return[Object(i["f"])("div",o,[Object(i["f"])("div",c,[Object(i["f"])(n,{to:"/editor"},{default:a((function(){return[s,l]})),_:1}),Object(i["f"])(n,{to:"/editor/json"},{default:a((function(){return[u,p]})),_:1})]),Object(i["f"])(m,{class:"slotContent"})])]})),2:a((function(){return[Object(i["f"])("div",f,[d,Object(i["f"])(h,{class:"slotContent"})])]})),_:1}),t.errorMsg?(Object(i["l"])(),Object(i["c"])("div",b,Object(i["u"])(t.errorMsg),1)):Object(i["d"])("",!0)])}));function h(t,e){return Object(i["l"])(),Object(i["c"])("div",{class:["split-panel",{dragging:t.dragging,vert:"vertical"==t.layoutType,hori:"horizontal"==t.layoutType}],onMousemove:e[2]||(e[2]=function(){return t.dragMove.apply(t,arguments)}),onMouseup:e[3]||(e[3]=function(){return t.dragStop.apply(t,arguments)})},[Object(i["f"])("div",{class:"split-panel-part",style:"horizontal"==t.layoutType?{width:t.panelSize1}:{height:t.panelSize1}},[Object(i["r"])(t.$slots,"1")],4),Object(i["f"])("div",{class:"split-panel-gutter",onMousedown:e[1]||(e[1]=function(){return t.dragStart.apply(t,arguments)}),style:"horizontal"==t.layoutType?{width:t.gutterSizeString}:{height:t.gutterSizeString}},null,36),Object(i["f"])("div",{class:"split-panel-part",style:"horizontal"==t.layoutType?{width:t.panelSize2}:{height:t.panelSize2}},[Object(i["r"])(t.$slots,"2")],4)],34)}n("99af");var g=Object(i["g"])({props:["layout","gutter","init","min","max"],data:function(){return{layoutType:this.layout||"horizontal",gutterSize:this.gutter||3,percent:this.init||50,minPercent:this.min||0,maxPercent:this.max||100,dragging:!1,startPos:0,startSplit:0}},computed:{gutterSizeString:function(){return"".concat(this.gutterSize,"px")},panelSize1:function(){return this.percent<this.minPercent&&(this.percent=this.minPercent),"calc(".concat(this.percent,"% - ").concat(this.gutterSize,"px)")},panelSize2:function(){return this.percent>this.maxPercent&&(this.percent=this.maxPercent),"".concat(100-this.percent,"%")}},methods:{dragStart:function(t){t.preventDefault(),this.dragging=!0,this.startPos="horizontal"===this.layoutType?t.pageX:t.pageY,this.startSplit=this.percent,t.stopPropagation()},dragMove:function(t){if(this.dragging){t.preventDefault();var e=("horizontal"===this.layoutType?t.pageX:t.pageY)-this.startPos,n="horizontal"===this.layoutType?this.$el.offsetWidth:this.$el.offsetHeight;this.percent=this.startSplit+e/n*100,t.stopPropagation()}},dragStop:function(t){this.dragging&&(t.preventDefault(),this.dragging=!1,t.stopPropagation())}}});n("8b3f");g.render=h;var v=g,O=Object(i["z"])("data-v-36b7db95");Object(i["o"])("data-v-36b7db95");var j={id:"previewAreaMain"},y={id:"playbackButtons"},S={key:0},w={key:1},z=Object(i["f"])("h4",null,"Export animation:",-1);Object(i["m"])();var T=O((function(t,e){var n=this,a=Object(i["s"])("LottieAnimation");return Object(i["l"])(),Object(i["c"])("div",j,[Object(i["f"])(a,{animData:this.animData,"onNew-anim":e[1]||(e[1]=function(t){return n.anim=t})}),Object(i["f"])("p",y,[Object(i["f"])("span",{onClick:e[2]||(e[2]=function(t){n.anim.goToAndStop(n.anim.firstFrame,!0)}),class:"material-icons black-button",title:"First frame (down arrow)"},"first_page"),Object(i["f"])("span",{onClick:e[3]||(e[3]=function(){return t.goToPrevFrame.apply(t,arguments)}),class:"material-icons black-button",title:"Previous frame (left arrow)"},"chevron_left"),Object(i["f"])("span",{onClick:e[4]||(e[4]=function(t){n.anim.togglePause()}),class:"material-icons black-button",title:"Play/pause (spacebar)"},[this.anim&&this.anim.isPaused?(Object(i["l"])(),Object(i["c"])("span",S,"play_arrow")):(Object(i["l"])(),Object(i["c"])("span",w,"pause"))]),Object(i["f"])("span",{onClick:e[5]||(e[5]=function(){return t.goToNextFrame.apply(t,arguments)}),class:"material-icons black-button",title:"Next frame (right arrow)"},"chevron_right"),Object(i["f"])("span",{onClick:e[6]||(e[6]=function(t){n.anim.goToAndStop(n.anim.firstFrame+n.anim.totalFrames,!0)}),class:"material-icons black-button",title:"Last frame (up arrow)"},"last_page")]),z,Object(i["f"])("div",null,[Object(i["f"])("button",{onClick:e[7]||(e[7]=function(t){return n.exportAnimation(".tgs")}),class:"text-button"},"Save as TGS/Gzip"),Object(i["f"])("button",{onClick:e[8]||(e[8]=function(t){return n.exportAnimation(".json")}),class:"text-button"},"Save as Lottie/JSON")])])})),k=n("5502"),x=n("60ed"),P=n("cd49"),A=n("d7ac"),F=Object(i["g"])({components:{LottieAnimation:x["a"]},data:function(){return{anim:null}},computed:Object(k["b"])(["animData"]),methods:{goToPrevFrame:function(){if(null!=this.anim){var t=Math.round(this.anim.currentFrame-.55);t<this.anim.firstFrame&&(t+=this.anim.totalFrames),this.anim.goToAndStop(t,!0)}},goToNextFrame:function(){if(null!=this.anim){var t=Math.round(this.anim.currentFrame+.55);t>=this.anim.firstFrame+this.anim.totalFrames&&(t-=this.anim.totalFrames),this.anim.goToAndStop(t,!0)}},globalKeypress:function(t){if(t.target){var e=t.target.nodeName.toLowerCase();if("textarea"==e||"input"==e)return}var n;if("Space"===t.code)null===(n=this.anim)||void 0===n||n.togglePause();else if("ArrowLeft"===t.code)this.goToPrevFrame();else if("ArrowRight"===t.code)this.goToNextFrame();else if("ArrowUp"===t.code){var i;null===(i=this.anim)||void 0===i||i.goToAndStop(this.anim.firstFrame+this.anim.totalFrames,!0)}else if("ArrowDown"===t.code){var a;null===(a=this.anim)||void 0===a||a.goToAndStop(this.anim.firstFrame,!0)}},exportAnimation:function(t){var e=JSON.stringify(this.animData);".tgs"==t&&(e=Object(A["gzip"])(e)),Object(P["downloadDataAsFile"])(this.animData.nm,t,e)}},mounted:function(){window.addEventListener("keydown",this.globalKeypress)},beforeUnmount:function(){window.removeEventListener("keydown",this.globalKeypress)}});n("ee31");F.render=T,F.__scopeId="data-v-36b7db95";var M=F,_=Object(i["g"])({components:{SplitPanel:v,PreviewArea:M},computed:{errorMsg:function(){return Object(k["c"])().state.errorMsg}}});n("5230");_.render=m,_.__scopeId="data-v-175f3a49";e["default"]=_},5230:function(t,e,n){"use strict";n("c886")},"8b3f":function(t,e,n){"use strict";n("cbec")},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),p=n("1dde"),f=n("b622"),d=n("2d00"),b=f("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=d>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=p("concat"),O=function(t){if(!o(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},j=!g||!v;i({target:"Array",proto:!0,forced:j},{concat:function(t){var e,n,i,a,r,o=c(this),p=u(o,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?o:arguments[e],O(r)){if(a=s(r.length),f+a>m)throw TypeError(h);for(n=0;n<a;n++,f++)n in r&&l(p,f,r[n])}else{if(f>=m)throw TypeError(h);l(p,f++,r)}return p.length=f,p}})},c886:function(t,e,n){},cbec:function(t,e,n){},ee31:function(t,e,n){"use strict";n("2cee")}}]);
//# sourceMappingURL=chunk-610cd714.69996ec4.js.map
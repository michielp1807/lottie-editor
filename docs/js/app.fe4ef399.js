(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8afbc271","chunk-2d0d7e55":"01cbea2a","chunk-610cd714":"69996ec4","chunk-67f8c068":"76b9f214"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-610cd714":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"1a63a9c5","chunk-2d0d7e55":"31d6cfe0","chunk-610cd714":"d2d1c0d5","chunk-67f8c068":"31d6cfe0"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/lottie-editor/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1294:function(e,t,n){},1499:function(e,t,n){},"2e4c":function(e,t,n){},"4a59":function(e,t,n){},"60ed":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["z"])("data-v-27880aeb");Object(a["o"])("data-v-27880aeb");var o={ref:"animContainer"};Object(a["m"])();var i=r((function(e,t){return Object(a["l"])(),Object(a["c"])("div",o,null,512)})),c=n("94f1"),u=n.n(c),s=Object(a["g"])({data:function(){return{anim:null}},props:["animData"],methods:{setAnimation:function(e){e=JSON.parse(JSON.stringify(this.animData));var t=!this.anim||!this.anim.isPaused,n=this.anim?this.anim.currentFrame:0;this.$refs.animContainer.innerHTML="";var a={container:this.$refs.animContainer,renderer:"svg",loop:!0,autoplay:!0,animationData:e};this.anim=u.a.loadAnimation(a),t?this.anim.goToAndPlay(n,!0):this.anim.goToAndStop(n,!0),this.$emit("new-anim",this.anim)}},mounted:function(){this.setAnimation(this.animData)},unmounted:function(){},watch:{animData:function(e){this.setAnimation(e)}}});n("b6dd");s.render=i,s.__scopeId="data-v-27880aeb";t["a"]=s},"64be":function(e,t,n){"use strict";n("c894")},"7eab":function(e,t,n){"use strict";n("9c14")},"8a73":function(e,t,n){"use strict";n("cade")},"91f5":function(e,t,n){"use strict";n("2e4c")},"9c14":function(e,t,n){},b6dd:function(e,t,n){"use strict";n("4a59")},b850:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d3b7"),n("25f0");var a,r,o=n("ade3"),i=n("5502"),c=n("d7fc"),u={animData:c,errorMsg:"",freshlyLoadedAnimData:null};(function(e){e["SET_ANIM_DATA"]="SET_ANIM_DATA",e["PARSE_AND_SET_ANIM_DATA"]="PARSE_ANIM_DATA",e["SET_LOADED_ANIM_DATA"]="SET_LOADED_ANIM_DATA"})(r||(r={}));var s=(a={},Object(o["a"])(a,r.SET_ANIM_DATA,(function(e,t){e.animData=t,e.errorMsg=""})),Object(o["a"])(a,r.PARSE_AND_SET_ANIM_DATA,(function(e,t){try{e.animData=JSON.parse(t),e.errorMsg=""}catch(n){e.errorMsg=n.toString()}})),Object(o["a"])(a,r.SET_LOADED_ANIM_DATA,(function(e,t){e.freshlyLoadedAnimData=t})),a);t["b"]=Object(i["a"])({state:u,mutations:s,modules:{}})},b9f3:function(e,t,n){"use strict";n("1294")},c894:function(e,t,n){},cade:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"downloadDataAsFile",(function(){return te}));n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"};function o(e,t){var n=Object(a["s"])("Header"),o=Object(a["s"])("router-view");return Object(a["l"])(),Object(a["c"])("div",r,[Object(a["f"])(n,{id:"header"}),Object(a["f"])(o,{class:"content"})])}var i=Object(a["z"])("data-v-9203024a");Object(a["o"])("data-v-9203024a");var c={id:"header"},u=Object(a["e"])(" Lottie/TGS Editor "),s={id:"headerButtons"};Object(a["m"])();var d=i((function(e,t){var n=Object(a["s"])("LabeledButton"),r=Object(a["s"])("router-link");return Object(a["l"])(),Object(a["c"])("div",c,[u,Object(a["f"])("div",s,[Object(a["f"])(r,{to:"/",class:"material-icons white-button"},{default:i((function(){return[Object(a["f"])(n,{icon:"home",name:"Home",iconSize:"30px",textSize:"26px"})]})),_:1}),Object(a["f"])(r,{to:"/editor",class:"material-icons white-button"},{default:i((function(){return[Object(a["f"])(n,{icon:"edit",name:"Editor",iconSize:"30px",textSize:"26px"})]})),_:1}),Object(a["f"])(r,{to:"/about",class:"material-icons white-button"},{default:i((function(){return[Object(a["f"])(n,{icon:"info",name:"About",iconSize:"30px",textSize:"26px"})]})),_:1})])])})),l=(n("b0c0"),Object(a["z"])("data-v-a5cb8f62")),f=l((function(e,t){return Object(a["l"])(),Object(a["c"])("span",{class:"labeled-button",title:e.name},[Object(a["f"])("span",{class:"material-icons",style:{fontSize:e.iconSize}},Object(a["u"])(e.icon),5),Object(a["f"])("span",{class:"label",style:{fontSize:e.textSize,lineHeight:e.iconSize}},Object(a["u"])(e.name),5)],8,["title"])})),b=n("d4ec"),p=n("262e"),m=n("2caf"),h=n("9ab4"),v=n("ce1f"),O=function(e){Object(p["a"])(n,e);var t=Object(m["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return n}(v["b"]);O=Object(h["a"])([Object(v["a"])({props:{name:String,textSize:String,icon:String,iconSize:String}})],O);var j=O;n("91f5");j.render=f,j.__scopeId="data-v-a5cb8f62";var y=j,A=Object(a["g"])({name:"Header",components:{LabeledButton:y}});n("7eab");A.render=d,A.__scopeId="data-v-9203024a";var g=A,_=Object(a["g"])({name:"App",components:{Header:g}});n("64be");_.render=o;var k=_,D=n("8c4f"),S=Object(a["z"])("data-v-14c75a20");Object(a["o"])("data-v-14c75a20");var T={id:"home"},w=Object(a["f"])("h1",null,"Welcome!",-1),x=Object(a["f"])("p",null,"*Short introduction of the site here!*",-1),E=Object(a["f"])("h2",null,"Example animations",-1),L=Object(a["f"])("p",null,"Here will be previews of the example animations that you can click to open!",-1);Object(a["m"])();var N=S((function(e,t){var n=Object(a["s"])("FileDrop"),r=Object(a["s"])("LoadedAnimPreview");return Object(a["l"])(),Object(a["c"])("div",T,[w,x,Object(a["f"])(n),Object(a["f"])(r),E,L])})),I=Object(a["z"])("data-v-6503422c");Object(a["o"])("data-v-6503422c");var M=Object(a["f"])("div",{class:"material-icons"},"open_in_browser",-1),z=Object(a["f"])("div",null,"Drop a TGS or JSON file here or click to select one manually!",-1);Object(a["m"])();var P=I((function(e,t){var n=this;return Object(a["l"])(),Object(a["c"])("div",{id:"dropArea",class:{dragover:e.dragover},onDrop:t[2]||(t[2]=Object(a["y"])((function(){return e.dropFiles.apply(e,arguments)}),["prevent"])),onDragover:t[3]||(t[3]=Object(a["y"])((function(t){e.dragover=!0}),["prevent"])),onDragenter:t[4]||(t[4]=function(t){e.dragover=!0}),onDragend:t[5]||(t[5]=function(t){e.dragover=!1}),onDragleave:t[6]||(t[6]=function(t){e.dragover=!1}),onClick:t[7]||(t[7]=function(e){return n.$refs.fileInput.click()})},[M,z,Object(a["f"])("input",{type:"file",ref:"fileInput",id:"fileInput",accept:".tgs, .json, .lottie",onChange:t[1]||(t[1]=function(){return e.openFile.apply(e,arguments)})},null,544)],34)})),C=(n("c19f"),n("d7ac")),F=n("b850"),R=Object(a["g"])({data:function(){return{dragover:!1}},methods:{dropFiles:function(e){var t;this.dragover=!1,this.handleFile(null===(t=e.dataTransfer)||void 0===t?void 0:t.files)},openFile:function(e){this.handleFile(e.target.files)},handleFile:function(e){if(e&&e.length>0){console.log(e[0]);var t=new FileReader;t.readAsBinaryString(e[0]),t.addEventListener("load",this.onFileLoaded)}},onFileLoaded:function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.result;if(n instanceof ArrayBuffer&&(n=new TextDecoder("utf-8").decode(n)),n){try{n=new TextDecoder("utf-8").decode(Object(C["ungzip"])(n))}catch(r){console.log(r)}try{var a=JSON.parse(n);F["b"].commit(F["a"].SET_LOADED_ANIM_DATA,a)}catch(r){console.log(r)}}}}});n("8a73");R.render=P,R.__scopeId="data-v-6503422c";var B=R,H=Object(a["z"])("data-v-181bc7b5");Object(a["o"])("data-v-181bc7b5");var J={key:0,id:"loadedAnimPreview"},$=Object(a["f"])("h3",null,"Are you sure you want to open the following animation in the editor?",-1),U=Object(a["f"])("p",null,"(Opening a new animation will remove the current one!)",-1);Object(a["m"])();var q=H((function(e,t){var n=Object(a["s"])("LottieAnimation");return this.freshlyLoadedAnimData?(Object(a["l"])(),Object(a["c"])("div",J,[$,Object(a["f"])(n,{animData:this.freshlyLoadedAnimData}),U,Object(a["f"])("p",null,[Object(a["f"])("button",{class:"text-button",onClick:t[1]||(t[1]=function(){return e.cancel.apply(e,arguments)})},"Cancel"),Object(a["f"])("button",{class:"text-button primary",onClick:t[2]||(t[2]=function(){return e.open.apply(e,arguments)})},"Open")])])):Object(a["d"])("",!0)})),G=n("5502"),K=n("60ed"),W=Object(a["g"])({computed:Object(G["b"])(["freshlyLoadedAnimData"]),components:{LottieAnimation:K["a"]},methods:{cancel:function(){F["b"].commit(F["a"].SET_LOADED_ANIM_DATA,null)},open:function(){F["b"].commit(F["a"].SET_ANIM_DATA,this.freshlyLoadedAnimData),F["b"].commit(F["a"].SET_LOADED_ANIM_DATA,null),this.$router.push("editor")}}});n("d700");W.render=q,W.__scopeId="data-v-181bc7b5";var Q=W,V=Object(a["g"])({components:{FileDrop:B,LoadedAnimPreview:Q}});n("b9f3");V.render=N,V.__scopeId="data-v-14c75a20";var X=V,Y=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/editor",name:"Editor",component:function(){return n.e("chunk-610cd714").then(n.bind(null,"49d7"))},children:[{path:"",component:function(){return n.e("chunk-2d0d7e55").then(n.bind(null,"7985"))}},{path:"json",component:function(){return n.e("chunk-67f8c068").then(n.bind(null,"f143"))}}]}],Z=Object(D["a"])({history:Object(D["b"])(),routes:Y}),ee=Z;function te(e,t,n){var a=new Blob([n],{type:"application/octet-stream"}),r=window.URL.createObjectURL(a);e||(e="sticker");var o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download",e+t),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}Object(a["b"])(k).use(F["b"]).use(ee).mount("#app")},d700:function(e,t,n){"use strict";n("1499")},d7fc:function(e){e.exports=JSON.parse('{"tgs":1,"v":"5.5.2","fr":30,"ip":0,"op":60,"w":512,"h":512,"nm":"complex1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":40,"s":[90]}]},"p":{"a":0,"k":[256,256,0]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":3,"s":{"a":0,"k":[256,256]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"nm":"Rectangle Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1]},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[100]},{"t":40,"s":[0]}]},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-0.031]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Rectangle 1","bm":0,"hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"p":{"a":0,"k":[256,256,0]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":3,"s":{"a":0,"k":[256,256]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"nm":"Rectangle Path 1","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[1,0,1]},{"t":40,"s":[1,0.5,0]}]},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"t":40,"s":[100]}]},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-0.031]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[120,120]},{"t":60,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Rectangle 1","bm":0,"hd":false}],"ip":20,"op":60,"st":0,"bm":0}]}')}});
//# sourceMappingURL=app.fe4ef399.js.map
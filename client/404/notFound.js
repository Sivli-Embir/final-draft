Template.notFound.rendered = function () {
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());

/*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Manufacturer:
 * Dalton Maag Ltd.
 */
Cufon.registerFont({"w":450,"face":{"font-family":"Aller","font-weight":700,"font-stretch":"normal","units-per-em":"1000","panose-1":"2 0 8 3 4 0 0 2 0 4","ascent":"800","descent":"-200","x-height":"12","bbox":"-201 -972 1450 249.419","underline-thickness":"50","underline-position":"-50","unicode-range":"U+0020-U+FB04"},"glyphs":{" ":{"w":220},"\ufb00":{"d":"692,-517v7,35,7,74,0,108r-120,0r0,409v-48,8,-93,8,-141,0r0,-409r-186,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-16,-179,133,-254,303,-207v-6,46,-22,77,-37,112v-16,-4,-28,-8,-50,-8v-61,-2,-77,40,-75,103r186,0v-17,-182,130,-257,298,-214v-3,45,-8,77,-21,112v-76,-20,-151,0,-136,102r120,0","w":723},"\ufb01":{"d":"478,-602v-84,-36,-251,-50,-233,85r317,0r0,517v-48,8,-90,8,-139,0r0,-409r-178,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-6,-155,87,-226,233,-226v71,0,123,7,174,29v-3,45,-15,82,-33,112","w":632},"\ufb02":{"d":"355,-517v7,35,7,74,0,108r-110,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-22,-233,240,-250,457,-209r0,520v0,59,6,100,64,98v12,0,25,-2,36,-4v10,35,14,71,9,109v-137,32,-249,-21,-249,-172r0,-446v-89,-18,-191,-3,-176,104r110,0","w":678},"\ufb03":{"d":"805,-602v-84,-36,-251,-50,-233,85r317,0r0,517v-48,8,-90,8,-139,0r0,-409r-178,0r0,409v-48,8,-93,8,-141,0r0,-409r-186,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-16,-179,133,-254,303,-207v-6,47,-21,76,-37,112v-16,-4,-28,-8,-50,-8v-61,-2,-77,40,-75,103r186,0v-6,-155,87,-226,233,-226v71,0,123,7,174,29v-3,45,-15,82,-33,112","w":953},"\ufb04":{"d":"682,-517v7,35,7,74,0,108r-110,0r0,409v-48,8,-93,8,-141,0r0,-409r-186,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-16,-179,133,-254,303,-207v-6,47,-21,76,-37,112v-16,-4,-28,-8,-50,-8v-61,-2,-77,40,-75,103r186,0v-22,-233,240,-250,457,-209r0,520v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109v-137,32,-249,-21,-249,-172r0,-446v-89,-18,-191,-3,-176,104r110,0","w":1005},"!":{"d":"72,-719v52,-8,103,-8,155,0r-10,489v-47,8,-89,8,-135,0xm76,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":299},"\"":{"d":"179,-439v-40,7,-89,7,-129,0r0,-281v40,-7,89,-7,129,0r0,281xm379,-439v-40,7,-89,7,-129,0r0,-281v40,-7,89,-7,129,0r0,281","w":429},"#":{"d":"279,-30v-39,7,-84,7,-123,0r14,-175r-113,0v-6,-32,-5,-74,1,-106r121,0r10,-121r-112,0v-6,-34,-6,-73,0,-107r121,0r13,-151v37,-7,84,-7,121,0r-13,151r122,0r13,-151v38,-7,84,-7,122,0r-13,151r105,0v7,34,6,73,0,107r-113,0r-10,121r104,0v6,34,6,72,0,106r-113,0r-14,175v-38,7,-84,7,-122,0r14,-175r-121,0xm423,-311r10,-121r-122,0r-10,121r122,0","w":734},"$":{"d":"531,-213v-3,120,-74,192,-182,215r0,116v-28,8,-58,8,-87,0r0,-106v-84,1,-152,-11,-211,-37v5,-44,17,-81,30,-120v87,37,290,65,290,-61v0,-87,-95,-90,-154,-120v-78,-39,-147,-73,-147,-188v0,-125,78,-192,192,-205r0,-106v29,-8,57,-8,87,0r0,103v59,5,104,17,155,34v-4,39,-15,77,-32,114v-43,-19,-89,-32,-153,-31v-102,-19,-129,110,-45,147v114,50,261,71,257,245","w":600},"%":{"d":"702,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm173,-506v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm436,-506v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213xm746,-200v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm1009,-200v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213","w":1050},"&":{"d":"219,-544v0,115,165,69,272,78r118,-141r22,0r0,141r102,0v7,34,6,73,0,108r-102,0r0,122v-4,179,-128,248,-309,248v-154,0,-273,-60,-273,-216v0,-98,52,-165,120,-198v-47,-26,-91,-74,-91,-148v0,-177,211,-211,365,-158v0,38,-10,73,-31,105v-73,-29,-193,-30,-193,59xm338,-110v141,0,163,-104,155,-248r-168,0v-71,-1,-120,52,-119,124v2,81,43,124,132,124","w":763},"'":{"d":"179,-439v-40,7,-89,7,-129,0r0,-281v40,-7,89,-7,129,0r0,281","w":229},"(":{"d":"307,167v-39,7,-103,9,-141,0v-134,-189,-155,-623,-44,-859v14,-31,29,-59,44,-84v37,-9,103,-7,141,0v-67,117,-113,277,-113,471v0,194,46,355,113,472","w":357},")":{"d":"50,-776v39,-7,103,-9,141,0v135,189,154,623,44,859v-14,31,-29,59,-44,84v-37,9,-103,7,-141,0v67,-117,113,-278,113,-472v0,-194,-46,-354,-113,-471","w":357},"*":{"d":"302,-582v-30,5,-72,6,-99,0r11,-137v25,-4,51,-4,76,0xm36,-532v3,-26,14,-52,24,-72r134,31v-6,35,-16,67,-31,94xm412,-347v-18,18,-38,34,-62,45r-90,-104v26,-25,53,-44,80,-58xm445,-605v11,20,18,47,23,72r-127,54v-14,-28,-25,-60,-30,-94xm166,-463v27,14,54,33,80,58r-90,104v-24,-11,-44,-27,-62,-45","w":484},"+":{"d":"239,-293r-157,0v-8,-40,-8,-81,0,-121r157,0r0,-177v40,-8,81,-8,121,0r0,177r157,0v8,40,8,81,0,121r-157,0r0,177v-40,8,-81,8,-121,0r0,-177","w":600},",":{"d":"100,-144v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":291},"-":{"d":"313,-336v8,40,8,83,0,123r-255,0v-8,-40,-8,-83,0,-123r255,0","w":371},".":{"d":"71,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":289},"\/":{"d":"255,-719v49,-8,93,-8,142,0r-244,719v-48,8,-93,8,-141,0","w":409},"0":{"d":"564,-324v0,193,-72,336,-263,336v-190,0,-259,-144,-259,-336v0,-193,71,-338,263,-338v190,0,259,145,259,338xm303,-540v-90,0,-111,98,-111,216v0,74,10,129,30,164v20,35,47,52,81,52v89,0,108,-99,108,-216v0,-74,-10,-129,-29,-164v-19,-35,-45,-52,-79,-52","w":600},"1":{"d":"115,0v-7,-38,-7,-81,0,-120r145,0r0,-350r-123,49v-24,-31,-42,-66,-53,-107r287,-126r27,0r0,534r143,0v7,39,7,82,0,120r-426,0","w":600},"2":{"d":"70,-624v157,-71,435,-51,425,155v-6,128,-81,194,-135,276r-53,71r213,0v8,40,8,83,0,122r-457,0r-7,-15r207,-270v37,-52,79,-89,83,-165v5,-113,-173,-98,-242,-58v-16,-34,-31,-72,-34,-116","w":600},"3":{"d":"380,-183v-2,-94,-112,-109,-202,-90r-10,-15r134,-242r-220,0v-8,-40,-8,-82,0,-122r418,0r10,17r-161,267v109,2,172,71,172,176v0,175,-116,255,-290,259v-80,2,-132,-13,-191,-33v3,-43,18,-87,35,-117v109,43,308,50,305,-100","w":600},"4":{"d":"499,59v-45,4,-93,7,-138,0r0,-140r-336,0r-9,-14r283,-572v50,6,91,20,125,47r-206,418r143,0r0,-160v45,-4,93,-7,138,0r0,160r72,0v8,38,8,84,0,121r-72,0r0,140","w":600},"5":{"d":"237,-283v-45,0,-79,8,-112,25r-15,-12r15,-382r358,0v8,40,8,82,0,122r-230,0r-6,143v158,-29,282,46,279,202v-4,178,-124,252,-305,252v-62,0,-121,-13,-170,-30v4,-44,21,-84,35,-120v103,43,294,44,291,-93v-2,-77,-52,-108,-140,-107","w":600},"6":{"d":"314,12v-175,0,-260,-108,-257,-292v4,-269,136,-429,396,-445v12,36,18,78,3,118v-145,7,-223,90,-249,215v29,-41,73,-74,145,-72v138,4,215,89,215,232v0,155,-101,244,-253,244xm206,-234v0,77,35,130,105,130v67,0,108,-49,108,-125v0,-79,-36,-123,-104,-123v-70,0,-109,44,-109,118","w":600},"7":{"d":"370,-530r-301,0v-8,-40,-8,-82,0,-122r492,0r6,12r-294,714v-52,-12,-93,-28,-132,-57","w":600},"8":{"d":"47,-190v0,-101,55,-156,122,-191v-48,-28,-92,-82,-90,-154v4,-124,94,-184,221,-184v127,0,217,60,221,184v2,73,-44,125,-91,154v67,34,123,90,123,191v0,144,-110,202,-253,202v-143,0,-253,-58,-253,-202xm300,-103v69,0,109,-34,109,-99v0,-71,-54,-104,-110,-124v-57,20,-107,54,-108,124v0,64,42,99,109,99xm300,-608v-87,0,-113,94,-64,144v16,16,38,30,64,39v48,-18,89,-43,89,-105v-1,-50,-35,-78,-89,-78","w":600},"9":{"d":"299,-662v175,0,260,108,257,292v-4,268,-135,430,-396,445v-12,-36,-18,-77,-3,-118v145,-7,223,-91,249,-215v-29,41,-73,74,-145,72v-138,-4,-215,-88,-215,-232v0,-155,101,-244,253,-244xm194,-421v0,79,36,123,104,123v70,0,109,-44,109,-118v0,-77,-35,-130,-105,-130v-67,0,-108,49,-108,125","w":600},":":{"d":"71,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0xm71,-370v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":289},";":{"d":"94,-144v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0xm92,-370v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":310},"<":{"d":"509,-577v8,50,8,84,1,129r-302,109r302,103v7,41,7,93,-1,135r-414,-164v-11,-51,-13,-99,0,-149","w":600},"=":{"d":"511,-306v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0xm511,-511v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0","w":600},">":{"d":"392,-339r-302,-103v-7,-41,-7,-93,1,-135r414,164v11,53,13,98,0,149r-414,163v-8,-50,-8,-84,-1,-129","w":600},"?":{"d":"463,-515v0,112,-81,164,-158,198r0,91v-45,8,-88,8,-130,0r0,-172v68,-14,139,-34,142,-113v3,-110,-167,-98,-240,-63v-17,-32,-31,-68,-34,-112v55,-19,105,-33,178,-33v148,0,242,67,242,204xm165,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":493},"@":{"d":"421,-51v-101,-3,-155,-61,-155,-165v0,-145,73,-239,174,-286v81,-38,203,-23,281,4r-64,339v7,5,18,8,33,8v113,0,151,-122,154,-240v4,-158,-105,-238,-267,-237v-202,2,-325,107,-383,254v-18,49,-28,99,-28,152v1,177,99,269,272,269v68,0,127,-8,176,-27v12,28,23,61,31,92v-56,28,-139,38,-223,38v-235,0,-379,-127,-379,-368v0,-233,127,-387,303,-464v69,-31,150,-47,245,-47v224,0,371,112,371,338v0,145,-72,252,-168,309v-64,38,-178,45,-227,-7v-43,20,-80,39,-146,38xm399,-239v-4,83,69,99,137,74r43,-248v-117,-25,-175,65,-180,174","w":1005},"A":{"d":"237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"B":{"d":"566,-202v4,238,-275,226,-494,202r0,-720v185,-22,455,-33,447,176v-3,83,-44,141,-112,158v92,16,157,74,159,184xm416,-211v0,-105,-93,-111,-199,-107r0,208v96,13,199,0,199,-101xm379,-529v0,-86,-80,-102,-162,-91r0,192v93,5,162,-10,162,-101","w":605},"C":{"d":"417,-114v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,31,-183,31v-229,0,-344,-143,-344,-370v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244","w":618},"D":{"d":"252,12v-67,0,-121,-5,-179,-12r0,-719v60,-7,119,-12,190,-12v251,0,387,125,386,376v0,257,-138,366,-397,367xm494,-358v0,-179,-91,-267,-274,-244r0,486v181,22,274,-61,274,-242","w":700},"E":{"d":"70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"F":{"d":"70,-719r408,0v8,40,8,85,0,124r-262,0r0,169r208,0v8,43,8,83,0,125r-208,0r0,301v-51,8,-96,8,-146,0r0,-719","w":507},"G":{"d":"209,-358v0,173,86,268,256,238r0,-253v50,-8,94,-8,145,0r0,353v-57,22,-138,32,-207,32v-233,0,-352,-140,-352,-370v0,-225,116,-373,341,-373v73,0,121,7,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248","w":668},"H":{"d":"70,-719v50,-8,97,-8,147,0r0,282r241,0r0,-282v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-311r-241,0r0,311v-51,8,-97,8,-147,0r0,-719","w":675},"I":{"d":"70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"J":{"d":"42,-121v78,21,158,3,158,-91r0,-383r-119,0v-8,-37,-8,-86,0,-124r265,0r0,528v6,173,-153,229,-319,191v-5,-45,0,-81,15,-121","w":411},"K":{"d":"237,-362r195,-357v52,-10,108,-5,160,0r-197,347r214,372v-54,4,-108,10,-162,0xm216,1v-46,7,-100,7,-146,0r0,-721v46,-7,100,-7,146,0r0,721","w":619},"L":{"d":"463,-126v7,40,7,86,0,126r-393,0r0,-719v50,-8,93,-8,144,0r0,593r249,0","w":493},"M":{"d":"90,-719v53,-8,102,-8,154,0r165,412r170,-412v42,-8,98,-8,142,0r34,719v-49,8,-92,8,-139,0r-18,-488r-146,338v-35,5,-78,8,-112,0r-136,-345r-14,495v-44,8,-83,8,-128,0","w":817},"N":{"d":"70,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,719v-44,8,-75,8,-119,0r-280,-457r0,457v-42,8,-87,8,-129,0r0,-719","w":668},"O":{"d":"675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"P":{"d":"216,0v-46,7,-99,7,-146,0r0,-722v31,-3,62,-4,93,-6v216,-18,383,33,383,248v0,194,-136,262,-330,249r0,231xm396,-478v0,-105,-74,-145,-180,-129r0,255v103,13,180,-23,180,-126","w":583},"Q":{"d":"693,56v-3,41,-9,84,-23,117r-248,-40v6,-41,13,-81,26,-115xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"R":{"d":"223,0v-48,4,-99,8,-146,0r0,-719v29,-3,57,-7,83,-9v200,-16,387,23,386,222v-1,105,-55,161,-120,201r175,304v-54,4,-109,10,-162,0r-188,-334v63,-34,138,-59,141,-153v3,-96,-74,-134,-169,-119r0,607","w":611},"S":{"d":"65,-149v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,167,79,167,210v0,231,-287,270,-480,192v5,-43,17,-86,30,-124","w":550},"T":{"d":"357,0v-48,4,-99,8,-147,0r0,-595r-179,0v-8,-39,-8,-84,0,-124r505,0v8,40,8,85,0,124r-179,0r0,595","w":567,"k":{"\uf668":-50,"\uf665":-50,"\uf662":-50,"\u0135":-20,"\u012d":-20,"\u0129":-20,"\u00ef":-30,"\u00ec":-40}},"U":{"d":"336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"V":{"d":"10,-719v54,-5,103,-10,158,0r157,567r159,-567v48,-7,103,-7,151,0r-232,719v-52,8,-111,8,-163,0","w":645,"k":{"\uf696":-70,"\uf669":-40,"\uf668":-50,"\uf665":-50,"\u012d":-30,"\u0129":-30,"\u00ef":-30,"\u00ec":-70}},"W":{"d":"16,-719v44,-7,109,-10,155,0r103,541r124,-541v46,-7,89,-9,137,0r129,555r103,-555v44,-9,96,-6,140,0r-173,719v-52,8,-102,8,-158,0r-115,-479r-124,479v-52,3,-98,10,-150,0","w":921,"k":{"\uf669":-50,"\uf668":-50,"\uf665":-50,"\uf662":-60,"\u012d":-30,"\u0129":-30,"\u00ef":-30,"\u00ec":-40}},"X":{"d":"615,0v-52,5,-102,10,-153,-1r-141,-372r112,-344v51,-8,103,-8,153,-1r-127,342xm47,-718v50,-7,102,-7,153,1r114,344r-143,372v-52,9,-101,9,-153,1r158,-376","w":633},"Y":{"d":"381,1v-47,7,-100,7,-147,0r0,-258r-224,-462v54,-8,107,-8,160,0r142,326r140,-326v51,-8,100,-8,153,0r-224,462r0,258","w":615,"k":{"\uf669":-30,"\uf668":-40,"\uf665":-40,"\uf662":-60,"\u012d":-30,"\u0129":-20,"\u00ef":-30,"\u00ec":-30}},"Z":{"d":"38,-10r302,-585r-276,0v-8,-40,-8,-85,0,-124r482,0r8,12r-299,583r284,0v8,40,8,85,0,124r-494,0","w":580},"[":{"d":"288,54v8,39,8,78,0,114r-238,0r0,-944r238,0v8,36,8,75,0,114r-100,0r0,716r100,0","w":344},"\\":{"d":"15,-719v49,-8,92,-8,142,0r243,719v-48,8,-93,8,-141,0","w":414},"]":{"d":"56,168v-8,-36,-8,-75,0,-114r100,0r0,-716r-100,0v-8,-39,-8,-78,0,-114r238,0r0,944r-238,0","w":344},"^":{"d":"499,-363v-40,10,-91,10,-130,1r-98,-228r-91,228v-41,8,-89,9,-130,-1r158,-356v45,-8,88,-8,135,0","w":549},"_":{"d":"7,100v-7,-31,-7,-67,0,-98r490,0v7,31,7,67,0,98r-490,0","w":504},"`":{"d":"108,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":500},"a":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174","w":522},"b":{"d":"254,12v-68,0,-135,-10,-186,-29r0,-714v48,-8,93,-8,141,0r0,264v20,-36,72,-64,130,-62v148,5,210,107,210,262v0,184,-111,279,-295,279xm300,-410v-60,0,-91,42,-91,110r0,188v114,25,197,-30,192,-151v-3,-87,-20,-147,-101,-147","w":590},"c":{"d":"311,-103v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,20,-88,25,-148,25v-170,0,-256,-103,-256,-270v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155","w":475},"d":{"d":"41,-252v0,-189,138,-304,339,-267r0,-212v44,-7,97,-7,141,0r0,714v-67,19,-123,30,-213,29v-168,-3,-267,-89,-267,-264xm187,-252v-6,118,83,168,193,139r0,-297v-26,-6,-35,-8,-64,-8v-92,0,-125,73,-129,166","w":588},"e":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0","w":562},"f":{"d":"365,-517v7,35,7,74,0,108r-120,0r0,409v-48,8,-93,8,-141,0r0,-409r-82,0v-7,-35,-7,-74,0,-108r82,0v-17,-182,130,-257,298,-214v-3,45,-8,77,-21,112v-76,-20,-151,0,-136,102r120,0","w":396,"k":{"\uf666":-64,"\u0135":-30,"\u012d":-50,"\u012b":-64,"\u0129":-47,"\u00ef":-55,"\u00ee":-30,"\u00ec":-64}},"g":{"d":"195,-172v-25,12,-34,51,-15,73v37,21,124,11,180,13v111,5,177,46,177,150v0,138,-137,185,-284,185v-119,0,-220,-21,-220,-133v0,-66,36,-97,79,-125v-29,-18,-50,-42,-50,-87v1,-58,26,-80,63,-108v-42,-30,-73,-75,-73,-141v0,-123,92,-181,220,-183v67,-1,126,24,162,55v27,-34,60,-50,123,-50v7,36,7,80,0,117r-81,0v8,16,13,34,13,61v0,148,-145,204,-294,173xm402,73v3,-75,-102,-50,-170,-55v-47,-3,-75,20,-75,64v0,55,47,64,105,65v68,1,138,-19,140,-74xm192,-345v0,56,24,90,81,90v56,0,79,-35,79,-90v0,-55,-23,-91,-79,-91v-57,0,-81,35,-81,91","w":566},"h":{"d":"209,1v-44,7,-97,7,-141,0r0,-732v43,-7,97,-7,141,0r0,275v30,-39,72,-73,143,-73v122,1,176,69,175,199r0,331v-44,7,-98,7,-142,0r0,-293v-1,-65,-14,-112,-75,-112v-74,0,-101,53,-101,133r0,272","w":586},"i":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm223,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":307},"j":{"d":"21,84v59,0,79,-36,78,-98r0,-395r-68,0v-8,-33,-8,-74,0,-108r206,0r0,528v1,127,-64,180,-187,181v-34,0,-71,-5,-99,-11v0,-41,5,-74,18,-103v14,3,35,6,52,6xm222,-607v-43,11,-102,11,-145,0v-8,-43,-8,-86,0,-128v43,-12,102,-12,145,0v8,42,8,85,0,128","w":307},"k":{"d":"61,-731v46,-8,95,-8,141,0r0,731v-46,8,-95,8,-141,0r0,-731xm222,-271r128,-246v50,-8,104,-8,153,0r-132,239r154,278v-54,8,-99,8,-153,0","w":535},"l":{"d":"316,-3v-140,32,-250,-21,-250,-172r0,-556v48,-8,93,-8,141,0r0,525v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109","w":324},"m":{"d":"306,-404v-73,0,-94,54,-94,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v27,-46,70,-84,143,-84v81,0,132,31,155,92v27,-47,74,-94,149,-92v124,1,171,70,171,200r0,329v-48,8,-94,8,-142,0r0,-292v-2,-65,-7,-112,-68,-112v-70,0,-94,50,-94,125r0,279v-48,8,-94,8,-142,0r0,-292v-2,-65,-7,-112,-68,-112","w":879},"n":{"d":"312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112","w":587},"o":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161","w":580},"p":{"d":"550,-267v0,199,-133,300,-341,274r0,230v-45,7,-97,7,-142,0r0,-755v36,-7,78,-7,115,1v9,19,13,49,17,74v27,-48,72,-86,146,-86v145,0,205,109,205,262xm301,-407v-127,0,-85,175,-92,297v113,31,196,-29,190,-153v-4,-79,-21,-144,-98,-144","w":591},"q":{"d":"520,237v-44,7,-97,7,-141,0r-1,-233v-196,28,-344,-55,-337,-252v6,-175,111,-277,290,-281v75,-2,129,10,189,23r0,743xm189,-248v0,117,81,164,189,135r0,-294v-118,-30,-189,46,-189,159","w":587},"r":{"d":"212,1v-44,7,-97,7,-142,0r0,-518v36,-8,81,-8,116,1v9,19,12,48,16,73v32,-48,90,-96,176,-76v7,38,5,89,-3,125v-109,-15,-163,36,-163,149r0,246","w":402},"s":{"d":"193,-98v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,127,57,123,151v-5,121,-99,173,-227,175v-65,1,-111,-10,-158,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26","w":460},"t":{"d":"271,6v-123,-1,-188,-54,-187,-181r0,-234r-65,0r-5,-20r187,-239r23,0r0,151r121,0v7,34,6,73,0,108r-121,0r0,203v-9,87,50,115,131,92v11,30,16,72,11,109v-31,7,-62,11,-95,11","w":383},"u":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32","w":572},"v":{"d":"5,-516v49,-10,109,-10,157,-1r113,385r111,-385v48,-8,104,-9,153,1r-196,516v-45,6,-102,8,-145,-1","w":544},"w":{"d":"7,-516v47,-10,106,-10,153,-1r83,382r96,-382v41,-8,102,-7,141,0r94,375r82,-375v45,-8,97,-9,143,1r-161,516v-44,6,-100,8,-142,-1r-94,-342r-97,343v-45,6,-99,8,-142,-1","w":806},"x":{"d":"133,-267r-99,-250v46,-8,101,-8,150,0r79,253r-103,264v-50,8,-94,8,-145,0xm270,-264r80,-253v48,-8,102,-8,150,0r-100,250r119,267v-51,8,-95,8,-145,0","w":534},"y":{"d":"253,0v-30,0,-63,4,-91,0r-152,-517v47,-10,105,-8,152,0r108,451r122,-451v46,-8,95,-9,142,0r-193,639v-19,111,-139,151,-264,114v-4,-40,7,-74,18,-103v27,8,77,14,101,-3v34,-23,43,-84,57,-130","w":542},"z":{"d":"457,-109v7,34,7,75,0,109r-422,0r-8,-12r233,-396r-198,0v-7,-34,-7,-75,0,-109r407,0r5,12r-237,396r220,0","w":493},"{":{"d":"281,-75v0,83,10,139,100,129v8,39,8,72,0,110v-160,14,-238,-57,-234,-214r-3,-92v0,-87,-32,-131,-94,-157r0,-26v62,-26,94,-70,94,-157v0,-130,1,-259,106,-292v32,-10,84,-16,131,-13v8,39,8,72,0,110v-89,-9,-100,45,-100,129v0,114,-6,204,-84,236v77,33,84,122,84,237","w":437},"|":{"d":"102,-776v46,-8,91,-8,137,0r0,944v-47,8,-91,8,-137,0r0,-944","w":341},"}":{"d":"156,-548v0,-84,-10,-138,-100,-129v-8,-38,-8,-71,0,-110v121,-8,200,26,223,122v24,96,-15,257,63,313v12,9,27,19,45,27r0,26v-62,26,-94,70,-94,157v0,131,-2,260,-107,293v-32,10,-83,16,-130,13v-8,-38,-8,-71,0,-110v89,9,100,-45,100,-129v0,-116,7,-204,84,-237v-78,-32,-84,-122,-84,-236","w":437},"~":{"d":"65,-335v-22,-25,-44,-53,-53,-88v27,-32,76,-60,137,-59v68,2,108,40,177,40v42,0,56,-11,85,-36v25,24,42,56,54,91v-27,32,-77,59,-138,57v-92,-3,-193,-82,-262,-5","w":476},"\u00a0":{"w":0},"\u00a1":{"d":"82,-287v46,-8,89,-8,135,0r10,489v-52,8,-103,8,-155,0xm76,-370v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":299},"\u00a2":{"d":"509,-13v-35,13,-65,21,-106,24r0,107v-28,8,-58,8,-87,0r0,-109v-138,-19,-211,-113,-211,-267v0,-152,73,-249,211,-268r0,-109v29,-8,57,-8,87,0r0,108v40,3,65,11,100,24v0,44,-10,75,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155v45,1,73,-7,106,-19v16,28,28,63,28,109","w":600},"\u00a3":{"d":"552,-126v7,40,7,86,0,126r-462,0r-4,-14v67,-51,102,-158,85,-274r-90,0v-7,-35,-7,-74,0,-108r73,0v-38,-187,48,-323,234,-323v71,0,116,10,165,30v-4,41,-14,82,-32,116v-39,-14,-66,-27,-120,-27v-108,0,-123,109,-100,204r156,0v7,35,7,74,0,108r-139,0v7,63,0,115,-24,162r258,0","w":600},"\u00a4":{"d":"491,-457v46,64,43,167,2,227r69,68v-20,31,-46,61,-79,79r-70,-71v-65,39,-160,38,-224,0r-70,71v-38,-17,-59,-46,-80,-80r70,-70v-39,-65,-39,-157,2,-220r-72,-73v18,-38,44,-60,80,-80r74,74v65,-37,152,-38,217,0r73,-74v31,21,61,45,79,79xm201,-342v0,62,39,106,101,106v63,0,102,-43,102,-106v0,-63,-39,-108,-102,-108v-63,0,-101,45,-101,108","w":600},"\u00a5":{"d":"373,1v-46,7,-99,7,-145,0r0,-157r-166,0v-6,-23,-5,-62,0,-85r166,0r0,-70r-166,0v-6,-23,-5,-62,0,-85r119,0r-168,-311v54,-8,107,-8,160,0r132,279r130,-279v51,-8,100,-8,153,0r-168,311r136,0v4,20,5,63,0,85r-183,0r0,70r183,0v4,20,5,63,0,85r-183,0r0,157","w":600},"\u00a6":{"d":"102,-776v46,-8,91,-8,137,0r0,335v-47,8,-91,8,-137,0r0,-335xm102,-167v46,-8,91,-8,137,0r0,335v-47,8,-91,8,-137,0r0,-335","w":341},"\u00a7":{"d":"229,-94v57,-1,113,-2,113,-48v0,-34,-24,-34,-54,-45v-93,-33,-226,-43,-224,-160v1,-53,30,-92,62,-125v-23,-22,-35,-52,-35,-89v0,-171,246,-184,385,-130v-3,36,-19,79,-34,104v-31,-14,-74,-26,-117,-26v-55,1,-93,5,-93,45v0,33,24,38,54,48v92,32,225,40,224,157v0,59,-30,96,-62,132v22,21,35,44,35,85v0,175,-262,181,-412,130v2,-36,20,-78,33,-104v32,13,82,27,125,26xm219,-426v-26,15,-48,66,-19,92v33,30,105,36,153,53v22,-16,48,-64,19,-93v-27,-27,-107,-37,-153,-52","w":572},"\u00a8":{"d":"204,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm425,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":500},"\u00a9":{"d":"344,-360v0,103,89,133,170,97v13,21,21,56,21,90v-35,14,-64,18,-109,18v-125,0,-192,-81,-192,-205v0,-121,66,-207,188,-207v50,0,70,5,108,19v0,31,-6,68,-18,90v-29,-9,-43,-13,-76,-13v-63,0,-92,44,-92,111xm120,-359v0,183,107,298,291,298v185,0,291,-115,291,-298v0,-183,-107,-298,-291,-298v-185,0,-291,115,-291,298xm562,-16v-89,38,-213,38,-302,0v-129,-55,-220,-166,-220,-343v0,-176,91,-289,220,-343v89,-38,213,-38,302,-1v129,54,220,167,220,344v0,177,-91,288,-220,343","w":822},"\u00aa":{"d":"169,-443v0,55,71,51,118,44r0,-96v-55,-5,-118,-3,-118,52xm62,-439v4,-112,109,-138,225,-129v8,-86,-117,-61,-173,-45v-16,-25,-25,-45,-25,-83v40,-13,90,-23,136,-23v110,1,174,49,174,162r0,227v-116,37,-343,53,-337,-109","w":500},"\u00ab":{"d":"40,-266r156,-222v45,-9,99,-7,146,0r-154,222r154,222v-47,7,-101,9,-146,0xm307,-266r156,-222v45,-9,99,-7,146,0r-154,222r154,222v-47,7,-101,9,-146,0","w":640},"\u00ac":{"d":"520,-415r0,288v-40,8,-83,8,-123,0r0,-165r-304,0v-8,-40,-8,-83,0,-123r427,0","w":600},"\u00ad":{"d":"313,-336v8,40,8,83,0,123r-255,0v-8,-40,-8,-83,0,-123r255,0","w":371},"\u00ae":{"d":"375,-176v-28,6,-68,5,-98,0r0,-382v38,-7,68,-8,112,-10v133,-7,209,71,163,182v-11,26,-26,39,-45,53r88,156v-34,5,-79,6,-113,0r-90,-175v30,-20,68,-36,69,-81v2,-44,-41,-60,-86,-49r0,306xm120,-359v0,183,107,298,291,298v185,0,291,-115,291,-298v0,-183,-107,-298,-291,-298v-185,0,-291,115,-291,298xm562,-16v-89,38,-213,38,-302,0v-129,-55,-220,-166,-220,-343v0,-176,91,-289,220,-343v89,-38,213,-38,302,-1v129,54,220,167,220,344v0,177,-91,288,-220,343","w":822},"\u00af":{"d":"383,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":500},"\u00b0":{"d":"188,-426v-90,0,-150,-60,-150,-149v0,-90,60,-151,150,-151v91,0,152,60,152,151v0,90,-61,149,-152,149xm126,-575v0,37,27,65,62,65v35,0,64,-28,64,-65v0,-37,-29,-67,-64,-67v-35,0,-62,31,-62,67","w":377},"\u00b1":{"d":"239,-121r0,-172r-157,0v-8,-40,-8,-81,0,-121r157,0r0,-177v40,-8,81,-8,121,0r0,177r157,0v8,40,8,81,0,121r-157,0r0,172r150,0v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r150,0","w":600},"\u00b2":{"d":"246,-576v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106"},"\u00b3":{"d":"276,-439v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39"},"\u00b4":{"d":"220,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":500},"\u00b5":{"d":"208,237v-44,7,-95,7,-139,0r0,-754v48,-8,93,-8,141,0r0,269v0,92,21,141,97,143v67,2,89,-45,89,-112r0,-300v48,-8,93,-8,141,0r0,518v-30,7,-72,7,-102,-1v-9,-14,-17,-38,-22,-56v-36,42,-65,67,-136,68v-27,0,-50,-6,-69,-15r0,240","w":596},"\u00b6":{"d":"377,6v-34,0,-67,-1,-90,-6r0,-313v-140,0,-237,-56,-237,-195v0,-178,145,-216,327,-217r0,731xm442,-725v33,0,67,1,90,6r0,719v-22,5,-57,6,-90,6r0,-731","w":599},"\u00b7":{"d":"74,-204v-8,-48,-8,-93,0,-141v48,-8,93,-8,141,0v8,48,8,93,0,141v-48,8,-93,8,-141,0","w":289},"\u00b8":{"d":"277,140v-4,-44,-85,-31,-119,-21r-7,-7r50,-136r71,0r-30,77v68,-10,128,24,128,85v1,100,-136,118,-235,94v3,-24,5,-53,18,-70v38,11,118,22,124,-22","w":500},"\u00b9":{"d":"103,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0"},"\u00ba":{"d":"177,-507v0,62,16,121,72,121v57,0,73,-59,73,-121v0,-65,-15,-121,-73,-121v-57,0,-72,57,-72,121xm437,-507v0,124,-63,211,-188,211v-125,0,-187,-87,-187,-211v0,-124,62,-212,187,-212v126,0,188,88,188,212","w":500},"\u00bb":{"d":"185,-266r-154,-222v48,-7,100,-9,146,0r156,222r-156,222v-46,9,-98,7,-146,0xm451,-266r-154,-222v48,-7,100,-9,146,0r156,222r-156,222v-46,9,-98,7,-146,0","w":639},"\u00bf":{"d":"57,-2v0,-113,82,-163,158,-198r0,-91v43,-8,88,-8,130,0r0,172v-68,14,-140,35,-142,113v-3,110,166,98,240,63v17,32,31,68,34,112v-55,19,-105,33,-178,33v-148,0,-242,-67,-242,-204xm208,-370v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":493},"\u00c0":{"d":"102,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u00c1":{"d":"326,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u00c2":{"d":"510,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u00c3":{"d":"171,-789v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u00c4":{"d":"271,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm492,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u00c5":{"d":"444,-813v0,43,-21,75,-46,95r227,718v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0r229,-718v-26,-20,-47,-50,-47,-95v0,-74,54,-123,126,-123v72,0,126,49,126,123xm397,-265r-83,-314r-87,314r170,0xm270,-813v0,36,15,61,48,61v32,0,48,-20,48,-61v0,-36,-14,-61,-48,-62v-33,0,-48,26,-48,62","w":636},"\u00c6":{"d":"415,-719r489,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-148r-249,0r-78,148v-47,8,-113,8,-159,0xm496,-269r0,-338r-6,0r-179,338r185,0","w":957},"\u00c7":{"d":"405,138v2,-35,-88,-31,-119,-16r-11,-14r39,-104v-170,-35,-262,-161,-262,-362v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244v55,0,83,-7,128,-22v16,35,28,74,34,117v-65,24,-115,33,-195,30r-15,36v74,-9,132,21,133,91v2,107,-145,118,-247,93v3,-28,7,-54,22,-73v37,12,125,26,128,-20","w":618},"\u00c8":{"d":"98,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u00c9":{"d":"258,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u00ca":{"d":"458,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u00cb":{"d":"225,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm446,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u00cc":{"d":"-51,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u00cd":{"d":"160,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u00ce":{"d":"337,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u00cf":{"d":"98,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm319,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u00d0":{"d":"253,12v-67,0,-121,-5,-179,-12r0,-326r-68,0v-8,-34,-8,-67,0,-101r68,0r0,-292v60,-7,119,-12,190,-12v251,0,387,125,386,376v0,257,-138,366,-397,367xm495,-358v0,-179,-91,-267,-274,-244r0,175r139,0v8,35,8,67,0,101r-139,0r0,210v181,22,274,-61,274,-242","w":701},"\u00d1":{"d":"198,-789v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm70,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,719v-44,8,-75,8,-119,0r-280,-457r0,457v-42,8,-87,8,-129,0r0,-719","w":669},"\u00d2":{"d":"146,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u00d3":{"d":"382,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u00d4":{"d":"555,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u00d5":{"d":"229,-789v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u00d6":{"d":"317,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm538,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u00d7":{"d":"215,-346r-111,-111v22,-34,52,-64,86,-86r111,111r110,-110v34,23,63,51,86,85r-111,111r111,111v-22,34,-51,62,-85,85r-111,-111r-112,112v-35,-22,-63,-52,-86,-86","w":600},"\u00d8":{"d":"363,12v-82,1,-143,-22,-190,-58r-32,45v-25,7,-63,6,-88,1r70,-96v-48,-64,-72,-153,-72,-262v0,-220,91,-370,312,-373v78,-1,137,20,183,54r30,-41v25,-9,62,-7,89,-1r-67,92v50,64,77,158,77,269v0,220,-92,367,-312,370xm255,-158v26,32,62,48,108,48v103,0,155,-83,155,-248v0,-53,-6,-99,-17,-137xm464,-565v-24,-27,-57,-41,-100,-41v-105,0,-157,83,-157,248v0,49,3,92,14,128","w":726},"\u00d9":{"d":"134,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u00da":{"d":"352,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u00db":{"d":"529,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u00dc":{"d":"291,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm512,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u00dd":{"d":"321,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm381,1v-47,7,-100,7,-147,0r0,-258r-224,-462v54,-8,107,-8,160,0r142,326r140,-326v51,-8,100,-8,153,0r-224,462r0,258","w":615},"\u00de":{"d":"216,0v-47,7,-100,7,-146,0r0,-719v46,-7,99,-7,146,0r0,109v195,-10,330,54,330,249v0,195,-133,257,-330,250r0,111xm396,-361v0,-104,-75,-141,-180,-126r0,252v104,14,180,-20,180,-126","w":589},"\u00df":{"d":"290,-629v-72,0,-85,61,-85,149r0,480v-49,8,-91,8,-139,0r0,-480v1,-163,67,-263,232,-263v153,0,245,111,196,250v-18,51,-66,75,-75,133v8,64,81,65,114,106v22,27,42,61,40,113v-4,104,-76,152,-189,153v-52,0,-87,-7,-126,-22v3,-40,15,-77,29,-108v46,28,150,35,145,-37v-5,-62,-78,-64,-113,-101v-21,-22,-41,-48,-40,-92v1,-96,85,-110,84,-209v-1,-47,-25,-72,-73,-72","w":604},"\u00e0":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm70,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":522},"\u00e1":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm254,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":522},"\u00e2":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm171,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":522},"\u00e3":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm121,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":522},"\u00e4":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm222,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm443,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":522},"\u00e5":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm268,-581v-67,0,-117,-44,-117,-114v0,-70,50,-114,117,-114v67,0,117,44,117,114v0,70,-50,114,-117,114xm221,-695v0,32,18,55,47,55v29,0,47,-23,47,-55v0,-32,-18,-55,-47,-55v-29,0,-47,23,-47,55","w":522},"\u00e6":{"d":"754,-18v-94,40,-258,43,-336,-13v-46,27,-101,43,-174,43v-124,-1,-206,-50,-206,-174v0,-145,142,-176,292,-163v15,-121,-146,-98,-227,-71v-17,-33,-28,-57,-28,-104v103,-38,269,-46,333,30v38,-34,89,-59,159,-59v168,1,235,139,212,313r-323,0v-6,130,175,133,270,90v15,27,27,67,28,108xm171,-168v0,88,122,78,178,52v-15,-31,-19,-70,-22,-114v-66,-10,-156,-11,-156,62xm650,-314v-3,-59,-25,-107,-85,-107v-69,0,-102,42,-108,107r193,0","w":826},"\u00e7":{"d":"318,140v-4,-44,-85,-31,-119,-21r-7,-7r39,-106v-123,-27,-190,-117,-190,-264v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,18,-86,24,-146,25r-16,41v68,-10,128,24,128,85v1,100,-136,118,-235,94v3,-24,5,-53,18,-70v38,11,118,22,124,-22","w":475},"\u00e8":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm103,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":562},"\u00e9":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm303,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":562},"\u00ea":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm211,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":562},"\u00eb":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm236,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm457,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":562},"\u00ec":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm-51,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":307},"\u00ed":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm158,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":307},"\u00ee":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm74,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":307},"\u00ef":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm108,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm329,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":307},"\u00f0":{"d":"41,-236v0,-165,101,-275,274,-244v17,3,32,11,45,21v-15,-41,-41,-79,-74,-104r-90,60v-17,-14,-36,-40,-42,-65r55,-36v-23,-7,-48,-12,-77,-13v-14,-40,-9,-82,3,-118v80,0,141,21,193,51r80,-54v21,15,35,38,45,64r-59,39v83,82,137,200,137,361v0,173,-74,286,-246,286v-159,0,-244,-92,-244,-248xm185,-236v0,87,20,148,100,148v80,0,101,-62,101,-148v0,-87,-21,-148,-101,-148v-80,0,-100,62,-100,148","w":572},"\u00f1":{"d":"312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112xm157,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":587},"\u00f2":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm86,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":580},"\u00f3":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm299,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":580},"\u00f4":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm211,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":580},"\u00f5":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm150,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":580},"\u00f6":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm243,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm464,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":580},"\u00f7":{"d":"299,-477v-44,0,-82,-38,-82,-82v0,-44,38,-83,82,-83v44,0,83,39,83,83v0,44,-39,82,-83,82xm299,-71v-44,0,-82,-38,-82,-82v0,-44,38,-83,82,-83v44,0,83,39,83,83v0,44,-39,82,-83,82xm511,-414v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0","w":600},"\u00f8":{"d":"538,-257v0,165,-83,266,-249,269v-54,0,-100,-12,-137,-35v-9,29,-58,30,-95,23r48,-62v-41,-45,-64,-112,-64,-195v0,-165,81,-269,248,-272v63,0,111,17,149,43v9,-29,60,-31,97,-24r-53,67v37,45,56,108,56,186xm289,-418v-110,0,-115,141,-95,244r167,-213v-17,-21,-41,-31,-72,-31xm289,-96v105,4,114,-125,99,-227r-161,206v16,14,37,21,62,21","w":580},"\u00f9":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm105,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":572},"\u00fa":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm308,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":572},"\u00fb":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm208,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":572},"\u00fc":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm248,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm469,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":572},"\u00fd":{"d":"253,0v-30,0,-63,4,-91,0r-152,-517v47,-10,105,-8,152,0r108,451r122,-451v46,-8,95,-9,142,0r-193,639v-19,111,-139,151,-264,114v-4,-40,7,-74,18,-103v27,8,77,14,101,-3v34,-23,43,-84,57,-130xm275,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":542},"\u00fe":{"d":"301,-407v-127,0,-85,175,-92,297v113,31,196,-29,190,-153v-4,-79,-21,-144,-98,-144xm550,-267v0,199,-133,300,-341,274r0,230v-45,7,-97,7,-142,0r0,-968v45,-7,97,-7,142,0r0,272v27,-37,70,-73,136,-70v145,6,205,109,205,262","w":591},"\u00ff":{"d":"253,0v-30,0,-63,4,-91,0r-152,-517v47,-10,105,-8,152,0r108,451r122,-451v46,-8,95,-9,142,0r-193,639v-19,111,-139,151,-264,114v-4,-40,7,-74,18,-103v27,8,77,14,101,-3v34,-23,43,-84,57,-130xm228,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm449,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":542},"\u0100":{"d":"480,-888v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u0101":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm401,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":522},"\u0102":{"d":"494,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm237,-719v52,-8,110,-8,163,0r225,719v-52,8,-104,8,-154,0r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0xm397,-265r-83,-302r-87,302r170,0","w":636},"\u0103":{"d":"171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69xm38,-162v0,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-53,16,-123,32,-198,31v-133,-1,-230,-41,-230,-174xm433,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":522},"\u0104":{"d":"375,139v3,-68,51,-105,96,-139r-40,-144r-238,0r-41,144v-49,8,-94,8,-142,0r227,-719v52,-8,110,-8,163,0r225,719v-70,6,-121,51,-127,118v-4,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89xm397,-265r-83,-302r-87,302r170,0","w":636},"\u0105":{"d":"38,-162v3,-145,139,-179,290,-166v9,-118,-137,-96,-225,-68v-17,-33,-28,-57,-28,-104v50,-18,109,-29,170,-29v140,0,221,65,221,210r0,300v-61,36,-103,67,-110,133v-5,51,49,54,88,39v13,14,19,51,19,76v-88,25,-235,21,-231,-88v2,-56,46,-100,83,-131v-151,10,-280,-23,-277,-172xm171,-168v0,78,93,76,157,63r0,-132v-70,-12,-157,-5,-157,69","w":522},"\u0106":{"d":"407,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm417,-114v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,31,-183,31v-229,0,-344,-143,-344,-370v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244","w":618},"\u0107":{"d":"311,-103v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,20,-88,25,-148,25v-170,0,-256,-103,-256,-270v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155xm308,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":475},"\u0108":{"d":"567,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm417,-114v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,31,-183,31v-229,0,-344,-143,-344,-370v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244","w":618},"\u0109":{"d":"311,-103v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,20,-88,25,-148,25v-170,0,-256,-103,-256,-270v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155xm190,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":475},"\u010a":{"d":"463,-786v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm417,-114v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,31,-183,31v-229,0,-344,-143,-344,-370v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244","w":618},"\u010b":{"d":"311,-103v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,20,-88,25,-148,25v-170,0,-256,-103,-256,-270v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155xm355,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":475},"\u010c":{"d":"183,-884v41,-8,106,-8,147,0r47,50r45,-50v42,-8,105,-8,147,0r-106,104v-49,8,-124,8,-174,0xm417,-114v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,31,-183,31v-229,0,-344,-143,-344,-370v0,-225,116,-373,341,-373v74,0,118,8,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248v0,163,69,244,207,244","w":618},"\u010d":{"d":"311,-103v45,1,73,-7,106,-19v16,28,28,63,28,109v-48,20,-88,25,-148,25v-170,0,-256,-103,-256,-270v0,-165,84,-267,250,-271v61,-1,104,8,148,26v-1,38,-10,78,-25,106v-37,-12,-59,-17,-104,-17v-88,0,-125,63,-125,156v0,98,39,153,126,155xm356,-594v-48,5,-110,8,-158,-1r-97,-123v35,-9,99,-8,136,1r41,64r40,-64v36,-10,100,-9,136,-1","w":475},"\u010e":{"d":"116,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm252,12v-67,0,-121,-5,-179,-12r0,-719v60,-7,119,-12,190,-12v251,0,387,125,386,376v0,257,-138,366,-397,367xm494,-358v0,-179,-91,-267,-274,-244r0,486v181,22,274,-61,274,-242","w":700},"\u010f":{"d":"713,-519v-32,9,-72,7,-103,0r0,-204v37,-9,88,-7,126,0xm41,-252v0,-189,138,-304,339,-267r0,-212v44,-7,97,-7,141,0r0,714v-67,19,-123,30,-213,29v-168,-3,-267,-89,-267,-264xm187,-252v-6,118,83,168,193,139r0,-297v-26,-6,-35,-8,-64,-8v-92,0,-125,73,-129,166","w":726},"\u0110":{"d":"253,12v-67,0,-121,-5,-179,-12r0,-326r-68,0v-8,-34,-8,-67,0,-101r68,0r0,-292v60,-7,119,-12,190,-12v251,0,387,125,386,376v0,257,-138,366,-397,367xm495,-358v0,-179,-91,-267,-274,-244r0,175r139,0v8,35,8,67,0,101r-139,0r0,210v181,22,274,-61,274,-242","w":701},"\u0111":{"d":"41,-252v0,-189,138,-304,339,-267r0,-57r-130,0v-8,-25,-8,-60,0,-85r130,0r0,-70v44,-7,97,-7,141,0r0,70r60,0v8,26,8,60,0,85r-60,0r0,559v-67,19,-123,30,-213,29v-168,-3,-267,-89,-267,-264xm187,-252v-6,118,83,168,193,139r0,-297v-26,-6,-35,-8,-64,-8v-92,0,-125,73,-129,166","w":597},"\u0112":{"d":"442,-888v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u0113":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm426,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":562},"\u0114":{"d":"457,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u0115":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm459,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":562},"\u0116":{"d":"352,-786v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u0117":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm368,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":562},"\u0118":{"d":"261,139v3,-68,51,-105,96,-139r-287,0r0,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124v-49,24,-98,57,-101,118v-2,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89","w":531},"\u0119":{"d":"253,141v2,-54,45,-100,81,-129v-191,5,-291,-86,-291,-267v0,-165,84,-274,250,-274v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-60,31,-107,68,-113,132v-4,47,49,56,88,39v13,14,19,51,19,76v-88,25,-235,21,-231,-88xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0","w":562},"\u011a":{"d":"84,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm70,-719r408,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-415,0r0,-719","w":531},"\u011b":{"d":"293,-529v170,0,246,136,222,314r-332,0v-2,133,179,129,279,89v15,27,27,67,28,108v-52,20,-111,30,-176,30v-178,-1,-271,-93,-271,-267v0,-165,84,-274,250,-274xm386,-314v-2,-60,-34,-107,-95,-107v-70,0,-100,42,-107,107r202,0xm109,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":562},"\u011c":{"d":"574,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm209,-358v0,173,86,268,256,238r0,-253v50,-8,94,-8,145,0r0,353v-57,22,-138,32,-207,32v-233,0,-352,-140,-352,-370v0,-225,116,-373,341,-373v73,0,121,7,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248","w":668},"\u011d":{"d":"195,-172v-25,12,-34,51,-15,73v37,21,124,11,180,13v111,5,177,46,177,150v0,138,-137,185,-284,185v-119,0,-220,-21,-220,-133v0,-66,36,-97,79,-125v-29,-18,-50,-42,-50,-87v1,-58,26,-80,63,-108v-42,-30,-73,-75,-73,-141v0,-123,92,-181,220,-183v67,-1,126,24,162,55v27,-34,60,-50,123,-50v7,36,7,80,0,117r-81,0v8,16,13,34,13,61v0,148,-145,204,-294,173xm402,73v3,-75,-102,-50,-170,-55v-47,-3,-75,20,-75,64v0,55,47,64,105,65v68,1,138,-19,140,-74xm192,-345v0,56,24,90,81,90v56,0,79,-35,79,-90v0,-55,-23,-91,-79,-91v-57,0,-81,35,-81,91xm211,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":566},"\u011e":{"d":"559,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm209,-358v0,173,86,268,256,238r0,-253v50,-8,94,-8,145,0r0,353v-57,22,-138,32,-207,32v-233,0,-352,-140,-352,-370v0,-225,116,-373,341,-373v73,0,121,7,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248","w":668},"\u011f":{"d":"195,-172v-25,12,-34,51,-15,73v37,21,124,11,180,13v111,5,177,46,177,150v0,138,-137,185,-284,185v-119,0,-220,-21,-220,-133v0,-66,36,-97,79,-125v-29,-18,-50,-42,-50,-87v1,-58,26,-80,63,-108v-42,-30,-73,-75,-73,-141v0,-123,92,-181,220,-183v67,-1,126,24,162,55v27,-34,60,-50,123,-50v7,36,7,80,0,117r-81,0v8,16,13,34,13,61v0,148,-145,204,-294,173xm402,73v3,-75,-102,-50,-170,-55v-47,-3,-75,20,-75,64v0,55,47,64,105,65v68,1,138,-19,140,-74xm192,-345v0,56,24,90,81,90v56,0,79,-35,79,-90v0,-55,-23,-91,-79,-91v-57,0,-81,35,-81,91xm458,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":566},"\u0120":{"d":"453,-786v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm209,-358v0,173,86,268,256,238r0,-253v50,-8,94,-8,145,0r0,353v-57,22,-138,32,-207,32v-233,0,-352,-140,-352,-370v0,-225,116,-373,341,-373v73,0,121,7,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248","w":668},"\u0121":{"d":"195,-172v-25,12,-34,51,-15,73v37,21,124,11,180,13v111,5,177,46,177,150v0,138,-137,185,-284,185v-119,0,-220,-21,-220,-133v0,-66,36,-97,79,-125v-29,-18,-50,-42,-50,-87v1,-58,26,-80,63,-108v-42,-30,-73,-75,-73,-141v0,-123,92,-181,220,-183v67,-1,126,24,162,55v27,-34,60,-50,123,-50v7,36,7,80,0,117r-81,0v8,16,13,34,13,61v0,148,-145,204,-294,173xm402,73v3,-75,-102,-50,-170,-55v-47,-3,-75,20,-75,64v0,55,47,64,105,65v68,1,138,-19,140,-74xm192,-345v0,56,24,90,81,90v56,0,79,-35,79,-90v0,-55,-23,-91,-79,-91v-57,0,-81,35,-81,91xm350,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":566},"\u0122":{"d":"328,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm209,-358v0,173,86,268,256,238r0,-253v50,-8,94,-8,145,0r0,353v-57,22,-138,32,-207,32v-233,0,-352,-140,-352,-370v0,-225,116,-373,341,-373v73,0,121,7,176,31v-3,44,-20,80,-34,116v-45,-15,-70,-22,-126,-22v-139,0,-199,97,-199,248","w":668},"\u0123":{"d":"299,-719v38,-10,83,-9,122,0r-72,138v-48,11,-89,10,-138,0xm195,-172v-25,12,-34,51,-15,73v37,21,124,11,180,13v111,5,177,46,177,150v0,138,-137,185,-284,185v-119,0,-220,-21,-220,-133v0,-66,36,-97,79,-125v-29,-18,-50,-42,-50,-87v1,-58,26,-80,63,-108v-42,-30,-73,-75,-73,-141v0,-123,92,-181,220,-183v67,-1,126,24,162,55v27,-34,60,-50,123,-50v7,36,7,80,0,117r-81,0v8,16,13,34,13,61v0,148,-145,204,-294,173xm402,73v3,-75,-102,-50,-170,-55v-47,-3,-75,20,-75,64v0,55,47,64,105,65v68,1,138,-19,140,-74xm192,-345v0,56,24,90,81,90v56,0,79,-35,79,-90v0,-55,-23,-91,-79,-91v-57,0,-81,35,-81,91","w":566},"\u0124":{"d":"530,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm70,-719v50,-8,97,-8,147,0r0,282r241,0r0,-282v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-311r-241,0r0,311v-51,8,-97,8,-147,0r0,-719","w":675},"\u0125":{"d":"209,1v-44,7,-97,7,-141,0r0,-732v43,-7,97,-7,141,0r0,275v30,-39,72,-73,143,-73v122,1,176,69,175,199r0,331v-44,7,-98,7,-142,0r0,-293v-1,-65,-14,-112,-75,-112v-74,0,-101,53,-101,133r0,272xm153,-912v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":586},"\u0126":{"d":"90,-530r-64,0v-8,-34,-8,-67,0,-101r64,0r0,-88v50,-8,97,-8,147,0r0,88r241,0r0,-88v50,-8,97,-8,147,0r0,88r64,0v8,35,8,67,0,101r-64,0r0,530v-51,8,-97,8,-147,0r0,-311r-241,0r0,311v-51,8,-97,8,-147,0r0,-530xm478,-437r0,-93r-241,0r0,93r241,0","w":715},"\u0127":{"d":"218,1v-44,7,-97,7,-141,0r0,-577r-61,0v-8,-25,-8,-60,0,-85r61,0r0,-70v43,-7,97,-7,141,0r0,70r129,0v8,26,8,60,0,85r-129,0r0,120v30,-39,72,-73,143,-73v122,1,176,69,175,199r0,331v-44,7,-98,7,-142,0r0,-293v-1,-65,-14,-112,-75,-112v-74,0,-101,53,-101,133r0,272","w":595},"\u0128":{"d":"-2,-789v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u0129":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm10,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":307,"k":{"Y":-20,"W":-30}},"\u012a":{"d":"307,-888v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u012b":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm267,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":307},"\u012c":{"d":"321,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u012d":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm321,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":307},"\u012e":{"d":"-2,139v2,-67,50,-102,92,-136r-20,-3r0,-719v50,-8,97,-8,147,0r0,719v-45,27,-93,58,-96,118v-1,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89","w":287},"\u012f":{"d":"24,141v3,-59,51,-108,93,-138r-19,-3r0,-409r-67,0v-8,-33,-8,-74,0,-108r206,0r0,517v-45,23,-85,61,-89,114v-3,52,49,54,88,39v13,14,19,51,19,76v-88,25,-235,21,-231,-88xm223,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":307},"\u0130":{"d":"211,-786v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719","w":287},"\u0131":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0","w":307},"\u0132":{"d":"70,-719v50,-8,97,-8,147,0r0,719v-51,8,-97,8,-147,0r0,-719xm328,-121v78,21,158,3,158,-91r0,-383r-119,0v-8,-37,-8,-86,0,-124r265,0r0,528v6,173,-153,229,-319,191v-5,-45,0,-81,15,-121","w":697},"\u0133":{"d":"31,-409v-8,-33,-8,-74,0,-108r206,0r0,517v-48,8,-90,8,-139,0r0,-409r-67,0xm223,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134xm328,84v59,0,79,-36,78,-98r0,-395r-68,0v-8,-33,-8,-74,0,-108r206,0r0,528v1,127,-64,180,-187,181v-34,0,-71,-5,-99,-11v0,-41,5,-74,18,-103v14,3,35,6,52,6xm529,-607v-43,11,-102,11,-145,0v-8,-43,-8,-86,0,-128v43,-12,102,-12,145,0v8,42,8,85,0,128","w":614},"\u0134":{"d":"420,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm42,-121v78,21,158,3,158,-91r0,-383r-119,0v-8,-37,-8,-86,0,-124r265,0r0,528v6,173,-153,229,-319,191v-5,-45,0,-81,15,-121","w":411},"\u0135":{"d":"21,84v59,0,79,-36,78,-98r0,-395r-68,0v-8,-33,-8,-74,0,-108r206,0r0,528v1,127,-64,180,-187,181v-34,0,-71,-5,-99,-11v-4,-40,7,-74,18,-103v14,3,35,6,52,6xm70,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":307},"\u0136":{"d":"273,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm237,-362r195,-357v52,-10,108,-5,160,0r-197,347r214,372v-54,4,-108,10,-162,0xm216,1v-46,7,-100,7,-146,0r0,-721v46,-7,100,-7,146,0r0,721","w":619},"\u0137":{"d":"228,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm61,-731v46,-8,95,-8,141,0r0,731v-46,8,-95,8,-141,0r0,-731xm222,-271r128,-246v50,-8,104,-8,153,0r-132,239r154,278v-54,8,-99,8,-153,0","w":535},"\u0138":{"d":"61,-523v46,-8,95,-8,141,0r0,523v-46,8,-95,8,-141,0r0,-523xm222,-271r138,-246v50,-8,104,-8,153,0r-142,239r164,278v-54,8,-99,8,-153,0","w":545},"\u0139":{"d":"168,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm463,-126v7,40,7,86,0,126r-393,0r0,-719v50,-8,93,-8,144,0r0,593r249,0","w":493},"\u013a":{"d":"162,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm316,-3v-140,32,-250,-21,-250,-172r0,-556v48,-8,93,-8,141,0r0,525v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109","w":324},"\u013b":{"d":"216,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm463,-126v7,40,7,86,0,126r-393,0r0,-719v50,-8,93,-8,144,0r0,593r249,0","w":493},"\u013c":{"d":"142,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm316,-3v-140,32,-250,-21,-250,-172r0,-556v48,-8,93,-8,141,0r0,525v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109","w":324},"\u013d":{"d":"405,-516v-32,9,-72,7,-103,0r0,-204v37,-9,88,-7,126,0xm463,-126v7,40,7,86,0,126r-393,0r0,-719v50,-8,93,-8,144,0r0,593r249,0","w":472},"\u013e":{"d":"399,-527v-32,9,-72,7,-103,0r0,-204v37,-9,88,-7,126,0xm316,-3v-140,32,-250,-21,-250,-172r0,-556v48,-8,93,-8,141,0r0,525v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109","w":424},"\u013f":{"d":"463,-126v7,40,7,86,0,126r-393,0r0,-719v50,-8,93,-8,144,0r0,593r249,0xm316,-334v-8,-48,-8,-93,0,-141v48,-8,93,-8,141,0v8,48,8,93,0,141v-48,8,-93,8,-141,0","w":493},"\u0140":{"d":"316,-3v-140,32,-250,-21,-250,-172r0,-556v48,-8,93,-8,141,0r0,525v0,59,6,100,64,98v12,0,25,-2,36,-4v9,37,14,71,9,109xm283,-311v-8,-48,-8,-93,0,-141v48,-8,93,-8,141,0v8,48,8,93,0,141v-48,8,-93,8,-141,0","w":437},"\u0141":{"d":"463,-126v7,40,7,86,0,126r-393,0r0,-245r-62,43v-8,-38,-8,-75,0,-113r62,-43r0,-361v50,-8,93,-8,144,0r0,261r127,-88v8,39,8,75,0,113r-127,88r0,219r249,0","w":493},"\u0142":{"d":"318,-3v-140,32,-260,-22,-250,-172r0,-117r-57,39v-8,-36,-8,-79,0,-114r57,-39r0,-325v48,-8,93,-8,141,0r0,226r72,-50v8,39,8,77,0,114r-72,50r0,185v0,59,6,100,64,98v12,0,25,-2,36,-4v8,32,14,72,9,109","w":326},"\u0143":{"d":"350,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm70,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,719v-44,8,-75,8,-119,0r-280,-457r0,457v-42,8,-87,8,-129,0r0,-719","w":669},"\u0144":{"d":"312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112xm319,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":587},"\u0145":{"d":"294,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm70,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,719v-44,8,-75,8,-119,0r-280,-457r0,457v-42,8,-87,8,-129,0r0,-719","w":669},"\u0146":{"d":"240,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112","w":587},"\u0147":{"d":"133,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm70,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,719v-44,8,-75,8,-119,0r-280,-457r0,457v-42,8,-87,8,-129,0r0,-719","w":669},"\u0148":{"d":"312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112xm118,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":587},"\u0149":{"d":"325,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,330v-48,8,-94,8,-142,0r0,-292v-1,-65,-13,-112,-74,-112xm16,-731v37,-8,90,-8,128,0r-56,158v-34,7,-78,7,-112,0","w":600},"\u014a":{"d":"295,66v82,22,187,5,174,-100r-270,-423r0,457v-42,8,-87,8,-129,0r0,-719v42,-8,79,-8,121,0r278,458r0,-458v45,-7,87,-9,129,0r0,696v9,181,-145,243,-318,203v-5,-42,1,-72,15,-114","w":669},"\u014b":{"d":"312,-404v-74,0,-100,53,-100,133r0,271v-48,8,-94,8,-142,0r0,-517v34,-8,82,-8,116,0v9,18,12,48,16,72v31,-44,74,-84,149,-84v124,0,178,68,177,199r0,341v1,127,-65,180,-188,181v-34,0,-71,-5,-99,-11v0,-41,5,-74,18,-103v68,17,129,1,129,-80r0,-290v-1,-65,-15,-112,-76,-112","w":587},"\u014c":{"d":"526,-888v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u014d":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm422,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":580},"\u014e":{"d":"540,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u014f":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm463,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":580},"\u0150":{"d":"266,-885v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm494,-885v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm675,-358v0,220,-92,370,-312,370v-220,0,-312,-150,-312,-370v0,-220,91,-373,312,-373v221,0,312,153,312,373xm518,-358v-1,-143,-30,-248,-154,-248v-105,0,-157,83,-157,248v0,165,52,248,156,248v103,0,155,-83,155,-248","w":726},"\u0151":{"d":"538,-257v0,165,-83,269,-249,269v-167,0,-248,-105,-248,-269v0,-165,81,-272,248,-272v167,0,249,106,249,272xm185,-257v0,92,21,161,104,161v84,0,105,-69,105,-161v0,-93,-21,-161,-105,-161v-83,0,-104,69,-104,161xm210,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0xm425,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0","w":580},"\u0152":{"d":"371,-731v35,0,88,4,117,12r394,0v8,40,8,85,0,124r-262,0r0,156r208,0v8,43,8,83,0,125r-208,0r0,190r269,0v8,40,8,85,0,124r-396,0v-35,8,-79,12,-122,12v-221,-5,-323,-148,-323,-370v0,-222,101,-368,323,-373xm371,-110v45,0,73,-3,103,-15r0,-468v-31,-9,-59,-14,-102,-13v-123,3,-168,105,-168,248v0,144,43,248,167,248","w":935},"\u0153":{"d":"634,-529v166,0,235,140,212,314r-312,0v5,80,48,113,132,114v50,0,87,-11,127,-25v15,27,27,67,28,108v-51,19,-97,30,-166,30v-91,0,-148,-33,-189,-84v-40,52,-87,84,-173,84v-167,0,-252,-105,-252,-269v0,-165,85,-272,252,-272v83,0,135,34,173,84v34,-49,91,-84,168,-84xm185,-257v0,92,25,161,108,161v84,0,109,-69,109,-161v0,-93,-25,-161,-109,-161v-83,0,-108,69,-108,161xm717,-314v-2,-58,-29,-107,-85,-107v-62,0,-91,46,-97,107r182,0","w":893},"\u0154":{"d":"290,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm223,0v-48,4,-99,8,-146,0r0,-719v29,-3,57,-7,83,-9v200,-16,387,23,386,222v-1,105,-55,161,-120,201r175,304v-54,4,-109,10,-162,0r-188,-334v63,-34,138,-59,141,-153v3,-96,-74,-134,-169,-119r0,607","w":611},"\u0155":{"d":"212,1v-44,7,-97,7,-142,0r0,-518v36,-8,81,-8,116,1v9,19,12,48,16,73v32,-48,90,-96,176,-76v7,38,5,89,-3,125v-109,-15,-163,36,-163,149r0,246xm216,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":402},"\u0156":{"d":"268,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm223,0v-48,4,-99,8,-146,0r0,-719v29,-3,57,-7,83,-9v200,-16,387,23,386,222v-1,105,-55,161,-120,201r175,304v-54,4,-109,10,-162,0r-188,-334v63,-34,138,-59,141,-153v3,-96,-74,-134,-169,-119r0,607","w":611},"\u0157":{"d":"76,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm212,1v-44,7,-97,7,-142,0r0,-518v36,-8,81,-8,116,1v9,19,12,48,16,73v32,-48,90,-96,176,-76v7,38,5,89,-3,125v-109,-15,-163,36,-163,149r0,246","w":402},"\u0158":{"d":"96,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm223,0v-48,4,-99,8,-146,0r0,-719v29,-3,57,-7,83,-9v200,-16,387,23,386,222v-1,105,-55,161,-120,201r175,304v-54,4,-109,10,-162,0r-188,-334v63,-34,138,-59,141,-153v3,-96,-74,-134,-169,-119r0,607","w":611},"\u0159":{"d":"212,1v-44,7,-97,7,-142,0r0,-518v36,-8,81,-8,116,1v9,19,12,48,16,73v32,-48,90,-96,176,-76v7,38,5,89,-3,125v-109,-15,-163,36,-163,149r0,246xm51,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":402},"\u015a":{"d":"299,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm65,-149v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,167,79,167,210v0,231,-287,270,-480,192v5,-43,17,-86,30,-124","w":550},"\u015b":{"d":"193,-98v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,127,57,123,151v-5,121,-99,173,-227,175v-65,1,-111,-10,-158,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26xm252,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":460},"\u015c":{"d":"485,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm65,-149v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,167,79,167,210v0,231,-287,270,-480,192v5,-43,17,-86,30,-124","w":550},"\u015d":{"d":"193,-98v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,127,57,123,151v-5,121,-99,173,-227,175v-65,1,-111,-10,-158,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26xm171,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":460},"\u015e":{"d":"323,138v2,-35,-88,-31,-119,-16r-11,-14r36,-96v-79,0,-138,-14,-194,-37v5,-43,17,-86,30,-124v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,169,79,167,210v-2,129,-87,208,-211,224r-17,40v74,-9,132,21,133,91v2,107,-145,118,-247,93v3,-28,7,-54,22,-73v37,12,125,26,128,-20","w":550},"\u015f":{"d":"272,140v-4,-44,-85,-31,-119,-21r-7,-7r37,-100v-61,-2,-95,-10,-143,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,124,57,123,151v-2,96,-77,157,-170,170r-18,46v68,-10,128,24,128,85v1,100,-136,118,-235,94v3,-24,5,-53,18,-70v38,11,118,22,124,-22","w":460},"\u0160":{"d":"90,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm65,-149v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,167,79,167,210v0,231,-287,270,-480,192v5,-43,17,-86,30,-124","w":550},"\u0161":{"d":"193,-98v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,127,57,123,151v-5,121,-99,173,-227,175v-65,1,-111,-10,-158,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26xm56,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":460},"\u0162":{"d":"221,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm357,0v-48,4,-99,8,-147,0r0,-595r-179,0v-8,-39,-8,-84,0,-124r505,0v8,40,8,85,0,124r-179,0r0,595","w":567},"\u0163":{"d":"169,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm271,6v-123,-1,-188,-54,-187,-181r0,-234r-65,0r-5,-20r187,-239r23,0r0,151r121,0v7,34,6,73,0,108r-121,0r0,203v-9,87,50,115,131,92v11,30,16,72,11,109v-31,7,-62,11,-95,11","w":383},"\u0164":{"d":"92,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm357,0v-48,4,-99,8,-147,0r0,-595r-179,0v-8,-39,-8,-84,0,-124r505,0v8,40,8,85,0,124r-179,0r0,595","w":567},"\u0165":{"d":"310,-731v40,-9,89,-9,130,0r-27,159v-34,4,-70,7,-103,0r0,-159xm271,6v-123,-1,-188,-54,-187,-181r0,-234r-65,0r-5,-20r187,-239r23,0r0,151r121,0v7,34,6,73,0,108r-121,0r0,203v-9,87,50,115,131,92v11,30,16,72,11,109v-31,7,-62,11,-95,11","w":380},"\u0166":{"d":"357,0v-48,4,-99,8,-147,0r0,-301r-137,0v-8,-34,-8,-67,0,-101r137,0r0,-193r-179,0v-8,-39,-8,-84,0,-124r505,0v8,40,8,85,0,124r-179,0r0,193r137,0v8,35,8,67,0,101r-137,0r0,301","w":567},"\u0167":{"d":"271,6v-139,1,-198,-73,-187,-223r-67,0v-7,-33,-7,-71,0,-104r67,0r0,-88r-65,0r-5,-20r187,-239r23,0r0,151r121,0v7,34,6,73,0,108r-121,0r0,88r121,0v7,33,7,71,0,104r-121,0v-11,92,44,128,131,103v11,30,16,72,11,109v-31,7,-62,11,-95,11","w":383},"\u0168":{"d":"200,-789v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u0169":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm157,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":572},"\u016a":{"d":"499,-888v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u016b":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm419,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":572},"\u016c":{"d":"515,-894v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u016d":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm463,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":572},"\u016e":{"d":"336,-740v-68,0,-120,-46,-120,-116v0,-70,52,-116,120,-116v68,0,120,46,120,116v0,70,-52,116,-120,116xm289,-856v0,33,16,57,47,57v30,0,47,-24,47,-57v0,-33,-17,-57,-47,-57v-31,0,-47,24,-47,57xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u016f":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm293,-581v-67,0,-117,-44,-117,-114v0,-70,50,-114,117,-114v67,0,117,44,117,114v0,70,-50,114,-117,114xm246,-695v0,32,18,55,47,55v29,0,47,-23,47,-55v0,-32,-18,-55,-47,-55v-29,0,-47,23,-47,55","w":572},"\u0170":{"d":"225,-885v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm453,-885v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm336,12v-204,0,-270,-125,-270,-327r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v2,202,-66,327,-270,327","w":671},"\u0171":{"d":"319,12v-174,0,-258,-72,-258,-251r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-47,16,-126,32,-194,32xm212,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0xm427,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0","w":572},"\u0172":{"d":"301,11v-178,-11,-237,-137,-236,-326r0,-404v46,-7,100,-7,146,0r0,373v1,124,2,232,124,232v122,0,123,-109,123,-232r0,-373v47,-7,101,-7,147,0r0,404v1,163,-42,282,-172,315v-40,28,-88,60,-90,118v-1,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89v2,-62,43,-96,81,-128","w":670},"\u0173":{"d":"359,10v-192,17,-298,-54,-298,-249r0,-278v48,-8,94,-8,142,0r0,274v-1,87,22,139,107,138v25,0,45,-2,62,-7r0,-405v48,-8,93,-8,141,0r0,497v-60,36,-106,68,-113,134v-6,51,49,54,88,39v13,14,19,51,19,76v-88,25,-235,21,-231,-88v2,-56,46,-100,83,-131","w":572},"\u0174":{"d":"654,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm16,-719v44,-7,109,-10,155,0r103,541r124,-541v46,-7,89,-9,137,0r129,555r103,-555v44,-9,96,-6,140,0r-173,719v-52,8,-102,8,-158,0r-115,-479r-124,479v-52,3,-98,10,-150,0","w":921},"\u0175":{"d":"7,-516v47,-10,106,-10,153,-1r83,382r96,-382v41,-8,102,-7,141,0r94,375r82,-375v45,-8,97,-9,143,1r-161,516v-44,6,-100,8,-142,-1r-94,-342r-97,343v-45,6,-99,8,-142,-1xm325,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":806},"\u0176":{"d":"500,-781v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm381,1v-47,7,-100,7,-147,0r0,-258r-224,-462v54,-8,107,-8,160,0r142,326r140,-326v51,-8,100,-8,153,0r-224,462r0,258","w":615},"\u0177":{"d":"253,0v-30,0,-63,4,-91,0r-152,-517v47,-10,105,-8,152,0r108,451r122,-451v46,-8,95,-9,142,0r-193,639v-19,111,-139,151,-264,114v-4,-40,7,-74,18,-103v27,8,77,14,101,-3v34,-23,43,-84,57,-130xm196,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":542},"\u0178":{"d":"261,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm482,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm381,1v-47,7,-100,7,-147,0r0,-258r-224,-462v54,-8,107,-8,160,0r142,326r140,-326v51,-8,100,-8,153,0r-224,462r0,258","w":615},"\u0179":{"d":"318,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm45,-10r302,-585r-276,0v-8,-40,-8,-85,0,-124r482,0r8,12r-299,583r284,0v8,40,8,85,0,124r-494,0","w":590},"\u017a":{"d":"457,-109v7,34,7,75,0,109r-422,0r-8,-12r233,-396r-198,0v-7,-34,-7,-75,0,-109r407,0r5,12r-237,396r220,0xm278,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":493},"\u017b":{"d":"381,-786v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm45,-10r302,-585r-276,0v-8,-40,-8,-85,0,-124r482,0r8,12r-299,583r284,0v8,40,8,85,0,124r-494,0","w":590},"\u017c":{"d":"457,-109v7,34,7,75,0,109r-422,0r-8,-12r233,-396r-198,0v-7,-34,-7,-75,0,-109r407,0r5,12r-237,396r220,0xm337,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":493},"\u017d":{"d":"126,-885v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm45,-10r302,-585r-276,0v-8,-40,-8,-85,0,-124r482,0r8,12r-299,583r284,0v8,40,8,85,0,124r-494,0","w":590},"\u017e":{"d":"457,-109v7,34,7,75,0,109r-422,0r-8,-12r233,-396r-198,0v-7,-34,-7,-75,0,-109r407,0r5,12r-237,396r220,0xm93,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":493},"\u017f":{"d":"345,-619v-68,-16,-136,-8,-136,80r0,539v-48,8,-93,8,-141,0r0,-542v-7,-164,141,-230,298,-189v-3,45,-8,77,-21,112","w":331},"\u0192":{"d":"64,13v33,8,87,12,110,-9v13,-12,22,-35,26,-71r35,-302r-83,0v-7,-35,-7,-74,0,-108r96,0v9,-139,63,-243,208,-242v42,0,62,3,95,12v-3,45,-8,77,-21,112v-33,-8,-88,-13,-110,9v-20,12,-26,70,-31,109r106,0v7,35,7,74,0,108r-118,0r-36,305v-14,120,-75,201,-203,201v-42,0,-62,-3,-95,-12v3,-45,8,-77,21,-112","w":600},"\u0218":{"d":"217,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm65,-149v87,42,293,68,293,-61v0,-90,-93,-96,-157,-123v-82,-35,-147,-75,-147,-189v0,-217,257,-244,434,-174v-4,39,-15,77,-32,114v-67,-31,-251,-71,-251,47v0,80,86,84,143,108v92,39,167,79,167,210v0,231,-287,270,-480,192v5,-43,17,-86,30,-124","w":550},"\u0219":{"d":"176,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm193,-98v45,0,94,-11,94,-56v0,-58,-72,-55,-117,-71v-69,-25,-119,-53,-119,-142v0,-108,88,-164,203,-162v59,0,107,11,154,28v-3,36,-15,77,-29,103v-31,-13,-71,-25,-114,-25v-39,0,-72,9,-72,44v0,53,68,51,109,65v71,25,127,57,123,151v-5,121,-99,173,-227,175v-65,1,-111,-10,-158,-28v3,-40,15,-77,29,-108v40,15,74,26,124,26","w":460},"\u021a":{"d":"219,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm357,0v-48,4,-99,8,-147,0r0,-595r-179,0v-8,-39,-8,-84,0,-124r505,0v8,40,8,85,0,124r-179,0r0,595","w":567},"\u021b":{"d":"179,68v41,-9,97,-9,138,0r-65,168v-39,10,-75,9,-115,0xm271,6v-123,-1,-188,-54,-187,-181r0,-234r-65,0r-5,-20r187,-239r23,0r0,151r121,0v7,34,6,73,0,108r-121,0r0,203v-9,87,50,115,131,92v11,30,16,72,11,109v-31,7,-62,11,-95,11","w":383},"\u0237":{"d":"21,84v59,0,79,-36,78,-98r0,-395r-68,0v-8,-33,-8,-74,0,-108r206,0r0,528v1,127,-64,180,-187,181v-34,0,-71,-5,-99,-11v-4,-40,7,-74,18,-103v14,3,35,6,52,6","w":307},"\u02bc":{"d":"96,-731v37,-8,90,-8,128,0r-56,158v-34,7,-78,7,-112,0","w":291},"\u02c6":{"d":"171,-719v48,-5,110,-8,158,1r97,123v-35,9,-99,8,-136,-1r-41,-64r-40,64v-36,10,-100,9,-136,1","w":498},"\u02c7":{"d":"73,-718v33,-9,100,-8,136,1r41,64r40,-64v37,-10,99,-9,136,-1r-98,124v-48,5,-110,8,-158,-1","w":498},"\u02c9":{"d":"383,-707v8,35,8,67,0,101r-265,0v-8,-34,-8,-67,0,-101r265,0","w":500},"\u02d8":{"d":"423,-718v1,156,-255,177,-325,68v-12,-18,-19,-40,-22,-68v35,-10,83,-9,116,1v-5,57,97,67,110,17v2,-6,3,-12,4,-17v35,-10,81,-11,117,-1","w":498},"\u02d9":{"d":"227,-604v-44,7,-102,7,-146,0v-8,-46,-8,-87,0,-134v44,-8,102,-8,146,0v7,41,7,93,0,134","w":307},"\u02da":{"d":"252,-581v-67,0,-117,-44,-117,-114v0,-70,50,-114,117,-114v67,0,117,44,117,114v0,70,-50,114,-117,114xm205,-695v0,32,18,55,47,55v29,0,47,-23,47,-55v0,-32,-18,-55,-47,-55v-29,0,-47,23,-47,55","w":504},"\u02db":{"d":"134,141v3,-61,53,-111,97,-141r116,0v-45,23,-85,61,-89,114v-3,52,49,54,88,39v13,14,19,51,19,76v-88,25,-235,21,-231,-88","w":500},"\u02dc":{"d":"111,-599v-17,-22,-36,-47,-42,-78v22,-28,59,-55,109,-53v73,4,156,71,211,4v20,20,36,50,43,80v-22,28,-60,53,-110,51v-74,-3,-157,-71,-211,-4","w":500},"\u02dd":{"d":"120,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0xm335,-719v51,-8,102,-8,153,0r-130,123v-40,7,-89,9,-132,0","w":500},"\u03c0":{"d":"633,6v-124,-1,-177,-54,-177,-181r0,-229r-124,0r0,404v-48,8,-90,8,-139,0r0,-404v-50,-4,-92,20,-114,38v-17,-28,-32,-62,-39,-101v36,-32,81,-50,158,-50r524,0v7,35,6,77,0,113r-126,0r0,198v0,60,6,101,66,99v20,0,38,-4,55,-7v12,32,16,70,11,109v-31,7,-62,11,-95,11","w":783},"\u1e80":{"d":"251,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm16,-719v44,-7,109,-10,155,0r103,541r124,-541v46,-7,89,-9,137,0r129,555r103,-555v44,-9,96,-6,140,0r-173,719v-52,8,-102,8,-158,0r-115,-479r-124,479v-52,3,-98,10,-150,0","w":921},"\u1e81":{"d":"7,-516v47,-10,106,-10,153,-1r83,382r96,-382v41,-8,102,-7,141,0r94,375r82,-375v45,-8,97,-9,143,1r-161,516v-44,6,-100,8,-142,-1r-94,-342r-97,343v-45,6,-99,8,-142,-1xm194,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":806},"\u1e82":{"d":"466,-885v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm16,-719v44,-7,109,-10,155,0r103,541r124,-541v46,-7,89,-9,137,0r129,555r103,-555v44,-9,96,-6,140,0r-173,719v-52,8,-102,8,-158,0r-115,-479r-124,479v-52,3,-98,10,-150,0","w":921},"\u1e83":{"d":"7,-516v47,-10,106,-10,153,-1r83,382r96,-382v41,-8,102,-7,141,0r94,375r82,-375v45,-8,97,-9,143,1r-161,516v-44,6,-100,8,-142,-1r-94,-342r-97,343v-45,6,-99,8,-142,-1xm435,-719v51,-8,122,-9,173,0r-151,123v-40,7,-91,9,-134,0","w":806},"\u1e84":{"d":"415,-789v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm636,-789v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm16,-719v44,-7,109,-10,155,0r103,541r124,-541v46,-7,89,-9,137,0r129,555r103,-555v44,-9,96,-6,140,0r-173,719v-52,8,-102,8,-158,0r-115,-479r-124,479v-52,3,-98,10,-150,0","w":921},"\u1e85":{"d":"7,-516v47,-10,106,-10,153,-1r83,382r96,-382v41,-8,102,-7,141,0r94,375r82,-375v45,-8,97,-9,143,1r-161,516v-44,6,-100,8,-142,-1r-94,-342r-97,343v-45,6,-99,8,-142,-1xm357,-593v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm578,-593v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118","w":806},"\u1ef2":{"d":"119,-885v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm381,1v-47,7,-100,7,-147,0r0,-258r-224,-462v54,-8,107,-8,160,0r142,326r140,-326v51,-8,100,-8,153,0r-224,462r0,258","w":615},"\u1ef3":{"d":"253,0v-30,0,-63,4,-91,0r-152,-517v47,-10,105,-8,152,0r108,451r122,-451v46,-8,95,-9,142,0r-193,639v-19,111,-139,151,-264,114v-4,-40,7,-74,18,-103v27,8,77,14,101,-3v34,-23,43,-84,57,-130xm80,-719v52,-9,121,-8,173,0r112,123v-43,9,-93,7,-134,0","w":542},"\u2013":{"d":"500,-336v8,43,8,81,0,123r-500,0v-8,-42,-8,-81,0,-123r500,0","w":500},"\u2014":{"d":"1000,-336v8,43,8,81,0,123r-1000,0v-8,-42,-8,-81,0,-123r1000,0","w":1000},"\u2018":{"d":"254,-462v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0","w":304},"\u2019":{"d":"116,-718v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":304},"\u201a":{"d":"116,-144v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":304},"\u201c":{"d":"254,-462v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0xm466,-462v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0","w":516},"\u201d":{"d":"116,-718v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0xm328,-718v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":516},"\u201e":{"d":"116,-144v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0xm328,-144v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":516},"\u2020":{"d":"205,-343r-149,0v-8,-40,-8,-83,0,-123r149,0r0,-253v46,-8,91,-8,137,0r0,253r149,0v8,40,8,83,0,123r-149,0r0,519v-47,8,-91,8,-137,0r0,-519","w":547},"\u2021":{"d":"205,-83r-149,0v-8,-40,-8,-83,0,-123r149,0r0,-187r-149,0v-8,-40,-8,-83,0,-123r149,0r0,-203v46,-8,91,-8,137,0r0,203r149,0v8,40,8,83,0,123r-149,0r0,187r149,0v8,40,8,83,0,123r-149,0r0,259v-47,8,-91,8,-137,0r0,-259","w":547},"\u2022":{"d":"225,-217v-90,0,-150,-60,-150,-150v0,-90,60,-150,150,-150v90,0,150,61,150,150v0,90,-60,150,-150,150"},"\u2026":{"d":"71,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0xm341,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0xm611,0v-8,-50,-8,-97,0,-147v50,-8,97,-8,147,0v8,51,8,97,0,147v-51,8,-97,8,-147,0","w":829},"\u2030":{"d":"702,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm173,-506v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm436,-506v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213xm746,-200v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm1009,-200v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213xm1187,-200v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm1450,-200v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213","w":1491},"\u2039":{"d":"40,-266r156,-222v45,-9,99,-7,146,0r-154,222r154,222v-47,7,-101,9,-146,0","w":373},"\u203a":{"d":"185,-266r-154,-222v48,-7,100,-9,146,0r156,222r-156,222v-46,9,-98,7,-146,0","w":373},"\u2044":{"d":"282,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0","w":220},"\u2070":{"d":"159,-506v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm422,-506v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213"},"\u2074":{"d":"39,-396r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0"},"\u2075":{"d":"268,-438v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38"},"\u2076":{"d":"231,-291v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm180,-442v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52"},"\u2077":{"d":"87,-618v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0"},"\u2078":{"d":"61,-415v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm235,-378v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm235,-635v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36"},"\u2079":{"d":"224,-719v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm165,-571v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58"},"\u2080":{"d":"159,-202v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm422,-202v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213"},"\u2081":{"d":"103,-1v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0"},"\u2082":{"d":"246,-272v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106"},"\u2083":{"d":"276,-135v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39"},"\u2084":{"d":"39,-92r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0"},"\u2085":{"d":"268,-134v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38"},"\u2086":{"d":"231,13v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm180,-138v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52"},"\u2087":{"d":"87,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0"},"\u2088":{"d":"61,-111v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm235,-74v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm235,-331v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36"},"\u2089":{"d":"224,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm165,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58"},"\u20ac":{"d":"420,12v-177,0,-266,-89,-297,-235r-90,0v-7,-19,-6,-64,0,-84r79,0r0,-81r-79,0v-7,-19,-6,-64,0,-84r89,0v33,-147,117,-247,295,-247v74,0,118,8,176,31v-3,44,-20,80,-34,116v-66,-27,-179,-36,-229,8v-24,20,-41,51,-50,92r207,0v6,23,5,61,0,84r-218,0r1,81r217,0v6,23,5,61,0,84r-206,0v21,76,63,109,160,109v55,0,83,-7,128,-22v16,35,28,74,34,117v-63,23,-106,30,-183,31","w":600},"\u2113":{"d":"235,8v-82,0,-124,-55,-133,-133r-47,30r-40,-83r83,-54v12,-200,-53,-481,147,-486v106,-2,139,74,134,184v-7,156,-73,251,-183,351v2,45,10,93,55,93v50,0,78,-51,106,-82r62,62v-43,54,-96,118,-184,118xm279,-536v0,-51,0,-83,-38,-83v-19,0,-32,14,-37,42v-11,57,-7,191,-8,273v48,-50,83,-155,83,-232","w":460},"\u2122":{"d":"215,-308v-32,8,-70,10,-103,0r0,-304r-96,0v-6,-28,-5,-67,0,-95r294,0v5,29,5,66,0,95r-95,0r0,304xm450,-308v-32,11,-67,6,-100,0r22,-398v35,-4,72,-7,107,0r76,190r74,-190v32,-6,69,-6,103,0r22,398v-34,6,-70,10,-103,0r-13,-203r-56,131v-23,5,-50,4,-76,0r-46,-127","w":800},"\u03a9":{"d":"50,0v-7,-39,-7,-85,0,-124r85,0v-47,-60,-77,-149,-77,-257v0,-207,104,-338,312,-338v208,0,312,131,312,338v0,108,-30,196,-77,257r85,0v7,39,7,85,0,124r-277,0r-6,-19v64,-91,119,-198,119,-358v0,-136,-36,-217,-156,-217v-120,0,-156,82,-156,217v0,160,55,266,119,358r-6,19r-277,0","w":739},"\u212e":{"d":"568,-102v-59,84,-209,128,-336,82v-121,-44,-220,-191,-154,-344v51,-118,220,-200,378,-138v97,38,170,118,174,247r-459,0v-4,0,-6,3,-6,8v5,56,-15,131,14,165v34,39,93,66,164,66v84,0,141,-38,182,-86r43,0xm515,-268v3,0,5,-2,5,-7v-4,-55,11,-127,-11,-165v-87,-92,-247,-95,-331,0v-28,32,-8,110,-13,165v0,5,2,7,5,7r345,0","w":671},"\u00bc":{"d":"101,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm725,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm626,-92r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0","w":1050},"\u00bd":{"d":"95,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm856,-272v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106xm709,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0","w":1050},"\u00be":{"d":"300,-439v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39xm630,-99r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0xm727,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0","w":1050},"\u2153":{"d":"113,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm742,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm931,-135v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39","w":1120},"\u2154":{"d":"261,-576v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106xm749,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm935,-135v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39","w":1120},"\u215b":{"d":"123,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm752,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm711,-111v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm885,-74v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm885,-331v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36","w":1120},"\u215c":{"d":"301,-439v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39xm732,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm699,-111v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm873,-74v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm873,-331v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36","w":1120},"\u215d":{"d":"294,-438v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38xm732,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm701,-111v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm875,-74v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm875,-331v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36","w":1120},"\u215e":{"d":"120,-618v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0xm692,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm674,-111v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm848,-74v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm848,-331v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36","w":1120},"\u2155":{"d":"119,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm759,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm928,-134v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38","w":1120},"\u2156":{"d":"266,-576v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106xm760,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm918,-134v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38","w":1120},"\u2157":{"d":"299,-439v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39xm738,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm916,-134v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38","w":1120},"\u2158":{"d":"56,-396r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0xm768,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm925,-134v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38","w":1120},"\u2159":{"d":"121,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm759,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm869,13v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm818,-138v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52","w":1120},"\u215a":{"d":"295,-438v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38xm744,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm868,13v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm817,-138v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52","w":1120},"\uf506":{"d":"107,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm741,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm741,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf507":{"d":"262,-576v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106xm750,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm743,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf508":{"d":"289,-439v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39xm725,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm730,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf509":{"d":"47,-396r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0xm736,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm735,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf50a":{"d":"288,-438v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38xm721,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm729,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf50b":{"d":"243,-291v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm192,-442v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52xm730,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm734,-314v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0","w":1120},"\uf50c":{"d":"105,-305v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0xm738,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm866,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm807,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\uf50d":{"d":"267,-576v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106xm752,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm880,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm821,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\uf50e":{"d":"50,-396r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0xm749,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm880,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm821,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\uf50f":{"d":"290,-438v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38xm726,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm858,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm799,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\uf510":{"d":"109,-618v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0xm681,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm836,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm777,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\uf511":{"d":"83,-415v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm257,-378v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm257,-635v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36xm745,-709v47,-8,89,-8,139,0r-484,707v-48,8,-89,8,-138,0xm876,-415v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm817,-267v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58","w":1120},"\u2202":{"d":"139,-572v-16,-33,-33,-60,-36,-103v44,-27,107,-44,178,-44v216,2,291,161,293,374v2,217,-73,357,-284,357v-148,0,-240,-79,-240,-235v0,-173,127,-260,308,-233v24,4,45,9,64,18v-12,-94,-55,-162,-161,-163v-53,0,-83,14,-122,29xm195,-222v0,125,160,153,205,59v18,-39,25,-91,26,-150v-35,-24,-71,-32,-122,-33v-69,-1,-109,55,-109,124","w":614},"\u2206":{"d":"239,-707v52,-8,110,-8,163,0r225,707r-615,0xm439,-121r-123,-434r-128,434r251,0","w":639},"\u220f":{"d":"137,-583r-106,0v-8,-39,-8,-84,0,-124r707,0v8,40,8,85,0,124r-104,0r0,761v-49,9,-95,7,-145,0r0,-761r-207,0r0,761v-50,8,-97,8,-145,0r0,-761","w":769},"\u2211":{"d":"10,168r223,-452r-204,-411r8,-12r487,0v8,39,8,84,0,124r-278,0r145,303r-166,334r288,0v8,40,8,85,0,124r-496,0","w":555},"\u2212":{"d":"511,-414v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0","w":600},"\u2215":{"d":"255,-719v49,-8,93,-8,142,0r-244,719v-48,8,-93,8,-141,0","w":409},"\u2219":{"d":"74,-204v-8,-48,-8,-93,0,-141v48,-8,93,-8,141,0v8,48,8,93,0,141v-48,8,-93,8,-141,0","w":289},"\u221a":{"d":"144,-293r-95,0v-8,-40,-8,-81,0,-121r203,0r75,262r155,-553v48,-7,103,-7,151,0r-228,705v-52,8,-111,8,-163,0","w":600},"\u221e":{"d":"169,-270v0,57,52,89,96,56v20,-15,36,-33,54,-57v-34,-41,-46,-69,-94,-69v-36,0,-56,31,-56,70xm613,-267v0,-57,-52,-91,-96,-57v-20,15,-36,34,-54,58v34,41,46,69,94,69v36,0,56,-31,56,-70xm565,-77v-83,0,-130,-47,-177,-108v-49,56,-90,105,-171,105v-108,0,-167,-79,-167,-190v0,-110,59,-190,167,-190v83,0,130,47,177,108v49,-56,90,-105,171,-105v108,0,167,80,167,190v0,110,-59,190,-167,190","w":782},"\u222b":{"d":"1,125v68,18,139,5,136,-80r-20,-564v-15,-169,141,-229,298,-189v-3,45,-8,77,-21,112v-68,-18,-139,-5,-136,80r20,564v2,137,-89,197,-223,201v-34,1,-50,-5,-75,-12v3,-45,8,-77,21,-112","w":395},"\u2248":{"d":"125,-372v-22,-25,-45,-54,-54,-89v27,-33,76,-62,138,-61v66,2,107,40,175,40v42,0,56,-11,85,-36v25,24,43,57,55,92v-28,33,-77,61,-139,59v-91,-3,-192,-82,-260,-5xm130,-184v-23,-24,-45,-54,-54,-89v27,-33,76,-61,138,-60v67,1,108,39,175,39v42,0,56,-10,85,-35v25,24,43,57,55,92v-28,33,-77,59,-139,58v-67,-1,-108,-39,-175,-39v-43,0,-56,9,-85,34","w":600},"\u2260":{"d":"180,-184r-90,0v-8,-40,-8,-81,0,-121r146,0r39,-85r-185,0v-8,-40,-8,-81,0,-121r241,0r55,-118v28,-8,52,-8,79,0r-55,118r101,0v8,40,8,81,0,121r-157,0r-40,85r197,0v8,40,8,81,0,121r-253,0r-49,106v-26,8,-52,8,-78,0","w":600},"\u2264":{"d":"506,-637v8,50,8,84,1,129r-302,109r302,103v7,41,7,93,-1,135r-414,-164v-11,-51,-13,-99,0,-149xm511,-122v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0","w":600},"\u2265":{"d":"511,-122v8,40,8,81,0,121r-421,0v-8,-40,-8,-81,0,-121r421,0xm389,-399r-302,-103v-7,-41,-7,-93,1,-135r414,164v11,53,13,98,0,149r-414,163v-8,-50,-8,-84,-1,-129","w":600},"\u25ca":{"d":"400,-360r-110,-238r-109,238r110,238xm30,-360r186,-360v45,-6,102,-8,145,1r184,359r-186,360v-45,6,-102,8,-145,-1","w":575},"\uf800":{"d":"591,-324v0,196,-79,336,-274,336v-195,0,-270,-140,-270,-336v0,-197,79,-338,274,-338v195,0,270,142,270,338xm198,-324v0,121,26,216,121,216v94,0,118,-96,118,-216v0,-121,-24,-216,-118,-216v-96,0,-121,95,-121,216","w":638},"\uf801":{"d":"75,0v-7,-38,-7,-81,0,-120r145,0r0,-350r-123,49v-24,-31,-42,-66,-53,-107r287,-126r27,0r0,534r143,0v7,39,7,82,0,120r-426,0","w":522},"\uf802":{"d":"35,-624v157,-71,435,-51,425,155v-6,128,-81,194,-135,276r-53,71r213,0v8,40,8,83,0,122r-457,0r-7,-15r207,-270v37,-52,79,-89,83,-165v5,-113,-173,-98,-242,-58v-16,-34,-31,-72,-34,-116","w":520},"\uf803":{"d":"361,-183v-2,-94,-112,-109,-202,-90r-10,-15r134,-242r-220,0v-8,-40,-8,-82,0,-122r418,0r10,17r-161,267v109,2,172,71,172,176v0,175,-116,255,-290,259v-80,2,-132,-13,-191,-33v3,-43,18,-87,35,-117v109,43,308,50,305,-100","w":551},"\uf804":{"d":"508,59v-45,4,-93,7,-138,0r0,-140r-336,0r-9,-14r283,-572v50,6,91,20,125,47r-206,418r143,0r0,-160v45,-4,93,-7,138,0r0,160r72,0v8,38,8,84,0,121r-72,0r0,140","w":626},"\uf805":{"d":"210,-283v-45,0,-79,8,-112,25r-15,-12r15,-382r358,0v8,40,8,82,0,122r-230,0r-6,143v158,-29,282,46,279,202v-4,178,-124,252,-305,252v-62,0,-121,-13,-170,-30v4,-44,21,-84,35,-120v103,43,294,44,291,-93v-2,-77,-52,-108,-140,-107","w":543},"\uf806":{"d":"306,12v-175,0,-260,-108,-257,-292v4,-269,136,-429,396,-445v12,36,18,78,3,118v-145,7,-223,90,-249,215v29,-41,73,-74,145,-72v138,4,215,89,215,232v0,155,-101,244,-253,244xm198,-234v0,77,35,130,105,130v67,0,108,-49,108,-125v0,-79,-36,-123,-104,-123v-70,0,-109,44,-109,118","w":599},"\uf807":{"d":"323,-530r-301,0v-8,-40,-8,-82,0,-122r492,0r6,12r-294,714v-52,-12,-93,-28,-132,-57","w":529},"\uf808":{"d":"46,-190v0,-101,55,-156,122,-191v-48,-28,-92,-82,-90,-154v4,-124,94,-184,221,-184v127,0,217,60,221,184v2,73,-44,125,-91,154v67,34,123,90,123,191v0,144,-110,202,-253,202v-143,0,-253,-58,-253,-202xm299,-103v69,0,109,-34,109,-99v0,-71,-54,-104,-110,-124v-57,20,-107,54,-108,124v0,64,42,99,109,99xm299,-608v-87,0,-113,94,-64,144v16,16,38,30,64,39v48,-18,89,-43,89,-105v-1,-50,-35,-78,-89,-78","w":596},"\uf809":{"d":"296,-663v175,0,260,108,257,292v-4,268,-135,430,-396,445v-12,-36,-18,-77,-3,-118v145,-7,223,-91,249,-215v-29,41,-73,74,-145,72v-138,-4,-215,-88,-215,-232v0,-155,101,-244,253,-244xm191,-422v0,79,36,123,104,123v70,0,109,-44,109,-118v0,-77,-35,-130,-105,-130v-67,0,-108,49,-108,125","w":599},"\uf80a":{"d":"159,-626v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm422,-626v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213"},"\uf80b":{"d":"103,-425v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0"},"\uf80c":{"d":"246,-696v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106"},"\uf80d":{"d":"276,-559v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39"},"\uf80e":{"d":"39,-516r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0"},"\uf80f":{"d":"268,-558v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38"},"\uf810":{"d":"231,-411v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm180,-562v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52"},"\uf811":{"d":"87,-738v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0"},"\uf812":{"d":"61,-535v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm235,-498v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm235,-755v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36"},"\uf813":{"d":"224,-839v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm165,-691v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58"},"\uf814":{"d":"159,-82v0,61,15,117,70,117v55,0,70,-56,70,-117v0,-62,-15,-117,-70,-117v-55,0,-70,55,-70,117xm422,-82v0,126,-66,212,-193,212v-128,0,-193,-86,-193,-212v0,-126,64,-213,193,-213v128,0,193,87,193,213"},"\uf815":{"d":"103,119v-11,-27,-11,-67,0,-94r84,0r0,-178r-76,28v-22,-24,-32,-48,-43,-85r203,-78r25,0r0,313r85,0v7,30,7,65,0,94r-278,0"},"\uf816":{"d":"246,-152v0,-63,-110,-48,-151,-23v-12,-28,-23,-58,-27,-93v106,-51,302,-34,296,105v-4,89,-59,129,-106,187r126,0v6,25,5,71,0,95r-323,0r-8,-19r133,-146v40,-44,60,-79,60,-106"},"\uf817":{"d":"276,-15v0,-46,-70,-51,-113,-38r-19,-21r76,-119r-124,0v-6,-29,-7,-60,0,-90r274,0r11,21r-93,134v57,11,98,48,100,112v4,149,-192,168,-319,127v1,-32,14,-68,28,-87v58,22,179,39,179,-39"},"\uf818":{"d":"39,28r158,-326v37,3,68,15,93,32r-103,225r64,0r0,-71v31,-4,73,-4,105,0r0,71r43,0v5,24,6,62,0,87r-43,0r0,73v-28,5,-79,5,-105,0r0,-73r-201,0"},"\uf819":{"d":"268,-14v0,-57,-105,-48,-148,-29r-14,-14r11,-224r240,0v7,30,7,59,0,89r-142,0r-3,52v95,-12,173,33,173,123v0,148,-186,170,-320,130v4,-35,9,-64,26,-89v57,20,177,36,177,-38"},"\uf81a":{"d":"231,133v-108,3,-174,-64,-172,-172v3,-164,99,-249,262,-256v12,23,15,58,9,89v-76,4,-128,36,-157,87v28,-21,55,-31,101,-31v83,0,130,52,130,137v0,99,-75,144,-173,146xm180,-18v0,37,18,61,53,61v35,0,57,-21,57,-58v0,-36,-20,-54,-53,-55v-35,0,-57,17,-57,52"},"\uf81b":{"d":"87,-194v-5,-26,-5,-63,0,-89r315,0r9,16r-184,397v-41,-8,-71,-19,-102,-39r133,-285r-171,0"},"\uf81c":{"d":"61,9v0,-56,37,-86,73,-107v-20,-17,-56,-47,-53,-85v6,-78,71,-112,154,-112v81,0,145,35,150,112v2,40,-30,70,-54,85v37,20,73,52,73,107v0,91,-78,121,-169,121v-93,0,-174,-29,-174,-121xm235,46v51,0,75,-49,38,-78v-12,-10,-26,-19,-41,-25v-27,10,-55,28,-55,60v0,27,24,43,58,43xm235,-211v-40,0,-60,39,-33,63v8,7,20,13,33,17v17,-7,43,-22,43,-44v-1,-20,-19,-36,-43,-36"},"\uf81d":{"d":"224,-295v108,-3,174,64,172,172v-3,164,-99,249,-262,256v-12,-23,-15,-58,-9,-89v76,-4,128,-36,157,-87v-28,21,-55,31,-101,31v-84,0,-130,-51,-130,-137v0,-99,75,-144,173,-146xm165,-147v0,36,20,54,53,55v35,0,57,-17,57,-52v0,-37,-18,-61,-53,-61v-35,0,-57,21,-57,58"},"\uf605":{"d":"192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf606":{"d":"491,-150v0,194,-248,168,-423,150r0,-551v153,-21,390,-33,391,128v1,78,-44,124,-105,139v78,5,137,50,137,134xm347,-162v0,-72,-69,-74,-143,-72r0,134v63,12,143,8,143,-62xm324,-404v0,-56,-63,-69,-120,-58r0,128v67,4,120,-6,120,-70","w":523},"\uf607":{"d":"195,-282v-9,143,110,216,241,154v14,35,28,66,31,109v-48,20,-94,32,-161,31v-178,-3,-261,-119,-261,-294v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164","w":504},"\uf608":{"d":"234,12v-62,0,-113,-5,-166,-12r0,-551v49,-6,121,-12,176,-12v192,1,299,94,299,280v0,195,-108,294,-309,295xm398,-283v0,-116,-71,-181,-190,-159r0,334v125,22,190,-50,190,-175","w":585},"\uf609":{"d":"440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf60a":{"d":"208,0v-43,7,-97,7,-140,0r0,-551r363,0v6,37,6,79,0,116r-223,0r0,130r173,0v8,37,8,80,0,117r-173,0r0,188","w":460},"\uf60b":{"d":"189,-282v-4,118,61,196,179,170r0,-171v46,-8,92,-8,138,0r0,262v-55,21,-112,33,-181,33v-190,0,-288,-100,-284,-294v4,-170,99,-281,271,-281v59,0,107,10,155,31v-4,41,-17,69,-32,108v-36,-13,-62,-22,-104,-22v-98,0,-138,70,-142,164","w":556},"\uf60c":{"d":"68,-551v46,-8,95,-8,141,0r0,220r195,0r0,-220v44,-8,97,-8,141,0r0,551v-45,8,-95,8,-141,0r0,-213r-195,0r0,213v-45,8,-97,8,-141,0r0,-551","w":613},"\uf60d":{"d":"68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf60e":{"d":"46,-113v76,23,144,0,144,-91r0,-231r-109,0v-6,-36,-7,-81,0,-116r248,0r0,360v8,168,-138,232,-297,190v-5,-39,2,-83,14,-112","w":391},"\uf60f":{"d":"227,-284r165,-267v50,-10,104,-6,154,0r-168,257r184,294v-52,4,-105,11,-156,0xm208,0v-43,7,-97,7,-140,0r0,-552v42,-7,97,-7,140,0r0,552","w":572},"\uf610":{"d":"409,-118v7,38,7,80,0,118r-341,0r0,-552v42,-7,97,-7,140,0r0,434r201,0","w":429},"\uf611":{"d":"80,-551v49,-8,99,-8,147,0r134,333r138,-333v41,-8,100,-8,143,0r30,551v-44,8,-89,8,-131,0r-17,-344r-112,254v-39,3,-82,9,-119,0r-102,-256r-16,346v-39,8,-83,8,-123,0","w":724},"\uf612":{"d":"68,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551","w":609},"\uf613":{"d":"553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf614":{"d":"208,0v-43,7,-97,7,-140,0r0,-551v54,-8,120,-12,181,-12v142,2,240,59,240,205v0,157,-116,229,-281,216r0,142xm346,-356v0,-73,-60,-106,-138,-90r0,190v82,14,138,-16,138,-100","w":524},"\uf615":{"d":"361,116v3,-37,8,-71,21,-101r202,30v-2,47,-5,69,-18,107xm561,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm193,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":610},"\uf616":{"d":"208,0v-43,7,-96,7,-140,0r0,-551r86,-9v191,-22,374,37,331,231v-11,51,-48,79,-84,107r130,220v-52,4,-110,10,-160,0r-134,-245v50,-25,110,-52,111,-122v1,-64,-68,-93,-140,-78r0,447","w":546},"\uf617":{"d":"201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":472},"\uf618":{"d":"476,-551v8,37,8,77,0,116r-158,0r0,435r-140,0r0,-435r-159,0v-8,-39,-8,-80,0,-116r457,0","w":495},"\uf619":{"d":"299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf61a":{"d":"10,-550v48,-9,109,-11,155,0r113,420r108,-421v44,-8,102,-9,148,1r-186,550v-48,6,-108,8,-154,-1","w":544},"\uf61b":{"d":"15,-551v41,-7,104,-10,146,1r90,402r109,-402v46,-8,85,-10,132,-1r112,415r92,-415v40,-9,92,-6,133,0r-157,551v-47,9,-101,7,-150,0r-100,-372r-110,372v-48,6,-95,9,-143,0","w":844},"\uf61c":{"d":"135,-288r-95,-263v51,-8,101,-8,153,0r76,266r-104,285v-52,8,-94,8,-147,0xm529,0v-48,7,-98,8,-147,0r-105,-285r77,-266v51,-8,103,-8,153,0r-96,263","w":547},"\uf61d":{"d":"335,1v-43,7,-97,7,-140,0r0,-188r-190,-364v47,-8,106,-8,153,0r111,244r111,-244v46,-8,97,-8,144,0r-189,364r0,188","w":529},"\uf61e":{"d":"473,-116v7,36,7,80,0,116r-441,0r-8,-13r249,-422r-219,0v-8,-35,-9,-81,0,-116r426,0r5,12r-253,423r241,0","w":506},"\uf61f":{"d":"785,-116v8,37,8,77,0,116r-372,0r0,-96r-206,0r-52,95v-46,8,-104,9,-150,-1r318,-549r456,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0xm413,-206r0,-231r-19,0r-127,231r146,0","w":822},"\uf620":{"d":"288,71v66,20,138,0,129,-78r-223,-328r0,335v-37,8,-89,8,-126,0r0,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,553v8,150,-123,207,-265,169v-5,-37,3,-71,12,-100","w":609},"\uf621":{"d":"41,-274v-4,-206,140,-328,353,-277r351,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0v8,37,8,77,0,116r-356,0v-23,8,-69,12,-99,12v-170,-5,-252,-115,-255,-286xm302,-446v-87,0,-117,72,-117,172v0,115,39,172,116,172v35,0,61,-4,78,-11r0,-320v-24,-10,-41,-13,-77,-13","w":777},"\uf622":{"d":"255,12v-62,0,-113,-5,-166,-12r0,-223r-65,0v-8,-34,-8,-69,0,-103r65,0r0,-225v49,-6,121,-12,176,-12v192,1,299,94,299,280v0,195,-108,294,-309,295xm419,-283v0,-116,-71,-181,-190,-159r0,116r90,0v8,34,8,69,0,103r-90,0r0,115v125,22,190,-50,190,-175","w":606},"\uf623":{"d":"78,-389r-62,0v-8,-30,-8,-63,0,-93r62,0r0,-69v46,-8,95,-8,141,0r0,69r195,0r0,-69v44,-8,97,-8,141,0r0,69r62,0v8,30,8,64,0,93r-62,0r0,389v-45,8,-95,8,-141,0r0,-213r-195,0r0,213v-45,8,-97,8,-141,0r0,-389xm414,-331r0,-58r-195,0r0,58r195,0","w":633},"\uf624":{"d":"68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551xm315,-113v76,23,144,0,144,-91r0,-231r-109,0v-6,-36,-7,-81,0,-116r248,0r0,360v8,168,-138,232,-297,190v-5,-39,2,-83,14,-112","w":666},"\uf625":{"d":"206,-620v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf626":{"d":"68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf627":{"d":"553,-274v0,172,-85,286,-257,286v-58,0,-107,-14,-147,-43v-13,19,-26,34,-64,34v-18,0,-32,-1,-42,-3r59,-76v-38,-48,-61,-114,-61,-198v0,-172,84,-289,255,-289v65,0,114,18,152,47r27,-34v18,-5,64,-5,82,-1r-63,80v37,48,59,115,59,197xm296,-446v-107,-3,-126,147,-102,253r174,-221v-18,-21,-42,-32,-72,-32xm296,-102v106,2,125,-140,103,-248r-172,220v18,19,41,28,69,28","w":594},"\uf628":{"d":"208,0v-43,7,-97,7,-140,0r0,-551v43,-7,97,-7,140,0r0,69v161,-8,281,40,281,198v0,155,-118,222,-281,209r0,75xm346,-282v0,-72,-62,-101,-138,-86r0,181v80,12,138,-12,138,-95","w":524},"\uf629":{"d":"476,-551v8,37,8,77,0,116r-158,0r0,119r93,0v8,35,8,67,0,101r-93,0r0,215r-140,0r0,-215r-93,0v-8,-34,-8,-67,0,-101r93,0r0,-119r-159,0v-8,-39,-8,-80,0,-116r457,0","w":495},"\uf62a":{"d":"227,-284r165,-267v50,-10,104,-6,154,0r-168,257r184,294v-52,4,-105,11,-156,0xm208,0v-43,7,-97,7,-140,0r0,-552v42,-7,97,-7,140,0r0,552","w":572},"\uf62b":{"d":"419,-118v7,38,7,80,0,118r-341,0r0,-171r-57,39v-8,-38,-8,-75,0,-113r57,-39r0,-268v42,-7,97,-7,140,0r0,171r111,-77v8,39,8,75,0,113r-111,77r0,150r201,0","w":439},"\uf62c":{"d":"194,-412v0,34,24,48,65,47r145,1r101,-103r20,0r0,102r81,0v7,32,6,70,0,102r-81,0r0,78v0,138,-109,199,-255,197v-125,-2,-220,-48,-224,-172v-1,-68,38,-123,78,-149v-32,-19,-58,-57,-57,-108v0,-144,179,-168,307,-127v0,41,-10,78,-30,102v-53,-15,-150,-31,-150,30xm284,-103v98,0,126,-59,118,-160r-130,0v-49,-1,-87,32,-87,80v1,56,36,80,99,80","w":624},"\uf637":{"d":"201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27xm665,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":936},"\uf638":{"d":"359,12v-144,-1,-220,-77,-250,-192r-63,0v-6,-16,-5,-46,0,-62r53,0v0,-21,-2,-43,0,-62r-53,0v-6,-16,-5,-46,0,-62r63,0v31,-113,110,-191,251,-191v59,0,104,10,152,31v-4,40,-21,75,-32,108v-51,-21,-134,-35,-178,0v-17,14,-30,31,-39,52r198,0v4,19,4,43,0,62r-212,0v0,21,-3,43,1,62r211,0v4,19,4,43,0,62r-194,0v20,78,143,92,222,52v14,35,28,66,31,109v-48,20,-94,32,-161,31","w":556},"\uf639":{"d":"444,-173v0,107,-75,158,-168,179r0,80v-19,4,-45,4,-64,0r0,-74v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,27,132,27v54,0,99,-9,99,-55v0,-64,-77,-60,-126,-77v-72,-25,-126,-66,-125,-161v1,-90,71,-148,157,-159r0,-84v17,-4,45,-4,64,0r0,81v51,3,107,14,149,30v-1,37,-16,80,-29,107v-34,-15,-79,-29,-127,-29v-44,0,-75,8,-75,44v0,55,71,55,115,70v77,26,135,64,135,161","w":487},"\uf63a":{"d":"393,-8v-33,14,-60,18,-100,20r0,74v-19,4,-45,4,-64,0r0,-78v-107,-18,-169,-91,-169,-211v0,-119,64,-193,169,-212r0,-86v17,-4,45,-4,64,0r0,84v40,2,62,7,95,19v-1,35,-9,77,-23,103v-26,-10,-49,-15,-84,-15v-61,0,-92,42,-92,107v0,107,98,129,177,91v18,25,27,62,27,104","w":438},"\uf63b":{"d":"261,-224v5,43,-5,81,-21,108r237,0v8,41,8,75,0,116r-427,0r-4,-21v60,-32,84,-111,86,-203r-70,0v-7,-29,-6,-61,0,-91r60,0v-9,-153,67,-242,215,-242v59,0,104,10,152,31v-5,41,-17,67,-32,106v-37,-13,-61,-22,-107,-22v-75,0,-101,50,-97,127r152,0v6,28,6,62,0,91r-144,0","w":523},"\uf63c":{"d":"350,1v-43,7,-97,7,-140,0r0,-104r-132,0v-6,-16,-5,-46,0,-62r132,0r0,-62r-132,0v-6,-16,-5,-46,0,-62r95,0r-153,-256v47,-8,106,-8,153,0r111,207r111,-207v46,-8,97,-8,144,0r-152,256r106,0v4,19,4,43,0,62r-143,0r0,62r143,0v4,19,4,43,0,62r-143,0r0,104","w":559},"\uf63d":{"d":"4,-22v33,8,88,13,110,-10v37,-38,30,-150,43,-218r-86,0v-7,-29,-6,-61,0,-91r96,0v11,-128,70,-217,205,-217v42,0,62,3,95,12v-3,45,-8,77,-21,112v-33,-8,-88,-12,-110,10v-16,10,-24,48,-28,83r116,0v6,28,6,62,0,91r-126,0v-14,111,-17,237,-78,300v-50,51,-155,64,-237,40v3,-45,8,-77,21,-112","w":475},"\uf63e":{"d":"71,-551v43,-7,96,-7,139,0r-9,344v-37,7,-85,7,-121,0xm74,0v-8,-44,-8,-90,0,-133v44,-8,90,-8,133,0v8,45,8,90,0,133v-45,8,-90,8,-133,0","w":281},"\uf63f":{"d":"263,-403v0,-78,-147,-53,-203,-33v-18,-30,-27,-60,-30,-102v49,-15,96,-25,160,-25v122,0,206,47,206,153v0,92,-59,132,-128,155r0,48v-41,9,-88,9,-129,1r0,-117v59,-4,124,-19,124,-80xm135,0v-8,-44,-8,-90,0,-133v44,-8,90,-8,133,0v8,45,8,90,0,133v-45,8,-90,8,-133,0","w":426},"\uf640":{"d":"372,-238v-33,5,-72,7,-105,1r-16,-55r-105,0r-16,55v-33,5,-73,6,-105,0r122,-317v32,-4,75,-4,106,0xm231,-361r-32,-111r-32,111r64,0","w":397},"\uf641":{"d":"138,-396v0,48,14,88,58,89v45,0,59,-41,59,-89v0,-47,-14,-88,-59,-88v-44,0,-58,42,-58,88xm358,-396v0,102,-57,168,-162,168v-104,0,-161,-66,-161,-168v0,-101,57,-167,161,-167v104,0,162,66,162,167","w":393},"\uf642":{"d":"181,-154v0,78,147,53,203,33v18,30,27,60,30,102v-49,15,-96,25,-160,25v-122,0,-206,-47,-206,-153v0,-92,59,-130,128,-152r0,-48v41,-9,88,-9,129,-1r0,117v-60,3,-124,17,-124,77xm176,-424v-8,-44,-8,-90,0,-133v44,-8,90,-8,133,0v8,45,8,90,0,133v-45,8,-90,8,-133,0","w":426},"\uf643":{"d":"210,1v-43,7,-96,7,-139,0r9,-344v37,-7,85,-7,121,0xm74,-417v-8,-44,-8,-90,0,-133v44,-8,90,-8,133,0v8,45,8,90,0,133v-45,8,-90,8,-133,0","w":281},"\uf644":{"d":"450,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf645":{"d":"432,-724v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf646":{"d":"289,139v3,-68,51,-105,96,-139r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1r186,-552v51,-6,117,-8,165,1r182,551v-68,6,-121,52,-127,118v-4,49,53,45,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf647":{"d":"67,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf648":{"d":"280,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":617},"\uf649":{"d":"461,-617v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf64a":{"d":"127,-623v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf64b":{"d":"223,-625v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm444,-625v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm192,-552v51,-6,117,-8,165,1r182,551v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1xm331,-206r-61,-235r-61,235r122,0","w":547},"\uf64c":{"d":"400,-641v0,41,-20,72,-43,92r182,549v-46,7,-108,9,-154,0r-25,-96r-179,0r-24,95v-49,8,-96,10,-151,1r185,-549v-25,-20,-43,-49,-43,-92v-2,-74,54,-123,126,-123v72,0,126,49,126,123xm331,-206r-61,-235r-61,235r122,0xm226,-641v0,36,15,61,48,61v32,0,48,-20,48,-61v0,-36,-14,-61,-48,-62v-33,0,-48,26,-48,62","w":547},"\uf64d":{"d":"305,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm195,-282v-9,143,110,216,241,154v14,35,28,66,31,109v-48,20,-94,32,-161,31v-178,-3,-261,-119,-261,-294v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164","w":504},"\uf64e":{"d":"96,-719v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm195,-282v-9,143,110,216,241,154v14,35,28,66,31,109v-48,20,-94,32,-161,31v-178,-3,-261,-119,-261,-294v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164","w":504},"\uf64f":{"d":"365,-620v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm195,-282v-9,143,110,216,241,154v14,35,28,66,31,109v-48,20,-94,32,-161,31v-178,-3,-261,-119,-261,-294v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164","w":504},"\uf650":{"d":"485,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm195,-282v-9,143,110,216,241,154v14,35,28,66,31,109v-48,20,-94,32,-161,31v-178,-3,-261,-119,-261,-294v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164","w":504},"\uf651":{"d":"333,138v2,-35,-88,-31,-119,-16r-11,-14r39,-103v-132,-27,-197,-133,-197,-287v0,-168,91,-281,262,-281v59,0,104,10,152,31v-4,41,-17,70,-32,108v-37,-13,-61,-22,-107,-22v-92,0,-119,74,-125,164v-9,143,110,216,241,154v14,35,28,66,31,109v-56,23,-87,29,-155,31r-15,35v74,-9,132,21,133,91v2,107,-145,118,-247,93v3,-28,7,-54,22,-73v37,12,125,26,128,-20","w":504},"\uf652":{"d":"61,-719v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm234,12v-62,0,-113,-5,-166,-12r0,-551v49,-6,121,-12,176,-12v192,1,299,94,299,280v0,195,-108,294,-309,295xm398,-283v0,-116,-71,-181,-190,-159r0,334v125,22,190,-50,190,-175","w":585},"\uf653":{"d":"255,12v-62,0,-113,-5,-166,-12r0,-223r-65,0v-8,-34,-8,-69,0,-103r65,0r0,-225v49,-6,121,-12,176,-12v192,1,299,94,299,280v0,195,-108,294,-309,295xm419,-283v0,-116,-71,-181,-190,-159r0,116r90,0v8,34,8,69,0,103r-90,0r0,115v125,22,190,-50,190,-175","w":606},"\uf654":{"d":"59,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf655":{"d":"241,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf656":{"d":"441,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf657":{"d":"205,-623v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm426,-623v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf658":{"d":"66,-719v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf659":{"d":"318,-620v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf65a":{"d":"409,-722v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf65b":{"d":"217,139v3,-68,51,-105,96,-139r-245,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0v8,37,8,77,0,116v-48,25,-98,58,-100,118v-2,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89","w":477},"\uf65c":{"d":"428,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm440,-116v8,37,8,77,0,116r-372,0r0,-551r366,0v6,37,6,79,0,116r-227,0r0,95r177,0v8,37,8,80,0,117r-177,0r0,107r233,0","w":477},"\uf65d":{"d":"470,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm189,-282v-4,118,61,196,179,170r0,-171v46,-8,92,-8,138,0r0,262v-55,21,-112,33,-181,33v-190,0,-288,-100,-284,-294v4,-170,99,-281,271,-281v59,0,107,10,155,31v-4,41,-17,69,-32,108v-36,-13,-62,-22,-104,-22v-98,0,-138,70,-142,164","w":556},"\uf65e":{"d":"259,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm189,-282v-4,118,61,196,179,170r0,-171v46,-8,92,-8,138,0r0,262v-55,21,-112,33,-181,33v-190,0,-288,-100,-284,-294v4,-170,99,-281,271,-281v59,0,107,10,155,31v-4,41,-17,69,-32,108v-36,-13,-62,-22,-104,-22v-98,0,-138,70,-142,164","w":556},"\uf65f":{"d":"368,-620v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm189,-282v-4,118,61,196,179,170r0,-171v46,-8,92,-8,138,0r0,262v-55,21,-112,33,-181,33v-190,0,-288,-100,-284,-294v4,-170,99,-281,271,-281v59,0,107,10,155,31v-4,41,-17,69,-32,108v-36,-13,-62,-22,-104,-22v-98,0,-138,70,-142,164","w":556},"\uf660":{"d":"490,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm189,-282v-4,118,61,196,179,170r0,-171v46,-8,92,-8,138,0r0,262v-55,21,-112,33,-181,33v-190,0,-288,-100,-284,-294v4,-170,99,-281,271,-281v59,0,107,10,155,31v-4,41,-17,69,-32,108v-36,-13,-62,-22,-104,-22v-98,0,-138,70,-142,164","w":556},"\uf661":{"d":"499,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm68,-551v46,-8,95,-8,141,0r0,220r195,0r0,-220v44,-8,97,-8,141,0r0,551v-45,8,-95,8,-141,0r0,-213r-195,0r0,213v-45,8,-97,8,-141,0r0,-551","w":613},"\uf662":{"d":"-69,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf663":{"d":"143,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf664":{"d":"332,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf665":{"d":"93,-623v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm314,-623v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf666":{"d":"302,-722v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf667":{"d":"-9,139v2,-67,50,-103,92,-137v-3,0,-8,-1,-15,-2r0,-551v46,-8,95,-8,141,0r0,551v-44,27,-92,58,-95,118v-1,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89","w":277},"\uf668":{"d":"-7,-623v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf669":{"d":"316,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm68,-551v46,-8,95,-8,141,0r0,551v-45,8,-97,8,-141,0r0,-551","w":277},"\uf66a":{"d":"410,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm46,-113v76,23,144,0,144,-91r0,-231r-109,0v-6,-36,-7,-81,0,-116r248,0r0,360v8,168,-138,232,-297,190v-5,-39,2,-83,14,-112","w":391},"\uf66b":{"d":"242,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm227,-284r165,-267v50,-10,104,-6,154,0r-168,257r184,294v-52,4,-105,11,-156,0xm208,0v-43,7,-97,7,-140,0r0,-552v42,-7,97,-7,140,0r0,552","w":572},"\uf66c":{"d":"156,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm409,-118v7,38,7,80,0,118r-341,0r0,-552v42,-7,97,-7,140,0r0,434r201,0","w":429},"\uf66d":{"d":"383,-349v-32,9,-72,7,-103,0r0,-204v37,-9,88,-7,126,0xm409,-118v7,38,7,80,0,118r-341,0r0,-552v42,-7,97,-7,140,0r0,434r201,0","w":429},"\uf66e":{"d":"186,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm409,-118v7,38,7,80,0,118r-341,0r0,-552v42,-7,97,-7,140,0r0,434r201,0","w":429},"\uf66f":{"d":"409,-118v7,38,7,80,0,118r-341,0r0,-552v42,-7,97,-7,140,0r0,434r201,0xm275,-254v-8,-48,-8,-93,0,-141v48,-8,93,-8,141,0v8,48,8,93,0,141v-48,8,-93,8,-141,0","w":429},"\uf670":{"d":"287,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm68,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551","w":609},"\uf671":{"d":"140,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551xm23,-720v37,-8,90,-8,128,0r-56,158v-34,7,-78,7,-112,0","w":681},"\uf672":{"d":"158,-623v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm68,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551","w":609},"\uf673":{"d":"109,-717v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm68,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551","w":609},"\uf674":{"d":"247,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm68,-551v40,-8,81,-8,121,0r228,338r0,-338v41,-7,85,-9,124,0r0,551v-40,8,-79,8,-119,0r-228,-335r0,335v-37,8,-89,8,-126,0r0,-551","w":609},"\uf675":{"d":"93,-721v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf676":{"d":"290,-721v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf677":{"d":"478,-617v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf678":{"d":"151,-625v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf679":{"d":"241,-625v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm462,-625v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf67a":{"d":"191,-719v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm419,-719v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf67b":{"d":"447,-722v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf67c":{"d":"461,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm553,-274v0,172,-85,286,-257,286v-170,0,-255,-115,-255,-286v0,-172,84,-289,255,-289v172,0,257,117,257,289xm185,-274v0,96,30,172,111,172v82,0,111,-76,111,-172v0,-98,-29,-172,-111,-172v-81,0,-111,75,-111,172","w":594},"\uf67d":{"d":"254,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm208,0v-43,7,-96,7,-140,0r0,-551r86,-9v191,-22,374,37,331,231v-11,51,-48,79,-84,107r130,220v-52,4,-110,10,-160,0r-134,-245v50,-25,110,-52,111,-122v1,-64,-68,-93,-140,-78r0,447","w":546},"\uf67e":{"d":"67,-717v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm208,0v-43,7,-96,7,-140,0r0,-551r86,-9v191,-22,374,37,331,231v-11,51,-48,79,-84,107r130,220v-52,4,-110,10,-160,0r-134,-245v50,-25,110,-52,111,-122v1,-64,-68,-93,-140,-78r0,447","w":546},"\uf67f":{"d":"225,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm208,0v-43,7,-96,7,-140,0r0,-551r86,-9v191,-22,374,37,331,231v-11,51,-48,79,-84,107r130,220v-52,4,-110,10,-160,0r-134,-245v50,-25,110,-52,111,-122v1,-64,-68,-93,-140,-78r0,447","w":546},"\uf680":{"d":"237,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":472},"\uf681":{"d":"182,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":472},"\uf682":{"d":"278,138v2,-35,-88,-31,-119,-16r-11,-14r36,-96v-58,-3,-100,-12,-145,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,172,48,208,100v42,61,36,168,-18,219v-33,31,-77,53,-136,61r-16,39v74,-9,132,21,133,91v2,107,-145,118,-247,93v3,-28,7,-54,22,-73v37,12,125,26,128,-20","w":472},"\uf683":{"d":"56,-717v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":472},"\uf684":{"d":"437,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm201,-101v54,0,101,-11,101,-57v0,-61,-68,-62,-116,-78v-77,-26,-140,-55,-137,-155v3,-115,83,-172,203,-172v57,0,122,13,167,31v-1,37,-16,80,-29,107v-34,-15,-79,-24,-127,-29v-62,-6,-97,45,-59,82v58,36,173,47,208,100v17,26,29,58,29,99v0,129,-100,185,-235,185v-70,0,-114,-10,-167,-31v3,-38,17,-78,30,-109v37,16,85,26,132,27","w":472},"\uf685":{"d":"56,-717v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm476,-551v8,37,8,77,0,116r-158,0r0,435r-140,0r0,-435r-159,0v-8,-39,-8,-80,0,-116r457,0","w":495},"\uf686":{"d":"188,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm476,-551v8,37,8,77,0,116r-158,0r0,435r-140,0r0,-435r-159,0v-8,-39,-8,-80,0,-116r457,0","w":495},"\uf687":{"d":"188,68v41,-9,94,-9,134,0r-62,169v-37,8,-75,8,-114,-1xm476,-551v8,37,8,77,0,116r-158,0r0,435r-140,0r0,-435r-159,0v-8,-39,-8,-80,0,-116r457,0","w":495},"\uf688":{"d":"203,-719v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm431,-719v51,-8,110,-8,161,0r-117,105v-41,7,-98,9,-140,0xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf689":{"d":"105,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf68a":{"d":"292,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf68b":{"d":"492,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf68c":{"d":"253,-623v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm474,-623v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf68d":{"d":"462,-722v8,35,8,67,0,101r-325,0v-8,-34,-8,-67,0,-101r325,0xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf68e":{"d":"254,9v-233,-18,-188,-312,-192,-560v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v0,155,-27,281,-148,315v-44,27,-92,58,-95,118v-1,48,53,46,91,32v14,16,20,50,20,78v-87,27,-238,22,-234,-89v2,-63,44,-97,83,-130","w":599},"\uf68f":{"d":"299,-574v-68,0,-120,-46,-120,-116v0,-70,52,-116,120,-116v68,0,120,46,120,116v0,70,-52,116,-120,116xm252,-690v0,33,16,57,47,57v30,0,47,-24,47,-57v0,-33,-17,-57,-47,-57v-31,0,-47,24,-47,57xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf690":{"d":"153,-623v-18,-23,-37,-43,-44,-74v22,-28,63,-57,114,-56v58,2,90,41,149,41v35,0,47,-12,71,-34v22,23,37,49,45,76v-21,27,-62,55,-110,54v-60,-1,-96,-41,-154,-41v-37,0,-45,13,-71,34xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf691":{"d":"476,-728v-3,129,-177,148,-286,104v-38,-15,-63,-51,-67,-104v37,-9,78,-10,116,1v5,28,19,43,60,43v41,0,55,-15,60,-43v40,-10,77,-11,117,-1xm299,12v-280,0,-234,-295,-237,-563v42,-7,96,-7,139,0r0,205v5,115,-15,240,98,240v112,0,98,-125,98,-240r0,-204v45,-8,95,-8,140,-1r0,236v2,192,-45,327,-238,327","w":599},"\uf692":{"d":"277,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm15,-551v41,-7,104,-10,146,1r90,402r109,-402v46,-8,85,-10,132,-1r112,415r92,-415v40,-9,92,-6,133,0r-157,551v-47,9,-101,7,-150,0r-100,-372r-110,372v-48,6,-95,9,-143,0","w":844},"\uf693":{"d":"375,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm15,-551v41,-7,104,-10,146,1r90,402r109,-402v46,-8,85,-10,132,-1r112,415r92,-415v40,-9,92,-6,133,0r-157,551v-47,9,-101,7,-150,0r-100,-372r-110,372v-48,6,-95,9,-143,0","w":844},"\uf694":{"d":"615,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm15,-551v41,-7,104,-10,146,1r90,402r109,-402v46,-8,85,-10,132,-1r112,415r92,-415v40,-9,92,-6,133,0r-157,551v-47,9,-101,7,-150,0r-100,-372r-110,372v-48,6,-95,9,-143,0","w":844},"\uf695":{"d":"376,-623v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm597,-623v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm15,-551v41,-7,104,-10,146,1r90,402r109,-402v46,-8,85,-10,132,-1r112,415r92,-415v40,-9,92,-6,133,0r-157,551v-47,9,-101,7,-150,0r-100,-372r-110,372v-48,6,-95,9,-143,0","w":844},"\uf696":{"d":"80,-719v56,-10,136,-8,193,0r98,104v-46,7,-99,9,-144,0xm335,1v-43,7,-97,7,-140,0r0,-188r-190,-364v47,-8,106,-8,153,0r111,244r111,-244v46,-8,97,-8,144,0r-189,364r0,188","w":529},"\uf697":{"d":"247,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm335,1v-43,7,-97,7,-140,0r0,-188r-190,-364v47,-8,106,-8,153,0r111,244r111,-244v46,-8,97,-8,144,0r-189,364r0,188","w":529},"\uf698":{"d":"457,-615v-41,8,-106,8,-147,0r-47,-50r-45,50v-42,8,-105,8,-147,0r106,-104v49,-8,124,-8,174,0xm335,1v-43,7,-97,7,-140,0r0,-188r-190,-364v47,-8,106,-8,153,0r111,244r111,-244v46,-8,97,-8,144,0r-189,364r0,188","w":529},"\uf699":{"d":"218,-623v-39,7,-90,7,-129,0v-4,-39,-7,-80,0,-118v39,-8,90,-8,129,0v7,36,7,82,0,118xm439,-623v-39,7,-90,7,-129,0v-8,-40,-8,-78,0,-118v39,-8,90,-8,129,0v5,37,5,81,0,118xm335,1v-43,7,-97,7,-140,0r0,-188r-190,-364v47,-8,106,-8,153,0r111,244r111,-244v46,-8,97,-8,144,0r-189,364r0,188","w":529},"\uf69a":{"d":"343,-620v-40,7,-92,7,-132,0v-7,-37,-7,-83,0,-120v40,-8,92,-8,132,0v6,37,6,82,0,120xm473,-116v7,36,7,80,0,116r-441,0r-8,-13r249,-422r-219,0v-8,-35,-9,-81,0,-116r426,0r5,12r-253,423r241,0","w":506},"\uf69b":{"d":"279,-719v57,-8,136,-10,193,0r-147,104v-45,9,-98,7,-144,0xm473,-116v7,36,7,80,0,116r-441,0r-8,-13r249,-422r-219,0v-8,-35,-9,-81,0,-116r426,0r5,12r-253,423r241,0","w":506},"\uf69d":{"d":"102,-717v41,-8,106,-8,147,0r47,50r45,-50v47,-4,102,-10,147,0r-106,104v-49,8,-124,8,-174,0xm473,-116v7,36,7,80,0,116r-441,0r-8,-13r249,-422r-219,0v-8,-35,-9,-81,0,-116r426,0r5,12r-253,423r241,0","w":506},"\uf69e":{"d":"607,-551v51,-8,76,-8,126,0r-378,551v-50,8,-75,8,-125,0xm687,-159v0,50,16,91,63,91v47,0,63,-41,63,-91v0,-50,-16,-91,-63,-91v-47,0,-63,41,-63,91xm918,-159v0,104,-60,171,-168,171v-108,0,-168,-67,-168,-171v0,-104,60,-171,168,-171v108,0,168,67,168,171xm140,-386v0,50,16,91,63,91v47,0,63,-41,63,-91v0,-50,-16,-91,-63,-91v-47,0,-63,41,-63,91xm371,-386v0,104,-60,171,-168,171v-108,0,-168,-67,-168,-171v0,-104,60,-171,168,-171v108,0,168,67,168,171","w":953},"\uf69f":{"d":"607,-551v51,-8,76,-8,126,0r-378,551v-50,8,-75,8,-125,0xm687,-159v0,50,16,91,63,91v47,0,63,-41,63,-91v0,-50,-16,-91,-63,-91v-47,0,-63,41,-63,91xm918,-159v0,104,-60,171,-168,171v-108,0,-168,-67,-168,-171v0,-104,60,-171,168,-171v108,0,168,67,168,171xm140,-386v0,50,16,91,63,91v47,0,63,-41,63,-91v0,-50,-16,-91,-63,-91v-47,0,-63,41,-63,91xm371,-386v0,104,-60,171,-168,171v-108,0,-168,-67,-168,-171v0,-104,60,-171,168,-171v108,0,168,67,168,171xm1080,-159v0,50,16,91,63,91v47,0,63,-41,63,-91v0,-50,-16,-91,-63,-91v-47,0,-63,41,-63,91xm1311,-159v0,104,-60,171,-168,171v-108,0,-168,-67,-168,-171v0,-104,60,-171,168,-171v108,0,168,67,168,171","w":1346},"\uf6a0":{"d":"202,-551v50,-8,87,-8,136,0r-187,551v-49,8,-86,8,-135,0","w":354},"\uf6a1":{"d":"16,-551v50,-8,85,-8,136,0r186,551v-49,8,-86,8,-135,0","w":354},"\uf6a2":{"d":"287,-243v-3,47,38,55,77,43r26,-150v-68,-14,-100,44,-103,107xm190,-229v0,-139,98,-224,248,-199v20,3,39,8,57,14r-41,219v81,10,110,-70,111,-146v2,-98,-73,-149,-174,-147v-161,3,-258,98,-258,255v0,112,63,168,172,168v46,0,85,-6,119,-20v11,22,17,46,24,70v-35,19,-99,29,-154,28v-155,-4,-252,-84,-252,-243v0,-152,82,-254,196,-304v45,-20,99,-30,162,-30v177,0,296,125,240,304v-24,76,-82,143,-179,143v-33,0,-57,-8,-73,-24v-27,15,-50,25,-93,24v-68,-1,-105,-42,-105,-112","w":683},"\uf6a3":{"d":"184,-276v0,127,33,230,80,306v-45,8,-86,8,-131,0v-112,-129,-109,-485,0,-611v45,-8,86,-8,131,0v-47,76,-80,178,-80,305","w":284},"\uf6a4":{"d":"100,-276v0,-127,-33,-229,-80,-305v45,-8,85,-8,131,0v112,130,109,484,0,611v-46,8,-86,8,-131,0v47,-76,80,-179,80,-306","w":289},"\uf6a5":{"d":"196,-244v42,46,-14,182,77,172v4,32,5,78,-1,105v-112,4,-179,-37,-183,-135v-4,-74,5,-144,-59,-163r0,-22v63,-18,56,-87,59,-163v4,-98,71,-139,183,-135v6,27,5,65,1,95v-94,-10,-32,133,-77,182v-11,14,-23,25,-34,32v11,7,22,19,34,32","w":306},"\uf6a6":{"d":"110,-308v-45,-49,17,-192,-77,-182v-4,-30,-5,-68,1,-95v112,-4,179,37,183,135v4,74,-5,144,59,163r0,22v-63,18,-56,87,-59,163v-4,98,-71,139,-183,135v-6,-27,-5,-73,-1,-105v91,10,35,-126,77,-172v12,-13,23,-25,34,-32v-11,-7,-23,-18,-34,-32","w":306},"\uf6a7":{"d":"299,-585v8,34,8,74,0,110r-104,0r0,398r104,0v8,38,8,72,0,110r-232,0r0,-618r232,0","w":335},"\uf6a8":{"d":"36,-475v-8,-36,-8,-76,0,-110r232,0r0,618r-232,0v-8,-38,-8,-72,0,-110r104,0r0,-398r-104,0","w":335},"\uf6a9":{"d":"302,-536v-30,5,-72,6,-99,0r11,-137v25,-4,51,-4,76,0xm36,-486v3,-26,14,-52,24,-72r134,31v-6,35,-16,67,-31,94xm412,-301v-18,18,-38,34,-62,45r-90,-104v26,-25,53,-44,80,-58xm445,-559v11,20,18,47,23,72r-127,54v-14,-28,-25,-60,-30,-94xm166,-417v27,14,54,33,80,58r-90,104v-24,-11,-44,-27,-62,-45","w":484},"\uf6aa":{"d":"254,-295v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0","w":304},"\uf6ab":{"d":"116,-551v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":304},"\uf6ac":{"d":"254,-295v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0xm466,-295v-40,9,-91,8,-131,0r-73,-256v41,-9,97,-10,138,0","w":516},"\uf6ad":{"d":"116,-551v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0xm328,-551v41,-10,97,-9,138,0r-73,256v-40,8,-92,8,-131,0","w":516},"\uf83c":{"d":"553,-272v0,171,-90,284,-261,284v-171,0,-249,-113,-249,-284v0,-172,88,-285,259,-285v171,0,251,113,251,285xm184,-272v1,95,23,171,112,171v88,0,109,-77,109,-171v0,-95,-21,-174,-109,-174v-87,0,-112,67,-112,174","w":596},"\uf83d":{"d":"75,0v-7,-37,-7,-72,0,-107r140,0r0,-265r-117,47v-28,-29,-44,-64,-57,-106r278,-127r30,0r0,451r135,0v5,33,8,75,0,107r-409,0","w":499},"\uf83e":{"d":"281,-369v0,-103,-166,-83,-227,-43v-14,-27,-28,-68,-31,-103v126,-69,409,-64,401,122v-5,123,-102,199,-168,281r197,0v7,33,8,78,0,112r-439,0r-4,-8r197,-224v34,-45,74,-73,74,-137","w":486},"\uf83f":{"d":"320,-182v2,-77,-105,-83,-176,-67r-14,-18r122,-178r-198,0r0,-100r379,0r12,17r-140,197v92,6,152,55,153,148v3,201,-270,224,-443,168v5,-38,18,-75,34,-102v88,27,268,54,271,-65","w":500},"\uf840":{"d":"455,0v-41,7,-91,6,-132,0r0,-109r-288,0r-10,-15r195,-444v42,6,92,25,123,45r-134,302r114,0r0,-125v41,-6,91,-6,132,0r0,125r73,0v7,33,6,79,0,112r-73,0r0,109","w":575},"\uf841":{"d":"323,-182v0,-101,-166,-74,-233,-47r-14,-11r15,-305r331,0v8,34,8,78,0,112r-211,0r-6,93v127,-31,260,19,258,148v-3,148,-104,204,-260,204v-50,0,-124,-15,-170,-31v3,-38,20,-77,33,-107v78,33,257,56,257,-56","w":506},"\uf842":{"d":"387,-556v19,25,23,69,8,102v-96,10,-178,54,-203,133v29,-19,64,-38,111,-37v115,3,190,63,190,180v0,127,-95,187,-221,190v-146,3,-230,-82,-226,-227v5,-211,141,-319,341,-341xm183,-180v0,59,32,92,87,92v52,-1,87,-31,87,-88v0,-58,-32,-86,-84,-87v-55,-1,-90,28,-90,83","w":536},"\uf843":{"d":"496,-545r6,11r-289,548v-44,-11,-90,-37,-123,-61r211,-383r-260,0v-8,-34,-7,-81,0,-115r455,0","w":512},"\uf844":{"d":"46,-145v-2,-78,52,-130,113,-147v-43,-22,-87,-68,-87,-125v0,-96,94,-140,205,-140v109,0,199,45,199,140v0,62,-42,108,-94,125v67,19,120,64,120,147v0,121,-103,157,-226,157v-125,0,-227,-35,-230,-157xm276,-81v80,0,100,-87,59,-133v-14,-14,-34,-25,-59,-33v-49,16,-84,36,-84,91v0,50,29,75,84,75xm277,-465v-71,0,-87,67,-53,105v11,12,29,21,52,28v40,-15,66,-28,66,-78v0,-35,-24,-55,-65,-55","w":548},"\uf845":{"d":"141,11v-19,-25,-23,-69,-8,-102v96,-10,178,-54,203,-133v-29,19,-64,38,-111,37v-115,-3,-190,-63,-190,-180v0,-127,95,-187,221,-190v146,-3,230,82,226,227v-5,211,-141,319,-341,341xm171,-369v0,58,32,86,84,87v55,1,90,-28,90,-83v0,-59,-32,-92,-87,-92v-52,1,-87,31,-87,88","w":527},"\u2126":{"d":"50,0v-7,-39,-7,-85,0,-124r85,0v-47,-60,-77,-149,-77,-257v0,-207,104,-338,312,-338v208,0,312,131,312,338v0,108,-30,196,-77,257r85,0v7,39,7,85,0,124r-277,0r-6,-19v64,-91,119,-198,119,-358v0,-136,-36,-217,-156,-217v-120,0,-156,82,-156,217v0,160,55,266,119,358r-6,19r-277,0","w":739}}});

Cufon('.eror-font span', {
  color: '-linear-gradient(#000, #000)'
});


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 /*
  * jQuery css bezier animation support -- Jonah Fox
  * version 0.0.1
  * Released under the MIT license.
  */
 /*
   var path = $.path.bezier({
     start: {x:10, y:10, angle: 20, length: 0.3},
     end:   {x:20, y:30, angle: -20, length: 0.2}
   })
   $("myobj").animate({path: path}, duration)

 */

 ;(function($){

   $.path = {}


   var V = {
     rotate: function(p, degrees) {
       var radians = degrees * 3.141592654 / 180
       var c = Math.cos(radians), s = Math.sin(radians)
       return [c*p[0] - s*p[1], s*p[0] + c*p[1] ]
     },
     scale: function(p, n) {
       return [n*p[0], n*p[1]]
     },
     add: function(a, b) {
       return [a[0]+b[0], a[1]+b[1]]
     },
     minus: function(a, b) {
       return [a[0]-b[0], a[1]-b[1]]
     }
   }
    
    $.path.bezier = function( params ) { 
        params.start = $.extend({angle: 0, length: 0.3333}, params.start )
        params.end   = $.extend({angle: 0, length: 0.3333}, params.end )

      this.p1 = [params.start.x, params.start.y];
      this.p4 = [params.end.x, params.end.y];
      
      var v14 = V.minus(this.p4, this.p1)
      var v12 = V.scale(v14, params.start.length)
      v12 = V.rotate(v12, params.start.angle)
      this.p2 = V.add(this.p1, v12)
       
      var v41 = V.scale(v14, -1)
      var v43 = V.scale(v41, params.end.length)     
      v43 = V.rotate(v43, params.end.angle)
      this.p3 = V.add(this.p4, v43)

      this.f1 = function(t) { return (t*t*t); }
      this.f2 = function(t) { return (3*t*t*(1-t)); } 
      this.f3 = function(t) { return (3*t*(1-t)*(1-t)); }
      this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); }

      /* p from 0 to 1 */
      this.css = function(p) {
        var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p)
        var x = this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4;
        var y = this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4;
        return {top: y + "px", left: x + "px"}
      }
    }

    $.path.arc = function(params) {
      for(var i in params)
        this[i] = params[i]

      this.dir = this.dir || 1

      while(this.start > this.end && this.dir > 0)
        this.start -= 360

      while(this.start < this.end && this.dir < 0)
        this.start += 360


      this.css = function(p) {
        var a = this.start * (p ) + this.end * (1-(p ))  
        a = a * 3.1415927 / 180 // to radians

        var x = Math.sin(a) * this.radius + this.center[0]
        var y = Math.cos(a) * this.radius + this.center[1]
        return {top: y + "px", left: x + "px"}
      } 

    };
    
        
   $.fx.step.path = function(fx){
     var css = fx.end.css(1 - fx.pos)
     for(var i in css) 
       fx.elem.style[i] = css[i];
   }
 })(jQuery);

 /*
  * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
  *
  * limitations:
  * - requires jQuery 1.4.3+
  * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
  * - transformOrigin is not accessible
  *
  * latest version and complete README available on Github:
  * https://github.com/louisremi/jquery.transform.js
  *
  * Copyright 2011 @louis_remi
  * Licensed under the MIT license.
  *
  * This saved you an hour of work?
  * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
  *
  */
 (function( $, window, document, Math, undefined ) {
 "use strict";

 /*
  * Feature tests and global variables
  */
 var div = document.createElement("div"),
  divStyle = div.style,
  suffix = "Transform",
  testProperties = [
    "O" + suffix,
    "ms" + suffix,
    "Webkit" + suffix,
    "Moz" + suffix
  ],
  i = testProperties.length,
  supportProperty,
  supportMatrixFilter,
  supportFloat32Array = "Float32Array" in window,
  propertyHook,
  propertyGet,
  rMatrix = /Matrix([^)]*)/,
  rAffine = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
  _transform = "transform",
  _transformOrigin = "transformOrigin",
  _translate = "translate",
  _rotate = "rotate",
  _scale = "scale",
  _skew = "skew",
  _matrix = "matrix";

 // test different vendor prefixes of these properties
 while ( i-- ) {
  if ( testProperties[i] in divStyle ) {
    $.support[_transform] = supportProperty = testProperties[i];
    $.support[_transformOrigin] = supportProperty + "Origin";
    continue;
  }
 }
 // IE678 alternative
 if ( !supportProperty ) {
  $.support.matrixFilter = supportMatrixFilter = divStyle.filter === "";
 }

 // px isn't the default unit of these properties
 $.cssNumber[_transform] = $.cssNumber[_transformOrigin] = true;

 /*
  * fn.css() hooks
  */
 if ( supportProperty && supportProperty != _transform ) {
  // Modern browsers can use jQuery.cssProps as a basic hook
  $.cssProps[_transform] = supportProperty;
  $.cssProps[_transformOrigin] = supportProperty + "Origin";

  // Firefox needs a complete hook because it stuffs matrix with "px"
  if ( supportProperty == "Moz" + suffix ) {
    propertyHook = {
      get: function( elem, computed ) {
        return (computed ?
          // remove "px" from the computed matrix
          $.css( elem, supportProperty ).split("px").join(""):
          elem.style[supportProperty]
        );
      },
      set: function( elem, value ) {
        // add "px" to matrices
        elem.style[supportProperty] = /matrix\([^)p]*\)/.test(value) ?
          value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, _matrix+"$1$2px,$3px"):
          value;
      }
    };
  /* Fix two jQuery bugs still present in 1.5.1
   * - rupper is incompatible with IE9, see http://jqbug.com/8346
   * - jQuery.css is not really jQuery.cssProps aware, see http://jqbug.com/8402
   */
  } else if ( /^1\.[0-5](?:\.|$)/.test($.fn.jquery) ) {
    propertyHook = {
      get: function( elem, computed ) {
        return (computed ?
          $.css( elem, supportProperty.replace(/^ms/, "Ms") ):
          elem.style[supportProperty]
        );
      }
    };
  }
  /* TODO: leverage hardware acceleration of 3d transform in Webkit only
  else if ( supportProperty == "Webkit" + suffix && support3dTransform ) {
    propertyHook = {
      set: function( elem, value ) {
        elem.style[supportProperty] = 
          value.replace();
      }
    }
  }*/

 } else if ( supportMatrixFilter ) {
  propertyHook = {
    get: function( elem, computed, asArray ) {
      var elemStyle = ( computed && elem.currentStyle ? elem.currentStyle : elem.style ),
        matrix, data;

      if ( elemStyle && rMatrix.test( elemStyle.filter ) ) {
        matrix = RegExp.$1.split(",");
        matrix = [
          matrix[0].split("=")[1],
          matrix[2].split("=")[1],
          matrix[1].split("=")[1],
          matrix[3].split("=")[1]
        ];
      } else {
        matrix = [1,0,0,1];
      }

      if ( ! $.cssHooks[_transformOrigin] ) {
        matrix[4] = elemStyle ? parseInt(elemStyle.left, 10) || 0 : 0;
        matrix[5] = elemStyle ? parseInt(elemStyle.top, 10) || 0 : 0;

      } else {
        data = $._data( elem, "transformTranslate", undefined );
        matrix[4] = data ? data[0] : 0;
        matrix[5] = data ? data[1] : 0;
      }

      return asArray ? matrix : _matrix+"(" + matrix + ")";
    },
    set: function( elem, value, animate ) {
      var elemStyle = elem.style,
        currentStyle,
        Matrix,
        filter,
        centerOrigin;

      if ( !animate ) {
        elemStyle.zoom = 1;
      }

      value = matrix(value);

      // rotate, scale and skew
      Matrix = [
        "Matrix("+
          "M11="+value[0],
          "M12="+value[2],
          "M21="+value[1],
          "M22="+value[3],
          "SizingMethod='auto expand'"
      ].join();
      filter = ( currentStyle = elem.currentStyle ) && currentStyle.filter || elemStyle.filter || "";

      elemStyle.filter = rMatrix.test(filter) ?
        filter.replace(rMatrix, Matrix) :
        filter + " progid:DXImageTransform.Microsoft." + Matrix + ")";

      if ( ! $.cssHooks[_transformOrigin] ) {

        // center the transform origin, from pbakaus's Transformie http://github.com/pbakaus/transformie
        if ( (centerOrigin = $.transform.centerOrigin) ) {
          elemStyle[centerOrigin == "margin" ? "marginLeft" : "left"] = -(elem.offsetWidth/2) + (elem.clientWidth/2) + "px";
          elemStyle[centerOrigin == "margin" ? "marginTop" : "top"] = -(elem.offsetHeight/2) + (elem.clientHeight/2) + "px";
        }

        // translate
        // We assume that the elements are absolute positionned inside a relative positionned wrapper
        elemStyle.left = value[4] + "px";
        elemStyle.top = value[5] + "px";

      } else {
        $.cssHooks[_transformOrigin].set( elem, value );
      }
    }
  };
 }
 // populate jQuery.cssHooks with the appropriate hook if necessary
 if ( propertyHook ) {
  $.cssHooks[_transform] = propertyHook;
 }
 // we need a unique setter for the animation logic
 propertyGet = propertyHook && propertyHook.get || $.css;

 /*
  * fn.animate() hooks
  */
 $.fx.step.transform = function( fx ) {
  var elem = fx.elem,
    start = fx.start,
    end = fx.end,
    pos = fx.pos,
    transform = "", i, startVal, endVal, unit;

  // fx.end and fx.start need to be converted to interpolation lists
  if ( !start || typeof start === "string" ) {

    // the following block can be commented out with jQuery 1.5.1+, see #7912
    if ( !start ) {
      start = propertyGet( elem, supportProperty );
    }

    // force layout only once per animation
    if ( supportMatrixFilter ) {
      elem.style.zoom = 1;
    }

    // replace "+=" in relative animations (-= is meaningless with transforms)
    end = end.split("+=").join(start);

    // parse both transform to generate interpolation list of same length
    return $.extend( fx, interpolationList( start, end ) );
  }

  i = start.length;

  // interpolate functions of the list one by one
  while ( i-- ) {
    startVal = start[i];
    endVal = end[i];
    unit = +false;

    switch ( startVal[0] ) {

      case _translate:
        unit = "px";
      case _scale:
        unit || ( unit = " ");
      case _skew:
        unit || ( unit = "rad" );

        transform = startVal[0] + "(" +
          (startVal[1][0] + (endVal[1][0] - startVal[1][0]) * pos) + unit +","+
          (startVal[1][1] + (endVal[1][1] - startVal[1][1]) * pos) + unit + ")"+
          transform;
        break;

      case _rotate:
        transform = _rotate + "(" +
          (startVal[1] + (endVal[1] - startVal[1]) * pos) +"rad)"+
          transform;
        break;
    }
  }

  fx.origin && ( transform = fx.origin + transform );

  propertyHook && propertyHook.set ?
    propertyHook.set( elem, transform, +true ):
    elem.style[supportProperty] = transform;
 };

 /*
  * Utility functions
  */

 // turns a transform string into its "matrix(A,B,C,D,X,Y)" form (as an array, though)
 function matrix( transform ) {
  transform = transform.split(")");
  var
      trim = $.trim
    , i = -1
    // last element of the array is an empty string, get rid of it
    , l = transform.length -1
    , split, prop, val
    , prev = supportFloat32Array ? new Float32Array(6) : []
    , curr = supportFloat32Array ? new Float32Array(6) : []
    , rslt = supportFloat32Array ? new Float32Array(6) : [1,0,0,1,0,0]
    ;

  prev[0] = prev[3] = rslt[0] = rslt[3] = 1;
  prev[1] = prev[2] = prev[4] = prev[5] = 0;

  // Loop through the transform properties, parse and multiply them
  while ( ++i < l ) {
    split = transform[i].split("(");
    prop = trim(split[0]);
    val = split[1];
    curr[0] = curr[3] = 1;
    curr[1] = curr[2] = curr[4] = curr[5] = 0;

    switch (prop) {
      case _translate+"X":
        curr[4] = parseInt(val, 10);
        break;

      case _translate+"Y":
        curr[5] = parseInt(val, 10);
        break;

      case _translate:
        val = val.split(",");
        curr[4] = parseInt(val[0], 10);
        curr[5] = parseInt(val[1] || 0, 10);
        break;

      case _rotate:
        val = toRadian(val);
        curr[0] = Math.cos(val);
        curr[1] = Math.sin(val);
        curr[2] = -Math.sin(val);
        curr[3] = Math.cos(val);
        break;

      case _scale+"X":
        curr[0] = +val;
        break;

      case _scale+"Y":
        curr[3] = val;
        break;

      case _scale:
        val = val.split(",");
        curr[0] = val[0];
        curr[3] = val.length>1 ? val[1] : val[0];
        break;

      case _skew+"X":
        curr[2] = Math.tan(toRadian(val));
        break;

      case _skew+"Y":
        curr[1] = Math.tan(toRadian(val));
        break;

      case _skew:
        val = val.split(",");
        curr[2] = Math.tan(toRadian(val[0]));
        val[1] && ( curr[1] = Math.tan(toRadian(val[1])) );
        break;

      case _matrix:
        val = val.split(",");
        curr[0] = val[0];
        curr[1] = val[1];
        curr[2] = val[2];
        curr[3] = val[3];
        curr[4] = parseInt(val[4], 10);
        curr[5] = parseInt(val[5], 10);
        break;
    }

    // Matrix product (array in column-major order)
    rslt[0] = prev[0] * curr[0] + prev[2] * curr[1];
    rslt[1] = prev[1] * curr[0] + prev[3] * curr[1];
    rslt[2] = prev[0] * curr[2] + prev[2] * curr[3];
    rslt[3] = prev[1] * curr[2] + prev[3] * curr[3];
    rslt[4] = prev[0] * curr[4] + prev[2] * curr[5] + prev[4];
    rslt[5] = prev[1] * curr[4] + prev[3] * curr[5] + prev[5];

    prev = [rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]];
  }
  return rslt;
 }

 // turns a matrix into its rotate, scale and skew components
 // algorithm from http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp
 function unmatrix(matrix) {
  var
      scaleX
    , scaleY
    , skew
    , A = matrix[0]
    , B = matrix[1]
    , C = matrix[2]
    , D = matrix[3]
    ;

  // Make sure matrix is not singular
  if ( A * D - B * C ) {
    // step (3)
    scaleX = Math.sqrt( A * A + B * B );
    A /= scaleX;
    B /= scaleX;
    // step (4)
    skew = A * C + B * D;
    C -= A * skew;
    D -= B * skew;
    // step (5)
    scaleY = Math.sqrt( C * C + D * D );
    C /= scaleY;
    D /= scaleY;
    skew /= scaleY;
    // step (6)
    if ( A * D < B * C ) {
      //scaleY = -scaleY;
      //skew = -skew;
      A = -A;
      B = -B;
      skew = -skew;
      scaleX = -scaleX;
    }

  // matrix is singular and cannot be interpolated
  } else {
    throw new Error("matrix is singular");
  }

  // The recomposition order is very important
  // see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
  return [
    [_translate, [+matrix[4], +matrix[5]]],
    [_rotate, Math.atan2(B, A)],
    [_skew, [Math.atan(skew), 0]],
    [_scale, [scaleX, scaleY]]
  ];
 }

 // build the list of transform functions to interpolate
 // use the algorithm described at http://dev.w3.org/csswg/css3-2d-transforms/#animation
 function interpolationList( start, end ) {
  var list = {
      start: [],
      end: []
    },
    i = -1, l,
    currStart, currEnd, currType;

  // get rid of affine transform matrix
  ( start == "none" || isAffine( start ) ) && ( start = "" );
  ( end == "none" || isAffine( end ) ) && ( end = "" );

  // if end starts with the current computed style, this is a relative animation
  // store computed style as the origin, remove it from start and end
  if ( start && end && !end.indexOf("matrix") && toArray( start ).join() == toArray( end.split(")")[0] ).join() ) {
    list.origin = start;
    start = "";
    end = end.slice( end.indexOf(")") +1 );
  }

  if ( !start && !end ) { return; }

  // start or end are affine, or list of transform functions are identical
  // => functions will be interpolated individually
  if ( !start || !end || functionList(start) == functionList(end) ) {

    start && ( start = start.split(")") ) && ( l = start.length );
    end && ( end = end.split(")") ) && ( l = end.length );

    while ( ++i < l-1 ) {
      start[i] && ( currStart = start[i].split("(") );
      end[i] && ( currEnd = end[i].split("(") );
      currType = $.trim( ( currStart || currEnd )[0] );

      append( list.start, parseFunction( currType, currStart ? currStart[1] : 0 ) );
      append( list.end, parseFunction( currType, currEnd ? currEnd[1] : 0 ) );
    }

  // otherwise, functions will be composed to a single matrix
  } else {
    list.start = unmatrix(matrix(start));
    list.end = unmatrix(matrix(end))
  }

  return list;
 }

 function parseFunction( type, value ) {
  var
    // default value is 1 for scale, 0 otherwise
    defaultValue = +(!type.indexOf(_scale)),
    // value is parsed to radian for skew, int otherwise
    valueParser = !type.indexOf(_skew) ? toRadian : parseFloat,
    scaleX,
    cat = type.replace( /[XY]/, "" );

  switch ( type ) {
    case _translate+"Y":
    case _scale+"Y":
    case _skew+"Y":

      value = [
        defaultValue,
        value ?
          valueParser( value ):
          defaultValue
      ];
      break;

    case _translate+"X":
    case _translate:
    case _scale+"X":
      scaleX = 1;
    case _scale:
    case _skew+"X":
    case _skew:

      value = value ?
        ( value = value.split(",") ) && [
          valueParser( value[0] ),
          valueParser( value.length>1 ? value[1] : type == _scale ? scaleX || value[0] : defaultValue+"" )
        ]:
        [defaultValue, defaultValue];
      break;

    case _rotate:
      value = value ? toRadian( value ) : 0;
      break;

    case _matrix:
      return unmatrix( value ? toArray(value) : [1,0,0,1,0,0] );
      break;
  }

  return [[ cat, value ]];
 }

 function isAffine( matrix ) {
  return rAffine.test(matrix);
 }

 function functionList( transform ) {
  return transform.replace(/(?:\([^)]*\))|\s/g, "");
 }

 function append( arr1, arr2, value ) {
  while ( value = arr2.shift() ) {
    arr1.push( value );
  }
 }

 // converts an angle string in any unit to a radian Float
 function toRadian(value) {
  return ~value.indexOf("deg") ?
    parseInt(value,10) * (Math.PI * 2 / 360):
    ~value.indexOf("grad") ?
      parseInt(value,10) * (Math.PI/200):
      parseFloat(value);
 }

 // Converts "matrix(A,B,C,D,X,Y)" to [A,B,C,D,X,Y]
 function toArray(matrix) {
  // remove the unit of X and Y for Firefox
  matrix = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);
  return [matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6]];
 }

 $.transform = {
  centerOrigin: "margin"
 };

 })( jQuery, window, document, Math );

 /*
  * transform: A jQuery cssHooks adding cross-browser 2d transform capabilities to $.fn.css() and $.fn.animate()
  *
  * limitations:
  * - requires jQuery 1.4.3+
  * - Should you use the *translate* property, then your elements need to be absolutely positionned in a relatively positionned wrapper **or it will fail in IE678**.
  * - transformOrigin is not accessible
  *
  * latest version and complete README available on Github:
  * https://github.com/louisremi/jquery.transform.js
  *
  * Copyright 2011 @louis_remi
  * Licensed under the MIT license.
  *
  * This saved you an hour of work?
  * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
  *
  */
 (function( $, window, document, Math, undefined ) {
 "use strict";

 /*
  * Feature tests and global variables
  */
 var div = document.createElement("div"),
  divStyle = div.style,
  suffix = "Transform",
  testProperties = [
    "O" + suffix,
    "ms" + suffix,
    "Webkit" + suffix,
    "Moz" + suffix
  ],
  i = testProperties.length,
  supportProperty,
  supportMatrixFilter,
  supportFloat32Array = "Float32Array" in window,
  propertyHook,
  propertyGet,
  rMatrix = /Matrix([^)]*)/,
  rAffine = /^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,
  _transform = "transform",
  _transformOrigin = "transformOrigin",
  _translate = "translate",
  _rotate = "rotate",
  _scale = "scale",
  _skew = "skew",
  _matrix = "matrix";

 // test different vendor prefixes of these properties
 while ( i-- ) {
  if ( testProperties[i] in divStyle ) {
    $.support[_transform] = supportProperty = testProperties[i];
    $.support[_transformOrigin] = supportProperty + "Origin";
    continue;
  }
 }
 // IE678 alternative
 if ( !supportProperty ) {
  $.support.matrixFilter = supportMatrixFilter = divStyle.filter === "";
 }

 // px isn't the default unit of these properties
 $.cssNumber[_transform] = $.cssNumber[_transformOrigin] = true;

 /*
  * fn.css() hooks
  */
 if ( supportProperty && supportProperty != _transform ) {
  // Modern browsers can use jQuery.cssProps as a basic hook
  $.cssProps[_transform] = supportProperty;
  $.cssProps[_transformOrigin] = supportProperty + "Origin";

  // Firefox needs a complete hook because it stuffs matrix with "px"
  if ( supportProperty == "Moz" + suffix ) {
    propertyHook = {
      get: function( elem, computed ) {
        return (computed ?
          // remove "px" from the computed matrix
          $.css( elem, supportProperty ).split("px").join(""):
          elem.style[supportProperty]
        );
      },
      set: function( elem, value ) {
        // add "px" to matrices
        elem.style[supportProperty] = /matrix\([^)p]*\)/.test(value) ?
          value.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/, _matrix+"$1$2px,$3px"):
          value;
      }
    };
  /* Fix two jQuery bugs still present in 1.5.1
   * - rupper is incompatible with IE9, see http://jqbug.com/8346
   * - jQuery.css is not really jQuery.cssProps aware, see http://jqbug.com/8402
   */
  } else if ( /^1\.[0-5](?:\.|$)/.test($.fn.jquery) ) {
    propertyHook = {
      get: function( elem, computed ) {
        return (computed ?
          $.css( elem, supportProperty.replace(/^ms/, "Ms") ):
          elem.style[supportProperty]
        );
      }
    };
  }
  /* TODO: leverage hardware acceleration of 3d transform in Webkit only
  else if ( supportProperty == "Webkit" + suffix && support3dTransform ) {
    propertyHook = {
      set: function( elem, value ) {
        elem.style[supportProperty] = 
          value.replace();
      }
    }
  }*/

 } else if ( supportMatrixFilter ) {
  propertyHook = {
    get: function( elem, computed, asArray ) {
      var elemStyle = ( computed && elem.currentStyle ? elem.currentStyle : elem.style ),
        matrix, data;

      if ( elemStyle && rMatrix.test( elemStyle.filter ) ) {
        matrix = RegExp.$1.split(",");
        matrix = [
          matrix[0].split("=")[1],
          matrix[2].split("=")[1],
          matrix[1].split("=")[1],
          matrix[3].split("=")[1]
        ];
      } else {
        matrix = [1,0,0,1];
      }

      if ( ! $.cssHooks[_transformOrigin] ) {
        matrix[4] = elemStyle ? parseInt(elemStyle.left, 10) || 0 : 0;
        matrix[5] = elemStyle ? parseInt(elemStyle.top, 10) || 0 : 0;

      } else {
        data = $._data( elem, "transformTranslate", undefined );
        matrix[4] = data ? data[0] : 0;
        matrix[5] = data ? data[1] : 0;
      }

      return asArray ? matrix : _matrix+"(" + matrix + ")";
    },
    set: function( elem, value, animate ) {
      var elemStyle = elem.style,
        currentStyle,
        Matrix,
        filter,
        centerOrigin;

      if ( !animate ) {
        elemStyle.zoom = 1;
      }

      value = matrix(value);

      // rotate, scale and skew
      Matrix = [
        "Matrix("+
          "M11="+value[0],
          "M12="+value[2],
          "M21="+value[1],
          "M22="+value[3],
          "SizingMethod='auto expand'"
      ].join();
      filter = ( currentStyle = elem.currentStyle ) && currentStyle.filter || elemStyle.filter || "";

      elemStyle.filter = rMatrix.test(filter) ?
        filter.replace(rMatrix, Matrix) :
        filter + " progid:DXImageTransform.Microsoft." + Matrix + ")";

      if ( ! $.cssHooks[_transformOrigin] ) {

        // center the transform origin, from pbakaus's Transformie http://github.com/pbakaus/transformie
        if ( (centerOrigin = $.transform.centerOrigin) ) {
          elemStyle[centerOrigin == "margin" ? "marginLeft" : "left"] = -(elem.offsetWidth/2) + (elem.clientWidth/2) + "px";
          elemStyle[centerOrigin == "margin" ? "marginTop" : "top"] = -(elem.offsetHeight/2) + (elem.clientHeight/2) + "px";
        }

        // translate
        // We assume that the elements are absolute positionned inside a relative positionned wrapper
        elemStyle.left = value[4] + "px";
        elemStyle.top = value[5] + "px";

      } else {
        $.cssHooks[_transformOrigin].set( elem, value );
      }
    }
  };
 }
 // populate jQuery.cssHooks with the appropriate hook if necessary
 if ( propertyHook ) {
  $.cssHooks[_transform] = propertyHook;
 }
 // we need a unique setter for the animation logic
 propertyGet = propertyHook && propertyHook.get || $.css;

 /*
  * fn.animate() hooks
  */
 $.fx.step.transform = function( fx ) {
  var elem = fx.elem,
    start = fx.start,
    end = fx.end,
    pos = fx.pos,
    transform = "", i, startVal, endVal, unit;

  // fx.end and fx.start need to be converted to interpolation lists
  if ( !start || typeof start === "string" ) {

    // the following block can be commented out with jQuery 1.5.1+, see #7912
    if ( !start ) {
      start = propertyGet( elem, supportProperty );
    }

    // force layout only once per animation
    if ( supportMatrixFilter ) {
      elem.style.zoom = 1;
    }

    // replace "+=" in relative animations (-= is meaningless with transforms)
    end = end.split("+=").join(start);

    // parse both transform to generate interpolation list of same length
    return $.extend( fx, interpolationList( start, end ) );
  }

  i = start.length;

  // interpolate functions of the list one by one
  while ( i-- ) {
    startVal = start[i];
    endVal = end[i];
    unit = +false;

    switch ( startVal[0] ) {

      case _translate:
        unit = "px";
      case _scale:
        unit || ( unit = " ");
      case _skew:
        unit || ( unit = "rad" );

        transform = startVal[0] + "(" +
          (startVal[1][0] + (endVal[1][0] - startVal[1][0]) * pos) + unit +","+
          (startVal[1][1] + (endVal[1][1] - startVal[1][1]) * pos) + unit + ")"+
          transform;
        break;

      case _rotate:
        transform = _rotate + "(" +
          (startVal[1] + (endVal[1] - startVal[1]) * pos) +"rad)"+
          transform;
        break;
    }
  }

  fx.origin && ( transform = fx.origin + transform );

  propertyHook && propertyHook.set ?
    propertyHook.set( elem, transform, +true ):
    elem.style[supportProperty] = transform;
 };

 /*
  * Utility functions
  */

 // turns a transform string into its "matrix(A,B,C,D,X,Y)" form (as an array, though)
 function matrix( transform ) {
  transform = transform.split(")");
  var
      trim = $.trim
    , i = -1
    // last element of the array is an empty string, get rid of it
    , l = transform.length -1
    , split, prop, val
    , prev = supportFloat32Array ? new Float32Array(6) : []
    , curr = supportFloat32Array ? new Float32Array(6) : []
    , rslt = supportFloat32Array ? new Float32Array(6) : [1,0,0,1,0,0]
    ;

  prev[0] = prev[3] = rslt[0] = rslt[3] = 1;
  prev[1] = prev[2] = prev[4] = prev[5] = 0;

  // Loop through the transform properties, parse and multiply them
  while ( ++i < l ) {
    split = transform[i].split("(");
    prop = trim(split[0]);
    val = split[1];
    curr[0] = curr[3] = 1;
    curr[1] = curr[2] = curr[4] = curr[5] = 0;

    switch (prop) {
      case _translate+"X":
        curr[4] = parseInt(val, 10);
        break;

      case _translate+"Y":
        curr[5] = parseInt(val, 10);
        break;

      case _translate:
        val = val.split(",");
        curr[4] = parseInt(val[0], 10);
        curr[5] = parseInt(val[1] || 0, 10);
        break;

      case _rotate:
        val = toRadian(val);
        curr[0] = Math.cos(val);
        curr[1] = Math.sin(val);
        curr[2] = -Math.sin(val);
        curr[3] = Math.cos(val);
        break;

      case _scale+"X":
        curr[0] = +val;
        break;

      case _scale+"Y":
        curr[3] = val;
        break;

      case _scale:
        val = val.split(",");
        curr[0] = val[0];
        curr[3] = val.length>1 ? val[1] : val[0];
        break;

      case _skew+"X":
        curr[2] = Math.tan(toRadian(val));
        break;

      case _skew+"Y":
        curr[1] = Math.tan(toRadian(val));
        break;

      case _skew:
        val = val.split(",");
        curr[2] = Math.tan(toRadian(val[0]));
        val[1] && ( curr[1] = Math.tan(toRadian(val[1])) );
        break;

      case _matrix:
        val = val.split(",");
        curr[0] = val[0];
        curr[1] = val[1];
        curr[2] = val[2];
        curr[3] = val[3];
        curr[4] = parseInt(val[4], 10);
        curr[5] = parseInt(val[5], 10);
        break;
    }

    // Matrix product (array in column-major order)
    rslt[0] = prev[0] * curr[0] + prev[2] * curr[1];
    rslt[1] = prev[1] * curr[0] + prev[3] * curr[1];
    rslt[2] = prev[0] * curr[2] + prev[2] * curr[3];
    rslt[3] = prev[1] * curr[2] + prev[3] * curr[3];
    rslt[4] = prev[0] * curr[4] + prev[2] * curr[5] + prev[4];
    rslt[5] = prev[1] * curr[4] + prev[3] * curr[5] + prev[5];

    prev = [rslt[0],rslt[1],rslt[2],rslt[3],rslt[4],rslt[5]];
  }
  return rslt;
 }

 // turns a matrix into its rotate, scale and skew components
 // algorithm from http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp
 function unmatrix(matrix) {
  var
      scaleX
    , scaleY
    , skew
    , A = matrix[0]
    , B = matrix[1]
    , C = matrix[2]
    , D = matrix[3]
    ;

  // Make sure matrix is not singular
  if ( A * D - B * C ) {
    // step (3)
    scaleX = Math.sqrt( A * A + B * B );
    A /= scaleX;
    B /= scaleX;
    // step (4)
    skew = A * C + B * D;
    C -= A * skew;
    D -= B * skew;
    // step (5)
    scaleY = Math.sqrt( C * C + D * D );
    C /= scaleY;
    D /= scaleY;
    skew /= scaleY;
    // step (6)
    if ( A * D < B * C ) {
      //scaleY = -scaleY;
      //skew = -skew;
      A = -A;
      B = -B;
      skew = -skew;
      scaleX = -scaleX;
    }

  // matrix is singular and cannot be interpolated
  } else {
    throw new Error("matrix is singular");
  }

  // The recomposition order is very important
  // see http://hg.mozilla.org/mozilla-central/file/7cb3e9795d04/layout/style/nsStyleAnimation.cpp#l971
  return [
    [_translate, [+matrix[4], +matrix[5]]],
    [_rotate, Math.atan2(B, A)],
    [_skew, [Math.atan(skew), 0]],
    [_scale, [scaleX, scaleY]]
  ];
 }

 // build the list of transform functions to interpolate
 // use the algorithm described at http://dev.w3.org/csswg/css3-2d-transforms/#animation
 function interpolationList( start, end ) {
  var list = {
      start: [],
      end: []
    },
    i = -1, l,
    currStart, currEnd, currType;

  // get rid of affine transform matrix
  ( start == "none" || isAffine( start ) ) && ( start = "" );
  ( end == "none" || isAffine( end ) ) && ( end = "" );

  // if end starts with the current computed style, this is a relative animation
  // store computed style as the origin, remove it from start and end
  if ( start && end && !end.indexOf("matrix") && toArray( start ).join() == toArray( end.split(")")[0] ).join() ) {
    list.origin = start;
    start = "";
    end = end.slice( end.indexOf(")") +1 );
  }

  if ( !start && !end ) { return; }

  // start or end are affine, or list of transform functions are identical
  // => functions will be interpolated individually
  if ( !start || !end || functionList(start) == functionList(end) ) {

    start && ( start = start.split(")") ) && ( l = start.length );
    end && ( end = end.split(")") ) && ( l = end.length );

    while ( ++i < l-1 ) {
      start[i] && ( currStart = start[i].split("(") );
      end[i] && ( currEnd = end[i].split("(") );
      currType = $.trim( ( currStart || currEnd )[0] );

      append( list.start, parseFunction( currType, currStart ? currStart[1] : 0 ) );
      append( list.end, parseFunction( currType, currEnd ? currEnd[1] : 0 ) );
    }

  // otherwise, functions will be composed to a single matrix
  } else {
    list.start = unmatrix(matrix(start));
    list.end = unmatrix(matrix(end))
  }

  return list;
 }

 function parseFunction( type, value ) {
  var
    // default value is 1 for scale, 0 otherwise
    defaultValue = +(!type.indexOf(_scale)),
    // value is parsed to radian for skew, int otherwise
    valueParser = !type.indexOf(_skew) ? toRadian : parseFloat,
    scaleX,
    cat = type.replace( /[XY]/, "" );

  switch ( type ) {
    case _translate+"Y":
    case _scale+"Y":
    case _skew+"Y":

      value = [
        defaultValue,
        value ?
          valueParser( value ):
          defaultValue
      ];
      break;

    case _translate+"X":
    case _translate:
    case _scale+"X":
      scaleX = 1;
    case _scale:
    case _skew+"X":
    case _skew:

      value = value ?
        ( value = value.split(",") ) && [
          valueParser( value[0] ),
          valueParser( value.length>1 ? value[1] : type == _scale ? scaleX || value[0] : defaultValue+"" )
        ]:
        [defaultValue, defaultValue];
      break;

    case _rotate:
      value = value ? toRadian( value ) : 0;
      break;

    case _matrix:
      return unmatrix( value ? toArray(value) : [1,0,0,1,0,0] );
      break;
  }

  return [[ cat, value ]];
 }

 function isAffine( matrix ) {
  return rAffine.test(matrix);
 }

 function functionList( transform ) {
  return transform.replace(/(?:\([^)]*\))|\s/g, "");
 }

 function append( arr1, arr2, value ) {
  while ( value = arr2.shift() ) {
    arr1.push( value );
  }
 }

 // converts an angle string in any unit to a radian Float
 function toRadian(value) {
  return ~value.indexOf("deg") ?
    parseInt(value,10) * (Math.PI * 2 / 360):
    ~value.indexOf("grad") ?
      parseInt(value,10) * (Math.PI/200):
      parseFloat(value);
 }

 // Converts "matrix(A,B,C,D,X,Y)" to [A,B,C,D,X,Y]
 function toArray(matrix) {
  // remove the unit of X and Y for Firefox
  matrix = /([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(matrix);
  return [matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6]];
 }

 $.transform = {
  centerOrigin: "margin"
 };

 })( jQuery, window, document, Math );

 jQuery(function(){
    
  window.head = $('#head > div');
    
  window.wing_one = $('#wing-one span');
  window.wing_two = $('#wing-two span');
    
  window.left_eyebrow = $('#left-eye .eyebrow span');
  window.right_eyebrow = $('#right-eye .eyebrow span');
    
  window.left_eye_pupil = $('#left-eye .eye-pupil');
  window.right_eye_pupil = $('#right-eye .eye-pupil');
    
  window.leg_one = $('.legs-a span');
  window.leg_two = $('.legs-b span');
  
  head.css({transformOrigin: "0% 0%"});
  wing_one.css({transformOrigin: "100% 100%"});
  wing_two.css({transformOrigin: "0% 100%"});
  left_eyebrow.css({transformOrigin: "50% 50%"});
  right_eyebrow.css({transformOrigin: "50% 50%"});
  left_eye_pupil.css({transformOrigin: "0% 0%"});
  right_eye_pupil.css({transformOrigin: "0% 0%"});
  leg_one.css({transformOrigin: "0% 0%"});
  leg_two.css({transformOrigin: "0% 0%"});
  
  function wingsTime() {
    if ($.browser.msie && $.browser.version < 10) {
      wing_one.animate({ left:92, top:160}, 400)
              .animate({  left:84, top:170}, 400)
              .animate({left:78, top:175}, 400)
              .animate({left:84, top:170}, 400)
        
      
      wing_two.animate({ right:95, top:160}, 400)
              .animate({right:87, top:170}, 400)
              .animate({right:81, top:175}, 400)
              .animate({right:87, top:170}, 400)  
    }
    else{
    
      wing_one.animate({  transform: 'rotate(0deg)'}, 100, function() {
        })
          .animate({  transform: 'rotate(-10deg)'}, 100, function() {
          })
          .animate({  transform: 'rotate(-15deg)'}, 100, function() {
            })
          .animate({  transform: 'rotate(-20deg)'}, 100, function() {
          })
          .animate({  transform: 'rotate(-15deg)'}, 100, function() {})
          .animate({  transform: 'rotate(-10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(0deg)'}, 200, function() {})
          .animate({  transform: 'rotate(10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(15deg)'}, 100, function() {})
          .animate({  transform: 'rotate(10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(0deg)'}, 100, function() {});
    
      wing_two.animate({  transform: 'rotate(0deg)'}, 100, function() {})
          .animate({  transform: 'rotate(10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(15deg)'}, 100, function() {})
          .animate({  transform: 'rotate(20deg)'}, 100, function() {})
          .animate({  transform: 'rotate(15deg)'}, 100, function() {})
          .animate({  transform: 'rotate(10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(0deg)'}, 200, function() {})   
          .animate({  transform: 'rotate(-10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(-15deg)'}, 100, function() {})
          .animate({  transform: 'rotate(-10deg)'}, 100, function() {})
          .animate({  transform: 'rotate(0deg)'}, 100, function() {}) ;
    }
    
  }
    
  IntervalWings = setInterval(wingsTime, 200);
  
  //Eyes
  function eyeBrowTime() {
    if ($.browser.msie && $.browser.version < 10) {
      left_eyebrow.animate({ left:8, top:-23}, 800)
              .animate({  left:5, top:-20}, 800)
              .animate({left:3, top:-18}, 800)
              .animate({left:5, top:-20}, 800)
        
      
      right_eyebrow.animate({ left:-6, top:-23}, 800)
              .animate({left:-3, top:-20}, 800)
              .animate({left:-1, top:-18}, 800)
              .animate({left:-3, top:-20}, 800)
    }
     else{
      left_eyebrow.animate({transform: 'rotate(0deg)'}, 1000, function(){})
            .animate({  transform: 'rotate(5deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(10deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(15deg)'}, 1000, function() {})
              .animate({  transform: 'rotate(10deg)'}, 1000, function() {}) 
              .animate({  transform: 'rotate(5deg)'}, 1000, function() {})  
              .animate({  transform: 'rotate(0deg)'}, 1000, function() {});                                 
      
      right_eyebrow.animate({transform: 'rotate(0deg)'}, 1000, function(){})
            .animate({  transform: 'rotate(-5deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(-10deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(-15deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(-10deg)'}, 1000, function() {})
            .animate({  transform: 'rotate(-5deg)'}, 1000, function() {})   
            .animate({  transform: 'rotate(0deg)'}, 1000, function() {});
     }
  }
  
  
  IntervalEyebrow = setInterval(eyeBrowTime, 3000);
  
  function eyeTime() {
     if ($.browser.msie && $.browser.version < 10) {
       left_eye_pupil.animate({ left:31}, 2000)
              .animate({  left:26}, 2000)
              .animate({left:19, top:7}, 2000)
              .animate({left:26}, 2000)
        
      
      right_eye_pupil.animate({ left:17, top:7}, 2000)
              .animate({  left:10}, 2000)
              .animate({left:8}, 2000)
              .animate({left:10}, 2000) 
                      
       
    }
     else { 
      left_eye_pupil.animate({ transform: 'translateX(5px)'}, 2000, function() {})
              .animate({   transform: 'translateX(0px)'}, 2000, function() {})
              .animate({transform: 'translateX(-5px)'}, 2000, function() {})
        
      
      right_eye_pupil.animate({transform: 'translateX(5px)'}, 2000, function() {})
              .animate({   transform: 'translateX(0px)'}, 2000, function() {})
              .animate({transform: 'translateX(-5px)'}, 2000, function() {}); 
              //counter++ 
            
       }

  };

  IntervalEye = setInterval(eyeTime, 6000);
  
  
    function legsTime() {
       if ($.browser.msie && $.browser.version  < 10 || $.browser.opera) {
          leg_one.animate({ left:22, top:-6}, 400)
                  .animate({  left:20, top:-4}, 400)
                  .animate({left:18, top:-3}, 400)
                  .animate({left:20, top:-4}, 400)
            
          
          leg_two.animate({ right:-14, top:-5}, 400)
                  .animate({right:-15, top:-7}, 400)
                  .animate({right:-17, top:-2}, 400)
                  .animate({right:-15, top:-7}, 400)
        }
  
       else {
  //Legs animate
    
        /*leg_one.animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {})
            .animate({  transform: 'rotate(-1deg) translate(3px,1px)'}, 300, function() {})
            .animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {})
            .animate({  transform: 'rotate(1deg) translate(-3px,-1px)'}, 300, function() {})
            .animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {});
            
        leg_two.animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {})
            .animate({  transform: 'rotate(1deg) translate(3px,1px)'}, 300, function() {})
            .animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {})
            .animate({  transform: 'rotate(-1deg) translate(-3px,-1px)'}, 300, function() {})
            .animate({  transform: 'rotate(0deg) translate(0px)'}, 300, function() {});*/
            
      }
    }
    Interval5 = setInterval(legsTime, 500);
  
  $(window).resize(function () {

    var top = ($(window).height()-(712+56))/2;
    if(top > 20){
      $("#wraper").css({
        "padding-top" : top+"px"
      });
    } else {
      $("#wraper").css({
        "padding-top" : "20px"
      });
    }

    $('#nav').css({         
      left: ($(window).width() - $('#nav').width())/2 
    })
    var width_bot_l = $('#nav').offset().left;
    $('.bot-l').css({
      width: width_bot_l
    })
    $('.bot-r').css({
      width: $(window).width() - ($('.bot-l').width() + $('#nav').width())
    })
  })
  $(window).resize();
 })
  
 jQuery(function() {  
  function CircleArc(i){
    var SineWave = function() {
      this.css = function(p) {
        if (p <= 1 && p >= 0.5) {
          var x = 120 - p*160;
          var y = 30*Math.sin(p*4*Math.PI);
        } else {
          var x = p*160 - 40;
          var y = 30*Math.sin(p*4*Math.PI);
        }
        return {top: y + "px", left: x + "px"}
      } 
    };
    $("#head").animate({       
      path : new SineWave
    }, 10000, "linear", CircleArc);
  };      
  CircleArc();
 });
}

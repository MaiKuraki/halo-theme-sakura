import{E as M,k as ee,F as Y,G as Te,H as Ht,m as V,I as B,l as Re,C as Ce,e as vt,i as J,J as Ne,K as ke,a as K,L as ie,P as Ae,p as Ve,M as re,N as Be,O as Me,T as Oe,Q as De,S as Ee,U as Z,V as He,W as lt,X as Ge,Y as Gt,_ as ze,o as Fe,f as Ue,$ as je,a0 as qe,a1 as Ze,a2 as Xe,a3 as Ye,a4 as Ke,a5 as $e,a6 as ae,a7 as Pt,a8 as We,a9 as Je,aa as Qe,h as ti,b as ne,ab as U,ac as ei,ad as ii,ae as ri,af as se,B as st,ag as Lt,ah as ai,ai as ni,aj as oe,ak as si,al as oi,am as fi,an as hi,ao as ot,D as vi,ap as ui,A as li,s as ft,aq as di,q as ci}from"./graphic-ce8bd673.js";var yt=Math.sin,mt=Math.cos,fe=Math.PI,D=Math.PI*2,_i=180/fe,pi=function(){function r(){}return r.prototype.reset=function(t){this._start=!0,this._d=[],this._str="",this._p=Math.pow(10,t||4)},r.prototype.moveTo=function(t,e){this._add("M",t,e)},r.prototype.lineTo=function(t,e){this._add("L",t,e)},r.prototype.bezierCurveTo=function(t,e,i,a,n,s){this._add("C",t,e,i,a,n,s)},r.prototype.quadraticCurveTo=function(t,e,i,a){this._add("Q",t,e,i,a)},r.prototype.arc=function(t,e,i,a,n,s){this.ellipse(t,e,i,i,0,a,n,s)},r.prototype.ellipse=function(t,e,i,a,n,s,f,o){var v=f-s,u=!o,h=Math.abs(v),l=M(h-D)||(u?v>=D:-v>=D),c=v>0?v%D:v%D+D,_=!1;l?_=!0:M(h)?_=!1:_=c>=fe==!!u;var d=t+i*mt(s),p=e+a*yt(s);this._start&&this._add("M",d,p);var y=Math.round(n*_i);if(l){var g=1/this._p,m=(u?1:-1)*(D-g);this._add("A",i,a,y,1,+u,t+i*mt(s+m),e+a*yt(s+m)),g>.01&&this._add("A",i,a,y,0,+u,d,p)}else{var x=t+i*mt(f),C=e+a*yt(f);this._add("A",i,a,y,+_,+u,x,C)}},r.prototype.rect=function(t,e,i,a){this._add("M",t,e),this._add("l",i,0),this._add("l",0,a),this._add("l",-i,0),this._add("Z")},r.prototype.closePath=function(){this._d.length>0&&this._add("Z")},r.prototype._add=function(t,e,i,a,n,s,f,o,v){for(var u=[],h=this._p,l=1;l<arguments.length;l++){var c=arguments[l];if(isNaN(c)){this._invalid=!0;return}u.push(Math.round(c*h)/h)}this._d.push(t+u.join(" ")),this._start=t==="Z"},r.prototype.generateStr=function(){this._str=this._invalid?"":this._d.join(""),this._d=[]},r.prototype.getStr=function(){return this._str},r}();const he=pi;var X="none",gi=Math.round;function yi(r){var t=r.fill;return t!=null&&t!==X}function mi(r){var t=r.stroke;return t!=null&&t!==X}var It=["lineCap","miterLimit","lineJoin"],xi=V(It,function(r){return"stroke-"+r.toLowerCase()});function wi(r,t,e,i){var a=t.opacity==null?1:t.opacity;if(e instanceof ee){r("opacity",a);return}if(yi(t)){var n=Y(t.fill);r("fill",n.color);var s=t.fillOpacity!=null?t.fillOpacity*n.opacity*a:n.opacity*a;(i||s<1)&&r("fill-opacity",s)}else r("fill",X);if(mi(t)){var f=Y(t.stroke);r("stroke",f.color);var o=t.strokeNoScale?e.getLineScale():1,v=o?(t.lineWidth||0)/o:0,u=t.strokeOpacity!=null?t.strokeOpacity*f.opacity*a:f.opacity*a,h=t.strokeFirst;if((i||v!==1)&&r("stroke-width",v),(i||h)&&r("paint-order",h?"stroke":"fill"),(i||u<1)&&r("stroke-opacity",u),t.lineDash){var l=Te(e),c=l[0],_=l[1];c&&(_=gi(_||0),r("stroke-dasharray",c.join(",")),(_||i)&&r("stroke-dashoffset",_))}else i&&r("stroke-dasharray",X);for(var d=0;d<It.length;d++){var p=It[d];if(i||t[p]!==Ht[p]){var y=t[p]||Ht[p];y&&r(xi[d],y)}}}else i&&r("stroke",X)}var ve="http://www.w3.org/2000/svg",ue="http://www.w3.org/1999/xlink",Li="http://www.w3.org/2000/xmlns/",Ii="http://www.w3.org/XML/1998/namespace";function le(r){return document.createElementNS(ve,r)}function b(r,t,e,i,a){return{tag:r,attrs:e||{},children:i,text:a,key:t}}function Si(r,t){var e=[];if(t)for(var i in t){var a=t[i],n=i;a!==!1&&(a!==!0&&a!=null&&(n+='="'+a+'"'),e.push(n))}return"<"+r+" "+e.join(" ")+">"}function bi(r){return"</"+r+">"}function Tt(r,t){t=t||{};var e=t.newline?`
`:"";function i(a){var n=a.children,s=a.tag,f=a.attrs,o=a.text;return Si(s,f)+(s!=="style"?Re(o):o||"")+(n?""+e+V(n,function(v){return i(v)}).join(e)+e:"")+bi(s)}return i(r)}function Pi(r,t,e){e=e||{};var i=e.newline?`
`:"",a=" {"+i,n=i+"}",s=V(B(r),function(o){return o+a+V(B(r[o]),function(v){return v+":"+r[o][v]+";"}).join(i)+n}).join(i),f=V(B(t),function(o){return"@keyframes "+o+a+V(B(t[o]),function(v){return v+a+V(B(t[o][v]),function(u){var h=t[o][v][u];return u==="d"&&(h='path("'+h+'")'),u+":"+h+";"}).join(i)+n}).join(i)+n}).join(i);return!s&&!f?"":["<![CDATA[",s,f,"]]>"].join(i)}function St(r){return{zrId:r,shadowCache:{},patternCache:{},gradientCache:{},clipPathCache:{},defs:{},cssNodes:{},cssAnims:{},cssClassIdx:0,cssAnimIdx:0,shadowIdx:0,gradientIdx:0,patternIdx:0,clipPathIdx:0}}function zt(r,t,e,i){return b("svg","root",{width:r,height:t,xmlns:ve,"xmlns:xlink":ue,version:"1.1",baseProfile:"full",viewBox:i?"0 0 "+r+" "+t:!1},e)}var Ft={cubicIn:"0.32,0,0.67,0",cubicOut:"0.33,1,0.68,1",cubicInOut:"0.65,0,0.35,1",quadraticIn:"0.11,0,0.5,0",quadraticOut:"0.5,1,0.89,1",quadraticInOut:"0.45,0,0.55,1",quarticIn:"0.5,0,0.75,0",quarticOut:"0.25,1,0.5,1",quarticInOut:"0.76,0,0.24,1",quinticIn:"0.64,0,0.78,0",quinticOut:"0.22,1,0.36,1",quinticInOut:"0.83,0,0.17,1",sinusoidalIn:"0.12,0,0.39,0",sinusoidalOut:"0.61,1,0.88,1",sinusoidalInOut:"0.37,0,0.63,1",exponentialIn:"0.7,0,0.84,0",exponentialOut:"0.16,1,0.3,1",exponentialInOut:"0.87,0,0.13,1",circularIn:"0.55,0,1,0.45",circularOut:"0,0.55,0.45,1",circularInOut:"0.85,0,0.15,1"},H="transform-origin";function Ti(r,t,e){var i=K({},r.shape);K(i,t),r.buildPath(e,i);var a=new he;return a.reset(re(r)),e.rebuildPath(a,1),a.generateStr(),a.getStr()}function Ri(r,t){var e=t.originX,i=t.originY;(e||i)&&(r[H]=e+"px "+i+"px")}var Ci={fill:"fill",opacity:"opacity",lineWidth:"stroke-width",lineDashOffset:"stroke-dashoffset"};function de(r,t){var e=t.zrId+"-ani-"+t.cssAnimIdx++;return t.cssAnims[e]=r,e}function Ni(r,t,e){var i=r.shape.paths,a={},n,s;if(vt(i,function(o){var v=St(e.zrId);v.animation=!0,dt(o,{},v,!0);var u=v.cssAnims,h=v.cssNodes,l=B(u),c=l.length;if(c){s=l[c-1];var _=u[s];for(var d in _){var p=_[d];a[d]=a[d]||{d:""},a[d].d+=p.d||""}for(var y in h){var g=h[y].animation;g.indexOf(s)>=0&&(n=g)}}}),!!n){t.d=!1;var f=de(a,e);return n.replace(s,f)}}function Ut(r){return J(r)?Ft[r]?"cubic-bezier("+Ft[r]+")":Ne(r)?r:"":""}function dt(r,t,e,i){var a=r.animators,n=a.length,s=[];if(r instanceof Ce){var f=Ni(r,t,e);if(f)s.push(f);else if(!n)return}else if(!n)return;for(var o={},v=0;v<n;v++){var u=a[v],h=[u.getMaxTime()/1e3+"s"],l=Ut(u.getClip().easing),c=u.getDelay();l?h.push(l):h.push("linear"),c&&h.push(c/1e3+"s"),u.getLoop()&&h.push("infinite");var _=h.join(" ");o[_]=o[_]||[_,[]],o[_][1].push(u)}function d(g){var m=g[1],x=m.length,C={},N={},w={},S="animation-timing-function";function P(tt,et,Mt){for(var it=tt.getTracks(),Pe=tt.getMaxTime(),_t=0;_t<it.length;_t++){var pt=it[_t];if(pt.needsAnimate()){var Ot=pt.keyframes,rt=pt.propName;if(Mt&&(rt=Mt(rt)),rt)for(var gt=0;gt<Ot.length;gt++){var at=Ot[gt],nt=Math.round(at.time/Pe*100)+"%",Dt=Ut(at.easing),Et=at.rawValue;(J(Et)||Be(Et))&&(et[nt]=et[nt]||{},et[nt][rt]=at.rawValue,Dt&&(et[nt][S]=Dt))}}}}for(var L=0;L<x;L++){var R=m[L],T=R.targetName;T?T==="shape"&&P(R,N):!i&&P(R,C)}for(var I in C){var k={};ke(k,r),K(k,C[I]);var j=ie(k),O=C[I][S];w[I]=j?{transform:j}:{},Ri(w[I],k),O&&(w[I][S]=O)}var z,kt=!0;for(var I in N){w[I]=w[I]||{};var At=!z,O=N[I][S];At&&(z=new Ae);var Le=z.len();z.reset(),w[I].d=Ti(r,N[I],z);var Ie=z.len();if(!At&&Le!==Ie){kt=!1;break}O&&(w[I][S]=O)}if(!kt)for(var I in w)delete w[I].d;if(!i)for(var L=0;L<x;L++){var R=m[L],T=R.targetName;T==="style"&&P(R,w,function(it){return Ci[it]})}for(var Q=B(w),Vt=!0,ct,L=1;L<Q.length;L++){var Bt=Q[L-1],Se=Q[L];if(w[Bt][H]!==w[Se][H]){Vt=!1;break}ct=w[Bt][H]}if(Vt&&ct){for(var I in w)w[I][H]&&delete w[I][H];t[H]=ct}if(Ve(Q,function(tt){return B(w[tt]).length>0}).length){var be=de(w,e);return be+" "+g[0]+" both"}}for(var p in o){var f=d(o[p]);f&&s.push(f)}if(s.length){var y=e.zrId+"-cls-"+e.cssClassIdx++;e.cssNodes["."+y]={animation:s.join(",")},t.class=y}}var $=Math.round;function ce(r){return r&&J(r.src)}function _e(r){return r&&Ue(r.toDataURL)}function Rt(r,t,e,i){wi(function(a,n){var s=a==="fill"||a==="stroke";s&&ae(n)?ge(t,r,a,i):s&&Pt(n)?ye(e,r,a,i):r[a]=n},t,e,!1),Di(e,r,i)}function jt(r){return M(r[0]-1)&&M(r[1])&&M(r[2])&&M(r[3]-1)}function ki(r){return M(r[4])&&M(r[5])}function Ct(r,t,e){if(t&&!(ki(t)&&jt(t))){var i=e?10:1e4;r.transform=jt(t)?"translate("+$(t[4]*i)/i+" "+$(t[5]*i)/i+")":We(t)}}function qt(r,t,e){for(var i=r.points,a=[],n=0;n<i.length;n++)a.push($(i[n][0]*e)/e),a.push($(i[n][1]*e)/e);t.points=a.join(" ")}function Zt(r){return!r.smooth}function Ai(r){var t=V(r,function(e){return typeof e=="string"?[e,e]:e});return function(e,i,a){for(var n=0;n<t.length;n++){var s=t[n],f=e[s[0]];f!=null&&(i[s[1]]=$(f*a)/a)}}}var Vi={circle:[Ai(["cx","cy","r"])],polyline:[qt,Zt],polygon:[qt,Zt]};function Bi(r){for(var t=r.animators,e=0;e<t.length;e++)if(t[e].targetName==="shape")return!0;return!1}function pe(r,t){var e=r.style,i=r.shape,a=Vi[r.type],n={},s=t.animation,f="path",o=r.style.strokePercent,v=t.compress&&re(r)||4;if(a&&!t.willUpdate&&!(a[1]&&!a[1](i))&&!(s&&Bi(r))&&!(o<1)){f=r.type;var u=Math.pow(10,v);a[0](i,n,u)}else{var h=!r.path||r.shapeChanged();r.path||r.createPathProxy();var l=r.path;h&&(l.beginPath(),r.buildPath(l,r.shape),r.pathUpdated());var c=l.getVersion(),_=r,d=_.__svgPathBuilder;(_.__svgPathVersion!==c||!d||o!==_.__svgPathStrokePercent)&&(d||(d=_.__svgPathBuilder=new he),d.reset(v),l.rebuildPath(d,o),d.generateStr(),_.__svgPathVersion=c,_.__svgPathStrokePercent=o),n.d=d.getStr()}return Ct(n,r.transform),Rt(n,e,r,t),t.animation&&dt(r,n,t),b(f,r.id+"",n)}function Mi(r,t){var e=r.style,i=e.image;if(i&&!J(i)&&(ce(i)?i=i.src:_e(i)&&(i=i.toDataURL())),!!i){var a=e.x||0,n=e.y||0,s=e.width,f=e.height,o={href:i,width:s,height:f};return a&&(o.x=a),n&&(o.y=n),Ct(o,r.transform),Rt(o,e,r,t),t.animation&&dt(r,o,t),b("image",r.id+"",o)}}function Oi(r,t){var e=r.style,i=e.text;if(i!=null&&(i+=""),!(!i||isNaN(e.x)||isNaN(e.y))){var a=e.font||je,n=e.x||0,s=qe(e.y||0,Ze(a),e.textBaseline),f=Xe[e.textAlign]||e.textAlign,o={"dominant-baseline":"central","text-anchor":f};if(Ye(e)){var v="",u=e.fontStyle,h=Ke(e.fontSize);if(!parseFloat(h))return;var l=e.fontFamily||$e,c=e.fontWeight;v+="font-size:"+h+";font-family:"+l+";",u&&u!=="normal"&&(v+="font-style:"+u+";"),c&&c!=="normal"&&(v+="font-weight:"+c+";"),o.style=v}else o.style="font: "+a;return i.match(/\s/)&&(o["xml:space"]="preserve"),n&&(o.x=n),s&&(o.y=s),Ct(o,r.transform),Rt(o,e,r,t),t.animation&&dt(r,o,t),b("text",r.id+"",o,void 0,i)}}function Xt(r,t){if(r instanceof Me)return pe(r,t);if(r instanceof ee)return Mi(r,t);if(r instanceof Oe)return Oi(r,t)}function Di(r,t,e){var i=r.style;if(Je(i)){var a=Qe(r),n=e.shadowCache,s=n[a];if(!s){var f=r.getGlobalScale(),o=f[0],v=f[1];if(!o||!v)return;var u=i.shadowOffsetX||0,h=i.shadowOffsetY||0,l=i.shadowBlur,c=Y(i.shadowColor),_=c.opacity,d=c.color,p=l/2/o,y=l/2/v,g=p+" "+y;s=e.zrId+"-s"+e.shadowIdx++,e.defs[s]=b("filter",s,{id:s,x:"-100%",y:"-100%",width:"300%",height:"300%"},[b("feDropShadow","",{dx:u/o,dy:h/v,stdDeviation:g,"flood-color":d,"flood-opacity":_})]),n[a]=s}t.filter=lt(s)}}function ge(r,t,e,i){var a=r[e],n,s={gradientUnits:a.global?"userSpaceOnUse":"objectBoundingBox"};if(De(a))n="linearGradient",s.x1=a.x,s.y1=a.y,s.x2=a.x2,s.y2=a.y2;else if(Ee(a))n="radialGradient",s.cx=Z(a.x,.5),s.cy=Z(a.y,.5),s.r=Z(a.r,.5);else return;for(var f=a.colorStops,o=[],v=0,u=f.length;v<u;++v){var h=He(f[v].offset)*100+"%",l=f[v].color,c=Y(l),_=c.color,d=c.opacity,p={offset:h};p["stop-color"]=_,d<1&&(p["stop-opacity"]=d),o.push(b("stop",v+"",p))}var y=b(n,"",s,o),g=Tt(y),m=i.gradientCache,x=m[g];x||(x=i.zrId+"-g"+i.gradientIdx++,m[g]=x,s.id=x,i.defs[x]=b(n,x,s,o)),t[e]=lt(x)}function ye(r,t,e,i){var a=r.style[e],n=r.getBoundingRect(),s={},f=a.repeat,o=f==="no-repeat",v=f==="repeat-x",u=f==="repeat-y",h;if(Ge(a)){var l=a.imageWidth,c=a.imageHeight,_=void 0,d=a.image;if(J(d)?_=d:ce(d)?_=d.src:_e(d)&&(_=d.toDataURL()),typeof Image>"u"){var p="Image width/height must been given explictly in svg-ssr renderer.";Gt(l,p),Gt(c,p)}else if(l==null||c==null){var y=function(L,R){if(L){var T=L.elm,I=l||R.width,k=c||R.height;L.tag==="pattern"&&(v?(k=1,I/=n.width):u&&(I=1,k/=n.height)),L.attrs.width=I,L.attrs.height=k,T&&(T.setAttribute("width",I),T.setAttribute("height",k))}},g=ze(_,null,r,function(L){o||y(N,L),y(h,L)});g&&g.width&&g.height&&(l=l||g.width,c=c||g.height)}h=b("image","img",{href:_,width:l,height:c}),s.width=l,s.height=c}else a.svgElement&&(h=Fe(a.svgElement),s.width=a.svgWidth,s.height=a.svgHeight);if(h){var m,x;o?m=x=1:v?(x=1,m=s.width/n.width):u?(m=1,x=s.height/n.height):s.patternUnits="userSpaceOnUse",m!=null&&!isNaN(m)&&(s.width=m),x!=null&&!isNaN(x)&&(s.height=x);var C=ie(a);C&&(s.patternTransform=C);var N=b("pattern","",s,[h]),w=Tt(N),S=i.patternCache,P=S[w];P||(P=i.zrId+"-p"+i.patternIdx++,S[w]=P,s.id=P,N=i.defs[P]=b("pattern",P,s,[h])),t[e]=lt(P)}}function Ei(r,t,e){var i=e.clipPathCache,a=e.defs,n=i[r.id];if(!n){n=e.zrId+"-c"+e.clipPathIdx++;var s={id:n};i[r.id]=n,a[n]=b("clipPath",n,s,[pe(r,e)])}t["clip-path"]=lt(n)}function Yt(r){return document.createTextNode(r)}function G(r,t,e){r.insertBefore(t,e)}function Kt(r,t){r.removeChild(t)}function $t(r,t){r.appendChild(t)}function me(r){return r.parentNode}function xe(r){return r.nextSibling}function xt(r,t){r.textContent=t}var Wt=58,Hi=120,Gi=b("","");function bt(r){return r===void 0}function A(r){return r!==void 0}function zi(r,t,e){for(var i={},a=t;a<=e;++a){var n=r[a].key;n!==void 0&&(i[n]=a)}return i}function q(r,t){var e=r.key===t.key,i=r.tag===t.tag;return i&&e}function W(r){var t,e=r.children,i=r.tag;if(A(i)){var a=r.elm=le(i);if(Nt(Gi,r),ti(e))for(t=0;t<e.length;++t){var n=e[t];n!=null&&$t(a,W(n))}else A(r.text)&&!ne(r.text)&&$t(a,Yt(r.text))}else r.elm=Yt(r.text);return r.elm}function we(r,t,e,i,a){for(;i<=a;++i){var n=e[i];n!=null&&G(r,W(n),t)}}function ut(r,t,e,i){for(;e<=i;++e){var a=t[e];if(a!=null)if(A(a.tag)){var n=me(a.elm);Kt(n,a.elm)}else Kt(r,a.elm)}}function Nt(r,t){var e,i=t.elm,a=r&&r.attrs||{},n=t.attrs||{};if(a!==n){for(e in n){var s=n[e],f=a[e];f!==s&&(s===!0?i.setAttribute(e,""):s===!1?i.removeAttribute(e):e.charCodeAt(0)!==Hi?i.setAttribute(e,s):e==="xmlns:xlink"||e==="xmlns"?i.setAttributeNS(Li,e,s):e.charCodeAt(3)===Wt?i.setAttributeNS(Ii,e,s):e.charCodeAt(5)===Wt?i.setAttributeNS(ue,e,s):i.setAttribute(e,s))}for(e in a)e in n||i.removeAttribute(e)}}function Fi(r,t,e){for(var i=0,a=0,n=t.length-1,s=t[0],f=t[n],o=e.length-1,v=e[0],u=e[o],h,l,c,_;i<=n&&a<=o;)s==null?s=t[++i]:f==null?f=t[--n]:v==null?v=e[++a]:u==null?u=e[--o]:q(s,v)?(F(s,v),s=t[++i],v=e[++a]):q(f,u)?(F(f,u),f=t[--n],u=e[--o]):q(s,u)?(F(s,u),G(r,s.elm,xe(f.elm)),s=t[++i],u=e[--o]):q(f,v)?(F(f,v),G(r,f.elm,s.elm),f=t[--n],v=e[++a]):(bt(h)&&(h=zi(t,i,n)),l=h[v.key],bt(l)?G(r,W(v),s.elm):(c=t[l],c.tag!==v.tag?G(r,W(v),s.elm):(F(c,v),t[l]=void 0,G(r,c.elm,s.elm))),v=e[++a]);(i<=n||a<=o)&&(i>n?(_=e[o+1]==null?null:e[o+1].elm,we(r,_,e,a,o)):ut(r,t,i,n))}function F(r,t){var e=t.elm=r.elm,i=r.children,a=t.children;r!==t&&(Nt(r,t),bt(t.text)?A(i)&&A(a)?i!==a&&Fi(e,i,a):A(a)?(A(r.text)&&xt(e,""),we(e,null,a,0,a.length-1)):A(i)?ut(e,i,0,i.length-1):A(r.text)&&xt(e,""):r.text!==t.text&&(A(i)&&ut(e,i,0,i.length-1),xt(e,t.text)))}function Ui(r,t){if(q(r,t))F(r,t);else{var e=r.elm,i=me(e);W(t),i!==null&&(G(i,t.elm,xe(e)),ut(i,[r],0,0))}return t}var ji=0,qi=function(){function r(t,e,i){if(this.type="svg",this.refreshHover=Jt(),this.configLayer=Jt(),this.storage=e,this._opts=i=K({},i),this.root=t,this._id="zr"+ji++,this._oldVNode=zt(i.width,i.height),t&&!i.ssr){var a=this._viewport=document.createElement("div");a.style.cssText="position:relative;overflow:hidden";var n=this._svgDom=this._oldVNode.elm=le("svg");Nt(null,this._oldVNode),a.appendChild(n),t.appendChild(a)}this.resize(i.width,i.height)}return r.prototype.getType=function(){return this.type},r.prototype.getViewportRoot=function(){return this._viewport},r.prototype.getViewportRootOffset=function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},r.prototype.getSvgDom=function(){return this._svgDom},r.prototype.refresh=function(){if(this.root){var t=this.renderToVNode({willUpdate:!0});t.attrs.style="position:absolute;left:0;top:0;user-select:none",Ui(this._oldVNode,t),this._oldVNode=t}},r.prototype.renderOneToVNode=function(t){return Xt(t,St(this._id))},r.prototype.renderToVNode=function(t){t=t||{};var e=this.storage.getDisplayList(!0),i=this._width,a=this._height,n=St(this._id);n.animation=t.animation,n.willUpdate=t.willUpdate,n.compress=t.compress;var s=[],f=this._bgVNode=Zi(i,a,this._backgroundColor,n);f&&s.push(f);var o=t.compress?null:this._mainVNode=b("g","main",{},[]);this._paintList(e,n,o?o.children:s),o&&s.push(o);var v=V(B(n.defs),function(l){return n.defs[l]});if(v.length&&s.push(b("defs","defs",{},v)),t.animation){var u=Pi(n.cssNodes,n.cssAnims,{newline:!0});if(u){var h=b("style","stl",{},[],u);s.push(h)}}return zt(i,a,s,t.useViewBox)},r.prototype.renderToString=function(t){return t=t||{},Tt(this.renderToVNode({animation:Z(t.cssAnimation,!0),willUpdate:!1,compress:!0,useViewBox:Z(t.useViewBox,!0)}),{newline:!0})},r.prototype.setBackgroundColor=function(t){this._backgroundColor=t},r.prototype.getSvgRoot=function(){return this._mainVNode&&this._mainVNode.elm},r.prototype._paintList=function(t,e,i){for(var a=t.length,n=[],s=0,f,o,v=0,u=0;u<a;u++){var h=t[u];if(!h.invisible){var l=h.__clipPaths,c=l&&l.length||0,_=o&&o.length||0,d=void 0;for(d=Math.max(c-1,_-1);d>=0&&!(l&&o&&l[d]===o[d]);d--);for(var p=_-1;p>d;p--)s--,f=n[s-1];for(var y=d+1;y<c;y++){var g={};Ei(l[y],g,e);var m=b("g","clip-g-"+v++,g,[]);(f?f.children:i).push(m),n[s++]=m,f=m}o=l;var x=Xt(h,e);x&&(f?f.children:i).push(x)}}},r.prototype.resize=function(t,e){var i=this._opts,a=this.root,n=this._viewport;if(t!=null&&(i.width=t),e!=null&&(i.height=e),a&&n&&(n.style.display="none",t=U(a,0,i),e=U(a,1,i),n.style.display=""),this._width!==t||this._height!==e){if(this._width=t,this._height=e,n){var s=n.style;s.width=t+"px",s.height=e+"px"}if(Pt(this._backgroundColor))this.refresh();else{var f=this._svgDom;f&&(f.setAttribute("width",t),f.setAttribute("height",e));var o=this._bgVNode&&this._bgVNode.elm;o&&(o.setAttribute("width",t),o.setAttribute("height",e))}}},r.prototype.getWidth=function(){return this._width},r.prototype.getHeight=function(){return this._height},r.prototype.dispose=function(){this.root&&(this.root.innerHTML=""),this._svgDom=this._viewport=this.storage=this._oldVNode=this._bgVNode=this._mainVNode=null},r.prototype.clear=function(){this._svgDom&&(this._svgDom.innerHTML=null),this._oldVNode=null},r.prototype.toDataURL=function(t){var e=this.renderToString(),i="data:image/svg+xml;";return t?(e=ei(e),e&&i+"base64,"+e):i+"charset=UTF-8,"+encodeURIComponent(e)},r}();function Jt(r){return function(){}}function Zi(r,t,e,i){var a;if(e&&e!=="none")if(a=b("rect","bg",{width:r,height:t,x:"0",y:"0",id:"0"}),ae(e))ge({fill:e},a.attrs,"fill",i);else if(Pt(e))ye({style:{fill:e},dirty:ii,getBoundingRect:function(){return{width:r,height:t}}},a.attrs,"fill",i);else{var n=Y(e),s=n.color,f=n.opacity;a.attrs.fill=s,f<1&&(a.attrs["fill-opacity"]=f)}return a}const Xi=qi;function er(r){r.registerPainter("svg",Xi)}function Qt(r,t,e){var i=ni.createCanvas(),a=t.getWidth(),n=t.getHeight(),s=i.style;return s&&(s.position="absolute",s.left="0",s.top="0",s.width=a+"px",s.height=n+"px",i.setAttribute("data-zr-dom-id",r)),i.width=a*e,i.height=n*e,i}var Yi=function(r){ri(t,r);function t(e,i,a){var n=r.call(this)||this;n.motionBlur=!1,n.lastFrameAlpha=.7,n.dpr=1,n.virtual=!1,n.config={},n.incremental=!1,n.zlevel=0,n.maxRepaintRectCount=5,n.__dirty=!0,n.__firstTimePaint=!0,n.__used=!1,n.__drawIndex=0,n.__startIndex=0,n.__endIndex=0,n.__prevStartIndex=null,n.__prevEndIndex=null;var s;a=a||oe,typeof e=="string"?s=Qt(e,i,a):ne(e)&&(s=e,e=s.id),n.id=e,n.dom=s;var f=s.style;return f&&(se(s),s.onselectstart=function(){return!1},f.padding="0",f.margin="0",f.borderWidth="0"),n.painter=i,n.dpr=a,n}return t.prototype.getElementCount=function(){return this.__endIndex-this.__startIndex},t.prototype.afterBrush=function(){this.__prevStartIndex=this.__startIndex,this.__prevEndIndex=this.__endIndex},t.prototype.initContext=function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},t.prototype.setUnpainted=function(){this.__firstTimePaint=!0},t.prototype.createBackBuffer=function(){var e=this.dpr;this.domBack=Qt("back-"+this.id,this.painter,e),this.ctxBack=this.domBack.getContext("2d"),e!==1&&this.ctxBack.scale(e,e)},t.prototype.createRepaintRects=function(e,i,a,n){if(this.__firstTimePaint)return this.__firstTimePaint=!1,null;var s=[],f=this.maxRepaintRectCount,o=!1,v=new st(0,0,0,0);function u(g){if(!(!g.isFinite()||g.isZero()))if(s.length===0){var m=new st(0,0,0,0);m.copy(g),s.push(m)}else{for(var x=!1,C=1/0,N=0,w=0;w<s.length;++w){var S=s[w];if(S.intersect(g)){var P=new st(0,0,0,0);P.copy(S),P.union(g),s[w]=P,x=!0;break}else if(o){v.copy(g),v.union(S);var L=g.width*g.height,R=S.width*S.height,T=v.width*v.height,I=T-L-R;I<C&&(C=I,N=w)}}if(o&&(s[N].union(g),x=!0),!x){var m=new st(0,0,0,0);m.copy(g),s.push(m)}o||(o=s.length>=f)}}for(var h=this.__startIndex;h<this.__endIndex;++h){var l=e[h];if(l){var c=l.shouldBePainted(a,n,!0,!0),_=l.__isRendered&&(l.__dirty&Lt||!c)?l.getPrevPaintRect():null;_&&u(_);var d=c&&(l.__dirty&Lt||!l.__isRendered)?l.getPaintRect():null;d&&u(d)}}for(var h=this.__prevStartIndex;h<this.__prevEndIndex;++h){var l=i[h],c=l.shouldBePainted(a,n,!0,!0);if(l&&(!c||!l.__zr)&&l.__isRendered){var _=l.getPrevPaintRect();_&&u(_)}}var p;do{p=!1;for(var h=0;h<s.length;){if(s[h].isZero()){s.splice(h,1);continue}for(var y=h+1;y<s.length;)s[h].intersect(s[y])?(p=!0,s[h].union(s[y]),s.splice(y,1)):y++;h++}}while(p);return this._paintRects=s,s},t.prototype.debugGetPaintRects=function(){return(this._paintRects||[]).slice()},t.prototype.resize=function(e,i){var a=this.dpr,n=this.dom,s=n.style,f=this.domBack;s&&(s.width=e+"px",s.height=i+"px"),n.width=e*a,n.height=i*a,f&&(f.width=e*a,f.height=i*a,a!==1&&this.ctxBack.scale(a,a))},t.prototype.clear=function(e,i,a){var n=this.dom,s=this.ctx,f=n.width,o=n.height;i=i||this.clearColor;var v=this.motionBlur&&!e,u=this.lastFrameAlpha,h=this.dpr,l=this;v&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(n,0,0,f/h,o/h));var c=this.domBack;function _(d,p,y,g){if(s.clearRect(d,p,y,g),i&&i!=="transparent"){var m=void 0;if(si(i)){var x=i.global||i.__width===y&&i.__height===g;m=x&&i.__canvasGradient||oi(s,i,{x:0,y:0,width:y,height:g}),i.__canvasGradient=m,i.__width=y,i.__height=g}else fi(i)&&(i.scaleX=i.scaleX||h,i.scaleY=i.scaleY||h,m=hi(s,i,{dirty:function(){l.setUnpainted(),l.__painter.refresh()}}));s.save(),s.fillStyle=m||i,s.fillRect(d,p,y,g),s.restore()}v&&(s.save(),s.globalAlpha=u,s.drawImage(c,d,p,y,g),s.restore())}!a||v?_(0,0,f,o):a.length&&vt(a,function(d){_(d.x*h,d.y*h,d.width*h,d.height*h)})},t}(ai);const wt=Yi;var te=1e5,E=314159,ht=.01,Ki=.001;function $i(r){return r?r.__builtin__?!0:!(typeof r.resize!="function"||typeof r.refresh!="function"):!1}function Wi(r,t){var e=document.createElement("div");return e.style.cssText=["position:relative","width:"+r+"px","height:"+t+"px","padding:0","margin:0","border-width:0"].join(";")+";",e}var Ji=function(){function r(t,e,i,a){this.type="canvas",this._zlevelList=[],this._prevDisplayList=[],this._layers={},this._layerConfig={},this._needsManuallyCompositing=!1,this.type="canvas";var n=!t.nodeName||t.nodeName.toUpperCase()==="CANVAS";this._opts=i=K({},i||{}),this.dpr=i.devicePixelRatio||oe,this._singleCanvas=n,this.root=t;var s=t.style;s&&(se(t),t.innerHTML=""),this.storage=e;var f=this._zlevelList;this._prevDisplayList=[];var o=this._layers;if(n){var u=t,h=u.width,l=u.height;i.width!=null&&(h=i.width),i.height!=null&&(l=i.height),this.dpr=i.devicePixelRatio||1,u.width=h*this.dpr,u.height=l*this.dpr,this._width=h,this._height=l;var c=new wt(u,this,this.dpr);c.__builtin__=!0,c.initContext(),o[E]=c,c.zlevel=E,f.push(E),this._domRoot=t}else{this._width=U(t,0,i),this._height=U(t,1,i);var v=this._domRoot=Wi(this._width,this._height);t.appendChild(v)}}return r.prototype.getType=function(){return"canvas"},r.prototype.isSingleCanvas=function(){return this._singleCanvas},r.prototype.getViewportRoot=function(){return this._domRoot},r.prototype.getViewportRootOffset=function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},r.prototype.refresh=function(t){var e=this.storage.getDisplayList(!0),i=this._prevDisplayList,a=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,i,t,this._redrawId);for(var n=0;n<a.length;n++){var s=a[n],f=this._layers[s];if(!f.__builtin__&&f.refresh){var o=n===0?this._backgroundColor:null;f.refresh(o)}}return this._opts.useDirtyRect&&(this._prevDisplayList=e.slice()),this},r.prototype.refreshHover=function(){this._paintHoverList(this.storage.getDisplayList(!1))},r.prototype._paintHoverList=function(t){var e=t.length,i=this._hoverlayer;if(i&&i.clear(),!!e){for(var a={inHover:!0,viewWidth:this._width,viewHeight:this._height},n,s=0;s<e;s++){var f=t[s];f.__inHover&&(i||(i=this._hoverlayer=this.getLayer(te)),n||(n=i.ctx,n.save()),ot(n,f,a,s===e-1))}n&&n.restore()}},r.prototype.getHoverLayer=function(){return this.getLayer(te)},r.prototype.paintOne=function(t,e){vi(t,e)},r.prototype._paintList=function(t,e,i,a){if(this._redrawId===a){i=i||!1,this._updateLayerStatus(t);var n=this._doPaintList(t,e,i),s=n.finished,f=n.needsRefreshHover;if(this._needsManuallyCompositing&&this._compositeManually(),f&&this._paintHoverList(t),s)this.eachLayer(function(v){v.afterBrush&&v.afterBrush()});else{var o=this;ui(function(){o._paintList(t,e,i,a)})}}},r.prototype._compositeManually=function(){var t=this.getLayer(E).ctx,e=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,e,i),this.eachBuiltinLayer(function(a){a.virtual&&t.drawImage(a.dom,0,0,e,i)})},r.prototype._doPaintList=function(t,e,i){for(var a=this,n=[],s=this._opts.useDirtyRect,f=0;f<this._zlevelList.length;f++){var o=this._zlevelList[f],v=this._layers[o];v.__builtin__&&v!==this._hoverlayer&&(v.__dirty||i)&&n.push(v)}for(var u=!0,h=!1,l=function(d){var p=n[d],y=p.ctx,g=s&&p.createRepaintRects(t,e,c._width,c._height),m=i?p.__startIndex:p.__drawIndex,x=!i&&p.incremental&&Date.now,C=x&&Date.now(),N=p.zlevel===c._zlevelList[0]?c._backgroundColor:null;if(p.__startIndex===p.__endIndex)p.clear(!1,N,g);else if(m===p.__startIndex){var w=t[m];(!w.incremental||!w.notClear||i)&&p.clear(!1,N,g)}m===-1&&(console.error("For some unknown reason. drawIndex is -1"),m=p.__startIndex);var S,P=function(I){var k={inHover:!1,allClipped:!1,prevEl:null,viewWidth:a._width,viewHeight:a._height};for(S=m;S<p.__endIndex;S++){var j=t[S];if(j.__inHover&&(h=!0),a._doPaintEl(j,p,s,I,k,S===p.__endIndex-1),x){var O=Date.now()-C;if(O>15)break}}k.prevElClipPaths&&y.restore()};if(g)if(g.length===0)S=p.__endIndex;else for(var L=c.dpr,R=0;R<g.length;++R){var T=g[R];y.save(),y.beginPath(),y.rect(T.x*L,T.y*L,T.width*L,T.height*L),y.clip(),P(T),y.restore()}else y.save(),P(),y.restore();p.__drawIndex=S,p.__drawIndex<p.__endIndex&&(u=!1)},c=this,_=0;_<n.length;_++)l(_);return li.wxa&&vt(this._layers,function(d){d&&d.ctx&&d.ctx.draw&&d.ctx.draw()}),{finished:u,needsRefreshHover:h}},r.prototype._doPaintEl=function(t,e,i,a,n,s){var f=e.ctx;if(i){var o=t.getPaintRect();(!a||o&&o.intersect(a))&&(ot(f,t,n,s),t.setPrevPaintRect(o))}else ot(f,t,n,s)},r.prototype.getLayer=function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=E);var i=this._layers[t];return i||(i=new wt("zr_"+t,this,this.dpr),i.zlevel=t,i.__builtin__=!0,this._layerConfig[t]?ft(i,this._layerConfig[t],!0):this._layerConfig[t-ht]&&ft(i,this._layerConfig[t-ht],!0),e&&(i.virtual=e),this.insertLayer(t,i),i.initContext()),i},r.prototype.insertLayer=function(t,e){var i=this._layers,a=this._zlevelList,n=a.length,s=this._domRoot,f=null,o=-1;if(!i[t]&&$i(e)){if(n>0&&t>a[0]){for(o=0;o<n-1&&!(a[o]<t&&a[o+1]>t);o++);f=i[a[o]]}if(a.splice(o+1,0,t),i[t]=e,!e.virtual)if(f){var v=f.dom;v.nextSibling?s.insertBefore(e.dom,v.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom);e.__painter=this}},r.prototype.eachLayer=function(t,e){for(var i=this._zlevelList,a=0;a<i.length;a++){var n=i[a];t.call(e,this._layers[n],n)}},r.prototype.eachBuiltinLayer=function(t,e){for(var i=this._zlevelList,a=0;a<i.length;a++){var n=i[a],s=this._layers[n];s.__builtin__&&t.call(e,s,n)}},r.prototype.eachOtherLayer=function(t,e){for(var i=this._zlevelList,a=0;a<i.length;a++){var n=i[a],s=this._layers[n];s.__builtin__||t.call(e,s,n)}},r.prototype.getLayers=function(){return this._layers},r.prototype._updateLayerStatus=function(t){this.eachBuiltinLayer(function(h,l){h.__dirty=h.__used=!1});function e(h){n&&(n.__endIndex!==h&&(n.__dirty=!0),n.__endIndex=h)}if(this._singleCanvas)for(var i=1;i<t.length;i++){var a=t[i];if(a.zlevel!==t[i-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}}var n=null,s=0,f,o;for(o=0;o<t.length;o++){var a=t[o],v=a.zlevel,u=void 0;f!==v&&(f=v,s=0),a.incremental?(u=this.getLayer(v+Ki,this._needsManuallyCompositing),u.incremental=!0,s=1):u=this.getLayer(v+(s>0?ht:0),this._needsManuallyCompositing),u.__builtin__||di("ZLevel "+v+" has been used by unkown layer "+u.id),u!==n&&(u.__used=!0,u.__startIndex!==o&&(u.__dirty=!0),u.__startIndex=o,u.incremental?u.__drawIndex=-1:u.__drawIndex=o,e(o),n=u),a.__dirty&Lt&&!a.__inHover&&(u.__dirty=!0,u.incremental&&u.__drawIndex<0&&(u.__drawIndex=o))}e(o),this.eachBuiltinLayer(function(h,l){!h.__used&&h.getElementCount()>0&&(h.__dirty=!0,h.__startIndex=h.__endIndex=h.__drawIndex=0),h.__dirty&&h.__drawIndex<0&&(h.__drawIndex=h.__startIndex)})},r.prototype.clear=function(){return this.eachBuiltinLayer(this._clearLayer),this},r.prototype._clearLayer=function(t){t.clear()},r.prototype.setBackgroundColor=function(t){this._backgroundColor=t,vt(this._layers,function(e){e.setUnpainted()})},r.prototype.configLayer=function(t,e){if(e){var i=this._layerConfig;i[t]?ft(i[t],e,!0):i[t]=e;for(var a=0;a<this._zlevelList.length;a++){var n=this._zlevelList[a];if(n===t||n===t+ht){var s=this._layers[n];ft(s,i[t],!0)}}}},r.prototype.delLayer=function(t){var e=this._layers,i=this._zlevelList,a=e[t];a&&(a.dom.parentNode.removeChild(a.dom),delete e[t],i.splice(ci(i,t),1))},r.prototype.resize=function(t,e){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var a=this._opts,n=this.root;if(t!=null&&(a.width=t),e!=null&&(a.height=e),t=U(n,0,a),e=U(n,1,a),i.style.display="",this._width!==t||e!==this._height){i.style.width=t+"px",i.style.height=e+"px";for(var s in this._layers)this._layers.hasOwnProperty(s)&&this._layers[s].resize(t,e);this.refresh(!0)}this._width=t,this._height=e}else{if(t==null||e==null)return;this._width=t,this._height=e,this.getLayer(E).resize(t,e)}return this},r.prototype.clearLayer=function(t){var e=this._layers[t];e&&e.clear()},r.prototype.dispose=function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},r.prototype.getRenderedCanvas=function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[E].dom;var e=new wt("image",this,t.pixelRatio||this.dpr);e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor);var i=e.ctx;if(t.pixelRatio<=this.dpr){this.refresh();var a=e.dom.width,n=e.dom.height;this.eachLayer(function(h){h.__builtin__?i.drawImage(h.dom,0,0,a,n):h.renderToCanvas&&(i.save(),h.renderToCanvas(i),i.restore())})}else for(var s={inHover:!1,viewWidth:this._width,viewHeight:this._height},f=this.storage.getDisplayList(!0),o=0,v=f.length;o<v;o++){var u=f[o];ot(i,u,s,o===v-1)}return e.dom},r.prototype.getWidth=function(){return this._width},r.prototype.getHeight=function(){return this._height},r}();const Qi=Ji;function ir(r){r.registerPainter("canvas",Qi)}export{ir as CanvasRenderer,er as SVGRenderer};
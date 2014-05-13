(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n.add("magix/magix",function(r){var n=[].slice,a=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,i=/\/[^\/]*$/,o=/[#?].*$/,s="",c=/([^=&?\/#]+)=?([^&=#?]*)/g,u="path",f=/^https?:\/\//i,v=0,h="/",d="vframe",l="\n",m=t.console,g=m&&m.error,p=function(){},y={tagName:d,rootId:"magix_vf_root",coded:1,error:function(e){g&&m.error(e)}},$=y.hasOwnProperty,x=function(e,t){return e&&$.call(e,t)},w=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=k._o(r)?M(t,r):x(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},b=function(e,t){return t.f-e.f||t.t-e.t},C=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new C(e,t),r},M=function(e,t,r){for(var n in t)r&&x(r,n)||(e[n]=t[n]);return e};M(C.prototype,{get:function(e){var t,r=this,n=r.c;return e=u+e,x(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=v++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=u+e,o=a[i];if(!x(a,i)){if(a.length>=n.b){a.sort(b);for(var s=n.b-n.x;s--;)o=a.pop(),delete a[o.k],o.m&&q(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=v++,o.m=r,t},del:function(e){e=u+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=s,delete t[e],r.m&&(q(r.m,r.o,r),r.m=s))},has:function(e){return x(this.c,u+e)}});var P=C(40),_=C(),q=function(e,t,r,n,a,i){for(k._a(e)||(e=[e]),t&&(k._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){y.error(o)}return a},k={mix:M,has:x,tryCall:q,noop:p,config:w(y),start:function(e){var t=this;M(y,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){y=M(y,a,e),y["!tnc"]=y.tagName!=d,r.on("!ul",n.locChged),r.on("changed",n.locChged),t.use(y.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)x(e,r)&&t.push(r);return t},local:w({}),path:function(e,t){var r=e+l+t,n=_.get(r);if(!n){if(f.test(t))n=t;else if(e=e.replace(o,s).replace(i,s)+h,t.charAt(0)==h){var c=f.test(e)?8:0,u=e.indexOf(h,c);n=e.substring(0,u)+t}else n=e+t;for(;a.test(n);)n=n.replace(a,"$1/");_.set(r,n)}return n},toObject:function(e){var t=e+l,r=P.get(t);if(!r){r={};var n={},a=s;o.test(e)?a=e.replace(o,s):~e.indexOf("=")||(a=e);var i=e.replace(a,s);if(a&&f.test(a)){var v=a.indexOf(h,8);a=~v?a.substring(v):h}i.replace(c,function(e,t,r){if(y.coded)try{r=decodeURIComponent(r)}catch(a){}n[t]=r}),r[u]=a,r.params=n,P.set(t,r)}return r},toUrl:function(e,t,r){var n,a=[];for(var i in t)n=t[i],(!r||n||x(r,i))&&(y.coded&&(n=encodeURIComponent(n)),a.push(i+"="+n));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t){var r,n,a,i={};if(k._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:C};return M(k,{use:function(e,t){r.use(e&&e+s,function(e){t&&t.apply(e,n.call(arguments,1))})},_a:r.isArray,_f:r.isFunction,_o:r.isObject,_s:r.isString,_n:r.isNumber})}),n.add("magix/router",function(e,r,n,a){var i,o,s,c,u,f,v="",h="path",d="view",l=r.has,m=r.mix,g=r.keys,p=r.config(),y=r.cache(),$=r.cache(40),x={params:{},href:v},w=/#.*$/,b=/^[^#]*#?!?/,C="params",M=function(e,t,r){if(e){r=this[C],e=(e+v).split(",");for(var n=0;e.length>n&&!(t=l(r,e[n]));n++);}return t},P=function(){return this[h]},_=function(){return this[d]},q=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},k=function(e){var n=r.toObject(e),a=n[h];return a&&u&&(n[h]=r.path(t.location.pathname,a)),n},O=m({viewInfo:function(e,t){var n,a;if(!o){o={rs:p.routes||{},nf:p.notFound};var i=p.defaultView;o.dv=i;var s=p.defaultPath||v;n=o.rs,o.f=r._f(n),o.f||n[s]||!i||(n[s]=i),o[h]=s}return e||(e=o[h]),n=o.rs,a=o.f?n.call(p,e,t):n[e],{view:a||o.nf||o.dv,path:e}},start:function(){var e=t.history;s=p.edge,c=s&&e.pushState,u=s&&!c,f=c?"srcQuery":"srcHash",c?O.useState():O.useHash(),O.route()},parseQH:function(e,r){e=e||t.location.href;var n=y.get(e);if(!n){var a=e.replace(w,v),i=e.replace(b,v),o=k(a),c=k(i),u={};m(u,o[C]),m(u,c[C]),n={get:q,set:q,href:e,refHref:x.href,srcQuery:a,srcHash:i,query:o,hash:c,params:u},y.set(e,n)}if(r&&!n[d]){var f;f=n.hash[h]||s&&n.query[h];var l=O.viewInfo(f,n);m(n,l)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=$.get(a);if(!i){var o,s,c;i={},i[d]=c,i[h]=c,i[C]={};var u,f,v=[h,d];for(u=1;u>=0;u--)f=v[u],s=e[f],c=t[f],s!=c&&(i[f]={from:s,to:c},o=1);var l=e[C],m=t[C];for(v=g(l).concat(g(m)),u=v.length-1;u>=0;u--)f=v[u],s=l[f],c=m[f],s!=c&&(i[C][f]={from:s,to:c},o=1);i.occur=o,i.isParam=M,i.isPath=P,i.isView=_,$.set(a,i)}return i},route:function(){var e=O.parseQH(0,1),t=!x.get,r=O.getChged(x,e);x=e,r.occur&&(i=e,O.fire("changed",{location:e,changed:r,force:t}))},navigate:function(e,t,n){if(!t&&r._o(e)&&(t=e,e=v),t&&(e=r.toUrl(e,t)),e){var a=k(e),o={};o[C]=m({},a[C]),o[h]=a[h];var s=i.query[C];if(o[h]){if(u)for(var d in s)l(s,d)&&!l(o[C],d)&&(o[C][d]=v)}else{var g=m({},i[C]);o[C]=m(g,o[C]),o[h]=i[h]}var p,y=r.toUrl(o[h],o[C],s);p=y!=i[f],p&&(c?(O.poped=1,history[n?"replaceState":"pushState"](v,v,y),O.route()):(m(o,i,o),o.srcHash=y,o.hash={params:o[C],path:o[h]},O.fire("!ul",{loc:i=o}),y="#!"+y,n?location.replace(y):location.hash=y))}}},n);return O.useState=function(){var e=location.href;a.on(t,"popstate",function(){var t=location.href==e;(O.poped||!t)&&(O.poped=1,O.route())})},O.useHash=function(){a.on(t,"hashchange",O.route)},O},{requires:["magix/magix","magix/event","event"]}),n.add("magix/body",function(t,n){var i,o=n.has,s={},c=String.fromCharCode(26),u=n.noop,f="mx-ei",v="mx-owner",h=r.body,d="parentNode",l={},m="on",g=",",p=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},y=function(){this.prevent(),this.stop()},$={process:function(t){if(t&&!t[m]){var r=t.target||t.srcElement||h;for(t[m]=1;r&&1!=r.nodeType;)r=r[d];for(var n,s,$=r,x=t.type,w=l[x]||(l[x]=RegExp(g+x+"(?:,|$)")),b="mx-"+x,C=[];$&&1==$.nodeType&&(n=p($,b),s=p($,f),!n&&!w.test(s));)C.push($),$=$[d];if(n){var M,P=n.split(c);if(P.length>1&&(M=P[0],n=P.pop()),M=p($,v)||M,!M)for(var _=$,q=i.all();_;){if(o(q,_.id)){p($,v,M=_.id);break}_=_[d]}if(!M)throw Error("bad:"+n);var k=i.get(M),O=k&&k.view;O&&(t.currentId=a($),t.targetId=a(r),t.prevent=t.preventDefault||u,t.stop=t.stopPropagation||u,t.halt=y,O.pEvt(n,x,t))}else{for(var T;C.length;)T=C.pop(),s=p(T,f)||m,w.test(s)||(s=s+g+x,p(T,f,s));T=e}$=r=e}},act:function(e,t,r){var n=s[e]||0,a=n>0?1:0,o=$.process;n+=t?-a:a,n||(r&&(i=r),$.lib(h,e,o,t),t||(n=1)),s[e]=n}},x={mouseenter:2,mouseleave:2};return $.lib=function(e,r,n,a,i,o){t.use("event",function(t,s){var c=x[r];o||2!=c?(c=a?"detach":"on",s[c](e,r,n,i)):(c=(a?"un":"")+"delegate",s[c](e,r,"[mx-"+r+"]",n))})},$},{requires:["magix/magix"]}),n.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.tryCall,a={fire:function(e,t,a,i){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,v=c.length,h=v-1;v--;)u=i?v:h-v,f=c[u],(f.d||f.r)&&(c.splice(u,1),h--),f.d||n(f.f,t,s);a=a||0>h}a&&delete s[o]},on:function(e,t,n){var a=r(e),i=this[a]||(this[a]=[]),o={f:t};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},rely:function(e,t,n,a,i){var o=this;o.on(e,t,i),n.on(a,function(){o.off(e,t)},r)},off:function(e,t){var n=r(e),a=this[n];if(a)if(t){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==t&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,a),a},{requires:["magix/magix"]}),n.add("magix/vframe",function(t,n,i,o){var s,c,u,f,v,h,d,l,m,g,p,y=n.tryCall,$=[],x=n.mix,w=n.config(),b="mx-vframe",C=n.has,M="querySelectorAll",P="alter",_="created",q=function(e){return"object"==typeof e?e:r.getElementById(e)},k=function(e,t,n){return t=q(e),t&&(n=u?r[M]("#"+a(t)+v):t.getElementsByTagName(s)),n||$},O=function(e,t,r){if(e=q(e),t=q(t),e&&t)if(e!==t)try{r=h?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=p,p.add(e,t)};return T.root=function(t,n,a){if(!d){s=w.tagName,c=w["!tnc"],u=c&&r[M],v=" "+s+"["+b+"=true]",f=c&&!u;var i=r.body;h=i.contains,m=n,g=a,p=t;var o=w.rootId,l=q(o);l||(l=r.createElement(s),l.id=o,i.appendChild(l),l=e),d=new T(o)}return d},x(x(T.prototype,i),{mountView:function(e,t,r){var a=this,i=q(a.id);if(a._a||(a._a=1,a._t=i.innerHTML),a.unmountView(r),a._d=0,e){var s=n.toObject(e),c=s.path,u=--a.sign;n.use(c,function(e){if(u==a.sign){o.prepare(e);var r=new e({owner:a,id:a.id,$:q,$c:O,path:c,vom:p,location:m});a.view=r;var n=function(e){a.mountZoneVframes(e.id)};r.on("interact",function(e){e.tmpl||(i.innerHTML=a._t,n(q)),r.on("primed",function(){a.viewPrimed=1,a.fire("viewMounted")}),r.on("rendered",n),r.on("prerender",function(e){a.unmountZoneVframes(e.id,e.keep,1)||a.cAlter()})},0),t=t||{},r.load(x(t,s.params,t),g)}})}},unmountView:function(e){var t=this,r=t.view;if(r){l||(l={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(l),t.view=0,r.oust();var n=q(t.id);n&&t._a&&!e&&(n.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),l=0}t.sign--},mountVframe:function(e,t,r,n,a){var i=this;i.fcc&&!n&&i.cAlter();var o=p.get(e);return o||(o=new T(e),o.pId=i.id,C(i.cM,e)||i.cC++,i.cM[e]=1),o._p=n,o.mountView(t,r,a),o},mountZoneVframes:function(e,t,r,n){var i=this;e=e||i.id,i.unmountZoneVframes(e,n,1);var o=k(e),s=o.length,c={};if(s)for(var u,v,h,d,l=0;s>l;l++)if(u=o[l],v=a(u),!C(c,v)&&(h=u.getAttribute("mx-view"),d=f?u.getAttribute(b):1,d||h)){i.mountVframe(v,h,t,r,n);for(var m,g=k(u),p=0,y=g.length;y>p;p++)m=g[p],c[a(m)]=1}i.cCreated()},unmountVframe:function(e,t,r){var n=this;e=e||n.id;var a=p.get(e);if(a){var i=a.fcc;a.unmountView(t),p.remove(e,i);var o=p.get(a.pId);o&&C(o.cM,e)&&(delete o.cM[e],o.cC--,r||n._d||o.cCreated())}},unmountZoneVframes:function(e,t,r){var n,a,i=this,o=i.cM;for(a in o)(!e||O(a,e))&&i.unmountVframe(a,t,n=1);return r||i._d||i.cCreated(),n},invokeView:function(e,t){var r,n=this;if(n.viewInited){var a=n.view,i=a&&a[e];i&&(r=y(i,t||$,a))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(_,e),t.fire(_,e));var n=t.id,a=p.get(t.pId);a&&!C(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var r=t.view,n=t.id;r&&(t.fca=1,r.fire(P,e),t.fire(P,e));var a=p.get(t.pId);a&&C(a.rM,n)&&(a.rC--,delete a.rM[n],t._p||a.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(g),a={location:m,changed:g,prevent:function(){this.cs=$},to:function(e){n._s(e)&&(e=e.split(",")),this.cs=e||$}};r&&t.render(a);for(var i,o=a.cs||n.keys(e.cM),s=0,c=o.length;c>s;s++)i=p.get(o[s]),i&&i.locChged()}}}),T},{requires:["magix/magix","magix/event","magix/view"]}),n.add("magix/view",function(n,a,i,o,s,c){var u=a.tryCall,f=a.has,v=",",h=[],d=a.noop,l=a.mix,m=0,g="~",p="destroy",y=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&u(e,arguments,t)}},$=function(e){var t=e&&e[p];t&&u(t,h,e)},x=function(e){clearTimeout(e),clearInterval(e)},w=function(e,t){var r=this,n=r.$res;for(var a in n){var i=n[a];(!e||i.mr)&&r.destroyManaged(a,t)}},b=a.cache(40),C=/\smx-(?!view|owner|vframe)[a-z]+\s*=\s*"/g,M=String.fromCharCode(26),P=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,_=/(\w+):(['"]?)([^,]+)\2/g,q=/([$\w]+)<([\w,]+)>/,k=function(e){var t=this;l(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),u(k._,[e],t)},O=k.prototype,T={$win:t,$doc:r};k._=[],k.prepare=function(e){if(!e[g]){e[g]=1;var t,r,n,a,i,o,s=e.prototype,c={},u=[];for(var f in s)if(t=s[f],r=f.match(q))for(n=r[1],a=r[2],a=a.split(v),i=a.length-1;i>-1;i--)r=a[i],o=T[n],o?u.push({n:n,t:r,h:o,f:t}):(c[r]=1,s[n+M+r]=t);else"render"==f&&t!=d&&(s[f]=y(t));s.$evts=c,s.$sevts=u}},k.mixin=function(e,t){t&&k._.push(t),l(O,e)},l(l(O,i),{render:d,init:d,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),u(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e,t){var r=this;r.sign>0&&r.rendered&&(r.fire("prerender",{id:e,keep:t}),w.call(r,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),w.call(e,1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(C,"$&"+this.id+M)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.path,e=e.keys),e&&(t.ks=n.concat((e+"").split(v)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(p,0,1,1),w.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,a=r.get(n.pId),i=e;return a&&a.viewInited&&(i=a.view),i},pEvt:function(e,t,r){var n=this;if(n.sign>0){var a=b.get(e);a||(a=e.match(P),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(_,function(e,t,r,n){a.p[t]=n}),b.set(e,a));var i=a.n+M+t,o=n[i];if(o){var s=r[a.f];s&&s.call(r),r.params=a.p,u(o,r,n)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var a in r)o.act(a,e,n);for(r=t.$sevts,a=r.length;a-->0;)n=r[a],o.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,r=this;for(var n in r.$ns)if(t=r.$c(e,n))break;if(!t)for(var a in r.cM){var i=r.owner.get(a);if(t=i.inside(e))break}return t},navigate:s.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+m++,o=0):n.destroyManaged(e);var c;c=a._n(t)?x:$;var u={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=u,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(f(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r},dispatch:function(e,t,r){r=this,t||(t={}),t.type=e,t.target=r.$(r.id),o.process(t)}});var I="?t="+n.now(),A=n.Env.mods,E={},V={};return O.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(f(E,e))t(E[e]);else{var a,i=A[e];i&&(a=i.uri||i.fullpath,a=a.slice(0,a.indexOf(e)+e.length));var o=a+".html",s=V[o],v=function(r){t(E[e]=r)};s?s.push(v):(s=V[o]=[v],c({url:o+I,complete:function(e,t){u(s,e||t),delete V[o]}}))}},k.extend=function(e,t,r){var a=this,i=function(){var e=arguments;i.superclass.constructor.apply(this,e),r&&u(r,e,this)};return i.extend=a.extend,n.extend(i,a,e,t)},k},{requires:["magix/magix","magix/event","magix/body","magix/router","ajax"]}),n.add("magix/vom",function(e,t,r,n){var a=r.has,i=r.mix,o={},s={},c={},u=r.mix({all:function(){return o},add:function(e,t){a(o,e)||(o[e]=t,u.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],u.fire("remove",{vframe:r,fcc:t}))},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,i(s,n),!r){i(c,e.changed);var a=t.root(u,s,c);c.view?a.mountView(n.view):a.locChged()}}},n);return u},{requires:["magix/vframe","magix/magix","magix/event"]}),n.add("magix/mmanager",function(r,n,a){var i=n.has,o=n.tryCall,s=n._a,c=n._f,u=n._o,f=1,v=2,h=4,d=Date.now||function(){return+new Date},l=d(),m=t.JSON,g=n.mix,p="mr",y=String.fromCharCode(26),$=12e5,x=function(e,t,r,n){if(c(e))t&&(r=x(o(e)));else if(m)r=m.stringify(e);else if(u(e)||s(e)){r=[];for(n in e)i(e,n)&&r.push(n,p,x(e[n]))}else r=e;return r},w=function(e,t,r){for(var n,a=[t.name,x(r)],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]||a.push(i[n]=x(t[n],1),x(r[n],1));return a.join(y)},b=function(e){var t=e.cache;return t&&(t=t===!0?$:0|t),t},C=function(e){throw Error(e)},M=function(e,t){var r=this;r.$mClass=e,r.$mCache=n.cache(),r.$mCacheKeys={},r.$mMetas={},r.$sKeys=["postParams","urlParams"].concat(t?s(t)?t:[t]:[]),r.id="mm"+l--,o(M.ms,arguments,r)},P=[].slice,_=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(P.call(arguments)))}},q=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var i=a.q;delete n[r],o(i,e,a.e)}},k=function(t,r,n){var a,i=this,s=r.a,c=r.c,u=r.d,l=r.g,m=r.i,g=r.j,p=r.k,y=r.l,$=r.m,x=r.n,w=r.o;r.b++,delete c[i.id];var b=i.$mm,C=b.key;if(u[t]=i,n)r.e=1,a=1,r.f=n,l.msg=n,l[t]=n,g.fire("fail",{model:i,msg:n});else{if(!C||C&&!m.has(C)){C&&m.set(C,i),b.time=d();var M=b.done;M&&o(M,i),g.fire("done",{model:i})}b.used>0&&(i.fromCache=1),b.used++}if(!s.$oust){if(p==f){var P=y?$[t]:$;P&&(x[t]=o(P,[a?l:e,i,l],s))}else if(p==v){w[t]={m:i,e:a,s:n};for(var _,q,k=w.i||0;_=w[k];k++)q=y?$[k]:$,_.e&&(l.msg=_.s,l[k]=_.s),x[k]=o(q,[_.e?l:e,_.m,l].concat(x),s);w.i=k}r.b==r.h&&(r.e||(l=e),p==h?(u.unshift(l),x[0]=l,x[1]=o($,u,s)):x.unshift(l),s.$ntId=setTimeout(function(){s.doNext(x)},30))}},O=function(e){return function(){var t=new I(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=P.call(r,0,-1)),t[e].apply(t,r)}},T=function(e,t){return function(r,n){var a=P.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};g(M,{create:function(e,t){return new M(e,t)},mixin:function(e,t){t&&M.ms.push(t),g(M.prototype,e)},ms:[]});var I=function(e){var t=this;t.$host=e,t.$reqs={},t.id=p+l--,t.$queue=[]};return g(I.prototype,{send:function(e,t,r,n){var a=this;if(a.$busy)return a.next(function(){this.send(e,t,r,n)}),a;a.$busy=1;var o=a.$host,c=o.$mCache,u=o.$mCacheKeys,f=a.$reqs;s(e)||(e=[e]);var v=e.length,h=[],d=s(t);d&&(h=Array(t.length));for(var l,m={a:a,b:0,c:a.$reqs,d:Array(v),g:{},h:v,i:c,j:o,k:r,l:d,m:t,n:h,o:[]},g=0;e.length>g;g++)if(l=e[g]){var p=o.getModel(l,n),y=p.cKey,$=p.entity,x=_(k,$,g,m);x.id=a.id,y&&i(u,y)?u[y].q.push(x):p.update?(f[$.id]=$,y&&(u[y]={q:[x],e:$},x=q),$.request(x,{a:u,b:y})):x()}else C("empty model");return a},fetchAll:function(e,t){return this.send(e,t,h)},saveAll:function(e,t){return this.send(e,t,h,1)},fetchOrder:T(v),saveOrder:T(v,1),saveOne:T(f,1),fetchOne:T(f),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var a in r){var s=r[a],c=s.$mm.key;if(c&&i(n,c)){for(var u,f=n[c],v=f.q,h=[],d=[],l=0;v.length>l;l++)u=v[l],u.id!=e.id?h.push(u):d.push(u);h.length?(o(d,"abort",f.e),f.q=h):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&o(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),g(g(M.prototype,a),{registerModels:function(e){var t=this,r=t.$mMetas;s(e)||(e=[e]);for(var n,a,i,o=0;e.length>o;o++)n=e[o],n&&(a=n.name,a?r[a]&&C("already exist:"+a):C("miss name"),i=b(n),i&&(n.cache=i),r[a]=n)},registerMethods:function(e){g(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=b(e)||n.cache,i=new r.$mClass;return i.set(n),i.$mm=t={used:0,done:n.done},a&&(t.key=w(r.$sKeys,n,e)),e.name&&i.set(e),i.setUrlParams(n.urlParams),i.setPostParams(n.postParams),i.setUrlParams(e.urlParams),i.setPostParams(e.postParams),r.fire("inited",{model:i}),i},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||C("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:O("saveAll"),fetchAll:O("fetchAll"),saveOrder:O("saveOrder"),fetchOrder:O("fetchOrder"),saveOne:O("saveOne"),fetchOne:O("fetchOne"),createMRequest:function(e){var t=new I(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=b(t)||o.cache;if(s&&(r=w(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,u=c[r];u?i=u.e:(i=a.get(r),i&&s>0&&d()-i.$mm.time>s&&(n.clearCacheByKey(r),i=0))}return i}}),M},{requires:["magix/magix","magix/event"]}),n.add("magix/model",function(e,t){var r=function(t,r,n){var a=function(){a.superclass.constructor.apply(this,arguments),n&&n.apply(this,arguments)};return e.extend(a,this,t,r)},n=+new Date,a=t.has,i=t._o,o=t.toString,s=function(e){this.set(e),this.id="m"+n--},c=function(e,t){return function(r,n){this.setParams(r,n,e,t)}},u="&",f="",v=/^\?|=(?=&|$)/g;return t.mix(s,{GET:"GET",POST:"POST",extend:r}),t.mix(s.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(s.POST)},getUrlParams:function(){return this.getParams(s.GET)},getParams:function(e){var r=t.toUrl(f,this[u+(e||s.GET)]);return r=r.replace(v,f)},setUrlParamsIf:c(s.GET,1),setPostParamsIf:c(s.POST,1),setParams:function(e,r,n,i){var o,s,c,v=this,h=u+n;v[h]||(v[h]={}),c=v[h],t._f(e)&&(e=t.tryCall(e)),e&&t._s(e)&&(o={},o[e]=~e.indexOf("=")?f:r,e=o);for(s in e)i&&a(c,s)||(c[s]=e[s])},setPostParams:c(s.POST),setUrlParams:c(s.GET),get:function(e,t,r){var n=this,a=arguments.length,i=2==a,s=n.$attrs;if(a){for(var c=(e+"").split(".");s&&c[0];)s=s[c.shift()];c[0]&&(s=r)}return i&&o.call(t)!=o.call(s)&&(s=t),s},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),i(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,a){r.$abt||(i(a)||(a={data:a}),r.set(a),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),s},{requires:["magix/magix"]}),r.createElement("vframe")})(null,this,document,KISSY);
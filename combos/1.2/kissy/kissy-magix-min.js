(function(e,t,r,n,i,a,o){o=0,a=function(e){return e.id||(e.id="mx_n_"+ ++o)},i.add("magix/magix",function(r){var i=[].slice,a=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,o=/\/[^\/]*$/,s=/[#?].*$/,c="",u=/([^=&?\/#]+)=?([^&=#?]*)/g,f=/^https?:\/\//i,v=0,h="/",d="vframe",m=t.console,l=m&&m.error,g=function(){},p={tagName:d,rootId:"magix_vf_root",coded:1,error:function(e){l&&m.error(e)}},$=p.hasOwnProperty,y=function(e,t){return e&&$.call(e,t)},x=function(t){return function(r,n,i){switch(arguments.length){case 0:i=t;break;case 1:i=k._o(r)?M(t,r):y(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],i=n):t[r]=i=n}return i}},w=function(e,t){return t.f-e.f||t.t-e.t},b=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new b(e,t),r},M=function(e,t,r){for(var n in t)r&&y(r,n)||(e[n]=t[n]);return e};M(b.prototype,{get:function(e){var t,r=this,i=r.c;return e=n+e,y(i,e)&&(t=i[e],t.f>=1&&(t.f++,t.t=v++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var i=this,a=i.c,o=n+e,s=a[o];if(!y(a,o)){if(a.length>=i.b){a.sort(w);for(var c=i.b-i.x;c--;)s=a.pop(),delete a[s.k],s.m&&_(s.m,s.o,s)}s={},a.push(s),a[o]=s}return s.o=e,s.k=o,s.v=t,s.f=1,s.t=v++,s.m=r,t},del:function(e){e=n+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=c,delete t[e],r.m&&(_(r.m,r.o,r),r.m=c))},has:function(e){return y(this.c,n+e)}});var C=b(40),P=b(),_=function(e,t,r,n,i,a){for(k._a(e)||(e=[e]),t&&(k._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){p.error(o)}return i},k={mix:M,has:y,tryCall:_,noop:g,config:x(p),start:function(e){var t=this;M(p,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,i){p=M(p,i,e),p["!tnc"]=p.tagName!=d,r.on("!ul",n.loc),r.on("changed",n.loc),t.use(p.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)y(e,r)&&t.push(r);return t},local:x({}),path:function(e,t){var r=e+n+t,i=P.get(r);if(!i){if(f.test(t))i=t;else if(e=e.replace(s,c).replace(o,c)+h,t.charAt(0)==h){var u=f.test(e)?8:0,v=e.indexOf(h,u);i=e.substring(0,v)+t}else i=e+t;for(;a.test(i);)i=i.replace(a,"$1/");P.set(r,i)}return i},toObject:function(e){var t=e+n,r=C.get(t);if(!r){r={};var i={},a=c;s.test(e)?a=e.replace(s,c):~e.indexOf("=")||(a=e);var o=e.replace(a,c);if(a&&f.test(a)){var v=a.indexOf(h,8);a=~v?a.substring(v):h}o.replace(u,function(e,t,r){if(p.coded)try{r=decodeURIComponent(r)}catch(n){}i[t]=r}),r.path=a,r.params=i,C.set(t,r)}return r},toUrl:function(e,t,r){var n,i=[];for(var a in t)n=t[a],(!r||n||y(r,a))&&(p.coded&&(n=encodeURIComponent(n)),i.push(a+"="+n));return i.length&&(e+="?"+i.join("&")),e},toMap:function(e,t){var r,n,i,a={};if(k._s(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:b};return M(k,{use:function(e,t){r.use(e&&e+c,function(e){t&&t.apply(e,i.call(arguments,1))})},_a:r.isArray,_f:r.isFunction,_o:r.isObject,_s:r.isString,_n:r.isNumber})}),i.add("magix/router",function(e,r,i,a){var o,s,c,u,f,v,h="",d="path",m="view",l=r.has,g=r.mix,p=r.keys,$=r.config(),y=r.cache(),x=r.cache(40),w={params:{},href:h},b=/#.*$/,M=/^[^#]*#?!?/,C="params",P=function(e,t,r){if(e){r=this[C],e=(e+h).split(",");for(var n=0;e.length>n&&!(t=l(r,e[n]));n++);}return t},_=function(){return this[d]},k=function(){return this[m]},q=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},I=function(e){var n=r.toObject(e),i=n[d];return i&&f&&(n[d]=r.path(t.location.pathname,i)),n},V=g({viewInfo:function(e,t){var n,i;if(!s){s={rs:$.routes||{},nf:$.notFound};var a=$.defaultView;s.dv=a;var o=$.defaultPath||h;n=s.rs,s.f=r._f(n),s.f||n[o]||!a||(n[o]=a),s[d]=o}return e||(e=s[d]),n=s.rs,i=s.f?n.call($,e,t):n[e],{view:i||s.nf||s.dv,path:e}},start:function(){var e=t.history;c=$.edge,u=c&&e.pushState,f=c&&!u,v=u?"srcQuery":"srcHash",u?V.useState():V.useHash(),V.route()},parseQH:function(e,r){e=e||t.location.href;var n=y.get(e);if(!n){var i=e.replace(b,h),a=e.replace(M,h),o=I(i),s=I(a),u={};g(u,o[C]),g(u,s[C]),n={get:q,set:q,href:e,refHref:w.href,srcQuery:i,srcHash:a,query:o,hash:s,params:u},y.set(e,n)}if(r&&!n[m]){var f;f=n.hash[d]||c&&n.query[d];var v=V.viewInfo(f,n);g(n,v)}return n},getChged:function(e,t){var r=e.href,i=t.href,a=r+n+i,o=x.get(a);if(!o){var s,c,u;o={isParam:P,isPath:_,isView:k},o[m]=u,o[d]=u,o[C]={};var f,v,h=e[C],l=t[C],g=[d,m].concat(p(h),p(l));for(f=g.length-1;f>=0;f--)v=g[f],c=(f>1?h:e)[v],u=(f>1?l:t)[v],c!=u&&((f>1?o[C]:o)[v]={from:c,to:u},s=1);o.occur=s,x.set(a,o)}return o},route:function(){var e=V.parseQH(0,1),t=!w.get,r=V.getChged(w,e);w=e,r.occur&&(o=e,V.fire("changed",{location:e,changed:r,force:t}))},navigate:function(e,t,n){if(!t&&r._o(e)&&(t=e,e=h),t&&(e=r.toUrl(e,t)),e){var i=I(e),a={};a[C]=g({},i[C]),a[d]=i[d];var s=o.query[C];if(a[d]){if(f)for(var c in s)l(s,c)&&!l(a[C],c)&&(a[C][c]=h)}else{var m=g({},o[C]);a[C]=g(m,a[C]),a[d]=o[d]}var p,$=r.toUrl(a[d],a[C],s);p=$!=o[v],p&&(u?(V.poped=1,history[n?"replaceState":"pushState"](h,h,$),V.route()):(g(a,o,a),a.srcHash=$,a.hash={params:a[C],path:a[d]},V.fire("!ul",{loc:o=a}),$="#!"+$,n?location.replace($):location.hash=$))}}},i);return V.useState=function(){var e=location.href;a.on(t,"popstate",function(){var t=location.href==e;(V.poped||!t)&&(V.poped=1,V.route())})},V.useHash=function(){a.on(t,"hashchange",V.route)},V},{requires:["magix/magix","magix/event","event"]}),i.add("magix/body",function(t,i){var o,s=i.has,c={},u="mx-ei",f="mx-owner",v=r.body,h="parentNode",d={},m="on",l=",",g=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},p=function(){this.prevent(),this.stop()},$=function(){this.prevented=1},y={process:function(t){if(t&&!t[m]){var r=t.target||t.srcElement||v;for(t[m]=1;r&&1!=r.nodeType;)r=r[h];for(var c,y,x=r,w=t.type,b=d[w]||(d[w]=RegExp(l+w+"(?:,|$)")),M="mx-"+w,C=[];x&&1==x.nodeType&&(c=g(x,M),y=g(x,u),!c&&!b.test(y));)C.push(x),x=x[h];if(c){var P,_=c.split(n);if(_.length>1&&(P=_[0],c=_.pop()),P=g(x,f)||P,!P)for(var k=x,q=o.all();k;){if(s(q,k.id)){g(x,f,P=k.id);break}k=k[h]}if(!P)throw Error("bad:"+c);var I=o.get(P),V=I&&I.view;V&&(t.currentId=a(x),t.targetId=a(r),t.prevent=t.preventDefault||$,t.stop=t.stopPropagation||i.noop,t.halt=p,V.pEvt(c,w,t))}else{for(var A;C.length;)A=C.pop(),y=g(A,u)||m,b.test(y)||(y=y+l+w,g(A,u,y));A=e}x=r=e}},act:function(e,t,r){var n=c[e]||0,i=n>0?1:0,a=y.process;n+=t?-i:i,n||(r&&(o=r),y.lib(v,e,a,t),t||(n=1)),c[e]=n}},x={mouseenter:2,mouseleave:2};return y.lib=function(e,r,n,i,a,o){t.use("event",function(t,s){var c=x[r];o||2!=c?(c=i?"detach":"on",s[c](e,r,n,a)):(c=(i?"un":"")+"delegate",s[c](e,r,"[mx-"+r+"]",n))})},y},{requires:["magix/magix"]}),i.add("magix/event",function(e,t){var r=t.tryCall,i={fire:function(e,t,i,a){var o=n+e,s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,v=c.length,h=v-1;v--;)u=a?v:h-v,f=c[u],(f.d||f.r)&&(c.splice(u,1),h--),f.d||r(f.f,t,s);i=i||0>h}i&&delete s[o]},on:function(e,t,r){var i=n+e,a=this[i]||(this[i]=[]),o={f:t};isNaN(r)?(o.r=r,a.push(o)):a.splice(0|r,0,o)},rely:function(e,t,n,i,a){var o=this;o.on(e,t,a),n.on(i,function(){o.off(e,t)},r)},off:function(e,t){var r=n+e,i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,i),i},{requires:["magix/magix"]}),i.add("magix/vframe",function(t,n,i,o){var s,c,u,f,v,h,d,m,l,g,p,$=n.tryCall,y=[],x=n.mix,w=n.config(),b="mx-vframe",M=n.has,C="querySelectorAll",P="alter",_="created",k=function(e){return"object"==typeof e?e:r.getElementById(e)},q=function(e,t,n){return t=k(e),t&&(n=u?r[C]("#"+a(t)+v):t.getElementsByTagName(s)),n||y},I=function(e,t,r){if(e=k(e),t=k(t),e&&t)if(e!==t)try{r=h?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},V=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=p,p.add(e,t)};return V.root=function(t,n,i){if(!d){s=w.tagName,c=w["!tnc"],u=c&&r[C],v=" "+s+"["+b+"=true]",f=c&&!u;var a=r.body;h=a.contains,l=n,g=i,p=t;var o=w.rootId,m=k(o);m||(m=r.createElement(s),m.id=o,a.appendChild(m),m=e),d=new V(o)}return d},x(x(V.prototype,i),{mountView:function(e,t,r){var i=this,a=k(i.id);if(i._a||(i._a=1,i._t=a.innerHTML),i.unmountView(r),i._d=0,e){var s=n.toObject(e),c=s.path,u=--i.sign;n.use(c,function(e){if(u==i.sign){o.prepare(e);var r=new e({owner:i,id:i.id,$:k,$c:I,path:c,vom:p,location:l});i.view=r;var n=function(e){i.mountZoneVframes(e.id)};r.on("interact",function(e){e.tmpl||(a.innerHTML=i._t,n(k)),r.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),r.on("rendered",n),r.on("prerender",function(e){i.unmountZoneVframes(e.id,e.keep,1)||i.cAlter()})},0),t=t||{},r.load(x(t,s.params,t),g)}})}},unmountView:function(e){var t=this,r=t.view;if(r){m||(m={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(m),t.view=0,r.oust();var n=k(t.id);n&&t._a&&!e&&(n.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),m=0}t.sign--},mountVframe:function(e,t,r,n,i){var a=this;a.fcc&&!n&&a.cAlter();var o=p.get(e);return o||(o=new V(e),o.pId=a.id,M(a.cM,e)||a.cC++,a.cM[e]=1),o._p=n,o.mountView(t,r,i),o},mountZoneVframes:function(e,t,r,n){var i=this;e=e||i.id,i.unmountZoneVframes(e,n,1);var o=q(e),s=o.length,c={};if(s)for(var u,v,h,d,m=0;s>m;m++)if(u=o[m],v=a(u),!M(c,v)&&(h=u.getAttribute("mx-view"),d=f?u.getAttribute(b):1,d||h)){i.mountVframe(v,h,t,r,n);for(var l,g=q(u),p=0,$=g.length;$>p;p++)l=g[p],c[a(l)]=1}i.cCreated()},unmountVframe:function(e,t,r){var n=this;e=e||n.id;var i=p.get(e);if(i){var a=i.fcc;i.unmountView(t),p.remove(e,a);var o=p.get(i.pId);o&&M(o.cM,e)&&(delete o.cM[e],o.cC--,r||n._d||o.cCreated())}},unmountZoneVframes:function(e,t,r){var n,i,a=this,o=a.cM;for(i in o)(!e||I(i,e))&&a.unmountVframe(i,t,n=1);return r||a._d||a.cCreated(),n},invokeView:function(e,t){var r,n=this;if(n.viewInited){var i=n.view,a=i&&i[e];a&&(r=$(a,t||y,i))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(_,e),t.fire(_,e));var n=t.id,i=p.get(t.pId);i&&!M(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var r=t.view,n=t.id;r&&(t.fca=1,r.fire(P,e),t.fire(P,e));var i=p.get(t.pId);i&&M(i.rM,n)&&(i.rC--,delete i.rM[n],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(g),i={location:l,changed:g,prevent:function(){this.cs=y},to:function(e){n._s(e)&&(e=e.split(",")),this.cs=e||y}};r&&t.render(i);for(var a,o=i.cs||n.keys(e.cM),s=0,c=o.length;c>s;s++)a=p.get(o[s]),a&&a.locChged()}}}),V},{requires:["magix/magix","magix/event","magix/view"]}),i.add("magix/view",function(i,a,o,s,c,u){var f=a.tryCall,v=a.has,h=",",d=[],m=a.noop,l=a.mix,g=0,p="destroy",$=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&f(e,arguments,t)}},y=function(e){var t=e&&e[p];t&&f(t,d,e)},x=function(e){clearTimeout(e),clearInterval(e)},w=function(e,t){var r=this,n=r.$res;for(var i in n){var a=n[i];(!e||a.mr)&&r.destroyManaged(i,t)}},b=a.cache(40),M=/\smx-(?!view|owner|vframe)[a-z]+\s*=\s*"/g,C=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,P=/(\w+):(['"]?)([^,]+)\2/g,_=/([$\w]+)<([\w,]+)>/,k=function(e){var t=this;l(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),f(k.$,[e],t)},q=k.prototype,I={$win:t,$doc:r};k.$=[],k.prepare=function(e){if(!e[n]){e[n]=1;var t,r,i,a,o,s,c=e.prototype,u={},f=[];for(var v in c)if(t=c[v],r=v.match(_))for(i=r[1],a=r[2],a=a.split(h),o=a.length-1;o>-1;o--)r=a[o],s=I[i],s?f.push({n:i,t:r,h:s,f:t}):(u[r]=1,c[i+n+r]=t);else"render"==v&&t!=m&&(c[v]=$(t));c.$evts=u,c.$sevts=f}},k.mixin=function(e,t){t&&k.$.push(t),l(q,e)},l(l(q,o),{render:m,init:m,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),f(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e,t){var r=this;r.sign>0&&r.rendered&&(r.fire("prerender",{id:e,keep:t}),w.call(r,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),w.call(e,1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(M,"$&"+this.id+n)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.path,e=e.keys),e&&(t.ks=n.concat((e+"").split(h)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(p,0,1,1),w.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,i=r.get(n.pId),a=e;return i&&i.viewInited&&(a=i.view),a},pEvt:function(e,t,r){var i=this;if(i.sign>0){var a=b.get(e);a||(a=e.match(C),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(P,function(e,t,r,n){a.p[t]=n}),b.set(e,a));var o=a.n+n+t,s=i[o];if(s){var c=r[a.f];c&&c.call(r),r.params=a.p,f(s,r,i)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var i in r)s.act(i,e,n);for(r=t.$sevts,i=r.length;i-->0;)n=r[i],s.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e,t){var r,n=this;for(var i in n.$ns)if(r=n.$c(e,i))break;if(!r&&t){var a,o=n.owner,s=n.vom,c=o.cM;for(a in c)if(o=s.get(a),o&&(r=o.invokeView("inside",[e,t])))break}return r},navigate:c.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+g++,o=0):n.destroyManaged(e);var c;c=a._n(t)?x:y;var u={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=u,t},getManaged:function(t,r){var n=this,i=n.$res,a=e;if(v(i,t)){var o=i[t];a=o.res,r&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,i=n.$res,a=i[e];return!a||t&&a.ol||(r=a.res,a.oust(r),a.hk&&t||delete i[e]),r},dispatch:function(e,t,r){r=this,t||(t={}),t.type=e,t.target=r.$(r.id),s.process(t)}});var V="?t="+i.now(),A=i.Env.mods,U={},E={};return q.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(v(U,e))t(U[e]);else{var i,a=A[e];a&&(i=a.uri||a.fullpath,i=i.slice(0,i.indexOf(e)+e.length));var o=i+".html",s=E[o],c=function(r){t(U[e]=r)};s?s.push(c):(s=E[o]=[c],u({url:o+V,complete:function(e,t){f(s,e||t),delete E[o]}}))}},k.extend=function(e,t,r){var n=this,a=function(){var e=arguments;a.superclass.constructor.apply(this,e),r&&f(r,e,this)};return a.extend=n.extend,i.extend(a,n,e,t)},k},{requires:["magix/magix","magix/event","magix/body","magix/router","io"]}),i.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o={},s={},c={},u=r.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,u.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],u.fire("remove",{vframe:r,fcc:t}))},loc:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(s,n),!r){a(c,e.changed);var i=t.root(u,s,c);c.view?i.mountView(n.view):i.locChged()}}},n);return u},{requires:["magix/vframe","magix/magix","magix/event"]}),i.add("magix/mmanager",function(r,i,a){var o=i.has,s=i.tryCall,c=i._a,u=i._f,f=i._o,v=1,h=2,d=4,m=Date.now||function(){return+new Date},l=m(),g=t.JSON,p=i.mix,$="mr",y=12e5,x=function(e,t,r,n){if(u(e))t&&(r=x(s(e)));else if(g)r=g.stringify(e);else if(f(e)||c(e)){r=[];for(n in e)o(e,n)&&r.push(n,$,x(e[n]))}else r=e;return r},w=function(e,t,r){for(var i,a=[t.name,x(r)],o={},s=e.length-1;s>-1;s--)i=e[s],o[i]||a.push(o[i]=x(t[i],1),x(r[i],1));return a.join(n)},b=function(e){var t=e.cache;return t&&(t=t===!0?y:0|t),t},M=function(e){throw Error(e)},C=function(e,t){var r=this;r.$mClass=e,r.$mCache=i.cache(),r.$mCacheKeys={},r.$mMetas={},r.$sKeys=(t?c(t)?t:[t]:[]).concat("postParams","urlParams"),r.id="mm"+l--,s(C.$,arguments,r)},P=[].slice,_=function(e,t,r,n){return function(i){return e.apply(t,[r,n,i])}},k=function(e,t){var r=t.b,n=t.a,i=n[r];if(i){var a=i.q;delete n[r],s(a,e,i.e)}},q=function(t,r,n){var i,a=this,o=r.a,c=r.c,u=r.d,f=r.g,l=r.i,g=r.j,p=r.k,$=r.l,y=r.m,x=r.n,w=r.o;r.b++,delete c[a.id];var b=a.$mm,M=b.key;if(u[t]=a,n)r.e=1,i=1,r.f=n,f.msg=n,f[t]=n,g.fire("fail",{model:a,msg:n});else{if(!M||M&&!l.has(M)){M&&l.set(M,a),b.time=m();var C=b.done;C&&s(C,a),g.fire("done",{model:a})}b.used>0&&(a.fromCache=1),b.used++}if(!o.$oust){if(p==v){var P=$?y[t]:y;P&&(x[t]=s(P,[i?f:e,a,f],o))}else if(p==h){w[t]={m:a,e:i,s:n};for(var _,k,q=w.i||0;_=w[q];q++)k=$?y[q]:y,_.e&&(f.msg=_.s,f[q]=_.s),x[q]=s(k,[_.e?f:e,_.m,f].concat(x),o);w.i=q}r.b==r.h&&(r.e||(f=e),p==d?(u.unshift(f),x[0]=f,x[1]=s(y,u,o)):x.unshift(f),o.$ntId=setTimeout(function(){o.doNext(x)},30))}},I=function(e,t){return function(r,n){var i=P.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};p(C,{create:function(e,t){return new C(e,t)},mixin:function(e,t){t&&C.$.push(t),p(C.prototype,e)},$:[]});var V=function(e){var t=this;t.$host=e,t.$reqs={},t.id=$+l--,t.$queue=[]};return p(V.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var a=i.$host,s=a.$mCache,u=a.$mCacheKeys,f=i.$reqs;c(e)||(e=[e]);var v=e.length,h=[],d=c(t);d&&(h=Array(t.length));for(var m,l={a:i,b:0,c:i.$reqs,d:Array(v),g:{},h:v,i:s,j:a,k:r,l:d,m:t,n:h,o:[]},g=0;e.length>g;g++)if(m=e[g]){var p=a.getModel(m,n),$=p.entity,y=$.$mm.key,x=_(q,$,g,l);x.id=i.id,y&&o(u,y)?u[y].q.push(x):p.update?(f[$.id]=$,y&&(u[y]={q:[x],e:$},x=k),$.request(x,{a:u,b:y})):x()}else M("empty model");return i},fetchAll:function(e,t){return this.send(e,t,d)},saveAll:function(e,t){return this.send(e,t,d,1)},fetchOrder:I(h),saveOrder:I(h,1),saveOne:I(v,1),fetchOne:I(v),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var i in r){var a=r[i],c=a.$mm.key;if(c&&o(n,c)){for(var u,f=n[c],v=f.q,h=[],d=[],m=0;v.length>m;m++)u=v[m],u.id!=e.id?h.push(u):d.push(u);h.length?(s(d,"abort",f.e),f.q=h):a.abort()}else a.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&s(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),C.mixin(a),C.mixin({registerModels:function(e){var t=this,r=t.$mMetas;c(e)||(e=[e]);for(var n,i,a,o=0;e.length>o;o++)n=e[o],n&&(i=n.name,i?r[i]&&M("already exist:"+i):M("miss name"),a=b(n),a&&(n.cache=a),r[i]=n)},registerMethods:function(e){p(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),i=b(e)||n.cache,a=new r.$mClass;return a.set(n),a.$mm=t={used:0,done:n.done},i&&(t.key=w(r.$sKeys,n,e)),e.name&&a.set(e),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),r.fire("inited",{model:a}),a},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,i=r[n];return i||M("Unfound:"+n),i},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,update:n}},createMRequest:function(e){var t=new V(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,i=n.$mCache,a=e,o=n.getModelMeta(t),s=b(t)||o.cache;if(s&&(r=w(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,u=c[r];u?a=u.e:(a=i.get(r),a&&s>0&&m()-a.$mm.time>s&&(n.clearCacheByKey(r),a=0))}return a}}),C},{requires:["magix/magix","magix/event"]}),i.add("magix/model",function(e,t){var r=function(t,r,n){var i=function(){i.superclass.constructor.apply(this,arguments),n&&n.apply(this,arguments)};return e.extend(i,this,t,r)},i=+new Date,a=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+i--},u=function(e,t){return function(r,n){this.setParams(r,n,e,t)}},f="",v=/^\?|=(?=&|$)/g,h="GET",d="POST";return t.mix(c,{extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(d)},getUrlParams:function(){return this.getParams(h)},getParams:function(e){var r=t.toUrl(f,this[n+(e||h)]);return r=r.replace(v,f)},setUrlParamsIf:u(h,1),setPostParamsIf:u(d,1),setParams:function(e,r,i,o){var s,c,u,v=this,h=n+i;v[h]||(v[h]={}),u=v[h],t._f(e)&&(e=t.tryCall(e)),e&&t._s(e)&&(s={},s[e]=~e.indexOf("=")?f:r,e=s);for(c in e)o&&a(u,c)||(u[c]=e[c])},setPostParams:u(d),setUrlParams:u(h),get:function(e,t,r){var n=this,i=arguments.length,a=2==i,o=n.$attrs;if(i){for(var c=(e+f).split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt||(o(i)||(i={data:i}),r.set(i),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),r.createElement("vframe")})(null,this,document,"",KISSY);
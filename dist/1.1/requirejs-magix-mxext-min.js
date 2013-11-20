define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u=function(){},v={tagName:f,rootId:"magix_vf_root",execError:u},h=v.hasOwnProperty,l=function(e,t){return e?h.call(e,t):e},m=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=b.isObject(t)?g(e,t):l(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},d=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},p=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new p(e,t)},g=function(e,t,r){for(var n in t)r&&l(r,n)||(e[n]=t[n]);return e};g(p.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,l(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!l(i,o)){if(i.length>=n.b){i.sort(d);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&w(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(w(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,l(this.c,e)}});var x=p(60),y=p(),w=function(e,t,r,n,i,a){for(b.isArray(e)||(e=[e]),t&&(b.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){v.execError(o)}return i},b={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:g,has:l,safeExec:w,noop:u,config:m(v),start:function(e){var t=this;g(v,e),t.libRequire(v.iniFile,function(r){v=g(v,r,e),v["!tnc"]=v.tagName!=f;var n=v.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(v.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)l(e,r)&&t.push(r);return t},local:m({}),path:function(i,a){var s=i+"\n"+a,f=y.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var u=o.test(i)?8:0,v=i.indexOf(c,u);f=i.substring(0,v)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");y.set(s,f)}return f},pathToObject:function(e,t){var s=x.get(e);if(!s){s={};var f={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var v=e.replace(u,n);if(u&&o.test(u)){var h=u.indexOf(c,8);u=~h?u.substring(h):c}v.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),s[a]=u,s.params=f,x.set(e,s)}return s},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||l(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(b.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:p},C=Object.prototype.toString;return g(b,{libRequire:function(e,t){b.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==C.call(e)},isString:function(e){return"[object String]"==C.call(e)},isNumber:function(e){return"[object Number]"==C.call(e)},isRegExp:function(e){return"[object RegExp]"==C.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,b.mix(e.prototype,r),b.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o=window,s="",c="pathname",f="view",u=e.has,v=e.mix,h=document,l=e.keys,m=/^UTF-8$/i.test(h.charset||h.characterSet||"UTF-8"),d=e.config(),p=e.cache(),g=e.cache(40),x={params:{},href:s},y=/#.*$/,w=/^[^#]*#?!?/,b="params",C=d.nativeHistory,E=function(t,r,n){if(t){n=this[b],e.isString(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(r=u(n,t[i]));i++);}return r},M=function(){return this[c]},T=function(){return this[f]},P=function(e,t,r,n){return r=this,n=r[b],arguments.length>1?n[e]=t:n[e]},O=function(t){var r=e.pathToObject(t,m),n=r[c];return n&&a&&(r[c]=e.path(o.location[c],n)),r},A=v({viewInfo:function(t,r){var i,a;if(!n){n={rs:d.routes||{},nf:d.notFoundView};var o=d.defaultView;n.dv=o;var f=d.defaultPathname||s;i=n.rs,n.f=e.isFunction(i),n.f||i[f]||!o||(i[f]=o),n[c]=f}return t||(t=n[c]),i=n.rs,a=n.f?i.call(d,t,r):i[t],{view:a||n.nf||n.dv,pathname:a||C||n.nf?t:n[c]}},start:function(){var e=A,t=o.history;i=C&&t.pushState,a=C&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||o.location.href;var r=A,n=p.get(e);if(!n){var i=e.replace(y,s),a=e.replace(w,s),u=O(i),h=O(a),l={};v(l,u[b]),v(l,h[b]),n={get:P,set:P,href:e,refHref:x.href,srcQuery:i,srcHash:a,query:u,hash:h,params:l},p.set(e,n)}if(t&&!n[f]){var m;m=C?n.hash[c]||n.query[c]:n.hash[c];var d=r.viewInfo(m,n);v(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=g.get(i);if(!a){var o,s,u;a={},a[f]=u,a[c]=u,a[b]={};var v,h,m=[c,f];for(v=1;v>=0;v--)h=m[v],s=e[h],u=t[h],s!=u&&(a[h]={from:s,to:u},o=1);var d=e[b],p=t[b];for(m=l(d).concat(l(p)),v=m.length-1;v>=0;v--)h=m[v],s=d[h],u=p[h],s!=u&&(a[b][h]={from:s,to:u},o=1);a.occur=o,a.isParam=E,a.isPathname=M,a.isView=T,g.set(i,a)}return a},route:function(){var e=A,t=e.parseQH(0,1),n=!x.get,i=e.getChged(x,t);x=t,i.occur&&(r=t,e.fire("changed",{location:t,changed:i,force:n}))},navigate:function(t,n,o){var f=A;if(!n&&e.isObject(t)&&(n=t,t=s),n&&(t=e.objectToPath({params:n,pathname:t},m)),t){var h=O(t),l={};if(l[b]=v({},h[b]),l[c]=h[c],l[c]){if(a){var d=r.query[b];for(var p in d)u(d,p)&&!u(l[b],p)&&(l[b][p]=s)}}else{var g=v({},r[b]);l[b]=v(g,l[b]),l[c]=r[c]}var x,y=e.objectToPath(l,m,r.query[b]);x=i?y!=r.srcQuery:y!=r.srcHash,x&&(i?(f.poped=1,history[o?"replaceState":"pushState"](s,s,y),f.route()):(v(l,r,l),l.srcHash=y,l.hash={params:l[b],pathname:l[c]},f.fire("!ul",{loc:r=l}),y="#!"+y,o?location.replace(y):location.hash=y))}}},t);return A.useState=function(){var e=A,t=location.href;$(o).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},A.useHash=function(){$(o).on("hashchange",A.route,!1)},A}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.mix,i={},a=document.body,o={},s=String.fromCharCode(26),c="mx-owner",f="mx-ei",u={},v=65536,h=function(e){return e.id||(e.id="mx-e-"+v--)},l=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},m={special:function(e){n(i,e)},process:function(e){for(var n=e.target||e.srcElement;n&&1!=n.nodeType;)n=n.parentNode;var i=n,o=e.type,v=u[o]||(u[o]=RegExp(","+o+"(?:,|$)"));if(!v.test(l(n,f))){for(var m,d,p="mx-"+o,g=[];i&&i!=a&&(m=l(i,p),d=l(i,f),!m&&!v.test(d));)g.push(i),i=i.parentNode;if(m){var x,y=m.split(s);y.length>1&&(x=y[0],m=y.pop());var w=l(i,c)||x;if(!w)for(var b=i,$=t.all();b&&b!=a;){if(r($,b.id)){l(i,c,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+c+":"+m);var C=t.get(w),E=C&&C.view;E&&E.processEvent({info:m,se:e,st:o,tId:h(n),cId:h(i)})}else for(var M;g.length;)M=g.shift(),d=l(M,f)||"",v.test(d)||(d=d+","+o,l(M,f,d))}},on:function(e,r){var n=this;if(!o[e]){t=r,o[e]=0;var s=i[e];s?n.lib(0,a,e):a["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}o[e]++},off:function(e){var t=this,r=o[e];if(r>0){if(r--,!r){var n=i[e];n?t.lib(1,a,e):a["on"+e]=null}o[e]=r}}};return m.lib=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,m.process)},m}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var f,u,v=c.length,h=v-1;v--;)f=a?v:h-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),h--),u.d||r(u.f,n,s)}i&&delete s[o]},on:function(r,n,i){var a=t(r),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o,s,c=document,f=c.body,u=65536,v=e.safeExec,h=[],l=h.slice,m=e.mix,d=e.config("tagName"),p=e.config("rootId"),g=e.config("!tnc"),x=e.has,y=g?"mx-vframe":"mx-defer",w=f.contains,b=g&&f.querySelectorAll,$=" "+d+"[mx-vframe]",C="alter",E="created",M=function(e){return"object"==typeof e?e:c.getElementById(e)},T=function(e,t,r){return t=M(e),t&&(r=b?c.querySelectorAll("#"+t.id+$):t.getElementsByTagName(d)),r||h},P=function(e){return e.id||(e.id="magix_vf_"+u--)},O=function(e,t,r){if(e=M(e),t=M(t),e&&t)if(e!==t)try{r=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},A=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=s};return m(A,{root:function(e,t,r){if(!n){a=t,o=r,s=e;var i=M(p);i||(i=c.createElement(d),i.id=p,f.insertBefore(i,f.firstChild)),n=new A(p),e.add(n)}return n}}),m(m(A.prototype,t),{mountView:function(t,n,i){var c=this,f=M(c.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),c.unmountView(),t){var u=e.pathToObject(t),h=u.pathname,l=--c.sign;e.libRequire(h,function(e){if(l==c.sign){r.prepare(e);var t=new e({owner:c,id:c.id,$:M,path:h,vom:s,location:a});c.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),c.mountZoneVframes()),t.on("rendered",function(){c.mountZoneVframes()}),t.on("prerender",function(){c.unmountZoneVframes(0,1)||c.cAlter()}),t.on("inited",function(){c.viewInited=1,c.fire("viewInited",{view:t}),i&&v(i,t,c)})},0),n=n||{},t.load(m(n,u.params,n),o)}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.oust();var t=M(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,a=s.get(e);return a||(a=new A(e),a.pId=i.id,x(i.cM,e)||i.cC++,i.cM[e]=1,s.add(a)),a.mountView(t,r,n),a},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=T(i),o=a.length,s={};if(o)for(var c,f,u,v,h=0;o>h;h++)if(c=a[h],f=P(c),!x(s,f)&&(u=c.getAttribute("mx-view"),v=!c.getAttribute(y),v=v!=g,v||u)){n.mountVframe(f,u,t,r);for(var l,m=T(c),d=0,p=m.length;p>d;d++)l=m[d],s[P(l)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=s.get(e);if(n){var i=n.fcc;n.unmountView(),s.remove(e,i);var a=s.get(n.pId);a&&x(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?O(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=l.call(arguments,1);return i&&(t=v(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(E,e),t.fire(E,e)),s.vfCreated();var n=t.id,i=s.get(t.pId);i&&!x(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(C,e),t.fire(C,e));var i=s.get(t.pId);i&&x(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var t=this,r=t.view;if(r&&r.sign>0&&r.rendered){var n=r.olChanged(o),i={location:a,changed:o,prevent:function(){this.cs=h},toChildren:function(t){t=t||h,e.isString(t)&&(t=t.split(",")),this.cs=t}};n&&v(r.locationChange,i,r);for(var c,f=i.cs||e.keys(t.cM),u=0,l=f.length;l>u;u++)c=s.get(f[u]),c&&c.locChged()}}}),A}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],s=e.noop,c=e.mix,f={render:1,renderUI:1},u="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=e.cache(40),l=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,m=String.fromCharCode(26),d=function(){this.render()},p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,x=/(\w+):([^,]+)/g,y=/([$\w]+)<([\w,]+)>/,w=function(e){var t=this;c(t,e),t.sign=1,n(w.ms,[e],t)};w.ms=[],w.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[u]){e[u]=1;var n,o,c,h,l,d=e.prototype,p={};for(var g in d)if(i(d,g))if(n=d[g],o=g.match(y))for(c=o[1],h=o[2],h=h.split(a),l=h.length-1;l>-1;l--)o=h[l],p[o]=1,d[c+m+o]=n;else i(f,g)&&n!=s&&(d[g]=v(n));h&&(d.$evts=p)}},w.mixin=function(e,t){t&&w.ms.push(t),c(w.prototype,e)},c(c(w.prototype,t),{render:s,locationChange:s,init:s,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,i=e.sign,a=function(a){if(i==e.sign){e.template=e.wrapMxEvent(a),e.delegateEvents(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),n(e.render,o,e);var s=!t&&!e.rendered;s&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+m)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a))),n.locationChange==s&&(n.locationChange=d)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,i=e.se,a=h.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(x,function(e,t,r){a.p[t]=r}),h.set(r,a));var o=a.n+m+e.st,s=t[o];if(s){var f=p[a.f];f&&f.call(p,i),n(s,c({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:i,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=e?r.off:r.on,a=t.vom;for(var o in n)i.call(r,o,a)}});var b,C="?t="+Date.now(),E={},M={};return w.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(i(E,t.path))e(E[t.path]);else{var a=t.path.indexOf("/");if(!b){var o=t.path.substring(0,a);b=require.s.contexts._.config.paths[o]}var s=t.path.substring(a+1),c=b+s+".html",f=M[c],u=function(r){e(E[t.path]=r)};f?f.push(u):(f=M[c]=[u],$.ajax({url:c+C,success:function(e){n(f,e),delete M[c]},error:function(e,t){n(f,t),delete M[c]}}))}},w.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},w}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,s=0,c=0,f={},u={},v={},h=t.mix({all:function(){return f},add:function(e){n(f,e.id)||(a++,f[e.id]=e,h.fire("add",{vframe:e}))},get:function(e){return f[e]},remove:function(e,t){var r=f[e];r&&(a--,t&&o--,delete f[e],h.fire("remove",{vframe:r}))},vfCreated:function(){if(!c){o++;var e=o/a;e>s&&h.fire("progress",{percent:s=e},c=1==e)}},locChged:function(t){var r,n=t.loc;if(n?r=1:n=t.location,i(u,n),!r){i(v,t.changed);var a=e.root(h,u,v);v.view?a.mountView(n.view):a.locChged()}}},r);return h}),define("mxext/mmanager",["magix/magix","magix/event"],function(e,t){var r=e.has,n=e.safeExec,i=e.mix,a="mr",o=String.fromCharCode(26),s=e.isFunction,c=12e5,f=function(e,t,r){t=[];for(r in e)t.push(r,a,e[r]);return t},u=function(e,t){return[e.name,f(t.urlParams),f(t.postParams)].join(o)},v=Date.now||function(){return+new Date},h=v(),l=function(t){var r=this;r.$mClass=t,r.$mCache=e.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+h--},m=[].slice,d={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,cache:1,before:1,after:1},p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(m.call(arguments)))}},g=function(e){return e&&e.manage},x=function(e,t,r){var i=r.key,a=r.cKeys,o=a[i];if(o){var s=o.q;delete a[i],n(s,e)}},y=function(e){return function(){var t=new $(this),r=arguments,n=r[r.length-1];return g(n)&&(n.manage(t.id,t),r=m.call(r,0,-1)),t[e].apply(t,r)}},w=function(e,t){return function(r,n){var i=m.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};i(l,{create:function(e){if(!e)throw Error("ungiven modelClass");return new l(e)}});var b={ALL:1,ONE:2,ORDER:4},$=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id=a+h--};return i($.prototype,{send:function(t,i,a,o){var s=this;if(s.$doTask)return s.next(function(){this.send(t,i,a,o)}),s;s.$doTask=!0;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,h=s.$reqModels;e.isArray(t)||(t=[t]);var l,m,d,g=t.length,y=0,w=Array(g),$=[],C={},E=[],M=e.isArray(i);M&&($=Array(i.length));for(var T,P=function(e,t,r){if(!s.$destroy){y++,delete h[e.id];var o=e.$mm,u=o.key;if(w[t]=e,r)l=!0,d=!0,m=r,C.msg=r,C[t]=r;else{if(d=!1,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=v();var p=o.after,x=o.meta;p&&n(p,[e,x]),c.fire("done",{model:e,meta:x})}!e.fromCache&&o.used>0&&(e.fromCache=!0),o.used++}if(a==b.ONE){var T=M?i[t]:i;T&&($[t]=n(T,[d?C:null,e,C],s))}else if(a==b.ORDER){E[t]={m:e,e:d,s:r};for(var P,O,A=E.i||0;P=E[A];A++)O=M?i[A]:i,P.e&&(C.msg=P.s,C[A]=P.s),$[A]=n(O,[P.e?C:null,P.m,C].concat($),s);E.i=A}y>=g&&(l||(C=null),a==b.ALL?(w.unshift(C),$[0]=C,$[1]=n(i,w,s)):$.unshift(C),s.$ntId=setTimeout(function(){s.doNext($)},30))}},O=0;t.length>O;O++){if(T=t[O],!T)throw Error("miss attrs:"+t);var A=c.getModel(T,o),k=A.cKey,I=A.entity,V=p(P,I,O);V.id=s.id,k&&r(u,k)?u[k].q.push(V):A.update?(h[I.id]=I,k&&(u[k]={q:[V],e:I},V=x),I.request(V,{key:k,cKeys:u})):V()}return s},fetchAll:function(e,t){return this.send(e,t,b.ALL)},saveAll:function(e,t){return this.send(e,t,b.ALL,1)},fetchOrder:w(b.ORDER),saveOrder:w(b.ORDER,1),saveOne:w(b.ONE,1),fetchOne:w(b.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,i=e.$reqModels,a=t.$mCacheKeys;for(var o in i){var s=i[o],c=s.$mm.key;if(c&&r(a,c)){for(var f,u=a[c],v=u.q,h=[],l=[],m=0;v.length>m;m++)f=v[m],f.id!=e.id?h.push(f):e.$destroy||l.push(f);n(l,["abort"],e),h.length?u.q=h:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var i=r.shift();i&&n(i,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),i(i(l.prototype,t),{registerModels:function(t){var r=this,n=r.$mMetas;e.isArray(t)||(t=[t]);for(var i,a,o=0;t.length>o;o++)if(i=t[o]){if(a=i.name,!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);i.cache&&(i.cacheKey||(i.cacheKey=u),i.cacheTime||(i.cacheTime=c)),n[a]=i}},registerMethods:function(e){var t=this;i(t,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),i=new t.$mClass;i.set(r,d),i.$mm={used:0};var a=e.before||r.before;s(a)&&n(a,[i,r]);var o=e.after||r.after;i.$mm.after=o;var c=e.cacheKey||r.cacheKey;return s(c)&&(c=n(c,[r,e])),i.$mm.key=c,i.$mm.meta=r,i.set(e,d),i.setUrlParams(r.urlParams),i.setPostParams(r.postParams),i.setUrlParams(e.urlParams),i.setPostParams(e.postParams),t.fire("inited",{model:i,meta:r}),i},getModelMeta:function(t){var r,n=this,i=n.$mMetas;r=e.isString(t)?t:t.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:y("saveAll"),fetchAll:y("fetchAll"),saveOrder:y("saveOrder"),fetchOrder:y("fetchOrder"),saveOne:y("saveOne"),fetchOne:y("fetchOne"),createMRequest:function(e){var t=new $(this);return g(e)&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,i,a=this,o=a.$mCache,c=null;if(e.isString(t)?r=t:(i=a.getModelMeta(t),r=t.cacheKey||i.cacheKey,s(r)&&(r=n(r,[i,t]))),r){var f=a.$mCacheKeys,u=f[r];if(u)c=u.e;else if(c=o.get(r)){i||(i=c.$mm.meta);var h=t.cacheTime||i.cacheTime||0;s(h)&&(h=n(h,[i,t])),h>0&&v()-c.$mm.done>h&&(a.clearCacheByKey(r),c=null)}}return c}}),l}),define("mxext/model",["magix/magix"],function(e){var t=function(t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&e.safeExec(r,arguments,this)};return e.mix(i,n,{prototype:!0}),e.extend(i,n,t)},r=+new Date,n=encodeURIComponent,i=e.has,a=e.isObject,o=e.toString,s=function(e){this.set(e),this.id="m"+r--};return e.mix(s,{GET:"GET",POST:"POST",extend:t}),e.mix(s.prototype,{sync:e.noop,getPostParams:function(){return this.getParams(s.POST)},getUrlParams:function(){return this.getParams(s.GET)},getParams:function(t){var r=this;t||(t=s.GET),t=t.toUpperCase();var i,a="$"+t,o=r[a],c=[];for(var f in o){i=o[f],e.isArray(i)||(i=[i]);for(var u=0;i.length>u;u++)c.push(f+"="+n(i[u]))}return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,s.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,s.POST,!0)},setParams:function(e,t,r,n){var o=this,s="$"+r;o[s]||(o[s]={});var c=o[s];if(!a(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&i(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,s.POST)},setUrlParams:function(e,t){this.setParams(e,t,s.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,s=r.$attrs;return s&&(s=i?s:s[e]),a&&o.call(t)!=o.call(s)&&(s=t),s},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),a(e))for(var n in e)i(t,n)||(r.$attrs[n]=e[n]);else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(a(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),s}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e,t,r){var n=window,i=function(e){n.clearTimeout(e),n.clearInterval(e)},a=function(e){s(e.destroy,[],e)},o=0,s=e.safeExec,c=e.has,f=t.extend({navigate:r.navigate,manage:function(t,r){var n=this,s=arguments,c=!0;1==s.length&&(r=t,t="res_"+o++,c=!1),n.$res||(n.$res={});var f;e.isNumber(r)?f=i:r&&r.destroy&&(f=a);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[t]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(n&&c(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)})});return f}),document.createElement("vframe");
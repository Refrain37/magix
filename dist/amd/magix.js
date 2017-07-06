/*!3.5.1 MIT kooboy_li@163.com*/define("magix",["$"],function(n){var t,e,r=function(){},i=function(n,e){if(n)if(H==n)t||(t=Et.extend()),e(t);else if(a(n))require(n,e);else try{e(require(n))}catch(r){require([n],e)}else e&&e()},o=function(){},f=function(n,t,e,r,i){return o[A]=t[A],i=new o,Z(i,e),Z(n,r),i.constructor=n,n[A]=i,n},u=n.isPlainObject,a=n.isArray,c=function(t,e){n(t).html(e),x.triggerHandler({type:"htmlchange",target:t})},s=n.find||n.zepto,$=s.matchesSelector||s.matches,h=function(n,t){t=n.data,n.eventTarget=t.e,F(t.f,n,t.v)},v=function(t,e,r,i,o){o&&(e+="."+o.i),i?n(t).off(e,r):n(t).on(e,o,r)},l=0,p="",d=[],m=d.slice,g=",",y=null,b=window,w=document,x=n(w),k="#",V=JSON.stringify,q="\x1e",I="object",A="prototype",T=/[#?].*$/,S=/([^=&?\/#]+)=?([^&#?]*)/g,U=/(?!^)=|&/,j=function(n){return(n||"mx_")+l++},H=j(),O={rootId:j(),defaultView:H,error:function(n){throw n}},E=O.hasOwnProperty,C=function(n){return typeof n==I?n:w.getElementById(n)},L=function(n){return!n||typeof n!=I},M=function(n,t,e){var r,i,o,f=0;for(o in n)r=n[o],i=t[o],L(r)&&i==r||(e[o]=1,f=1),t[o]=r;return f},P=function(n,t,e){if(n=C(n),t=C(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},Z=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},R=function(t,e){e&&!R[t]&&(R[t]=1,n("head").append("<style>"+e+"</style>"))},F=function(n,t,e,r,i,o){for(t=t||d,a(n)||(n=[n]),a(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(f){O.error(f)}return i},N=function(n,t){return n&&E.call(n,t)},B=function(n,t){return t.f-n.f||t.t-n.t},D=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};Z(D[A],{get:function(n){var t=this,e=t.c,r=e[q+n];return r&&(r.f++,r.t=l++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=q+n,o=r[i],f=e.b;if(!o){if(r.length>=e.x)for(r.sort(B);f--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=l++},del:function(n){n=q+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=p,delete t[n],r&&F(r,e.o))},has:function(n){return N(this.c,q+n)}});var z,J=new D,K=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}z[t]=e},Q=function(n){var t,e=J.get(n);return e||(z={},t=n.replace(T,p),n==t&&U.test(t)&&(t=p),n.replace(t,p).replace(S,K),J.set(n,e={a:t,b:z})),{path:e.a,params:Z({},e.b)}},_=function(n,t,e){var r,i,o,f=[];for(i in t)r=t[i]+p,(!e||r||N(e,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+f.join("&")),n},G=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},W=Object.keys||function(n,t,e){t=[];for(e in n)N(n,e)&&t.push(e);return t},X={config:function(n,t){return t=O,n&&(t=u(n)?Z(t,n):t[n]),t},boot:function(n){Z(O,n),i(O.ini,function(t){Z(O,t),Z(O,n),i(O.exts,function(){Pn.on("changed",Gn),cn.on("changed",Gn),On()})})},toMap:G,toTry:F,toUrl:_,parseUrl:Q,mix:Z,has:N,keys:W,inside:P,node:C,applyStyle:R,guid:j,Cache:D},Y="on",nn={fire:function(n,t,e,r){var i,o,f,u,a=q+n,c=this,s=c[a];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)f=r?i:o-i,u=s[f],u.f?(u.x=1,F(u.f,t,c),u.x=p):u.x||(s.splice(f,1),o--);s=c[Y+n],s&&F(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=q+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=q+n,o=this,f=o[i];if(t){if(f)for(e=f.length;e--;)if(r=f[e],r.f==t){r.f=p;break}}else delete o[i],delete o[Y+n]}};X.Event=nn;var tn={},en={},rn={},on=0,fn=function(n,t,e){if(n)for(var r=n.length-1;r>-1;r--){var i=n[r];if(e=N(t,i))break}return e},un=function(n){n=(n+"").split(",");for(var t,e=0;e<n.length;e++)t=n[e],N(en,t)?en[t]++:en[t]=1;return n},an=function(n){for(var t,e,r=0;r<n.length;r++)t=n[r],N(en,t)&&(e=--en[t],e||(delete en[t],delete tn[t]))},cn=Z({get:function(n){var t=n?tn[n]:tn;return t},set:function(n){on=M(n,tn,rn)||on;return this},has:function(n){return N(tn,n)},digest:function(n){n&&cn.set(n),on&&(this.fire("changed",{keys:rn}),on=0,rn={})},clean:function(n){return{ctor:function(){var t=this;n=un(n),t.on("destroy",function(){an(n)})}}}},nn);X.State=cn;var sn,$n,hn,vn,ln,pn,dn,mn=n.isFunction,gn="/",yn="path",bn="view",wn="params",xn=new D,kn=new D,Vn=b.location,qn=0,In={query:{},params:{},href:p},An=/(?:^.*\/\/[^\/]+|#.*$)/gi,Tn=/^[^#]*#?!?/,Sn=function(n,t){return t=this[wn],t[n]||p},Un=k+"!",jn=function(n,t){n=Un+n,t?Vn.replace(n):Vn.hash=n},Hn=function(n,t,e,r,i,o){n=_(n,t,o),n!=e.srcHash&&(qn=i,jn(n,r))},On=function(){var n,t,e=Ln().srcHash;v(b,"hashchange",function(r,i,o){t||(i=Ln(),n=i.srcHash,n!=e&&(o=function(){r.p=1,e=n,t=p,jn(n),Mn()},r={reject:function(){r.p=1,t=p,jn(e)},resolve:o,prevent:function(){t=1}},Pn.fire("change",r),t||r.p||o()))}),b.onbeforeunload=function(n){n=n||b.event;var t={};if(Pn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},Mn()},En=function(n,t){if(hn||(hn=O.routes||{},vn=O.unmatchView,pn=O.defaultView,dn=O.defaultPath||gn,ln=mn(hn),ln||hn[dn]||(hn[dn]=pn)),!n[bn]){var e=n.hash[yn]||$n&&n.query[yn]||dn;t=ln?hn.call(O,e,n):hn[e]||vn||pn,n[yn]=e,n[bn]=t}},Cn=function(n,t){var e=n.href,r=t.href,i=e+q+r,o=kn.get(i);if(!o){var f,u,a,c;o={force:!e},o[wn]=c={};var s,$,h=n[wn],v=t[wn],l=[yn,bn].concat(W(h),W(v));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,v=t,c=o),u=h[$],a=v[$],u!=a&&(c[$]={from:u,to:a},f=1);kn.set(i,o={a:f,b:o})}return o},Ln=function(n){n=n||Vn.href;var t,e,r,i,o,f=xn.get(n);return f||(t=n.replace(An,p),e=n.replace(Tn,p),r=Q(t),i=Q(e),o=Z({},r[wn]),Z(o,i[wn]),f={get:Sn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},En(f),xn.set(n,f)),f},Mn=function(){var n=Ln(),t=Cn(In,In=n);return!qn&&t.a&&Pn.fire("changed",sn=t.b),qn=0,sn},Pn=Z({parse:Ln,diff:Mn,to:function(n,t,e,r){!t&&u(n)&&(t=n,n=p);var i=Q(n),o=i[wn],f=i[yn],a=In[yn],c=In[wn],s=In.query[wn];if(Z(o,t),f){if(!$n)for(a in s)N(o,a)||(o[a]=p)}else c&&(f=a,o=Z(Z({},c),o));Hn(f,o,In,e,r,s)}},nn);X.Router=Pn;var Zn,Rn,Fn,Nn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=zn[n.pId],e&&!N(e.$r,t)&&(e.$r[t]=1,e.$rc++,Nn(e)))},Bn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=zn[n.pId],r&&N(r.$r,e)&&(r.$rc--,delete r.$r[e],Bn(r,t)))},Dn=function(n,t){return Zn||(e=w.body,n=O.rootId,t=C(n),t||(e.id=n),Zn=new Wn(n)),Zn},zn={},Jn=function(n,t){N(zn,n)||(zn[n]=t,Wn.fire("add",{vframe:t}),n=C(n),n&&(n.vframe=t))},Kn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},Qn=function(n,t,e){e=zn[n],e&&(delete zn[n],Wn.fire("remove",{vframe:e,fcc:t}),n=C(n),n&&(n.vframe=y))},_n=function(n,t,e){if(n&&n.$g!=Fn&&(e=n.$v)&&e.$s>0){var r=t?fn(e.$os,t):Ot(e);r&&e.render();for(var i=n.children(),o=i.length,f=0;f<o;)_n(zn[i[f++]],t)}},Gn=function(n){var t,e=Dn();(t=n.view)?e.mountView(t.to):(Fn=l++,_n(e,n.keys))},Wn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Jn(n,e)};Z(Wn,Z({all:function(){return zn},get:function(n){return zn[n]}},nn)),Z(Z(Wn[A],nn),{mountView:function(n,t){var e,r,o,f=this,u=f.id,a=C(u);if(!f.$a&&a&&(f.$a=1,f.$t=a.innerHTML),f.unmountView(),f.$d=0,a&&n){f.path=n,e=Q(n),o=e.path,r=++f.$s;var c,s,$=e.params,h=f.pId,v=zn[h];if(v=v&&v.$v,v=v&&v.updater,v&&n.indexOf(q)>0)for(c in $)s=$[c],s.charAt(0)==q&&($[c]=v.get(s));Z($,t),i(o,function(n){if(r==f.$s){if(!n)return O.error(Error("id:"+u+" cannot load:"+o));jt(n),o=new n({owner:f,id:u},$),f.$v=o,f.$g=Fn,Tt(o),o.init($),o.render(),o.$t||o.$p||o.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(Rn||(t=1,Rn={id:e.id}),e.$d=1,e.unmountZone(0,1),Bn(e,Rn),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),qt(r,1),Tt(r,1)),r.$s--,r.owner=y,n=C(e.id),n&&e.$a&&c(n,e.$t),t&&(Rn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return Bn(i,{id:n}),r=zn[n],r||(N(i.$c,n)||(i.$cl=p,i.$cc++),i.$c[n]=n,r=new Wn(n,i.id)),r.mountView(t,e),r},mountZone:function(t,e){var r,i,o,f=this,u=[];t=t||f.id;var a=n(k+t+" [mx-view]");for(f.$h=1,r=0;r<a.length;r++)i=a[r],o=i.id||(i.id=j()),i.$m||(i.$m=1,u.push([o,i.getAttribute("mx-view")]));for(;u.length;)i=u.shift(),o=i[0],u[o]?O.error(Error("vf.id duplicate:"+o+" at "+f.path)):f.mountVframe(u[o]=o,i[1],e);f.$h=0,Nn(f)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=zn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),Qn(n,r),e.id=e.pId=p,e=zn[i],e&&N(e.$c,n)&&(delete e.$c[n],e.$cl=p,e.$cc--,t||Nn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&P(e,n))&&r.unmountVframe(e,1);t||Nn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=zn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=W(n.$c))},invoke:function(n,t){var e,r,i,o,f,u=this,a=u.$il;return(r=u.$v)&&r.$p?e=(i=r[n])&&F(i,t,r):(o=a[f=q+n],o&&(o.r=t==o.a),o={n:n,a:t,k:f},a.push(o),a[f]=o),e}}),X.Vframe=Wn,n.fn.invokeView=function(){var n,t=this.prop("vframe");return t&&(n=t.invoke.apply(t,arguments)),n};var Xn="mx-",Yn=new D(30,10),nt=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,tt={},et={},rt=function(n,t){var r,i,o,f,u,a,c,s=[],h=n,v=n.getAttribute(Xn+t),l=[];if(v&&(u=Yn.get(v),u||(u=v.match(nt)||d,u={v:u[1],n:u[2],i:u[3]},u.p=u.i&&F(Function("return "+u.i)),Yn.set(v,u)),s.push(u={r:v,v:u.v,p:u.p,n:u.n})),u&&!u.v||et[t]){if(c=n.$v,!c)for(l.push(h);h!=e&&(h=h.parentNode);){if(zn[i=h.id]||(i=h.$v)){c=i;break}l.push(h)}if(c){for(;v=l.pop();)v.$v=c;do if(r=zn[c],a=r.$v){o=a.$so,f=o[t];for(i in f)$(n,i)&&s.push({r:i,v:c,n:i});if(a.$t){u&&!u.v&&(u.v=c);break}}while(c=r.pId)}}return s},it=function(n){for(var t,r,i,o,f,u,a,c=n.target,s=n.type,$=[];c!=e&&1==c.nodeType;){if(r=rt(c,s),r.length)for($=[];t=r.shift();){if(!t.v)return O.error(Error("bad "+s+":"+t.r));o=zn[t.v],f=o&&o.$v,u=t.n+q+s,a=f[u],a&&(n.eventTarget=c,n.params=t.p||{},F(a,n,f))}if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c.parentNode||e}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},ot=function(n,t,r){var i=0|tt[n],o=r?-1:1;i&&r!==i||v(e,n,it,r),tt[n]=i+o,t&&(et[n]=(0|et[n])+o)},ft=/\\|'/g,ut=/\r|\n/g,at=/<%([@=!])?([\s\S]+?)%>|$/g,ct=function(n){var t=0,e="$p+='";return n.replace(at,function(r,i,o,f){return e+=n.slice(t,f).replace(ft,"\\$&").replace(ut,"\\n"),t=f+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+q+"'+$g++},$s,$eum={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$euf=function(m){return $eum[m]},$eur=/[!')(*]/g,$eu=function(v){return encodeURIComponent(v).replace($eur,$euf)};\n"+e+"return $p;\n",Function("$g","$$",e)},st=new D,$t=function(n,t){var e=st.get(n);return e||(e=ct(n),st.set(n,e)),e(1,t)},ht=/\d+\u001d/g,vt=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,lt={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},pt=/&([^;]+?);/g,dt=function(n,t){return lt[t]||n},mt=function(n,t,e,r,i,o,f){var u,a,c,s=n.id||(n.id=j());if(i){var $=kt($t(e.attr,r),f),h={};$.replace(vt,function(n,t,e,r){h[t]=r});for(var v,l,p,d,m,g=e.attrs.length-1;g>=0;g--)v=e.attrs[g],l=v.n,m=v.f,v.v?(u=1,a=h[l]):(p=v.p?n[m||l]:n.getAttribute(l),d=v.b?N(h,l):h[l]||"",p!=d&&(v.p?(v.q&&(d=d.replace(pt,dt)),n[m||l]=d):d?n.setAttribute(l,d):n.removeAttribute(l)))}u&&(c=zn[s],c&&c[a?"unmountView":"unmountVframe"]()),o&&t.setHTML(s,$t(e.tmpl,r)),u&&a&&t.owner.mountVframe(s,a)},gt=function(t,e,r){var i,o=t.$i,f=zn[o],u=f&&f.$v;if(u&&(i=u.tmpl)){var a=i.html,c=i.subs;if(t.$rd&&e)for(var s,$,h,v,l,p,d,m,g=c.length-1;g>=0;g--){if(h=0,v=0,$=c[g],l=1,d=$.mask,s=$.pKeys)for(p=s.length;--p>=0;)if(N(e,s[p])){l=0;break}if(l){for(s=$.keys,p=s.length,l=0;--p>=0;)if(N(e,s[p])){if(l=1,!d||h&&v){h=$.tmpl,v=$.attr;break}m=d.charAt(p),h=h||1&m,v=v||2&m}if(l){var y=n(kt($.path,o));for(p=0;p<y.length;)mt(y[p++],u,$,r,v,h,o,f)}}}else{var b,w,x=function(n){return b[n].tmpl};if(c){if(!c.$)for(c.$=b={},w=c.length;w>0;){var k=c[--w];k.s&&(b[k.s]=k,k.tmpl=k.tmpl.replace(ht,x),delete k.s)}b=c.$}t.$rd=1;var V=a.replace(ht,x);u.setHTML(t.$t,$t(V,r))}}},yt=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},bt=yt.prototype;Z(bt,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t=this,e=t.$data,r=t.$keys;return M(n,e,r),t},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return t.$keys={},gt(t,e,n),t},snapshot:function(){var n=this;return n.$ss=V(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=V(n.$data)}});var wt=/^(\$?)([^<]+?)<([^>]+)>$/,xt=/\u001f/g,kt=function(n,t){return(n+p).replace(xt,t||this.id)},Vt=function(n,t,e){return n.$l?e=n:(e=function(n){F(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},qt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&It(i,e,1)},It=function(n,t,e,r){var i,o,f=n[t];return f&&f!=r&&(o=f.e,i=o.destroy,i&&e&&F(i,d,o),delete n[t]),o},At=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),qt(e),F(t,m.call(arguments),e))}},Tt=function(n,t){var e,r,i=n.$eo,o=n.$so;for(e in i)ot(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],v(r.e,r.n,h,t,{i:n.id,v:n,f:r.f,e:r.e})},St=[],Ut={win:b,doc:w},jt=function(n){if(!n[q]){n[q]=1;var t,e,r,i,o,f,u,a,c,s=n[A],$={},h=[],v={};for(u in s)if(t=s[u],e=u.match(wt))for(f=e[1],r=e[2],i=e[3].split(g);a=i.pop();){if(o=Ut[r],c=1,f){if(o){h.push({f:t,e:o,n:a});continue}c=2,o=v[a],o||(o=v[a]={}),o[r]=1}$[a]=$[a]|c,a=r+q+a,o=s[a],o?o.$m&&(t.$m?s[a]=Vt(o,t):N(s,u)&&(s[a]=t)):s[a]=t}At(s),s.$eo=$,s.$el=h,s.$so=v,s.$t=!!s.tmpl}},Ht=function(n,t,e){for(var r=0;r<n.length&&!(e=N(t,n[r]));r++);return e},Ot=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=sn[yn]),t||(t=Ht(e.k,sn[wn]))),t},Et=function(n,t){t=this,Z(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new yt(t.id),F(St,n,t)},Ct=Et[A];Z(Et,{merge:function(n,t){t=n&&n.ctor,t&&St.push(t),Z(Ct,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var o=function(n,t){e.call(this,n,t),F(i,t,this)},u=n.mixins;if(u){for(var a,c,s,$,h=u.length,v=0,l={};v<h;){a=u[v++];for(c in a)s=a[c],$=l[c],"ctor"==c?i.push(s):wt.test(c)?($?s=Vt($,s):s.$m=1,l[c]=s):l[c]=s}n=Z(l,n)}return o.extend=e.extend,f(o,e,n,t)}}),Z(Z(Ct,nn),{render:r,init:r,wrapEvent:kt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n,1),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){Kn(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observeLocation:function(n,t){var e,r=this;e=r.$l,e.f=1,u(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=(n+p).split(g))},observeState:function(n){this.$os=(n+p).split(g)},capture:function(n,t,e,r,i){return r=this.$r,t?(It(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return It(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",f="b";"change"!=i.type&&(o="b",f="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[f]=1,e.leaveConfirm(n,function(){r[f]=0,i.resolve()},function(){r[f]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};Pn.on("change",r),Pn.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){Pn.off("change",r),Pn.off("pageunload",i)})},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=C(n),e&&c(e,kt(t,r.id))),r.endUpdate(n)}}),X.View=Et;var Lt=n.type,Mt=n.proxy,Pt=n.now||Date.now,Zt=function(){this.id=j("b"),this.$={}};Z(Zt[A],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,f=r.$,u=f;if(i){for(var c,s=a(n)?m.call(n):(n+p).split(".");(c=s.shift())&&u;)u=u[c];c&&(u=e)}var $;return o&&($=Lt(t))!=Lt(u)&&(u=t),u},set:function(n,t){var e,r=this;u(n)||(e={},e[n]=t,n=e),Z(r.$,n)}});var Rt=1,Ft=2,Nt=function(n,t,e){e=this[n],e&&(delete this[n],F(e,t,e.e))},Bt=function(n,t,e,r,i,o){var f=[],u=y,a=0;return function(c,s){var $,h=this;a++;var v=h.$m,l=v.k;f[c+1]=h;var p={bag:h,error:s};if(s)u=s,t.fire("fail",p),$=1;else if(!o.has(l)){l&&o.set(l,h),v.t=Pt();var d=v.a;d&&F(d,h,h),v.x&&t.clear(v.x),t.fire("done",p),$=1}if(!e.$o){var m=a==r;m&&(e.$b=0,i==Ft&&(f[0]=u,F(n,f,e))),i==Rt&&F(n,[s?s:y,h,m,c],e)}$&&t.fire("end",p)}},Dt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Dt(this,t,e,r,i)});n.$b=1;var o=n.constructor,f=o.$r;a(t)||(t=[t]);for(var u,c=t.length,s=Bt(e,o,n,c,r,o.$c),$=0;$<c;$++)if(u=t[$]){var h,v=o.get(u,i),l=v.e,p=l.$m.k,d=Mt(s,l,$);p&&f[p]?f[p].push(d):v.u?(p&&(h=[d],h.e=l,f[p]=h,d=Mt(Nt,f,p)),o.$s(l,d)):d()}return n},zt=function(){var n=this;n.id=j("s"),n.$q=[]};Z(zt[A],{all:function(n,t){return Dt(this,n,t,Ft)},save:function(n,t){return Dt(this,n,t,Ft,1)},one:function(n,t){return Dt(this,n,t,Rt)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=m.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&F(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Jt=function(n,t,e){return e=[V(t),V(n)],e.join(q)},Kt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Qt=Z({add:function(n){var t=this,e=t.$m;a(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new Zt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Jt(e,n)},u(n)&&i.set(n);var o=e.before;return o&&F(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Kt,G((n+p).split(g)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),f=0|n.cache||o.cache;if(f&&(e=Jt(o,n)),e){var u=r.$r,a=u[e];a?t=a.e:(t=i.get(e),t&&Pt()-t.$m.t>f&&(i.del(e),t=0))}return t}},nn);zt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new D(t,e),i.$r={},i.$m={},f(i,r,y,Qt)},X.Service=zt;var _t=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=_t,f(i,e,n,t)};return Z(r[A],nn),r.extend=_t,X.Base=r,X});
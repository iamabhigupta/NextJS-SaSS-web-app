"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5496],{95496:function(e,t,r){r.d(t,{X:function(){return n}});var s=r(87536),a=function(e,t){var r={};for(var a in e){var n=(0,s.U2)(t,a);(0,s.t8)(r,a,Object.assign(e[a],{ref:n&&n.ref}))}return r},n=function(e,t,r){return void 0===t&&(t={abortEarly:!1}),void 0===r&&(r={}),function(n,i,o){try{return Promise.resolve(function(s,a){try{var o=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](n,Object.assign({},t,{context:i}))).then((function(e){return{values:e,errors:{}}})))}catch(s){return a(s)}return o&&o.then?o.then(void 0,a):o}(0,(function(e){return{values:{},errors:a((t=e,r="all"===o.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var a=e[t.path].types,n=a&&a[t.type];e[t.path]=(0,s.KN)(t.path,r,e,t.type,n?[].concat(n,t.message):t.message)}return e}),{})),o.fields)};var t,r})))}catch(u){return Promise.reject(u)}}}},87536:function(e,t,r){r.d(t,{KN:function(){return I},Qr:function(){return W},U2:function(){return y},cI:function(){return Ce},t8:function(){return K}});var s=r(67294),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,y=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const m="blur",h="focusout",g="change",v="onBlur",b="onChange",p="onSubmit",_="onTouched",V="all",A="max",w="min",F="maxLength",S="minLength",k="pattern",x="required",D="validate",C=s.createContext(null),E=()=>s.useContext(C);var j=(e,t,r,s=!0)=>{const a={};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t[a]!==V&&(t[a]=!s||V),r&&(r[a]=!0),e[a]}});return a},O=e=>u(e)&&!Object.keys(e).length,U=(e,t,r)=>{const{name:s,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||V)))},N=e=>Array.isArray(e)?e:[e],T=(e,t,r)=>r&&t?e===t:!e||!t||e===t||N(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var L=e=>"string"===typeof e,M=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),y(r,e)):a?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r)},R=e=>"function"===typeof e,q=e=>{for(const t in e)if(R(e[t]))return!0;return!1};function P(e){const t=E(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=function(e){const t=E(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.useRef(a);l.current=a;const c=s.useCallback((e=>{if(T(l.current,e.name,o)){const t=M(l.current,r._names,e.values||r._formValues);y(f(l.current)||u(t)&&!q(t)?{...t}:Array.isArray(t)?[...t]:f(t)?n:t)}}),[r,o,n]);B({disabled:i,subject:r._subjects.watch,callback:c});const[d,y]=s.useState(f(n)?r._getWatch(a):n);return s.useEffect((()=>{r._removeUnmounted()})),d}({control:a,name:r,defaultValue:y(a._formValues,r,y(a._defaultValues,r,e.defaultValue)),exact:!0}),d=function(e){const t=E(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.useState(r._formState),l=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(n),d=s.useRef(!0);return c.current=n,B({disabled:a,callback:s.useCallback((e=>d.current&&T(c.current,e.name,i)&&U(e,l.current)&&u({...r._formState,...e})),[r,i]),subject:r._subjects.state}),s.useEffect((()=>(d.current=!0,()=>{d.current=!1})),[]),j(o,r._proxyFormState,l.current,!1)}({control:a,name:r}),h=s.useRef(a.register(r,{...e.rules,value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=y(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.useCallback((e=>{h.current.onChange({target:{value:l(e),name:r},type:g})}),[r]),onBlur:s.useCallback((()=>{h.current.onBlur({target:{value:y(a._formValues,r),name:r},type:m})}),[r,a]),ref:s.useCallback((e=>{const t=y(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}),[r,a._fields])},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!y(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!y(d.touchedFields,r)},error:{enumerable:!0,get:()=>y(d.errors,r)}})}}const W=e=>e.render(P(e));var I=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},$=e=>/^\w*$/.test(e),H=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function K(e,t,r){let s=-1;const a=$(t)?[t]:H(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const Q=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&Q(s,t)}}};var X=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),z=(e,t,r)=>{const s=d(y(e,r));return K(s,"root",t[r]),K(e,r,s),e},G=e=>"boolean"===typeof e,J=e=>"file"===e.type,Y=e=>L(e)||s.isValidElement(e),Z=e=>"radio"===e.type,ee=e=>e instanceof RegExp;const te={value:!1,isValid:!1},re={value:!0,isValid:!0};var se=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?re:{value:e[0].value,isValid:!0}:re:te}return te};const ae={isValid:!1,value:null};var ne=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ae):ae;function ie(e,t,r="validate"){if(Y(e)||Array.isArray(e)&&e.every(Y)||G(e)&&!e)return{type:r,message:Y(e)?e:"",ref:t}}var oe=e=>u(e)&&!ee(e)?e:{value:e,message:""},ue=async(e,t,r,s,n)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:f,min:y,max:m,pattern:h,validate:g,name:v,valueAsNumber:b,mount:p,disabled:_}=e._f;if(!p||_)return{};const V=l?l[0]:o,C=e=>{s&&V.reportValidity&&(V.setCustomValidity(G(e)?"":e||" "),V.reportValidity())},E={},j=Z(o),U=a(o),N=j||U,T=(b||J(o))&&!o.value||""===t||Array.isArray(t)&&!t.length,B=I.bind(null,v,r,E),M=(e,t,r,s=F,a=S)=>{const n=e?t:r;E[v]={type:e?s:a,message:n,ref:o,...B(e?s:a,n)}};if(n?!Array.isArray(t)||!t.length:c&&(!N&&(T||i(t))||G(t)&&!t||U&&!se(l).isValid||j&&!ne(l).isValid)){const{value:e,message:t}=Y(c)?{value:!!c,message:c}:oe(c);if(e&&(E[v]={type:x,message:t,ref:V,...B(x,t)},!r))return C(t),E}if(!T&&(!i(y)||!i(m))){let e,s;const a=oe(m),n=oe(y);if(i(t)||isNaN(t)){const r=o.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(n.value)&&(s=r<new Date(n.value))}else{const r=o.valueAsNumber||(t?+t:t);i(a.value)||(e=r>a.value),i(n.value)||(s=r<n.value)}if((e||s)&&(M(!!e,a.message,n.message,A,w),!r))return C(E[v].message),E}if((d||f)&&!T&&(L(t)||n&&Array.isArray(t))){const e=oe(d),s=oe(f),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(M(a,e.message,s.message),!r))return C(E[v].message),E}if(h&&!T&&L(t)){const{value:e,message:s}=oe(h);if(ee(e)&&!t.match(e)&&(E[v]={type:k,message:s,ref:o,...B(k,s)},!r))return C(s),E}if(g)if(R(g)){const e=ie(await g(t),V);if(e&&(E[v]={...e,...B(D,e.message)},!r))return C(e.message),E}else if(u(g)){let e={};for(const s in g){if(!O(e)&&!r)break;const a=ie(await g[s](t),V,s);a&&(e={...a,...B(s,a.message)},C(a.message),r&&(E[v]=e))}if(!O(e)&&(E[v]={ref:V,...e},!r))return E}return C(!0),E};var le="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function ce(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(le&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(R(e[r])){t=e;break}t[r]=ce(e[r])}}return t}var de=e=>({isOnSubmit:!e||e===p,isOnBlur:e===v,isOnChange:e===b,isOnAll:e===V,isOnTouch:e===_});function fe(e){for(const t in e)if(!f(e[t]))return!1;return!0}function ye(e,t){const r=$(t)?[t]:H(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let i=0;i<r.slice(0,-1).length;i++){let t,s=-1;const a=r.slice(0,-(i+1)),o=a.length-1;for(i>0&&(n=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&O(t)||Array.isArray(t)&&fe(t))&&(n?delete n[r]:delete e[r]),n=t}}return e}function me(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var he=e=>i(e)||!o(e);function ge(e,t){if(he(e)||he(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ge(r,e):r!==e)return!1}}return!0}var ve=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},be=e=>"select-multiple"===e.type,pe=e=>ve(e)&&e.isConnected;function _e(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!q(e[s])?(t[s]=Array.isArray(e[s])?[]:{},_e(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function Ve(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!q(e[a])?f(t)||he(r[a])?r[a]=Array.isArray(e[a])?_e(e[a],[]):{..._e(e[a])}:Ve(e[a],i(t)?{}:t[a],r[a]):r[a]=!ge(e[a],t[a]);return r}var Ae=(e,t)=>Ve(e,t,_e(t)),we=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function Fe(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return J(t)?t.files:Z(t)?ne(e.refs).value:be(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?se(e.refs).value:we(f(t.value)?e.ref.value:t.value,e)}var Se=e=>f(e)?void 0:ee(e)?e.source:u(e)?ee(e.value)?e.value.source:e.value:e;function ke(e,t,r){const s=y(e,r);if(s||$(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=y(t,s),i=y(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const xe={mode:p,reValidateMode:b,shouldFocusError:!0};function De(e={}){let t,r={...xe,...e},s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=ce(r.defaultValues)||{},g=r.shouldUnregister?{}:ce(u),v={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,_={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={watch:me(),array:me(),state:me()},F=de(r.mode),S=de(r.reValidateMode),k=r.criteriaMode===V,x=async e=>{let t=!1;return A.isValid&&(t=r.resolver?O((await j()).errors):await U(o,!0),e||t===s.isValid||(s.isValid=t,w.state.next({isValid:t}))),t},D=(e,t,r,s)=>{const a=y(o,e);if(a){const n=y(g,e,f(r)?y(u,e):r);f(n)||s&&s.defaultChecked||t?K(g,e,t?n:Fe(a._f)):q(e,n),v.mount&&x()}},C=(e,t,r,a,n)=>{let i=!1;const o={name:e},l=y(s.touchedFields,e);if(A.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=T(),i=e!==o.isDirty}if(A.dirtyFields&&(!r||a)){const r=y(s.dirtyFields,e);ge(y(u,e),t)?ye(s.dirtyFields,e):K(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,i=i||r!==y(s.dirtyFields,e)}return r&&!l&&(K(s.touchedFields,e,r),o.touchedFields=s.touchedFields,i=i||A.touchedFields&&l!==r),i&&n&&w.state.next(o),i?o:{}},E=async(r,a,n,i)=>{const o=y(s.errors,r),u=A.isValid&&s.isValid!==a;var l;if(e.delayError&&n?(l=()=>((e,t)=>{K(s.errors,e,t),w.state.next({errors:s.errors})})(r,n),t=e=>{clearTimeout(p),p=window.setTimeout(l,e)},t(e.delayError)):(clearTimeout(p),t=null,n?K(s.errors,r,n):ye(s.errors,r)),(n?!ge(o,n):o)||!O(i)||u){const e={...i,...u?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},w.state.next(e)}_[r]--,A.isValidating&&!Object.values(_).some((e=>e))&&(w.state.next({isValidating:!1}),_={})},j=async e=>r.resolver?await r.resolver({...g},r.context,((e,t,r,s)=>{const a={};for(const n of e){const e=y(t,n);e&&K(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||b.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},U=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...n}=i;if(e){const n=b.array.has(e.name),o=await ue(i,y(g,e.name),k,r.shouldUseNativeValidation,n);if(o[e.name]&&(a.valid=!1,t))break;!t&&(y(o,e.name)?n?z(s.errors,o,e.name):K(s.errors,e.name,o[e.name]):ye(s.errors,e.name))}n&&await U(n,t,a)}}return a.valid},T=(e,t)=>(e&&t&&K(g,e,t),!ge(H(),u)),B=(e,t,r)=>{const s={...v.mount?g:f(t)?u:L(e)?{[e]:t}:t};return M(e,b,s,r)},q=(e,t,r={})=>{const s=y(o,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&K(g,e,we(t,r)),n=le&&ve(r.ref)&&i(t)?"":t,be(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>!e.disabled&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):J(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||w.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&$(e)},P=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,u=y(o,i);!b.array.has(e)&&he(a)&&(!u||u._f)||n(a)?q(i,a,r):P(i,a,r)}},W=(e,t,r={})=>{const a=y(o,e),n=b.array.has(e),l=ce(t);K(g,e,l),n?(w.array.next({name:e,values:g}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=Ae(u,g),w.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:T(e,l)}))):!a||a._f||i(l)?q(e,l,r):P(e,l,r),X(e,b)&&w.state.next({}),w.watch.next({name:e})},I=async e=>{const a=e.target;let n=a.name;const i=y(o,n);if(i){let c,d;const f=a.type?Fe(i._f):l(e),v=e.type===m||e.type===h,p=!((u=i._f).mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate))&&!r.resolver&&!y(s.errors,n)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(v,y(s.touchedFields,n),s.isSubmitted,S,F),V=X(n,b,v);K(g,n,f),v?(i._f.onBlur&&i._f.onBlur(e),t&&t(0)):i._f.onChange&&i._f.onChange(e);const A=C(n,f,v,!1),D=!O(A)||V;if(!v&&w.watch.next({name:n,type:e.type}),p)return D&&w.state.next({name:n,...V?{}:A});if(!v&&V&&w.state.next({}),_[n]=(_[n],1),w.state.next({isValidating:!0}),r.resolver){const{errors:e}=await j([n]),t=ke(s.errors,o,n),r=ke(e,o,t.name||n);c=r.error,n=r.name,d=O(e)}else c=(await ue(i,y(g,n),k,r.shouldUseNativeValidation))[n],d=await x(!0);i._f.deps&&$(i._f.deps),E(n,d,c,A)}var u},$=async(e,t={})=>{let a,n;const i=N(e);if(w.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await j();if(e)for(const r of e){const e=y(t,r);e?K(s.errors,r,e):ye(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=O(t),n=e?!i.some((e=>y(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=y(o,e);return await U(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&x()):n=a=await U(o);return w.state.next({...!L(e)||A.isValid&&a!==s.isValid?{}:{name:e},...r.resolver?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!n&&Q(o,(e=>y(s.errors,e)),e?i:b.mount),n},H=e=>{const t={...u,...v.mount?g:{}};return f(e)?t:L(e)?y(t,e):e.map((e=>y(t,e)))},Y=(e,t)=>({invalid:!!y((t||s).errors,e),isDirty:!!y((t||s).dirtyFields,e),isTouched:!!y((t||s).touchedFields,e),error:y((t||s).errors,e)}),ee=(e,t={})=>{for(const a of e?N(e):b.mount)b.mount.delete(a),b.array.delete(a),y(o,a)&&(t.keepValue||(ye(o,a),ye(g,a)),!t.keepError&&ye(s.errors,a),!t.keepDirty&&ye(s.dirtyFields,a),!t.keepTouched&&ye(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&ye(u,a));w.watch.next({}),w.state.next({...s,...t.keepDirty?{isDirty:T()}:{}}),!t.keepIsValid&&x()},te=(e,t={})=>{let s=y(o,e);const n=G(t.disabled);return K(o,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),s?n&&K(g,e,t.disabled?void 0:y(g,e,Fe(s._f))):D(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:Se(t.min),max:Se(t.max),minLength:Se(t.minLength),maxLength:Se(t.maxLength),pattern:Se(t.pattern)}:{},name:e,onChange:I,onBlur:I,ref:n=>{if(n){te(e,t),s=y(o,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>Z(e)||a(e))(r),l=s._f.refs||[];if(i?l.find((e=>e===r)):r===s._f.ref)return;K(o,e,{_f:{...s._f,...i?{refs:[...l.filter(pe),r,...Array.isArray(y(u,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),D(e,!1,void 0,r)}else s=y(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(b.array,e)||!v.action)&&b.unMount.add(e)}}};return{control:{register:te,unregister:ee,getFieldState:Y,_executeSchema:j,_getWatch:B,_getDirty:T,_updateValid:x,_removeUnmounted:()=>{for(const e of b.unMount){const t=y(o,e);t&&(t._f.refs?t._f.refs.every((e=>!pe(e))):!pe(t._f.ref))&&ee(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,a,n=!0,i=!0)=>{if(a&&r){if(v.action=!0,i&&Array.isArray(y(o,e))){const t=r(y(o,e),a.argA,a.argB);n&&K(o,e,t)}if(A.errors&&i&&Array.isArray(y(s.errors,e))){const t=r(y(s.errors,e),a.argA,a.argB);n&&K(s.errors,e,t),((e,t)=>{!d(y(e,t)).length&&ye(e,t)})(s.errors,e)}if(A.touchedFields&&i&&Array.isArray(y(s.touchedFields,e))){const t=r(y(s.touchedFields,e),a.argA,a.argB);n&&K(s.touchedFields,e,t)}A.dirtyFields&&(s.dirtyFields=Ae(u,g)),w.state.next({isDirty:T(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else K(g,e,t)},_getFieldArray:t=>d(y(v.mount?g:u,t,e.shouldUnregister?y(u,t,[]):[])),_subjects:w,_proxyFormState:A,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return u},get _names(){return b},set _names(e){b=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:$,register:te,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=ce(g);w.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await j();s.errors=e,i=t}else await U(o);O(s.errors)?(w.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t({...s.errors},a),r.shouldFocusError&&Q(o,(e=>y(s.errors,e)),b.mount))}catch(u){throw n=!1,u}finally{s.isSubmitted=!0,w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>R(e)?w.watch.subscribe({next:r=>e(B(void 0,t),r)}):B(e,t,!0),setValue:W,getValues:H,reset:(t,r={})=>{const a=t||u,n=ce(a),i=t&&!O(t)?n:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)y(s.dirtyFields,e)?K(i,e,y(g,e)):W(e,y(i,e));else{if(le&&f(t))for(const e of b.mount){const t=y(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{if(ve(e)){e.closest("form").reset();break}}catch(l){}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?ce(u):{}:n,w.array.next({values:i}),w.watch.next({values:i})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,w.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||ge(t,u)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?Ae(u,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{y(o,e)&&(f(t.defaultValue)?W(e,y(u,e)):(W(e,t.defaultValue),K(u,e,t.defaultValue)),t.keepTouched||ye(s.touchedFields,e),t.keepDirty||(ye(s.dirtyFields,e),s.isDirty=t.defaultValue?T(e,y(u,e)):T()),t.keepError||(ye(s.errors,e),A.isValid&&x()),w.state.next({...s}))},clearErrors:e=>{e?N(e).forEach((e=>ye(s.errors,e))):s.errors={},w.state.next({errors:s.errors})},unregister:ee,setError:(e,t,r)=>{const a=(y(o,e,{_f:{}})._f||{}).ref;K(s.errors,e,{...t,ref:a}),w.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=y(o,e)._f,s=r.refs?r.refs[0]:r.ref;s.focus(),t.shouldSelect&&s.select()},getFieldState:Y}}function Ce(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...De(e),formState:r};const n=t.current.control,i=s.useCallback((e=>{U(e,n._proxyFormState,!0)&&(n._formState={...n._formState,...e},a({...n._formState}))}),[n]);return B({subject:n._subjects.state,callback:i}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),t.current.formState=j(r,n._proxyFormState),t.current}}}]);
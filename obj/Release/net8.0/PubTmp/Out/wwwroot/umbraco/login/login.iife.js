(function(X){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,Ie=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Ut=new WeakMap;let It=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(t,e))}return e}toString(){return this.cssText}};const Jr=r=>new It(typeof r=="string"?r:r+"",void 0,Te),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new It(t,r,Te)},Yr=(r,e)=>{if(Ie)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=fe.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}},Tt=Ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Jr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gr,defineProperty:Zr,getOwnPropertyDescriptor:Kr,getOwnPropertyNames:Xr,getOwnPropertySymbols:Qr,getPrototypeOf:ei}=Object,me=globalThis,kt=me.trustedTypes,ti=kt?kt.emptyScript:"",ri=me.reactiveElementPolyfillSupport,Q=(r,e)=>r,ve={toAttribute(r,e){switch(e){case Boolean:r=r?ti:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ke=(r,e)=>!Gr(r,e),Lt={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),me.litPropertyMetadata??=new WeakMap;class F extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Zr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=Kr(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return o?.call(this)},set(n){const a=o?.call(this);s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const e=ei(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const t=this.properties,i=[...Xr(t),...Qr(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Tt(o))}else e!==void 0&&t.push(Tt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ve).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ve;this._$Em=o,this[o]=n.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??ke)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}}F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[Q("elementProperties")]=new Map,F[Q("finalized")]=new Map,ri?.({ReactiveElement:F}),(me.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=globalThis,ge=Le.trustedTypes,Rt=ge?ge.createPolicy("lit-html",{createHTML:r=>r}):void 0,Mt="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+T,ii=`<${Dt}>`,D=document,ee=()=>D.createComment(""),te=r=>r===null||typeof r!="object"&&typeof r!="function",Nt=Array.isArray,oi=r=>Nt(r)||typeof r?.[Symbol.iterator]=="function",Re=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,Wt=/>/g,N=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,jt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,si=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),l=si(1),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ft=new WeakMap,V=D.createTreeWalker(D,129);function Bt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(e):e}const ni=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":"",n=re;for(let a=0;a<t;a++){const u=r[a];let m,v,f=-1,_=0;for(;_<u.length&&(n.lastIndex=_,v=n.exec(u),v!==null);)_=n.lastIndex,n===re?v[1]==="!--"?n=Vt:v[1]!==void 0?n=Wt:v[2]!==void 0?(Ht.test(v[2])&&(o=RegExp("</"+v[2],"g")),n=N):v[3]!==void 0&&(n=N):n===N?v[0]===">"?(n=o??re,f=-1):v[1]===void 0?f=-2:(f=n.lastIndex-v[2].length,m=v[1],n=v[3]===void 0?N:v[3]==='"'?jt:qt):n===jt||n===qt?n=N:n===Vt||n===Wt?n=re:(n=N,o=void 0);const $=n===N&&r[a+1].startsWith("/>")?" ":"";s+=n===re?u+ii:f>=0?(i.push(m),u.slice(0,f)+Mt+u.slice(f)+T+$):u+T+(f===-2?a:$)}return[Bt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class ie{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const a=e.length-1,u=this.parts,[m,v]=ni(e,t);if(this.el=ie.createElement(m,i),V.currentNode=this.el.content,t===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=V.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Mt)){const _=v[n++],$=o.getAttribute(f).split(T),K=/([.?@])?(.*)/.exec(_);u.push({type:1,index:s,name:K[2],strings:$,ctor:K[1]==="."?ui:K[1]==="?"?li:K[1]==="@"?ci:be}),o.removeAttribute(f)}else f.startsWith(T)&&(u.push({type:6,index:s}),o.removeAttribute(f));if(Ht.test(o.tagName)){const f=o.textContent.split(T),_=f.length-1;if(_>0){o.textContent=ge?ge.emptyScript:"";for(let $=0;$<_;$++)o.append(f[$],ee()),V.nextNode(),u.push({type:2,index:++s});o.append(f[_],ee())}}}else if(o.nodeType===8)if(o.data===Dt)u.push({type:2,index:s});else{let f=-1;for(;(f=o.data.indexOf(T,f+1))!==-1;)u.push({type:7,index:s}),f+=T.length-1}s++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function B(r,e,t=r,i){if(e===A)return e;let o=i!==void 0?t._$Co?.[i]:t._$Cl;const s=te(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=o:t._$Cl=o),o!==void 0&&(e=B(r,o._$AS(r,e.values),o,i)),e}class ai{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??D).importNode(t,!0);V.currentNode=o;let s=V.nextNode(),n=0,a=0,u=i[0];for(;u!==void 0;){if(n===u.index){let m;u.type===2?m=new oe(s,s.nextSibling,this,e):u.type===1?m=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(m=new di(s,this,e)),this._$AV.push(m),u=i[++a]}n!==u?.index&&(s=V.nextNode(),n++)}return V.currentNode=D,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),te(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):oi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&te(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ie.createElement(Bt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new ai(o,this),n=s.u(this.options);s.p(t),this.T(n),this._$AH=s}}_$AC(e){let t=Ft.get(e.strings);return t===void 0&&Ft.set(e.strings,t=new ie(e)),t}k(e){Nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new oe(this.S(ee()),this.S(ee()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(s===void 0)e=B(this,e,t,0),n=!te(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const a=e;let u,m;for(e=s[0],u=0;u<s.length-1;u++)m=B(this,a[i+u],t,u),m===A&&(m=this._$AH[u]),n||=!te(m)||m!==this._$AH[u],m===h?e=h:e!==h&&(e+=(m??"")+s[u+1]),this._$AH[u]=m}n&&!o&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ui extends be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class li extends be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class ci extends be{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??h)===A)return;const i=this._$AH,o=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==h&&(i===h||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class di{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const hi=Le.litHtmlPolyfillSupport;hi?.(ie,oe),(Le.litHtmlVersions??=[]).push("3.1.2");const pi=(r,e,t)=>{const i=t?.renderBefore??e;let o=i._$litPart$;if(o===void 0){const s=t?.renderBefore??null;i._$litPart$=o=new oe(e.insertBefore(ee(),s),s,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};w._$litElement$=!0,w.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:w});const fi=globalThis.litElementPolyfillSupport;fi?.({LitElement:w}),(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:ke},vi=(r=mi,e,t)=>{const{kind:i,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(a){const u=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,u,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(i==="setter"){const{name:n}=t;return function(a){const u=this[n];e.call(this,a),this.requestUpdate(n,u,r)}}throw Error("Unsupported decorator location: "+i)};function d(r){return(e,t)=>typeof t=="object"?vi(r,e,t):((i,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(r){return d({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(r,e){return(t,i,o)=>{const s=n=>n.renderRoot?.querySelector(r)??null;if(e){const{get:n,set:a}=typeof i=="object"?t:o??(()=>{const u=Symbol();return{get(){return this[u]},set(m){this[u]=m}}})();return Me(t,i,{get(){let u=n.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&a.call(this,u)),u}})}return Me(t,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(r){return(e,t)=>{const{slot:i,selector:o}=r??{},s="slot"+(i?`[name=${i}]`:":not([name])");return Me(e,t,{get(){const n=this.renderRoot?.querySelector(s),a=n?.assignedElements(r)??[];return o===void 0?a:a.filter(u=>u.matches(o))}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=r=>r??h;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=r=>r===null||typeof r!="object"&&typeof r!="function",bi=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gt=r=>(...e)=>({_$litDirective$:r,values:e});let Zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=(r,e)=>{const t=r._$AN;if(t===void 0)return!1;for(const i of t)i._$AO?.(e,!1),se(i,e);return!0},we=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Kt=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),_i(e)}};function wi(r){this._$AN!==void 0?(we(this),this._$AM=r,Kt(this)):this._$AM=r}function yi(r,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)se(i[s],!1),we(i[s]);else i!=null&&(se(i,!1),we(i));else se(this,r)}const _i=r=>{r.type==Yt.CHILD&&(r._$AP??=yi,r._$AQ??=wi)};class $i extends Zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Kt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(se(this,e),we(this))}setValue(e){if(bi(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class Ci{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(e=>this.q=e)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=r=>!gi(r)&&typeof r.then=="function",Qt=1073741823;class Ei extends $i{constructor(){super(...arguments),this._$Cwt=Qt,this._$Cbt=[],this._$CK=new Pi(this),this._$CX=new Ci}render(...e){return e.find(t=>!Xt(t))??A}update(e,t){const i=this._$Cbt;let o=i.length;this._$Cbt=t;const s=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const u=t[a];if(!Xt(u))return this._$Cwt=a,u;a<o&&u===i[a]||(this._$Cwt=Qt,o=0,Promise.resolve(u).then(async m=>{for(;n.get();)await n.get();const v=s.deref();if(v!==void 0){const f=v._$Cbt.indexOf(u);f>-1&&f<v._$Cwt&&(v._$Cwt=f,v.setValue(m))}}))}return A}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const p=Gt(Ei);var Ve=function(r,e){return Ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},Ve(r,e)};function ne(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ve(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function We(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function qe(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,s=[],n;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(a){n={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}return s}function je(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,s;i<o;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return r.concat(s||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;function z(r){return typeof r=="function"}function He(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Fe=He(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Be(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var ye=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,s;if(!this.closed){this.closed=!0;var n=this._parentage;if(n)if(this._parentage=null,Array.isArray(n))try{for(var a=We(n),u=a.next();!u.done;u=a.next()){var m=u.value;m.remove(this)}}catch(C){e={error:C}}finally{try{u&&!u.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else n.remove(this);var v=this.initialTeardown;if(z(v))try{v()}catch(C){s=C instanceof Fe?C.errors:[C]}var f=this._finalizers;if(f){this._finalizers=null;try{for(var _=We(f),$=_.next();!$.done;$=_.next()){var K=$.value;try{rr(K)}catch(C){s=s??[],C instanceof Fe?s=je(je([],qe(s)),qe(C.errors)):s.push(C)}}}catch(C){i={error:C}}finally{try{$&&!$.done&&(o=_.return)&&o.call(_)}finally{if(i)throw i.error}}}if(s)throw new Fe(s)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)rr(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Be(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Be(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),er=ye.EMPTY;function tr(r){return r instanceof ye||r&&"closed"in r&&z(r.remove)&&z(r.add)&&z(r.unsubscribe)}function rr(r){z(r)?r():r.unsubscribe()}var ir={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},or={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,je([r,e],qe(t)))},clearTimeout:function(r){var e=or.delegate;return(e?.clearTimeout||clearTimeout)(r)},delegate:void 0};function xi(r){or.setTimeout(function(){throw r})}function sr(){}function _e(r){r()}var nr=function(r){ne(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,tr(t)&&t.add(i)):i.destination=Oi,i}return e.create=function(t,i,o){return new $e(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(ye),Si=Function.prototype.bind;function Je(r,e){return Si.call(r,e)}var Ai=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Pe(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Pe(i)}else Pe(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Pe(t)}},r}(),$e=function(r){ne(e,r);function e(t,i,o){var s=r.call(this)||this,n;if(z(t)||!t)n={next:t??void 0,error:i??void 0,complete:o??void 0};else{var a;s&&ir.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},n={next:t.next&&Je(t.next,a),error:t.error&&Je(t.error,a),complete:t.complete&&Je(t.complete,a)}):n=t}return s.destination=new Ai(n),s}return e}(nr);function Pe(r){xi(r)}function zi(r){throw r}var Oi={closed:!0,next:sr,error:zi,complete:sr},Ui=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ii(r){return r}function Ti(r){return r.length===0?Ii:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var ar=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,s=Li(e)?e:new $e(e,t,i);return _e(function(){var n=o,a=n.operator,u=n.source;s.add(a?a.call(s,u):u?o._subscribe(s):o._trySubscribe(s))}),s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=ur(t),new t(function(o,s){var n=new $e({next:function(a){try{e(a)}catch(u){s(u),n.unsubscribe()}},error:s,complete:o});i.subscribe(n)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[Ui]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Ti(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=ur(e),new e(function(i,o){var s;t.subscribe(function(n){return s=n},function(n){return o(n)},function(){return i(s)})})},r.create=function(e){return new r(e)},r}();function ur(r){var e;return(e=r??ir.Promise)!==null&&e!==void 0?e:Promise}function ki(r){return r&&z(r.next)&&z(r.error)&&z(r.complete)}function Li(r){return r&&r instanceof nr||ki(r)&&tr(r)}var Ri=He(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),lr=function(r){ne(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new cr(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new Ri},e.prototype.next=function(t){var i=this;_e(function(){var o,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var n=We(i.currentObservers),a=n.next();!a.done;a=n.next()){var u=a.value;u.next(t)}}catch(m){o={error:m}}finally{try{a&&!a.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;_e(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;_e(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,s=o.hasError,n=o.isStopped,a=o.observers;return s||n?er:(this.currentObservers=null,a.push(t),new ye(function(){i.currentObservers=null,Be(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,s=i.thrownError,n=i.isStopped;o?t.error(s):n&&t.complete()},e.prototype.asObservable=function(){var t=new ar;return t.source=this,t},e.create=function(t,i){return new cr(t,i)},e}(ar),cr=function(r){ne(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:er},e}(lr),dr={now:function(){return(dr.delegate||Date).now()},delegate:void 0},hr=function(r){ne(e,r);function e(t,i,o){t===void 0&&(t=1/0),i===void 0&&(i=1/0),o===void 0&&(o=dr);var s=r.call(this)||this;return s._bufferSize=t,s._windowTime=i,s._timestampProvider=o,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=i===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,i),s}return e.prototype.next=function(t){var i=this,o=i.isStopped,s=i._buffer,n=i._infiniteTimeWindow,a=i._timestampProvider,u=i._windowTime;o||(s.push(t),!n&&s.push(a.now()+u)),this._trimBuffer(),r.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var i=this._innerSubscribe(t),o=this,s=o._infiniteTimeWindow,n=o._buffer,a=n.slice(),u=0;u<a.length&&!t.closed;u+=s?1:2)t.next(a[u]);return this._checkFinalizedStatuses(t),i},e.prototype._trimBuffer=function(){var t=this,i=t._bufferSize,o=t._timestampProvider,s=t._buffer,n=t._infiniteTimeWindow,a=(n?1:2)*i;if(i<1/0&&a<s.length&&s.splice(0,s.length-a),!n){for(var u=o.now(),m=0,v=1;v<s.length&&s[v]<=u;v+=2)m=v;m&&s.splice(0,m+1)}},e}(lr),Mi=He(function(r){return function(){r(this),this.name="EmptyError",this.message="no elements in sequence"}});function pr(r,e){var t=typeof e=="object";return new Promise(function(i,o){var s=new $e({next:function(n){i(n),s.unsubscribe()},error:o,complete:function(){t?i(e.defaultValue):o(new Mi)}});r.subscribe(s)})}class Di{#e=!1;#t="localizedtext";#r=new hr(1);async#i(){if(this.#e)return;this.#e=!0;const e=await fetch(this.#t);if(!e.ok)throw new Error(`Failed to fetch localized resources: ${e.status} ${e.statusText}`);const t=await e.json(),i=new Map;for(const[o,s]of Object.entries(t))for(const[n,a]of Object.entries(s))i.set(`${o}_${n}`,a);this.#r.next(i)}async localize(e,t,i){return this._lookup(e,t,i)}async localizeMany(e){this.#i();const t=await pr(this.#r);return e.map(i=>t.get(i)??i??"")}tokenReplace(e,t){if(t)for(let i=0;i<t.length;i++)e=e.replace("%"+i+"%",t[i]);return e}async _lookup(e,t,i){this.#i();const o=await pr(this.#r);e&&e[0]==="@"&&(e=e.substring(1));let s=e.indexOf("_");e&&s<0&&(e="general_"+e);const n=o.get(e);return n?this.tokenReplace(n,t):i||`[${e}]`}}const c=new Di;class Ni{#e="backoffice/umbracoapi/authentication/postlogin";async login(e){try{const t=new Request(this.#e,{method:"POST",body:JSON.stringify({username:e.username,password:e.password,rememberMe:e.persist}),headers:{"Content-Type":"application/json"}}),i=await fetch(t),o={status:i.status};if(!i.ok)return o.error=await this.#t(i),o;try{const s=await i.text();s&&(o.data=JSON.parse(this.#r(s)))}catch{}return{status:i.status,data:o?.data,twoFactorView:o?.twoFactorView}}catch(t){return{status:500,error:t instanceof Error?t.message:"Unknown error"}}}async resetPassword(e){const t=new Request("backoffice/umbracoapi/authentication/PostRequestPasswordReset",{method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}}),i=await fetch(t);return{status:i.status,error:i.ok?void 0:await this.#t(i)}}async validatePasswordResetCode(e,t){const i=new Request("backoffice/umbracoapi/authentication/validatepasswordresetcode",{method:"POST",body:JSON.stringify({userId:e,resetCode:t}),headers:{"Content-Type":"application/json"}}),o=await fetch(i);return{status:o.status,error:o.ok?void 0:await this.#t(o)}}async newPassword(e,t,i){const o=new Request("backoffice/umbracoapi/authentication/PostSetPassword",{method:"POST",body:JSON.stringify({password:e,resetCode:t,userId:i}),headers:{"Content-Type":"application/json"}}),s=await fetch(o);return{status:s.status,error:s.ok?void 0:await this.#t(s)}}async newInvitedUserPassword(e){const t=new Request("backoffice/umbracoapi/authentication/PostSetInvitedUserPassword",{method:"POST",body:JSON.stringify({newPassWord:e}),headers:{"Content-Type":"application/json"}}),i=await fetch(t);return{status:i.status,error:i.ok?void 0:await this.#t(i)}}async getPasswordConfig(e){const t=new Request(`backoffice/umbracoapi/authentication/GetPasswordConfig?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}),i=await fetch(t);if(i.ok){let o=await i.text();o=this.#r(o);const s=JSON.parse(o);return{status:i.status,data:s}}return{status:i.status,error:i.ok?void 0:this.#t(i)}}async getInvitedUser(){const e=new Request("backoffice/umbracoapi/authentication/GetCurrentInvitedUser",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await fetch(e);if(t.ok){let i=await t.text();i=this.#r(i);const o=JSON.parse(i);return{status:t.status,user:o}}return{status:t.status,error:this.#t(t)}}async getMfaProviders(){const e=new Request("backoffice/umbracoapi/authentication/Get2faProviders",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await fetch(e);if(t.ok){let i=await t.text();i=this.#r(i);const o=JSON.parse(i);return{status:t.status,providers:o}}return{status:t.status,error:await this.#t(t),providers:[]}}async validateMfaCode(e,t){const i=new Request("backoffice/umbracoapi/authentication/PostVerify2faCode",{method:"POST",body:JSON.stringify({code:e,provider:t}),headers:{"Content-Type":"application/json"}}),o=await fetch(i);let s=await o.text();s=this.#r(s);const n=JSON.parse(s);return o.ok?{data:n,status:o.status}:{status:o.status,error:n.Message??"An unknown error occurred."}}async#t(e){switch(e.status){case 400:case 401:return c.localize("login_userFailedLogin",void 0,"Oops! We couldn't log you in. Please check your credentials and try again.");case 402:return c.localize("login_2faText",void 0,"You have enabled 2-factor authentication and must verify your identity.");case 500:return c.localize("errors_receivedErrorFromServer",void 0,"Received error from server");default:return e.statusText??await c.localize("errors_receivedErrorFromServer",void 0,"Received error from server")}}#r(e){return e.startsWith(`)]}',
`)&&(e=e.split(`
`)[1]),e}}class Vi{constructor(){this.supportsPersistLogin=!1,this.disableLocalLogin=!1,this.#e=new Ni,this.#t=""}#e;#t;set returnPath(e){this.#t=e}get returnPath(){const e=new URLSearchParams(window.location.search);let t=e.get("ReturnUrl")??e.get("returnPath")??this.#t;if(t.indexOf("/security/back-office/authorize")===-1&&(t=decodeURIComponent(t)),!t)return"";const i=new URL(t,window.location.origin);return i.origin!==window.location.origin?"":i.toString()}async login(e){return this.#e.login(e)}async resetPassword(e){return this.#e.resetPassword(e)}async validatePasswordResetCode(e,t){return this.#e.validatePasswordResetCode(e,t)}async newPassword(e,t,i){const o=Number.parseInt(i);return this.#e.newPassword(e,t,o)}async newInvitedUserPassword(e){return this.#e.newInvitedUserPassword(e)}async getPasswordConfig(e){return this.#e.getPasswordConfig(e)}async getInvitedUser(){return this.#e.getInvitedUser()}getMfaProviders(){return this.#e.getMfaProviders()}validateMfaCode(e,t){return this.#e.validateMfaCode(e,t)}}const g=new Vi,Wi="#umb-login-form umb-login-input{width:100%;height:var(--input-height);box-sizing:border-box;display:block;border:1px solid var(--uui-color-border);border-radius:var(--uui-border-radius);outline:none;background-color:var(--uui-color-surface)}#umb-login-form umb-login-input input{width:100%;height:100%;display:block;box-sizing:border-box;border:none;outline:none;background:none;padding:var(--uui-size-1, 3px) var(--uui-size-space-4, 9px);font-size:inherit}#umb-login-form uui-form-layout-item{margin-top:var(--uui-size-space-4);margin-bottom:var(--uui-size-space-4)}#umb-login-form umb-login-input:focus-within{border-color:var(--uui-input-border-color-focus, var(--uui-color-border-emphasis, #a1a1a1));outline:calc(2px * var(--uui-show-focus-outline, 1)) solid var(--uui-color-focus)}#umb-login-form umb-login-input:hover:not(:focus-within){border-color:var(--uui-input-border-color-hover, var(--uui-color-border-standalone, #c2c2c2))}";var qi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,O=(r,e,t,i)=>{for(var o=i>1?void 0:i?ji(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&qi(e,t,o),o},Hi=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Fi=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Bi=(r,e,t)=>(Hi(r,e,"access private method"),t),Ye,fr;const mr=r=>{const e=document.createElement("umb-login-input");return e.type=r.type,e.name=r.name,e.autocomplete=r.autocomplete,e.id=r.id,e.required=!0,e.requiredMessage=r.requiredMessage,e.label=r.label,e.spellcheck=!1,e.inputMode=r.inputmode,e},vr=r=>{const e=document.createElement("uui-label"),t=document.createElement("umb-localize");return t.key=r.localizeAlias,e.for=r.forId,e.appendChild(t),e},gr=(r,e)=>{const t=document.createElement("uui-form-layout-item");return t.appendChild(r),t.appendChild(e),t},Ji=r=>{const e=document.createElement("style");e.innerHTML=Wi;const t=document.createElement("form");return t.id="umb-login-form",t.name="login-form",t.noValidate=!0,r.push(e),r.forEach(i=>t.appendChild(i)),t};let x=class extends w{constructor(){super(),Fi(this,Ye),this.usernameIsEmail=!1,this.allowPasswordReset=!1,this.allowUserInvite=!1,this.addEventListener("umb-login-flow",r=>{r instanceof CustomEvent&&(this.flow=r.detail.flow||void 0),this.requestUpdate()})}set disableLocalLogin(r){g.disableLocalLogin=r}get disableLocalLogin(){return g.disableLocalLogin}set returnPath(r){g.returnPath=r}get returnPath(){return g.returnPath}connectedCallback(){super.connectedCallback(),this.classList.add("uui-text"),this.classList.add("uui-font"),Bi(this,Ye,fr).call(this)}disconnectedCallback(){super.disconnectedCallback(),this._usernameLayoutItem?.remove(),this._passwordLayoutItem?.remove(),this._usernameLabel?.remove(),this._usernameInput?.remove(),this._passwordLabel?.remove(),this._passwordInput?.remove()}render(){return l`
      <umb-auth-layout
        background-image=${Ne(this.backgroundImage)}
        logo-image=${Ne(this.logoImage)}
        logo-image-alternative=${Ne(this.logoImageAlternative)}>
        ${this._renderFlowAndStatus()}
      </umb-auth-layout>
    `}_renderFlowAndStatus(){const r=new URLSearchParams(window.location.search);let e=this.flow||r.get("flow")?.toLowerCase();const t=r.get("status");if(t==="resetCodeExpired")return l`
        <umb-error-layout
          header="Hi there"
          message=${p(c.localize("login_resetCodeExpired",void 0,"The link you have clicked on is invalid or has expired"))}>
        </umb-error-layout>`;if(e==="invite-user"&&t==="false")return l`
        <umb-error-layout
          header="Hi there"
          message=${p(c.localize("user_userinviteExpiredMessage",void 0,"Welcome to Umbraco! Unfortunately your invite has expired. Please contact your administrator and ask them to resend it."))}>
        </umb-error-layout>`;switch(e&&e==="mfa"&&!g.isMfaEnabled&&(e=void 0),e){case"mfa":return l`
          <umb-mfa-page></umb-mfa-page>`;case"reset":return l`
          <umb-reset-password-page></umb-reset-password-page>`;case"reset-password":return l`
          <umb-new-password-page></umb-new-password-page>`;case"invite-user":return l`
          <umb-invite-page></umb-invite-page>`;default:return l`
          <umb-login-page
            ?allow-password-reset=${this.allowPasswordReset}
            ?username-is-email=${this.usernameIsEmail}>
            <slot></slot>
            <slot name="subheadline" slot="subheadline"></slot>
            <slot name="external" slot="external"></slot>
          </umb-login-page>`}}};Ye=new WeakSet,fr=async function(){const r=this.usernameIsEmail?await c.localize("general_email",void 0,"Email"):await c.localize("general_username",void 0,"Username"),e=await c.localize("general_password",void 0,"Password"),t=await c.localize("general_required",void 0,"Required");this._usernameInput=mr({id:"username-input",type:"text",name:"username",autocomplete:"username",requiredMessage:t,label:r,inputmode:this.usernameIsEmail?"email":""}),this._passwordInput=mr({id:"password-input",type:"password",name:"password",autocomplete:"current-password",requiredMessage:t,label:e,inputmode:""}),this._usernameLabel=vr({forId:"username-input",localizeAlias:this.usernameIsEmail?"general_email":"general_username"}),this._passwordLabel=vr({forId:"password-input",localizeAlias:"general_password"}),this._usernameLayoutItem=gr(this._usernameLabel,this._usernameInput),this._passwordLayoutItem=gr(this._passwordLabel,this._passwordInput),this._form=Ji([this._usernameLayoutItem,this._passwordLayoutItem]),this.insertAdjacentElement("beforeend",this._form)},O([d({type:Boolean,attribute:"disable-local-login"})],x.prototype,"disableLocalLogin",1),O([d({attribute:"background-image"})],x.prototype,"backgroundImage",2),O([d({attribute:"logo-image"})],x.prototype,"logoImage",2),O([d({attribute:"logo-image-alternative"})],x.prototype,"logoImageAlternative",2),O([d({type:Boolean,attribute:"username-is-email"})],x.prototype,"usernameIsEmail",2),O([d({type:Boolean,attribute:"allow-password-reset"})],x.prototype,"allowPasswordReset",2),O([d({type:Boolean,attribute:"allow-user-invite"})],x.prototype,"allowUserInvite",2),O([d({attribute:"return-url"})],x.prototype,"returnPath",1),x=O([y("umb-auth")],x);var Yi=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Zi=(r,e,t,i)=>{for(var o=i>1?void 0:i?Gi(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Yi(e,t,o),o},Ki=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Xi=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Qi=(r,e,t)=>(Ki(r,e,"access private method"),t),Ge,br;let Ze=class extends w{constructor(){super(...arguments),Xi(this,Ge)}render(){return l`
			<button type="button" @click=${Qi(this,Ge,br)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
				<span><umb-localize key="login_returnToLogin">Return to login form</umb-localize></span>
			</button>
		`}};Ge=new WeakSet,br=function(){this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"login"}}))},Ze.styles=[E`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			button {
				cursor: pointer;
				background: none;
				border: 0;
				height: 1rem;
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				gap: var(--uui-size-space-1);
				align-self: center;
				text-decoration: none;
				display: inline-flex;
				line-height: 1;
				font-size: 14px;
				font-family: var(--uui-font-family);
			}
			button svg {
				width: 1rem;
			}
			button:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`],Ze=Zi([y("umb-back-to-login-button")],Ze);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(r,e,t){return r?e(r):t?.(r)}var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,Ee=(r,e,t,i)=>{for(var o=i>1?void 0:i?to(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&eo(e,t,o),o},ro=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},wr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},yr=(r,e,t)=>(ro(r,e,"access private method"),t),Ke,_r,Xe,$r;let J=class extends w{constructor(){super(...arguments),wr(this,Ke),wr(this,Xe)}updated(r){super.updated(r),r.has("backgroundImage")&&(this.style.setProperty("--logo-alternative-display",this.backgroundImage?"none":"unset"),this.style.setProperty("--image",`url('${this.backgroundImage}') no-repeat center center/cover`))}render(){return l`
      <div id=${this.backgroundImage?"main":"main-no-image"}>
        ${yr(this,Ke,_r).call(this)} ${yr(this,Xe,$r).call(this)}
      </div>
      ${Ce(this.logoImageAlternative,()=>l`<img id="logo-on-background" src=${this.logoImageAlternative} alt="logo" aria-hidden="true"/>`)}
    `}};Ke=new WeakSet,_r=function(){return this.backgroundImage?l`
      <div id="image-container">
        <div id="image">
          <svg
            id="curve-top"
            width="1746"
            height="1374"
            viewBox="0 0 1746 1374"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15"/>
          </svg>
          <svg
            id="curve-bottom"
            width="1364"
            height="552"
            viewBox="0 0 1364 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15"/>
          </svg>

          ${Ce(this.logoImage,()=>l`<img id="logo-on-image" src=${this.logoImage} alt="logo" aria-hidden="true"/>`)}
        </div>
      </div>
    `:h},Xe=new WeakSet,$r=function(){return l`
      <div id="content-container">
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `},J.styles=[E`
      :host {
        --uui-color-interactive: var(--umb-login-primary-color, #283a97);
        --uui-button-border-radius: var(--umb-login-button-border-radius, 45px);
        --uui-color-default: var(--uui-color-interactive);
        --uui-button-height: 42px;
        --uui-select-height: 38px;

        --input-height: 40px;
        --header-font-size: var(--umb-login-header-font-size, 3rem);
        --header-secondary-font-size: var(--umb-login-header-secondary-font-size, 2.4rem);
        --curves-color: var(--umb-login-curves-color, #f5c1bc);
        --curves-display: var(--umb-login-curves-display, inline);

        display: block;
        background: var(--umb-login-background, #f4f4f4);
        color: var(--umb-login-text-color, #000);
      }

      #main-no-image,
      #main {
        max-width: 1920px;
        display: flex;
        justify-content: center;
        height: 100vh;
        padding: 8px;
        box-sizing: border-box;
        margin: 0 auto;
      }

      #image-container {
        display: var(--umb-login-image-display, none);
        width: 100%;
      }

      #content-container {
        background: var(--umb-login-content-background, none);
        display: var(--umb-login-content-display, flex);
        width: var(--umb-login-content-width, 100%);
        height: var(--umb-login-content-height, 100%);
        box-sizing: border-box;
        overflow: auto;
        border-radius: var(--umb-login-content-border-radius, 0);
      }

      #content {
        max-width: 360px;
        margin: auto;
        width: 100%;
      }

      #image {
        background: var(--umb-login-image, var(--image));
        width: 100%;
        height: 100%;
        border-radius: var(--umb-login-image-border-radius, 38px);
        position: relative;
        overflow: hidden;
        color: var(--curves-color);
      }

      #image svg {
        position: absolute;
        width: 45%;
        height: fit-content;
        display: var(--curves-display);
      }

      #curve-top {
        top: 0;
        right: 0;
      }

      #curve-bottom {
        bottom: 0;
        left: 0;
      }

      #logo-on-image,
      #logo-on-background {
        position: absolute;
        top: 24px;
        left: 24px;
        height: 55px;
      }

      @media only screen and (min-width: 900px) {
        :host {
          --header-font-size: var(--umb-login-header-font-size-large, 4rem);
        }

        #main {
          padding: 32px;
          padding-right: 0;
          align-items: var(--umb-login-align-items, unset);
        }

        #image-container {
          display: var(--umb-login-image-display, block);
        }

        #content-container {
          display: var(--umb-login-content-display, flex);
          padding: 16px;
        }

        #logo-on-background {
          display: var(--logo-alternative-display);
        }
      }
    `],Ee([d({attribute:"background-image"})],J.prototype,"backgroundImage",2),Ee([d({attribute:"logo-image"})],J.prototype,"logoImage",2),Ee([d({attribute:"logo-image-alternative"})],J.prototype,"logoImageAlternative",2),J=Ee([y("umb-auth-layout")],J);var io=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,Qe=(r,e,t,i)=>{for(var o=i>1?void 0:i?oo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&io(e,t,o),o},Pr=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},so=(r,e,t)=>(Pr(r,e,"read from private field"),t?t.call(r):e.get(r)),xe=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},et=(r,e,t)=>(Pr(r,e,"access private method"),t),tt,rt,Cr,it,Er,ot,xr;let ae=class extends w{constructor(){super(...arguments),xe(this,rt),xe(this,it),xe(this,ot),this.resetCallState=void 0,this.error="",xe(this,tt,async r=>{r.preventDefault();const e=r.target;if(!e||!e.checkValidity())return;const i=new FormData(e).get("email");this.resetCallState="waiting";const o=await g.resetPassword(i);this.resetCallState=o.status===200?"success":"failed",this.error=o.error||""})}render(){return this.resetCallState==="success"?et(this,ot,xr).call(this):et(this,rt,Cr).call(this)}};tt=new WeakMap,rt=new WeakSet,Cr=function(){return l`
      <uui-form>
        <form id="LoginForm" name="login" @submit="${so(this,tt)}">
          <header id="header">
            <h1>
              <umb-localize key="login_forgottenPassword">Forgotten password?</umb-localize>
            </h1>
            <span>
							<umb-localize key="login_forgottenPasswordInstruction"
              >An email will be sent to the address specified with a link to reset your password</umb-localize
              >
						</span>
          </header>

          <uui-form-layout-item>
            <uui-label for="email" slot="label" required>
              <umb-localize key="general_email">Email</umb-localize>
            </uui-label>
            <uui-input
              type="email"
              id="email"
              name="email"
              .label=${p(c.localize("general_email",void 0,"Email"))}
              required
              required-message=${p(c.localize("general_required",void 0,"Required"))}></uui-input>
          </uui-form-layout-item>

          ${et(this,it,Er).call(this)}

          <uui-button
            type="submit"
            .label=${p(c.localize("general_submit",void 0,"Submit"))}
            look="primary"
            color="default"
            .state=${this.resetCallState}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `},it=new WeakSet,Er=function(){return!this.error||this.resetCallState!=="failed"?h:l`<span class="text-danger">${this.error}</span>`},ot=new WeakSet,xr=function(){return l`
      <umb-confirmation-layout
        header=${p(c.localize("login_forgottenPassword",void 0,"Forgotten password?"))}
        message=${p(c.localize("login_requestPasswordResetConfirmation",void 0,"An email with password reset instructions will be sent to the specified address if it matched our records"))}>
      </umb-confirmation-layout>
    `},ae.styles=[E`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      #resend {
        display: inline-flex;
        font-size: 14px;
        align-self: center;
        gap: var(--uui-size-space-1);
      }

      #resend a {
        color: var(--uui-color-selected);
        font-weight: 600;
        text-decoration: none;
      }

      #resend a:hover {
        color: var(--uui-color-interactive-emphasis);
      }
    `],Qe([b()],ae.prototype,"resetCallState",2),Qe([b()],ae.prototype,"error",2),ae=Qe([y("umb-reset-password-page")],ae);var no=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,W=(r,e,t,i)=>{for(var o=i>1?void 0:i?ao(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&no(e,t,o),o},uo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Sr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Ar=(r,e,t)=>(uo(r,e,"access private method"),t),st,zr,nt,Or;let k=class extends w{constructor(){super(),Sr(this,st),Sr(this,nt),this.state=void 0,this.page="new",this.error="",this.userId=null,this.resetCode=null;const r=new URLSearchParams(window.location.search);this.resetCode=r.get("resetCode"),this.userId=r.get("userId"),(!this.userId||!this.resetCode)&&(this.page="error")}render(){return this.userId&&this.resetCode?Ar(this,nt,Or).call(this):l`
        <umb-error-layout
          header=${p(c.localize("general_error",void 0,"Error"))}
          message=${p(c.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
        </umb-error-layout>`}};st=new WeakSet,zr=async function(r){r.preventDefault();const e=new URLSearchParams(window.location.search),t=e.get("resetCode"),i=e.get("userId"),o=r.detail.password;if(!t||!i)return;this.state="waiting";const s=await g.newPassword(o,t,i);this.state=s.status===200?"success":"failed",this.page=s.status===200?"done":"new",this.error=s.error||""},nt=new WeakSet,Or=function(){switch(this.page){case"new":return l`
          <umb-new-password-layout
            @submit=${Ar(this,st,zr)}
            .userId=${this.userId}
            .state=${this.state}
            .error=${this.error}></umb-new-password-layout>`;case"error":return l`
          <umb-error-layout
            header=${p(c.localize("general_error",void 0,"Error"))}
            message=${p(c.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
          </umb-error-layout>`;case"done":return l`
          <umb-confirmation-layout
            header=${p(c.localize("general_success",void 0,"Success"))}
            message=${p(c.localize("login_setPasswordConfirmation",void 0,"Your new password has been set and you may now use it to log in."))}>
          </umb-confirmation-layout>`}},W([De("#confirmPassword")],k.prototype,"confirmPasswordElement",2),W([b()],k.prototype,"state",2),W([b()],k.prototype,"page",2),W([b()],k.prototype,"error",2),W([b()],k.prototype,"userId",2),W([b()],k.prototype,"resetCode",2),k=W([y("umb-new-password-page")],k);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends Zt{constructor(e){if(super(e),this.it=h,e.type!==Yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===h||e==null)return this._t=void 0,this.it=e;if(e===A)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}at.directiveName="unsafeHTML",at.resultType=1;const Ur=Gt(at);async function ut(r){if(r.endsWith(".html"))return fetch(r).then(t=>t.text());const e=await import(r);if(!e.default)throw new Error("No default export found");return new e.default}function lt(r){return typeof r=="string"?l`${Ur(r)}`:r}var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ue=(r,e,t,i)=>{for(var o=i>1?void 0:i?co(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&lo(e,t,o),o},ho=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},po=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},fo=(r,e,t)=>(ho(r,e,"access private method"),t),ct,Ir;let q=class extends w{constructor(){super(...arguments),po(this,ct),this.providers=[],this.loading=!0,this.error=null}connectedCallback(){super.connectedCallback(),fo(this,ct,Ir).call(this)}async handleSubmit(r){r.preventDefault(),this.error=null;const e=r.target;if(!e)return;const t=e.elements.namedItem("2facode");if(t&&(t.error=!1,t.errorMessage=""),!e.checkValidity())return;const i=new FormData(e);let o=i.get("provider");if(o||(o=this.providers[0].value),!o){this.error="No provider selected";return}const s=i.get("token");this.buttonState="waiting";try{const n=await g.validateMfaCode(s,o);if(n.error){t?(t.error=!0,t.errorMessage=n.error):this.error=n.error,this.buttonState="failed";return}this.buttonState="success";const a=g.returnPath;a&&(location.href=a),this.dispatchEvent(new CustomEvent("umb-login-success",{bubbles:!0,composed:!0,detail:n.data}))}catch(n){n instanceof Error?this.error=n.message??"Unknown error":this.error="Unknown error",this.buttonState="failed",this.dispatchEvent(new CustomEvent("umb-login-failed",{bubbles:!0,composed:!0,detail:n}))}}renderDefaultView(){return l`
      <uui-form>
        <form id="LoginForm" @submit=${this.handleSubmit}>
          <header id="header">
            <h1>
              <umb-localize key="login_2faTitle">One last step</umb-localize>
            </h1>

            <p>
              <umb-localize key="login_2faText">
                You have enabled 2-factor authentication and must verify your identity.
              </umb-localize>
            </p>
          </header>

          <!-- if there's only one provider active, it will skip this step! -->
          ${this.providers.length>1?l`
              <uui-form-layout-item label="@login_2faMultipleText">
                <uui-label id="providerLabel" for="provider" slot="label" required>
                  <umb-localize key="login_2faMultipleText">Please choose a 2-factor provider</umb-localize>
                </uui-label>
                <uui-select id="provider" name="provider" .options=${this.providers} aria-required="true" required></uui-select>
              </uui-form-layout-item>
            `:h}

          <uui-form-layout-item>
            <uui-label id="2facodeLabel" for="2facode" slot="label" required>
              <umb-localize key="login_2faCodeInput">Verification code</umb-localize>
            </uui-label>

            <uui-input
              autofocus
              id="2facode"
              type="text"
              name="token"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder=${p(c.localize("login_2faCodeInputHelp"),"Please enter the verification code")}
              aria-required="true"
              required
              required-message=${p(c.localize("login_2faCodeInputHelp"),"Please enter the verification code")}
              style="width:100%;">
            </uui-input>
          </uui-form-layout-item>

          ${this.error?l` <span class="text-danger">${this.error}</span> `:h}

          <uui-button
            .state=${this.buttonState}
            button-style="success"
            look="primary"
            color="default"
            label=${p(c.localize("general_validate"),"Validate")}
            type="submit"></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `}async renderCustomView(){const r=g.twoFactorView;if(!r)return h;try{const e=await ut(r);return typeof e=="object"&&(e.providers=this.providers.map(t=>t.value),e.returnPath=g.returnPath),lt(e)}catch(e){const t=e instanceof Error?e.message:"Unknown error";return console.group("[MFA login] Failed to load custom view"),console.log("Element reference",this),console.log("Custom view",r),console.error("Failed to load custom view:",e),console.groupEnd(),l`<span class="text-danger">${t}</span>`}}render(){return this.loading?l`
        <uui-loader-bar></uui-loader-bar>`:g.twoFactorView?p(this.renderCustomView(),l`
          <uui-loader-bar></uui-loader-bar>`):this.renderDefaultView()}};ct=new WeakSet,Ir=async function(){try{const r=await g.getMfaProviders();this.providers=r.providers.map(e=>({name:e,value:e,selected:!1})),this.providers.length&&(this.providers[0].selected=!0),r.error&&(this.error=r.error)}catch(r){r instanceof Error?this.error=r.message??"Unknown error":this.error="Unknown error",this.providers=[]}this.loading=!1},q.styles=[E`
      #header {
        text-align: center;
      }

      #header h1 {
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      #provider {
        width: 100%;
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `],ue([b()],q.prototype,"providers",2),ue([b()],q.prototype,"loading",2),ue([b()],q.prototype,"buttonState",2),ue([b()],q.prototype,"error",2),q=ue([y("umb-mfa-page")],q);var mo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,j=(r,e,t,i)=>{for(var o=i>1?void 0:i?vo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&mo(e,t,o),o},dt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Y=(r,e,t)=>(dt(r,e,"read from private field"),t?t.call(r):e.get(r)),H=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},go=(r,e,t,i)=>(dt(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),ht=(r,e,t)=>(dt(r,e,"access private method"),t),G,pt,Tr,ft,mt,kr,vt,gt,Lr,bt,Rr;let U=class extends w{constructor(){super(...arguments),H(this,pt),H(this,mt),H(this,gt),H(this,bt),this.usernameIsEmail=!1,this.allowPasswordReset=!1,this._loginState=void 0,this._loginError="",H(this,G,void 0),H(this,ft,async r=>{r.preventDefault();const e=r.target;if(!e||!e.checkValidity())return;const t=new FormData(e),i=t.get("username"),o=t.get("password"),s=t.has("persist");this._loginState="waiting";const n=await g.login({username:i,password:o,persist:s});if(this._loginError=n.error||"",this._loginState=n.error?"failed":"success",n.status===402){g.isMfaEnabled=!0,n.twoFactorView&&(g.twoFactorView=n.twoFactorView),this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"mfa"}}));return}if(n.error){this.dispatchEvent(new CustomEvent("umb-login-failed",{bubbles:!0,composed:!0,detail:n}));return}const a=g.returnPath;a&&(location.href=a),this.dispatchEvent(new CustomEvent("umb-login-success",{bubbles:!0,composed:!0,detail:n.data}))}),H(this,vt,()=>{Y(this,G)?.requestSubmit()})}get disableLocalLogin(){return g.disableLocalLogin}render(){return l`
      <header id="header">
        <h1 id="greeting">
          <umb-localize .key=${Y(this,mt,kr)}></umb-localize>
        </h1>
        <slot name="subheadline"></slot>
      </header>
      ${this.disableLocalLogin?h:l`
          <slot @slotchange=${ht(this,pt,Tr)}></slot>
          <div id="secondary-actions">
            ${Ce(g.supportsPersistLogin,()=>l`
                <uui-form-layout-item>
                  <uui-checkbox
                    name="persist"
                    .label=${p(c.localize("user_rememberMe",void 0,"Remember me"))}>
                    <umb-localize key="user_rememberMe">Remember me</umb-localize>
                  </uui-checkbox>
                </uui-form-layout-item>`)}
            ${Ce(this.allowPasswordReset,()=>l`
                  <button type="button" id="forgot-password" @click=${ht(this,bt,Rr)}>
                    <umb-localize key="login_forgottenPassword">Forgotten password?</umb-localize>
                  </button>`)}
          </div>
          <uui-button
            type="submit"
            id="umb-login-button"
            look="primary"
            @click=${Y(this,vt)}
            .label=${p(c.localize("general_login",void 0,"Login"),"Login")}
            color="default"
            .state=${this._loginState}></uui-button>

          ${ht(this,gt,Lr).call(this)}
        `}
      <umb-external-login-providers-layout .showDivider=${!this.disableLocalLogin}>
        <slot name="external"></slot>
      </umb-external-login-providers-layout>
    `}};G=new WeakMap,pt=new WeakSet,Tr=async function(){go(this,G,this.slottedElements?.find(r=>r.id==="umb-login-form")),Y(this,G)&&(Y(this,G).onsubmit=Y(this,ft))},ft=new WeakMap,mt=new WeakSet,kr=function(){return["login_greeting0","login_greeting1","login_greeting2","login_greeting3","login_greeting4","login_greeting5","login_greeting6"][new Date().getDay()]},vt=new WeakMap,gt=new WeakSet,Lr=function(){return!this._loginError||this._loginState!=="failed"?h:l`<span class="text-error text-danger">${this._loginError}</span>`},bt=new WeakSet,Rr=function(){this.dispatchEvent(new CustomEvent("umb-login-flow",{composed:!0,detail:{flow:"reset"}}))},U.styles=[E`
      :host {
        display: flex;
        flex-direction: column;
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #greeting {
        color: var(--uui-color-interactive);
        text-align: center;
        font-weight: 400;
        font-size: var(--header-font-size);
        margin: 0 0 var(--uui-size-layout-1);
        line-height: 1.2;
      }

      #umb-login-button {
        margin-top: var(--uui-size-space-4);
        width: 100%;
      }

      #forgot-password {
        cursor: pointer;
        background: none;
        border: 0;
        height: 1rem;
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        gap: var(--uui-size-space-1);
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        line-height: 1;
        font-size: 14px;
        font-family: var(--uui-font-family);
        margin-left: auto;
        margin-bottom: var(--uui-size-space-3);
      }

      #forgot-password:hover {
        color: var(--uui-color-interactive-emphasis);
      }

      .text-error {
        margin-top: var(--uui-size-space-4);
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }

      #secondary-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `],j([d({type:Boolean,attribute:"username-is-email"})],U.prototype,"usernameIsEmail",2),j([Jt({flatten:!0})],U.prototype,"slottedElements",2),j([d({type:Boolean,attribute:"allow-password-reset"})],U.prototype,"allowPasswordReset",2),j([b()],U.prototype,"_loginState",2),j([b()],U.prototype,"_loginError",2),j([b()],U.prototype,"disableLocalLogin",1),U=j([y("umb-login-page")],U);var bo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,Se=(r,e,t,i)=>{for(var o=i>1?void 0:i?wo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&bo(e,t,o),o},yo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},_o=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},$o=(r,e,t)=>(yo(r,e,"access private method"),t),wt,Mr;let le=class extends w{constructor(){super(...arguments),_o(this,wt),this.state=void 0,this.error=""}async firstUpdated(r){super.firstUpdated(r);const e=await g.getInvitedUser();if(!e.user?.id){this.error="No invited user found";return}this.invitedUser=e.user}render(){return this.invitedUser?l`
        <umb-new-password-layout
          @submit=${$o(this,wt,Mr)}
          .userId=${this.invitedUser.id}
          .userName=${this.invitedUser.name}
          .state=${this.state}
          .error=${this.error}></umb-new-password-layout>`:this.error?l`
          <umb-error-layout
            .header=${p(c.localize("general_error",void 0,"Error"))}
            .message=${this.error}></umb-error-layout>`:l`
          <umb-error-layout
            header=${p(c.localize("general_error",void 0,"Error"))}
            message=${p(c.localize("errors_defaultError",void 0,"An unknown failure has occured"))}>
          </umb-error-layout>`}};wt=new WeakSet,Mr=async function(r){r.preventDefault();const e=r.detail.password;if(!e)return;this.state="waiting";const t=await g.newInvitedUserPassword(e);if(t.error){this.error=t.error,this.state="failed";return}this.state="success",window.location.href=g.returnPath},Se([b()],le.prototype,"state",2),Se([b()],le.prototype,"error",2),Se([b()],le.prototype,"invitedUser",2),le=Se([y("umb-invite-page")],le);var Po=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,yt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Co(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Po(e,t,o),o};let ce=class extends w{constructor(){super(...arguments),this.showDivider=!0}firstUpdated(){this.slottedElements?.length?this.toggleAttribute("empty",!1):this.toggleAttribute("empty",!0)}render(){return l`
      ${this.showDivider?l`
          <div id="divider" aria-hidden="true">
            <span>${p(c.localize("general_or",void 0,"or").then(r=>r.toLocaleLowerCase()))}</span>
          </div>
        `:h}
      <div>
        <slot></slot>
      </div>
    `}};ce.styles=[E`
      :host {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
      }

      :host([empty]) {
        display: none;
      }

      slot {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-4);
      }

      #divider {
        width: calc(100% - 18px);
        margin: 0 auto;
        margin-bottom: 16px;
        text-align: center;
        z-index: 0;
        overflow: hidden;
      }

      #divider span {
        padding-inline: 10px;
        position: relative;
        color: var(--uui-color-border-emphasis);
      }

      #divider span::before,
      #divider span::after {
        content: '';
        display: block;
        width: 500px; /* Arbitrary value, just be bigger than 50% of the max width of the container */
        height: 1px;
        background-color: var(--uui-color-border);
        position: absolute;
        top: calc(50% + 1px);
      }

      #divider span::before {
        right: 100%;
      }

      #divider span::after {
        left: 100%;
      }
    `],yt([d({type:Boolean,attribute:"divider"})],ce.prototype,"showDivider",2),yt([Jt({flatten:!0})],ce.prototype,"slottedElements",2),ce=yt([y("umb-external-login-providers-layout")],ce);var Eo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,I=(r,e,t,i)=>{for(var o=i>1?void 0:i?xo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Eo(e,t,o),o},Dr=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},So=(r,e,t)=>(Dr(r,e,"read from private field"),t?t.call(r):e.get(r)),Ao=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},zo=(r,e,t,i)=>(Dr(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),Ae;let P=class extends w{constructor(){super(),this.displayName="",this.providerName="",this.userViewState="loggingIn",this.icon="icon-lock",this.buttonLook="outline",this.buttonColor="default",Ao(this,Ae,""),new URLSearchParams(window.location.search).get("logout")==="true"&&(this.userViewState="loggedOut")}set externalLoginUrl(r){const e=new URL(r,window.location.origin),t=new URLSearchParams(e.search);e.searchParams.append("redirectUrl",decodeURIComponent(t.get("returnPath")??"")),zo(this,Ae,e.pathname+e.search)}get externalLoginUrl(){return So(this,Ae)}render(){return this.customView?p(this.renderCustomView(),l`
        <uui-loader-bar></uui-loader-bar>`):this.renderDefaultView()}renderDefaultView(){return l`
      <form id="defaultView" method="post" action=${this.externalLoginUrl}>
        <uui-button
          type="submit"
          name="provider"
          .value=${this.providerName}
          .label=${p(c.localize("login_signInWith",void 0,"Sign in with").then(r=>`${r} ${this.displayName}`))}
          .look=${this.buttonLook}
          .color=${this.buttonColor}>
          ${this.displayName?l`
              <div>
                <uui-icon name=${this.icon}></uui-icon>
                <umb-localize key="login_signInWith">Sign in with</umb-localize>
                ${this.displayName}
              </div>
            `:h}
          <slot></slot>
        </uui-button>
      </form>
    `}async renderCustomView(){try{if(!this.customView)return;const r=await ut(this.customView);return typeof r=="object"&&(r.displayName=this.displayName,r.providerName=this.providerName,r.externalLoginUrl=this.externalLoginUrl,r.userViewState=this.userViewState),lt(r)}catch(r){console.group("[External login] Failed to load custom view"),console.log("Provider name",this.providerName),console.log("Element reference",this),console.log("Custom view",this.customView),console.error("Failed to load custom view:",r),console.groupEnd()}}};Ae=new WeakMap,P.styles=[E`
      #defaultView uui-button {
        width: 100%;
        --uui-button-font-weight: 400;
      }

      #defaultView uui-button div {
        /* TODO: Remove this when uui-button has setting for aligning content */
        position: absolute;
        top: 50%;
        left: 0;
        margin: auto;
        transform: translateY(-50%);
        text-align: left;
        padding-left: 15px;
      }

      #defaultView uui-icon {
				opacity: 0.85;
        padding-right: 2px;
      }

      #defaultView button {
        font-size: var(--uui-button-font-size);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-button-border-radius);
        width: 100%;
        padding: 9px;
        text-align: left;
        background-color: var(--uui-color-surface);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-2);
        box-sizing: border-box;

        line-height: 1.1; /* makes the text vertically centered */
        color: var(--uui-color-interactive);
      }

      #defaultView button:hover {
        color: var(--uui-color-interactive-emphasis);
        border-color: var(--uui-color-border-standalone);
      }
    `],I([d({attribute:"custom-view"})],P.prototype,"customView",2),I([d({attribute:"display-name"})],P.prototype,"displayName",2),I([d({attribute:"provider-name"})],P.prototype,"providerName",2),I([d({attribute:"user-view-state"})],P.prototype,"userViewState",2),I([d({attribute:"external-login-url"})],P.prototype,"externalLoginUrl",1),I([d({attribute:"icon"})],P.prototype,"icon",2),I([d({attribute:"button-look"})],P.prototype,"buttonLook",2),I([d({attribute:"button-color"})],P.prototype,"buttonColor",2),P=I([y("umb-external-login-provider")],P);var Oo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,L=(r,e,t,i)=>{for(var o=i>1?void 0:i?Uo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Oo(e,t,o),o},Io=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Nr=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Vr=(r,e,t)=>(Io(r,e,"access private method"),t),_t,Wr,$t,qr;let S=class extends w{constructor(){super(...arguments),Nr(this,_t),Nr(this,$t),this.state=void 0,this.error=""}async firstUpdated(r){if(super.firstUpdated(r),this.userId){const e=await g.getPasswordConfig(this.userId);this.passwordConfig=e.data}}renderHeader(){return this.userName?l`
        <h1>Hi, ${this.userName}</h1>
        <span>
          <umb-localize key="user_userinviteWelcomeMessage">
            Welcome to Umbraco! Just need to get your password setup and then you're good to go
          </umb-localize>
        </span>
      `:l`
        <h1>
          <umb-localize key="user_newPassword">New password</umb-localize>
        </h1>
        <span>
            <umb-localize key="login_setPasswordInstruction">Please provide a new password.</umb-localize>
        </span>
      `}render(){return l`
      <uui-form>
        <form id="LoginForm" name="login" @submit=${Vr(this,_t,Wr)}>
          <header id="header">${this.renderHeader()}</header>
          <uui-form-layout-item>
            <uui-label id="passwordLabel" for="password" slot="label" required>
              <umb-localize key="user_newPassword">New password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              .label=${p(c.localize("user_newPassword",void 0,"New password"))}
              required
              required-message=${p(c.localize("user_passwordIsBlank",void 0,"Your new password cannot be blank!"))}></uui-input-password>
          </uui-form-layout-item>

          <uui-form-layout-item>
            <uui-label id="confirmPasswordLabel" for="confirmPassword" slot="label" required>
              <umb-localize key="user_confirmNewPassword">Confirm new password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="new-password"
              .label=${p(c.localize("user_confirmNewPassword",void 0,"Confirm new password"))}
              required
              required-message=${p(c.localize("general_required",void 0,"Required"))}></uui-input-password>
          </uui-form-layout-item>

          ${Vr(this,$t,qr).call(this)}

          <uui-button
            type="submit"
            label=${p(c.localize("general_continue",void 0,"Continue"))}
            look="primary"
            color="default"
            .state=${this.state}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `}};_t=new WeakSet,Wr=async function(r){if(r.preventDefault(),!this.passwordConfig)return;const e=r.target;if(this.passwordElement.setCustomValidity(""),this.confirmPasswordElement.setCustomValidity(""),!e||!e.checkValidity())return;const t=new FormData(e),i=t.get("password"),o=t.get("confirmPassword");let s=!1;if(this.passwordConfig.minPasswordLength>0&&i.length<this.passwordConfig.minPasswordLength&&(s=!0),this.passwordConfig.minNonAlphaNumericChars>0&&i.replace(/[a-zA-Z0-9]/g,"").length<this.passwordConfig?.minNonAlphaNumericChars&&(s=!0),s){const n=await c.localize("errorHandling_errorInPasswordFormat",[this.passwordConfig.minPasswordLength,this.passwordConfig.minNonAlphaNumericChars],"The password doesn't meet the minimum requirements!");this.passwordElement.setCustomValidity(n);return}if(i!==o){const n=await c.localize("user_passwordMismatch",void 0,"The confirmed password doesn't match the new password!");this.confirmPasswordElement.setCustomValidity(n);return}this.dispatchEvent(new CustomEvent("submit",{detail:{password:i}}))},$t=new WeakSet,qr=function(){return!this.error||this.state!=="failed"?h:l`<span class="text-danger">${this.error}</span>`},S.styles=[E`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `],L([De("#password")],S.prototype,"passwordElement",2),L([De("#confirmPassword")],S.prototype,"confirmPasswordElement",2),L([d()],S.prototype,"state",2),L([d()],S.prototype,"error",2),L([d()],S.prototype,"userId",2),L([d()],S.prototype,"userName",2),L([b()],S.prototype,"passwordConfig",2),S=L([y("umb-new-password-layout")],S);var To=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,Pt=(r,e,t,i)=>{for(var o=i>1?void 0:i?ko(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&To(e,t,o),o};let de=class extends w{constructor(){super(...arguments),this.header="",this.message=""}render(){return l`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>

      <umb-back-to-login-button></umb-back-to-login-button>

      <slot></slot>
    `}};de.styles=[E`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `],Pt([d({type:String})],de.prototype,"header",2),Pt([d({type:String})],de.prototype,"message",2),de=Pt([y("umb-confirmation-layout")],de);var Lo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Ct=(r,e,t,i)=>{for(var o=i>1?void 0:i?Ro(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Lo(e,t,o),o};let he=class extends w{constructor(){super(...arguments),this.header="",this.message=""}render(){return l`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>
      <slot></slot>
      <umb-back-to-login-button></umb-back-to-login-button>
    `}};he.styles=[E`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      ::slotted(uui-button) {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `],Ct([d({type:String})],he.prototype,"header",2),Ct([d({type:String})],he.prototype,"message",2),he=Ct([y("umb-error-layout")],he);var Mo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,No=(r,e,t,i)=>{for(var o=i>1?void 0:i?Do(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Mo(e,t,o),o};let Et=class extends X.UUIInputElement{firstUpdated(){const r=this.querySelector("input");r?.removeAttribute("id"),r?.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),r?.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}getFormElement(){const r=this.querySelector("input");if(!r)throw new Error("Form element not found");return r}createRenderRoot(){return this}};Et.styles=[...X.UUIInputElement.styles],Et=No([y("umb-login-input")],Et);var Vo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,qo=(r,e,t,i)=>{for(var o=i>1?void 0:i?Wo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Vo(e,t,o),o};class jo extends X.UUIIconRegistry{acceptIcon(e){if(e.startsWith("{{")&&e.endsWith("}}"))return!1;const t=this.provideIcon(e);return this.#r().subscribe(i=>{i[e]?t.svg=i[e].replace("<svg",'<svg fill="currentColor"'):console.warn(`Icon ${e} not found`)}),!0}#e=!1;#t=new hr(1);#r(){return this.#e||(this.#e=!0,fetch("backoffice/umbracoapi/icon/geticons").then(e=>{if(!e.ok)throw new Error("Could not fetch icons");return e.json()}).then(e=>{this.#t.next(e),this.#t.complete()})),this.#t.asObservable()}}let jr=class extends X.UUIIconRegistryElement{constructor(){super(),new X.UUIIconRegistryEssential().attach(this),this.registry=new jo}createRenderRoot(){return this}};jr=qo([y("umb-backoffice-icon-registry")],jr);var Ho=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var o=i>1?void 0:i?Fo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Ho(e,t,o),o},xt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},R=(r,e,t)=>(xt(r,e,"read from private field"),t?t.call(r):e.get(r)),St=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Hr=(r,e,t,i)=>(xt(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),Fr=(r,e,t)=>(xt(r,e,"access private method"),t),Z,M,Oe,At;let pe=class extends w{constructor(){super(...arguments),St(this,Oe),this.component=null,St(this,Z,void 0),St(this,M,"")}set customView(r){Hr(this,M,r),Fr(this,Oe,At).call(this)}get customView(){return R(this,M)}set args(r){Hr(this,Z,r),Fr(this,Oe,At).call(this)}get args(){return R(this,Z)}render(){return p(this.component)}};Z=new WeakMap,M=new WeakMap,Oe=new WeakSet,At=async function(){if(!R(this,M)||!R(this,M).endsWith(".js")&&!R(this,M).endsWith(".html"))return;const r=await ut(R(this,M));R(this,Z)&&Object.entries(R(this,Z)).forEach(([e,t])=>{r[e]=t}),this.component=lt(r)},ze([d({attribute:"custom-view"})],pe.prototype,"customView",1),ze([d({type:Object,attribute:"args"})],pe.prototype,"args",1),ze([b()],pe.prototype,"component",2),pe=ze([y("umb-custom-view")],pe);var Bo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,zt=(r,e,t,i)=>{for(var o=i>1?void 0:i?Jo(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Bo(e,t,o),o},Yo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Go=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Zo=(r,e,t)=>(Yo(r,e,"access private method"),t),Ot,Br;let Ue=class extends w{constructor(){super(...arguments),Go(this,Ot),this.value=""}connectedCallback(){super.connectedCallback(),Zo(this,Ot,Br).call(this)}async localize(r,e){return c.localize(r,void 0,e)}render(){return this.value?l`${Ur(this.value)}`:l`<slot></slot>`}};Ot=new WeakSet,Br=async function(){try{this.value=await this.localize(this.key)}catch(r){console.error("Failed to localize key:",this.key,r)}},zt([d({type:String})],Ue.prototype,"key",2),zt([b()],Ue.prototype,"value",2),Ue=zt([y("umb-localize")],Ue)})(uui);
//# sourceMappingURL=login.iife.js.map

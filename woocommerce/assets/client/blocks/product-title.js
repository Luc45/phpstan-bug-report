(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[2105],{9618:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let l={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};l={...l,align:{type:"string"}};const n=l},6510:(e,t,o)=>{"use strict";o.d(t,{A:()=>u});var l=o(1609),n=o(851),r=o(2796),c=o(1616),s=o(7702),a=o(9499),i=o(2150);o(7128);const d=({children:e,headingLevel:t,elementType:o=`h${t}`,...n})=>(0,l.createElement)(o,{...n},e),u=(0,c.withProductDataContext)((e=>{const{className:t,headingLevel:o=2,showProductLink:c=!0,linkTarget:u,align:m}=e,p=(0,i.p)(e),{parentClassName:y}=(0,r.useInnerBlockLayoutContext)(),{product:v}=(0,r.useProductDataContext)(),{dispatchStoreEvent:g}=(0,a.y)();return v.id?(0,l.createElement)(d,{headingLevel:o,className:(0,n.A)(t,p.className,"wc-block-components-product-title",{[`${y}__product-title`]:y,[`wc-block-components-product-title--align-${m}`]:m}),style:p.style},(0,l.createElement)(s.A,{disabled:!c,name:v.name,permalink:v.permalink,target:u,onClick:()=>{g("product-view-link",{product:v})}})):(0,l.createElement)(d,{headingLevel:o,className:(0,n.A)(t,p.className,"wc-block-components-product-title",{[`${y}__product-title`]:y,[`wc-block-components-product-title--align-${m}`]:m}),style:p.style})}))},3303:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var l=o(1616),n=o(6510),r=o(9618);const c=(0,l.withFilteredAttributes)(r.A)(n.A)},7702:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var l=o(1609),n=o(8537),r=o(851);o(6625);const c=({className:e="",disabled:t=!1,name:o,permalink:c="",target:s,rel:a,style:i,onClick:d,disabledTagName:u="span",...m})=>{const p=(0,r.A)("wc-block-components-product-name",e),y=u,v=(0,n.decodeEntities)(o);if(t){const e=m;return(0,l.createElement)(y,{className:p,...e,dangerouslySetInnerHTML:{__html:v}})}return(0,l.createElement)("a",{className:p,href:c,target:s,...m,dangerouslySetInnerHTML:{__html:v},style:i})}},9499:(e,t,o)=>{"use strict";o.d(t,{y:()=>c});var l=o(2619),n=o(7143),r=o(6087);const c=()=>({dispatchStoreEvent:(0,r.useCallback)(((e,t={})=>{try{(0,l.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,r.useCallback)(((e,t={})=>{try{(0,l.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,n.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},2150:(e,t,o)=>{"use strict";o.d(t,{p:()=>s});var l=o(851),n=o(3993),r=o(3924),c=o(104);const s=e=>{const t=(e=>{const t=(0,n.isObject)(e)?e:{style:{}};let o=t.style;return(0,n.isString)(o)&&(o=JSON.parse(o)||{}),(0,n.isObject)(o)||(o={}),{...t,style:o}})(e),o=(0,c.BK)(t),s=(0,c.aR)(t),a=(0,c.fo)(t),i=(0,r.x)(t);return{className:(0,l.A)(i.className,o.className,s.className,a.className),style:{...i.style,...o.style,...s.style,...a.style}}}},3924:(e,t,o)=>{"use strict";o.d(t,{x:()=>n});var l=o(3993);const n=e=>{const t=(0,l.isObject)(e.style.typography)?e.style.typography:{},o=(0,l.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},104:(e,t,o)=>{"use strict";o.d(t,{BK:()=>i,aR:()=>d,fo:()=>u});var l=o(851),n=o(1194),r=o(9786),c=o(3993);function s(e={}){const t={};return(0,r.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function a(e,t){return e&&t?`has-${(0,n.c)(t)}-${e}`:""}function i(e){var t,o,n,r,i,d;const{backgroundColor:u,textColor:m,gradient:p,style:y}=e,v=a("background-color",u),g=a("color",m),k=function(e){if(e)return`has-${e}-gradient-background`}(p),h=k||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:(0,l.A)(g,k,{[v]:!h&&!!v,"has-text-color":m||(null==y||null===(o=y.color)||void 0===o?void 0:o.text),"has-background":u||(null==y||null===(n=y.color)||void 0===n?void 0:n.background)||p||(null==y||null===(r=y.color)||void 0===r?void 0:r.gradient),"has-link-color":(0,c.isObject)(null==y||null===(i=y.elements)||void 0===i?void 0:i.link)?null==y||null===(d=y.elements)||void 0===d||null===(d=d.link)||void 0===d?void 0:d.color:void 0}),style:s({color:(null==y?void 0:y.color)||{}})}}function d(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:n}=e,r=o?a("border-color",o):"";return(0,l.A)({"has-border-color":!!o||!(null==n||null===(t=n.border)||void 0===t||!t.color),[r]:!!r})}(e),style:s({border:o})}}function u(e){var t;return{className:void 0,style:s({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},7128:()=>{},6625:()=>{}}]);
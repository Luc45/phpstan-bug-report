import*as e from"@wordpress/interactivity";var t={984:()=>{},438:e=>{e.exports=import("@wordpress/interactivity-router")}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const t=(c={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},i={},r.d(i,c),i),o=(e,{bubbles:t=!1,cancelable:o=!1,element:r,detail:n={}})=>{if(!CustomEvent)return;r||(r=document.body);const c=new CustomEvent(e,{bubbles:t,cancelable:o,detail:n});r.dispatchEvent(c)},n=e=>{o("wc-blocks_product_list_rendered",{bubbles:!0,cancelable:!0,detail:e})};var c,i;function l(e){return null!==e&&e instanceof window.HTMLAnchorElement&&!!e.href&&(!e.target||"_self"===e.target)&&e.origin===window.location.origin}r(984);(0,t.store)("woocommerce/product-collection",{actions:{*navigate(e){const{ref:o}=(0,t.getElement)();if(l(o)&&function(e){return!(0!==e.button||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented)}(e)){e.preventDefault();const c=(0,t.getContext)(),i=o.closest("[data-wp-router-region]")?.getAttribute("data-wp-router-region"),{actions:l}=yield Promise.resolve().then(r.bind(r,438));yield l.navigate(o.href),c.isPrefetchNextOrPreviousLink=o.href;const s=document.querySelector(`[data-wp-router-region=${i}] .wc-block-product-template .wc-block-product a`);s?.focus(),n({collection:c.collection})}},*prefetchOnHover(){const{ref:e}=(0,t.getElement)();if(l(e)){const{actions:t}=yield Promise.resolve().then(r.bind(r,438));yield t.prefetch(e.href)}},*viewProduct(){const{collection:e,productId:r}=(0,t.getContext)();r&&o("wc-blocks_viewed_product",{bubbles:!0,cancelable:!0,detail:{collection:e,productId:r}})}},callbacks:{*prefetch(){const{ref:e}=(0,t.getElement)(),o=(0,t.getContext)();if(l(e)&&o.isPrefetchNextOrPreviousLink){const{actions:t}=yield Promise.resolve().then(r.bind(r,438));yield t.prefetch(e.href)}},*onRender(){const{collection:e}=(0,t.getContext)();n({collection:e})}}})})();
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[512],{5017:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(3645),r=l.n(o)()((function(e){return e[1]}));r.push([e.id,".blog-card-content[data-v-1790c559]{background:#f7f8fa;padding:20px}.blog-card-date[data-v-1790c559]{display:inline-block;font-size:14px;line-height:1.437}.blog-card-title[data-v-1790c559]{-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box;font-size:18px;font-weight:500;line-height:1.476;margin:4px 0 12px;overflow:hidden}.style--two.blog-card-content[data-v-1790c559]{background:#fff}",""]);const n=r},512:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var o=l(118),r={class:"blog-card d-inline-flex flex-column"},n=["href"],a={key:1,class:"style--two blog-card-content d-flex flex-column align-items-start"},c={class:"blog-card-date"},s={class:"blog-card-title"},i=["href"],d=["href"],p={key:0},b={key:1},g={key:2,class:"blog-card-content d-flex flex-column align-items-start"},u={class:"blog-card-date"},m={class:"blog-card-title"},f=["href"],y=["href"],v={key:0},k={key:1};const h={name:"BlogCard",components:{VLazyImage:l(4176).Z},props:{blog:{type:Object,required:!0},blogOptionStyle:{default:null,type:Object,required:!0},styleTwo:{type:Boolean,default:!1}}};var A=l(3379),O=l.n(A),B=l(5017),S={insert:"head",singleton:!1};O()(B.Z,S);B.Z.locals;const w=(0,l(3744).Z)(h,[["render",function(e,t,l,h,A,O){var B=(0,o.resolveComponent)("v-lazy-image");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[null!=l.blog.image?((0,o.openBlock)(),(0,o.createElementBlock)("a",{key:0,class:"blog-card-image d-block",href:"/blog/".concat(l.blog.permalink)},[(0,o.createVNode)(B,{src:l.blog.image,alt:l.blog.title},null,8,["src","alt"])],8,n)):(0,o.createCommentVNode)("",!0),l.styleTwo?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("span",c,(0,o.toDisplayString)(l.blog.date),1),(0,o.createElementVNode)("h3",s,[(0,o.createElementVNode)("a",{href:"/blog/".concat(l.blog.permalink)},(0,o.toDisplayString)(l.blog.title),9,i)]),(0,o.createElementVNode)("a",{class:"btn-underline",href:"/blog/".concat(l.blog.permalink)},[l.blogOptionStyle&&1==l.blogOptionStyle.custom_blog&&"default"!=l.blogOptionStyle.read_more_text_setting?((0,o.openBlock)(),(0,o.createElementBlock)("span",p,(0,o.toDisplayString)(l.blogOptionStyle.read_more_text),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",b,(0,o.toDisplayString)(e.$t("Read more")),1))],8,d)])):((0,o.openBlock)(),(0,o.createElementBlock)("div",g,[(0,o.createElementVNode)("span",u,(0,o.toDisplayString)(l.blog.date),1),(0,o.createElementVNode)("h3",m,[(0,o.createElementVNode)("a",{href:"/blog/".concat(l.blog.permalink)},(0,o.toDisplayString)(l.blog.title),9,f)]),(0,o.createElementVNode)("a",{class:"btn-underline",href:"/blog/".concat(l.blog.permalink)},[l.blogOptionStyle&&1==l.blogOptionStyle.custom_blog&&"default"!=l.blogOptionStyle.read_more_text_setting?((0,o.openBlock)(),(0,o.createElementBlock)("span",v,(0,o.toDisplayString)(l.blogOptionStyle.read_more_text),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",k,(0,o.toDisplayString)(e.$t("Read more")),1))],8,y)]))])}],["__scopeId","data-v-1790c559"]])},4176:(e,t,l)=>{l.d(t,{Z:()=>p});var o=l(118),r=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,t,l)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,p={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,emit:r}){const p=(0,o.ref)(null),b=(0,o.reactive)({observer:null,intersected:!1,loaded:!1}),g=(0,o.computed)((()=>b.intersected&&e.src?e.src:e.srcPlaceholder)),u=(0,o.computed)((()=>!(!b.intersected||!e.srcset)&&e.srcset)),m=()=>{p.value&&p.value.getAttribute("src")!==e.srcPlaceholder&&(b.loaded=!0,r("load",p.value))},f=()=>r("error",p.value);return(0,o.onMounted)((()=>{"IntersectionObserver"in window&&(b.observer=new IntersectionObserver((e=>{e[0].isIntersecting&&(b.intersected=!0,b.observer.disconnect(),r("intersect"))}),e.intersectionOptions),b.observer.observe(p.value))})),(0,o.onBeforeUnmount)((()=>{"IntersectionObserver"in window&&b.observer&&b.observer.disconnect()})),()=>{const r=(0,o.h)("img",(y=((e,t)=>{for(var l in t||(t={}))s.call(t,l)&&d(e,l,t[l]);if(c)for(var l of c(t))i.call(t,l)&&d(e,l,t[l]);return e})({ref:p,src:g.value,srcset:u.value||null},t),v={class:[t.class,"v-lazy-image",{"v-lazy-image-loaded":b.loaded}],onLoad:m,onError:f},n(y,a(v))));var y,v;return e.usePicture?(0,o.h)("picture",{ref:p,onLoad:m},b.intersected?[l.default,r]:[r]):r}}}}}]);
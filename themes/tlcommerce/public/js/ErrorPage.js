"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7098],{432:(e,t,n)=>{n.d(t,{Z:()=>s});var c=n(3645),l=n.n(c)()((function(e){return e[1]}));l.push([e.id,".content-404{padding:100px}@media (max-width:575px){.content-404{padding:50px}}",""]);const s=l},4419:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var c=n(118),l={class:"min-vh-100 vw-100 d-flex align-items-center justify-content-center bg-light"},s={class:"container"},a={class:"text-danger"},o={key:0},r={key:1},i={key:0,class:"img-404 mt-30 mb-30"},m=[(0,c.createElementVNode)("img",{src:"/public/images/404.png",alt:"404 Image"},null,-1)],u={key:1,class:"img-404 mt-30 mb-30"},d=["src"],g=(0,c.createElementVNode)("strong",{class:"pr-2"},"Back to Home",-1),p=(0,c.createElementVNode)("i",{class:"fa fa-arrow-right"},null,-1);var y=n(9669),h=n.n(y);const k={layout:"empty",head:function(){return{title:"404"}},data:function(){return{style404:{},scTimer:0,scY:0}},mounted:function(){this.ge404Style()},methods:{ge404Style:function(){var e=this;h().get("/api/theme/tlcommerce/v1/get-404-page-style").then((function(t){t.data.success&&(e.style404=t.data.style)})).catch((function(t){e.style404={}}))}}};var f=n(3379),v=n.n(f),E=n(432),B={insert:"head",singleton:!1};v()(E.Z,B);E.Z.locals;const b=(0,n(3744).Z)(k,[["render",function(e,t,n,y,h,k){var f=(0,c.resolveComponent)("router-link");return(0,c.openBlock)(),(0,c.createElementBlock)("div",l,[(0,c.createElementVNode)("div",s,[(0,c.createElementVNode)("div",{class:(0,c.normalizeClass)(1==h.style404.custom_404?"content-404 bg-white text-center custom-style":"content-404 bg-white text-center")},[(0,c.createElementVNode)("h1",a,[1!=h.style404.custom_404?((0,c.openBlock)(),(0,c.createElementBlock)("span",o,"Page Not Found")):((0,c.openBlock)(),(0,c.createElementBlock)("span",r,(0,c.toDisplayString)(h.style404.page_404_title),1))]),1!=h.style404.custom_404?((0,c.openBlock)(),(0,c.createElementBlock)("div",i,m)):((0,c.openBlock)(),(0,c.createElementBlock)("div",u,[(0,c.createElementVNode)("img",{src:h.style404.image,alt:"404 Image"},null,8,d)])),(0,c.createVNode)(f,{to:"/",class:(0,c.normalizeClass)(1==h.style404.custom_404?"custom-button-style":"")},{default:(0,c.withCtx)((function(){return[g,p]})),_:1},8,["class"])],2)])])}]])}}]);
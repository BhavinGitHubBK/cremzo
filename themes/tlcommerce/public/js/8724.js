"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8724],{8724:(e,o,t)=>{t.r(o),t.d(o,{default:()=>i});var c=t(118),n={key:0},s={class:"row"};var l=t(9669),r=t.n(l);const a={name:"BlogSection",components:{BlogCard:(0,c.defineAsyncComponent)((function(){return t.e(512).then(t.bind(t,512))}))},props:{properties:{type:Object,required:{}}},data:function(){return{blogs:[],success:!1,blog_colum:""}},mounted:function(){var e;this.getSectionBlogs(),this.blog_colum=null!==(e=this.properties.blog_colum)&&void 0!==e?e:"col-6 col-lg-3"},methods:{getSectionBlogs:function(){var e=this;r().post("/api/theme/tlcommerce/v1/home-page-blogs-list",{quantity:this.properties.count,content:this.properties.type,category:this.properties.category}).then((function(o){o.data.success?(e.blogs=o.data.data,e.success=!0):e.success=!1})).catch((function(o){e.success=!1}))}}};const i=(0,t(3744).Z)(a,[["render",function(e,o,t,l,r,a){var i=(0,c.resolveComponent)("blog-card");return r.success?((0,c.openBlock)(),(0,c.createElementBlock)("section",n,[(0,c.createElementVNode)("div",s,[((0,c.openBlock)(!0),(0,c.createElementBlock)(c.Fragment,null,(0,c.renderList)(r.blogs,(function(e,o){return(0,c.openBlock)(),(0,c.createElementBlock)("div",{class:(0,c.normalizeClass)(r.blog_colum),key:"blog-".concat(o)},[(0,c.createVNode)(i,{blog:e,class:"mb-30"},null,8,["blog"])],2)})),128))])])):(0,c.createCommentVNode)("",!0)}]])}}]);
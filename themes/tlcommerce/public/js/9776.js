"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9776],{8577:(o,e,t)=>{t.d(e,{Z:()=>i});var r=t(3645),n=t.n(r)()((function(o){return o[1]}));n.push([o.id,".blog-section-btn[data-v-1af81ba8]{background-color:var(--button-background-color);border:var(--button-border);border-color:var(--button-border-color);color:var(--button-color)}.blog-section-btn[data-v-1af81ba8]:hover{background-color:var(--button-hover-bg-color);border-color:var(--button-hover-border-color);color:var(--button-hover-color)}.blog-section[data-v-1af81ba8]{background-color:var(--section-background-color);background-image:var(--section-background-image);background-position:var(--section-background-image-position);background-repeat:var(--section-background-image-repeat);background-size:var(--section-background-image-size);margin:var(--section-margin)!important;padding:var(--section-padding)!important}",""]);const i=n},9776:(o,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(118),n={class:"custom-container2"},i={class:"row align-items-center"},s={class:"col-md-6"},c={class:"col-md-6 text-md-end"},a={class:"row"};var l=t(9669),p=t.n(l);const b={name:"BlogSection",components:{BlogCard:(0,r.defineAsyncComponent)((function(){return t.e(512).then(t.bind(t,512))}))},props:{content:{type:String,required:!1},properties:{type:Array,required:!1}},computed:{cssVars:function(){return{"--section-background-color":this.properties.bg_color,"--section-background-image":"url(".concat(this.properties.bg_image,")"),"--section-background-image-position":this.properties.background_position,"--section-background-image-size":this.properties.background_size,"--section-background-image-repeat":this.properties.background_repeat,"--section-padding":"".concat(this.properties.padding_top+"px "+this.properties.padding_right+"px "+this.properties.padding_bottom+"px "+this.properties.padding_left+"px"),"--section-margin":"".concat(this.properties.margin_top+"px "+this.properties.margin_right+"px "+this.properties.margin_bottom+"px "+this.properties.margin_left+"px"),"--button-color":this.properties.btn_color,"--button-background-color":this.properties.btn_bg_color,"--button-border":null!=this.properties.btn_border?this.properties.btn_border+"px solid":"0px","--button-border-color":this.properties.btn_border_color,"--button-hover-border-color":this.properties.btn_border_hover_color,"--button-hover-bg-color":this.properties.btn_bg_hover_color,"--button-hover-color":this.properties.btn_hover_color}}},data:function(){return{blogs:[],success:!1,section_title:this.$t(this.properties.title)}},mounted:function(){this.getSectionBlogs()},methods:{getSectionBlogs:function(){var o=this;p().post("/api/theme/tlcommerce/v1/home-page-blogs-list",{quantity:this.properties.number_of_blogs,content:this.properties.content,category:this.properties.category}).then((function(e){e.data.success?(o.blogs=e.data.data,o.success=!0):o.success=!1})).catch((function(e){o.success=!1}))}}};var d=t(3379),g=t.n(d),u=t(8577),m={insert:"head",singleton:!1};g()(u.Z,m);u.Z.locals;const h=(0,t(3744).Z)(b,[["render",function(o,e,t,l,p,b){var d=(0,r.resolveComponent)("section-title"),g=(0,r.resolveComponent)("router-link"),u=(0,r.resolveComponent)("blog-card");return p.success?((0,r.openBlock)(),(0,r.createElementBlock)("section",{key:0,style:(0,r.normalizeStyle)(b.cssVars),class:"pb-15 pt-15 blog-section home-page-section"},[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",s,[(0,r.createVNode)(d,{class:"mb-30",title:p.section_title,titleColor:t.properties.title_color},null,8,["title","titleColor"])]),(0,r.createElementVNode)("div",c,[(0,r.createVNode)(g,{class:"btn btn-sm rounded-0 mb-30 blog-section-btn",to:"/blog"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(null!=t.properties.btn_title?t.properties.btn_title:o.$t("View All")),1)]})),_:1})])]),(0,r.createElementVNode)("div",a,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(p.blogs,(function(o,e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"col-lg-3 col-6",key:"blog-".concat(e)},[(0,r.createVNode)(u,{blog:o,class:"mb-30"},null,8,["blog"])])})),128))])])],4)):(0,r.createCommentVNode)("",!0)}],["__scopeId","data-v-1af81ba8"]])}}]);
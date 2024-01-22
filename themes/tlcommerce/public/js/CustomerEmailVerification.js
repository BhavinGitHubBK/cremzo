"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1085,3803],{425:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".page-header[data-v-3ef2a2bd]{padding:16px 0}.fs-20[data-v-3ef2a2bd]{font-size:20px!important}",""]);const a=o},3803:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(118),o={class:"custom-container2"},a={class:"align-items-center row"},i={key:0,class:"col-lg-6"},c={key:1,class:"col-lg-6 d-flex justify-content-lg-end"},s={key:2,class:"col-lg-6"};var l=r(8549);const d={name:"PageHeader",components:{CBreadcrumb:l.fj,CBreadcrumbItem:l.Sd},props:{title:{type:String,default:""},whiteBg:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}},small:{type:Boolean,default:!1}}};var u=r(3379),m=r.n(u),p=r(425),f={insert:"head",singleton:!1};m()(p.Z,f);p.Z.locals;const h=(0,r(3744).Z)(d,[["render",function(e,t,r,l,d,u){var m=(0,n.resolveComponent)("CBreadcrumbItem"),p=(0,n.resolveComponent)("CBreadcrumb");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["page-header bg-light",{"white-box":r.whiteBg}])},[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[r.title?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[r.title?((0,n.openBlock)(),(0,n.createElementBlock)("h2",{key:0,class:(0,n.normalizeClass)(["fs-20 mb-lg-0 page-title",{small:r.small}])},(0,n.toDisplayString)(r.title),3)):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0),r.title?((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createVNode)(p,{style:{"--cui-breadcrumb-divider":"'>'"}},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.items,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(m,{href:e.href,class:(0,n.normalizeClass)({active:e.active}),key:e},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.text),1)]})),_:2},1032,["href","class"])})),128))]})),_:1})])):((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createVNode)(p,{style:{"--cui-breadcrumb-divider":"'>'"}},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.items,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(m,{href:e.href,class:(0,n.normalizeClass)({active:e.active}),key:e},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.text),1)]})),_:2},1032,["href","class"])})),128))]})),_:1})]))])])],2)}],["__scopeId","data-v-3ef2a2bd"]])},888:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(118),o={class:""},a={class:"pt-60 pb-60 light-bg"},i={class:"custom-container2"},c={class:"loginForm white-box px-3 py-4 p-md-5"},s={key:0};var l=r(3803),d=r(8549),u=r(9669),m=r.n(u);const p={name:"CustomerEmailVerification",components:{PageHeader:l.default,CSpinner:d.z6},data:function(){return{bItems:[{text:this.$t("Home"),href:"/"},{text:this.$t("Email Verification"),active:!0}],processing:!1}},computed:{identifier:function(){return this.$route.query.u||null}},mounted:function(){this.verifyCustomerEmail(),document.title=this.$t("Email Verification")},methods:{verifyCustomerEmail:function(){var e=this;null!=this.identifier?(this.processing=!0,m().post("/api/v1/ecommerce-core/auth/verify-customer-email",{identifier:this.identifier}).then((function(t){t.data.success?(e.processing=!0,e.$toast.success(e.$t("Email verification successful")),e.$router.push("/login")):(e.processing=!1,e.$toast.error(e.$t("Invalid request")),e.$router.push("/"))})).catch((function(t){e.processing=!1,e.$toast.error(e.$t("Invalid request")),e.$router.push("/")}))):this.$router.push("PageNotExist")}}};const f=(0,r(3744).Z)(p,[["render",function(e,t,r,l,d,u){var m=(0,n.resolveComponent)("page-header"),p=(0,n.resolveComponent)("CSpinner");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createVNode)(m,{class:"pt-3 pb-3",items:d.bItems},null,8,["items"]),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",c,[d.processing?((0,n.openBlock)(),(0,n.createElementBlock)("a",s,[(0,n.createVNode)(p,{component:"span",size:"sm","aria-hidden":"true"}),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.$t("verify your email, please wait"))+"... ",1)])):(0,n.createCommentVNode)("",!0)])])])])}]])}}]);
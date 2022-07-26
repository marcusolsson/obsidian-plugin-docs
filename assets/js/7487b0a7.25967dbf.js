"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[1792],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=l,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(83117),l=(a(67294),a(3905));const r={},o="Setting",s={unversionedId:"api/classes/Setting",id:"api/classes/Setting",title:"Setting",description:"Constructor",source:"@site/docs/api/classes/Setting.md",sourceDirName:"api/classes",slug:"/api/classes/Setting",permalink:"/obsidian-plugin-docs/api/classes/Setting",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Setting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SearchComponent",permalink:"/obsidian-plugin-docs/api/classes/SearchComponent"},next:{title:"SettingTab",permalink:"/obsidian-plugin-docs/api/classes/SettingTab"}},d={},i=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"settingEl",id:"settingel",level:3},{value:"infoEl",id:"infoel",level:3},{value:"nameEl",id:"nameel",level:3},{value:"descEl",id:"descel",level:3},{value:"controlEl",id:"controlel",level:3},{value:"components",id:"components",level:3},{value:"Methods",id:"methods",level:2},{value:"setName",id:"setname",level:3},{value:"setDesc",id:"setdesc",level:3},{value:"setClass",id:"setclass",level:3},{value:"setTooltip",id:"settooltip",level:3},{value:"setHeading",id:"setheading",level:3},{value:"setDisabled",id:"setdisabled",level:3},{value:"addButton",id:"addbutton",level:3},{value:"addExtraButton",id:"addextrabutton",level:3},{value:"addToggle",id:"addtoggle",level:3},{value:"addText",id:"addtext",level:3},{value:"addSearch",id:"addsearch",level:3},{value:"addTextArea",id:"addtextarea",level:3},{value:"addMomentFormat",id:"addmomentformat",level:3},{value:"addDropdown",id:"adddropdown",level:3},{value:"addSlider",id:"addslider",level:3},{value:"then",id:"then",level:3},{value:"clear",id:"clear",level:3}],c={toc:i};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setting"},"Setting"),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(containerEl: HTMLElement);\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"settingel"},"settingEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"settingEl: HTMLElement\n")),(0,l.kt)("h3",{id:"infoel"},"infoEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"infoEl: HTMLElement\n")),(0,l.kt)("h3",{id:"nameel"},"nameEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"nameEl: HTMLElement\n")),(0,l.kt)("h3",{id:"descel"},"descEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"descEl: HTMLElement\n")),(0,l.kt)("h3",{id:"controlel"},"controlEl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"controlEl: HTMLElement\n")),(0,l.kt)("h3",{id:"components"},"components"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"components: BaseComponent[]\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"setname"},"setName"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setName(name: string | DocumentFragment): this;\n")),(0,l.kt)("h3",{id:"setdesc"},"setDesc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setDesc(desc: string | DocumentFragment): this;\n")),(0,l.kt)("h3",{id:"setclass"},"setClass"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setClass(cls: string): this;\n")),(0,l.kt)("h3",{id:"settooltip"},"setTooltip"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setTooltip(tooltip: string): this;\n")),(0,l.kt)("h3",{id:"setheading"},"setHeading"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setHeading(): this;\n")),(0,l.kt)("h3",{id:"setdisabled"},"setDisabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"setDisabled(disabled: boolean): this;\n")),(0,l.kt)("h3",{id:"addbutton"},"addButton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addButton(cb: (component: ButtonComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addextrabutton"},"addExtraButton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addExtraButton(cb: (component: ExtraButtonComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addtoggle"},"addToggle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addToggle(cb: (component: ToggleComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addtext"},"addText"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addText(cb: (component: TextComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addsearch"},"addSearch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addSearch(cb: (component: SearchComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addtextarea"},"addTextArea"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addTextArea(cb: (component: TextAreaComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addmomentformat"},"addMomentFormat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addMomentFormat(cb: (component: MomentFormatComponent) => any): this;\n")),(0,l.kt)("h3",{id:"adddropdown"},"addDropdown"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addDropdown(cb: (component: DropdownComponent) => any): this;\n")),(0,l.kt)("h3",{id:"addslider"},"addSlider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addSlider(cb: (component: SliderComponent) => any): this;\n")),(0,l.kt)("h3",{id:"then"},"then"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"then(cb: (setting: this) => any): this;\n")),(0,l.kt)("p",null,"Facilitates chaining"),(0,l.kt)("h3",{id:"clear"},"clear"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"clear(): this;\n")))}p.isMDXComponent=!0}}]);
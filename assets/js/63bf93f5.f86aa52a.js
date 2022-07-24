"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[3947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(w,r(r({ref:t},c),{},{components:n})):a.createElement(w,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(83117),i=(n(67294),n(3905));const o={sidebar_position:70},r="Custom views",s={unversionedId:"guides/custom-views",id:"guides/custom-views",title:"Custom views",description:"Views determine how Obsidian displays content. The file explorer, graph view, and the Markdown view are all examples of views, but you can also create your own custom views that display content in a way that makes sense for your plugin.",source:"@site/docs/guides/custom-views.md",sourceDirName:"guides",slug:"/guides/custom-views",permalink:"/obsidian-plugin-docs/guides/custom-views",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/custom-views.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"docs",previous:{title:"Events",permalink:"/obsidian-plugin-docs/guides/events"},next:{title:"HTML elements",permalink:"/obsidian-plugin-docs/guides/html-elements"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-views"},"Custom views"),(0,i.kt)("p",null,"Views determine how Obsidian displays content. The file explorer, graph view, and the Markdown view are all examples of views, but you can also create your own custom views that display content in a way that makes sense for your plugin."),(0,i.kt)("p",null,"To create a custom view, create a class that extends the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/ItemView"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemView"))," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="view.ts"',title:'"view.ts"'},'import { ItemView, WorkspaceLeaf } from "obsidian";\n\nexport const VIEW_TYPE_EXAMPLE = "example-view";\n\nexport class ExampleView extends ItemView {\n  constructor(leaf: WorkspaceLeaf) {\n    super(leaf);\n  }\n\n  getViewType() {\n    return VIEW_TYPE_EXAMPLE;\n  }\n\n  getDisplayText() {\n    return "Example view";\n  }\n\n  async onOpen() {\n    const container = this.containerEl.children[1];\n    container.empty();\n    container.createEl("h4", { text: "Example view" });\n  }\n\n  async onClose() {\n    // Nothing to clean up.\n  }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For more information on how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createEl()")," method, refer to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML elements"),".")),(0,i.kt)("p",null,"Each view is uniquely identified by a text string and several operations require that you specify the view you'd like to use. Extracting it to a constant, ",(0,i.kt)("inlineCode",{parentName:"p"},"VIEW_TYPE_EXAMPLE"),", is a good idea\u2014as you will see later in this guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getViewType()")," returns a unique identifier for the view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getDisplayText()")," returns a human-friendly name for the view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onOpen()")," is called when the view is opened within a new leaf and is responsible for building the content of your view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onClose()")," is called when the view should close and is responsible for cleaning up any resources used by the view.")),(0,i.kt)("p",null,"Custom views need to be registered when the plugin is enabled, and cleaned up when the plugin is disabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts" {6-9,17}',title:'"main.ts"',"{6-9,17}":!0},'import { Plugin } from "obsidian";\nimport { ExampleView, VIEW_TYPE_EXAMPLE } from "./view";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.registerView(\n      VIEW_TYPE_EXAMPLE,\n      (leaf) => new ExampleView(leaf)\n    );\n\n    this.addRibbonIcon("dice", "Activate view", () => {\n      this.activateView();\n    });\n  }\n\n  async onunload() {\n    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);\n  }\n\n  async activateView() {\n    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);\n\n    await this.app.workspace.getRightLeaf(false).setViewState({\n      type: VIEW_TYPE_EXAMPLE,\n      active: true,\n    });\n\n    this.app.workspace.revealLeaf(\n      this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]\n    );\n  }\n}\n')),(0,i.kt)("p",null,"The second argument to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2#registerview"},(0,i.kt)("inlineCode",{parentName:"a"},"registerView()"))," is a factory function that returns an instance of the view you want to register."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Never manage references to views in your plugin. Obsidian may call the view factory function multiple times. Avoid side effects in your view, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"getLeavesOfType()")," whenever you need to access your view instances."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE).forEach((leaf) => {\n  if (leaf.view instanceof ExampleView) {\n    // Access your view instance.\n  }\n});\n"))),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"onunload()")," method, to make sure that you clean up the view whenever the plugin is disabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow the view clean up after itself by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"close()"),"."),(0,i.kt)("li",{parentName:"ul"},"Detach all leaves that are using the view.")),(0,i.kt)("p",null,"After you've registered a custom view for the plugin, you should to give the user a way to activate it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"activateView()")," is a convenient method that does three things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Detaches all leaves with the custom view."),(0,i.kt)("li",{parentName:"ul"},"Adds the custom view on the right leaf."),(0,i.kt)("li",{parentName:"ul"},"Reveals the leaf that contains the custom view.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"activateView()")," restricts your plugin to at most one leaf at a time. Try commenting out the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"detachLeavesOfType()")," to allow the user to create more than one leaf. One for every call to ",(0,i.kt)("inlineCode",{parentName:"p"},"activateView()"),".")),(0,i.kt)("p",null,"How you want the user to activate the custom view is up to you. The example uses a ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/ribbon-actions"},"ribbon action"),", but you can also use a ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/commands"},"command"),"."))}u.isMDXComponent=!0}}]);
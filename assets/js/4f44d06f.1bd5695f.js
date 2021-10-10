"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[3695],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],o={},s="CachedMetadata",l={unversionedId:"api/interfaces/CachedMetadata",id:"api/interfaces/CachedMetadata",isDocsHomePage:!1,title:"CachedMetadata",description:"Properties",source:"@site/docs/api/interfaces/CachedMetadata.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CachedMetadata",permalink:"/obsidian-plugin-docs/api/interfaces/CachedMetadata",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/interfaces/CachedMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CacheItem",permalink:"/obsidian-plugin-docs/api/interfaces/CacheItem"},next:{title:"CloseableComponent",permalink:"/obsidian-plugin-docs/api/interfaces/CloseableComponent"}},d=[{value:"Properties",id:"properties",children:[{value:"links",id:"links",children:[]},{value:"embeds",id:"embeds",children:[]},{value:"tags",id:"tags",children:[]},{value:"headings",id:"headings",children:[]},{value:"sections",id:"sections",children:[]},{value:"listItems",id:"listitems",children:[]},{value:"frontmatter",id:"frontmatter",children:[]},{value:"blocks",id:"blocks",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cachedmetadata"},"CachedMetadata"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"links"},"links"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"links: LinkCache[]\n")),(0,i.kt)("h3",{id:"embeds"},"embeds"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"embeds: EmbedCache[]\n")),(0,i.kt)("h3",{id:"tags"},"tags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tags: TagCache[]\n")),(0,i.kt)("h3",{id:"headings"},"headings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"headings: HeadingCache[]\n")),(0,i.kt)("h3",{id:"sections"},"sections"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"sections: SectionCache[]\n")),(0,i.kt)("p",null,"Sections are root level markdown blocks, which can be used to divide the document up."),(0,i.kt)("h3",{id:"listitems"},"listItems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"listItems: ListItemCache[]\n")),(0,i.kt)("h3",{id:"frontmatter"},"frontmatter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"frontmatter: FrontMatterCache\n")),(0,i.kt)("h3",{id:"blocks"},"blocks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"blocks: Record<string, BlockCache>\n")))}u.isMDXComponent=!0}}]);
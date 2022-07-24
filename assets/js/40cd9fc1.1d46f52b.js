"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));const l={},o="Vault",r={unversionedId:"concepts/vault",id:"concepts/vault",title:"Vault",description:"From the official documentation on Working with multiple Vaults:",source:"@site/docs/concepts/vault.md",sourceDirName:"concepts",slug:"/concepts/vault",permalink:"/obsidian-plugin-docs/concepts/vault",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/concepts/vault.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Communicating with editor extensions",permalink:"/obsidian-plugin-docs/concepts/editor-extensions/communicating-with-editor-extensions"},next:{title:"Workspace",permalink:"/obsidian-plugin-docs/concepts/workspace"}},s={},c=[{value:"Read files",id:"read-files",level:2},{value:"Delete files",id:"delete-files",level:2},{value:"Is it a file or folder?",id:"is-it-a-file-or-folder",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vault"},"Vault"),(0,i.kt)("p",null,"From the official documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://help.obsidian.md/How+to/Working+with+multiple+vaults"},"Working with multiple Vaults"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Each collection of notes in Obsidian is known as a Vault. A Vault consists of a folder, and any sub-folders within it.")),(0,i.kt)("p",null,"While your plugin can access the file system like any other Node.js application, the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault"},(0,i.kt)("inlineCode",{parentName:"a"},"Vault"))," module aims to make it easier to work with files and folders within a Vault."),(0,i.kt)("p",null,"The following example recursively prints the paths of all Markdown files in a Vault:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const files = this.app.vault.getMarkdownFiles()\n\nfor (let i = 0; i < files.length; i++) {\n  console.log(files[i].path);\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to list ",(0,i.kt)("em",{parentName:"p"},"all")," files, and not just Markdown documents, use ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault#getfiles"},(0,i.kt)("inlineCode",{parentName:"a"},"getFiles()"))," instead.")),(0,i.kt)("h2",{id:"read-files"},"Read files"),(0,i.kt)("p",null,"There are two methods for reading the content of a file: ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault#read"},(0,i.kt)("inlineCode",{parentName:"a"},"read()"))," and ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault#cachedread"},(0,i.kt)("inlineCode",{parentName:"a"},"cachedRead()")),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you only want to display the content to the user, then use ",(0,i.kt)("inlineCode",{parentName:"li"},"cachedRead()")," to avoid reading the file from disk multiple times."),(0,i.kt)("li",{parentName:"ul"},"If you want to read the content, change it, and then write it back to disk, then use ",(0,i.kt)("inlineCode",{parentName:"li"},"read()")," to avoid potentially overwriting the file with a stale copy.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The only difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"cachedRead()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read()")," is when the file was modified outside of Obsidian just before the plugin reads it. As soon as the file system notifies Obsidian that the file has changed from the outside, ",(0,i.kt)("inlineCode",{parentName:"p"},"cachedRead()")," behaves ",(0,i.kt)("em",{parentName:"p"},"exactly")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"read()"),". Similarly, if you save the file within Obsidian, the read cache is flushed as well.")),(0,i.kt)("p",null,"The following example reads the content of all Markdown files in the Vault and returns the average document size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Notice, Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    this.addRibbonIcon("info", "Calculate average file length", async () => {\n      const fileLength = await this.averageFileLength();\n      new Notice(`The average file length is ${fileLength} characters.`);\n    });\n  }\n\n  async averageFileLength(): Promise<number> {\n    const { vault } = this.app;\n\n    const fileContents: string[] = await Promise.all(\n      vault.getMarkdownFiles().map((file) => vault.cachedRead(file))\n    );\n\n    let totalLength = 0;\n    fileContents.forEach((content) => {\n      totalLength += content.length;\n    });\n\n    return totalLength / fileContents.length;\n  }\n}\n')),(0,i.kt)("h2",{id:"delete-files"},"Delete files"),(0,i.kt)("p",null,"There are two methods to delete a file, ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault#delete"},(0,i.kt)("inlineCode",{parentName:"a"},"delete()")),", and ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Vault#trash"},(0,i.kt)("inlineCode",{parentName:"a"},"trash()")),". Which one you should use depends on if you want to allow the user to change their mind."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete()")," removes the file without a trace."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trash()")," moves the file to the trash bin.")),(0,i.kt)("p",null,"When you use ",(0,i.kt)("inlineCode",{parentName:"p"},"trash()"),", you have the option to move the file to the system's trash bin, or to a local  ",(0,i.kt)("inlineCode",{parentName:"p"},".trash")," folder at the root of the user's Vault."),(0,i.kt)("h2",{id:"is-it-a-file-or-folder"},"Is it a file or folder?"),(0,i.kt)("p",null,"Some operations return or accept a ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/TAbstractFile"},(0,i.kt)("inlineCode",{parentName:"a"},"TAbstractFile"))," object, which can be either a file or a folder. Always check the concrete type of a ",(0,i.kt)("inlineCode",{parentName:"p"},"TAbstractFile")," before you use it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const folderOrFile = this.app.vault.getAbstractFileByPath("folderOrFile");\n\nif (folderOrFile instanceof TFile) {\n  console.log("It\'s a file!");\n} else if (folderOrFile instanceof TFolder) {\n  console.log("It\'s a folder!");\n}\n')))}d.isMDXComponent=!0}}]);
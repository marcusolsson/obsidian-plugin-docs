"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[973],{6006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1839);const l={},i="Workspace",o={unversionedId:"reference/typescript/classes/Workspace",id:"reference/typescript/classes/Workspace",title:"Workspace",description:"Extends Events",source:"@site/docs/reference/typescript/classes/Workspace.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/Workspace",permalink:"/obsidian-plugin-docs/reference/typescript/classes/Workspace",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/Workspace.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"View",permalink:"/obsidian-plugin-docs/reference/typescript/classes/View"},next:{title:"WorkspaceContainer",permalink:"/obsidian-plugin-docs/reference/typescript/classes/WorkspaceContainer"}},d={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"leftSplit",id:"leftsplit",level:3},{value:"rightSplit",id:"rightsplit",level:3},{value:"leftRibbon",id:"leftribbon",level:3},{value:"rightRibbon",id:"rightribbon",level:3},{value:"rootSplit",id:"rootsplit",level:3},{value:"activeLeaf",id:"activeleaf",level:3},{value:"containerEl",id:"containerel",level:3},{value:"layoutReady",id:"layoutready",level:3},{value:"requestSaveLayout",id:"requestsavelayout",level:3},{value:"activeEditor",id:"activeeditor",level:3},{value:"Methods",id:"methods",level:2},{value:"onLayoutReady",id:"onlayoutready",level:3},{value:"changeLayout",id:"changelayout",level:3},{value:"getLayout",id:"getlayout",level:3},{value:"createLeafInParent",id:"createleafinparent",level:3},{value:"createLeafBySplit",id:"createleafbysplit",level:3},{value:"splitActiveLeaf",id:"splitactiveleaf",level:3},{value:"duplicateLeaf",id:"duplicateleaf",level:3},{value:"duplicateLeaf",id:"duplicateleaf-1",level:3},{value:"getUnpinnedLeaf",id:"getunpinnedleaf",level:3},{value:"getLeaf",id:"getleaf",level:3},{value:"getLeaf",id:"getleaf-1",level:3},{value:"moveLeafToPopout",id:"moveleaftopopout",level:3},{value:"openPopoutLeaf",id:"openpopoutleaf",level:3},{value:"openLinkText",id:"openlinktext",level:3},{value:"setActiveLeaf",id:"setactiveleaf",level:3},{value:"setActiveLeaf",id:"setactiveleaf-1",level:3},{value:"getLeafById",id:"getleafbyid",level:3},{value:"getGroupLeaves",id:"getgroupleaves",level:3},{value:"getMostRecentLeaf",id:"getmostrecentleaf",level:3},{value:"getLeftLeaf",id:"getleftleaf",level:3},{value:"getRightLeaf",id:"getrightleaf",level:3},{value:"getActiveViewOfType",id:"getactiveviewoftype",level:3},{value:"getActiveFile",id:"getactivefile",level:3},{value:"iterateRootLeaves",id:"iteraterootleaves",level:3},{value:"iterateAllLeaves",id:"iterateallleaves",level:3},{value:"getLeavesOfType",id:"getleavesoftype",level:3},{value:"detachLeavesOfType",id:"detachleavesoftype",level:3},{value:"revealLeaf",id:"revealleaf",level:3},{value:"getLastOpenFiles",id:"getlastopenfiles",level:3},{value:"updateOptions",id:"updateoptions",level:3},{value:"iterateCodeMirrors",id:"iteratecodemirrors",level:3},{value:"on",id:"on",level:3},{value:"on",id:"on-1",level:3},{value:"on",id:"on-2",level:3},{value:"on",id:"on-3",level:3},{value:"on",id:"on-4",level:3},{value:"on",id:"on-5",level:3},{value:"on",id:"on-6",level:3},{value:"on",id:"on-7",level:3},{value:"on",id:"on-8",level:3},{value:"on",id:"on-9",level:3},{value:"on",id:"on-10",level:3},{value:"on",id:"on-11",level:3},{value:"on",id:"on-12",level:3},{value:"on",id:"on-13",level:3},{value:"on",id:"on-14",level:3},{value:"on",id:"on-15",level:3}],s={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workspace"},"Workspace"),(0,r.kt)("p",null,"Extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"leftsplit"},"leftSplit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"leftSplit: WorkspaceSidedock | WorkspaceMobileDrawer\n")),(0,r.kt)("h3",{id:"rightsplit"},"rightSplit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"rightSplit: WorkspaceSidedock | WorkspaceMobileDrawer\n")),(0,r.kt)("h3",{id:"leftribbon"},"leftRibbon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"leftRibbon: WorkspaceRibbon\n")),(0,r.kt)("h3",{id:"rightribbon"},"rightRibbon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"rightRibbon: WorkspaceRibbon\n")),(0,r.kt)("h3",{id:"rootsplit"},"rootSplit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"rootSplit: WorkspaceRoot\n")),(0,r.kt)("h3",{id:"activeleaf"},"activeLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"activeLeaf: WorkspaceLeaf\n")),(0,r.kt)("p",null,"Indicates the currently focused leaf, if one exists."),(0,r.kt)("p",null,"Please avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"activeLeaf")," directly, especially without checking whether\n",(0,r.kt)("inlineCode",{parentName:"p"},"activeLeaf")," is null."),(0,r.kt)("p",null,"The recommended alternatives are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you need information about the current view, use {@link getActiveViewOfType}."),(0,r.kt)("li",{parentName:"ul"},"If you need to open a new file or navigate a view, use {@link getLeaf}.")),(0,r.kt)("h3",{id:"containerel"},"containerEl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"containerEl: HTMLElement\n")),(0,r.kt)("h3",{id:"layoutready"},"layoutReady"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"layoutReady: boolean\n")),(0,r.kt)("h3",{id:"requestsavelayout"},"requestSaveLayout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"requestSaveLayout: Debouncer<[], Promise<void>>\n")),(0,r.kt)("h3",{id:"activeeditor"},"activeEditor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"activeEditor: MarkdownFileInfo\n")),(0,r.kt)("p",null,"A component managing the current editor. This can be null\nif the active view has no editor."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"onlayoutready"},"onLayoutReady"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onLayoutReady(callback: () => any): void;\n")),(0,r.kt)("p",null,"Runs the callback function right away if layout is already ready,\nor push it to a queue to be called later when layout is ready."),(0,r.kt)("h3",{id:"changelayout"},"changeLayout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"changeLayout(workspace: any): Promise<void>;\n")),(0,r.kt)("h3",{id:"getlayout"},"getLayout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLayout(): any;\n")),(0,r.kt)("h3",{id:"createleafinparent"},"createLeafInParent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"createleafbysplit"},"createLeafBySplit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"splitactiveleaf"},"splitActiveLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"duplicateleaf"},"duplicateLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<WorkspaceLeaf>;\n")),(0,r.kt)("h3",{id:"duplicateleaf-1"},"duplicateLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"duplicateLeaf(leaf: WorkspaceLeaf, leafType: PaneType | boolean, direction?: SplitDirection): Promise<WorkspaceLeaf>;\n")),(0,r.kt)("h3",{id:"getunpinnedleaf"},"getUnpinnedLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getUnpinnedLeaf(type?: string): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"getleaf"},"getLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLeaf(newLeaf?: 'split', direction?: SplitDirection): WorkspaceLeaf;\n")),(0,r.kt)("p",null,"Creates a new leaf in a leaf adjacent to the currently active leaf.\nIf direction is ",(0,r.kt)("inlineCode",{parentName:"p"},"'vertical'"),", the leaf will appear to the right.\nIf direction is ",(0,r.kt)("inlineCode",{parentName:"p"},"'horizontal'"),", the leaf will appear below the current leaf.\nIf newLeaf is false (or not set) then an existing leaf which can be navigated\nis returned, or a new leaf will be created if there was no leaf available."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'tab'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," then a new leaf will be created in the preferred\nlocation within the root split and returned."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'split'")," then a new leaf will be created adjacent to the currently active leaf."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'window'")," then a popout window will be created with a new leaf inside."),(0,r.kt)("h3",{id:"getleaf-1"},"getLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLeaf(newLeaf?: PaneType | boolean): WorkspaceLeaf;\n")),(0,r.kt)("p",null,"Creates a new leaf in a leaf adjacent to the currently active leaf.\nIf direction is ",(0,r.kt)("inlineCode",{parentName:"p"},"'vertical'"),", the leaf will appear to the right.\nIf direction is ",(0,r.kt)("inlineCode",{parentName:"p"},"'horizontal'"),", the leaf will appear below the current leaf.\nIf newLeaf is false (or not set) then an existing leaf which can be navigated\nis returned, or a new leaf will be created if there was no leaf available."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'tab'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," then a new leaf will be created in the preferred\nlocation within the root split and returned."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'split'")," then a new leaf will be created adjacent to the currently active leaf."),(0,r.kt)("p",null,"If newLeaf is ",(0,r.kt)("inlineCode",{parentName:"p"},"'window'")," then a popout window will be created with a new leaf inside."),(0,r.kt)("h3",{id:"moveleaftopopout"},"moveLeafToPopout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"moveLeafToPopout(leaf: WorkspaceLeaf, data?: WorkspaceWindowInitData): WorkspaceWindow;\n")),(0,r.kt)("p",null,"Migrates this leaf to a new popout window.\nOnly works on the desktop app."),(0,r.kt)("h3",{id:"openpopoutleaf"},"openPopoutLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"openPopoutLeaf(data?: WorkspaceWindowInitData): WorkspaceLeaf;\n")),(0,r.kt)("p",null,"Open a new popout window with a single new leaf and return that leaf.\nOnly works on the desktop app."),(0,r.kt)("h3",{id:"openlinktext"},"openLinkText"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"openLinkText(linktext: string, sourcePath: string, newLeaf?: PaneType | boolean, openViewState?: OpenViewState): Promise<void>;\n")),(0,r.kt)("h3",{id:"setactiveleaf"},"setActiveLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setActiveLeaf(leaf: WorkspaceLeaf, params?: {\n    focus?: boolean;\n}): void;\n")),(0,r.kt)("p",null,"Sets the active leaf"),(0,r.kt)("h3",{id:"setactiveleaf-1"},"setActiveLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setActiveLeaf(leaf: WorkspaceLeaf, pushHistory: boolean, focus: boolean): void;\n")),(0,r.kt)("p",null,"Sets the active leaf"),(0,r.kt)("h3",{id:"getleafbyid"},"getLeafById"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLeafById(id: string): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"getgroupleaves"},"getGroupLeaves"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getGroupLeaves(group: string): WorkspaceLeaf[];\n")),(0,r.kt)("h3",{id:"getmostrecentleaf"},"getMostRecentLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getMostRecentLeaf(root?: WorkspaceParent): WorkspaceLeaf | null;\n")),(0,r.kt)("h3",{id:"getleftleaf"},"getLeftLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLeftLeaf(split: boolean): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"getrightleaf"},"getRightLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getRightLeaf(split: boolean): WorkspaceLeaf;\n")),(0,r.kt)("h3",{id:"getactiveviewoftype"},"getActiveViewOfType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getActiveViewOfType<T extends View>(type: Constructor<T>): T | null;\n")),(0,r.kt)("h3",{id:"getactivefile"},"getActiveFile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getActiveFile(): TFile | null;\n")),(0,r.kt)("p",null,"Returns the file for the current view if it's a FileView."),(0,r.kt)("p",null,"Otherwise, it will recent the most recently active file."),(0,r.kt)("h3",{id:"iteraterootleaves"},"iterateRootLeaves"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;\n")),(0,r.kt)("p",null,"Iterate through all leaves in the main area of the workspace."),(0,r.kt)("h3",{id:"iterateallleaves"},"iterateAllLeaves"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;\n")),(0,r.kt)("p",null,"Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves."),(0,r.kt)("h3",{id:"getleavesoftype"},"getLeavesOfType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLeavesOfType(viewType: string): WorkspaceLeaf[];\n")),(0,r.kt)("h3",{id:"detachleavesoftype"},"detachLeavesOfType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"detachLeavesOfType(viewType: string): void;\n")),(0,r.kt)("h3",{id:"revealleaf"},"revealLeaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"revealLeaf(leaf: WorkspaceLeaf): void;\n")),(0,r.kt)("h3",{id:"getlastopenfiles"},"getLastOpenFiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLastOpenFiles(): string[];\n")),(0,r.kt)("h3",{id:"updateoptions"},"updateOptions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"updateOptions(): void;\n")),(0,r.kt)("p",null,"Calling this function will update/reconfigure the options of all markdown panes.\nIt is fairly expensive, so it should not be called frequently."),(0,r.kt)("h3",{id:"iteratecodemirrors"},"iterateCodeMirrors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"iterateCodeMirrors(callback: (cm: CodeMirror.Editor) => any): void;\n")),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-1"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'resize', callback: () => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-2"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'click', callback: (evt: MouseEvent) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-3"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-4"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-5"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-6"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-7"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-8"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'css-change', callback: () => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-9"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-10"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-11"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-12"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-13"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-14"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'codemirror', callback: (cm: CodeMirror.Editor) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,r.kt)("h3",{id:"on-15"},"on"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;\n")),(0,r.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."))}h.isMDXComponent=!0}}]);
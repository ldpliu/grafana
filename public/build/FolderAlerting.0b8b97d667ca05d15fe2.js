"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1324],{87768:(W,D,e)=>{e.d(D,{j:()=>i});var a=e(31733),g=e(97890),s=e(19690);function i(){const{search:d}=(0,g.TH)(),n=(0,a.useMemo)(()=>new URLSearchParams(d),[d]),o=(0,a.useCallback)((f,r)=>{s.E1.partial(f,r)},[]);return[n,o]}},57591:(W,D,e)=>{e.r(D),e.d(D,{BrowseFolderAlertingPage:()=>z,default:()=>X});var a=e(31733),g=e(50186),s=e(31509),i=e(42342),d=e(76932),n=e(69781),o=e(24789),f=e(76067),r=e(37739),C=e(76804),L=e(38834),h=e(49311),c=e(96305),O=e(60196),A=e(47808),_=e(21279),T=e(65354),I=e(41216),R=e(67483),P=e(87768),F=e(84415),U=e(10322),p=e(67451),S=e(66172),V=(t=>(t.Ascending="alpha-asc",t.Descending="alpha-desc",t))(V||{});const H=[{label:"Alphabetically [A-Z]",value:"alpha-asc"},{label:"Alphabetically [Z-A]",value:"alpha-desc"}],j=({folder:t})=>{const E=(0,f.wW)(Z),l=(0,i.useDispatch)(),b=M=>{const Y=(0,U.vB)(u,M);y(Y)};(0,a.useEffect)(()=>{l((0,F.y6)({rulesSourceName:p.GC})),l((0,F.UR)({rulesSourceName:p.GC}))},[l]);const m=(0,I.Zo)(p.GC),{nameFilter:B,labelFilter:u,sortOrder:v,setNameFilter:K,setLabelFilter:y,setSortOrder:Q}=x(),w=m.find(M=>M.name===t.title)?.groups.flatMap(M=>M.rules)??[],k=G(w,B,u,v??"alpha-asc"),q=w.length===0||k.length===0,{page:ee,numberOfPages:ae,onPageChange:te,pageItems:ne}=(0,R.h)(k,1,_.gN);return a.createElement("div",{className:E.container},a.createElement(r.K,{direction:"column",gap:3},a.createElement(C.H,{value:B,onChange:K,placeholder:"Search alert rules by name","data-testid":"name-filter"}),a.createElement(r.K,{direction:"row"},a.createElement(L.Ph,{value:v,onChange:({value:M})=>M&&Q(M),options:H,width:25,"aria-label":"Sort",placeholder:"Sort (Default A-Z)",prefix:a.createElement(h.J,{name:v==="alpha-asc"?"sort-amount-up":"sort-amount-down"})}),a.createElement(C.H,{value:u,onChange:y,placeholder:"Search alerts by labels",className:E.filterLabelsInput,"data-testid":"label-filter"})),a.createElement(r.K,{direction:"column",gap:1},ne.map(M=>a.createElement(c.Z,{key:M.name,href:(0,S.V2)("grafana",M,""),className:E.card,"data-testid":"alert-card-row"},a.createElement(c.Z.Heading,null,M.name),a.createElement(c.Z.Tags,null,a.createElement(O.P,{onClick:b,tags:Object.entries(M.labels).map(([Y,se])=>`${Y}=${se}`)})),a.createElement(c.Z.Meta,null,a.createElement("div",null,a.createElement(h.J,{name:"folder"})," ",t.title))))),q&&a.createElement("div",{className:E.noResults},"No alert rules found"),a.createElement("div",{className:E.pagination},a.createElement(A.t,{currentPage:ee,numberOfPages:ae,onNavigate:te,hideWhenSinglePage:!0}))))};var N=(t=>(t.nameFilter="nameFilter",t.labelFilter="labelFilter",t.sortOrder="sort",t))(N||{});function x(){const[t,E]=(0,P.j)(),[l,b]=(0,a.useState)(t.get("nameFilter")??""),[m,B]=(0,a.useState)(t.get("labelFilter")??""),u=t.get("sort"),[v,K]=(0,a.useState)(u==="alpha-asc"?"alpha-asc":u==="alpha-desc"?"alpha-desc":void 0);return(0,o.Z)(()=>E({nameFilter:(0,T.sB)(l),labelFilter:(0,T.sB)(m),sort:(0,T.sB)(v)},!0),400,[l,m,v]),{nameFilter:l,labelFilter:m,sortOrder:v,setNameFilter:b,setLabelFilter:B,setSortOrder:K}}function G(t,E,l,b){const m=(0,U.Zh)(l);let B=t.filter(u=>u.name.toLowerCase().includes(E.toLowerCase())&&(0,U.eD)(u.labels,m));return(0,n.orderBy)(B,u=>u.name.toLowerCase(),[b==="alpha-asc"?"asc":"desc"])}const Z=t=>({container:(0,d.css)`
    padding: ${t.spacing(1)};
  `,card:(0,d.css)`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,pagination:(0,d.css)`
    align-self: center;
  `,filterLabelsInput:(0,d.css)`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,noResults:(0,d.css)`
    padding: ${t.spacing(2)};
    background-color: ${t.colors.background.secondary};
    font-style: italic;
  `});var $=e(52368),J=e(68446);function z({match:t}){const{uid:E}=t.params,{data:l}=(0,$.t4)(E),b=(0,i.useSelector)(v=>v.folder),[m]=(0,$.vN)(),B=(0,a.useMemo)(()=>{if(!l)return;const v=(0,s.B1)(l),K=(0,s.W3)(l.uid),y=v.children?.find(Q=>Q.id===K);return y&&(y.active=!0),v},[l]),u=E?async v=>{if(l){const K=await m({...l,title:v});if("error"in K)throw K.error}}:void 0;return a.createElement(g.T,{navId:"dashboards/browse",pageNav:B,onEditTitle:u,actions:a.createElement(a.Fragment,null,l&&a.createElement(J.A,{folder:l}))},a.createElement(g.T.Contents,null,a.createElement(j,{folder:b})))}const X=z},77196:(W,D,e)=>{e.d(D,{p:()=>C});var a=e(31733),g=e(51925),s=e(85498),i=e(90069),d=e(36717),n=e(25111),o=e(53166),f=e(52368),r=e(32166);const C=({onConfirm:L,onDismiss:h,selectedItems:c,...O})=>{const{data:A}=(0,f.zs)(c),_=!s.config.featureToggles.nestedFolders&&A&&(A.alertRule||A.libraryPanel),[T,I]=(0,a.useState)(!1),R=async()=>{I(!0);try{await L(),I(!1),h()}catch{I(!1)}};return a.createElement(i.s,{body:a.createElement(a.Fragment,null,a.createElement(d.x,{element:"p"},a.createElement(o.cC,{i18nKey:"browse-dashboards.action.delete-modal-text"},"This action will delete the following content:")),a.createElement(r.X,{selectedItems:c}),a.createElement(g.T,{v:2})),description:a.createElement(a.Fragment,null,_?a.createElement(n.b,{severity:"warning",title:(0,o.t)("browse-dashboards.action.delete-modal-invalid-title","Cannot delete folder")},a.createElement(o.cC,{i18nKey:"browse-dashboards.action.delete-modal-invalid-text"},"One or more folders contain library panels or alert rules. Delete these first in order to proceed.")):null),confirmationText:"Delete",confirmText:T?(0,o.t)("browse-dashboards.action.deleting","Deleting..."):(0,o.t)("browse-dashboards.action.delete-button","Delete"),onDismiss:h,onConfirm:R,title:(0,o.t)("browse-dashboards.action.delete-modal-title","Delete"),...O})}},77992:(W,D,e)=>{e.d(D,{_:()=>L});var a=e(31733),g=e(51925),s=e(5572),i=e(25111),d=e(36717),n=e(85765),o=e(51343),f=e(26371),r=e(53166),C=e(32166);const L=({onConfirm:h,onDismiss:c,selectedItems:O,...A})=>{const[_,T]=(0,a.useState)(),[I,R]=(0,a.useState)(!1),P=Object.keys(O.folder).filter(U=>O.folder[U]),F=async()=>{if(_!==void 0){R(!0);try{await h(_),R(!1),c()}catch{R(!1)}}};return a.createElement(s.u,{title:(0,r.t)("browse-dashboards.action.move-modal-title","Move"),onDismiss:c,...A},P.length>0&&a.createElement(i.b,{severity:"info",title:(0,r.t)("browse-dashboards.action.move-modal-alert","Moving this item may change its permissions.")}),a.createElement(d.x,{element:"p"},a.createElement(r.cC,{i18nKey:"browse-dashboards.action.move-modal-text"},"This action will move the following content:")),a.createElement(C.X,{selectedItems:O}),a.createElement(g.T,{v:3}),a.createElement(n.g,{label:(0,r.t)("browse-dashboards.action.move-modal-field-label","Folder name")},a.createElement(f.E,{value:_,excludeUIDs:P,onChange:T})),a.createElement(s.u.ButtonRow,null,a.createElement(o.zx,{onClick:c,variant:"secondary",fill:"outline"},a.createElement(r.cC,{i18nKey:"browse-dashboards.action.cancel-button"},"Cancel")),a.createElement(o.zx,{disabled:_===void 0||I,onClick:F,variant:"primary"},I?(0,r.t)("browse-dashboards.action.moving","Moving..."):(0,r.t)("browse-dashboards.action.move-button","Move"))))}},68446:(W,D,e)=>{e.d(D,{A:()=>R});var a=e(31733),g=e(85498),s=e(64704),i=e(19690),d=e(63424),n=e(46213),o=e(67669),f=e(51343),r=e(49311),C=e(59899),L=e(49465),h=e(75923),c=e(53166),O=e(74642),A=e(52368),_=e(18972),T=e(77196),I=e(77992);function R({folder:P}){const[F,U]=(0,a.useState)(!1),[p,S]=(0,a.useState)(!1),[V]=(0,A.OH)(),[H]=(0,A.yC)(),{canEditFolders:j,canDeleteFolders:N,canViewPermissions:x,canSetPermissions:G}=(0,_.a)(P),Z=g.config.featureToggles.nestedFolders&&j,$=async m=>{await V({folder:P,destinationUID:m}),(0,s.ff)("grafana_manage_dashboards_item_moved",{item_counts:{folder:1,dashboard:0},source:"folder_actions"})},J=async()=>{await H(P),(0,s.ff)("grafana_manage_dashboards_item_deleted",{item_counts:{folder:1,dashboard:0},source:"folder_actions"});const{parents:m}=P,B=m&&m.length?m[m.length-1].url:"/dashboards";i.E1.push(B)},z=()=>{h.h$.publish(new O.Dn({component:I._,props:{selectedItems:{folder:{[P.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:$}}))},X=()=>{h.h$.publish(new O.Dn({component:T.p,props:{selectedItems:{folder:{[P.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:J}}))},t=(0,c.t)("browse-dashboards.folder-actions-button.manage-permissions","Manage permissions"),E=(0,c.t)("browse-dashboards.folder-actions-button.move","Move"),l=(0,c.t)("browse-dashboards.folder-actions-button.delete","Delete"),b=a.createElement(d.v,null,x&&a.createElement(n.s,{onClick:()=>S(!0),label:t}),Z&&a.createElement(n.s,{onClick:z,label:E}),N&&a.createElement(n.s,{destructive:!0,onClick:X,label:l}));return!x&&!Z&&!N?null:a.createElement(a.Fragment,null,a.createElement(o.L,{overlay:b,onVisibleChange:U},a.createElement(f.zx,{variant:"secondary"},a.createElement(c.cC,{i18nKey:"browse-dashboards.folder-actions-button.folder-actions"},"Folder actions"),a.createElement(r.J,{name:F?"angle-up":"angle-down"}))),p&&a.createElement(C.d,{title:(0,c.t)("browse-dashboards.action.manage-permissions-button","Manage permissions"),subtitle:P.title,onClose:()=>S(!1),size:"md"},a.createElement(L.P,{resource:"folders",resourceId:P.uid,canSetPermissions:G})))}},18972:(W,D,e)=>{e.d(D,{a:()=>d});var a=e(85498),g=e(75923),s=e(42342);function i(n,o){return o?g.Vt.hasPermissionInMetadata(n,o):g.Vt.hasPermission(n)}function d(n){const o=i(s.AccessControlAction.DashboardsCreate,n),f=!!((!n||a.config.featureToggles.nestedFolders)&&i(s.AccessControlAction.FoldersCreate)),r=i(s.AccessControlAction.FoldersDelete,n),C=i(s.AccessControlAction.DashboardsWrite,n),L=i(s.AccessControlAction.FoldersWrite,n),h=i(s.AccessControlAction.FoldersPermissionsWrite,n),c=i(s.AccessControlAction.FoldersPermissionsRead,n);return{canCreateDashboards:o,canCreateFolders:f,canDeleteFolders:r,canEditDashboards:C,canEditFolders:L,canSetPermissions:h,canViewPermissions:c}}}}]);

//# sourceMappingURL=FolderAlerting.0b8b97d667ca05d15fe2.js.map
"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2721],{42233:(Z,U,t)=>{t.r(U),t.d(U,{default:()=>u});var e=t(31733),T=t(41710),B=t(25111),C=t(67683),W=t(17618),K=t(85765),S=t(64516),x=t(51343),h=t(50186),E=t(75923),D=t(42342),z=t(66918),c=t(69391),N=t(10704);const V=30,g=async n=>await(0,c.i)().get(`/api/orgs/${n}`),A=async(n,s)=>E.Vt.hasPermission(D.AccessControlAction.OrgUsersRead)?(0,c.i)().get(`/api/orgs/${n}/users/search`,(0,N.y)({perpage:V,page:s})):{orgUsers:[]},b=async(n,s)=>{const P=s.map(i=>i.userId),d=await(0,c.i)().post("/api/access-control/users/roles/search",{userIds:P,orgId:n});s.forEach(i=>{i.roles=d?d[i.userId]||[]:[]})},$=(n,s)=>(0,c.i)().patch(`/api/orgs/${s}/users/${n.userId}`,n),y=(n,s)=>(0,c.i)().delete(`/api/orgs/${s}/users/${n.userId}`),F=(n,s)=>(0,c.i)().put(`/api/orgs/${s}`,{name:n}),u=({match:n})=>{const s=parseInt(n.params.id,10),P=E.Vt.hasPermission(D.AccessControlAction.OrgsWrite),d=E.Vt.hasPermission(D.AccessControlAction.OrgUsersRead),[i,_]=(0,e.useState)([]),[m,p]=(0,e.useState)(1),[O,M]=(0,e.useState)(1),[f,I]=(0,T.Z)(()=>g(s),[]),[,v]=(0,T.Z)(async o=>{const l=await A(s,o);E.Vt.licensedAccessControlEnabled()&&await b(s,l.orgUsers);const Y=l?.perPage!==0?Math.ceil(l.totalCount/l.perPage):0;return M(Y),_(l.orgUsers),l.orgUsers},[]);(0,e.useEffect)(()=>{I(),v(m)},[I,v,m]);const a=async o=>{await F(o,s)},r=()=>e.createElement(B.b,{severity:"info",title:"Access denied"},"You do not have permission to see users in this organization. To update this organization, contact your server administrator."),L=o=>{p(o)},R=async o=>{await y(o,s),v(m)},j=async(o,l)=>{await $({...l,role:o},s),v(m)},J={text:f?.value?.name??"",icon:"shield",subTitle:"Manage settings and user roles for an organization."};return e.createElement(h.T,{navId:"global-orgs",pageNav:J,subTitle:"Manage settings for this specific org."},e.createElement(h.T.Contents,null,e.createElement(e.Fragment,null,e.createElement(C.D,null,"Edit organization"),f.value&&e.createElement(W.l,{defaultValues:{orgName:f.value.name},onSubmit:o=>a(o.orgName)},({register:o,errors:l})=>e.createElement(e.Fragment,null,e.createElement(K.g,{label:"Name",invalid:!!l.orgName,error:"Name is required",disabled:!P},e.createElement(S.I,{...o("orgName",{required:!0}),id:"org-name-input"})),e.createElement(x.zx,{type:"submit",disabled:!P},"Update"))),e.createElement("div",{style:{marginTop:"20px"}},e.createElement(C.D,null,"Organization users"),!d&&r(),d&&!!i.length&&e.createElement(z.q,{users:i,orgId:s,onRoleChange:j,onRemoveUser:R,changePage:L,page:m,totalPages:O})))))}},66918:(Z,U,t)=>{t.d(U,{q:()=>G});var e=t(31733),T=t(21568),B=t(10851),C=t(68833),W=t(58037),K=t(49311),S=t(14496),x=t(51343),h=t(37739),E=t(77543),D=t(47808),z=t(90069),c=t(17806),N=t(59256),V=t(61504),g=t(75923),A=t(42342),b=t(48334);const $=`This user's role is not editable because it is synchronized from your auth provider.
Refer to the Grafana authentication docs for details.`,y=u=>{const n=u?.isExternallySynced;return!g.Vt.hasPermissionInMetadata(A.AccessControlAction.OrgUsersWrite,u)||n},F=T.wl.pages.UserListPage.UsersListPage,G=({users:u,orgId:n,onRoleChange:s,onRemoveUser:P,fetchData:d,changePage:i,page:_,totalPages:m,rolesLoading:p})=>{const[O,M]=(0,e.useState)(null),[f,I]=(0,e.useState)([]);(0,e.useEffect)(()=>{async function a(){try{if(g.Vt.hasPermission(A.AccessControlAction.ActionRolesList)){let r=await(0,N.ul)(n);I(r)}}catch{console.error("Error loading options")}}g.Vt.licensedAccessControlEnabled()&&a()},[n]);const v=(0,e.useMemo)(()=>[{id:"avatarUrl",header:"",cell:({cell:{value:a}})=>a&&e.createElement(B.q,{src:a,alt:"User avatar"})},{id:"login",header:"Login",cell:({cell:{value:a}})=>e.createElement("div",null,a),sortType:"string"},{id:"email",header:"Email",cell:({cell:{value:a}})=>a,sortType:"string"},{id:"name",header:"Name",cell:({cell:{value:a}})=>a,sortType:"string"},{id:"lastSeenAtAge",header:"Last active",cell:({cell:{value:a}})=>a,sortType:(a,r)=>new Date(a.original.lastSeenAt).getTime()-new Date(r.original.lastSeenAt).getTime()},{id:"role",header:"Role",cell:({cell:{value:a},row:{original:r}})=>{const L=y(r);return g.Vt.licensedAccessControlEnabled()?e.createElement(c.R,{userId:r.userId,roles:r.roles||[],isLoading:p,orgId:n,roleOptions:f,basicRole:a,onBasicRoleChange:R=>s(R,r),basicRoleDisabled:L,basicRoleDisabledMessage:$,width:40}):e.createElement(b.A,{"aria-label":"Role",value:a,disabled:L,onChange:R=>s(R,r)})}},{id:"info",header:"",cell:({row:{original:a}})=>y(a)&&e.createElement(C.x,{display:"flex",alignItems:"center",marginLeft:1},e.createElement(W.u,{interactive:!0,content:e.createElement("div",null,"This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/administration/user-management/manage-org-users/#change-a-users-organization-permissions",rel:"noreferrer",target:"_blank"},"Grafana authentication docs"),"\xA0for details.")},e.createElement(K.J,{name:"question-circle"})))},{id:"authLabels",header:"Origin",cell:({cell:{value:a}})=>e.createElement(e.Fragment,null,Array.isArray(a)&&a.length>0&&e.createElement(V.e,{label:a[0],removeIcon:!1,count:0}))},{id:"isDisabled",header:"",cell:({cell:{value:a}})=>e.createElement(e.Fragment,null,a&&e.createElement(S.V,{colorIndex:9,name:"Disabled"}))},{id:"delete",header:"",cell:({row:{original:a}})=>g.Vt.hasPermissionInMetadata(A.AccessControlAction.OrgUsersRemove,a)&&e.createElement(x.zx,{size:"sm",variant:"destructive",onClick:()=>{M(a)},icon:"times","aria-label":`Delete user ${a.name}`})}],[p,n,f,s]);return e.createElement(h.K,{direction:"column",gap:2,"data-testid":F.container},e.createElement(E.e,{columns:v,data:u,getRowId:a=>String(a.userId),fetchData:d}),e.createElement(h.K,{justifyContent:"flex-end"},e.createElement(D.t,{onNavigate:i,currentPage:_,numberOfPages:m,hideWhenSinglePage:!0})),!!O&&e.createElement(z.s,{body:`Are you sure you want to delete user ${O?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{M(null)},isOpen:!0,onConfirm:()=>{O&&(P(O),M(null))}}))}}}]);

//# sourceMappingURL=AdminEditOrgPage.044915e5e104a6704f06.js.map
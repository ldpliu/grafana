"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{66918:(re,B,n)=>{n.d(B,{q:()=>Y});var e=n(31733),O=n(21568),b=n(10851),x=n(68833),m=n(58037),Q=n(49311),V=n(14496),M=n(51343),R=n(37739),N=n(77543),$=n(47808),z=n(90069),F=n(17806),G=n(59256),j=n(61504),g=n(75923),T=n(42342),ee=n(48334);const H=`This user's role is not editable because it is synchronized from your auth provider.
Refer to the Grafana authentication docs for details.`,S=v=>{const u=v?.isExternallySynced;return!g.Vt.hasPermissionInMetadata(T.AccessControlAction.OrgUsersWrite,v)||u},J=O.wl.pages.UserListPage.UsersListPage,Y=({users:v,orgId:u,onRoleChange:h,onRemoveUser:W,fetchData:Z,changePage:P,page:X,totalPages:l,rolesLoading:c})=>{const[f,L]=(0,e.useState)(null),[K,w]=(0,e.useState)([]);(0,e.useEffect)(()=>{async function r(){try{if(g.Vt.hasPermission(T.AccessControlAction.ActionRolesList)){let o=await(0,G.ul)(u);w(o)}}catch{console.error("Error loading options")}}g.Vt.licensedAccessControlEnabled()&&r()},[u]);const _=(0,e.useMemo)(()=>[{id:"avatarUrl",header:"",cell:({cell:{value:r}})=>r&&e.createElement(b.q,{src:r,alt:"User avatar"})},{id:"login",header:"Login",cell:({cell:{value:r}})=>e.createElement("div",null,r),sortType:"string"},{id:"email",header:"Email",cell:({cell:{value:r}})=>r,sortType:"string"},{id:"name",header:"Name",cell:({cell:{value:r}})=>r,sortType:"string"},{id:"lastSeenAtAge",header:"Last active",cell:({cell:{value:r}})=>r,sortType:(r,o)=>new Date(r.original.lastSeenAt).getTime()-new Date(o.original.lastSeenAt).getTime()},{id:"role",header:"Role",cell:({cell:{value:r},row:{original:o}})=>{const U=S(o);return g.Vt.licensedAccessControlEnabled()?e.createElement(F.R,{userId:o.userId,roles:o.roles||[],isLoading:c,orgId:u,roleOptions:K,basicRole:r,onBasicRoleChange:C=>h(C,o),basicRoleDisabled:U,basicRoleDisabledMessage:H,width:40}):e.createElement(ee.A,{"aria-label":"Role",value:r,disabled:U,onChange:C=>h(C,o)})}},{id:"info",header:"",cell:({row:{original:r}})=>S(r)&&e.createElement(x.x,{display:"flex",alignItems:"center",marginLeft:1},e.createElement(m.u,{interactive:!0,content:e.createElement("div",null,"This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/administration/user-management/manage-org-users/#change-a-users-organization-permissions",rel:"noreferrer",target:"_blank"},"Grafana authentication docs"),"\xA0for details.")},e.createElement(Q.J,{name:"question-circle"})))},{id:"authLabels",header:"Origin",cell:({cell:{value:r}})=>e.createElement(e.Fragment,null,Array.isArray(r)&&r.length>0&&e.createElement(j.e,{label:r[0],removeIcon:!1,count:0}))},{id:"isDisabled",header:"",cell:({cell:{value:r}})=>e.createElement(e.Fragment,null,r&&e.createElement(V.V,{colorIndex:9,name:"Disabled"}))},{id:"delete",header:"",cell:({row:{original:r}})=>g.Vt.hasPermissionInMetadata(T.AccessControlAction.OrgUsersRemove,r)&&e.createElement(M.zx,{size:"sm",variant:"destructive",onClick:()=>{L(r)},icon:"times","aria-label":`Delete user ${r.name}`})}],[c,u,K,h]);return e.createElement(R.K,{direction:"column",gap:2,"data-testid":J.container},e.createElement(N.e,{columns:_,data:v,getRowId:r=>String(r.userId),fetchData:Z}),e.createElement(R.K,{justifyContent:"flex-end"},e.createElement($.t,{onNavigate:P,currentPage:X,numberOfPages:l,hideWhenSinglePage:!0})),!!f&&e.createElement(z.s,{body:`Are you sure you want to delete user ${f?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{L(null)},isOpen:!0,onConfirm:()=>{f&&(W(f),L(null))}}))}},73716:(re,B,n)=>{n.r(B),n.d(B,{UsersListPageContent:()=>ne,UsersListPageUnconnected:()=>te,default:()=>de});var e=n(31733),O=n(55024),b=n(51133),x=n(50186),m=n(75923),Q=n(66918),V=n(5334),M=n(51343),R=n(35860);const N={revokeInvite:R.GY},$=(0,O.connect)(null,N);class z extends e.PureComponent{render(){const{invitee:s,revokeInvite:a}=this.props;return e.createElement("tr",null,e.createElement("td",null,s.email),e.createElement("td",null,s.name),e.createElement("td",{className:"text-right"},e.createElement(V.m,{icon:"copy",variant:"secondary",size:"sm",getText:()=>s.url},"Copy Invite"),"\xA0"),e.createElement("td",null,e.createElement(M.zx,{variant:"destructive",size:"sm",icon:"times",onClick:()=>a(s.code),"aria-label":"Revoke Invite"})))}}const F=$(z);class G extends e.PureComponent{render(){const{invitees:s}=this.props;return e.createElement("table",{className:"filter-table form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement("th",null),e.createElement("th",{style:{width:"34px"}}))),e.createElement("tbody",{"data-testid":"InviteesTable-body"},s.map((a,i)=>e.createElement(F,{key:`${a.id}-${i}`,invitee:a}))))}}var j=n(7261),g=n(33497);const{selectAll:T,selectById:ee,selectTotal:H}=g.selectors,S=(t,s)=>s,J=(0,j.P1)([T,S],(t,s)=>{const a=new RegExp(s,"i");return t.filter(d=>a.test(d.name)||a.test(d.email))});var Y=n(41164),v=n(76804),u=n(96856),h=n(83811),W=n(42342),Z=n(69781),P=n(69391),X=n(10704),l=n(79850);function c(){return async(t,s)=>{try{t((0,l.tZ)());const{perPage:a,page:i,searchQuery:d,sort:I}=s().users,E=await(0,P.i)().get("/api/org/users/search",(0,X.y)({perpage:a,page:i,query:d,sort:I}));if(m.Vt.licensedAccessControlEnabled()&&m.Vt.hasPermission(W.AccessControlAction.ActionUserRolesList)){t((0,l.Fy)());const A=m.Vt.user.orgId,p=E?.orgUsers.map(y=>y.userId),D=await(0,P.i)().post("/api/access-control/users/roles/search",{userIds:p,orgId:A});E.orgUsers.forEach(y=>{y.roles=D?D[y.userId]||[]:[]}),t((0,l.BR)())}t((0,l.eT)(E))}catch{(0,l.k7)()}}}const f=(0,Z.debounce)(t=>t(c()),300);function L(t){return async s=>{await(0,P.i)().patch(`/api/org/users/${t.userId}`,{role:t.role}),s(c())}}function K(t){return async s=>{await(0,P.i)().delete(`/api/org/users/${t}`),s(c())}}function w(t){return async s=>{s((0,l.PJ)(t)),s(c())}}function _({sortBy:t}){const s=t.length?`${t[0].id}-${t[0].desc?"desc":"asc"}`:void 0;return async a=>{a((0,l.UL)(s)),a(c())}}function r(t){return async s=>{s((0,l.w4)(t)),f(s)}}const o=t=>{const s=new RegExp(t.searchQuery,"i");return t.users.filter(a=>s.test(a.login)||s.test(a.email)||s.test(a.name))},U=t=>t.searchQuery;function C(t){return{searchQuery:U(t.users),pendingInvitesCount:H(t.invites),externalUserMngLinkName:t.users.externalUserMngLinkName,externalUserMngLinkUrl:t.users.externalUserMngLinkUrl}}const ae={changeSearchQuery:r},oe=(0,O.connect)(C,ae)(({externalUserMngLinkName:t,externalUserMngLinkUrl:s,searchQuery:a,pendingInvitesCount:i,changeSearchQuery:d,onShowInvites:I,showInvites:E})=>{const A=[{label:"Users",value:"users"},{label:`Pending Invites (${i})`,value:"invites"}],D=m.Vt.hasPermission(W.AccessControlAction.OrgUsersAdd)&&!(h.default.disableLoginForm&&h.default.externalUserMngInfo);return e.createElement("div",{className:"page-action-bar","data-testid":"users-action-bar"},e.createElement(Y._,{grow:!0},e.createElement(v.H,{value:a,onChange:d,placeholder:"Search user by login, email or name"})),i>0&&e.createElement("div",{style:{marginLeft:"1rem"}},e.createElement(u.S,{value:E?"invites":"users",options:A,onChange:I})),D&&e.createElement(M.Qj,{href:"org/users/invite"},"Invite"),s&&e.createElement(M.Qj,{href:s,target:"_blank",rel:"noopener"},t))});function le(t){const s=U(t.users);return{users:o(t.users),searchQuery:U(t.users),page:t.users.page,totalPages:t.users.totalPages,perPage:t.users.perPage,invitees:J(t.invites,s),externalUserMngInfo:t.users.externalUserMngInfo,isLoading:t.users.isLoading,rolesLoading:t.users.rolesLoading}}const ce={loadUsers:c,fetchInvitees:R.nW,changePage:w,changeSort:_,updateUser:L,removeUser:K},ie=(0,O.connect)(le,ce),te=({users:t,page:s,totalPages:a,invitees:i,externalUserMngInfo:d,isLoading:I,rolesLoading:E,loadUsers:A,fetchInvitees:p,changePage:D,updateUser:y,removeUser:ue,changeSort:me})=>{const[k,ge]=(0,e.useState)(!1),se=d?(0,b.a)(d):"";(0,e.useEffect)(()=>{A(),p()},[p,A]);const Ee=(q,fe)=>{y({...fe,role:q})},ve=q=>ue(q.userId),he=()=>{ge(!k)},Pe=()=>k?e.createElement(G,{invitees:i}):e.createElement(Q.q,{users:t,orgId:m.Vt.user.orgId,rolesLoading:E,onRoleChange:Ee,onRemoveUser:ve,fetchData:me,changePage:D,page:s,totalPages:a});return e.createElement(x.T.Contents,{isLoading:!I},e.createElement(oe,{onShowInvites:he,showInvites:k}),se&&e.createElement("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:se}}),I&&Pe())},ne=ie(te);function de(){return e.createElement(x.T,{navId:"users"},e.createElement(ne,null))}}}]);

//# sourceMappingURL=UsersListPage.ba920a113f493d39cf29.js.map
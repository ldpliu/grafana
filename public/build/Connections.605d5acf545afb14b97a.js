"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5981],{48464:(ne,$,o)=>{o.d($,{Z:()=>y});var e=o(31733),g=o(41164),u=o(76804),m=o(51343),p=o(89962);class y extends e.PureComponent{render(){const{searchQuery:x,linkButton:f,setSearchQuery:O,target:b,placeholder:w="Search by name or type",sortPicker:P}=this.props,U={href:f?.href,disabled:f?.disabled};return b&&(U.target=b),e.createElement("div",{className:"page-action-bar"},e.createElement(g._,{grow:!0},e.createElement(u.H,{value:x,onChange:O,placeholder:w})),P&&e.createElement(p.P,{onChange:P.onChange,value:P.value,getSortOptions:P.getSortOptions}),f&&e.createElement(m.Qj,{...U},f.title))}}},89962:(ne,$,o)=>{o.d($,{P:()=>x});var e=o(31733),g=o(59326),u=o(38834),m=o(49311),p=o(86434),y=o(4502);const c=()=>(0,y.getGrafanaSearcher)().getSortOptions();function x({onChange:f,value:O,placeholder:b,filter:w,getSortOptions:P,isClearable:U}){const h=(0,g.Z)(async()=>{const F=await(P??c)();return w?F.filter(G=>w.includes(G.value)):F},[P,w]);if(h.loading)return null;const K=!!(O?.includes("desc")||O?.startsWith("-"));return e.createElement(u.Ph,{key:O,width:28,onChange:f,value:h.value?.find(F=>F.value===O)??null,options:h.value,"aria-label":"Sort",placeholder:b??`Sort (Default ${p.yw.label})`,prefix:e.createElement(m.J,{name:K?"sort-amount-down":"sort-amount-up"}),isClearable:U})}},13942:(ne,$,o)=>{o.r($),o.d($,{default:()=>Xt});var e=o(31733),g=o(97890),u=o(13341),m=o(42342),p=o(24477),y=o(50186),c=o(76932),x=o(59889),f=o(76067),O=o(61375),b=o(75923),w=o(53166),P=o(6679),U=o(41431),h=o(96305),K=o(22790);const F=t=>({heading:(0,c.css)({fontSize:t.typography.h5.fontSize,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:t.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:t.typography.bodySmall.fontSize}),card:(0,c.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,c.css)({marginRight:t.spacing(3),marginLeft:t.spacing(1),width:t.spacing(7),maxHeight:t.spacing(7)})}),G=({items:t,onClickItem:a})=>{const n=(0,f.wW)(F);return e.createElement(U.r,{gap:1.5,minColumnWidth:44},t.map(s=>e.createElement(h.Z,{key:s.id,className:n.card,href:s.url,onClick:r=>{a&&a(r,s)}},e.createElement(h.Z.Heading,{className:n.heading},s.name),e.createElement(h.Z.Figure,{align:"center",className:n.figure},e.createElement("img",{className:n.logo,src:s.logo,alt:""})),s.angularDetected?e.createElement(h.Z.Meta,{className:n.meta},e.createElement(K.Nq,null)):null)))};var Q=o(49311);const Ce=t=>({categoryHeader:(0,c.css)`
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  `,categoryLabel:(0,c.css)`
    margin-bottom: 0px;
    margin-left: 8px;
  `}),Ne=({iconName:t,label:a})=>{const n=(0,f.wW)(Ce);return e.createElement("div",{className:n.categoryHeader},e.createElement(Q.J,{name:t,size:"xl"}),e.createElement("h3",{className:n.categoryLabel},a))};var xe=o(5572),D=o(51343);const se=t=>({modal:(0,c.css)`
    width: 500px;
  `,modalContent:(0,c.css)`
    overflow: visible;
    color: ${t.colors.text.secondary};

    a {
      color: ${t.colors.text.link};
    }
  `,description:(0,c.css)`
    margin-bottom: ${t.spacing(2)};
  `,bottomSection:(0,c.css)`
    display: flex;
    border-top: 1px solid ${t.colors.border.weak};
    padding-top: ${t.spacing(3)};
    margin-top: ${t.spacing(3)};
  `,actionsSection:(0,c.css)`
    display: flex;
    justify-content: end;
    margin-top: ${t.spacing(3)};
  `,warningIcon:(0,c.css)`
    color: ${t.colors.warning.main};
    padding-right: ${t.spacing()};
    margin-top: ${t.spacing(.25)};
  `,header:(0,c.css)`
    display: flex;
    align-items: center;
  `,headerTitle:(0,c.css)`
    margin: 0;
  `,headerLogo:(0,c.css)`
    margin-right: ${t.spacing(2)};
    width: 32px;
    height: 32px;
  `});function be({item:t,isOpen:a,onDismiss:n}){const s=(0,f.wW)(se);return e.createElement(xe.u,{className:s.modal,contentClassName:s.modalContent,title:e.createElement(Pe,{item:t}),isOpen:a,onDismiss:n},e.createElement("div",null,e.createElement("div",null,t.description&&e.createElement("div",{className:s.description},t.description),e.createElement("div",null,"Links",e.createElement("br",null),e.createElement("a",{href:`https://grafana.com/grafana/plugins/${t.id}`,title:`${t.name} on Grafana.com`,target:"_blank",rel:"noopener noreferrer"},t.name))),e.createElement("div",{className:s.bottomSection},e.createElement("div",{className:s.warningIcon},e.createElement(Q.J,{name:"exclamation-triangle"})),e.createElement("div",null,e.createElement("p",null,"Editors cannot add new connections. You may check to see if it is already configured in"," ",e.createElement("a",{href:"/connections/datasources"},"Data sources"),"."),e.createElement("p",null,"To add a new connection, contact your Grafana admin."))),e.createElement("div",{className:s.actionsSection},e.createElement(D.zx,{onClick:n},"Okay"))))}function Pe({item:t}){const a=(0,f.wW)(se);return e.createElement("div",null,e.createElement("div",{className:a.header},t.logo&&e.createElement("img",{className:a.headerLogo,src:t.logo,alt:`logo of ${t.name}`}),e.createElement("h4",{className:a.headerTitle},t.name)))}const Te=()=>({noResults:(0,c.css)`
    text-align: center;
    padding: 50px 0;
    font-style: italic;
  `}),Ae=()=>{const t=(0,f.wW)(Te);return e.createElement("p",{className:t.noResults},"No results matching your query were found.")};var oe=o(64516);const Ie=t=>({searchContainer:(0,c.css)`
    display: flex;
    margin: 16px 0;
    justify-content: space-between;

    position: sticky;
    top: 0;
    background-color: ${t.colors.background.primary};
    z-index: 2;
    padding: ${t.spacing(2)};
    margin: 0 -${t.spacing(2)};
  `}),Le=(0,w.t)("connections.search.placeholder","Search all"),we=({onChange:t})=>{const a=(0,f.wW)(Ie);return e.createElement("div",{className:a.searchContainer},e.createElement(oe.I,{onChange:t,prefix:e.createElement(Q.J,{name:"search"}),placeholder:Le,"aria-label":"Search all"}))},Me=()=>({spacer:(0,c.css)`
    height: 16px;
  `,modal:(0,c.css)`
    width: 500px;
  `,modalContent:(0,c.css)`
    overflow: visible;
  `});function Ze(){const[t,a]=(0,e.useState)(""),[n,s]=(0,e.useState)(!1),[r,i]=(0,e.useState)(null),l=(0,f.wW)(Me),d=b.Vt.hasPermission(m.AccessControlAction.DataSourcesCreate),v=E=>{a(E.currentTarget.value.toLowerCase())},{error:N,plugins:S,isLoading:T}=(0,P.Pj)({keyword:t,type:x.zV.datasource}),M=(0,e.useMemo)(()=>S.map(E=>({id:E.id,name:E.name,description:E.description,logo:E.info.logos.small,url:p.Z.DataSourcesDetails.replace(":id",E.id),angularDetected:E.angularDetected})),[S]),B=(E,L)=>{d||(E.preventDefault(),E.stopPropagation(),A(L))},A=E=>{s(!0),i(E)},H=()=>{s(!1),i(null)},Z=(0,e.useMemo)(()=>!T&&!N&&S.length<1,[T,N,S]),I=(0,w.t)("connections.connect-data.category-header-label","Data sources");return e.createElement(e.Fragment,null,r&&e.createElement(be,{item:r,isOpen:n,onDismiss:H}),e.createElement(we,{onChange:v}),e.createElement("div",{className:l.spacer}),e.createElement(Ne,{iconName:"database",label:I}),T?e.createElement(O.u,{text:"Loading..."}):N?e.createElement("p",null,"Error: ",N.message):e.createElement(G,{items:M,onClickItem:B}),Z&&e.createElement(Ae,null))}function Oe(){return e.createElement(y.T,{navId:"connections-add-new-connection"},e.createElement(y.T.Contents,null,e.createElement(Ze,null)))}var k=o(25111),re=o(50248),Re=o(99923);function We(){const t="standalone-plugin-page-/connections/add-new-connection",{id:a}=(0,g.UO)(),r=!!(0,m.useSelector)(i=>i.navIndex)[t]?t:"connections-add-new-connection";return e.createElement(Re.Q,{pluginId:a,navId:r,notFoundComponent:e.createElement(Be,null),notFoundNavModel:{text:"Unknown datasource",subTitle:"No datasource with this ID could be found.",active:!0}})}function Be(){const{id:t}=(0,g.UO)();return e.createElement(k.b,{severity:m.AppNotificationSeverity.Warning,title:""},"Maybe you mistyped the URL or the plugin with the id ",e.createElement(re.C,{text:t,color:"orange"})," is unavailable.",e.createElement("br",null),"To see a list of available datasources please ",e.createElement("a",{href:p.Z.AddNewConnection},"click here"),".")}var R=o(85498);function $e(){const t=b.Vt.hasPermission(m.AccessControlAction.DataSourcesCreate),a=(0,u.d7)();return t?e.createElement(D.Qj,{icon:"plus",href:R.config.appSubUrl+a.New},e.createElement(w.cC,{i18nKey:"data-sources.datasource-add-button.label"},"Add new data source")):null}var Ue=o(88511),C=o(77758),z=o(49876),Fe=o(14496),ke=o(37739),ce=o(86796);function J({dataSource:t,hasWriteRights:a,hasExploreRights:n}){const s=(0,u.d7)(),r=R.config.appSubUrl+s.Edit.replace(/:uid/gi,t.uid),i=(0,f.wW)(ze);return e.createElement(h.Z,{href:a?r:void 0},e.createElement(h.Z.Heading,null,t.name),e.createElement(h.Z.Figure,null,e.createElement("img",{src:t.typeLogoUrl,alt:"",height:"40px",width:"40px",className:i.logo})),e.createElement(h.Z.Meta,null,[t.typeName,t.url,t.isDefault&&e.createElement(Fe.V,{key:"default-tag",name:"default",colorIndex:1})]),e.createElement(h.Z.Tags,null,e.createElement(D.Qj,{icon:"apps",fill:"outline",variant:"secondary",href:`dashboard/new-with-ds/${t.uid}`,onClick:()=>{(0,C.hJ)({grafana_version:R.config.buildInfo.version,datasource_uid:t.uid,plugin_name:t.typeName,path:location.pathname})}},"Build a dashboard"),n&&e.createElement(D.Qj,{icon:"compass",fill:"outline",variant:"secondary",className:i.button,href:(0,ce.i)(t),onClick:()=>{(0,C.U4)({grafana_version:R.config.buildInfo.version,datasource_uid:t.uid,plugin_name:t.typeName,path:location.pathname})}},"Explore")))}function He({hasExploreRights:t}){const a=(0,f.wW)(je);return e.createElement(h.Z,null,e.createElement(h.Z.Heading,null,e.createElement(z.Z,{width:140})),e.createElement(h.Z.Figure,null,e.createElement(z.Z,{width:40,height:40,containerClassName:a.figure})),e.createElement(h.Z.Meta,null,e.createElement(z.Z,{width:120})),e.createElement(h.Z.Tags,null,e.createElement(ke.K,{direction:"row",gap:2},e.createElement(z.Z,{height:32,width:179,containerClassName:a.button}),t&&e.createElement(z.Z,{height:32,width:107,containerClassName:a.button}))))}J.Skeleton=He;const je=()=>({button:(0,c.css)({lineHeight:1}),figure:(0,c.css)({lineHeight:1})}),ze=t=>({logo:(0,c.css)({objectFit:"contain"}),button:(0,c.css)({marginLeft:t.spacing(2)})});var Ve=o(48464);const Y="alpha-asc",le="alpha-desc",Qe=[{label:"Sort by A\u2013Z",value:Y},{label:"Sort by Z\u2013A",value:le}];function Ke(){const t=(0,m.useDispatch)(),a=(0,e.useCallback)(l=>t((0,u.zT)(l)),[t]),n=(0,m.useSelector)(({dataSources:l})=>(0,u.IO)(l)),s=(0,e.useCallback)(l=>t((0,u.Nu)(l.value===Y)),[t]),r=(0,m.useSelector)(({dataSources:l})=>(0,u.IA)(l)),i={onChange:s,value:r?Y:le,getSortOptions:()=>Promise.resolve(Qe)};return e.createElement(Ve.Z,{searchQuery:n,setSearchQuery:a,key:"action-bar",sortPicker:i})}function Ge(){const{isLoading:t}=(0,u.zJ)(),a=(0,m.useSelector)(l=>(0,u.mt)(l.dataSources)),n=(0,m.useSelector)(({dataSources:l})=>(0,u.r7)(l)),s=b.Vt.hasPermission(m.AccessControlAction.DataSourcesCreate),r=b.Vt.hasPermission(m.AccessControlAction.DataSourcesWrite),i=b.Vt.hasPermission(m.AccessControlAction.DataSourcesExplore);return e.createElement(Je,{dataSources:a,dataSourcesCount:n,isLoading:t,hasCreateRights:s,hasWriteRights:r,hasExploreRights:i})}function Je({dataSources:t,dataSourcesCount:a,isLoading:n,hasCreateRights:s,hasWriteRights:r,hasExploreRights:i}){const l=(0,f.wW)(Ye),d=(0,u.d7)(),v=(0,g.TH)();if((0,e.useEffect)(()=>{(0,C.dF)({grafana_version:R.config.buildInfo.version,path:v.pathname})},[v]),!n&&a===0)return e.createElement(Ue.Z,{buttonDisabled:!s,title:"No data sources defined",buttonIcon:"database",buttonLink:d.New,buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/?utm_source=grafana_ds_list#data-sources",proTipLinkTitle:"Learn more",proTipTarget:"_blank"});const N=()=>n?new Array(20).fill(null).map((S,T)=>e.createElement(J.Skeleton,{key:T,hasExploreRights:i})):t.map(S=>e.createElement("li",{key:S.uid},e.createElement(J,{dataSource:S,hasWriteRights:r,hasExploreRights:i})));return e.createElement(e.Fragment,null,e.createElement(Ke,null),e.createElement("ul",{className:l.list},N()))}const Ye=t=>({list:(0,c.css)({listStyle:"none",display:"grid"})});function Xe(){const a=(0,m.useSelector)(({dataSources:n})=>(0,u.r7)(n))>0?e.createElement($e,null):void 0;return e.createElement(y.T,{navId:"connections-datasources",actions:a},e.createElement(y.T.Contents,null,e.createElement(Ge,null)))}var X=o(42474),ie=o(93793),qe=o(62873),_e=o(15752);function et({uid:t}){(0,u.E)(t);const a=(0,m.useDispatch)(),n=(0,m.useSelector)(d=>d.dataSources.dataSource),s=(0,m.useSelector)(d=>d.plugins.dashboards),r=(0,m.useSelector)(d=>d.plugins.isLoadingPluginDashboards);(0,e.useEffect)(()=>{n.id>0&&a((0,qe.m3)())},[a,n.id]);const i=(d,v)=>{a((0,ie.$j)({pluginId:d.pluginId,path:d.path,overwrite:v,inputs:[{name:"*",type:"datasource",pluginId:n.type,value:n.name}]},d.title))},l=({uid:d})=>{a((0,ie.fG)(d))};return e.createElement(tt,{dashboards:s,isLoading:r,onImportDashboard:i,onRemoveDashboard:l})}const tt=({isLoading:t,dashboards:a,onImportDashboard:n,onRemoveDashboard:s})=>t?e.createElement(X.Z,null):e.createElement(_e.Z,{dashboards:a,onImport:n,onRemove:s});var de=o(66261),ue=o(90845),q=o(5163),_=o(45246);function me(t){const{uid:a}=(0,g.UO)(),n=(0,g.TH)(),s=(0,q.wl)(a),r=(0,q.Qs)(s.type),i=(0,P.bJ)(s.type),l=new URLSearchParams(n.search),d=t||l.get("page"),{plugin:v,loadError:N,loading:S}=(0,q._l)(),T=(0,de.F)()?.getInstanceSettings(a),M=!!(T?.meta?.alerting??!1),B=T?.type==="alertmanager",A=M||B,H=(0,m.useSelector)(L=>L.navIndex),Z=d?`datasource-${d}-${a}`:`datasource-settings-${a}`;let I={node:{text:"Data Source Nav Node"},main:{text:"Data Source Nav Node"}};if(N){const L={text:N,subTitle:"Data Source Error",icon:"exclamation-triangle"};I={node:L,main:L}}return(S||!v)&&(I=(0,ue.ht)(H,Z,(0,_.xG)("settings"))),v&&(I=(0,ue.ht)(H,Z,(0,_.nI)((0,_.B1)(s,v),d||"settings"))),{navId:"connections-datasources",pageNav:{...I.main,dataSourcePluginName:i?.name||v?.meta.name||"",active:!0,text:s.name,subTitle:`Type: ${r.name}`,children:(I.main.children||[]).map(L=>({...L,url:L.url?.replace("datasources/edit/","/connections/datasources/edit/")}))},dataSourceHeader:{alertingSupported:A}}}function at(){const{uid:t}=(0,g.UO)(),{navId:a,pageNav:n}=me("dashboards");return e.createElement(y.T,{navId:a,pageNav:n},e.createElement(y.T.Contents,null,e.createElement(et,{uid:t})))}var ee=o(69781),nt=o(93670),st=o(90384),ge=o(56315),ot=o(33500),rt=o(83599),W=o(21568),pe=o(41164),ct=o(76772);function lt({dataSourceName:t,isDefault:a,onDefaultChange:n,onNameChange:s,disabled:r}){return e.createElement(e.Fragment,null,e.createElement("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings"},e.createElement("div",{className:"gf-form-inline"},e.createElement("div",{className:"gf-form max-width-30"},e.createElement(pe._,{label:"Name",tooltip:`The name is used when you select the data source in panels. The default data source is
              'preselected in new panels.`,grow:!0,disabled:r},e.createElement(oe.I,{id:"basic-settings-name",type:"text",value:t,placeholder:"Name",onChange:i=>s(i.currentTarget.value),required:!0,"data-testid":W.wl.pages.DataSource.name}))),e.createElement(pe._,{label:"Default",labelWidth:8,disabled:r},e.createElement(ct.x,{id:"basic-settings-default",value:a,onChange:i=>{n(i.currentTarget.checked)}})))))}function ea({enabled:t}){const a=useStyles2(it);return React.createElement("div",{className:a.badge},t?React.createElement(Badge,{color:"green",icon:"check-circle",text:"Alerting supported"}):React.createElement(Badge,{color:"orange",icon:"exclamation-triangle",text:"Alerting not supported"}))}const it=t=>({badge:css`
    margin-bottom: ${t.spacing(2)};
  `});function dt({canSave:t,canDelete:a,onDelete:n,onSubmit:s,onTest:r}){return e.createElement("div",{className:"gf-form-button-row"},e.createElement(D.zx,{type:"button",variant:"destructive",disabled:!a,onClick:n,"data-testid":W.wl.pages.DataSource.delete},"Delete"),t&&e.createElement(D.zx,{type:"submit",variant:"primary",disabled:!t,onClick:s,"data-testid":W.wl.pages.DataSource.saveAndTest},"Save & test"),!t&&e.createElement(D.zx,{variant:"primary",onClick:r},"Test"))}var ut=o(82689),mt=o(85853),gt=o(83811);const pt="datasources.settings.cloudInfoBox.isDismissed";function ht({dataSource:t}){let a="",n="";if(t.readOnly||(t.version??0)>2||gt.config.buildInfo.edition!==ut.e.OpenSource)return null;switch(t.type){case"prometheus":a="Prometheus",n="Loki";break;case"loki":a="Loki",n="Prometheus";break;default:return null}return e.createElement(mt.G,{storageKey:pt,defaultValue:!1},(s,r)=>s?null:e.createElement(k.b,{title:`Configure your ${a} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{r(!0)}},"Or skip the effort and get ",a," (and ",n,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",e.createElement("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${t.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage."},"free-forever Grafana Cloud plan"),"."))}const ft="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function he(){return e.createElement(k.b,{"data-testid":W.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source"},ft)}function Et({dataSourceRights:t,onDelete:a}){const{readOnly:n,hasDeleteRights:s}=t,r=!n&&s,i=()=>history.back();return e.createElement(e.Fragment,null,n&&e.createElement(he,null),e.createElement("div",{className:"gf-form-button-row"},r&&e.createElement(D.zx,{type:"submit",variant:"destructive",onClick:a},"Delete"),e.createElement(D.zx,{variant:"secondary",fill:"outline",type:"button",onClick:i},"Back")))}const vt="You are not allowed to modify this data source. Please contact your server admin to update this data source.";function St(){return e.createElement(k.b,{severity:"info",title:"Missing rights"},vt)}function yt({plugin:t,pageId:a}){if(!t||!t.configPages)return null;const n=t.configPages.find(({id:s})=>s===a);return n?e.createElement(n.body,{plugin:t,query:{}}):e.createElement("div",null,"Page not found: ",n)}var Dt=o(80091);class Ct extends e.PureComponent{constructor(a){super(a),this.element=null,this.onModelChanged=n=>{this.props.onModelChange(n)},this.scopeProps={ctrl:{datasourceMeta:a.dataSourceMeta,current:(0,ee.cloneDeep)(a.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:a}=this.props;if(this.element&&!a.components.ConfigEditor){const n=(0,Dt.w)(),s='<plugin-component type="datasource-config-ctrl" />';this.component=n.load(this.element,this.scopeProps,s)}}componentDidUpdate(a){const{plugin:n}=this.props;!n.components.ConfigEditor&&this.props.dataSource!==a.dataSource&&(this.scopeProps.ctrl.current=(0,ee.cloneDeep)(this.props.dataSource),this.component?.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:a,dataSource:n}=this.props;return a?e.createElement("div",{ref:s=>this.element=s},a.components.ConfigEditor&&e.createElement(a.components.ConfigEditor,{options:n,onOptionsChange:this.onModelChanged})):null}}var Nt=o(51767);function xt({state:t}){return e.createElement("div",{className:"gf-form"},e.createElement("div",{className:"gf-form-label width-10"},"Plugin state"),e.createElement("div",{className:"gf-form-label gf-form-label--transparent"},e.createElement(Nt.u,{state:t})))}var fe=o(34037);const bt=(t,a)=>({content:(0,c.css)`
      color: ${t.colors.text.secondary};
      padding-top: ${a?t.spacing(1):0};
      max-height: 50vh;
      overflow-y: auto;
    `,disabled:(0,c.css)`
      pointer-events: none;
      color: ${t.colors.text.secondary};
    `}),Ee=({title:t,exploreUrl:a,dataSourceId:n,onDashboardLinkClicked:s})=>{const r=(0,f.l4)(),l=bt(r,!!t),d=b.Vt.hasPermission(m.AccessControlAction.DataSourcesExplore);return e.createElement("div",{className:l.content},"Next, you can start to visualize data by"," ",e.createElement(fe.r,{"aria-label":"Create a dashboard",href:`/dashboard/new-with-ds/${n}`,className:"external-link",onClick:s},"building a dashboard"),", or by querying data in the"," ",e.createElement(fe.r,{"aria-label":"Explore data",className:(0,c.cx)("external-link",{[`${l.disabled}`]:!d,"test-disabled":!d}),href:a},"Explore view"),".")};Ee.displayName="AlertSuccessMessage";const Pt=new Set(["success","info","warning","error"]),Tt=t=>Pt.has(t),At=t=>t.toLowerCase()==="ok"?"success":Tt(t)?t:"info";function It({testingStatus:t,exploreUrl:a,dataSource:n}){const s=At(t?.status??"error"),r=t?.message,i=t?.details?.message,l=t?.details?.verboseMessage,d=()=>{(0,C.hJ)({grafana_version:R.config.buildInfo.version,datasource_uid:n.uid,plugin_name:n.typeName,path:location.pathname})};return r?e.createElement("div",{className:"gf-form-group p-t-2"},e.createElement(k.b,{severity:s,title:r,"data-testid":W.wl.pages.DataSource.alert},t?.details&&e.createElement(e.Fragment,null,i,s==="success"?e.createElement(Ee,{title:r,exploreUrl:a,dataSourceId:n.uid,onDashboardLinkClicked:d}):null,l?e.createElement("details",{style:{whiteSpace:"pre-wrap"}},String(l)):null))):null}function Lt({uid:t,pageId:a}){(0,u.E)(t);const n=(0,m.useDispatch)(),s=(0,u.wl)(t),r=(0,u.Qs)(s.type),i=(0,u._l)(),l=(0,u.YY)(t),d=(0,u.Rz)(t),v=(0,u.q6)(),N=(0,u.hw)(t),S=(0,u.qj)(),T=A=>n((0,u.yr)(A)),M=A=>n((0,u.BX)(A)),B=A=>n((0,u.rl)(A));return e.createElement(wt,{pageId:a,dataSource:s,dataSourceMeta:r,dataSourceSettings:i,dataSourceRights:l,exploreUrl:d,onDelete:v,onDefaultChange:T,onNameChange:M,onOptionsChange:B,onTest:N,onUpdate:S})}function wt({pageId:t,dataSource:a,dataSourceMeta:n,dataSourceSettings:s,dataSourceRights:r,exploreUrl:i,onDelete:l,onDefaultChange:d,onNameChange:v,onOptionsChange:N,onTest:S,onUpdate:T}){const{plugin:M,loadError:B,testingStatus:A,loading:H}=s,{readOnly:Z,hasWriteRights:I,hasDeleteRights:E}=r,L=a.id>0,te=(0,de.F)()?.getInstanceSettings(a.uid),De=async j=>{j.preventDefault(),(0,C.ij)("save_and_test");try{await T({...a}),(0,C.aL)({item:"success"}),rt.Z.publish(new nt.Ix)}catch(V){(0,C.aL)({item:"fail",error:V});return}S()},qt=(0,e.useMemo)(()=>{const j=["grafana-pdc-app","grafana-auth-app"],V=st.y.DataSourceConfig,{extensions:ae}=(0,ot.QK)({extensionPointId:V});return ae.filter(_t=>j.includes(_t.pluginId))},[]);return B?e.createElement(Et,{dataSourceRights:r,onDelete:()=>{(0,C.ij)("delete"),l()}}):H?e.createElement(X.Z,null):!L||!te?null:t?e.createElement(ge.n,{instanceSettings:te},e.createElement(yt,{pageId:t,plugin:M})):e.createElement("form",{onSubmit:De},!I&&e.createElement(St,null),Z&&e.createElement(he,null),n.state&&e.createElement(xt,{state:n.state}),e.createElement(ht,{dataSource:a}),e.createElement(lt,{dataSourceName:a.name,isDefault:a.isDefault,onDefaultChange:d,onNameChange:v,disabled:Z||!I}),M&&e.createElement(ge.n,{instanceSettings:te},e.createElement(Ct,{plugin:M,dataSource:a,dataSourceMeta:n,onModelChange:N})),qt.map(j=>{const V=j.component;return e.createElement("div",{key:j.id},e.createElement(V,{context:{dataSource:(0,ee.omit)(a,["secureJsonData"]),dataSourceMeta:n,testingStatus:A,setJsonData:ae=>N({...a,jsonData:{...a.jsonData,...ae}})}}))}),e.createElement(It,{testingStatus:A,exploreUrl:i,dataSource:a}),e.createElement(dt,{onSubmit:De,onDelete:()=>{(0,C.ij)("delete"),l()},onTest:()=>{(0,C.ij)("test"),S()},canDelete:!Z&&E,canSave:!Z&&I}))}function Mt({uid:t}){const a=(0,u.wl)(t),n=b.Vt.hasPermission(m.AccessControlAction.DataSourcesExplore);return e.createElement(e.Fragment,null,n&&e.createElement(D.Qj,{variant:"secondary",size:"sm",href:(0,ce.i)(a),onClick:()=>{(0,C.ij)("explore"),(0,C.U4)({grafana_version:R.config.buildInfo.version,datasource_uid:a.uid,plugin_name:a.typeName,path:location.pathname})}},"Explore data"),e.createElement(D.Qj,{size:"sm",variant:"secondary",href:`dashboard/new-with-ds/${a.uid}`,onClick:()=>{(0,C.ij)("build_a_dashboard"),(0,C.hJ)({grafana_version:R.config.buildInfo.version,datasource_uid:a.uid,plugin_name:a.typeName,path:location.pathname})}},"Build a dashboard"))}const Zt=t=>{const a=[],n=t.alertingSupported;return a.push({label:"Type",value:t.dataSourcePluginName}),a.push({label:"Alerting",value:e.createElement(re.C,{color:n?"green":"red",text:n?"Supported":"Not supported"})}),a};function Ot({title:t}){const a=(0,f.wW)(Rt);return e.createElement("div",{className:a.container},e.createElement("h1",{className:a.title},t))}const Rt=t=>({container:(0,c.css)({marginBottom:t.spacing(2),h1:{display:"inline-block"}}),title:(0,c.css)({display:"inline-block",margin:"0 0 0 0",maxWidth:"40vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"})});function Wt({uid:t,pageId:a}){const{navId:n,pageNav:s,dataSourceHeader:r}=me(),i=Zt({dataSourcePluginName:s.dataSourcePluginName,alertingSupported:r.alertingSupported});return e.createElement(y.T,{navId:n,pageNav:s,renderTitle:l=>e.createElement(Ot,{title:l}),info:i,actions:e.createElement(Mt,{uid:t})},e.createElement(y.T.Contents,null,e.createElement(Lt,{uid:t,pageId:a})))}const Bt=Wt;function $t(){const{uid:t}=(0,g.UO)(),a=(0,g.TH)(),s=new URLSearchParams(a.search).get("page");return e.createElement(Bt,{uid:t,pageId:s})}var Ut=o(76804),ve=o(65650),Ft=o(79106),Se=o(22525);function kt({filterByPluginType:t}){let a=(0,P.UQ)(t);const{isLoading:n}=(0,P.ZV)(),s=(0,f.wW)(jt);return n||a.length===0?null:e.createElement(k.b,{title:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.","data-testid":W.wl.pages.PluginsList.signatureErrorNotice,severity:"warning"},e.createElement("p",null,"The following plugins are disabled and not shown in the list below:"),e.createElement(ve.a,{items:a,className:s.list,renderItem:r=>e.createElement("div",{className:s.wrapper},e.createElement(Ft.Lh,{spacing:"sm",justify:"flex-start",align:"center"},e.createElement("strong",null,r.pluginId),e.createElement(Se.o,{status:Ht(r.errorCode),className:s.badge})))}),e.createElement("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:s.docsLink,target:"_blank",rel:"noreferrer"},e.createElement(Q.J,{name:"book"})," Read more about plugin signing"))}function Ht(t){switch(t){case x.w2.invalidSignature:return x.Xy.invalid;case x.w2.missingSignature:return x.Xy.missing;case x.w2.modifiedSignature:return x.Xy.modified;default:return x.Xy.missing}}function jt(t){return{list:(0,c.css)({listStyleType:"circle"}),wrapper:(0,c.css)({marginTop:t.spacing(1)}),badge:(0,c.css)({marginTop:0}),docsLink:(0,c.css)({display:"inline-block",color:t.colors.text.link,marginTop:t.spacing(2)})}}function zt({onClick:t,dataSourcePlugin:a}){const n=a.module==="phantom",s=!n&&!a.unlicensed,r=a.info?.links?.length>0?a.info.links[0]:null,i=r?.target??"_blank",l=(0,f.wW)(Vt);return e.createElement(h.Z,{className:(0,c.cx)(l.card,"card-parent"),onClick:s?t:()=>{}},e.createElement(h.Z.Heading,{className:l.heading,"aria-label":W.wl.pages.AddDataSource.dataSourcePluginsV2(a.name)},a.name),e.createElement(h.Z.Figure,{align:"center",className:l.figure},e.createElement("img",{className:l.logo,src:a.info.logos.small,alt:""})),e.createElement(h.Z.Description,{className:l.description},a.info.description),!n&&e.createElement(h.Z.Meta,{className:l.meta},e.createElement(Se.o,{status:a.signature})),e.createElement(h.Z.Actions,{className:l.actions},r&&e.createElement(D.Qj,{"aria-label":`${a.name}, learn more.`,href:`${r.url}?utm_source=grafana_add_ds`,onClick:d=>d.stopPropagation(),rel:"noopener",target:i,variant:"secondary"},r.name)))}function Vt(t){return{heading:(0,c.css)({fontSize:t.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:t.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:t.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,c.css)({marginRight:t.v1.spacing.lg,marginLeft:t.v1.spacing.sm,width:t.spacing(7),maxHeight:t.spacing(7)})}}function ye({dataSourcePlugins:t,onClickDataSourceType:a}){return!t||!t.length?null:e.createElement(ve.a,{items:t,getItemKey:n=>n.id.toString(),renderItem:n=>e.createElement(zt,{dataSourcePlugin:n,onClick:()=>a(n)}),className:(0,c.css)`
        > li {
          margin-bottom: 2px;
        }
      `})}function Qt({categories:t,onClickDataSourceType:a}){const n=`${p.Z.AddNewConnection}?cat=data-source`;return e.createElement(e.Fragment,null,t.map(({id:s,title:r,plugins:i})=>e.createElement("div",{className:"add-data-source-category",key:s},e.createElement("div",{className:"add-data-source-category__header",id:s},r),e.createElement(ye,{dataSourcePlugins:i,onClickDataSourceType:a}))),e.createElement("div",{className:"add-data-source-more"},e.createElement(D.Qj,{variant:"secondary",href:n,target:"_self",rel:"noopener"},"Find more data source plugins")))}function Kt(){(0,u.OU)();const t=(0,m.useDispatch)(),a=(0,m.useSelector)(d=>(0,u.I5)(d.dataSources)),n=(0,m.useSelector)(d=>d.dataSources.dataSourceTypeSearchQuery),s=(0,m.useSelector)(d=>d.dataSources.isLoadingDataSourcePlugins),r=(0,m.useSelector)(d=>d.dataSources.categories),i=(0,u.nH)(),l=d=>t((0,u.Ht)(d));return e.createElement(Gt,{dataSources:a,dataSourceCategories:r,searchQuery:n,isLoading:s,onAddDataSource:i,onSetSearchQuery:l})}function Gt({dataSources:t,dataSourceCategories:a,searchQuery:n,isLoading:s,onAddDataSource:r,onSetSearchQuery:i}){const l=(0,u.d7)();return s?e.createElement(X.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"page-action-bar"},e.createElement(Ut.H,{value:n,onChange:i,placeholder:"Filter by name or type"}),e.createElement("div",{className:"page-action-bar__spacer"}),e.createElement(D.Qj,{href:l.List,fill:"outline",variant:"secondary",icon:"arrow-left"},"Cancel")),!n&&e.createElement(kt,{filterByPluginType:x.zV.datasource}),e.createElement("div",null,n&&e.createElement(ye,{dataSourcePlugins:t,onClickDataSourceType:r}),!n&&e.createElement(Qt,{categories:a,onClickDataSourceType:r})))}function Jt(){return e.createElement(y.T,{navId:"connections-datasources",pageNav:{text:"Add data source",subTitle:"Choose a data source type",active:!0}},e.createElement(y.T.Contents,null,e.createElement(Kt,null)))}function Yt(){const{search:t}=(0,g.TH)();return e.createElement(g.l_,{to:{pathname:p.Z.AddNewConnection,search:t}})}function Xt(){const a=!!(0,m.useSelector)(n=>n.navIndex)["standalone-plugin-page-/connections/add-new-connection"];return e.createElement(u.Vj.Provider,{value:{New:p.Z.DataSourcesNew,List:p.Z.DataSources,Edit:p.Z.DataSourcesEdit,Dashboards:p.Z.DataSourcesDashboards}},e.createElement(g.rs,null,e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.Base,component:()=>e.createElement(g.l_,{to:p.Z.AddNewConnection})}),e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.DataSources,component:Xe}),e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.DataSourcesNew,component:Jt}),e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.DataSourcesDetails,component:We}),e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.DataSourcesEdit,component:$t}),e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.DataSourcesDashboards,component:at}),!a&&e.createElement(g.AW,{exact:!0,sensitive:!0,path:p.Z.AddNewConnection,component:Oe}),e.createElement(g.AW,{exact:!0,path:p.Z.ConnectDataOutdated,component:Yt}),e.createElement(g.l_,{from:`${p.Z.Base}/your-connections/:page`,to:`${p.Z.Base}/:page`}),e.createElement(g.l_,{from:p.Z.YourConnectionsOutdated,to:p.Z.DataSources}),e.createElement(g.AW,{component:()=>e.createElement(g.l_,{to:"/notfound"})})))}}}]);

//# sourceMappingURL=Connections.605d5acf545afb14b97a.js.map
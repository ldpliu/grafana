"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6034],{81654:(Je,M,d)=>{d.r(M),d.d(M,{default:()=>Ve,getHomeApp:()=>L});var a=d(31733),G=d(85498),e=d(77121),k=d(61356),X=d(69386),T=d(66172),c=d(76932),Q=d(55793),_=d(76067),Y=d(37739),D=d(49311);const B=()=>new e.U4({body:new e.QY({children:[new e.fy({body:new e.he({component:P})})]})});function P({showWelcomeHeader:n}){const t=(0,_.l4)(),r=(0,_.wW)(U);return a.createElement("div",{className:r.grid},n&&a.createElement($,{className:r.ctaContainer}),a.createElement(A,{className:r.flowBlock},a.createElement("div",null,a.createElement("h3",null,"How it works"),a.createElement("ul",{className:r.list},a.createElement("li",null,"Grafana alerting periodically queries data sources and evaluates the condition defined in the alert rule"),a.createElement("li",null,"If the condition is breached, an alert instance fires"),a.createElement("li",null,"Firing instances are routed to notification policies based on matching labels"),a.createElement("li",null,"Notifications are sent out to the contact points specified in the notification policy"))),a.createElement(Q.default,{src:`public/img/alerting/at_a_glance_${t.name.toLowerCase()}.svg`,width:void 0,height:void 0})),a.createElement(A,{className:r.gettingStartedBlock},a.createElement("h3",null,"Get started"),a.createElement(Y.K,{direction:"column"},a.createElement("ul",{className:r.list},a.createElement("li",null,a.createElement("strong",null,"Create an alert rule")," by adding queries and expressions from multiple data sources."),a.createElement("li",null,a.createElement("strong",null,"Add labels")," to your alert rules ",a.createElement("strong",null,"to connect them to notification policies")),a.createElement("li",null,a.createElement("strong",null,"Configure contact points")," to define where to send your notifications to."),a.createElement("li",null,a.createElement("strong",null,"Configure notification policies")," to route your alert instances to contact points.")),a.createElement("div",null,a.createElement(J,{href:"https://grafana.com/docs/grafana/latest/alerting/",title:"Read more in the Docs"})))),a.createElement(A,{className:r.videoBlock},a.createElement("iframe",{title:"Alerting - Introductory video",src:"https://player.vimeo.com/video/720001629?h=c6c1732f92",width:"960",height:"540",allow:"autoplay; fullscreen",allowFullScreen:!0,frameBorder:"0",style:{colorScheme:"light dark"}})))}const U=n=>({grid:(0,c.css)`
    display: grid;
    grid-template-rows: min-content auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: ${n.spacing(2)};
    width: 100%;
  `,ctaContainer:(0,c.css)`
    grid-column: 1 / span 5;
  `,flowBlock:(0,c.css)`
    grid-column: 1 / span 5;

    display: flex;
    flex-wrap: wrap;
    gap: ${n.spacing(1)};

    & > div {
      flex: 2;
      min-width: 350px;
    }
    & > svg {
      flex: 3;
      min-width: 500px;
    }
  `,videoBlock:(0,c.css)`
    grid-column: 3 / span 3;

    // Video required
    position: relative;
    padding: 56.25% 0 0 0; /* 16:9 */

    iframe {
      position: absolute;
      top: ${n.spacing(2)};
      left: ${n.spacing(2)};
      width: calc(100% - ${n.spacing(4)});
      height: calc(100% - ${n.spacing(4)});
      border: none;
    }
  `,gettingStartedBlock:(0,c.css)`
    grid-column: 1 / span 2;
    justify-content: space-between;
  `,list:(0,c.css)`
    margin: ${n.spacing(0,2)};
    & > li {
      margin-bottom: ${n.spacing(1)};
    }
  `});function $({className:n}){const t=(0,_.wW)(V);return a.createElement("div",{className:t.welcomeHeaderWrapper},a.createElement("div",{className:t.subtitle},"Learn about problems in your systems moments after they occur"),a.createElement(A,{className:(0,c.cx)(t.ctaContainer,n)},a.createElement(I,{title:"Alert rules",description:"Define the condition that must be met before an alert rule fires",href:"/alerting/list",hrefText:"Manage alert rules"}),a.createElement("div",{className:t.separator}),a.createElement(I,{title:"Contact points",description:"Configure who receives notifications and how they are sent",href:"/alerting/notifications",hrefText:"Manage contact points"}),a.createElement("div",{className:t.separator}),a.createElement(I,{title:"Notification policies",description:"Configure how firing alert instances are routed to contact points",href:"/alerting/routes",hrefText:"Manage notification policies"})))}const V=n=>({welcomeHeaderWrapper:(0,c.css)({color:n.colors.text.primary}),subtitle:(0,c.css)({color:n.colors.text.secondary,paddingBottom:n.spacing(2)}),ctaContainer:(0,c.css)`
    padding: ${n.spacing(4,2)};
    display: flex;
    gap: ${n.spacing(4)};
    justify-content: space-between;
    flex-wrap: wrap;

    ${n.breakpoints.down("lg")} {
      flex-direction: column;
    }
  `,separator:(0,c.css)`
    width: 1px;
    background-color: ${n.colors.border.medium};

    ${n.breakpoints.down("lg")} {
      display: none;
    }
  `});function I({title:n,description:t,href:r,hrefText:s}){const i=(0,_.wW)(z);return a.createElement("div",{className:i.container},a.createElement("h3",{className:i.title},n),a.createElement("div",{className:i.desc},t),a.createElement("div",{className:i.actionRow},a.createElement("a",{href:r,className:i.link},s)))}const z=n=>({container:(0,c.css)`
    flex: 1;
    min-width: 240px;
    display: grid;
    gap: ${n.spacing(1)};
    grid-template-columns: min-content 1fr 1fr 1fr;
    grid-template-rows: min-content auto min-content;
  `,title:(0,c.css)`
    margin-bottom: 0;
    grid-column: 2 / span 3;
    grid-row: 1;
  `,desc:(0,c.css)`
    grid-column: 2 / span 3;
    grid-row: 2;
  `,actionRow:(0,c.css)`
    grid-column: 2 / span 3;
    grid-row: 3;
    max-width: 240px;
  `,link:(0,c.css)`
    color: ${n.colors.text.link};
  `});function A({children:n,className:t}){const r=(0,_.wW)(j);return a.createElement("div",{className:(0,c.cx)(r.box,t)},n)}const j=n=>({box:(0,c.css)`
    padding: ${n.spacing(2)};
    background-color: ${n.colors.background.secondary};
    border-radius: ${n.shape.radius.default};
  `});function J({href:n,title:t}){const r=(0,_.wW)(K);return a.createElement("a",{href:n,className:r.link,rel:"noreferrer"},t," ",a.createElement(D.J,{name:"angle-right",size:"xl"}))}const K=n=>({link:(0,c.css)`
    display: block;
    color: ${n.colors.text.link};
  `});var Z=d(66261),ee=d(83811);function E({children:n}){const t=(0,_.wW)(te);return a.createElement("div",{className:t.sectionFooter},n&&a.createElement("div",null,n))}const te=n=>({sectionFooter:(0,c.css)({marginBottom:n.spacing(2)})});function ne({datasources:n}){const t=(0,_.wW)(ae),r=n.map(s=>a.createElement("div",{key:s.uid},s.settings?.meta.info.logos.small&&a.createElement("img",{className:t.dsImage,src:s.settings?.meta.info.logos.small,alt:s.settings?.name||s.uid}),a.createElement("span",null,s.settings?.name||s.uid)));return a.createElement("div",{className:t.dsContainer},r)}const ae=n=>({dsImage:(0,c.css)({label:"ds-image",width:"16px",marginRight:"3px"}),dsContainer:(0,c.css)({display:"flex",flexDirection:"row",fontSize:n.typography.bodySmall.fontSize,gap:"10px",marginBottom:"10px",justifyContent:"flex-end"})});function x({children:n,datasources:t}){const r=(0,_.wW)(re);return a.createElement("div",{className:r.container},n,t&&a.createElement(ne,{datasources:t}))}const re=n=>({container:(0,c.css)({display:"flex",flexDirection:"row",justifyContent:"space-between"})});var l=d(71199),se=d(5572),H=d(51343),O=d(63424),oe=d(67669),ie=d(41354),le=d(80127);function g({panel:n}){const t=(0,_.wW)(ue),[r,s]=(0,a.useState)(!1),i=()=>{s(!1)},p=h=>{(0,le.Ej)({useful:h,panel:n}),i()},y=a.createElement(se.u,{title:"Rate this panel",isOpen:r,onDismiss:i,onClickBackdrop:i,className:t.container},a.createElement("div",null,a.createElement("p",null,"Help us improve this page by telling us whether this panel is useful to you!"),a.createElement("div",{className:t.buttonsContainer},a.createElement(H.zx,{variant:"secondary",className:t.buttonContainer,onClick:()=>p(!1)},a.createElement("div",{className:t.button},a.createElement(D.J,{name:"thumbs-up",className:t.thumbsdown,size:"xxxl"}),a.createElement("span",null,"I don't like it"))),a.createElement(H.zx,{variant:"secondary",className:t.buttonContainer,onClick:()=>p(!0)},a.createElement("div",{className:t.button},a.createElement(D.J,{name:"thumbs-up",size:"xxxl"}),a.createElement("span",null,"I like it")))))),w=a.createElement(O.v,null,a.createElement(O.v.Item,{label:"Rate this panel",icon:"comment-alt-message",onClick:()=>s(!0)}));return a.createElement("div",null,a.createElement(oe.L,{overlay:w,placement:"bottom-start"},a.createElement(ie.h,{name:"ellipsis-v",variant:"secondary",className:t.menu,"aria-label":"Rate this panel"})),y)}const ue=n=>({buttonsContainer:(0,c.css)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"stretch",gap:"25px"}),buttonContainer:(0,c.css)({height:"150px",width:"150px",cursor:"pointer",justifyContent:"center"}),button:(0,c.css)({display:"flex",flexDirection:"column"}),container:(0,c.css)({maxWidth:"370px"}),menu:(0,c.css)({height:"25px",margin:"0"}),thumbsdown:(0,c.css)({transform:"scale(-1, -1);"})});function ce(n,t){const r=o?`sum by(state) (grafanacloud_grafana_instance_alerting_alerts{id="${o}"})`:"sum by (state) (grafanacloud_grafana_instance_alerting_alerts)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}}"}]}),i=new e.bM({$data:s,transformations:[{id:"renameByRegex",options:{regex:"alerting",renamePattern:"firing"}}]});return new e.fy({...m,height:"400px",body:e.wX.timeseries().setTitle(t).setDescription("A breakdown of all of your alert rule instances based on state").setData(i).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(p=>p.matchFieldsWithName("firing").overrideColor(f("firing")).matchFieldsWithName("normal").overrideColor(f("normal")).matchFieldsWithName("pending").overrideColor(f("pending")).matchFieldsWithName("error").overrideColor(f("error")).matchFieldsWithName("nodata").overrideColor(f("nodata"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function de(n,t){const r=o?`sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m{id="${o}"}) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${o}"})`:"sum(grafanacloud_grafana_instance_alerting_rule_evaluations_total:rate5m) - sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)",s=o?`sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m{id="${o}"})`:"sum(grafanacloud_grafana_instance_alerting_rule_evaluation_failures_total:rate5m)",i=new e.uq({datasource:n,queries:[{refId:"A",exprA:r,range:!0,legendFormat:"success"},{refId:"B",exprB:s,range:!0,legendFormat:"failed"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of successful and failed alert rule evaluations").setData(i).setOption("tooltip",{mode:l.f3.Multi}).setCustomFieldConfig("drawStyle",l.l8.Line).setOverrides(p=>p.matchFieldsWithName("success").overrideColor(f("success")).matchFieldsWithName("failed").overrideColor(f("failed"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}var F=d(47423);function ge(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active", id="${o}"})`:'sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="active"})',s=new e.uq({datasource:n,queries:[{refId:"A",instant:!0,expr:r}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The number of currently firing alert rules").setData(s).setThresholds({mode:F.H.Absolute,steps:[{color:"red",value:0},{color:"red",value:80}]}).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}function N(n,t,r,s){const i=o?`sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${s}", id="${o}"})`:`sum by (state) (grafanacloud_grafana_instance_alerting_alerts{state="${s}"})`,p=new e.uq({datasource:n,queries:[{refId:"A",instant:!0,expr:i,legendFormat:"{{state}}"}]});return new e.fy({height:"100%",body:e.wX.stat().setTitle(t).setDescription(r).setData(p).setOverrides(y=>y.matchFieldsWithName(s).overrideColor(f(s))).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}var R=d(4558);function me(n,t){const r=`sum by(rule_group) (grafanacloud_instance_rule_group_iterations_missed_total:rate5m{id="${o}"})`,s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{rule_group}}"}]}),i=()=>y=>y.pipe((0,R.U)(w=>w.map(h=>({...h,fields:h.fields.map(v=>{const C=(v.config.displayNameFromDS||"").match(/\/rules\/\d+\/(\w+);(\w+)/);return C&&(v.config.displayName=`Folder: ${C[1]} - Group: ${C[2]}`),v})})))),p=new e.bM({$data:s,transformations:[i]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of missed iterations per evaluation group").setData(p).setOption("tooltip",{mode:l.f3.Multi}).setCustomFieldConfig("drawStyle",l.l8.Line).setHeaderActions(a.createElement(g,{panel:t})).build()})}var fe=d(34037),pe=d(99825);function ye(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",expr:'topk(10, sum by(labels_alertname, ruleUID) (count_over_time({from="state-history"} | json | current = `Alerting` [1w])))',instant:!0}]}),s=(y,w)=>({...y,values:y.values.map((h,v)=>{const C=w.fields.find(je=>je.name==="ruleUID")?.values[v];return a.createElement(_e,{key:h,value:h,ruleUID:C})})}),i=()=>y=>y.pipe((0,R.U)(w=>w.map(h=>({...h,fields:h.fields.map(v=>v.name==="labels_alertname"?s(v,h):v)})))),p=new e.bM({$data:r,transformations:[i,{id:"sortBy",options:{fields:{},sort:[{field:"Value #A",desc:!0}]}},{id:"organize",options:{excludeByName:{Time:!0,ruleUID:!0},indexByName:{labels_alertname:0,"Value #A":1},renameByName:{labels_alertname:"Alert rule name","Value #A":"Number of fires"}}}]});return new e.fy({...m,body:e.wX.table().setTitle(t).setDescription("The alert rule instances that have fired the most").setData(p).setNoValue("No new alerts fired last week").setHeaderActions(a.createElement(g,{panel:t})).build()})}function _e({value:n,ruleUID:t}){const r=i=>({link:(0,c.css)({"& > a":{color:i.colors.text.link}})}),s=(0,_.wW)(r);return a.createElement("div",{className:s.link},a.createElement(fe.r,{target:"_blank",href:(0,pe.u)(`/alerting/grafana/${t}/view`)},n))}function he(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused", id="${o}"})`:'sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{state="paused"})',s=new e.uq({datasource:n,queries:[{refId:"A",instant:!0,expr:r}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The number of current paused alert rules").setData(s).setThresholds({mode:F.H.Absolute,steps:[{color:"yellow",value:0},{color:"red",value:80}]}).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}function we(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${o}"})`:"sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}} evaluation"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("See how many of your alert rules are paused or active").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(i=>i.matchFieldsWithName("active evaluation").overrideColor(f("active evaluation"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function ve(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules{id="${o}"}) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules{id="${o}"})`:"sum by (state) (grafanacloud_grafana_instance_alerting_rule_group_rules) / ignoring(state) group_left sum(grafanacloud_grafana_instance_alerting_rule_group_rules)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}} evaluation"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("See what percentage of your alert rules are paused or active").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setCustomFieldConfig("fillOpacity",45).setUnit("percentunit").setOption("tooltip",{mode:l.f3.Multi}).setMax(1).setOverrides(i=>i.matchFieldsWithName("active evaluation").overrideColor(f("active evaluation"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function be(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts{id="${o}"})`:"sum by (state) (grafanacloud_grafana_instance_alerting_alertmanager_alerts)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(i=>i.matchFieldsWithName("active").overrideColor(f("active"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Ee(n,t){const r=o?`sum by (state) (grafanacloud_grafana_instance_alerting_silences{id="${o}"})`:"sum by (state) (grafanacloud_grafana_instance_alerting_silences)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of silences by state").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Se(n,t){const r=o?`sum by (state) (grafanacloud_instance_alertmanager_alerts{id="${o}"})`:"sum by (state) (grafanacloud_instance_alertmanager_alerts)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("A breakdown of all of your firing alert rule instances based on state").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(i=>i.matchFieldsWithName("active").overrideColor(f("active"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Ce(n,t){const r=o?`sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config{id="${o}"})`:"sum by (cluster)(grafanacloud_instance_alertmanager_invalid_config)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{cluster}}"}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The current state of your alertmanager configuration").setData(s).setUnit("bool_yes_no").setOption("graphMode",l.IG.None).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Ae(n,t){const r=o?`sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second{id="${o}"}) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{id="${o}"})`:"sum by(cluster)(grafanacloud_instance_alertmanager_notifications_per_second) - sum by (cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)",s=o?`sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second{id="${o}"})`:"sum by(cluster)(grafanacloud_instance_alertmanager_notifications_failed_per_second)",i=new e.uq({datasource:n,queries:[{refId:"A",exprA:r,range:!0,legendFormat:"success"},{refId:"B",exprB:s,range:!0,legendFormat:"failed"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of successful and failed notifications").setData(i).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(p=>p.matchFieldsWithName("success").overrideColor(f("success")).matchFieldsWithName("failed").overrideColor(f("failed"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function xe(n,t){const r=o?`sum by (state) (grafanacloud_instance_alertmanager_silences{id="${o}"})`:"sum by (state) (grafanacloud_instance_alertmanager_silences)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{state}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of silences by state").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setHeaderActions(a.createElement(g,{panel:t})).build()})}var Fe=d(27546);function Ne(n,t){const r=o?`grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", id="${o}"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", id="${o}"}`:'grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"} / grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}',s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"duration / interval"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The percentage of interval time spent evaluating").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOption("legend",{showLegend:!1}).setUnit("percentunit").setThresholds({mode:Fe.H3.Percentage,steps:[{color:"green",value:0},{color:"red",value:80},{color:"yellow",value:60}]}).setHeaderActions(a.createElement(g,{panel:t})).build()})}function De(n,t){const r=o?`grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group", id="${o}"}`:'grafanacloud_instance_rule_group_last_duration_seconds{rule_group="$rule_group"}',s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"{{rule_group}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("How long it took to evaluate the rule group").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setUnit("s").setOption("tooltip",{mode:l.f3.Multi}).setOption("legend",{showLegend:!1}).setOverrides(i=>i.matchFieldsByQuery("A").overrideColor({mode:"fixed",fixedColor:"blue"})).setHeaderActions(a.createElement(g,{panel:t})).build()})}function $e(n,t){const r=o?`grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group", id="${o}} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", id="${o}}`:'grafanacloud_instance_rule_evaluations_total:rate5m{rule_group="$rule_group"} - grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}',s=o?`grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group", id="${o}}`:'grafanacloud_instance_rule_evaluation_failures_total:rate5m{rule_group=~"$rule_group"}',i=new e.uq({datasource:n,queries:[{refId:"A",exprA:r,range:!0,legendFormat:"success"},{refId:"B",exprB:s,range:!0,legendFormat:"failed"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of successful and failed evaluations for the rule group").setData(i).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(p=>p.matchFieldsWithName("success").overrideColor(f("success")).matchFieldsWithName("failed").overrideColor(f("failed"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Ie(n,t){const r=o?`grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group", id="${o}"}`:'grafanacloud_instance_rule_group_interval_seconds{rule_group="$rule_group"}',s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"interval"}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The current and historical rule group evaluation interval").setData(s).setUnit("s").setOption("graphMode",l.IG.Area).setHeaderActions(a.createElement(g,{panel:t})).build()})}function qe(n,t){const r=o?`sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group", id="${o}"})`:'sum(grafanacloud_instance_rule_group_rules{rule_group="$rule_group"})',s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"number of rules"}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The current and historical number of alert rules in the rule group").setData(s).setUnit("none").setOption("graphMode",l.IG.Area).setOverrides(i=>i.matchFieldsByQuery("A").overrideColor({mode:"fixed",fixedColor:"blue"})).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}function Me(n,t){const r=o?`sum(grafanacloud_instance_rule_evaluations_total:rate5m{id="${o}) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{id="${o})`:"sum(grafanacloud_instance_rule_evaluations_total:rate5m) - sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)",s=o?`sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m{id="${o})`:"sum(grafanacloud_instance_rule_evaluation_failures_total:rate5m)",i=new e.uq({datasource:n,queries:[{refId:"A",exprA:r,range:!0,legendFormat:"success"},{refId:"B",exprB:s,range:!0,legendFormat:"failed"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of successful and failed alert rule evaluations").setData(i).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(p=>p.matchFieldsWithName("failed").overrideColor(f("failed"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Te(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",instant:!0,expr:'sum by (alertstate) (ALERTS{alertstate="firing"})'}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The number of currently firing alert rule instances").setData(r).setThresholds({mode:F.H.Absolute,steps:[{color:"red",value:0},{color:"red",value:80}]}).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}function Be(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",expr:"sum by (alertstate) (ALERTS)",range:!0,legendFormat:"{{state}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of firing and pending alert rule instances").setData(r).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(s=>s.matchFieldsWithName("firing").overrideColor(f("firing"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function He(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",expr:"sum by (alertstate) (ALERTS) / ignoring(alertstate) group_left sum(ALERTS)",range:!0,legendFormat:"{{alertstate}}"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("See what percentage of your alert rules are firing versus pending").setData(r).setCustomFieldConfig("drawStyle",l.l8.Line).setCustomFieldConfig("fillOpacity",45).setUnit("percentunit").setMax(1).setOption("tooltip",{mode:l.f3.Multi}).setOverrides(s=>s.matchFieldsWithName("firing").overrideColor(f("firing"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Oe(n,t){const r=o?`sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m{id="${o}"})`:"sum(grafanacloud_instance_rule_group_iterations_missed_total:rate5m)",s=new e.uq({datasource:n,queries:[{refId:"A",expr:r,range:!0,legendFormat:"missed"}]});return new e.fy({...m,body:e.wX.timeseries().setTitle(t).setDescription("The number of evaluations missed").setData(s).setCustomFieldConfig("drawStyle",l.l8.Line).setOption("tooltip",{mode:l.f3.Multi}).setOption("legend",{showLegend:!1}).setOverrides(i=>i.matchFieldsWithName("missed").overrideColor(f("missed"))).setHeaderActions(a.createElement(g,{panel:t})).build()})}function Re(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",expr:'topk(10, sum by(alertname) (ALERTS{alertstate="firing"}))',instant:!0,range:!1,format:"table"}]}),s=new e.bM({$data:r,transformations:[{id:"organize",options:{excludeByName:{Time:!0},indexByName:{},renameByName:{Value:"Number of fires",alertname:"Alert Rule Name"}}}]});return new e.fy({...m,body:e.wX.table().setTitle(t).setDescription("The alert rules that have fired the most").setData(s).setHeaderActions(a.createElement(g,{panel:t})).build()})}function We(n,t){const r=new e.uq({datasource:n,queries:[{refId:"A",instant:!0,expr:'sum by (alertstate) (ALERTS{alertstate="pending"})'}]});return new e.fy({...m,body:e.wX.stat().setTitle(t).setDescription("The number of currently pending alert rule instances").setData(r).setThresholds({mode:F.H.Absolute,steps:[{color:"yellow",value:0},{color:"red",value:80}]}).setNoValue("0").setHeaderActions(a.createElement(g,{panel:t})).build()})}const q={type:"loki",uid:"grafanacloud-alert-state-history",settings:void 0},u={type:"prometheus",uid:"grafanacloud-usage",settings:void 0},b={type:"prometheus",uid:"grafanacloud-prom",settings:void 0},Le={alerting:"red",firing:"red",active:"red",missed:"red",failed:"red",pending:"yellow",nodata:"blue","active evaluation":"blue",normal:"green",success:"green",error:"orange"};function f(n){return{mode:"fixed",fixedColor:Le[n]}}const m={minHeight:300},Ge=new e.gg({from:"now-1w",to:"now"}),W=ee.config.bootData.settings.namespace,o=W.includes("stack-")?W.replace("stack-",""):void 0;function ke(){const n=(0,Z.F)();[q,u,b].forEach(w=>{w.settings=n.getInstanceSettings(w.uid)});const t=[],r=q.settings&&u.settings,s=!!u.settings,i=!!u.settings,p=u.settings&&b.settings,y=!!u.settings;return r&&t.push(new e.fy({ySizing:"content",body:Xe()})),s&&t.push(new e.fy({ySizing:"content",body:Qe()})),p&&t.push(new e.fy({ySizing:"content",body:Pe()})),y&&t.push(new e.fy({ySizing:"content",body:Ue()})),i&&t.push(new e.fy({ySizing:"content",body:Ye()})),new e.U4({$timeRange:Ge,controls:[new e.he({component:x,props:{children:a.createElement("div",null,"Monitor the status of your system.")}}),new e.o$,new e.n7({}),new e.vf({})],body:new e.QY({direction:"column",children:t})})}function Xe(){return new e.Gb({title:"Grafana-managed alert rules",canCollapse:!0,isCollapsed:!1,body:new e.QY({direction:"column",children:[new e.QY({direction:"column",children:[new e.QY({children:[ye(q,"Top 10 firing instances"),ge(u,"Firing rules"),he(u,"Paused rules")]}),new e.QY({children:[ce(u,"Alert instances by state"),new e.QY({height:"400px",direction:"column",children:[new e.QY({height:"400px",children:[N(u,"Firing instances","The number of currently firing alert rule instances","alerting"),N(u,"Pending instances","The number of currently pending alert rule instances","pending")]}),new e.QY({children:[N(u,"No data instances","The current number of alert rule instances in No data state","nodata"),N(u,"Error instances","The current number of alert rule instances in Error state","error")]})]})]}),new e.QY({children:[we(u,"Alert rule evaluation"),ve(u,"% of alert rule evaluation")]}),new e.QY({children:[de(u,"Evaluation success vs failures"),me(u,"Iterations missed per evaluation group")]})]}),new e.he({component:E})]})})}function Qe(){return new e.Gb({title:"Grafana Alertmanager",canCollapse:!0,isCollapsed:!1,body:new e.QY({direction:"column",children:[new e.QY({children:[be(u,"Firing alerts by state"),Ee(u,"Silences")]}),new e.he({component:E})]})})}function Ye(){return new e.Gb({title:"Mimir Alertmanager",canCollapse:!0,isCollapsed:!1,body:new e.QY({direction:"column",children:[new e.fy({body:new e.he({component:x,props:{datasources:[u]}})}),new e.QY({children:[Se(u,"Firing alerts by state"),Ae(u,"Notification delivery")]}),new e.QY({children:[xe(u,"Silences"),Ce(u,"Invalid configuration")]}),new e.he({component:E})]})})}function Pe(){return new e.Gb({title:"Mimir-managed alert rules",canCollapse:!0,isCollapsed:!1,body:new e.QY({direction:"column",children:[new e.fy({body:new e.he({component:x,props:{datasources:[b,u]}})}),new e.QY({children:[Re(b,"Top 10 firing rules"),Te(b,"Firing instances"),We(b,"Pending instances")]}),new e.QY({children:[Be(b,"Firing and pending alert instances"),He(b,"% of alert instances by state")]}),new e.QY({children:[Me(u,"Evaluation success vs failures"),Oe(u,"Missed evaluations")]}),new e.he({component:E})]})})}function Ue(){const n=new e.$1({label:"Rule Group",name:"rule_group",datasource:u,query:"label_values(grafanacloud_instance_rule_group_rules,rule_group)"});return new e.Gb({title:"Mimir-managed alert rules - per rule group",canCollapse:!0,isCollapsed:!1,body:new e.QY({direction:"column",children:[new e.fy({body:new e.he({component:x,props:{datasources:[u]}})}),new e.QY({children:[$e(u,"Rule group evaluation"),Ie(u,"Rule group interval")]}),new e.QY({children:[De(u,"Rule group evaluation duration"),qe(u,"Rules per group"),Ne(u,"Evaluation duration / interval ratio")]}),new e.he({component:E})]}),$variables:new e.hT({variables:[n]}),controls:[new e.dn({})]})}let S;function L(n){return S||(n?S=new e.mt({pages:[new e.yH({title:"Alerting",subTitle:a.createElement($,null),url:"/alerting",hideFromBreadcrumbs:!0,tabs:[new e.yH({title:"Insights",url:"/alerting/home/insights",getScene:ke}),new e.yH({title:"Get started",url:"/alerting/home/overview",getScene:B})]})]}):S=new e.mt({pages:[new e.yH({title:"Alerting",subTitle:a.createElement($,null),url:"/alerting",hideFromBreadcrumbs:!0,getScene:B})]}),S)}function Ve(){const n=(!(0,T.Vj)()||(0,T.mt)())&&!!G.config.featureToggles.alertingInsights,t=L(n),r=(0,k.P)("alerting"),[s]=(0,a.useState)({sectionNav:r});return a.createElement(X.v.Provider,{value:s},a.createElement(t.Component,{model:t}))}}}]);

//# sourceMappingURL=AlertingHome.db74e67e5befeb814a86.js.map
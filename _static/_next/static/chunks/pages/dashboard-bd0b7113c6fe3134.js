(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026],{91015:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(2706)}])},2706:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Fe}});var r=t(85893),i=t(86886),a=t(67294),o=t(94499),s=(t(38057),t(59694),t(77141)),l=(t(51361),t(9669)),c=t.n(l),d=t(26042),p=t(9473),u=t(87357),h=t(2734),m=t(98396),x=t(88073),f=t(14924),g=(t(828),t(29815)),j=t(78462),b=t(11057),Z=t(67720),y=t(69368),v=t(53457),S=t(50480),C=t(84808),w=t(59334),k=t(98619),_=t(18972),z=t(11496),I=t(15861),M=t(98456),P=t(97212),A=t(11163),B=t(82659),O=(t(48866),t(42255)),T=t(3690),F=t(83296),D=t(46268),E=t(51964),L=t.n(E),q=(t(602),t(28193)),N=((0,z.ZP)(P.ZP)((function(e){var n,t=e.theme;return n={zIndex:1,cursor:"pointer",paddingTop:t.spacing(3),paddingBottom:t.spacing(3),justifyContent:"space-between"},(0,f.Z)(n,t.breakpoints.up("xs"),{paddingLeft:t.spacing(2.5),paddingRight:t.spacing(2.5)}),(0,f.Z)(n,t.breakpoints.up("sm"),{paddingLeft:t.spacing(5),paddingRight:t.spacing(5)}),n})),function(e){var n=e.children;return e.hidden?(0,r.jsx)(u.Z,{sx:{height:"100%",overflowY:"auto",overflowX:"hidden"},children:n}):(0,r.jsx)(L(),{options:{wheelPropagation:!1,suppressScrollX:!0},children:n})}),R=function(e){var n=(0,A.useRouter)(),t=(0,a.useState)(!1),i=(t[0],t[1],(0,a.useState)([])),o=i[0],s=i[1],l=e.store,p=(e.query,e.hidden),h=(e.lgAbove,e.dispatch),m=(e.setQuery,e.direction),x=e.updateMail,f=e.routeParams,_=e.labelColors,z=e.paginateMail,I=(e.getCurrentMail,e.mailDetailsOpen),E=e.updateMailLabel,L=(e.handleSelectMail,e.setMailDetailsOpen),R=(e.handleSelectAllMail,e.handleLeftSidebarToggle,(0,a.useState)(!1)),W=R[0],U=R[1],Y=(0,a.useState)(null),G=Y[0],H=(Y[1],(0,a.useState)(null)),X=H[0],J=(H[1],Boolean(G),Boolean(X),[{name:"draft",icon:(0,r.jsx)(T.Z,{fontSize:"small",sx:{mr:2}})},{name:"spam",icon:(0,r.jsx)(D.Z,{fontSize:"small",sx:{mr:2}})},{name:"trash",icon:(0,r.jsx)(F.Z,{fontSize:"small",sx:{mr:2}})},{name:"inbox",icon:(0,r.jsx)(O.Z,{fontSize:"small",sx:{mr:2}})}]),Q={draft:{name:"draft",icon:(0,r.jsx)(T.Z,{fontSize:"small",sx:{mr:2}})},spam:{name:"spam",icon:(0,r.jsx)(D.Z,{fontSize:"small",sx:{mr:2}})},trash:{name:"trash",icon:(0,r.jsx)(F.Z,{fontSize:"small",sx:{mr:2}})},inbox:{name:"inbox",icon:(0,r.jsx)(O.Z,{fontSize:"small",sx:{mr:2}})}},V={inbox:[Q.spam,Q.trash],sent:[Q.trash],draft:[Q.trash],spam:[Q.inbox,Q.trash],trash:[Q.inbox,Q.spam]},K=function(e,n){var t=Array.isArray(e)?(0,g.Z)(e):[e];h(E({emailIds:t,label:n}))},$=function(e,n){var t=Array.isArray(e)?(0,g.Z)(e):[e];h(x({emailIds:t,dataToUpdate:{folder:n}}))},ee={hidden:p,folders:J,dispatch:h,direction:m,foldersObj:V,updateMail:x,routeParams:f,labelColors:_,paginateMail:z,handleStarMail:function(e,n,t){e.stopPropagation(),h(x({emailIds:[n],dataToUpdate:{isStarred:t}}))},mailDetailsOpen:I,handleLabelUpdate:K,handleFolderUpdate:$,setMailDetailsOpen:L,mail:l&&l.currentMail?l.currentMail:null};return(0,r.jsxs)(u.Z,{sx:{width:"100%",overflow:"hidden",position:"relative","& .ps__rail-y":{zIndex:5}},children:[(0,r.jsxs)(u.Z,{sx:{height:"100%",backgroundColor:"background.paper"},children:[(0,r.jsx)(Z.Z,{sx:{m:0}}),(0,r.jsx)(u.Z,{sx:{p:5,overflowY:"hidden"},children:(0,r.jsx)(b.Z,{fullWidth:!0,variant:"contained",item:!0,onClick:function(){var e=JSON.parse(window.localStorage.getItem("userData"));c()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n    query {\n      storeFindAllByUser(user_id: ".concat(e.id,") {\n          id,\n          user_id,\n          name,\n          site_name,\n          description,\n          image,\n          status,\n          created_at,\n          updated_at\n      }\n  }")},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){o.length>0&&o.forEach((function(t,r){c()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n              \n        mutation {\n          productCreate(data: {\n              store_id: ".concat(e.data.data.storeFindAllByUser[0].id,',\n              category_id: 1,\n              title: "').concat(t.title,'",\n              short_description: "').concat(t.short_description,'",\n              long_description: "').concat(t.short_description,'",\n              html_content: "').concat(t.short_description,'",\n              price: ').concat(t.price,",\n              discount: ").concat(t.discount,',\n              country_of_origin: "India",\n              media_ids: "1",\n              stock: 10,\n              status: Active,\n          }) {\n              id,\n              store_id,\n              category_id,\n              title,\n              short_description,\n              long_description,\n              html_content,\n              price,\n              discount,\n              country_of_origin,\n              image,\n              attributes {\n                  name,\n                  value\n              },\n              faqs {\n                  id,\n                  question,\n                  answer,\n              },\n              stock,\n              status,\n              created_at,\n              updated_at\n          }\n      }   \n       \n            ')},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e),n.push("/product")}))}))})),n.push("/product")},children:"Submit"})}),(0,r.jsxs)(u.Z,{sx:{p:0,position:"relative",overflowX:"hidden",height:"calc(100% - 7rem)"},children:[(0,r.jsx)(N,{hidden:p,children:(0,r.jsx)(j.Z,{component:"nav","aria-label":"main mailbox",children:B.i.map((function(e,n){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(P.ZP,{disablePadding:!0,children:(0,r.jsxs)(u.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"60px",width:"100%"},children:[(0,r.jsxs)(k.Z,{children:[(0,r.jsx)("img",{src:"https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",alt:"",style:{width:60,height:60,borderRadius:"3px",marginRight:"12px"}}),(0,r.jsx)(w.Z,{primary:e.title})]}),(0,r.jsx)(v.Z,{row:!0,children:(0,r.jsx)(S.Z,{value:e.id,onChange:function(n){return function(e,n){var t=e.target.checked;console.log(t),t?(o.push(n),console.log(o)):s((function(e){return e.filter((function(e){return e.id!==n.id}))}))}(n,e)},control:(0,r.jsx)(y.Z,{name:"basic-unchecked"})})})]})})})}))})}),(0,r.jsx)(C.Z,{open:W,onClick:function(){return U(!1)},sx:{zIndex:5,position:"absolute",color:function(e){return e.palette.common.white},backgroundColor:"action.disabledBackground"},children:(0,r.jsx)(M.Z,{color:"inherit"})})]})]}),(0,r.jsx)(q.Z,(0,d.Z)({},ee))]})},W=(t(41664),t(77533)),U=t(25159),Y=(0,z.ZP)(P.ZP)((function(e){var n=e.theme;return{borderLeftWidth:"3px",borderLeftStyle:"solid",padding:n.spacing(0,5),marginBottom:n.spacing(2)}})),G=(0,z.ZP)(U.Z)((function(){return{"& .MuiBadge-badge":{height:"18px",minWidth:"18px",transform:"none",position:"relative",transformOrigin:"none"}}})),H=function(e){var n=e.store,t=e.hidden,i=e.lgAbove,a=e.dispatch,o=e.leftSidebarOpen,s=e.leftSidebarWidth,l=(e.toggleComposeOpen,e.setMailDetailsOpen),c=e.handleSelectAllMail,d=e.handleLeftSidebarToggle,p=function(e,t){return n&&n.mailMeta&&n.mailMeta[e]>0?(0,r.jsx)(G,{skin:"light",color:t,sx:{ml:2},badgeContent:n.mailMeta[e]}):null},h=function(e,t){return!n||n.filter[e]===t},m=function(){l(!1),setTimeout((function(){return a(c(!1))}),50),d()},x=n&&h("folder","inbox")&&"inbox"===n.filter.folder&&""===n.filter.label,f=function(e){var n=e.children;return t?(0,r.jsx)(u.Z,{sx:{height:"100%",overflowY:"auto",overflowX:"hidden"},children:n}):(0,r.jsx)(L(),{options:{wheelPropagation:!1},children:n})};return(0,r.jsx)(W.ZP,{open:o,onClose:d,variant:i?"permanent":"temporary",ModalProps:{disablePortal:!0,keepMounted:!0},sx:{zIndex:9,display:"block",position:i?"static":"absolute","& .MuiDrawer-paper":{boxShadow:"none",width:s,zIndex:i?2:"drawer",position:i?"static":"absolute"},"& .MuiBackdrop-root":{position:"absolute"}},children:(0,r.jsx)(f,{children:(0,r.jsx)(u.Z,{sx:{pt:1.25,overflowY:"hidden"},children:(0,r.jsxs)(j.Z,{component:"div",children:[(0,r.jsxs)(Y,{component:"a",onClick:m,sx:{pt:.5,borderLeftColor:function(e){return x?e.palette.primary.main:"transparent"}},children:[(0,r.jsx)(w.Z,{primary:"Spices & Masala",primaryTypographyProps:{noWrap:!0,sx:{color:function(e){return x?e.palette.primary.main:""}}}}),p("inbox","primary")]}),(0,r.jsx)(Y,{component:"a",onClick:m,sx:{borderLeftColor:function(e){return h("folder","sent")?e.palette.primary.main:"transparent"}},children:(0,r.jsx)(w.Z,{primary:"Baby Products",primaryTypographyProps:{noWrap:!0,sx:{color:function(e){return h("folder","sent")?e.palette.primary.main:""}}}})}),(0,r.jsxs)(Y,{component:"a",onClick:m,sx:{borderLeftColor:function(e){return h("folder","draft")?e.palette.primary.main:"transparent"}},children:[(0,r.jsx)(w.Z,{primary:"Draft",primaryTypographyProps:{noWrap:!0,sx:{color:function(e){return h("folder","draft")?e.palette.primary.main:""}}}}),p("draft","warning")]}),(0,r.jsxs)(Y,{component:"a",onClick:m,sx:{borderLeftColor:function(e){return h("folder","spam")?e.palette.primary.main:"transparent"}},children:[(0,r.jsx)(w.Z,{primary:"Spam",primaryTypographyProps:{noWrap:!0,sx:{color:function(e){return h("folder","spam")?e.palette.primary.main:""}}}}),p("spam","error")]}),(0,r.jsx)(Y,{component:"a",onClick:m,sx:{borderLeftColor:function(e){return h("folder","trash")?e.palette.primary.main:"transparent"}},children:(0,r.jsx)(w.Z,{primary:"Trash",primaryTypographyProps:{noWrap:!0,sx:{color:function(e){return h("folder","trash")?e.palette.primary.main:""}}}})})]})})})})},X=t(69396),J=t(87918),Q=t(38333),V=t(79332),K=t(50135),$=t(93946),ee=t(47312),ne=t(56863),te=t(15949),re=t(5306),ie=t(7551),ae=t(42734),oe=t(23246),se=t(12190),le=t(46160),ce=t(9041),de=t(28538),pe=t(82828),ue=t(6397),he=t(89717),me=(t(77664),[{name:"Ross Geller",value:"ross",src:"/images/avatars/1.png"},{name:"Pheobe Buffay",value:"pheobe",src:"/images/avatars/2.png"},{name:"Joey Tribbiani",value:"joey",src:"/images/avatars/3.png"},{name:"Rachel Green",value:"rachel",src:"/images/avatars/4.png"},{name:"Chandler Bing",value:"chandler",src:"/images/avatars/5.png"},{name:"Monica Geller",value:"monica",src:"/images/avatars/8.png"}]),xe=(0,te.D)(),fe=function(e){var n=e.mdAbove,t=e.composeOpen,i=e.ProductComposeWidth,o=e.toggleComposeOpen,s=(0,a.useState)([]),l=s[0],c=s[1],p=(0,a.useState)([]),h=p[0],m=p[1],x=(0,a.useState)(""),Z=x[0],y=x[1],v=(0,a.useState)([]),S=v[0],C=v[1],w=(0,a.useState)(!1),k=w[0],z=w[1],M=(0,a.useState)(null),A=M[0],B=M[1],O=(0,a.useState)(ce.EditorState.createEmpty()),T=O[0],D=O[1],E=(0,a.useState)({cc:!1,bcc:!1}),L=E[0],q=E[1],N=(0,a.useRef)(null),R=Boolean(A),U=function(e){return q((0,X.Z)((0,d.Z)({},L),(0,f.Z)({},e,!L[e])))},Y=function(){z(!1)},G=function(){B(null)},H=function(){o(),c([]),m([]),C([]),y(""),D(ce.EditorState.createEmpty()),q({cc:!1,bcc:!1})},te=function(e,n,t,i){return e.map((function(e,a){return(0,r.jsx)(J.Z,(0,X.Z)((0,d.Z)({size:"small",label:e.name,deleteIcon:(0,r.jsx)(ae.Z,{})},n({index:a})),{onDelete:function(){return function(e,n,t){var r=n,i=r.findIndex((function(n){return n.value===e}));r.splice(i,1),t((0,g.Z)(r))}(e.value,t,i)}}),e.value)}))};return(0,r.jsxs)(W.ZP,{hideBackdrop:!0,anchor:"bottom",open:t,variant:"temporary",onClose:o,sx:{top:"auto",left:"auto",right:n?"1.5rem":"1rem",bottom:"1.5rem",display:"block",zIndex:function(e){return"".concat(e.zIndex.drawer," + 1")},"& .MuiDrawer-paper":{borderRadius:1,position:"static",width:i}},children:[(0,r.jsxs)(u.Z,{sx:{px:4,py:2.5,display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:function(e){return"rgba(".concat(e.palette.customColors.main,", 0.08)")}},children:[(0,r.jsx)(I.Z,{sx:{fontWeight:600,color:"text.secondary"},children:"Compose Mail"}),(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($.Z,{sx:{p:1,mr:2,color:"action.active"},onClick:function(){o(),c(l),m(h),C(S),q(L),D(T),y(Z)},children:(0,r.jsx)(ie.Z,{fontSize:"small"})}),(0,r.jsx)($.Z,{sx:{p:1,color:"action.active"},onClick:H,children:(0,r.jsx)(ae.Z,{fontSize:"small"})})]})]}),(0,r.jsxs)(u.Z,{sx:{py:1,px:4,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,r.jsxs)(u.Z,{sx:{width:"100%",display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(ee.Z,{sx:{mr:3,color:"text.disabled"},htmlFor:"email-to-select",children:"To:"})}),(0,r.jsx)(re.Z,{multiple:!0,freeSolo:!0,value:l,clearIcon:!1,id:"email-to-select",filterSelectedOptions:!0,options:me,ListboxComponent:j.Z,filterOptions:function(e,n){var t=xe(e,n),r=n.inputValue,i=e.some((function(e){return r===e.name}));return""===r||i||t.push({name:r,value:r,src:""}),t},getOptionLabel:function(e){return e.name},renderOption:function(e,n){return function(e,n,t,i){return(0,r.jsx)(P.ZP,{sx:{cursor:"pointer"},onClick:function(){return i((0,g.Z)(t).concat([n]))},children:(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[n.src.length?(0,r.jsx)(de.Z,{src:n.src,alt:n.name,sx:{mr:3,width:22,height:22}}):(0,r.jsx)(de.Z,{skin:"light",color:"primary",sx:{mr:3,width:22,height:22,fontSize:".75rem"},children:(0,he.Q)(n.name)}),(0,r.jsx)(I.Z,{sx:{fontSize:"0.875rem"},children:n.name})]})},n.value)}(0,n,l,c)},renderTags:function(e,n){return te(e,n,l,c)},sx:{width:"100%","& .MuiOutlinedInput-root":{p:2},"& .MuiAutocomplete-endAdornment":{display:"none"}},renderInput:function(e){return(0,r.jsx)(K.Z,(0,X.Z)((0,d.Z)({},e),{autoComplete:"new-password",sx:{border:0,"& fieldset":{border:"0 !important"},"& .MuiOutlinedInput-root":{p:"0 !important"}}}))}})]}),(0,r.jsxs)(I.Z,{sx:{color:"text.secondary"},children:[(0,r.jsx)(u.Z,{component:"span",sx:{cursor:"pointer"},onClick:function(){return U("cc")},children:"Cc"}),(0,r.jsx)(u.Z,{component:"span",sx:{mx:2},children:"|"}),(0,r.jsx)(u.Z,{component:"span",sx:{cursor:"pointer"},onClick:function(){return U("bcc")},children:"Bcc"})]})]}),L.cc?(0,r.jsxs)(u.Z,{sx:{py:1,px:4,display:"flex",alignItems:"center",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(ee.Z,{sx:{mr:3,color:"text.disabled"},htmlFor:"email-cc-select",children:"Cc:"})}),(0,r.jsx)(K.Z,{fullWidth:!0,size:"small",sx:{border:0,"& fieldset":{border:"0 !important"},"& .MuiOutlinedInput-root":{p:"0 !important"}}})]}):null,L.bcc?(0,r.jsxs)(u.Z,{sx:{py:1,px:4,display:"flex",alignItems:"center",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(ee.Z,{sx:{mr:3,color:"text.disabled"},htmlFor:"email-bcc-select",children:"Bcc:"})}),(0,r.jsx)(K.Z,{fullWidth:!0,size:"small",sx:{border:0,"& fieldset":{border:"0 !important"},"& .MuiOutlinedInput-root":{p:"0 !important"}}})]}):null,(0,r.jsxs)(u.Z,{sx:{py:1,px:4,display:"flex",alignItems:"center",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(ee.Z,{sx:{mr:3,color:"text.disabled"},htmlFor:"email-subject-input",children:"Subject:"})}),(0,r.jsx)(V.Z,{fullWidth:!0,value:Z,id:"email-subject-input",onChange:function(e){return y(e.target.value)},sx:{"&:before, &:after":{display:"none"},"& .MuiInput-input":{py:1.875}}})]}),(0,r.jsx)(ue.cP,{sx:{"& .rdw-editor-wrapper":{border:"0 !important"},"& .rdw-editor-toolbar":{p:"0.35rem 1rem !important","& .rdw-option-wrapper":{minWidth:"1.25rem",borderRadius:"4px !important"},"& .rdw-inline-wrapper, & .rdw-text-align-wrapper":{mb:0}},"& .rdw-editor-main":{px:"1.25rem"}},children:(0,r.jsx)(pe.Z,{editorState:T,onEditorStateChange:function(e){return D(e)},placeholder:"Message",toolbar:{options:["inline","textAlign"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})}),(0,r.jsxs)(u.Z,{sx:{px:4,py:3.5,display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(ne.Z,{variant:"contained",ref:N,"aria-label":"split button",children:[(0,r.jsx)(b.Z,{onClick:H,children:"Send"}),(0,r.jsx)(b.Z,{size:"small","aria-haspopup":"true",onClick:function(){z((function(e){return!e}))},"aria-label":"select merge strategy","aria-expanded":k?"true":void 0,"aria-controls":k?"email-send-menu":void 0,children:(0,r.jsx)(oe.Z,{sx:{fontSize:"1.25rem"}})})]}),(0,r.jsxs)(Q.Z,{keepMounted:!0,open:k,id:"email-send-menu",onClose:Y,anchorEl:N.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:[(0,r.jsx)(_.Z,{onClick:Y,children:"Schedule Send"}),(0,r.jsx)(_.Z,{onClick:Y,children:"Save as Draft"})]}),(0,r.jsx)($.Z,{size:"small",sx:{ml:3.5},children:(0,r.jsx)(se.Z,{sx:{fontSize:"1.25rem"}})})]}),(0,r.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)($.Z,{size:"small","aria-label":"more","aria-haspopup":"true",onClick:function(e){B(e.currentTarget)},"aria-expanded":A?"true":void 0,children:(0,r.jsx)(le.Z,{fontSize:"small"})}),(0,r.jsxs)(Q.Z,{open:R,anchorEl:A,onClose:G,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[(0,r.jsx)(_.Z,{onClick:G,children:"Print"}),(0,r.jsx)(_.Z,{onClick:G,children:"Check spelling"}),(0,r.jsx)(_.Z,{onClick:G,children:"Plain text mode"})]}),(0,r.jsx)($.Z,{size:"small",onClick:H,children:(0,r.jsx)(F.Z,{sx:{fontSize:"1.25rem"}})})]})]})]})},ge=t(68514),je={private:"error",personal:"success",company:"primary",important:"warning"},be=function(e){var n=e.folder,t=e.label,i=(0,a.useState)(""),o=i[0],s=i[1],l=(0,a.useState)(!1),c=l[0],f=l[1],g=(0,a.useState)(!1),j=g[0],b=g[1],Z=(0,a.useState)(!1),y=Z[0],v=Z[1],S=(0,h.Z)(),C=(0,x.r)().settings,w=(0,p.I0)(),k=(0,m.Z)(S.breakpoints.up("lg")),_=(0,m.Z)(S.breakpoints.up("md")),z=(0,m.Z)(S.breakpoints.up("sm")),I=(0,m.Z)(S.breakpoints.down("lg")),M=(0,p.v9)((function(e){return e.email})),P=_?754:z?520:"100%",A=C.skin,B=C.appBar,O=C.footer,T=C.layout,F=C.navHidden,D=C.direction,E={label:t||"",folder:n||"inbox"};(0,a.useEffect)((function(){w((0,ge.d7)({q:o||"",folder:E.folder,label:E.label}))}),[w,o,E.folder,E.label]);var L=function(){return f(!c)},q=function(){return v(!y)};return(0,r.jsxs)(u.Z,{sx:(0,d.Z)({display:"flex",borderRadius:1,overflow:"hidden",position:"relative",boxShadow:"bordered"===A?0:6,height:"calc(100vh - ".concat("(".concat(("hidden"===B?0:S.mixins.toolbar.minHeight)*("horizontal"!==T||F?1:2)+("hidden"===O?0:56),"px + ").concat(S.spacing(6)," * 2)"),")")},"bordered"===A&&{border:"1px solid ".concat(S.palette.divider)}),children:[(0,r.jsx)(H,{store:M,hidden:I,lgAbove:k,dispatch:w,mailDetailsOpen:j,leftSidebarOpen:y,leftSidebarWidth:260,toggleComposeOpen:L,setMailDetailsOpen:b,handleSelectAllMail:ge.ER,handleLeftSidebarToggle:q}),(0,r.jsx)(R,{query:o,store:M,hidden:I,lgAbove:k,dispatch:w,setQuery:s,direction:D,updateMail:ge.AS,routeParams:E,labelColors:je,paginateMail:ge.zM,getCurrentMail:ge.xg,updateMailLabel:ge.dJ,mailDetailsOpen:j,handleSelectMail:ge.el,setMailDetailsOpen:b,handleSelectAllMail:ge.ER,handleLeftSidebarToggle:q}),(0,r.jsx)(fe,{mdAbove:_,composeOpen:c,ProductComposeWidth:P,toggleComposeOpen:L})]})},Ze=t(50122),ye=t(66242),ve=t(99964),Se=t(50657),Ce=t(44472),we=t(76624),ke=t(83578),_e=t(78445),ze=t(44267),Ie=t(76229),Me=t(37645),Pe=t(74931),Ae=t(17535),Be=["Restaurants & Hotels"," Kirana Store, FMCG & Grocery","Local & Online Services","Fresh Chicken, Fish, & Meat","Insurance & Financial Services"],Oe=[{title:"Set Up Your Ecommerce Store",subtitle:"Enter your Store Details",description:"Chocolate cookie lollipop toffee candy canes marzipan liquorice chocolate. Cake gummi bears dessert lollipop apple pie candy. Candy pie sesame snaps lollipop biscuit chocolate cake fruitcake apple pie. "},{title:"Personal Info",subtitle:"Setup Information",description:"Lemon drops ice cream danish macaroon bear claw cookie. Liquorice ice cream chocolate bar pastry chocolate bar candy. Caramels candy canes marshmallow souffl\xe9 biscuit tart fruitcake tiramisu. "},{title:"Social Links",subtitle:"Add Social Links",description:"Jelly lollipop halvah bear claw jujubes macaroon candy canes. Souffl\xe9 halvah lollipop liquorice macaroon powder. Cookie topping pastry oat cake caramels bonbon. Sesame snaps sweet cookie macaroon souffl\xe9 pudding. "}],Te=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],i=(0,a.useState)(!1),l=i[0],d=i[1],p=function(){return d(!1)},h=function(){return t(!1)},m=((0,A.useRouter)(),(0,a.useState)(0)),x=m[0],f=m[1],g=function(){f((function(e){return e-1}))},Z=function(){f((function(e){return e+1})),x===Oe.length-1&&Pe.ZP.success("Completed All Steps!!")},y=(0,a.useState)(""),v=y[0],S=y[1],C=(0,a.useState)([]),_=C[0],z=C[1],M=(0,a.useState)(!1),B=M[0],O=M[1];(0,a.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("userData"));c()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n    query {\n      storeFindAllByUser(user_id: ".concat(e.id,") {\n          id,\n          user_id,\n          name,\n          site_name,\n          description,\n          image,\n          status,\n          created_at,\n          updated_at\n      }\n  }")},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){if(console.log(e.data.data.storeFindAllByUser),z(e.data.data.storeFindAllByUser),e.data.data.storeFindAllByUser.length>0){var n=e.data.data.storeFindAllByUser[0].id;c()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n            query {\n              productCategoryFindAllByStore(store_id: ".concat(n,") {\n                  id,\n                  store_id,\n                  name,\n                  slug,\n                  image,\n                  attributes {\n                      id,\n                      name,\n                      status\n                  }\n                  status,\n                  created_at,\n                  updated_at\n              }\n          }")},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e.data.data.productCategoryFindAllByStore),e.data.data.productCategoryFindAllByStore.length>0&&O(!0)}))}}))}),[]);var T=function(e){var n="";n=_.length>0?_[0].id:localStorage.getItem("store_id"),c()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n        mutation {\n          productCategoryCreate(data: {\n              store_id: ".concat(n,',\n              name: "').concat(e,'",\n              slug: "').concat(e,'",\n              status: Active,\n          }) {\n              id,\n              store_id,\n              name,\n              slug,\n              image,\n              attributes {\n                  id,\n                  name,\n                  status\n              }\n              status,\n              created_at,\n              updated_at\n          }\n      } ')},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e)}))};return(0,r.jsxs)(r.Fragment,{children:[B&&(0,r.jsxs)(ye.Z,{children:[(0,r.jsx)(_e.Z,{title:"Your setup is finished...",titleTypographyProps:{variant:"h6"}}),(0,r.jsx)(ze.Z,{children:(0,r.jsx)("img",{style:{width:"10%"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png"})}),(0,r.jsx)(Ze.Z,{target:"_blank",sx:{color:"#b11f1f","margin-left":"20px"},href:"https://store.tryme.info/"+_[0].site_name,color:"inherit",children:"https://store.tryme.info/"+_[0].site_name}),(0,r.jsx)(_e.Z,{title:"",titleTypographyProps:{variant:"h6"}})]}),!B&&(0,r.jsxs)(ye.Z,{children:[(0,r.jsx)(_e.Z,{title:"Finish your store setup...",titleTypographyProps:{variant:"h6"}}),(0,r.jsxs)(ze.Z,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsxs)(we.Z,{activeStep:x,orientation:"vertical",children:[(0,r.jsxs)(Ce.Z,{children:[(0,r.jsx)(ke.Z,{StepIconComponent:o.Z,children:(0,r.jsx)("div",{className:"step-label",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(I.Z,{className:"step-title",children:"Set Up Your Ecommerce Site"}),(0,r.jsx)(I.Z,{className:"step-subtitle",children:"Enter Your Details"})]})})}),(0,r.jsxs)(Ie.Z,{children:[(0,r.jsx)(Ae.Z,{}),(0,r.jsxs)("div",{className:"button-wrapper",children:[(0,r.jsx)(b.Z,{size:"small",color:"secondary",variant:"outlined",onClick:g,disabled:0===x,children:"Back"}),(0,r.jsx)(b.Z,{size:"small",variant:"contained",onClick:Z,sx:{ml:4},children:x===Oe.length-1?"Finish":"Next"})]})]})]}),(0,r.jsxs)(Ce.Z,{children:[(0,r.jsx)(ke.Z,{StepIconComponent:o.Z,children:(0,r.jsx)("div",{className:"step-label",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(I.Z,{className:"step-title",children:"Create Your First Category"}),(0,r.jsx)(I.Z,{className:"step-subtitle",children:"Enter Your Details"})]})})}),(0,r.jsxs)(Ie.Z,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(K.Z,{id:"outlined-basic",size:"small",placeholder:"Select Category",onClick:function(){return t(!0)},value:v,onChange:T}),(0,r.jsxs)(Se.Z,{onClose:h,"aria-labelledby":"simple-dialog-title",open:n,children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(Me.Z,{id:"simple-dialog-title",children:"Choose business category"}),(0,r.jsx)("div",{style:{paddingRight:"30px",cursor:"pointer"},children:(0,r.jsx)(ae.Z,{onClick:h})})]}),(0,r.jsx)(j.Z,{sx:{pt:0,px:"0 !important"},children:Be.map((function(e){return(0,r.jsx)(P.ZP,{disablePadding:!0,onClick:function(){return n=e,t(!1),S(n),void T(n);var n},children:(0,r.jsx)(u.Z,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:"10rem",width:"100%"},children:(0,r.jsxs)(k.Z,{children:[(0,r.jsx)("img",{src:"https://mydukaan.s3.ap-south-1.amazonaws.com/grocery.jpg",alt:"",style:{width:60,height:60,borderRadius:"3px",marginRight:"12px"}}),(0,r.jsx)(w.Z,{primary:e})]})})},e)}))})]})]}),(0,r.jsxs)("div",{className:"button-wrapper",children:[(0,r.jsx)(b.Z,{size:"small",color:"secondary",variant:"outlined",onClick:g,disabled:0===x,children:"Back"}),(0,r.jsx)(b.Z,{size:"small",variant:"contained",onClick:Z,sx:{ml:4},children:x===Oe.length-1?"Finish":"Next"})]})]})]}),(0,r.jsxs)(Ce.Z,{children:[(0,r.jsx)(ke.Z,{StepIconComponent:o.Z,children:(0,r.jsx)("div",{className:"step-label",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(I.Z,{className:"step-title",children:"Set Up Your Ecommerce Store"}),(0,r.jsx)(I.Z,{className:"step-subtitle",children:"Enter Your Details"})]})})}),(0,r.jsxs)(Ie.Z,{children:[(0,r.jsx)(Ze.Z,{children:(0,r.jsx)(b.Z,{variant:"contained",onClick:function(){return d(!0)},children:"Add Product"})}),(0,r.jsxs)("div",{className:"button-wrapper",children:[(0,r.jsx)(b.Z,{size:"small",color:"secondary",variant:"outlined",onClick:g,disabled:0===x,children:"Back"}),(0,r.jsx)(b.Z,{size:"small",variant:"contained",onClick:Z,sx:{ml:4},children:x===Oe.length-1?"Finish":"Next"})]})]})]})]})}),x===Oe.length&&(0,r.jsxs)(u.Z,{sx:{mt:4},children:[(0,r.jsx)(I.Z,{children:"All steps are completed!"}),(0,r.jsx)(b.Z,{size:"small",sx:{mt:2},variant:"contained",onClick:function(){f(0)},children:"Reset"})]})]}),(0,r.jsx)(ve.Z,{open:l,onClose:p,children:(0,r.jsx)(u.Z,{onClose:p,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,r.jsx)(be,{folder:"inbox"})})})]})]})},Fe=function(){return(0,r.jsx)(i.ZP,{container:!0,spacing:6,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(Te,{})})})}}},function(e){e.O(0,[135,2657,6628,1157,6101,4231,6006,4314,2569,4642,5167,1361,7535,9774,2888,179],(function(){return n=91015,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
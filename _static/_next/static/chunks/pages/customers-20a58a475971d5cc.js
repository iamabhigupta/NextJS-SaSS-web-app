(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6525],{78445:function(e,r,a){"use strict";a.d(r,{Z:function(){return b}});var t=a(63366),n=a(87462),o=a(67294),i=a(86010),s=a(27192),l=a(15861),c=a(71657),d=a(11496),u=a(28979);function p(e){return(0,u.Z)("MuiCardHeader",e)}var m=(0,a(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(85893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,n.Z)({[`& .${m.title}`]:r.title,[`& .${m.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"});var b=o.forwardRef((function(e,r){const a=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:u,component:m="div",disableTypography:b=!1,subheader:v,subheaderTypographyProps:C,title:w,titleTypographyProps:N}=a,j=(0,t.Z)(a,f),k=(0,n.Z)({},a,{component:m,disableTypography:b}),T=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,r)})(k);let P=w;null==P||P.type===l.Z||b||(P=(0,h.jsx)(l.Z,(0,n.Z)({variant:d?"body2":"h5",className:T.title,component:"span",display:"block"},N,{children:P})));let L=v;return null==L||L.type===l.Z||b||(L=(0,h.jsx)(l.Z,(0,n.Z)({variant:d?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:L}))),(0,h.jsxs)(g,(0,n.Z)({className:(0,i.Z)(T.root,u),as:m,ref:r,ownerState:k},j,{children:[d&&(0,h.jsx)(Z,{className:T.avatar,ownerState:k,children:d}),(0,h.jsxs)(y,{className:T.content,ownerState:k,children:[P,L]}),o&&(0,h.jsx)(x,{className:T.action,ownerState:k,children:o})]}))}))},84477:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return a(82143)}])},91862:function(e,r,a){"use strict";var t=a(26042),n=a(69396),o=a(85893),i=a(67294),s=a(69661),l=a(2734),c=a(41796),d=a(7511),u=(0,i.forwardRef)((function(e,r){var a=e.sx,i=e.src,u=e.skin,p=e.color,m=(0,l.Z)(),h=(0,d.Z)(),f=function(e,r){return"light"===e?(0,t.Z)({},h["".concat(r,"Light")]):"light-static"===e?{color:h["".concat(r,"Light")].color,backgroundColor:(0,c.$n)(m.palette[r].main,.88)}:(0,t.Z)({},h["".concat(r,"Filled")])},g={primary:f(u,"primary"),secondary:f(u,"secondary"),success:f(u,"success"),error:f(u,"error"),warning:f(u,"warning"),info:f(u,"info")};return(0,o.jsx)(s.Z,(0,n.Z)((0,t.Z)({ref:r},e),{sx:!i&&u&&p?Object.assign(g[p],a):a}))}));u.defaultProps={skin:"filled",color:"primary"},r.Z=u},74628:function(e,r,a){"use strict";var t=a(26042),n=a(69396),o=a(85893),i=a(87918),s=a(7511);r.Z=function(e){var r=e.sx,a=e.skin,l=e.color,c=(0,s.Z)(),d={primary:(0,t.Z)({},c.primaryLight),secondary:(0,t.Z)({},c.secondaryLight),success:(0,t.Z)({},c.successLight),error:(0,t.Z)({},c.errorLight),warning:(0,t.Z)({},c.warningLight),info:(0,t.Z)({},c.infoLight)};return(0,o.jsx)(i.Z,(0,n.Z)((0,t.Z)((0,n.Z)((0,t.Z)({},e),{variant:"filled"}),"light"===a&&{className:"MuiChip-light"}),{sx:"light"===a&&l?Object.assign(d[l],r):r}))}},71910:function(e,r,a){"use strict";var t=a(85893),n=a(86886);r.Z=function(e){var r=e.title,a=e.subtitle;return(0,t.jsxs)(n.ZP,{item:!0,xs:12,children:[r,a||null]})}},7511:function(e,r,a){"use strict";var t=a(2734),n=a(21946);r.Z=function(){var e=(0,t.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,n.E)(e.palette.primary.main,.12)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,n.E)(e.palette.secondary.main,.12)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,n.E)(e.palette.success.main,.12)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,n.E)(e.palette.error.main,.12)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,n.E)(e.palette.warning.main,.12)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,n.E)(e.palette.info.main,.12)}}}},82143:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return j}});var t=a(85893),n=a(86886),o=a(15861),i=a(71910),s=a(28065),l=a(67294),c=a(87357),d=(a(74628),a(91862),a(89717),a(66242)),u=a(12134),p=a(78445),m=[{flex:.1,field:"id",minWidth:80,headerName:"ID"},{flex:.25,minWidth:200,editable:!0,field:"full_name",headerName:"Name"},{flex:.25,minWidth:230,field:"email",editable:!0,headerName:"Email"},{flex:.15,type:"date",minWidth:130,editable:!0,field:"start_date",headerName:"Registered Date"},{flex:.15,minWidth:120,editable:!0,field:"experience",headerName:"Last Login"},{flex:.1,field:"age",minWidth:80,type:"number",editable:!0,headerName:"Total Purchased"}],h=function(){return(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(p.Z,{title:"Customers"}),(0,t.jsx)(c.Z,{sx:{height:500},children:(0,t.jsx)(u._,{columns:m,rows:s.i.slice(0,10)})})]})},f=(a(84136),a(34051),a(9669),a(11496)),g=a(87462),Z=a(63366),x=a(86010),y=a(27192),b=a(73490),v=a(48836);const C=["className","children"],w=(0,f.ZP)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:(e,r)=>r.toolbarContainer})((({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(.5,.5,0)}))),N=l.forwardRef((function(e,r){const{className:a,children:n}=e,o=(0,Z.Z)(e,C),i=(e=>{const{classes:r}=e;return(0,y.Z)({root:["toolbarContainer"]},b.d,r)})({classes:(0,v.B)().classes});return n?(0,t.jsx)(w,(0,g.Z)({ref:r,className:(0,x.Z)(a,i.root)},o,{children:n})):null}));(0,f.ZP)(N)({p:2,pb:0,display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between"});var j=function(){return(0,t.jsxs)(n.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(i.Z,{title:(0,t.jsx)(o.Z,{variant:"h5",children:"All Users"}),subtitle:(0,t.jsx)(o.Z,{variant:"body2",children:"A row is a horizontal alignment of data, while a column is vertical."})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,children:(0,t.jsx)(h,{})})]})}}},function(e){e.O(0,[135,2657,6628,2134,4136,9774,2888,179],(function(){return r=84477,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
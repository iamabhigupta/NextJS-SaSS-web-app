"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2350],{81856:function(e,n,i){i(85893),i(67294),i(15660),i(66485)},71910:function(e,n,i){var t=i(85893),r=i(86886);n.Z=function(e){var n=e.title,i=e.subtitle;return(0,t.jsxs)(r.ZP,{item:!0,xs:12,children:[n,i||null]})}},68524:function(e,n,i){var t=(0,i(11496).ZP)("div")({display:"flex","& .rccs, & .rccs__card":{margin:0}});n.Z=t},59694:function(e,n,i){var t=i(14924),r=i(11496),a=i(87357),c=(0,r.ZP)(a.Z)((function(e){var n,i=e.theme;return{"&.dropzone, & .dropzone":(n={minHeight:80,display:"flex",flexWrap:"wrap",cursor:"pointer",position:"relative",alignItems:"center",justifyContent:"center",padding:i.spacing(4),borderRadius:i.shape.borderRadius,border:"2px dashed ".concat("light"===i.palette.mode?"rgba(93, 89, 98, 0.22)":"rgba(247, 244, 254, 0.14)")},(0,t.Z)(n,i.breakpoints.down("xs"),{textAlign:"center"}),(0,t.Z)(n,"&:focus",{outline:"none"}),(0,t.Z)(n,"& + .MuiList-root",{padding:0,marginTop:i.spacing(6.25),"& .MuiListItem-root":{display:"flex",justifyContent:"space-between",borderRadius:i.shape.borderRadius,padding:i.spacing(2.5,2.4,2.5,6),border:"1px solid ".concat("light"===i.palette.mode?"rgba(93, 89, 98, 0.14)":"rgba(247, 244, 254, 0.14)"),"& .file-details":{display:"flex",alignItems:"center"},"& .file-preview":{display:"flex",marginRight:i.spacing(3.75),"& svg":{fontSize:"2rem"}},"& img":{width:38,height:38,padding:i.spacing(.75),borderRadius:i.shape.borderRadius,border:"1px solid ".concat("light"===i.palette.mode?"rgba(93, 89, 98, 0.14)":"rgba(247, 244, 254, 0.14)")},"& .file-name":{fontWeight:600},"& + .MuiListItem-root":{marginTop:i.spacing(3.5)}},"& + .buttons":{display:"flex",justifyContent:"flex-end",marginTop:i.spacing(6.25),"& > :first-of-type":{marginRight:i.spacing(3.5)}}}),(0,t.Z)(n,"& img.single-file-image",{objectFit:"cover",position:"absolute",width:"calc(100% - 1rem)",height:"calc(100% - 1rem)",borderRadius:i.shape.borderRadius}),n)}}));n.Z=c},57063:function(e,n,i){i.d(n,{N:function(){return a},mf:function(){return r},tE:function(){return c}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")},r=function(e,n){if(!e)return e;var i,r=n.fns.cardType(e),a=t(e);switch(r){case"amex":i="".concat(a.slice(0,4)," ").concat(a.slice(4,10)," ").concat(a.slice(10,15));break;case"dinersclub":i="".concat(a.slice(0,4)," ").concat(a.slice(4,10)," ").concat(a.slice(10,14));break;default:i="".concat(a.slice(0,4)," ").concat(a.slice(4,8)," ").concat(a.slice(8,12)," ").concat(a.slice(12,19))}return i.trim()},a=function(e){return e.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/")},c=function(e,n,i){var r=t(e),a="amex"===i.fns.cardType(n)?4:3;return r.slice(0,a)}},32144:function(e,n,i){var t=i(14924),r=i(26042),a=i(69396),c=i(29815),s=i(85893),o=i(67294),l=i(87357),d=i(50122),u=i(78462),p=i(11057),g=i(97212),m=i(11496),f=i(93946),h=i(15861),x=i(42734),b=i(71439),Z=i(8523),v=(0,m.ZP)("img")((function(e){var n,i=e.theme;return n={},(0,t.Z)(n,i.breakpoints.up("md"),{marginRight:i.spacing(10)}),(0,t.Z)(n,i.breakpoints.down("md"),{marginBottom:i.spacing(4)}),(0,t.Z)(n,i.breakpoints.down("sm"),{width:250}),n})),j=(0,m.ZP)(h.Z)((function(e){var n=e.theme;return(0,t.Z)({marginBottom:n.spacing(5)},n.breakpoints.down("sm"),{marginBottom:n.spacing(4)})}));n.Z=function(){var e=(0,o.useState)([]),n=e[0],i=e[1],t=(0,Z.uI)({onDrop:function(e){i(e.map((function(e){return Object.assign(e)})))}}),m=t.getRootProps,w=t.getInputProps,y=function(e){return e.type.startsWith("image")?(0,s.jsx)("img",{width:38,height:38,alt:e.name,src:URL.createObjectURL(e)}):(0,s.jsx)(b.Z,{})},k=n.map((function(e){return(0,s.jsxs)(g.ZP,{children:[(0,s.jsxs)("div",{className:"file-details",children:[(0,s.jsx)("div",{className:"file-preview",children:y(e)}),(0,s.jsxs)("div",{children:[(0,s.jsx)(h.Z,{className:"file-name",children:e.name}),(0,s.jsx)(h.Z,{className:"file-size",variant:"body2",children:Math.round(e.size/100)/10>1e3?"".concat((Math.round(e.size/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(e.size/100)/10).toFixed(1)," kb")})]})]}),(0,s.jsx)(f.Z,{onClick:function(){return function(e){var t=n.filter((function(n){return n.name!==e.name}));i((0,c.Z)(t))}(e)},children:(0,s.jsx)(x.Z,{fontSize:"small"})})]},e.name)}));return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsxs)("div",(0,a.Z)((0,r.Z)({},m({className:"dropzone"})),{children:[(0,s.jsx)("input",(0,r.Z)({},w())),(0,s.jsxs)(l.Z,{sx:{display:"flex",flexDirection:["column","column","row"],alignItems:"center"},children:[(0,s.jsx)(v,{width:300,alt:"Upload img",src:"/images/misc/upload.png"}),(0,s.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",textAlign:["center","center","inherit"]},children:[(0,s.jsx)(j,{variant:"h5",children:"Drop files here or click to upload."}),(0,s.jsxs)(h.Z,{color:"textSecondary",children:["Drop files here or click"," ",(0,s.jsx)(d.Z,{href:"/",onClick:function(e){e.preventDefault()},children:"browse"})," ","thorough your machine"]})]})]})]})),n.length?(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(u.Z,{children:k}),(0,s.jsxs)("div",{className:"buttons",children:[(0,s.jsx)(p.Z,{color:"error",variant:"outlined",onClick:function(){i([])},children:"Remove All"}),(0,s.jsx)(p.Z,{variant:"contained",children:"Upload Files"})]})]}):null]})}}}]);
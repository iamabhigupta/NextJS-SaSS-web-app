(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6660],{44267:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(87462),a=r(63366),i=r(67294),s=r(86010),o=r(27192),d=r(11496),l=r(71657),c=r(28979);function u(e){return(0,c.Z)("MuiCardContent",e)}(0,r(76087).Z)("MuiCardContent",["root"]);var f=r(85893);const m=["className","component"],h=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var x=i.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:i,component:d="div"}=r,c=(0,a.Z)(r,m),x=(0,n.Z)({},r,{component:d}),p=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},u,t)})(x);return(0,f.jsx)(h,(0,n.Z)({as:d,className:(0,s.Z)(p.root,i),ownerState:x,ref:t},c))}))},78687:function(e,t,r){"use strict";var n;t.Z=void 0;var a=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z","Laptop");t.Z=a},3690:function(e,t,r){"use strict";var n;t.Z=void 0;var a=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z","PencilOutline");t.Z=a},93842:function(e,t,r){"use strict";var n;t.Z=void 0;var a=(0,((n=r(65129))&&n.__esModule?n:{default:n}).default)("M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z","TrendingUp");t.Z=a},19159:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return r(67413)}])},89717:function(e,t,r){"use strict";r.d(t,{Q:function(){return n}});var n=function(e){return e.split(/\s/).reduce((function(e,t){return e+t.slice(0,1)}),"")}},67413:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(85893),a=r(86886),i=r(19216),s=r(39247),o=r(64895),d=r(84136),l=(r(87357),r(15861)),c=r(23808),u=r(78687),f=r(9657),m=r(3690),h=r(99642),x=(r(74628),r(28538),r(89717),u.Z,c.Z,f.Z,m.Z,h.Z,r(98424),r(34111)),p=r(93842),Z=(h.Z,x.Z,p.Z,r(383),r(35059),r(83492),r(97420),r(70887),r(90047),r(51361),function(){return(0,n.jsx)(o.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsxs)(a.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,n.jsx)(a.ZP,{container:!0,item:!0,xs:9,children:(0,n.jsx)(l.Z,{variant:"h5",children:"Orders"})})," ",(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsx)(i.Z,{data:{stats:"27",title:"New Orders",chipColor:"primary",trendNumber:"+1.6%",chipText:"Today",src:"/images/cards/card-stats-img-1.png"}})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsx)(i.Z,{data:{stats:"27",title:"Pending Orders",trend:"negative",chipColor:"success",trendNumber:"-25.5%",chipText:"Last Month",src:"/images/cards/card-stats-img-2.png"}})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,n.jsx)(i.Z,{data:{stats:"27",title:"Delivered Orders",trend:"negative",chipColor:"success",trendNumber:"-25.5%",chipText:"Last Month",src:"/images/cards/card-stats-img-3.png"}})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(d.Z,{})})]})})})})},84136:function(e,t,r){"use strict";var n=r(85893),a=r(67294),i=r(9669),s=r.n(i),o=r(87357),d=r(66242),l=r(15861),c=r(12134),u=r(74628),f=(r(28538),function(e){e.row,Math.floor(6*Math.random())});t.Z=function(){var e=(0,a.useState)([]),t=e[0],r=e[1];(0,a.useEffect)((function(){s()({url:"https://api.tryme.info/graphql",method:"post",data:{query:"\n          query {\n            orderFindAll {\n                id,\n                store_id,\n                user_id,\n                initial_price,\n                delivery_fee,\n                total_price,\n                shipping_address,\n                billing_address,\n                items {\n                    id,\n                    product_id,\n                    quantity,\n                    price,\n                    total_price\n                },\n                status,\n                created_at,\n                updated_at\n            }\n        }"},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e.data.data.orderFindAll),r(e.data.data.orderFindAll)}))}),[]);var i=(0,a.useState)(7),m=i[0],h=i[1],x=(0,a.useState)(!0),p=x[0],Z=(x[1],[{flex:.275,minWidth:290,field:"full_name",headerName:"Customer Name",sortable:p,renderCell:function(e){var t=e.row;return(0,n.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[f(e),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,n.jsx)(l.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:t.user_id}),(0,n.jsx)(l.Z,{noWrap:!0,variant:"caption",children:t.email})]})]})}},{flex:.125,field:"age",minWidth:80,headerName:"Order ID",sortable:p,renderCell:function(e){return(0,n.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})}},{flex:.2,minWidth:120,headerName:"Date",field:"start_date",sortable:p,renderCell:function(e){return(0,n.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.created_at})}},{flex:.2,minWidth:110,field:"salary",headerName:"Order value",sortable:p,renderCell:function(e){return(0,n.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})}},{flex:.2,minWidth:140,field:"status",headerName:"Status",sortable:p,renderCell:function(e){return(0,n.jsx)(u.Z,{size:"small",skin:"light",color:"warning",label:"Pending",sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}]);return(0,n.jsx)(d.Z,{children:(0,n.jsx)(c._,{autoHeight:!0,rows:t,columns:Z,pageSize:m,rowsPerPageOptions:[7,10,25,50],onPageSizeChange:function(e){return h(e)}})})}}},function(e){e.O(0,[135,2657,6628,4231,2134,9443,1361,6504,9774,2888,179],(function(){return t=19159,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
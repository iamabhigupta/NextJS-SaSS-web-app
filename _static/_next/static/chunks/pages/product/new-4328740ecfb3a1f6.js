(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{28284:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/new",function(){return n(73730)}])},73730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),a=n(67294),o=n(9669),i=n.n(o),s=n(86886),d=n(87357),c=n(11057),u=(n(14924),n(26042),n(69396),n(66242)),l=n(18972),h=n(18360),f=n(50122),p=n(50135),g=n(78445),m=n(15861),x=n(44267),j=n(94054),Z=n(59694),_=(n(71910),n(81856),n(52034),n(49634),n(32144)),y=function(e){var t=e.fName,n=(e.fCatName,e.fPrice),o=e.fDprice,d=e.fPdesc,c=(e.fstore,e.fcategory),y=e.pffileId,P=(0,a.useState)({password:"",showPassword:!1}),b=(P[0],P[1],(0,a.useState)([])),w=(b[0],b[1],(0,a.useState)({password:"",showPassword:!1})),S=(w[0],w[1],(0,a.useState)([])),v=(S[0],S[1],(0,a.useState)([])),C=v[0],N=v[1],W=(0,a.useState)([]),E=W[0],A=W[1],k=JSON.parse(window.localStorage.getItem("userData")),q=(0,a.useState)(),B=q[0],I=q[1];return y(B),(0,a.useEffect)((function(){i()({url:"http://13.126.160.113:3333/graphql",method:"post",data:{query:"\n    query {\n      storeFindAllByUser(user_id: ".concat(k.id,") {\n          id,\n          user_id,\n          name,\n          site_name,\n          description,\n          image,\n          status,\n          created_at,\n          updated_at\n      }\n  }")},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e.data.data.storeFindAllByUser),A(e.data.data.storeFindAllByUser)})),i()({url:"http://13.126.160.113:3333/graphql",method:"post",data:{query:"\n    query {\n      productCategoryFindAll {\n          id,\n          store_id,\n          name,\n          slug,\n          image,\n          attributes {\n              id,\n              name,\n              status\n          }\n          status,\n          created_at,\n          updated_at\n      }\n  }"},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e.data.data.productCategoryFindAll),N(e.data.data.productCategoryFindAll)}))}),[k]),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(g.Z,{title:"Product Information",titleTypographyProps:{variant:"h6"}}),E.length>0&&(0,r.jsx)(f.Z,{target:"_blank",href:"http://store.tryme.info/"+E[0].site_name,underline:"hover",sx:{position:"absolute",top:"18%",left:"50%"},children:"http://store.tryme.info/"+E[0].site_name}),0==E.length&&(0,r.jsx)(f.Z,{href:"/dashboard",underline:"hover",sx:{position:"absolute",top:"18%",left:"50%",color:"red"},children:"Please setup your store .. click here"}),(0,r.jsx)(x.Z,{children:(0,r.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:(0,r.jsxs)(s.ZP,{container:!0,spacing:5,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Product Name"}),(0,r.jsx)(p.Z,{autoComplete:"off",onChange:function(e){return t(e.target.value)},fullWidth:!0,placeholder:"Enter product name"})]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Product Category"}),(0,r.jsx)(j.Z,{fullWidth:!0,children:(0,r.jsxs)(h.Z,{defaultValue:"",displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(e){return c(e.target.value)},children:[(0,r.jsx)(l.Z,{value:"",children:(0,r.jsx)("em",{children:"Select Category .."})}),C.map((function(e){return(0,r.jsx)(l.Z,{value:e.id,children:e.name},e.id)}))]})})]})}),(0,r.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Price"}),(0,r.jsx)(p.Z,{autoComplete:"off",onChange:function(e){return n(e.target.value)},fullWidth:!0,placeholder:"Enter price"})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Discounted Price"}),(0,r.jsx)(p.Z,{autoComplete:"off",onChange:function(e){return o(e.target.value)},fullWidth:!0,placeholder:"Enter discounted price"})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Veg / Non Veg / Egg"}),(0,r.jsx)(j.Z,{fullWidth:!0,children:(0,r.jsxs)(h.Z,{defaultValue:"",displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[(0,r.jsx)(l.Z,{value:"",children:(0,r.jsx)("em",{children:"None"})}),(0,r.jsx)(l.Z,{value:"Veg",children:"Veg"}),(0,r.jsx)(l.Z,{value:"Non Veg",children:"Non Veg"}),(0,r.jsx)(l.Z,{value:"Egg",children:"Egg"})]})})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Product Media (up to 5)"}),(0,r.jsx)(Z.Z,{children:(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsx)(_.Z,{fileId:function(e){return I(e)}})})})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(m.Z,{sx:{mb:2,fontWeight:500},children:"Product Description"}),(0,r.jsx)(p.Z,{autoComplete:"off",onChange:function(e){return d(e.target.value)},fullWidth:!0,placeholder:"Enter product description"})]})]})})})]})},P=n(11496),b=(n(77028),n(16054),n(68524),n(74853),(0,P.ZP)(d.Z)((function(e){var t=e.theme;return{borderWidth:1,display:"flex",cursor:"pointer",borderStyle:"solid",padding:t.spacing(5),borderColor:t.palette.divider,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius}}})),n(11163)),w=function(){var e=(0,b.useRouter)(),t=(0,a.useState)(""),n=t[0],o=t[1],u=(0,a.useState)(""),l=(u[0],u[1]),h=(0,a.useState)(""),f=h[0],p=h[1],g=(0,a.useState)(""),m=g[0],x=g[1],j=(0,a.useState)(""),Z=j[0],_=j[1],P=(0,a.useState)(""),w=(P[0],P[1]),S=(0,a.useState)(""),v=S[0],C=S[1],N=(0,a.useState)(""),W=N[0],E=N[1],A=(0,a.useState)([]),k=A[0],q=A[1],B=JSON.parse(window.localStorage.getItem("userData"));(0,a.useEffect)((function(){i()({url:"http://13.126.160.113:3333/graphql",method:"post",data:{query:"\n    query {\n      storeFindAllByUser(user_id: ".concat(B.id,") {\n          id,\n          user_id,\n          name,\n          site_name,\n          description,\n          image,\n          status,\n          created_at,\n          updated_at\n      }\n  }")},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(e){console.log(e.data.data.storeFindAllByUser),q(e.data.data.storeFindAllByUser)}))}),[B]);return(0,r.jsxs)(s.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsx)(y,{fName:function(e){return o(e)},fCatName:function(e){return l(e)},fDprice:function(e){return p(e)},fPrice:function(e){return x(e)},fPdesc:function(e){return _(e)},fstore:function(e){return w(e)},fcategory:function(e){return C(e)},pffileId:function(e){return E(e)}})}),(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsx)(d.Z,{sx:{gap:5,display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(c.Z,{disabled:!W,type:"button",onClick:function(t){return console.log("fileid==============>"+W),void i()({url:"http://13.126.160.113:3333/graphql",method:"post",data:{query:"\n          \n    mutation {\n      productCreate(data: {\n          store_id: ".concat(k[0].id,",\n          category_id: ").concat(v,',\n          title: "').concat(n,'",\n          short_description: "').concat(Z,'",\n          long_description: "').concat(Z,'",\n          html_content: "').concat(Z,'",\n          price: ').concat(m,",\n          discount: ").concat(f,',\n          country_of_origin: "India",\n          media_ids: "').concat(W,'",\n          stock: 10,\n          status: Active,\n      }) {\n          id,\n          store_id,\n          category_id,\n          title,\n          short_description,\n          long_description,\n          html_content,\n          price,\n          discount,\n          country_of_origin,\n          image,\n          attributes {\n              name,\n              value\n          },\n          faqs {\n              id,\n              question,\n              answer,\n          },\n          stock,\n          status,\n          created_at,\n          updated_at\n      }\n  }   \n   \n        ')},headers:{Authorization:"Bearer "+window.localStorage.getItem("accessToken")}}).then((function(t){console.log(t),e.push("/product")}))},color:"success",variant:"contained",size:"large",children:"Add Product"})})})]})}}},function(e){e.O(0,[135,2657,6006,4314,1587,8854,9774,2888,179],(function(){return t=28284,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7966],{84865:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return s(34152)}])},91862:function(e,n,s){"use strict";var r=s(26042),t=s(69396),i=s(85893),a=s(67294),l=s(69661),o=s(2734),c=s(41796),d=s(7511),u=(0,a.forwardRef)((function(e,n){var s=e.sx,a=e.src,u=e.skin,x=e.color,h=(0,o.Z)(),m=(0,d.Z)(),Z=function(e,n){return"light"===e?(0,r.Z)({},m["".concat(n,"Light")]):"light-static"===e?{color:m["".concat(n,"Light")].color,backgroundColor:(0,c.$n)(h.palette[n].main,.88)}:(0,r.Z)({},m["".concat(n,"Filled")])},j={primary:Z(u,"primary"),secondary:Z(u,"secondary"),success:Z(u,"success"),error:Z(u,"error"),warning:Z(u,"warning"),info:Z(u,"info")};return(0,i.jsx)(l.Z,(0,t.Z)((0,r.Z)({ref:n},e),{sx:!a&&u&&x?Object.assign(j[x],s):s}))}));u.defaultProps={skin:"filled",color:"primary"},n.Z=u},74628:function(e,n,s){"use strict";var r=s(26042),t=s(69396),i=s(85893),a=s(87918),l=s(7511);n.Z=function(e){var n=e.sx,s=e.skin,o=e.color,c=(0,l.Z)(),d={primary:(0,r.Z)({},c.primaryLight),secondary:(0,r.Z)({},c.secondaryLight),success:(0,r.Z)({},c.successLight),error:(0,r.Z)({},c.errorLight),warning:(0,r.Z)({},c.warningLight),info:(0,r.Z)({},c.infoLight)};return(0,i.jsx)(a.Z,(0,t.Z)((0,r.Z)((0,t.Z)((0,r.Z)({},e),{variant:"filled"}),"light"===s&&{className:"MuiChip-light"}),{sx:"light"===s&&o?Object.assign(d[o],n):n}))}},7511:function(e,n,s){"use strict";var r=s(2734),t=s(21946);n.Z=function(){var e=(0,r.Z)();return{primaryFilled:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},primaryLight:{color:e.palette.primary.main,backgroundColor:(0,t.E)(e.palette.primary.main,.12)},secondaryFilled:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main},secondaryLight:{color:e.palette.secondary.main,backgroundColor:(0,t.E)(e.palette.secondary.main,.12)},successFilled:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.main},successLight:{color:e.palette.success.main,backgroundColor:(0,t.E)(e.palette.success.main,.12)},errorFilled:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.main},errorLight:{color:e.palette.error.main,backgroundColor:(0,t.E)(e.palette.error.main,.12)},warningFilled:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.main},warningLight:{color:e.palette.warning.main,backgroundColor:(0,t.E)(e.palette.warning.main,.12)},infoFilled:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.main},infoLight:{color:e.palette.info.main,backgroundColor:(0,t.E)(e.palette.info.main,.12)}}}},68524:function(e,n,s){"use strict";var r=(0,s(11496).ZP)("div")({display:"flex","& .rccs, & .rccs__card":{margin:0}});n.Z=r},57063:function(e,n,s){"use strict";s.d(n,{N:function(){return i},mf:function(){return t},tE:function(){return a}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")},t=function(e,n){if(!e)return e;var s,t=n.fns.cardType(e),i=r(e);switch(t){case"amex":s="".concat(i.slice(0,4)," ").concat(i.slice(4,10)," ").concat(i.slice(10,15));break;case"dinersclub":s="".concat(i.slice(0,4)," ").concat(i.slice(4,10)," ").concat(i.slice(10,14));break;default:s="".concat(i.slice(0,4)," ").concat(i.slice(4,8)," ").concat(i.slice(8,12)," ").concat(i.slice(12,19))}return s.trim()},i=function(e){return e.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/")},a=function(e,n,s){var t=r(e),i="amex"===s.fns.cardType(n)?4:3;return t.slice(0,i)}},34152:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return ve}});var r=s(14924),t=s(85893),i=s(67294),a=s(87357),l=s(66242),o=s(30298),c=s(55050),d=s(45670),u=s(11496),x=s(40044),h=s(37142),m=s(99642),Z=s(41036),j=s(54889),f=s(74496),p=s(26042),g=s(86886),v=s(36872),w=s(18360),b=s(11057),y=s(18972),P=s(50135),C=s(40476),k=s(47312),S=s(68061),N=s(44267),D=s(94054),W=s(57709),L=s(50480),I=s(9198),E=s.n(I),A=s(8745),F=(0,i.forwardRef)((function(e,n){return(0,t.jsx)(P.Z,(0,p.Z)({inputRef:n,label:"Birth Date",fullWidth:!0},e))})),R=function(){var e=(0,i.useState)(null),n=e[0],s=e[1];return(0,t.jsx)(N.Z,{children:(0,t.jsx)("form",{children:(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,sx:{mt:5},children:(0,t.jsx)(P.Z,{fullWidth:!0,multiline:!0,label:"Bio",minRows:2,placeholder:"Bio",defaultValue:"The name\u2019s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant \ud83d\ude0e, scalable \ud83d\ude00, and lightning \ud83d\ude0d fast search and discovery experiences."})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.Z,{children:(0,t.jsx)(E(),{selected:n,showYearDropdown:!0,showMonthDropdown:!0,id:"account-settings-date",placeholderText:"MM-DD-YYYY",customInput:(0,t.jsx)(F,{}),onChange:function(e){return s(e)}})})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,type:"number",label:"Phone",placeholder:"(123) 456-7890"})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,label:"Website",placeholder:"https://example.com/",defaultValue:"https://lapaas.com/"})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{children:"Country"}),(0,t.jsxs)(w.Z,{label:"Country",defaultValue:"India",children:[(0,t.jsx)(y.Z,{value:"India",children:"India"}),(0,t.jsx)(y.Z,{value:"UK",children:"UK"}),(0,t.jsx)(y.Z,{value:"Australia",children:"Australia"}),(0,t.jsx)(y.Z,{value:"Germany",children:"Germany"})]})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{id:"form-layouts-separator-multiple-select-label",children:"Languages"}),(0,t.jsxs)(w.Z,{multiple:!0,defaultValue:["English"],id:"account-settings-multiple-select",labelId:"account-settings-multiple-select-label",input:(0,t.jsx)(W.Z,{label:"Languages",id:"select-multiple-language"}),children:[(0,t.jsx)(y.Z,{value:"English",children:"English"}),(0,t.jsx)(y.Z,{value:"French",children:"French"}),(0,t.jsx)(y.Z,{value:"Spanish",children:"Spanish"}),(0,t.jsx)(y.Z,{value:"Portuguese",children:"Portuguese"}),(0,t.jsx)(y.Z,{value:"Italian",children:"Italian"}),(0,t.jsx)(y.Z,{value:"German",children:"German"}),(0,t.jsx)(y.Z,{value:"Arabic",children:"Arabic"})]})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(D.Z,{children:[(0,t.jsx)(C.Z,{sx:{lineHeight:1.5},children:"Gender"}),(0,t.jsxs)(S.Z,{row:!0,defaultValue:"male","aria-label":"gender",name:"account-settings-info-radio",children:[(0,t.jsx)(L.Z,{value:"male",label:"Male",control:(0,t.jsx)(v.Z,{})}),(0,t.jsx)(L.Z,{value:"female",label:"Female",control:(0,t.jsx)(v.Z,{})}),(0,t.jsx)(L.Z,{value:"other",label:"Other",control:(0,t.jsx)(v.Z,{})})]})]})}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sx:{pt:function(e){return"".concat(e.spacing(7)," !important")}},children:[(0,t.jsx)(b.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,t.jsx)(b.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){return s(null)},children:"Reset"})]})]})})})},T=s(50122),z=s(46901),B=s(15861),M=s(92401),_=s(93946),$=s(42734),V=(0,u.ZP)("img")((function(e){var n=e.theme;return{width:120,height:120,marginRight:n.spacing(5),borderRadius:n.shape.borderRadius}})),Y=(0,u.ZP)(b.Z)((function(e){var n=e.theme;return(0,r.Z)({},n.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),G=(0,u.ZP)(b.Z)((function(e){var n=e.theme;return(0,r.Z)({marginLeft:n.spacing(4)},n.breakpoints.down("sm"),{width:"100%",marginLeft:0,textAlign:"center",marginTop:n.spacing(4)})})),U=function(){var e=(0,i.useState)(!0),n=e[0],s=e[1],r=(0,i.useState)("/images/avatars/1.png"),l=r[0],o=r[1];return(0,t.jsx)(N.Z,{children:(0,t.jsx)("form",{children:(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,sx:{my:5},children:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(V,{src:l,alt:"Profile Pic"}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(Y,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["Upload New Photo",(0,t.jsx)("input",{hidden:!0,type:"file",onChange:function(e){var n=new FileReader,s=e.target.files;s&&0!==s.length&&(n.onload=function(){return o(n.result)},n.readAsDataURL(s[0]))},accept:"image/png, image/jpeg",id:"account-settings-upload-image"})]}),(0,t.jsx)(G,{color:"error",variant:"outlined",onClick:function(){return o("/images/avatars/1.png")},children:"Reset"}),(0,t.jsx)(B.Z,{sx:{mt:4},component:"p",variant:"caption",children:"Allowed PNG or JPEG. Max size of 800K."})]})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,label:"Username",placeholder:"johnDoe",defaultValue:"johnDoe"})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,label:"Name",placeholder:"John Doe",defaultValue:"John Doe"})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,type:"email",label:"Email",placeholder:"johnDoe@example.com",defaultValue:"johnDoe@example.com"})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{children:"Role"}),(0,t.jsxs)(w.Z,{label:"Role",defaultValue:"admin",children:[(0,t.jsx)(y.Z,{value:"admin",children:"Admin"}),(0,t.jsx)(y.Z,{value:"author",children:"Author"}),(0,t.jsx)(y.Z,{value:"editor",children:"Editor"}),(0,t.jsx)(y.Z,{value:"maintainer",children:"Maintainer"}),(0,t.jsx)(y.Z,{value:"subscriber",children:"Subscriber"})]})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{children:"Status"}),(0,t.jsxs)(w.Z,{label:"Status",defaultValue:"active",children:[(0,t.jsx)(y.Z,{value:"active",children:"Active"}),(0,t.jsx)(y.Z,{value:"inactive",children:"Inactive"}),(0,t.jsx)(y.Z,{value:"pending",children:"Pending"})]})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,label:"Company",placeholder:"ABC Pvt. Ltd.",defaultValue:"ABC Pvt. Ltd."})}),n?(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(z.Z,{severity:"warning",sx:{"& a":{fontWeight:400}},action:(0,t.jsx)(_.Z,{size:"small",color:"inherit","aria-label":"close",onClick:function(){return s(!1)},children:(0,t.jsx)($.Z,{fontSize:"inherit"})}),children:[(0,t.jsx)(M.Z,{sx:{mb:".15rem"},children:"Your email is not confirmed. Please check your inbox."}),(0,t.jsx)(T.Z,{href:"/",onClick:function(e){return e.preventDefault()},children:"Resend Confirmation"})]})}):null,(0,t.jsxs)(g.ZP,{item:!0,xs:12,children:[(0,t.jsx)(b.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,t.jsx)(b.Z,{type:"reset",variant:"outlined",color:"secondary",children:"Reset"})]})]})})})},O=s(581),H=s(40111),J=s(77028),q=s.n(J),K=s(16054),X=s(74628),Q=s(68524),ee=s(57063),ne=(s(74853),(0,u.ZP)(g.ZP)((function(e){var n=e.theme;return(0,r.Z)({marginTop:n.spacing(5)},n.breakpoints.down("md"),{order:-1})}))),se=(0,u.ZP)(X.Z)((function(e){var n=e.theme;return{height:20,fontWeight:600,fontSize:"0.75rem",marginTop:n.spacing(2.25),marginBottom:n.spacing(5.5),"& .MuiChip-label":{padding:n.spacing(0,1.7)}}})),re=(0,u.ZP)(a.Z)((function(e){var n,s=e.theme;return n={display:"flex",flexDirection:"column"},(0,r.Z)(n,s.breakpoints.down("xl"),{"& > div:first-of-type":{marginBottom:s.spacing(6)}}),(0,r.Z)(n,s.breakpoints.up("xl"),{alignItems:"center",flexDirection:"row","& > div:first-of-type":{marginRight:s.spacing(6)}}),n})),te=function(){var e=(0,i.useState)(""),n=e[0],s=e[1],r=(0,i.useState)(""),l=r[0],o=r[1],c=(0,i.useState)(""),d=c[0],u=c[1],x=(0,i.useState)(),h=x[0],Z=x[1],j=(0,i.useState)(""),f=j[0],p=j[1],w=(0,i.useState)("card"),y=w[0],k=w[1],W=function(){return Z(void 0)},I=function(e){var n=e.target;"number"===n.name?(n.value=(0,ee.mf)(n.value,q()),u(n.value)):"expiry"===n.name?(n.value=(0,ee.N)(n.value),p(n.value)):"cvc"===n.name&&(n.value=(0,ee.tE)(n.value,d,q()),o(n.value))};return(0,t.jsx)(N.Z,{children:(0,t.jsx)("form",{children:(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,md:8,sx:{mt:5},children:(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(D.Z,{children:[(0,t.jsx)(C.Z,{sx:{mb:1,color:"text.secondary"},children:"Payment Method"}),(0,t.jsxs)(S.Z,{row:!0,value:y,"aria-label":"payment method",name:"account-settings-billing-radio",onChange:function(e){return k(e.target.value)},children:[(0,t.jsx)(L.Z,{value:"card",label:"Credit/Debit/ATM Card",control:(0,t.jsx)(v.Z,{}),sx:{mr:6.75}}),(0,t.jsx)(L.Z,{value:"cod",label:"COD/Cheque",control:(0,t.jsx)(v.Z,{})})]})]})}),"card"===y?(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(re,{children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)(K.Z,{cvc:l,focused:h,expiry:f,name:n,number:d})}),(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,sx:{pt:function(e){return"".concat(e.spacing(4)," !important")}},children:(0,t.jsx)(P.Z,{fullWidth:!0,name:"number",value:d,autoComplete:"off",label:"Card Number",onBlur:W,onChange:I,placeholder:"0000 0000 0000 0000",onFocus:function(e){return Z(e.target.name)}})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsx)(P.Z,{fullWidth:!0,name:"name",value:n,label:"Name",autoComplete:"off",onBlur:W,placeholder:"John Doe",onFocus:function(e){return Z(e.target.name)},onChange:function(e){return s(e.target.value)}})}),(0,t.jsx)(g.ZP,{item:!0,xs:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,name:"expiry",value:f,autoComplete:"off",label:"Expiry Date",placeholder:"MM/YY",onBlur:W,onChange:I,inputProps:{maxLength:"5"},onFocus:function(e){return Z(e.target.name)}})}),(0,t.jsx)(g.ZP,{item:!0,xs:6,children:(0,t.jsx)(P.Z,{fullWidth:!0,name:"cvc",value:l,label:"CVC Code",autoComplete:"off",onBlur:W,onChange:I,onFocus:function(e){return Z(e.target.name)},placeholder:"amex"===q().fns.cardType(d)?"1234":"123"})})]})]})}):null]})}),(0,t.jsx)(ne,{item:!0,xs:12,md:4,children:(0,t.jsxs)(a.Z,{sx:{p:5,borderRadius:1,border:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,t.jsx)(B.Z,{variant:"h6",sx:{mb:4,color:"text.secondary"},children:"Your Current Plan"}),(0,t.jsx)(se,{skin:"light",size:"small",color:"primary",label:"Basic Plan"}),(0,t.jsxs)(a.Z,{sx:{my:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(m.Z,{sx:{mr:1.5}}),(0,t.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"5 Users"})]}),(0,t.jsxs)(a.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(O.Z,{sx:{mr:1.5}}),(0,t.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"10 GB storage"})]}),(0,t.jsxs)(a.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(H.Z,{sx:{mr:1.5}}),(0,t.jsx)(B.Z,{variant:"body2",sx:{fontSize:"1rem",lineHeight:1.5},children:"Basic Support"})]}),(0,t.jsx)(b.Z,{fullWidth:!0,variant:"contained",children:"Upgrade Plan"})]})}),(0,t.jsxs)(g.ZP,{item:!0,xs:12,sx:{mt:"card"===y?3:void 0},children:[(0,t.jsx)(b.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,t.jsx)(b.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){o(""),s(""),p(""),u("")},children:"Reset"})]})]})})})},ie=s(69396),ae=s(67720),le=s(87109),oe=s(51206),ce=s(95898),de=s(42218),ue=s(91862),xe=function(){var e,n=(0,i.useState)({newPassword:"",currentPassword:"",showNewPassword:!1,confirmNewPassword:"",showCurrentPassword:!1,showConfirmNewPassword:!1}),s=n[0],l=n[1];return(0,t.jsx)("form",{children:(0,t.jsxs)(N.Z,{children:[(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,sm:6,sx:{mt:5,mb:[0,6]},children:(0,t.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{htmlFor:"account-settings-current-password",children:"Current Password"}),(0,t.jsx)(W.Z,{label:"Current Password",value:s.currentPassword,id:"account-settings-current-password",type:s.showCurrentPassword?"text":"password",onChange:(e="currentPassword",function(n){l((0,ie.Z)((0,p.Z)({},s),(0,r.Z)({},e,n.target.value)))}),endAdornment:(0,t.jsx)(le.Z,{position:"end",children:(0,t.jsx)(_.Z,{edge:"end","aria-label":"toggle password visibility",onClick:function(){l((0,ie.Z)((0,p.Z)({},s),{showCurrentPassword:!s.showCurrentPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showCurrentPassword?(0,t.jsx)(ce.Z,{}):(0,t.jsx)(de.Z,{})})})})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{htmlFor:"account-settings-new-password",children:"New Password"}),(0,t.jsx)(W.Z,{label:"New Password",value:s.newPassword,id:"account-settings-new-password",onChange:function(e){return function(n){l((0,ie.Z)((0,p.Z)({},s),(0,r.Z)({},e,n.target.value)))}}("newPassword"),type:s.showNewPassword?"text":"password",endAdornment:(0,t.jsx)(le.Z,{position:"end",children:(0,t.jsx)(_.Z,{edge:"end",onClick:function(){l((0,ie.Z)((0,p.Z)({},s),{showNewPassword:!s.showNewPassword}))},"aria-label":"toggle password visibility",onMouseDown:function(e){e.preventDefault()},children:s.showNewPassword?(0,t.jsx)(ce.Z,{}):(0,t.jsx)(de.Z,{})})})})]})}),(0,t.jsx)(g.ZP,{item:!0,xs:12,children:(0,t.jsxs)(D.Z,{fullWidth:!0,children:[(0,t.jsx)(k.Z,{htmlFor:"account-settings-confirm-new-password",children:"Confirm New Password"}),(0,t.jsx)(W.Z,{label:"Confirm New Password",value:s.confirmNewPassword,id:"account-settings-confirm-new-password",type:s.showConfirmNewPassword?"text":"password",onChange:function(e){return function(n){l((0,ie.Z)((0,p.Z)({},s),(0,r.Z)({},e,n.target.value)))}}("confirmNewPassword"),endAdornment:(0,t.jsx)(le.Z,{position:"end",children:(0,t.jsx)(_.Z,{edge:"end","aria-label":"toggle password visibility",onClick:function(){l((0,ie.Z)((0,p.Z)({},s),{showConfirmNewPassword:!s.showConfirmNewPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showConfirmNewPassword?(0,t.jsx)(ce.Z,{}):(0,t.jsx)(de.Z,{})})})})]})})]})}),(0,t.jsx)(g.ZP,{item:!0,sm:6,xs:12,sx:{display:"flex",mt:2.5,alignItems:"flex-end",justifyContent:"center"},children:(0,t.jsx)("img",{alt:"avatar",src:"/images/pages/account-settings-security-illustration.png"})})]}),(0,t.jsx)(ae.Z,{sx:{mt:0,mb:6}}),(0,t.jsxs)(a.Z,{sx:{mb:11,display:"flex",alignItems:"center"},children:[(0,t.jsx)(oe.Z,{sx:{mr:4}}),(0,t.jsx)(B.Z,{variant:"h5",children:"Two-factor authentication"})]}),(0,t.jsx)(a.Z,{sx:{mb:11,display:"flex",justifyContent:"center"},children:(0,t.jsxs)(a.Z,{sx:{maxWidth:440,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(ue.Z,{skin:"light",variant:"rounded",sx:{mb:4,width:48,height:48},children:(0,t.jsx)(Z.Z,{})}),(0,t.jsx)(B.Z,{variant:"h6",sx:{mb:4},children:"Two factor authentication is not enabled yet."}),(0,t.jsx)(B.Z,{variant:"body2",children:"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more."})]})}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(b.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,t.jsx)(b.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:function(){return l((0,ie.Z)((0,p.Z)({},s),{currentPassword:"",newPassword:"",confirmNewPassword:""}))},children:"Reset"})]})]})})},he=s(72852),me=s(34111),Ze=s(42255),je=(0,u.ZP)(L.Z)((function(e){var n=e.theme;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",marginLeft:n.spacing(1.5),color:n.palette.text.secondary}}})),fe=function(){return(0,t.jsx)(N.Z,{sx:{pt:10},children:(0,t.jsxs)("form",{children:[(0,t.jsxs)(a.Z,{sx:{mb:4.5,display:"flex",alignItems:"center"},children:[(0,t.jsx)(me.Z,{sx:{fontSize:"1.75rem",mr:2}}),(0,t.jsx)(B.Z,{variant:"h6",children:"Activity"})]}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{defaultChecked:!0}),label:"Email me when someone comments on my article"})}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{defaultChecked:!0}),label:"Email me when someone answers on my forum thread"})}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{}),label:"Email me when someone follows me"})}),(0,t.jsxs)(a.Z,{sx:{mt:6,mb:4.5,display:"flex",alignItems:"center"},children:[(0,t.jsx)(Ze.Z,{sx:{fontSize:"1.75rem",mr:2}}),(0,t.jsx)(B.Z,{variant:"h6",children:"Application"})]}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{}),label:"News and announcements"})}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{defaultChecked:!0}),label:"Weekly product updates"})}),(0,t.jsx)(a.Z,{sx:{mb:2},children:(0,t.jsx)(je,{control:(0,t.jsx)(he.Z,{}),label:"Weekly blog digest"})}),(0,t.jsxs)(a.Z,{sx:{mt:6},children:[(0,t.jsx)(b.Z,{variant:"contained",sx:{mr:4},children:"Save Changes"}),(0,t.jsx)(b.Z,{type:"reset",variant:"outlined",color:"secondary",children:"Reset"})]})]})})},pe=(s(18698),(0,u.ZP)(x.Z)((function(e){var n,s=e.theme;return n={},(0,r.Z)(n,s.breakpoints.down("md"),{minWidth:100}),(0,r.Z)(n,s.breakpoints.down("sm"),{minWidth:67}),n}))),ge=(0,u.ZP)("span")((function(e){var n=e.theme;return(0,r.Z)({lineHeight:1.71,marginLeft:n.spacing(2.5)},n.breakpoints.down("md"),{display:"none"})})),ve=function(){var e=(0,i.useState)("account"),n=e[0],s=e[1];return(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.ZP,{value:n,children:[(0,t.jsxs)(o.Z,{onChange:function(e,n){s(n)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,t.jsx)(pe,{value:"account",label:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(m.Z,{sx:{fontSize:"1.125rem"}}),(0,t.jsx)(ge,{children:"Account"})]})}),(0,t.jsx)(pe,{value:"security",label:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(Z.Z,{sx:{fontSize:"1.125rem"}}),(0,t.jsx)(ge,{children:"Security"})]})}),(0,t.jsx)(pe,{value:"info",label:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(f.Z,{sx:{fontSize:"1.125rem"}}),(0,t.jsx)(ge,{children:"Info"})]})}),(0,t.jsx)(pe,{value:"billing",label:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(j.Z,{sx:{fontSize:"1.125rem"}}),(0,t.jsx)(ge,{children:"Billing"})]})}),(0,t.jsx)(pe,{value:"notifications",label:(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(h.Z,{sx:{fontSize:"1.125rem"}}),(0,t.jsx)(ge,{children:"Notifications"})]})})]}),(0,t.jsx)(c.Z,{sx:{p:0},value:"account",children:(0,t.jsx)(U,{})}),(0,t.jsx)(c.Z,{sx:{p:0},value:"security",children:(0,t.jsx)(xe,{})}),(0,t.jsx)(c.Z,{sx:{p:0},value:"info",children:(0,t.jsx)(R,{})}),(0,t.jsx)(c.Z,{sx:{p:0},value:"billing",children:(0,t.jsx)(te,{})}),(0,t.jsx)(c.Z,{sx:{p:0},value:"notifications",children:(0,t.jsx)(fe,{})})]})})}}},function(e){e.O(0,[135,2657,6006,2569,696,9873,9774,2888,179],(function(){return n=84865,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
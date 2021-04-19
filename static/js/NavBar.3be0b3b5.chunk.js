(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{164:function(t,o,e){"use strict";var a=e(1),i=e(8),r=e(0),n=(e(6),e(46)),c=e(47),l=e(48),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=r.forwardRef((function(t,o){var e=t.align,c=void 0===e?"inherit":e,p=t.classes,h=t.className,g=t.color,d=void 0===g?"initial":g,b=t.component,u=t.display,y=void 0===u?"initial":u,m=t.gutterBottom,f=void 0!==m&&m,j=t.noWrap,v=void 0!==j&&j,x=t.paragraph,O=void 0!==x&&x,k=t.variant,w=void 0===k?"body1":k,N=t.variantMapping,T=void 0===N?s:N,B=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),R=b||(O?"p":T[w]||s[w])||"span";return r.createElement(R,Object(a.a)({className:Object(n.a)(p.root,h,"inherit"!==w&&p[w],"initial"!==d&&p["color".concat(Object(l.a)(d))],v&&p.noWrap,f&&p.gutterBottom,O&&p.paragraph,"inherit"!==c&&p["align".concat(Object(l.a)(c))],"initial"!==y&&p["display".concat(Object(l.a)(y))]),ref:o},B))}));o.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},173:function(t,o,e){t.exports={barTitle:"styles_barTitle__lRdM-",greetings:"styles_greetings__2xeB9"}},216:function(t,o,e){"use strict";e.r(o),e.d(o,"default",(function(){return N}));var a=e(0),i=e(21),r=e(26),n=e(1),c=e(8),l=(e(6),e(46)),s=e(47),p=e(48),h=e(202),g=a.forwardRef((function(t,o){var e=t.classes,i=t.className,r=t.color,s=void 0===r?"primary":r,g=t.position,d=void 0===g?"fixed":g,b=Object(c.a)(t,["classes","className","color","position"]);return a.createElement(h.a,Object(n.a)({square:!0,component:"header",elevation:4,className:Object(l.a)(e.root,e["position".concat(Object(p.a)(d))],e["color".concat(Object(p.a)(s))],i,"fixed"===d&&"mui-fixed"),ref:o},b))})),d=Object(s.a)((function(t){var o="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:o,color:t.palette.getContrastText(o)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(g),b=e(15),u=a.forwardRef((function(t,o){var e=t.classes,i=t.className,r=t.component,s=void 0===r?"div":r,p=t.disableGutters,h=void 0!==p&&p,g=t.variant,d=void 0===g?"regular":g,b=Object(c.a)(t,["classes","className","component","disableGutters","variant"]);return a.createElement(s,Object(n.a)({className:Object(l.a)(e.root,e[d],i,!h&&e.gutters),ref:o},b))})),y=Object(s.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(b.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),regular:t.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(u),m=e(164),f=e(203),j=e(25),v=e(49),x=e(173),O=e.n(x),k=e(5);var w={onLogout:v.c},N=Object(i.b)((function(t){return{isAuthenticated:Object(j.a)(t),getUsername:Object(j.c)(t)}}),w)((function(t){var o=t.isAuthenticated,e=t.getUsername,a=t.onLogout;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(d,{position:"static",children:Object(k.jsxs)(y,{children:[!o&&Object(k.jsx)(f.a,{component:r.b,to:"/",color:"inherit",className:O.a.barTitle,children:"Phonebook"}),!o&&Object(k.jsx)(f.a,{component:r.b,to:"/login",color:"inherit",children:"login"}),!o&&Object(k.jsx)(f.a,{component:r.b,to:"/register",color:"inherit",children:"Register"}),o&&Object(k.jsxs)(m.a,{variant:"h6",className:O.a.greetings,children:["Welcome ",e," !"]}),o&&Object(k.jsx)(f.a,{onClick:a,color:"inherit",children:"logout"})]})})})}))}}]);
//# sourceMappingURL=NavBar.3be0b3b5.chunk.js.map
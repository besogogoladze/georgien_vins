"use strict";(self.webpackChunkvinsgeorgien=self.webpackChunkvinsgeorgien||[]).push([[704],{1704:function(e,r,t){t.r(r),t.d(r,{default:function(){return P}});var n=t(2388),o=t(7313),a=t(9439),i=t(3366),c=t(7462),s=t(3061),l=t(1921),u=t(4164),d=t(1236),f=t(5700),v=t(6417),p=(0,f.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=t(7430),m=t(2298);function g(e){return(0,m.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,c.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,c.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),k=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,u.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var x=o.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiAvatar"}),n=t.alt,u=t.children,f=t.className,p=t.component,h=void 0===p?"div":p,m=t.imgProps,x=t.sizes,w=t.src,j=t.srcSet,S=t.variant,R=void 0===S?"circular":S,P=(0,i.Z)(t,Z),A=null,D=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,i=e.srcSet,c=o.useState(!1),s=(0,a.Z)(c,2),l=s[0],u=s[1];return o.useEffect((function(){if(n||i){u(!1);var e=!0,o=new Image;return o.onload=function(){e&&u("loaded")},o.onerror=function(){e&&u("error")},o.crossOrigin=r,o.referrerPolicy=t,o.src=n,i&&(o.srcset=i),function(){e=!1}}}),[r,t,n,i]),l}((0,c.Z)({},m,{src:w,srcSet:j})),M=w||j,C=M&&"error"!==D,z=(0,c.Z)({},t,{colorDefault:!C,component:h,variant:R}),N=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,g,r)}(z);return A=C?(0,v.jsx)(k,(0,c.Z)({alt:n,src:w,srcSet:j,sizes:x,ownerState:z,className:N.img},m)):null!=u?u:M&&n?n[0]:(0,v.jsx)(y,{className:N.fallback}),(0,v.jsx)(b,(0,c.Z)({as:h,ownerState:z,className:(0,s.Z)(N.root,f),ref:r},P,{children:A}))})),w=t(2463),j=t(5672),S=t(5685),R=t(1761);var P=function(){var e=(0,n.D3)().user,r=(0,R.x)().state.theme;return(0,v.jsx)("div",{style:{backgroundColor:"light"===r?"#fff":"#000"},children:e&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.Z,{direction:"row",spacing:2,children:(0,v.jsx)(x,{src:e.picture,alt:"user_picture_error",sx:{width:150,height:150}})}),(0,v.jsx)(j.Z,{children:(0,v.jsx)(S.Z,{children:e.name})})]})})}},2463:function(e,r,t){var n=t(4942),o=t(3366),a=t(7462),i=t(7313),c=t(4929),s=t(6886),l=t(9028),u=t(3019),d=t(4164),f=t(1236),v=t(6417),p=["component","direction","spacing","divider","children"];function h(e,r){var t=i.Children.toArray(e).filter(Boolean);return t.reduce((function(e,n,o){return e.push(n),o<t.length-1&&e.push(i.cloneElement(r,{key:"separator-".concat(o)})),e}),[])}var m=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return[r.root]}})((function(e){var r=e.ownerState,t=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,c.k9)({theme:t},(0,c.P$)({values:r.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var i=(0,s.hB)(t),l=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof r.spacing&&null!=r.spacing[t]||"object"===typeof r.direction&&null!=r.direction[t])&&(e[t]=!0),e}),{}),d=(0,c.P$)({values:r.direction,base:l}),f=(0,c.P$)({values:r.spacing,base:l});"object"===typeof d&&Object.keys(d).forEach((function(e,r,t){if(!d[e]){var n=r>0?d[t[r-1]]:"column";d[e]=n}}));o=(0,u.Z)(o,(0,c.k9)({theme:t},f,(function(e,t){return{"& > :not(style) + :not(style)":(0,n.Z)({margin:0},"margin".concat((o=t?d[t]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,s.NA)(i,e))};var o})))}return o=(0,c.dt)(t.breakpoints,o)})),g=i.forwardRef((function(e,r){var t=(0,f.Z)({props:e,name:"MuiStack"}),n=(0,l.Z)(t),i=n.component,c=void 0===i?"div":i,s=n.direction,u=void 0===s?"column":s,d=n.spacing,g=void 0===d?0:d,Z=n.divider,b=n.children,k=(0,o.Z)(n,p),y={direction:u,spacing:g};return(0,v.jsx)(m,(0,a.Z)({as:c,ownerState:y,ref:r},k,{children:Z?h(b,Z):b}))}));r.Z=g}}]);
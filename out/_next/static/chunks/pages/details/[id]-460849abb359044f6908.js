_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{kEy1:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[id]",function(){return e("vN6Y")}])},vN6Y:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return k}));var r=e("rePB"),c=e("nKUr"),o=e("q1tI"),i=e("nOHt"),a=e("3MMq"),u=e("h4VS"),s=e("vOnD");function f(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-left: 40px;\n"]);return f=function(){return n},n}function j(){var n=Object(u.a)(["\n  font-size: 1.5rem;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);return j=function(){return n},n}function p(){var n=Object(u.a)(["\n  font-size: 18px;\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  width: 80%;\n  margin: auto;\n"]);return b=function(){return n},n}function O(){var n=Object(u.a)(["\n  font-size: 1.5rem;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);return O=function(){return n},n}function l(){var n=Object(u.a)(["\n  max-width: 400px;\n  max-height: 400px;\n  transition: transform 500ms;\n  border: 1px solid #00000033;\n  background-color: #fff;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]);return l=function(){return n},n}var d=s.a.img(l()),h=s.a.h1(O()),x=s.a.article(b()),g=s.a.section(p()),v=s.a.h2(j()),w=s.a.section(f()),m=e("a53H"),y=function(n){var t=n.category,e=n.title,r=n.price,o=n.image,i=n.description;return Object(c.jsxs)(x,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(d,{src:o})}),Object(c.jsxs)(w,{children:[Object(c.jsx)(h,{children:e}),Object(c.jsx)("section",{children:Object(c.jsx)(m.a,{href:"/category/".concat(t),children:t})}),Object(c.jsxs)(v,{children:["$",r]}),Object(c.jsxs)(g,{children:[Object(c.jsx)("h3",{children:"Description"}),i]})]})]})},_=e("u1Df");function P(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function E(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?P(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function k(){var n=Object(i.useRouter)(),t=n.query.id,e=Object(o.useState)(),r=e[0],u=e[1];return Object(o.useEffect)((function(){t&&fetch("https://fakestoreapi.com/products/".concat(t)).then((function(n){return n.json()})).then((function(t){null===t?n.push("/404"):u(t)}))}),[t]),Object(c.jsx)(_.a,{children:r?Object(c.jsx)(y,E({},r)):Object(c.jsx)(a.a,{})})}}},[["kEy1",1,2,0,3,4,5]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{kEy1:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[id]",function(){return e("vN6Y")}])},vN6Y:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return M}));var r=e("rePB"),c=e("nKUr"),o=e("q1tI"),i=e("nOHt"),u=e("3MMq"),a=e("/MKj"),s=e("h4VS"),f=e("vOnD");function b(){var n=Object(s.a)(["\n  width: 400px;\n  height: 40px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #292929;\n  border: none;\n  border-radius: 0;\n  font-size: 1rem;\n  transition: background-color 300ms;\n\n  :hover {\n    background-color: #ff5d0d;\n  }\n"]);return b=function(){return n},n}function d(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding-left: 40px;\n  @media (max-width: 1024px) {\n  }\n"]);return d=function(){return n},n}function j(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);return j=function(){return n},n}function p(){var n=Object(s.a)(["\n  font-size: 18px;\n"]);return p=function(){return n},n}function l(){var n=Object(s.a)(["\n  display: flex;\n  @media (max-width: 1024px) {\n    justify-content: center;\n    margin-bottom: 40px;\n  }\n"]);return l=function(){return n},n}function O(){var n=Object(s.a)(["\n  display: flex;\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 1024px) {\n    flex-direction: column;\n  }\n"]);return O=function(){return n},n}function x(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  color: #0a0d0f;\n  letter-spacing: 0.3px;\n"]);return x=function(){return n},n}function h(){var n=Object(s.a)(["\n  max-width: 400px;\n  max-height: 400px;\n  transition: transform 500ms;\n  border: 1px solid #00000033;\n  background-color: #fff;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]);return h=function(){return n},n}var m=f.b.img(h()),g=f.b.h1(x()),v=f.b.article(O()),w=f.b.div(l()),y=f.b.section(p()),_=f.b.h2(j()),k=f.b.section(d()),P=f.b.button(b()),E=e("a53H"),D=e("WYo3"),N=function(n){var t=n.id,e=n.category,r=n.title,o=n.price,i=n.image,u=n.description,s=Object(a.b)();return Object(c.jsxs)(v,{children:[Object(c.jsx)(w,{children:Object(c.jsx)(m,{src:i})}),Object(c.jsxs)(k,{children:[Object(c.jsx)(g,{children:r}),Object(c.jsx)("section",{children:Object(c.jsx)(E.a,{href:"/category/".concat(e),children:e})}),Object(c.jsxs)(_,{children:["$",o]}),Object(c.jsx)(P,{onClick:function(){s(Object(D.a)({id:t,category:e,title:r,price:o,image:i,description:u}))},children:"Add to cart"}),Object(c.jsxs)(y,{children:[Object(c.jsx)("h3",{children:"Description"}),u]})]})]})},z=e("u1Df");function S(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function q(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function M(){var n=function(n){var t=Object(i.useRouter)(),e=Object(o.useState)(),r=e[0],c=e[1];return Object(o.useEffect)((function(){n&&fetch("https://fakestoreapi.com/products/".concat(n)).then((function(n){return n.json()})).then((function(n){null===n?t.push("/404"):c(n)}))}),[n]),r}(Object(i.useRouter)().query.id);return Object(c.jsx)(z.a,{children:n?Object(c.jsx)(N,q({},n)):Object(c.jsx)(u.a,{})})}}},[["kEy1",1,2,0,3,4,5]]]);
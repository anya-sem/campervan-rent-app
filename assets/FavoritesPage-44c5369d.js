import{u as a,j as s,C as i,H as o}from"./index-cab45d97.js";import{b as c,s as l,L as n}from"./Loader-a6b0a339.js";import{A as p}from"./AdvertCard-bf661210.js";const x="_wrapper_1peqc_1",d="_title_1peqc_8",m="_list_1peqc_13",_="_text_1peqc_18",e={wrapper:x,title:d,list:m,text:_};function j(){const t=a(c);return s.jsxs("div",{className:e.wrapper,children:[s.jsx("h1",{className:e.title,children:"Favorites"}),t.length>0?s.jsx("ul",{className:e.list,children:t.map(r=>s.jsx(p,{advert:r},r._id))}):s.jsx("p",{className:e.text,children:"No favorites yet"})]})}function v(){const t=a(l);return s.jsxs(i,{children:[s.jsx(o,{children:s.jsx("title",{children:"Favorites"})}),s.jsx(j,{}),t&&s.jsx(n,{})]})}export{v as default};
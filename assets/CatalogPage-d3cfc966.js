import{j as e,I as t,a as d,u as l,r as x,f as b,l as j,C as _,H as N}from"./index-ffcc43da.js";import{a as w,b as v,s as p,L as u}from"./Loader-e1a945d0.js";import{A as f}from"./AdvertCard-94071f31.js";const g="_title_1fi4b_1",y="_inputWrapper_1fi4b_9",C="_input_1fi4b_9",k="_icon_1fi4b_39",a={title:g,inputWrapper:y,input:C,icon:k},A=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:a.title,children:"Location"}),e.jsxs("div",{className:a.inputWrapper,children:[e.jsx("input",{className:a.input,type:"text",placeholder:"City"}),e.jsx(t,{className:a.icon,name:"pin",fill:"none",stroke:"currentColor",width:"20",height:"20"})]})]}),$="_wrapper_1w376_1",L="_title_1w376_4",W="_subtitle_1w376_13",F="_buttons_1w376_31",V="_button_1w376_31",q="_label_1w376_62",s={wrapper:$,title:L,subtitle:W,buttons:F,button:V,label:q},S=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsx("h3",{className:s.title,children:"Filters"}),e.jsxs("div",{className:s.filterWrapper,children:[e.jsx("h4",{className:s.subtitle,children:"Vehicle Equipment"}),e.jsxs("div",{className:s.buttons,children:[e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"AC"}),e.jsx(t,{className:"icon",name:"air",stroke:"#101828",strokeWidth:"0.05",width:"32",height:"32"}),e.jsx("span",{className:s.label,children:"AC"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"Automatic"}),e.jsx(t,{className:"icon",name:"gear",stroke:"currentColor",fill:"none",width:"32",height:"32"}),e.jsx("span",{className:s.label,children:"Automatic"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"Kitchen"}),e.jsx(t,{className:"icon",name:"kitchen-tools",stroke:"currentColor",fill:"none",width:"32",height:"32"}),e.jsx("span",{className:s.label,children:"Kitchen"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"TV"}),e.jsx(t,{className:"icon",name:"tv",stroke:"currentColor",fill:"none",width:"32",height:"32"}),e.jsx("span",{className:s.label,children:"TV"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"checkbox",name:"equipment",value:"Shower/WC"}),e.jsx(t,{className:"icon",name:"shower",stroke:"currentColor",fill:"none",width:"32",height:"32"}),e.jsx("span",{className:s.label,children:"Shower/WC"})]})]})]}),e.jsxs("div",{className:s.filterWrapper,children:[e.jsx("h4",{className:s.subtitle,children:"Vehicle Type"}),e.jsxs("div",{className:s.buttons,children:[e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"radio",name:"type",value:"Van"}),e.jsx(t,{className:"icon",name:"van",stroke:"transparent",fill:"#101828",width:"40",height:"28"}),e.jsx("span",{className:s.label,children:"Van"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"radio",name:"type",value:"Fully Integrated"}),e.jsx(t,{className:"icon",name:"fully-integrated-van",stroke:"transparent",fill:"#101828",width:"40",height:"28"}),e.jsx("span",{className:s.label,children:"Fully Integrated"})]}),e.jsxs("label",{className:s.button,children:[e.jsx("input",{type:"radio",name:"type",value:"Alcove"}),e.jsx(t,{className:"icon",name:"alcove",stroke:"transparent",fill:"#101828",width:"40",height:"28"}),e.jsx("span",{className:s.label,children:"Alcove"})]})]})]})]}),E="_button_1mdhh_1",I={button:E},M=()=>e.jsx(e.Fragment,{children:e.jsx("button",{className:I.button,type:"submit",children:"Search"})}),T="_wrapper_bv7e3_1",B={wrapper:T},H=()=>e.jsxs("div",{className:B.wrapper,children:[e.jsx(A,{}),e.jsx(S,{}),e.jsx(M,{})]}),K="_button_1v2x5_1",D={button:K},P=({onClick:n})=>e.jsx("button",{className:D.button,type:"button",onClick:n,children:"Load more"}),R="_wrapper_w5n2i_1",z="_list_w5n2i_6",o={wrapper:R,list:z},G=()=>{const n=d(),c=l(w),i=l(v),h=l(p);x.useEffect(()=>{n(b())},[n]);const m=()=>{n(j())};return e.jsxs("div",{className:o.wrapper,children:[e.jsx("ul",{className:o.list,children:c.slice(0,i).map(r=>e.jsx(f,{advert:r},r._id))}),h&&e.jsx(u,{}),i<c.length&&e.jsx(P,{onClick:m})]})},J="_container_6ce5n_1",O={container:J};function Y(){const n=l(p);return e.jsxs(_,{className:O.container,children:[e.jsx(N,{children:e.jsx("title",{children:"Catalog"})}),e.jsx(H,{}),e.jsx(G,{}),n&&e.jsx(u,{})]})}export{Y as default};

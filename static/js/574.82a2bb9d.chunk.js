(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{7885:function(n,e,t){"use strict";t.d(e,{Es:function(){return m},OL:function(){return p},W2:function(){return d},jj:function(){return f}});var r,a,i,o,u,s=t(168),c=t(225),l=t(5705),d=c.Z.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 540px;\n  border: 1px solid black;\n  padding: 20px;\n  font-size: 20px;\n  border-radius: 15px;\n  margin-bottom: 10px;\n"]))),m=(0,c.Z)(l.l0)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),f=(c.Z.label(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),(0,c.Z)(l.Bc)(o||(o=(0,s.Z)(["\n  text-align: center;\n  color: red;\n"])))),p=c.Z.button(u||(u=(0,s.Z)(["\n  display: block;\n  min-width: 150px;\n  margin: 20px auto;\n  font-size: 20px;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"])))},4584:function(n,e,t){"use strict";t.d(e,{dm:function(){return i},fK:function(){return a},gY:function(){return o}});var r=t(5282),a=(t(7427),r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),number:r.string().phone("UA",!0)})),i=r.object().shape({email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.")}),o=r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.").min(3,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")})},2574:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,a,i,o=t(5705),u=t(2800),s=t(7885),c=t(9434),l=function(n){return n.contacts},d=function(n){return n.filter},m=t(2486),f=t(4584),p=t(9230),x=t(3329),h={name:"",number:""},b=function(){var n=(0,c.v9)(l),e=(0,c.I0)(),t=(0,p.$G)().t;return(0,x.jsx)(s.W2,{children:(0,x.jsx)(o.J9,{initialValues:h,onSubmit:function(t,r){var a=r.resetForm;!function(t){var r=t.name,a=t.number;n.items.filter((function(n){return n.name===r})).length?alert(" is already in contact"):e((0,m.uK)({name:r,number:a}))}(t),a()},validationSchema:f.fK,children:(0,x.jsxs)(s.Es,{children:[(0,x.jsx)(o.gN,{as:u.Z,label:t("Name"),type:"text",name:"name"}),(0,x.jsx)(s.jj,{name:"name",component:"span"}),(0,x.jsx)(o.gN,{as:u.Z,label:t("Number"),type:"tel",name:"number"}),(0,x.jsx)(s.jj,{name:"number",component:"span"}),(0,x.jsx)(s.OL,{type:"submit",children:t("Add contact")})]})})})},g=t(9439),v=t(168),j=t(225),y=j.Z.button(r||(r=(0,v.Z)(["\n  min-width: 80px;\n\n  font-size: 20px;\n\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),Z=j.Z.li(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n"]))),w=t(2791),k=function(n){var e=n.name,t=n.phone,r=n.id,a=(0,w.useState)(!1),i=(0,g.Z)(a,2),o=i[0],s=i[1],l=(0,w.useState)(e),d=(0,g.Z)(l,2),f=d[0],h=d[1],b=(0,w.useState)(t),v=(0,g.Z)(b,2),j=v[0],k=v[1],A=(0,p.$G)().t,C=(0,c.I0)(),z=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":h(r);break;case"number":k(r)}};return(0,x.jsxs)(Z,{children:[o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.Z,{label:"name",variant:"outlined",type:"text",value:f,name:"name",onChange:z,sx:{}}),(0,x.jsx)(u.Z,{label:"number",variant:"outlined",type:"text",value:j,name:"number",onChange:z})]}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("span",{children:[e,": ",t]})}),!o&&(0,x.jsx)(y,{onClick:function(){return C((0,m.GK)(r))},children:A("Delete")}),(0,x.jsx)(y,{onClick:function(){if(s((function(n){return!n})),o){var n={id:r,name:f,number:j};console.log(n),C((0,m.$Z)(n))}},children:A(o?"Ok":"Edit")})]})};function A(){var n=(0,c.v9)(l),e=(0,c.v9)(d),t=n.items.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,x.jsx)(w.Fragment,{children:(0,x.jsx)(k,{name:t,phone:r,id:e})},e)}))})})}var C=j.Z.input(i||(i=(0,v.Z)(["\n  padding: 12px;\n width: 45%;\n  margin-left: 5px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-radius: 15px;\n"]))),z=t(1473),N=t(5095),$=t.n(N);function F(){var n=(0,c.I0)(),e=(0,p.$G)().t;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(C,{type:"text",placeholder:e("search by name"),onChange:$()((function(e){n((0,z.Tv)(e.target.value))}),500)})})}var O=function(){var n=(0,c.v9)(l),e=n.isLoading,t=n.error,r=(0,c.I0)(),a=(0,p.$G)().t;return(0,w.useEffect)((function(){r((0,m.yF)())}),[r]),(0,x.jsxs)("div",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},children:[(0,x.jsx)("h1",{children:a("Phonebook")}),(0,x.jsx)(b,{}),(0,x.jsx)("h2",{children:a("Contacts")}),(0,x.jsx)(F,{}),e&&(0,x.jsx)("div",{style:{margin:"20px"},children:(0,x.jsx)("b",{children:"Loading..."})}),t&&(0,x.jsx)("b",{children:t}),(0,x.jsx)(A,{})]})}},5095:function(n,e,t){var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,f=Math.min,p=function(){return l.Date.now()};function x(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function h(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(x(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=x(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var t=i.test(n);return t||o.test(n)?u(n.slice(2),t?2:8):a.test(n)?NaN:+n}n.exports=function(n,e,t){var r,a,i,o,u,s,c=0,l=!1,d=!1,b=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(e){var t=r,i=a;return r=a=void 0,c=e,o=n.apply(i,t)}function v(n){return c=n,u=setTimeout(y,e),l?g(n):o}function j(n){var t=n-s;return void 0===s||t>=e||t<0||d&&n-c>=i}function y(){var n=p();if(j(n))return Z(n);u=setTimeout(y,function(n){var t=e-(n-s);return d?f(t,i-(n-c)):t}(n))}function Z(n){return u=void 0,b&&r?g(n):(r=a=void 0,o)}function w(){var n=p(),t=j(n);if(r=arguments,a=this,s=n,t){if(void 0===u)return v(s);if(d)return u=setTimeout(y,e),g(s)}return void 0===u&&(u=setTimeout(y,e)),o}return e=h(e)||0,x(t)&&(l=!!t.leading,i=(d="maxWait"in t)?m(h(t.maxWait)||0,e):i,b="trailing"in t?!!t.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=s=a=u=void 0},w.flush=function(){return void 0===u?o:Z(p())},w}}}]);
//# sourceMappingURL=574.82a2bb9d.chunk.js.map
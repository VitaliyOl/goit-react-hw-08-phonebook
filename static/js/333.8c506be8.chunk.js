(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[333],{7885:function(n,e,t){"use strict";t.d(e,{Es:function(){return f},OL:function(){return p},W2:function(){return d},jj:function(){return m}});var r,i,o,a,u,c=t(168),s=t(225),l=t(5705),d=s.Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 540px;\n  border: 1px solid black;\n  padding: 20px;\n  font-size: 20px;\n  border-radius: 15px;\n  margin-bottom: 10px;\n"]))),f=(0,s.Z)(l.l0)(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),m=(s.Z.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),(0,s.Z)(l.Bc)(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: red;\n"])))),p=s.Z.button(u||(u=(0,c.Z)(["\n  display: block;\n  min-width: 150px;\n  margin: 20px auto;\n  font-size: 20px;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"])))},4584:function(n,e,t){"use strict";t.d(e,{dm:function(){return o},fK:function(){return i},gY:function(){return a}});var r=t(5282),i=(t(7427),r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),number:r.string().phone("UA",!0)})),o=r.object().shape({email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.")}),a=r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.").min(3,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")})},1333:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,i,o,a=t(5705),u=t(2800),c=t(7885),s=t(9434),l=function(n){return n.contacts},d=function(n){return n.filter},f=t(2486),m=t(4584),p=t(3329),x={name:"",number:""},b=function(){var n=(0,s.v9)(l),e=(0,s.I0)();return(0,p.jsx)(c.W2,{children:(0,p.jsx)(a.J9,{initialValues:x,onSubmit:function(t,r){var i=r.resetForm;!function(t){var r=t.name,i=t.number;n.items.filter((function(n){return n.name===r})).length?alert(" is already in contact"):e((0,f.uK)({name:r,number:i}))}(t),i()},validationSchema:m.fK,children:(0,p.jsxs)(c.Es,{children:[(0,p.jsx)(a.gN,{as:u.Z,label:"Name",type:"text",name:"name"}),(0,p.jsx)(c.jj,{name:"name",component:"span"}),(0,p.jsx)(a.gN,{as:u.Z,label:"Number",type:"tel",name:"number"}),(0,p.jsx)(c.jj,{name:"number",component:"span"}),(0,p.jsx)(c.OL,{type:"submit",children:"Add contact"})]})})})},h=t(9439),g=t(168),v=t(225),j=v.Z.button(r||(r=(0,g.Z)(["\n  min-width: 80px;\n\n  font-size: 20px;\n\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),y=v.Z.li(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n"]))),Z=t(2791);function w(){var n=(0,Z.useState)(!1),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,s.v9)(l),o=(0,s.v9)(d),a=(0,s.I0)(),u=i.items.filter((function(n){return n.name.toLowerCase().includes(o)})),c=function(){if(r((function(n){return!n})),t){a((0,f.$Z)({}))}};return(0,p.jsx)("ul",{children:u.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,p.jsxs)(y,{children:[(0,p.jsxs)("span",{children:[t,": ",r]}),(0,p.jsx)(j,{onClick:function(){return a((0,f.GK)(e))},children:"Delete"}),(0,p.jsx)(j,{onClick:function(){return c},children:"Edit"})]},e)}))})}var k=v.Z.input(o||(o=(0,g.Z)(["\n  padding: 12px;\n width: 45%;\n  margin-left: 5px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-radius: 15px;\n"]))),A=t(1473),z=t(5095),N=t.n(z);function C(){var n=(0,s.I0)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(k,{type:"text",placeholder:"search by name...",onChange:N()((function(e){n((0,A.Tv)(e.target.value))}),500)})})}var O=function(){var n=(0,s.v9)(l),e=n.isLoading,t=n.error,r=(0,s.I0)();return(0,Z.useEffect)((function(){r((0,f.yF)())}),[r]),(0,p.jsxs)("div",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},children:[(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(b,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(C,{}),e&&(0,p.jsx)("div",{style:{margin:"20px"},children:(0,p.jsx)("b",{children:"Loading..."})}),t&&(0,p.jsx)("b",{children:t}),(0,p.jsx)(w,{})]})}},5095:function(n,e,t){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,s="object"==typeof self&&self&&self.Object===Object&&self,l=c||s||Function("return this")(),d=Object.prototype.toString,f=Math.max,m=Math.min,p=function(){return l.Date.now()};function x(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(x(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=x(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var t=o.test(n);return t||a.test(n)?u(n.slice(2),t?2:8):i.test(n)?NaN:+n}n.exports=function(n,e,t){var r,i,o,a,u,c,s=0,l=!1,d=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(e){var t=r,o=i;return r=i=void 0,s=e,a=n.apply(o,t)}function v(n){return s=n,u=setTimeout(y,e),l?g(n):a}function j(n){var t=n-c;return void 0===c||t>=e||t<0||d&&n-s>=o}function y(){var n=p();if(j(n))return Z(n);u=setTimeout(y,function(n){var t=e-(n-c);return d?m(t,o-(n-s)):t}(n))}function Z(n){return u=void 0,h&&r?g(n):(r=i=void 0,a)}function w(){var n=p(),t=j(n);if(r=arguments,i=this,c=n,t){if(void 0===u)return v(c);if(d)return u=setTimeout(y,e),g(c)}return void 0===u&&(u=setTimeout(y,e)),a}return e=b(e)||0,x(t)&&(l=!!t.leading,o=(d="maxWait"in t)?f(b(t.maxWait)||0,e):o,h="trailing"in t?!!t.trailing:h),w.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=i=u=void 0},w.flush=function(){return void 0===u?a:Z(p())},w}}}]);
//# sourceMappingURL=333.8c506be8.chunk.js.map
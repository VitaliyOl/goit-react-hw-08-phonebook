(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{7885:function(n,e,t){"use strict";t.d(e,{Es:function(){return f},OL:function(){return m},W2:function(){return d},jj:function(){return p}});var r,o,i,a,s,c=t(168),u=t(225),l=t(5705),d=u.Z.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 540px;\n  border: 1px solid black;\n  padding: 20px;\n  font-size: 20px;\n"]))),f=(0,u.Z)(l.l0)(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),p=(u.Z.label(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),(0,u.Z)(l.Bc)(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: red;\n"])))),m=u.Z.button(s||(s=(0,c.Z)(["\n  display: block;\n  min-width: 150px;\n  margin: 20px auto;\n  font-size: 20px;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"])))},4584:function(n,e,t){"use strict";t.d(e,{dm:function(){return i},fK:function(){return o},gY:function(){return a}});var r=t(5282),o=(t(7427),r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),phone:r.string().phone("UA",!0)})),i=r.object().shape({email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.").min(3,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),a=r.object().shape({name:r.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan"),email:r.string().email().required("Please enter email"),password:r.string().required("No password provided.").min(3,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")})},7518:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var r,o,i,a=t(5705),s=t(2862),c=t(7885),u=t(9434),l=function(n){return n.contacts},d=function(n){return n.filter},f=t(5786),p=t(4584),m=t(184),h={name:"",phone:""},x=function(){var n=(0,u.v9)(l),e=(0,u.I0)();return(0,m.jsx)(c.W2,{children:(0,m.jsx)(a.J9,{initialValues:h,onSubmit:function(t,r){var o=r.resetForm;!function(t){var r=t.name,o=t.phone;n.items.filter((function(n){return n.name===r})).length?alert(" is already in contact"):e((0,f.uK)({name:r,phone:o}))}(t),o()},validationSchema:p.fK,children:(0,m.jsxs)(c.Es,{children:[(0,m.jsx)(a.gN,{as:s.Z,label:"Name",type:"text",name:"name"}),(0,m.jsx)(c.jj,{name:"name",component:"span"}),(0,m.jsx)(a.gN,{as:s.Z,label:"Phone",type:"tel",name:"phone"}),(0,m.jsx)(c.jj,{name:"phone",component:"span"}),(0,m.jsx)(c.OL,{type:"submit",children:"Add contact"})]})})})},b=t(168),v=t(225),g=v.Z.button(r||(r=(0,b.Z)(["\n  min-width: 80px;\n\n  font-size: 20px;\n\n  border-radius: 20px;\n  border: none;\n  background-color: grey;\n  color: white;\n\n  :hover,\n  :focus {\n    background-color: blue;\n  }\n"]))),j=v.Z.li(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n"])));function y(){var n=(0,u.v9)(l),e=(0,u.v9)(d),t=(0,u.I0)(),r=n.items.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,m.jsx)("ul",{children:r.map((function(n){var e=n.id,r=n.name,o=n.phone;return(0,m.jsxs)(j,{children:[(0,m.jsxs)("span",{children:[r,": ",o]}),(0,m.jsx)(g,{onClick:function(){return t((0,f.GK)(e))},children:"Delete"})]},e)}))})}var Z=v.Z.input(i||(i=(0,b.Z)(["\n  padding: 12px;\n  max-width: 400px;\n  margin-left: 20px;\n"]))),w=t(1473),k=t(5095),A=t.n(k);function z(){var n=(0,u.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(Z,{type:"text",placeholder:"search by name...",onChange:A()((function(e){n((0,w.Tv)(e.target.value))}),500)})})}var N=function(){var n=(0,u.v9)(l),e=n.isLoading,t=n.error;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(x,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(z,{}),e&&(0,m.jsx)("div",{style:{margin:"20px"},children:(0,m.jsx)("b",{children:"Loading..."})}),t&&(0,m.jsx)("b",{children:t}),(0,m.jsx)(y,{})]})}},5095:function(n,e,t){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),d=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return l.Date.now()};function h(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function x(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(h(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=h(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var t=i.test(n);return t||a.test(n)?s(n.slice(2),t?2:8):o.test(n)?NaN:+n}n.exports=function(n,e,t){var r,o,i,a,s,c,u=0,l=!1,d=!1,b=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function v(e){var t=r,i=o;return r=o=void 0,u=e,a=n.apply(i,t)}function g(n){return u=n,s=setTimeout(y,e),l?v(n):a}function j(n){var t=n-c;return void 0===c||t>=e||t<0||d&&n-u>=i}function y(){var n=m();if(j(n))return Z(n);s=setTimeout(y,function(n){var t=e-(n-c);return d?p(t,i-(n-u)):t}(n))}function Z(n){return s=void 0,b&&r?v(n):(r=o=void 0,a)}function w(){var n=m(),t=j(n);if(r=arguments,o=this,c=n,t){if(void 0===s)return g(c);if(d)return s=setTimeout(y,e),v(c)}return void 0===s&&(s=setTimeout(y,e)),a}return e=x(e)||0,h(t)&&(l=!!t.leading,i=(d="maxWait"in t)?f(x(t.maxWait)||0,e):i,b="trailing"in t?!!t.trailing:b),w.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=c=o=s=void 0},w.flush=function(){return void 0===s?a:Z(m())},w}}}]);
//# sourceMappingURL=518.91208c5a.chunk.js.map
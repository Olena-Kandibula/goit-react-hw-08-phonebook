(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__zihDX",item:"ContactList_item__wpQhi",buttonDelete:"ContactList_buttonDelete__3DCs2"}},16:function(t,e,n){t.exports={container:"Container_container__1YKtr"}},17:function(t,e,n){t.exports={input:"Filter_input__1m1fI"}},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),o=n(9),s=n.n(o),i=n(2),u=n(5),l=n(3),d=n(19),b=n(4),j=n.n(b),p=n(8),f="https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts",h=Object(u.b)("contacts/fetchContacts",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,n.dispatch,t.prev=1,t.next=4,fetch(f);case 4:if((c=t.sent).ok){t.next=7;break}throw new Error("error server!");case 7:return t.next=9,c.json();case 9:return a=t.sent,t.abrupt("return",a);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(u.b)("contacts/remove",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,c=n.dispatch,t.prev=1,t.next=4,fetch("".concat(f,"/").concat(e),{method:"DELETE"});case 4:if(t.sent.ok){t.next=7;break}throw new Error("Can't delete contact!Error Server!");case 7:return c(k(e)),t.abrupt("return",e);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(u.b)("contacts/addcontact",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,c,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,c=n.dispatch,t.prev=1,t.next=4,fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:if((a=t.sent).ok){t.next=7;break}throw new Error("Can't add contact! Error Server!");case 7:return t.next=9,a.json();case 9:return o=t.sent,c(g(o)),t.abrupt("return",o);case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}()),v=Object(u.b)("contacts/filter",function(){var t=Object(p.a)(j.a.mark((function t(e,n){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,c=n.dispatch,t.prev=1,t.next=4,fetch("https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts?filter=".concat(e),{metod:"GET"});case 4:if(t.sent.ok){t.next=7;break}throw new Error("Can't filtered contact!Error Server!");case 7:c(y(e)),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),x=function(t,e){t.status="rejected",t.error=e.payload},C=function(t){t.error=null},_=Object(u.c)({name:"contacts",initialState:{contacts:[],filter:"",status:null,error:null},reducers:{addContactNew:function(t,e){t.contacts=[e.payload].concat(Object(d.a)(t.contacts))},deleteContact:function(t,e){t.contacts=t.contacts.filter((function(t){return t.id!==e.payload}))},changeFilter:function(t,e){t.filter=e.payload}},extraReducers:(r={},Object(l.a)(r,h.pending,C),Object(l.a)(r,h.fulfilled,(function(t,e){t.contacts=e.payload,t.status="resolved",t.error=null})),Object(l.a)(r,h.rejected,x),Object(l.a)(r,O.pending,C),Object(l.a)(r,O.fulfilled,(function(t,e){t.status="resolved",t.error=null})),Object(l.a)(r,O.rejected,x),Object(l.a)(r,m.pending,C),Object(l.a)(r,m.fulfilled,(function(t){t.status="resolved",t.error=null})),Object(l.a)(r,m.rejected,x),r)}),w=_.actions,g=w.addContactNew,k=w.deleteContact,y=w.changeFilter,N=_.reducer,A=Object(u.a)({reducer:{contacts:N}}),E=(n(31),n(16)),z=n.n(E),S=n(1);var F=function(t){var e=t.title,n=t.children;return Object(S.jsxs)("div",{className:z.a.container,children:[Object(S.jsxs)("h2",{children:[" ",e]}),n]})},J=n(14),D=n(6),L=n.n(D);var T=function(){var t=Object(c.useState)(""),e=Object(J.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),o=Object(J.a)(a,2),s=o[0],u=o[1],l=Object(i.c)((function(t){return t.contacts.contacts})),d=Object(i.b)();function b(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"phone":u(c);break;default:return}}var j=function(){r(""),u("")};return Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:n,phone:s};if(l&&l.some((function(t){return t.name.includes(n)})))return alert("".concat(n," is already in contacts!")),void j();d(O(e)),j()},className:L.a.contactForm,children:[Object(S.jsxs)("label",{className:L.a.label,children:["Name:",Object(S.jsx)("input",{className:L.a.input,type:"text",name:"name",autoComplete:"off",value:n,onChange:b,placeholder:"Tom Smit",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)("label",{className:L.a.label,children:["Phone:",Object(S.jsx)("input",{className:L.a.input,type:"tel",name:"phone",autoComplete:"off",value:s,onChange:b,placeholder:"050-50-50",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)("input",{className:L.a.submitButton,type:"submit",value:"Add contact"})]})},Z=function(t){return t.contacts.contacts},B=function(t){return t.contacts.filter},V=n(17),W=n.n(V),q=function(){var t=Object(i.b)(),e=Object(i.c)(B);return Object(S.jsxs)("label",{children:["Find contact by name",Object(S.jsx)("input",{className:W.a.input,type:"text",name:"filter",autoComplete:"off",value:e,onChange:function(e){return t(v(e.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},M=n(11),P=n.n(M),I=n(18);var U=function(){var t=Object(i.c)((function(t){return t.contacts})),e=t.status,n=t.error,r=Object(i.c)(Z),a=Object(i.c)(B),o=Object(i.b)();Object(c.useEffect)((function(){o(h())}),[]);var s=a.toLowerCase(),u=r.filter((function(t){return t.name.toLowerCase().includes(s)}));return Object(S.jsxs)("div",{children:["loading"===e&&Object(S.jsx)("h2",{children:"Loading"}),"rejected"===e&&Object(S.jsxs)("h2",{children:["Ups..",n]}),Object(S.jsx)("ul",{className:P.a.list,children:r.length>0&&u.map((function(t){return Object(S.jsxs)("li",{className:P.a.item,children:[Object(S.jsxs)("p",{children:[Object(S.jsxs)("span",{children:[t.name,":"]})," ",Object(S.jsx)("span",{children:t.phone})]}),Object(S.jsx)("button",{className:P.a.buttonDelete,type:"button",onClick:function(){return o(m(t.id))},children:Object(S.jsx)(I.a,{color:"red",size:"18px"})})]},t.id)}))})]})};var $=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(F,{children:Object(S.jsx)(T,{})}),Object(S.jsxs)(F,{title:"Contacts",children:[Object(S.jsx)(q,{}),Object(S.jsx)(U,{})]})]})};n(33),n(34);s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(i.a,{store:A,children:Object(S.jsx)($,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3se-a",label:"ContactForm_label__ThJJi",input:"ContactForm_input__uvSAz",submitButton:"ContactForm_submitButton__3UZzJ"}}},[[35,1,2]]]);
//# sourceMappingURL=main.540d7b6f.chunk.js.map
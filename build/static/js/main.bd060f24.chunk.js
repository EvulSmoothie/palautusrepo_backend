(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),l=t(2),o=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("li",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"Delete"))},i=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameInput})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberInput})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:e.filter,onChange:e.handleFilterInput}))},s=t(3),d=t.n(s),f="/api/persons",p=function(){return d.a.get(f)},b=function(e){return d.a.post(f,e)},h=function(e,n){return d.a.put("".concat(f,"/").concat(e),n)},v=function(e){return d.a.delete("".concat(f,"/").concat(e))},E=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"popup"},n)},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"alert"},n)},O=(t(36),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],f=s[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),g=j[0],N=j[1],y=Object(a.useState)(""),P=Object(l.a)(y,2),I=P[0],S=P[1],k=Object(a.useState)(null),C=Object(l.a)(k,2),T=C[0],D=C[1],x=Object(a.useState)(null),F=Object(l.a)(x,2),J=F[0],L=F[1];Object(a.useEffect)((function(){p().then((function(e){u(e.data)}))}),[]);var B=function(e){return t[t.map((function(e){return e.name})).indexOf(e)]},q=t.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:T}),r.a.createElement(w,{message:J}),r.a.createElement(m,{filter:I,handleFilterInput:function(e){S(e.target.value)}}),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:d,number:g};t.map((function(e){return e.name})).includes(d)?window.confirm("".concat(d," is already added to phonebook, do you wanna replace his/her number?"))&&h(B(d).id,n).then((function(e){u(t.map((function(n){return n.id!==B(d).id?n:e.data}))),D("Persons '".concat(n.name,"' number was updated to server")),setTimeout((function(){D(null)}),5e3)})).catch((function(e){L("information of ".concat(n.name," was already deleted from server")),setTimeout((function(){L(null)}),5e3),u(t.filter((function(e){return e.id!==B(d).id})))})):b(n).then((function(e){u(t.concat(e.data)),D("Person '".concat(n.name,"' was added to server")),setTimeout((function(){D(null)}),5e3)}))},newName:d,handleNameInput:function(e){f(e.target.value)},newNumber:g,handleNumberInput:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,q.map((function(e,n){return r.a.createElement(o,{key:n,person:e,deletePerson:function(){return function(e,n){window.confirm("Do you really wanna delete ".concat(n.name))&&v(e).then((function(e){p().then((function(e){u(e.data),D("Person '".concat(n.name,"' was removed from server")),setTimeout((function(){D(null)}),5e3)}))})).catch((function(n){alert("the person was already deleted from server"),u(t.filter((function(n){return n.id!==e})))}))}(e.id,e)}})}))))});c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bd060f24.chunk.js.map
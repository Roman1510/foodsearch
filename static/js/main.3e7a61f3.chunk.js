(this.webpackJsonpfoodsearch=this.webpackJsonpfoodsearch||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(6),s=c.n(r),i=(c(13),c(4)),o=c.n(i),p=c(7),u=c(2),j=c(5),l=c.n(j);var b=function(e){var t=e.title,c=e.calories,n=e.image,r=e.ingredients;return Object(a.jsxs)("div",{className:l.a.recipe,children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsx)("li",{children:e.text})}))}),Object(a.jsxs)("p",{children:["Calories per portion: ",Math.round(c)]}),Object(a.jsx)("img",{className:l.a.image,src:n,alt:""})]})};c(15);var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),j=i[0],l=i[1],h=Object(n.useState)("chicken"),m=Object(u.a)(h,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("2a547dfc","&app_key=").concat("a4a86ec6b35401791834019cc9f43a54"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),f(j),l("")},children:[Object(a.jsx)("input",{className:"search-bar",type:"text",placeholder:"Type name here",value:j,onChange:function(e){l(e.target.value)}}),Object(a.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(a.jsx)("div",{className:"recipes",children:c.map((function(e,t){return Object(a.jsx)(b,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})};s.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))},5:function(e,t,c){e.exports={recipe:"recipe_recipe__1kpJN",image:"recipe_image__179oj"}}},[[16,1,2]]]);
//# sourceMappingURL=main.3e7a61f3.chunk.js.map
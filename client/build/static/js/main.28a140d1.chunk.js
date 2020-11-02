(this.webpackJsonpBookWorm=this.webpackJsonpBookWorm||[]).push([[0],{110:function(e,t,r){},111:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r(53),s=r.n(c),o=r(10),i=r(54),u=r(2),l=r(21),b=r.n(l),j=r(3),h=r.n(j),d=r(9),p=r(15),f=r.n(p),m={getBooks:function(){return Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/books");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},searchBooks:function(e){var t=this;return Object(d.a)(h.a.mark((function r(){var n,a,c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(e,"&key=").concat("AIzaSyCp0lk5NKfnidEctAOETpUIdimiIxcGYLI").concat("&maxResults=20"));case 3:if(0!==(n=r.sent).data.totalItems){r.next=6;break}return r.abrupt("return",!1);case 6:return r.next=8,t.getBooks();case 8:return a=r.sent,c=n.data.items.filter((function(e){return!a.some((function(t){return t.link===e.id}))})).map((function(e){return{link:e.id,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,author:e.volumeInfo.authors,thumbnail:e.volumeInfo.imageLinks.thumbnail,description:e.volumeInfo.description}})),r.abrupt("return",c);case 13:return r.prev=13,r.t0=r.catch(0),console.log(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()},saveBook:function(e){return Object(d.a)(h.a.mark((function t(){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/books",e);case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},deleteBook:function(e){return Object(d.a)(h.a.mark((function t(){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.delete("/api/books/".concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}};var x=function(e){var t=e.book,r=e.buttonClick,a=e.type,c=t.title,s=t.subtitle,o=t.link,i=t.author,u=t.thumbnail,l=t.description;return Object(n.jsxs)("div",{id:"results",className:"card-body border",children:[Object(n.jsx)("h4",{className:"card-title",children:c}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary float-right",onClick:function(){return r(t)},children:a}),Object(n.jsx)("a",{className:"btn btn-info float-right",href:"https://play.google.com/store/books/details?id=".concat(o),rel:"noreferrer",target:"_blank",children:"VIEW"}),s?Object(n.jsx)("h5",{className:"card-subtitle mb-2 text-muted",children:s}):null,Object(n.jsxs)("h5",{className:"card-subtitle mb-2 text-muted",children:["Written By:"," ",i.join(", ")]}),Object(n.jsxs)("div",{className:"resultsBlock",children:[Object(n.jsx)("div",{className:"resultsImgBlock",children:Object(n.jsx)("img",{className:"resultsImg",src:u,alt:"book cover"})}),Object(n.jsx)("h5",{className:"card-text resultsDesc",children:l})]})]})},v=b()();var k=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(),i=Object(o.a)(s,2),u=i[0],l=i[1];function b(){return(b=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u){e.next=4;break}return console.log("Search value is empty"),e.abrupt("return");case 4:return e.t0=c,e.next=7,m.searchBooks(u);case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.saveBook(t);case 2:c(r.filter((function(e){return e!==t}))),v.emit("saved",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"form-group",children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("i",{className:"fas fa-book"}),"Book Search"]}),Object(n.jsx)("input",{className:"form-control",placeholder:"Type book details...",onChange:function(e){var t=e.target.value;l(t)}}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",onClick:function(e){return b.apply(this,arguments)},children:"Search"})]}),Object(n.jsx)("h3",{children:"Results"}),void 0===r?Object(n.jsx)("h4",{className:"searchBegin",children:"Search For A Book To Begin!"}):!1===r?Object(n.jsx)("h4",{className:"searchBegin",children:"No Results Found"}):r.map((function(e){return Object(n.jsx)(x,{book:e,buttonClick:j,type:"SAVE"},e.link)}))]})};var O=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:"Google Books"}),Object(n.jsx)("a",{className:"navbar-brand",href:"/search",children:Object(n.jsx)("small",{children:"Search"})}),Object(n.jsx)("a",{className:"navbar-brand",href:"/saved",children:Object(n.jsx)("small",{children:"Saved"})})]})};var g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],c=t[1];function s(e){return i.apply(this,arguments)}function i(){return(i=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.deleteBook(t._id);case 2:c(r.filter((function(e){return e!==t})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)(Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,m.getBooks();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h3",{children:[Object(n.jsx)("i",{className:"fas fa-download"}),"Saved Books"]}),r.length?r.map((function(e){return Object(n.jsx)(x,{book:e,buttonClick:s,type:"DELETE"},e.link)})):Object(n.jsx)("h4",{className:"searchBegin",children:"No Saved Books"})]})};var N=function(e){var t=e.children;return Object(n.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})};var B=function(e){var t=e.alert,r=e.buttonClick;return Object(n.jsxs)("div",{className:"alert alert-success",role:"alert",children:["Your book"," ",Object(n.jsx)("a",{href:"https://play.google.com/store/books/details?id=".concat(t.link),rel:"noreferrer",target:"_blank",className:"alert-link",children:t.title})," ","has been saved! Give it a click if you like.",Object(n.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:r,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},y=b()();var w=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){y.on("saved",(function(e){c(e)}))})),Object(n.jsxs)(i.a,{children:[Object(n.jsx)(O,{}),Object(n.jsxs)(N,{children:[Object(n.jsx)("h1",{children:"(React) Google Books Search"}),Object(n.jsx)("h3",{children:"Search for and Save Books of Interest"})]}),r?Object(n.jsx)(B,{alert:r,buttonClick:function(){c(null)}}):null,Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:["/","/search"],children:Object(n.jsx)(k,{})}),Object(n.jsx)(u.a,{exact:!0,path:"/saved",children:Object(n.jsx)(g,{})})]})]})};r(110);s.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))},86:function(e,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.28a140d1.chunk.js.map
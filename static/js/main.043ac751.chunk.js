(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(25),a(1)),l=a.n(o),i=a(3),u=a(6),m="22f64047628952782f5bfe42dd718a65",p="https://api.themoviedb.org/3",d=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/discover/movie?api_key=").concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/movie/").concat(t,"?api_key=").concat(m));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/search/movie?api_key=").concat(m,"&query=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a){e.next=8;break}return e.next=3,fetch("".concat(p,"/search/movie?api_key=").concat(m,"&query=").concat(a,"&page=").concat(t+1));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.next=10,fetch("".concat(p,"/discover/movie?api_key=").concat(m,"&page=").concat(t+1));case 10:return c=e.sent,e.next=13,c.json();case 13:return s=e.sent,e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a){e.next=8;break}return e.next=3,fetch("".concat(p,"/search/movie?api_key=").concat(m,"&query=").concat(a,"&page=").concat(t-1));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.next=10,fetch("".concat(p,"/discover/movie?api_key=").concat(m,"&page=").concat(t-1));case 10:return c=e.sent,e.next=13,c.json();case 13:return s=e.sent,e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=Object(n.createContext)(),h=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(),m=Object(u.a)(o,2),p=m[0],v=m[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),g=b[0],h=b[1],N=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,d();case 3:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),r.a.createElement(E.Provider,{value:[p,v,c,s,g,h]},e.children)},N=a(9),x=function(e){var t=e.movie;return r.a.createElement(N.b,{to:"/react.movie/movie/".concat(t.id),className:"col-lg-3 mt-3"},r.a.createElement("div",{className:"card"},null===t.poster_path?"":r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+t.poster_path,className:"card-img-top",alt:t.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,t.title))))},k=function(){var e=Object(n.useContext)(E),t=Object(u.a)(e,6),a=(t[0],t[1]),c=(t[2],t[3]),s=t[4],o=t[5],m=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preventDefault();case 2:return c(!0),e.t0=a,e.next=6,f(s);case 6:e.t1=e.sent,(0,e.t0)(e.t1),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(""),c(!0),e.t0=a,e.next=5,d();case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:m,className:"d-flex justify-content-between"},r.a.createElement("div",{className:"input-group col-lg-6"},r.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"title",value:s,onChange:function(e){o(e.target.value)},required:!0})),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-success"},"Search"),r.a.createElement("button",{className:"btn btn-info",type:"button",onClick:p},"Reset")))},w=function(){var e=Object(n.useContext)(E),t=Object(u.a)(e,5),a=t[0],c=t[1],s=t[2],o=t[3],m=t[4],p=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),""===m){e.next=9;break}return e.t0=c,e.next=5,g(a.page,m);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 9:return e.t2=c,e.next=12,g(a.page);case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:o(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),""===m){e.next=9;break}return e.t0=c,e.next=5,b(a.page,m);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 9:return e.t2=c,e.next=12,b(a.page);case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:o(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(k,null))),r.a.createElement("div",{className:"row py-5"},s?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))):a.total_results>0?[r.a.createElement("div",{className:"container",key:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h2",null,"Results : ",a.total_results),r.a.createElement("h2",null,"Total Pages : ",a.total_pages)),r.a.createElement("div",{className:"col-lg-6 btn-group"},r.a.createElement("button",{className:"btn btn-outline-info",onClick:p,disabled:"".concat(1===a.page?"disable":"")},"Previous Page"),r.a.createElement("button",{className:"btn btn-info",disabled:!0},a.page),r.a.createElement("button",{className:"btn btn-outline-info",onClick:d,disabled:"".concat(a.page===a.total_pages?"disable":"")},"Next Page")))),a.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id})}))]:r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("h2",null,"Data not found"))))))},y=(a(32),a(33),a(8)),j=function(){return r.a.createElement("nav",{className:"navbar navbar-dark navbar-expand bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(N.b,{to:"/react.movie/",className:"navbar-brand"},"App"),r.a.createElement("ul",{className:"ml-auto navbar-nav"},r.a.createElement(N.b,{to:"/react.movie/movie",className:"nav-item nav-link"},r.a.createElement("li",null,"Movies")))))},O=function(e){var t=e.match,a="https://image.tmdb.org/t/p/original",c=Object(n.useState)({genres:[],production_companies:[],production_countries:[],spoken_languages:[]}),s=Object(u.a)(c,2),o=s[0],m=s[1],p=Object(n.useState)(!0),d=Object(u.a)(p,2),f=d[0],b=d[1],g=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,v(t.params.id);case 3:e.t1=e.sent,(0,e.t0)(e.t1),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g()}),[]);var E={backgroundImage:"url("+a+o.backdrop_path+")",width:"100%",height:"500px",backgroundSize:"cover"},h=new Date(o.release_date);return f?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 text-center bg-info"},r.a.createElement("h5",null,h.toString()))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12",style:E}))),r.a.createElement("div",{className:"container detail"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a+o.poster_path,alt:o.title,className:"card-img-top"}))),r.a.createElement("div",{className:"col-lg-9 mt-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"badge ".concat("Released"===o.status?"badge-success":"badge-info")},o.status),r.a.createElement("h2",null,o.title," ",r.a.createElement("span",{className:"badge badge-info"},o.runtime," minutes")),r.a.createElement("p",null,o.overview))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 my-5"},r.a.createElement("h3",null,"Genres"),0===o.genres.length?"-":o.genres.map((function(e){return r.a.createElement("span",{className:"badge badge-success mr-3",key:e.id},e.name)}))),r.a.createElement("div",{className:"col-lg-6 my-5"},r.a.createElement("h3",null,"Production Companies"),0===o.production_companies.length?"-":o.production_companies.map((function(e){return r.a.createElement("span",{className:"badge badge-info mr-3",key:e.id},e.name)}))),r.a.createElement("div",{className:"col-lg-6 my-5"},r.a.createElement("h3",null,"Production Countries"),0===o.production_countries.length?"-":o.production_countries.map((function(e){return r.a.createElement("span",{className:"badge badge-warning mr-3",key:e.name},e.name)}))),r.a.createElement("div",{className:"col-lg-6 my-5"},r.a.createElement("h3",null,"Spoken Languages"),0===o.spoken_languages.length?"-":o.spoken_languages.map((function(e){return r.a.createElement("span",{className:"badge badge-danger mr-3",key:e.name},e.name)}))))))},_=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,"Welcome to App Site"))},S=function(){return r.a.createElement(h,null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/react.movie/",exact:!0,component:_}),r.a.createElement(y.a,{path:"/react.movie/movie",exact:!0,component:w}),r.a.createElement(y.a,{path:"/react.movie/movie/:id",exact:!0,component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.043ac751.chunk.js.map
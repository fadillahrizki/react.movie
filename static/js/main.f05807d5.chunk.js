(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(27),a(1)),l=a.n(o),i=a(2),u=a(3),m="22f64047628952782f5bfe42dd718a65",d="https://api.themoviedb.org/3",p=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/").concat("discover"===t?"discover/":"","movie").concat("discover"!==t?"/".concat(t):"","?api_key=").concat(m));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/movie/").concat(t).concat(a?"/".concat(a):"","?api_key=").concat(m));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/search/movie?api_key=").concat(m,"&query=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark((function e(t,a,n){var r,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n){e.next=8;break}return e.next=3,fetch("".concat(d,"/search/movie?api_key=").concat(m,"&query=").concat(n,"&page=").concat(t+1));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,fetch("".concat(d,"/").concat("discover"===a?a+"/":"","movie").concat("discover"!==a?"/"+a:"","?api_key=").concat(m,"&page=").concat(t+1));case 10:return s=e.sent,e.next=13,s.json();case 13:return o=e.sent,e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark((function e(t,a,n){var r,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n){e.next=8;break}return e.next=3,fetch("".concat(d,"/search/movie?api_key=").concat(m,"&query=").concat(n,"&page=").concat(t-1));case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,fetch("".concat(d,"/").concat(a,"/movie?api_key=").concat(m,"&page=").concat(t-1));case 10:return s=e.sent,e.next=13,s.json();case 13:return o=e.sent,e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/genre/movie/list?api_key=").concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(),m=Object(u.a)(o,2),d=m[0],v=m[1],f=Object(n.useState)(""),b=Object(u.a)(f,2),E=b[0],g=b[1],w=Object(n.useState)("discover"),N=Object(u.a)(w,2),x=N[0],y=N[1],k=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,p(x);case 3:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=[d,v,c,s,E,g,x,y];return Object(n.useEffect)((function(){k()}),[]),r.a.createElement(h.Provider,{value:j},e.children)},N=a(5),x=function(e){var t=e.movie,a=e.carousel,n={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original"+t.poster_path,")"),height:"250px",backgroundSize:"cover",border:"1px solid #ddd",fontSize:"14px"},c=t.release_date.split("-");return r.a.createElement("div",{className:"".concat(a?"col-12":"col-lg-2 col-md-3 col-sm-4 col-6 mt-3")},r.a.createElement(N.b,{to:"/movie/".concat(t.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:"card d-flex justify-content-between text-light card-movie",style:n},r.a.createElement("div",{className:"card-header",style:{background:"linear-gradient(to bottom, #000,#0000)",border:"none"}},r.a.createElement("span",{className:"text-warning"}," ",r.a.createElement("i",{className:"fa fa-star"})," ",t.vote_average)),r.a.createElement("div",{className:"card-footer text-center",style:{background:"linear-gradient(to top, #000,#0000)",border:"none"}},r.a.createElement("p",null,r.a.createElement("b",null,t.title)," (",c[0],")")))))},y=function(){var e=Object(n.useContext)(h),t=Object(u.a)(e,8),a=t[0],c=t[1],s=t[2],o=t[3],m=t[4],d=(t[5],t[6]),v=t[7],f=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),""===m){e.next=9;break}return e.t0=c,e.next=5,E(a.page,d,m);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 9:return e.t2=c,e.next=12,E(a.page,d);case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:o(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),""===m){e.next=9;break}return e.t0=c,e.next=5,b(a.page,d,m);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 9:return e.t2=c,e.next=12,b(a.page,d);case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:o(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("popular"),o(!0),e.t0=c,e.next=5,p("popular");case 5:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("now_playing"),o(!0),e.t0=c,e.next=5,p("now_playing");case 5:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("upcoming"),o(!0),e.t0=c,e.next=5,p("upcoming");case 5:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v("discover"),o(!0),e.t0=c,e.next=5,p("discover");case 5:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row p-3"},r.a.createElement("button",{className:"btn ".concat("discover"===d?"btn-secondary":"btn-outline-secondary"," mr-3 mt-3 mt-md-0"),onClick:k},"Discover"),r.a.createElement("button",{className:"btn ".concat("popular"===d?"btn-secondary":"btn-outline-secondary"," mr-3 mt-3 mt-md-0"),onClick:w},"Popular"),r.a.createElement("button",{className:"btn ".concat("now_playing"===d?"btn-secondary":"btn-outline-secondary"," mr-3 mt-3 mt-md-0"),onClick:N},"Now Playing"),r.a.createElement("button",{className:"btn ".concat("upcoming"===d?"btn-secondary":"btn-outline-secondary"," mr-3 mt-3 mt-md-0"),onClick:y},"Upcoming"),"search"===d?r.a.createElement("button",{className:"btn btn-secondary mr-3 mt-3 mt-md-0"},"Total Results : ",a.total_results):"",r.a.createElement("div",{className:"btn-group ml-auto col-12 col-md-2 mt-3 mt-md-0"},a&&a.page>1?r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:f},"\xab"):"",r.a.createElement("button",{className:"btn btn-secondary",disabled:!0},a?"".concat(a.page," of ").concat(a.total_pages):"1"),a&&a.page<a.total_pages?r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:g},"\xbb"):"")),r.a.createElement("div",{className:"row pb-3"},s?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))):a.total_results>0?a.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id})})):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("h2",null,"Data not found")))),r.a.createElement("div",{className:"row"})))},k=(a(33),a(34),a(35),a(36),a(37),a(9)),j=Object(k.g)((function(){var e=Object(k.f)(),t=Object(n.useState)(),a=Object(u.a)(t,2),c=(a[0],a[1]),s=Object(n.useContext)(h),o=Object(u.a)(s,8),m=(o[0],o[1]),d=(o[2],o[3]),p=o[4],v=o[5],b=(o[6],o[7]),E=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E()}),[]);var w=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preventDefault();case 2:return b("search"),d(!0),e.t0=m,e.next=7,f(p);case 7:e.t1=e.sent,(0,e.t0)(e.t1),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-md bg-dark sticky-top"},r.a.createElement("div",{className:"container"},r.a.createElement(N.b,{to:"",className:"navbar-brand"},"Movieee"),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#collapse"},r.a.createElement("i",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"navbar-collapse collapse",id:"collapse"},r.a.createElement("ul",{className:"ml-auto navbar-nav"},r.a.createElement(N.b,{to:"",className:"nav-item nav-link ".concat(""==e.pathname||"/"==e.pathname?"active":"")},r.a.createElement("li",null,"Home")),r.a.createElement(N.b,{to:"/movie",className:"nav-item nav-link ".concat("/movie"==e.pathname||"/movie/"==e.pathname?"active":"")},r.a.createElement("li",null,"Movies"))),r.a.createElement("form",{className:"form-inline",onSubmit:w},r.a.createElement("input",{className:"form-control mx-md-2",type:"search",placeholder:"Search",value:p,onChange:function(e){v(e.target.value)}}),r.a.createElement("button",{className:"btn btn-secondary my-2"},r.a.createElement(N.b,{to:"/movie"},r.a.createElement("i",{className:"fa fa-search text-light"})))))))})),O=function(e){var t=e.cast,a={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original"+t.profile_path,")"),height:"250px",backgroundSize:"cover",border:"1px solid #ddd",fontSize:"14px"};return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card text-light card-movie",style:a},r.a.createElement("div",{className:"card-footer text-center mt-auto",style:{background:"linear-gradient(to top, #000,#0000)",border:"none"}},r.a.createElement("p",null,r.a.createElement("b",null,t.name)," (",t.character,")"))))},_=function(e){var t=e.crew,a={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original"+t.profile_path,")"),height:"250px",backgroundSize:"cover",border:"1px solid #ddd",fontSize:"14px"};return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card text-light card-movie",style:a},r.a.createElement("div",{className:"card-footer text-center mt-auto",style:{background:"linear-gradient(to top, #000,#0000)",border:"none"}},r.a.createElement("p",null,r.a.createElement("b",null,t.name)," (",t.job,")"))))},C=function(e){var t=e.match,a=Object(n.useContext)(h),c=Object(u.a)(a,4),s=(c[0],c[1],c[2]),o=c[3],m=Object(n.useState)({genres:[],production_companies:[],production_countries:[],spoken_languages:[]}),d=Object(u.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(),E=Object(u.a)(b,2),g=E[0],w=E[1],N=Object(n.useState)(),y=Object(u.a)(N,2),k=y[0],j=y[1],C=Object(n.useState)(),S=Object(u.a)(C,2),z=S[0],M=S[1],P=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.t0=f,e.next=4,v(t.params.id);case 4:e.t1=e.sent,(0,e.t0)(e.t1),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=M,e.next=3,v(t.params.id,"credits");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,v(t.params.id,"recommendations");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,v(t.params.id,"similar");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){P(),$(),D(),I()}),[t.params.id]);var q=window.$(".owl-carousel");return window.$(document).ready((function(){q.owlCarousel({loop:!0,responsive:{0:{items:2},480:{items:3},768:{items:4},1024:{items:6}}})})),s?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container py-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+p.poster_path,alt:p.title,className:"card-img-top"}))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"badge ".concat("Released"===p.status?"badge-success":"badge-info")},p.status),r.a.createElement("h2",null,p.title," ",r.a.createElement("span",{className:"badge badge-info"},p.runtime," minutes")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h5",null,"Genres"),p.genres.length<1?"-":p.genres.map((function(e){return r.a.createElement("span",{className:"badge badge-primary mr-3",key:e.id},e.name)}))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h5",null,"Production Companies"),p.production_companies.length<1?"-":p.production_companies.map((function(e){return r.a.createElement("span",{className:"badge badge-info mr-3",key:e.id},e.name)}))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h5",null,"Production Countries"),p.production_countries.length<1?"-":p.production_countries.map((function(e){return r.a.createElement("span",{className:"badge badge-warning mr-3",key:e.name},e.name)}))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h5",null,"Spoken Languages"),p.spoken_languages.length<1?"-":p.spoken_languages.map((function(e){return r.a.createElement("span",{className:"badge badge-danger mr-3",key:e.name},e.name)}))))))),r.a.createElement("div",{className:"row-fluid mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Overview"),p.overview?p.overview:""))),r.a.createElement("div",{className:"row-fluid mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Cast"),r.a.createElement("div",{className:"row owl-carousel"},z?z.cast.map((function(e){return r.a.createElement(O,{cast:e,key:e.id})})):"")))),r.a.createElement("div",{className:"row-fluid mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Crew"),r.a.createElement("div",{className:"row owl-carousel"},z?z.crew.map((function(e){return r.a.createElement(_,{crew:e,key:e.id})})):"")))),r.a.createElement("div",{className:"row-fluid mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Recommendations"),r.a.createElement("div",{className:"row owl-carousel"},g?g.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id,carousel:!0})})):"")))),k&&k.results.length>0?r.a.createElement("div",{className:"row-fluid mt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,"Similar Movies"),r.a.createElement("div",{className:"row owl-carousel"},k.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id,carousel:!0})})))))):""))},S=function(e){var t=e.movie,a={backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original"+t.backdrop_path,")"),height:"90vh",backgroundSize:"cover",position:"relative"},n=t.release_date.split("-");return r.a.createElement("div",{style:a},r.a.createElement("div",{className:"bg-banner"}),r.a.createElement("div",{className:"banner-content p-5"},r.a.createElement("h2",null,t.title," (",n[0],")"),r.a.createElement("p",null,t.overview),r.a.createElement(N.b,{to:"/movie/".concat(t.id),className:"btn btn-outline-light"},"More Detail")))},z=function(){var e=Object(n.useContext)(h),t=Object(u.a)(e,8),a=(t[0],t[1]),c=t[2],s=t[3],o=(t[4],t[5],t[6],t[7]),m=Object(n.useState)(),d=Object(u.a)(m,2),v=d[0],f=d[1],b=Object(n.useState)(),E=Object(u.a)(b,2),g=E[0],w=E[1],y=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.t0=f,e.next=4,p("popular");case 4:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.t0=w,e.next=4,p("now_playing");case 4:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),o("popular"),e.t0=a,e.next=5,p("popular");case 5:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),o("now_playing"),e.t0=a,e.next=5,p("now_playing");case 5:e.t1=e.sent,(0,e.t0)(e.t1),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y(),k()}),[]);var _=window.$(".owl-carousel"),C=window.$(".banner-carousel");return window.$((function(){C.owlCarousel({loop:!0,items:1,autoplay:!0,autoplayTimeout:5e3}),_.owlCarousel({loop:!0,responsive:{0:{items:2},480:{items:3},768:{items:4},1024:{items:6}}})})),c?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-12 text-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"banner-carousel owl-carousel"},g?g.results.map((function(e){return r.a.createElement(S,{key:e.id,movie:e})})):""),r.a.createElement("div",{className:"btn-group navigator"},r.a.createElement("button",{className:"btn btn-dark",onClick:function(){C.trigger("prev.owl.carousel")}},r.a.createElement("i",{className:"fa fa-angle-left"})),r.a.createElement("button",{className:"btn btn-dark",onClick:function(){C.trigger("next.owl.carousel")}},r.a.createElement("i",{className:"fa fa-angle-right"})))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row-fluid d-flex justify-content-between my-3"},r.a.createElement("h4",{className:"text-secondary"},"Popular"),r.a.createElement(N.b,{to:"/movie",className:"btn btn-outline-secondary",onClick:j},"See More")),r.a.createElement("div",{className:"row owl-carousel"},v?v.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id,carousel:!0})})):""),r.a.createElement("div",{className:"row-fluid d-flex justify-content-between my-3"},r.a.createElement("h4",{className:"text-secondary"},"Now Playing"),r.a.createElement(N.b,{to:"/movie",className:"btn btn-outline-secondary",onClick:O},"See More")),r.a.createElement("div",{className:"row owl-carousel"},g?g.results.map((function(e){return r.a.createElement(x,{movie:e,key:e.id,carousel:!0})})):"")))},M=function(){var e=Object(n.useContext)(h),t=Object(u.a)(e,3);t[0],t[1];return t[2]?"":r.a.createElement("nav",{className:"navbar navbar-dark navbar-expand bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-secondary py-3"},"\xa9 Movieee 2020")))},P=a(12),$=a.n(P);window.$=$.a,window.jQuery=$.a,window.jquery=$.a;var D=function(){return r.a.createElement(w,null,r.a.createElement(N.a,null,r.a.createElement(j,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",exact:!0,component:z}),r.a.createElement(k.a,{path:"/movie",exact:!0,component:y}),r.a.createElement(k.a,{path:"/movie/:id",exact:!0,component:C})),r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f05807d5.chunk.js.map
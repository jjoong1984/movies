(this.webpackJsonpmovise=this.webpackJsonpmovise||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),r=n.n(c),a=n(17),i=n.n(a),o=(n(25),n(3)),u=n(4),j=n(6),m=n(5),l=n(8),v=n.n(l),b=n(18);n(27);var d=function(e){var t=e.year,n=e.title,c=e.summary,r=e.poster,a=e.genres;return Object(s.jsxs)("div",{className:"movies",children:[Object(s.jsx)("img",{src:r,alt:n}),Object(s.jsxs)("div",{className:"movies_data",children:[Object(s.jsx)("h3",{className:"movies_title",children:n}),Object(s.jsx)("h5",{className:"movies_year",children:t}),Object(s.jsx)("ul",{children:a.map((function(e,t){return Object(s.jsxs)("li",{children:["/ ",e," "]},t)}))}),Object(s.jsxs)("p",{className:"movies_summary",children:[c.slice(0,100),"..."]})]})]})},O=n(19),h=n.n(O),f=(n(45),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={kim:[]},e.getMovies=Object(b.a)(v.a.mark((function t(){var n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({kim:s});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.kim;return Object(s.jsx)("section",{className:"container",children:e.map((function(e){return Object(s.jsx)(d,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})}}]),n}(c.Component)),p=function(){return Object(s.jsx)("div",{})},x=function(){return Object(s.jsx)("div",{})},y=(n(46),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"wrap",children:[Object(s.jsx)(p,{}),Object(s.jsx)(f,{}),Object(s.jsx)(x,{})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.81f8389e.chunk.js.map
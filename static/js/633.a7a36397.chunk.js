"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[633],{877:(e,s,t)=>{t.d(s,{Df:()=>r,TP:()=>l,tx:()=>_,z1:()=>n,zv:()=>v});var a=t(294);const i="ffed898cd5cef6f73a1a7d7b5f4a44a3",c="https://api.themoviedb.org/3",o=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await a.Z.get(e,{params:{...s,api_key:i}})).data}catch(o){var t,c;throw new Error((null===(t=o.response)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.status_message)||"Something went wrong")}},r=()=>{const e="".concat(c,"/trending/movie/day");return o(e)},n=e=>{const s="".concat(c,"/search/movie");return o(s,{query:e})},l=e=>{const s="".concat(c,"/movie/").concat(e);return o(s)},v=e=>{const s="".concat(c,"/movie/").concat(e,"/credits");return o(s)},_=e=>{const s="".concat(c,"/movie/").concat(e,"/reviews");return o(s)}},633:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t(791),i=t(689),c=t(87),o=t(877),r=t(697),n=t(184);const l=()=>{const{movieId:e}=(0,i.UO)(),[s,t]=(0,a.useState)(null),[l]=(0,a.useState)([]),[v]=(0,a.useState)([]),_=(0,i.s0)(),[m]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const s=await(0,o.TP)(e),a=await(0,o.zv)(e);t(s),l(a.cast)}catch(s){console.log("Error fetching movie details:",s)}})()}),[l,e]),(0,a.useEffect)((()=>{"reviews"===m&&(async()=>{try{const s=await(0,o.tx)(e);v(s.results)}catch(s){console.log("Error fetching movie reviews:",s)}})()}),[e,m,v]),(0,a.useEffect)((()=>{"cast"===m&&(async()=>{try{const s=await(0,o.zv)(e);l(s.cast)}catch(s){console.log("Error fetching movie cast:",s)}})()}),[e,m,l]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:r.Z.movieDetails,children:[(0,n.jsx)("button",{className:r.Z.goBack,onClick:()=>{_("/")},children:(0,n.jsx)(c.rU,{to:"/",className:r.Z.linkStyle,children:"\u2190 Go Back"})}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:r.Z.movieInfo,children:[(0,n.jsx)("div",{className:r.Z.moviePoster,children:(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.original_title,className:r.Z.posterImage})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{children:[s.original_title," (",(h=s.release_date,new Date(h).getFullYear()),")"]}),(0,n.jsxs)("h2",{className:r.Z.movieDescr,children:["User Score: ",10*s.vote_average,"%"]}),(0,n.jsx)("h2",{className:r.Z.movieDescr,children:"Overview"}),(0,n.jsx)("p",{children:s.overview}),(0,n.jsx)("h2",{className:r.Z.movieDescr,children:"Genres"}),(0,n.jsx)("p",{children:(d=s.genres,d.map((e=>e.name)).join(", "))})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:r.Z.tabs,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(c.rU,{to:"/movies/".concat(e,"/cast"),className:r.Z.castButton,children:"Cast"})}),(0,n.jsx)("li",{children:(0,n.jsx)(c.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})}),(0,n.jsx)(i.j3,{})]})]})]})});var d,h}},697:(e,s,t)=>{t.d(s,{Z:()=>a});const a={movieDetails:"MovieDetails_movieDetails__suW9P",goBack:"MovieDetails_goBack__9CVK-",movieSection:"MovieDetails_movieSection__TuShq",movieDescr:"MovieDetails_movieDescr__dXIoJ",movieInfo:"MovieDetails_movieInfo__6PYb1",moviePoster:"MovieDetails_moviePoster__ZzjKA",posterImage:"MovieDetails_posterImage__3BtNW",tabs:"MovieDetails_tabs__CEmG6",castSection:"MovieDetails_castSection__7Hm2H",reviewsSection:"MovieDetails_reviewsSection__u3PDY",castItem:"MovieDetails_castItem__JBYTw",castImage:"MovieDetails_castImage__zKavy",linkStyle:"MovieDetails_linkStyle__QsqLX",castButton:"MovieDetails_castButton__aRyFT",castMargin:"MovieDetails_castMargin__QzmhJ",reviewsMargin:"MovieDetails_reviewsMargin__LyS6a"}}}]);
//# sourceMappingURL=633.a7a36397.chunk.js.map
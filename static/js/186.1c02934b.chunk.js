"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{877:(e,t,i)=>{i.d(t,{Df:()=>n,TP:()=>v,tx:()=>l,z1:()=>r,zv:()=>_});var s=i(294);const a="ffed898cd5cef6f73a1a7d7b5f4a44a3",o="https://api.themoviedb.org/3",c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await s.Z.get(e,{params:{...t,api_key:a}})).data}catch(c){var i,o;throw new Error((null===(i=c.response)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.status_message)||"Something went wrong")}},n=()=>{const e="".concat(o,"/trending/movie/day");return c(e)},r=e=>{const t="".concat(o,"/search/movie");return c(t,{query:e})},v=e=>{const t="".concat(o,"/movie/").concat(e);return c(t)},_=e=>{const t="".concat(o,"/movie/").concat(e,"/credits");return c(t)},l=e=>{const t="".concat(o,"/movie/").concat(e,"/reviews");return c(t)}},186:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var s=i(791),a=i(697),o=i(689),c=i(877),n=i(184);const r=()=>{const[e,t]=(0,s.useState)([]),[i,r]=(0,s.useState)(!0),{movieId:v}=(0,o.UO)(),_=(0,o.s0)();return(0,s.useEffect)((()=>{if(!v)return void _("/");(async()=>{r(!0);try{const e=await(0,c.tx)(v);t(e.results),r(!1)}catch(e){r(!1),t([]),console.log("Error fetching movie reviews:",e)}})()}),[v,_]),(0,n.jsxs)("div",{className:a.Z.reviewsMargin,children:[(0,n.jsx)("h2",{children:"Reviews"}),i?(0,n.jsx)("div",{children:"Loading reviews..."}):e.length>0?e.map((e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id))):(0,n.jsx)("div",{children:"No reviews available"})]})}},697:(e,t,i)=>{i.d(t,{Z:()=>s});const s={movieDetails:"MovieDetails_movieDetails__suW9P",goBack:"MovieDetails_goBack__9CVK-",movieSection:"MovieDetails_movieSection__TuShq",movieDescr:"MovieDetails_movieDescr__dXIoJ",movieInfo:"MovieDetails_movieInfo__6PYb1",moviePoster:"MovieDetails_moviePoster__ZzjKA",posterImage:"MovieDetails_posterImage__3BtNW",tabs:"MovieDetails_tabs__CEmG6",castSection:"MovieDetails_castSection__7Hm2H",reviewsSection:"MovieDetails_reviewsSection__u3PDY",castItem:"MovieDetails_castItem__JBYTw",castImage:"MovieDetails_castImage__zKavy",linkStyle:"MovieDetails_linkStyle__QsqLX",castButton:"MovieDetails_castButton__aRyFT",castMargin:"MovieDetails_castMargin__QzmhJ",reviewsMargin:"MovieDetails_reviewsMargin__LyS6a"}}}]);
//# sourceMappingURL=186.1c02934b.chunk.js.map
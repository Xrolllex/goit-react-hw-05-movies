"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{355:(e,t,i)=>{i.d(t,{Df:()=>n,TP:()=>v,tx:()=>l,z1:()=>r,zv:()=>_});var o=i(294);const a="ffed898cd5cef6f73a1a7d7b5f4a44a3",s="https://api.themoviedb.org/3",c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await o.Z.get(e,{params:{...t,api_key:a}})).data}catch(c){var i,s;throw new Error((null===(i=c.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.status_message)||"Something went wrong")}},n=()=>{const e="".concat(s,"/trending/movie/day");return c(e)},r=e=>{const t="".concat(s,"/search/movie");return c(t,{query:e})},v=e=>{const t="".concat(s,"/movie/").concat(e);return c(t)},_=e=>{const t="".concat(s,"/movie/").concat(e,"/credits");return c(t)},l=e=>{const t="".concat(s,"/movie/").concat(e,"/reviews");return c(t)}},186:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var o=i(791),a=i(910),s=i(689),c=i(355),n=i(184);const r=()=>{const[e,t]=(0,o.useState)([]),[i,r]=(0,o.useState)(!0),{movieId:v}=(0,s.UO)(),_=(0,s.s0)();return(0,o.useEffect)((()=>{if(!v)return void _("/");(async()=>{r(!0);try{const e=await(0,c.tx)(v);t(e.results),r(!1)}catch(e){r(!1),t([]),console.log("Error fetching movie reviews:",e)}})()}),[v,_]),(0,n.jsxs)("div",{className:a.Z.reviewsMargin,children:[(0,n.jsx)("h2",{children:"Reviews"}),i?(0,n.jsx)("div",{children:"Loading reviews..."}):e.length>0?e.map((e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id))):(0,n.jsx)("div",{children:"No reviews available"})]})}},910:(e,t,i)=>{i.d(t,{Z:()=>o});const o={movieDetails:"MovieDetails_movieDetails__EqwEX",goBack:"MovieDetails_goBack__z8Pee",movieSection:"MovieDetails_movieSection__O7JS3",movieDescr:"MovieDetails_movieDescr__r7+YJ",movieInfo:"MovieDetails_movieInfo__XAfDM",moviePoster:"MovieDetails_moviePoster__M1O9z",posterImage:"MovieDetails_posterImage__VZLT9",tabs:"MovieDetails_tabs__8xDA5",castSection:"MovieDetails_castSection__3B5Y+",reviewsSection:"MovieDetails_reviewsSection__cS0jD",castItem:"MovieDetails_castItem__i26IE",castImage:"MovieDetails_castImage__w5i0K",linkStyle:"MovieDetails_linkStyle__fRQm7",castButton:"MovieDetails_castButton__26MMb",castMargin:"MovieDetails_castMargin__ZgwAZ",reviewsMargin:"MovieDetails_reviewsMargin__P24mL",bakcButton:"MovieDetails_bakcButton__-4G3A"}}}]);
//# sourceMappingURL=186.c5a67f9a.chunk.js.map
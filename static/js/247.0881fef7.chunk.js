"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var r=a(945),c=a(184);const i=()=>{const t=(0,r.P)();return t.credits&&0!==t.credits.length?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline"},children:"Movie cast"}),(0,c.jsx)("ul",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:t.credits.map((t=>{let{movie_id:e,profile_path:a,original_name:r,character:i}=t;return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{style:{borderRadius:"4px",border:"red , 2px"},src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image",alt:r,width:250}),(0,c.jsx)("h3",{children:r}),(0,c.jsxs)("p",{children:["Character: ",i]})]},e)}))})]}):(0,c.jsx)("p",{style:{textAlign:"center"},children:"There is no information yet\ud83d\ude44 "})}},945:(t,e,a)=>{a.d(e,{P:()=>n});var r=a(791),c=a(689),i=a(282);const n=()=>{const[t,e]=(0,r.useState)([]),[a,n]=(0,r.useState)(null),[s,o]=(0,r.useState)(!1),{movieId:l}=(0,c.UO)();return(0,r.useEffect)((()=>{if(o(!0),!l)return;(async()=>{try{const t=await(0,i.getMovieCast)(l);e(t.cast)}catch(a){n("Something went wrong\ud83d\ude44")}finally{o(!1)}})()}),[l]),{credits:t,error:a,loading:s}}},282:(t,e,a)=>{a.r(e),a.d(e,{getAllMoviesList:()=>i,getMovieByQuery:()=>n,getMovieCast:()=>o,getMovieFullInfo:()=>s,getMovieReviews:()=>l});var r=a(294);const c="8ce1621260b74e6098b536a0b1ea63ad";r.Z.defaults.baseURL="https://api.themoviedb.org/3";const i=async()=>{try{return await(0,r.Z)("/trending/all/day?api_key=".concat(c))}catch(t){throw t}},n=async t=>{try{return await(0,r.Z)("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false"))}catch(e){throw e}},s=async t=>{try{const{data:e}=await r.Z.get("/movie/".concat(t,"?api_key=").concat(c));return e}catch(e){throw e}},o=async t=>{try{const{data:e}=await(0,r.Z)("/movie/".concat(t,"/credits?api_key=").concat(c));return e}catch(e){throw e}},l=async t=>{try{return await(0,r.Z)("/movie/".concat(t,"/reviews?api_key=").concat(c))}catch(e){throw e}}}}]);
//# sourceMappingURL=247.0881fef7.chunk.js.map
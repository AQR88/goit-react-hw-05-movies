"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});var n=a(168),r=a(184);const s=()=>{const t=(0,n.Cl)();return 0!==t.reviews.length&&t.reviews?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline"},children:"Rewievs"}),(0,r.jsx)("ul",{children:t.reviews.map((t=>{let{movieId:e,author:a,content:n}=t;return(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{style:{textAlign:"center"},children:a}),(0,r.jsx)("p",{style:{textAlign:"left"},children:n})]},e)}))})]}):(0,r.jsx)("p",{style:{textAlign:"center"},children:"There is no information yet\ud83d\ude44 "})}},168:(t,e,a)=>{a.d(e,{KN:()=>s,a1:()=>u,Cl:()=>y});var n=a(791),r=a(282);const s=()=>{const[t,e]=(0,n.useState)([]),[a,s]=(0,n.useState)(null),[c,i]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{i(!0);(async()=>{try{const{data:t}=await(0,r.getAllMoviesList)();e(t.results)}catch(a){s("Something went wrong")}finally{i(!1)}})()}),[]),{movies:t,error:a,loading:c}};var c=a(689);const{useState:i,useEffect:o}=a(791),{getMovieFullInfo:l}=a(282),u=()=>{const[t,e]=i([]),[a,n]=i(null),[r,s]=i(!1),{movieId:u}=(0,c.UO)();return o((()=>{if(!u)return;s(!0);(async()=>{try{const t=await l(u);e(t)}catch(a){n("Something went wrong\ud83d\ude44")}finally{s(!1)}})()}),[u]),{movie:t,error:a,loading:r}};a(40),a(945);const y=()=>{const[t,e]=(0,n.useState)([]),[a,s]=(0,n.useState)(null),[i,o]=(0,n.useState)(!1),{movieId:l}=(0,c.UO)();return(0,n.useEffect)((()=>{if(o(!0),!l)return;(async()=>{try{const{data:t}=await(0,r.getMovieReviews)(l);e(t.results)}catch(a){s("Something went wrong\ud83d\ude44")}finally{o(!1)}})()}),[l]),{reviews:t,error:a,loading:i}}},40:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(791),r=a(87),s=a(282);const c=()=>{const[t,e]=(0,n.useState)([]),[a,c]=(0,n.useState)(null),[i,o]=(0,n.useState)(!1),[l,u]=(0,r.lr)(),y=l.get("query");(0,n.useEffect)((()=>{if(o(!0),!y)return;(async()=>{try{const{data:t}=await(0,s.getMovieByQuery)(y);e(t.results)}catch(a){c("Something went wrong\ud83d\ude44")}finally{o(!1)}})()}),[y]);return{movies:t,error:a,loading:i,handleSubmit:t=>{u({query:t})}}}},945:(t,e,a)=>{a.d(e,{P:()=>c});var n=a(791),r=a(689),s=a(282);const c=()=>{const[t,e]=(0,n.useState)([]),[a,c]=(0,n.useState)(null),[i,o]=(0,n.useState)(!1),{movieId:l}=(0,r.UO)();return(0,n.useEffect)((()=>{if(o(!0),!l)return;(async()=>{try{const t=await(0,s.getMovieCast)(l);e(t.cast)}catch(a){c("Something went wrong\ud83d\ude44")}finally{o(!1)}})()}),[l]),{credits:t,error:a,loading:i}}},282:(t,e,a)=>{a.r(e),a.d(e,{getAllMoviesList:()=>s,getMovieByQuery:()=>c,getMovieCast:()=>o,getMovieFullInfo:()=>i,getMovieReviews:()=>l});var n=a(294);const r="8ce1621260b74e6098b536a0b1ea63ad";n.Z.defaults.baseURL="https://api.themoviedb.org/3";const s=async()=>{try{return await(0,n.Z)("/trending/all/day?api_key=".concat(r))}catch(t){throw t}},c=async t=>{try{return await(0,n.Z)("/search/movie?api_key=".concat(r,"&query=").concat(t,"&include_adult=false"))}catch(e){throw e}},i=async t=>{try{const{data:e}=await n.Z.get("/movie/".concat(t,"?api_key=").concat(r));return e}catch(e){throw e}},o=async t=>{try{const{data:e}=await(0,n.Z)("/movie/".concat(t,"/credits?api_key=").concat(r));return e}catch(e){throw e}},l=async t=>{try{return await(0,n.Z)("/movie/".concat(t,"/reviews?api_key=").concat(r))}catch(e){throw e}}}}]);
//# sourceMappingURL=186.00c572e7.chunk.js.map
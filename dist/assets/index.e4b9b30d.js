import{s as e}from"./index.b0e1550a.js";async function s(t){const a=await e.get("/system/dictionary-data/page",{params:t});return a.data.code===0?a.data.data:Promise.reject(new Error(a.data.message))}async function n(t){const a=await e.get("/system/dictionary-data",{params:t});return a.data.code===0&&a.data.data?a.data.data:Promise.reject(new Error(a.data.message))}async function i(t){const a=await e.post("/system/dictionary-data",t);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}async function o(t){const a=await e.put("/system/dictionary-data",t);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}async function c(t){const a=await e.delete("/system/dictionary-data/"+t);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}async function d(t){const a=await e.delete("/system/dictionary-data/batch",{data:t});return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}export{i as a,d as b,n as l,s as p,c as r,o as u};

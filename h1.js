// const fetch = require("node-fetch");
 const fetch = require("isomorphic-fetch");
 var  accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhmMDE4ZDA5MDQ3OGJkYjQwZjMzM2UzNmNmOTMxNDdmZDI3YTNmYjc5MWZlZjUwOGMxMjcxYTE5NDFkOWY5YmQ0YjM3MTFiYTVkNzM4NTMwIn0.eyJhdWQiOiI1IiwianRpIjoiOGYwMThkMDkwNDc4YmRiNDBmMzMzZTM2Y2Y5MzE0N2ZkMjdhM2ZiNzkxZmVmNTA4YzEyNzFhMTk0MWQ5ZjliZDRiMzcxMWJhNWQ3Mzg1MzAiLCJpYXQiOjE2MDUwMDMwNDYsIm5iZiI6MTYwNTAwMzA0NiwiZXhwIjoxNjM2NTM5MDQ2LCJzdWIiOiIzMTAxODgiLCJzY29wZXMiOltdfQ.JyrDwFj94-xHCxpbCUPvFYN-ffE83_D_Hw5BFHI3RTFYhkL690uItJxhszOIsaQGGZ65LVW3kFAjcFSGdw0KKEH3ILsnH8QOGhqgQz_NXok0xkzDT4nt-PFvdLqoLst7xClOHSloyd97Rj5ZC0FNPsQH1gsNubJ0Fv7grb19wh4DqDFUsNmHpE2YSV5muoloIOpeJ5QKgVUhGIw4VsUQ5BCsftMus-g-YF200MINcAOOfMD8O2dyvAgwL1W1VymTJbErlrKMv7MwJCfvXB80M5Z0ZU9Q8CtVdyitfBpNOADHoe6fObW7heeHxK6hxPYKBhfxm5hfLgTr1c5y_pQ90s60emEGh1G-ULGkAn8nMLDdzbxXXQ1miMEsKCOpGzQGxJOs4TGFyPNOb_XzZV8TJTmaIvNGczemqNQ4cKdAmaAHnT2yTI1oFLXaSnH8MYH7KzuwCRtQ9VI08q5MBHgFV95_jLCyik5aVaU3ehUOXE2vwE-ASSWsIZ0yjRdJ-yuFC8-Ucho1kIvjhzyFGnCLxUy249fcyUEksrfd-YSzDvtIFDfLRh-xW3NeRjZUu_6Ch7IRVnt8qee9BMwyv_x4gWHOppLawuzUQNVUG4MZtqN1NUi_CgHurq4BNOr7PSCx1iqSvFxJqpGWYTdAcu0dg3KeALuPfwc_1A0li04XHJU",
 t = 20000 ,
 c =     Math.random().toString(12).substring(2),
 i1="https://wolf.bet/api/v1/bet/place", 
 i2 = "https://wolf.bet/api/v1/user/balances",
 i3 = "https://wolf.bet/api/v1/user/stats/bets",
 i4 = "https://wolf.bet/api/v1/game/seed/refresh",
 i5 = "https://wolf.bet/api/v1/user/stats/race",
 i6 = 
"https://wolf.bet/api/v1/user/seed/refresh",
 
  wc = 49.50 ,a=0.00000016,
 	b1=JSON.stringify({currency :"xrp",game:"dice",amount:parseFloat(a).toFixed(8),rule:"under",multiplier:(99/wc).toFixed(4),bet_value:wc.toFixed(2)}),
 	b2=JSON.stringify({client_seed:c }),
 	l1= {method: "POST",headers: {"Authorization":"Bearer " +accessToken,"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}, body: b1},
 l2= {method: "GET",headers: {"Authorization":"Bearer " +accessToken,"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}},
 l3= {method: "POST",headers: {"Authorization":"Bearer " +accessToken,"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}, body: b2};

function dobet(){
fetch(i1,l1).then(response=>{return response.text()}) 			 .then(e=>{  
console.log(e);
//console.log(b1);
//console.log(l1);



});
setTimeout(dobet,t);
 
 }
 dobet();
 
 
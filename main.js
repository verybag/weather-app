(()=>{"use strict";const e=async e=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=imperial&appid=c0508df5600e22b81d919deefdacfda6`,{mode:"cors"});if(!t.ok)throw new Error("City not found!");const n=(e=>{const{name:t,main:{temp:n,feels_like:o,temp_min:c,temp_max:i}}=e;return{cityName:t,temp:n,feelsLike:o,low:c,high:i}})(await t.json());return console.log(n),n}catch(e){return void alert(e)}},t=e=>{if(!e)return;document.querySelector(".results").classList.add("active");const t=document.getElementById("city"),n=document.getElementById("temp"),o=document.getElementById("feelsLike"),c=document.getElementById("low"),i=document.getElementById("high");t.textContent=`${e.cityName}`,n.textContent=`${e.temp}°F`,o.textContent=`Feels like: ${e.feelsLike}°F`,c.textContent=`Low: ${e.low}°F`,i.textContent=`High: ${e.high}°F`},n=document.querySelector("form"),o=document.querySelector("input"),c=document.querySelector(".btn");n.addEventListener("submit",(e=>{e.preventDefault()})),c.addEventListener("click",(async()=>{if(""===o.value)return;const n=await e(o.value);t(n)}))})();
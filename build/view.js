(()=>{const e=document.querySelectorAll(".spoiler-section-button"),s=document.querySelectorAll(".spoiler-section-contents");console.log("num of buttons: "+e.length),e.forEach(((e,o)=>{e.addEventListener("click",(()=>{s[o].classList.contains("spoiler-section-hidden")?s[o].classList.replace("spoiler-section-hidden","spoiler-section-visible"):s[o].classList.replace("spoiler-section-visible","spoiler-section-hidden"),e.querySelectorAll("span").forEach((e=>{e.classList.toggle("spoiler-section-button-curr")}))}))}))})();
const c=document.querySelector(".burger"),n=document.querySelector(".menu-close-btn"),e=document.querySelector(".mobile-menu");c.addEventListener("click",()=>{e.classList.add("menu-active")});n.addEventListener("click",()=>{e.classList.remove("menu-active")});document.addEventListener("click",t=>{!e.contains(t.target)&&!c.contains(t.target)&&e.classList.remove("menu-active")});
//# sourceMappingURL=mobile-menu-71e5cfad.js.map
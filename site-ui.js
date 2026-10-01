(()=>{"use strict";
const norm=p=>(p||"/").replace(/index\.html$/,"").replace(/\/+$/,"/")||"/";
const main=document.querySelector("main");
if(main){
  if(!main.id)main.id="main-content";
  if(!document.querySelector(".skip-link")){
    const a=document.createElement("a");a.className="skip-link";a.href="#main-content";a.textContent="본문 바로가기";document.body.insertBefore(a,document.body.firstChild);
  }
}
const brand=document.querySelector(".brand,.lp-brand");
if(brand&&!brand.hasAttribute("aria-label"))brand.setAttribute("aria-label","문해력플러스 홈");
document.querySelectorAll("nav").forEach(n=>{
  if(!n.hasAttribute("aria-label")){
    if(n.classList.contains("archive-nav")||n.classList.contains("main-nav")||n.classList.contains("lp-nav"))n.setAttribute("aria-label","주요 메뉴");
    else if(n.classList.contains("breadcrumb")||n.classList.contains("archive-breadcrumb")||n.classList.contains("lp-breadcrumb")||n.classList.contains("lp-hub-breadcrumb"))n.setAttribute("aria-label","현재 위치");
  }
});
const path=norm(location.pathname);
document.querySelectorAll(".main-nav a,.archive-nav a,.lp-nav a").forEach(a=>{
  const href=norm(new URL(a.href,location.origin).pathname);
  const isCurrent=href!=="/"&&(path===href||path.startsWith(href));
  if(isCurrent){a.setAttribute("aria-current","page");a.classList.add("current")}
  else if(a.getAttribute("aria-current")==="page"){a.removeAttribute("aria-current");a.classList.remove("current")}
});
const syncPressed=()=>{
  document.querySelectorAll(".chip,[data-grade]").forEach(b=>b.setAttribute("aria-pressed",b.classList.contains("active")?"true":"false"));
};
syncPressed();
document.addEventListener("click",e=>{if(e.target.closest(".chip,[data-grade]"))setTimeout(syncPressed,0)});
})();
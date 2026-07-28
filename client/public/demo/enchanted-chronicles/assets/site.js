(function(){
  const header=document.querySelector(".site-header");
  const toggle=header&&header.querySelector(".site-nav__toggle");
  const panel=header&&header.querySelector(".site-nav__panel");
  const links=header?[...header.querySelectorAll(".site-nav__link")]:[];

  if(header&&toggle&&panel){
    function closeNav(){
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
      toggle.setAttribute("aria-label","Open menu");
      document.body.classList.remove("nav-open");
    }
    function openNav(){
      header.classList.add("is-open");
      toggle.setAttribute("aria-expanded","true");
      toggle.setAttribute("aria-label","Close menu");
      document.body.classList.add("nav-open");
    }
    toggle.addEventListener("click",()=>{
      header.classList.contains("is-open")?closeNav():openNav();
    });
    links.forEach(a=>a.addEventListener("click",closeNav));
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape")closeNav();
    });
    window.matchMedia("(min-width:769px)").addEventListener("change",e=>{
      if(e.matches)closeNav();
    });
  }

  if(links.length){
    const norm=p=>p.replace(/\/index\.html$/i,"/").replace(/\/+$/,"")||"/";
    const current=norm(window.location.pathname);
    links.forEach(link=>{
      const linkPath=norm(new URL(link.href,window.location.origin).pathname);
      const isHome=linkPath.endsWith("/enchanted-chronicles")&&current.endsWith("/enchanted-chronicles");
      if(current===linkPath||isHome){
        link.classList.add("is-active");
        link.setAttribute("aria-current","page");
      }
    });
  }

  const reveals=document.querySelectorAll(".reveal");
  if(!reveals.length)return;
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}
      });
    },{threshold:.1,rootMargin:"0px 0px -32px 0px"});
    reveals.forEach(el=>io.observe(el));
  }else{
    reveals.forEach(el=>el.classList.add("is-visible"));
  }
})();

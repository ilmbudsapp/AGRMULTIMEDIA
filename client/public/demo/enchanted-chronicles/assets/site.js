(function(){
  if(window.__ecSiteInit)return;
  window.__ecSiteInit=true;

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
    function onToggle(e){
      e.preventDefault();
      e.stopPropagation();
      header.classList.contains("is-open")?closeNav():openNav();
    }
    toggle.addEventListener("click",onToggle);
    links.forEach(a=>a.addEventListener("click",closeNav));
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape")closeNav();
    });
    document.addEventListener("click",e=>{
      if(!header.classList.contains("is-open"))return;
      if(!header.contains(e.target))closeNav();
    });
    window.matchMedia("(min-width:769px)").addEventListener("change",e=>{
      if(e.matches)closeNav();
    });
  }

  if(links.length){
    const norm=p=>p.replace(/\/index\.html$/i,"/").replace(/\/+$/,"")||"/";
    const current=norm(window.location.pathname);
    links.forEach(link=>{
      const url=new URL(link.href,window.location.origin);
      const linkPath=norm(url.pathname);
      const linkHash=url.hash;
      const isHome=!linkHash&&linkPath.endsWith("/enchanted-chronicles")&&current.endsWith("/enchanted-chronicles");
      const isStories=linkHash==="#elenco"&&(current.includes("/stories/")||(current.endsWith("/enchanted-chronicles")&&window.location.hash==="#elenco"));
      const isAbout=linkPath.endsWith("/about.html")&&current.endsWith("/about.html");
      if(isHome||isStories||isAbout){
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

  document.querySelectorAll(".newsletter__form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const input=form.querySelector(".newsletter__input");
      const btn=form.querySelector(".newsletter__submit");
      if(!input||!input.value.trim())return;
      const prev=btn.textContent;
      btn.textContent="Thank you!";
      btn.disabled=true;
      input.disabled=true;
      setTimeout(()=>{
        btn.textContent=prev;
        btn.disabled=false;
        input.disabled=false;
        input.value="";
      },3000);
    });
  });
})();

(function(){
  if(window.__ecSiteInit)return;
  window.__ecSiteInit=true;

  const header=document.querySelector(".site-header");
  const toggle=header&&header.querySelector(".site-nav__toggle");
  const panel=header&&header.querySelector(".site-nav__panel");
  const links=header?[...header.querySelectorAll(".site-nav__link")]:[];

  if(header&&toggle&&panel){
    function menuLabel(open){
      return window.ecT?window.ecT(open?"nav.closeMenu":"nav.openMenu"):(open?"Close menu":"Open menu");
    }
    function closeNav(){
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
      toggle.setAttribute("aria-label",menuLabel(false));
      document.body.classList.remove("nav-open");
    }
    function openNav(){
      header.classList.add("is-open");
      toggle.setAttribute("aria-expanded","true");
      toggle.setAttribute("aria-label",menuLabel(true));
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
    window.addEventListener("ec:languagechange",()=>{
      if(header.classList.contains("is-open"))toggle.setAttribute("aria-label",menuLabel(true));
      else toggle.setAttribute("aria-label",menuLabel(false));
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

  const reducedMotion=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  const mobile=window.matchMedia("(max-width:768px)").matches;

  function initMagicParticles(){
    const containers=document.querySelectorAll("[data-particles]");
    if(!containers.length||reducedMotion)return;
    const count=mobile?7:14;
    containers.forEach(box=>{
      for(let i=0;i<count;i++){
        const p=document.createElement("i");
        const size=(2+Math.random()*3).toFixed(1);
        p.style.cssText=[
          `left:${(Math.random()*100).toFixed(1)}%`,
          `top:${(Math.random()*100).toFixed(1)}%`,
          `width:${size}px`,
          `height:${size}px`,
          `--dur:${(6+Math.random()*9).toFixed(1)}s`,
          `--delay:${(Math.random()*6).toFixed(1)}s`,
          `--dx:${((Math.random()-.5)*56).toFixed(0)}px`,
          `--dy:${(-16-Math.random()*36).toFixed(0)}px`
        ].join(";");
        box.appendChild(p);
      }
    });
  }

  function initScrollScenes(){
    const reveals=document.querySelectorAll(".reveal:not(.reveal-stagger__item)");
    const scenes=document.querySelectorAll(".scene-enter");
    const staggerGroups=document.querySelectorAll(".reveal-stagger");

    if(!("IntersectionObserver" in window)){
      reveals.forEach(el=>el.classList.add("is-visible"));
      scenes.forEach(el=>el.classList.add("is-visible"));
      staggerGroups.forEach(el=>el.classList.add("is-active"));
      return;
    }

    const revealIo=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("is-visible");
          revealIo.unobserve(e.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -40px 0px"});

    reveals.forEach(el=>revealIo.observe(el));
    scenes.forEach(el=>revealIo.observe(el));

    const staggerIo=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("is-active");
          staggerIo.unobserve(e.target);
        }
      });
    },{threshold:.1,rootMargin:"0px 0px -48px 0px"});

    staggerGroups.forEach(el=>staggerIo.observe(el));
  }

  initMagicParticles();
  initScrollScenes();

  document.querySelectorAll(".newsletter__form").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const input=form.querySelector(".newsletter__input");
      const btn=form.querySelector(".newsletter__submit");
      if(!input||!input.value.trim())return;
      const thanks=window.ecT?window.ecT("newsletter.thanks"):"Thank you!";
      const submitLabel=window.ecT?window.ecT("newsletter.submit"):btn.textContent;
      btn.textContent=thanks;
      btn.disabled=true;
      input.disabled=true;
      setTimeout(()=>{
        btn.textContent=submitLabel;
        btn.disabled=false;
        input.disabled=false;
        input.value="";
      },3000);
    });
  });
})();

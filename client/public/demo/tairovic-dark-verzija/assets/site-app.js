const SITE=window.TAIROVIC_SITE||{
  PROD:/tairovic-gebaeudeservice\.de$/i.test(location.hostname),
  urlFor:(p)=>p==="home"?"/":"/"+p,
  pageFromLocation:()=>"home",
  legalUrl:(w)=>"/"+w
};
const navlinks=document.querySelectorAll(".navlink");
const pages=document.querySelectorAll(".page");
const menu=document.getElementById("menu");
const navEl=document.querySelector(".nav");
const links=document.getElementById("links");
const SEO=window.TAIROVIC_SEO;

navlinks.forEach(link=>{
  if(link.dataset.page)link.href=SITE.urlFor(link.dataset.page);
});
document.querySelectorAll("[data-legal]").forEach(a=>{
  a.href=SITE.legalUrl(a.dataset.legal);
});

function activatePage(page,{push=true,replace=false}={}){
  let seoPage=page||"home";
  if(!document.getElementById(seoPage)){
    seoPage="home";
  }
  pages.forEach(p=>p.classList.remove("active"));
  document.getElementById(seoPage).classList.add("active");
  navlinks.forEach(a=>a.classList.toggle("active",a.dataset.page===seoPage));
  if(navEl)navEl.classList.remove("menu-open");
  window.scrollTo(0,0);
  if(SEO)SEO.apply(seoPage);
  const url=SITE.urlFor(seoPage);
  if(push||replace){
    const fn=replace?"replaceState":"pushState";
    history[fn]({page},"",url);
  }
}

navlinks.forEach(link=>{
  link.addEventListener("click",e=>{
    const target=link.dataset.page;
    if(!target)return;
    e.preventDefault();
    activatePage(target,{push:true});
  });
});

window.addEventListener("popstate",()=>{
  activatePage(SITE.pageFromLocation(),{push:false});
});

function toggleMenu(){
  if(navEl)navEl.classList.toggle("menu-open");
}
menu.addEventListener("click",toggleMenu);
menu.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){e.preventDefault();toggleMenu();}
});

activatePage(SITE.pageFromLocation(),{push:false,replace:true});

(function(){
  const lb=document.getElementById("galerie-lightbox");
  const lbImg=document.getElementById("galerie-lightbox-img");
  const lbCounter=document.getElementById("galerie-lightbox-counter");
  const closeBtn=lb&&lb.querySelector(".galerie-lightbox-close");
  const prevBtn=lb&&lb.querySelector(".galerie-lightbox-prev");
  const nextBtn=lb&&lb.querySelector(".galerie-lightbox-next");
  if(!lb||!lbImg)return;

  let slides=[];
  let index=0;

  const slideFromBtn=(btn)=>{
    const img=btn.querySelector("img");
    return{
      src:btn.dataset.full||(img&&img.src)||"",
      alt:(img&&img.alt)||""
    };
  };

  const getSlidePool=(btn)=>{
    const arbeiten=document.getElementById("arbeiten");
    if(arbeiten&&arbeiten.contains(btn)){
      return Array.from(arbeiten.querySelectorAll(".galerie-thumb"));
    }
    const grid=btn.closest(".galerie-grid");
    return grid?Array.from(grid.querySelectorAll(".galerie-thumb")):[btn];
  };

  const updateNav=()=>{
    if(prevBtn)prevBtn.disabled=index<=0;
    if(nextBtn)nextBtn.disabled=index>=slides.length-1;
    if(lbCounter){
      lbCounter.textContent=slides.length>1?(index+1)+" / "+slides.length:"";
    }
  };

  const showSlide=(i)=>{
    if(!slides.length)return;
    index=Math.max(0,Math.min(i,slides.length-1));
    const slide=slides[index];
    lbImg.src=slide.src;
    lbImg.alt=slide.alt;
    updateNav();
  };

  const openLb=(btn)=>{
    const pool=getSlidePool(btn);
    slides=pool.map(slideFromBtn).filter(s=>s.src);
    index=Math.max(0,pool.indexOf(btn));
    if(!slides.length)return;
    showSlide(index);
    lb.hidden=false;
    document.body.style.overflow="hidden";
    closeBtn&&closeBtn.focus();
  };

  const closeLb=()=>{
    lb.hidden=true;
    lbImg.removeAttribute("src");
    lbImg.alt="";
    slides=[];
    index=0;
    if(lbCounter)lbCounter.textContent="";
    document.body.style.overflow="";
  };

  const step=(delta)=>{
    if(lb.hidden||slides.length<2)return;
    showSlide(index+delta);
  };

  document.querySelectorAll(".galerie-thumb").forEach(btn=>{
    btn.addEventListener("click",()=>openLb(btn));
  });
  closeBtn&&closeBtn.addEventListener("click",closeLb);
  prevBtn&&prevBtn.addEventListener("click",e=>{e.stopPropagation();step(-1);});
  nextBtn&&nextBtn.addEventListener("click",e=>{e.stopPropagation();step(1);});
  lb.addEventListener("click",e=>{if(e.target===lb)closeLb();});
  document.addEventListener("keydown",e=>{
    if(lb.hidden)return;
    if(e.key==="Escape")closeLb();
    if(e.key==="ArrowRight"){e.preventDefault();step(1);}
    if(e.key==="ArrowLeft"){e.preventDefault();step(-1);}
  });
})();

document.querySelectorAll(".card:not(.galerie-card):not(.video-card),.hero-visual").forEach(el=>{
  el.addEventListener("mousemove",e=>{
    const r=el.getBoundingClientRect();
    const x=e.clientX-r.left;
    const y=e.clientY-r.top;
    const rx=((y/r.height)-.5)*-12;
    const ry=((x/r.width)-.5)*12;
    el.style.transform=`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-12px)`;
  });
  el.addEventListener("mouseleave",()=>{
    el.style.transform="";
  });
});
(function(){
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

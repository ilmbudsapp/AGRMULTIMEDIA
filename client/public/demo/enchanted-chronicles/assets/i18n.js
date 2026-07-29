(function(){
  const STORAGE_KEY="ec-lang";
  const BASE="/demo/enchanted-chronicles/locales";
  const DEFAULT_LANG="en";

  let lang=DEFAULT_LANG;
  let strings={};
  let ready=false;
  const queue=[];

  function getNested(obj,path){
    return path.split(".").reduce((o,k)=>o&&o[k],obj);
  }

  function interpolate(text,params){
    if(!params||!text)return text;
    return text.replace(/\{\{(\w+)\}\}/g,(_,k)=>params[k]!=null?params[k]:_);
  }

  function t(key,params){
    const val=getNested(strings,key);
    if(val==null)return key;
    return interpolate(String(val),params);
  }

  window.ecT=t;

  function parseParams(el){
    const raw=el.getAttribute("data-i18n-params");
    if(!raw)return null;
    try{return JSON.parse(raw)}catch(_){return null}
  }

  function applyTranslations(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      const params=parseParams(el);
      if(el.hasAttribute("data-i18n-html")){
        el.innerHTML=t(key,params);
      }else{
        el.textContent=t(key,params);
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(el=>{
      el.getAttribute("data-i18n-attr").split(";").forEach(pair=>{
        const [attr,key]=pair.split(":").map(s=>s.trim());
        if(attr&&key)el.setAttribute(attr,t(key));
      });
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      el.placeholder=t(el.getAttribute("data-i18n-placeholder"));
    });

    document.querySelectorAll("[data-i18n-num]").forEach(el=>{
      const n=el.getAttribute("data-i18n-num");
      el.textContent=t("elenco.storyNum",{n});
    });

    const titleEl=document.querySelector("[data-i18n-title]");
    if(titleEl)document.title=t(titleEl.getAttribute("data-i18n-title"));

    const descEl=document.querySelector("[data-i18n-description]");
    if(descEl){
      const meta=document.querySelector('meta[name="description"]');
      if(meta)meta.setAttribute("content",t(descEl.getAttribute("data-i18n-description")));
    }

    document.documentElement.lang=lang;

    document.querySelectorAll(".lang-switch__btn").forEach(btn=>{
      const active=btn.getAttribute("data-lang")===lang;
      btn.classList.toggle("is-active",active);
      btn.setAttribute("aria-pressed",active?"true":"false");
    });

    window.dispatchEvent(new CustomEvent("ec:languagechange",{detail:{lang}}));
  }

  async function loadLanguage(next){
    const res=await fetch(`${BASE}/${next}/translation.json`);
    if(!res.ok)throw new Error("locale load failed");
    strings=await res.json();
    lang=next;
    try{localStorage.setItem(STORAGE_KEY,lang)}catch(_){}
    applyTranslations();
    ready=true;
    queue.splice(0).forEach(fn=>fn());
  }

  async function setLanguage(next){
    if(next===lang&&ready)return;
    await loadLanguage(next);
  }

  function initSwitcher(){
    document.querySelectorAll(".lang-switch__btn").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const next=btn.getAttribute("data-lang");
        if(next&&next!==lang)setLanguage(next);
      });
    });
  }

  function whenReady(fn){
    if(ready)fn();
    else queue.push(fn);
  }

  window.ecI18n={t,setLanguage,getLanguage:()=>lang,whenReady};

  document.addEventListener("DOMContentLoaded",async()=>{
    initSwitcher();
    let initial=DEFAULT_LANG;
    try{
      const saved=localStorage.getItem(STORAGE_KEY);
      if(saved==="en"||saved==="de")initial=saved;
    }catch(_){}
    try{
      await loadLanguage(initial);
    }catch(_){
      await loadLanguage(DEFAULT_LANG);
    }
  });
})();

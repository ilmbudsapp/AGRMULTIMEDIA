(function(){
  const SUPPORTED_LANGS=["en","de","it"];
  const STORAGE_KEY="ec-lang";
  const BASE="/locales";
  const DEFAULT_LANG="en";

  let lang=DEFAULT_LANG;
  let strings={};
  let storyIndex=null;
  let currentStory=null;
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

  function storyT(key){
    if(!currentStory)return "";
    const val=currentStory[key];
    return val!=null?String(val):"";
  }

  function parseParams(el){
    const raw=el.getAttribute("data-i18n-params");
    if(!raw)return null;
    try{return JSON.parse(raw)}catch(_){return null}
  }

  function renderStoryBody(data){
    const body=document.querySelector("[data-story-body]");
    if(!body||!data||!data.blocks)return;
    body.innerHTML=data.blocks.map(b=>{
      if(b.type==="part")return `<p class="story-page__part">${b.text}</p>`;
      return `<p>${b.text}</p>`;
    }).join("");
  }

  function applyStoryFields(data){
    if(!data)return;
    document.querySelectorAll("[data-i18n-story]").forEach(el=>{
      const key=el.getAttribute("data-i18n-story");
      const val=data[key];
      if(val==null)return;
      if(el.tagName==="TITLE")document.title=val;
      else el.textContent=val;
    });
    document.querySelectorAll("[data-i18n-story-attr]").forEach(el=>{
      el.getAttribute("data-i18n-story-attr").split(";").forEach(pair=>{
        const [attr,key]=pair.split(":").map(s=>s.trim());
        if(attr&&key&&data[key]!=null)el.setAttribute(attr,data[key]);
      });
    });
    renderStoryBody(data);
  }

  async function loadStoryIndex(){
    const res=await fetch(`${BASE}/${lang}/stories/_index.json`);
    if(!res.ok){storyIndex=null;return}
    storyIndex=await res.json();
  }

  async function loadStory(slug){
    const res=await fetch(`${BASE}/${lang}/stories/${slug}.json`);
    if(!res.ok)return null;
    return res.json();
  }

  async function applyStoryCards(){
    if(!storyIndex)return;
    document.querySelectorAll("[data-i18n-story-card]").forEach(el=>{
      const slug=el.getAttribute("data-i18n-story-card");
      const field=el.getAttribute("data-i18n-field");
      const item=storyIndex[slug];
      if(item&&item[field]!=null)el.textContent=item[field];
    });
  }

  async function applyCurrentStory(){
    const article=document.querySelector("[data-story]");
    if(!article)return;
    const slug=article.getAttribute("data-story");
    currentStory=await loadStory(slug);
    applyStoryFields(currentStory);
  }

  function applyTranslations(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      const params=parseParams(el);
      if(el.hasAttribute("data-i18n-html"))el.innerHTML=t(key,params);
      else el.textContent=t(key,params);
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
      const cardSlug=el.closest(".elenco__card")?.getAttribute("href")?.match(/stories\/([^/.]+)/)?.[1];
      if(storyIndex&&cardSlug&&storyIndex[cardSlug]?.label){
        el.textContent=storyIndex[cardSlug].label;
      }else{
        el.textContent=t("elenco.storyNum",{n});
      }
    });

    const titleEl=document.querySelector("[data-i18n-title]");
    if(titleEl&&!document.querySelector("[data-story]")){
      document.title=t(titleEl.getAttribute("data-i18n-title"));
    }

    const descEl=document.querySelector("[data-i18n-description]");
    if(descEl&&!document.querySelector("[data-story]")){
      const meta=document.querySelector('meta[name="description"]');
      if(meta)meta.setAttribute("content",t(descEl.getAttribute("data-i18n-description")));
    }

    document.documentElement.lang=lang;

    document.querySelectorAll(".lang-switch__btn").forEach(btn=>{
      const active=btn.getAttribute("data-lang")===lang;
      btn.classList.toggle("is-active",active);
      btn.setAttribute("aria-pressed",active?"true":"false");
    });
  }

  async function applyAll(){
    applyTranslations();
    await loadStoryIndex();
    await applyStoryCards();
    await applyCurrentStory();
    window.dispatchEvent(new CustomEvent("ec:languagechange",{detail:{lang}}));
  }

  async function loadLanguage(next){
    const res=await fetch(`${BASE}/${next}/translation.json`);
    if(!res.ok)throw new Error("locale load failed");
    strings=await res.json();
    lang=next;
    try{localStorage.setItem(STORAGE_KEY,lang)}catch(_){}
    await applyAll();
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
      if(SUPPORTED_LANGS.includes(saved))initial=saved;
    }catch(_){}
    try{
      await loadLanguage(initial);
    }catch(_){
      await loadLanguage(DEFAULT_LANG);
    }
  });
})();

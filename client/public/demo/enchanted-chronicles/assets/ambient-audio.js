(function(){
  if(window.__ecAmbientInit)return;
  window.__ecAmbientInit=true;

  const AUDIO_SRC="/demo/enchanted-chronicles/assets/audio/medieval-ambient.wav";
  const VOLUME=0.82;
  const FADE_MS=800;

  const btn=document.getElementById("ambient-toggle");
  if(!btn)return;

  const audio=new Audio(AUDIO_SRC);
  audio.loop=true;
  audio.preload="auto";
  audio.volume=0;

  let playing=false;
  let fadeTimer=null;

  function setUI(on){
    btn.classList.toggle("is-playing",on);
    btn.setAttribute("aria-pressed",on?"true":"false");
    btn.setAttribute("aria-label",on?"Mute background music":"Play background music");
    const label=btn.querySelector(".ambient-toggle__label");
    if(label)label.textContent=on?"Music On":"Play Music";
  }

  function fadeTo(target, done){
    if(fadeTimer)clearInterval(fadeTimer);
    const start=audio.volume;
    const steps=16;
    let i=0;
    fadeTimer=setInterval(()=>{
      i++;
      audio.volume=start+(target-start)*(i/steps);
      if(i>=steps){
        clearInterval(fadeTimer);
        fadeTimer=null;
        audio.volume=target;
        if(done)done();
      }
    },FADE_MS/steps);
  }

  async function play(){
    try{
      await audio.play();
      playing=true;
      fadeTo(VOLUME);
      setUI(true);
      try{sessionStorage.setItem("ec-ambient","1")}catch(_){}
    }catch(err){
      console.warn("Ambient play blocked:",err);
      btn.classList.add("ambient-toggle--blocked");
      const label=btn.querySelector(".ambient-toggle__label");
      if(label)label.textContent="Tap to Play";
    }
  }

  function stop(){
    playing=false;
    fadeTo(0,()=>{
      audio.pause();
      audio.currentTime=0;
    });
    setUI(false);
    try{sessionStorage.setItem("ec-ambient","0")}catch(_){}
  }

  btn.addEventListener("click",()=>{
    btn.classList.remove("ambient-toggle--blocked");
    playing?stop():play();
  });

  document.addEventListener("visibilitychange",()=>{
    if(!playing)return;
    if(document.hidden)audio.pause();
    else audio.play().catch(()=>{});
  });
})();

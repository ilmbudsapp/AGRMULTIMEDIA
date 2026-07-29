(function(){
  if(window.__ecAmbientInit)return;
  window.__ecAmbientInit=true;

  const path=window.location.pathname.replace(/\/index\.html$/i,"/");
  const isHome=path.endsWith("/enchanted-chronicles")||path.endsWith("/enchanted-chronicles/");
  if(!isHome)return;

  const AUDIO_SRC="/demo/enchanted-chronicles/assets/audio/lord-of-the-land.mp3";
  const TARGET_VOL=0.5;
  const FADE_MS=1200;

  const audio=new Audio(AUDIO_SRC);
  audio.loop=true;
  audio.preload="auto";
  audio.volume=0;

  let fadeTimer=null;
  let started=false;

  function fadeTo(target){
    if(fadeTimer)clearInterval(fadeTimer);
    const start=audio.volume;
    const steps=20;
    let i=0;
    fadeTimer=setInterval(()=>{
      i++;
      audio.volume=start+(target-start)*(i/steps);
      if(i>=steps){
        clearInterval(fadeTimer);
        fadeTimer=null;
        audio.volume=target;
      }
    },FADE_MS/steps);
  }

  async function startMusic(){
    if(started&& !audio.paused)return;
    try{
      await audio.play();
      started=true;
      fadeTo(TARGET_VOL);
    }catch(_){}
  }

  function stopMusic(){
    if(!started)return;
    fadeTo(0);
    setTimeout(()=>{
      audio.pause();
      audio.currentTime=0;
      started=false;
    },FADE_MS);
  }

  startMusic();

  document.addEventListener("click",startMusic,{once:true,passive:true});
  document.addEventListener("touchstart",startMusic,{once:true,passive:true});
  document.addEventListener("keydown",startMusic,{once:true});

  document.addEventListener("visibilitychange",()=>{
    if(document.hidden)audio.pause();
    else if(started)audio.play().catch(()=>{});
  });

  window.addEventListener("pagehide",stopMusic);
})();

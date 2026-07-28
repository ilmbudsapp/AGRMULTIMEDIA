(function(){
  if(window.__ecAmbientInit)return;
  window.__ecAmbientInit=true;

  const LOOP_SEC=150;
  const MASTER_VOL=0.38;
  const FADE_SEC=2.4;

  /* Medieval A-minor / Dorian palette — open fifths, minor thirds */
  const DRONES=[55,82.41,110,130.81,164.81];
  const CHOIR=[220,261.63,329.63,392,440];
  const CHANT=[146.83,174.61,196];

  function createReverbIR(ctx,duration,decay){
    const rate=ctx.sampleRate;
    const len=Math.floor(rate*duration);
    const ir=ctx.createBuffer(2,len,rate);
    for(let c=0;c<2;c++){
      const ch=ir.getChannelData(c);
      for(let i=0;i<len;i++){
        ch[i]=(Math.random()*2-1)*Math.pow(1-i/len,decay);
      }
    }
    return ir;
  }

  function createNoiseBuffer(ctx,duration){
    const rate=ctx.sampleRate;
    const len=Math.floor(rate*duration);
    const buf=ctx.createBuffer(1,len,rate);
    const d=buf.getChannelData(0);
    let last=0;
    for(let i=0;i<len;i++){
      const w=Math.random()*2-1;
      last=(last+0.02*w)/1.02;
      d[i]=last;
    }
    return buf;
  }

  class MedievalAmbient{
    constructor(){
      this.ctx=null;
      this.master=null;
      this.reverb=null;
      this.dry=null;
      this.playing=false;
      this.nodes=[];
      this.timers=[];
      this.loopTimer=null;
      this.fadeGain=null;
    }

    async ensureContext(){
      if(this.ctx)return;
      const Ctx=window.AudioContext||window.webkitAudioContext;
      this.ctx=new Ctx();

      this.fadeGain=this.ctx.createGain();
      this.fadeGain.gain.value=0;

      this.master=this.ctx.createGain();
      this.master.gain.value=MASTER_VOL;

      this.dry=this.ctx.createGain();
      this.dry.gain.value=0.55;

      this.reverb=this.ctx.createConvolver();
      this.reverb.buffer=createReverbIR(this.ctx,5.5,2.8);
      const revGain=this.ctx.createGain();
      revGain.gain.value=0.85;

      this.fadeGain.connect(this.master);
      this.master.connect(this.dry);
      this.master.connect(this.reverb);
      this.reverb.connect(revGain);
      revGain.connect(this.ctx.destination);
      this.dry.connect(this.ctx.destination);

      this._buildDrones();
      this._buildChoir();
      this._buildChant();
      this._buildWind();
      this._buildShimmer();
      this._buildRumble();
    }

    _track(node){
      this.nodes.push(node);
      return node;
    }

    _buildDrones(){
      const t=this.ctx.currentTime;
      DRONES.forEach((freq,i)=>{
        const osc=this.ctx.createOscillator();
        osc.type=i<2?"sine":"triangle";
        osc.frequency.value=freq;
        const g=this.ctx.createGain();
        g.gain.value=0.045+(i===0?0.025:0);
        const lfo=this.ctx.createOscillator();
        lfo.frequency.value=0.018+i*0.006;
        const lfoG=this.ctx.createGain();
        lfoG.gain.value=0.018;
        lfo.connect(lfoG).connect(g.gain);
        osc.connect(g).connect(this.fadeGain);
        osc.start(t);
        lfo.start(t);
        this._track(osc);this._track(lfo);

        /* Harmonic overtones */
        [2,3].forEach((m,j)=>{
          const h=this.ctx.createOscillator();
          h.type="sine";
          h.frequency.value=freq*m;
          const hg=this.ctx.createGain();
          hg.gain.value=0.004/(j+1);
          h.connect(hg).connect(this.fadeGain);
          h.start(t);
          this._track(h);
        });
      });
    }

    _buildChoir(){
      const t=this.ctx.currentTime;
      const bus=this.ctx.createGain();
      bus.gain.value=0.11;
      const lp=this.ctx.createBiquadFilter();
      lp.type="lowpass";
      lp.frequency.value=1400;
      lp.Q.value=0.4;
      bus.connect(lp).connect(this.fadeGain);

      CHOIR.forEach((freq,i)=>{
        [-0.004,0,0.004].forEach(detune=>{
          const osc=this.ctx.createOscillator();
          osc.type="triangle";
          osc.frequency.value=freq*(1+detune);
          const g=this.ctx.createGain();
          g.gain.value=0.012;
          const lfo=this.ctx.createOscillator();
          lfo.frequency.value=0.012+i*0.003;
          const lfoG=this.ctx.createGain();
          lfoG.gain.value=0.008;
          lfo.connect(lfoG).connect(g.gain);
          osc.connect(g).connect(bus);
          osc.start(t);
          lfo.start(t);
          this._track(osc);this._track(lfo);
        });
      });
    }

    _buildChant(){
      const t=this.ctx.currentTime;
      const bus=this.ctx.createGain();
      bus.gain.value=0;
      const bp=this.ctx.createBiquadFilter();
      bp.type="bandpass";
      bp.frequency.value=280;
      bp.Q.value=1.2;
      const lp=this.ctx.createBiquadFilter();
      lp.type="lowpass";
      lp.frequency.value=900;
      bus.connect(bp).connect(lp).connect(this.fadeGain);

      CHANT.forEach((freq,i)=>{
        const osc=this.ctx.createOscillator();
        osc.type="sawtooth";
        osc.frequency.value=freq;
        const g=this.ctx.createGain();
        g.gain.value=0.008;
        osc.connect(g).connect(bus);
        osc.start(t);
        this._track(osc);
      });

      /* Slow chant swell — 40s cycle */
      const swell=this.ctx.createOscillator();
      swell.frequency.value=1/40;
      const swellG=this.ctx.createGain();
      swellG.gain.value=0.09;
      swell.connect(swellG).connect(bus.gain);
      swell.start(t);
      this._track(swell);
    }

    _buildWind(){
      const src=this.ctx.createBufferSource();
      src.buffer=createNoiseBuffer(this.ctx,12);
      src.loop=true;
      const bp=this.ctx.createBiquadFilter();
      bp.type="bandpass";
      bp.frequency.value=420;
      bp.Q.value=0.25;
      const g=this.ctx.createGain();
      g.gain.value=0.055;
      const lfo=this.ctx.createOscillator();
      lfo.frequency.value=0.05;
      const lfoG=this.ctx.createGain();
      lfoG.gain.value=0.025;
      lfo.connect(lfoG).connect(g.gain);
      src.connect(bp).connect(g).connect(this.fadeGain);
      src.start();
      lfo.start();
      this._track(src);this._track(lfo);
    }

    _buildShimmer(){
      const freqs=[3520,5280,7040];
      freqs.forEach((f,i)=>{
        const osc=this.ctx.createOscillator();
        osc.type="sine";
        osc.frequency.value=f;
        const g=this.ctx.createGain();
        g.gain.value=0.0025;
        const lfo=this.ctx.createOscillator();
        lfo.frequency.value=0.08+i*0.02;
        const lfoG=this.ctx.createGain();
        lfoG.gain.value=0.002;
        lfo.connect(lfoG).connect(g.gain);
        osc.connect(g).connect(this.fadeGain);
        osc.start();
        lfo.start();
        this._track(osc);this._track(lfo);
      });
    }

    _buildRumble(){
      const src=this.ctx.createBufferSource();
      src.buffer=createNoiseBuffer(this.ctx,8);
      src.loop=true;
      const lp=this.ctx.createBiquadFilter();
      lp.type="lowpass";
      lp.frequency.value=90;
      const g=this.ctx.createGain();
      g.gain.value=0.07;
      src.connect(lp).connect(g).connect(this.fadeGain);
      src.start();
      this._track(src);
    }

    _hitDrum(time){
      const osc=this.ctx.createOscillator();
      osc.type="sine";
      osc.frequency.setValueAtTime(58,time);
      osc.frequency.exponentialRampToValueAtTime(28,time+0.6);
      const g=this.ctx.createGain();
      g.gain.setValueAtTime(0.0001,time);
      g.gain.exponentialRampToValueAtTime(0.35,time+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001,time+3.2);
      osc.connect(g).connect(this.fadeGain);
      osc.start(time);
      osc.stop(time+3.3);
    }

    _hitMetal(time){
      const osc=this.ctx.createOscillator();
      osc.type="sine";
      osc.frequency.setValueAtTime(880,time);
      osc.frequency.exponentialRampToValueAtTime(440,time+1.8);
      const g=this.ctx.createGain();
      g.gain.setValueAtTime(0.0001,time);
      g.gain.exponentialRampToValueAtTime(0.04,time+0.01);
      g.gain.exponentialRampToValueAtTime(0.0001,time+4);
      const delay=this.ctx.createDelay(3);
      delay.delayTime.value=0.45;
      const fb=this.ctx.createGain();
      fb.gain.value=0.35;
      delay.connect(fb).connect(delay);
      osc.connect(g);
      g.connect(delay);
      g.connect(this.fadeGain);
      delay.connect(this.fadeGain);
      osc.start(time);
      osc.stop(time+4.1);
    }

    _whisper(time){
      const src=this.ctx.createBufferSource();
      src.buffer=createNoiseBuffer(this.ctx,0.6);
      const bp=this.ctx.createBiquadFilter();
      bp.type="bandpass";
      bp.frequency.value=1200+Math.random()*800;
      bp.Q.value=2;
      const g=this.ctx.createGain();
      g.gain.setValueAtTime(0.0001,time);
      g.gain.linearRampToValueAtTime(0.022,time+0.4);
      g.gain.linearRampToValueAtTime(0.0001,time+2.2);
      src.connect(bp).connect(g).connect(this.fadeGain);
      src.start(time);
      src.stop(time+2.3);
    }

    _scheduleLoop(){
      const pattern=[
        {t:0,type:"drum"},
        {t:18,type:"metal"},
        {t:32,type:"whisper"},
        {t:44,type:"drum"},
        {t:58,type:"whisper"},
        {t:72,type:"metal"},
        {t:86,type:"drum"},
        {t:102,type:"whisper"},
        {t:118,type:"metal"},
        {t:134,type:"drum"},
        {t:148,type:"whisper"}
      ];

      const run=()=>{
        if(!this.playing||!this.ctx)return;
        const base=this.ctx.currentTime+0.05;
        pattern.forEach(ev=>{
          const when=base+ev.t;
          if(ev.type==="drum")this._hitDrum(when);
          else if(ev.type==="metal")this._hitMetal(when);
          else this._whisper(when);
        });
        this.loopTimer=setTimeout(run,LOOP_SEC*1000);
        this.timers.push(this.loopTimer);
      };

      run();
    }

    async start(){
      await this.ensureContext();
      if(this.ctx.state==="suspended")await this.ctx.resume();
      this.playing=true;
      const t=this.ctx.currentTime;
      this.fadeGain.gain.cancelScheduledValues(t);
      this.fadeGain.gain.setValueAtTime(this.fadeGain.gain.value,t);
      this.fadeGain.gain.linearRampToValueAtTime(1,t+FADE_SEC);
      if(!this.loopTimer)this._scheduleLoop();
    }

    stop(){
      if(!this.ctx)return;
      this.playing=false;
      const t=this.ctx.currentTime;
      this.fadeGain.gain.cancelScheduledValues(t);
      this.fadeGain.gain.setValueAtTime(this.fadeGain.gain.value,t);
      this.fadeGain.gain.linearRampToValueAtTime(0,t+FADE_SEC);
      this.timers.forEach(clearTimeout);
      this.timers=[];
      if(this.loopTimer){clearTimeout(this.loopTimer);this.loopTimer=null}
    }

    async toggle(){
      if(this.playing){this.stop();return false}
      await this.start();
      return true;
    }
  }

  const ambient=new MedievalAmbient();
  const btn=document.getElementById("ambient-toggle");

  if(!btn)return;

  function setUI(on){
    btn.classList.toggle("is-playing",on);
    btn.setAttribute("aria-pressed",on?"true":"false");
    btn.setAttribute("aria-label",on?"Mute ambient music":"Play ambient music");
    const label=btn.querySelector(".ambient-toggle__label");
    if(label)label.textContent=on?"Music On":"Ambient";
  }

  btn.addEventListener("click",async()=>{
    const on=await ambient.toggle();
    setUI(on);
    try{sessionStorage.setItem("ec-ambient",on?"1":"0")}catch(_){}
  });

  document.addEventListener("visibilitychange",()=>{
    if(!ambient.ctx)return;
    if(document.hidden&&ambient.playing)ambient.ctx.suspend();
    else if(!document.hidden&&ambient.playing)ambient.ctx.resume();
  });
})();

/**
 * Royal Rajasthani Palace Ambient Audio Engine
 * Uses Web Audio API to synthesize a soothing, authentic Indian classical Tanpura drone
 * & melodic raga chords (Raga Yaman / Bhairavi scale in D#), with support for external audio file.
 */

class RoyalAudioEngine {
  constructor() {
    this.isPlaying = false;
    this.audioCtx = null;
    this.droneGain = null;
    this.melodyTimer = null;
    this.bgAudio = null;
    this.hasExternalAudio = false;

    // Check if external audio is provided
    this.initExternalAudio();
  }

  initExternalAudio() {
    this.bgAudio = new Audio();
    this.bgAudio.loop = true;
    this.bgAudio.src = "assets/royal_music.mp3";
    this.bgAudio.addEventListener("canplaythrough", () => {
      this.hasExternalAudio = true;
    });
    this.bgAudio.addEventListener("error", () => {
      this.hasExternalAudio = false;
    });
  }

  initWebAudio() {
    if (this.audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();

    // Master Compressor & Reverb-like filter
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);

    this.filter = this.audioCtx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.setValueAtTime(1400, this.audioCtx.currentTime);

    this.masterGain.connect(this.filter);
    this.filter.connect(this.audioCtx.destination);
  }

  playTempleBell() {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 1.8);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 2.6);
  }

  playPluck(freq, delay = 0, duration = 1.4) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime + delay;

    const osc = this.audioCtx.createOscillator();
    const subOsc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);

    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(freq * 2.01, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    subOsc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration);
    subOsc.stop(now + duration);
  }

  startDrone() {
    if (!this.audioCtx) return;
    // Authentic Tanpura base notes: Pa (A2 ~ 110Hz), Sa (D3 ~ 146.8Hz), Sa' (D4 ~ 293.6Hz)
    const baseFreqs = [110, 146.83, 147.2, 220, 293.66];
    this.droneNodes = [];

    baseFreqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      
      osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Gentle LFO detuning for authentic acoustic resonance
      const lfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      lfo.frequency.value = 0.2 + idx * 0.08;
      lfoGain.gain.value = 0.8;
      lfo.connect(osc.detune);
      lfo.start();

      gain.gain.setValueAtTime(0.015 / (idx + 1), this.audioCtx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.droneNodes.push({ osc, gain, lfo });
    });

    // Indian Raga Yaman notes in D: D, E, F#, G#, A, B, C#
    const ragaScale = [
      146.83, 164.81, 185.00, 207.65, 220.00, 246.94, 277.18,
      293.66, 329.63, 369.99, 415.30, 440.00, 493.88, 554.37, 587.33
    ];

    let step = 0;
    const melodyLoop = () => {
      if (!this.isPlaying) return;
      const noteIdx = Math.floor(Math.random() * ragaScale.length);
      const noteFreq = ragaScale[noteIdx];
      this.playPluck(noteFreq, 0, 1.8);

      // Occasional gentle grace note (Meend / Alankar)
      if (Math.random() > 0.4) {
        const nextFreq = ragaScale[(noteIdx + 1) % ragaScale.length];
        this.playPluck(nextFreq, 0.4, 2.0);
      }

      const nextDelay = 1800 + Math.random() * 2500;
      this.melodyTimer = setTimeout(melodyLoop, nextDelay);
    };

    this.melodyTimer = setTimeout(melodyLoop, 800);
  }

  stopDrone() {
    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
    if (this.droneNodes) {
      this.droneNodes.forEach(node => {
        try {
          node.osc.stop();
          node.lfo.stop();
        } catch (e) {}
      });
      this.droneNodes = [];
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    if (this.hasExternalAudio && this.bgAudio) {
      this.bgAudio.play().then(() => {
        this.isPlaying = true;
      }).catch(() => {
        this.playSynthesized();
      });
    } else {
      this.playSynthesized();
    }
    this.isPlaying = true;
    this.updateUI();
  }

  playSynthesized() {
    this.initWebAudio();
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.4, now + 1.5);

    this.stopDrone();
    this.startDrone();
  }

  pause() {
    if (this.hasExternalAudio && this.bgAudio) {
      this.bgAudio.pause();
    }
    if (this.audioCtx && this.masterGain) {
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => {
        this.stopDrone();
      }, 900);
    }
    this.isPlaying = false;
    this.updateUI();
  }

  updateUI() {
    const musicBtn = document.getElementById("music-toggle-btn");
    const musicBadge = document.getElementById("music-label");
    if (musicBtn) {
      if (this.isPlaying) {
        musicBtn.classList.add("playing");
        musicBtn.setAttribute("aria-label", "Pause Music");
      } else {
        musicBtn.classList.remove("playing");
        musicBtn.setAttribute("aria-label", "Play Music");
      }
    }
    if (musicBadge) {
      const currentLang = document.documentElement.lang || "en";
      const t = translations[currentLang] || translations.en;
      musicBadge.textContent = this.isPlaying ? t.musicPause : t.musicPlay;
    }
  }
}

// Global instance
window.royalAudio = new RoyalAudioEngine();

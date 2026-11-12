// Motor de Áudio e Narração - Craques da Leitura FC
// Utiliza Web Audio API para efeitos de estádio e Web Speech API para narração em português brasileiro

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.speechRate = 0.85; // Velocidade ligeiramente pausada para facilitar a consciência fonológica
    this.speechPitch = 1.05;
    this.speechVoice = null;
    this.isMuted = false;

    // Inicialização sob demanda (requisito dos navegadores para interação do usuário)
    this.initSpeech();
  }

  getAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  initSpeech() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Priorizar vozes em Português do Brasil de boa qualidade (ex: Google português, Luciana, Felipe, etc)
        this.speechVoice = voices.find(v => v.lang === 'pt-BR' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Brazil')))
          || voices.find(v => v.lang.startsWith('pt'))
          || null;
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  setSpeechRate(rate) {
    this.speechRate = Math.max(0.5, Math.min(1.5, rate));
  }

  // Narração de texto, palavras ou fonemas
  speak(text, priorityRate = null) {
    if (this.isMuted || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Evita sobreposição de falas

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = priorityRate || this.speechRate;
    utterance.pitch = this.speechPitch;

    if (this.speechVoice) {
      utterance.voice = this.speechVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  // Falar sílaba por sílaba com pausa marcada para consciência fonológica
  speakSyllables(syllablesArray) {
    if (this.isMuted) return;
    const textWithPauses = syllablesArray.join(' ... ');
    this.speak(textWithPauses, 0.75);
  }

  // ================= EFEITOS DE ESTÁDIO (WEB AUDIO API) =================

  // 1. Chute na bola (grave, encorpado e rápido)
  playKick() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.12);

    gain.gain.setValueAtTime(1.0, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  // 2. Apito do Árbitro (dois silvos agudos clássicos: bi-biiiip!)
  playWhistle() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const playPip = (start, duration, freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      // Pequeno vibrato no apito
      osc.frequency.linearRampToValueAtTime(freq + 40, start + duration * 0.5);
      osc.frequency.linearRampToValueAtTime(freq, start + duration);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.4, start + 0.02);
      gain.gain.linearRampToValueAtTime(0.3, start + duration - 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + duration);
    };

    const now = ctx.currentTime;
    playPip(now, 0.12, 2800);
    playPip(now + 0.16, 0.28, 2900);
  }

  // 3. Bola na Trave! ("Clang" metálico realista)
  playCrossbar() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Frequências ressonantes de uma barra de ferro oca de trave de futebol
    const frequencies = [520, 1140, 1850, 2400];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const amp = 0.3 / (idx + 1);
      gain.gain.setValueAtTime(amp, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8 + idx * 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    });
  }

  // 4. GOL! (Rugido da torcida + explosão de alegria)
  playGoalCheer() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    // Gerador de ruído rosa/estádio
    const bufferSize = ctx.sampleRate * 2.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99 * b0 + white * 0.05;
      b1 = 0.95 * b1 + white * 0.08;
      b2 = 0.85 * b2 + white * 0.15;
      data[i] = (b0 + b1 + b2) * 0.4;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filtro para dar corpo à torcida
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(650, ctx.currentTime);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    const gain = ctx.createGain();
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0.65, now + 0.3);
    gain.gain.linearRampToValueAtTime(0.4, now + 1.8);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 2.5);

    // Efeito de corneta comemorativa
    this.playCelebrationFanfare();
  }

  // 5. Fanfarra de Vitória / Troféu
  playCelebrationFanfare() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const notes = [
      { f: 523.25, t: 0.0, d: 0.15 }, // C5
      { f: 659.25, t: 0.15, d: 0.15 }, // E5
      { f: 783.99, t: 0.30, d: 0.20 }, // G5
      { f: 1046.50, t: 0.50, d: 0.50 } // C6
    ];

    const now = ctx.currentTime;
    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);

      gain.gain.setValueAtTime(0, now + n.t);
      gain.gain.linearRampToValueAtTime(0.3, now + n.t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.t);
      osc.stop(now + n.t + n.d + 0.05);
    });
  }

  // 6. Dica ativada / VAR / Prancheta do Técnico
  playTacticalHint() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now); // A4
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25); // A5

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  }
}

export const sound = new AudioEngine();

# coding: utf-8
import re

with open('/home/brunotulio/Downloads/craques-da-leitura/bundle.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Enhanced AudioEngine with garbage collection protection, resume() loop, and universal voice matcher
new_audio_engine = """  // ================= MOTOR DE ÁUDIO E VOZ BLINDADO =================
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.speechRate = 0.88;
      this.speechPitch = 1.05;
      this.speechVoice = null;
      this.isMuted = false;
      this.audioUnlocked = false;
      this.activeUtterances = []; // Protege contra Garbage Collector do Chrome

      try {
        this.initSpeech();
      } catch (e) {
        console.warn('Speech init error:', e);
      }
    }

    unlockAudio() {
      this.audioUnlocked = true;
      try {
        const ctx = this.getAudioContext();
        if (ctx && ctx.state === 'suspended') {
          ctx.resume();
        }
        if ('speechSynthesis' in window) {
          window.speechSynthesis.resume();
        }
      } catch (e) {
        console.warn('Audio unlock error:', e);
      }
    }

    getAudioContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    }

    initSpeech() {
      if (!('speechSynthesis' in window)) return;

      const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return;

        // Procura voz brasileira (Google, natural ou padrão)
        this.speechVoice = voices.find(v => (v.lang === 'pt-BR' || v.lang === 'pt_BR') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Brazil')))
          || voices.find(v => v.lang === 'pt-BR' || v.lang === 'pt_BR')
          || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('pt'))
          || voices.find(v => v.name && v.name.toLowerCase().includes('portuguese'))
          || voices[0];

        console.log('Voz selecionada:', this.speechVoice ? `${this.speechVoice.name} (${this.speechVoice.lang})` : 'Nenhuma');
      };

      pickVoice();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = pickVoice;
      }
    }

    setSpeechRate(rate) {
      this.speechRate = Math.max(0.5, Math.min(1.5, rate));
    }

    speak(text, priorityRate = null) {
      if (this.isMuted || !('speechSynthesis' in window)) return;
      if (!text || typeof text !== 'string') return;

      try {
        // Desbloquear se estiver pausado no Chrome
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        // Criar Utterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = priorityRate || this.speechRate;
        utterance.pitch = this.speechPitch;

        // Se a voz ainda não foi atribuída, tenta pegar agora
        if (!this.speechVoice && window.speechSynthesis.getVoices().length > 0) {
          this.initSpeech();
        }
        if (this.speechVoice) {
          utterance.voice = this.speechVoice;
        }

        // Prevenção do bug do Garbage Collector no Chrome: guardar referência global
        this.activeUtterances.push(utterance);
        utterance.onend = () => {
          const idx = this.activeUtterances.indexOf(utterance);
          if (idx !== -1) this.activeUtterances.splice(idx, 1);
        };
        utterance.onerror = (e) => {
          console.warn('Erro ao reproduzir voz:', e);
          const idx = this.activeUtterances.indexOf(utterance);
          if (idx !== -1) this.activeUtterances.splice(idx, 1);
        };

        // Pequeno intervalo para o Chrome não engolir o áudio
        setTimeout(() => {
          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          window.speechSynthesis.speak(utterance);
        }, 40);

      } catch (err) {
        console.error('Falha no SpeechSynthesis:', err);
      }
    }

    speakSyllables(syllablesArray) {
      if (this.isMuted) return;
      const textWithPauses = syllablesArray.join(' ... ');
      this.speak(textWithPauses, 0.72);
    }"""

# Replace AudioEngine definition
old_engine_pattern = r'  class AudioEngine \{[\s\S]*?    playKick\(\) \{'
js = re.sub(old_engine_pattern, new_audio_engine + "\n\n    playKick() {", js)

# Also unlock audio on ANY user click anywhere on the page
unlock_listener = """  // Desbloquear áudio e voz no primeiro clique do usuário
  document.addEventListener('click', () => {
    sound.unlockAudio();
  }, { once: false });

  document.addEventListener('touchstart', () => {
    sound.unlockAudio();
  }, { once: false });
"""

js += "\n" + unlock_listener

with open('/home/brunotulio/Downloads/craques-da-leitura/bundle.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Updated bundle.js with bulletproof AudioEngine and click unlock listener!")

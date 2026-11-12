#!/usr/bin/env python3
# coding: utf-8

import os
import sys
import json
import re

sys.path.insert(0, '/home/brunotulio/Downloads/craques-da-leitura')
from scratch.all_words import WORDS_DATABASE
from scratch.words_data import PHONEMES_INFO, CARDS_DATABASE

ROOT_DIR = '/home/brunotulio/Downloads/craques-da-leitura'

# 1. Carregar CSS
with open(os.path.join(ROOT_DIR, 'src/styles/dyslexia.css'), 'r', encoding='utf-8') as f:
    base_css = f.read()

extra_css = """
/* Estilos da Arena Interativa e Treinador Falante */
#match-canvas-container {
  position: relative;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
  border: 4px solid #0f172a;
  background: #14532d;
}

#soccer-canvas, #soccer-canvas-match {
  width: 100%;
  height: auto;
  display: block;
  touch-action: none;
}

/* Balão do Treinador Falante */
.coach-bubble {
  background: #ffffff;
  border: 3px solid #f59e0b;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
}

.coach-bubble::after {
  content: '';
  position: absolute;
  left: 35px;
  bottom: -14px;
  border-width: 14px 14px 0;
  border-style: solid;
  border-color: #ffffff transparent;
  display: block;
  width: 0;
}

.coach-bubble::before {
  content: '';
  position: absolute;
  left: 33px;
  bottom: -18px;
  border-width: 16px 16px 0;
  border-style: solid;
  border-color: #f59e0b transparent;
  display: block;
  width: 0;
}

@keyframes coachTalk {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08) rotate(-3deg); }
}

.coach-talking {
  animation: coachTalk 0.5s infinite ease-in-out;
}

/* Régua de Leitura Dinâmica para Dislexia */
.reading-ruler-guide {
  position: relative;
  border-left: 6px solid #f59e0b;
  background: linear-gradient(90deg, rgba(254, 243, 199, 0.9) 0%, rgba(254, 243, 199, 0.45) 100%);
  border-radius: 12px;
  padding: 8px 14px;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.25);
}

/* Cartas do Álbum dos Craques */
.card-legendary {
  background: radial-gradient(circle at 50% 0%, #fef08a 0%, #ca8a04 40%, #713f12 100%);
  border: 3px solid #fde047;
  box-shadow: 0 12px 30px -5px rgba(234, 179, 8, 0.6);
}

.card-rare {
  background: radial-gradient(circle at 50% 0%, #93c5fd 0%, #2563eb 50%, #1e3a8a 100%);
  border: 3px solid #60a5fa;
  box-shadow: 0 12px 30px -5px rgba(37, 99, 235, 0.5);
}

.card-common {
  background: radial-gradient(circle at 50% 0%, #6ee7b7 0%, #059669 50%, #064e3b 100%);
  border: 3px solid #34d399;
  box-shadow: 0 12px 25px -5px rgba(5, 150, 105, 0.4);
}

.card-locked {
  background: #1e293b;
  border: 2px dashed #475569;
  opacity: 0.7;
}

@keyframes packShake {
  0%, 100% { transform: rotate(0deg) scale(1); }
  20% { transform: rotate(-6deg) scale(1.05); }
  40% { transform: rotate(6deg) scale(1.08); }
  60% { transform: rotate(-6deg) scale(1.1); }
  80% { transform: rotate(6deg) scale(1.12); }
}

.pack-anim {
  animation: packShake 0.6s infinite ease-in-out;
}

@keyframes cardPop {
  0% { transform: scale(0.3) rotate(-15deg); opacity: 0; }
  70% { transform: scale(1.1) rotate(4deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

.card-reveal-anim {
  animation: cardPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Tabelinha de Sílabas (Lance 4) */
.syllable-node {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.2);
}

.syllable-node:hover {
  transform: translateY(-3px) scale(1.05);
}

.syllable-node.active-pass {
  background: linear-gradient(135deg, #10b981 0%, #047857 100%) !important;
  color: #ffffff !important;
  border-color: #34d399 !important;
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.6) !important;
}
"""

full_css = base_css + "\n" + extra_css

# Carregar áudio e canvas
with open(os.path.join(ROOT_DIR, 'bundle.js'), 'r', encoding='utf-8') as f:
    orig_bundle = f.read()

audio_engine_match = re.search(r'(// =+ MOTOR DE ÁUDIO[\s\S]*?)(// =+ ESTADO DO JOGO =+)', orig_bundle)
audio_section = audio_engine_match.group(1)

canvas_match = re.search(r'(// =+ SIMULADOR VISUAL DO JOGO DE FUTEBOL \(CANVAS 2D\)[\s\S]*?)(// =+ RENDERIZAÇÃO =+)', orig_bundle)
canvas_section = canvas_match.group(1)

words_json = json.dumps(WORDS_DATABASE, ensure_ascii=False, indent=2)
phonemes_json = json.dumps(PHONEMES_INFO, ensure_ascii=False, indent=2)
cards_json = json.dumps(CARDS_DATABASE, ensure_ascii=False, indent=2)

js_code = f"""// Craques da Leitura FC - Standalone Bundle Turbo (100% Offline & File://)

(function() {{
  'use strict';

  // ================= BANCO DE DADOS FONOLÓGICO EXPANDIDO =================
  const PHONEMES_INFO = {phonemes_json};

  const WORDS_DATABASE = {words_json};

  const CARDS_DATABASE = {cards_json};

  const CHAMPIONSHIPS = [
    {{
      id: 'copa_bairro',
      name: 'Copa do Bairro',
      stadium: 'Estádio da Várzea Alegre',
      difficulty: 'Iniciante',
      badgeIcon: '🥉',
      targetScore: 3,
      description: 'Comece sua carreira brilhando nos campos do bairro! Foco em palavras de 2 sílabas.',
      opponent: 'União da Quebrada FC',
      unlockThreshold: 0
    }},
    {{
      id: 'campeonato_estadual',
      name: 'Campeonato Estadual',
      stadium: 'Arena das Estrelas',
      difficulty: 'Intermediário',
      badgeIcon: '🥈',
      targetScore: 4,
      description: 'Os melhores clubes do estado estão aqui. Foco em diferenciação P vs T e encontros com R.',
      opponent: 'Atlético Serrano',
      unlockThreshold: 3
    }},
    {{
      id: 'copa_nacional',
      name: 'Copa do Brasil dos Craques',
      stadium: 'Super Maracanã Dourado',
      difficulty: 'Avançado',
      badgeIcon: '🥇',
      targetScore: 5,
      description: 'Jogos de alta intensidade! Desafios de montar frases completas e tabelinhas de sílabas.',
      opponent: 'Nacional Esporte Clube',
      unlockThreshold: 7
    }},
    {{
      id: 'copa_do_mundo',
      name: 'Copa do Mundo dos Campeões',
      stadium: 'Estádio Monumental Global',
      difficulty: 'Lendário',
      badgeIcon: '🏆',
      targetScore: 5,
      description: 'O palco supremo do futebol! Todos os fonemas combinados em jogadas históricas!',
      opponent: 'Seleção das Lendas',
      unlockThreshold: 12
    }}
  ];

{audio_section}

  // Efeitos sonoros extras para abertura de pacotinho de figurinhas
  AudioEngine.prototype.playPackOpening = function() {{
    if (this.isMuted) return;
    try {{
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {{
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.01, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      }});
    }} catch(e) {{}}
  }};

  AudioEngine.prototype.playCardReveal = function() {{
    if (this.isMuted) return;
    try {{
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    }} catch(e) {{}}
  }};

  // ================= ESTADO DO JOGO =================
  const state = {{
    activeScreen: 'home',
    albumFilter: 'todas',
    player: {{
      name: 'Craque Campeão',
      jerseyNumber: 10,
      jerseyColor: 'from-amber-400 to-yellow-500 text-green-950',
      jerseyBgHex: '#facc15',
      mascot: 'Canarinho',
      level: 1,
      stars: 35,
      xp: 280,
      trophies: ['copa_bairro'],
      unlockedChampionships: ['copa_bairro', 'campeonato_estadual'],
      cards: ['pele', 'marta'],
      packsAvailable: 1
    }},
    settings: {{
      audioSpeed: 0.85,
      showSyllableColors: true,
      readingRuler: false,
      fontSizeMultiplier: 1.0,
      soundEnabled: true
    }},
    training: {{
      selectedPhoneme: null,
      currentQuestionIndex: 0,
      questions: [],
      score: 0,
      starsEarned: 0,
      eliminatedDistractors: [],
      hintActive: false,
      answered: false
    }},
    match: {{
      championship: null,
      playStage: 0,
      homeScore: 0,
      awayScore: 0,
      currentChallenge: null,
      stageAnswered: false,
      matchFinished: false,
      hintActive: false,
      eliminatedDistractors: [],
      stageType: 'initial_sound',
      challengeOptions: [],
      syllablesSequence: [],
      syllablesTarget: [],
      syllablesShuffled: []
    }},
    stats: {{
      totalExercises: 0,
      firstTryCorrect: 0,
      hintsUsed: 0,
      crossbarHits: 0,
      byPhoneme: {{
        CH: {{ total: 8, correctFirstTry: 7, errors: 1 }},
        P_VS_T: {{ total: 10, correctFirstTry: 6, errors: 4 }},
        R_VIBRANTE: {{ total: 9, correctFirstTry: 7, errors: 2 }},
        S: {{ total: 7, correctFirstTry: 6, errors: 1 }}
      }},
      recentMistakes: [
        {{ word: 'TRAVE', attempted: 'PRAVE', phoneme: 'P_VS_T', date: 'Hoje' }},
        {{ word: 'TÁTICA', attempted: 'PÁTICA', phoneme: 'P_VS_T', date: 'Hoje' }}
      ]
    }}
  }};

  function loadStoredState() {{
    try {{
      const saved = localStorage.getItem('craques_leitura_state');
      if (saved) {{
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {{
          if (parsed.player && typeof parsed.player === 'object') Object.assign(state.player, parsed.player);
          if (parsed.stats && typeof parsed.stats === 'object') Object.assign(state.stats, parsed.stats);
          if (parsed.settings && typeof parsed.settings === 'object') Object.assign(state.settings, parsed.settings);
        }}
      }}
    }} catch (e) {{
      console.warn('LocalStorage error:', e);
    }}
    if (!Array.isArray(state.player.trophies)) state.player.trophies = ['copa_bairro'];
    if (!Array.isArray(state.player.unlockedChampionships)) state.player.unlockedChampionships = ['copa_bairro', 'campeonato_estadual'];
    if (!Array.isArray(state.player.cards)) state.player.cards = ['pele', 'marta'];
    if (typeof state.player.packsAvailable !== 'number') state.player.packsAvailable = 1;
    if (typeof state.settings.readingRuler !== 'boolean') state.settings.readingRuler = false;
    if (!state.player.name) state.player.name = 'Craque Campeão';
    if (!state.player.jerseyNumber) state.player.jerseyNumber = 10;
    if (!state.stats.byPhoneme) {{
      state.stats.byPhoneme = {{
        CH: {{ total: 0, correctFirstTry: 0, errors: 0 }},
        P_VS_T: {{ total: 0, correctFirstTry: 0, errors: 0 }},
        R_VIBRANTE: {{ total: 0, correctFirstTry: 0, errors: 0 }},
        S: {{ total: 0, correctFirstTry: 0, errors: 0 }}
      }};
    }}
  }}

  function saveState() {{
    try {{
      localStorage.setItem('craques_leitura_state', JSON.stringify({{
        player: state.player,
        stats: state.stats,
        settings: state.settings
      }}));
    }} catch (e) {{
      console.warn('Erro ao salvar:', e);
    }}
  }}

  function navigateTo(screen, params = {{}}) {{
    state.activeScreen = screen;
    if (screen === 'training_game' && params.phoneme) {{
      initTrainingGame(params.phoneme);
    }} else if (screen === 'match' && params.championshipId) {{
      initMatchGame(params.championshipId);
    }}
    render();
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }}

  // ================= CENTRO DE TREINAMENTO =================
  function initTrainingGame(phonemeKey) {{
    state.training.selectedPhoneme = phonemeKey;
    state.training.currentQuestionIndex = 0;
    state.training.score = 0;
    state.training.starsEarned = 0;
    state.training.answered = false;
    state.training.hintActive = false;
    state.training.eliminatedDistractors = [];

    const pool = WORDS_DATABASE.filter(w => w.phoneme === phonemeKey);
    // Embaralhar para o treino ser sempre variado
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    state.training.questions = shuffled.slice(0, 6);

    const pInfo = PHONEMES_INFO[phonemeKey];
    setTimeout(() => {{
      sound.speak(`${{pInfo.title}}. ${{pInfo.coachQuote}}`);
    }}, 400);
  }}

  function checkTrainingAnswer(selectedOption) {{
    if (state.training.answered || state.training.isKicking) return;

    state.training.isKicking = true;
    setTimeout(() => {{
      state.training.isKicking = false;
    }}, 2800);

    const currentQ = state.training.questions[state.training.currentQuestionIndex];
    const phoneme = currentQ.phoneme;
    state.stats.totalExercises++;
    state.stats.byPhoneme[phoneme].total++;

    if (selectedOption === currentQ.missingPart) {{
      if (activeSoccerCanvas) {{
        activeSoccerCanvas.shootGoal(() => {{
          state.training.answered = true;
          state.training.isKicking = false;
          if (!state.training.hintActive) {{
            state.stats.firstTryCorrect++;
            state.stats.byPhoneme[phoneme].correctFirstTry++;
            state.player.stars += 3;
            state.player.xp += 30;
          }} else {{
            state.player.stars += 2;
            state.player.xp += 20;
          }}
          saveState();
          render();
          sound.speak(`Golaço espetacular! A palavra é ${{currentQ.word}}!`);
        }});
      }} else {{
        state.training.answered = true;
        state.training.isKicking = false;
        sound.playGoalCheer();
        saveState();
        render();
      }}
    }} else {{
      const isGoalkeeperSave = Math.random() > 0.4;
      state.stats.byPhoneme[phoneme].errors++;
      state.stats.recentMistakes.unshift({{
        word: currentQ.word,
        attempted: selectedOption,
        phoneme: phoneme,
        date: 'Agora'
      }});
      if (state.stats.recentMistakes.length > 8) state.stats.recentMistakes.pop();
      saveState();

      if (!state.training.eliminatedDistractors.includes(selectedOption)) {{
        state.training.eliminatedDistractors.push(selectedOption);
      }}

      // Feedback fonoaudiológico específico do distrator escolhido!
      const specificExplanation = (currentQ.hint && currentQ.hint.distractorExplanations && currentQ.hint.distractorExplanations[selectedOption]) || '';

      if (activeSoccerCanvas) {{
        const onDone = () => {{
          state.training.isKicking = false;
          render();
          if (specificExplanation) {{
            sound.speak(`Foi na trave! ${{specificExplanation}}`);
          }} else if (isGoalkeeperSave) {{
            sound.speak(`Que defesaça do goleiro! Tente outra alternativa ou peça a dica do VAR!`);
          }} else {{
            sound.speak(`Foi na trave! A bola voltou para o campo. Tente outra alternativa!`);
          }}
        }};

        if (isGoalkeeperSave) {{
          activeSoccerCanvas.shootGoalkeeperSave(onDone);
        }} else {{
          state.stats.crossbarHits++;
          activeSoccerCanvas.shootCrossbar(onDone);
        }}
      }} else {{
        state.training.isKicking = false;
        sound.playCrossbar();
        render();
      }}
    }}
  }}

  function activateTrainingHint() {{
    state.training.hintActive = true;
    state.stats.hintsUsed++;

    const currentQ = state.training.questions[state.training.currentQuestionIndex];
    const pInfo = PHONEMES_INFO[state.training.selectedPhoneme];

    let eliminatedOne = null;
    if (currentQ.hint && currentQ.hint.varEliminate) {{
      const extra = currentQ.hint.varEliminate.find(d => !state.training.eliminatedDistractors.includes(d));
      if (extra) {{
        state.training.eliminatedDistractors.push(extra);
        eliminatedOne = extra;
      }}
    }}

    const soundCue = currentQ.hint ? currentQ.hint.soundCue : pInfo.soundDescription;
    const articulatoryCue = currentQ.hint ? currentQ.hint.articulatoryCue : pInfo.articulatoryTip;

    showVarModal('DICA DO TÉCNICO • CENTRO DE TREINAMENTO', soundCue, articulatoryCue, eliminatedOne);
    render();
  }}

  function nextTrainingQuestion() {{
    state.training.currentQuestionIndex++;
    state.training.answered = false;
    state.training.hintActive = false;
    state.training.eliminatedDistractors = [];

    if (state.training.currentQuestionIndex >= state.training.questions.length) {{
      // Treino concluído! Recompensa de pacote de figurinhas a cada finalização
      state.player.stars += 5;
      state.player.packsAvailable++;
      saveState();
      sound.playWhistle();
      setTimeout(() => {{
        sound.speak(`Fim de treino excelente! Você ganhou mais 5 estrelas e um novo Pacotinho de Figurinhas!`);
      }}, 500);
      navigateTo('training_list');
    }} else {{
      render();
    }}
  }}

  // ================= SISTEMA CINEMÁTICO DO VAR DA LEITURA 🎥 =================
  function showVarModal(title, soundCue, articulatoryCue, eliminatedWord, extraMessage = null) {{
    sound.unlockAudio();
    sound.playTacticalHint();

    const textToSpeak = `O VAR está na tela! ${{soundCue}}. ${{articulatoryCue || ''}}`;
    sound.speak(textToSpeak, 0.85);

    const existing = document.getElementById('var-screen-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'var-screen-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-goal';
    modal.innerHTML = `
      <div class="bg-slate-950 rounded-3xl p-6 sm:p-8 max-w-lg w-full border-4 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.5)] space-y-5 text-center text-white relative overflow-hidden">
        
        <div class="flex items-center justify-between border-b border-amber-400/40 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <span class="font-display text-sm tracking-widest text-amber-400">CABINE DO VAR • REPLAY TÁTICO</span>
          </div>
          <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">CÂMERA 1</span>
        </div>

        <div class="bg-slate-900 rounded-2xl p-5 border-2 border-slate-700 space-y-3 relative">
          <span class="text-5xl block">📺</span>
          <h3 class="font-display text-2xl text-amber-300">${{title}}</h3>
          
          <div class="bg-black/60 p-4 rounded-xl border border-amber-400/30 text-left space-y-2">
            <p class="text-amber-400 font-bold text-sm flex items-center gap-2">
              <span>🗣️ Como Ouvir:</span>
              <span class="text-white">${{soundCue}}</span>
            </p>
            ${{articulatoryCue ? `
              <p class="text-emerald-300 text-xs flex items-center gap-2">
                <span>👄 Como Fazer:</span>
                <span class="text-emerald-100">${{articulatoryCue}}</span>
              </p>
            ` : ''}}
            ${{extraMessage ? `
              <p class="text-amber-200 text-xs font-bold bg-amber-950/60 p-2 rounded border border-amber-500/40">
                💡 ${{extraMessage}}
              </p>
            ` : ''}}
          </div>

          ${{eliminatedWord ? `
            <div class="bg-red-950/80 border border-red-500 p-2.5 rounded-xl text-red-200 text-xs font-bold flex items-center justify-center gap-2">
              <span>🚫 O VAR eliminou a alternativa incorreta:</span>
              <span class="text-base text-white line-through font-display px-2 py-0.5 bg-red-800 rounded"> ${{eliminatedWord}} </span>
            </div>
          ` : ''}}
        </div>

        <div class="flex gap-3 pt-2">
          <button onclick="window.app.speakWord('${{soundCue}}')" class="touch-btn flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-2xl text-xs sm:text-sm border border-amber-400/50 flex items-center justify-center gap-1.5 shadow-md">
            🔊 <span>Ouvir Dica Novamente</span>
          </button>
          <button onclick="document.getElementById('var-screen-modal').remove()" class="touch-btn flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-black rounded-2xl text-xs sm:text-sm shadow-xl flex items-center justify-center gap-1.5 transform active:scale-95">
            ⚽ <span>VOLTAR E CHUTAR!</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }}

  // ================= MODO CAMPEONATO DIVERSIFICADO =================
  const MATCH_STAGE_TITLES = [
    {{ name: '1. Roubada de Bola', desc: 'Desarme no meio-campo! Identifique o som inicial correto.', icon: '🛡️', type: 'initial_sound' }},
    {{ name: '2. Passe Preciso', desc: 'Lance em profundidade! Complete com a sílaba certa.', icon: '🎯', type: 'missing_syllable' }},
    {{ name: '3. Drible Desconcertante', desc: 'Duelo no mano a mano! Escolha o drible certo ao ouvir o narrador.', icon: '⚡', type: 'minimal_pair' }},
    {{ name: '4. Cruzamento na Área', desc: 'Tabelinha de passes! Toque nas sílabas na ordem para cruzar na área.', icon: '⚽', type: 'syllable_shuffle' }},
    {{ name: '5. Chute a Gol!', desc: 'Cara a cara com o goleiro! Complete a narração e balance as redes!', icon: '🏆', type: 'full_sentence' }}
  ];

  function initMatchGame(championshipId) {{
    const champ = CHAMPIONSHIPS.find(c => c.id === championshipId) || CHAMPIONSHIPS[0];
    state.match.championship = champ;
    state.match.playStage = 0;
    state.match.homeScore = 0;
    state.match.awayScore = 0;
    state.match.stageAnswered = false;
    state.match.matchFinished = false;
    state.match.hintActive = false;
    state.match.eliminatedDistractors = [];

    loadMatchStageChallenge();
    setTimeout(() => {{
      sound.playWhistle();
      setTimeout(() => {{
        sound.speak(`Começa o grande jogo no ${{champ.stadium}}! ${{state.player.name}} contra ${{champ.opponent}}!`);
      }}, 700);
    }}, 300);
  }}

  function loadMatchStageChallenge() {{
    state.match.stageAnswered = false;
    state.match.hintActive = false;
    state.match.eliminatedDistractors = [];

    const stage = state.match.playStage;
    const stageInfo = MATCH_STAGE_TITLES[stage] || MATCH_STAGE_TITLES[0];
    state.match.stageType = stageInfo.type;

    const phonemeKeys = ['CH', 'P_VS_T', 'R_VIBRANTE', 'S'];
    const targetPhoneme = phonemeKeys[stage % phonemeKeys.length];
    const candidates = WORDS_DATABASE.filter(w => w.phoneme === targetPhoneme);
    const challenge = candidates[Math.floor(Math.random() * candidates.length)] || WORDS_DATABASE[0];
    state.match.currentChallenge = challenge;

    // Configuração específica por mecânica
    if (stageInfo.type === 'initial_sound') {{
      const target = challenge.initialSound || challenge.missingPart;
      const distractorPool = ['CH', 'P', 'T', 'R', 'S', 'B', 'C', 'M', 'F'].filter(x => x !== target);
      const shuffledDistractors = distractorPool.sort(() => Math.random() - 0.5).slice(0, 3);
      state.match.challengeOptions = [target, ...shuffledDistractors].sort();
    }} else if (stageInfo.type === 'missing_syllable') {{
      state.match.challengeOptions = [challenge.missingPart, ...challenge.distractors].sort();
    }} else if (stageInfo.type === 'minimal_pair') {{
      const target = challenge.word;
      const pair = (challenge.minimalPair && challenge.minimalPair[1]) ? challenge.minimalPair[1] : (challenge.distractors[0] + challenge.word.slice(2));
      const otherWords = WORDS_DATABASE.filter(w => w.word !== target && w.word !== pair).map(w => w.word).sort(() => Math.random() - 0.5).slice(0, 2);
      state.match.challengeOptions = [target, pair, ...otherWords].sort();
      // O narrador fala a palavra automaticamente para o desafio auditivo
      setTimeout(() => {{
        sound.speak(`Atenção no drible: toque para a jogada ${{target}}!`);
      }}, 600);
    }} else if (stageInfo.type === 'syllable_shuffle') {{
      state.match.syllablesTarget = [...challenge.syllables];
      state.match.syllablesSequence = [];
      let shuffled = [...challenge.syllables].sort(() => Math.random() - 0.5);
      if (shuffled.join('') === challenge.syllables.join('') && shuffled.length > 1) {{
        shuffled.reverse();
      }}
      state.match.syllablesShuffled = shuffled;
    }} else if (stageInfo.type === 'full_sentence') {{
      state.match.challengeOptions = [challenge.missingPart, ...challenge.distractors].sort();
    }}
  }}

  function checkMatchAnswer(option) {{
    if (state.match.stageAnswered || state.match.isKicking) return;

    state.match.isKicking = true;
    setTimeout(() => {{
      state.match.isKicking = false;
    }}, 2800);

    const challenge = state.match.currentChallenge;
    const stageType = state.match.stageType;

    let isCorrect = false;
    if (stageType === 'initial_sound') {{
      isCorrect = (option === (challenge.initialSound || challenge.missingPart));
    }} else if (stageType === 'minimal_pair') {{
      isCorrect = (option === challenge.word);
    }} else {{
      isCorrect = (option === challenge.missingPart);
    }}

    state.stats.totalExercises++;
    state.stats.byPhoneme[challenge.phoneme].total++;

    if (isCorrect) {{
      if (activeSoccerCanvas) {{
        activeSoccerCanvas.shootGoal(() => {{
          state.match.stageAnswered = true;
          state.match.isKicking = false;
          if (!state.match.hintActive) {{
            state.stats.firstTryCorrect++;
            state.stats.byPhoneme[challenge.phoneme].correctFirstTry++;
          }}
          if (state.match.playStage === 4) {{
            state.match.homeScore++;
            state.player.stars += 10;
            state.player.xp += 150;
            // Ganhar 1 Pacotinho de Figurinhas ao vencer o campeonato!
            state.player.packsAvailable++;

            const currIdx = CHAMPIONSHIPS.findIndex(c => c.id === state.match.championship.id);
            if (currIdx < CHAMPIONSHIPS.length - 1) {{
              const nextChamp = CHAMPIONSHIPS[currIdx + 1];
              if (!state.player.unlockedChampionships.includes(nextChamp.id)) {{
                state.player.unlockedChampionships.push(nextChamp.id);
              }}
            }}
            if (!state.player.trophies.includes(state.match.championship.id)) {{
              state.player.trophies.push(state.match.championship.id);
            }}
            state.match.matchFinished = true;
            saveState();
            render();
            setTimeout(() => {{
              sound.speak(`É Campeão! Que golaço inesquecível de ${{state.player.name}}! Você ganhou um novo Pacotinho de Figurinhas!`);
            }}, 500);
          }} else {{
            saveState();
            render();
            sound.speak(`Jogada perfeita! Vamos para o próximo lance!`);
          }}
        }});
      }} else {{
        state.match.stageAnswered = true;
        state.match.isKicking = false;
        render();
      }}
    }} else {{
      const isGoalkeeperSave = Math.random() > 0.4;
      state.stats.byPhoneme[challenge.phoneme].errors++;
      state.stats.recentMistakes.unshift({{
        word: challenge.word,
        attempted: option,
        phoneme: challenge.phoneme,
        date: 'Nesta Partida'
      }});
      saveState();

      if (!state.match.eliminatedDistractors.includes(option)) {{
        state.match.eliminatedDistractors.push(option);
      }}

      const specificExplanation = (challenge.hint && challenge.hint.distractorExplanations && challenge.hint.distractorExplanations[option]) || '';

      if (activeSoccerCanvas) {{
        const onDone = () => {{
          state.match.isKicking = false;
          render();
          if (specificExplanation) {{
            sound.speak(`Explodiu na trave! ${{specificExplanation}}`);
          }} else if (isGoalkeeperSave) {{
            sound.speak(`Espetacular defesa do goleiro! Tente outra alternativa ou consulte o VAR!`);
          }} else {{
            sound.speak(`Explodiu na trave! A bola sobrou, tente outra opção!`);
          }}
        }};

        if (isGoalkeeperSave) {{
          activeSoccerCanvas.shootGoalkeeperSave(onDone);
        }} else {{
          state.stats.crossbarHits++;
          activeSoccerCanvas.shootCrossbar(onDone);
        }}
      }} else {{
        state.match.isKicking = false;
        sound.playCrossbar();
        render();
      }}
    }}
  }}

  function handleSyllableClick(syllable, index) {{
    if (state.match.stageAnswered || state.match.isKicking) return;

    const targetSeq = state.match.syllablesTarget;
    const currentStep = state.match.syllablesSequence.length;

    if (syllable === targetSeq[currentStep]) {{
      state.match.syllablesSequence.push({{ syllable, index }});
      sound.playKick();

      if (state.match.syllablesSequence.length === targetSeq.length) {{
        // Completou a tabelinha de sílabas com perfeição!
        state.match.stageAnswered = true;
        sound.speak(`Tabelinha mágica! Cruzamento perfeito na grande área: ${{state.match.currentChallenge.word}}!`);
        render();
      }} else {{
        render();
      }}
    }} else {{
      sound.playCrossbar();
      sound.speak(`Passe interceptado! Comece a tabelinha de novo na ordem certa!`);
      state.match.syllablesSequence = [];
      render();
    }}
  }}

  function activateMatchHint() {{
    state.match.hintActive = true;
    state.stats.hintsUsed++;

    const challenge = state.match.currentChallenge;
    const pInfo = PHONEMES_INFO[challenge.phoneme];

    let eliminatedOne = null;
    if (challenge.hint && challenge.hint.varEliminate) {{
      const extra = challenge.hint.varEliminate.find(d => !state.match.eliminatedDistractors.includes(d));
      if (extra) {{
        state.match.eliminatedDistractors.push(extra);
        eliminatedOne = extra;
      }}
    }}

    const soundCue = challenge.hint ? challenge.hint.soundCue : pInfo.soundDescription;
    const articulatoryCue = challenge.hint ? challenge.hint.articulatoryCue : pInfo.articulatoryTip;

    showVarModal('ANÁLISE DO VAR • LANCE DECISIVO', soundCue, articulatoryCue, eliminatedOne);
    render();
  }}

  function advanceMatchStage() {{
    if (state.match.playStage < 4) {{
      state.match.playStage++;
      loadMatchStageChallenge();
      render();
      const st = MATCH_STAGE_TITLES[state.match.playStage];
      setTimeout(() => {{
        sound.speak(`Lance ${{state.match.playStage + 1}}: ${{st.name}}! ${{st.desc}}`);
      }}, 250);
    }}
  }}

{canvas_section}

  // ================= SISTEMA DE ÁLBUM E PACOTES DE FIGURINHAS =================
  function openPackModal() {{
    if (state.player.packsAvailable <= 0) {{
      sound.speak('Você não tem pacotes disponíveis. Vença jogos ou complete treinos para ganhar mais pacotes!');
      return;
    }}

    const existing = document.getElementById('pack-open-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'pack-open-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-goal';
    modal.innerHTML = `
      <div id="pack-card-box" class="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 max-w-md w-full border-4 border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.5)] text-center text-white space-y-6">
        
        <div class="space-y-1">
          <span class="text-xs font-black tracking-widest text-amber-400 uppercase">ULTIMATE CRAQUES PACK</span>
          <h3 class="font-display text-2xl sm:text-3xl text-white">PACOTE DE FIGURINHAS</h3>
          <p class="text-xs text-slate-300">Contém 2 cartas de craques, lendas ou itens especiais!</p>
        </div>

        <!-- Pacotinho 3D Animado -->
        <div class="py-4 flex justify-center">
          <div class="w-48 h-64 bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 rounded-2xl border-4 border-amber-200 shadow-2xl p-4 flex flex-col justify-between text-slate-950 pack-anim cursor-pointer" onclick="window.app.confirmOpenPack()">
            <div class="flex justify-between items-center text-xs font-black">
              <span>FIFA 26</span>
              <span>⭐ OURO</span>
            </div>
            <div class="my-auto text-6xl">
              ⚽
            </div>
            <div>
              <p class="font-display text-lg tracking-wider font-black">CRAQUES FC</p>
              <p class="text-[10px] font-bold text-slate-800">TOQUE PARA ABRIR</p>
            </div>
          </div>
        </div>

        <button onclick="window.app.confirmOpenPack()" class="touch-btn w-full py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 text-slate-950 font-black rounded-2xl shadow-xl text-base transform active:scale-95">
          💥 RASGAR PACOTE AGORA!
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    sound.speak('Toque no pacote para abrir suas figurinhas!');
  }}

  function confirmOpenPack() {{
    if (state.player.packsAvailable <= 0) return;
    state.player.packsAvailable--;

    sound.playPackOpening();

    // Sortear 2 cartas aleatórias
    const shuffled = [...CARDS_DATABASE].sort(() => Math.random() - 0.5);
    const card1 = shuffled[0];
    const card2 = shuffled[1];

    const results = [card1, card2].map(c => {{
      const isNew = !state.player.cards.includes(c.id);
      if (isNew) {{
        state.player.cards.push(c.id);
      }} else {{
        state.player.stars += 20; // Recompensa por figurinha repetida
      }}
      return {{ card: c, isNew }};
    }});

    saveState();

    const box = document.getElementById('pack-card-box');
    if (!box) return;

    box.innerHTML = `
      <div class="space-y-4">
        <span class="text-xs font-black tracking-widest text-emerald-400 uppercase">🎉 PACOTE ABERTO COM SUCESSO!</span>
        <h3 class="font-display text-2xl text-white">SUAS NOVAS FIGURINHAS</h3>
        
        <div class="grid grid-cols-2 gap-3 pt-2">
          ${{results.map(r => `
            <div class="p-3 rounded-2xl border-2 ${{r.card.rarity === 'lendaria' ? 'card-legendary' : r.card.rarity === 'rara' ? 'card-rare' : 'card-common'}} text-slate-950 text-center space-y-1.5 card-reveal-anim">
              <span class="text-xs font-black block">${{r.isNew ? '✨ NOVA!' : '🔄 REPETIDA (+20 ⭐)'}}</span>
              <span class="text-4xl block">${{r.card.icon}}</span>
              <h4 class="font-display text-sm font-black leading-tight text-white drop-shadow">${{r.card.name}}</h4>
              <p class="text-[10px] text-white/90 font-bold">${{r.card.nickname}}</p>
              <div class="bg-black/40 text-amber-300 text-[10px] font-black rounded py-0.5 px-1 inline-block">
                NOTA ${{r.card.rating}} ⭐
              </div>
            </div>
          `).join('')}}
        </div>

        <p class="text-xs text-slate-300 pt-2">
          ${{results.some(r => r.isNew) ? 'Figurinhas coladas com sucesso no seu Álbum da Copa!' : 'As figurinhas repetidas foram convertidas em Estrelas ⭐!'}}
        </p>

        <div class="flex gap-2 pt-2">
          ${{state.player.packsAvailable > 0 ? `
            <button onclick="window.app.openPackModal()" class="touch-btn flex-1 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs shadow-md">
              🎁 Abrir Mais (${{state.player.packsAvailable}})
            </button>
          ` : ''}}
          <button onclick="document.getElementById('pack-open-modal').remove(); window.app.navigateTo('album');" class="touch-btn flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs shadow-md">
            📖 Ver no Álbum
          </button>
        </div>
      </div>
    `;

    setTimeout(() => {{
      sound.playCardReveal();
      sound.speak(`Incrível! Você tirou ${{card1.name}} e ${{card2.name}}!`);
    }}, 400);
  }}

  function inspectCard(cardId) {{
    const card = CARDS_DATABASE.find(c => c.id === cardId);
    if (!card) return;

    const isOwned = state.player.cards.includes(card.id);

    const modal = document.createElement('div');
    modal.id = 'inspect-card-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-goal';
    modal.innerHTML = `
      <div class="rounded-3xl p-6 sm:p-8 max-w-sm w-full border-4 border-amber-400 shadow-2xl text-center space-y-4 ${{card.rarity === 'lendaria' ? 'card-legendary' : card.rarity === 'rara' ? 'card-rare' : 'card-common'}} text-slate-950 relative">
        <button onclick="document.getElementById('inspect-card-modal').remove()" class="absolute top-3 right-4 text-2xl font-black text-slate-950/70 hover:text-slate-950">✕</button>
        
        <div class="flex justify-between items-center text-xs font-black uppercase tracking-wider text-slate-950">
          <span>${{card.category}}</span>
          <span class="px-2 py-0.5 rounded bg-black/30 text-white font-bold">${{card.rarity}}</span>
        </div>

        <div class="text-7xl py-2 drop-shadow-md">
          ${{card.icon}}
        </div>

        <div>
          <h3 class="font-display text-2xl font-black text-white drop-shadow">${{card.name}}</h3>
          <p class="text-xs font-bold text-white/90">${{card.nickname}}</p>
        </div>

        <div class="bg-black/50 p-3 rounded-2xl text-white text-xs space-y-2 text-left">
          <p class="italic text-center text-amber-200">"${{card.quote}}"</p>
          <div class="grid grid-cols-2 gap-2 pt-1 font-bold text-[11px]">
            <div>DRIBLE: <span class="text-amber-400 font-black">${{card.stats.drible}}</span></div>
            <div>CHUTE: <span class="text-amber-400 font-black">${{card.stats.chute}}</span></div>
            <div>PASSE: <span class="text-amber-400 font-black">${{card.stats.passe}}</span></div>
            <div>LEITURA: <span class="text-emerald-400 font-black">${{card.stats.leitura}}</span></div>
          </div>
        </div>

        <div class="pt-2">
          ${{isOwned ? `
            <span class="px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-300 font-black text-xs border border-emerald-400">
              ✅ FIGURINHA COLADA NO SEU ÁLBUM
            </span>
          ` : `
            <span class="px-4 py-1.5 rounded-full bg-slate-900 text-slate-300 font-black text-xs border border-slate-700">
              🔒 BLOQUEADA (Abra pacotes para conquistar!)
            </span>
          `}}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    sound.speak(`${{card.name}}. ${{card.nickname}}. ${{card.quote}}`);
  }}

  // ================= RENDERIZAÇÃO =================
  function renderHeader() {{
    return `
      <header class="bg-slate-900 border-b-4 border-amber-500 shadow-xl sticky top-0 z-40">
        <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center space-x-3 cursor-pointer" onclick="window.app.navigateTo('home')">
            <div class="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform -rotate-3">
              ⚽
            </div>
            <div>
              <h1 class="font-display text-xl sm:text-2xl text-white tracking-wider flex items-center gap-2">
                CRAQUES DA LEITURA <span class="text-amber-400 text-xs px-2 py-0.5 bg-amber-500/20 rounded border border-amber-400">FC</span>
              </h1>
              <p class="text-xs text-slate-300 flex items-center gap-2">
                <span class="text-amber-400 font-bold">⭐ ${{state.player.stars}}</span>
                <span class="text-emerald-400 font-bold">🏆 ${{state.player.trophies.length}}</span>
                <span class="text-blue-300 font-bold">🃏 ${{state.player.cards.length}}/${{CARDS_DATABASE.length}}</span>
              </p>
            </div>
          </div>

          <nav class="flex items-center space-x-2">
            <button onclick="window.app.navigateTo('home')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${{state.activeScreen === 'home' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}}">
              🏟️ <span>Início</span>
            </button>
            <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${{state.activeScreen.startsWith('training') ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}}">
              🏃 <span>Treinos</span>
            </button>
            <button onclick="window.app.navigateTo('album')" class="touch-btn relative px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${{state.activeScreen === 'album' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}}">
              🃏 <span>Álbum</span>
              ${{state.player.packsAvailable > 0 ? `
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full animate-pulse">
                  ${{state.player.packsAvailable}}
                </span>
              ` : ''}}
            </button>
            <button onclick="window.app.navigateTo('locker_room')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${{state.activeScreen === 'locker_room' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}}">
              👕 <span>Vestiário</span>
            </button>
            <button onclick="window.app.navigateTo('coach_dashboard')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${{state.activeScreen === 'coach_dashboard' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-emerald-950 text-emerald-300 border border-emerald-600/40 hover:bg-emerald-900'}}">
              📋 <span>Painel</span>
            </button>
          </nav>

          <div class="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            <button onclick="window.app.toggleReadingRuler()" title="Régua de Leitura para Dislexia" class="text-xs px-2 py-1 rounded font-bold ${{state.settings.readingRuler ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'}}">
              📏 Régua
            </button>
            <button onclick="window.app.toggleAudioSpeed()" title="Velocidade da Voz" class="text-xs px-2 py-1 rounded bg-slate-700 text-amber-300 hover:bg-slate-600 font-bold">
              ${{state.settings.audioSpeed < 1.0 ? '🐢 Lento' : '🐇 Normal'}}
            </button>
            <button onclick="window.app.toggleSyllableColors()" title="Colorir Sílabas" class="text-xs px-2 py-1 rounded ${{state.settings.showSyllableColors ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'}} font-bold">
              🎨 Sílabas
            </button>
            <button onclick="window.app.toggleMute()" title="Ativar/Desativar Som" class="text-xs px-2 py-1 rounded bg-slate-700 text-slate-200 hover:bg-slate-600">
              ${{sound.isMuted ? '🔇 Mudo' : '🔊 Som'}}
            </button>
          </div>
        </div>
      </header>
    `;
  }}

  function renderHomeScreen() {{
    const albumTotal = CARDS_DATABASE.length;
    const albumOwned = state.player.cards.length;

    return `
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div class="relative overflow-hidden rounded-3xl craque-card p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-4 text-center md:text-left z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-sm font-bold">
              <span>⚽ TEMPORADA 2026</span> • <span>ALFABETIZAÇÃO CAMPEÃ</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Pronto para brilhar em campo, <span class="text-amber-400 underline decoration-amber-400">${{state.player.name}}</span>?
            </h2>
            <p class="text-slate-300 text-base sm:text-lg max-w-xl">
              Cada desafio superado é um desarme, uma tabelinha e um golaço! Colecione figurinhas e dispute as grandes finais da Copa!
            </p>
            <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2">
              <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black rounded-2xl shadow-xl flex items-center gap-2 transform active:scale-95">
                <span>🏃 ENTRAR NO TREINO</span>
              </button>
              <button onclick="window.app.navigateTo('album')" class="touch-btn px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-black rounded-2xl shadow-xl flex items-center gap-2 transform active:scale-95">
                <span>🃏 ÁLBUM (${{albumOwned}}/${{albumTotal}})</span>
              </button>
              ${{state.player.packsAvailable > 0 ? `
                <button onclick="window.app.openPackModal()" class="touch-btn px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl shadow-xl flex items-center gap-1.5 text-xs animate-bounce transform active:scale-95">
                  <span>🎁 ABRIR PACOTE (${{state.player.packsAvailable}})!</span>
                </button>
              ` : ''}}
            </div>
          </div>

          <div class="w-64 sm:w-72 bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600 p-1.5 rounded-3xl shadow-2xl z-10 transform rotate-1 hover:rotate-0 transition-transform">
            <div class="bg-slate-950 p-4 rounded-[22px] text-center space-y-3 border border-amber-300/30">
              <div class="flex justify-between items-center text-amber-400 font-extrabold text-sm">
                <span>NÍVEL ${{state.player.level}}</span>
                <span>NOTA 99 ⭐</span>
              </div>
              <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${{state.player.jerseyColor}} flex items-center justify-center text-4xl shadow-inner border-4 border-amber-300">
                👕
              </div>
              <div>
                <p class="font-display text-xl text-white tracking-wide">${{state.player.name}}</p>
                <p class="text-xs text-amber-300 font-bold">Camisa #${{state.player.jerseyNumber}} • ${{state.player.mascot}}</p>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800 text-slate-300">
                <div class="bg-slate-900 p-1.5 rounded">CHUTE: <strong>98</strong></div>
                <div class="bg-slate-900 p-1.5 rounded">PASSE: <strong>95</strong></div>
                <div class="bg-slate-900 p-1.5 rounded">DRIBLE: <strong>99</strong></div>
                <div class="bg-slate-900 p-1.5 rounded">LEITURA: <strong>99</strong></div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-display text-2xl text-slate-800 flex items-center gap-2">
              <span>🏆</span> <span>Campeonatos em Disputa</span>
            </h3>
            <span class="text-xs font-bold text-slate-500">Vença partidas para desbloquear novas taças e pacotes</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            ${{CHAMPIONSHIPS.map(champ => {{
              const isUnlocked = state.player.unlockedChampionships.includes(champ.id);
              const isChampion = state.player.trophies.includes(champ.id);
              return `
                <div class="bg-white rounded-3xl p-5 border-2 ${{isChampion ? 'border-amber-400 shadow-amber-100' : isUnlocked ? 'border-slate-200' : 'border-slate-200 opacity-60'}} shadow-lg flex flex-col justify-between space-y-4">
                  <div class="space-y-2">
                    <div class="flex justify-between items-start">
                      <span class="text-3xl">${{champ.badgeIcon}}</span>
                      ${{isChampion ? '<span class="text-xs font-black px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full border border-amber-300">CAMPEÃO!</span>' : ''}}
                    </div>
                    <h4 class="font-bold text-lg text-slate-900">${{champ.name}}</h4>
                    <p class="text-xs text-emerald-700 font-bold">🏟️ ${{champ.stadium}}</p>
                    <p class="text-xs text-slate-600">${{champ.description}}</p>
                  </div>

                  <div>
                    ${{isUnlocked ? `
                      <button onclick="window.app.navigateTo('match', {{ championshipId: '${{champ.id}}' }})" class="touch-btn w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md text-sm">
                        ${{isChampion ? 'Jogar Novamente' : 'Jogar Partida'}}
                      </button>
                    ` : `
                      <button disabled class="w-full py-2.5 bg-slate-100 text-slate-400 font-bold rounded-xl text-sm cursor-not-allowed">
                        🔒 Bloqueado
                      </button>
                    `}}
                  </div>
                </div>
              `;
            }}).join('')}}
          </div>
        </div>
      </div>
    `;
  }}

  function renderTrainingListScreen() {{
    return `
      <div class="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 class="font-display text-3xl text-slate-900 flex items-center gap-2">
              <span>🏟️</span> <span>Centro de Treinamento (CT)</span>
            </h2>
            <p class="text-sm text-slate-600">Escolha uma arena temática para calibrar seu chute nos fonemas-alvo:</p>
          </div>
          <button onclick="window.app.navigateTo('home')" class="touch-btn px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-sm text-slate-700">
            ⬅ Voltar
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${{Object.values(PHONEMES_INFO).map(info => {{
            const stats = state.stats.byPhoneme[info.id] || {{ total: 0, correctFirstTry: 0 }};
            const accuracy = stats.total > 0 ? Math.round((stats.correctFirstTry / stats.total) * 100) : 100;
            return `
              <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xl space-y-4 hover:border-amber-400 transition-all">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <span class="text-4xl">${{info.icon}}</span>
                    <div>
                      <h3 class="font-display text-xl text-slate-900">${{info.name}}</h3>
                      <p class="text-xs font-bold text-slate-500">${{info.title}}</p>
                    </div>
                  </div>
                  <span class="text-xs px-2.5 py-1 bg-amber-100 text-amber-900 font-black rounded-lg border border-amber-300">
                    ${{info.badge}}
                  </span>
                </div>

                <p class="text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  ${{info.soundDescription}}
                </p>

                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Precisão no CT:</span>
                  <span class="text-emerald-700 font-black text-sm">${{accuracy}}%</span>
                </div>

                <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div class="bg-emerald-500 h-2.5 rounded-full transition-all" style="width: ${{Math.max(10, accuracy)}}%"></div>
                </div>

                <div class="flex items-center justify-between pt-2">
                  <span class="text-xs text-slate-500 font-bold">${{stats.total}} chutes realizados</span>
                  <button onclick="window.app.navigateTo('training_game', {{ phoneme: '${{info.id}}' }})" class="touch-btn px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black rounded-xl text-sm shadow-md">
                    COMEÇAR TREINO ➔
                  </button>
                </div>
              </div>
            `;
          }}).join('')}}
        </div>
      </div>
    `;
  }}

  function renderWordWithGap(q, isAnswered) {{
    if (isAnswered) {{
      if (state.settings.showSyllableColors) {{
        return q.syllables.map((s, idx) => `
          <span class="syl-${{idx % 4}} font-display text-3xl sm:text-4xl px-3 py-1 font-bold">${{s}}</span>
        `).join('');
      }}
      return `<span class="font-display text-3xl sm:text-4xl text-slate-900 font-bold">${{q.word}}</span>`;
    }}

    const wordDisplay = q.word.replace(q.missingPart, ' ___ ');
    return `
      <span class="font-display text-3xl sm:text-4xl text-slate-800 tracking-wider font-black">
        ${{wordDisplay.replace('___', '<span class="text-amber-600 underline decoration-amber-500 decoration-wavy px-2 bg-amber-100 rounded-lg"> ? </span>')}}
      </span>
    `;
  }}

  function renderTrainingGameScreen() {{
    const pInfo = PHONEMES_INFO[state.training.selectedPhoneme];
    const q = state.training.questions[state.training.currentQuestionIndex];
    if (!q) return renderTrainingListScreen();

    const options = [q.missingPart, ...q.distractors].sort();

    setTimeout(() => {{
      if (document.getElementById('soccer-canvas')) {{
        if (activeSoccerCanvas) activeSoccerCanvas.destroy();
        activeSoccerCanvas = new SoccerMatchCanvas('soccer-canvas');
      }}
    }}, 120);

    return `
      <div class="max-w-4xl mx-auto px-2 sm:px-4 py-2 space-y-2">
        <div class="flex items-center justify-between gap-2 bg-white px-3 py-1.5 rounded-2xl border border-slate-200 shadow-sm">
          <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs flex items-center gap-1">
            ⬅ Trocar
          </button>
          
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-600">${{pInfo.title}}</span>
            <div class="flex space-x-1">
              ${{state.training.questions.map((_, i) => `
                <span class="w-3 h-3 rounded-full ${{i <= state.training.currentQuestionIndex ? 'bg-amber-500' : 'bg-slate-300'}}"></span>
              `).join('')}}
            </div>
          </div>

          <div class="flex items-center gap-1.5">
            <button onclick="window.app.speakCoachHint('${{q.word}}', '${{q.meaning}}')" class="touch-btn px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-lg text-xs flex items-center gap-1 shadow-sm">
              🗣️ <span>Técnico</span>
            </button>
            <button onclick="window.app.speakSyllables(${{JSON.stringify(q.syllables).replace(/"/g, '&quot;')}})" class="touch-btn px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold rounded-lg text-xs flex items-center gap-1">
              👂 <span>Sílabas</span>
            </button>
          </div>
        </div>

        <div id="match-canvas-container" class="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-800">
          <canvas id="soccer-canvas" width="800" height="290"></canvas>
          <div class="absolute top-2 left-3 bg-slate-950/80 text-amber-400 px-2.5 py-0.5 rounded-lg text-xs font-bold pointer-events-none">
            🎯 ${{pInfo.name}}
          </div>
        </div>

        <div id="exercise-card" class="bg-white rounded-2xl p-3 border-2 border-slate-800 shadow-md space-y-2 ${{state.settings.readingRuler ? 'reading-ruler-guide' : ''}}">
          <div class="flex flex-wrap items-center justify-between gap-2 px-2">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold text-slate-500 hidden sm:inline">COMPLETE:</span>
              <div class="inline-flex items-center justify-center gap-2 p-1.5 bg-slate-50 border border-slate-300 rounded-xl">
                ${{renderWordWithGap(q, state.training.answered)}}
              </div>
            </div>

            ${{!state.training.hintActive && !state.training.answered ? `
              <button onclick="window.app.activateTrainingHint()" class="touch-btn px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-bold rounded-xl text-xs flex items-center gap-1">
                📋 <span>Dica do VAR</span>
              </button>
            ` : state.training.hintActive ? `
              <div class="tactical-board px-2.5 py-1 rounded-xl text-white text-xs max-w-sm">
                <span class="text-amber-300 font-bold">Dica:</span> ${{q.hint ? q.hint.soundCue : pInfo.soundDescription}}
              </div>
            ` : ''}}
          </div>

          ${{!state.training.answered ? `
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              ${{options.map(opt => {{
                const isEliminated = state.training.eliminatedDistractors.includes(opt);
                if (isEliminated) {{
                  return `
                    <div class="p-2.5 rounded-xl bg-slate-100 border border-dashed border-slate-300 text-slate-400 font-display text-xl text-center line-through opacity-40 flex items-center justify-center">
                      ❌ ${{opt}}
                    </div>
                  `;
                }}
                return `
                  <button onclick="window.app.checkTrainingAnswer('${{opt}}')" class="touch-btn p-3 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 hover:from-slate-700 text-amber-400 font-display text-2xl tracking-wider border-2 border-amber-400 shadow-md transform active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span>⚽</span> <span>${{opt}}</span>
                  </button>
                `;
              }}).join('')}}
            </div>
          ` : `
            <div class="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-2.5 text-center flex items-center justify-between gap-3 animate-goal">
              <div class="text-left">
                <span class="font-display text-lg text-emerald-900 block">🎉 GOOOOOL!</span>
                <span class="text-xs text-emerald-800 font-medium">Palavra correta: <strong>${{q.word}}</strong></span>
              </div>
              <button onclick="window.app.nextTrainingQuestion()" class="touch-btn px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md">
                PRÓXIMO CHUTE ➔
              </button>
            </div>
          `}}
        </div>
      </div>
    `;
  }}

  function renderMatchScreen() {{
    const champ = state.match.championship;
    const stage = state.match.playStage;
    const stageInfo = MATCH_STAGE_TITLES[stage];
    const challenge = state.match.currentChallenge;

    setTimeout(() => {{
      if (document.getElementById('soccer-canvas-match')) {{
        if (activeSoccerCanvas) activeSoccerCanvas.destroy();
        activeSoccerCanvas = new SoccerMatchCanvas('soccer-canvas-match');
      }}
    }}, 120);

    if (state.match.matchFinished) {{
      return `
        <div class="max-w-2xl mx-auto px-4 py-8 text-center space-y-4">
          <div class="bg-white rounded-3xl p-6 border-4 border-amber-400 shadow-2xl space-y-4">
            <span class="text-6xl block animate-goal">🏆</span>
            <h2 class="font-display text-2xl sm:text-3xl text-slate-900">É CAMPEÃO!</h2>
            <div class="flex items-center justify-center gap-4 text-xl font-black">
              <span class="text-emerald-700">${{state.player.name}}</span>
              <span class="px-3 py-1 bg-slate-900 text-amber-400 rounded-lg">${{state.match.homeScore}} x 0</span>
              <span class="text-slate-500">${{champ.opponent}}</span>
            </div>
            <p class="text-slate-600 text-sm max-w-md mx-auto">
              Parabéns! Você venceu a grande final do <strong>${{champ.name}}</strong> com leitura de craque!
            </p>
            <div class="p-3 bg-amber-50 rounded-2xl border border-amber-300 text-amber-950 font-bold text-xs">
              🎁 VOCÊ GANHOU +1 PACOTE DE FIGURINHAS DOS CRAQUES!
            </div>
            <div class="flex justify-center gap-3 pt-2">
              <button onclick="window.app.openPackModal()" class="touch-btn px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black rounded-xl shadow-md text-sm animate-bounce">
                🎁 Abrir Pacote Agora!
              </button>
              <button onclick="window.app.navigateTo('album')" class="touch-btn px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-md text-sm">
                Ver Álbum
              </button>
              <button onclick="window.app.navigateTo('home')" class="touch-btn px-5 py-2.5 bg-slate-800 text-white font-bold rounded-xl shadow-md text-sm">
                Início
              </button>
            </div>
          </div>
        </div>
      `;
    }}

    return `
      <div class="max-w-4xl mx-auto px-2 sm:px-4 py-2 space-y-2">
        <!-- Barra de Placar Compacta -->
        <div class="bg-slate-950 text-white px-3 py-1.5 rounded-2xl border border-amber-400 flex items-center justify-between gap-2 shadow-md">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🏟️</span>
            <span class="text-xs text-amber-400 font-bold">${{champ.name}}</span>
          </div>

          <div class="flex items-center space-x-2 bg-slate-900 px-3 py-0.5 rounded-xl border border-slate-700 text-xs">
            <span class="text-slate-300 font-bold">${{state.player.name}}</span>
            <span class="text-emerald-400 font-black">${{state.match.homeScore}}</span>
            <span class="text-slate-500">x</span>
            <span class="text-slate-400">0</span>
            <span class="text-slate-400">${{champ.opponent}}</span>
          </div>

          <div class="flex items-center gap-1">
            <button onclick="window.app.speakWord('${{challenge.word}}')" class="touch-btn px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1">
              🔊 <span>Narrar</span>
            </button>
            <button onclick="window.app.navigateTo('home')" class="text-xs text-slate-400 hover:text-white px-1">
              ✕
            </button>
          </div>
        </div>

        <!-- 5 Lances da Partida (Badges com Ícones Diferenciados) -->
        <div class="bg-white px-3 py-1 rounded-xl border border-slate-200 flex items-center justify-between gap-1 text-[11px] font-bold">
          ${{MATCH_STAGE_TITLES.map((st, i) => `
            <div class="flex items-center gap-1 ${{i === stage ? 'text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-lg font-black' : i < stage ? 'text-slate-400' : 'text-slate-300'}}">
              <span>${{i < stage ? '✅' : st.icon}}</span>
              <span class="hidden sm:inline">${{st.name}}</span>
            </div>
          `).join('')}}
        </div>

        <!-- CAMPO DE FUTEBOL ANIMADO -->
        <div id="match-canvas-container" class="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-800">
          <canvas id="soccer-canvas-match" width="800" height="290"></canvas>
          <div class="absolute top-2 left-3 bg-slate-900/80 text-amber-400 px-2.5 py-0.5 rounded-lg text-xs font-bold pointer-events-none">
            🔥 LANCE ${{stage + 1}}: ${{stageInfo.name.toUpperCase()}}
          </div>
        </div>

        <!-- PAINEL DA JOGADA COM MECÂNICAS DIVERSIFICADAS -->
        <div id="match-card" class="bg-white rounded-2xl p-3 border-2 border-slate-800 shadow-md space-y-2 ${{state.settings.readingRuler ? 'reading-ruler-guide' : ''}}">
          
          <div class="flex flex-wrap items-center justify-between gap-2 px-1">
            <div class="space-y-0.5">
              <span class="text-[11px] font-black text-amber-700 uppercase tracking-wider block">
                ${{stageInfo.desc}}
              </span>

              ${{state.match.stageType === 'initial_sound' ? `
                <p class="reading-text font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Identifique o som inicial para roubar a bola na palavra: 
                  <strong class="text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">${{challenge.word}}</strong>
                </p>
              ` : state.match.stageType === 'minimal_pair' ? `
                <div class="flex items-center gap-2">
                  <p class="reading-text font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    Ouça com atenção o narrador e escolha o caminho do drible!
                  </p>
                  <button onclick="window.app.speakWord('Drible para o lado de: ${{challenge.word}}')" class="touch-btn px-2 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold border border-amber-300">
                    🔊 Ouvir Drible
                  </button>
                </div>
              ` : state.match.stageType === 'syllable_shuffle' ? `
                <p class="reading-text font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Toque nas sílabas na ordem para fazer a tabelinha de passes: 
                  <span class="text-emerald-700 font-black">${{challenge.word}}</span>
                </p>
              ` : `
                <p class="reading-text font-bold text-slate-800 text-sm sm:text-base leading-tight">
                  "${{challenge.sentenceMissing.replace('_____', '<span class="text-amber-600 underline decoration-amber-500 decoration-wavy px-2 bg-amber-100 rounded"> ? </span>')}}"
                </p>
              `}}
            </div>

            ${{!state.match.hintActive && !state.match.stageAnswered ? `
              <button onclick="window.app.activateMatchHint()" class="touch-btn px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-bold rounded-lg text-xs flex items-center gap-1">
                🎥 <span>VAR</span>
              </button>
            ` : state.match.hintActive ? `
              <div class="tactical-board px-2.5 py-1 rounded-xl text-white text-xs max-w-sm">
                <span class="text-amber-300 font-bold">VAR:</span> ${{challenge.hint ? challenge.hint.soundCue : 'Ouça a palavra!'}}
              </div>
            ` : ''}}
          </div>

          <!-- RENDERIZAÇÃO DA MECÂNICA ESPECÍFICA -->
          ${{!state.match.stageAnswered ? (
            state.match.stageType === 'syllable_shuffle' ? `
              <!-- LANCE 4: TABELINHA DE SÍLABAS (ORDENAÇÃO) -->
              <div class="space-y-3 pt-2">
                <!-- Linha de Conexão dos Passes -->
                <div class="flex items-center justify-center gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span class="text-xs text-amber-400 font-black mr-2">PASSES:</span>
                  ${{state.match.syllablesTarget.map((s, idx) => {{
                    const isDone = idx < state.match.syllablesSequence.length;
                    return `
                      <div class="px-3 py-1.5 rounded-lg font-display text-lg font-bold ${{isDone ? 'bg-emerald-500 text-slate-950 animate-bounce' : 'bg-slate-800 text-slate-400 border border-dashed border-slate-600'}} flex items-center gap-1">
                        <span>${{isDone ? '⚽' : '⏳'}}</span>
                        <span>${{isDone ? s : '?'}}</span>
                      </div>
                      ${{idx < state.match.syllablesTarget.length - 1 ? '<span class="text-slate-600 font-black">➔</span>' : ''}}
                    `;
                  }}).join('')}}
                </div>

                <!-- Botões das Sílabas Embaralhadas -->
                <div class="flex flex-wrap items-center justify-center gap-3">
                  ${{state.match.syllablesShuffled.map((syl, idx) => {{
                    const alreadyUsed = state.match.syllablesSequence.some(item => item.index === idx);
                    if (alreadyUsed) {{
                      return `
                        <div class="px-5 py-3 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-800 font-display text-2xl font-black opacity-50">
                          ✅ ${{syl}}
                        </div>
                      `;
                    }}
                    return `
                      <button onclick="window.app.handleSyllableClick('${{syl}}', ${{idx}})" class="touch-btn px-6 py-3.5 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-display text-2xl tracking-wider border-2 border-amber-600 shadow-lg transform active:scale-95 transition-all syllable-node">
                        ⚽ ${{syl}}
                      </button>
                    `;
                  }}).join('')}}
                </div>
              </div>
            ` : `
              <!-- DEMAIS LANCES (MÚLTIPLA ESCOLHA COM BOTÕES DE CHUTE) -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                ${{state.match.challengeOptions.map(opt => {{
                  const isEliminated = state.match.eliminatedDistractors.includes(opt);
                  if (isEliminated) {{
                    return `
                      <div class="p-2.5 rounded-xl bg-slate-100 border border-dashed border-slate-300 text-slate-400 font-display text-xl text-center line-through opacity-40 flex items-center justify-center">
                        ❌ ${{opt}}
                      </div>
                    `;
                  }}
                  return `
                    <button onclick="window.app.checkMatchAnswer('${{opt}}')" class="touch-btn p-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display text-2xl tracking-wider border-2 border-amber-500 shadow-md transform active:scale-95 transition-all flex items-center justify-center gap-2">
                      <span>⚽</span> <span>${{opt}}</span>
                    </button>
                  `;
                }}).join('')}}
              </div>
            `
          ) : `
            <div class="bg-emerald-900/90 text-white rounded-xl p-2.5 flex items-center justify-between gap-3 animate-goal">
              <div class="text-left">
                <span class="font-bold text-sm block">⚡ LANCE PERFEITO!</span>
                <span class="text-xs text-emerald-200">${{challenge.fullSentence}}</span>
              </div>
              <button onclick="window.app.advanceMatchStage()" class="touch-btn px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-md">
                ${{stage === 4 ? 'GOLAÇO! ➔' : 'CONTINUAR ➔'}}
              </button>
            </div>
          `}}
        </div>
      </div>
    `;
  }}

  function renderAlbumScreen() {{
    const totalCards = CARDS_DATABASE.length;
    const ownedCount = state.player.cards.length;
    const percent = Math.round((ownedCount / totalCards) * 100);

    const categories = [
      {{ id: 'todas', name: 'Todas as Figurinhas', icon: '🃏' }},
      {{ id: 'lendas', name: 'Lendas do Futebol', icon: '👑' }},
      {{ id: 'mascotes', name: 'Mascotes dos Fonemas', icon: '🐾' }},
      {{ id: 'itens', name: 'Itens Mágicos', icon: '⚡' }}
    ];

    const filteredCards = state.albumFilter === 'todas'
      ? CARDS_DATABASE
      : CARDS_DATABASE.filter(c => c.category === state.albumFilter);

    return `
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <!-- Topo do Álbum -->
        <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 border-4 border-amber-400 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <span class="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400 uppercase tracking-wider">
              ÁLBUM OFICIAL DOS CRAQUES DA LEITURA
            </span>
            <h2 class="font-display text-3xl sm:text-4xl text-white">COLEÇÃO HISTÓRICA 2026</h2>
            <p class="text-slate-300 text-xs sm:text-sm max-w-xl">
              Colecione os maiores jogadores, mascotes fonoaudiológicos e equipamentos de ouro completando partidas!
            </p>
          </div>

          <!-- Contador e Botão de Abrir Pacote -->
          <div class="bg-black/50 p-4 rounded-2xl border border-amber-400/30 text-center space-y-3 min-w-[240px]">
            <div class="flex justify-between items-center text-xs font-bold text-amber-300">
              <span>ÁLBUM COMPLETO:</span>
              <span class="text-white font-black text-sm">${{ownedCount}} / ${{totalCards}} (${{percent}}%)</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
              <div class="bg-gradient-to-r from-amber-400 to-yellow-500 h-3 rounded-full transition-all" style="width: ${{percent}}%"></div>
            </div>

            <button onclick="window.app.openPackModal()" class="touch-btn w-full py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transform active:scale-95">
              <span>🎁</span>
              <span>ABRIR PACOTES (${{state.player.packsAvailable}})</span>
            </button>
          </div>
        </div>

        <!-- Filtros de Categoria -->
        <div class="flex flex-wrap items-center gap-2">
          ${{categories.map(cat => `
            <button onclick="window.app.setAlbumFilter('${{cat.id}}')" class="touch-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 ${{state.albumFilter === cat.id ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}}">
              <span>${{cat.icon}}</span>
              <span>${{cat.name}}</span>
            </button>
          `).join('')}}
        </div>

        <!-- Grid das Figurinhas -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          ${{filteredCards.map(c => {{
            const isOwned = state.player.cards.includes(c.id);
            if (!isOwned) {{
              return `
                <div class="p-4 rounded-2xl card-locked text-center flex flex-col justify-between space-y-3 min-h-[220px]">
                  <div class="text-right">
                    <span class="text-[10px] text-slate-500 font-bold uppercase">${{c.category}}</span>
                  </div>
                  <div class="my-auto space-y-1">
                    <span class="text-4xl block opacity-30">❓</span>
                    <p class="font-display text-sm text-slate-400 font-bold">${{c.name}}</p>
                    <p class="text-[10px] text-slate-500">Bloqueada</p>
                  </div>
                  <div class="pt-2">
                    <span class="text-[10px] text-amber-500/60 font-bold">Ganhe pacotes para liberar</span>
                  </div>
                </div>
              `;
            }}

            const rarityClass = c.rarity === 'lendaria' ? 'card-legendary' : c.rarity === 'rara' ? 'card-rare' : 'card-common';

            return `
              <div onclick="window.app.inspectCard('${{c.id}}')" class="p-4 rounded-2xl ${{rarityClass}} text-slate-950 text-center flex flex-col justify-between space-y-2 cursor-pointer transform hover:-translate-y-1 transition-all min-h-[220px] shadow-lg">
                <div class="flex justify-between items-center text-[10px] font-black uppercase text-white drop-shadow">
                  <span>${{c.rarity}}</span>
                  <span class="bg-black/30 px-1.5 py-0.2 rounded font-black text-amber-300">${{c.rating}} ⭐</span>
                </div>

                <div class="my-auto space-y-1">
                  <span class="text-5xl block drop-shadow-md">${{c.icon}}</span>
                  <h4 class="font-display text-base font-black text-white drop-shadow leading-tight">${{c.name}}</h4>
                  <p class="text-[11px] font-bold text-white/90 drop-shadow">${{c.nickname}}</p>
                </div>

                <div class="bg-black/40 rounded-xl p-1.5 text-[10px] text-white flex justify-around font-black">
                  <span>D: ${{c.stats.drible}}</span>
                  <span>C: ${{c.stats.chute}}</span>
                  <span>P: ${{c.stats.passe}}</span>
                  <span class="text-emerald-300">L: ${{c.stats.leitura}}</span>
                </div>
              </div>
            `;
          }}).join('')}}
        </div>
      </div>
    `;
  }}

  function renderCoachDashboardScreen() {{
    const stats = state.stats;
    const overallAccuracy = stats.totalExercises > 0
      ? Math.round((stats.firstTryCorrect / stats.totalExercises) * 100)
      : 100;

    return `
      <div class="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <button onclick="window.app.navigateTo('home')" class="text-sm text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 mb-2">
              ⬅ Voltar ao Jogo
            </button>
            <h2 class="font-display text-3xl text-slate-900 flex items-center gap-2">
              <span>📋</span> <span>Painel do Técnico • Área dos Pais & Fono</span>
            </h2>
            <p class="text-sm text-slate-600">Acompanhamento de precisão, histórico de tentativas e treino personalizado.</p>
          </div>
          <div class="flex gap-2">
            <button onclick="window.print()" class="touch-btn px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md">
              🖨️ <span>Imprimir Relatório</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 text-center space-y-1 shadow-sm">
            <span class="text-xs text-slate-500 font-bold block">Taxa de Acerto de Primeira</span>
            <span class="font-display text-3xl text-emerald-600">${{overallAccuracy}}%</span>
          </div>
          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 text-center space-y-1 shadow-sm">
            <span class="text-xs text-slate-500 font-bold block">Total de Exercícios</span>
            <span class="font-display text-3xl text-slate-800">${{stats.totalExercises}}</span>
          </div>
          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 text-center space-y-1 shadow-sm">
            <span class="text-xs text-slate-500 font-bold block">Chutes na Trave (Superados)</span>
            <span class="font-display text-3xl text-amber-500">${{stats.crossbarHits}}</span>
          </div>
          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 text-center space-y-1 shadow-sm">
            <span class="text-xs text-slate-500 font-bold block">Dicas do VAR Usadas</span>
            <span class="font-display text-3xl text-blue-600">${{stats.hintsUsed}}</span>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md space-y-4">
          <h3 class="font-display text-xl text-slate-900 flex items-center gap-2">
            <span>📊</span> <span>Precisão por Eixo Fonológico</span>
          </h3>
          <div class="space-y-4">
            ${{Object.entries(stats.byPhoneme).map(([pKey, pStat]) => {{
              const pInfo = PHONEMES_INFO[pKey];
              const acc = pStat.total > 0 ? Math.round((pStat.correctFirstTry / pStat.total) * 100) : 100;
              return `
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs font-bold">
                    <span class="text-slate-800 font-bold">${{pInfo ? pInfo.name : pKey}}</span>
                    <span class="text-emerald-700 font-black">${{acc}}% (${{pStat.correctFirstTry}}/${{pStat.total}} acertos)</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                    <div class="bg-emerald-500 h-3 rounded-full transition-all" style="width: ${{Math.max(8, acc)}}%"></div>
                  </div>
                </div>
              `;
            }}).join('')}}
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-md space-y-4">
          <h3 class="font-display text-xl text-slate-900 flex items-center gap-2">
            <span>🎯</span> <span>Histórico de Lances com Apoio do VAR</span>
          </h3>
          <div class="space-y-2">
            ${{stats.recentMistakes.length > 0 ? stats.recentMistakes.map(m => `
              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span class="font-black text-slate-900">${{m.word}}</span>
                  <span class="text-slate-500 ml-2">Tentativa: <span class="line-through text-red-500 font-bold">${{m.attempted}}</span></span>
                </div>
                <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">${{m.phoneme}}</span>
              </div>
            `).join('') : '<p class="text-xs text-slate-500">Nenhum erro recente registrado. Todos os chutes na gaveta!</p>'}}
          </div>
        </div>
      </div>
    `;
  }}

  function renderLockerRoomScreen() {{
    const jerseyColors = [
      {{ name: 'Amarelinha Clássica', hex: '#facc15', class: 'from-amber-400 to-yellow-500 text-green-950' }},
      {{ name: 'Azul Celeste', hex: '#38bdf8', class: 'from-sky-400 to-blue-600 text-white' }},
      {{ name: 'Verde Esperança', hex: '#22c55e', class: 'from-emerald-400 to-green-600 text-white' }},
      {{ name: 'Vermelho Fúria', hex: '#ef4444', class: 'from-red-500 to-rose-600 text-white' }},
      {{ name: 'Preto Campeão', hex: '#0f172a', class: 'from-slate-800 to-slate-950 text-amber-400' }},
      {{ name: 'Branco Paz', hex: '#f8fafc', class: 'from-slate-100 to-slate-200 text-slate-900' }}
    ];

    return `
      <div class="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 class="font-display text-3xl text-slate-900 flex items-center gap-2">
              <span>👕</span> <span>Vestiário dos Craques</span>
            </h2>
            <p class="text-sm text-slate-600">Personalize seu jogador, número e uniforme do time:</p>
          </div>
          <button onclick="window.app.navigateTo('home')" class="touch-btn px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-sm text-slate-700">
            ⬅ Voltar
          </button>
        </div>

        <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-xl space-y-6">
          <div class="text-center space-y-3">
            <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${{state.player.jerseyColor}} flex items-center justify-center text-5xl shadow-xl border-4 border-amber-300">
              👕
            </div>
            <div>
              <p class="font-display text-2xl text-slate-900">${{state.player.name}}</p>
              <p class="text-sm font-bold text-amber-600">Camisa #${{state.player.jerseyNumber}}</p>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-bold text-slate-700 block mb-1">Nome do Craque:</label>
              <input id="player-name-input" type="text" value="${{state.player.name}}" maxlength="20" class="w-full px-4 py-3 rounded-xl border-2 border-slate-300 font-bold text-slate-800 focus:border-amber-500 focus:outline-none text-base">
            </div>

            <div>
              <label class="text-sm font-bold text-slate-700 block mb-1">Número da Camisa:</label>
              <div class="flex gap-2">
                ${{[7, 9, 10, 11, 20].map(n => `
                  <button onclick="window.app.setJerseyNumber(${{n}})" class="touch-btn flex-1 py-2.5 rounded-xl border-2 ${{state.player.jerseyNumber === n ? 'border-amber-500 bg-amber-500 text-slate-950' : 'border-slate-200 bg-slate-50 text-slate-700'}} font-display text-lg font-bold">
                    #${{n}}
                  </button>
                `).join('')}}
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-700 block">Cor do Uniforme:</label>
              <div class="grid grid-cols-2 gap-2">
                ${{jerseyColors.map(c => `
                  <button onclick="window.app.setJerseyColor('${{c.class}}', '${{c.hex}}')" class="touch-btn p-3 rounded-xl border-2 ${{state.player.jerseyBgHex === c.hex ? 'border-amber-500 ring-2 ring-amber-300' : 'border-slate-200'}} flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span class="w-4 h-4 rounded-full border border-slate-300" style="background-color: ${{c.hex}}"></span>
                    <span>${{c.name}}</span>
                  </button>
                `).join('')}}
              </div>
            </div>

            <button onclick="window.app.savePlayerProfile()" class="touch-btn w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-lg text-base">
              SALVAR CRAQUE ✅
            </button>
          </div>
        </div>
      </div>
    `;
  }}

  function render() {{
    const root = document.getElementById('app-root');
    if (!root) return;

    let content = '';
    switch (state.activeScreen) {{
      case 'home':
        content = renderHomeScreen();
        break;
      case 'training_list':
        content = renderTrainingListScreen();
        break;
      case 'training_game':
        content = renderTrainingGameScreen();
        break;
      case 'match':
        content = renderMatchScreen();
        break;
      case 'album':
        content = renderAlbumScreen();
        break;
      case 'coach_dashboard':
        content = renderCoachDashboardScreen();
        break;
      case 'locker_room':
        content = renderLockerRoomScreen();
        break;
      default:
        content = renderHomeScreen();
    }}

    root.innerHTML = renderHeader() + '<main class="pb-12">' + content + '</main>';
  }}

  // ================= API GLOBAL (WINDOW.APP) =================
  window.app = {{
    state,
    sound,
    navigateTo,
    speakWord: (text) => sound.speak(text),
    speakSyllables: (arr) => sound.speakSyllables(arr),
    speakCoachHint: (word, meaning) => {{
      sound.playTacticalHint();
      sound.speak(`A palavra é ${{word}}! Dica do professor: ${{meaning}}`);
    }},
    checkTrainingAnswer,
    activateTrainingHint,
    nextTrainingQuestion,
    checkMatchAnswer,
    activateMatchHint,
    advanceMatchStage,
    handleSyllableClick,
    openPackModal,
    confirmOpenPack,
    inspectCard,
    setAlbumFilter: (f) => {{
      state.albumFilter = f;
      render();
    }},
    toggleReadingRuler: () => {{
      state.settings.readingRuler = !state.settings.readingRuler;
      saveState();
      render();
      sound.speak(`Régua de leitura ${{state.settings.readingRuler ? 'ativada' : 'desativada'}}`);
    }},
    toggleAudioSpeed: () => {{
      state.settings.audioSpeed = state.settings.audioSpeed < 1.0 ? 1.0 : 0.8;
      sound.setSpeechRate(state.settings.audioSpeed);
      saveState();
      render();
      sound.speak(`Velocidade da voz alterada para ${{state.settings.audioSpeed < 1.0 ? 'lenta' : 'normal'}}`);
    }},
    toggleSyllableColors: () => {{
      state.settings.showSyllableColors = !state.settings.showSyllableColors;
      saveState();
      render();
    }},
    toggleMute: () => {{
      sound.isMuted = !sound.isMuted;
      render();
    }},
    setJerseyNumber: (num) => {{
      state.player.jerseyNumber = num;
      render();
    }},
    setJerseyColor: (cls, hex) => {{
      state.player.jerseyColor = cls;
      state.player.jerseyBgHex = hex;
      render();
    }},
    savePlayerProfile: () => {{
      const input = document.getElementById('player-name-input');
      if (input && input.value.trim()) {{
        state.player.name = input.value.trim();
      }}
      saveState();
      sound.speak(`Perfil do craque ${{state.player.name}} atualizado com sucesso!`);
      navigateTo('home');
    }}
  }};

  function startApp() {{
    try {{
      loadStoredState();
      render();
    }} catch(e) {{
      console.error('Erro ao iniciar:', e);
      const root = document.getElementById('app-root');
      if (root) root.innerHTML = '<div style="padding:30px;color:red;font-size:18px;">Erro ao iniciar: ' + e.message + '</div>';
    }}
  }}

  startApp();
}})();

document.addEventListener('click', () => {{
  if (window.app && window.app.sound) window.app.sound.unlockAudio();
}}, {{ once: false }});

document.addEventListener('touchstart', () => {{
  if (window.app && window.app.sound) window.app.sound.unlockAudio();
}}, {{ once: false }});
"""

# Salvar bundle.js
with open(os.path.join(ROOT_DIR, 'bundle.js'), 'w', encoding='utf-8') as f:
    f.write(js_code)
print(f"Salvo bundle.js ({len(js_code)} bytes)")

# Gerar index.html e jogo_completo.html com o CSS embutido
html_content = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Craques da Leitura FC ⚽ - Jogo Educativo de Futebol & Alfabetização</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Lexend:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  
  <style>
{full_css}
  </style>
</head>
<body class="bg-slate-100 text-slate-800 min-h-screen selection:bg-amber-400 selection:text-slate-950">
  
  <div id="app-root"></div>

  <script>
{js_code}
  </script>
</body>
</html>
"""

with open(os.path.join(ROOT_DIR, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)
print(f"Salvo index.html ({len(html_content)} bytes)")

with open(os.path.join(ROOT_DIR, 'jogo_completo.html'), 'w', encoding='utf-8') as f:
    f.write(html_content)
print(f"Salvo jogo_completo.html ({len(html_content)} bytes)")

print("Build concluído com sucesso!")

// Craques da Leitura FC - Aplicação Principal
import { PHONEMES_INFO, WORDS_DATABASE, CHAMPIONSHIPS } from './database/words.js';
import { sound } from './audio.js';

// Estado global do jogo
const state = {
  activeScreen: 'home', // 'home', 'training_list', 'training_game', 'match', 'coach_dashboard', 'locker_room'
  player: {
    name: 'Craque Campeão',
    jerseyNumber: 10,
    jerseyColor: 'from-amber-400 to-yellow-500 text-green-950',
    jerseyBgHex: '#facc15',
    mascot: 'Canarinho',
    level: 1,
    stars: 12,
    xp: 240,
    trophies: ['copa_bairro'],
    unlockedChampionships: ['copa_bairro', 'campeonato_estadual']
  },
  settings: {
    audioSpeed: 0.85,
    showSyllableColors: true,
    fontSizeMultiplier: 1.0,
    soundEnabled: true
  },
  training: {
    selectedPhoneme: null,
    currentQuestionIndex: 0,
    questions: [],
    score: 0,
    starsEarned: 0,
    eliminatedDistractors: [],
    hintActive: false,
    answered: false
  },
  match: {
    championship: null,
    playStage: 0, // 0: Roubada, 1: Passe, 2: Drible, 3: Cruzamento, 4: Chute ao Gol
    homeScore: 0,
    awayScore: 0,
    currentChallenge: null,
    stageAnswered: false,
    matchFinished: false,
    hintActive: false,
    eliminatedDistractors: []
  },
  // Métricas para o Painel do Técnico (Pais)
  stats: {
    totalExercises: 0,
    firstTryCorrect: 0,
    hintsUsed: 0,
    crossbarHits: 0,
    byPhoneme: {
      CH: { total: 8, correctFirstTry: 7, errors: 1 },
      P_VS_T: { total: 10, correctFirstTry: 6, errors: 4 },
      R_VIBRANTE: { total: 9, correctFirstTry: 7, errors: 2 },
      S: { total: 7, correctFirstTry: 6, errors: 1 }
    },
    recentMistakes: [
      { word: 'TRAVE', attempted: 'PRAVE', phoneme: 'P_VS_T', date: 'Hoje' },
      { word: 'TÁTICA', attempted: 'PÁTICA', phoneme: 'P_VS_T', date: 'Hoje' }
    ]
  }
};

// Carregar progresso do LocalStorage se existir
function loadStoredState() {
  try {
    const saved = localStorage.getItem('craques_leitura_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.player) Object.assign(state.player, parsed.player);
      if (parsed.stats) Object.assign(state.stats, parsed.stats);
      if (parsed.settings) Object.assign(state.settings, parsed.settings);
    }
  } catch (e) {
    console.error('Erro ao ler progresso:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('craques_leitura_state', JSON.stringify({
      player: state.player,
      stats: state.stats,
      settings: state.settings
    }));
  } catch (e) {
    console.error('Erro ao salvar progresso:', e);
  }
}

// Navegação entre telas
export function navigateTo(screen, params = {}) {
  state.activeScreen = screen;
  if (screen === 'training_game' && params.phoneme) {
    initTrainingGame(params.phoneme);
  } else if (screen === 'match' && params.championshipId) {
    initMatchGame(params.championshipId);
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= LÓGICA DO CENTRO DE TREINAMENTO =================
function initTrainingGame(phonemeKey) {
  state.training.selectedPhoneme = phonemeKey;
  state.training.currentQuestionIndex = 0;
  state.training.score = 0;
  state.training.starsEarned = 0;
  state.training.answered = false;
  state.training.hintActive = false;
  state.training.eliminatedDistractors = [];

  // Filtrar palavras deste fonema
  const pool = WORDS_DATABASE.filter(w => w.phoneme === phonemeKey);
  state.training.questions = pool.length > 0 ? pool : WORDS_DATABASE.slice(0, 4);

  // Áudio de introdução ao entrar no treino
  const pInfo = PHONEMES_INFO[phonemeKey];
  setTimeout(() => {
    sound.speak(`${pInfo.title}. ${pInfo.coachQuote}`);
  }, 400);
}

function checkTrainingAnswer(selectedOption) {
  if (state.training.answered) return;

  const currentQ = state.training.questions[state.training.currentQuestionIndex];
  const phoneme = currentQ.phoneme;
  state.stats.totalExercises++;
  state.stats.byPhoneme[phoneme].total++;

  if (selectedOption === currentQ.missingPart) {
    // ACERTOU! GOL!
    state.training.answered = true;
    sound.playKick();
    setTimeout(() => sound.playGoalCheer(), 180);

    if (!state.training.hintActive) {
      state.stats.firstTryCorrect++;
      state.stats.byPhoneme[phoneme].correctFirstTry++;
      state.player.stars += 3;
      state.player.xp += 30;
    } else {
      state.player.stars += 2;
      state.player.xp += 20;
    }

    saveState();
    render();

    // Narrar a palavra completa e parabéns
    setTimeout(() => {
      sound.speak(`Golaço! A palavra é ${currentQ.word}! ${currentQ.meaning}`);
    }, 1200);

  } else {
    // NA TRAVE! FEEDBACK POSITIVO
    sound.playCrossbar();
    state.stats.crossbarHits++;
    state.stats.byPhoneme[phoneme].errors++;
    state.stats.recentMistakes.unshift({
      word: currentQ.word,
      attempted: selectedOption,
      phoneme: phoneme,
      date: 'Agora'
    });
    if (state.stats.recentMistakes.length > 8) state.stats.recentMistakes.pop();
    saveState();

    // Ativar animação de trave no elemento
    const cardEl = document.getElementById('exercise-card');
    if (cardEl) {
      cardEl.classList.remove('animate-crossbar');
      void cardEl.offsetWidth; // trigger reflow
      cardEl.classList.add('animate-crossbar');
    }

    // Comentário motivador do técnico
    sound.speak(`Foi na trave! Não desista. Veja a dica do treinador e tente de novo!`, 0.9);
    // Ativa a dica automaticamente no erro para guiar
    activateTrainingHint();
    render();
  }
}

function activateTrainingHint() {
  state.training.hintActive = true;
  state.stats.hintsUsed++;
  sound.playTacticalHint();

  const currentQ = state.training.questions[state.training.currentQuestionIndex];
  if (currentQ.hint && currentQ.hint.varEliminate) {
    state.training.eliminatedDistractors = [...currentQ.hint.varEliminate];
  }

  // Falar dica articulatória
  if (currentQ.hint && currentQ.hint.soundCue) {
    setTimeout(() => {
      sound.speak(`Dica do treinador: ${currentQ.hint.soundCue}. ${currentQ.hint.articulatoryCue || ''}`);
    }, 300);
  }
}

function nextTrainingQuestion() {
  if (state.training.currentQuestionIndex < state.training.questions.length - 1) {
    state.training.currentQuestionIndex++;
    state.training.answered = false;
    state.training.hintActive = false;
    state.training.eliminatedDistractors = [];
    render();

    const nextQ = state.training.questions[state.training.currentQuestionIndex];
    setTimeout(() => {
      sound.speak(`Complete a palavra para chutar: ${nextQ.meaning}`);
    }, 300);
  } else {
    // Finalizou o treino com festa
    sound.playCelebrationFanfare();
    state.player.xp += 50;
    saveState();
    alert(`🎉 Parabéns, Craque! Você concluiu o treinamento do ${PHONEMES_INFO[state.training.selectedPhoneme].name}! Ganhou medalha de dedicação!`);
    navigateTo('training_list');
  }
}

// ================= LÓGICA DO MODO CAMPEONATO (PARTIDA) =================
const MATCH_STAGE_TITLES = [
  { name: '1. Roubada de Bola', desc: 'Desarme no meio-campo! Identifique o som inicial correto.' },
  { name: '2. Passe Preciso', desc: 'Lance em profundidade! Complete com a sílaba certa.' },
  { name: '3. Drible Desconcertante', desc: 'Drible de corpo no zagueiro! Escolha a letra correta.' },
  { name: '4. Cruzamento na Área', desc: 'Bola alçada na grande área! Ordene as palavras da jogada.' },
  { name: '5. Chute a Gol!', desc: 'Cara a cara com o goleiro! Leia a frase e faça a decisão do gol!' }
];

function initMatchGame(championshipId) {
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
  setTimeout(() => {
    sound.playWhistle();
    setTimeout(() => {
      sound.speak(`Começa o grande jogo no ${champ.stadium}! ${state.player.name} contra ${champ.opponent}!`);
    }, 700);
  }, 300);
}

function loadMatchStageChallenge() {
  state.match.stageAnswered = false;
  state.match.hintActive = false;
  state.match.eliminatedDistractors = [];

  // Escolhe palavras equilibrando os 4 fonemas
  const stage = state.match.playStage;
  const phonemeKeys = ['CH', 'P_VS_T', 'R_VIBRANTE', 'S'];
  const targetPhoneme = phonemeKeys[stage % phonemeKeys.length];
  const candidates = WORDS_DATABASE.filter(w => w.phoneme === targetPhoneme);
  state.match.currentChallenge = candidates[Math.floor(Math.random() * candidates.length)] || WORDS_DATABASE[0];
}

function checkMatchAnswer(option) {
  if (state.match.stageAnswered) return;

  const challenge = state.match.currentChallenge;
  const isCorrect = (option === challenge.missingPart);
  state.stats.totalExercises++;
  state.stats.byPhoneme[challenge.phoneme].total++;

  if (isCorrect) {
    state.match.stageAnswered = true;
    sound.playKick();

    if (!state.match.hintActive) {
      state.stats.firstTryCorrect++;
      state.stats.byPhoneme[challenge.phoneme].correctFirstTry++;
    }

    if (state.match.playStage === 4) {
      // É o chute final: GOL!
      state.match.homeScore++;
      sound.playGoalCheer();
      state.player.stars += 5;
      state.player.xp += 100;

      // Desbloquear próximo campeonato se aplicável
      const currIdx = CHAMPIONSHIPS.findIndex(c => c.id === state.match.championship.id);
      if (currIdx < CHAMPIONSHIPS.length - 1) {
        const nextChamp = CHAMPIONSHIPS[currIdx + 1];
        if (!state.player.unlockedChampionships.includes(nextChamp.id)) {
          state.player.unlockedChampionships.push(nextChamp.id);
        }
      }
      if (!state.player.trophies.includes(state.match.championship.id)) {
        state.player.trophies.push(state.match.championship.id);
      }
      state.match.matchFinished = true;
      saveState();
      render();

      setTimeout(() => {
        sound.speak(`ÉÉÉ GOOOOL! Que golaço de campeão! ${state.player.name} marca o gol do título!`);
      }, 1000);
    } else {
      // Avançou um lance da jogada
      sound.speak(`Belo lance! A jogada continua rumo ao gol!`);
      render();
    }
  } else {
    // Bola na Trave
    sound.playCrossbar();
    state.stats.crossbarHits++;
    state.stats.byPhoneme[challenge.phoneme].errors++;
    state.stats.recentMistakes.unshift({
      word: challenge.word,
      attempted: option,
      phoneme: challenge.phoneme,
      date: 'Nesta Partida'
    });
    saveState();

    const card = document.getElementById('match-card');
    if (card) {
      card.classList.remove('animate-crossbar');
      void card.offsetWidth;
      card.classList.add('animate-crossbar');
    }

    sound.speak(`Na trave! Não tem problema, o zagueiro tocou de volta. Chame o VAR ou tente outra vez!`);
    activateMatchHint();
    render();
  }
}

function activateMatchHint() {
  state.match.hintActive = true;
  state.stats.hintsUsed++;
  sound.playTacticalHint();
  const challenge = state.match.currentChallenge;
  if (challenge.hint && challenge.hint.varEliminate) {
    state.match.eliminatedDistractors = [...challenge.hint.varEliminate];
  }
  if (challenge.hint && challenge.hint.soundCue) {
    setTimeout(() => {
      sound.speak(`Dica tática: ${challenge.hint.soundCue}`);
    }, 400);
  }
}

function advanceMatchStage() {
  if (state.match.playStage < 4) {
    state.match.playStage++;
    loadMatchStageChallenge();
    render();
    sound.speak(MATCH_STAGE_TITLES[state.match.playStage].desc);
  }
}

// ================= RENDERIZADORES DE TELAS =================

function renderHeader() {
  return `
    <header class="bg-slate-900 border-b-4 border-amber-500 shadow-xl sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <!-- Logo e Craque -->
        <div class="flex items-center space-x-3 cursor-pointer" onclick="window.app.navigateTo('home')">
          <div class="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform -rotate-3">
            ⚽
          </div>
          <div>
            <h1 class="font-display text-xl sm:text-2xl text-white tracking-wider flex items-center gap-2">
              CRAQUES DA LEITURA <span class="text-amber-400 text-xs px-2 py-0.5 bg-amber-500/20 rounded border border-amber-400">FC</span>
            </h1>
            <p class="text-xs text-slate-300 flex items-center gap-2">
              <span>Camisa <strong>#${state.player.jerseyNumber}</strong> ${state.player.name}</span>
              <span class="text-amber-400 font-bold">⭐ ${state.player.stars}</span>
              <span class="text-emerald-400 font-bold">🏆 ${state.player.trophies.length}</span>
            </p>
          </div>
        </div>

        <!-- Menu de Navegação Rápida -->
        <nav class="flex items-center space-x-2">
          <button onclick="window.app.navigateTo('home')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${state.activeScreen === 'home' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}">
            🏟️ <span>Início</span>
          </button>
          <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${state.activeScreen.startsWith('training') ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}">
            🏃 <span>Treinos</span>
          </button>
          <button onclick="window.app.navigateTo('locker_room')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${state.activeScreen === 'locker_room' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-800 text-white hover:bg-slate-700'}">
            👕 <span>Vestiário</span>
          </button>
          <button onclick="window.app.navigateTo('coach_dashboard')" class="touch-btn px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 ${state.activeScreen === 'coach_dashboard' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-emerald-950 text-emerald-300 border border-emerald-600/40 hover:bg-emerald-900'}">
            📋 <span>Painel do Técnico</span>
          </button>
        </nav>

        <!-- Barra de Acessibilidade Dislexia & Áudio -->
        <div class="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
          <button onclick="window.app.toggleAudioSpeed()" title="Velocidade da Voz" class="text-xs px-2 py-1 rounded bg-slate-700 text-amber-300 hover:bg-slate-600 font-bold">
            ${state.settings.audioSpeed < 1.0 ? '🐢 Lento' : '🐇 Normal'}
          </button>
          <button onclick="window.app.toggleSyllableColors()" title="Colorir Sílabas" class="text-xs px-2 py-1 rounded ${state.settings.showSyllableColors ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'} font-bold">
            🎨 Sílabas
          </button>
          <button onclick="window.app.toggleMute()" title="Ativar/Desativar Som" class="text-xs px-2 py-1 rounded bg-slate-700 text-slate-200 hover:bg-slate-600">
            ${sound.isMuted ? '🔇 Mudo' : '🔊 Som'}
          </button>
        </div>
      </div>
    </header>
  `;
}

// 1. TELA INICIAL (HUB DO ESTÁDIO & CAMPEONATOS)
function renderHomeScreen() {
  return `
    <div class="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <!-- Banner do Craque Card -->
      <div class="relative overflow-hidden rounded-3xl craque-card p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-4 text-center md:text-left z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-sm font-bold">
            <span>⚽ TEMPORADA 2026</span> • <span>ALFABETIZAÇÃO CAMPEÃ</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Pronto para brilhar em campo, <span class="text-amber-400 underline decoration-amber-400">${state.player.name}</span>?
          </h2>
          <p class="text-slate-300 text-base sm:text-lg max-w-xl">
            Cada desafio resolvido é um passe de trivela, um drible mágico e um golaço! Treine seus fonemas e conquiste a taça do mundo!
          </p>
          <div class="flex flex-wrap items-center gap-4 justify-center md:justify-start pt-2">
            <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-2xl shadow-xl flex items-center gap-2 transform active:scale-95">
              <span>🏃 ENTRAR NO TREINO</span>
            </button>
            <button onclick="window.app.openChampionshipModal()" class="touch-btn px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-xl flex items-center gap-2 transform active:scale-95">
              <span>🏆 JOGAR CAMPEONATO</span>
            </button>
          </div>
        </div>

        <!-- Card Holográfico do Jogador -->
        <div class="w-64 sm:w-72 bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-600 p-1.5 rounded-3xl shadow-2xl z-10 transform rotate-1 hover:rotate-0 transition-transform">
          <div class="bg-slate-950 p-4 rounded-[22px] text-center space-y-3 border border-amber-300/30">
            <div class="flex justify-between items-center text-amber-400 font-extrabold text-sm">
              <span>NÍVEL ${state.player.level}</span>
              <span>NOTA 99 ⭐</span>
            </div>
            <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${state.player.jerseyColor} flex items-center justify-center text-4xl shadow-inner border-4 border-amber-300">
              👕
            </div>
            <div>
              <p class="font-display text-xl text-white tracking-wide">${state.player.name}</p>
              <p class="text-xs text-amber-300 font-bold">Camisa #${state.player.jerseyNumber} • ${state.player.mascot}</p>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800 text-slate-300">
              <div class="bg-slate-900 p-1.5 rounded">CHUTE: <strong>98</strong></div>
              <div class="bg-slate-900 p-1.5 rounded">PASSE: <strong>95</strong></div>
              <div class="bg-slate-900 p-1.5 rounded">DRIBLE: <strong>99</strong></div>
              <div class="bg-slate-900 p-1.5 rounded">VISÃO: <strong>94</strong></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção: Campeonatos Oficiais -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-display text-2xl text-slate-800 flex items-center gap-2">
            <span>🏆</span> <span>Campeonatos em Disputa</span>
          </h3>
          <span class="text-xs font-bold text-slate-500">Avance nos treinos para liberar todas as taças</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          ${CHAMPIONSHIPS.map(champ => {
            const isUnlocked = state.player.unlockedChampionships.includes(champ.id);
            const isChampion = state.player.trophies.includes(champ.id);
            return `
              <div class="bg-white rounded-3xl p-5 border-2 ${isChampion ? 'border-amber-400 shadow-amber-100' : isUnlocked ? 'border-slate-200' : 'border-slate-200 opacity-60'} shadow-lg flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <div class="flex justify-between items-start">
                    <span class="text-3xl">${champ.badgeIcon}</span>
                    ${isChampion ? '<span class="text-xs font-black px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full border border-amber-300">CAMPEÃO!</span>' : ''}
                  </div>
                  <h4 class="font-bold text-lg text-slate-900">${champ.name}</h4>
                  <p class="text-xs text-emerald-700 font-bold">🏟️ ${champ.stadium}</p>
                  <p class="text-xs text-slate-600">${champ.description}</p>
                </div>

                <div>
                  ${isUnlocked ? `
                    <button onclick="window.app.navigateTo('match', { championshipId: '${champ.id}' })" class="touch-btn w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md text-sm">
                      ${isChampion ? 'Jogar Novamente' : 'Jogar Partida'}
                    </button>
                  ` : `
                    <div class="w-full py-2.5 bg-slate-100 text-slate-400 font-bold rounded-xl text-center text-xs flex items-center justify-center gap-1">
                      🔒 Bloqueado (${champ.unlockThreshold} estrelas)
                    </div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Seção: Centros de Treinamento Rápido -->
      <div class="space-y-4">
        <h3 class="font-display text-2xl text-slate-800 flex items-center gap-2">
          <span>🎯</span> <span>Centro de Treinamento dos Fonemas</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${Object.values(PHONEMES_INFO).map(info => `
            <div onclick="window.app.navigateTo('training_game', { phoneme: '${info.id}' })" class="cursor-pointer bg-gradient-to-br ${info.color} text-white p-5 rounded-3xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-between h-44">
              <div class="flex justify-between items-start">
                <span class="text-3xl">${info.icon}</span>
                <span class="font-black text-xs px-2 py-1 bg-black/20 rounded-lg">${info.badge}</span>
              </div>
              <div>
                <h4 class="font-bold text-lg">${info.title}</h4>
                <p class="text-xs text-white/80 line-clamp-2">${info.soundDescription}</p>
              </div>
              <div class="text-xs font-bold text-amber-300 flex items-center gap-1">
                <span>Entrar no Treino</span> ➔
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 2. TELA DO CENTRO DE TREINAMENTO (LISTA)
function renderTrainingListScreen() {
  return `
    <div class="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <button onclick="window.app.navigateTo('home')" class="text-sm text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 mb-2">
            ⬅ Voltar ao Estádio
          </button>
          <h2 class="font-display text-3xl text-slate-900">Centro de Treinamento dos Craques (CT)</h2>
          <p class="text-slate-600 text-sm">Escolha qual habilidade você quer aprimorar hoje. Cada acerto fortalece sua leitura!</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${Object.values(PHONEMES_INFO).map(info => {
          const stats = state.stats.byPhoneme[info.id] || { total: 0, correctFirstTry: 0 };
          const accuracy = stats.total > 0 ? Math.round((stats.correctFirstTry / stats.total) * 100) : 0;
          return `
            <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xl space-y-4 hover:border-amber-400 transition-colors">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center text-3xl shadow-md">
                    ${info.icon}
                  </div>
                  <div>
                    <span class="text-xs font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-700">${info.badge}</span>
                    <h3 class="font-bold text-xl text-slate-900">${info.title}</h3>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-xs text-slate-500 font-bold block">DOMÍNIO</span>
                  <span class="font-black text-lg text-emerald-600">${accuracy}%</span>
                </div>
              </div>

              <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <p class="text-slate-700 font-semibold">🗣️ <strong>Como fazer:</strong> ${info.articulatoryTip}</p>
                <p class="text-slate-500 italic">💬 "${info.coachQuote}"</p>
              </div>

              <!-- Barra de Progresso -->
              <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <div class="bg-emerald-500 h-2.5 rounded-full transition-all" style="width: ${Math.max(10, accuracy)}%"></div>
              </div>

              <div class="flex items-center justify-between pt-2">
                <span class="text-xs text-slate-500 font-bold">${stats.total} chutes realizados</span>
                <button onclick="window.app.navigateTo('training_game', { phoneme: '${info.id}' })" class="touch-btn px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black rounded-xl text-sm shadow-md">
                  COMEÇAR TREINO ➔
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 3. TELA DE JOGO DE TREINAMENTO (INTERATIVA)
function renderTrainingGameScreen() {
  const pInfo = PHONEMES_INFO[state.training.selectedPhoneme];
  const q = state.training.questions[state.training.currentQuestionIndex];
  if (!q) return renderTrainingListScreen();

  // Opções de resposta (a correta + distratores embaralhados)
  const options = [q.missingPart, ...q.distractors].sort();

  return `
    <div class="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <!-- Topo do Treino: Progresso e Botão Voltar -->
      <div class="flex items-center justify-between">
        <button onclick="window.app.navigateTo('training_list')" class="touch-btn px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-sm">
          ⬅ Trocar de Treino
        </button>
        <div class="flex items-center space-x-2">
          <span class="text-xs font-bold text-slate-500">Treino ${state.training.currentQuestionIndex + 1} de ${state.training.questions.length}</span>
          <div class="flex space-x-1">
            ${state.training.questions.map((_, i) => `
              <span class="w-3 h-3 rounded-full ${i <= state.training.currentQuestionIndex ? 'bg-amber-500' : 'bg-slate-300'}"></span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Campo de Treino / Card Interativo -->
      <div id="exercise-card" class="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
        
        <!-- Faixa Superior com Informação do Fonema -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div class="flex items-center space-x-3">
            <span class="text-3xl">${pInfo.icon}</span>
            <div>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">${pInfo.badge}</span>
              <h3 class="font-bold text-lg text-slate-900">${pInfo.title}</h3>
            </div>
          </div>

          <!-- Botões de Ajuda Sonora -->
          <div class="flex items-center space-x-2">
            <button onclick="window.app.speakWord('${q.word}')" title="Ouvir Palavra" class="touch-btn px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold rounded-xl text-xs flex items-center gap-1">
              🔊 <span>Ouvir</span>
            </button>
            <button onclick="window.app.speakSyllables(${JSON.stringify(q.syllables).replace(/"/g, '&quot;')})" title="Ouvir Sílaba por Sílaba" class="touch-btn px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold rounded-xl text-xs flex items-center gap-1">
              👂 <span>Fatiar Sílabas</span>
            </button>
          </div>
        </div>

        <!-- O Desafio do Chute a Gol -->
        <div class="text-center space-y-4 py-4">
          <p class="text-slate-600 font-medium text-base sm:text-lg">
            ⚽ O atacante vai chutar! Complete com a letra ou sílaba certa para marcar o gol:
          </p>

          <!-- Palavra com a Lacuna para Preencher -->
          <div class="inline-flex items-center justify-center gap-3 p-4 sm:p-6 bg-slate-50 border-2 border-slate-300 rounded-3xl shadow-inner">
            ${renderWordWithGap(q, state.training.answered)}
          </div>

          <p class="text-xs text-slate-500 font-bold">Significado: "${q.meaning}"</p>
        </div>

        <!-- Seção da Dica do Treinador / VAR (NOVA FUNCIONALIDADE) -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          ${!state.training.hintActive && !state.training.answered ? `
            <button onclick="window.app.activateTrainingHint()" class="touch-btn px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border-2 border-amber-300 font-extrabold rounded-2xl text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-transform active:scale-95">
              <span>📋 PEDIR DICA DO TREINADOR / VAR</span>
            </button>
          ` : state.training.hintActive ? `
            <div class="tactical-board p-3 rounded-2xl text-white text-xs w-full space-y-1 shadow-lg">
              <div class="flex items-center gap-1.5 text-amber-300 font-bold">
                <span>📋 Dica Tática:</span>
                <span>${q.hint ? q.hint.soundCue : pInfo.soundDescription}</span>
              </div>
              <p class="text-emerald-200">${q.hint ? q.hint.articulatoryCue : pInfo.articulatoryTip}</p>
            </div>
          ` : '<div></div>'}
        </div>

        <!-- Opções de Chute (Bolas/Botões de Resposta) -->
        ${!state.training.answered ? `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            ${options.map(opt => {
              const isEliminated = state.training.eliminatedDistractors.includes(opt);
              if (isEliminated) {
                return `
                  <div class="p-4 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 font-display text-xl text-center line-through opacity-50 flex items-center justify-center">
                    ❌ ${opt}
                  </div>
                `;
              }
              return `
                <button onclick="window.app.checkTrainingAnswer('${opt}')" class="touch-btn p-4 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-amber-400 font-display text-2xl tracking-wider border-2 border-amber-400 shadow-xl transform active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span>⚽</span> <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
        ` : `
          <!-- Feedback de Gol! -->
          <div class="bg-emerald-50 border-3 border-emerald-500 rounded-3xl p-6 text-center space-y-4 animate-goal shadow-xl">
            <span class="text-5xl block">🎉⚽ GOOOOOOL!</span>
            <h4 class="font-display text-2xl text-emerald-900">VOCÊ MARCOU UM GOLAÇO!</h4>
            <p class="text-sm text-emerald-800 font-medium">
              A palavra correta é <strong>${q.word}</strong>! Você conquistou estrelas para o seu time!
            </p>
            <button onclick="window.app.nextTrainingQuestion()" class="touch-btn px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-black text-base rounded-2xl shadow-xl transform active:scale-95">
              PRÓXIMO CHUTE ➔
            </button>
          </div>
        `}
      </div>
    </div>
  `;
}

// Auxiliar para exibir palavra com lacuna e cores silábicas
function renderWordWithGap(q, isAnswered) {
  if (isAnswered) {
    if (state.settings.showSyllableColors) {
      return q.syllables.map((s, idx) => `
        <span class="syl-${idx % 4} font-display text-3xl sm:text-4xl px-3 py-1 font-bold">${s}</span>
      `).join('');
    }
    return `<span class="font-display text-3xl sm:text-4xl text-slate-900 font-bold">${q.word}</span>`;
  }

  // Se ainda não respondeu, substitui o missingPart por um traço evidente
  const wordDisplay = q.word.replace(q.missingPart, ' ___ ');
  return `
    <span class="font-display text-3xl sm:text-4xl text-slate-800 tracking-wider font-black">
      ${wordDisplay.replace('___', '<span class="text-amber-600 underline decoration-amber-500 decoration-wavy px-2 bg-amber-100 rounded-lg"> ? </span>')}
    </span>
  `;
}

// 4. TELA DO MODO PARTIDA / CAMPEONATO
function renderMatchScreen() {
  const champ = state.match.championship;
  const stage = state.match.playStage;
  const stageInfo = MATCH_STAGE_TITLES[stage];
  const challenge = state.match.currentChallenge;

  if (state.match.matchFinished) {
    return `
      <div class="max-w-3xl mx-auto px-4 py-12 text-center space-y-6">
        <div class="bg-white rounded-3xl p-8 border-4 border-amber-400 shadow-2xl space-y-6">
          <span class="text-7xl block animate-goal">🏆</span>
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">APITO FINAL: É CAMPEÃO!</h2>
          <div class="flex items-center justify-center gap-6 text-2xl font-black">
            <span class="text-emerald-700">${state.player.name}</span>
            <span class="px-4 py-2 bg-slate-900 text-amber-400 rounded-xl">${state.match.homeScore} x 0</span>
            <span class="text-slate-500">${champ.opponent}</span>
          </div>
          <p class="text-slate-600 text-base max-w-lg mx-auto">
            Sensacional! Com leitura afiada, passes precisos e finalização certeira, você levantou o troféu do <strong>${champ.name}</strong>!
          </p>
          <div class="flex justify-center gap-4 pt-4">
            <button onclick="window.app.navigateTo('home')" class="touch-btn px-6 py-3.5 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg">
              Voltar ao Início
            </button>
            <button onclick="window.app.navigateTo('coach_dashboard')" class="touch-btn px-6 py-3.5 bg-slate-900 text-amber-400 font-bold rounded-2xl shadow-lg">
              Ver Relatório do Técnico
            </button>
          </div>
        </div>
      </div>
    `;
  }

  const options = [challenge.missingPart, ...challenge.distractors].sort();

  return `
    <div class="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <!-- Placar da Partida em Tempo Real -->
      <div class="bg-slate-950 text-white p-4 rounded-3xl border-2 border-amber-400 shadow-xl flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <span class="text-2xl">🏟️</span>
          <div>
            <span class="text-xs text-amber-400 font-bold block">${champ.name}</span>
            <span class="font-bold text-sm text-slate-200">${champ.stadium}</span>
          </div>
        </div>

        <div class="flex items-center space-x-4 bg-slate-900 px-4 py-1.5 rounded-2xl border border-slate-700">
          <div class="text-right">
            <span class="text-xs text-slate-400 block">${state.player.name}</span>
            <span class="font-display text-xl text-emerald-400 font-bold">${state.match.homeScore}</span>
          </div>
          <span class="text-slate-500 font-black">X</span>
          <div>
            <span class="text-xs text-slate-400 block">${champ.opponent}</span>
            <span class="font-display text-xl text-slate-400 font-bold">0</span>
          </div>
        </div>

        <button onclick="window.app.navigateTo('home')" class="text-xs text-slate-400 hover:text-white font-bold">
          Sair do Jogo
        </button>
      </div>

      <!-- Barra de Lances do Jogo (1 a 5) -->
      <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between overflow-x-auto gap-2">
        ${MATCH_STAGE_TITLES.map((st, i) => `
          <div class="flex items-center gap-1.5 text-xs font-bold ${i === stage ? 'text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-300' : i < stage ? 'text-slate-400' : 'text-slate-300'}">
            <span>${i < stage ? '✅' : i === stage ? '⚽' : '⏳'}</span>
            <span class="whitespace-nowrap">${st.name}</span>
          </div>
        `).join('')}
      </div>

      <!-- Campo de Jogo Interativo -->
      <div id="match-card" class="pitch-pattern rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative space-y-6 border-4 border-emerald-950">
        
        <!-- Faixa do Lance Atual -->
        <div class="bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-emerald-400/30 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="text-xs font-bold text-amber-400 block">LANCE ${stage + 1} DE 5</span>
            <h3 class="font-display text-xl sm:text-2xl text-white">${stageInfo.name}</h3>
            <p class="text-xs text-slate-300">${stageInfo.desc}</p>
          </div>
          <button onclick="window.app.speakWord('${challenge.word}')" class="touch-btn px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1 shadow-md">
            🔊 <span>Narrar Lance</span>
          </button>
        </div>

        <!-- Pergunta / Lance do Campo -->
        <div class="bg-white/95 backdrop-blur text-slate-900 p-6 rounded-3xl shadow-xl text-center space-y-4">
          <p class="text-slate-600 font-bold text-sm">
            Complete a jogada para o passe sair no pé do companheiro:
          </p>

          <div class="p-4 bg-slate-50 border-2 border-slate-300 rounded-2xl">
            <p class="reading-text font-bold text-slate-800">
              "${challenge.sentenceMissing.replace('_____', '<span class=\"text-amber-600 underline decoration-amber-500 decoration-wavy px-2 bg-amber-100 rounded\"> ? </span>')}"
            </p>
          </div>

          <p class="text-xs text-slate-500">Dica: A palavra que falta tem o som do <strong>${challenge.phoneme}</strong>.</p>
        </div>

        <!-- Dica do VAR na Partida -->
        ${!state.match.stageAnswered ? `
          <div class="flex justify-center">
            ${!state.match.hintActive ? `
              <button onclick="window.app.activateMatchHint()" class="touch-btn px-4 py-2 bg-slate-900/90 text-amber-300 border border-amber-400 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg">
                🎥 <span>CONSULTAR O VAR / PEDIR DICA</span>
              </button>
            ` : `
              <div class="tactical-board p-3 rounded-2xl text-xs text-white max-w-md text-center">
                <span class="text-amber-300 font-bold">🎥 Análise do VAR:</span> ${challenge.hint ? challenge.hint.soundCue : 'Ouça com atenção a palavra correta!'}
              </div>
            `}
          </div>
        ` : ''}

        <!-- Botões de Ação do Lance -->
        ${!state.match.stageAnswered ? `
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            ${options.map(opt => {
              const isEliminated = state.match.eliminatedDistractors.includes(opt);
              if (isEliminated) {
                return `
                  <div class="p-4 rounded-2xl bg-black/40 border border-dashed border-slate-500 text-slate-400 font-display text-xl text-center line-through opacity-40">
                    ❌ ${opt}
                  </div>
                `;
              }
              return `
                <button onclick="window.app.checkMatchAnswer('${opt}')" class="touch-btn p-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display text-2xl tracking-wider shadow-2xl transform active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span>⚽</span> <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
        ` : `
          <!-- Lance Concluído com Sucesso -->
          <div class="bg-emerald-900/90 backdrop-blur border-2 border-emerald-400 rounded-3xl p-6 text-center space-y-3">
            <span class="text-4xl block">⚡ LANCE PERFEITO!</span>
            <p class="text-sm text-emerald-100 font-bold">
              Você acertou! "${challenge.fullSentence}"
            </p>
            <button onclick="window.app.advanceMatchStage()" class="touch-btn px-8 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-base shadow-xl transform active:scale-95">
              ${stage === 4 ? 'VER O GOLAÇO! ➔' : 'CONTINUAR A JOGADA ➔'}
            </button>
          </div>
        `}
      </div>
    </div>
  `;
}

// 5. PAINEL DO TÉCNICO (ÁREA DOS PAIS - ACOMPANHAMENTO DETALHADO)
function renderCoachDashboardScreen() {
  const stats = state.stats;
  const overallAccuracy = stats.totalExercises > 0
    ? Math.round((stats.firstTryCorrect / stats.totalExercises) * 100)
    : 100;

  return `
    <div class="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <!-- Cabeçalho do Painel -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <button onclick="window.app.navigateTo('home')" class="text-sm text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 mb-2">
            ⬅ Voltar ao Jogo
          </button>
          <h2 class="font-display text-3xl text-slate-900 flex items-center gap-2">
            <span>📋</span> <span>Painel do Técnico (Área dos Pais)</span>
          </h2>
          <p class="text-slate-600 text-sm">
            Acompanhe o desenvolvimento da consciência fonológica, leitura e diferenciação de sons do seu filho.
          </p>
        </div>

        <button onclick="window.app.startRecommendedDrill()" class="touch-btn px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl shadow-lg flex items-center gap-2 text-sm">
          <span>⚡ GERAR TREINO DE REFORÇO FOCADO</span>
        </button>
      </div>

      <!-- Cards de Métricas Gerais -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-md">
          <span class="text-xs text-slate-500 font-bold block">PRECISÃO DE PRIMEIRA</span>
          <span class="font-display text-3xl text-emerald-600 font-black">${overallAccuracy}%</span>
          <span class="text-xs text-slate-400 block mt-1">${stats.firstTryCorrect} acertos diretos</span>
        </div>
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-md">
          <span class="text-xs text-slate-500 font-bold block">TOTAL DE CHUTES</span>
          <span class="font-display text-3xl text-slate-800 font-black">${stats.totalExercises}</span>
          <span class="text-xs text-slate-400 block mt-1">Exercícios respondidos</span>
        </div>
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-md">
          <span class="text-xs text-slate-500 font-bold block">BOLAS NA TRAVE</span>
          <span class="font-display text-3xl text-amber-500 font-black">${stats.crossbarHits}</span>
          <span class="text-xs text-slate-400 block mt-1">Tentativas de ajuste</span>
        </div>
        <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-md">
          <span class="text-xs text-slate-500 font-bold block">DICAS / VAR USADOS</span>
          <span class="font-display text-3xl text-blue-600 font-black">${stats.hintsUsed}</span>
          <span class="text-xs text-slate-400 block mt-1">Apoio fonoaudiológico</span>
        </div>
      </div>

      <!-- Desempenho por Fonema Alvo (CH, P/T, R, S) -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
        <h3 class="font-bold text-xl text-slate-900 flex items-center gap-2">
          <span>🎯</span> <span>Domínio Específico por Fonema</span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${Object.values(PHONEMES_INFO).map(info => {
            const data = stats.byPhoneme[info.id] || { total: 0, correctFirstTry: 0, errors: 0 };
            const rate = data.total > 0 ? Math.round((data.correctFirstTry / data.total) * 100) : 0;
            const statusLabel = rate >= 80 ? '🌟 Domínio Forte' : rate >= 60 ? '⚡ Em Evolução' : '🔍 Precisa de Atenção';
            const statusColor = rate >= 80 ? 'text-emerald-700 bg-emerald-100' : rate >= 60 ? 'text-amber-800 bg-amber-100' : 'text-red-700 bg-red-100';

            return `
              <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-2xl">${info.icon}</span>
                    <h4 class="font-bold text-slate-900">${info.title} (${info.badge})</h4>
                  </div>
                  <span class="text-xs font-black px-2.5 py-1 rounded-full ${statusColor}">
                    ${statusLabel}
                  </span>
                </div>

                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-bold text-slate-600">
                    <span>Taxa de Acerto Direto</span>
                    <span>${rate}%</span>
                  </div>
                  <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div class="bg-emerald-500 h-3 rounded-full transition-all" style="width: ${rate}%"></div>
                  </div>
                </div>

                <div class="flex justify-between items-center text-xs text-slate-500 pt-1">
                  <span>${data.correctFirstTry} acertos • ${data.errors} na trave</span>
                  <button onclick="window.app.navigateTo('training_game', { phoneme: '${info.id}' })" class="text-emerald-700 font-bold hover:underline">
                    Treinar este fonema ➔
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Histórico de Palavras e Dificuldades Recentes -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
        <h3 class="font-bold text-xl text-slate-900 flex items-center gap-2">
          <span>🔍</span> <span>Últimas Tentativas com Apoio / Ajustes</span>
        </h3>
        ${stats.recentMistakes.length > 0 ? `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead>
                <tr class="border-b border-slate-200 text-xs font-bold text-slate-500">
                  <th class="py-2.5">Palavra</th>
                  <th class="py-2.5">Fonema</th>
                  <th class="py-2.5">O que a criança escolheu</th>
                  <th class="py-2.5">Apoio Pedagógico Recomendado</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${stats.recentMistakes.map(m => `
                  <tr>
                    <td class="py-3 font-bold text-slate-900">${m.word}</td>
                    <td class="py-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-xs font-bold text-slate-700">${m.phoneme}</span></td>
                    <td class="py-3 text-red-600 font-bold">${m.attempted}</td>
                    <td class="py-3 text-xs text-slate-600">
                      ${m.phoneme === 'P_VS_T' ? 'Diferenciação labial (P) vs língua nos dentes (T)' : m.phoneme === 'CH' ? 'Treino do som do biquinho chiado' : 'Fatiamento de sílabas'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <p class="text-slate-500 text-sm italic">Nenhum erro registrado recentemente! O craque está brilhando!</p>
        `}
      </div>
    </div>
  `;
}

// 6. TELA DO VESTIÁRIO (PERSONALIZAÇÃO DO CRAQUE)
function renderLockerRoomScreen() {
  const jerseyColors = [
    { name: 'Brasil Canarinho', class: 'from-amber-400 to-yellow-500 text-green-950', hex: '#facc15' },
    { name: 'Azul Celeste', class: 'from-sky-400 to-blue-600 text-white', hex: '#38bdf8' },
    { name: 'Vermelho e Preto', class: 'from-red-600 to-slate-950 text-white', hex: '#dc2626' },
    { name: 'Verde Esperança', class: 'from-emerald-500 to-green-700 text-white', hex: '#10b981' },
    { name: 'Branco e Dourado', class: 'from-slate-100 to-amber-200 text-slate-900', hex: '#fef3c7' }
  ];

  return `
    <div class="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <button onclick="window.app.navigateTo('home')" class="text-sm text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1 mb-2">
            ⬅ Voltar ao Início
          </button>
          <h2 class="font-display text-3xl text-slate-900">Vestiário dos Craques</h2>
          <p class="text-slate-600 text-sm">Personalize o uniforme, número e nome do seu craque!</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Visualização da Camisa do Jogador -->
        <div class="bg-slate-900 rounded-3xl p-8 border-4 border-amber-400 shadow-2xl text-center space-y-6">
          <div class="w-44 h-44 mx-auto rounded-3xl bg-gradient-to-br ${state.player.jerseyColor} p-4 flex flex-col items-center justify-center shadow-2xl border-4 border-white/20">
            <span class="text-5xl font-display font-black leading-none">${state.player.jerseyNumber}</span>
            <span class="font-bold text-xs uppercase tracking-widest mt-1">${state.player.name}</span>
          </div>
          <div class="text-white space-y-1">
            <h3 class="font-display text-2xl">${state.player.name}</h3>
            <p class="text-amber-400 font-bold text-sm">Mascote Oficial: ${state.player.mascot}</p>
          </div>
        </div>

        <!-- Formulário de Customização -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div class="space-y-2">
            <label class="text-sm font-bold text-slate-700 block">Nome do Craque:</label>
            <input type="text" id="player-name-input" value="${state.player.name}" class="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-amber-500 font-bold text-slate-900 text-lg outline-none" />
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-slate-700 block">Número da Camisa:</label>
            <div class="flex gap-2">
              {[10, 9, 7, 11, 8, 1].map(num => `
                <button onclick="window.app.setJerseyNumber(${num})" class="touch-btn flex-1 py-2 rounded-xl font-display text-lg font-bold ${state.player.jerseyNumber === num ? 'bg-amber-500 text-slate-950 border-2 border-slate-900' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
                  ${num}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-slate-700 block">Cor do Uniforme:</label>
            <div class="grid grid-cols-2 gap-2">
              ${jerseyColors.map(c => `
                <button onclick="window.app.setJerseyColor('${c.class}', '${c.hex}')" class="touch-btn p-3 rounded-xl border-2 ${state.player.jerseyBgHex === c.hex ? 'border-amber-500 ring-2 ring-amber-300' : 'border-slate-200'} flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span class="w-4 h-4 rounded-full border border-slate-300" style="background-color: ${c.hex}"></span>
                  <span>${c.name}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <button onclick="window.app.savePlayerProfile()" class="touch-btn w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-lg text-base">
            SALVAR CRAQUE ✅
          </button>
        </div>
      </div>
    </div>
  `;
}

// Renderizador Mestre
export function render() {
  const root = document.getElementById('app-root');
  if (!root) return;

  let content = '';
  switch (state.activeScreen) {
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
    case 'coach_dashboard':
      content = renderCoachDashboardScreen();
      break;
    case 'locker_room':
      content = renderLockerRoomScreen();
      break;
    default:
      content = renderHomeScreen();
  }

  root.innerHTML = `
    <div class="min-h-screen bg-slate-100 flex flex-col font-sans">
      ${renderHeader()}
      <main class="flex-grow">
        ${content}
      </main>
      <footer class="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p>⚽ <strong>Craques da Leitura FC</strong> • Desenvolvimento de Consciência Fonológica e Leitura para Dislexia.</p>
        <p class="text-slate-500 mt-1">Desenvolvido com carinho para o aprendizado lúdico e autoconfiança no futebol.</p>
      </footer>
    </div>
  `;
}

// ================= API GLOBAL PARA A INTERFACE (WINDOW.APP) =================
window.app = {
  navigateTo,
  speakWord: (text) => sound.speak(text),
  speakSyllables: (syllables) => sound.speakSyllables(syllables),
  checkTrainingAnswer,
  activateTrainingHint,
  nextTrainingQuestion,
  checkMatchAnswer,
  activateMatchHint,
  advanceMatchStage,
  openChampionshipModal: () => navigateTo('home'),
  startRecommendedDrill: () => {
    // Escolhe o fonema com mais erros recentes (foco P_VS_T ou CH)
    const phonemes = Object.keys(state.stats.byPhoneme);
    let worstPhoneme = 'P_VS_T';
    let maxErrors = -1;
    phonemes.forEach(p => {
      const e = state.stats.byPhoneme[p].errors;
      if (e > maxErrors) {
        maxErrors = e;
        worstPhoneme = p;
      }
    });
    alert(`⚡ Treino de Reforço Gerado com Sucesso! Focando no fonema ${PHONEMES_INFO[worstPhoneme].name}.`);
    navigateTo('training_game', { phoneme: worstPhoneme });
  },
  toggleAudioSpeed: () => {
    state.settings.audioSpeed = state.settings.audioSpeed < 1.0 ? 1.0 : 0.8;
    sound.setSpeechRate(state.settings.audioSpeed);
    saveState();
    render();
    sound.speak(`Velocidade da voz alterada para ${state.settings.audioSpeed < 1.0 ? 'lenta' : 'normal'}`);
  },
  toggleSyllableColors: () => {
    state.settings.showSyllableColors = !state.settings.showSyllableColors;
    saveState();
    render();
  },
  toggleMute: () => {
    sound.isMuted = !sound.isMuted;
    render();
  },
  setJerseyNumber: (num) => {
    state.player.jerseyNumber = num;
    render();
  },
  setJerseyColor: (cls, hex) => {
    state.player.jerseyColor = cls;
    state.player.jerseyBgHex = hex;
    render();
  },
  savePlayerProfile: () => {
    const input = document.getElementById('player-name-input');
    if (input && input.value.trim()) {
      state.player.name = input.value.trim();
    }
    saveState();
    sound.speak(`Perfil do craque ${state.player.name} atualizado com sucesso!`);
    navigateTo('home');
  }
};

// Inicialização automática
window.addEventListener('DOMContentLoaded', () => {
  loadStoredState();
  render();
});

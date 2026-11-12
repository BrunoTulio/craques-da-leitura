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

print("Iniciando geração de código completo...")

# CSS
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

# Ler a parte de áudio e canvas do bundle.js atual
with open(os.path.join(ROOT_DIR, 'bundle.js'), 'r', encoding='utf-8') as f:
    orig_bundle = f.read()

# Extrair AudioEngine e SoccerMatchCanvas existentes (que funcionam perfeitamente)
audio_engine_match = re.search(r'(// =+ MOTOR DE ÁUDIO[\s\S]*?)(// =+ ESTADO DO JOGO =+)', orig_bundle)
if not audio_engine_match:
    raise Exception("Não foi possível encontrar AudioEngine no bundle original!")
audio_section = audio_engine_match.group(1)

canvas_match = re.search(r'(// =+ SIMULADOR VISUAL DO JOGO DE FUTEBOL \(CANVAS 2D\)[\s\S]*?)(// =+ RENDERIZAÇÃO =+)', orig_bundle)
if not canvas_match:
    raise Exception("Não foi possível encontrar SoccerMatchCanvas no bundle original!")
canvas_section = canvas_match.group(1)

print("Extraídos AudioEngine e SoccerMatchCanvas com sucesso!")

# Agora criar o novo bundle.js completo
words_json = json.dumps(WORDS_DATABASE, ensure_ascii=False, indent=2)
phonemes_json = json.dumps(PHONEMES_INFO, ensure_ascii=False, indent=2)
cards_json = json.dumps(CARDS_DATABASE, ensure_ascii=False, indent=2)

championships_code = """  const CHAMPIONSHIPS = [
    {
      id: 'copa_bairro',
      name: 'Copa do Bairro',
      stadium: 'Estádio da Várzea Alegre',
      difficulty: 'Iniciante',
      badgeIcon: '🥉',
      targetScore: 3,
      description: 'Comece sua carreira brilhando nos campos do bairro! Foco em palavras de 2 sílabas.',
      opponent: 'União da Quebrada FC',
      unlockThreshold: 0
    },
    {
      id: 'campeonato_estadual',
      name: 'Campeonato Estadual',
      stadium: 'Arena das Estrelas',
      difficulty: 'Intermediário',
      badgeIcon: '🥈',
      targetScore: 4,
      description: 'Os melhores clubes do estado estão aqui. Foco em diferenciação P vs T e encontros com R.',
      opponent: 'Atlético Serrano',
      unlockThreshold: 3
    },
    {
      id: 'copa_nacional',
      name: 'Copa do Brasil dos Craques',
      stadium: 'Super Maracanã Dourado',
      difficulty: 'Avançado',
      badgeIcon: '🥇',
      targetScore: 5,
      description: 'Jogos de alta intensidade! Desafios de montar frases completas e tabelinhas de sílabas.',
      opponent: 'Nacional Esporte Clube',
      unlockThreshold: 7
    },
    {
      id: 'copa_do_mundo',
      name: 'Copa do Mundo dos Campeões',
      stadium: 'Estádio Monumental Global',
      difficulty: 'Lendário',
      badgeIcon: '🏆',
      targetScore: 5,
      description: 'O palco supremo do futebol! Todos os fonemas combinados em jogadas históricas!',
      opponent: 'Seleção das Lendas',
      unlockThreshold: 12
    }
  ];
"""

with open(os.path.join(ROOT_DIR, 'scratch/game_logic_template.js'), 'w', encoding='utf-8') as f:
    f.write(f"""// Craques da Leitura FC - Standalone Bundle Turbo (100% Offline & File://)

(function() {{
  'use strict';

  // ================= BANCO DE DADOS FONOLÓGICO EXPANDIDO =================
  const PHONEMES_INFO = {phonemes_json};

  const WORDS_DATABASE = {words_json};

  const CARDS_DATABASE = {cards_json};

{championships_code}

{audio_section}

  // Efeitos sonoros extras para abertura de pacotinho de figurinhas
  AudioEngine.prototype.playPackOpening = function() {{
    if (this.isMuted) return;
    try {{
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      // Arpejo cintilante em acorde maior
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
""")

print("Parte 1 do script escrita.")

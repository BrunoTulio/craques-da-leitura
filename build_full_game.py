import re

with open('/home/brunotulio/Downloads/craques-da-leitura/src/styles/dyslexia.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Additional styles for football pitch canvas and coach avatar
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

#soccer-canvas {
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

/* Animação do Treinador Falando */
@keyframes coachTalk {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08) rotate(-3deg); }
}

.coach-talking {
  animation: coachTalk 0.5s infinite ease-in-out;
}
"""

css_content += extra_css

# Now read the existing bundle.js
with open('/home/brunotulio/Downloads/craques-da-leitura/bundle.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

print("Read css and js successfully. Now injecting animated SoccerCanvas and VoiceCoach...")

#!/bin/bash
# Craques da Leitura FC - Inicializador com Servidor Local Silencioso

PORT=8082

echo "=========================================="
echo "⚽ INICIANDO CRAQUES DA LEITURA FC ⚽"
echo "=========================================="
echo "Servidor de alta definição rodando em: http://localhost:$PORT"

cd "$(dirname "$0")"

# Encerrar qualquer servidor anterior na porta especificada para evitar conflitos
fuser -k ${PORT}/tcp >/dev/null 2>&1

# Iniciar servidor silenciosamente
python3 -m http.server $PORT >/dev/null 2>&1 &
SERVER_PID=$!

# Capturar encerramento (Ctrl+C ou fechamento do terminal) para desligar o servidor
trap 'kill $SERVER_PID 2>/dev/null; exit 0' SIGINT SIGTERM EXIT

sleep 1

# Abrir navegador sem poluição de logs no terminal (evita o aviso de Pipe quebrado do Chrome)
if command -v xdg-open > /dev/null; then
  xdg-open "http://localhost:$PORT" >/dev/null 2>&1 &
elif command -v google-chrome > /dev/null; then
  google-chrome "http://localhost:$PORT" >/dev/null 2>&1 &
elif command -v firefox > /dev/null; then
  firefox "http://localhost:$PORT" >/dev/null 2>&1 &
fi

echo "✅ O jogo foi aberto no seu navegador em: http://localhost:$PORT"
echo "Pressione Ctrl + C para fechar o jogo."

wait $SERVER_PID

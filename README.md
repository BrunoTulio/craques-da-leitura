# Craques da Leitura FC ⚽📖

Aplicativo interativo, divertido e educativo com tema de futebol profissional (estilo EA Sports FC / Ultimate Team), desenvolvido especificamente para apoiar crianças de 9 a 11 anos em fase de alfabetização e superação de dificuldades específicas de leitura e **dislexia leve**, com foco nos seguintes fonemas e grafemas:

1. **CH**: Discriminação auditiva e grafêmica (/ʃ/) em palavras de futebol e do cotidiano (ex: *CHUTE*, *CHUTEIRA*, *CHAPÉU*, *MURCHA*, *BICHO*, *CHAVE*, *LANCHE*).
2. **P vs T**: Superação da confusão entre consoantes oclusivas bilabiais (/p/) e alveolares (/t/) com pares contrastantes (ex: *PASSE* vs *TRAVE*, *PÊNALTI* vs *TORCIDA*, *PLACAR* vs *TÁTICA*, *PATO* vs *TATO*, *CAMPO* vs *CANTO*).
3. **R vibrante**: Identificação e articulação do R forte inicial/duplo (*REDE*, *CORRER*), R brando (*GOLEIRO*, *ZAGUEIRO*) e encontros consonantais vibrantes (*DRIBLE*, *TRAVE*, *CRUZAMENTO*, *CRAQUE*, *TREINO*).
4. **S**: Percepção de sibilantes (/s/), dígrafos (*SS*) e marcas de plural (*ESTÁDIO*, *SELEÇÃO*, *ESCANTEIO*, *CRAQUES*, *CLÁSSICO*, *POSSE*).

---

## 🌟 Funcionalidades Principais & Novidades da Versão Turbo

- **Banco de Dados Fonológico Expandido (112 Palavras)**:
  - 28 palavras rigorosamente selecionadas por eixo fonológico (CH, P vs T, R vibrante, S).
  - Pistas fonoaudiológicas auditivas e articulatórias detalhadas para cada verbete.
  - **Explicações específicas para cada erro**: Quando a criança chuta a alternativa errada, o VAR e a narração explicam a diferença articulatória direta entre o som escolhido e o correto.

- **5 Lances da Partida com Mecânicas Cognitivas Reais**:
  1. 🛡️ **Roubada de Bola (Desarme no Meio-Campo)**: Identificar o som ou letra inicial da jogada.
  2. 🎯 **Passe Preciso (Lacuna Silábica)**: Completar a sílaba que falta na palavra em profundidade.
  3. ⚡ **Drible Desconcertante (Duelo Auditivo de Pares Mínimos)**: O narrador fala a jogada em voz alta e a criança escolhe a rota sonora exata (ex: *PASSE* vs *TASSE*, *TRAVE* vs *PRAVE*).
  4. ⚽ **Cruzamento na Área ("Tabelinha de Sílabas")**: Síntese silábica interativa. As sílabas da palavra aparecem embaralhadas e a criança toca na sequência certa para construir os passes até cruzar na grande área!
  5. 🏆 **Chute a Gol! (Lance Decisivo)**: Leitura de frase e narração completa para estufar as redes no ângulo!

- **🃏 Álbum da Copa dos Craques & Pacotinhos de Figurinhas (Estilo Ultimate Team)**:
  - 16 cartas colecionáveis exclusivas divididas em Lendas (*Pelé, Marta, Vini Jr, Zico, Alisson, Formiga*), Mascotes Fonológicos (*Chacal do CH, Pantera do P, Tigre do T, Rinoceronte do R, Serpente do S*) e Itens Mágicos (*Chuteira Dourada, Bola Meteoro, Taça do Mundo*).
  - Ganhe **Pacotinhos de Figurinhas** ao vencer campeonatos ou finalizar treinos no CT!
  - Animação cinematográfica de rasgar o pacote e revelação com brilho e arpejo musical.
  - Cartas repetidas são automaticamente convertidas em +20 Estrelas ⭐!

- **📏 Acessibilidade Avançada para Dislexia**:
  - **Régua de Leitura Dinâmica (Reading Ruler)**: Ativável no topo a qualquer momento, projeta uma faixa de alto contraste suave sob a linha de leitura atual para evitar saltos visuais.
  - Tipografia **Lexend** e **Bungee** com espaçamentos otimizados.
  - Fatiamento de sílabas coloridas alternadas (`.syl-0`, `.syl-1`, `.syl-2`, `.syl-3`).
  - Botões grandes com alvos de toque generosos para tablets e celulares.

- **📋 Painel do Técnico (Área de Pais, Fonoaudiólogos e Educadores)**:
  - Diagnóstico em tempo real da taxa de acerto por eixo fonológico.
  - Relatório pronto para impressão (`🖨️ Imprimir Relatório`) para acompanhamento terapêutico e escolar.

---

## 🚀 Como Executar e Jogar

O aplicativo é 100% web moderno e funciona offline sem dependências externas:

### Opção 1: Inicializador Automático
No terminal Linux/Mac, execute:
```bash
./jogar.sh
```

### Opção 2: Abrir diretamente no Navegador
Abra o arquivo `index.html` em qualquer navegador (Google Chrome, Firefox, Safari ou Microsoft Edge).

### Opção 3: Servidor Local
```bash
python3 -m http.server 8082
```
Depois, acesse `http://localhost:8082` no navegador do computador ou tablet na mesma rede Wi-Fi.

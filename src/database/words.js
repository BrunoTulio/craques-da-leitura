// Banco de Dados Fonológico e Pedagógico - Craques da Leitura FC
// 112 Palavras Fonológicas Selecionadas com Rigor Pedagógico

export const PHONEMES_INFO = {
  "CH": {
    "id": "CH",
    "name": "Som do CH",
    "badge": "CH",
    "color": "from-amber-500 to-orange-600",
    "accentColor": "#f59e0b",
    "icon": "⚡",
    "title": "O Chute Perfeito",
    "soundDescription": "Som chiado contínuo: CHHHH (como chuva ou chuteira)",
    "articulatoryTip": "Faça um biquinho com os lábios para frente e solte o ar suave e contínuo: CHHHHH!",
    "confusions": [
      "X",
      "J",
      "S"
    ],
    "coachQuote": "O som do CH é cheio de força, como um chute de trivela no ângulo!"
  },
  "P_VS_T": {
    "id": "P_VS_T",
    "name": "Duelo P vs T",
    "badge": "P / T",
    "color": "from-blue-600 to-indigo-700",
    "accentColor": "#3b82f6",
    "icon": "⚽",
    "title": "Passe ou Trave",
    "soundDescription": "Consoantes oclusivas: P (lábios juntos) vs T (língua nos dentes)",
    "articulatoryTip": "Para o P: aperte os dois lábios e solte um estouro! Para o T: encoste a ponta da língua atrás dos dentes superiores!",
    "confusions": [
      "P",
      "T"
    ],
    "coachQuote": "Muita atenção no desarme: a bola vai para o Passe (P) ou direto na Trave (T)?"
  },
  "R_VIBRANTE": {
    "id": "R_VIBRANTE",
    "name": "Motor do R",
    "badge": "R",
    "color": "from-emerald-500 to-teal-700",
    "accentColor": "#10b981",
    "icon": "🏎️",
    "title": "O Motor do Drible",
    "soundDescription": "R forte (arranque), R brando (goleiro) e R vibrante nos encontros (drible, trave, craque)",
    "articulatoryTip": "Faça a pontinha da língua vibrar rápido no céu da boca: R-R-R-R, como um motor acelerando!",
    "confusions": [
      "L",
      "LH"
    ],
    "coachQuote": "O R vibrante é o turbo do nosso time nos dribles e cruzamentos!"
  },
  "S": {
    "id": "S",
    "name": "Som do S",
    "badge": "S",
    "color": "from-purple-500 to-pink-600",
    "accentColor": "#8b5cf6",
    "icon": "📢",
    "title": "O Som da Torcida",
    "soundDescription": "Som sibilante: SSSSS (como o canto da torcida no estádio)",
    "articulatoryTip": "Feche um pouquinho os dentes, guarde a língua e solte o ventinho: S-S-S-S-S!",
    "confusions": [
      "C",
      "Ç",
      "Z"
    ],
    "coachQuote": "A torcida canta unida: SSSSS! Vamos ouvir com atenção cada letra S na palavra!"
  }
};

export const CARDS_DATABASE = [
  {
    "id": "pele",
    "name": "Pelé",
    "nickname": "O Rei do Futebol",
    "category": "lendas",
    "rarity": "lendaria",
    "icon": "👑",
    "rating": 99,
    "quote": "Mil gols na carreira e a maior lenda das quatro linhas!",
    "stats": {
      "drible": 98,
      "chute": 99,
      "passe": 97,
      "leitura": 99
    }
  },
  {
    "id": "marta",
    "name": "Marta",
    "nickname": "Rainha das Copas",
    "category": "lendas",
    "rarity": "lendaria",
    "icon": "⭐",
    "rating": 99,
    "quote": "Seis vezes a melhor do mundo com magia pura nos pés!",
    "stats": {
      "drible": 99,
      "chute": 98,
      "passe": 99,
      "leitura": 98
    }
  },
  {
    "id": "vini_jr",
    "name": "Vini Jr.",
    "nickname": "Mágico da Ponta",
    "category": "lendas",
    "rarity": "rara",
    "icon": "⚡",
    "rating": 96,
    "quote": "Velocidade da luz e dribles que levantam o estádio!",
    "stats": {
      "drible": 99,
      "chute": 94,
      "passe": 91,
      "leitura": 95
    }
  },
  {
    "id": "alisson",
    "name": "Alisson",
    "nickname": "Paredão Voador",
    "category": "lendas",
    "rarity": "rara",
    "icon": "🧤",
    "rating": 95,
    "quote": "Nenhuma bola passa: reflexo de gato e liderança no gol!",
    "stats": {
      "drible": 80,
      "chute": 85,
      "passe": 93,
      "leitura": 96
    }
  },
  {
    "id": "formiga",
    "name": "Formiga",
    "nickname": "Guerreira Imortal",
    "category": "lendas",
    "rarity": "rara",
    "icon": "🐜",
    "rating": 95,
    "quote": "Sete Copas do Mundo disputadas com raça inigualável!",
    "stats": {
      "drible": 90,
      "chute": 91,
      "passe": 96,
      "leitura": 97
    }
  },
  {
    "id": "zico",
    "name": "Zico",
    "nickname": "Mestre da Falta",
    "category": "lendas",
    "rarity": "lendaria",
    "icon": "🎯",
    "rating": 98,
    "quote": "Cobrança de falta teleguiada na gaveta, sem chance pro goleiro!",
    "stats": {
      "drible": 96,
      "chute": 99,
      "passe": 98,
      "leitura": 99
    }
  },
  {
    "id": "chacal_ch",
    "name": "Chacal do Chute",
    "nickname": "Guardião do Som CH",
    "category": "mascotes",
    "rarity": "comum",
    "icon": "🐺",
    "rating": 89,
    "quote": "Biquinho nos lábios e ar contínuo: CHUUUU!",
    "stats": {
      "drible": 88,
      "chute": 92,
      "passe": 86,
      "leitura": 90
    }
  },
  {
    "id": "pantera_p",
    "name": "Pantera do Passe",
    "nickname": "Mestre da Consoante P",
    "category": "mascotes",
    "rarity": "comum",
    "icon": "🐆",
    "rating": 88,
    "quote": "Junte os dois lábios e solte o estouro: P-P-PASSE!",
    "stats": {
      "drible": 89,
      "chute": 87,
      "passe": 93,
      "leitura": 89
    }
  },
  {
    "id": "tigre_t",
    "name": "Tigre da Trave",
    "nickname": "Defensor da Consoante T",
    "category": "mascotes",
    "rarity": "comum",
    "icon": "🐅",
    "rating": 88,
    "quote": "Língua afiada atrás dos dentes superiores: T-T-TRAVE!",
    "stats": {
      "drible": 86,
      "chute": 90,
      "passe": 88,
      "leitura": 91
    }
  },
  {
    "id": "rino_r",
    "name": "Rinoceronte Turbo",
    "nickname": "Motor do R Vibrante",
    "category": "mascotes",
    "rarity": "comum",
    "icon": "🦏",
    "rating": 90,
    "quote": "Acelera a língua no céu da boca: R-R-R-R!",
    "stats": {
      "drible": 91,
      "chute": 94,
      "passe": 87,
      "leitura": 92
    }
  },
  {
    "id": "serpente_s",
    "name": "Serpente da Torcida",
    "nickname": "Sibilante do Som S",
    "category": "mascotes",
    "rarity": "comum",
    "icon": "🐍",
    "rating": 88,
    "quote": "Dentes semicerrados soltando o ventinho: SSSSS!",
    "stats": {
      "drible": 92,
      "chute": 86,
      "passe": 90,
      "leitura": 89
    }
  },
  {
    "id": "chuteira_ouro",
    "name": "Chuteira Dourada",
    "nickname": "Equipamento Lendário",
    "category": "itens",
    "rarity": "lendaria",
    "icon": "👟",
    "rating": 98,
    "quote": "Precisão absoluta nas cobranças de pênalti e falta!",
    "stats": {
      "drible": 95,
      "chute": 99,
      "passe": 94,
      "leitura": 96
    }
  },
  {
    "id": "bola_fogo",
    "name": "Bola Meteoro",
    "nickname": "Esfera Incandescente",
    "category": "itens",
    "rarity": "rara",
    "icon": "🔥",
    "rating": 95,
    "quote": "Queima as luvas do goleiro e estufa o fundo da rede!",
    "stats": {
      "drible": 93,
      "chute": 98,
      "passe": 92,
      "leitura": 94
    }
  },
  {
    "id": "trofeu_mundial",
    "name": "Taça do Mundo",
    "nickname": "O Troféu dos Campeões",
    "category": "itens",
    "rarity": "lendaria",
    "icon": "🏆",
    "rating": 99,
    "quote": "O maior prêmio para quem lê com velocidade e precisão!",
    "stats": {
      "drible": 99,
      "chute": 99,
      "passe": 99,
      "leitura": 99
    }
  },
  {
    "id": "apito_ouro",
    "name": "Apito Dourado",
    "nickname": "Símbolo da Justiça",
    "category": "itens",
    "rarity": "comum",
    "icon": "🟡",
    "rating": 87,
    "quote": "Fim de papo: vitória incontestável do time da leitura!",
    "stats": {
      "drible": 85,
      "chute": 86,
      "passe": 90,
      "leitura": 95
    }
  },
  {
    "id": "camisa_10",
    "name": "Manto Sagrado 10",
    "nickname": "A Armadura do Craque",
    "category": "itens",
    "rarity": "rara",
    "icon": "🎽",
    "rating": 96,
    "quote": "Vestir a 10 é ter a responsabilidade de decidir o jogo!",
    "stats": {
      "drible": 97,
      "chute": 96,
      "passe": 98,
      "leitura": 97
    }
  }
];

export const WORDS_DATABASE = [
  {
    "id": "ch_1",
    "phoneme": "CH",
    "word": "CHUTE",
    "syllables": [
      "CHU",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "CHU",
    "distractors": [
      "XU",
      "TU",
      "SU"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHUTE",
      "TUTE"
    ],
    "fullSentence": "O atacante acertou um belo chute no ângulo!",
    "sentenceMissing": "O atacante acertou um belo _____ no ângulo!",
    "meaning": "Golpear a bola com o pé em direção ao gol.",
    "hint": {
      "soundCue": "Ouça o começo com biquinho: CHUUU... de CHUTE!",
      "articulatoryCue": "Junte os lábios em bico e solte o ar contínuo: CHUUU.",
      "varEliminate": [
        "TU",
        "SU"
      ],
      "distractorExplanations": {
        "XU": "O som é parecido, mas no futebol CHUTE é escrito com CH!",
        "TU": "TU usa a ponta da língua nos dentes. CHUTE usa lábios em bico!",
        "SU": "SU tem som de ventinho fino. CHUTE é chiado contínuo!"
      }
    }
  },
  {
    "id": "ch_2",
    "phoneme": "CH",
    "word": "CHUTEIRA",
    "syllables": [
      "CHU",
      "TEI",
      "RA"
    ],
    "phonemePosition": "início",
    "missingPart": "CHU",
    "distractors": [
      "XU",
      "PU",
      "SU"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHUTEIRA",
      "PUTEIRA"
    ],
    "fullSentence": "Amarre bem a sua chuteira antes de entrar em campo!",
    "sentenceMissing": "Amarre bem a sua _____ antes de entrar em campo!",
    "meaning": "Calçado com travas usado para jogar futebol.",
    "hint": {
      "soundCue": "CHUUU... TEI... RA! O mesmo começo de chuva.",
      "articulatoryCue": "Lábios projetados à frente com sopro contínuo: CHUUU.",
      "varEliminate": [
        "PU",
        "XU"
      ],
      "distractorExplanations": {
        "XU": "Cuidado: chuteira é com dígrafo CH, não com X!",
        "PU": "PU fecha e estoura os lábios. CHUTEIRA sopra suave com bico!",
        "SU": "SU é som sibilante de cobra. CHUTEIRA tem o chiado CH!"
      }
    }
  },
  {
    "id": "ch_3",
    "phoneme": "CH",
    "word": "CHAPÉU",
    "syllables": [
      "CHA",
      "PÉU"
    ],
    "phonemePosition": "início",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "PA"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHAPÉU",
      "TAPÉU"
    ],
    "fullSentence": "Que drible espetacular: o camisa 10 deu um chapéu no zagueiro!",
    "sentenceMissing": "Que drible espetacular: o camisa 10 deu um _____ no zagueiro!",
    "meaning": "Passar a bola por cima da cabeça do adversário.",
    "hint": {
      "soundCue": "CHAAA... PÉU! Atenção: usamos CH para esse drible mágico.",
      "articulatoryCue": "Lábios em formato arredondado: CHAAA.",
      "varEliminate": [
        "TA",
        "PA"
      ],
      "distractorExplanations": {
        "XA": "O drible do chapéu se escreve com CH!",
        "TA": "TA bate a língua nos dentes. CHAPÉU sopra com bico!",
        "PA": "PA encosta os dois lábios. CHAPÉU arredonda a boca!"
      }
    }
  },
  {
    "id": "ch_4",
    "phoneme": "CH",
    "word": "MURCHA",
    "syllables": [
      "MUR",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "SA"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MURCHA",
      "MURTA"
    ],
    "fullSentence": "O juiz parou o jogo porque a bola estava murcha!",
    "sentenceMissing": "O juiz parou o jogo porque a bola estava _____!",
    "meaning": "Bola vazia ou sem pressão de ar para o jogo.",
    "hint": {
      "soundCue": "MUR... CHAAA! O chiado final vem do CH.",
      "articulatoryCue": "Finalize a palavra soltando ar quente: CHAAA.",
      "varEliminate": [
        "TA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Murcha termina com CH-A, não com X!",
        "TA": "Murta é uma planta! A bola sem ar está MURCHA!",
        "SA": "Mursa não existe! É MURCHA com som chiado!"
      }
    }
  },
  {
    "id": "ch_5",
    "phoneme": "CH",
    "word": "MANCHA",
    "syllables": [
      "MAN",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "PA",
      "TA"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MANCHA",
      "MANTA"
    ],
    "fullSentence": "O carrinho no gramado deixou uma mancha de barro no uniforme!",
    "sentenceMissing": "O carrinho no gramado deixou uma _____ de barro no uniforme!",
    "meaning": "Marca de sujeira ou grama na camisa.",
    "hint": {
      "soundCue": "MAN... CHAAA! A mesma terminação de concha.",
      "articulatoryCue": "Arredonde os lábios no final: CHAAA.",
      "varEliminate": [
        "PA",
        "TA"
      ],
      "distractorExplanations": {
        "XA": "Mancha de grama se escreve com CH!",
        "PA": "Mampa não existe. É MANCHA!",
        "TA": "Manta é de cobrir na cama! Na camisa suja é MANCHA!"
      }
    }
  },
  {
    "id": "ch_6",
    "phoneme": "CH",
    "word": "CHAVE",
    "syllables": [
      "CHA",
      "VE"
    ],
    "phonemePosition": "início",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "JA",
      "SA"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHAVE",
      "JAVE"
    ],
    "fullSentence": "O capitão do time é a chave da vitória!",
    "sentenceMissing": "O capitão do time é a _____ da vitória!",
    "meaning": "Peça fundamental ou segredo para ganhar o jogo.",
    "hint": {
      "soundCue": "CHAAA... VE! Som contínuo de CH no início.",
      "articulatoryCue": "Sopre sem vibrar as cordas vocais: CHAAA.",
      "varEliminate": [
        "JA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Chave se escreve com CH!",
        "JA": "JA vibra a garganta. CHA é soprado suave!",
        "SA": "SA é fininho com a ponta da língua. CHAVE sopra em bico!"
      }
    }
  },
  {
    "id": "ch_7",
    "phoneme": "CH",
    "word": "LANCHE",
    "syllables": [
      "LAN",
      "CHE"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHE",
    "distractors": [
      "XE",
      "TE",
      "SE"
    ],
    "initialSound": "L",
    "minimalPair": [
      "LANCHE",
      "LANTE"
    ],
    "fullSentence": "No intervalo do jogo, os atletas comeram um lanche saudável!",
    "sentenceMissing": "No intervalo do jogo, os atletas comeram um _____ saudável!",
    "meaning": "Refeição leve dos jogadores para recuperar energia.",
    "hint": {
      "soundCue": "LAN... CHEEE! A sílaba final termina com CH-E.",
      "articulatoryCue": "Lábios em bico soltando ar no CHE.",
      "varEliminate": [
        "TE",
        "SE"
      ],
      "distractorExplanations": {
        "XE": "Lanche da tarde se escreve com CH!",
        "TE": "Lante não existe! O certo é LANCHE!",
        "SE": "Lanse não existe! É LANCHE com CH!"
      }
    }
  },
  {
    "id": "ch_8",
    "phoneme": "CH",
    "word": "BICHO",
    "syllables": [
      "BI",
      "CHO"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "TO",
      "PO"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BICHO",
      "BICO"
    ],
    "fullSentence": "O mascote do nosso time é um bicho veloz e valente!",
    "sentenceMissing": "O mascote do nosso time é um _____ veloz e valente!",
    "meaning": "Animal representativo do clube.",
    "hint": {
      "soundCue": "BI... CHOOO! O som chiado fecha a palavra.",
      "articulatoryCue": "Bico nos lábios ao dizer CHOOO.",
      "varEliminate": [
        "TO",
        "PO"
      ],
      "distractorExplanations": {
        "XO": "Bicho mascote é grafado com CH!",
        "TO": "Bito não existe! O mascote é um BICHO!",
        "PO": "Bipo não é animal! É BICHO com CH!"
      }
    }
  },
  {
    "id": "ch_9",
    "phoneme": "CH",
    "word": "CHUVA",
    "syllables": [
      "CHU",
      "VA"
    ],
    "phonemePosition": "início",
    "missingPart": "CHU",
    "distractors": [
      "XU",
      "JU",
      "TU"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHUVA",
      "LUVA"
    ],
    "fullSentence": "O clássico continuou com emoção debaixo de muita chuva!",
    "sentenceMissing": "O clássico continuou com emoção debaixo de muita _____!",
    "meaning": "Água caindo do céu durante a partida.",
    "hint": {
      "soundCue": "CHUUU... VA! Como o barulho dos pingos d'água.",
      "articulatoryCue": "Sopre como vento com biquinho: CHUUU.",
      "varEliminate": [
        "JU",
        "TU"
      ],
      "distractorExplanations": {
        "XU": "Chuva que molha o campo é com CH!",
        "JU": "Juva não existe! É CHUVA!",
        "TU": "Tuva não existe! A água que cai é CHUVA!"
      }
    }
  },
  {
    "id": "ch_10",
    "phoneme": "CH",
    "word": "CAPRICHO",
    "syllables": [
      "CA",
      "PRI",
      "CHO"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "CO",
      "TO"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CAPRICHO",
      "CAPRITO"
    ],
    "fullSentence": "O meia bateu a falta com capricho e a bola entrou no cantinho!",
    "sentenceMissing": "O meia bateu a falta com _____ e a bola entrou no cantinho!",
    "meaning": "Cuidado e perfeição na execução da jogada.",
    "hint": {
      "soundCue": "CA... PRI... CHOOO! Sílaba final caprichada com CH.",
      "articulatoryCue": "Termine com lábios arredondados soprando: CHOOO.",
      "varEliminate": [
        "CO",
        "TO"
      ],
      "distractorExplanations": {
        "XO": "Capricho se escreve com CH!",
        "CO": "Caprico não existe! É CAPRICHO!",
        "TO": "Caprito não existe! Bateu com CAPRICHO!"
      }
    }
  },
  {
    "id": "ch_11",
    "phoneme": "CH",
    "word": "FLECHA",
    "syllables": [
      "FLE",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "SA"
    ],
    "initialSound": "F",
    "minimalPair": [
      "FLECHA",
      "FLETA"
    ],
    "fullSentence": "O ponta correu veloz como uma flecha pelo lado do campo!",
    "sentenceMissing": "O ponta correu veloz como uma _____ pelo lado do campo!",
    "meaning": "Objeto muito rápido e certeiro.",
    "hint": {
      "soundCue": "FLE... CHAAA! A ponta da flecha tem som CH.",
      "articulatoryCue": "Ar contínuo na última sílaba: CHAAA.",
      "varEliminate": [
        "TA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Flecha certeira é com CH!",
        "TA": "Fleta não é velocidade! É FLECHA!",
        "SA": "Flesa não existe! É veloz como FLECHA!"
      }
    }
  },
  {
    "id": "ch_12",
    "phoneme": "CH",
    "word": "MOCHILA",
    "syllables": [
      "MO",
      "CHI",
      "LA"
    ],
    "phonemePosition": "meio",
    "missingPart": "CHI",
    "distractors": [
      "XI",
      "TI",
      "PI"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MOCHILA",
      "MOTILA"
    ],
    "fullSentence": "O garoto guardou o meião e as caneleiras dentro da mochila!",
    "sentenceMissing": "O garoto guardou o meião e as caneleiras dentro da _____!",
    "meaning": "Bolsa de carregar os materiais do jogo nas costas.",
    "hint": {
      "soundCue": "MO... CHIII... LA! O som chiado está no meio.",
      "articulatoryCue": "Sopre com os dentes quase juntos e bico: CHIII.",
      "varEliminate": [
        "TI",
        "PI"
      ],
      "distractorExplanations": {
        "XI": "Mochila de treino se escreve com CH!",
        "TI": "Motila não existe! É MOCHILA!",
        "PI": "Mopila não existe! É MOCHILA de treino!"
      }
    }
  },
  {
    "id": "ch_13",
    "phoneme": "CH",
    "word": "CHOQUE",
    "syllables": [
      "CHO",
      "QUE"
    ],
    "phonemePosition": "início",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "TO",
      "PO"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHOQUE",
      "TOQUE"
    ],
    "fullSentence": "O zagueiro e o atacante tiveram um choque de cabeça na disputa aérea!",
    "sentenceMissing": "O zagueiro e o atacante tiveram um _____ de cabeça na disputa aérea!",
    "meaning": "Impacto ou colisão involuntária entre jogadores.",
    "hint": {
      "soundCue": "CHOOO... QUE! Começo chiado forte.",
      "articulatoryCue": "Lábios redondos projetados soprando: CHOOO.",
      "varEliminate": [
        "TO",
        "PO"
      ],
      "distractorExplanations": {
        "XO": "Choque mecânico se escreve com CH!",
        "TO": "Toque é passe com o pé! Batida forte é CHOQUE!",
        "PO": "Poque não existe! A disputa foi um CHOQUE!"
      }
    }
  },
  {
    "id": "ch_14",
    "phoneme": "CH",
    "word": "FECHAR",
    "syllables": [
      "FE",
      "CHAR"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHAR",
    "distractors": [
      "XAR",
      "TAR",
      "PAR"
    ],
    "initialSound": "F",
    "minimalPair": [
      "FECHAR",
      "FESTAR"
    ],
    "fullSentence": "O goleiro voou para fechar o ângulo do atacante!",
    "sentenceMissing": "O goleiro voou para _____ o ângulo do atacante!",
    "meaning": "Impedir a passagem da bola.",
    "hint": {
      "soundCue": "FE... CHAAAR! O chiado se estende até o R.",
      "articulatoryCue": "Biquinho nos lábios e vibração de garganta no final: CHAR.",
      "varEliminate": [
        "TAR",
        "PAR"
      ],
      "distractorExplanations": {
        "XAR": "Fechar o gol se escreve com CH!",
        "TAR": "Fetar não existe! É FECHAR o ângulo!",
        "PAR": "Fepar não existe! O goleiro vai FECHAR o gol!"
      }
    }
  },
  {
    "id": "ch_15",
    "phoneme": "CH",
    "word": "CONCHA",
    "syllables": [
      "CON",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "PA"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CONCHA",
      "CONTA"
    ],
    "fullSentence": "O goleiro posicionou as mãos em formato de concha para segurar a bola!",
    "sentenceMissing": "O goleiro posicionou as mãos em formato de _____ para segurar a bola!",
    "meaning": "Posição correta das mãos para encaixar o chute.",
    "hint": {
      "soundCue": "CON... CHAAA! A sílaba final suave com CH.",
      "articulatoryCue": "Solte o ar no final com boca redonda: CHAAA.",
      "varEliminate": [
        "TA",
        "PA"
      ],
      "distractorExplanations": {
        "XA": "Mão em concha se escreve com CH!",
        "TA": "Conta é de matemática! Mão espalmada é CONCHA!",
        "PA": "Compa não existe! É mão em CONCHA!"
      }
    }
  },
  {
    "id": "ch_16",
    "phoneme": "CH",
    "word": "PRANCHA",
    "syllables": [
      "PRAN",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "SA"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PRANCHA",
      "PLANTA"
    ],
    "fullSentence": "Na preparação física, o craque fez o exercício de prancha no gramado!",
    "sentenceMissing": "Na preparação física, o craque fez o exercício de _____ no gramado!",
    "meaning": "Exercício de fortalecimento abdominal dos atletas.",
    "hint": {
      "soundCue": "PRAN... CHAAA! Final chiado com CH.",
      "articulatoryCue": "Termine soltando o ventinho forte: CHAAA.",
      "varEliminate": [
        "TA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Prancha de treino é com CH!",
        "TA": "Pranta não existe! É PRANCHA!",
        "SA": "Pransa não existe! O exercício é PRANCHA!"
      }
    }
  },
  {
    "id": "ch_17",
    "phoneme": "CH",
    "word": "RECHEIO",
    "syllables": [
      "RE",
      "CHEI",
      "O"
    ],
    "phonemePosition": "meio",
    "missingPart": "CHEI",
    "distractors": [
      "XEI",
      "TEI",
      "PEI"
    ],
    "initialSound": "R",
    "minimalPair": [
      "RECHEIO",
      "RECEIO"
    ],
    "fullSentence": "O bolo da comemoração do título tinha um delicioso recheio de morango!",
    "sentenceMissing": "O bolo da comemoração do título tinha um delicioso _____ de morango!",
    "meaning": "O que fica dentro do bolo da festa dos campeões.",
    "hint": {
      "soundCue": "RE... CHEEEI... O! O chiado suave no meio da palavra.",
      "articulatoryCue": "Bico nos lábios e ar contínuo: CHEEI.",
      "varEliminate": [
        "TEI",
        "PEI"
      ],
      "distractorExplanations": {
        "XEI": "Recheio de comida é com CH!",
        "TEI": "Reteio não existe! É RECHEIO!",
        "PEI": "Repeio não existe! É o RECHEIO do bolo!"
      }
    }
  },
  {
    "id": "ch_18",
    "phoneme": "CH",
    "word": "CHORO",
    "syllables": [
      "CHO",
      "RO"
    ],
    "phonemePosition": "início",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "TO",
      "SO"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHORO",
      "TORO"
    ],
    "fullSentence": "Foi um choro de emoção pura ao levantar a taça de campeão!",
    "sentenceMissing": "Foi um _____ de emoção pura ao levantar a taça de campeão!",
    "meaning": "Lágrimas de grande alegria e desabafo no apito final.",
    "hint": {
      "soundCue": "CHOOO... RO! Começa com o mesmo som de chocolate.",
      "articulatoryCue": "Bico pronunciado e ar soprado: CHOOO.",
      "varEliminate": [
        "TO",
        "SO"
      ],
      "distractorExplanations": {
        "XO": "Choro de emoção se escreve com CH!",
        "TO": "Toro não é lágrima! O campeão chorou de emoção!",
        "SO": "Soro é remédio! Lágrima de campeão é CHORO!"
      }
    }
  },
  {
    "id": "ch_19",
    "phoneme": "CH",
    "word": "CHEGADA",
    "syllables": [
      "CHE",
      "GA",
      "DA"
    ],
    "phonemePosition": "início",
    "missingPart": "CHE",
    "distractors": [
      "XE",
      "TE",
      "PE"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHEGADA",
      "PEGADA"
    ],
    "fullSentence": "A chegada do ônibus do time ao estádio foi recebida com fogos!",
    "sentenceMissing": "A _____ do ônibus do time ao estádio foi recebida com fogos!",
    "meaning": "Momento em que os jogadores entram na arena.",
    "hint": {
      "soundCue": "CHEEE... GA... DA! Começo com CH chiado.",
      "articulatoryCue": "Lábios projetados à frente: CHEEE.",
      "varEliminate": [
        "TE",
        "PE"
      ],
      "distractorExplanations": {
        "XE": "Chegada ao estádio se escreve com CH!",
        "TE": "Tegada não existe! É a CHEGADA da delegação!",
        "PE": "Pegada é pisada! A entrada do time é CHEGADA!"
      }
    }
  },
  {
    "id": "ch_20",
    "phoneme": "CH",
    "word": "GAÚCHO",
    "syllables": [
      "GA",
      "Ú",
      "CHO"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "TO",
      "PO"
    ],
    "initialSound": "G",
    "minimalPair": [
      "GAÚCHO",
      "GAROTO"
    ],
    "fullSentence": "Ronaldinho Gaúcho encantou o mundo com sua magia com a bola!",
    "sentenceMissing": "Ronaldinho _____ encantou o mundo com sua magia com a bola!",
    "meaning": "Nome do craque brasileiro ou nascido no Rio Grande do Sul.",
    "hint": {
      "soundCue": "GA... Ú... CHOOO! Sílaba final chiada com CH.",
      "articulatoryCue": "Termine soltando ar em bico: CHOOO.",
      "varEliminate": [
        "TO",
        "PO"
      ],
      "distractorExplanations": {
        "XO": "Gaúcho se escreve com CH!",
        "TO": "Gaúto não existe! É o grande craque GAÚCHO!",
        "PO": "Gaúpo não existe! É GAÚCHO com CH!"
      }
    }
  },
  {
    "id": "ch_21",
    "phoneme": "CH",
    "word": "GANCHO",
    "syllables": [
      "GAN",
      "CHO"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHO",
    "distractors": [
      "XO",
      "TO",
      "CO"
    ],
    "initialSound": "G",
    "minimalPair": [
      "GANCHO",
      "CANTO"
    ],
    "fullSentence": "O goleiro pendurou suas luvas no gancho do vestiário!",
    "sentenceMissing": "O goleiro pendurou suas luvas no _____ do vestiário!",
    "meaning": "Suporte onde os atletas penduram uniformes e chuteiras.",
    "hint": {
      "soundCue": "GAN... CHOOO! Final com som chiado do CH.",
      "articulatoryCue": "Termine soprando ar suave com lábios em bico: CHOOO.",
      "varEliminate": [
        "TO",
        "CO"
      ],
      "distractorExplanations": {
        "XO": "Gancho do vestiário é grafado com CH!",
        "TO": "Ganto não existe! É GANCHO!",
        "CO": "Ganco não existe! É o GANCHO da parede!"
      }
    }
  },
  {
    "id": "ch_22",
    "phoneme": "CH",
    "word": "CHAMA",
    "syllables": [
      "CHA",
      "MA"
    ],
    "phonemePosition": "início",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "CA"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHAMA",
      "CAMA"
    ],
    "fullSentence": "A chama da paixão pelo futebol brilha no peito dos torcedores!",
    "sentenceMissing": "A _____ da paixão pelo futebol brilha no peito dos torcedores!",
    "meaning": "Fogo ou entusiasmo vibrante da torcida.",
    "hint": {
      "soundCue": "CHAAA... MA! Começo com biquinho chiado.",
      "articulatoryCue": "Solte o ar com força: CHAAA.",
      "varEliminate": [
        "TA",
        "CA"
      ],
      "distractorExplanations": {
        "XA": "Chama de fogo ou amor à camisa é com CH!",
        "TA": "Tama não existe! A paixão que queima é CHAMA!",
        "CA": "Cama é de dormir! A paixão do futebol é CHAMA!"
      }
    }
  },
  {
    "id": "ch_23",
    "phoneme": "CH",
    "word": "CHEFE",
    "syllables": [
      "CHE",
      "FE"
    ],
    "phonemePosition": "início",
    "missingPart": "CHE",
    "distractors": [
      "XE",
      "TE",
      "SE"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHEFE",
      "TEFE"
    ],
    "fullSentence": "O treinador é o chefe da equipe e orienta a tática!",
    "sentenceMissing": "O treinador é o _____ da equipe e orienta a tática!",
    "meaning": "Líder e comandante tático do time.",
    "hint": {
      "soundCue": "CHEEE... FE! O início com CH soa firme.",
      "articulatoryCue": "Lábios arredondados: CHEEE.",
      "varEliminate": [
        "TE",
        "SE"
      ],
      "distractorExplanations": {
        "XE": "Chefe da equipe se escreve com CH!",
        "TE": "Tefe não é líder! O treinador é o CHEFE!",
        "SE": "Sefe não existe! É o CHEFE da comissão!"
      }
    }
  },
  {
    "id": "ch_24",
    "phoneme": "CH",
    "word": "BORRACHA",
    "syllables": [
      "BOR",
      "RA",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "PA"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BORRACHA",
      "BARATA"
    ],
    "fullSentence": "A sola da chuteira tem cravos de borracha resistente!",
    "sentenceMissing": "A sola da chuteira tem cravos de _____ resistente!",
    "meaning": "Material flexível usado nas travas das chuteiras.",
    "hint": {
      "soundCue": "BOR... RA... CHAAA! Sílaba final chiada.",
      "articulatoryCue": "Termine com ar contínuo nos lábios: CHAAA.",
      "varEliminate": [
        "TA",
        "PA"
      ],
      "distractorExplanations": {
        "XA": "Borracha da chuteira se escreve com CH!",
        "TA": "Borrata não existe! É BORRACHA!",
        "PA": "Borrapa não existe! As travas são de BORRACHA!"
      }
    }
  },
  {
    "id": "ch_25",
    "phoneme": "CH",
    "word": "BOLACHA",
    "syllables": [
      "BO",
      "LA",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "SA"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BOLACHA",
      "BATATA"
    ],
    "fullSentence": "O craque comeu uma bolacha antes do treino começar!",
    "sentenceMissing": "O craque comeu uma _____ antes do treino começar!",
    "meaning": "Alimento crocante e rápido antes da partida.",
    "hint": {
      "soundCue": "BO... LA... CHAAA! Sílaba final com CH.",
      "articulatoryCue": "Solte o sopro nos lábios: CHAAA.",
      "varEliminate": [
        "TA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Bolacha crocante é com CH!",
        "TA": "Bolata não existe! É BOLACHA!",
        "SA": "Bolasa não existe! O lanche é BOLACHA!"
      }
    }
  },
  {
    "id": "ch_26",
    "phoneme": "CH",
    "word": "CACHORRO",
    "syllables": [
      "CA",
      "CHOR",
      "RO"
    ],
    "phonemePosition": "meio",
    "missingPart": "CHOR",
    "distractors": [
      "XOR",
      "TOR",
      "POR"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CACHORRO",
      "CARRO"
    ],
    "fullSentence": "Um cachorro brincalhão invadiu o campo e parou a partida!",
    "sentenceMissing": "Um _____ brincalhão invadiu o campo e parou a partida!",
    "meaning": "Cãozinho fofo que correu no gramado.",
    "hint": {
      "soundCue": "CA... CHOOOR... RO! O som chiado está na sílaba do meio.",
      "articulatoryCue": "Bico nos lábios com ar contínuo: CHOR.",
      "varEliminate": [
        "TOR",
        "POR"
      ],
      "distractorExplanations": {
        "XOR": "Cachorro se escreve com CH!",
        "TOR": "Catorro não existe! Quem invadiu foi o CACHORRO!",
        "POR": "Caporro não existe! O animalzinho é um CACHORRO!"
      }
    }
  },
  {
    "id": "ch_27",
    "phoneme": "CH",
    "word": "CHINELO",
    "syllables": [
      "CHI",
      "NE",
      "LO"
    ],
    "phonemePosition": "início",
    "missingPart": "CHI",
    "distractors": [
      "XI",
      "TI",
      "PI"
    ],
    "initialSound": "CH",
    "minimalPair": [
      "CHINELO",
      "TINELO"
    ],
    "fullSentence": "Depois do banho, o atleta calçou o chinelo no vestiário!",
    "sentenceMissing": "Depois do banho, o atleta calçou o _____ no vestiário!",
    "meaning": "Calçado aberto para descansar os pés pós-jogo.",
    "hint": {
      "soundCue": "CHIII... NE... LO! Chiado suave no começo.",
      "articulatoryCue": "Lábios redondos projetados soprando: CHIII.",
      "varEliminate": [
        "TI",
        "PI"
      ],
      "distractorExplanations": {
        "XI": "Chinelo se escreve com CH!",
        "TI": "Tinelo não existe! É CHINELO!",
        "PI": "Pinelo não existe! No vestiário calça-se CHINELO!"
      }
    }
  },
  {
    "id": "ch_28",
    "phoneme": "CH",
    "word": "COLCHA",
    "syllables": [
      "COL",
      "CHA"
    ],
    "phonemePosition": "fim",
    "missingPart": "CHA",
    "distractors": [
      "XA",
      "TA",
      "SA"
    ],
    "initialSound": "C",
    "minimalPair": [
      "COLCHA",
      "COISA"
    ],
    "fullSentence": "O hotel da concentração tinha uma colcha verde com o escudo do clube!",
    "sentenceMissing": "O hotel da concentração tinha uma _____ verde com o escudo do clube!",
    "meaning": "Cobertor da cama dos jogadores na concentração.",
    "hint": {
      "soundCue": "COL... CHAAA! Sílaba final chiada suave.",
      "articulatoryCue": "Termine com ar contínuo em bico: CHAAA.",
      "varEliminate": [
        "TA",
        "SA"
      ],
      "distractorExplanations": {
        "XA": "Colcha de cama é com CH!",
        "TA": "Colta não existe! É COLCHA!",
        "SA": "Colsa não existe! A cama tem COLCHA!"
      }
    }
  },
  {
    "id": "pt_1",
    "phoneme": "P_VS_T",
    "word": "PASSE",
    "syllables": [
      "PAS",
      "SE"
    ],
    "phonemePosition": "início",
    "missingPart": "PAS",
    "distractors": [
      "TAS",
      "CAS",
      "BAS"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PASSE",
      "TASSE"
    ],
    "fullSentence": "O camisa 10 deu um passe perfeito de calcanhar!",
    "sentenceMissing": "O camisa 10 deu um _____ perfeito de calcanhar!",
    "meaning": "Tocar a bola para o companheiro de time.",
    "hint": {
      "soundCue": "PAAAS... SE! Sinta o estouro dos lábios no P.",
      "articulatoryCue": "Aperte os dois lábios juntos e solte a pressão: P-P-PAS!",
      "varEliminate": [
        "CAS",
        "BAS"
      ],
      "distractorExplanations": {
        "TAS": "TAS encosta a língua nos dentes. PASSE estoura os lábios juntos!",
        "CAS": "CAS vem do fundo da garganta. PASSE vem dos lábios!",
        "BAS": "BAS vibra a garganta com voz. PASSE é sopro seco nos lábios!"
      }
    }
  },
  {
    "id": "pt_2",
    "phoneme": "P_VS_T",
    "word": "TRAVE",
    "syllables": [
      "TRA",
      "VE"
    ],
    "phonemePosition": "início",
    "missingPart": "TRA",
    "distractors": [
      "PRA",
      "CRA",
      "GRA"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TRAVE",
      "PRAVE"
    ],
    "fullSentence": "A bola explodiu no poste da trave e quase entrou!",
    "sentenceMissing": "A bola explodiu no poste da _____ e quase entrou!",
    "meaning": "A barra de ferro que sustenta as redes do gol.",
    "hint": {
      "soundCue": "TRAAA... VE! A língua bate atrás dos dentes no T.",
      "articulatoryCue": "Ponta da língua no céu da boca atrás dos dentes: T-T-TRA!",
      "varEliminate": [
        "CRA",
        "GRA"
      ],
      "distractorExplanations": {
        "PRA": "PRA encosta os lábios. TRAVE usa a ponta da língua nos dentes!",
        "CRA": "CRA vem da garganta. TRAVE vem da ponta da língua!",
        "GRA": "GRA é forte na garganta. TRAVE bate nos dentes de cima!"
      }
    }
  },
  {
    "id": "pt_3",
    "phoneme": "P_VS_T",
    "word": "PÊNALTI",
    "syllables": [
      "PÊ",
      "NAL",
      "TI"
    ],
    "phonemePosition": "início",
    "missingPart": "PÊ",
    "distractors": [
      "TÊ",
      "BÊ",
      "DÊ"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PÊNALTI",
      "TÊNALTI"
    ],
    "fullSentence": "Falta na grande área é pênalti para o nosso time!",
    "sentenceMissing": "Falta na grande área é _____ para o nosso time!",
    "meaning": "Cobrança máxima de frente pro gol a 11 metros.",
    "hint": {
      "soundCue": "PÊÊÊ... NAL... TI! Lábios fechados no início.",
      "articulatoryCue": "Junte os dois lábios e solte com pressão: PÊÊÊ.",
      "varEliminate": [
        "BÊ",
        "DÊ"
      ],
      "distractorExplanations": {
        "TÊ": "TÊ bate língua nos dentes. PÊNALTI encosta lábio com lábio!",
        "BÊ": "BÊ vibra as cordas da voz. PÊNALTI é estouro labial puro!",
        "DÊ": "DÊ é na língua com voz. PÊNALTI é com a letra P!"
      }
    }
  },
  {
    "id": "pt_4",
    "phoneme": "P_VS_T",
    "word": "TORCIDA",
    "syllables": [
      "TOR",
      "CI",
      "DA"
    ],
    "phonemePosition": "início",
    "missingPart": "TOR",
    "distractors": [
      "POR",
      "COR",
      "MOR"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TORCIDA",
      "PORCIDA"
    ],
    "fullSentence": "A torcida cantou sem parar apoiando a equipe!",
    "sentenceMissing": "A _____ cantou sem parar apoiando a equipe!",
    "meaning": "Os torcedores cantando e vibrando na arquibancada.",
    "hint": {
      "soundCue": "TOOR... CI... DA! O som T toca a ponta da língua nos dentes.",
      "articulatoryCue": "Língua afiada encostando no teto da boca atrás dos dentes: TOR.",
      "varEliminate": [
        "COR",
        "MOR"
      ],
      "distractorExplanations": {
        "POR": "POR encosta os lábios. TORCIDA toca a língua nos dentes!",
        "COR": "COR vem lá da garganta. TORCIDA é na ponta da boca!",
        "MOR": "MOR fecha a boca com nariz. TORCIDA é com T!"
      }
    }
  },
  {
    "id": "pt_5",
    "phoneme": "P_VS_T",
    "word": "PLACAR",
    "syllables": [
      "PLA",
      "CAR"
    ],
    "phonemePosition": "início",
    "missingPart": "PLA",
    "distractors": [
      "TLA",
      "CLA",
      "BLA"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PLACAR",
      "CLACAR"
    ],
    "fullSentence": "O placar do estádio marcou três a zero para os donos da casa!",
    "sentenceMissing": "O _____ do estádio marcou três a zero para os donos da casa!",
    "meaning": "Painel luminoso onde ficam os gols da partida.",
    "hint": {
      "soundCue": "PLAAA... CAR! O P abre a palavra com os lábios.",
      "articulatoryCue": "Aperte os lábios e escorregue a língua pro L: PLAAA.",
      "varEliminate": [
        "CLA",
        "BLA"
      ],
      "distractorExplanations": {
        "TLA": "TLA não existe na nossa língua! Usamos PLACAR com P!",
        "CLA": "CLA arranha a garganta. PLACAR começa nos lábios!",
        "BLA": "BLA tem som com voz. PLACAR é sopro explosivo com P!"
      }
    }
  },
  {
    "id": "pt_6",
    "phoneme": "P_VS_T",
    "word": "TÁTICA",
    "syllables": [
      "TÁ",
      "TI",
      "CA"
    ],
    "phonemePosition": "início",
    "missingPart": "TÁ",
    "distractors": [
      "PÁ",
      "DÁ",
      "BÁ"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TÁTICA",
      "PÁTICA"
    ],
    "fullSentence": "O treinador montou uma tática ofensiva para surpreender o rival!",
    "sentenceMissing": "O treinador montou uma _____ ofensiva para surpreender o rival!",
    "meaning": "Estratégia e plano de jogo desenhado na prancheta.",
    "hint": {
      "soundCue": "TÁÁÁ... TI... CA! Dois sons de T seguidos na língua.",
      "articulatoryCue": "Dê um toque rápido com a língua nos dentes superiores: TÁÁÁ.",
      "varEliminate": [
        "DÁ",
        "BÁ"
      ],
      "distractorExplanations": {
        "PÁ": "PÁ fecha os lábios. TÁTICA bate a língua nos dentes!",
        "DÁ": "DÁ é com voz vibrando. TÁTICA é toque seco de língua!",
        "BÁ": "BÁ é labial sonoro. TÁTICA é dental com T!"
      }
    }
  },
  {
    "id": "pt_7",
    "phoneme": "P_VS_T",
    "word": "PONTA",
    "syllables": [
      "PON",
      "TA"
    ],
    "phonemePosition": "início",
    "missingPart": "PON",
    "distractors": [
      "TON",
      "CON",
      "BON"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PONTA",
      "TONTA"
    ],
    "fullSentence": "O atacante de ponta driblou pela linha lateral e cruzou!",
    "sentenceMissing": "O atacante de _____ driblou pela linha lateral e cruzou!",
    "meaning": "Jogador que atua pelos lados do gramado.",
    "hint": {
      "soundCue": "POOON... TA! Lábios fechados no início, língua no final.",
      "articulatoryCue": "Comece com lábios juntos no P e termine com língua no T: PON-TA.",
      "varEliminate": [
        "CON",
        "BON"
      ],
      "distractorExplanations": {
        "TON": "TONTA é tonta! O jogador que corre na lateral joga na PONTA!",
        "CON": "CON vem da garganta. PONTA fecha os lábios no P!",
        "BON": "BON vibra a voz. PONTA tem explosão labial com P!"
      }
    }
  },
  {
    "id": "pt_8",
    "phoneme": "P_VS_T",
    "word": "TOQUE",
    "syllables": [
      "TO",
      "QUE"
    ],
    "phonemePosition": "início",
    "missingPart": "TO",
    "distractors": [
      "PO",
      "CO",
      "DO"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TOQUE",
      "POQUE"
    ],
    "fullSentence": "O futebol moderno exige toque rápido de primeira!",
    "sentenceMissing": "O futebol moderno exige _____ rápido de primeira!",
    "meaning": "Contato com a bola para passar rápido.",
    "hint": {
      "soundCue": "TOOO... QUE! A língua encosta nos dentes superiores no T.",
      "articulatoryCue": "Ponta da língua no alto dos dentes: TOOO.",
      "varEliminate": [
        "CO",
        "DO"
      ],
      "distractorExplanations": {
        "PO": "PO usa os lábios. TOQUE usa a ponta da língua!",
        "CO": "CO sai da garganta. TOQUE é na frente dos dentes!",
        "DO": "DO vibra com voz. TOQUE é estalo seco do T!"
      }
    }
  },
  {
    "id": "pt_9",
    "phoneme": "P_VS_T",
    "word": "PERNA",
    "syllables": [
      "PER",
      "NA"
    ],
    "phonemePosition": "início",
    "missingPart": "PER",
    "distractors": [
      "TER",
      "BER",
      "CER"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PERNA",
      "TERNA"
    ],
    "fullSentence": "O atacante chutou colocado com a perna esquerda no ângulo!",
    "sentenceMissing": "O atacante chutou colocado com a _____ esquerda no ângulo!",
    "meaning": "Membro do corpo usado para correr e chutar a bola.",
    "hint": {
      "soundCue": "PEEER... NA! Explosão de ar nos lábios.",
      "articulatoryCue": "Lábios firmes soltando o P: PER.",
      "varEliminate": [
        "BER",
        "CER"
      ],
      "distractorExplanations": {
        "TER": "TER usa língua nos dentes. PERNA é feita com os lábios no P!",
        "BER": "BER tem som com cordas vocais. PERNA é estalo seco de P!",
        "CER": "CER tem som de cobrinha. PERNA é oclusiva labial P!"
      }
    }
  },
  {
    "id": "pt_10",
    "phoneme": "P_VS_T",
    "word": "TESTA",
    "syllables": [
      "TES",
      "TA"
    ],
    "phonemePosition": "início",
    "missingPart": "TES",
    "distractors": [
      "PES",
      "RES",
      "CES"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TESTA",
      "PESTA"
    ],
    "fullSentence": "O zagueiro acertou a bola em cheio com a testa e fez o gol de cabeça!",
    "sentenceMissing": "O zagueiro acertou a bola em cheio com a _____ e fez o gol de cabeça!",
    "meaning": "Parte da cabeça acima dos olhos usada para cabecear.",
    "hint": {
      "soundCue": "TEEEES... TA! Os dois sons usam a ponta da língua nos dentes.",
      "articulatoryCue": "Língua atrás dos dentes superiores: TES-TA.",
      "varEliminate": [
        "RES",
        "CES"
      ],
      "distractorExplanations": {
        "PES": "PES encosta os lábios. TESTA usa a língua nos dentes!",
        "RES": "RES vibra na garganta. TESTA bate nos dentes!",
        "CES": "CES é chiado suave. TESTA é batida seca de língua no T!"
      }
    }
  },
  {
    "id": "pt_11",
    "phoneme": "P_VS_T",
    "word": "PULO",
    "syllables": [
      "PU",
      "LO"
    ],
    "phonemePosition": "início",
    "missingPart": "PU",
    "distractors": [
      "TU",
      "BU",
      "CU"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PULO",
      "TULO"
    ],
    "fullSentence": "O goleiro deu um pulo impressionante para espalmar a bola!",
    "sentenceMissing": "O goleiro deu um _____ impressionante para espalmar a bola!",
    "meaning": "Salto para alcançar a bola no ar.",
    "hint": {
      "soundCue": "PUUU... LO! Lábios fechados soltando pressão.",
      "articulatoryCue": "Aperte os dois lábios e solte o ar: PUUU.",
      "varEliminate": [
        "BU",
        "CU"
      ],
      "distractorExplanations": {
        "TU": "TU é na ponta da língua. PULO salta dos lábios juntos no P!",
        "BU": "BU usa voz na garganta. PULO é sopro seco com P!",
        "CU": "CU vem do fundo da boca. PULO vem da frente dos lábios!"
      }
    }
  },
  {
    "id": "pt_12",
    "phoneme": "P_VS_T",
    "word": "TÚNEL",
    "syllables": [
      "TÚ",
      "NEL"
    ],
    "phonemePosition": "início",
    "missingPart": "TÚ",
    "distractors": [
      "PÚ",
      "BÚ",
      "DÚ"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TÚNEL",
      "PÚNEL"
    ],
    "fullSentence": "Os jogadores caminharam pelo túnel de acesso ao gramado!",
    "sentenceMissing": "Os jogadores caminharam pelo _____ de acesso ao gramado!",
    "meaning": "Passagem coberta que leva do vestiário ao campo.",
    "hint": {
      "soundCue": "TÚÚÚ... NEL! A ponta da língua bate nos dentes de cima.",
      "articulatoryCue": "Língua no alto atrás dos dentes: TÚÚÚ.",
      "varEliminate": [
        "BÚ",
        "DÚ"
      ],
      "distractorExplanations": {
        "PÚ": "PÚ fecha os lábios. TÚNEL toca a língua nos dentes!",
        "BÚ": "BÚ é labial com voz. TÚNEL é com a letra T!",
        "DÚ": "DÚ é com som sonoro. TÚNEL é estalo seco do T!"
      }
    }
  },
  {
    "id": "pt_13",
    "phoneme": "P_VS_T",
    "word": "CAMPO",
    "syllables": [
      "CAM",
      "PO"
    ],
    "phonemePosition": "fim",
    "missingPart": "PO",
    "distractors": [
      "TO",
      "CO",
      "DO"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CAMPO",
      "CANTO"
    ],
    "fullSentence": "O gramado do campo está perfeito para a grande final!",
    "sentenceMissing": "O gramado do _____ está perfeito para a grande final!",
    "meaning": "O palco do jogo de futebol.",
    "hint": {
      "soundCue": "CAM... POOO! A última sílaba fecha com os lábios no P.",
      "articulatoryCue": "Feche os lábios no final da palavra: POOO.",
      "varEliminate": [
        "CO",
        "DO"
      ],
      "distractorExplanations": {
        "TO": "CANTO é a quina do gramado! O retângulo todo é o CAMPO com P!",
        "CO": "Canco não existe! Onde jogamos bola é CAMPO!",
        "DO": "Cando não existe! É CAMPO com P!"
      }
    }
  },
  {
    "id": "pt_14",
    "phoneme": "P_VS_T",
    "word": "CANTO",
    "syllables": [
      "CAN",
      "TO"
    ],
    "phonemePosition": "fim",
    "missingPart": "TO",
    "distractors": [
      "PO",
      "CO",
      "BO"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CANTO",
      "CAMPO"
    ],
    "fullSentence": "O atacante chutou com categoria no canto direito do goleiro!",
    "sentenceMissing": "O atacante chutou com categoria no _____ direito do goleiro!",
    "meaning": "A gaveta ou cantinho onde o goleiro não pega.",
    "hint": {
      "soundCue": "CAN... TOOO! A última sílaba toca a língua nos dentes.",
      "articulatoryCue": "Encoste a ponta da língua no céu da boca: TOOO.",
      "varEliminate": [
        "CO",
        "BO"
      ],
      "distractorExplanations": {
        "PO": "CAMPO é o gramado todo! O cantinho da rede é CANTO com T!",
        "CO": "Canco não existe! A bola foi no CANTO!",
        "BO": "Cambo não existe! Chute certeiro vai no CANTO!"
      }
    }
  },
  {
    "id": "pt_15",
    "phoneme": "P_VS_T",
    "word": "PATO",
    "syllables": [
      "PA",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "PA",
    "distractors": [
      "TA",
      "CA",
      "BA"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PATO",
      "TATO"
    ],
    "fullSentence": "Alexandre Pato ficou famoso por seus gols velozes no ataque!",
    "sentenceMissing": "Alexandre _____ ficou famoso por seus gols velozes no ataque!",
    "meaning": "Apelido do famoso atacante brasileiro.",
    "hint": {
      "soundCue": "PAAA... TO! Lábios no P no começo, língua no T no final.",
      "articulatoryCue": "Abra os lábios no P: PAAA.",
      "varEliminate": [
        "CA",
        "BA"
      ],
      "distractorExplanations": {
        "TA": "TATO é sentir com as mãos! O apelido do atacante é PATO!",
        "CA": "CATO é catar bolinhas! O craque é PATO!",
        "BA": "BATO é bater na bola! O jogador se chama PATO!"
      }
    }
  },
  {
    "id": "pt_16",
    "phoneme": "P_VS_T",
    "word": "TATO",
    "syllables": [
      "TA",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "TA",
    "distractors": [
      "PA",
      "GA",
      "DA"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TATO",
      "PATO"
    ],
    "fullSentence": "O goleiro precisa de tato apurado para agarrar a bola molhada!",
    "sentenceMissing": "O goleiro precisa de _____ apurado para agarrar a bola molhada!",
    "meaning": "Sentido de sentir e segurar com as mãos.",
    "hint": {
      "soundCue": "TAAA... TO! Dois sons T batendo a língua nos dentes.",
      "articulatoryCue": "Bata a ponta da língua nos dentes superiores: TAAA.",
      "varEliminate": [
        "GA",
        "DA"
      ],
      "distractorExplanations": {
        "PA": "PATO é a ave ou atacante! Sentir com as mãos é TATO com T!",
        "GA": "GATO é o felino! O sentido das mãos é TATO!",
        "DA": "DATO não é sentido! É TATO com a letra T!"
      }
    }
  },
  {
    "id": "pt_17",
    "phoneme": "P_VS_T",
    "word": "PARADA",
    "syllables": [
      "PA",
      "RA",
      "DA"
    ],
    "phonemePosition": "início",
    "missingPart": "PA",
    "distractors": [
      "TA",
      "BA",
      "CA"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PARADA",
      "TIRADA"
    ],
    "fullSentence": "O árbitro autorizou a parada técnica para os jogadores beberem água!",
    "sentenceMissing": "O árbitro autorizou a _____ técnica para os jogadores beberem água!",
    "meaning": "Pausa no jogo para hidratação dos atletas.",
    "hint": {
      "soundCue": "PAAA... RA... DA! Começa com os lábios fechados no P.",
      "articulatoryCue": "Lábios juntos soltando com energia: PAAA.",
      "varEliminate": [
        "BA",
        "CA"
      ],
      "distractorExplanations": {
        "TA": "Tarada não existe! A pausa do jogo é PARADA com P!",
        "BA": "Barada não existe! A pausa é PARADA!",
        "CA": "Carada não existe! É a PARADA técnica!"
      }
    }
  },
  {
    "id": "pt_18",
    "phoneme": "P_VS_T",
    "word": "TIRADA",
    "syllables": [
      "TI",
      "RA",
      "DA"
    ],
    "phonemePosition": "início",
    "missingPart": "TI",
    "distractors": [
      "PI",
      "BI",
      "DI"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TIRADA",
      "PIRADA"
    ],
    "fullSentence": "Que tirada espetacular do zagueiro em cima da linha do gol!",
    "sentenceMissing": "Que _____ espetacular do zagueiro em cima da linha do gol!",
    "meaning": "Ato de tirar a bola que ia entrar no gol.",
    "hint": {
      "soundCue": "TIII... RA... DA! Língua nos dentes no T.",
      "articulatoryCue": "Ponta da língua nos dentes de cima: TIII.",
      "varEliminate": [
        "BI",
        "DI"
      ],
      "distractorExplanations": {
        "PI": "Pirada é doidinha! Salvar a bola na linha é TIRADA com T!",
        "BI": "Birada não existe! O zagueiro deu uma TIRADA de bola!",
        "DI": "Dirada não existe! A salvação da bola é TIRADA!"
      }
    }
  },
  {
    "id": "pt_19",
    "phoneme": "P_VS_T",
    "word": "APITO",
    "syllables": [
      "A",
      "PI",
      "TO"
    ],
    "phonemePosition": "meio",
    "missingPart": "PI",
    "distractors": [
      "TI",
      "BI",
      "CI"
    ],
    "initialSound": "A",
    "minimalPair": [
      "APITO",
      "ATITO"
    ],
    "fullSentence": "Ao som do apito final, o time comemorou o troféu!",
    "sentenceMissing": "Ao som do _____ final, o time comemorou o troféu!",
    "meaning": "Instrumento que o árbitro sopra para conduzir o jogo.",
    "hint": {
      "soundCue": "A... PIII... TO! O P estala no meio da palavra com lábios.",
      "articulatoryCue": "Junte os dois lábios no PI: A-PI-TO.",
      "varEliminate": [
        "BI",
        "CI"
      ],
      "distractorExplanations": {
        "TI": "Atito não existe! O instrumento do juiz é APITO com P!",
        "BI": "Abito não apita jogo! É o APITO do juiz!",
        "CI": "Acito não existe! O juiz sopra o APITO!"
      }
    }
  },
  {
    "id": "pt_20",
    "phoneme": "P_VS_T",
    "word": "TAPETE",
    "syllables": [
      "TA",
      "PE",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "TA",
    "distractors": [
      "PA",
      "BA",
      "DA"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TAPETE",
      "PAPETE"
    ],
    "fullSentence": "O gramado do estádio parecia um verdadeiro tapete verde!",
    "sentenceMissing": "O gramado do estádio parecia um verdadeiro _____ verde!",
    "meaning": "Campo plano, liso e bem cuidado.",
    "hint": {
      "soundCue": "TAAA... PE... TE! Começa com T na língua e tem P no meio.",
      "articulatoryCue": "Comece com a língua nos dentes: TAAA.",
      "varEliminate": [
        "BA",
        "DA"
      ],
      "distractorExplanations": {
        "PA": "PAPETE é sandália! O gramado liso parece um TAPETE com T!",
        "BA": "Bapete não existe! O campo verde é um TAPETE!",
        "DA": "Dapete não existe! É o gramado parecendo TAPETE!"
      }
    }
  },
  {
    "id": "pt_21",
    "phoneme": "P_VS_T",
    "word": "POTE",
    "syllables": [
      "PO",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "PO",
    "distractors": [
      "TO",
      "BO",
      "DO"
    ],
    "initialSound": "P",
    "minimalPair": [
      "POTE",
      "TOTE"
    ],
    "fullSentence": "Nosso time ficou no pote principal do sorteio dos grupos da Copa!",
    "sentenceMissing": "Nosso time ficou no _____ principal do sorteio dos grupos da Copa!",
    "meaning": "Grupo de times cabeças de chave no sorteio.",
    "hint": {
      "soundCue": "POOO... TE! P nos lábios no começo, T na língua no fim.",
      "articulatoryCue": "Lábios fechados soltando com força: POOO.",
      "varEliminate": [
        "BO",
        "DO"
      ],
      "distractorExplanations": {
        "TO": "TOTE não é grupo de sorteio! O sorteio usa POTE com P!",
        "BO": "BOTE é embarcação ou ataque de cobra! No sorteio é POTE!",
        "DO": "DOTE não é do sorteio! O clube foi pro POTE 1!"
      }
    }
  },
  {
    "id": "pt_22",
    "phoneme": "P_VS_T",
    "word": "TEMPO",
    "syllables": [
      "TEM",
      "PO"
    ],
    "phonemePosition": "início",
    "missingPart": "TEM",
    "distractors": [
      "PEM",
      "BEM",
      "SEM"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TEMPO",
      "PEMPO"
    ],
    "fullSentence": "No segundo tempo, o treinador colocou o atacante reserva!",
    "sentenceMissing": "No segundo _____, o treinador colocou o atacante reserva!",
    "meaning": "Cada uma das duas etapas de 45 minutos da partida.",
    "hint": {
      "soundCue": "TEEEEM... PO! Começa com T na ponta da língua.",
      "articulatoryCue": "Ponta da língua nos dentes no início: TEM.",
      "varEliminate": [
        "BEM",
        "SEM"
      ],
      "distractorExplanations": {
        "PEM": "Pempo não existe! A etapa de 45 minutos é o TEMPO com T!",
        "BEM": "Bem é o oposto de mal! A partida tem primeiro e segundo TEMPO!",
        "SEM": "Sem é falta de algo! O relógio marca o TEMPO!"
      }
    }
  },
  {
    "id": "pt_23",
    "phoneme": "P_VS_T",
    "word": "PONTO",
    "syllables": [
      "PON",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "PON",
    "distractors": [
      "TON",
      "CON",
      "BON"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PONTO",
      "TONTO"
    ],
    "fullSentence": "Conquistar um ponto fora de casa foi um grande resultado!",
    "sentenceMissing": "Conquistar um _____ fora de casa foi um grande resultado!",
    "meaning": "Unidade somada na tabela do campeonato.",
    "hint": {
      "soundCue": "POOON... TO! Lábios no P e língua no T.",
      "articulatoryCue": "Comece fechando os lábios: PON.",
      "varEliminate": [
        "CON",
        "BON"
      ],
      "distractorExplanations": {
        "TON": "TONTO é ficar tonto! Na classificação ganha-se PONTO com P!",
        "CON": "CONTO é historinha! No empate soma-se 1 PONTO!",
        "BON": "BON não conta ponto! Na tabela soma-se PONTO!"
      }
    }
  },
  {
    "id": "pt_24",
    "phoneme": "P_VS_T",
    "word": "TIME",
    "syllables": [
      "TI",
      "ME"
    ],
    "phonemePosition": "início",
    "missingPart": "TI",
    "distractors": [
      "PI",
      "BI",
      "DI"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TIME",
      "PIME"
    ],
    "fullSentence": "O time jogou com união e dedicação para ser campeão!",
    "sentenceMissing": "O _____ jogou com união e dedicação para ser campeão!",
    "meaning": "A equipe formada por todos os jogadores.",
    "hint": {
      "soundCue": "TIII... ME! A ponta da língua toca os dentes superiores no T.",
      "articulatoryCue": "Língua afiada atrás dos dentes: TIII.",
      "varEliminate": [
        "BI",
        "DI"
      ],
      "distractorExplanations": {
        "PI": "Pime não existe! Os onze jogadores formam um TIME com T!",
        "BI": "Bime não existe! A equipe reunida é o TIME!",
        "DI": "Dime não existe! Nós torcemos para o nosso TIME!"
      }
    }
  },
  {
    "id": "pt_25",
    "phoneme": "P_VS_T",
    "word": "PEITO",
    "syllables": [
      "PEI",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "PEI",
    "distractors": [
      "TEI",
      "BEI",
      "LEI"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PEITO",
      "TEITO"
    ],
    "fullSentence": "O atacante matou a bola no peito e emendou um lindo voleio!",
    "sentenceMissing": "O atacante matou a bola no _____ e emendou um lindo voleio!",
    "meaning": "Parte do tórax usada para amortecer a bola aérea.",
    "hint": {
      "soundCue": "PEEEI... TO! Lábios juntos no P e língua no final com T.",
      "articulatoryCue": "Estouro com os lábios no começo: PEI.",
      "varEliminate": [
        "BEI",
        "LEI"
      ],
      "distractorExplanations": {
        "TEI": "Teito não existe! Matar a bola no tronco é no PEITO com P!",
        "BEI": "BEITO não existe! A bola amortece no PEITO!",
        "LEI": "LEITO é cama de hospital! Amortecer a bola é no PEITO!"
      }
    }
  },
  {
    "id": "pt_26",
    "phoneme": "P_VS_T",
    "word": "TETO",
    "syllables": [
      "TE",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "TE",
    "distractors": [
      "PE",
      "BE",
      "DE"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TETO",
      "PETO"
    ],
    "fullSentence": "O estádio moderno tem um teto retrátil que fecha em dias de chuva!",
    "sentenceMissing": "O estádio moderno tem um _____ retrátil que fecha em dias de chuva!",
    "meaning": "Cobertura superior da arena esportiva.",
    "hint": {
      "soundCue": "TEEE... TO! Os dois sons usam a língua nos dentes.",
      "articulatoryCue": "Ponta da língua nos dentes em ambas as sílabas: TE-TO.",
      "varEliminate": [
        "BE",
        "DE"
      ],
      "distractorExplanations": {
        "PE": "Peto não é cobertura! A cobertura da arena é o TETO com T!",
        "BE": "Beto é nome de pessoa! A cobertura é o TETO!",
        "DE": "Deto não existe! O estádio tem TETO retrátil!"
      }
    }
  },
  {
    "id": "pt_27",
    "phoneme": "P_VS_T",
    "word": "PACOTE",
    "syllables": [
      "PA",
      "CO",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "PA",
    "distractors": [
      "TA",
      "CA",
      "BA"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PACOTE",
      "TACOTE"
    ],
    "fullSentence": "O torcedor abriu um pacote de figurinhas para colar no álbum!",
    "sentenceMissing": "O torcedor abriu um _____ de figurinhas para colar no álbum!",
    "meaning": "Envelope com figurinhas dos craques de futebol.",
    "hint": {
      "soundCue": "PAAA... CO... TE! Começa com os lábios no P.",
      "articulatoryCue": "Lábios firmes soltando o P: PAAA.",
      "varEliminate": [
        "CA",
        "BA"
      ],
      "distractorExplanations": {
        "TA": "Tacote não existe! As figurinhas vêm no PACOTE com P!",
        "CA": "Cacote não existe! Abrir figurinha é no PACOTE!",
        "BA": "Bacote não existe! É PACOTE de figurinhas!"
      }
    }
  },
  {
    "id": "pt_28",
    "phoneme": "P_VS_T",
    "word": "TITULAR",
    "syllables": [
      "TI",
      "TU",
      "LAR"
    ],
    "phonemePosition": "início",
    "missingPart": "TI",
    "distractors": [
      "PI",
      "BI",
      "CI"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TITULAR",
      "PITULAR"
    ],
    "fullSentence": "O zagueiro jogou com tanta segurança que virou titular da equipe!",
    "sentenceMissing": "O zagueiro jogou com tanta segurança que virou _____ da equipe!",
    "meaning": "Jogador que começa jogando entre os 11 principais.",
    "hint": {
      "soundCue": "TIII... TU... LAR! Duas vezes T com a língua nos dentes.",
      "articulatoryCue": "Ponta da língua vibrando atrás dos dentes: TI-TU.",
      "varEliminate": [
        "BI",
        "CI"
      ],
      "distractorExplanations": {
        "PI": "Pitular não existe! Quem começa jogando é TITULAR com T!",
        "BI": "Bitular não existe! O jogador principal é TITULAR!",
        "CI": "Citular não existe! Ele garantiu a vaga como TITULAR!"
      }
    }
  },
  {
    "id": "r_1",
    "phoneme": "R_VIBRANTE",
    "word": "REDE",
    "syllables": [
      "RE",
      "DE"
    ],
    "phonemePosition": "início",
    "missingPart": "RE",
    "distractors": [
      "SE",
      "TE",
      "LE"
    ],
    "initialSound": "R",
    "minimalPair": [
      "REDE",
      "SEDE"
    ],
    "fullSentence": "A bola estufou a rede com força e balançou o estádio!",
    "sentenceMissing": "A bola estufou a _____ com força e balançou o estádio!",
    "meaning": "Manta de malhas trançadas no fundo do gol.",
    "hint": {
      "soundCue": "RRRREEE... DE! Som de R forte que arranha a garganta.",
      "articulatoryCue": "Solte o ar com força pela garganta: RRRREEE.",
      "varEliminate": [
        "TE",
        "LE"
      ],
      "distractorExplanations": {
        "SE": "SEDE é vontade de beber água! No fundo do gol fica a REDE com R!",
        "TE": "TEDE não existe! A bola estufa a REDE!",
        "LE": "LEDE não é de gol! É a REDE que balança com o gol!"
      }
    }
  },
  {
    "id": "r_2",
    "phoneme": "R_VIBRANTE",
    "word": "DRIBLE",
    "syllables": [
      "DRI",
      "BLE"
    ],
    "phonemePosition": "meio",
    "missingPart": "DRI",
    "distractors": [
      "DI",
      "TRI",
      "PRI"
    ],
    "initialSound": "D",
    "minimalPair": [
      "DRIBLE",
      "DIBLE"
    ],
    "fullSentence": "O camisa 7 aplicou um drible desconcertante no lateral!",
    "sentenceMissing": "O camisa 7 aplicou um _____ desconcertante no lateral!",
    "meaning": "Finta mágica para ultrapassar o marcador.",
    "hint": {
      "soundCue": "DRRRIII... BLE! A língua vibra rápido entre o D e o I.",
      "articulatoryCue": "Faça a ponta da língua vibrar rápido: DRRR-I.",
      "varEliminate": [
        "TRI",
        "PRI"
      ],
      "distractorExplanations": {
        "DI": "DIBLE sem R perde a vibração! Tem que tremer a língua: DRIBLE!",
        "TRI": "TRIBLE não existe! O desarme se vence com DRIBLE com D!",
        "PRI": "PRIBLE não existe! O lance genial é o DRIBLE!"
      }
    }
  },
  {
    "id": "r_3",
    "phoneme": "R_VIBRANTE",
    "word": "CRAQUE",
    "syllables": [
      "CRA",
      "QUE"
    ],
    "phonemePosition": "início",
    "missingPart": "CRA",
    "distractors": [
      "CA",
      "TRA",
      "PRA"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CRAQUE",
      "CAQUE"
    ],
    "fullSentence": "Ele é o maior craque da história da nossa seleção!",
    "sentenceMissing": "Ele é o maior _____ da história da nossa seleção!",
    "meaning": "Jogador fora de série com habilidade genial.",
    "hint": {
      "soundCue": "CRRRÁÁÁ... QUE! Encontro consonantal vibrante CR.",
      "articulatoryCue": "Vibre a língua logo após o estalo da garganta: CRRR-A.",
      "varEliminate": [
        "TRA",
        "PRA"
      ],
      "distractorExplanations": {
        "CA": "CAQUE não existe! O jogador genial é CRAQUE com R vibrante!",
        "TRA": "TRAQUE é estalinho de festa junina! O jogador genial é CRAQUE!",
        "PRA": "PRAQUE não existe! O camisa 10 é um CRAQUE!"
      }
    }
  },
  {
    "id": "r_4",
    "phoneme": "R_VIBRANTE",
    "word": "CRUZAMENTO",
    "syllables": [
      "CRU",
      "ZA",
      "MEN",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "CRU",
    "distractors": [
      "CU",
      "TRU",
      "PRU"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CRUZAMENTO",
      "CUZAMENTO"
    ],
    "fullSentence": "O ponta acertou um cruzamento na medida para a cabeçada!",
    "sentenceMissing": "O ponta acertou um _____ na medida para a cabeçada!",
    "meaning": "Passe alto ou rasteiro mandado da lateral para a grande área.",
    "hint": {
      "soundCue": "CRRRUUU... ZA... MEN... TO! R vibrante bem no início.",
      "articulatoryCue": "Faça o motorzinho do R vibrar: CRRRUUU.",
      "varEliminate": [
        "TRU",
        "PRU"
      ],
      "distractorExplanations": {
        "CU": "Sem o R não vibra! A jogada aérea é CRUZAMENTO!",
        "TRU": "TRUZAMENTO não existe! A bola na área é CRUZAMENTO!",
        "PRU": "PRUZAMENTO não existe! O passe lateral é CRUZAMENTO!"
      }
    }
  },
  {
    "id": "r_5",
    "phoneme": "R_VIBRANTE",
    "word": "CORRER",
    "syllables": [
      "COR",
      "RER"
    ],
    "phonemePosition": "fim",
    "missingPart": "RER",
    "distractors": [
      "LER",
      "TER",
      "SER"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CORRER",
      "COMER"
    ],
    "fullSentence": "O atacante precisou correr em alta velocidade para alcançar a bola!",
    "sentenceMissing": "O atacante precisou _____ em alta velocidade para alcançar a bola!",
    "meaning": "Disparar em velocidade no gramado.",
    "hint": {
      "soundCue": "COR... RRREEEER! RR duplo com som forte e arranhado.",
      "articulatoryCue": "Arranhe a garganta com força no RR: RRRER.",
      "varEliminate": [
        "TER",
        "SER"
      ],
      "distractorExplanations": {
        "LER": "CORLER não existe! Acelerar as pernas é CORRER com RR!",
        "TER": "CORTER não existe! Disparar no gramado é CORRER!",
        "SER": "CORSER não existe! O atleta vai CORRER pelo campo!"
      }
    }
  },
  {
    "id": "r_6",
    "phoneme": "R_VIBRANTE",
    "word": "GOLEIRO",
    "syllables": [
      "GO",
      "LEI",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "LO",
      "TO",
      "SO"
    ],
    "initialSound": "G",
    "minimalPair": [
      "GOLEIRO",
      "GOLETO"
    ],
    "fullSentence": "O goleiro saltou e defendeu a bola com a ponta dos dedos!",
    "sentenceMissing": "O _____ saltou e defendeu a bola com a ponta dos dedos!",
    "meaning": "O defensor que guarda a meta e pode usar as mãos.",
    "hint": {
      "soundCue": "GO... LEI... RROOO! R brando suave no final.",
      "articulatoryCue": "Um toque levinho da língua no céu da boca: ROOO.",
      "varEliminate": [
        "TO",
        "SO"
      ],
      "distractorExplanations": {
        "LO": "GOLEILO não existe! Quem defende a meta é o GOLEIRO com R!",
        "TO": "GOLEITO não existe! O guarda-redes é o GOLEIRO!",
        "SO": "GOLEISO não existe! Paredão do time é o GOLEIRO!"
      }
    }
  },
  {
    "id": "r_7",
    "phoneme": "R_VIBRANTE",
    "word": "ZAGUEIRO",
    "syllables": [
      "ZA",
      "GUEI",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "LO",
      "PO",
      "TO"
    ],
    "initialSound": "Z",
    "minimalPair": [
      "ZAGUEIRO",
      "ZAGUELO"
    ],
    "fullSentence": "O zagueiro desarmou o ataque adversário com precisão cirúrgica!",
    "sentenceMissing": "O _____ desarmou o ataque adversário com precisão cirúrgica!",
    "meaning": "Defensor central que protege a grande área.",
    "hint": {
      "soundCue": "ZA... GUEI... RROOO! O R brando dá o toque suave final.",
      "articulatoryCue": "Ponta da língua dá um toque rápido no palato: RO.",
      "varEliminate": [
        "PO",
        "TO"
      ],
      "distractorExplanations": {
        "LO": "ZAGUELO não existe! Quem desarma é o ZAGUEIRO com R!",
        "PO": "ZAGUEPO não existe! O defensor é o ZAGUEIRO!",
        "TO": "ZAGUETO não existe! O xerife da zaga é o ZAGUEIRO!"
      }
    }
  },
  {
    "id": "r_8",
    "phoneme": "R_VIBRANTE",
    "word": "ARTILHEIRO",
    "syllables": [
      "AR",
      "TI",
      "LHEI",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "LO",
      "TO",
      "DO"
    ],
    "initialSound": "A",
    "minimalPair": [
      "ARTILHEIRO",
      "ARTILHELO"
    ],
    "fullSentence": "O artilheiro do campeonato marcou vinte gols na temporada!",
    "sentenceMissing": "O _____ do campeonato marcou vinte gols na temporada!",
    "meaning": "Jogador que faz mais gols na competição.",
    "hint": {
      "soundCue": "AR... TI... LHEI... RROOO! R brando que finaliza o nome.",
      "articulatoryCue": "Um leve toque da língua no céu da boca: RO.",
      "varEliminate": [
        "TO",
        "DO"
      ],
      "distractorExplanations": {
        "LO": "ARTILHEILO não existe! Quem mais marca gols é o ARTILHEIRO!",
        "TO": "ARTILHEITO não existe! É o ARTILHEIRO da Copa!",
        "DO": "ARTILHEIDO não existe! O homem-gol é o ARTILHEIRO!"
      }
    }
  },
  {
    "id": "r_9",
    "phoneme": "R_VIBRANTE",
    "word": "BANDEIRA",
    "syllables": [
      "BAN",
      "DEI",
      "RA"
    ],
    "phonemePosition": "fim",
    "missingPart": "RA",
    "distractors": [
      "LA",
      "TA",
      "DA"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BANDEIRA",
      "BANDEILA"
    ],
    "fullSentence": "A torcida balançou a grande bandeira com as cores do clube!",
    "sentenceMissing": "A torcida balançou a grande _____ com as cores do clube!",
    "meaning": "Pano colorido que simboliza o time ou instrumento do árbitro assistente.",
    "hint": {
      "soundCue": "BAN... DEI... RRRAAA! Som suave do R brando.",
      "articulatoryCue": "A ponta da língua dá um estalo rápido no céu da boca: RA.",
      "varEliminate": [
        "TA",
        "DA"
      ],
      "distractorExplanations": {
        "LA": "BANDEILA troca o R por L! O certo é BANDEIRA!",
        "TA": "BANDEITA não existe! O símbolo do clube é a BANDEIRA!",
        "DA": "BANDEIDA não existe! A torcida agita a BANDEIRA!"
      }
    }
  },
  {
    "id": "r_10",
    "phoneme": "R_VIBRANTE",
    "word": "LATERAL",
    "syllables": [
      "LA",
      "TE",
      "RAL"
    ],
    "phonemePosition": "fim",
    "missingPart": "RAL",
    "distractors": [
      "LAL",
      "TAL",
      "PAL"
    ],
    "initialSound": "L",
    "minimalPair": [
      "LATERAL",
      "LATELAL"
    ],
    "fullSentence": "O lateral avançou pela ponta direita e cruzou para a área!",
    "sentenceMissing": "O _____ avançou pela ponta direita e cruzou para a área!",
    "meaning": "Jogador que atua pelos lados do campo.",
    "hint": {
      "soundCue": "LA... TE... RRRAAAL! O R brando se junta ao L final.",
      "articulatoryCue": "Vibração suave de língua e ponta subindo no L: RAL.",
      "varEliminate": [
        "TAL",
        "PAL"
      ],
      "distractorExplanations": {
        "LAL": "LATELAL confunde o R com L! A posição é LATERAL com R!",
        "TAL": "LATETAL não existe! Quem apoia o ataque é o LATERAL!",
        "PAL": "LATEPAL não existe! O ala de lado é o LATERAL!"
      }
    }
  },
  {
    "id": "r_11",
    "phoneme": "R_VIBRANTE",
    "word": "TREINO",
    "syllables": [
      "TREI",
      "NO"
    ],
    "phonemePosition": "início",
    "missingPart": "TREI",
    "distractors": [
      "TEI",
      "PREI",
      "CREI"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TREINO",
      "TEINO"
    ],
    "fullSentence": "A dedicação no treino durante a semana garantiu a vitória no domingo!",
    "sentenceMissing": "A dedicação no _____ durante a semana garantiu a vitória no domingo!",
    "meaning": "Prática e preparação física e tática dos jogadores.",
    "hint": {
      "soundCue": "TRRRREEEI... NO! Encontro consonantal TR vibrante.",
      "articulatoryCue": "Ponta da língua bate no T e vibra logo em seguida: TREI.",
      "varEliminate": [
        "PREI",
        "CREI"
      ],
      "distractorExplanations": {
        "TEI": "TEINO esqueceu o R vibrante! O preparo dos craques é o TREINO!",
        "PREI": "PREINO não existe! A preparação com T e R é TREINO!",
        "CREI": "CREINO não existe! Para jogar bem precisa de TREINO!"
      }
    }
  },
  {
    "id": "r_12",
    "phoneme": "R_VIBRANTE",
    "word": "TROFÉU",
    "syllables": [
      "TRO",
      "FÉU"
    ],
    "phonemePosition": "início",
    "missingPart": "TRO",
    "distractors": [
      "TO",
      "PRO",
      "CRO"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TROFÉU",
      "TOFÉU"
    ],
    "fullSentence": "O capitão ergueu o troféu dourado diante da torcida apaixonada!",
    "sentenceMissing": "O capitão ergueu o _____ dourado diante da torcida apaixonada!",
    "meaning": "A taça de ouro concedida ao campeão da Copa.",
    "hint": {
      "soundCue": "TRRRÓÓÓ... FÉU! O R vibra entre a língua e os dentes.",
      "articulatoryCue": "Toque no T e faça vibrar: TRRRÓ.",
      "varEliminate": [
        "PRO",
        "CRO"
      ],
      "distractorExplanations": {
        "TO": "TOFÉU esqueceu a vibração do R! A taça dourada é o TROFÉU!",
        "PRO": "PROFÉU não existe! O prêmio de campeão é TROFÉU com T e R!",
        "CRO": "CROFÉU não existe! A taça da vitória é o TROFÉU!"
      }
    }
  },
  {
    "id": "r_13",
    "phoneme": "R_VIBRANTE",
    "word": "PRIMEIRO",
    "syllables": [
      "PRI",
      "MEI",
      "RO"
    ],
    "phonemePosition": "início",
    "missingPart": "PRI",
    "distractors": [
      "PI",
      "TRI",
      "CRI"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PRIMEIRO",
      "PIMEIRO"
    ],
    "fullSentence": "Nosso clube terminou o campeonato em primeiro lugar na tabela!",
    "sentenceMissing": "Nosso clube terminou o campeonato em _____ lugar na tabela!",
    "meaning": "A posição do campeão no topo da classificação.",
    "hint": {
      "soundCue": "PRRRIII... MEI... RO! Encontro PR nos lábios com vibração.",
      "articulatoryCue": "Lábios no P e ponta da língua vibrando: PRRR-I.",
      "varEliminate": [
        "TRI",
        "CRI"
      ],
      "distractorExplanations": {
        "PI": "PIMEIRO não tem vibração! O topo da tabela é PRIMEIRO com PR!",
        "TRI": "TRIMEIRO não existe! O campeão fica em PRIMEIRO lugar!",
        "CRI": "CRIMEIRO não existe! O topo da classificação é o PRIMEIRO!"
      }
    }
  },
  {
    "id": "r_14",
    "phoneme": "R_VIBRANTE",
    "word": "GRITO",
    "syllables": [
      "GRI",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "GRI",
    "distractors": [
      "GI",
      "DRI",
      "PRI"
    ],
    "initialSound": "G",
    "minimalPair": [
      "GRITO",
      "GITO"
    ],
    "fullSentence": "Um grito de gol ecoou por todo o estádio no minuto final!",
    "sentenceMissing": "Um _____ de gol ecoou por todo o estádio no minuto final!",
    "meaning": "Voz potente da torcida comemorando o gol.",
    "hint": {
      "soundCue": "GRRRIII... TO! O G na garganta com a língua vibrando no R.",
      "articulatoryCue": "Garganta e língua vibrando juntas: GRRR-I.",
      "varEliminate": [
        "DRI",
        "PRI"
      ],
      "distractorExplanations": {
        "GI": "GITO não existe! A voz potente que solta o gol é um GRITO com R!",
        "DRI": "DRITO não existe! O clamor da torcida é o GRITO!",
        "PRI": "PRITO não existe! Soltar a voz de gol é um GRITO!"
      }
    }
  },
  {
    "id": "r_15",
    "phoneme": "R_VIBRANTE",
    "word": "FRENÉTICO",
    "syllables": [
      "FRE",
      "NÉ",
      "TI",
      "CO"
    ],
    "phonemePosition": "início",
    "missingPart": "FRE",
    "distractors": [
      "FE",
      "TRE",
      "PRE"
    ],
    "initialSound": "F",
    "minimalPair": [
      "FRENÉTICO",
      "FENÉTICO"
    ],
    "fullSentence": "O clássico teve um ritmo frenético com ataques dos dois lados!",
    "sentenceMissing": "O clássico teve um ritmo _____ com ataques dos dois lados!",
    "meaning": "Jogo super rápido, intenso e eletrizante.",
    "hint": {
      "soundCue": "FRRRÉÉÉ... NÉ... TI... CO! Sopro nos dentes com R vibrando.",
      "articulatoryCue": "Dentes superiores no lábio inferior e vibre a língua: FRE.",
      "varEliminate": [
        "TRE",
        "PRE"
      ],
      "distractorExplanations": {
        "FE": "FENÉTICO esqueceu o R! Jogo elétrico tem ritmo FRENÉTICO!",
        "TRE": "TRENÉTICO não existe! O jogo acelerado é FRENÉTICO com F!",
        "PRE": "PRENÉTICO não existe! Ritmo empolgante é FRENÉTICO!"
      }
    }
  },
  {
    "id": "r_16",
    "phoneme": "R_VIBRANTE",
    "word": "BRILHO",
    "syllables": [
      "BRI",
      "LHO"
    ],
    "phonemePosition": "início",
    "missingPart": "BRI",
    "distractors": [
      "BI",
      "TRI",
      "GRI"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BRILHO",
      "BILHO"
    ],
    "fullSentence": "A atuação do craque teve um brilho especial na grande final!",
    "sentenceMissing": "A atuação do craque teve um _____ especial na grande final!",
    "meaning": "Destaque e genialidade do jogador em campo.",
    "hint": {
      "soundCue": "BRRRIII... LHO! Lábios no B com R vibrando forte.",
      "articulatoryCue": "Estouro nos lábios com língua vibrante: BRRR-I.",
      "varEliminate": [
        "TRI",
        "GRI"
      ],
      "distractorExplanations": {
        "BI": "BILHO não existe! Jogar bem é ter BRILHO com R vibrante!",
        "TRI": "TRILHO é de trem! O talento do craque tem BRILHO com B!",
        "GRI": "GRILHO não é talento! A magia do craque tem BRILHO!"
      }
    }
  },
  {
    "id": "r_17",
    "phoneme": "R_VIBRANTE",
    "word": "BRAVO",
    "syllables": [
      "BRA",
      "VO"
    ],
    "phonemePosition": "início",
    "missingPart": "BRA",
    "distractors": [
      "BA",
      "PRA",
      "TRA"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BRAVO",
      "BAVO"
    ],
    "fullSentence": "O zagueiro é um guerreiro bravo que não desiste de nenhuma bola!",
    "sentenceMissing": "O zagueiro é um guerreiro _____ que não desiste de nenhuma bola!",
    "meaning": "Corajoso, valente e cheio de garra.",
    "hint": {
      "soundCue": "BRRRÁÁÁ... VO! Encontro BR bem pronunciado.",
      "articulatoryCue": "Lábios no B e vibre a ponta da língua: BRA.",
      "varEliminate": [
        "PRA",
        "TRA"
      ],
      "distractorExplanations": {
        "BA": "BAVO não existe! O defensor valente é BRAVO com R vibrante!",
        "PRA": "PRAVO não existe! Jogador corajoso é BRAVO com B!",
        "TRA": "TRAVO é gosto amargo! O atleta corajoso é BRAVO!"
      }
    }
  },
  {
    "id": "r_18",
    "phoneme": "R_VIBRANTE",
    "word": "RAÇA",
    "syllables": [
      "RA",
      "ÇA"
    ],
    "phonemePosition": "início",
    "missingPart": "RA",
    "distractors": [
      "SA",
      "TA",
      "LA"
    ],
    "initialSound": "R",
    "minimalPair": [
      "RAÇA",
      "TAÇA"
    ],
    "fullSentence": "O time jogou com raça até o último segundo e virou o placar!",
    "sentenceMissing": "O time jogou com _____ até o último segundo e virou o placar!",
    "meaning": "Vontade inabalável de vencer e correr por todos.",
    "hint": {
      "soundCue": "RRRÁÁÁ... ÇA! R forte que arranha a garganta no início.",
      "articulatoryCue": "Solte o ar com força pela garganta: RRRÁ.",
      "varEliminate": [
        "TA",
        "LA"
      ],
      "distractorExplanations": {
        "SA": "SAÇA não existe! O sangue e a entrega em campo é RAÇA com R!",
        "TA": "TAÇA é o troféu! A garra para conquistar a taça é a RAÇA com R!",
        "LA": "LAÇA é de laço! Vontade de vencer é RAÇA!"
      }
    }
  },
  {
    "id": "r_19",
    "phoneme": "R_VIBRANTE",
    "word": "RITMO",
    "syllables": [
      "RIT",
      "MO"
    ],
    "phonemePosition": "início",
    "missingPart": "RIT",
    "distractors": [
      "SIT",
      "TIT",
      "LIT"
    ],
    "initialSound": "R",
    "minimalPair": [
      "RITMO",
      "SITMO"
    ],
    "fullSentence": "O meio-campista controla o ritmo da partida ditando os passes!",
    "sentenceMissing": "O meio-campista controla o _____ da partida ditando os passes!",
    "meaning": "A cadência e velocidade com que o jogo se desenrola.",
    "hint": {
      "soundCue": "RRRIIIT... MO! R forte na garganta.",
      "articulatoryCue": "Ar forte arranhando a garganta: RRRIT.",
      "varEliminate": [
        "TIT",
        "LIT"
      ],
      "distractorExplanations": {
        "SIT": "SITMO não existe! O compasso do jogo é o RITMO com R!",
        "TIT": "TITMO não existe! A cadência dos passes é o RITMO!",
        "LIT": "LITMO não existe! Quem dita a cadência dita o RITMO!"
      }
    }
  },
  {
    "id": "r_20",
    "phoneme": "R_VIBRANTE",
    "word": "RÁPIDO",
    "syllables": [
      "RÁ",
      "PI",
      "DO"
    ],
    "phonemePosition": "início",
    "missingPart": "RÁ",
    "distractors": [
      "SÁ",
      "TÁ",
      "LÁ"
    ],
    "initialSound": "R",
    "minimalPair": [
      "RÁPIDO",
      "SÁPIDO"
    ],
    "fullSentence": "O contra-ataque foi tão rápido que pegou a zaga desprevenida!",
    "sentenceMissing": "O contra-ataque foi tão _____ que pegou a zaga desprevenida!",
    "meaning": "Muito veloz e dinâmico.",
    "hint": {
      "soundCue": "RRRÁÁÁ... PI... DO! Som forte no início da palavra.",
      "articulatoryCue": "Comece soltando ar quente na garganta: RRRÁ.",
      "varEliminate": [
        "TÁ",
        "LÁ"
      ],
      "distractorExplanations": {
        "SÁ": "SÁPIDO é com sabor! Contra-ataque veloz é RÁPIDO com R!",
        "TÁ": "TÁPIDO não existe! O contra-golpe veloz é RÁPIDO!",
        "LÁ": "LÁPIDO não existe! Quem chega primeiro é RÁPIDO!"
      }
    }
  },
  {
    "id": "r_21",
    "phoneme": "R_VIBRANTE",
    "word": "CARRO",
    "syllables": [
      "CAR",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "TO",
      "SO",
      "LO"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CARRO",
      "CARO"
    ],
    "fullSentence": "Os torcedores acompanharam a carreata do título em seu carro!",
    "sentenceMissing": "Os torcedores acompanharam a carreata do título em seu _____!",
    "meaning": "Veículo usado para ir à festa dos campeões.",
    "hint": {
      "soundCue": "CAR... RRROOO! RR duplo com som forte e gutural.",
      "articulatoryCue": "Arranhe com força a garganta: CAR-RO.",
      "varEliminate": [
        "TO",
        "LO"
      ],
      "distractorExplanations": {
        "TO": "CARTO não existe! Veículo com rodas é CARRO com RR!",
        "SO": "CARSO não existe! A carreata é de CARRO!",
        "LO": "CARLO é nome de homem! O automóvel é CARRO!"
      }
    }
  },
  {
    "id": "r_22",
    "phoneme": "R_VIBRANTE",
    "word": "CARO",
    "syllables": [
      "CA",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "TO",
      "DO",
      "LO"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CARO",
      "CARRO"
    ],
    "fullSentence": "Aquele ingresso para a final da Copa do Mundo foi muito caro!",
    "sentenceMissing": "Aquele ingresso para a final da Copa do Mundo foi muito _____!",
    "meaning": "De alto valor financeiro ou estimado.",
    "hint": {
      "soundCue": "CA... RROOO! Um R só: som brando que dá um toque leve na língua.",
      "articulatoryCue": "Dê um toque levinho na língua: RO (não arranhe como carro!).",
      "varEliminate": [
        "DO",
        "LO"
      ],
      "distractorExplanations": {
        "TO": "CATO é catar! Ingresso de valor alto é CARO com 1 R!",
        "DO": "CADO não existe! De valor alto é CARO!",
        "LO": "CALO é na sola do pé! Ingresso de valor alto é CARO!"
      }
    }
  },
  {
    "id": "r_23",
    "phoneme": "R_VIBRANTE",
    "word": "ÁRBITRO",
    "syllables": [
      "ÁR",
      "BI",
      "TRO"
    ],
    "phonemePosition": "fim",
    "missingPart": "TRO",
    "distractors": [
      "TO",
      "PRO",
      "CRO"
    ],
    "initialSound": "A",
    "minimalPair": [
      "ÁRBITRO",
      "ÁRBITO"
    ],
    "fullSentence": "O árbitro apitou o fim do jogo confirmando a nossa vitória!",
    "sentenceMissing": "O _____ apitou o fim do jogo confirmando a nossa vitória!",
    "meaning": "O juiz que comanda as regras do futebol em campo.",
    "hint": {
      "soundCue": "ÁR... BI... TRRROOO! Termina com o encontro TR vibrante.",
      "articulatoryCue": "Toque na língua no T e vibre com R: TRO.",
      "varEliminate": [
        "PRO",
        "CRO"
      ],
      "distractorExplanations": {
        "TO": "ÁRBITO esqueceu o R! O juiz da partida é o ÁRBITRO com TR!",
        "PRO": "ÁRBIPRO não existe! O homem do apito é o ÁRBITRO!",
        "CRO": "ÁRBICRO não existe! O juiz é o ÁRBITRO!"
      }
    }
  },
  {
    "id": "r_24",
    "phoneme": "R_VIBRANTE",
    "word": "TIRO",
    "syllables": [
      "TI",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "TO",
      "PO",
      "LO"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TIRO",
      "TITO"
    ],
    "fullSentence": "O tiro de meta foi cobrado pelo goleiro com força para o ataque!",
    "sentenceMissing": "O _____ de meta foi cobrado pelo goleiro com força para o ataque!",
    "meaning": "Chute forte ou cobrança de tiro de meta no jogo.",
    "hint": {
      "soundCue": "TI... RROOO! R brando suave no final.",
      "articulatoryCue": "Toque leve com a ponta da língua no céu da boca: RO.",
      "varEliminate": [
        "PO",
        "LO"
      ],
      "distractorExplanations": {
        "TO": "TITO é apelido de gente! Cobrança do goleiro é TIRO com R!",
        "PO": "TIPO é categoria! O chute de meta é o TIRO de meta!",
        "LO": "TILO não existe! A reposição é o TIRO de meta!"
      }
    }
  },
  {
    "id": "r_25",
    "phoneme": "R_VIBRANTE",
    "word": "VITÓRIA",
    "syllables": [
      "VI",
      "TÓ",
      "RIA"
    ],
    "phonemePosition": "fim",
    "missingPart": "RIA",
    "distractors": [
      "LIA",
      "TIA",
      "DIA"
    ],
    "initialSound": "V",
    "minimalPair": [
      "VITÓRIA",
      "VITÓLIA"
    ],
    "fullSentence": "A torcida celebrou a grande vitória cantando até o amanhecer!",
    "sentenceMissing": "A torcida celebrou a grande _____ cantando até o amanhecer!",
    "meaning": "Conquista do jogo e triunfo sobre o rival.",
    "hint": {
      "soundCue": "VI... TÓ... RRIIIA! R brando suave no final.",
      "articulatoryCue": "Ponta da língua dá um toque rápido no palato: RIA.",
      "varEliminate": [
        "TIA",
        "DIA"
      ],
      "distractorExplanations": {
        "LIA": "VITÓLIA troca R por L! O triunfo do campeão é a VITÓRIA!",
        "TIA": "VITÓTIA não existe! Vencer o jogo é ter VITÓRIA!",
        "DIA": "VITÓDIA não existe! O resultado triunfante é a VITÓRIA!"
      }
    }
  },
  {
    "id": "r_26",
    "phoneme": "R_VIBRANTE",
    "word": "PARCEIRO",
    "syllables": [
      "PAR",
      "CEI",
      "RO"
    ],
    "phonemePosition": "fim",
    "missingPart": "RO",
    "distractors": [
      "LO",
      "TO",
      "SO"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PARCEIRO",
      "PARCELO"
    ],
    "fullSentence": "O camisa 9 é o parceiro ideal de ataque do nosso camisa 10!",
    "sentenceMissing": "O camisa 9 é o _____ ideal de ataque do nosso camisa 10!",
    "meaning": "Companheiro de equipe e amigo de jogadas.",
    "hint": {
      "soundCue": "PAR... CEI... RROOO! Termina com R brando suave.",
      "articulatoryCue": "Ponta da língua no palato: RO.",
      "varEliminate": [
        "TO",
        "SO"
      ],
      "distractorExplanations": {
        "LO": "PARCEILO troca R por L! O amigo de jogada é o PARCEIRO com R!",
        "TO": "PARCEITO não existe! O companheiro de time é o PARCEIRO!",
        "SO": "PARCEISO não existe! A dupla é de PARCEIRO de ataque!"
      }
    }
  },
  {
    "id": "r_27",
    "phoneme": "R_VIBRANTE",
    "word": "GRUPO",
    "syllables": [
      "GRU",
      "PO"
    ],
    "phonemePosition": "início",
    "missingPart": "GRU",
    "distractors": [
      "GU",
      "TRU",
      "PRU"
    ],
    "initialSound": "G",
    "minimalPair": [
      "GRUPO",
      "GUPO"
    ],
    "fullSentence": "O nosso clube terminou a fase de grupo em primeiro lugar isolado!",
    "sentenceMissing": "O nosso clube terminou a fase de _____ em primeiro lugar isolado!",
    "meaning": "Chave com quatro equipes que disputam a classificação.",
    "hint": {
      "soundCue": "GRRRUUU... PO! Encontro consonantal GR.",
      "articulatoryCue": "Garganta e língua vibrando juntas: GRU.",
      "varEliminate": [
        "TRU",
        "PRU"
      ],
      "distractorExplanations": {
        "GU": "GUPO esqueceu a vibração do R! A chave da Copa é o GRUPO com GR!",
        "TRU": "TRUPO não existe! A divisão de times é o GRUPO!",
        "PRU": "PRUPO não existe! A chave da tabela é o GRUPO!"
      }
    }
  },
  {
    "id": "r_28",
    "phoneme": "R_VIBRANTE",
    "word": "FRENTE",
    "syllables": [
      "FREN",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "FREN",
    "distractors": [
      "FEN",
      "TREN",
      "PREN"
    ],
    "initialSound": "F",
    "minimalPair": [
      "FRENTE",
      "FENTE"
    ],
    "fullSentence": "Com o gol no final, nosso time passou à frente no placar!",
    "sentenceMissing": "Com o gol no final, nosso time passou à _____ no placar!",
    "meaning": "Posição de vantagem na pontuação.",
    "hint": {
      "soundCue": "FRRRREEEEN... TE! Sopro com R vibrando.",
      "articulatoryCue": "Dentes no lábio e língua vibrando: FREN.",
      "varEliminate": [
        "TREN",
        "PREN"
      ],
      "distractorExplanations": {
        "FEN": "FENTE esqueceu o R! Ficar em vantagem é passar à FRENTE com FR!",
        "TREN": "TRENTE não existe! Estar ganhando é estar na FRENTE!",
        "PREN": "PRENTE não existe! O líder vai na FRENTE!"
      }
    }
  },
  {
    "id": "s_1",
    "phoneme": "S",
    "word": "SELEÇÃO",
    "syllables": [
      "SE",
      "LE",
      "ÇÃO"
    ],
    "phonemePosition": "início",
    "missingPart": "SE",
    "distractors": [
      "CE",
      "TE",
      "RE"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SELEÇÃO",
      "TELEÇÃO"
    ],
    "fullSentence": "Todo atleta sonha em vestir a amarelinha da nossa seleção!",
    "sentenceMissing": "Todo atleta sonha em vestir a amarelinha da nossa _____!",
    "meaning": "O time com os melhores atletas do país inteiro.",
    "hint": {
      "soundCue": "SSSSSEEE... LE... ÇÃO! Som sibilante contínuo com S.",
      "articulatoryCue": "Dentes semicerrados soltando o ventinho fino: SSSSEEE.",
      "varEliminate": [
        "TE",
        "RE"
      ],
      "distractorExplanations": {
        "CE": "Apesar do som idêntico, SELEÇÃO começa com a letra S!",
        "TE": "TELEÇÃO não existe! A equipe da nossa pátria é a SELEÇÃO com S!",
        "RE": "RELEÇÃO não existe! O time do país é a SELEÇÃO!"
      }
    }
  },
  {
    "id": "s_2",
    "phoneme": "S",
    "word": "ESTÁDIO",
    "syllables": [
      "ES",
      "TÁ",
      "DIO"
    ],
    "phonemePosition": "início",
    "missingPart": "ES",
    "distractors": [
      "EX",
      "ET",
      "ER"
    ],
    "initialSound": "E",
    "minimalPair": [
      "ESTÁDIO",
      "EXTÁDIO"
    ],
    "fullSentence": "O estádio ficou completamente lotado para a grande decisão!",
    "sentenceMissing": "O _____ ficou completamente lotado para a grande decisão!",
    "meaning": "Arena esportiva onde ocorrem as partidas de futebol.",
    "hint": {
      "soundCue": "EEESSS... TÁ... DIO! Som sibilante do S fechando a primeira sílaba.",
      "articulatoryCue": "Solte a vogal E e feche com o ventinho do S: EESSS.",
      "varEliminate": [
        "ET",
        "ER"
      ],
      "distractorExplanations": {
        "EX": "Estádio de futebol se escreve com ES, não com EX!",
        "ET": "ETTÁDIO não existe! A arena do futebol é o ESTÁDIO com S!",
        "ER": "ERTÁDIO não existe! O palco do clássico é o ESTÁDIO!"
      }
    }
  },
  {
    "id": "s_3",
    "phoneme": "S",
    "word": "ESCANTEIO",
    "syllables": [
      "ES",
      "CAN",
      "TEI",
      "O"
    ],
    "phonemePosition": "início",
    "missingPart": "ES",
    "distractors": [
      "EX",
      "EN",
      "EM"
    ],
    "initialSound": "E",
    "minimalPair": [
      "ESCANTEIO",
      "ENCANTEIO"
    ],
    "fullSentence": "O meia cobrou o escanteio com curva fechada no primeiro pau!",
    "sentenceMissing": "O meia cobrou o _____ com curva fechada no primeiro pau!",
    "meaning": "Tiro de canto quando a bola sai pela linha de fundo.",
    "hint": {
      "soundCue": "EEESSS... CAN... TEI... O! O ventinho do S acompanha o E.",
      "articulatoryCue": "Dentes juntos soprando: EEESSS.",
      "varEliminate": [
        "EN",
        "EM"
      ],
      "distractorExplanations": {
        "EX": "Escanteio é tiro de canto grafado com ES!",
        "EN": "ENCANTEIO não existe! A cobrança da quina do campo é ESCANTEIO!",
        "EM": "EMCANTEIO não existe! O tiro de canto é o ESCANTEIO!"
      }
    }
  },
  {
    "id": "s_4",
    "phoneme": "S",
    "word": "CLÁSSICO",
    "syllables": [
      "CLÁS",
      "SI",
      "CO"
    ],
    "phonemePosition": "meio",
    "missingPart": "SI",
    "distractors": [
      "CI",
      "TI",
      "PI"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CLÁSSICO",
      "CLÁSTICO"
    ],
    "fullSentence": "O clássico entre os dois maiores rivais terminou empatado com muita emoção!",
    "sentenceMissing": "O _____ entre os dois maiores rivais terminou empatado com muita emoção!",
    "meaning": "Jogo entre duas equipes de rivalidade histórica.",
    "hint": {
      "soundCue": "CLÁÁÁSSS... SSSIII... CO! Dígrafo SS entre vogais para manter o som sibilante.",
      "articulatoryCue": "Ventinho contínuo entre os dentes: SSS-I.",
      "varEliminate": [
        "TI",
        "PI"
      ],
      "distractorExplanations": {
        "CI": "Entre vogais, o jogo histórico CLÁSSICO precisa de SS!",
        "TI": "CLÁSTICO não existe! O grande duelo entre rivais é um CLÁSSICO!",
        "PI": "CLÁSPICO não existe! A grande partida é o CLÁSSICO!"
      }
    }
  },
  {
    "id": "s_5",
    "phoneme": "S",
    "word": "CRAQUES",
    "syllables": [
      "CRA",
      "QUES"
    ],
    "phonemePosition": "fim",
    "missingPart": "QUES",
    "distractors": [
      "QUE",
      "QUER",
      "QUEN"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CRAQUES",
      "CRAQUE"
    ],
    "fullSentence": "Os craques do nosso time deram um show de passes e habilidade!",
    "sentenceMissing": "Os _____ do nosso time deram um show de passes e habilidade!",
    "meaning": "Plural indicando vários jogadores brilhantes juntos.",
    "hint": {
      "soundCue": "CRA... QUEEEESSS! O S no fim marca que são vários jogadores.",
      "articulatoryCue": "Feche a palavra soltando o ventinho do plural: QUESSS.",
      "varEliminate": [
        "QUER",
        "QUEN"
      ],
      "distractorExplanations": {
        "QUE": "QUE é no singular (um craque só)! A frase fala de vários CRAQUES com S!",
        "QUER": "CRAQUER é de biscoito! Os jogadores geniais são os CRAQUES!",
        "QUEN": "CRAQUEN é monstro marinho! Nossos jogadores são CRAQUES!"
      }
    }
  },
  {
    "id": "s_6",
    "phoneme": "S",
    "word": "SUBSTITUIÇÃO",
    "syllables": [
      "SUBS",
      "TI",
      "TUI",
      "ÇÃO"
    ],
    "phonemePosition": "início",
    "missingPart": "SUBS",
    "distractors": [
      "SUBS",
      "TUBS",
      "PUBS"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SUBSTITUIÇÃO",
      "TUBSTITUIÇÃO"
    ],
    "fullSentence": "O técnico preparou uma substituição para colocar sangue novo em campo!",
    "sentenceMissing": "O técnico preparou uma _____ para colocar sangue novo em campo!",
    "meaning": "Troca de um jogador cansado por um reserva novinho.",
    "hint": {
      "soundCue": "SSSSUUUBSS... TI... TUI... ÇÃO! Sibilante dupla com S e B.",
      "articulatoryCue": "Comece com o ventinho S e feche os lábios no B: SUBS.",
      "varEliminate": [
        "TUBS",
        "PUBS"
      ],
      "distractorExplanations": {
        "TUBS": "TUBSTITUIÇÃO não existe! A troca de jogadores é SUBSTITUIÇÃO com S!",
        "PUBS": "PUBSTITUIÇÃO não existe! O técnico faz uma SUBSTITUIÇÃO!",
        "CUBS": "CUBSTITUIÇÃO não existe! A troca em campo é a SUBSTITUIÇÃO!"
      }
    }
  },
  {
    "id": "s_7",
    "phoneme": "S",
    "word": "SILÊNCIO",
    "syllables": [
      "SI",
      "LÊN",
      "CIO"
    ],
    "phonemePosition": "início",
    "missingPart": "SI",
    "distractors": [
      "CI",
      "TI",
      "PI"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SILÊNCIO",
      "CILÊNCIO"
    ],
    "fullSentence": "Fez-se silêncio total no estádio durante a cobrança decisiva de pênalti!",
    "sentenceMissing": "Fez-se _____ total no estádio durante a cobrança decisiva de pênalti!",
    "meaning": "Momento de quietação e concentração antes do chute.",
    "hint": {
      "soundCue": "SSSSIII... LÊN... CIO! O som de chiadinho do S pede silêncio.",
      "articulatoryCue": "Dentes cerrados soltando ar fino: SSSIII.",
      "varEliminate": [
        "TI",
        "PI"
      ],
      "distractorExplanations": {
        "CI": "Apesar do som igual, a palavra SILÊNCIO começa com a letra S!",
        "TI": "TILÊNCIO não existe! O estádio ficou em SILÊNCIO com S!",
        "PI": "PILÊNCIO não existe! A calma do momento é o SILÊNCIO!"
      }
    }
  },
  {
    "id": "s_8",
    "phoneme": "S",
    "word": "DISPUTA",
    "syllables": [
      "DIS",
      "PU",
      "TA"
    ],
    "phonemePosition": "início",
    "missingPart": "DIS",
    "distractors": [
      "DIZ",
      "DIT",
      "DIP"
    ],
    "initialSound": "D",
    "minimalPair": [
      "DISPUTA",
      "DIPUTA"
    ],
    "fullSentence": "A disputa de bola no meio-campo foi leal e emocionante!",
    "sentenceMissing": "A _____ de bola no meio-campo foi leal e emocionante!",
    "meaning": "Duelo entre dois atletas para ver quem fica com a bola.",
    "hint": {
      "soundCue": "DIIISSS... PU... TA! O S faz a transição entre D e P.",
      "articulatoryCue": "Solte o ar no final da primeira sílaba: DIIISSS.",
      "varEliminate": [
        "DIT",
        "DIP"
      ],
      "distractorExplanations": {
        "DIZ": "Diz é do verbo dizer! O duelo de bola é uma DISPUTA com S!",
        "DIT": "DITPUTA não existe! A briga pela bola é a DISPUTA com S!",
        "DIP": "DIPUTA não existe! A batalha pela posse é a DISPUTA!"
      }
    }
  },
  {
    "id": "s_9",
    "phoneme": "S",
    "word": "POSSE",
    "syllables": [
      "POS",
      "SE"
    ],
    "phonemePosition": "fim",
    "missingPart": "SE",
    "distractors": [
      "CE",
      "TE",
      "PE"
    ],
    "initialSound": "P",
    "minimalPair": [
      "POSSE",
      "POTE"
    ],
    "fullSentence": "Nosso time manteve a posse de bola e dominou o adversário!",
    "sentenceMissing": "Nosso time manteve a _____ de bola e dominou o adversário!",
    "meaning": "Ter o controle da bola durante a partida.",
    "hint": {
      "soundCue": "POOOSSS... SSSÊÊÊ! Dígrafo SS com som sibilante forte.",
      "articulatoryCue": "Solte o ventinho contínuo com dentes juntos: SE.",
      "varEliminate": [
        "TE",
        "PE"
      ],
      "distractorExplanations": {
        "CE": "POSCE não existe! Manter a bola consigo é ter a POSSE com SS!",
        "TE": "POTE é recipiente de cozinha! Controle da bola é POSSE com SS!",
        "PE": "POSPE não existe! Ficar com a bola é ter a POSSE!"
      }
    }
  },
  {
    "id": "s_10",
    "phoneme": "S",
    "word": "ARREMESSO",
    "syllables": [
      "AR",
      "RE",
      "MES",
      "SO"
    ],
    "phonemePosition": "fim",
    "missingPart": "SO",
    "distractors": [
      "ÇO",
      "TO",
      "PO"
    ],
    "initialSound": "A",
    "minimalPair": [
      "ARREMESSO",
      "ARREMETO"
    ],
    "fullSentence": "O lateral cobrou o arremesso com as duas mãos em direção ao ponta!",
    "sentenceMissing": "O lateral cobrou o _____ com as duas mãos em direção ao ponta!",
    "meaning": "Lançamento da bola com as mãos no lateral.",
    "hint": {
      "soundCue": "AR... RE... MESSS... SSSOOO! Termina com dígrafo SS.",
      "articulatoryCue": "Sopre o ar fino entre os dentes no final: SO.",
      "varEliminate": [
        "TO",
        "PO"
      ],
      "distractorExplanations": {
        "ÇO": "Arremesso com as mãos é escrito com dígrafo SS, não com Ç!",
        "TO": "ARREMETO não é lançamento lateral! A cobrança é o ARREMESSO!",
        "PO": "ARREMEPO não existe! O lançamento com a mão é o ARREMESSO!"
      }
    }
  },
  {
    "id": "s_11",
    "phoneme": "S",
    "word": "PRESSÃO",
    "syllables": [
      "PRES",
      "SÃO"
    ],
    "phonemePosition": "fim",
    "missingPart": "SÃO",
    "distractors": [
      "ÇÃO",
      "TÃO",
      "PÃO"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PRESSÃO",
      "PRETÃO"
    ],
    "fullSentence": "O time adiantou as linhas e fez uma forte pressão na saída de bola adversária!",
    "sentenceMissing": "O time adiantou as linhas e fez uma forte _____ na saída de bola adversária!",
    "meaning": "Marcação sufocante e agressiva para roubar a bola.",
    "hint": {
      "soundCue": "PREEESSS... SSSÃÃÃO! Sílaba final com dígrafo SS e til.",
      "articulatoryCue": "Ventinho com os dentes quase fechados: SSÃO.",
      "varEliminate": [
        "TÃO",
        "PÃO"
      ],
      "distractorExplanations": {
        "ÇÃO": "Precação é precaução! Marcação adiantada é PRESSÃO com SS!",
        "TÃO": "PRETÃO é preto grande! Marcação sufocante é PRESSÃO!",
        "PÃO": "PREPÃO não existe! O sufoco no rival é a PRESSÃO!"
      }
    }
  },
  {
    "id": "s_12",
    "phoneme": "S",
    "word": "SEGUNDO",
    "syllables": [
      "SE",
      "GUN",
      "DO"
    ],
    "phonemePosition": "início",
    "missingPart": "SE",
    "distractors": [
      "CE",
      "TE",
      "RE"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SEGUNDO",
      "TEGUNDO"
    ],
    "fullSentence": "No último segundo da partida, saiu o gol da vitória!",
    "sentenceMissing": "No último _____ da partida, saiu o gol da vitória!",
    "meaning": "Unidade de tempo no relógio do jogo.",
    "hint": {
      "soundCue": "SSSSÊÊÊ... GUN... DO! Começo com o som chiado fino do S.",
      "articulatoryCue": "Dentes semicerrados no S inicial: SSSÊÊÊ.",
      "varEliminate": [
        "TE",
        "RE"
      ],
      "distractorExplanations": {
        "CE": "Apesar do som, a unidade de tempo SEGUNDO começa com a letra S!",
        "TE": "TEGUNDO não existe! A fração do minuto é o SEGUNDO com S!",
        "RE": "REGUNDO não existe! No tique-taque do relógio é o SEGUNDO!"
      }
    }
  },
  {
    "id": "s_13",
    "phoneme": "S",
    "word": "SALTO",
    "syllables": [
      "SAL",
      "TO"
    ],
    "phonemePosition": "início",
    "missingPart": "SAL",
    "distractors": [
      "CAL",
      "TAL",
      "PAL"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SALTO",
      "PALTO"
    ],
    "fullSentence": "O zagueiro deu um salto impressionante e cabeceou para as redes!",
    "sentenceMissing": "O zagueiro deu um _____ impressionante e cabeceou para as redes!",
    "meaning": "Pulo alto para ganhar a disputa pelo alto.",
    "hint": {
      "soundCue": "SSSSAAAL... TO! Sibilante contínuo com S no início.",
      "articulatoryCue": "Ventinho sibilante na abertura: SSSAL.",
      "varEliminate": [
        "TAL",
        "PAL"
      ],
      "distractorExplanations": {
        "CAL": "CALTO não existe! O pulo alto é um SALTO com S!",
        "TAL": "TALTO não existe! Pular alto para cabecear é dar um SALTO!",
        "PAL": "PALTO não existe! A impulsão do zagueiro é um SALTO!"
      }
    }
  },
  {
    "id": "s_14",
    "phoneme": "S",
    "word": "SINAL",
    "syllables": [
      "SI",
      "NAL"
    ],
    "phonemePosition": "início",
    "missingPart": "SI",
    "distractors": [
      "CI",
      "TI",
      "PI"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SINAL",
      "PINAL"
    ],
    "fullSentence": "O árbitro deu o sinal para a cobrança do pênalti!",
    "sentenceMissing": "O árbitro deu o _____ para a cobrança do pênalti!",
    "meaning": "Gesto ou apito que autoriza a jogada.",
    "hint": {
      "soundCue": "SSSSIII... NAL! O início suave com a consoante S.",
      "articulatoryCue": "Dentes juntos soprando suave: SSSIII.",
      "varEliminate": [
        "TI",
        "PI"
      ],
      "distractorExplanations": {
        "CI": "SINAL de autorização se escreve com S, não com C!",
        "TI": "TINAL não existe! A autorização do juiz é o SINAL com S!",
        "PI": "PINAL não é autorização! O juiz autoriza dando o SINAL!"
      }
    }
  },
  {
    "id": "s_15",
    "phoneme": "S",
    "word": "SUOR",
    "syllables": [
      "SU",
      "OR"
    ],
    "phonemePosition": "início",
    "missingPart": "SU",
    "distractors": [
      "CU",
      "TU",
      "PU"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SUOR",
      "TUOR"
    ],
    "fullSentence": "A camisa verde estava molhada de suor pela entrega total do atleta!",
    "sentenceMissing": "A camisa verde estava molhada de _____ pela entrega total do atleta!",
    "meaning": "Transpiração que mostra o esforço e dedicação no jogo.",
    "hint": {
      "soundCue": "SSSSUUU... OR! O S conduz o sopro inicial.",
      "articulatoryCue": "Arredonde os lábios mantendo o ventinho: SSSUUU.",
      "varEliminate": [
        "TU",
        "PU"
      ],
      "distractorExplanations": {
        "CU": "CUOR não existe! O esforço da transpiração é SUOR com S!",
        "TU": "TUOR não existe! O atleta molhou a camisa com SUOR!",
        "PU": "PUOR não existe! A dedicação é demonstrada com SUOR!"
      }
    }
  },
  {
    "id": "s_16",
    "phoneme": "S",
    "word": "SUBIR",
    "syllables": [
      "SU",
      "BIR"
    ],
    "phonemePosition": "início",
    "missingPart": "SU",
    "distractors": [
      "CU",
      "TU",
      "RU"
    ],
    "initialSound": "S",
    "minimalPair": [
      "SUBIR",
      "TUBIR"
    ],
    "fullSentence": "O time conquistou os pontos necessários para subir de divisão!",
    "sentenceMissing": "O time conquistou os pontos necessários para _____ de divisão!",
    "meaning": "Ser promovido para a primeira divisão do campeonato.",
    "hint": {
      "soundCue": "SSSSUUU... BIR! S no começo com som sibilante.",
      "articulatoryCue": "Ventinho fino saindo pelos dentes: SSSUUU.",
      "varEliminate": [
        "TU",
        "RU"
      ],
      "distractorExplanations": {
        "CU": "CUBIR não existe! Conquistar o acesso é SUBIR de divisão com S!",
        "TU": "TUBIR não existe! Ser promovido de série é SUBIR!",
        "RU": "RUBIR não é promoção! O campeão vai SUBIR para a elite!"
      }
    }
  },
  {
    "id": "s_17",
    "phoneme": "S",
    "word": "ZAGUEIROS",
    "syllables": [
      "ZA",
      "GUEI",
      "ROS"
    ],
    "phonemePosition": "fim",
    "missingPart": "ROS",
    "distractors": [
      "RO",
      "ROL",
      "RON"
    ],
    "initialSound": "Z",
    "minimalPair": [
      "ZAGUEIROS",
      "ZAGUEIRO"
    ],
    "fullSentence": "Os dois zagueiros formaram uma verdadeira muralha defensiva!",
    "sentenceMissing": "Os dois _____ formaram uma verdadeira muralha defensiva!",
    "meaning": "Plural dos defensores do miolo de zaga.",
    "hint": {
      "soundCue": "ZA... GUEI... RRROOOSSS! S no final marcando o plural dos dois atletas.",
      "articulatoryCue": "Termine soltando o ventinho sibilante do plural: ROSSS.",
      "varEliminate": [
        "ROL",
        "RON"
      ],
      "distractorExplanations": {
        "RO": "ZAGUEIRO é no singular (um só)! A frase fala de dois ZAGUEIROS com S!",
        "ROL": "ZAGUEIROL não existe! No plural colocamos S: ZAGUEIROS!",
        "RON": "ZAGUEIRON não existe! Os dois parceiros de zaga são ZAGUEIROS!"
      }
    }
  },
  {
    "id": "s_18",
    "phoneme": "S",
    "word": "TORCEDORES",
    "syllables": [
      "TOR",
      "CE",
      "DO",
      "RES"
    ],
    "phonemePosition": "fim",
    "missingPart": "RES",
    "distractors": [
      "RE",
      "REL",
      "REN"
    ],
    "initialSound": "T",
    "minimalPair": [
      "TORCEDORES",
      "TORCEDORE"
    ],
    "fullSentence": "Milhares de torcedores lotaram as arquibancadas para apoiar o time!",
    "sentenceMissing": "Milhares de _____ lotaram as arquibancadas para apoiar o time!",
    "meaning": "Plural das pessoas que amam o clube e vão ao estádio.",
    "hint": {
      "soundCue": "TOR... CE... DO... RRREEESSS! O S sibilante no fim marca a multidão.",
      "articulatoryCue": "Feche com o som de plural: RESSS.",
      "varEliminate": [
        "REL",
        "REN"
      ],
      "distractorExplanations": {
        "RE": "TORCEDORE sem S não existe! A multidão toda são os TORCEDORES com S!",
        "REL": "TORCEDOREL não existe! A galera no estádio são os TORCEDORES!",
        "REN": "TORCEDOREN não existe! Quem apoia nas arquibancadas são os TORCEDORES!"
      }
    }
  },
  {
    "id": "s_19",
    "phoneme": "S",
    "word": "MESTRE",
    "syllables": [
      "MES",
      "TRE"
    ],
    "phonemePosition": "início",
    "missingPart": "MES",
    "distractors": [
      "MET",
      "MEP",
      "MED"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MESTRE",
      "METRE"
    ],
    "fullSentence": "Zico é um mestre nas cobranças de falta perfeitas no ângulo!",
    "sentenceMissing": "Zico é um _____ nas cobranças de falta perfeitas no ângulo!",
    "meaning": "Especialista supremo e com habilidade inalcançável.",
    "hint": {
      "soundCue": "MEEESSS... TRE! O S chia no meio da palavra antes do T.",
      "articulatoryCue": "Solte o ar fino no S antes da batida do T: MES.",
      "varEliminate": [
        "MEP",
        "MED"
      ],
      "distractorExplanations": {
        "MET": "METTRE é em francês! Em português é MESTRE com S!",
        "MEP": "MEPTRE não existe! O especialista na bola parada é um MESTRE!",
        "MED": "MEDTRE não existe! O jogador sábio e genial é um MESTRE!"
      }
    }
  },
  {
    "id": "s_20",
    "phoneme": "S",
    "word": "POSTE",
    "syllables": [
      "POS",
      "TE"
    ],
    "phonemePosition": "início",
    "missingPart": "POS",
    "distractors": [
      "POT",
      "POR",
      "POL"
    ],
    "initialSound": "P",
    "minimalPair": [
      "POSTE",
      "PORTE"
    ],
    "fullSentence": "O chute foi tão forte que fez o poste de iluminação tremer!",
    "sentenceMissing": "O chute foi tão forte que fez o _____ de iluminação tremer!",
    "meaning": "Coluna alta de metal que sustenta os refletores do campo.",
    "hint": {
      "soundCue": "POOOSSS... TE! O S sibilante fica entre P e T.",
      "articulatoryCue": "Feche os lábios no P e solte o ar no S: POS.",
      "varEliminate": [
        "POR",
        "POL"
      ],
      "distractorExplanations": {
        "POT": "POTTE não existe na nossa língua! A torre de luz é o POSTE com S!",
        "POR": "PORTE é tamanho ou autorização! A barra de metal é o POSTE!",
        "POL": "POLTE não existe! A torre dos refletores é o POSTE!"
      }
    }
  },
  {
    "id": "s_21",
    "phoneme": "S",
    "word": "FESTA",
    "syllables": [
      "FES",
      "TA"
    ],
    "phonemePosition": "início",
    "missingPart": "FES",
    "distractors": [
      "FET",
      "FER",
      "FEL"
    ],
    "initialSound": "F",
    "minimalPair": [
      "FESTA",
      "FERTA"
    ],
    "fullSentence": "A festa pelo título da Copa durou a noite toda pela cidade!",
    "sentenceMissing": "A _____ pelo título da Copa durou a noite toda pela cidade!",
    "meaning": "Comemoração alegre dos torcedores e atletas campeões.",
    "hint": {
      "soundCue": "FEEESSS... TA! O som sibilante S no meio.",
      "articulatoryCue": "Dentes superiores no lábio e ar fino saindo: FES.",
      "varEliminate": [
        "FER",
        "FEL"
      ],
      "distractorExplanations": {
        "FET": "FETTA é pedaço em italiano! Em português a comemoração é a FESTA com S!",
        "FER": "FERTA não existe! A grande comemoração do título é a FESTA!",
        "FEL": "FELTA não existe! A celebração do campeão é a FESTA!"
      }
    }
  },
  {
    "id": "s_22",
    "phoneme": "S",
    "word": "PISTA",
    "syllables": [
      "PIS",
      "TA"
    ],
    "phonemePosition": "início",
    "missingPart": "PIS",
    "distractors": [
      "PIT",
      "PIR",
      "PIL"
    ],
    "initialSound": "P",
    "minimalPair": [
      "PISTA",
      "PINTA"
    ],
    "fullSentence": "Ao redor do gramado do estádio havia uma moderna pista de atletismo!",
    "sentenceMissing": "Ao redor do gramado do estádio havia uma moderna _____ de atletismo!",
    "meaning": "Faixa de corrida em volta do campo de futebol.",
    "hint": {
      "soundCue": "PIIISSS... TA! S sibilante no final da sílaba.",
      "articulatoryCue": "Lábios no P e ar fino no S: PIS.",
      "varEliminate": [
        "PIR",
        "PIL"
      ],
      "distractorExplanations": {
        "PIT": "PITTA é pão! A área de corrida ao redor do campo é a PISTA com S!",
        "PIR": "PIRTA não existe! O piso de corrida é a PISTA de atletismo!",
        "PIL": "PILTA não existe! Em volta do gramado fica a PISTA!"
      }
    }
  },
  {
    "id": "s_23",
    "phoneme": "S",
    "word": "ASTRO",
    "syllables": [
      "AS",
      "TRO"
    ],
    "phonemePosition": "início",
    "missingPart": "AS",
    "distractors": [
      "AT",
      "AR",
      "AL"
    ],
    "initialSound": "A",
    "minimalPair": [
      "ASTRO",
      "ARTO"
    ],
    "fullSentence": "O camisa 10 da nossa equipe é um astro idolatrado por todos os fãs!",
    "sentenceMissing": "O camisa 10 da nossa equipe é um _____ idolatrado por todos os fãs!",
    "meaning": "Estrela do esporte e grande ídolo mundial.",
    "hint": {
      "soundCue": "AAASSS... TRO! Começa com A e o ventinho do S.",
      "articulatoryCue": "Abra a boca no A e feche soprando ar fino: AS.",
      "varEliminate": [
        "AR",
        "AL"
      ],
      "distractorExplanations": {
        "AT": "ATTRO não existe! O ídolo estelar é o ASTRO com S!",
        "AR": "ARTRO não é jogador! A grande estrela do time é o ASTRO!",
        "AL": "ALTRO não existe em português! O grande ídolo é o ASTRO!"
      }
    }
  },
  {
    "id": "s_24",
    "phoneme": "S",
    "word": "MÁSCARA",
    "syllables": [
      "MÁS",
      "CA",
      "RA"
    ],
    "phonemePosition": "início",
    "missingPart": "MÁS",
    "distractors": [
      "MÁT",
      "MÁR",
      "MÁL"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MÁSCARA",
      "MARCARA"
    ],
    "fullSentence": "O atacante jogou protegido por uma máscara facial após a lesão no nariz!",
    "sentenceMissing": "O atacante jogou protegido por uma _____ facial após a lesão no nariz!",
    "meaning": "Proteção para o rosto usada por atletas machucados.",
    "hint": {
      "soundCue": "MÁÁÁSSS... CA... RA! O S fecha a primeira sílaba com ventinho.",
      "articulatoryCue": "Lábios no M e ar fino sibilante no S: MÁS.",
      "varEliminate": [
        "MÁR",
        "MÁL"
      ],
      "distractorExplanations": {
        "MÁT": "MÁTCA não existe! A proteção do rosto é a MÁSCARA com S!",
        "MÁR": "MÁRCARA não existe! O acessório facial é a MÁSCARA!",
        "MÁL": "MÁLCARA não existe! Para proteger o nariz usa-se MÁSCARA!"
      }
    }
  },
  {
    "id": "s_25",
    "phoneme": "S",
    "word": "CASCA",
    "syllables": [
      "CAS",
      "CA"
    ],
    "phonemePosition": "início",
    "missingPart": "CAS",
    "distractors": [
      "CAT",
      "CAR",
      "CAL"
    ],
    "initialSound": "C",
    "minimalPair": [
      "CASCA",
      "CARCA"
    ],
    "fullSentence": "O nosso time ganhou casca e experiência para decidir finais!",
    "sentenceMissing": "O nosso time ganhou _____ e experiência para decidir finais!",
    "meaning": "Maturidade e resistência mental nas decisões difíceis.",
    "hint": {
      "soundCue": "CAAASSS... CA! S sibilante separando os dois C.",
      "articulatoryCue": "Solte o ar fino entre as duas batidas de C: CAS.",
      "varEliminate": [
        "CAR",
        "CAL"
      ],
      "distractorExplanations": {
        "CAT": "CATCA não existe! Experiência de jogo é chamada de CASCA com S!",
        "CAR": "CARCA não existe! Time experiente tem CASCA grossa!",
        "CAL": "CALCA é calçar! A casca protetora de experiência é CASCA!"
      }
    }
  },
  {
    "id": "s_26",
    "phoneme": "S",
    "word": "MASSA",
    "syllables": [
      "MAS",
      "SA"
    ],
    "phonemePosition": "fim",
    "missingPart": "SA",
    "distractors": [
      "ÇA",
      "TA",
      "PA"
    ],
    "initialSound": "M",
    "minimalPair": [
      "MASSA",
      "MAÇA"
    ],
    "fullSentence": "A massa de torcedores empurrou o time rumo ao título no estádio!",
    "sentenceMissing": "A _____ de torcedores empurrou o time rumo ao título no estádio!",
    "meaning": "A grande multidão de apaixonados pelo clube.",
    "hint": {
      "soundCue": "MAAASSS... SSSAAA! Dígrafo SS entre vogais para som de S.",
      "articulatoryCue": "Dentes juntos e ventinho sibilante: SA.",
      "varEliminate": [
        "TA",
        "PA"
      ],
      "distractorExplanations": {
        "ÇA": "MAÇA com Ç é maça de bater! A multidão da torcida é a MASSA com SS!",
        "TA": "MATA é bosque de árvores! A torcida reunida é a MASSA!",
        "PA": "MAPA é de geografia! A grande galera do clube é a MASSA!"
      }
    }
  },
  {
    "id": "s_27",
    "phoneme": "S",
    "word": "INGRESSO",
    "syllables": [
      "IN",
      "GRES",
      "SO"
    ],
    "phonemePosition": "fim",
    "missingPart": "SO",
    "distractors": [
      "ÇO",
      "TO",
      "PO"
    ],
    "initialSound": "I",
    "minimalPair": [
      "INGRESSO",
      "INGRETO"
    ],
    "fullSentence": "O torcedor comprou o ingresso para ver a grande final da Copa!",
    "sentenceMissing": "O torcedor comprou o _____ para ver a grande final da Copa!",
    "meaning": "Bilhete de entrada para assistir ao jogo no estádio.",
    "hint": {
      "soundCue": "IN... GRES... SSSOOO! Dígrafo SS no final da palavra.",
      "articulatoryCue": "Termine com o ventinho fino nos dentes: SO.",
      "varEliminate": [
        "TO",
        "PO"
      ],
      "distractorExplanations": {
        "ÇO": "Ingresso do jogo é grafado com SS, não com Ç!",
        "TO": "INGRETO não existe! O bilhete de entrada é o INGRESSO com SS!",
        "PO": "INGREPO não existe! O bilhete da partida é o INGRESSO!"
      }
    }
  },
  {
    "id": "s_28",
    "phoneme": "S",
    "word": "BASTIDOR",
    "syllables": [
      "BAS",
      "TI",
      "DOR"
    ],
    "phonemePosition": "início",
    "missingPart": "BAS",
    "distractors": [
      "BAT",
      "BAR",
      "BAL"
    ],
    "initialSound": "B",
    "minimalPair": [
      "BASTIDOR",
      "BARTIDOR"
    ],
    "fullSentence": "A gravação do vestiário mostrou o bastidor emocionante da preleção!",
    "sentenceMissing": "A gravação do vestiário mostrou o _____ emocionante da preleção!",
    "meaning": "O que acontece por trás das câmeras no vestiário do time.",
    "hint": {
      "soundCue": "BAAASSS... TI... DOR! O S chia antes do T.",
      "articulatoryCue": "Feche os lábios no B e solte o ar no S: BAS.",
      "varEliminate": [
        "BAR",
        "BAL"
      ],
      "distractorExplanations": {
        "BAT": "BATTIDOR não existe! O que rola nos fundos do vestiário é o BASTIDOR com S!",
        "BAR": "BARTIDOR não existe! Os momentos secretos são os BASTIDORES!",
        "BAL": "BALTIDOR não existe! O ambiente interno é o BASTIDOR!"
      }
    }
  }
];

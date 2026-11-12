# coding: utf-8

PHONEMES_INFO = {
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
    "confusions": ["X", "J", "S"],
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
    "confusions": ["P", "T"],
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
    "confusions": ["L", "LH"],
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
    "confusions": ["C", "Ç", "Z"],
    "coachQuote": "A torcida canta unida: SSSSS! Vamos ouvir com atenção cada letra S na palavra!"
  }
}

CARDS_DATABASE = [
  {
    "id": "pele",
    "name": "Pelé",
    "nickname": "O Rei do Futebol",
    "category": "lendas",
    "rarity": "lendaria",
    "icon": "👑",
    "rating": 99,
    "quote": "Mil gols na carreira e a maior lenda das quatro linhas!",
    "stats": {"drible": 98, "chute": 99, "passe": 97, "leitura": 99}
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
    "stats": {"drible": 99, "chute": 98, "passe": 99, "leitura": 98}
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
    "stats": {"drible": 99, "chute": 94, "passe": 91, "leitura": 95}
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
    "stats": {"drible": 80, "chute": 85, "passe": 93, "leitura": 96}
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
    "stats": {"drible": 90, "chute": 91, "passe": 96, "leitura": 97}
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
    "stats": {"drible": 96, "chute": 99, "passe": 98, "leitura": 99}
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
    "stats": {"drible": 88, "chute": 92, "passe": 86, "leitura": 90}
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
    "stats": {"drible": 89, "chute": 87, "passe": 93, "leitura": 89}
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
    "stats": {"drible": 86, "chute": 90, "passe": 88, "leitura": 91}
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
    "stats": {"drible": 91, "chute": 94, "passe": 87, "leitura": 92}
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
    "stats": {"drible": 92, "chute": 86, "passe": 90, "leitura": 89}
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
    "stats": {"drible": 95, "chute": 99, "passe": 94, "leitura": 96}
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
    "stats": {"drible": 93, "chute": 98, "passe": 92, "leitura": 94}
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
    "stats": {"drible": 99, "chute": 99, "passe": 99, "leitura": 99}
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
    "stats": {"drible": 85, "chute": 86, "passe": 90, "leitura": 95}
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
    "stats": {"drible": 97, "chute": 96, "passe": 98, "leitura": 97}
  }
]

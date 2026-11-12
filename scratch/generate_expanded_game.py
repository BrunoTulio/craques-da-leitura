#!/usr/bin/env python3
# coding: utf-8
"""
Gerador de Expansão do Craques da Leitura FC
- Banco de Palavras Expandido (112 palavras com pistas fonoaudiológicas detalhadas e explicações de erros)
- Álbum de Figurinhas dos Craques (16 cartas colecionáveis, sistema de pacotinhos estilo EA FC)
- Diversificação dos 5 Lances da Partida:
    1. Roubada de Bola (Identificar Som Inicial)
    2. Passe Preciso (Completar Sílaba)
    3. Drible Desconcertante (Duelo de Par Mínimo com escuta e escolha de rota)
    4. Cruzamento na Área (Tabelinha de Sílabas - Ordenação Silábica)
    5. Chute a Gol! (Decisão tática da frase / gol)
- Régua de Leitura Dinâmica (Reading Ruler) com toggle no topo
- CSS de Acessibilidade completo injetado no head
- Sincronização de bundle.js, index.html e jogo_completo.html
"""

import json
import re

print("Carregando bases de dados fonológicos...")

#!/usr/bin/env python3
# coding: utf-8

import os
import re
import json

from scratch.all_words import WORDS_DATABASE
from scratch.words_data import PHONEMES_INFO, CARDS_DATABASE

print(f"Loaded {len(WORDS_DATABASE)} words, {len(PHONEMES_INFO)} phonemes, and {len(CARDS_DATABASE)} cards.")

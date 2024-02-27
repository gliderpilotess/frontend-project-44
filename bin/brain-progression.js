#!/usr/bin/env node

import runGame from '../src/index.js';
import progressionGame from '../src/games/prog.js';

const description = 'What number is missing in the progression?';

runGame(progressionGame, description);

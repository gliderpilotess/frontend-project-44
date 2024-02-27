#!/usr/bin/env node

import runGame from '../src/index.js';
import calcGame from '../src/games/calc.js';

const description = 'What is the result of the expression?';

runGame(calcGame, description);

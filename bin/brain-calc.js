#!/usr/bin/env node

import runGame from '../src/index.js';
import calcGame from '../src/games/calc.js';

const startCalcGame = () => runGame(calcGame);

startCalcGame();

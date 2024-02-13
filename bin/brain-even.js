#!/usr/bin/env node

import runGame from '../src/index.js';
import evenGame from '../src/games/even.js';

const startEvenGame = () => runGame(evenGame);

startEvenGame();

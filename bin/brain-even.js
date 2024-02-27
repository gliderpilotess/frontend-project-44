#!/usr/bin/env node

import runGame from '../src/index.js';
import evenGame from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(evenGame, description);

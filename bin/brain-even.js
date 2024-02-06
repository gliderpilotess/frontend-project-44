#!/usr/bin/env node

import readlineSync from 'readline-sync';

const runGame = (generateRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(gameDescription);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const isEven = (num) => num % 2 === 0;

const generateRoundEven = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameDescriptionEven = "Answer 'yes' if the number is even, otherwise answer 'no'";

runGame(generateRoundEven, gameDescriptionEven);

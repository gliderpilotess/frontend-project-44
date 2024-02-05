// unified the logic for two games

import readlineSync from 'readline-sync';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = game.generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;

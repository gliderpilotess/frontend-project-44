// unified the logic for games index.js
import readlineSync from 'readline-sync';

const runGame = (game) => {
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = game.generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again!\n`);
      return;
    }
  }

  console.log('Congratulations!');
};

export default runGame;

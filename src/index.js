import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const runGame = (game) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  let hasPrintedMessage = false;

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = game(hasPrintedMessage);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (!hasPrintedMessage) {
      hasPrintedMessage = true;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;

import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
const greetUser = (name) => console.log(`Hello, ${name}!\n`);

const runGame = (game) => {
  const name = getUserName();
  greetUser(name);

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
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;

#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let hasPrintedMessage = false;

const generateRound = () => {
  if (!hasPrintedMessage) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    hasPrintedMessage = true;
  }
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: String(number), correctAnswer };
};

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playGame = (userName) => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log('Congratulations!');
  return true;
};

const userName = welcomeUser();
playGame(userName);

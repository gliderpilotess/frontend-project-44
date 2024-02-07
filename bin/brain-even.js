#!/usr/bin/env node
import readlineSync from 'readline-sync';

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function isEven(number) {
  return number % 2 === 0;
}

function playGame(userName) {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if ((userAnswer === 'yes' && isEven(number)) || (userAnswer === 'no' && !isEven(number))) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = isEven(number) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
}

const userName = welcomeUser();
playGame(userName);

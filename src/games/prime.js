// src/games/prime.js
export const isPrime = (num) => {
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

const generateRound = (message) => {
  if (message) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: String(number), correctAnswer };
};

export default generateRound;

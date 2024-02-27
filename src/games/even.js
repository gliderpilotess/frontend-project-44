const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default generateRound;

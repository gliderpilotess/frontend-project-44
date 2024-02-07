const isEven = (num) => num % 2 === 0;

const generateRound = (hasPrintedMessage) => {
  if (!hasPrintedMessage) {
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'");
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default generateRound;

// games brain-even

const isEven = (num) => num % 2 === 0;

let hasPrintedMessage = false;

const generateRound = () => {
  if (!hasPrintedMessage) {
    console.log('"yes" if the number is even, otherwise answer "no".');
    hasPrintedMessage = true;
  }
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default generateRound;

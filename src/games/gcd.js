// finding the greatest common divisor game

const findGCD = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

const generateRound = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;

  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = findGCD(number1, number2);

  return { question, correctAnswer: String(correctAnswer) };
};

export default generateRound;

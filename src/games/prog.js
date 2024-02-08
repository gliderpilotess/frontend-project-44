// prog.js

const getRandomArithmeticProgression = (length) => {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }

  return progression;
};
let hasPrintedMessage = false;

const generateRound = () => {
  if (!hasPrintedMessage) {
    console.log('What number is missing in the progression?');
    hasPrintedMessage = true;
  }
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const progression = getRandomArithmeticProgression(progressionLength);
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default generateRound;

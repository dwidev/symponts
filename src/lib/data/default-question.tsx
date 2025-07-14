export const defaultSymptomQuestions = [
  "Saya sakit kepala",
  "Saya merasa demam",
  "Saya mual dan ingin muntah",
  "Saya batuk-batuk terus",
  "Saya merasa lemas",
  "Saya nyeri di perut",
  "Saya sulit bernapas",
  "Saya meriang dan menggigil",
  "Saya merasa pusing",
  "Saya diare sejak tadi pagi",
  "Saya merasa nyeri di dada",
  "Saya sulit tidur",
  "Saya sering buang air kecil",
  "Saya merasa cemas dan jantung berdebar",
  "Saya gatal-gatal di kulit",
  "Saya tidak nafsu makan",
  "Saya mimisan tiba-tiba",
  "Saya merasa sendi saya nyeri dan kaku",
  "Saya merasa pandangan kabur",
  "Saya merasa telinga saya berdengung",
];

export const getRandomSymptomQuestions = (count = 6) => {
  return [...defaultSymptomQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

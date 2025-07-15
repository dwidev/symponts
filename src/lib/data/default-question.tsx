export const defaultSymptomQuestions = [
  "Saya sakit kepala",
  "Demam tinggi sejak kemarin",
  "Saya mual dan ingin muntah",
  "Batuk tidak kunjung sembuh",
  "Saya merasa lemas sekali",
  "Nyeri perut yang tajam",
  "Saya sesak napas",
  "Meriang disertai menggigil",
  "Saya pusing berputar",
  "Diare berkepanjangan",
  "Saya nyeri di dada",
  "Susah tidur dan sering terbangun",
  "Saya sering buang air kecil",
  "Jantung berdebar dan cemas",
  "Saya gatal-gatal di kulit",
  "Kehilangan nafsu makan",
  "Saya mimisan tiba-tiba",
  "Sendi kaku dan nyeri",
  "Saya merasa pandangan kabur",
  "Telinga berdenging keras",
  "Saya sakit tenggorokan",
  "Punggung terasa kaku",
  "Saya perut kembung",
  "Hidung tersumbat dan pilek",
  "Saya kram otot di kaki",
  "Ruam kulit yang gatal",
  "Saya vertigo dan pusing",
  "Mulut terasa pahit",
  "Saya wajah bengkak pagi hari",
  "Keringat berlebihan malam hari",
];

export const getRandomSymptomQuestions = (count = 6) => {
  return [...defaultSymptomQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

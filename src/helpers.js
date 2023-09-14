export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((unshuffleAnswer) => ({
      sort: Math.random(),
      value: unshuffleAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

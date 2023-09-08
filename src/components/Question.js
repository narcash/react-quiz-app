import Answer from "./Answer";
const Question = () => {
  return (
    <div>
      <div className="question">text of question</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;

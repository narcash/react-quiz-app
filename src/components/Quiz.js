/* eslint-disable no-unused-vars */
import Question from "./Question";
import { useReducer } from "react";

const initialState = {
  question: [],
  currentQuestion: 0,
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  return state;
};
const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="quiz">
      <div className="score">Question 1/8</div>
      <Question />
      <div
        className="next-button"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        next question
      </div>
    </div>
  );
};

export default Quiz;

import { useEffect, useRef, useState } from "react";
import "../styles/quiz-game.css";
import { QUIZ_QUESTIONS } from "./questions";

const QuizGame = () => {
  const [start, setStart] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const score = useRef(0);
  let timerId = useRef(0);

  function handleRestart() {
    setStart(false);
    setCompleted(false);
    setCurrentQuestionIndex(0);
    setAnswered(false);
    score.current = 0;
    clearTimeout(timerId.current);
  }

  useEffect(() => {
    if (!answered) return; // guard clause

    const id = setTimeout(() => {
      setCurrentQuestionIndex((prev) => {
        if (prev === QUIZ_QUESTIONS.length - 1) {
          setCompleted(true);
          return prev; // don't increment
        }
        return prev + 1;
      });

      setAnswered(false);
    }, 1000);

    return () => clearTimeout(id);
  }, [answered]);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    isCorrect: boolean,
  ) {
    if (isCorrect) {
      score.current += 1;
      e.currentTarget.classList.add("correct");
    } else {
      e.currentTarget.classList.add("incorrect");
    }
    setAnswered(true);
  }
  const width = (currentQuestionIndex / QUIZ_QUESTIONS.length) * 100;
  return (
    <div className="container">
      {!start && !completed && (
        <div className="screen active" id="start-screen">
          <h1>Quiz Game</h1>
          <p>Test your knowledge with these fun question.</p>
          <button onClick={() => setStart(true)}>Start Quiz</button>
        </div>
      )}
      {start && !completed && (
        <div className="screen" id="quiz-screen">
          {QUIZ_QUESTIONS.map((item, index) => (
            <div
              key={item.question}
              style={{
                display: `${currentQuestionIndex === index ? "block" : "none"}`,
              }}>
              <div className="quiz-header">
                <h1 className="question-text">{item.question}</h1>
                <div className="quize-info">
                  <p>
                    Question <span>{index + 1}</span> of
                    <span> {QUIZ_QUESTIONS.length}</span>
                  </p>
                  <p>
                    Score: <span>{score.current}</span>
                  </p>
                </div>
              </div>
              <div className="answer-container">
                {item.answers.map((ans) => (
                  <button
                    key={ans.text}
                    className="answer-btn"
                    onClick={(e) => handleClick(e, ans.correct)}>
                    {ans.text}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {!completed && (
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${Math.min(100, Math.max(0, width))}%`,
                }}></div>
            </div>
          )}
        </div>
      )}
      {completed && (
        <div className="screen" id="result-screen">
          <h1>Quiz Result</h1>
          <div className="result-info">
            <p>
              You scored <span id="final-score">{score.current}</span> out of
              <span id="max-score"> {QUIZ_QUESTIONS.length}</span>
            </p>
            {/* <p id="result-message">Good job!</p> */}
          </div>
          <button id="restart-quiz" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;

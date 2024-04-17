import "./Quiz.css";

import { useState, useEffect } from "react";
import allQuestions from "./Quiz1";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const test = shuffleArray([...allQuestions]).slice(0, 3);
  const questions = test;

  useEffect(() => {
    document.title = "Composting Hero - Quiz1";
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    const question = questions[currentQuestion];
    const correctAnswer = question.answerOptions.find(
      (option) => option.isCorrect
    ).answerText;

    const newUserAnswers = [
      ...userAnswers,
      {
        question: question.questionText,
        userAnswer: answerText,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect, // This will be used for styling
      },
    ];
    setUserAnswers(newUserAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
  };

  return (
    <main className="quiz-bg">
      <div className="quiz-title">Quiz: Building Your Compost</div>
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <h1>
              You scored {score} out of {questions.length} - Well done!
            </h1>
            <div className="answers-summary">
              <h3>Your Answers:</h3>
              <ul>
                {userAnswers.map((userAnswer, index) => (
                  <li key={index}>
                    <strong>
                      Q{index + 1}: {userAnswer.question}
                    </strong>
                    <br />
                    Your answer:{" "}
                    <span
                      style={{ color: userAnswer.isCorrect ? "green" : "red" }}
                    >
                      {userAnswer.userAnswer}
                    </span>
                    <br />
                    Correct answer:{" "}
                    <span style={{ color: "green" }}>
                      {userAnswer.correctAnswer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={resetQuiz} className="reset-btn">
              Reset Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(option.isCorrect, option.answerText)
                  }
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <a href="./game" className="back-btn">
        close
      </a>
    </main>
  );
}

export default Quiz;

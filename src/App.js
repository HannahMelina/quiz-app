import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Was ist die Hauptstadt von Irland?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Dublin", isCorrect: true },
        { answerText: "Madrid", isCorrect: false },
      ],
    },

    {
      questionText: "Welches dieser Tiere ist kein Säugetier?",
      answerOptions: [
        { answerText: "Seehund", isCorrect: false },
        { answerText: "Wal", isCorrect: false },
        { answerText: "Pferd", isCorrect: false },
        { answerText: "Huhn", isCorrect: true },
      ],
    },

    {
      questionText: "Wie viele Einwohner hat Österreich?",
      answerOptions: [
        { answerText: "8.956 Millionen", isCorrect: true },
        { answerText: "214.3 Millionen", isCorrect: false },
        { answerText: "83.2 Millionen", isCorrect: false },
        { answerText: "67.75 Millionen", isCorrect: false },
      ],
    },

    {
      questionText: "Welcher Berg ist der höchste Berg der Welt?",
      answerOptions: [
        { answerText: "Mount Everest", isCorrect: true },
        { answerText: "Cho Oyu", isCorrect: false },
        { answerText: "Lhotse", isCorrect: false },
        { answerText: "Kangchendzönga", isCorrect: false },
      ],
    },
    {
      questionText: "Wie viele Oscars gewann der Film Titanic?",
      answerOptions: [
        { answerText: "5 Oscars", isCorrect: false },
        { answerText: "7 Oscars", isCorrect: false },
        { answerText: "9 Oscars", isCorrect: false },
        { answerText: "11 Oscars", isCorrect: true },
      ],
    },
    {
      questionText: "Wann wurde Queen Elisabeth II zur Königin gekrönt?",
      answerOptions: [
        { answerText: "1945", isCorrect: false },
        { answerText: "1953", isCorrect: true },
        { answerText: "1962", isCorrect: false },
        { answerText: "1970", isCorrect: false },
      ],
    },
    {
      questionText:
        "Aus wie vielen Einzelknochen besteht eine menschliche Hand?",
      answerOptions: [
        { answerText: "Aus 8", isCorrect: false },
        { answerText: "Aus 15", isCorrect: false },
        { answerText: "Aus 23", isCorrect: false },
        { answerText: "Aus 27", isCorrect: true },
      ],
    },
    {
      questionText: "Was ist ein Sonett?",
      answerOptions: [
        { answerText: "Eine Gedichtsform", isCorrect: true },
        { answerText: "Eine Musikrichtung", isCorrect: false },
        { answerText: "Eine Sportart", isCorrect: false },
        { answerText: "Ein Kunststil", isCorrect: false },
      ],
    },
    {
      questionText:
        "Wer war der erste President der Vereinigten Staaten von Amerika?",
      answerOptions: [
        { answerText: "John Adams", isCorrect: false },
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "George Washington", isCorrect: true },
        { answerText: "James Madison", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    checkRightOrWrong(isCorrect);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function checkRightOrWrong(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  function backToStart() {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="App">
      {showScore ? (
        <div>
          Du hast {score} Punke von {questions.length}
          <div>
            <button className="restart-btn" onClick={backToStart}>
              Zurück zum Start
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div>
              <span>
                Frage {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div>{questions[currentQuestion].questionText}</div>
          </div>
          <div>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

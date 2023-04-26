import { useState, useEffect } from "react";

export default function StepIntro() {
  const [counter, setCounter] = useState(3);
  const [popup, setPopup] = useState(true);
  const [quizType, setQuizType] = useState("Listening Activity");
  const [stepNeumber, setStepNumber] = useState(1);
  const [countdownEffect, setCountdownEffect] = useState(
    `animate__animated animate__flipInX`
  );

  function Popup() {
    return (
      <div id="step-intro">
        <div className="step-intro-modal">
          <div className="title">
            <div className="step">Step{stepNeumber}</div>
            <div className="quiz-type">{quizType}</div>
          </div>
          <div className="counter">
            <span className={countdownEffect}>{popup ? counter : null}</span>
          </div>
          <div className="bottom-top"></div>
          <div className="bottom"></div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (counter > 1) {
      setTimeout(() => {
        setCountdownEffect("");
        setTimeout(() => {
          setCounter(counter - 1);
          setCountdownEffect(`animate__animated animate__flipInX`);
        }, 100);
      }, 900);
    } else {
      setTimeout(() => {
        setPopup(false);
      }, 1000);
    }
  }, [counter]);

  return <>{popup ? <Popup /> : null}</>;
}

import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";

export default function ListeningActivity1() {
  // App Context
  const {
    stepOrder,
    _stepOrder,
    stepQuizData,
    _stepQuizData,
    currentQuizNo,
    _currentQuizNo,
    totalQuizNo,
    ChangeItem,
    correctSound,
    incorrectSound,
    testResultSound,
    nextQuestionSound,
  } = useContext(QuizContext);

  // 퀴즈문제 - 퀴즈번호
  const [quizNumber, _quizNumber] = useState(1);

  // 퀴즈문제 - 정답
  const correctText = stepQuizData[quizNumber - 1].CorrectText;
  const [correctAnswer, _correctAnswer] = useState();

  // 퀴즈문제 - example
  const [example, _example] = useState([]);
  useEffect(() => {
    const exampleList = [
      stepQuizData[0].Example1,
      stepQuizData[0].Example2,
      stepQuizData[0].Example3,
      stepQuizData[0].Example4,
      stepQuizData[0].Example5,
    ];
    exampleList.sort(() => Math.random() - 0.5);
    _example([...exampleList]);
    _quizNumber(stepQuizData[0].QuizNo);
    _correctAnswer(stepQuizData[0].CorrectText);
  }, []);

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 정답체크
  const CorrectFlow = (i) => {
    ChangeItem("screen-block", "screen-block");
    correctSound.play();
    _quizItemsFx("");
    ChangeItem(
      `answer-item-${i}`,
      "answer-item animate__animated animate__flipInX"
    );
    ChangeItem(
      "sign-correct",
      "correct-unit-on animate__animated animate__pulse"
    );
    ChangeItem(`example-text${i}`, "word");
  };
  const IncorrectFlow = (i) => {
    ChangeItem("screen-block", "screen-block");
    incorrectSound.play();
    _quizItemsFx("");
    ChangeItem(
      `answer-item-${i}`,
      "answer-item animate__animated animate__shakeX"
    );
    ChangeItem(
      "sign-incorrect",
      "incorrect-unit-on animate__animated animate__slideInUp"
    );
  };
  const resetFlow = (i, e, f) => {
    let setNextQuestion = (i) => {
      nextQuestionSound.play();
      nextQuestionSound.muted = false;
      _quizNumber(quizNumber + 1);
      _currentQuizNo(currentQuizNo + 1);
      _quizItemsFx("animate__fadeInRight");
      // ChangeItem(`example-text${i}`, "answer-item");
    };
    if (e == "correct") {
      if (f != "end") {
        setTimeout(() => {
          setNextQuestion(i);
          ChangeItem("sign-correct", "correct-unit");
          ChangeItem("screen-block", "");
        }, 2000);
      } else {
        setTimeout(() => {
          testResultSound.play();
          ChangeItem("sign-correct", "correct-unit");
          _testResultOn(true);
        }, 2000);
      }
    }
    if (e == "incorrect") {
      if (f != "end") {
        setTimeout(() => {
          setNextQuestion(i);
          ChangeItem("sign-incorrect", "incorrect-unit");
          ChangeItem("screen-block", "");
        }, 2000);
      } else {
        setTimeout(() => {
          testResultSound.play();
          ChangeItem("sign-incorrect", "incorrect-unit");
          _testResultOn(true);
        }, 2000);
      }
    }
  };
  function Assessment(a, i) {
    if (correctText == example[i]) {
      if (quizNumber < totalQuizNo) {
        CorrectFlow(i);
        resetFlow(i, "correct");
      } else {
        CorrectFlow(i);
        resetFlow(i, "correct", "end");
      }
    } else {
      if (quizNumber < totalQuizNo) {
        IncorrectFlow(i);
        resetFlow(i, "incorrect");
      } else {
        IncorrectFlow(i);
        resetFlow(i, "incorrect", "end");
      }
    }
  }

  // Test Result
  const [testResultOn, _testResultOn] = useState(false);

  return (
    <>
      <StepIntro />
      <div id="listening-activity-1">
        <QuizBody step={1} quizType={"Listening Activity"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay
                audio={`https://wcfresource.a1edu.com/newsystem/sound/words/${correctText}.mp3`}
              />
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              {example.map((a, i) => {
                return (
                  <div
                    id={`answer-item-${i}`}
                    className="answer-item"
                    onClick={() => {
                      Assessment(a, i);
                    }}
                  >
                    <div className={`img-hat hat-${i}`}></div>
                    <div className={`img-pic pic-${i}`}>
                      <div className="box">
                        <img
                          src={`https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/${a}.png`}
                          alt=""
                        />
                      </div>
                      <div id={`example-text${i}`} className="d-none">
                        <span>{a}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </QuizContents>
        </QuizBody>
      </div>
      <SignCorrect />
      <SignIncorrect />
      {testResultOn == true ? <ModalTestResult /> : null}
      <div id="screen-block"></div>
    </>
  );
}

import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";

export default function ReadingComprehension4() {
  // App Context
  const {
    stepQuizData,
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

  // 퀴즈문제 - example
  const [example, _example] = useState([]);
  const getExampleOrg = (n) => {
    let exampleOrg = [
      stepQuizData[n - 1].Example1,
      stepQuizData[n - 1].Example2,
      stepQuizData[n - 1].Example3,
      stepQuizData[n - 1].Example4,
    ];
    _example(exampleOrg.sort(() => Math.random() - 0.5));
  };
  useEffect(() => {
    getExampleOrg(quizNumber);
  }, [quizNumber]);

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 정답체크
  const CorrectFlow = (i) => {
    ChangeItem("screen-block", "screen-block");
    correctSound.play();
    _quizItemsFx("");
    ChangeItem(
      "sign-correct",
      "correct-unit-on animate__animated animate__pulse"
    );
    ChangeItem(
      `answer-item-${i}`,
      "answer-item animate__animated animate__flipInX correct"
    );
  };
  const IncorrectFlow = (i) => {
    ChangeItem("screen-block", "screen-block");
    incorrectSound.play();
    _quizItemsFx("");
    ChangeItem(
      "sign-incorrect",
      "incorrect-unit-on animate__animated animate__slideInUp"
    );
    ChangeItem(
      `answer-item-${i}`,
      "answer-item animate__animated animate__shakeX incorrect"
    );
  };
  const resetFlow = (i, e, f) => {
    let setNextQuestion = (i) => {
      nextQuestionSound.play();
      _quizNumber(quizNumber + 1);
      _currentQuizNo(currentQuizNo + 1);
      _quizItemsFx("animate__fadeInRight");
      ChangeItem(`answer-item-${i}`, "answer-item");
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
      <div id="reading-comprehension-4">
        <QuizBody step={1} quizType={"Reading Comprehension"}>
          <QuizContentsTop>
            <div className={`question animate__animated ${quizItemsFx}`}>
              <div className="quiz-sentence">
                {stepQuizData[quizNumber - 1].Question}
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className={`answer-list animate__animated ${quizItemsFx}`}>
              {example.map((a, i) => {
                return (
                  <div
                    key={i}
                    id={`answer-item-${i}`}
                    className="answer-item"
                    onClick={() => {
                      Assessment(a, i);
                    }}
                  >
                    <div className="number">{i + 1}</div>
                    <span>{example[i]}</span>
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

import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";
import PenaltySummary from "../quiz-module/PenaltySummary";

export default function Summary1() {
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
  const correctText = stepQuizData[quizNumber - 1].Question;
  const [correctList, _correctList] = useState([]);
  const [correctListOrder, _correctListOrder] = useState();
  const [quizUpdate, _quizUpdate] = useState();
  const setCorrectList = () => {
    let addCorrectItem = stepQuizData[correctListOrder].Question;
    _correctList([...correctList, addCorrectItem]);
  };

  // 퀴즈문제 - example
  const [question, _question] = useState([]);
  const getQuestionOrg = () => {
    let questionOrg = [];
    stepQuizData.map((a, i) => {
      questionOrg.push(a.Question);
    });
    _question(questionOrg.sort(() => Math.random() - 0.5));
    // _question(questionOrg);
  };
  useEffect(() => {
    getQuestionOrg();
  }, []);

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 정답체크
  const CorrectFlow = (i) => {
    ChangeItem("screen-block", "screen-block");
    correctSound.play();
    _correctListOrder(quizNumber - 1);
    _quizUpdate(i);
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
    // let moveToBottom = () => {
    //   document
    //     .getElementById(`correct-answer-item-${quizNumber - 1}`)
    //     .scrollIntoView(false);
    // };
    let setNextQuestion = (i) => {
      nextQuestionSound.play();
      _quizNumber(quizNumber + 1);
      _currentQuizNo(currentQuizNo + 1);
      ChangeItem(
        `answer-item-${i}`,
        "answer-item animate__animated animate__bounceOutUp"
      );
      setTimeout(() => {
        ChangeItem(`answer-item-${i}`, "d-none");
        ChangeItem(
          `correct-answer-item-${quizNumber - 1}`,
          "correct-answer-item animate__animated animate__bounceInDown"
        );
      }, 1000);
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
          // setNextQuestion(i);
          ChangeItem(`answer-item-${i}`, "answer-item");
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
    if (a == correctText) {
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
  useEffect(() => {
    if (quizUpdate == null) {
      return;
    }
    setCorrectList();
  }, [quizUpdate]);

  // Test Result
  const [testResultOn, _testResultOn] = useState(false);

  return (
    <>
      <div id="summary-1">
        <QuizBody step={3} quizType={"Summary"}>
          <QuizContentsTop>
            <div className="correct-answers">
              {correctList.map((a, i) => {
                return (
                  <div
                    key={i}
                    id={`correct-answer-item-${i}`}
                    className="correct-answer-item ready"
                  >
                    {console.log(quizNumber)}
                    {a}
                  </div>
                );
              })}
            </div>
            {/* <PenaltySummary /> */}
          </QuizContentsTop>
          <QuizContents>
            <div className="ico-up"></div>
            <div className="answer-list">
              {question.map((a, i) => {
                return (
                  <>
                    <div
                      key={i}
                      id={`answer-item-${i}`}
                      className="answer-item"
                      onClick={() => {
                        Assessment(a, i);
                      }}
                    >
                      {a}
                    </div>
                  </>
                );
              })}
              <div className="chance">
                <button>Chance 2/2</button>
              </div>
            </div>
            {/* <div className="enter">
              <button className="btn-gloss-blue">Next</button>
            </div> */}
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

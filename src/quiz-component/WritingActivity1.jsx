import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";
import CompletedLevelMaster from "../quiz-module/CompletedLevelMaster";
import CompletedOpenFriendsStory from "../quiz-module/CompletedOpenFriendsStory";
import CompletedEarnPoint from "../quiz-module/CompletedEarnPoint";
import CompletedDailyGoal from "../quiz-module/CompletedDailyGoal";
import CompletedKingOfReader from "../quiz-module/CompletedKingOfReader";

import icoRefresh from "../assets/images/ico_refresh_cw.svg";
import icoReturn from "../assets/images/ico_return.svg";

export default function WrtingActivity1() {
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
  const [correctDone, _correctDone] = useState([]);
  let setCorrectDone = correctText.split("/");
  useEffect(() => {
    _correctDone(setCorrectDone);
  }, [quizNumber]);

  // 퀴즈문제 - example
  const [answerItem, _answerItem] = useState([]);
  let setAnswerList = correctText.split("/");
  useEffect(() => {
    // _answerItem(setAnswerList);
    _answerItem(setAnswerList.sort(() => Math.random() - 0.5));
  }, [quizNumber]);

  // 퀴즈풀이 - 선택한 카드
  const [selectedItem, _selectedItem] = useState([]);
  function PushSelectedItem(a) {
    let arr = [...selectedItem, a];
    _selectedItem(arr);
  }

  // 퀴즈풀이 - 선택한 카드 나열하기
  function MakeList(a, i) {
    PushSelectedItem({
      item: a,
      id: `answer-item-${i}`,
      boxId: `box-item-${i}`,
    });
    ChangeItem(`answer-item-${i}`, "word-card-item send");
    ChangeItem(`box-item-${i}`, "block");
  }

  // 퀴즈풀이 - 선택한 카드 되돌리기
  function Reset(a, i) {
    ChangeItem(a.id, "word-card-item");
    ChangeItem(a.boxId, "");
    function DeleteSelectedItem(b) {
      let arr = [...selectedItem];
      arr = arr.filter((e) => e !== a);
      _selectedItem(arr);
    }
    DeleteSelectedItem(a);
  }

  // 퀴즈풀이 - 선택한 카드 모두 되돌리기
  function ResetAll() {
    _selectedItem([]);
    _checkResult(false);
    _selectedItemBg("");
    ChangeItem("screen-block", "");
    let arr = [...answerItem];
    arr.map((a, i) => {
      ChangeItem(`answer-item-${i}`, "word-card-item");
      ChangeItem(`box-item-${i}`, "");
    });
  }

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();
  const [selectedItemBg, _selectedItemBg] = useState();

  // 정답체크
  const [checkResult, _checkResult] = useState(false);
  function Assessment() {
    if (selectedItem.length == answerItem.length - 1) {
      _checkResult(true);
    }
  }
  const CorrectFlow = () => {
    ChangeItem("screen-block", "screen-block");
    setTimeout(() => {
      correctSound.play();
      ChangeItem(
        "sign-correct",
        "correct-unit-on animate__animated animate__pulse"
      );
      _selectedItemBg("correct");
      _quizItemsFx("");
    }, 500);
  };
  const IncorrectFlow = () => {
    ChangeItem("screen-block", "screen-block");
    setTimeout(() => {
      incorrectSound.play();
      ChangeItem(
        "sign-incorrect",
        "incorrect-unit-on animate__animated animate__slideInUp"
      );
      _selectedItemBg("incorrect");
      _quizItemsFx("");
    }, 500);
  };
  const resetFlow = (i, e, f) => {
    let setNextQuestion = () => {
      nextQuestionSound.play();
      _quizNumber(quizNumber + 1);
      _currentQuizNo(currentQuizNo + 1);
      _quizItemsFx("animate__fadeInRight");
      ResetAll();
    };
    if (e == "correct") {
      if (f != "end") {
        setTimeout(() => {
          ChangeItem("sign-correct", "correct-unit");
          setNextQuestion();
        }, 3000);
      } else {
        setTimeout(() => {
          ChangeItem("sign-correct", "correct-unit");
          testResultSound.play();
          _testResultOn(true);
        }, 3000);
      }
    }
    if (e == "incorrect") {
      if (f != "end") {
        setTimeout(() => {
          // setNextQuestion();
          ChangeItem("sign-incorrect", "incorrect-unit");
          ResetAll();
        }, 3000);
      } else {
        setTimeout(() => {
          ChangeItem("sign-incorrect", "incorrect-unit");
          testResultSound.play();
          _testResultOn(true);
        }, 3000);
      }
    }
  };
  useEffect(
    (i) => {
      if (checkResult) {
        if (selectedItem.length == answerItem.length) {
          console.log("채점시작");
          let arr = [...selectedItem];
          let setArr = [];
          let newArr = arr.map((a, i) => {
            setArr.push(a.item);
          });
          if (correctDone.toString() == setArr.toString()) {
            if (quizNumber < totalQuizNo) {
              CorrectFlow();
              resetFlow(i, "correct");
            } else {
              CorrectFlow();
              resetFlow(i, "correct", "end");
            }
          } else {
            IncorrectFlow();
            resetFlow(i, "incorrect");
          }
        }
      }
    },
    [checkResult]
  );

  // Test Result
  const [testResultOn, _testResultOn] = useState(false);

  return (
    <>
      <div id="writing-activity-1">
        <QuizBody step={5} quizType={"Writing Activity"}>
          <QuizContentsTop>
            <div className={`question ${quizItemsFx}`}>
              <div className="btn-group">
                <BtnPlay />
                <div className="btn-reset">
                  <button
                    onClick={() => {
                      ResetAll();
                    }}
                  >
                    Reset All <img src={icoRefresh} alt="" />
                  </button>
                </div>
              </div>
              <div className="sentence-box">
                <div className={`sentence-item ${quizItemsFx}`}>
                  <div className="selected-items">
                    {selectedItem.map((a, i) => {
                      return (
                        <div
                          key={i}
                          id={`selected-item-${i}`}
                          className={`selected-item animate__animated animate__bounceIn ${selectedItemBg}`}
                          onClick={() => {
                            Reset(a, i);
                          }}
                        >
                          {a.item}
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className="enter">
                    <button className="btn-gloss-blue off">
                      <img src={icoReturn} alt="" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="ico-up"></div>
            <div className={`word-cards ${quizItemsFx}`}>
              {answerItem.map((a, i) => {
                return (
                  <div key={i} className="box">
                    <div id={`box-item-${i}`}></div>
                    <div
                      id={`answer-item-${i}`}
                      className="word-card-item"
                      onClick={() => {
                        MakeList(a, i);
                        Assessment();
                      }}
                    >
                      {a}
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
      {/* <CompletedLevelMaster /> */}
      {/* <CompletedOpenFriendsStory /> */}
      {/* <CompletedEarnPoint /> */}
      {/* <CompletedDailyGoal /> */}
      <CompletedKingOfReader />
      <div id="screen-block"></div>
    </>
  );
}

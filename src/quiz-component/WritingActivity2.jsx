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
import ModalRevisionStatus from "../quiz-module/ModalRevisionStatus";
import CompletedLevelMaster from "../quiz-module/CompletedLevelMaster";
import CompletedOpenFriendsStory from "../quiz-module/CompletedOpenFriendsStory";
import CompletedEarnPoint from "../quiz-module/CompletedEarnPoint";
import CompletedDailyGoal from "../quiz-module/CompletedDailyGoal";
import CompletedKingOfReader from "../quiz-module/CompletedKingOfReader";

import icoRefresh from "../assets/images/ico_refresh_cw.svg";
import icoReturn from "../assets/images/ico_return.svg";

export default function WrtingActivity2() {
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

  return (
    <>
      <div id="writing-activity-2">
        <QuizBody step={5} quizType={"Writing Activity"}>
          <QuizContentsTop>
            <div className="tabs">
              <div className="tab-button on">1</div>
              <div className="tab-button">2</div>
              <div className="tab-button">3</div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="guide">What happened first?</div>
            <div className="writing-area">
              <div className="typing">
                <textarea placeholder="Please fill out within 30 to 300 characters."></textarea>
              </div>
              <div className="typing-status">
                <div className="limit">Limit: 30~300</div>
                <div className="words">The number of words: 18</div>
              </div>
            </div>
            <div className="buttons">
              <div className="save-button">
                <button>SAVE</button>
              </div>
              <div className="submit-button ">
                <button>SUBMIT</button>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
      <SignCorrect />
      <SignIncorrect />
      {/* 첨삭할지 묻는 팝업 */}
      <ModalRevisionStatus />
      {/* {testResultOn == true ? <ModalTestResult /> : null} */}
      {/* <CompletedLevelMaster /> */}
      {/* <CompletedOpenFriendsStory /> */}
      {/* <CompletedEarnPoint /> */}
      {/* <CompletedDailyGoal /> */}
      {/* <CompletedKingOfReader /> */}
      <div id="screen-block"></div>
    </>
  );
}

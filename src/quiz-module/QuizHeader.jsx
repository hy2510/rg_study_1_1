import { useState, useContext } from "react";
import { QuizContext } from "../App";
import icoHeartOn from "../assets/images/ico_heart_on.svg";
import icoHeartEmpty from "../assets/images/ico_heart_empty.svg";
import icoWatch from "../assets/images/ico_watch.svg";
import icoHbgMenu from "../assets/images/ico_hbg_menu.svg";
import icoDeleteWhite from "../assets/images/ico_delete_white.svg";
import icoScoreItemCorrect from "../assets/images/ico_score_item_correct.svg";
import icoScoreItemIncorrect from "../assets/images/ico_score_item_incorrect.svg";
import icoScoreItemBook from "../assets/images/ico_score_item_book.svg";
import icoScoreItemInfo from "../assets/images/ico_score_item_info.svg";
import icoScoreItemExit from "../assets/images/ico_score_item_exit.svg";

export default function QuizHeader(props) {
  const { currentQuizNo, totalQuizNo, ChangeItem } = useContext(QuizContext);
  const quizProgress = (currentQuizNo / totalQuizNo) * 100; // 퀴즈 진행율
  const lifeCount = props.lifeCount;
  const [scoreBoard, _scoreBoard] = useState(false);

  return (
    <>
      <div id="quiz-header">
        <div className="box">
          {/* 왼쪽 영역 */}
          <div className="left">
            <div className="quiz-info">
              <div className="quiz-number">
                <div className="current-number">
                  {currentQuizNo}
                  <span>/</span>
                </div>
                <div className="total-number">{totalQuizNo}</div>
              </div>
              <div className="life">
                <div className="ico-heart">
                  <img src={icoHeartOn} alt="" />
                </div>
                <div className="ico-heart">
                  <img src={icoHeartEmpty} alt="" />
                </div>
                <div className="ico-heart">
                  <img src={icoHeartEmpty} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* 오른쪽 영역 */}
          <div className="right">
            <div className="quiz-timer">
              <div className="ico-watch"></div>
              <div className="counter">00:00</div>
              <div
                className="btn-menu"
                onClick={() => {
                  _scoreBoard(true);
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <QuizProgress quizProgress={quizProgress} />
      {scoreBoard == true ? <StepScoreBoard _scoreBoard={_scoreBoard} /> : null}
    </>
  );
}

function QuizProgress(props) {
  return (
    <div className="quiz-progress">
      <div
        className="progress-bar"
        style={{ width: `${props.quizProgress}%` }}
      ></div>
    </div>
  );
}

function StepScoreBoard(props) {
  const { ChangeItem } = useContext(QuizContext);

  return (
    <div
      id="step-score-board"
      className="step-score-board animate__animated animate__fadeIn"
    >
      <div id="board" className="board animate__animated animate__slideInRight">
        <div className="sec1">
          <div className="delete-bar">
            <div
              className="btn-delete"
              onClick={() => {
                ChangeItem(
                  "board",
                  "board animate__animated animate__slideOutRight"
                );
                ChangeItem(
                  "step-score-board",
                  "step-score-board animate__animated animate__fadeOut"
                );
                setTimeout(() => {
                  props._scoreBoard(false);
                }, 300);
              }}
            >
              <img src={icoDeleteWhite} alt="" />
            </div>
          </div>
          <div className="book-info">
            <div className="book-code">EB-KA-001</div>
            <div className="book-title">Aligators Apples</div>
          </div>
          <div className="step-info">
            <div className="step on">Step1</div>
            <div className="step">2</div>
            <div className="step">3</div>
            <div className="step">4</div>
            <div className="step">5</div>
          </div>
          <div className="score-info">
            <div className="quiz-type">Listening Activity</div>
            <div className="score">
              <div className="score-row header">
                <div className="score-col">Q</div>
                <div className="score-col">1st</div>
                <div className="score-col">2nd</div>
              </div>
              <div className="score-row">
                <div className="score-col">1</div>
                <div className="score-col">
                  <img src={icoScoreItemCorrect} alt="" />
                </div>
                <div className="score-col">
                  <img src={icoScoreItemIncorrect} alt="" />
                </div>
              </div>
              <div className="score-row">
                <div className="score-col">2</div>
                <div className="score-col">
                  <img src={icoScoreItemCorrect} alt="" />
                </div>
                <div className="score-col">
                  <img src={icoScoreItemIncorrect} alt="" />
                </div>
              </div>
              <div className="score-row">
                <div className="score-col">3</div>
                <div className="score-col">
                  <img src={icoScoreItemCorrect} alt="" />
                </div>
                <div className="score-col">
                  <img src={icoScoreItemIncorrect} alt="" />
                </div>
              </div>
              <div className="score-row">
                <div className="score-col">4</div>
                <div className="score-col">
                  <img src={icoScoreItemCorrect} alt="" />
                </div>
                <div className="score-col">
                  <img src={icoScoreItemIncorrect} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec2">
          <div className="btn-go-to-story">
            <img src={icoScoreItemBook} alt="" />
            <div className="txt">Story</div>
          </div>
          <div className="btn-book-info">
            <img src={icoScoreItemInfo} alt="" />
            <div className="txt">Book Info</div>
          </div>
          <div className="btn-exit">
            <img src={icoScoreItemExit} alt="" />
            <div className="txt">Exit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

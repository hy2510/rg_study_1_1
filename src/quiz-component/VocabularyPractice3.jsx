import { useState, useEffect, useContext, useRef } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";
import BtnPlay from "../quiz-module/BtnPlay";
import PenaltyVocabulary from "../quiz-module/PenaltyVocabulary";

import icoReturn from "../assets/images/ico_return.svg";
import icoChevRightSmBlue from "../assets/images/ico_chev_right_sm_blue.svg";

export default function VocabularyPractice3() {
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
  const speechPart = stepQuizData[quizNumber - 1].SpeechPart;
  const Korean = stepQuizData[quizNumber - 1].Korean;
  const Chinese = stepQuizData[quizNumber - 1].Chinese;
  const Japanese = stepQuizData[quizNumber - 1].Japanese;
  const Vietnamese = stepQuizData[quizNumber - 1].Vietnamese;
  const Indonesian = stepQuizData[quizNumber - 1].Indonesian;
  const English = stepQuizData[quizNumber - 1].English;
  const Britannica = stepQuizData[quizNumber - 1].Britannica;
  const [word, _word] = useState([]);
  const getWordOrg = () => {
    let wordOrg = [];
    stepQuizData.map((a, i) => {
      wordOrg.push(a.Word);
    });
    _word(wordOrg);
  };
  useEffect(() => {
    getWordOrg();
  }, []);

  // 퀴즈문제 - 단어뜻
  const [meaning1st, _meaning1st] = useState();
  const [meaning2nd, _meaning2nd] = useState();
  useEffect(() => {
    _meaning1st(Korean);
    _meaning2nd(English);
  }, [quizNumber]);

  // 퀴즈풀이 - 인풋에 입력한 값
  const [inputValue, _inputValue] = useState("");

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 포커스
  const searchElement = useRef(null);
  useEffect(() => {
    if (searchElement.current) {
      searchElement.current.focus();
    }
  }, []);

  // 정답체크
  const skipFlow = () => {
    _quizItemsFx("");
    setTimeout(() => {
      nextQuestionSound.play();
      _inputValue("");
      _quizNumber(quizNumber + 1);
      _currentQuizNo(quizNumber + 1);
      ChangeItem("typing", "typing");
      ChangeItem("screen-block", "");
      _quizItemsFx("animate__fadeInRight");
    }, 100);
  };
  function Assessment() {
    if (inputValue == word[quizNumber - 1]) {
      correctSound.play();
      ChangeItem("screen-block", "screen-block");
      if (quizNumber < totalQuizNo) {
        ChangeItem("typing", "typing animate__animated animate__flash");
        setTimeout(() => {
          skipFlow();
        }, 2000);
      } else {
        ChangeItem("typing", "typing animate__animated animate__flash");
        setTimeout(() => {
          ChangeItem("typing", "typing");
          ChangeItem("screen-block", "");
        }, 2000);
      }
    } else {
      incorrectSound.play();
      ChangeItem("typing", "typing animate__animated animate__shakeX");
      setTimeout(() => {
        _inputValue("");
        ChangeItem("typing", "typing");
        ChangeItem("screen-block", "");
      }, 2000);
    }
  }

  return (
    <>
      <div id="vocabulary-practice-3">
        <QuizBody step={2} quizType={"Vocabulary Practice"}>
          <QuizContentsTop>
            <div className={`question animate__animated ${quizItemsFx}`}>
              <BtnPlay />
            </div>
            <div className={`voca-box animate__animated ${quizItemsFx}`}>
              <div className="voca-item">
                <div id="typing" className="typing">
                  <input
                    type="text"
                    value={inputValue}
                    ref={searchElement}
                    onFocus={(e) => e.currentTarget.select()}
                    onChange={(e) => _inputValue(e.target.value)}
                    onKeyUp={(e) => {
                      if (window.event.keyCode == 13) {
                        Assessment();
                      }
                    }}
                    autoFocus
                  ></input>
                  <div className="bg-text">{word[quizNumber - 1]}</div>
                  <div className="remain">
                    <div
                      className="enter"
                      onClick={() => {
                        Assessment();
                      }}
                    >
                      1/2 <img src={icoReturn} alt="" />
                    </div>
                  </div>
                </div>
                <div className="sentence">
                  {speechPart}. {meaning1st}
                </div>
                <div className="translation">
                  {speechPart}. {meaning2nd}
                </div>
              </div>
            </div>
            {/* <PenaltyVocabulary /> */}
          </QuizContentsTop>
          <QuizContents>
            <div className="skip">
              <button
                onClick={() => {
                  skipFlow();
                }}
              >
                Skip <img src={icoChevRightSmBlue} alt="" />
              </button>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
      <div id="screen-block"></div>
    </>
  );
}

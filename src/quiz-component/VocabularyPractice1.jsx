import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";
import BtnPlay from "../quiz-module/BtnPlay";

export default function VocabularyPractice1() {
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
      wordOrg.push(a.CorrectText);
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

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 퀴즈풀이 - 카드 넘기기
  const [cardOrder, _cardOrder] = useState(0);
  const [studyDone, _studyDone] = useState(false);
  const nextSound = () => {
    nextQuestionSound.pause();
    nextQuestionSound.currentTime = 0;
    setTimeout(() => {
      nextQuestionSound.play();
    }, 1);
  };
  function CardHandingOver(e) {
    if (e == "right") {
      if (cardOrder < word.length && cardOrder >= 0) {
        nextSound();
        _quizItemsFx("animate__fadeOutLeft");
        if (studyDone !== true) {
          _currentQuizNo(currentQuizNo + 1);
        }
        if (cardOrder == word.length - 2) {
          _studyDone(true);
        }
        setTimeout(() => {
          _cardOrder(cardOrder + 1);
          _quizItemsFx("animate__fadeInRight");
        }, 100);
        if (cardOrder == word.length - 1) {
          _quizItemsFx("animate__fadeOutLeft");
          setTimeout(() => {
            _cardOrder(0);
            _quizItemsFx("animate__fadeInRight");
          }, 100);
        }
      } else {
        return;
      }
    }
    if (e == "left") {
      if (studyDone != true) {
        return;
      }
      if (cardOrder < word.length && cardOrder >= 0) {
        _quizItemsFx("animate__fadeOutRight");
        nextSound();
        setTimeout(() => {
          _cardOrder(cardOrder - 1);
          _quizItemsFx("animate__fadeInLeft");
        }, 100);
        if (cardOrder == 0) {
          _quizItemsFx("animate__fadeOutRight");
          setTimeout(() => {
            _cardOrder(word.length - 1);
            _quizItemsFx("animate__fadeInLeft");
          }, 100);
        }
      } else {
        return;
      }
    }
  }

  return (
    <>
      <div id="vocabulary-practice-1">
        <QuizBody step={2} quizType={"Vocabulary Practice"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay
                audio={`https://wcfresource.a1edu.com/newsystem/sound/words/${word[cardOrder]}.mp3`}
              />
              <div className="next">
                {studyDone ? (
                  <button className="btn-gloss-blue animate__animated animate__rubberBand">
                    Next
                  </button>
                ) : // <button className="btn-gloss-gray">Next</button>
                null}
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="voca-box">
              <div
                className={`btn-chev ${studyDone ? "left" : null}`}
                onClick={() => {
                  CardHandingOver("left");
                }}
              ></div>
              <div className="voca-item">
                <div
                  className={`items animate__animated ${quizItemsFx}`}
                  onClick={() => {
                    let audio = new Audio(
                      `https://wcfresource.a1edu.com/newsystem/sound/words/${word[cardOrder]}.mp3`
                    );
                    audio.pause();
                    audio.currentTime = 0;
                    setTimeout(() => {
                      audio.play();
                    }, 1);
                  }}
                >
                  <div className="voca-image">
                    <img
                      src={`https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-2-${
                        cardOrder + 1
                      }.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="word">{word[cardOrder]}</div>
                </div>
                <div className="voca-item-indicator">
                  {word.map((a, i) => {
                    return (
                      <div
                        key={i}
                        className={`dot ${cardOrder == i ? "on" : null}`}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div
                className="btn-chev right"
                onClick={() => {
                  CardHandingOver("right");
                }}
              ></div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

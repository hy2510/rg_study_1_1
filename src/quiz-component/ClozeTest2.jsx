import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import StepIntro from "../quiz-module/StepIntro";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";
import PenaltyClozeTest from "../quiz-module/PenaltyClozeTest";

export default function ClozeTest2() {
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
  const correctText = stepQuizData[quizNumber - 1].Question;
  const correctAnswer = ["shaking", "afraid"];
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

  // 퀴즈문제 - example
  const [word, _word] = useState([]);
  const [자르기결과, _자르기결과] = useState([]);
  let 퀘스천 = correctText.replace(/┐./g, 퀘스천편집);
  function 퀘스천편집(e) {
    if (e == "┐.") {
      return "┐ .";
    }
    if (e == "┐,") {
      return "┐ ,";
    }
    if (e == "┐!") {
      return "┐ !";
    }
    if (e == "┐?") {
      return "┐ ?";
    } else {
      return "┐ ";
    }
  }
  const 자르기 = 퀘스천.split(" ");

  useEffect(() => {
    _자르기결과(자르기);
  }, []);

  // 퀴즈풀이 - Input에 입력한 값
  const [inputValue, _inputValue] = useState("");

  // 트랜지션
  const [quizItemsFx, _quizItemsFx] = useState();

  // 정답체크
  let inputId = [];
  const [inputOrder, _inputOrder] = useState(0);
  const Assessment = (n) => {
    if (inputValue == correctAnswer[n]) {
      if (quizNumber < totalQuizNo) {
        alert("정답입니다.");
        // _quizNumber(quizNumber + 1);
        // _inputValue("");
        // _currentQuizNo(quizNumber + 1);
      } else {
        _inputValue("");
        alert("참 잘했어요!");
        return;
      }
    } else {
      alert("틀렸습니다.");
    }
  };

  // Test Result
  const [testResultOn, _testResultOn] = useState(false);

  return (
    <>
      <div id="cloze-test-2">
        <QuizBody step={4} quizType={"Cloze Test"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay />
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="sentence-box">
              {자르기결과.map((a, i) => {
                if (a == `┐`) {
                  inputId.push(`box-${i}`);
                }
                return (
                  <div key={i} className="sentence-item">
                    {a == `┐` ? (
                      <div className="typing">
                        <input
                          id={`box-${i}`}
                          type="text"
                          onChange={(e) => _inputValue(e.target.value)}
                        />
                      </div>
                    ) : (
                      a
                    )}
                  </div>
                );
              })}
            </div>
            {/* <PenaltyClozeTest /> */}
          </QuizContents>
          <div className="bottom-space"></div>
        </QuizBody>
      </div>
      <SignCorrect />
      <SignIncorrect />
      {testResultOn == true ? <ModalTestResult /> : null}
      <div id="screen-block"></div>
    </>
  );
}

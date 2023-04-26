import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect, createContext } from "react";
export const QuizContext = createContext();

// 스타일
import "./sass/App.scss";
import "animate.css";

// 퀴즈 유형
import ListeningActivity1 from "./quiz-component/ListeningActivity1"; // * quizDataKa
import ListeningActivity2 from "./quiz-component/ListeningActivity2";
import ListeningActivity3 from "./quiz-component/ListeningActivity3";
import ListeningActivity4 from "./quiz-component/ListeningActivity4";
import ReadingComprehension1 from "./quiz-component/ReadingComprehension1";
import ReadingComprehension2 from "./quiz-component/ReadingComprehension2";
import ReadingComprehension3 from "./quiz-component/ReadingComprehension3";
import ReadingComprehension4 from "./quiz-component/ReadingComprehension4"; // * quizData2a
import VocabularyPractice1 from "./quiz-component/VocabularyPractice1"; // * quizDataKa
import VocabularyPractice2 from "./quiz-component/VocabularyPractice2";
import VocabularyPractice3 from "./quiz-component/VocabularyPractice3"; // * quizData2a
import VocabularyPractice4 from "./quiz-component/VocabularyPractice4";
import VocabularyTest1 from "./quiz-component/VocabularyTest1";
import VocabularyTest2 from "./quiz-component/VocabularyTest2";
import VocabularyTest3 from "./quiz-component/VocabularyTest3";
import VocabularyTest4 from "./quiz-component/VocabularyTest4";
import Summary1 from "./quiz-component/Summary1"; // * quizData2a
import Summary2 from "./quiz-component/Summary2";
import TrueFalse from "./quiz-component/TrueFalse";
import ClozeTest1 from "./quiz-component/ClozeTest1"; // * quizData2a (진행중..)
import ClozeTest2 from "./quiz-component/ClozeTest2";
import WrtingActivity1 from "./quiz-component/WritingActivity1"; // * quizDataKa
import WrtingActivity2 from "./quiz-component/WritingActivity2"; // * quizData2a
import Sample from "./quiz-component/Sample";
import QuizHeader from "./quiz-module/QuizHeader";
import StepIntro from "./quiz-module/StepIntro";

// 퀴즈 효과 사운드
import correctMp3 from "./assets/sound/correct_sound.mp3";
import incorrectMp3 from "./assets/sound/inccorect_sound.mp3";
import testResultMp3 from "./assets/sound/test_result_sound.mp3";
import nextQuestion from "./assets/sound/next_question.mp3";

// (샘플) 퀴즈 데이터 가져오기
import quizDataKa from "./assets/sample-data/eb-ka-001.json";
import quizData2a from "./assets/sample-data/eb-2a-028.json";

export default function App() {
  // 퀴즈 효과 사운드
  const correctSound = new Audio(correctMp3);
  const incorrectSound = new Audio(incorrectMp3);
  const testResultSound = new Audio(testResultMp3);
  const nextQuestionSound = new Audio(nextQuestion);

  //
  //
  //
  //
  // (샘플) 선택한 BR 학습의 전체 퀴즈 데이터 가져오기 (quizDataKa, quizData2a)
  const [getQuizData, _getQuizData] = useState(quizData2a);

  // (샘플) 전체 퀴즈 데이터에서 진행중인 순서에 해당하는 스텝 정보
  const [stepOrder, _stepOrder] = useState("step5");

  // 퀴즈 테마
  /* KA themes: theme-jungle, theme-antarctica, theme-zoo-1, theme-zoo-2 */
  /* KB, KC themes: theme-forest, theme-kids-room, theme-space, theme-farm, */
  /* 1A 이상 themes: theme-season-spring, theme-season-summer, theme-season-autumn, theme-season-winter, theme-playground, theme-camping */
  const [quizTheme, _quizTheme] = useState("theme-season-spring");

  //
  //
  //
  //
  // (샘플) 현재 스텝의 퀴즈 유형
  function QuizType() {
    switch (getQuizData) {
      case quizDataKa:
        switch (stepOrder) {
          case "step1":
            return <ListeningActivity2 />;
            break;
          case "step2":
            return <VocabularyPractice1 />;
            break;
          case "step3":
            return <ReadingComprehension1 />;
            break;
          case "step4":
            return <WrtingActivity1 />;
            break;
        }
      case quizData2a:
        switch (stepOrder) {
          case "step1":
            return <ReadingComprehension4 />;
            break;
          case "step2":
            return <VocabularyTest3 />;
            break;
          case "step3":
            return <Summary1 />;
            break;
          case "step4":
            return <ClozeTest2 />;
            break;
          case "step5":
            return <WrtingActivity2 />;
            break;
        }
    }
  }

  // 진행중인 스텝의 퀴즈 데이터
  const [stepQuizData, _stepQuizData] = useState(
    getQuizData.filter((e) => e.Step === stepOrder)
  );

  // 진행중인 스텝의 현재 문제 번호 (QuizHeader에 표시)
  const [currentQuizNo, _currentQuizNo] = useState();

  // 진행중인 스텝의 전체 문제 갯수
  const [totalQuizNo, _totalQuizNo] = useState();

  // 이벤트 감지 및 업데이트 - 시작할 문제 번호가 없는 경우 1번 문제부터 업데이트
  useEffect(() => {
    currentQuizNo == null ? _currentQuizNo(stepQuizData[0].QuizNo) : null;
    _totalQuizNo(stepQuizData.length);
  });

  // 선택자 - className 편집
  let ChangeItem = (id, className) => {
    return (document.getElementById(id).className = className);
  };

  return (
    <>
      <QuizContext.Provider
        value={{
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
        }}
      >
        <div className={quizTheme}>
          <QuizHeader />
          {QuizType()}
        </div>
      </QuizContext.Provider>
    </>
  );
}

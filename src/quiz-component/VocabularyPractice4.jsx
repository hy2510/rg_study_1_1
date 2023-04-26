import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function VocabularyPractice4() {
  return (
    <>
      <div id="vocabulary-practice-4">
        <QuizBody step={2} quizType={"Vocabulary Practice"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay />
              <div className="next">
                <button className="btn-gloss-blue">Next</button>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="quiz-contents">
              <div className="voca-box">
                <div className="btn-chev left"></div>
                <div className="voca-item">
                  <div className="voca-contents">
                    <div className="word">scared</div>
                    <div className="sentence">abj. 겁에 질린, 무서워하는</div>
                    <div className="translation">abj. afraid of something</div>
                  </div>
                  <div className="voca-item-indicator">
                    <div className="dot on"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="btn-chev right"></div>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

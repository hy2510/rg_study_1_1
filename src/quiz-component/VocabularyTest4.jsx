import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function VocabularyTest4() {
  return (
    <>
      <div id="vocabulary-test-4">
        <QuizBody step={2} quizType={"Vocabulary Test"}>
          <QuizContentsTop>
            <div className="voca-box">
              <div className="voca-item">
                <div className="voca-contents">
                  <div className="sentence">abj. 겁에 질린, 무서워하는</div>
                  <div className="translation">abj. afraid of something</div>
                </div>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item animate__animated">
                <div className="number">1</div>
                <span>watch</span>
              </div>
              <div className="answer-item animate__animated">
                <div className="number">2</div>
                <span>sleep</span>
              </div>
              <div className="answer-item animate__animated">
                <div className="number">3</div>
                <span>clean</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

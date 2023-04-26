import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function VocabularyTest2() {
  return (
    <>
      <div id="vocabulary-test-2">
        <QuizBody step={2} quizType={"Vocabulary Test"}>
          <QuizContentsTop>
            <div className="voca-box">
              <div className="voca-item">
                <div className="voca-image">
                  <img
                    src="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-009/eb-ka-009-2-4.jpg"
                    alt=""
                  />
                </div>
                <div className="sentence">
                  The<span className="blank">?</span>is holding a mouse.
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

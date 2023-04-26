import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function VocabularyTest1() {
  return (
    <>
      <div id="vocabulary-test-1">
        <QuizBody step={2} quizType={"Vocabulary Test"}>
          <QuizContentsTop>
            <div className="voca-box">
              <div className="voca-image">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-2-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item animate__animated">
                <div className="number">1</div>
                <span>apple</span>
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

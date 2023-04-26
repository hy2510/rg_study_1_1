import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function ReadingComprehension2() {
  return (
    <>
      <div id="reading-comprehension-2">
        <QuizBody step={3} quizType={"Reading Comprehension"}>
          <QuizContentsTop>
            <div className="question">
              <div className="quiz-image">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/kb-004/eb-kb-004-3-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item animate__animated animate__shakeX incorrect">
                <div className="number">1</div>
                <div className="listen"></div>
                <span>The mouse sees the monkey.</span>
              </div>
              <div className="answer-item">
                <div className="number">2</div>
                <div className="listen"></div>
                <span>A lion has a map.</span>
              </div>
              <div className="answer-item">
                <div className="number">3</div>
                <div className="listen"></div>
                <span>A lion has a map.</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

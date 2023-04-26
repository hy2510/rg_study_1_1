import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function ReadingComprehension1() {
  return (
    <>
      <div id="reading-comprehension-1">
        <QuizBody step={3} quizType={"Reading Comprehension"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay progNone={true} />
              <div className="quiz-sentence">The alligator has an ax!</div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-3-1-a2.png"
                  alt=""
                />
              </div>
              <div className="answer-item">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/ka-001/eb-ka-001-3-1-a1.png"
                  alt=""
                />
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

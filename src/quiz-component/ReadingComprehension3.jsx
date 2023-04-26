import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function ReadingComprehension3() {
  return (
    <>
      <div id="reading-comprehension-3">
        <QuizBody step={3} quizType={"Reading Comprehension"}>
          <QuizContentsTop>
            <div className="question">
              <div className="quiz-image">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-020/eb-1a-020-s3-q1.jpg"
                  alt=""
                />
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="sentence">
                What kind of class is Ms. Kitty's class?
              </div>
              <div className="answer-item animate__animated animate__shakeX ">
                <div className="number">1</div>
                <div className="listen"></div>
                <span>It's an art class.</span>
              </div>
              <div className="answer-item">
                <div className="number">2</div>
                <div className="listen on"></div>
                <span>It's a science class.</span>
                <div className="listen-progress"></div>
              </div>
              <div className="answer-item">
                <div className="number">3</div>
                <div className="listen"></div>
                <span>It's a gym class.</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

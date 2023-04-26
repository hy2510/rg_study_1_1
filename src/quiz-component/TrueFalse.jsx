import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function TrueFalse() {
  return (
    <>
      <div id="true-false">
        <QuizBody step={3} quizType={"True or False"}>
          <div></div>
          <QuizContentsTop>
            <div className="question">
              <div className="quiz-sentence">
                Why couldn't Little Rabbit get to sleep?
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item animate__animated animate__pulse correct">
                <span>True</span>
              </div>
              <div className="answer-item">
                <span>False</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

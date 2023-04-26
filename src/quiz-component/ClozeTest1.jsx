import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function ClozeTest1() {
  return (
    <>
      <div id="cloze-test-1">
        <QuizBody step={4} quizType={"Cloze Test"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay marginBottom={"15px"} />
              <div className="sentence-box">
                <div className="sentence-item">
                  A family went to the zoo by
                  <span>
                    {/* 순서on, correct, incorrect */}
                    <span className="blank on">?</span>
                  </span>
                  .
                </div>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item animate__animated animate__pulse correct">
                <div className="number">1</div>
                <span>car</span>
              </div>
              <div className="answer-item">
                <div className="number">2</div>
                <span>bicycle</span>
              </div>
              <div className="answer-item">
                <div className="number">3</div>
                <span>plane</span>
              </div>
              <div className="answer-item">
                <div className="number">4</div>
                <span>subway</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

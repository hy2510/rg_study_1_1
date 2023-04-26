import QuizHeader from "../quiz-module/QuizHeader";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import QuizBody from "../quiz-module/QuizBody";

export default function Summary2() {
  return (
    <>
      <div id="summary-2">
        <QuizBody step={3} quizType={"Summary"}>
          <QuizContentsTop>
            <div className="summary-sentence-box">
              <div className="summary-sentence-item">
                Ray and Herbie were
                <span>
                  {/* 순서on, correct, incorrect */}
                  <span className="blank on">1</span>
                </span>
                . Ray was busy
                <span className="blank">2</span> of Shadow and killing them when
                the girls walked by. They were on their way to the pet show, the
                prizes were Burger Paradise coupons. Yummy. Both Ray and Herbie
                wanted hamburgers, but they were not going to the pet show to
                participate. They just wanted to
                <span className="blank">3</span>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="ico-up"></div>
            <div className="answer-list">
              <div className="answer-item animate__animated">
                <div className="number">1</div>
                <span>sitting outside the house</span>
              </div>
              <div className="answer-item animate__animated">
                <div className="number">2</div>
                <span>picking ticks off</span>
              </div>
              <div className="answer-item animate__animated">
                <div className="number">3</div>
                <span>picking ticks off</span>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

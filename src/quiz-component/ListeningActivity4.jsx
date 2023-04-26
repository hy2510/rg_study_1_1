import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function ListeningActivity4() {
  return (
    <>
      <div id="listening-activity-4">
        <QuizBody step={1} quizType={"Listening Activity"}>
          <QuizContentsTop>
            <div className="question">
              <div className="quiz-image">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/1b-334/eb-1b-334-s1-q1.png"
                  alt=""
                />
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item">
                <div className="number">1</div>
                <div className="listen"></div>
                <div className="space"></div>
              </div>
              <div className="answer-item">
                <div className="number">2</div>
                <div className="listen"></div>
                <div className="space"></div>
              </div>
              <div className="answer-item">
                <div className="number">3</div>
                <div className="listen"></div>
                <div className="space"></div>
              </div>
            </div>
          </QuizContents>
          {/* <div className="enter">
            <button className="btn-gloss-blue off">Enter</button>
          </div> */}
        </QuizBody>
      </div>
    </>
  );
}

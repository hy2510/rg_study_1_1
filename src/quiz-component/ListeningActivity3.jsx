import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function ListeningActivity3() {
  return (
    <>
      <div id="listening-activity-3">
        <QuizBody step={1} quizType={"Listening Activity"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay />
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-020/eb-1a-020-1-1-a1.png"
                  alt=""
                />
              </div>
              <div className="answer-item">
                <img
                  src="https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-020/eb-1a-020-1-1-a2.png"
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

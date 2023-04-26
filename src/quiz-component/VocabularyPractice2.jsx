import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";

export default function VocabularyPractice2() {
  return (
    <>
      <div id="vocabulary-practice-2">
        <QuizBody step={2} quizType={"Vocabulary Practice"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay />
              <div className="next">
                <button className="btn-gloss-blue">Next</button>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="voca-box">
              <div className="btn-chev left"></div>
              <div className="voca-item">
                <div className="voca-image">
                  <img
                    src="https://wcfresource.a1edu.com/newsystem/image/br/eb/1a-001/eb-1a-001-s2-q1.jpg"
                    alt=""
                  />
                </div>

                <div className="word">secret</div>
                <div className="sentence">
                  I'm telling my friend a <b>secret</b>.
                </div>
                <div className="voca-item-indicator">
                  <div className="dot on"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="btn-chev right"></div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
    </>
  );
}

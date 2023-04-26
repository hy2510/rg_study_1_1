import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";
import icoReturn from "../assets/images/ico_return.svg";
import icoChevRightSmBlue from "../assets/images/ico_chev_right_sm_blue.svg";

import {
  PopupVocaHint1,
  PopupVocaHint2,
  PopupVocaHint3,
  PopupVocaHint4,
} from "../quiz-module/PopupVocaHint";

export default function VocabularyTest3() {
  return (
    <>
      <div id="vocabulary-test-3">
        <QuizBody step={2} quizType={"Vocabulary Test"}>
          <QuizContentsTop>
            <div className="voca-box">
              <div className="voca-item">
                <div className="typing">
                  <input
                    type="text"
                    class="js-kioskboard-input"
                    data-kioskboard-type="all"
                    data-kioskboard-placement="top"
                    data-kioskboard-specialcharacters="true"
                  ></input>
                  <div className="remain">
                    <div className="enter">
                      <img src={icoReturn} alt="" />
                    </div>
                  </div>
                </div>
                <div className="sentence">abj. 겁에 질린, 무서워하는</div>
                <div className="translation">abj. afraid of something</div>
              </div>
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="hint">
              <button>Hint 2/2</button>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
      {/* <PopupVocaHint3 /> */}
    </>
  );
}

import icoScoreItemCorrect from "../assets/images/ico_score_item_correct_dark.svg";
import icoScoreItemIncorrect from "../assets/images/ico_score_item_incorrect_dark.svg";

export default function ModalTestResult() {
  return (
    <div id="modal-test-result" className="animate__animated animate__fadeIn">
      <div id="box" className="box">
        <div className="img-leaf"></div>
        <div className="box-header">Test Result</div>
        <div className="box-body">
          <div className="total-sum">
            <span>70</span>%
          </div>
          <div className="total-score">
            <div className="sign">
              <div className="txt">Correct</div>
              <div className="score">7</div>
            </div>
            <div className="sign">
              <div className="txt">Incorrect</div>
              <div className="score">3</div>
            </div>
          </div>
          <div className="score-board">
            <div className="score-row header">
              <div className="score-col">Q</div>
              <div className="score-col">1st</div>
              <div className="score-col">2nd</div>
            </div>
            <div className="score-row">
              <div className="score-col">1</div>
              <div className="score-col">
                <img src={icoScoreItemCorrect} alt="" />
              </div>
              <div className="score-col">
                <img src={icoScoreItemIncorrect} alt="" />
              </div>
            </div>
            <div className="score-row">
              <div className="score-col">2</div>
              <div className="score-col">
                <img src={icoScoreItemCorrect} alt="" />
              </div>
              <div className="score-col">
                <img src={icoScoreItemIncorrect} alt="" />
              </div>
            </div>
            <div className="score-row">
              <div className="score-col">3</div>
              <div className="score-col">
                <img src={icoScoreItemCorrect} alt="" />
              </div>
              <div className="score-col">
                <img src={icoScoreItemIncorrect} alt="" />
              </div>
            </div>
            <div className="score-row">
              <div className="score-col">4</div>
              <div className="score-col">
                <img src={icoScoreItemCorrect} alt="" />
              </div>
              <div className="score-col">
                <img src={icoScoreItemIncorrect} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-gloss-brown">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

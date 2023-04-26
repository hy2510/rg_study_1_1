import icoScoreItemCorrect from "../assets/images/ico_score_item_correct_dark.svg";
import icoScoreItemIncorrect from "../assets/images/ico_score_item_incorrect_dark.svg";

export default function ModalRevisionStatus() {
  return (
    <div
      id="modal-revision-status"
      className="animate__animated animate__fadeIn"
    >
      <div id="box" className="box">
        <div className="img-leaf"></div>
        <div className="box-header">STEP5</div>
        <div className="box-body">
          <div className="title">Writing Activity</div>

          <div className="score-board">
            <div className="score-row header"></div>
            <div className="score-row">
              <div className="score-col">목표첨삭</div>
              <div className="score-col">2</div>
            </div>
            <div className="score-row">
              <div className="score-col">완료첨삭</div>
              <div className="score-col">2</div>
            </div>
            <div className="score-row">
              <div className="score-col">남은첨삭</div>
              <div className="score-col">2</div>
            </div>
          </div>
          <div className="question">글쓰기를 하시겠습니까?</div>
          <div className="buttons">
            <div className="btn-gloss-gray">
              <button>PASS</button>
            </div>
            <div className="btn-gloss-brown">
              <button>GO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

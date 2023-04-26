export default function ModalWritingActivity() {
  return (
    <div id="modal-writing-activity">
      <div className="box animate__animated animate__fadeInDown">
        <div className="img-leaf"></div>
        <div className="box-header">Writing Activity</div>
        <div className="box-body">
          <div className="score-board">
            <div className="score-row header">Revision</div>
            <div className="score-row">
              <div className="score-col">목표 첨삭</div>
              <div className="score-col">4</div>
            </div>
            <div className="score-row">
              <div className="score-col">완료 첨삭</div>
              <div className="score-col">0</div>
            </div>
            <div className="score-row">
              <div className="score-col">남은 첨삭</div>
              <div className="score-col">0</div>
            </div>
          </div>
          <div className="comment">글쓰기를 하시겠습니까?</div>
          <div className="btn-group">
            <div className="btn-gloss-gray">
              <button>Pass</button>
            </div>
            <div className="btn-gloss-brown">
              <button>GO!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

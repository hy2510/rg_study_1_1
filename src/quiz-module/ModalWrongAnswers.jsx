export default function ModalWrongAnswers() {
  return (
    <div id="modal-wrong-answers">
      <div className="box">
        <div className="img-leaf"></div>
        <div className="box-header">Wrong Answers</div>
        <div className="box-body">
          <div className="question">
            4. How does Joon feel about the new teacher?
          </div>
          <div className="answer-list">
            <div className="answer-item">
              <span>1</span>
              <div className="txt">He is joyfull.</div>
            </div>
            <div className="answer-item user-choice">
              <span>2</span> He is happy.
            </div>
            <div className="answer-item">
              <span>3</span> He is scared.
            </div>
            <hr />
            <div className="correct-answer">
              Correct Answer <span>3</span>
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

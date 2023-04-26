import BtnPlay from "../quiz-module/BtnPlay";

export default function ModalTrueSentence() {
  return (
    <div id="modal-true-sentence">
      <div className="box animate__animated animate__fadeInDown">
        <div className="img-leaf"></div>
        <div className="box-header">True Sentence</div>
        <div className="box-body">
          <BtnPlay />
          <div className="sentence">
            Bears sleep for a long time in the winter.
          </div>
          <div className="btn-gloss-brown">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

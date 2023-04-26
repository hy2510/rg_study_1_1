import BtnPlay from "./BtnPlay";

export default function ModalCorrectSentence() {
  return (
    <div id="modal-correct-sentence">
      <div className="box animate__animated animate__fadeInDown">
        <div className="img-leaf"></div>
        <div className="box-header">Correct Sentence</div>
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

import BtnPlay from "./BtnPlay";
import IcoDeleteBrown from "../assets/images/ico_delete_brown.svg";

export function PopupVocaHint1() {
  return (
    <div id="popup-voca-hint-1">
      <div className="box animate__animated animate__fadeInDown">
        <div className="box-header">
          <span>Hint</span>
          <div className="btn-delete">
            <img src={IcoDeleteBrown} alt="" />
          </div>
        </div>
        <div className="box-body">
          <div className="voca-txt">honesty</div>
          <div className="voca-txt">possible</div>
          <div className="voca-txt">medical</div>
          <div className="voca-txt">pretend</div>
        </div>
      </div>
    </div>
  );
}

export function PopupVocaHint2() {
  return (
    <div id="popup-voca-hint-2">
      <div className="box animate__animated animate__fadeInDown">
        <div className="box-header">
          <span>Hint</span>
          <div className="btn-delete">
            <img src={IcoDeleteBrown} alt="" />
          </div>
        </div>
        <div className="box-body">
          <div className="voca-txt">h</div>
          <div className="voca-txt">o</div>
          <div className="voca-txt">y</div>
          <div className="voca-txt">e</div>
          <div className="voca-txt">n</div>
          <div className="voca-txt">t</div>
          <div className="voca-txt">S</div>
        </div>
      </div>
    </div>
  );
}

export function PopupVocaHint3() {
  return (
    <div id="popup-voca-hint-3">
      <div className="box animate__animated animate__fadeInDown">
        <div className="box-header">
          <span>Hint</span>
          <div className="btn-delete">
            <img src={IcoDeleteBrown} alt="" />
          </div>
        </div>
        <div className="box-body">
          <div className="voca-txt">h</div>
          <div className="voca-txt">*</div>
          <div className="voca-txt">*</div>
          <div className="voca-txt">*</div>
          <div className="voca-txt">*</div>
          <div className="voca-txt">*</div>
          <div className="voca-txt">*</div>
        </div>
      </div>
    </div>
  );
}

export function PopupVocaHint4() {
  return (
    <div id="popup-voca-hint-4">
      <div className="box animate__animated animate__fadeInDown">
        <div className="box-header">
          <span>Hint</span>
          <div className="btn-delete">
            <img src={IcoDeleteBrown} alt="" />
          </div>
        </div>
        <div className="box-body">
          <div className="box-btn-play">
            <BtnPlay progNone={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

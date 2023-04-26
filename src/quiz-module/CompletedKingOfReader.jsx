import img_confetti_l from "../assets/images/completed/img_confetti_l.svg";
import img_confetti_r from "../assets/images/completed/img_confetti_r.svg";
import img_trophy_sample from "../assets/images/completed/img_trophy_sample.svg";

export default function CompletedDailyGoal() {
  return (
    <div id="completed-king-of-reader">
      <div className="box">
        <div className="reward-item">
          <div className="items">
            <div className="confetti-box">
              <img
                src={img_confetti_l}
                alt=""
                className="animate__animated animate__fadeOutTopLeft"
              />
            </div>
            <div className="item-box">
              <img src={img_trophy_sample} alt="" />
            </div>
            <div className="confetti-box">
              <img
                src={img_confetti_r}
                alt=""
                className="animate__animated animate__fadeOutTopRight"
              />
            </div>
          </div>
        </div>
        <div className="reward-detail">
          <div className="title">영어 독서왕</div>
          <div className="sentence">
            영어 독서왕 대회에서 우수상을 획득했습니다.
          </div>
          <div className="sentence"></div>
          <div className="btn-gloss-blue">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

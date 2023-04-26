import img_confetti_l from "../assets/images/completed/img_confetti_l.svg";
import img_confetti_r from "../assets/images/completed/img_confetti_r.svg";
import img_point_bg from "../assets/images/completed/img_point_bg.svg";

export default function CompletedEarnPoint() {
  return (
    <div id="completed-earn-point">
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
              <div className="earn-points">
                <div className="point">1.5</div>
                <div className="text">Point</div>
              </div>
              <img src={img_point_bg} alt="" />
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
          <div className="title">Earn Points!</div>
          <div className="sentence">1.5P를 획득했습니다.</div>
          <div className="sentence">EB-KA-001 Alligators Apples</div>
          <div className="btn-gloss-blue">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

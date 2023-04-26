import img_confetti_l from "../assets/images/completed/img_confetti_l.svg";
import img_confetti_r from "../assets/images/completed/img_confetti_r.svg";
import img_level_master_badge_sample from "../assets/images/completed/img_level_master_badge_sample.svg";

export default function CompletedLevelMaster() {
  return (
    <div id="completed-level-master">
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
              <img src={img_level_master_badge_sample} alt="" />
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
          <div className="title">Level Master</div>
          <div className="sentence">Level KA를 완료 했습니다.</div>
          <div className="sentence">수고했어요!</div>
          <div className="sentence"></div>
          <div className="btn-gloss-blue">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

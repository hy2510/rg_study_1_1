import img_confetti_l from "../assets/images/completed/img_confetti_l.svg";
import img_confetti_r from "../assets/images/completed/img_confetti_r.svg";
import img_reading_unit_bg from "../assets/images/completed/img_reading_unit_bg.svg";

export default function CompletedOpenFriendsStory() {
  return (
    <div id="completed-open-friends-story">
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
              <img src={img_reading_unit_bg} alt="" />
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
          <div className="title">New Friends Story!</div>
          <div className="sentence">새로운 프렌즈 스토리가 오픈되었습니다.</div>
          <div className="sentence"></div>
          <div className="btn-gloss-blue">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

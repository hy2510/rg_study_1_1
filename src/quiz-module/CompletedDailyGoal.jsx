import img_confetti_l from "../assets/images/completed/img_confetti_l.svg";
import img_confetti_r from "../assets/images/completed/img_confetti_r.svg";
import img_daily_goal from "../assets/images/completed/img_daily_goal.svg";

export default function CompletedDailyGoal() {
  return (
    <div id="completed-daily-goal">
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
              <img src={img_daily_goal} alt="" />
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
          <div className="title">일일 목표 달성!</div>
          <div className="sentence">오늘의 학습 목표를 달성했습니다!</div>
          <div className="sentence"></div>
          <div className="btn-gloss-blue">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import icoSpeaker from "../assets/images/ico_speaker.svg";

export default function BtnPlay(props) {
  const audio = props.audio;
  const playSound = new Audio(audio);
  const start = () => {
    playSound.pause();
    playSound.currentTime = 0;
    setTimeout(() => {
      playSound.play();
    }, 1);
    const progressBar = document.getElementById("progress");
    progressBar.className = "";
    setTimeout(() => {
      progressBar.style.width = "0%";
      progressBar.style.display = "block";
    }, 200);
    playSound.addEventListener("timeupdate", (e) => {
      let { currentTime, duration } = e.target;
      let percent = (currentTime / duration) * 100;
      progressBar.style.width = `${percent}%`;
      progressBar.style.width = `100%`;
      if (playSound.ended) {
        progressBar.style.display = "none";
        progressBar.style.width = "0%";
      } else {
        return;
      }
    });
  };
  const progNone = props.progNone;
  const marginBottom = props.marginBottom;

  return (
    <>
      <div
        className="btn-play"
        onClick={start}
        style={{ marginBottom: marginBottom }}
      >
        <img src={icoSpeaker} alt="" />
        {progNone ? null : (
          <>
            <span className="progress-box">
              <span className="text">Listen</span>
            </span>
            <span id="progress" className="d-none"></span>
          </>
        )}
      </div>
    </>
  );
}

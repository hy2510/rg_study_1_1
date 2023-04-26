import { useState, useEffect, useRef } from "react";

export default function PenaltyClozeTest() {
  let textSize = useRef([]);
  let [textSizeRetrun, setTextSizeRetrun] = useState([]);
  useEffect(() => {
    return () => {
      setTextSizeRetrun([
        textSize.current[0].offsetWidth,
        textSize.current[1].offsetWidth,
      ]);
    };
  }, []);

  return (
    <>
      <div
        id="penalty-cloze-test"
        className="animate__animated animate__bounceInDown"
      >
        <div className="title">Review</div>
        <div className="sentence-box">
          <div className="sentence-item">
            <span>Wind told Little Rabbit to stoprunning, which </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[0] - 12}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[0] = e)}>
                scared
              </div>
            </span>
            <span> her. so badly she turned </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[1] - 12}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[1] = e)}>
                white
              </div>
            </span>
            <span>.</span>
          </div>
        </div>
        <div className="enter">
          <button className="btn-gloss-blue">Next</button>
        </div>
      </div>
    </>
  );
}

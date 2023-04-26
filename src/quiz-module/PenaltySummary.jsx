import { useState, useEffect, useRef } from "react";

export default function PenaltySummary() {
  let textSize = useRef([]);
  let [textSizeRetrun, setTextSizeRetrun] = useState([]);

  useEffect(() => {
    return () => {
      setTextSizeRetrun([
        textSize.current[0].offsetWidth,
        textSize.current[1].offsetWidth,
        textSize.current[2].offsetWidth,
        textSize.current[3].offsetWidth,
        textSize.current[4].offsetWidth,
        textSize.current[5].offsetWidth,
        textSize.current[6].offsetWidth,
        textSize.current[7].offsetWidth,
        textSize.current[8].offsetWidth,
        textSize.current[9].offsetWidth,
      ]);
    };
  }, []);

  return (
    <>
      <div
        id="penalty-summary"
        className=" animate__animated animate__bounceInDown"
      >
        <div className="title">Review</div>
        <div className="sentence-box">
          <div className="sentence-item">
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[0] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[0] = e)}>
                scared
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[1] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[1] = e)}>
                white
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[2] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[2] = e)}>
                scared
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[3] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[3] = e)}>
                white
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[4] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[4] = e)}>
                white
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[5] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[5] = e)}>
                white
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[6] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[6] = e)}>
                white
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[7] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[7] = e)}>
                scared
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[8] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[8] = e)}>
                scared
              </div>
            </span>
            <span className="typing">
              <input
                type="text"
                style={{ width: `${textSizeRetrun[9] - 10}px` }}
              ></input>
              <div className="bg-text" ref={(e) => (textSize.current[9] = e)}>
                scared
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

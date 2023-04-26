import { useState, useEffect, useContext } from "react";
import { QuizContext } from "../App";

import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import BtnPlay from "../quiz-module/BtnPlay";
import SignCorrect from "../quiz-module/SignCorrect";
import SignIncorrect from "../quiz-module/SignIncorrect";
import ModalTestResult from "../quiz-module/ModalTestResult";

export default function ListeningActivity2() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <>
      <div id="listening-activity-2">
        <QuizBody step={1} quizType={"Listening Activity"}>
          <QuizContentsTop>
            <div className="question">
              <BtnPlay />
            </div>
          </QuizContentsTop>
          <QuizContents>
            <div className="answer-list">
              <div className="answer-item">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/01_bluecat.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">ax</div>
              </div>
              <div className="answer-item">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/00_sleep.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">apple</div>
              </div>
              <div className="answer-item correct ">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/00_sleep.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">nest</div>
              </div>
              <div className="answer-item correct ">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/00_sleep.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">best</div>
              </div>
              <div className="answer-item correct ">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/00_sleep.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">ox</div>
              </div>
              <div className="answer-item">
                {isDarkMode ? (
                  <iframe
                    src="../html/cat/00_sleep.html"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "none", overflow: "hidden" }}
                  />
                ) : null}
                <div className="word">alligator</div>
              </div>
            </div>
          </QuizContents>
        </QuizBody>
      </div>
      <SignCorrect />
      <SignIncorrect />
      <div id="screen-block"></div>
    </>
  );
}

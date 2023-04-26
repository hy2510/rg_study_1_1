import QuizHeader from "../quiz-module/QuizHeader";
import QuizBody from "../quiz-module/QuizBody";
import { QuizContentsTop, QuizContents } from "../quiz-module/QuizBody";
import PenaltyClozeTest from "../quiz-module/PenaltyClozeTest";
import PenaltySummary from "../quiz-module/PenaltySummary";
import PenaltyVocabulary from "../quiz-module/PenaltyVocabulary";
import StepIntro from "../quiz-module/StepIntro";
import BtnPlay from "../quiz-module/BtnPlay";
import ModalCorrectSentence from "../quiz-module/ModalCorrectSentence";
import ModalTestResult from "../quiz-module/ModalTestResult";
import ModalTrueSentence from "../quiz-module/ModalTrueSentence";
import ModalWritingActivity from "../quiz-module/ModalWritingActivity";
import ModalWrongAnswers from "../quiz-module/ModalWrongAnswers";
import SignCorrect from "../quiz-module/SignCorrect";

export default function Sample() {
  return (
    <>
      <StepIntro />
      <QuizHeader />
      <QuizBody>
        <QuizContentsTop>
          <PenaltyVocabulary />
        </QuizContentsTop>
        {/* <QuizContents></QuizContents> */}
      </QuizBody>
      <SignCorrect />
    </>
  );
}

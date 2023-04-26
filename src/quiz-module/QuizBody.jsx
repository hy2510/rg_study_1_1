export default function QuizBody({ children, ...props }) {
  return (
    <div id="quiz-body">
      <div className="page-bg">
        <div className="bg-items">
          <div className="page-body">
            <div className="step-title">
              <span className="step">STEP {props.step}</span>
              {props.quizType}
            </div>
            <div className="body-sort">
              <div className="body-contents">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuizContentsTop({ children }) {
  return <div className="quiz-contents-top">{children}</div>;
}

export function QuizContents({ children }) {
  return <div className="quiz-contents">{children}</div>;
}

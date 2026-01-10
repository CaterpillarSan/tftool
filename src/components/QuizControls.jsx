export default function QuizControls({ onCheckAnswers, onReset, showCorrect, correctCount, totalCells }) {
  return (
    <div className="quiz-controls">
      <button onClick={onCheckAnswers} className="btn-check">
        答え合わせ
      </button>
      <button onClick={onReset} className="btn-reset">
        リセット
      </button>
      {showCorrect && (
        <div className="score">
          正解: {correctCount} / {totalCells} ({Math.round(correctCount / totalCells * 100)}%)
        </div>
      )}
    </div>
  );
}

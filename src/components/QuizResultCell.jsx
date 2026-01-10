import { getItemIcon } from '../utils/itemUtils';

export default function QuizResultCell({ correctItem, userAnswer, isCorrect, allItems }) {
  const userAnswerItem = allItems.find(i => i.id === userAnswer);

  return (
    <div className="result-cell">
      <img
        src={getItemIcon(correctItem.icon)}
        alt={correctItem.name}
        className="result-icon"
      />
      <span className="item-tooltip">{correctItem.name}</span>
      {userAnswer && !isCorrect && userAnswerItem && (
        <div className="user-answer">
          <img
            src={getItemIcon(userAnswerItem.icon)}
            alt="あなたの回答"
            className="wrong-icon"
          />
          <span className="item-tooltip wrong">
            {userAnswerItem.name}
          </span>
        </div>
      )}
    </div>
  );
}

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { regionTraits, classTraits, uniqueTraits, teamupTraits, allTraits } from '../data/traits';
import { shuffleArray } from '../utils/itemUtils';
import TraitSelect from '../components/TraitSelect';
import './EmblemQuiz.css';

const baseTraits = [...regionTraits, ...classTraits];
const extraTraits = [...uniqueTraits, ...teamupTraits];

export default function EmblemQuiz() {
  const [answers, setAnswers] = useState({});
  const [showCorrect, setShowCorrect] = useState(false);
  const [includeUnique, setIncludeUnique] = useState(false);
  const [shuffledBase] = useState(() => shuffleArray([...baseTraits]));
  const [shuffledExtra] = useState(() => shuffleArray([...extraTraits]));

  const quizTraits = useMemo(
    () => includeUnique ? [...shuffledBase, ...shuffledExtra] : shuffledBase,
    [includeUnique, shuffledBase, shuffledExtra]
  );

  const selectableTraits = includeUnique ? allTraits : baseTraits;

  const handleAnswerChange = (traitId, answerId) => {
    setAnswers(prev => ({ ...prev, [traitId]: answerId }));
  };

  const selectedTraitIds = useMemo(
    () => [...new Set(Object.values(answers).filter(Boolean))],
    [answers]
  );

  const correctCount = useMemo(
    () => Object.entries(answers).filter(([traitId, answerId]) => traitId === answerId).length,
    [answers]
  );

  const handleToggleUnique = () => {
    setIncludeUnique(prev => !prev);
    setAnswers({});
    setShowCorrect(false);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowCorrect(false);
  };

  return (
    <div className="emblem-quiz">
      <Link to="/" className="back-link">&larr; トップに戻る</Link>
      <h1>TFT Set 16 紋章クイズ</h1>
      <p className="emblem-description">
        特性アイコンを見て、正しい特性名を選んでください。
      </p>

      <div className="emblem-options">
        <label className="unique-toggle">
          <input
            type="checkbox"
            checked={includeUnique}
            onChange={handleToggleUnique}
          />
          固有特性・チームアップを含める
        </label>
      </div>

      <div className="emblem-controls">
        <button className="btn-check" onClick={() => setShowCorrect(true)} disabled={showCorrect}>
          答え合わせ
        </button>
        <button className="btn-reset" onClick={resetQuiz}>
          リセット
        </button>
        {showCorrect && (
          <span className="score">{correctCount} / {quizTraits.length}</span>
        )}
      </div>

      <div className="emblem-grid">
        {quizTraits.map(trait => {
          const userAnswer = answers[trait.id];
          const isCorrect = userAnswer === trait.id;

          return (
            <div
              key={trait.id}
              className={`emblem-card ${showCorrect ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            >
              <img src={trait.icon} alt="" className="emblem-icon" />
              {showCorrect ? (
                <div className="emblem-result">
                  <span className="correct-name">{trait.name}</span>
                  {!isCorrect && userAnswer && (
                    <span className="wrong-answer">
                      {allTraits.find(t => t.id === userAnswer)?.name}
                    </span>
                  )}
                </div>
              ) : (
                <TraitSelect
                  value={userAnswer || ''}
                  onChange={(id) => handleAnswerChange(trait.id, id)}
                  traits={selectableTraits}
                  selectedTraitIds={selectedTraitIds}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

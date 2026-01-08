import { useState, useRef, useEffect } from 'react';
import { baseItems, combinedItems } from '../data/items';
import './ItemQuiz.css';

// アイコンのインポート関数
const getItemIcon = (iconName) => {
  try {
    return new URL(`../assets/items/${iconName}`, import.meta.url).href;
  } catch {
    return null;
  }
};

// 検索可能なセレクトボックスコンポーネント
function SearchableSelect({ value, onChange, items, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const filteredItems = items.filter(item => {
    const searchLower = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchLower) ||
      (item.hiragana && item.hiragana.includes(searchLower)) ||
      (item.romaji && item.romaji.toLowerCase().includes(searchLower))
    );
  });

  const selectedItem = items.find(item => item.id === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="searchable-select" ref={dropdownRef}>
      <div
        className="select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? (
          <div className="selected-item">
            <img src={getItemIcon(selectedItem.icon)} alt={selectedItem.name} />
            <span>{selectedItem.name}</span>
          </div>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}
      </div>

      {isOpen && (
        <div className="select-dropdown">
          <input
            type="text"
            className="search-input"
            placeholder="検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <div className="options-list">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className={`option ${value === item.id ? 'selected' : ''}`}
                onClick={() => {
                  onChange(item.id);
                  setIsOpen(false);
                  setSearch('');
                }}
              >
                <img src={getItemIcon(item.icon)} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ItemQuiz() {
  // 各セルの回答を保存する状態（9x9のグリッド）
  const [answers, setAnswers] = useState({});
  const [showCorrect, setShowCorrect] = useState(false);

  const handleAnswerChange = (row, col, itemId) => {
    setAnswers({
      ...answers,
      [`${row}-${col}`]: itemId
    });
  };

  const checkAnswers = () => {
    setShowCorrect(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowCorrect(false);
  };

  const getCorrectItem = (row, col) => {
    return combinedItems[`${row}-${col}`];
  };

  const isCorrect = (row, col) => {
    const correctItem = getCorrectItem(row, col);
    return answers[`${row}-${col}`] === correctItem?.id;
  };

  // 全ての合成アイテムのリスト（セレクトボックス用）
  const allCombinedItemsList = Object.values(combinedItems).reduce((acc, item) => {
    if (!acc.find(i => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  // 正解数を計算
  const correctCount = Object.keys(answers).filter(key => {
    const [row, col] = key.split('-').map(Number);
    return isCorrect(row, col);
  }).length;

  const totalCells = 8 * 8;

  return (
    <div className="item-quiz">
      <h1>TFT Set 16 アイテム構成表クイズ</h1>
      <p className="description">
        基本アイテムの組み合わせから作られる合成アイテムを当ててください。
      </p>

      <div className="quiz-controls">
        <button onClick={checkAnswers} className="btn-check">
          答え合わせ
        </button>
        <button onClick={resetQuiz} className="btn-reset">
          リセット
        </button>
        {showCorrect && (
          <div className="score">
            正解: {correctCount} / {totalCells} ({Math.round(correctCount / totalCells * 100)}%)
          </div>
        )}
      </div>

      <div className="items-table-container">
        <table className="items-table">
          <thead>
            <tr>
              <th></th>
              {baseItems.map(item => (
                <th key={item.id}>
                  <div className="base-item">
                    <img src={getItemIcon(item.icon)} alt={item.name} title={item.name} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {baseItems.map((rowItem, rowIndex) => (
              <tr key={rowItem.id}>
                <td className="row-header">
                  <div className="base-item">
                    <img src={getItemIcon(rowItem.icon)} alt={rowItem.name} title={rowItem.name} />
                  </div>
                </td>
                {baseItems.map((colItem, colIndex) => {
                  const cellKey = `${rowIndex}-${colIndex}`;
                  const correctItem = getCorrectItem(rowIndex, colIndex);
                  const userAnswer = answers[cellKey];
                  const isAnswerCorrect = isCorrect(rowIndex, colIndex);

                  return (
                    <td key={colIndex} className={showCorrect ? (isAnswerCorrect ? 'correct' : userAnswer ? 'incorrect' : '') : ''}>
                      {showCorrect && correctItem ? (
                        <div className="result-cell">
                          <img
                            src={getItemIcon(correctItem.icon)}
                            alt={correctItem.name}
                            title={correctItem.name}
                            className="result-icon"
                          />
                          {userAnswer && !isAnswerCorrect && (
                            <div className="user-answer">
                              {allCombinedItemsList.find(i => i.id === userAnswer) && (
                                <img
                                  src={getItemIcon(allCombinedItemsList.find(i => i.id === userAnswer).icon)}
                                  alt="あなたの回答"
                                  title="あなたの回答"
                                  className="wrong-icon"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <SearchableSelect
                          value={answers[cellKey] || ''}
                          onChange={(itemId) => handleAnswerChange(rowIndex, colIndex, itemId)}
                          items={allCombinedItemsList}
                          placeholder="選択..."
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

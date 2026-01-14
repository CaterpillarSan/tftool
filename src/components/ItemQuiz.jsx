import { useState, useMemo } from 'react';
import { baseItems, combinedItems, getCodeForPair, codeToItemPairMap } from '../data/items';
import { shuffleArray, getItemIcon } from '../utils/itemUtils';
import SearchableSelect from './SearchableSelect';
import QuizControls from './QuizControls';
import QuizResultCell from './QuizResultCell';
import './ItemQuiz.css';

export default function ItemQuiz() {
  // 各セルの回答を保存する状態（1文字コードをキーとする）
  // 例: { 'a': 'deathblade', 'b': 'giantslayer', ... }
  const [answers, setAnswers] = useState({});
  const [showCorrect, setShowCorrect] = useState(false);

  // 行と列の表示順序（シャッフルされたインデックス配列）
  // 行と列で同じ順序を使用するため、1つの配列のみ保持
  const [shuffledOrder, setShuffledOrder] = useState(() =>
    shuffleArray([...Array(baseItems.length).keys()])
  );

  // シャッフルされた順序に基づいて表示用のbaseItemsを取得
  const displayItems = useMemo(() =>
    shuffledOrder.map(index => ({ ...baseItems[index], originalIndex: index })),
    [shuffledOrder]
  );

  const handleAnswerChange = (originalRowIndex, originalColIndex, itemId) => {
    // 1文字コードを取得（正規化されたペアに対応）
    const code = getCodeForPair(originalRowIndex, originalColIndex);

    setAnswers(prev => ({
      ...prev,
      [code]: itemId
    }));
  };

  const checkAnswers = () => {
    setShowCorrect(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowCorrect(false);
    // 新しいシャッフル順序を生成
    setShuffledOrder(shuffleArray([...Array(baseItems.length).keys()]));
  };

  const getCorrectItem = (originalRowIndex, originalColIndex) => {
    const code = getCodeForPair(originalRowIndex, originalColIndex);
    return combinedItems[code];
  };

  const isCorrect = (originalRowIndex, originalColIndex) => {
    const correctItem = getCorrectItem(originalRowIndex, originalColIndex);
    const code = getCodeForPair(originalRowIndex, originalColIndex);
    return answers[code] === correctItem?.id;
  };

  // 全ての合成アイテムのリスト（セレクトボックス用）
  const allCombinedItemsList = Object.values(combinedItems).reduce((acc, item) => {
    if (!acc.find(i => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  // 選択済みアイテムIDのリスト（重複除外）
  const selectedItemIds = [...new Set(Object.values(answers).filter(Boolean))];

  // 正解数を計算（1文字コードをキーとしているため、自動的に重複なし）
  const correctCount = Object.keys(answers).filter(code => {
    // codeから元のペアを逆算して正解を確認
    const pairKey = codeToItemPairMap[code];
    if (!pairKey) return false;
    const [row, col] = pairKey.split('-').map(Number);
    const correctItem = getCorrectItem(row, col);
    return answers[code] === correctItem?.id;
  }).length;

  // 重複を除外した総セル数（対角線+上三角のみ）
  // 8x8グリッドで row <= col のセル数: 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36
  const totalCells = (baseItems.length * (baseItems.length + 1)) / 2;

  return (
    <div className="item-quiz">
      <h1>TFT Set 16 アイテム構成表クイズ</h1>
      <p className="description">
        基本アイテムの組み合わせから作られる合成アイテムを当ててください。
      </p>

      <QuizControls
        onCheckAnswers={checkAnswers}
        onReset={resetQuiz}
        showCorrect={showCorrect}
        correctCount={correctCount}
        totalCells={totalCells}
      />

      <div className="items-table-container">
        <table className="items-table">
          <thead>
            <tr>
              <th></th>
              {displayItems.map(item => (
                <th key={item.id}>
                  <div className="base-item">
                    <img src={getItemIcon(item.icon)} alt={item.name} title={item.name} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayItems.map((rowItem) => (
              <tr key={rowItem.id}>
                <td className="row-header">
                  <div className="base-item">
                    <img src={getItemIcon(rowItem.icon)} alt={rowItem.name} title={rowItem.name} />
                  </div>
                </td>
                {displayItems.map((colItem) => {
                  // 元のインデックスを使用して合成アイテムを取得
                  const originalRowIndex = rowItem.originalIndex;
                  const originalColIndex = colItem.originalIndex;
                  const code = getCodeForPair(originalRowIndex, originalColIndex);
                  const correctItem = getCorrectItem(originalRowIndex, originalColIndex);
                  const userAnswer = answers[code];
                  const isAnswerCorrect = isCorrect(originalRowIndex, originalColIndex);

                  return (
                    <td key={colItem.id} className={showCorrect ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}>
                      {showCorrect && correctItem ? (
                        <QuizResultCell
                          correctItem={correctItem}
                          userAnswer={userAnswer}
                          isCorrect={isAnswerCorrect}
                          allItems={allCombinedItemsList}
                        />
                      ) : (
                        <SearchableSelect
                          value={answers[code] || ''}
                          onChange={(itemId) => handleAnswerChange(originalRowIndex, originalColIndex, itemId)}
                          items={allCombinedItemsList}
                          placeholder="?"
                          selectedItemIds={selectedItemIds}
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

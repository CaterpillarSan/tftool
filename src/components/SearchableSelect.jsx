import { useState, useRef, useEffect } from 'react';
import { getItemIcon } from '../utils/itemUtils';

export default function SearchableSelect({ value, onChange, items, placeholder, selectedItemIds = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  // フィルタリング後、あいうえお順でソートし、選択済みアイテムは後ろに配置
  const filteredItems = items
    .filter(item => {
      const searchLower = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        (item.hiragana && item.hiragana.includes(searchLower)) ||
        (item.romaji && item.romaji.toLowerCase().includes(searchLower))
      );
    })
    .sort((a, b) => {
      const aSelected = selectedItemIds.includes(a.id);
      const bSelected = selectedItemIds.includes(b.id);

      // 選択済みアイテムは後ろに
      if (aSelected !== bSelected) {
        return aSelected ? 1 : -1;
      }

      // 同じグループ内ではあいうえお順（hiraganaでソート）
      const aHiragana = a.hiragana || '';
      const bHiragana = b.hiragana || '';
      return aHiragana.localeCompare(bHiragana, 'ja');
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
            {filteredItems.map(item => {
              const isAlreadySelected = selectedItemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`option ${value === item.id ? 'selected' : ''} ${isAlreadySelected ? 'already-selected' : ''}`}
                  onClick={() => {
                    onChange(item.id);
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  <img src={getItemIcon(item.icon)} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

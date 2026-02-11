import { useState, useRef, useEffect } from 'react';

export default function TraitSelect({ value, onChange, traits, selectedTraitIds = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const filteredTraits = traits
    .filter(trait => {
      const s = search.toLowerCase();
      return (
        trait.name.toLowerCase().includes(s) ||
        trait.hiragana.includes(s) ||
        trait.romaji.toLowerCase().includes(s)
      );
    })
    .sort((a, b) => {
      const aSelected = selectedTraitIds.includes(a.id);
      const bSelected = selectedTraitIds.includes(b.id);
      if (aSelected !== bSelected) return aSelected ? 1 : -1;
      return a.hiragana.localeCompare(b.hiragana, 'ja');
    });

  const selectedTrait = traits.find(t => t.id === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="trait-select" ref={dropdownRef}>
      <div className="trait-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selectedTrait ? (
          <span className="trait-selected-name">{selectedTrait.name}</span>
        ) : (
          <span className="trait-placeholder">?</span>
        )}
      </div>

      {isOpen && (
        <div className="trait-select-dropdown">
          <input
            type="text"
            className="trait-search-input"
            placeholder="検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <div className="trait-options-list">
            {filteredTraits.map(trait => {
              const isAlreadySelected = selectedTraitIds.includes(trait.id);
              return (
                <div
                  key={trait.id}
                  className={`trait-option ${value === trait.id ? 'selected' : ''} ${isAlreadySelected ? 'already-selected' : ''}`}
                  onClick={() => {
                    onChange(trait.id);
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  {trait.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

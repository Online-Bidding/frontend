import { useState } from 'react';

const AreaSelector = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [suggestions, setSuggestions] = useState([
    'New York', 'London', 'Tokyo', 
    'Paris', 'Dubai', 'Singapore'
  ]);

  const handleAddArea = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      if (!selectedAreas.includes(inputValue.trim())) {
        setSelectedAreas([...selectedAreas, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleRemoveArea = (areaToRemove) => {
    setSelectedAreas(selectedAreas.filter(area => area !== areaToRemove));
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedAreas.includes(suggestion)) {
      setSelectedAreas([...selectedAreas, suggestion]);
    }
    setInputValue('');
  };

  return (
    <div className="w-full max-w-md">
      {/* Input with label */}
      <div className="mb-2">
        <div className="relative mt-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddArea}
            placeholder="Type and press Enter"
            className="w-[400px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Selected areas tags */}
      {selectedAreas.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {selectedAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm"
            >
              {area}
              <button
                type="button"
                onClick={() => handleRemoveArea(area)}
                className="ml-1.5 text-indigo-600 hover:text-indigo-900"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Suggestions dropdown */}
      {inputValue && (
        <div className="mt-1 border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1 max-h-60 overflow-auto">
            {suggestions
              .filter(suggestion =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AreaSelector;
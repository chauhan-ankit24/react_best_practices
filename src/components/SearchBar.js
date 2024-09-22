import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/items/itemsSlice';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchTerm = useSelector((state) => state.items.searchTerm);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  // Load previous searches from local storage when component mounts
  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('previousSearches')) || [];
    setPreviousSearches(storedSearches);
  }, []);

  // Handle input change and update search term
  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setInputValue(newSearchTerm);
    dispatch(setSearchTerm(newSearchTerm));

    // Show dropdown when the input value is not empty
    if (newSearchTerm !== '') {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Save the search term
  const handleSearch = () => {
    if (inputValue && !previousSearches.includes(inputValue)) {
      const updatedSearches = [inputValue, ...previousSearches];
      setPreviousSearches(updatedSearches.slice(0, 5)); // Keep up to 5 recent searches
      localStorage.setItem('previousSearches', JSON.stringify(updatedSearches.slice(0, 5)));
    }
    setShowDropdown(false);
  };

  // Handle Enter key press for saving the search term
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectPreviousSearch = (search) => {
    setInputValue(search);
    dispatch(setSearchTerm(search));
    setShowDropdown(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleSearch}
        onKeyDown={handleKeyDown}  // Add this to capture Enter key presses
        className="w-full p-2 border rounded shadow-sm"
        placeholder="Search items..."
        onFocus={() => setShowDropdown(true)}
      />
      
      {/* Dropdown of previous searches */}
      {showDropdown && previousSearches.length > 0 && (
        <ul
          className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 shadow-lg max-h-40 overflow-y-auto z-10"
          ref={dropdownRef}
        >
          {previousSearches.map((search, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              onClick={() => handleSelectPreviousSearch(search)}
            >
              {search}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

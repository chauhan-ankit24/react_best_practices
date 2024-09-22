import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/items/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onChange={handleSearchChange}
    />
  );
};

export default React.memo(SearchBar);

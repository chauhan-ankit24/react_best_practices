import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../features/items/itemsSlice';
import { debounce } from 'lodash'; // Import debounce from lodash

const SearchBar = () => {
    const renderCount = useRef(0); // Counter to track renders
    renderCount.current++;

    const dispatch = useDispatch();

    // Debounced version of the search function
    const debouncedSearch = useCallback(
        debounce((value) => {
            dispatch(setSearchTerm(value));
        }, 500), // 500ms delay for debounce
        [dispatch]
    );

    const handleSearchChange = (e) => {
        debouncedSearch(e.target.value);
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <input
                type="text"
                placeholder="Search items..."
                className="w-4/6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleSearchChange}
            />
            <p className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded ml-4">
                SearchBar Renders: {renderCount.current}
            </p>
        </div>
    );
};

export default React.memo(SearchBar);

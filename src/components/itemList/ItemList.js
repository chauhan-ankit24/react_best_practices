import React, { useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../item/Item';
import { setCurrentPage } from '../../features/items/itemsSlice';
import PaginationControls from '../paginationControls/PaginationControls';
import useFilteredItems from '../../hooks/useFilteredItems';

const ItemList = () => {
    // Extracting necessary state from the Redux store
    const { items, searchTerm, currentPage, pageSize } = useSelector((state) => state.items);
    const dispatch = useDispatch();

    // Render count for ItemList to track re-renders
    const renderCount = useRef(0);
    renderCount.current += 1;

    // Use custom hook to get filtered items based on search term
    const filteredItems = useFilteredItems(items, searchTerm);

    // Calculate total number of pages based on filtered items and page size
    const totalPages = Math.ceil(filteredItems.length / pageSize);

    // Memoize paginated items to avoid unnecessary recalculations
    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredItems.slice(startIndex, endIndex);
    }, [filteredItems, currentPage, pageSize]);

    // Handler for moving to the previous page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    // Handler for moving to the next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                {/* Displaying the number of items shown and total filtered items */}
                <p className="text-gray-600">
                    Showing {paginatedItems.length} of {filteredItems.length} items
                </p>
                {/* Displaying the render count for debugging purposes */}
                <p className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
                    ItemList Renders: {renderCount.current}
                </p>

                {/* Pagination controls for navigating between pages */}
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePreviousPage={handlePreviousPage}
                    handleNextPage={handleNextPage}
                />
            </div>

            {/* Rendering the list of paginated items */}
            <ul className="grid grid-cols-1 gap-4">
                {paginatedItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

// Using React.memo to prevent unnecessary re-renders
export default React.memo(ItemList);

import React, { useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { setCurrentPage } from '../features/items/itemsSlice';
import PaginationControls from './PaginationControls';

const ItemList = () => {
  const { items, searchTerm, currentPage, pageSize } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  // Render count for ItemList
  const renderCount = useRef(0);
  renderCount.current += 1;

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Calculate pagination data
  const totalPages = Math.ceil(filteredItems.length / pageSize);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage, pageSize]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Showing {paginatedItems.length} of {filteredItems.length} items
        </p>
        <p className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
          ItemList Renders: {renderCount.current}
        </p>

        {/* Memoized PaginationControls */}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </div>

      {/* Item List */}
      <ul className="grid grid-cols-1 gap-4">
        {paginatedItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

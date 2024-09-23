import React, { memo, useRef } from 'react';

// Memoized component to prevent unnecessary re-renders
const Item = memo(({ item }) => {
  // useRef to keep track of render count
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    // List item with styling and hover effect
    <li className="flex justify-between items-center p-4 bg-white border rounded shadow hover:bg-gray-50 transition-all duration-200">
      <span className="text-lg font-medium text-gray-800">
        {item} {/* Display the item */}
      </span>
      <p className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
        Renders: {renderCount.current} {/* Display the render count */}
      </p>
    </li>
  );
});

export default Item;

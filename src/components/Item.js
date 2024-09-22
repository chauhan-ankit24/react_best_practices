import React, { memo, useRef } from 'react';

const Item = memo(({ item }) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <li className="flex justify-between items-center p-4 bg-white border rounded shadow hover:bg-gray-50 transition-all duration-200">
     <span className="text-lg font-medium text-gray-800">
    {item}
  </span>
      <p className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
        Renders: {renderCount.current}
      </p>
    </li>
  );
});

export default Item;

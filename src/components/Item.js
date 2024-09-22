import React, { useRef } from 'react';

const Item = React.memo(({ item }) => {
  const renderCount = useRef(0); // Counter to track renders
  renderCount.current++;

  return (
    <li className="py-2 px-4 border-b last:border-none flex justify-between items-center text-gray-700">
      <span>{item}</span>
      <p className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded"> {/* Styled */}
        Renders: {renderCount.current}
      </p>
    </li>
  );
});

export default Item;

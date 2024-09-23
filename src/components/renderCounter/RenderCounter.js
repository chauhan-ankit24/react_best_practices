import React, { useRef } from 'react';

const RenderCounter = () => {
  const renderCount = useRef(1); // Initialize render count to 1

  // Increment render count on every render
  renderCount.current += 1;

  return (
    <div className="bg-blue-100 text-blue-700 rounded-md p-2 mb-4 text-center">
      <p>Page/Global Render Counter: {renderCount.current}</p>
    </div>
  );
};

export default RenderCounter;

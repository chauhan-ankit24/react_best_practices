import React from 'react';

const Item = React.memo(({ item }) => {
  return (
    <li className="py-2 px-4 border-b last:border-none text-gray-700">
      {item}
    </li>
  );
});

export default Item;

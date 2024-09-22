import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../features/items/itemsSlice';
import Item from './Item';

const ItemList = () => {
  const filteredItems = useSelector(selectFilteredItems);

  return (
    <ul className="bg-white shadow-md rounded-md p-4">
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default React.memo(ItemList);
